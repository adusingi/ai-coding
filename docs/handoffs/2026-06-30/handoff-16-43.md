# Handoff — SiTelSo / Academy work

**Date:** 2026-06-30 16:43
**Repos involved:**
- `academy-mobayilo` (`/Users/mac3jis/Documents/Code/p/academy-mobayilo`) — Next.js app, `academy.mobayilo.com`, deploys from `main` via Dokploy
- `ai-coding` (`/Users/mac3jis/Documents/Code/p/ai-coding`) — consulting docs + static sites (primary working dir)

---

## Context

Aimable runs the **first training session Friday** with **SiTelSo** (company, `sitelso.net`). **Saga is the CEO** who booked it (not the company — this was corrected mid-session; "Saga" only remains where it means the person). Team: 5 engineers, French-speaking, VS Code + GitHub Copilot + Claude/ChatGPT chat, **GitLab**, Python (no framework) + Django + Docker, manual deploy (no CI/CD). Goals: evaluate paid AI plans + a customization/prompting strategy. Engagement = 2× 60-min workshops; session 1 = audit + build a shared context file + grill-me + free-vs-Pro compare.

Source materials live in `ai-coding/consulting/clients/sitelso/` (en + fr): `proposal.md`, `session-1-questionnaire.md`, `pre-session-setup.md`, `starter-kit-template.md`, `handoff-offer.md`. The `handoff-offer.md` has the full engagement design and the team's tool/stack answers.

---

## What shipped this session

**Built a per-cohort content gate in `academy-mobayilo`** so a private page is visible only to one client team. Key code (see `git log` on `development`):
- `lib/content.ts` — `cohort` frontmatter field; `orderCategoryEntries()` pins the "Program" category last; "Program" color.
- `lib/enrollment.ts` — `getViewerEnrollment()` (status + cohort), `canAccessCohort()`.
- `app/learn/[...slug]/page.tsx` — cohort gating (private regardless of `MEMBER_GATING_ENABLED`, admin bypass), passes `signedIn` + `team` to the gate.
- `components/Gate.tsx` — cohort message, exact brand label, **Sign-in vs Sign-out** based on `signedIn` (fixes a sign-in redirect loop). Sign-in route is **`/sign-in`** (not `/login`).
- `components/sign-out-button.tsx` + `components/Header.tsx` — global sign-out + shows current email (testing aid).
- `scripts/_env.ts` + `scripts/seed-enrollment.ts` — script self-loads `.env.local`; takes optional `[cohort]` arg.
- Gated page: `content/program/sitelso/pre-session-setup.mdx` (`cohort: sitelso`, category **Program**). **Live URL:** `https://academy.mobayilo.com/learn/program/sitelso/pre-session-setup`
- AI-engineering docs made **public** (`content/ai-engineering/*`); `docs/RUNBOOK.md` updated (Mailpit + correct dev ports 3100/5434).

The pre-session guide content/decisions (Claude Pro, Claude Code via VS Code ext, 12 AI terms as prep, optional terminal tools, "15 minutes minimum") are captured in the files themselves — read `consulting/clients/sitelso/fr/pre-session-setup.md` and the `.mdx`.

---

## Current git state

- **academy-mobayilo:** `development` = `main` = `cfd1d34`, **both pushed**. Production deploy was triggered (`git push origin main`) — **verify it finished**: `curl -s -o /dev/null -w "%{http_code}\n" https://academy.mobayilo.com`. Only `development` + `main` branches remain (all feature branches deleted).
- **ai-coding:** `development` pushed (`b6dbc03`). **Local `main` is fast-forwarded to `b6dbc03` (+11) but NOT pushed** (user chose "Academy only"). `origin/main` still `158c070`. Branch `radical-catsup` kept (unmerged worktree experiment — `89121bd` CONTEXT.md domain model; do not delete without asking).

---

## Open / next steps

1. **Enroll the SiTelSo team on the PRODUCTION DB** (the blocker for them logging in). Enrollments added this session were only in the **local dev DB**. Options: admin UI at `academy.mobayilo.com/admin` (Enroll + invite → then mark **active**), or `DATABASE_URL="<prod>" npx tsx scripts/seed-enrollment.ts <email> sitelso`. Cohort must be **`sitelso`**, status **active**. Need the 5 SiTelSo emails. Auth is **Better Auth, passwordless** — magic link (any email) or Google; they sign in with the **same email** you enroll.
2. **Decide enrollment ergonomics** — user asked whether the script is automatic (it's not, by design). Offered: batch-enroll multiple emails, a baked-in `enroll-sitelso` script, or just use admin UI. Awaiting their pick + the emails.
3. **ai-coding production:** push local `main` (`/ship` it) if/when they want the consulting site/docs live.
4. **Possible follow-ups not done:** align the SiTelSo `proposal.md` (en/fr) + `starter-kit-template.md` to the two stated goals (license cost/benefit + customization strategy); convert the FR `proposal.md` to **vous** (still uses "tu"); a 60-min run-of-show; fold Mailpit into root `docker-compose.yml`.

---

## Local env reminders (after restart)

- Start infra before `pnpm dev` (port **3100**): `docker compose up -d` (Postgres) **and** `docker compose -f packages/mailpit/docker-compose.mailpit.yml up -d` (Mailpit, inbox at `http://localhost:8025`). Without Mailpit, sign-in emails silently fail. See `academy-mobayilo/docs/RUNBOOK.md`.
- Admin email (bypasses all gates): `adusingi@mobayilo.com`. Test member: `adusingi+sitelso@mobayilo.com` (active in `sitelso`, dev DB only).

## Conventions

- Feature branches off `development`; never work on `main`/`development` directly; ask before deleting branches. Academy `main` is **fast-forward only** from `development`; **ask before pushing `main`**.
- French client comms use **vous**, never "tu".
- Commits end with `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`.

## Suggested skills next session

- `/ship-feat` or `/ship` — to merge/ship further work (ship asks before pushing `main`).
- `/run` or `/verify` — to launch academy locally and confirm the gate/sign-in flow after restart.
- `/code-review` — before shipping new changes.
