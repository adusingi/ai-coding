# Handoff: AI Coaching Offer for Saga

**Date:** 2026-05-26
**Next session goal:** Saga's reply to the LinkedIn intake + the tools email has arrived. Incorporate his answers into the proposal, finalize dates, and send `docs/proposal-saga.md`.

---

## Context

Aimable Dusingi (adusingi) had a 50-min meeting with Saga, an entrepreneur with a 5-person engineering team. Saga sent a follow-up message requesting a coaching proposal:

> "Two sessions of 60 minutes each for my team and myself (5 people). Session 1: audit + initial recommendations. Session 2: detailed recommendations and their implementation."

The goal is to:
1. Design and send a proposal to Saga
2. Use this engagement to build reusable course material — target audience: engineers who haven't moved to AI coding yet, and people who want to start coding with AI

---

## Status of Emails Sent

| Message | Channel | Status |
|---------|---------|--------|
| LinkedIn intake (stack, deployment, AI usage, desired outcome) | LinkedIn | **Awaiting reply** |
| Tools follow-up (editors, AI tools used by the team) | Email | **Awaiting reply** |

**Next session starts here:** incorporate Saga's replies into the session design, adjust stack-specific examples, finalize and send the proposal.

---

## What We Know About Saga's Team

| Dimension | Status |
|-----------|--------|
| Team size | 5 people (including Saga) |
| AI maturity | Casual dabblers (ChatGPT/Copilot for snippets, no structured workflow) |
| Product | On-premise Docker SaaS for enterprise clients — analytics platform for logs + Microsoft server management |
| Stack | **Unknown — awaiting reply** |
| Language | French (Saga communicates in French) |
| Issue tracker | **Unknown — awaiting reply** |

---

## The Offer — Fully Designed

### Outcome after session 2
Every team member (not just Saga) can:
1. Run an architecture audit on their codebase with AI and ask Claude for optimization suggestions
2. Use a shared `CLAUDE.md` as a team brain — consistent AI context for all 5 people
3. Use `grill-me` to stress-test ideas before building
4. Know the possibility space exists: prototyping, grill-with-docs, to-issues

Format: **workshop, not presentation** — everyone participates, everyone leaves at the same level. No passive observers.

---

### Session 1 — Workflow Audit + Foundation (60 min)

| Time | What |
|------|------|
| 15 min | Structured audit questionnaire — how does the team work today? (see `docs/session-1-questionnaire.md`) |
| 15 min | Initial recommendations based on their answers |
| 20 min | Live: build their `CLAUDE.md` together + demo `grill-me` on something they're actually building |
| 10 min | Wrap + homework assignment |

**Homework:** each person picks one real task they're working on that week, runs `grill-me` on it with Claude, and brings the output to session 2.

---

### Session 2 — Architecture + Possibilities (60 min)

| Time | What |
|------|------|
| 10 min | Debrief on homework — what did they try, what happened? |
| 25 min | Architecture audit: run `/architecture` on their codebase, then ask Claude "what's missing / what would you optimize?" |
| 15 min | Open the possibility space: `prototype` for brainstorming, tease `grill-with-docs` + `to-issues` as next level |
| 10 min | Deliver personalized recommendations |

---

### Deliverables (included in price)

**A — Personalized recommendations doc:** the 3 priority changes for their team, in order, with rationale. Written by Aimable after session 1.

**B — Starter kit** (see `docs/starter-kit-template.md`):
- Their finalized `CLAUDE.md`
- Prompt cheatsheet (architecture audit, grill-me, prototyping, ticket generation)
- 30-day habit plan

---

### Pre-session (before session 1)

Setup guide ready at `docs/pre-session-setup.md` — to be sent to the team after proposal is accepted.
- Install Claude Code
- Create Anthropic account (Pro plan)
- Test it works
- ≈10 minutes

**Note:** adjust the "Pro plan" line if Saga is covering the cost centrally for the team.

---

### Pricing

| | |
|---|---|
| Proposal price | **€600** |
| Negotiation floor | **€500** |
| Basis | €150/person standard rate → group discount |

---

## Documents Ready to Send

| File | Purpose | Status |
|------|---------|--------|
| `docs/proposal-saga.md` | Proposal email in French | Ready — send once dates confirmed |
| `docs/pre-session-setup.md` | Setup guide for the team in French | Ready — send after proposal accepted |
| `docs/starter-kit-template.md` | Post-session deliverable template | Ready — fill in after session 1 |
| `docs/session-1-questionnaire.md` | Internal audit script for session 1 | Ready |

---

## Open Questions (resolve in next session)

1. **Saga's stack** — which portfolio examples to demo live in session 2 (network-mobayilo if enterprise Docker; adjust otherwise)
2. **Issue tracker** — do they use GitHub issues, Jira, Notion, or nothing? Determines whether `to-issues` is relevant to show
3. **Claude Pro payment** — does Saga cover it centrally or does each person pay individually? Adjust the setup guide accordingly
4. **Dates** — once proposal is accepted, pick session 1 and session 2 dates with at least 1 week between them

---

## Reference Files

- Portfolio analysis: `/Users/mac3jis/Documents/Code/p/ai-coding-for-engineers/PORTFOLIO_ANALYSIS.md`
- Most relevant project for Saga: `/Users/mac3jis/Documents/Code/p/network-mobayilo`
- Working directory: `/Users/mac3jis/Documents/Code/p/ai-coding-for-engineers/`
