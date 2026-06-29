# AI-Assisted Engineering — Portfolio Analysis
*Aimable Dusingi · May 2026 (Wave 2 addendum: June 2026 · Wave 3 addendum: June 2026)*

A structured inventory of practices, skills, and tech patterns across production projects built with AI as a core development tool. This document feeds the design of a course offering for engineering teams — and, increasingly, the product thesis behind **Mobayilo as a startup building the next generation of AI-native tools**.

Sections 1–11 cover the original **five SaaS platforms** (network-mobayilo, mobayilo, veronese, resources, kazoku-calendar). **Section 12 (Wave 2)** adds six newer, smaller, ship-fast sites built in 2026 — `adusingi-web`, `bentokumiko`, `bentokumiko-places`, `curator-board`, `inkoranyamuga`, `world-time` — and surfaces the *new and reinforced* patterns they reveal. **Section 13 (Wave 3)** adds three of the most recent 2026 projects — `mytrip`, `x-bookmarks`, and `emily_family_assistant` — which together mark the inflection from *AI-assisted engineering* to *AI-native products*: a shared, productized design system (`@mobayilo/*` packages) and a full autonomous **agent runtime** (Emily).

---

## The Portfolio at a Glance

| Project | Domain | Stack Core | AI Role |
|---------|--------|-----------|---------|
| **network-mobayilo** | Telecom network audit SaaS | Next.js + Fastify + Python + Go | Claude (autonomous code repair agent) |
| **mobayilo** | Browser-based international calling SaaS | Rails 8 + Go CLI + Twilio + Stripe | None in-app (AI-assisted development) |
| **veronese** | Audio transcription SaaS | Rails 8 + Whisper/Fireworks + Go CLI + Stripe | Whisper (speech-to-text), multi-provider |
| **resources** | Personal link curation board | Next.js + Drizzle + Python + Telegram | Claude Haiku (categorization) |
| **kazoku-calendar** | Family schedule board (iPad kiosk) | Next.js + Drizzle + Python + Telegram | Claude Sonnet (OCR + structured extraction) |

---

## 1. Languages & Frameworks

### Polyglot by Design
Every project uses the right tool for each layer — this is a deliberate pattern, not accident:

| Layer | Technology | Projects |
|-------|-----------|----------|
| **Web frontend** | Next.js 15 + React 19 + TypeScript | network-mobayilo, resources, kazoku |
| **Web frontend** | Hotwire (Turbo + Stimulus) | mobayilo, veronese |
| **API/Backend** | Ruby on Rails 8.1 | mobayilo, veronese |
| **API/Backend** | Fastify 5 (Node.js) | network-mobayilo |
| **Data/ML layer** | Python 3.12 (FastAPI + Celery) | network-mobayilo |
| **AI agent layer** | Python 3.11 (Telegram bot + Anthropic SDK) | resources, kazoku |
| **CLI tools** | Go (Cobra framework) | mobayilo, veronese, network-mobayilo |
| **Typing** | TypeScript strict, Python mypy strict | network-mobayilo, kazoku, resources |
| **Styling** | Tailwind CSS | all projects |

### Why This Matters for a Course
The practitioner doesn't pick one language — they pick the *right language per concern*. Python for AI/parsing, Go for CLI distribution, Rails for rapid SaaS monolith, TypeScript for type-safe APIs. This is a senior engineering judgment call that AI accelerates but cannot replace.

---

## 2. AI / LLM Integration Patterns

This is where the deepest and most teachable work lives.

### 2.1 Claude for Structured Extraction (kazoku-calendar)
**Pattern:** Vision + text → structured JSON
- Input: photos of Japanese school letters, handwritten schedules
- Claude extracts events, todos, dates (Japanese calendar formats: 月日, 明日, 来週)
- Output: typed JSON for family calendar
- **Key practice:** Hybrid pipeline — Claude first, regex fallback if API fails
- **Lesson:** AI as a soft parser with a hard fallback is more reliable than pure AI

### 2.2 Claude for Classification (resources)
**Pattern:** URL + metadata → category slug
- Scrape OG tags, pass to Claude Haiku with category list
- Constraint: JSON-only output, fallback to "other"
- Uses cheapest model (Haiku) for low-stakes classification
- **Lesson:** Match model cost to task complexity — not every task needs Sonnet

### 2.3 Claude for Autonomous Code Repair (network-mobayilo)
**Pattern:** Agentic loop — diagnose → patch → test → PR
- When a file parser fails: Claude reads source files + file preview
- Returns structured diagnosis: `{ is_code_bug, confidence, diagnosis, fix_description, files }`
- If confidence ≥ 0.7: apply patch → run linter + tests → re-run parser → open GitHub PR
- **Prompt caching:** Parser source files cached as stable blocks (cost reduction)
- **Safety:** 512-byte file preview limit (prompt injection prevention), confidence threshold, backup/restore
- **Lesson:** The most sophisticated use — AI as an autonomous engineer, but with hard safety gates

