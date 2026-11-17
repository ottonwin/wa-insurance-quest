/* Cloud progress sync shared by Insurance Quest, Indie Quest and Trade Quest.
 *
 * Each person has a private sync code (like ABCD-EFGH-JKLM-NPQR-STUV). The same
 * code is shared by all three apps on a device (they live on the same site),
 * and entering it on another device pulls that person's progress there.
 * Progress from two devices is merged, never thrown away: finished lessons
 * from either device are kept, XP keeps the higher total, and everything else
 * comes from whichever device saved most recently.
 */
(() => {
  "use strict";

  const cfg = window.QUEST_SYNC_CONFIG || {};
  const enabled = Boolean(cfg.url && cfg.key);
  const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O/1/I
  const UNION_KEYS = ["completed", "mastered", "moduleComplete", "missionReads"];

  const codeKey = (slot) => `questSyncCode:${slot}`;
  const getCode = (slot) => { try { return localStorage.getItem(codeKey(slot)) || ""; } catch { return ""; } };
  const setCode = (slot, code) => { try { code ? localStorage.setItem(codeKey(slot), code) : localStorage.removeItem(codeKey(slot)); } catch {} };

  function newCode() {
    const bytes = new Uint8Array(20);
    crypto.getRandomValues(bytes);
    const chars = [...bytes].map((b) => CODE_ALPHABET[b % CODE_ALPHABET.length]).join("");
    return chars.match(/.{5}/g).join("-");
  }

  function normalizeCode(raw) {
    const clean = String(raw || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (clean.length !== 20 || [...clean].some((c) => !CODE_ALPHABET.includes(c))) return "";
    return clean.match(/.{5}/g).join("-");
  }

  async function rpc(name, body) {
    const headers = { "Content-Type": "application/json", apikey: cfg.key };
    if (cfg.key.startsWith("eyJ")) headers.Authorization = `Bearer ${cfg.key}`; // legacy anon key
    const res = await fetch(`${cfg.url.replace(/\/$/, "")}/rest/v1/rpc/${name}`, {
      method: "POST", headers, body: JSON.stringify(body),
    });
    if (!res.ok) {
      if (res.status === 404) throw new Error("The database setup script hasn't been run yet (Supabase → SQL Editor).");
      if (res.status === 401 || res.status === 403) throw new Error("The sync key was rejected — check sync-config.js.");
      if (res.status === 540 || res.status === 503) throw new Error("The database is paused — tap Restore in Supabase.");
      throw new Error(`Sync failed (${res.status}).`);
    }
    const text = await res.text();
    return text ? JSON.parse(text) : null;
  }

  // Combine two saved states without losing progress from either device.
  function merge(local, remote) {
    if (!remote) return local;
    if (!local) return remote;
    const newer = (remote._savedAt || 0) > (local._savedAt || 0) ? remote : local;
    const older = newer === remote ? local : remote;
    const out = { ...older, ...newer };
    for (const k of UNION_KEYS) {
      const a = older[k], b = newer[k];
      if (!a || !b || typeof a !== "object" || typeof b !== "object") continue;
      const m = { ...a, ...b };
      for (const id of Object.keys(a)) {
        if (!(id in b)) continue;
        const x = a[id], y = b[id];
        if (x && y && typeof x === "object" && typeof y === "object") {
          const best = { ...x, ...y };
          for (const f of Object.keys(best)) {
            if (typeof x[f] === "number" && typeof y[f] === "number") best[f] = Math.max(x[f], y[f]);
          }
          m[id] = best;
        } else {
          m[id] = y || x;
        }
      }
      out[k] = m;
    }
    if (typeof local.xp === "number" && typeof remote.xp === "number") out.xp = Math.max(local.xp, remote.xp);
    if (typeof local.bestMock === "number" || typeof remote.bestMock === "number") {
      out.bestMock = Math.max(local.bestMock || 0, remote.bestMock || 0) || newer.bestMock || null;
    }
    out._savedAt = Math.max(local._savedAt || 0, remote._savedAt || 0);
    return out;
  }

  const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  /* ---------- UI ---------- */

  function injectStyles() {
    if (document.getElementById("quest-sync-css")) return;
    const css = document.createElement("style");
    css.id = "quest-sync-css";
    css.textContent = `
.qs-btn{display:inline-flex;align-items:center;gap:4px;min-height:36px;padding:6px 10px;border:2px solid #e5e5e0;border-radius:999px;background:#fff;color:#3c3c3c;font:inherit;font-size:.85rem;font-weight:800;cursor:pointer}
.qs-btn[data-state=ok]{border-color:#58cc02}.qs-btn[data-state=err]{border-color:#ff4b4b}
.qs-overlay{position:fixed;inset:0;z-index:50;display:grid;place-items:center;padding:16px;background:rgba(0,0,0,.35)}
.qs-card{width:min(420px,100%);max-height:90vh;overflow:auto;padding:20px;border-radius:16px;background:#fff;color:#3c3c3c;box-shadow:0 10px 40px rgba(0,0,0,.2);font-family:inherit}
.qs-card h3{margin:0 0 6px;font-size:1.15rem}.qs-card p{margin:0 0 12px;line-height:1.5;color:#555}
.qs-code{display:block;margin:8px 0 12px;padding:12px;border-radius:12px;background:#ddf4ff;color:#1899d6;font:800 1.05rem/1.3 ui-monospace,Menlo,monospace;letter-spacing:.04em;text-align:center;word-break:break-all}
.qs-row{display:grid;gap:8px;margin-bottom:12px}
.qs-card input{width:100%;min-height:46px;padding:0 12px;border:2px solid #e5e5e0;border-radius:12px;font:inherit;text-transform:uppercase}
.qs-card button.qs-a{width:100%;min-height:46px;border:0;border-radius:12px;font:inherit;font-weight:800;cursor:pointer}
.qs-primary{background:#58cc02;color:#fff}.qs-secondary{background:#ecece7;color:#3c3c3c}.qs-danger{background:#fff;color:#c0392b;border:2px solid #f3c4bf!important}
.qs-status{font-size:.85rem;color:#777}.qs-msg{min-height:1.2em;font-size:.9rem;font-weight:700}
.qs-msg.err{color:#c0392b}.qs-msg.ok{color:#46a302}
`;
    document.head.append(css);
  }

  function h(tag, attrs = {}, ...kids) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else if (k === "class") n.className = v;
      else n.setAttribute(k, v);
    }
    kids.flat().forEach((c) => c != null && n.append(c.nodeType ? c : document.createTextNode(c)));
    return n;
  }

  /* ---------- Public API ---------- */

  window.QuestSync = {
    enabled,
    merge,
    normalizeCode,

    /**
     * opts: {
     *   storeKey:  localStorage key this app saves progress under,
     *   slot:      which person on this device (0 = first/only person),
     *   who:       optional display name for that person,
     *   getState:  () => current progress object,
     *   applyState:(merged) => replace progress, save locally and re-render,
     *   mount:     element to put the ☁️ button in,
     * }
     * Returns { saved() } — call after every local save.
     */
    attach(opts) {
      const noop = { saved() {} };
      if (!enabled || !opts || !opts.mount) return noop;
      injectStyles();

      const remoteId = () => `${getCode(opts.slot)}:${opts.storeKey}`;
      let status = "idle"; // idle | syncing | ok | err | off
      let lastError = "";
      let lastSync = null;
      let pushTimer = null;
      let pushing = false;

      const btn = h("button", { class: "qs-btn", type: "button", title: "Sync progress across devices", onclick: () => openPanel() });
      opts.mount.append(btn);

      function setStatus(s, err) {
        status = s;
        if (err) lastError = err;
        if (s === "ok") lastSync = new Date();
        const label = !getCode(opts.slot) ? "☁️ Sync off" : s === "syncing" ? "☁️ Syncing…" : s === "err" ? "☁️ Offline" : "☁️ Synced";
        btn.textContent = label;
        btn.dataset.state = !getCode(opts.slot) ? "off" : s;
      }

      async function pull() {
        if (!getCode(opts.slot)) return setStatus("off");
        setStatus("syncing");
        try {
          const res = await rpc("get_progress", { p_id: remoteId() });
          const local = opts.getState();
          const merged = merge(local, res && res.data);
          if (!same(merged, local)) opts.applyState(merged);
          if (!res || !same(merged, res.data)) await rpc("put_progress", { p_id: remoteId(), p_data: merged });
          setStatus("ok");
        } catch (e) {
          setStatus("err", e.message);
        }
      }

      async function push() {
        if (!getCode(opts.slot) || pushing) return;
        pushing = true;
        setStatus("syncing");
        try {
          // Pull first so a save on this device never overwrites newer progress from another.
          const res = await rpc("get_progress", { p_id: remoteId() });
          const local = opts.getState();
          const merged = merge(local, res && res.data);
          if (!same(merged, local)) opts.applyState(merged);
          await rpc("put_progress", { p_id: remoteId(), p_data: merged });
          setStatus("ok");
        } catch (e) {
          setStatus("err", e.message);
        } finally {
          pushing = false;
        }
      }

      function openPanel() {
        const code = getCode(opts.slot);
        const msg = h("p", { class: "qs-msg" });
        const close = () => overlay.remove();
        const who = opts.who ? ` for ${opts.who}` : "";
        const input = h("input", { placeholder: "XXXXX-XXXXX-XXXXX-XXXXX", autocomplete: "off", autocapitalize: "characters", spellcheck: "false" });

        const useCode = async () => {
          const c = normalizeCode(input.value);
          if (!c) { msg.className = "qs-msg err"; msg.textContent = "That code doesn't look right. It's 20 letters and numbers."; return; }
          setCode(opts.slot, c);
          msg.className = "qs-msg"; msg.textContent = "Connecting…";
          await pull();
          if (status === "ok") { close(); } else { msg.className = "qs-msg err"; msg.textContent = `Couldn't reach the sync server. ${lastError}`; }
        };

        const body = code
          ? [
              h("h3", {}, `☁️ Sync is on${who}`),
              h("p", {}, "Your progress saves to the cloud automatically. To continue on another phone or computer, open this app there, tap ☁️ Sync, and enter this code:"),
              h("code", { class: "qs-code" }, code),
              h("div", { class: "qs-row" },
                h("button", { class: "qs-a qs-primary", type: "button", onclick: async () => {
                  try { await navigator.clipboard.writeText(code); msg.className = "qs-msg ok"; msg.textContent = "Code copied."; }
                  catch { msg.className = "qs-msg"; msg.textContent = "Select the code above and copy it."; }
                } }, "Copy code"),
                h("button", { class: "qs-a qs-secondary", type: "button", onclick: async () => { await pull(); msg.className = status === "ok" ? "qs-msg ok" : "qs-msg err"; msg.textContent = status === "ok" ? "Up to date." : `Couldn't sync. ${lastError}`; } }, "Sync now")),
              h("p", { class: "qs-status" }, lastSync ? `Last synced ${lastSync.toLocaleTimeString()}.` : status === "err" ? "Not synced yet — check your connection." : ""),
              h("p", {}, "Keep the code private — anyone with it can see and change this progress. Each person needs their own code."),
              h("button", { class: "qs-a qs-danger", type: "button", onclick: () => {
                if (!confirm("Stop syncing on this device? Your progress stays here and in the cloud.")) return;
                setCode(opts.slot, ""); setStatus("off"); close();
              } }, "Turn off sync on this device"),
            ]
          : [
              h("h3", {}, `☁️ Sync your progress${who}`),
              h("p", {}, "Turn on sync to save your progress to the cloud and pick it up on any phone or computer."),
              h("div", { class: "qs-row" },
                h("button", { class: "qs-a qs-primary", type: "button", onclick: async () => {
                  setCode(opts.slot, newCode()); msg.textContent = "Setting up…"; await pull(); close(); openPanel();
                } }, "Start syncing (first device)")),
              h("p", {}, "Already synced on another device? Enter that code here:"),
              h("div", { class: "qs-row" }, input,
                h("button", { class: "qs-a qs-secondary", type: "button", onclick: useCode }, "Use this code")),
            ];

        const overlay = h("div", { class: "qs-overlay", onclick: (e) => { if (e.target === overlay) close(); } },
          h("div", { class: "qs-card", role: "dialog", "aria-label": "Sync progress" }, ...body, msg,
            h("button", { class: "qs-a qs-secondary", type: "button", style: "margin-top:8px", onclick: close }, "Close")));
        document.body.append(overlay);
      }

      document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") pull(); });
      window.addEventListener("online", () => pull());
      setStatus(getCode(opts.slot) ? "idle" : "off");
      pull();

      return {
        saved() {
          if (!getCode(opts.slot)) return;
          clearTimeout(pushTimer);
          pushTimer = setTimeout(push, 1500);
        },
      };
    },
  };
})();
