window.AICodingContent = {
  lang: "en",
  meta: {
    title: "AI Coding for Engineering Teams | Aimable Dusingizimana",
    description:
      "A hands-on AI-assisted engineering package for teams that want to use Claude Code, architecture audits, team context, and prototypes in real software work."
  },
  nav: [
    { label: "Package", href: "#package" },
    { label: "Program", href: "#program" },
    { label: "Proof", href: "#proof" },
    { label: "Deliverables", href: "#deliverables" }
  ],
  hero: {
    eyebrow: "AI coding training for engineering teams",
    title: "Turn AI from a side tool into an engineering practice.",
    lead:
      "A hands-on package for teams that already ship software and want Claude Code, architecture audits, agent memory, and rapid prototyping to become part of the way they work.",
    primaryCta: "Discuss the package",
    secondaryCta: "View the program",
    proof: ["2 live workshops", "Team CLAUDE.md", "Architecture audit", "30-day adoption plan"],
    imageAlt: "Software engineers collaborating in an AI-assisted engineering workshop"
  },
  positioning: {
    title: "This is not prompt tips. It is operating discipline.",
    text:
      "The package is built from production work across SaaS, telecom audit, transcription, family scheduling, and automation projects. The point is not to make engineers depend on AI. The point is to help them use AI inside a serious workflow: scoped context, explicit constraints, tests, code review, security gates, and shipping discipline."
  },
  package: {
    title: "The package",
    subtitle: "A focused team adoption sprint that starts with your current workflow and ends with reusable habits.",
    items: [
      {
        k: "01",
        title: "Audit how the team works today",
        body:
          "We map how features start, where knowledge gets stuck, what tools the team already uses, and where AI currently helps or hurts."
      },
      {
        k: "02",
        title: "Build the team context layer",
        body:
          "Together we create the first team CLAUDE.md: project context, stack, architecture, conventions, boundaries, and glossary."
      },
      {
        k: "03",
        title: "Run an architecture audit",
        body:
          "The team learns to ask AI for a grounded architecture document, then to pressure-test gaps, risks, and optimization opportunities."
      },
      {
        k: "04",
        title: "Prototype before commitment",
        body:
          "Engineers practice using throwaway prototypes for UI direction, data models, and state logic before spending production effort."
      }
    ]
  },
  program: {
    title: "Two sessions, one working system",
    subtitle:
      "The format is a workshop, not a lecture. Everyone participates, uses the tool, and leaves with the same baseline.",
    sessions: [
      {
        label: "Before session 1",
        title: "Setup",
        duration: "10 minutes async",
        bullets: [
          "Create or confirm Claude access",
          "Install Claude Code",
          "Run a small first test in a real project folder"
        ]
      },
      {
        label: "Session 1",
        title: "Workflow audit and foundations",
        duration: "60 minutes live",
        bullets: [
          "Structured audit of current workflow, blockers, and AI usage",
          "Initial recommendations based on team reality",
          "Live build of the team CLAUDE.md",
          "First idea-structuring exercise on a real feature"
        ]
      },
      {
        label: "Between sessions",
        title: "Real task homework",
        duration: "1 week of normal work",
        bullets: [
          "Each engineer applies the workflow to one current task",
          "Capture what worked, what failed, and where context was missing",
          "Bring a concrete example to the second session"
        ]
      },
      {
        label: "Session 2",
        title: "Architecture audit and possibilities",
        duration: "60 minutes live",
        bullets: [
          "Review the team's first AI-assisted work",
          "Generate and inspect an architecture document",
          "Ask for risks, missing pieces, and optimization candidates",
          "Open the next layer: prototypes, tickets, documentation, and review loops"
        ]
      }
    ]
  },
  lifecycle: {
    title: "Where AI fits in the software lifecycle",
    subtitle:
      "AI does not replace product judgment, design taste, engineering rigor, security review, or support feedback. It reduces the friction between them.",
    phases: [
      ["Prototype", "Clarify the idea and test the risky part first."],
      ["Design", "Turn wireframes and constraints into concrete screens."],
      ["Build", "Generate code inside known architecture and tests."],
      ["Deploy", "Review security, permissions, CI, and release checks."],
      ["Support", "Feed user feedback back into the next iteration."]
    ]
  },
  memory: {
    title: "The core habit: give the agent memory it can trust",
    body:
      "Teams get better results when AI has the same durable context engineers rely on: architecture notes, conventions, glossary, product constraints, and decision history. Short-term conversation memory is useful, but team-level documents turn the agent into a consistent collaborator across sessions and people.",
    layers: [
      "Current task context",
      "Project architecture",
      "Team conventions",
      "Glossary and domain rules",
      "Tools, tests, and review gates"
    ]
  },
  proof: {
    title: "Built from production patterns",
    subtitle:
      "The course material comes from real projects, not demos. These patterns are already visible in shipped systems.",
    projects: [
      ["Telecom audit SaaS", "Agentic repair loop, prompt caching, multi-tenant architecture"],
      ["Calling SaaS", "Rails 8, Go CLI, Stripe, passwordless auth, ledger billing"],
      ["Transcription SaaS", "Provider switching, background jobs, usage metering"],
      ["Family calendar board", "Vision extraction, Japanese documents, structured events"],
      ["Link curation board", "Claude classification, Telegram operator workflow"]
    ],
    practices: [
      "CLAUDE.md as an AI agent contract",
      "Schema-first implementation",
      "Architecture documentation before large changes",
      "Background jobs and retries for slow work",
      "Webhook signatures, token hashing, and rate limits",
      "CI as the last line before production"
    ]
  },
  deliverables: {
    title: "What the team receives",
    items: [
      {
        title: "Personalized recommendations",
        body: "The three priority changes for the team, ordered by impact and explained in plain engineering terms."
      },
      {
        title: "Starter kit",
        body: "Final CLAUDE.md, prompt cheatsheet, architecture audit prompt, prototype prompt, and ticket-generation prompt."
      },
      {
        title: "30-day adoption plan",
        body: "A week-by-week plan to turn the workshop into repeatable habits instead of a one-off training."
      },
      {
        title: "Reusable team workflow",
        body: "A practical way to structure ideas, audit architecture, prototype, and document decisions with AI."
      }
    ]
  },
  audience: {
    title: "Best fit",
    fit: [
      "Engineering teams of 3 to 8 people",
      "Teams that already have a real codebase",
      "Engineers who have tried ChatGPT or Copilot but lack a shared workflow",
      "Founders or technical leads who hold too much unwritten context"
    ],
    notFit: [
      "A passive lecture for a large audience",
      "A replacement for code review or testing",
      "A generic AI overview without touching your workflow"
    ]
  },
  cta: {
    title: "Bring AI into the way your team already ships.",
    body:
      "Start with a short call. We will confirm team size, stack, current AI usage, and whether the package should focus on architecture, prototyping, documentation, or delivery habits.",
    email: "mailto:aimable@adusingi.com?subject=AI%20coding%20team%20package",
    button: "Contact Aimable"
  },
  footer: {
    name: "Aimable Dusingizimana",
    location: "Based in Okayama, Japan",
    note: "English-first site. French content can be added through a parallel content file."
  }
};
