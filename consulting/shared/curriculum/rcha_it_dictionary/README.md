# RCHA IT Dictionary Parser/QA Pipeline

This pipeline parses the local PDF into structured dictionary data and runs QA checks.

## Prerequisites
- `python3`
- `pdftotext` (Poppler)

## Input PDF
`/Users/mac3jis/Documents/Code/p/ai-coding/consulting/shared/curriculum/Inkoranyamuga_y_ikoranabuhanga.pdf`

## Run
From this directory:

```bash
./scripts/run_pipeline.sh
```

Or step-by-step:

```bash
./scripts/extract_pdf_text.sh
python3 ./scripts/parse_entries.py \
  --input ./data/interim/inkoranyamuga.txt \
  --json-output ./data/processed/dictionary.json \
  --csv-output ./data/processed/dictionary.csv
python3 ./scripts/validate_entries.py \
  --input ./data/processed/dictionary.json \
  --report ./data/reports/validation_report.json
```

## Outputs
- `data/interim/inkoranyamuga.txt`: raw extracted text from PDF
- `data/processed/dictionary.json`: parsed records
- `data/processed/dictionary.csv`: parsed records in CSV
- `data/reports/validation_report.json`: QA summary

## Notes
- The parser is intentionally conservative and keeps `review_status=auto_parsed`.
- You should manually review entries before publication.
