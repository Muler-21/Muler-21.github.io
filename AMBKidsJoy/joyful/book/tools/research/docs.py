import json
from collections import Counter,defaultdict
B='/home/claude/site/joyful/book/'
R=json.load(open(B+'data/catalog.json'));C=json.load(open(B+'data/curriculum.json'))
V=Counter(r['verification_status'] for r in R);P=Counter(r['provider_name'] for r in R)
lv=['Pre-A1','A1','A2','B1','B2','C1','C2'];sk=['listening','reading','writing','speaking','grammar','vocabulary','pronunciation','phonics','academic','professional']
M=defaultdict(int)
for r in R:
    for l in r['CEFR_level']:
        for s in r['skill_categories']: M[(l,s)]+=1
cov='| Skill | '+' | '.join(lv)+' |\n|---|'+'---|'*len(lv)+'\n'+''.join(f'| {s} | '+' | '.join(str(M[(l,s)]) for l in lv)+' |\n' for s in sk)
prov='\n'.join(f'| {p} | {n} | {sum(1 for r in R if r["provider_name"]==p and r["verification_status"]=="page_opened")} |' for p,n in P.most_common())
rep=f'''# Joyful English Web Book — Research report (Deliverable A)

Research date: 26 October 2026. Author: AMBKidsJoy (Mulusew Kassa Bitew, PhD), research and build assisted by Claude.

## Summary

The catalogue holds **{len(R)} records** from {len(P)} providers. They are labelled honestly by how they were checked:

| Verification status | Records | Meaning |
|---|---|---|
| page_opened | {V['page_opened']} | The researcher opened this exact page and recorded what it showed. |
| listed_on_opened_official_page | {V['listed_on_opened_official_page']} | The exact title and URL were read from an official index page that was opened; the lesson page itself was not opened. |
| secondary_source_only | {V['secondary_source_only']} | Described by a reliable secondary source (e.g. Wikipedia, a library catalogue); the provider site could not be opened. |
| original_content | {V['original_content']} | Original Joyful English lessons built in this project. |

**Verified count in the strict sense (page opened): {V['page_opened']}.** The research tool blocked most deep links, so most individual lessons were recorded from the provider's own index pages rather than opened one by one. This should be closed with the link checker (see the expansion plan) before the catalogue is described as fully verified.

## Providers

| Provider | Records | Pages opened |
|---|---|---|
{prov}

### Strengths and limitations

- **British Council LearnEnglish (adults), Teens, Kids** — the largest and best-structured free collection: listening, reading, writing and speaking lessons at A1–C1, grammar A1–C1, topic vocabulary, and business series (English for emails, You're Hired, Podcasts for professionals). Opened lesson pages show audio, transcripts, tasks and PDF worksheets; a free account is only needed for favourites and comments. British English. Content is © British Council: link only. C2 and pronunciation are thin.
- **VOA Learning English** — American English; Let's Learn English Level 1 (52 lessons) and Level 2 (30 lessons) with video, audio, dialogue text, quizzes, Word Book and lesson plans; slow-speed news and grammar series. VOA-produced material is public domain (credit VOA), except third-party and AP material.
- **Cambridge English** — 175 short online activities by level A1–C2; free parent guidance; **Write & Improve** gives free automatic feedback on writing (paid teacher add-ons). © Cambridge: link only.
- **Purdue OWL** — authoritative academic writing guides for B2–C1 learners and university students; explanations rather than exercises; not to be reproduced without permission.
- **Randall's ESL Cyber Listening Lab** — many everyday listening quizzes (65 at the Easy level) with MP3 audio and scripts; © all rights reserved; pricing not stated and the site promotes a paid service.
- **Starfall** — free early phonics and reading (ABCs, 15 phonics books, printouts); designed for first-language readers.
- **Storyline Online** — free read-aloud picture books with curriculum guides; captions not confirmed.
- **Open-licence libraries** — StoryWeaver (Creative Commons, confirmed on its site), African Storybook and Global Digital Library (open licences per secondary sources): these can be printed, translated into Amharic and adapted, which suits Ethiopian schools. Project Gutenberg offers public-domain classics for advanced readers.
- **Unite for Literacy** — free picture books with narration in 50+ languages including Amharic (secondary source).
- **ReadWorks, CommonLit** — free reading passages with questions for US grades; useful for B1–B2 reading, need a teacher account.
- **Oxford 3000/5000** — core vocabulary lists aligned to CEFR A1–C1.
- **BBC Learning English** — free and well known, but its site could not be opened by the research tool; recorded from secondary sources only.

## Coverage by level and skill (number of records)

{cov}
Age groups: {dict(Counter(a for r in R for a in r['target_age_group']))}. English varieties: {dict(Counter(r['primary_language_variety'] for r in R))}.

## Pricing and access

Nearly all records are free to use. Registration is optional (comments, favourites) for British Council sites; Write & Improve has paid teacher features; ReadWorks needs a free teacher account; Randall's ESL Lab does not state its pricing on the opened page. No paywalls were bypassed.

## Copyright and reuse

- Most providers (British Council, Cambridge, Purdue OWL, Randall's ESL Lab, Storyline Online) are **link only**: the web book shows an original short description and opens the provider's own page.
- **VOA**: VOA-produced material is public domain with credit; third-party/AP material is excluded.
- **StoryWeaver, African Storybook, Global Digital Library**: open licences — printing, translation and adaptation allowed under each item's Creative Commons terms (check per item).
- **Project Gutenberg**: public domain in the USA; check local law.
- No external lesson text, audio, video or worksheet is copied into the platform.

## Gaps found

1. **Speaking at C1–C2** and **pronunciation for all levels** are thin among verified free sources. Joyful English lessons (speech recognition, minimal pairs for Amharic speakers) partly fill this.
2. **C2 / proficiency** resources are scarce and mostly authentic texts.
3. **Early years (2–5)** is mostly songs and stories; structured phonics for EFL learners is limited (Starfall targets first-language readers).
4. **African and Ethiopian contexts** are rare outside open-licence story libraries.
5. **Workplace sectors** (agriculture, health, ICT) need specialised content beyond general business English.
6. Many providers lack **transcripts or answer keys** on the index level; these were not verified per lesson.

## Method

Official provider pages were found through web search and opened with a web-reading tool. For each page the researcher recorded title, level, skills, formats, transcript, exercises, answer keys, downloads, access and terms, writing "not stated" for anything not shown. Index pages were used to record exact lesson titles and URLs. Quality scores are curator estimates using the rubric in the master prompt (quality 25, relevance 20, accessibility 15, exercises 15, provenance 15, age/level fit 10); copyright and safety were treated as pass/fail gates. Scores are subjective and provider-level, not independent evaluations.

## Sources opened (selection)

British Council LearnEnglish sitemap and level pages; LearnEnglish Teens level pages and lessons; LearnEnglish Kids short stories, sounds, listen-and-watch and getting-started pages; VOA Learning English course pages, lessons, series pages and terms of use; Cambridge English parents page, Activities for learners and Write & Improve teachers page; Purdue OWL Academic Writing and Common Writing Assignments; Randall's ESL Lab home, Easy index and a lesson; Starfall teacher page; Storyline Online about page; StoryWeaver blog and Pratham Books article; Global Book Alliance GDL page; Oxford 3000/5000 page; ReadWorks teacher page; Project Gutenberg eBook licence; Wikipedia pages for African Storybook, BBC Learning English and Super Simple Songs; Literacy Minnesota (Unite for Literacy); KQED (CommonLit); ULPGC catalogue (BBC pronunciation).
'''
open(B+'docs/research-report.md','w').write(rep)
bp='# Joyful English Web Book — Curriculum blueprint (Deliverable C)\n\nSchool grades and CEFR levels are **not equivalent**: the grade column shows where learners *usually* are, and learners should be placed by the Start-here check, not by grade. Completing the stages does not by itself guarantee C2 or native-like proficiency.\n\n## Mapping\n\n| CEFR | Usual grades (Ethiopia) | Joyful English | Stage |\n|---|---|---|---|\n'+''.join(f"| {m['cefr']} | {m['grades']} | {m['joyful']} | {m['stage']} |\n" for m in C['map'])
bp+='\nPathways: **general** (Stages 0–4), **academic** (Stages 4–6, Purdue OWL, lectures, research writing) and **professional** (the Workplace pathway W.1–W.6, open at A2 to C1).\n'
for s in C['stages']:
    bp+=f"\n## {s['name']}\n\n- **Ages:** {s['ages']} · **CEFR:** {s['cefr']} · **Usual grades:** {s['grades']} · **Track:** {s['track']}\n- **Goal:** {s['goal']}\n- **Prerequisites:** {s['prereq']}\n- **Stage assessment:** {s['assessment']}\n\n| Module | Objectives | Resources (catalogue IDs) | Joyful English | Check |\n|---|---|---|---|---|\n"
    for m in s['modules']:
        bp+=f"| {m['id']} {m['title']} | {'; '.join(m['objectives'])} | {', '.join(m['resources'])} | {('Level '+str(m['joyful'])+', Lesson 1') if m['joyful'] else '—'} | {m['assessment']} |\n"
open(B+'docs/curriculum-blueprint.md','w').write(bp)
ex=f'''# Joyful English Web Book — Expansion plan (Deliverable E)

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
'''
open(B+'docs/expansion-plan.md','w').write(ex)
print('docs written')