### 2.4 Multi-Provider Transcription (veronese)
**Pattern:** Runtime provider switching
- Two transcriber implementations: Fireworks API (cloud, speaker diarization) vs local Whisper
- Single env var toggle: `USE_FIREWORKS_TRANSCRIPTION`
- Both share same interface, same output format
- **Lesson:** Decouple from a single AI vendor — strategy pattern for provider swapping

### 2.5 Prompt Caching (network-mobayilo)
- Parser source files sent as ephemeral cached blocks
- Dynamic content (failing file) never cached
- Reduces repeated API cost significantly for the repair loop
- **Lesson:** Understand what's stable vs dynamic in your prompts — cache the stable parts

### 2.6 Graceful Degradation
- kazoku: Claude unavailable → regex parser
- resources: no fallback needed (low-stakes)
- veronese: Fireworks → local Whisper
- network-mobayilo: Claude → OpenAI fallback
- **Lesson:** Production AI features must degrade gracefully — design the failure path first

---

## 3. Architecture Patterns

### 3.1 Layered Service Architecture (Rails projects)
```
Controllers → Service Objects → Models → DB
```
- Services named by domain: `Billing::CallCharge`, `Ledger::CreateTransaction`, `Transcription::Pipeline`
- Single-responsibility callables (`.call` convention)
- **Teachable:** This is not Rails-specific — it's domain-driven design applied to any framework

### 3.2 Idempotent Ledger / Immutable Audit Trail
Present in both mobayilo (calling) and veronese (transcription):
- All financial events stored as immutable ledger entries
- Balance = sum of transactions (never a mutable counter)
- Idempotency keys on creation endpoints
- **Teachable:** How to build billing you can trust

### 3.3 Background Job Architecture
- veronese: Sidekiq (Redis-backed) with MAX_ATTEMPTS + exponential backoff
- mobayilo: Solid Queue (Rails 8 native)
- network-mobayilo: BullMQ (Node) + Celery (Python) — dual queue for polyglot
- **Pattern:** Never do slow work in a request. Queue everything. Retry with backoff.

### 3.4 Monorepo with Turbo (network-mobayilo)
```
apps/web, apps/cli
services/api, services/data
packages/types  ← shared TypeScript types
```
- Schema-first: define DB tables + Zod types → implement routes → build UI
- Auto-generated OpenAPI spec (never edit manually)
- **Teachable:** Type safety end-to-end in a polyglot system

### 3.5 CLAUDE.md as AI Agent Contract
Every project that uses AI-assisted development has an explicit agent instruction file:
- Tech stack, constraints, naming conventions
- What the AI must never do (hallucinate packages, break multi-tenancy, ignore architecture docs)
- "Proposal first, implement second" for non-trivial changes
- **This is one of the most unique and teachable practices in the portfolio**

### 3.6 Multi-Tenancy as Non-Negotiable (network-mobayilo)
- Every DB query scoped to `workspace_id` — middleware enforced
- Workspace-based subdomain routing (Nginx → `X-Workspace` header)
- **Teachable:** How to design multi-tenancy from day one, not bolt it on later

---

## 4. Authentication Patterns

A remarkably complete auth education across five projects:

| Pattern | Project | Detail |
|---------|---------|--------|
| Passwordless / magic link | mobayilo, veronese | Devise passwordless gem |
| OTP email codes | kazoku | 6-digit, 15-min expiry |
| Google / X OAuth2 | mobayilo, veronese | OmniAuth |
| Microsoft SSO + SCIM | network-mobayilo | WorkOS |
| Bearer tokens (API) | veronese, network-mobayilo | SHA-256 hashed, one-time plaintext |
| Device authorization (CLI) | mobayilo, network-mobayilo | OAuth device code flow |
| API key (simple) | resources, kazoku | x-api-key header |

**Key insight:** Every project uses passwordless authentication — no passwords. This is a deliberate, teachable choice.

---

## 5. CLI Tool Engineering

Three separate Go CLIs across the portfolio:
- `veronese` — episode management, export, transcription polling
- `moby` (mobayilo) — call, topup, caller-id, agent
- `mobayilo` (network) — auth, workspace, data operations

**Shared patterns:**
- Cobra framework, same project structure
- Device authorization flow for login
- Bearer token storage in `~/.config/<app>/config.json`
- Multi-platform matrix builds (darwin/linux, amd64/arm64)
- Homebrew tap auto-generation from CI (veronese)
- Static marketing site for distribution (veronese CLI site on Cloudflare)

**Teachable:** Building a professional CLI is a force multiplier — it's the same API, consumable from a terminal, scriptable, automatable.

---

## 6. Infrastructure & Deployment

### Deployment Stack (by scale)
| Tool | Use Case | Projects |
|------|----------|----------|
| **Dokploy** | Self-hosted VPS, small projects | resources, kazoku, network-mobayilo |
| **Kamal** | Production Rails deployment | mobayilo, veronese |
| **Cloudflare Pages** | Static sites, CDN | veronese CLI site, network docs |
| **Cloudflare R2** | Object storage (S3-compatible) | mobayilo, network-mobayilo |
| **Docker Compose** | Local dev + production parity | all projects |
| **GitHub Actions** | CI/CD across all | all projects |

