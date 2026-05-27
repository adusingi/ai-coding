# AI-Assisted Engineering — Portfolio Analysis
*Aimable Dusingi · May 2026*

A structured inventory of practices, skills, and tech patterns across five production projects built with AI as a core development tool. This document feeds the design of a course offering for engineering teams.

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
