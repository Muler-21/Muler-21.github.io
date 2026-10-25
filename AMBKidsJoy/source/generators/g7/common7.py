import json,sys
OUT='/home/claude/site/grade7/units/'
def J(x): return json.dumps(x,ensure_ascii=False,separators=(',',':'))
def E(en,am): return {'en':en,'am':am}
TR={'maths':'ሒሳብ','history':'ታሪክ','sport':'ስፖርት','wax':'ሰም','glue':'ሙጫ','sand':'አሸዋ','Africa':'አፍሪካ','Europe':'አውሮፓ','Asia':'እስያ',
 'Afro-Asiatic':'አፍሮ-እስያቲክ','Niger-Congo':'ኒጀር-ኮንጎ','Khoisan':'ኮይሳን','Mali':'ማሊ','Ghana':'ጋና','Kush':'ኩሽ','Athens (Greece)':'አቴንስ (ግሪክ)','China':'ቻይና',
 'Rome':'ሮም','Constantinople':'ቁስጥንጥንያ','Athens':'አቴንስ','Baghdad':'ባግዳድ','India':'ሕንድ','Ethiopia':'ኢትዮጵያ','Mesopotamia':'ሜሶፖታሚያ','Greece':'ግሪክ'}
def T(x): return (E(x,TR[x]) if x in TR else x) if isinstance(x,str) else E(*x)
def q(en,am,opts,a=0,e=None,fig=None,say=None):
    d={'q':E(en,am) if am else en,'o':[T(o) for o in opts],'a':a}
    if e: d['e']=E(*e)
    if fig: d['fig']=fig
    if say: d['say']=say;d['sayLang']='en-US'
    return d
def quiz(title,tip,items,**kw): return {'title':E(*title),'type':'quiz','tip':E(*tip),'items':items,**kw}
def sortm(title,tip,buckets,items,say=False):
    its=[]
    for t,b in items:
        it={'t':T(t),'b':b}
        if say: it['say']=t if isinstance(t,str) else t[0];it['sayLang']='en-US'
        its.append(it)
    return {'title':E(*title),'type':'sort','tip':E(*tip),'buckets':[E(*b) for b in buckets],'items':its}
def match(title,tip,rounds,say=False):
    m={'title':E(*title),'type':'match','tip':E(*tip),'rounds':[[[T(a),T(b)] for a,b in r] for r in rounds]}
    if say: m['sayRight']='en-US'
    return m
def order(title,tip,help,rounds): return {'title':E(*title),'type':'order','tip':E(*tip),'help':E(*help),'rounds':[{'prompt':E(*p),'items':[T(i) for i in its]} for p,its in rounds]}
def passage(title,paras,say=None):
    d={'title':T(title),'paras':paras if isinstance(paras,list) else paras}
    if say: d['say']=say;d['sayLang']='en-US'
    return d
def notes(big,pts,words,rem,ex,inn):
    return {'big':E(*big),'points':[E(*p) for p in pts],'words':[[w,E(en,am)] for w,en,am in words],'remember':E(*rem),'exam':[[T(a),T(b)] for a,b in ex],
            'innovate':{'title':E(*inn[0]),'text':E(*inn[1]),'steps':[E(*s) for s in inn[2]]}}
def sm(c,labels): return {'concept':E(*c),'labels':[E(*l) for l in labels]}
S={}
def unit(uid,subject,sname,chap,title,footer,builder,data,extra,exam,notes_,summary):
    js=f"""/* {uid} (generated) */
(function(){{
const M={builder}({J(data)});
{''.join('M.push('+J(m)+');' for m in extra)}
M.push({{type:'exam',items:{J(exam)}}});
M.push({{type:'notes',notes:{J(notes_)}}});
Unit.start({{id:'{uid}',grade:7,subject:'{subject}',subjectName:{J(sname)},chapter:{J(chap)},title:{J(title)},footer:{J(footer)},missions:M}});
}})();
"""
    open(OUT+uid+'.js','w').write(js)
    assert len(summary['labels'])==len(notes_['points']),uid
    assert len(exam)>=4,uid
    S[uid]=summary
def dump(name):
    open('/tmp/claude-0/-home-claude/36ae72fa-f251-5f08-9ceb-c41099f5a511/scratchpad/g7/sum_'+name+'.json','w').write(json.dumps(S,ensure_ascii=False));print(name,len(S))
def D(kind,title,tip,need=5): return {'kind':kind,'title':E(*title),'tip':E(*tip),'need':need}
