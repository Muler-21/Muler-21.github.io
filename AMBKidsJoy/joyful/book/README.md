# Joyful English Web Book

A free, structured path from first English words (Stage 0) to proficiency (Stage 6) plus a Workplace pathway, built on a catalogue of free resources checked on the providers' official pages and on original Joyful English lessons. Part of [AMBKidsJoy](../../index.html).

**Open it:** `joyful/book/index.html` (works online and offline; no account, no build step).

## What is inside

| Path | What |
|---|---|
| `index.html`, `book.js`, `book.css` | The web book: Home, Start here (placement), stage pages, libraries, directory with search and filters, progress, notes, bookmarks, teacher and parent guide |
| `data/catalog.json`, `data/catalog.csv` | Resource catalogue (Deliverable B), one record per resource with provenance and verification status |
| `data/catalog.min.js` | Compact catalogue used by the app (generated) |
| `data/curriculum.json`, `data/curriculum.js` | Stages, modules, objectives, assessments and resource links (Deliverable C) |
| `docs/research-report.md` | Deliverable A |
| `docs/curriculum-blueprint.md` | Deliverable C (human-readable) |
| `docs/expansion-plan.md` | Deliverable E |
| `tests/validate.py` | Data validation (fields, controlled vocabularies, IDs, URLs, module links) |
| `tests/book.test.js` | Browser tests (navigation, search, filters, bookmarks, notes, placement, Amharic switch, phone width) |
| `tools/check_links.py` | Link checker to run monthly from a normal connection |
| `tools/research/` | The research records and the scripts that build the catalogue, curriculum and docs |

## Setup and tests

```
python3 tests/validate.py
npm i -D playwright && npx playwright install chromium   # once
node tests/book.test.js
```

To rebuild data after editing the research records: run `build_catalog.py data`, `curriculum.py data` and `docs.py` from `tools/research/` (paths inside the scripts point to the original build folder; adjust if needed).

## Rules followed

External content is linked, never copied. Unknown details are recorded as "not stated". School grade and CEFR level are treated as different things. Completing the book does not guarantee C2 or native-like English.