### CI Pipeline Anatomy (consistent across all projects)
Every project follows the same CI shape:
1. Security scan (Brakeman / bundler-audit / pip-audit / npm audit)
2. Lint (RuboCop / ESLint / Ruff)
3. Type check (mypy strict / tsc --noEmit)
4. Unit + integration tests
5. System tests (Capybara/Selenium where applicable)
6. Build + deploy on main

**Teachable:** CI is not optional — it's the last line of defense before production. Here's how to wire it up properly.

---

## 7. Telegram as Universal Operator Interface

A recurring pattern across smaller projects — Telegram bots as the operator/admin UI:
- **resources:** send URL → Claude categorizes → stored; `/list`, `/search`, `/delete`
- **kazoku:** send photo/text/voice → Claude extracts → board updated
- **veronese:** transcription completion notifications
- **mobayilo:** transcription failure alerts

**Why this is teachable:** Telegram gives you a full UI (buttons, commands, file uploads, notifications) for almost zero code. For personal tools and admin workflows, it beats building a dashboard.

---

## 8. Documentation as Engineering Practice

network-mobayilo shows documentation done at production level:
- `CLAUDE.md` / `CODEX.md` — AI agent contracts
- `ARCHITECTURE.md` — living system overview
- `ARCHITECTURE_DISCUSSION.md` — decision log with rationale (why Fastify not Express, why TimescaleDB, etc.)
- `CONTEXT.md` — domain glossary (Site, Node, Cell, MO, Parameter, Snapshot, Delta)
- `docs/PRD.md` — product requirements
- `docs/TASKS.md` — active task tracker, updated every session
- `docs/PLANNING.md` — phase roadmap

**Teachable:** This isn't bureaucracy — these documents are what make AI-assisted development *safe* at scale. The AI reads them before touching anything.

---

## 9. Security Engineering Practices

- **Prompt injection prevention:** File previews capped at 512 bytes; regex strips injection attempts before Claude calls
- **Webhook signature validation:** Twilio + Stripe (not just "any POST to /webhook")
- **Token storage:** SHA-256 hashed, one-time plaintext return, hint stored for UX
- **Rate limiting:** Rack::Attack on auth endpoints
- **Internal API isolation:** `X-Internal-Secret` header + Docker network IP whitelist
- **DB migration safety:** CI guard that blocks PRs changing volume names (prevents accidental production DB wipe)
- **Security scanning in CI:** Brakeman, bundler-audit, pip-audit — automated, not manual

---

## 10. Skills Inventory

Extracted from five production projects — these are demonstrable, not theoretical:

### AI Engineering
- Integrating Claude API (structured outputs, vision, prompt caching)
- Designing agentic loops with safety gates
- Multi-provider AI architecture (graceful degradation)
- Model selection by task (Haiku vs Sonnet vs local)
- Telegram bots as AI input interfaces
- Writing effective CLAUDE.md agent contracts

### Backend Engineering
- Rails 8 monolith with service layer
- Fastify + TypeScript API design (OpenAPI-first)
- FastAPI + Python for data/ML services
- Background job architecture (Sidekiq, Solid Queue, BullMQ, Celery)
- Idempotent, immutable ledger-based billing
- Usage-based metering with Stripe
- Webhook processing (Twilio, Stripe)

### Frontend Engineering
- Next.js 15 App Router + TypeScript strict
- Hotwire (Turbo + Stimulus) — server-rendered SPA-like UX
- Tailwind CSS across all frameworks
- Real-time updates (Socket.io, Turbo Streams)

### Auth & Security
- Passwordless/magic link auth
- OAuth2 device authorization (CLI flows)
- Bearer token design (hashed storage, scoped access)
- Rate limiting, webhook signature validation
- Prompt injection prevention

### CLI & Distribution
- Go CLI tools (Cobra, multi-platform builds)
- OAuth device code flow
- Homebrew tap auto-generation from CI
- Static marketing site for CLI distribution

### Infrastructure
- Docker + Docker Compose (dev/prod parity)
- Kamal (Rails production deployment)
- Dokploy (VPS orchestration)
- GitHub Actions CI/CD (security scan → lint → test → deploy)
- Cloudflare Pages + R2

### Engineering Process
- Schema-first development workflow
- Domain-driven service design
- CLAUDE.md as AI agent instruction contract
- TASKS.md as living task tracker
- ARCHITECTURE_DISCUSSION.md as decision log
- Multi-tenancy architecture from day one
- File length standards enforced in code review

---

## Key Insight: The Real Differentiator

The projects in this portfolio don't use AI to skip engineering — they use AI to *accelerate* engineering. Every project has:
- Real CI/CD pipelines
- Real auth (not fake "sign in with test user")
- Real billing (ledger-based, idempotent)
- Real documentation (architecture, decisions, glossary)
- Real deployment (Docker, Kamal, Cloudflare)

The AI (Claude Code, Claude API) sits on top of solid engineering foundations. That's the lesson.

---

# 12. Wave 2 — The 2026 Ship-Fast Sites

