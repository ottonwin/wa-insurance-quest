window.COURSE_WEEKS = window.COURSE_WEEKS || [];
window.COURSE_WEEKS.push({
  week: 2,
  title: "Build & Ship With AI",
  goal: "Learn the AI building workflow and put a real landing page on the internet.",
  days: [
    {
      day: 8,
      title: "Prompting AI to Build",
      emoji: "🗣️",
      intro: "Prompting for code is a skill — the difference between a mess and a product. The good news: it's a communication skill, not a technical one.",
      cards: [
        { t: "Give context like a good client", d: "AI can't read your mind. Every project should start with a context prompt:\n\"I'm non-technical. I'm building [app] for [audience]. The core feature is [X]. Tech: keep it simple — recommend and explain your choices in plain English. Always tell me how to test what you built.\"\nSet this once at the start of the project. Everything downstream improves." },
        { t: "One small step at a time", d: "Bad: \"Build my entire invoicing app with login, payments and PDF export.\"\nGood: \"Step 1: create the page where a user fills in job details and sees a formatted quote. Fake data is fine. I'll test it, then we'll do the next piece.\"\nSmall steps mean YOU can verify each piece works, and when something breaks you know exactly which step broke it." },
        { t: "Describe outcomes, not implementations", d: "You don't know the technical terms — that's fine, outcomes are better anyway.\n• \"When I tap Save, the note should still be there after I refresh the page.\"\n• \"Customers should get an email receipt after paying.\"\n• \"This page takes 5 seconds to load; make it feel instant.\"\nThe AI translates outcomes into implementation. You judge whether the outcome happened." },
        { t: "Iterate like a movie director", d: "First output is a first take, not a failure. Direct the next take:\n• \"Almost — but the total should update while I type, not after.\"\n• \"Works, but looks cramped on my phone. Fix mobile first.\"\n• \"Simpler: remove the extra options, just one big button.\"\nBe specific about what's wrong and what 'right' looks like. 3–5 rounds of direction is normal and fast." },
        { t: "Make AI your tutor as it works", d: "Bolt these onto your prompts to compound your learning:\n• \"Explain what you just built like I'm a smart 12-year-old.\"\n• \"What could break here? What did you NOT handle?\"\n• \"What should I test manually before we move on?\"\nTen seconds of asking per step turns 30 days of building into a real education." }
      ],
      action: "Open any AI chat and practice: describe your app's ONE core screen as an outcome (what the user sees, does, and gets). Refine your description 3 times until a stranger could sketch it.",
      quiz: [
        { q: "What should you establish at the start of every AI building session?", a: ["Context: who you are, what you're building, for whom, and how you want it to communicate", "The complete database schema", "Your favorite color scheme", "Nothing — dive straight into features"], c: 0, e: "Context transforms output quality. 'Non-technical founder, building X for Y, explain choices simply, tell me how to test' pays off on every prompt after." },
        { q: "Why ask for one small step instead of the whole app at once?", a: ["You can verify each piece, and breakage points to the exact step that caused it", "AI charges per feature", "Big prompts are against the rules", "Small steps make the code run faster"], c: 0, e: "Giant one-shot builds produce giant unverifiable messes. Small step → test → next step is the professional rhythm, and it's beginner-proof." },
        { q: "Which is the best-formed request for a non-coder?", a: ["\"When I tap Save, the note should still be there after I refresh\"", "\"Implement localStorage persistence with JSON serialization\"", "\"Make the app better\"", "\"Add all the usual features\""], c: 0, e: "Outcome language is precise about what success looks like while leaving implementation to the AI. Vague requests ('better') get vague results." },
        { q: "The AI's first version isn't quite right. What now?", a: ["Direct the next take: say specifically what's wrong and what 'right' looks like", "Start the whole project over", "Accept it — AI knows best", "Switch to a different AI tool"], c: 0, e: "Treat it like directing takes on a film set. 3–5 rounds of specific feedback is the normal workflow, not a sign of failure." },
        { q: "What's the cheapest way to actually learn while AI builds?", a: ["Ask it to explain each piece simply and tell you what to test", "Read a 500-page programming textbook first", "Retype all the code by hand", "Avoid explanations to save time"], c: 0, e: "'Explain like I'm 12' + 'what could break?' + 'what should I test?' — three questions that turn every build session into a lesson." }
      ]
    },
    {
      day: 9,
      title: "Read Code Without Fear",
      emoji: "👀",
      intro: "You'll never write code by hand — but being able to LOOK at a project without panic makes you 10× better at directing AI. Today: a guided tour.",
      cards: [
        { t: "A project is just a folder", d: "Every app is a folder of text files. Typical web project:\n• index.html — the page structure.\n• styles.css — the looks.\n• app.js — the behavior.\n• Maybe folders like components/ (reusable pieces) and api/ (server code).\nWhen AI says \"I updated app.js\", it edited a text file in that folder. No magic. You can open any file and look." },
        { t: "HTML reads like an outline", d: "HTML is nested labeled boxes:\n<h1>Big heading</h1>\n<p>A paragraph.</p>\n<button>Buy now</button>\nTags in angle brackets say what each thing IS. You can already read that. If you can find the line that says <button>Buy now</button>, you can tell the AI exactly where you want changes." },
        { t: "Variables and functions, in one card", d: "Two words cover 80% of code conversations:\n• A variable stores a value: price = 29 remembers the number 29 under the name 'price'.\n• A function is a named recipe: calculateTotal() runs the steps inside it whenever called.\nCode is mostly recipes (functions) working with remembered values (variables). That's genuinely most of it." },
        { t: "Ask AI to be your tour guide", d: "You never have to decode anything alone:\n• \"Walk me through this project's files — what does each one do, in one line each?\"\n• \"Where does the price get set? Show me the exact file and line.\"\n• \"If I wanted to change the headline, which file would I open?\"\nA senior engineer explaining any codebase, on demand, forever. Use it constantly." },
        { t: "Naming beats understanding", d: "You don't need to understand code — you need to NAME things so AI can find them. Learn to say:\n\"In the header, the signup button's label\" not \"that green thing\".\n\"The error appears after I submit the form on the pricing page\" not \"it's broken\".\nPrecision of description, not knowledge of programming, is what makes a non-coder dangerous." }
      ],
      action: "Right-click any webpage → 'View page source'. Find one <h1>, one <button>, and one link to a .css file. You just read production code.",
      quiz: [
        { q: "What is an app's codebase, physically?", a: ["A folder of plain text files", "A compiled black box no human can open", "A special computer chip", "A cloud service you can't see"], c: 0, e: "Just text files in folders — html for structure, css for looks, js for behavior. Anyone can open and read them, including you." },
        { q: "What does an HTML tag like <button> tell you?", a: ["What that piece of the page IS", "How fast the page loads", "What the database contains", "Who wrote the code"], c: 0, e: "HTML is labeled boxes: <h1> is a heading, <p> a paragraph, <button> a button. Readable as an outline, no training needed." },
        { q: "What is a function?", a: ["A named recipe of steps that runs when called", "A type of file", "An error message", "A monthly fee"], c: 0, e: "calculateTotal() is a recipe named calculateTotal. Variables remember values; functions do things with them. That's most of programming's vocabulary." },
        { q: "You want the headline changed but don't know where it lives. Best move?", a: ["Ask AI: 'Which file sets the homepage headline? Show me the line.'", "Open every file and read until you find it", "Rebuild the whole page", "Give up on the change"], c: 0, e: "AI is a tour guide for any codebase. 'Where does X happen?' gets you the exact file and line in seconds." },
        { q: "What skill makes a non-coder genuinely effective at directing AI?", a: ["Describing things precisely — which page, which element, what happened, when", "Memorizing JavaScript keywords", "Typing speed", "Knowing every framework's name"], c: 0, e: "'The signup button in the header' beats 'the green thing'. Precise descriptions are executable instructions; vague ones are guesswork." }
      ]
    },
    {
      day: 10,
      title: "Git & GitHub: Your Safety Net",
      emoji: "🌳",
      intro: "Git saves snapshots of your project so nothing is ever lost and no AI mistake is permanent. It's the single best insurance policy in software.",
      cards: [
        { t: "Git = save points for your project", d: "Git takes snapshots (\"commits\") of your entire project whenever you ask. Every commit is a save point you can return to.\nAI broke your app at 11pm? Roll back to the 8pm commit — crisis deleted. This is why pros commit constantly, and why you'll never fear letting AI make big changes." },
        { t: "GitHub = your project in the cloud", d: "GitHub stores your git history online. It's the standard place code lives.\nWhy you care:\n• Laptop dies → project is safe.\n• Hosting platforms (Vercel/Netlify) watch your GitHub and auto-deploy every change.\n• AI agents like Claude Code can work directly with your GitHub repositories.\nA 'repo' (repository) = one project's folder + its full history." },
        { t: "The only 4 words you need", d: "• Repo — a project and its history.\n• Commit — one saved snapshot, with a note (\"Add pricing page\").\n• Push — upload your new commits to GitHub.\n• Branch — a parallel copy for trying things without touching the main version; 'main' is the real one.\nYou'll hear 'merge' and 'pull request' too — that's how a branch's changes join main. AI handles the mechanics of all of it." },
        { t: "You don't type git commands", d: "Your workflow is delegation:\n• \"Commit what we have with a sensible message.\"\n• \"Push this to GitHub.\"\n• \"Things are broken — roll back to the last commit that worked.\"\nThe agent runs the commands; you set the policy. Your one rule: commit after every working feature. Ask for it if the AI doesn't do it by itself." },
        { t: "Commits tell your story", d: "A commit history reads like a build diary:\n\"Set up project\" → \"Add quote form\" → \"Calculate totals\" → \"Add Stripe checkout\".\nEach message says what changed. When something breaks, this diary is how you (and AI) find where. When it works, it's proof of how far you've come from Day 1." }
      ],
      action: "Ask an AI: 'Explain what a git commit is using a video game save analogy, then show me the 3 commands you would run to commit and push, with each explained in one line.'",
      quiz: [
        { q: "What is a git commit?", a: ["A saved snapshot of your whole project you can return to", "A promise to finish the app", "A monthly payment", "A type of error"], c: 0, e: "Commits are save points. Any mistake — yours or the AI's — is reversible by rolling back. That safety is what makes bold iteration possible." },
        { q: "AI just broke your working app. Thanks to git, what can you do?", a: ["Roll back to the last working commit", "Only rebuild everything from scratch", "Nothing — the damage is permanent", "Buy the old version back from GitHub"], c: 0, e: "This is git's superpower: no mistake is permanent if you commit often. Rule: commit after every working feature." },
        { q: "What's the relationship between git and GitHub?", a: ["Git makes local snapshots; GitHub stores them online", "They're the same thing", "GitHub is a programming language", "Git is GitHub's paid plan"], c: 0, e: "Git is the snapshot tool; GitHub is the cloud home for those snapshots — and the hook that lets Vercel auto-deploy your changes." },
        { q: "What does 'push' do?", a: ["Uploads your new commits to GitHub", "Publishes your app to the App Store", "Sends marketing emails", "Deletes old code"], c: 0, e: "Push = sync your local save points to the cloud. Once pushed, your work survives any laptop disaster — and can trigger auto-deployment." },
        { q: "As a non-coder, how do you actually use git?", a: ["Tell the AI to commit, push, or roll back — it runs the commands", "Memorize 50 git commands", "Avoid git until you can code", "Hire someone just for git"], c: 0, e: "You set the policy ('commit after every working feature'); the agent does the typing. Delegation with judgment — the theme of this whole course." }
      ]
    },
    {
      day: 11,
      title: "Build Day: Your Landing Page",
      emoji: "🛠️",
      intro: "Today you stop learning ABOUT building and actually build. A landing page is the perfect first project: simple, useful, and it starts validating your idea immediately.",
      cards: [
        { t: "Anatomy of a landing page that converts", d: "Top to bottom:\n1) Headline — the outcome: \"Send professional quotes in 2 minutes.\"\n2) Subheadline — for whom + how: \"For solo landscapers. Snap, tap, send.\"\n3) 3 benefit bullets (outcomes, not features).\n4) Social proof — or honest early positioning: \"Join 40 landscapers on the waitlist.\"\n5) One call to action: email box + button.\nOne page, one goal: turn a visitor into an email." },
        { t: "The build prompt", d: "Use a prompt-to-app tool (Bolt, v0, Lovable) or Claude Code. Adapt this:\n\"Build a single-page landing page for [app], which helps [niche] [outcome]. Sections: hero with headline and email signup, 3 benefit cards, how-it-works in 3 steps, one testimonial placeholder, final call-to-action. Mobile-first, clean, modern. Store signups in [a simple backend or a form service]. Plain HTML/CSS/JS is fine.\"\nThen iterate like a director (Day 8)." },
        { t: "Collecting emails without a backend", d: "Simplest options, no database needed:\n• A form service — Formspree, Tally, or Google Forms styled to match — collects submissions for you, free.\n• Or a waitlist tool with a widget you embed.\nTell the AI which you chose: \"Wire the signup form to Formspree\" is a one-prompt job. You'll graduate to your own database in Week 3." },
        { t: "Write like a human, not a brochure", d: "Weak: \"Revolutionizing quote management with AI-powered solutions.\"\nStrong: \"Stop typing quotes at 9pm. Snap a photo, tap twice, quote sent.\"\nRules: use your customers' own words from Day 5 interviews. Name the pain. Promise one outcome. Cut every word that sounds like a press release. Read it aloud — if you wouldn't say it to a customer's face, rewrite it." },
        { t: "Done today beats perfect Friday", d: "Your page needs: headline, benefits, working email box. That's it.\nIt does NOT need: a logo, animations, a demo video, five sections about your mission.\nShip the 80% version today. Tomorrow you learn to debug what's broken; Day 13 it goes live on the real internet. Every hour spent polishing pixels today is an hour of validation you delayed." }
      ],
      action: "Build your landing page draft with an AI tool using today's prompt pattern. Iterate at least 3 times. Get a working email signup, even if it's ugly.",
      quiz: [
        { q: "What is a landing page's single job?", a: ["Convert a visitor into an email signup (one call to action)", "Explain every planned feature", "Show off design skills", "Host the full app"], c: 0, e: "One page, one goal. Every element either pushes toward the email box or gets cut." },
        { q: "Which headline is doing its job?", a: ["\"Send professional quotes in 2 minutes\"", "\"Revolutionizing quote management solutions\"", "\"Welcome to our website\"", "\"QuoteFast v1.0 now in beta\""], c: 0, e: "It states the outcome, fast and concrete. Buzzwords ('revolutionizing', 'solutions') describe nothing and convert nobody." },
        { q: "How do you collect emails before you have a database?", a: ["Wire the form to a service like Formspree or Tally", "You can't — build the database first", "Ask visitors to email you manually", "Print the signups"], c: 0, e: "Form services catch submissions for free with one prompt's worth of setup. Your own database can wait until Week 3." },
        { q: "Where should your landing page copy come from?", a: ["Your customers' own words from validation interviews", "A corporate buzzword generator", "Competitor slogans, copied", "Latin placeholder text"], c: 0, e: "When visitors see their own complaint reflected back precisely, they feel understood — that's what converts. Day 5's interviews were copywriting research." },
        { q: "Your page works but looks plain. Ship it or polish it?", a: ["Ship it — headline, benefits, and a working email box is enough to start validating", "Polish for a week first", "Add a demo video first", "Wait for a designer"], c: 0, e: "The page's job is testing your promise, and plain pages do that fine. Polish is procrastination wearing a nice outfit." }
      ]
    },
    {
      day: 12,
      title: "Debugging With AI",
      emoji: "🐛",
      intro: "Things break. Always. The skill that separates people who ship from people who quit isn't avoiding bugs — it's staying calm and reporting them well.",
      cards: [
        { t: "Bugs are normal, not verdicts", d: "Professional developers spend 30–50% of their time debugging. A bug doesn't mean you did it wrong or the AI is broken — it means you're building real software.\nYour advantage: you don't have to FIX bugs, only DESCRIBE them well. AI does the fixing. Good bug reports are a communication skill, and you already have it." },
        { t: "The perfect bug report", d: "Five parts, every time:\n1) What I did: \"Filled the signup form, tapped Submit.\"\n2) What I expected: \"A thank-you message.\"\n3) What happened: \"Button froze; nothing appeared.\"\n4) Where: \"On my phone, in Safari.\"\n5) The exact error text, if any — copy-paste, never summarize.\nThis format turns a 10-round guessing game into a 1-round fix." },
        { t: "The console: where errors confess", d: "Browsers log every error in a hidden panel. On a computer: right-click the page → Inspect → Console tab. Red text = errors.\nYou don't need to understand a word of it. Copy the red text, paste it to your AI: \"I got this error when [action]. Explain in plain English, then fix it.\"\nThe console usually names the exact file and line — it's a confession note." },
        { t: "Screenshots are worth 1,000 words", d: "Modern AI reads images. When something LOOKS wrong — broken layout, overlapping text, weird spacing — screenshot it and paste it in: \"This is what I see. It should look like [description]. Fix it.\"\nFor behavior bugs, a screenshot of the error message or the console works too. Show, don't just tell." },
        { t: "When you're stuck in a loop", d: "AI fixed it, broke it again, fixed it, broke something else? Escalate deliberately:\n1) \"Stop. Explain the root cause in plain English before touching code.\"\n2) \"List 3 different approaches to fix this properly. Which is most reliable?\"\n3) Still stuck: roll back to the last working commit (Day 10!) and re-approach in smaller steps.\nThe rollback isn't defeat — it's the pro move." }
      ],
      action: "Open your landing page, open the browser console (Inspect → Console), and refresh. If anything red appears, paste it to your AI and get it explained + fixed. If nothing's red, break something on purpose and fix it.",
      quiz: [
        { q: "What's a healthy way to think about bugs?", a: ["Normal building work — pros spend a third of their time on them", "Proof you should quit", "A sign the AI is defective", "Rare events that mean disaster"], c: 0, e: "Bugs are the texture of real software work. Your job is describing them well; the AI's job is fixing them." },
        { q: "Which bug report gets the fastest fix?", a: ["\"Tapped Submit on signup; expected a thank-you; button froze. Safari on iPhone. Error: 'TypeError: null'\"", "\"It's broken, fix it\"", "\"The site doesn't work on phones I think\"", "\"Something happened yesterday maybe\""], c: 0, e: "Did / expected / happened / where / exact error. Five parts turn debugging from a guessing game into a one-round fix." },
        { q: "Where do browsers confess their errors?", a: ["The console (right-click → Inspect → Console)", "The address bar", "Your email inbox", "The App Store"], c: 0, e: "Red console text names what failed and usually where. Copy-paste it to AI with 'explain in plain English, then fix' — you never need to decode it yourself." },
        { q: "The layout looks broken on your phone. Fastest way to communicate it to AI?", a: ["Screenshot it and paste the image with a description of what it should look like", "Describe each pixel in words", "Ignore it — layouts fix themselves", "Buy a new phone"], c: 0, e: "AI reads images. A screenshot plus 'this should look like X' beats paragraphs of description." },
        { q: "AI has 'fixed' the same bug 4 times and it keeps returning. What's the pro move?", a: ["Demand a root-cause explanation first, or roll back to the last working commit and re-approach smaller", "Keep repeating 'fix it' louder", "Delete the project", "Accept the bug forever"], c: 0, e: "Loops mean the AI is patching symptoms. Force diagnosis before code, or use your git save points and rebuild the piece in smaller steps." }
      ]
    },
    {
      day: 13,
      title: "Deploy: Put It on the Internet",
      emoji: "🚀",
      intro: "A project on your laptop is a diary entry. A project with a URL is a product. Today your landing page goes live — permanently, for free.",
      cards: [
        { t: "Deployment, demystified", d: "Deploying = copying your files to a computer that's always on (a server) so anyone's browser can reach them via a URL.\nThe old way: rent and configure servers. Your way: connect GitHub to a hosting platform, and every push auto-deploys in about a minute. You never touch a server in your life." },
        { t: "Vercel and Netlify: one-click hosting", d: "Both work the same:\n1) Sign up with your GitHub account (free).\n2) Click 'Import project' and pick your repo.\n3) Click Deploy. Done — you get a live URL like yourapp.vercel.app.\nFrom then on, every change the AI pushes to GitHub goes live automatically. Free tiers comfortably handle thousands of visitors." },
        { t: "Connecting your real domain", d: "That domain you bought on Day 6? In your hosting dashboard: Settings → Domains → add yourdomain.com. It shows you 1–2 DNS records to add at your registrar (Namecheap/Cloudflare).\nDNS is just the internet's phone book — the records point your name at your host. Takes minutes to set, up to a few hours to spread worldwide. AI can walk you through your exact registrar's screens." },
        { t: "HTTPS: free and automatic", d: "The padlock in the browser (https://) means traffic is encrypted. Payment providers require it, browsers shame sites without it, and users trust it.\nGood news: Vercel and Netlify give every site and custom domain a free HTTPS certificate, automatically renewed. There is literally nothing for you to do — just know why the padlock matters." },
        { t: "The post-deploy checklist", d: "Once live, test like a stranger:\n• Open the URL on your phone (not just your laptop).\n• Submit the email form with a real address — did it arrive where you expect?\n• Check the page loads fast and nothing looks broken.\n• Ask one friend to try it and narrate what they see.\nThen the milestone: you built and shipped a live product this week. Most people never get here." }
      ],
      action: "Deploy your landing page to Vercel or Netlify (ask AI to guide you through your exact repo). Connect your custom domain. Then send the live link to one person.",
      quiz: [
        { q: "What does deploying actually mean?", a: ["Putting your files on an always-on server so a URL reaches them", "Printing your code", "Submitting to Apple for review", "Emailing your app to users"], c: 0, e: "That's all it is — your files, served from a machine that never sleeps. Modern platforms reduce it to a couple of clicks." },
        { q: "What happens after you connect your GitHub repo to Vercel or Netlify?", a: ["Every push auto-deploys — changes go live in about a minute", "You must manually upload files each time", "GitHub gets deleted", "Your app moves off GitHub"], c: 0, e: "Push → live. This automation (continuous deployment) is why the pros ship many times a day — and now you can too." },
        { q: "What is DNS?", a: ["The internet's phone book — records that point your domain name at your host", "A programming language", "A paid Vercel feature", "A type of bug"], c: 0, e: "Add 1–2 records at your registrar and yourdomain.com points at your hosting. Minutes to set up, a few hours to spread globally." },
        { q: "How do you get HTTPS (the padlock) on your site?", a: ["Vercel/Netlify provide and renew it automatically, free", "Buy a certificate for $500/year", "HTTPS is optional for products taking payments", "Install antivirus software"], c: 0, e: "Free, automatic, always-on. You need it (payments and trust require it) but you never have to manage it." },
        { q: "What belongs on your post-deploy checklist?", a: ["Test on a real phone, submit the form for real, and have a friend try it", "Nothing — deployed means done", "Rewrite the code in another language", "Buy ads immediately"], c: 0, e: "Test like a stranger on a phone — that's how your real visitors arrive. A friend narrating what they see finds issues you're blind to." }
      ]
    },
    {
      day: 14,
      title: "Checkpoint: You Shipped",
      emoji: "🏁",
      intro: "Two weeks in: you understand the machine, and there's a live URL with your product promise on it. Time to make the page work FOR you, and prep the real build.",
      cards: [
        { t: "Take stock — this was the hard part", d: "You now: understand apps' three layers, direct AI in small verified steps, read a project without fear, use git as a safety net, debug with console + screenshots, and deploy to a real domain.\nThat loop — build → break → fix → ship — is THE skill. Weeks 3 and 4 just point it at bigger targets: databases, payments, customers." },
        { t: "Drive 50 real visitors this week", d: "A live page with no visitors validates nothing. Low-effort traffic sources:\n• Answer relevant questions in niche subreddits/Facebook groups, linking your page only when genuinely helpful.\n• Post a 'building this — feedback?' in communities that allow it.\n• Message 10 people from your Day 5 conversations.\n• Add the link to your social bios.\nTarget: ~50 visitors and a handful of signups this week." },
        { t: "Read the signals honestly", d: "Rough guide for niche traffic to an early-access page:\n• 20%+ visitors → emails: strong. Build with confidence.\n• 5–20%: promise or copy needs work. Interview a few visitors, sharpen the headline.\n• Under 5% from 50+ REAL niche visitors: pause. Revisit Day 5 before investing Week 3.\nSmall numbers, yes — but directionally honest ones beat comfortable ignorance." },
        { t: "Talk to everyone who signs up", d: "Every email is a warm lead and free research. Send a personal (not automated) note:\n\"Thanks for signing up! Quick question — what made you interested? What are you using today for this?\"\nReplies give you: v1 feature priorities, pricing signals, copywriting language, and your first beta testers for Day 21. A 30% reply rate is normal for personal notes." },
        { t: "Preview: Week 3 builds the machine", d: "Next week your product gets real:\n• Day 15–16: a database and user accounts (Supabase).\n• Day 17–18: Stripe payments and pricing strategy.\n• Day 19–21: building your MVP's core feature and testing end-to-end.\nBy Day 21, a stranger will be able to sign up, use your core feature, and PAY you. Rest today. Ship tomorrow." }
      ],
      action: "Post your landing page in 2 niche communities (genuinely, not spammily) and personally message everyone who signed up so far. Goal: 50 visitors by Day 21.",
      quiz: [
        { q: "What's the REAL skill you built in Weeks 1–2?", a: ["The loop: build small → test → fix → ship, with AI doing the code", "Memorizing HTML tags", "Server administration", "Graphic design"], c: 0, e: "Everything ahead — databases, payments, launches — is the same loop pointed at new targets. The loop is the career." },
        { q: "Your page is live but has zero visitors. What does it validate?", a: ["Nothing — signals require real niche visitors, ~50 to start", "Everything — being live is enough", "That the idea is bad", "That you need paid ads"], c: 0, e: "No traffic, no data. Helpful community participation, direct messages, and bio links can get 50 relevant visitors within a week." },
        { q: "50 niche visitors produced 12 signups (24%). What's the read?", a: ["Strong signal — build the MVP with confidence", "Failure — you needed 100%", "Meaningless without 10,000 visitors", "Time to abandon the idea"], c: 0, e: "20%+ on an early-access page from real niche traffic is a green light. Perfect certainty never comes; this is what 'validated enough' looks like." },
        { q: "Why personally email each signup?", a: ["They're warm leads AND free research: features, pricing language, beta testers", "To sell them something today", "It's legally required", "To pad your sent folder"], c: 0, e: "'What made you sign up?' returns v1 priorities and copy in customers' own words — plus volunteers for Day 21 beta testing." },
        { q: "What will exist by the end of Week 3?", a: ["A working MVP: stranger signs up → uses the core feature → pays you", "A finished perfect product", "A native iPhone app", "A venture capital term sheet"], c: 0, e: "Signup, core feature, checkout — the complete money loop, even if rough. That's the machine Week 4's marketing pours people into." }
      ]
    }
  ]
});
