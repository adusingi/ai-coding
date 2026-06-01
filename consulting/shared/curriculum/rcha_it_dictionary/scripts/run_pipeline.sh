#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

"$ROOT_DIR/scripts/extract_pdf_text.sh"

python3 "$ROOT_DIR/scripts/parse_entries.py" \
  --input "$ROOT_DIR/data/interim/inkoranyamuga.txt" \
  --json-output "$ROOT_DIR/data/processed/dictionary.json" \
  --csv-output "$ROOT_DIR/data/processed/dictionary.csv"

python3 "$ROOT_DIR/scripts/validate_entries.py" \
  --input "$ROOT_DIR/data/processed/dictionary.json" \
  --report "$ROOT_DIR/data/reports/validation_report.json"

echo "Pipeline complete."