Six newer projects, smaller in scope than the five SaaS platforms but built with the same engineering discipline. Where Wave 1 proved *depth* (billing, multi-tenancy, agentic loops), Wave 2 proves *velocity and reuse*: a repeatable starter, a forking lineage, and a sharper instinct for "what's the lightest stack that ships this idea."

## The Wave 2 Portfolio at a Glance

| Project | Domain | Stack Core | AI Role | Persistence | Deploy |
|---------|--------|-----------|---------|-------------|--------|
| **adusingi-web** | Personal portfolio + blog + newsletter | Vite + **vanilla TS** (no framework) + Tailwind 4 | None (AI-assisted dev) | None (static MD→JSON) | Dokploy (Express) / Vercel (legacy) |
| **bentokumiko** | Curated food/place directory (JP/FR) | Vite vanilla TS SPAs + **FastAPI (Python 3.12)** | None | Postgres + MinIO (self-hosted) | Dokploy |
| **bentokumiko-places** | Phone-first PWA place knowledge base | Next.js 16 + React 19 + Drizzle | **Claude/OpenAI** (category pick, optional) | Postgres | Dokploy |
| **curator-board** | OSS link curation board | Next.js 16 + Drizzle + grammy | **Claude/OpenAI** (categorization, optional) | Postgres | Docker Compose |
| **inkoranyamuga** | Kinyarwanda IT-terms dictionary + API | Next.js + Drizzle + WorkOS | None | Postgres | Dokploy |
| **world-time** | World-clock + meeting planner | React 19 + Vite 6 + **Three.js globe** | None | None (localStorage) | Cloudflare Pages |

---

## 12.1 Project Deep Dives

### adusingi-web — *Vanilla TS, build-time content, multi-provider email*
A multi-page portfolio + markdown blog + newsletter. Notable engineering choices:
- **No frontend framework, deliberately.** Vanilla TypeScript + Vite; MPA (one HTML file per route) chosen over SPA for SEO and simplicity.
- **Build-time content compilation:** markdown posts (`gray-matter` frontmatter + `marked` + `sanitize-html` for XSS) compiled to paginated JSON at build, served static. No CMS, no DB.
- **Multi-provider email with graceful degradation:** Resend (primary) + ZeptoMail (alternative) — same pattern as Wave 1's multi-provider transcription/AI.
- **Most-tested Wave 2 project:** 10 Vitest files, 70% coverage threshold, full GitHub Actions CI (lint → type-check → test → coverage → build → security audit). The test suite was added to close a zero-coverage finding from a security audit — *audit-driven hardening*.
- **Dual deploy story:** an Express server (`/api/subscribe`, health check) for Dokploy/Docker, with the original Vercel serverless handler reused inside it. In-memory per-IP rate limiting (5/hr).

### bentokumiko — *Polyglot, off-Supabase migration, prerender-for-SEO*
A curated restaurant/patisserie directory across Japan and France. The most architecturally ambitious Wave 2 project:
- **Polyglot, multi-app monorepo:** two Vite vanilla-TS SPAs (`apps/public`, `apps/admin`) + a **FastAPI (Python 3.12)** backend (`apps/api`) — async SQLAlchemy 2.0 + Pydantic v2 + Alembic.
- **Off-Supabase migration (2026-06):** moved from Supabase (Postgres + Auth + RLS + Storage) to a **fully self-hosted** stack — Postgres on Dokploy, **MinIO** for images, **WorkOS AuthKit** for admin. Authorization moved *out of the DB (RLS)* and *into the API* (public read-only, admin routes WorkOS-JWKS-guarded). A textbook "ship on a BaaS, then own your infra" arc.
- **Build-time SSG prerender:** every route rendered to static HTML at image-build time (`prerender.mjs` calls `GET /api/home`) for SEO, then the SPA hydrates and fetches live data.
- **Unified API envelope** (`{success, data}` / `{success, error}`) — the same contract as the global TypeScript rules. Playwright E2E. Legacy Next.js app being decommissioned (Phase 6).

### bentokumiko-places — *The grammy/OKF knowledge-capture fork*
A phone-first PWA knowledge base of personally-vetted Japanese restaurants/hotels. **Forked from curator-board** and specialized:
- **Zero-typing capture:** forward a Google Maps / Tabelog link to a **grammy Telegram bot**; source adapters scrape and enrich (gmaps redirect-resolve + `place_id` + Hotel/Restaurant detection; tabelog title/budget/area; OG + optional LLM fallback) — *no paid Places API*.
- **Add-by-text conversational flow:** a per-user in-memory state machine (type → city → optional Maps link → search → **Approve/Reject review card** → POST only on approve).
- **OKF (Open Knowledge Format) as the knowledge contract:** a single **Zod schema** (`OkfConceptSchema`) is the source of truth for *both* DB columns and exported markdown frontmatter. `pnpm okf:export` renders the whole DB → portable markdown bundle. The write API validates every POST against the schema *before* any DB write — validation gate doubles as input sanitization.
- **Dual auth:** `x-api-key` (`BOARD_API_SECRET`) for machine writes; `ADMIN_PASSWORD` → signed session cookie for human admin. Telegram allowlist (`id:role`) stamps `added_by`.
- **CONTEXT.md as a living domain-language doc** updated during grill sessions — terms, trust tiers, language rules. Phase 3 roadmap is a **RAG itinerary agent over the OKF base** with hard "no invented places" grounding (prompt + programmatic slug validation).

