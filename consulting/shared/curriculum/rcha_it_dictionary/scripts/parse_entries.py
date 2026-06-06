#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import json
import re
from dataclasses import dataclass
from pathlib import Path

LABELS = ("HI", "Eng", "Fr", "Fra", "NK", "SH")
HEADER_PATTERNS = (
    "INKORANYAMUGA Y’IKORANABUHANGA",
    "INKORANYAMUGA Y'IKORANABUHANGA",
)

ENTRY_START_RE = re.compile(
    r"(?P<head>[A-ZÀ-ÖØ-Þ][^().\n:]{1,140}?)\s*\((?P<pron>[^)]+)\)\.\s*"
)


@dataclass
class Entry:
    entry_id: str
    headword_kin: str
    pronunciation_kin: str
    synonym_kin: str
    english_terms: list[str]
    french_terms: list[str]
    domain: str
    definition_kin: str
    source_title: str
    source_page: int
    source_year: int
    review_status: str
    notes: str

    def as_json(self) -> dict:
        return {
            "entry_id": self.entry_id,
            "headword_kin": self.headword_kin,
            "pronunciation_kin": self.pronunciation_kin,
            "synonym_kin": self.synonym_kin,
            "english_terms": self.english_terms,
            "french_terms": self.french_terms,
            "domain": self.domain,
            "definition_kin": self.definition_kin,
            "source_title": self.source_title,
            "source_page": self.source_page,
            "source_year": self.source_year,
            "review_status": self.review_status,
            "notes": self.notes,
        }

    def as_csv(self) -> dict:
        return {
            "entry_id": self.entry_id,
            "headword_kin": self.headword_kin,
            "pronunciation_kin": self.pronunciation_kin,
            "synonym_kin": self.synonym_kin,
            "english_terms": " | ".join(self.english_terms),
            "french_terms": " | ".join(self.french_terms),
            "domain": self.domain,
            "definition_kin": self.definition_kin,
            "source_title": self.source_title,
            "source_page": self.source_page,
            "source_year": self.source_year,
            "review_status": self.review_status,
            "notes": self.notes,
        }


def normalize_space(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def is_page_number_line(line: str) -> bool:
    stripped = line.strip()
    if not stripped:
        return False
    if re.fullmatch(r"\d+", stripped):
        return True
    if re.fullmatch(r"[ivxlcdmIVXLCDM]+", stripped):
        return True
    if re.fullmatch(r"[A-Z]", stripped):
        return True
    return False


def clean_page(page_text: str) -> str:
    page_text = page_text.replace("\u00ad", "")
    kept_lines: list[str] = []
    for raw in page_text.splitlines():
        line = raw.strip()
        if not line:
            continue
        if line in HEADER_PATTERNS:
            continue
        if is_page_number_line(line):
            continue
        kept_lines.append(line)
    return normalize_space(" ".join(kept_lines))


def split_terms(text: str) -> list[str]:
    if not text:
        return []
    terms = [normalize_space(part.strip(" .")) for part in text.split(";")]
    return [term for term in terms if term]


def extract_label(segment: str, label_pattern: str) -> str:
    labels_alt = "|".join(LABELS)
    pattern = rf"(?:{label_pattern})\s*:\s*(.*?)\s*(?=(?:{labels_alt})\s*:|$)"
    match = re.search(pattern, segment, flags=re.IGNORECASE)
    return normalize_space(match.group(1)) if match else ""


def parse_entries(text: str) -> list[Entry]:
    pages = text.split("\f")
    records: list[Entry] = []
    counter = 1

    for page_index, raw_page in enumerate(pages, start=1):
        cleaned = clean_page(raw_page)
        if "Eng:" not in cleaned or "NK:" not in cleaned:
            continue

        starts = list(ENTRY_START_RE.finditer(cleaned))
        if not starts:
            continue

        for idx, match in enumerate(starts):
            start_pos = match.start()
            end_pos = starts[idx + 1].start() if idx + 1 < len(starts) else len(cleaned)
            segment = cleaned[start_pos:end_pos].strip()

            # A valid entry must have at least English term, domain, and definition labels.
            if not all(label + ":" in segment for label in ("Eng", "NK", "SH")):
                continue

            headword = normalize_space(match.group("head"))
            pronunciation = normalize_space(match.group("pron"))
            synonym = extract_label(segment, "HI")
            english_terms = split_terms(extract_label(segment, "Eng"))
            french_terms = split_terms(extract_label(segment, "Fr(?:a)?"))
            domain = extract_label(segment, "NK")
            definition = extract_label(segment, "SH")

            if not headword or not english_terms or not domain or not definition:
                continue

            entry = Entry(
                entry_id=f"rcha-it-{counter:06d}",
                headword_kin=headword,
                pronunciation_kin=pronunciation,
                synonym_kin=synonym,
                english_terms=english_terms,
                french_terms=french_terms,
                domain=domain,
                definition_kin=definition,
                source_title="Inkoranyamuga y'ikoranabuhanga",
                source_page=page_index,
                source_year=2026,
                review_status="auto_parsed",
                notes="",
            )
            records.append(entry)
            counter += 1

    return records


def write_json(path: Path, entries: list[Entry]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    payload = [entry.as_json() for entry in entries]
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def write_csv(path: Path, entries: list[Entry]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    fieldnames = [
        "entry_id",
        "headword_kin",
        "pronunciation_kin",
        "synonym_kin",
        "english_terms",
        "french_terms",
        "domain",
        "definition_kin",
        "source_title",
        "source_page",
        "source_year",
        "review_status",
        "notes",
    ]
    with path.open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for entry in entries:
            writer.writerow(entry.as_csv())


def main() -> None:
    parser = argparse.ArgumentParser(description="Parse RCHA IT dictionary PDF text into structured data.")
    parser.add_argument("--input", required=True, help="Path to pdftotext output file")
    parser.add_argument("--json-output", required=True, help="Output JSON path")
    parser.add_argument("--csv-output", required=True, help="Output CSV path")
    args = parser.parse_args()

    text = Path(args.input).read_text(encoding="utf-8", errors="replace")
    entries = parse_entries(text)
    write_json(Path(args.json_output), entries)
    write_csv(Path(args.csv_output), entries)
    print(f"Parsed entries: {len(entries)}")
    print(f"JSON output: {args.json_output}")
    print(f"CSV output: {args.csv_output}")


if __name__ == "__main__":
    main()
