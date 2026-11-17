/* "Ask Otto" question box shared by the Quest apps.
 * Questions are saved to Supabase (questions-setup.sql). Otto, the owner's
 * agent on their Mac mini, answers them (see OTTO.md); answers show up here.
 */
(() => {
  "use strict";
  const cfg = window.QUEST_SYNC_CONFIG || {};
  const enabled = Boolean(cfg.url && cfg.key);

  async function rpc(name, body) {
    const headers = { "Content-Type": "application/json", apikey: cfg.key };
    if (cfg.key.startsWith("eyJ")) headers.Authorization = `Bearer ${cfg.key}`;
    const res = await fetch(`${cfg.url.replace(/\/$/, "")}/rest/v1/rpc/${name}`, { method: "POST", headers, body: JSON.stringify(body) });
    if (!res.ok) {
      if (res.status === 404) throw new Error("The questions setup script hasn't been run in Supabase yet.");
      throw new Error(`Couldn't reach the question box (${res.status}).`);
    }
    return res.json();
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

  function injectStyles() {
    if (document.getElementById("ask-otto-css")) return;
    const css = document.createElement("style");
    css.id = "ask-otto-css";
    css.textContent = `
.ask{margin-top:14px;padding:14px;border:2px solid #e5e5e0;border-radius:14px;background:#fbfbf8;text-align:left}
.ask h4{margin:0 0 4px;font-size:1rem}.ask .ask-sub{margin:0 0 10px;color:#777;font-size:.88rem;line-height:1.4}
.ask textarea{width:100%;min-height:84px;padding:10px 12px;border:2px solid #e5e5e0;border-radius:12px;font:inherit;resize:vertical;box-sizing:border-box}
.ask button.ask-send{width:100%;min-height:44px;margin-top:8px;border:0;border-radius:12px;background:#1cb0f6;color:#fff;font:inherit;font-weight:800;cursor:pointer;box-shadow:0 3px 0 #1899d6}
.ask button.ask-send:disabled{opacity:.6}
.ask-msg{min-height:1.1em;margin:6px 0 0;font-size:.85rem;font-weight:700}.ask-msg.err{color:#c0392b}.ask-msg.ok{color:#46a302}
.ask-list{display:grid;gap:10px;margin-top:12px}
.ask-item{padding:10px 12px;border-radius:12px;background:#fff;border:1px solid #e5e5e0;line-height:1.45}
.ask-q{margin:0;font-weight:700}.ask-a{margin:8px 0 0;white-space:pre-line}.ask-wait{margin:6px 0 0;color:#999;font-size:.85rem}
.ask-a b{color:#1899d6}
`;
    document.head.append(css);
  }

  window.AskOtto = {
    enabled,
    /**
     * Returns an element with the question box and that lesson's past Q&A.
     * opts: { person, app, day, lesson }  (day: e.g. "Day 12" or a module title)
     */
    box(opts) {
      if (!enabled) return null;
      injectStyles();
      const person = String(opts.person || "Avian");
      const input = h("textarea", { placeholder: "Stuck on something from this lesson? Ask it here.", maxlength: "2000" });
      const msg = h("p", { class: "ask-msg" });
      const list = h("div", { class: "ask-list" });
      let timer = null;

      async function refresh() {
        try {
          const rows = await rpc("get_questions", { p_person: person, p_app: opts.app });
          const mine = rows.filter((r) => r.day === opts.day);
          list.replaceChildren(...mine.map((r) => h("div", { class: "ask-item" },
            h("p", { class: "ask-q" }, `Q: ${r.question}`),
            r.answer ? h("p", { class: "ask-a" }, h("b", {}, "Otto: "), r.answer) : h("p", { class: "ask-wait" }, "⏳ Waiting for Otto…"))));
          clearTimeout(timer);
          if (mine.some((r) => !r.answer) && document.body.contains(wrap)) timer = setTimeout(refresh, 20000);
        } catch (e) {
          msg.className = "ask-msg err"; msg.textContent = e.message;
        }
      }

      const send = h("button", { class: "ask-send", type: "button", onclick: async () => {
        const q = input.value.trim();
        if (!q) return;
        send.disabled = true; msg.className = "ask-msg"; msg.textContent = "Sending…";
        try {
          await rpc("ask_question", { p_person: person, p_app: opts.app, p_day: opts.day, p_lesson: opts.lesson || "", p_question: q });
          input.value = ""; msg.className = "ask-msg ok"; msg.textContent = "Sent! Otto will answer here — check back soon.";
          await refresh();
        } catch (e) {
          msg.className = "ask-msg err"; msg.textContent = e.message;
        } finally {
          send.disabled = false;
        }
      } }, "Ask Otto");

      const wrap = h("div", { class: "ask" },
        h("h4", {}, "💬 Questions about this lesson?"),
        h("p", { class: "ask-sub" }, `Asking as ${person}. Otto answers as soon as it picks up your question; the answer appears here on all your devices.`),
        input, send, msg, list);
      refresh();
      return wrap;
    },
  };
})();
