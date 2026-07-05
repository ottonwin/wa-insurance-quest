# Indie Quest

A Duolingo-style, mobile-first PWA that teaches a complete beginner (no coding background) how to build and launch revenue-generating indie apps using AI — structured as a 30-day course.

## The 30-day curriculum

- **Week 1 — Foundations & Your Idea (Days 1–7):** how apps work, the AI toolkit, MRR business math, finding and validating ideas, choosing a stack, committing to one idea.
- **Week 2 — Build & Ship With AI (Days 8–14):** prompting AI to build, reading code without fear, git/GitHub, building a landing page, debugging, deploying to a real domain.
- **Week 3 — From Demo to Paid Product (Days 15–21):** databases (Supabase), user accounts/auth, Stripe payments, pricing strategy, building the MVP core, analytics, user testing.
- **Week 4 — Launch & Grow MRR (Days 22–30):** copywriting, SEO, launch channels, email/onboarding, retention & churn, support loops, money/legal basics, scaling MRR, launch day.

## How it works

- **Path** — 30 sequential day-lessons grouped into 4 week units. Each day: intro → 5 lesson cards → a real-world mission (the "do this today" task that actually builds your business) → 5-question quiz with explanations.
- **Practice** — every question you miss lands in a review queue; answer it correctly to clear it.
- **Handbook** — all unlocked lessons as a searchable reference while you build.
- **XP, streaks, and stars** — 10 XP per correct answer, bonuses for perfect lessons, a daily streak, and 1–3 stars per day based on quiz score. Days unlock sequentially.

Progress is saved automatically on-device (localStorage). Installs as a PWA and works offline after first load.

## Open it

Once merged to `main`, GitHub Pages serves it at:

```text
https://ottonwin.github.io/wa-insurance-quest/indie-quest/
```

Or run locally from the repo root:

```bash
python3 -m http.server 4173
# then open http://127.0.0.1:4173/indie-quest/
```
