# PRD — Inkoranyamuga Online Dictionary

**Source data:** `data/processed/dictionary.json` (1,356 entries)
**Published by:** Rwanda Heritage Conservation Agency (RCHA), 2026
**Version:** V1

---

## Problem Statement

Rwanda's official IT terminology dictionary (*Inkoranyamuga y'ikoranabuhanga*), published by the Rwanda Heritage Conservation Agency, exists only as a PDF. Tech professionals, students, and developers building local applications cannot easily search for the canonical Kinyarwanda term for a given English or French IT concept. Government bodies writing technical requirements in Kinyarwanda have no searchable, authoritative reference. The PDF format also makes the data inaccessible for programmatic use.

---

## Solution

A publicly accessible, trilingual online dictionary that allows users to search across Kinyarwanda, English, and French simultaneously and find the authoritative Kinyarwanda IT term, its pronunciation, and its definition. The dictionary is backed by a REST API so developers can look up canonical terms programmatically when building local applications. A contact form allows community members to submit corrections or new terms to the Rwanda Academy of Language and Culture.

---

## User Stories

### Search & Discovery

1. As a Rwandan tech professional, I want to type an English IT term (e.g., "database") into a search box and immediately see the canonical Kinyarwanda equivalent, so that I can use the correct official term in my work.
2. As a student, I want to search in French (e.g., "base de données") and find the corresponding Kinyarwanda term, so that I can study the language through familiar concepts.
3. As a Kinyarwanda speaker, I want to search for a partial Kinyarwanda headword and get relevant results even if I misspell it slightly, so that I can find terms without needing exact spelling.
4. As a user, I want search results to appear as I type, so that I don't have to press Enter to see results.
5. As a user, I want to filter search results by domain (e.g., "Computer Science", "Finance"), so that I can narrow results when a term appears in multiple domains.
6. As a user, I want to see how many results my search returns, so that I can judge the breadth of matches.
7. As a user, I want to paginate through search results, so that I can browse beyond the first page of matches.
8. As a user, I want to click on a search result and see the full entry, so that I can read the complete definition and all equivalent terms.
9. As a user, I want to browse all entries without searching, so that I can explore the dictionary.
10. As a user on mobile, I want the search experience to work well on a small screen, so that I can look up terms on my phone.

### Entry Detail

11. As a user, I want to see the Kinyarwanda headword displayed prominently at the top of an entry, so that the authoritative term is immediately clear.
12. As a user, I want to see the pronunciation of the Kinyarwanda headword, so that I know how to say it correctly.
13. As a user, I want to see the Kinyarwanda definition of the term, so that I understand what it means in context.
14. As a user, I want to see all English equivalents for an entry, so that I know which English terms map to this Kinyarwanda term.
15. As a user, I want to see all French equivalents for an entry, so that I understand the French-language mapping.
16. As a user, I want to see the domain an entry belongs to, so that I understand its technical context.
17. As a user, I want to see the source page from the original publication, so that I can verify the entry against the official PDF.
18. As a user, I want to see whether an entry has a Kinyarwanda synonym, so that I know alternative terms.
19. As a user, I want to share a link to a specific entry, so that I can reference it in documents or messages.

### REST API

20. As a developer building a Kinyarwanda application, I want to query `GET /api/terms?q=database` and receive a JSON list of matching entries, so that I can look up canonical terms programmatically.
21. As a developer, I want to retrieve a single entry by ID at `GET /api/terms/rcha-it-000001`, so that I can fetch a known term directly.
22. As a developer, I want to filter the API by domain via `GET /api/terms?domain=...`, so that I can scope lookups to a relevant technical area.
23. As a developer, I want the API to return consistent, documented JSON fields, so that I can rely on the response shape across versions.
24. As a developer, I want the API to support pagination (`page`, `limit` parameters), so that I can handle large result sets efficiently.
25. As a developer, I want to fetch the list of normalized domains at `GET /api/domains`, so that I can populate a domain filter in my own application.

### Submission Form

26. As a community member, I want to submit a correction to an existing entry via a form, so that errors in the auto-parsed data can be reported.
27. As a researcher, I want to suggest a new IT term that is missing from the dictionary, so that the vocabulary grows over time.
28. As a form submitter, I want to see a confirmation message after submitting, so that I know my submission was received.

### Attribution & About

29. As a user, I want to visit an `/about` page that explains the source of the dictionary data, so that I understand its authority and provenance.
30. As a user, I want to see a footer attribution on every page crediting the Rwanda Heritage Conservation Agency, so that the source is always clear.
31. As a government user, I want to see a link to the original RCHA publication, so that I can reference the primary source.

---

## Implementation Decisions

### Data Model

The `entries` table maps directly from the JSON source. Domain values in the raw data contain normalization issues (40 raw values that collapse to ~15 logical domains due to case and punctuation inconsistencies). A `domains` lookup table stores normalized domain names; entries reference it by foreign key. Normalization happens at seed time, not at query time.

