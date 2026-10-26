"""Validate the Joyful English catalogue and curriculum. Run: python3 tests/validate.py (from the book folder)."""
import json,sys,os,re
H=os.path.dirname(os.path.abspath(__file__));D=os.path.join(H,'..','data')
R=json.load(open(os.path.join(D,'catalog.json')));C=json.load(open(os.path.join(D,'curriculum.json')))
REQ=['resource_id','resource_title','provider_name','official_source_url','specific_lesson_url','resource_type','target_age_group','CEFR_level','school_grade_mapping','primary_language_variety','skill_categories','topic','learning_objectives','prerequisites','estimated_duration','lesson_format','transcript_available','subtitles_available','downloadable_audio_available','printable_material_available','exercises_available','answer_key_available','registration_required','pricing_status','accessibility_features','copyright_status','licence_url','permitted_use','last_verified_date','verification_status','evidence_notes','quality_score','limitations']
AGE={'early-years','child','teen','adult','teacher'};SK={'listening','reading','writing','speaking','grammar','vocabulary','pronunciation','phonics','academic','professional','exam-skills'}
LV={'Pre-A1','A1','A2','B1','B2','C1','C2'};TY={'lesson','course','series','collection','tool','reference','library','video-channel'};FMT={'text','video','audio','book','worksheet','quiz','interactive','mixed'}
VAR={'British','American','international','other','unknown'};VER={'page_opened','listed_on_opened_official_page','secondary_source_only','original_content'};ST={'0','1','2','3','4','5','6','W'}
err=[];ids=set()
for r in R:
    i=r.get('resource_id')
    for k in REQ:
        if k not in r: err.append(f'{i}: missing {k}')
    if i in ids: err.append(f'duplicate id {i}')
    ids.add(i)
    if not r['resource_title'].strip(): err.append(f'{i}: empty title')
    if r['verification_status']!='original_content' and not r['specific_lesson_url'].startswith('https://'): err.append(f'{i}: url not https')
    for a in r['target_age_group']:
        if a not in AGE: err.append(f'{i}: bad age {a}')
    for s in r['skill_categories']:
        if s not in SK: err.append(f'{i}: bad skill {s}')
    for l in r['CEFR_level']:
        if l not in LV: err.append(f'{i}: bad level {l}')
    if r['resource_type'] not in TY: err.append(f'{i}: bad type')
    for f in r['lesson_format']:
        if f not in FMT: err.append(f'{i}: bad format {f}')
    if r['primary_language_variety'] not in VAR: err.append(f'{i}: bad variety')
    if r['verification_status'] not in VER: err.append(f'{i}: bad verification')
    if not r['evidence_notes'].strip(): err.append(f'{i}: no evidence')
    if not re.match(r'\d{4}-\d{2}-\d{2}$',r['last_verified_date']): err.append(f'{i}: bad date')
    for s in r['stage']:
        if s not in ST: err.append(f'{i}: bad stage {s}')
    q=r['quality_score']
    if q is not None and not (0<=q<=100): err.append(f'{i}: bad score')
    if q is not None and not r.get('quality_basis'): err.append(f'{i}: score without basis')
for s in C['stages']:
    for m in s['modules']:
        for x in m['resources']:
            if x not in ids: err.append(f'module {m["id"]}: unknown resource {x}')
        if not m['objectives']: err.append(f'module {m["id"]}: no objectives')
print(f'{len(R)} records, {sum(len(s["modules"]) for s in C["stages"])} modules checked')
if err: print('\n'.join(err[:50]));print(f'FAILED: {len(err)} problems');sys.exit(1)
print('OK: all checks passed')
