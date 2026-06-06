#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
from collections import Counter
from pathlib import Path


def load_entries(path: Path) -> list[dict]:
    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data, list):
        raise ValueError("Expected top-level JSON array of entries")
    return data


def validate(entries: list[dict]) -> dict:
    required = ("headword_kin", "english_terms", "domain", "definition_kin", "source_page")
    missing_counts = {field: 0 for field in required}
    empty_english_terms = 0

    headword_counter = Counter()
    duplicate_headwords: list[str] = []
    short_definitions = 0

    for item in entries:
        for field in required:
            value = item.get(field)
            if value is None or value == "" or value == []:
                missing_counts[field] += 1

        english_terms = item.get("english_terms", [])
        if not isinstance(english_terms, list) or len(english_terms) == 0:
            empty_english_terms += 1

        headword = str(item.get("headword_kin", "")).strip()
        if headword:
            headword_counter[headword] += 1

        definition = str(item.get("definition_kin", "")).strip()
        if definition and len(definition) < 25:
            short_definitions += 1

    duplicate_headwords = [k for k, v in headword_counter.items() if v > 1]

    return {
        "summary": {
            "total_entries": len(entries),
            "missing_required_fields": missing_counts,
            "entries_with_empty_english_terms": empty_english_terms,
            "duplicate_headword_count": len(duplicate_headwords),
            "short_definition_count_lt_25_chars": short_definitions,
        },
        "duplicates": {
            "headword_kin": duplicate_headwords[:200],
        },
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Validate parsed dictionary entries.")
    parser.add_argument("--input", required=True, help="Path to JSON entries file")
    parser.add_argument("--report", required=True, help="Path to output JSON report")
    args = parser.parse_args()

    input_path = Path(args.input)
    report_path = Path(args.report)
    entries = load_entries(input_path)
    report = validate(entries)

    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")

    summary = report["summary"]
    print(f"Entries: {summary['total_entries']}")
    print(f"Missing required fields: {summary['missing_required_fields']}")
    print(f"Duplicates (headword): {summary['duplicate_headword_count']}")
    print(f"Validation report: {report_path}")


if __name__ == "__main__":
    main()
