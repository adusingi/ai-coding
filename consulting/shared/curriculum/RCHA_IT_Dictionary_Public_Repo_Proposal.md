# RCHA IT Dictionary Public Repository Proposal

## Context
- Source document: `Inkoranyamuga_y_ikoranabuhanga.pdf` (Rwanda Cultural Heritage Academy, 2026).
- Local copy path: `/Users/mac3jis/Documents/Code/p/ai-coding/consulting/shared/curriculum/Inkoranyamuga_y_ikoranabuhanga.pdf`.
- Goal: publish a high-quality Kinyarwanda-IT dictionary dataset for public reuse.

## Critical Legal Gate (Must Resolve First)
The publication includes a copyright notice stating all rights are reserved and that reproduction requires written permission from RCHA.

Before publishing dictionary content to a public GitHub repository, obtain **written authorization** from Rwanda Cultural Heritage Academy covering:
1. permission to republish entries,
2. allowed license for redistributed content (for example CC BY 4.0),
3. attribution wording,
4. whether derivatives and commercial reuse are allowed.

Without this permission, publish only metadata/code and a downloader, not the extracted entries.

## Recommended Repository Strategy
Create one public repository with a legal-safe default branch:

1. `main` (public-safe):
   - ingestion scripts,
   - schema,
   - QA tooling,
   - documentation,
   - no copyrighted extracted dictionary content.
2. `data-published` (only after permission):
   - full extracted/validated dataset files.

This keeps momentum on engineering while legal approval is pending.

## Proposed Repository Name
`rcha-kinyarwanda-it-dictionary`

## Proposed Structure
```text
rcha-kinyarwanda-it-dictionary/
  README.md
  LICENSE
  DATA_LICENSE.md
  CONTRIBUTING.md
  CODE_OF_CONDUCT.md
  CITATION.cff
  .github/
    workflows/
      validate-data.yml
  data/
    raw/
      README.md
    interim/
      README.md
    processed/
      dictionary.csv
      dictionary.json
  docs/
    methodology.md
    editorial-guidelines.md
    legal.md
  schema/
    dictionary.schema.json
  scripts/
    extract_pdf_text.sh
    parse_entries.py
    normalize.py
    validate.py
  tests/
    test_parser.py
    test_schema.py
```

## Data Model (Core Fields)
Each row/record:
- `entry_id`: stable ID (for example `rcha-it-000001`)
- `headword_kin`
- `pronunciation_kin` (if present)
- `synonym_kin` (HI)
- `english_terms` (array)
- `french_terms` (array)
- `domain` (NK)
- `definition_kin` (SH)
- `source_title`
- `source_page`
- `source_year`
- `review_status` (`auto_parsed`, `human_checked`, `final`)
- `notes`

Keep CSV for broad compatibility and JSON for API/tooling.

## Extraction and QA Workflow
1. **Extract text**
   - Use `pdftotext` to generate page-indexed text.
2. **Parse entries**
   - Detect entry blocks and labeled segments (`HI:`, `Eng:`, `Fr:`, `NK:`, `SH:`).
3. **Normalize**
   - Trim spacing, normalize punctuation, preserve diacritics.
4. **Validate**
   - JSON Schema checks + required fields + duplicate detection.
5. **Human review**
   - Page-by-page correction for OCR/line-wrap issues.
6. **Version**
   - Release snapshots (`v1.0.0`, `v1.1.0`) with changelog.

## Quality Controls
- Schema validation in CI on every PR.
- Minimum test coverage for parser and normalizer.
- Reject malformed rows (missing `headword_kin`, `english_terms`, or `source_page`).
- Add deterministic re-run command so dataset generation is reproducible.

## Attribution Standard
Add a fixed attribution block in `README.md` and `DATA_LICENSE.md`:
- source institution (RCHA),
- source title,
- publication year (2026),
- ISBN (`978-99977-0-699-7`),
- URL to the official publication page/file.

## Suggested Release Plan
1. Week 1: legal permission request sent and tracked.
2. Week 1-2: repo scaffold + parser prototype + schema + CI.
3. Week 2-3: automated extraction + manual correction pass.
4. Week 3: beta dataset release (`v0.9.0`) for reviewer feedback.
5. Week 4: public stable release (`v1.0.0`) with documentation.

## Immediate Next Actions
1. Request written publishing permission from RCHA.
2. Initialize the public GitHub repository with the structure above.
3. Start with parser/QA pipeline on local copy of the PDF.
4. Publish dataset only after legal confirmation.
