# Setup Guide — Complete Before Session 1
**Estimated time: ~15 minutes (10 min setup + 5 min reading)**
**Send to Saga's team after the proposal is accepted.**

---

Hi team,

Before our first session, please complete this quick setup and read-through. It takes about 15 minutes and lets us jump straight into the real work on day one — no time lost on installs or definitions.

---

## Step 1 — Get Claude Pro (3 min)

1. Go to [claude.ai](https://claude.ai)
2. Create (or sign in to) an account with your work email
3. Upgrade to the **Pro** plan ($20/month) — Saga covers this centrally for the team

> **Why Pro and not the free version?** Two reasons. First, the free tier is for trying things out — professional work runs on the paid tier (higher limits, the strongest models, and Claude Code). Second, evaluating whether paid plans are worth it for your team is one of the goals of these sessions — and you can only judge that fairly by working on the real thing. We'll compare it against what the free tools give you, live.

---

## Step 2 — Install Claude Code (5 min)

Claude Code is the coding agent we'll use in the sessions. You can run it two ways — pick whichever you prefer:

**Option A — VS Code extension (recommended, since the team already uses VS Code)**
Open VS Code → Extensions → search **"Claude Code"** → Install. Sign in with your account from Step 1.

**Option B — Command line**

Prerequisite: Node.js installed. Check with `node --version` in your terminal — if you see a version number, you're good. If not: [nodejs.org](https://nodejs.org) → download the LTS version.

```bash
npm install -g @anthropic-ai/claude-code
```

Then launch it and sign in:

```bash
claude
```

On first launch it opens a login page in your browser — sign in with the account from Step 1.

---

## Step 3 — Test that everything works (2 min)

In any project folder, start Claude Code and ask:

```
Explain in 3 sentences what a CLAUDE.md file is and what it's used for.
```

If you get a coherent answer, you're all set.

---

## Step 4 — Read: 12 Must-Know AI Terms (5 min)

So we don't spend session time on definitions, please read these once. **You should be able to explain each in your own words** — we'll move fast and build on them.

| # | Term | In one line |
|---|------|-------------|
| 1 | **LLM** (Large Language Model) | The AI brain behind ChatGPT, Claude, Gemini, Copilot — it predicts the next chunk of text, at scale. |
| 2 | **Hallucination** | When the AI makes something up — confidently, and completely wrong. (We'll dig into this live.) |
| 3 | **Token** | The building block of AI text — a chunk of a word, and the thing you actually pay for. |
| 4 | **Training vs Inference** | Teaching the model (slow, once) vs. the model answering you (fast, every time). |
| 5 | **Fine-tuning** | Taking a general model and specializing it on focused data for one job. |
| 6 | **Reinforcement Learning** | The model learns by trial, reward, and repeat — how assistants are tuned to be helpful. |
| 7 | **Distillation** | Teaching a small model to mimic a big one — faster and cheaper, nearly as good. |
| 8 | **RAG** (Retrieval-Augmented Generation) | AI + your own documents: it fetches relevant passages before answering, which cuts hallucinations. |
| 9 | **Chain of Thought** | The model works through a problem step by step — slower, but far more accurate. |
| 10 | **Weights** | The billions of numbers inside the model that store what it "knows." |
| 11 | **Validation Loss** | A score for how well training is going — lower is better; catches memorizing-instead-of-learning. |
| 12 | **Coding Agent** | An AI that doesn't just suggest code — it writes, runs, tests, and debugs on its own (Claude Code, Copilot agent mode, Cursor). |

---

## If something goes wrong

Reply to this email with a screenshot of the error — we'll sort it out before the session.

---

## What we'll do in session 1

No time wasted on theory. We go straight to:
- Building your team's shared **context file** together on a real project — the "team brain" that gives the AI consistent context for everyone (we'll show it across the tools you use: Claude Code's `CLAUDE.md`, GitHub Copilot's instructions, and Claude/ChatGPT Projects)
- Using AI to **structure an idea** you're currently working on, before writing any code
- A quick, honest **free vs Pro** comparison so you can see the difference for yourselves

Come with a project you're actively working on open in your editor.

See you soon,
Aimable
