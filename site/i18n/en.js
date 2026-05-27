// English strings for ai-coding.adusingi.com
// Translation note: copy this file to fr.js, translate the values only.
// Keys (left of ':') must stay identical across locales.
window.I18N_EN = {
  meta: {
    lang: "en",
    title: "AI-Assisted Engineering — Training for Software Teams · Aimable Dusingi",
    description:
      "Hands-on workshops that teach your engineers to ship production software with AI. Built by a practitioner running five production SaaS products on this exact playbook.",
    og_image: "",
  },

  nav: {
    brand: "Aimable Dusingi",
    brand_sub: "AI-Assisted Engineering",
    work: "Work",
    method: "Method",
    pricing: "Pricing",
    contact: "Book a call",
  },

  hero: {
    eyebrow: "Training for engineering teams",
    title_a: "I build production software with AI. I'll teach your team how.",
    title_b: "AI-assisted engineering, taught by a practitioner who ships.",
    title_c: "Five production SaaS products, built with AI as a core tool.",
    subtitle_a:
      "Two 60-minute workshops on your own codebase. No slides, no theory — we open your project, install Claude Code, write your team's first agent contract, and audit your architecture together.",
    subtitle_b:
      "Two hands-on sessions with your engineers, working on your real code. You leave with a customized CLAUDE.md, an architecture audit, and a 30-day plan to lock in the new habits.",
    subtitle_c:
      "I run the AI patterns shown below in production every day — structured extraction, agentic code repair, multi-provider fallback, prompt caching. Now I teach engineering teams how to do the same on their own stack.",
    cta_primary: "Book an intro call",
    cta_secondary: "See the work",
    proof_line: "Polyglot stack · Ruby, TypeScript, Python, Go · Production CI/CD · Real billing, real auth, real AI integrations",
  },

  problem: {
    section_label: "The gap",
    title: "Most teams are using AI like a faster Google.",
    body:
      "Autocomplete, snippets, a chat window on the side. That's not where the leverage is. The leverage is in giving the AI the context of your project, your conventions, your domain language — then letting it write tickets, review PRs, audit your architecture, draft prototypes, repair its own failures. That requires a workflow, not a tool. This training is that workflow.",
  },

  method: {
    section_label: "How it works",
    title: "Two sessions, three weeks, your codebase.",
    subtitle:
      "Designed to be absorbed without disrupting a sprint. We meet, you practice on a real task between sessions, we meet again.",

    step_1_label: "Session 1",
    step_1_title: "Audit & foundations",
    step_1_duration: "60 min · group of up to 5",
    step_1_body:
      "We start by understanding how your team works today — how features start, where knowledge lives, what frustrates you. Then we build your first CLAUDE.md together, on your actual project. Every engineer leaves the session having used Claude on something they're currently building.",

    step_2_label: "Between sessions",
    step_2_title: "One real task each",
    step_2_duration: "≈ 1 week, async",
    step_2_body:
      "Every engineer picks one task they were going to do that week and runs it through Claude using what you set up in session 1. We start session 2 from those concrete experiences — what worked, what didn't, what surprised you.",

    step_3_label: "Session 2",
    step_3_title: "Architecture audit & possibilities",
    step_3_duration: "60 min · group of up to 5",
    step_3_body:
      "We point Claude at your codebase and generate a full ARCHITECTURE.md, then ask it what's missing, risky, or worth refactoring. We close by opening doors: prototyping with AI, generating engineering tickets from a discussion, autonomous code repair, prompt caching. You leave knowing what exists and how to reach for it.",
  },

  deliverables: {
    section_label: "What you leave with",
    title: "Documents, not vibes.",
    subtitle: "Every team gets the same four deliverables, customized to their stack.",

    item_1_title: "Customized CLAUDE.md",
    item_1_body:
      "Your team's project context, tech stack, conventions, and non-negotiables — the file every engineer's AI reads before touching anything.",

    item_2_title: "Architecture audit",
    item_2_body:
      "A complete ARCHITECTURE.md of your main project, generated together in session 2, plus a prioritized list of gaps and refactoring candidates.",

    item_3_title: "Prompt cheatsheet",
    item_3_body:
      "The prompts I use daily — structure an idea, generate tickets, prototype a feature, audit code — adapted to your domain and stack.",

    item_4_title: "30-day rollout plan",
    item_4_body:
      "Week-by-week habits to lock in: who runs which prompt, how to share new prompts, when to retire stale ones. Tested across multiple teams.",
  },

  patterns: {
    section_label: "What the training covers",
    title: "The patterns I use to ship production AI features.",
    subtitle:
      "Drawn from five production codebases. Not a survey — only patterns I run in production every day.",

    p_1_title: "AI as a soft parser, regex as the hard fallback",
    p_1_body:
      "Vision and structured-output extraction with Claude, with a deterministic regex fallback when the API fails. The pattern behind reliable AI features.",

    p_2_title: "Model selection by task",
    p_2_body:
      "Haiku for classification, Sonnet for extraction, local Whisper for transcription on commodity hardware. Cost-aware routing.",

    p_3_title: "Agentic loops with safety gates",
    p_3_body:
      "Diagnose → patch → test → PR, gated by confidence thresholds, prompt-injection guards, and automatic rollback. The most sophisticated use, with hard guard-rails.",

    p_4_title: "Multi-provider architecture",
    p_4_body:
      "Strategy pattern across providers (Anthropic, OpenAI, Fireworks, local) so a single env var swaps the backend. No vendor lock-in.",

    p_5_title: "Prompt caching that actually pays off",
    p_5_body:
      "Understand what's stable vs dynamic in your prompts; cache the stable parts. Real cost reductions on long-running agent loops.",

    p_6_title: "Graceful degradation",
    p_6_body:
      "Every AI feature degrades to a deterministic path: Claude → OpenAI → regex → human. Design the failure path before the happy path.",

    p_7_title: "CLAUDE.md as an agent contract",
    p_7_body:
      "Tech stack, naming conventions, multi-tenancy rules, what the agent must never do. The single most underrated practice.",

    p_8_title: "Documentation as engineering practice",
    p_8_body:
      "ARCHITECTURE.md, CONTEXT.md, TASKS.md, decision log. Not bureaucracy — what makes AI-assisted development safe at scale.",
  },

  projects: {
    section_label: "Production work",
    title: "Five SaaS products, all shipped with AI as a core development tool.",
    subtitle:
      "Every project ships real CI/CD, real auth, real billing. The AI sits on top of solid engineering, not in place of it.",

    list: [
      {
        slug: "network-mobayilo",
        name: "network-mobayilo",
        tagline: "Telecom network audit SaaS",
        stack: "Next.js · Fastify · Python · Go",
        ai_role: "Autonomous code repair agent",
        body:
          "Multi-tenant audit platform with a polyglot monorepo. Claude runs as an agentic loop that diagnoses parser failures, patches source files, runs tests, and opens PRs — gated by confidence thresholds and prompt-injection guards.",
      },
      {
        slug: "veronese",
        name: "veronese",
        tagline: "Audio transcription SaaS",
        stack: "Rails 8 · Whisper / Fireworks · Go CLI · Stripe",
        ai_role: "Multi-provider transcription",
        body:
          "Cloud and on-prem transcription with runtime provider switching (Fireworks ↔ local Whisper) via a single env var. Idempotent ledger-based billing, distributable Go CLI, Homebrew tap auto-generated from CI.",
      },
      {
        slug: "mobayilo",
        name: "mobayilo",
        tagline: "Browser-based international calling",
        stack: "Rails 8 · Twilio · Stripe · Go CLI",
        ai_role: "AI-assisted development",
        body:
          "Pay-as-you-go calling with Twilio webhooks, immutable ledger billing, OAuth device authorization flow for the CLI. Production Kamal deployment, Solid Queue for background work.",
      },
      {
        slug: "kazoku-calendar",
        name: "kazoku-calendar",
        tagline: "Family schedule board (iPad kiosk)",
        stack: "Next.js · Drizzle · Python · Telegram",
        ai_role: "Vision + structured extraction (Sonnet)",
        body:
          "Photos of Japanese school letters and handwritten schedules go through Claude Sonnet, which extracts events and todos as typed JSON. Hybrid pipeline: Claude first, regex fallback if the API fails.",
      },
      {
        slug: "resources",
        name: "resources",
        tagline: "Personal link curation board",
        stack: "Next.js · Drizzle · Python · Telegram",
        ai_role: "Classification (Haiku)",
        body:
          "Send a URL to a Telegram bot, Claude Haiku categorizes it from OG metadata, it lands on a curated board. Cheapest model for low-stakes classification — match cost to task complexity.",
      },
    ],
  },

  who: {
    section_label: "Who this is for",
    title: "Engineering teams of 2–8 who already ship — and want to ship faster.",
    fit_title: "Good fit",
    fit_items: [
      "You have a working product and a real codebase, not a greenfield slide deck.",
      "Your engineers already use ChatGPT or Copilot but feel they're scratching the surface.",
      "You have a CTO or tech lead who can hold the team accountable to the 30-day plan.",
      "You're willing to install Claude Code and pay $20/engineer/month for Claude Pro.",
    ],
    notfit_title: "Not a fit",
    notfit_items: [
      "You want a slide-based talk on \"the future of AI in software\". I don't do those.",
      "You want me to write the code for you. I teach your team to do it themselves.",
      "Your codebase is closed and can't be opened in the session. We need real code on screen.",
    ],
  },

  pricing: {
    section_label: "Pricing",
    title: "Three formats, same playbook.",
    subtitle: "Pick the format. The methodology, deliverables, and follow-up are the same.",

    tier_1_name: "1-on-1",
    tier_1_for: "Solo engineer or founder",
    tier_1_price: "From €200",
    tier_1_unit: "per session",
    tier_1_body:
      "Direct work on your own project. CLAUDE.md, architecture audit, prompt cheatsheet — all built around what you're shipping this quarter.",
    tier_1_cta: "Start a 1-on-1",

    tier_2_name: "Team workshop",
    tier_2_for: "Engineering team (up to 5)",
    tier_2_price: "€600",
    tier_2_unit: "for both sessions",
    tier_2_body:
      "Two 60-minute sessions on your codebase. Includes the CLAUDE.md, architecture audit, prompt cheatsheet, and 30-day rollout plan. The most common format.",
    tier_2_cta: "Book the team workshop",
    tier_2_badge: "Most chosen",

    tier_3_name: "Custom engagement",
    tier_3_for: "Multi-team or enterprise",
    tier_3_price: "Let's talk",
    tier_3_unit: "scoped to outcome",
    tier_3_body:
      "Multiple teams, custom curriculum, recurring office hours, or a deeper architectural review. Quoted to the engagement.",
    tier_3_cta: "Open a conversation",
  },

  faq: {
    section_label: "Frequently asked",
    title: "Questions teams ask before booking.",
    items: [
      {
        q: "Do we need to know Claude Code before the first session?",
        a: "No. The pre-session setup takes about 10 minutes — installing Claude Code, signing in, running one test command. I send the guide once dates are confirmed. Session 1 assumes zero prior usage.",
      },
      {
        q: "Will we be coding live in front of the group?",
        a: "Yes — that's the whole point. We open your real project, the screen is shared, and we work together. No theoretical exercises on a fake repo. The first session ends with a CLAUDE.md committed to your repo.",
      },
      {
        q: "What if our codebase is confidential?",
        a: "Standard. I sign an NDA on request, and Claude Code runs locally against your machine — your source never leaves your environment unless your team chooses to send it. We can also work on a non-confidential subset if you prefer.",
      },
      {
        q: "Is this Claude-specific?",
        a: "The tool I teach is Claude Code, because that's what I use in production. The patterns (agent contracts, prompt caching, graceful degradation, multi-provider architecture) are vendor-neutral and transfer to any frontier model.",
      },
      {
        q: "What stack do you support?",
        a: "I've shipped production code in Ruby on Rails, TypeScript (Next.js, Fastify, Hotwire), Python (FastAPI, Celery), and Go. If your stack is in that set, I'm at home. If it isn't, tell me what you're on — most of the methodology is stack-agnostic.",
      },
      {
        q: "Can you run the training in French?",
        a: "Yes — I run sessions in English or French. The deliverables (CLAUDE.md, ARCHITECTURE.md, prompts) are written in the language your team works in.",
      },
    ],
  },

  cta: {
    section_label: "Next step",
    title: "Book a 20-minute intro call.",
    subtitle:
      "We talk through your team's setup, what you're trying to ship, and whether this is the right format. No pitch, no slides — just a conversation.",
    button: "Book the intro call",
    email_label: "Or email directly",
    email: "aimable@adusingi.com",
  },

  footer: {
    tagline: "AI-Assisted Engineering training, run by a practitioner who ships.",
    author: "Aimable Dusingi",
    location: "Based in Europe · Available worldwide remote",
    site_label: "adusingi.com",
    site_url: "https://adusingi.com",
    rights: "© 2026 Aimable Dusingi. All rights reserved.",
  },

  switcher: {
    label: "Prototype variant",
    a_name: "Editorial",
    b_name: "SaaS landing",
    c_name: "Practitioner",
    prev: "Previous variant",
    next: "Next variant",
    hint: "← / → to switch",
  },
};