```
entries
  id            serial primary key
  entry_id      text unique not null       -- "rcha-it-000001"
  headword_kin  text not null
  pronunciation text
  synonym_kin   text
  english_terms text[]
  french_terms  text[]
  domain_id     integer references domains(id)
  definition_kin text not null
  source_page   integer
  source_year   integer
  review_status text
  notes         text

domains
  id    serial primary key
  name  text unique not null               -- normalized domain label
```

### Search Module

The search module is the core deep module of the system. It encapsulates all `pg_trgm` query logic behind a single interface:

```ts
search(query: string, options?: { domainId?: number; page?: number; limit?: number })
  => Promise<{ entries: Entry[]; total: number }>
```

Internally it runs a single SQL query that computes a composite similarity score across `headword_kin`, `english_terms` (unnested or cast to text), and `french_terms`. The `headword_kin` column receives the highest weight. Results are ranked by descending score with a minimum similarity threshold to filter noise. The pg_trgm GIN index is created on all three text columns at seed time.

The seed script enables `pg_trgm` via `CREATE EXTENSION IF NOT EXISTS pg_trgm` and creates GIN indexes before loading data.

### REST API Contracts

All responses return JSON with `Content-Type: application/json`.

**`GET /api/terms`**
- Query params: `q` (string), `domain` (string, normalized name), `page` (integer, default 1), `limit` (integer, default 20, max 100)
- Response: `{ data: Entry[], total: number, page: number, limit: number }`

**`GET /api/terms/[id]`**
- Path param: `id` is the `entry_id` string (e.g., `rcha-it-000001`)
- Response: single `Entry` object or 404

**`GET /api/domains`**
- Response: `{ data: { id: number, name: string }[] }`

### Routing

| Route | Description |
|---|---|
| `/` | Search homepage |
| `/entry/[id]` | Single entry detail (SSR) |
| `/about` | Attribution and source info |
| `/contact` | Submission form |
| `/api/terms` | Search API |
| `/api/terms/[id]` | Single entry API |
| `/api/domains` | Domains list API |

### Entry Page Layout (Kinyarwanda-first)

```
[Headword in large type]
[Pronunciation in smaller type]
────────────────────────────
Definition (Kinyarwanda)

English:  term1 · term2 · term3
French:   terme1 · terme2
Synonym:  [if present]
Domain:   [normalized domain name]
Source:   Inkoranyamuga y'ikoranabuhanga, p.[N] (2026)
```

### Submission Form

The form collects: entry ID (optional, for corrections), suggested headword, definition, English terms, French terms, submitter name, submitter email, and message. On submit, a Next.js Server Action sends the form data as a formatted email to the Rwanda Academy of Language and Culture. No submission data is persisted in the database for V1.

### Infrastructure

- Single Docker Compose file with two services: `app` (Next.js) and `db` (PostgreSQL 16)
- Seed script runs as a one-off command during first deploy: `npm run db:seed`
- Environment variables: `DATABASE_URL`, `CONTACT_EMAIL` (recipient for submissions), `SMTP_*` (mail transport config)
- Deployed via Dokploy on a Hetzner Johannesburg VPS

---

## Testing Decisions

**What makes a good test here:** test the external behavior of a module against real inputs — not the internal SQL string, but the ranked output for a known query. Tests should not mock the database; they should seed a known fixture set and assert on results.

**Search Module** — the only module worth testing in V1. Tests should:
- Assert that searching `"database"` returns entries containing "database" in `english_terms`, ranked above weaker matches
- Assert that a Kinyarwanda query with a minor misspelling still returns the correct entry (fuzzy threshold behavior)
- Assert that domain filtering correctly narrows results
- Assert that pagination returns the correct slice and total count
- Assert that an empty query returns all entries in a stable order

**REST API** — integration tests on the HTTP contract:
- Assert that `GET /api/terms?q=database` returns a 200 with the expected shape
- Assert that `GET /api/terms/rcha-it-000001` returns the correct entry
- Assert that `GET /api/terms/rcha-it-999999` returns a 404
- Assert that `GET /api/domains` returns a non-empty array of normalized domain objects

**Not tested in V1:** UI components, the submission form email flow, seed script.

---

## Out of Scope

- Admin review queue for submissions
- User accounts or authentication
- Inline editing of entries
- Kinyarwanda UI language (English only for V1)
- Versioning of entries or change history
- Full-text export or download of the dictionary
- Rwanda-local hosting (Hetzner Johannesburg is the deployment target)

---

## Further Notes

- The raw domain values in `dictionary.json` have ~15 logical domains collapsed into ~40 strings due to case, punctuation, and spelling inconsistencies in the source PDF parse. Domain normalization must be resolved before or during the seed step — a mapping table hardcoded in the seed script is acceptable for V1.
- All 1,356 entries have a non-empty `definition_kin` field. 33 entries have a `synonym_kin`. 0 entries have `notes`. The `review_status` is `auto_parsed` for all entries — the data has not been manually verified, which should be noted subtly in the UI or on the `/about` page.
- The `source_title` field is uniform across all entries (`"Inkoranyamuga y'ikoranabuhanga"`) — it need not be stored per-entry in the database; it is a dataset-level constant.
