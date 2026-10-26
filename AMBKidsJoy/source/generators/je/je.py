import json
OUT='/home/claude/site/joyful/units/'
def J(x): return json.dumps(x,ensure_ascii=False,separators=(',',':'))
def E(en,am): return {'en':en,'am':am}
def T(x): return x if isinstance(x,str) else E(*x)
S={}
B="(d=>{const M=K1.engMissions(d);M.push(d.sound);M.push(KJ.speak(d.sp.title,d.sp.tip,d.sp.lines));return M})"
LV={1:('Sound Starter','የድምፅ ጀማሪ','Pre-A1'),2:('Word Explorer','የቃላት አሳሽ','A1'),3:('Story Teller','ተራኪ','A1+ to A2'),4:('Subject Learner','በእንግሊዝኛ ተማሪ','A2+'),5:('Confident Speaker','በራስ የሚተማመን ተናጋሪ','B1'),6:('Exam and Future Ready','ለፈተናና ለወደፊት ዝግጁ','B1+'),7:('University English','የዩኒቨርሲቲ እንግሊዝኛ','B2'),8:('English at Work','እንግሊዝኛ በሥራ ቦታ','B2–C1')}
def sound(title,tip,pairs,stress=False):
    items=[]
    for w1,w2,k,ex in pairs:
        o=[w1,w2]
        if stress: items.append({'say':o[k].lower(),'sayLang':'en-US','q':E('Listen. Where is the stress (the strong part)?','አዳምጡ። ጭነቱ (ጠንካራው ክፍል) የት ነው?'),'o':o,'a':k,'e':E(*ex)})
        else: items.append({'say':o[k],'sayLang':'en-US','q':E('Listen. Which word do you hear?','አዳምጡ። የትኛውን ቃል ሰማችሁ?'),'o':o,'a':k,'e':E(*ex)})
    return {'title':E(*title),'type':'quiz','tip':E(*tip),'items':items}
def sp(lines,title=('Say it','ተናገሩት'),tip=('Listen to each sentence, then tap Speak and say it. The page gives a star when it understands you.','እያንዳንዱን ዓረፍተ ነገር አዳምጡ፤ ከዚያ ተናገሩን ንኩና ተናገሩት። ገጹ ሲረዳችሁ ኮከብ ይሰጣል።')):
    return {'title':E(*title),'tip':E(*tip),'lines':[{'t':t,'am':am,'e':e} for t,am,e in lines]}
def q(en,am,opts,a=0,say=None):
    d={'q':E(en,am) if am else en,'o':[T(o) for o in opts],'a':a}
    if say: d['say']=say;d['sayLang']='en-US'
    return d
def sq(sent,opts,a=0): return {'say':sent.replace('___',opts[a]),'sayLang':'en-US','q':sent,'o':opts,'a':a}
def read(ptitle,paras,items): return {'title':E('Read and answer','አንብቡና መልሱ'),'type':'quiz','tip':E('Tap 🔊 to hear the text, read it yourself, then answer.','ጽሑፉን ለመስማት 🔊 ንኩ፣ ራሳችሁ አንብቡ፣ ከዚያ መልሱ።'),'passage':{'title':ptitle,'paras':paras,'say':' '.join(paras),'sayLang':'en-US'},'items':items}
def gram(title,tip,items): return {'title':E(*title),'type':'quiz','tip':E(*tip),'items':items}
def notes(big,pts,words,rem,ex,inn):
    return {'big':E(*big),'points':[E(*p) for p in pts],'words':[[w,E(en,am)] for w,en,am in words],'remember':E(*rem),'exam':[[T(a),T(b)] for a,b in ex],
            'innovate':{'title':E(*inn[0]),'text':E(*inn[1]),'steps':[E(*s) for s in inn[2]]}}
def sm(c,labels): return {'concept':E(*c),'labels':[E(*l) for l in labels]}
def U(L,title,data,extra,exam,nt,summ):
    uid=f'je-l{L}-1';n,na,cefr=LV[L]
    cfg=f"id:'{uid}',grade:'J',sub:{J(E(f'Level {L} · {n} ({cefr})',f'ደረጃ {L} · {na} ({cefr})'))},subject:'l{L}',subjectName:{J(E('Joyful English','እንግሊዝኛ በደስታ'))},chapter:{J(E('Lesson 1','ትምህርት 1'))},title:{J(E(*title))},footer:{J(E('Joyful English, Level %d, Lesson 1. Built on research about Ethiopian learners’ English and the CEFR scale.'%L,'እንግሊዝኛ በደስታ፣ ደረጃ %d፣ ትምህርት 1። በኢትዮጵያ ተማሪዎች የእንግሊዝኛ ክህሎት ጥናትና በCEFR ላይ የተመሠረተ።'%L))}"
    js=f"/* {uid} (generated) */\n(function(){{\nconst M={B}({J(data)});\n{''.join('M.push('+J(m)+');' for m in extra)}\nM.push({{type:'exam',items:{J(exam)}}});\nM.push({{type:'notes',notes:{J(nt)}}});\nUnit.start({{{cfg},missions:M}});\n}})();\n"
    open(OUT+uid+'.js','w').write(js)
    assert len(summ['labels'])==len(nt['points'])
    S[uid]=summ
def sp_(w,b,e,am): return {'w':w,'blanks':b,'e':e,'am':am}
