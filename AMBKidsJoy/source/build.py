"""Assemble the AMBKidsJoy (Grade 3) site into ./dist.
hub.html  -> main page (published as the artifact page) and dist/home.html (standalone copy for in-site links)
units/*.js -> dist/<id>.html wrappers
math-1 is adapted from the Number Explorers page."""
import os, re, shutil, glob, sys

SRC = os.path.dirname(os.path.abspath(__file__))
DIST = os.path.join(SRC, 'dist')
MATH_SRC = sys.argv[1] if len(sys.argv) > 1 else None
os.makedirs(os.path.join(DIST, 'units'), exist_ok=True)

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">'
         '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
         '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Noto+Sans+Ethiopic:wght@400;600;700&display=swap">')
HEAD = '<!doctype html><html lang="am"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'

for f in ['style.css', 'engine.js', 'icons.js', 'author.js', 'summaries.js', 'summary.js']:
    shutil.copy(os.path.join(SRC, f), os.path.join(DIST, f))
for f in glob.glob(os.path.join(SRC, 'units', '*.js')):
    shutil.copy(f, os.path.join(DIST, 'units', os.path.basename(f)))

# hub: main page + standalone home.html (mission counts computed from unit files)
TPL = open(os.path.join(SRC, 'hub.html'), encoding='utf-8').read()
hub = TPL
import json
counts = {'math-1': 9}
for f in glob.glob(os.path.join(SRC, 'units', '*.js')):
    uid = os.path.basename(f)[:-3]
    counts[uid] = len(re.findall(r"type:'(?:quiz|match|sort|order|tapwords|spell|custom|notes|exam|drill)'", open(f, encoding='utf-8').read()))
SUMS = set(re.findall(r"^'([a-z]+-\d+)':", open(os.path.join(SRC, 'summaries.js'), encoding='utf-8').read(), re.M))
for uid in counts:
    if uid in SUMS and uid != 'math-1': counts[uid] += 1
hub = hub.replace('/*UNITS*/{}', json.dumps(counts, sort_keys=True))
hub = hub.replace('</script>\n', '</script>\n<script src="author.js"></script>\n', 1) if '<script src="author.js">' not in hub else hub
open(os.path.join(DIST, 'hub.html'), 'w', encoding='utf-8').write(hub)
head, body = hub.split('<div class="wrap" id="app">', 1)
open(os.path.join(DIST, 'home.html'), 'w', encoding='utf-8').write(
    HEAD + head + '</head><body><div class="wrap" id="app">' + body + '</body></html>')

TITLES = {'amharic-1': 'ጤና · Amharic', 'english-1': 'My School · English', 'env-1': 'Where Is Our Zone?',
          'moral-1': 'Respecting Humanity', 'health-1': 'Basic Movement Skills', 'art-1': 'Notes, Colours & Drama',
          'math-2': 'Adding and Subtracting', 'amharic-2': 'ጉርብትና · Amharic', 'english-2': 'Months of the Year', 'env-2': 'Understanding Science', 'moral-2': 'Respecting Others', 'health-2': 'Rhythmic Movements', 'art-2': 'Arts Practice'}
AUTO = {}
for f in glob.glob(os.path.join(SRC, 'units', '*.js')):
    m = re.search(r"title:\{en:'([^']+)'", open(f, encoding='utf-8').read())
    if m: AUTO[os.path.basename(f)[:-3]] = m.group(1)
for f in sorted(glob.glob(os.path.join(SRC, 'units', '*.js'))):
    uid = os.path.basename(f)[:-3]
    html = (HEAD + f'<title>{TITLES.get(uid, AUTO.get(uid, uid))} · AMBKidsJoy</title>' + FONTS + '<link rel="stylesheet" href="style.css"></head><body>'
            '<script src="icons.js"></script><script src="summaries.js"></script><script src="summary.js"></script><script src="engine.js"></script>'
            f'<script src="units/{uid}.js"></script><script src="author.js"></script></body></html>')
    open(os.path.join(DIST, uid + '.html'), 'w', encoding='utf-8').write(html)

if MATH_SRC:
    m = open(MATH_SRC, encoding='utf-8').read()
    m = m.replace("'ne-lang'", "'g3-lang'").replace("'ne-done'", "'g3-done-math-1'").replace("'ne-sound'", "'g3-sound'")
    m = m.replace('<div class="tools">', '<div class="tools">\n      <a class="pill" href="home.html" style="background:var(--accent);color:#fff;border-color:transparent;text-decoration:none" data-t="home"></a>', 1)
    m = m.replace(" title:{en:'Number Explorers'", " home:{en:'← All subjects',am:'← ሁሉም ትምህርቶች'},\n title:{en:'Number Explorers'", 1)
    m = m.replace('<title>Number Explorers</title>', '<title>Number Explorers · AMBKidsJoy</title>')
    m = m.replace('<nav class="map" id="map"', '<section class="board" style="gap:14px"><h2 id="amb-sum-h" style="font-size:1.45rem"></h2><div class="panel" id="amb-summary"></div></section>\n  <nav class="map" id="map"', 1)
    SUMJS = ('<script src="summaries.js"></script><script src="summary.js"></script><script>(function(){const el=document.getElementById("amb-summary");const st={};'
             'const d=Object.assign({},AMB_SUMMARY["math-1"],{title:{en:"Numbers up to 10,000",am:"እስከ 10,000 ያሉ ቁጥሮች"}});'
             'const lang=()=>document.documentElement.lang==="en"?"en":"am";'
             'function r(){document.getElementById("amb-sum-h").textContent=lang()==="en"?"Start here: the chapter in one picture":"ከዚህ ጀምሩ፦ ምዕራፉ በአንድ ስዕል";'
             'AMBSummary.render(el,d,{lang:lang(),st,tick(){},yay(){},done(){},rerender:r})}'
             'r();new MutationObserver(r).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});addEventListener("resize",r)})();</script>')
    m = m.replace('</body>', SUMJS + '</body>', 1) if '</body>' in m else m + SUMJS
    head, body = m.split('<div class="wrap">', 1)
    open(os.path.join(DIST, 'math-1.html'), 'w', encoding='utf-8').write(
        HEAD + head + '</head><body style="margin:0"><div class="wrap">' + body.replace('</body>', '<script src="author.js"></script></body>') + ('' if '</body>' in body else '<script src="author.js"></script>') + '</body></html>')