### curator-board — *The reusable OSS starter (the parent)*
The generic, open-sourced ancestor of bentokumiko-places: link curation via Telegram → categorize → publish on a themed public board.
- **The de-facto Wave 2 starter:** Next.js 16 App Router + Drizzle + Postgres + grammy bot + OG scraping + **optional AI categorization** (`AI_PROVIDER`: `auto`/`anthropic`/`openai`/`none`, graceful fallback to category `other`) + dual `x-api-key`/`ADMIN_PASSWORD` auth + multi-theme + Docker Compose full stack. `bentokumiko-places` and `inkoranyamuga` share visible DNA with this skeleton.
- Self-hosted by default, one admin per install, secrets injected at runtime (not baked into images).

### inkoranyamuga — *Public dataset → searchable app + self-service API*
The online edition of Rwanda's official Kinyarwanda IT-terminology dictionary (digitizing a government PDF).
- **Trilingual search** (Kinyarwanda / English / French) with fuzzy headword matching, domain filters, type-ahead, pagination.
- **Public REST API with self-service API keys:** keys stored **SHA-256 hashed** (`keyHash` + `keyPrefix`, one-time plaintext, request counting, revocation) — the exact bearer-token discipline from Wave 1's auth education. `api-docs` page with copy-paste code tabs; WorkOS auth for the issuing flow; corrections submitted via email/contact form.
- **Accessibility as a feature:** theme switcher + font-size control. Drizzle/Postgres, Dokploy.

### world-time — *Zero-backend, keyless, WebGL*
An interactive world-clock and meeting planner. The purest "lightest stack that ships it" example:
- **100% client-side, zero backend.** React 19 + TS strict + Vite 6 + Tailwind 4. The browser *is* the runtime.
- **DST-correct timezone math using only the `Intl` API — zero date libraries.** An offset-probe trick converts wall-clock-in-zone ↔ absolute instant.
- **Keyless external APIs called directly from the browser:** Open-Meteo geocoding + weather, chosen specifically because they're CORS-enabled and free — which is what *permits* a pure static deploy. Failures degrade silently (badges hide).
- **`react-globe.gl` (Three.js/WebGL)** rotating globe with great-circle arcs; a single state hook (`useConverter`) feeds both the globe and the planner timeline in lock-step. localStorage persistence, 11 themes.
- **Cloudflare Pages** static hosting + one Pages Function (`functions/geo.js`) for edge geolocation (no permission prompt). Bundle is ~590 KB gzipped (Three.js) — the one acknowledged trade-off.

---

## 12.2 New & Reinforced Patterns (what Wave 2 adds)

### New patterns (not visible in Wave 1)

1. **A forking lineage / reusable starter.** `curator-board` is an explicit, open-sourced base that gets *forked and specialized* (→ `bentokumiko-places`). The shared skeleton — Next 16 + Drizzle + Postgres + grammy + OG-scrape + optional-AI + dual-auth + Docker Compose — is a productized starter, not a copy-paste accident. **This is the single most important Wave 2 insight for the `youbusiness` platform: the portfolio already contains a repeatable scaffold.**

2. **"Lightest stack that ships it" judgment.** Wave 2 shows deliberate *down-scoping*: vanilla TS over a framework (adusingi-web, bentokumiko), zero-backend over a server (world-time), keyless browser-direct APIs over a proxy (world-time). Choosing *less* infrastructure is the senior call, and it's consistent across the wave.

3. **Build-time content compilation as an architecture.** Three variants of "compile content at build, serve static": markdown→JSON (adusingi-web), per-route SSG prerender (bentokumiko), and DB→OKF markdown export (bentokumiko-places). Content is computed once at build, not per-request.

4. **OKF — a schema-as-contract knowledge format.** A single Zod schema drives DB columns *and* portable markdown frontmatter; the export is a first-class deliverable; the write path validates against it. A genuinely novel pattern with a clear path to RAG.

5. **Living domain docs updated during "grill" sessions.** `CONTEXT.md` (places) captures domain language, trust tiers, and rules — explicitly maintained through Socratic grilling. This is the human-process half of the same engine `youbusiness` aims to productize.

6. **Conversational capture with human-in-the-loop approval.** The add-by-text bot flow (state machine → review card → commit only on approve) is a reusable interaction pattern for AI-assisted data entry.

### Reinforced patterns (Wave 1 theses, re-confirmed)

