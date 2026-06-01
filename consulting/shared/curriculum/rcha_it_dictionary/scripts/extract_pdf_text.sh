#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PDF_PATH="${PDF_PATH:-/Users/mac3jis/Documents/Code/p/ai-coding/consulting/shared/curriculum/Inkoranyamuga_y_ikoranabuhanga.pdf}"
OUT_TXT="${OUT_TXT:-$ROOT_DIR/data/interim/inkoranyamuga.txt}"

mkdir -p "$(dirname "$OUT_TXT")"

if ! command -v pdftotext >/dev/null 2>&1; then
  echo "error: pdftotext is required but not found in PATH" >&2
  exit 1
fi

if [ ! -f "$PDF_PATH" ]; then
  echo "error: PDF not found at $PDF_PATH" >&2
  exit 1
fi

pdftotext -layout "$PDF_PATH" "$OUT_TXT"
echo "Extracted text to: $OUT_TXT"
