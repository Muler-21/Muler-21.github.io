# Joyful English Web Book — Expansion plan (Deliverable E)

## Priorities

1. **Close the verification gap** — run `tools/check_links.py` from a normal internet connection to confirm that every listed URL still opens (HTTP 200), then open a sample of 10% of each provider's lessons by hand and update `verification_status` and the "not stated" fields (transcript, answer key, downloads).
2. **Add Joyful English lessons** in the order of the guidebook: Level 4 (Grade 7 switch to English-medium) and Level 6 (Grade 12 exam), then Levels 1–3, then 7–8 and sector tracks.
3. **Fill catalogue gaps**: pronunciation (BBC Sounds of English once verifiable, VOA How to Pronounce episodes), C1–C2 speaking, early-years phonics for EFL learners, Ethiopian/African stories (StoryWeaver and African Storybook items at each level; translate selected stories into Amharic), sector English (agriculture, health, ICT, tourism).
4. **BBC Learning English** — verify 6 Minute English, The English We Speak and pronunciation series first-hand and add individual episodes.
5. **Placement** — replace the short self-check with a 24-item adaptive placement check and pilot it in 3–5 schools.

## Quality control

- Every new record must pass `tests/validate.py` (required fields, controlled vocabularies, unique IDs, https URLs, a verification status and evidence note).
- Never invent metadata: unknown values stay "not stated".
- Copyright gate: external content is linked, not copied, unless the licence allows reuse (record the licence URL).
- A second person reviews 10% of new records each month.
- Quality scores are curator estimates; add independent teacher ratings when available.

## Maintenance

- Monthly: run the link checker; mark broken links `link_broken` and look for the new URL on the provider's index page.
- Each term: re-check pricing and registration for the top 20 providers.
- Each year: review the curriculum against the national English curriculum and learner feedback.

## Additional research tasks

- Confirm Creative Commons variants for StoryWeaver, African Storybook and GDL items before printing.
- Check Unite for Literacy and Storyline Online terms for classroom projection.
- Survey Ethiopian teachers on which resources work offline and on low bandwidth.
