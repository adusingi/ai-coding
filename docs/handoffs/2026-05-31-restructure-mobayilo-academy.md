# Handoff — Mobayilo AI Academy Folder Restructuring

**Repo:** `/Users/mac3jis/Documents/Code/p/ai-coding`
**Branch:** `codex/ai-coding-site-dev-style`
**Date:** 2026-05-31

---

## What this session established

Aimable is launching **Mobayilo AI Academy** (`academy.mobayilo.com`). The Academy is an umbrella that offers multiple services:

1. **Cohort program** — 6–8 weeks intensive AI coding training for young Rwandan engineers who can code but haven't shipped, followed by a 3-month funded product development phase for ideas that solve real Rwandan problems. Full PRD at `academy/prd.md`.
2. **Team training** — AI coding workshops for engineering teams (the existing B2B package, formerly at `ai-coding.adusingi.com`). Saga was the first client.
3. Future services TBD.

**`mobayilo.com` is an existing, unrelated product — do not touch it.**

The repo currently holds these projects mixed together. This session designed the final structure and partially reorganized it. The agent's job is to complete the restructuring.

---

## Target folder structure

```
ai-coding/                         ← repo root = Mobayilo AI Academy
├── README.md                      ← update to reflect final structure
├── CNAME                          ← keep in root (GitHub Pages, points to ai-coding.adusingi.com — will be reconfigured later)
├── robots.txt                     ← keep in root
├── sitemap.xml                    ← keep in root
├── 404.html                       ← keep in root
├── skills/                        ← Claude Code project skills, keep as-is
├── curriculum/                    ← shared teaching materials (used by both cohort + training services)
│   ├── en/
│   │   ├── ai-agent-memory.md
│   │   └── shipping-software.md
│   └── fr/                        ← currently empty, keep the directory
├── site/                          ← academy.mobayilo.com — to be built fresh (empty for now)
├── cohort/                        ← Service: young Rwandan engineers program
│   └── prd.md
└── training/                      ← Service: AI coding workshops for engineering teams
    ├── site/                      ← the current B2B site (was package-site/) — ai-coding.adusingi.com
    │   ├── index.html
    │   ├── assets/
    │   ├── i18n/
    │   ├── js/
    │   ├── README.md
    │   ├── SITE_HANDOFF.md
    │   ├── PORTFOLIO_ANALYSIS.md
    │   └── legacy/                ← old root site (index.html, styles.css, script.js, content/, assets/)
    └── clients/
        └── saga/
            ├── en/
            │   ├── proposal.md
            │   ├── session-1-questionnaire.md
            │   ├── pre-session-setup.md
            │   └── starter-kit-template.md
            ├── fr/
            │   ├── proposal.md
            │   ├── session-1-questionnaire.md
            │   ├── pre-session-setup.md
            │   └── starter-kit-template.md
            └── handoff-offer.md
```

---

## Current state of the repo (what already moved this session)

The prior session did a partial reorganization. Git already tracks these renames (staged, not yet committed):

| From | To |
|------|----|
| `site/*` | `package-site/*` |
| `docs/en/ai-agent-memory.md` | `consulting/shared/curriculum/en/ai-agent-memory.md` |
| `docs/en/shipping-software.md` | `consulting/shared/curriculum/en/shipping-software.md` |
| `docs/en/proposal-saga.md` | `consulting/clients/saga/en/proposal.md` |
| `docs/en/session-1-questionnaire.md` | `consulting/clients/saga/en/session-1-questionnaire.md` |
| `docs/en/pre-session-setup.md` | `consulting/clients/saga/en/pre-session-setup.md` |
| `docs/en/starter-kit-template.md` | `consulting/clients/saga/en/starter-kit-template.md` |
| `docs/fr/*` | `consulting/clients/saga/fr/*` |
| `docs/handoff-saga-offer.md` | `consulting/clients/saga/handoff-offer.md` |
| `PORTFOLIO_ANALYSIS.md` | `package-site/PORTFOLIO_ANALYSIS.md` |
| `SITE_HANDOFF.md` | `package-site/SITE_HANDOFF.md` |
| `assets/*`, `content/*`, `index.html`, `styles.css`, `script.js` | `package-site/legacy/*` |

**Untracked (not yet moved):**
- `academy/prd.md` — needs to move to `cohort/prd.md`
- `skills/grill-me/`, `skills/to-issues.md`, `skills/to-prd.md` — keep in `skills/`
- `skills.zip` — can be deleted (already extracted)

---

## Moves remaining to execute

Use `git mv` for all tracked files to preserve history. Use plain `mv` for untracked files.

```bash
# 1. package-site/ → training/site/
git mv package-site training/site

# 2. consulting/shared/curriculum/ → curriculum/
mkdir -p curriculum/fr
git mv consulting/shared/curriculum/en/ai-agent-memory.md curriculum/en/ai-agent-memory.md
git mv consulting/shared/curriculum/en/shipping-software.md curriculum/en/shipping-software.md
rmdir consulting/shared/curriculum/en consulting/shared/curriculum consulting/shared

# 3. consulting/clients/saga/ → training/clients/saga/
mkdir -p training/clients
git mv consulting/clients/saga training/clients/saga
rmdir consulting/clients consulting

# 4. academy/prd.md → cohort/prd.md
mkdir -p cohort
mv academy/prd.md cohort/prd.md
rmdir academy

# 5. Create empty site/ directory (future academy.mobayilo.com)
mkdir -p site

# 6. Delete skills.zip (already extracted)
rm skills.zip
```

---

## After moving — update README.md

Replace the content of `README.md` with the structure below:

```markdown
# Mobayilo AI Academy

**academy.mobayilo.com** — AI coding training for African engineers and teams.

## Services

### `cohort/` — Engineer Cohort Program
6–8 weeks of intensive AI coding training for young Rwandan engineers, followed by
a 3-month funded product development phase. Full brief: `cohort/prd.md`.

### `training/` — Team AI Training
AI coding workshops for engineering teams. Site: `training/site/`. Client work: `training/clients/`.

## Shared

### `curriculum/` — Teaching materials used across all services.
### `site/` — academy.mobayilo.com website (to be built).
### `skills/` — Claude Code project-level skills.
```

---

## Commit when done

```bash
git add -A
git commit -m "Restructure repo as Mobayilo AI Academy

All projects now live under Academy services:
- cohort/: young Rwandan engineer program
- training/: B2B team AI training (ex package-site + consulting)
- curriculum/: shared teaching materials
- site/: future academy.mobayilo.com (empty, to be built)

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Context for next steps (after restructuring)

Once the repo is clean, the next task is building `site/` — the `academy.mobayilo.com` static site. It should present both services (cohort + team training) under the Mobayilo Academy brand. Refer to:

- `cohort/prd.md` — full Academy program spec, including the application form (4 questions)
- `training/site/` — existing B2B site for reference on how the team training service is described
- `training/site/i18n/en.js` — current copy for the team training offering

The Academy site is English-only for v1. Mobile-first (Rwandan applicants are primarily mobile). Static HTML/CSS/JS, no build step, deploy to `academy.mobayilo.com`.

---

## Skills available for next session

- `/run` — to preview the site locally once built
- `/verify` — to confirm the site renders correctly before deploy
- `/code-review` — before committing the new site