| Wave 1 thesis | Wave 2 confirmation |
|---|---|
| **Multi-provider + graceful degradation** (§2.4, §2.6) | Email: Resend + ZeptoMail (adusingi-web). AI: anthropic/openai/none with fallback (curator-board, places). |
| **Telegram as ingestion/operator UI** (§7) | grammy capture bots in curator-board + bentokumiko-places. |
| **Hashed bearer tokens, one-time plaintext** (§4) | inkoranyamuga's self-service API keys (SHA-256, prefix, revocation, request counts). |
| **Passwordless / no passwords** (§4) | WorkOS AuthKit (bentokumiko, inkoranyamuga); session-cookie + shared-secret admin (curator-board, places). |
| **AI as soft layer with a hard fallback** (§2.1) | Optional LLM category pick that *never blocks* capture — fall back to `other`. |
| **Self-hosted on Docker/Dokploy** (§6) | Dokploy for everything with a DB; off-Supabase migration to owned infra (bentokumiko). |
| **Docs as engineering practice** (§8) | PRD/PLANNING/TASKS/RUNBOOK + ADRs + CONTEXT.md across places, inkoranyamuga, bentokumiko. |
| **CLAUDE.md / AGENTS.md as agent contract** (§3.5) | Present in nearly every Wave 2 repo, plus `AGENTS.md` git-workflow rules. |

### The repetition map (what gets re-typed every project)

These are the concrete, mechanical repetitions — the strongest candidates for a scaffold/generator:

- **Scaffolding quartet:** `CLAUDE.md` + `AGENTS.md` + `ARCHITECTURE.md` (+ `CONTEXT.md`/`RUNBOOK.md`) in every repo.
- **Docs spine:** `docs/PRD.md` + `PLANNING.md` + `TASKS.md` + `docs/adr/` — the same six-section PRD and phase-tracked TASKS template (formalized in `template_prd_task_planning/`).
- **Next + Drizzle + postgres-js + Docker Postgres on port 5436** with `db:migrate`/`db:seed`/`db:generate`/`db:studio` scripts — byte-identical dependency sets between `curator-board` and `bentokumiko-places`.
- **Dual-auth module pair:** `board-api-auth.ts` (x-api-key) + `admin-auth.ts` (signed cookie).
- **`docker-compose.yml` + `docker-compose.prod.yml` + multi-stage `Dockerfile`** (deps → builder → runner on `node:22-alpine`).
- **`ThemeSwitcher` + `themes.ts`** copied across curator-board, places, inkoranyamuga.
- **Branch policy** (`development` default, `main` protected, never push to main directly) — identical across repos.

> **Bottom line for the course (and for `youbusiness`):** Wave 1 taught that AI sits on top of solid engineering. Wave 2 adds the next lesson — **the engineering itself becomes a repeatable template**. The PRD→PLANNING→TASKS docs, the dual-auth starter, the grammy+OKF capture pattern, and the grill→CONTEXT.md loop are no longer one-offs; they're a personal platform waiting to be productized.

---

# 13. Wave 3 — From AI-Assisted Engineering to AI-Native Products

Three of the most recent 2026 projects. Where Wave 2 *predicted* a personal platform "waiting to be productized," Wave 3 **delivers it on both axes the bottom line called out**:

1. **The platform got extracted.** The repeated scaffold is no longer copy-paste — it's an installable **`design-system/` monorepo** publishing real packages (`@mobayilo/auth-magic-link`, `@mobayilo/themes`) that `mytrip` and `x-bookmarks` consume by reference. The "repeatable template" became actual shared dependencies.
2. **The AI got promoted from tool to product.** `emily_family_assistant` is the portfolio's first true **autonomous agent runtime** — a vision-capable, multi-tool, self-scheduling assistant that *is* the product, not a categorize-on-ingest helper bolted to a CRUD app. This is the literal proof point for **Mobayilo building the next tools for AI**.

## The Wave 3 Portfolio at a Glance

| Project | Domain | Stack Core | AI Role | Persistence | Deploy |
|---------|--------|-----------|---------|-------------|--------|
| **mytrip** | Travel social network on a 3D globe | Next.js 16 + React 19 + **react-globe.gl (Three.js)** + Drizzle | None in-app (AI-assisted dev) | Postgres 16 + **MinIO** | Dokploy |
| **x-bookmarks** | Own-your-data X (Twitter) bookmark manager | Next.js 16 (pnpm workspace) + Drizzle | None in-app (X API sync stubbed) | Postgres | Dokploy |
| **emily_family_assistant** | Autonomous household assistant (expenses + calendar) | **Eve agent runtime** + Next.js 16 + Drizzle + **Venice/Kimi K2.6** | **Agentic core** — tool-calling + vision + scheduling | Postgres | Docker Compose |

---

## 13.1 Project Deep Dives

### mytrip — *The forking lineage matures into a social network*
"Instagram for travel," with a 3D globe as the home screen: each member's globe draws glowing great-circle arcs from their **hometown** to every **city they've visited**; click a city to read that person's story (cover + photos, a markdown blog, named spots) and follow / like / comment.
- **The forking lineage, continued (and deepened):** explicitly **forked from `world-time`** (Wave 2) — kept the `react-globe.gl`/Three.js globe and visual design, then *rebuilt the rest as a multi-user social network* and migrated to the house **Next.js 16 monolith** (curator-board DNA). Wave 2 had `curator-board → bentokumiko-places`; Wave 3 shows a **second, independent fork chain** off a different base. The starter strategy is reproducible, not a one-off.
- **Consumes the extracted design system:** depends on `@mobayilo/auth-magic-link` and `@mobayilo/themes` via `file:../design-system/*` — the **first concrete payoff of productizing the scaffold**. Auth and theming are now *imported*, not re-typed.
- **Real social-graph product surface:** the full Instagram **public/private model** (logged-out wall, private profiles, instant-follow vs. pending **follow requests** with Accept/Decline) — a materially more complex authorization model than anything in Wave 2's single-admin sites.
- **Reinforced patterns:** Better Auth passwordless (Google OAuth + magic link, one account per verified email); **grammy Telegram ingestion** (`/link CODE` → photo+caption posts a place) with `x-api-key: MYTRIP_API_SECRET` machine-to-machine separation; **MinIO** for photo storage (the same self-hosted-object-store call as bentokumiko); Dokploy + standalone Docker, Postgres on a deconflicted host port (5437).

