# Setup Guide — Complete Before Session 1
**Estimated time: 10 minutes**
**Send to Saga's team after the proposal is accepted.**

---

Hi team,

Before our first session, please complete this quick setup on your machine. It takes about 10 minutes and lets us jump straight into the work on day one.

---

## Step 1 — Create an Anthropic account (2 min)

1. Go to [claude.ai](https://claude.ai)
2. Create an account with your work email
3. Choose the **Pro** plan ($20/month) — check with Saga about reimbursement

> If you already have an account, skip to step 2.

---

## Step 2 — Install Claude Code (5 min)

Claude Code is the tool we'll use in the sessions. It's a command-line interface — open your terminal and follow these steps.

**Prerequisite: Node.js installed on your machine.**
To check: run `node --version` in your terminal. If you see a version number, you're good.
If Node is not installed: [nodejs.org](https://nodejs.org) → download the LTS version.

**Install Claude Code:**

```bash
npm install -g @anthropic-ai/claude-code
```

**Connect your account:**

```bash
claude
```

On first launch, Claude Code will open a login page in your browser. Sign in with the account you created in step 1.

---

## Step 3 — Test that everything works (3 min)

In your terminal, inside any project folder, type:

```bash
claude
```

Then ask this question:

```
Explain in 3 sentences what a CLAUDE.md file is and what it's used for.
```

If you get a coherent answer, you're all set.

---

## If something goes wrong

Reply to this email with a screenshot of the error — we'll sort it out before the session.

---

## What we'll do in session 1

No time wasted on theory. We go straight to:
- Building your team's `CLAUDE.md` together on a real project
- Using Claude to structure an idea you're currently working on

Come with a project you're actively working on open in your editor.

See you soon,
Aimable
