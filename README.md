# WA Insurance Quest

> **Also in this repo:** [Indie Quest](indie-quest/README.md) — a Duolingo-style 30-day course app that teaches building revenue-generating indie apps with AI, served at `/indie-quest/` on the same GitHub Pages site.

Mobile-first study app for Washington insurance producer exams. It runs locally, installs as a PWA from a browser, works offline after first load, and saves progress automatically on the device with local storage.

## Open it

Local computer:

```text
http://127.0.0.1:4173/
```

Phone on the same Wi-Fi:

```text
http://192.168.0.86:4173/
```

Phone over Tailscale:

```text
http://100.95.10.74:4173/
```

## Hosting

Local fallback hosting is kept running by this macOS LaunchAgent:

```text
/Users/otto/Library/LaunchAgents/com.otto.wa-insurance-quest.plist
```

It starts automatically when the Mac logs in, restarts if it crashes, and serves the app from:

```text
/Users/otto/Documents/Insurance
```

Public hosting is prepared for GitHub Pages with:

```text
/Users/otto/Documents/Insurance/.github/workflows/pages.yml
```

## Included tracks

- HOA, Home, Auto, Construction & Property
- Property & Casualty Producer
- Life & Disability Producer
- Personal Lines Producer

## Study modes

- Missions: topic map and mastery meters
- Quiz: adaptive drill that prioritizes misses and new questions
- Review: study cards and saved missed questions
- Mock: exam-readiness gate with 85% practice target, module completion, and miss clearing

## Pass plan

The default course follows the Washington Property and Casualty Producer Combo outline and includes the user's target markets: condo HOA, home, auto, personal property, builders risk, contractors, construction equipment, surety, umbrella, and commercial property/casualty.

## Sources to recheck before scheduling

- Washington OIC exam scheduling and passing score: https://www.insurance.wa.gov/producers-adjusters/education/first-time-license/how-schedule-insurance-license-exam
- Washington OIC pre-licensing education page: https://www.insurance.wa.gov/producers-adjusters/education/first-time-license/producers-pre-licensing-education-ple
- PSI Washington insurance content outlines: https://proctor2.psionline.com/media/programs/WA%20Insurance%20Outlinesxxxxrf.pdf