### x-bookmarks — *Data liberation, and the design system as a real dependency*
A personal app to **import, browse, organize, and own** your X (Twitter) bookmarks outside X's limited native tools — "Your X bookmarks, finally organized."
- **The scaffold is now a workspace, not a copy:** a **pnpm-workspace monorepo** (`apps/web` + `packages/auth-magic-link` + `packages/themes`) where the `@mobayilo/*` packages are **vendored from the same design-system** that `mytrip` references. Same building blocks, two delivery modes (file-reference vs. vendored-into-workspace) — early evidence the platform is being *distributed deliberately*, not duplicated accidentally.
- **Ingestion + data-ownership thesis:** parses the official X archive (`data/bookmark.js`) **or** a plain JSON array; dedupes on `tweetId`; records full tweet metadata + `mediaUrls` + private `notes` + `favoritedAt`/`archivedAt`/`deletedAt` lifecycle flags. **Library** (masonry/list, search, sort, tabs), **collections**, **tags**, archive/trash with restore + permanent delete.
- **Honest forward-compat seam:** an `apps/web/server/x-api.ts` **stub** for X API v2 sync, explicitly deferred because free/basic tiers don't expose bookmarks — the same "design the seam, ship the export path now" instinct as bentokumiko-places' OKF.
- **Reinforced patterns:** Better Auth magic link (ZeptoMail) + optional Google OAuth, **auth required in every environment, no demo/dev fallback user** (a security tightening over earlier projects' seeded demo accounts); strict `userId`-scoped single-tenancy (zero cross-user leakage as a stated non-functional target); themes via `@mobayilo/themes`; Dockerized for Dokploy.

### emily_family_assistant — *The flagship: a real autonomous agent runtime* ⭐
The portfolio's first **AI-native product** — a self-hosted household assistant where the agent *is* the app. Families capture expenses and calendar events by talking to **Emily** in Telegram (text, photos of receipts, event flyers) or a Next.js dashboard; Emily classifies, extracts, files, summarizes, and proactively reports on a schedule.
- **A genuine agent runtime, not an API call:** built on **Eve** (Vercel's agent framework) with `withEve()` mounting the agent inside Next.js. Eve discovers `instructions.md`, `agent.ts`, `tools/`, `channels/`, `skills/`, and `schedules/` from the filesystem — Emily is authored as a **first-class agent**, not a prompt string. `defineAgent` sets the model context window and **automatic context compaction at 80%** of the window.
- **Provider-agnostic by construction:** the model is **Venice (Kimi K2.6)** wired through the **AI-SDK OpenAI-compatible** provider with a custom timeout-fetch — the multi-provider/graceful-degradation thesis (§2.4/§2.6) taken to its logical end: the runtime is decoupled from any single vendor at the SDK boundary.
- **Vision → structured-action pipeline with a confidence gate:** the canonical agent loop is `classify_image_document` → (`extract_receipt_from_image` | `extract_event_from_image`) → (`create_expense` | `create_event`), and the agent only auto-commits when **extraction confidence ≥ 0.75**, otherwise it asks *one* short clarification. This is §2.1's "AI as a soft parser with a hard fallback" promoted into a multi-step tool-calling agent.
- **A real tool surface (11 tools):** expense + event CRUD with recent-item corrections/voids, `summarize_expenses`/`list_events` queries, `get_weather_forecast`/`get_surf_report` (external data), `link_telegram_user`/`link_telegram_group`, and scheduled-report management — every tool is a typed `defineTool` over the **service layer** (Drizzle/Postgres), with **`logAgentToolCall` audit logging on every call** (success *and* error). The agent can act, but every action is typed, family-scoped, and recorded.
- **Self-scheduling agent (the standout pattern):** `schedules/cron-dispatcher.ts` runs **every minute**, claims due jobs, and **re-invokes the agent against itself** — it opens a fresh Telegram session seeded with the stored prompt, runs it **read-only** ("do not create/edit/delete… do not ask follow-ups"), waits on the **session event stream** for `session.completed`/`failed`/`waiting`, and disables + notifies on failure. Natural-language requests like "tell me every day at 9am how much I spent this week" become durable cron jobs. This is **agent-driving-agent orchestration** — qualitatively beyond anything in Waves 1–2.
- **Skills + instructions as the agent contract:** behaviour lives in `instructions.md` (identity, product rules, capture/correction/query/scheduling playbooks, hard safety rules — *never claim a save unless a tool reported success; never expose raw SQL/IDs*) plus markdown **`skills/`** (`receipt-extraction.md`, `expense-capture.md`). This is the §3.5 `CLAUDE.md`-as-agent-contract practice turned **inward** — the same documentation discipline now governs a *production runtime agent*, not just the dev-time coding assistant.
- **Reinforced patterns:** Better Auth magic link via **Resend** (multi-provider email family); Drizzle/Postgres with **family-scoped data isolation** (multi-tenancy from day one, §3.6); Telegram-first capture (§7); **Vitest** tests + `typecheck`/`build`/`eve:build` verification gate; Docker Compose deploy; English-normalization rule (translate captured text to English before storing) as a product-level data-quality contract.

---

## 13.2 New & Reinforced Patterns (what Wave 3 adds)

### New patterns (not visible in Waves 1–2)

1. **The scaffold became an installed dependency.** Wave 2's "repetition map" (re-typed auth, themes, docs) is now an extracted **`design-system/` monorepo** (`@mobayilo/auth-magic-link`, `@mobayilo/themes`) consumed by `mytrip` (file-reference) and `x-bookmarks` (vendored workspace package). The platform stopped being a *pattern you copy* and became *code you import*. **This is the single most important Wave 3 fact for the Mobayilo startup thesis: there is already a shared design/auth system underneath the product line.**

2. **A true agent runtime as the product core (Emily).** Not "Claude categorizes on ingest" (resources/curator-board) but a filesystem-defined, multi-tool, vision-capable, context-compacting agent that *is* the application. Tools-over-service-layer + per-call audit logging + confidence-gated auto-commit is a reusable **production-agent architecture**.

3. **Agent-driving-agent scheduling.** The minute-resolution cron dispatcher that re-invokes the agent in a constrained read-only session, awaits its event stream, and self-heals on failure is genuinely new — durable, natural-language-defined background agent work. The clearest "next tools for AI" capability in the portfolio.

4. **Provider-agnostic LLM at the SDK boundary.** Routing a non-OpenAI model (Venice/Kimi) through the OpenAI-compatible AI-SDK interface with custom timeout handling generalizes §2.4 vendor-switching from "two transcribers behind one interface" to "any OpenAI-compatible model behind the agent runtime."

5. **A second, independent fork chain.** `world-time → mytrip` (alongside Wave 2's `curator-board → bentokumiko-places`) confirms the starter-and-specialize strategy reproduces across *different* bases — a repeatable product-spawning method, not a lucky single lineage.

6. **Data-ownership / liberation as a product thesis.** `x-bookmarks` (own your X data off-platform) and `mytrip` (own your travel story) both reframe a walled-garden surface as a self-hosted, exportable, user-owned product — a coherent product POV, not just a tech demo.

### Reinforced patterns (earlier theses, re-confirmed)

| Earlier thesis | Wave 3 confirmation |
|---|---|
| **Multi-provider + graceful degradation** (§2.4, §2.6) | Email: Resend (Emily), ZeptoMail (mytrip, x-bookmarks). LLM: Venice/Kimi via OpenAI-compatible SDK — vendor-swappable at the boundary. |
| **AI as soft parser + hard fallback** (§2.1) | Emily's confidence ≥ 0.75 auto-commit gate, else one clarification; classify→extract→create never blind-saves. |
| **Telegram as ingestion/operator UI** (§7) | grammy capture in mytrip; Eve's Telegram channel as Emily's primary interface (text, photos, HITL prompts, scheduled pushes). |
| **CLAUDE.md / instructions as agent contract** (§3.5) | Emily's `instructions.md` + `skills/*.md` — the same contract discipline now governs a *runtime* agent, with hard safety rules. |
| **Passwordless / no passwords** (§4) | Better Auth magic link + Google OAuth everywhere; x-bookmarks removes even the demo fallback user (auth required in every env). |
| **Multi-tenancy / isolation from day one** (§3.6) | Family-scoped isolation (Emily); strict `userId` scoping with zero cross-user leakage as a target (x-bookmarks). |
| **Self-hosted on Docker/Dokploy** (§6) | Dokploy (mytrip, x-bookmarks) + Docker Compose (Emily); MinIO self-hosted object storage (mytrip). |
| **Audit trail / immutability** (§3.2, §9) | `logAgentToolCall` records every Emily tool call (input/output/error) — an audit trail purpose-built for an autonomous agent. |
| **Forking lineage / reusable starter** (§12.2) | `world-time → mytrip`; `@mobayilo/*` packages shared across mytrip + x-bookmarks. |

> **Bottom line for the Mobayilo startup thesis:** Wave 1 proved AI sits on solid engineering; Wave 2 proved the engineering becomes a repeatable template; **Wave 3 proves both predictions came true — the template is now an installed `@mobayilo/*` design system, and the AI is now a standalone autonomous agent product (Emily) with vision, a typed audited tool surface, and self-scheduling background work.** That is exactly the shape of a startup *building the next tools for AI*: a productized platform underneath, and a real agent runtime on top.
