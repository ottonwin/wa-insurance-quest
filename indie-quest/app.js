/* Indie Quest — 30 days from zero code to your first revenue-generating app. */
(() => {
  "use strict";

  const WEEKS = (window.COURSE_WEEKS || []).slice().sort((a, b) => a.week - b.week);
  const DAYS = WEEKS.flatMap((w) => w.days.map((d) => ({ ...d, week: w.week })));
  const TOTAL_DAYS = DAYS.length;
  const STORE_KEY = "indieQuestState-v1";

  const defaultState = () => ({
    xp: 0,
    streak: 0,
    lastActive: null,
    completed: {},   // day -> { stars, best } best = correct count on best run
    missed: [],      // [{ day, q }] question refs answered wrong, cleared when answered right in practice
  });

  let state = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return defaultState();
      return { ...defaultState(), ...JSON.parse(raw) };
    } catch {
      return defaultState();
    }
  }

  function saveState() {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  }

  function todayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  function touchStreak() {
    const today = todayKey();
    if (state.lastActive === today) return;
    if (state.lastActive) {
      const prev = new Date(state.lastActive + "T12:00:00");
      const diff = Math.round((new Date(today + "T12:00:00") - prev) / 86400000);
      state.streak = diff === 1 ? state.streak + 1 : 1;
    } else {
      state.streak = 1;
    }
    state.lastActive = today;
  }

  function checkStreakLapse() {
    if (!state.lastActive) return;
    const prev = new Date(state.lastActive + "T12:00:00");
    const diff = Math.round((new Date(todayKey() + "T12:00:00") - prev) / 86400000);
    if (diff > 1) {
      state.streak = 0;
      saveState();
    }
  }

  const completedCount = () => Object.keys(state.completed).length;
  const isDone = (day) => Boolean(state.completed[day]);
  const isUnlocked = (day) => day === 1 || isDone(day - 1);
  const currentDay = () => {
    for (const d of DAYS) if (!isDone(d.day)) return d.day;
    return null;
  };
  const dayData = (day) => DAYS.find((d) => d.day === day);

  function starsFor(correct, total) {
    if (correct >= total) return 3;
    if (correct / total >= 0.8) return 2;
    return 1;
  }

  const starStr = (n) => "★".repeat(n) + "☆".repeat(3 - n);

  /* ---------- DOM helpers ---------- */

  const $ = (sel) => document.querySelector(sel);

  function el(tag, attrs = {}, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") node.className = v;
      else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    }
    for (const child of children) {
      if (child == null) continue;
      node.append(child.nodeType ? child : document.createTextNode(child));
    }
    return node;
  }

  /* ---------- Header / hero ---------- */

  function renderHeader() {
    $("#xpValue").textContent = state.xp;
    $("#streakValue").textContent = state.streak;
    const pct = Math.round((completedCount() / TOTAL_DAYS) * 100);
    $("#overallPct").textContent = `${pct}%`;

    const cur = currentDay();
    const resumeBtn = $("#resumeBtn");
    if (cur === null) {
      $("#heroKicker").textContent = "Course complete";
      $("#heroTitle").textContent = "You did it. Now go launch. 🎉";
      $("#heroText").textContent = "All 30 days finished. Use Practice to keep weak spots sharp, and the Handbook as your reference while you build.";
      resumeBtn.textContent = "Practice weak spots";
      resumeBtn.onclick = () => switchTab("practice");
    } else {
      const d = dayData(cur);
      $("#heroKicker").textContent = `Day ${cur} of ${TOTAL_DAYS} · Week ${d.week}`;
      $("#heroTitle").textContent = d.title;
      $("#heroText").textContent = d.intro;
      resumeBtn.textContent = cur === 1 && completedCount() === 0 ? "Start Day 1" : `Continue Day ${cur}`;
      resumeBtn.onclick = () => openLesson(cur);
    }
  }

  /* ---------- Path ---------- */

  function renderPath() {
    const root = $("#pathView");
    root.innerHTML = "";
    const cur = currentDay();

    for (const week of WEEKS) {
      const banner = el("div", { class: `week-banner week-${week.week}` },
        el("div", {},
          el("p", { class: "week-num" }, `Week ${week.week}`),
          el("h3", {}, week.title),
          el("p", {}, week.goal)
        )
      );
      root.append(banner);

      const list = el("div", { class: "path-list" });
      for (const d of week.days) {
        const done = isDone(d.day);
        const unlocked = isUnlocked(d.day);
        const cls = done ? "done" : d.day === cur ? "current" : unlocked ? "current" : "locked";
        const stars = done ? starStr(state.completed[d.day].stars) : "";
        const node = el("button", {
            class: `path-node ${cls}`,
            type: "button",
            ...(unlocked ? {} : { disabled: "disabled" }),
            onclick: () => unlocked && openLesson(d.day),
          },
          el("span", { class: "node-circle" }, unlocked ? d.emoji : "🔒"),
          el("span", { class: "node-body" },
            el("b", {}, `Day ${d.day}: ${d.title}`),
            done
              ? el("span", { class: "node-stars" }, `${stars}  +${state.completed[d.day].best * 10} XP best`)
              : el("small", {}, unlocked ? `${d.cards.length} cards · ${d.quiz.length} questions` : "Complete the previous day to unlock")
          )
        );
        list.append(node);
      }
      root.append(list);
    }
  }

  /* ---------- Lesson flow ---------- */

  let lesson = null; // { day, stages, i, correct, missedThisRun }

  function openLesson(day) {
    const d = dayData(day);
    if (!d) return;
    const stages = [
      { kind: "intro" },
      ...d.cards.map((c, i) => ({ kind: "card", i })),
      { kind: "action" },
      ...d.quiz.map((q, i) => ({ kind: "quiz", i })),
      { kind: "result" },
    ];
    lesson = { day, d, stages, i: 0, correct: 0 };
    $("#homeView").classList.remove("active");
    $("#lessonView").classList.add("active");
    renderStage();
    window.scrollTo(0, 0);
  }

  function closeLesson() {
    lesson = null;
    $("#lessonView").classList.remove("active");
    $("#homeView").classList.add("active");
    renderAll();
    window.scrollTo(0, 0);
  }

  function nextStage() {
    lesson.i += 1;
    renderStage();
    window.scrollTo(0, 0);
  }

  function renderStage() {
    const root = $("#lessonView");
    root.innerHTML = "";
    const { d, stages, i } = lesson;
    const stage = stages[i];
    const pct = Math.round((i / (stages.length - 1)) * 100);

    root.append(
      el("div", { class: "lesson-top" },
        el("button", { class: "close-btn", type: "button", "aria-label": "Close lesson", onclick: closeLesson }, "✕"),
        el("div", { class: "lesson-progress" }, el("span", { style: `width:${pct}%` }))
      )
    );

    if (stage.kind === "intro") {
      root.append(el("div", { class: "stage-card" },
        el("div", { class: "day-emoji" }, d.emoji),
        el("p", { class: "card-label" }, `Day ${d.day} · Week ${d.week}`),
        el("p", { class: "prompt" }, d.title),
        el("p", { class: "body-text" }, d.intro),
        el("button", { class: "primary", type: "button", onclick: nextStage }, "Start lesson")
      ));
    } else if (stage.kind === "card") {
      const c = d.cards[stage.i];
      root.append(el("div", { class: "stage-card" },
        el("p", { class: "card-label" }, `Lesson ${stage.i + 1} of ${d.cards.length}`),
        el("p", { class: "prompt" }, c.t),
        el("p", { class: "body-text" }, c.d),
        el("button", { class: "primary", type: "button", onclick: nextStage }, "Continue")
      ));
    } else if (stage.kind === "action") {
      root.append(el("div", { class: "stage-card" },
        el("p", { class: "card-label" }, "Today's real-world mission"),
        el("div", { class: "action-box" }, el("b", {}, "📌 Do this today: "), d.action),
        el("p", { class: "body-text" }, "The lessons teach; the missions build your actual business. Now prove you know today's ideas — quiz time."),
        el("button", { class: "primary blue", type: "button", onclick: nextStage }, "Start quiz")
      ));
    } else if (stage.kind === "quiz") {
      renderQuizStage(root, d.quiz[stage.i], stage.i, d.quiz.length, {
        onAnswer: (ok) => {
          if (ok) {
            lesson.correct += 1;
            state.xp += 10;
          } else {
            if (!state.missed.some((m) => m.day === d.day && m.q === stage.i)) {
              state.missed.push({ day: d.day, q: stage.i });
            }
          }
          saveState();
          renderHeader();
        },
        onNext: nextStage,
      });
    } else if (stage.kind === "result") {
      finishLesson(root);
    }
  }

  // Shared question renderer used by lessons and practice.
  function renderQuizStage(root, q, index, total, { onAnswer, onNext, label }) {
    const order = q.a.map((_, ai) => ai).sort(() => Math.random() - 0.5);
    const explain = el("p", { class: "explain" }, "");
    const nextBtn = el("button", { class: "primary", type: "button", onclick: onNext }, "Continue");
    nextBtn.style.display = "none";
    let answered = false;

    const answers = el("div", { class: "answers" });
    for (const ai of order) {
      const btn = el("button", { class: "answer-btn", type: "button" }, q.a[ai]);
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const ok = ai === q.c;
        btn.classList.add(ok ? "correct" : "wrong");
        if (!ok) {
          for (const other of answers.children) {
            if (other.dataset.ai === String(q.c)) other.classList.add("correct");
          }
        }
        explain.textContent = (ok ? "✅ Correct! +10 XP. " : "❌ Not quite. ") + q.e;
        explain.classList.add(ok ? "good" : "shown");
        explain.style.display = "block";
        nextBtn.style.display = "block";
        onAnswer(ok);
      });
      btn.dataset.ai = String(ai);
      answers.append(btn);
    }

    explain.style.display = "none";
    root.append(el("div", { class: "stage-card" },
      el("p", { class: "card-label" }, label || `Question ${index + 1} of ${total}`),
      el("p", { class: "prompt" }, q.q),
      answers,
      explain,
      nextBtn
    ));
  }

  function finishLesson(root) {
    const { d, correct } = lesson;
    const total = d.quiz.length;
    const stars = starsFor(correct, total);
    const perfect = correct === total;
    const firstTime = !isDone(d.day);
    let bonus = 0;
    if (perfect) { bonus += 10; }
    if (firstTime) { bonus += 20; }
    state.xp += bonus;

    const prev = state.completed[d.day];
    state.completed[d.day] = {
      stars: Math.max(stars, prev ? prev.stars : 0),
      best: Math.max(correct, prev ? prev.best : 0),
    };
    touchStreak();
    saveState();
    renderHeader();

    const nextDay = DAYS.find((x) => x.day === d.day + 1);
    root.append(el("div", { class: "stage-card" },
      el("div", { class: "result-hero" },
        el("div", { class: "big-emoji" }, perfect ? "🏆" : stars >= 2 ? "🎉" : "💪"),
        el("h2", {}, perfect ? "Perfect lesson!" : stars >= 2 ? "Day complete!" : "Day complete — review it in Practice"),
        el("p", { style: "color:var(--muted)" },
          nextDay ? `Day ${nextDay.day} is now unlocked: ${nextDay.title}` : "That was the final day. You finished the course! 🚀")
      ),
      el("div", { class: "result-stats" },
        el("div", {}, el("strong", {}, `${correct}/${total}`), el("span", {}, "correct")),
        el("div", {}, el("strong", {}, `+${correct * 10 + bonus}`), el("span", {}, "XP earned")),
        el("div", {}, el("strong", {}, starStr(stars)), el("span", {}, "stars"))
      ),
      el("div", { class: "action-box" }, el("b", {}, "📌 Don't skip the mission: "), d.action),
      nextDay
        ? el("button", { class: "primary", type: "button", onclick: () => openLesson(nextDay.day) }, `Start Day ${nextDay.day}`)
        : null,
      el("button", { class: "secondary", type: "button", onclick: closeLesson }, "Back to path")
    ));
  }

  /* ---------- Practice (missed questions) ---------- */

  let practice = null; // { queue: [{day,q}], i }

  function renderPractice() {
    const root = $("#practiceView");
    root.innerHTML = "";
    if (practice) return renderPracticeQuestion(root);

    const missed = state.missed.filter((m) => dayData(m.day));
    if (!missed.length) {
      root.append(el("div", { class: "info-card" },
        el("h3", {}, "Nothing to practice 🎯"),
        el("p", {}, completedCount()
          ? "You've cleared every question you missed. Keep completing days — anything you get wrong lands here for review."
          : "Complete lessons on the Path and any questions you miss will show up here for review.")
      ));
      return;
    }
    root.append(el("div", { class: "info-card" },
      el("h3", {}, `${missed.length} question${missed.length > 1 ? "s" : ""} to clear`),
      el("p", {}, "These are the questions you've missed. Answer each correctly to clear it — that's how the ideas stick."),
      el("button", { class: "primary", type: "button", onclick: () => {
        practice = { queue: missed.slice().sort(() => Math.random() - 0.5), i: 0, cleared: 0 };
        renderPractice();
      } }, "Start practice")
    ));
  }

  function renderPracticeQuestion(root) {
    if (practice.i >= practice.queue.length) {
      const cleared = practice.cleared;
      practice = null;
      touchStreak();
      saveState();
      renderHeader();
      root.append(el("div", { class: "info-card" },
        el("h3", {}, "Practice round done 💪"),
        el("p", {}, `You cleared ${cleared} question${cleared === 1 ? "" : "s"}. Anything still missed stays in the queue for next time.`),
        el("button", { class: "primary", type: "button", onclick: renderPractice }, "Continue")
      ));
      return;
    }
    const ref = practice.queue[practice.i];
    const d = dayData(ref.day);
    const q = d.quiz[ref.q];
    renderQuizStage(root, q, practice.i, practice.queue.length, {
      label: `Practice ${practice.i + 1} of ${practice.queue.length} · from Day ${d.day}`,
      onAnswer: (ok) => {
        if (ok) {
          state.xp += 5;
          practice.cleared += 1;
          state.missed = state.missed.filter((m) => !(m.day === ref.day && m.q === ref.q));
        }
        saveState();
        renderHeader();
      },
      onNext: () => {
        practice.i += 1;
        $("#practiceView").innerHTML = "";
        renderPracticeQuestion($("#practiceView"));
        window.scrollTo(0, 0);
      },
    });
  }

  /* ---------- Handbook ---------- */

  function renderHandbook() {
    const root = $("#handbookView");
    root.innerHTML = "";
    root.append(el("div", { class: "info-card" },
      el("h3", {}, "Your reference manual 📖"),
      el("p", {}, "Every lesson you've unlocked, in one place. Use it while you build — it's your course notes, always in your pocket.")
    ));
    let any = false;
    for (const d of DAYS) {
      if (!isUnlocked(d.day)) continue;
      any = true;
      const body = el("div", { class: "hb-body" },
        el("div", { class: "action-box" }, el("b", {}, "📌 Mission: "), d.action),
        ...d.cards.map((c) => el("div", { class: "hb-card" }, el("b", {}, c.t), el("p", {}, c.d)))
      );
      root.append(el("details", { class: "hb-day" },
        el("summary", {}, `${d.emoji} Day ${d.day}: ${d.title} ${isDone(d.day) ? "✓" : ""}`),
        body
      ));
    }
    if (!any) {
      root.append(el("div", { class: "info-card" }, el("p", {}, "Start Day 1 to begin filling your handbook.")));
    }
  }

  /* ---------- Tabs / init ---------- */

  function switchTab(name) {
    document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t.dataset.view === name));
    document.querySelectorAll(".subview").forEach((v) => v.classList.remove("active"));
    $(`#${name}View`).classList.add("active");
    if (name === "practice") { practice = null; renderPractice(); }
    if (name === "handbook") renderHandbook();
    if (name === "path") renderPath();
  }

  function renderAll() {
    renderHeader();
    renderPath();
    renderPractice();
    renderHandbook();
  }

  document.querySelectorAll(".tab").forEach((t) => {
    t.addEventListener("click", () => switchTab(t.dataset.view));
  });

  /* ---------- PWA ---------- */

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }

  let deferredInstall = null;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstall = e;
    $("#installBtn").classList.remove("hidden");
  });
  $("#installBtn").addEventListener("click", async () => {
    if (!deferredInstall) return;
    deferredInstall.prompt();
    await deferredInstall.userChoice;
    deferredInstall = null;
    $("#installBtn").classList.add("hidden");
  });

  checkStreakLapse();
  renderAll();
})();