shutil.copy(os.path.join(DIST, 'home.html'), os.path.join(DIST, 'index.html'))

# ---------- Grades 1, 2 (dist/grade-N/) ----------
for GN in (1, 2, 4, 7, 'J'):
    G1 = os.path.join(SRC, 'joyful' if GN == 'J' else f'grade{GN}')
    if not os.path.isdir(G1): continue
    D1 = os.path.join(DIST, 'joyful' if GN == 'J' else f'grade-{GN}'); os.makedirs(os.path.join(D1, 'units'), exist_ok=True)
    GL = 'Joyful English' if GN == 'J' else f'Grade {GN}'
    SUMF = f'summaries{GN}.js'
    shutil.copy(os.path.join(G1, SUMF), os.path.join(D1, SUMF))
    if GN == 1: shutil.copy(os.path.join(G1, 'kit1.js'), os.path.join(D1, 'kit1.js'))
    KIT = 'kit1.js' if GN == 1 else '../grade-1/kit1.js'
    EXTRA = ''
    for _k in sorted(glob.glob(os.path.join(G1, 'kit[2-9].js'))):
        shutil.copy(_k, os.path.join(D1, os.path.basename(_k))); EXTRA += f'<script src="{os.path.basename(_k)}"></script>'
    c1 = {}
    for f in sorted(glob.glob(os.path.join(G1, 'units', '*.js'))):
        uid = os.path.basename(f)[:-3]; short = uid[3:]
        src = open(f, encoding='utf-8').read()
        shutil.copy(f, os.path.join(D1, 'units', uid + '.js'))
        m = re.search(r"title:\{en:'([^']+)'", src)
        html = (HEAD + f'<title>{m.group(1) if m else short} · {GL} · AMBKidsJoy</title>' + FONTS + '<link rel="stylesheet" href="../style.css"></head><body>'
                f'<script src="../icons.js"></script><script src="../summaries.js"></script><script src="{SUMF}"></script><script src="../summary.js"></script><script src="../engine.js"></script><script src="{KIT}"></script>{EXTRA}'
                f'<script src="units/{uid}.js"></script><script src="../author.js"></script></body></html>')
        open(os.path.join(D1, short + '.html'), 'w', encoding='utf-8').write(html)
    import subprocess
    c1 = json.loads(subprocess.check_output(['node', os.path.join(SRC, 'grade1', 'count1.js'), G1, SUMF]))
    h1 = TPL.replace('/*UNITS*/{}', json.dumps(c1, sort_keys=True)).replace("/*GR*/3", "'J'" if GN == 'J' else str(GN)).replace("/*PFX*/''", "'je-'" if GN == 'J' else f"'g{GN}-'").replace("/*ROOT*/''", "'../'")
    h1 = h1.replace('/*GRADEDATA*/', open(os.path.join(G1, 'hub-data.js'), encoding='utf-8').read())
    h1 = h1.replace('href="style.css"', 'href="../style.css"').replace('<title>AMBKidsJoy · Learning Hub</title>', f'<title>{GL} · AMBKidsJoy</title>')
    h1 = h1.replace('</script>\n', '</script>\n<script src="../author.js"></script>\n', 1)
    hd, bd = h1.split('<div class="wrap" id="app">', 1)
    page = HEAD + hd + '</head><body><div class="wrap" id="app">' + bd + '</body></html>'
    for n in ('index.html', 'home.html'):
        open(os.path.join(D1, n), 'w', encoding='utf-8').write(page)
    print(f'grade {GN} units', len(c1), sum(c1.values()))

_bk=os.path.join(SRC,'joyful','book')
if os.path.isdir(_bk):
    _dbk=os.path.join(DIST,'joyful','book')
    if os.path.isdir(_dbk): shutil.rmtree(_dbk)
    shutil.copytree(_bk,_dbk,ignore=shutil.ignore_patterns('__pycache__','node_modules'))
print('built', sorted(os.listdir(DIST)))

# cache-busting: make browsers fetch fresh scripts/styles after each update
import re as _re, glob as _glob, time as _time
_V = _time.strftime('%Y%m%d%H%M')
for _f in _glob.glob(os.path.join(DIST, '*.html')) + _glob.glob(os.path.join(DIST, 'grade-*', '*.html')) + _glob.glob(os.path.join(DIST, 'joyful', '*.html')):
    _s = open(_f, encoding='utf-8').read()
    _s = _re.sub(r'((?:src|href)=")((?:\.\./)?(?:units/)?[\w-]+\.(?:js|css))(")', lambda m: m.group(1) + m.group(2) + '?v=' + _V + m.group(3), _s)
    open(_f, 'w', encoding='utf-8').write(_s)

import shutil as _sh
_sh.copy(os.path.join(SRC,'cover.png'), os.path.join(DIST,'cover.png'))
