/* ሥነ ጥበባት · ምዕራፍ 1 · ሥነ ጥበባትን መለየት እና መግለፅ */
(function(){
const {tx,esc}=G3;const I=window.IC;
const NOTES={W:{svg:I.wholeNote,b:4,snd:1,en:'whole note',am:'ሙሉ ኖታ'},H:{svg:I.halfNote,b:2,snd:1,en:'half note',am:'ግማሽ ኖታ'},Q:{svg:I.quarterNote,b:1,snd:1,en:'quarter note',am:'ሩብ ኖታ'},
 w:{svg:I.wholeRest,b:4,snd:0,en:'whole rest',am:'ሙሉ እረፍት'},h:{svg:I.halfRest,b:2,snd:0,en:'half rest',am:'ግማሽ እረፍት'},q:{svg:I.quarterRest,b:1,snd:0,en:'quarter rest',am:'ሩብ እረፍት'}};
const row=codes=>`<div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap">${codes.split('').map(c=>`<span style="display:inline-block;width:64px;height:64px">${NOTES[c].svg}</span>`).join('')}</div>`;
let AC=null;
function playBar(codes){try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();const beat=.6;let t=AC.currentTime+.1;
 const total=codes.reduce((a,c)=>a+NOTES[c].b,0);
 for(let k=0;k<total;k++){const o=AC.createOscillator(),g=AC.createGain(),tt=t+k*beat;o.type='square';o.frequency.value=k===0?1200:900;g.gain.setValueAtTime(.05,tt);g.gain.exponentialRampToValueAtTime(.0001,tt+.05);o.connect(g);g.connect(AC.destination);o.start(tt);o.stop(tt+.06)}
 codes.forEach(c=>{const n=NOTES[c];if(n.snd){const o=AC.createOscillator(),g=AC.createGain();o.type='triangle';o.frequency.value=523;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.2,t+.03);g.gain.setValueAtTime(.2,t+n.b*beat-.12);g.gain.exponentialRampToValueAtTime(.0001,t+n.b*beat-.02);o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+n.b*beat)}t+=n.b*beat})}catch(e){}}
const sw=(c,label)=>({svg:`<svg viewBox="0 0 100 100" role="img" aria-label="${label}"><path d="M20 30 Q50 6 80 30 Q96 60 70 82 Q40 98 22 76 Q4 52 20 30z" fill="${c}" stroke="var(--ink)" stroke-width="3"/></svg>`});
const PAINT={R:{en:'Red',am:'ቀይ',c:'#D93A30'},Y:{en:'Yellow',am:'ቢጫ',c:'#F4C20D'},B:{en:'Blue',am:'ሰማያዊ',c:'#2F5FD0'}};
const MIX={RR:'R',YY:'Y',BB:'B',RY:'O',YR:'O',YB:'G',BY:'G',RB:'P',BR:'P'};
const RES={R:PAINT.R,Y:PAINT.Y,B:PAINT.B,O:{en:'Orange',am:'ብርቱካናማ',c:'#F08A1C'},G:{en:'Green',am:'አረንጓዴ',c:'#2E9B4E'},P:{en:'Purple',am:'ወይን ጠጅ',c:'#7D3FB0'}};
const CHAL=[{codes:'HH',en:'two half notes',am:'ሁለት ግማሽ ኖታዎች'},{codes:'HQQ',en:'one half note and two quarter notes',am:'አንድ ግማሽ ኖታና ሁለት ሩብ ኖታዎች'},{codes:'QQh',en:'two quarter notes and one half rest',am:'ሁለት ሩብ ኖታዎችና አንድ ግማሽ እረፍት'},{codes:'QqQq',en:'two quarter notes and two quarter rests',am:'ሁለት ሩብ ኖታዎችና ሁለት ሩብ እረፍቶች'},{codes:'W',en:'one whole note',am:'አንድ ሙሉ ኖታ'}];
const sortStr=s=>s.split('').sort().join('');

Unit.start({
 id:'art-1',subject:'art',
 subjectName:{en:'Performing & Visual Arts',am:'ሥነ ጥበባት'},
 chapter:{en:'Chapter 1',am:'ምዕራፍ 1'},
 title:{en:'Notes, Colours & Drama',am:'ኖታ፣ ቀለምና ድራማ'},
 footer:{en:'Built on the Grade 3 Arts student book, Chapter 1. Turn the sound on to hear the rhythms.',am:'በ3ኛ ክፍል የሥነ ጥበባት መጽሐፍ ምዕራፍ 1 ላይ የተመሰረተ። ምቶቹን ለመስማት ድምፁን ክፈቱ።'},
 missions:[
 {title:{en:'Notes and rests',am:'ኖታና እረፍት'},type:'match',
  tip:{en:'A note means we make a sound ("ta"). A rest means we stay silent. Whole = 4 beats, half = 2 beats, quarter = 1 beat.',am:'ኖታ ማለት ድምፅ እናሰማለን (“ታ”)። እረፍት ማለት ዝም እንላለን። ሙሉ = 4 ምት፣ ግማሽ = 2 ምት፣ ሩብ = 1 ምት።'},
  rounds:[
   [[{svg:I.wholeNote},{en:'4 beats with sound',am:'4 ምት በድምፅ'}],[{svg:I.halfNote},{en:'2 beats with sound',am:'2 ምት በድምፅ'}],[{svg:I.quarterNote},{en:'1 beat with sound',am:'1 ምት በድምፅ'}]],
   [[{svg:I.wholeRest},{en:'4 silent beats',am:'4 ምት ያለ ድምፅ'}],[{svg:I.halfRest},{en:'2 silent beats',am:'2 ምት ያለ ድምፅ'}],[{svg:I.quarterRest},{en:'1 silent beat',am:'1 ምት ያለ ድምፅ'}]],
   [[{svg:I.wholeNote},{en:'whole note',am:'ሙሉ ኖታ'}],[{svg:I.halfRest},{en:'half rest',am:'ግማሽ እረፍት'}],[{svg:I.quarterNote},{en:'quarter note',am:'ሩብ ኖታ'}],[{svg:I.wholeRest},{en:'whole rest',am:'ሙሉ እረፍት'}]]
  ]},
 {title:{en:'Rhythm maker',am:'ምት ሠሪ'},type:'custom',
  tip:{en:'One bar holds exactly 4 beats. Build the bar Kokeb asks for, then press Play and clap along. Say "ta" for notes and stay quiet for rests!',am:'አንድ ባር ልክ 4 ምት ይይዛል። ኮከብ የምትጠይቀውን ባር ገንቡ፤ ከዚያ “አጫውት”ን ተጭናችሁ አብራችሁ አጨብጭቡ። ለኖታ “ታ” በሉ፤ ለእረፍት ዝም በሉ!'},
  init(st){st.k=0;st.bar='';st.msg='';st.cls='';st.solved=false},
  render(p,api,st){const C=CHAL[st.k%CHAL.length];const used=st.bar.split('').reduce((a,c)=>a+NOTES[c].b,0);
   p.innerHTML=`<div class="explain"><b>${tx({en:'Build a bar with',am:'ይህን የያዘ ባር ገንቡ፦'})}</b> ${esc(tx(C))}</div>
    <div style="display:flex;gap:4px;align-items:center;min-height:96px;padding:10px;border-radius:16px;border:3px solid var(--ink);background:var(--surface);flex-wrap:wrap" aria-live="polite">
     ${st.bar?st.bar.split('').map(c=>`<span style="display:inline-block;width:${40+NOTES[c].b*14}px;height:76px;text-align:center">${NOTES[c].svg}</span>`).join(''):`<span class="sub small">${tx({en:'Empty bar',am:'ባዶ ባር'})}</span>`}
    </div>
    <div class="progress">${tx({en:'Beats used: {u} of 4',am:'የተያዙ ምቶች፦ ከ4 ውስጥ {u}'},{u:used})}</div>
    <div class="tiles">${Object.keys(NOTES).map(c=>`<button class="tile" data-c="${c}" ${used+NOTES[c].b>4||st.solved?'disabled':''} style="display:grid;justify-items:center;gap:2px;padding:6px 10px"><span style="width:52px;height:52px;display:block">${NOTES[c].svg}</span><span style="font-size:.8rem">${esc(tx(NOTES[c]))} · ${NOTES[c].b}</span></button>`).join('')}</div>
    <div class="row"><button class="btn" data-act="undo" ${st.bar&&!st.solved?'':'disabled'}>${tx(api.UI.undo)}</button><button class="btn" data-act="play" ${st.bar?'':'disabled'}>▶ ${tx({en:'Play',am:'አጫውት'})}</button><button class="btn primary" data-act="check" ${used===4&&!st.solved?'':'disabled'}>${tx(api.UI.check)}</button></div>
    <div class="feedback ${st.cls}">${st.msg}</div>${st.solved?`<div><button class="btn primary" data-act="next">${tx(api.UI.next)}</button></div>`:''}
    <div class="progress">${tx({en:'Bars built: {n}/3',am:'የተገነቡ ባሮች፦ {n}/3'},{n:st.k})}</div>`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
    if(b.dataset.c){st.bar+=b.dataset.c;api.S.tick();st.msg=''}
    if(b.dataset.act==='undo'){st.bar=st.bar.slice(0,-1);st.msg=''}
    if(b.dataset.act==='play')playBar(st.bar.split(''));
    if(b.dataset.act==='check'){if(sortStr(st.bar)===sortStr(C.codes)){st.solved=true;st.cls='good';st.msg=tx(api.UI.good)+' '+tx({en:'Now press Play and clap it!',am:'አሁን “አጫውት”ን ተጭናችሁ አጨብጭቡ!'});api.S.yay();playBar(st.bar.split(''))}
     else{st.cls='bad';st.msg=tx({en:'This bar has 4 beats, but not the notes Kokeb asked for. Check again.',am:'ባሩ 4 ምት አለው፤ ነገር ግን ኮከብ የጠየቀችው ኖታ አይደለም። እንደገና ፈትሹ።'});api.S.nope()}}
    if(b.dataset.act==='next'){st.k++;st.bar='';st.solved=false;st.msg='';if(st.k>=3)api.complete()}
    api.rerender()}}},
 {title:{en:'Count the beats',am:'ምቶችን ቁጠሩ'},type:'quiz',
  tip:{en:'Add the beats of every symbol. Remember: rests count too, even though they are silent!',am:'የእያንዳንዱን ምልክት ምቶች ደምሩ። አስታውሱ፦ እረፍቶች ዝም ቢሉም ይቆጠራሉ!'},
  items:[
   {fig:row('HQQ'),q:{en:'How many beats in total?',am:'በአጠቃላይ ስንት ምት ነው?'},o:['2','3','4','5'],a:2,e:'2 + 1 + 1 = 4'},
   {fig:row('QQQ'),q:{en:'How many beats in total?',am:'በአጠቃላይ ስንት ምት ነው?'},o:['1','3','4','6'],a:1,e:'1 + 1 + 1 = 3'},
   {fig:row('Hh'),q:{en:'How many beats have SOUND?',am:'በድምፅ የሚቆጠሩት ስንት ምቶች ናቸው?'},o:['1','2','4','0'],a:1,e:{en:'The half note has 2 beats with sound. The half rest is 2 silent beats.',am:'ግማሽ ኖታው 2 ምት በድምፅ አለው። ግማሽ እረፍቱ 2 ምት ያለ ድምፅ ነው።'}},
   {fig:row('WQ'),q:{en:'How many beats in total?',am:'በአጠቃላይ ስንት ምት ነው?'},o:['4','5','6','2'],a:1,e:'4 + 1 = 5'},
   {fig:row('QqQq'),q:{en:'How many SILENT beats?',am:'ያለ ድምፅ የሚቆጠሩት ስንት ምቶች ናቸው?'},o:['1','2','3','4'],a:1,e:{en:'Two quarter rests = 2 silent beats.',am:'ሁለት ሩብ እረፍቶች = 2 ምት ያለ ድምፅ።'}}
  ]},
 {title:{en:'Primary colours',am:'መስራች ቀለማት'},type:'sort',
  tip:{en:'Primary colours are the colours we cannot make by mixing. There are only three: red, yellow and blue. All other colours come from them!',am:'መስራች ቀለማት በማቀላቀል ልንሠራቸው የማንችላቸው ቀለማት ናቸው። ሦስት ብቻ ናቸው፦ ቀይ፣ ቢጫና ሰማያዊ። ሌሎቹ ቀለማት ሁሉ ከእነሱ ይገኛሉ!'},
  buckets:[{en:'Primary colour',am:'መስራች ቀለም'},{en:'Not primary',am:'መስራች ያልሆነ'}],
  items:[
   {t:PAINT.R,fig:sw(PAINT.R.c,'red').svg,b:0},{t:PAINT.Y,fig:sw(PAINT.Y.c,'yellow').svg,b:0},{t:PAINT.B,fig:sw(PAINT.B.c,'blue').svg,b:0},
   {t:RES.G,fig:sw(RES.G.c,'green').svg,b:1,why:{en:'Green is made from yellow + blue.',am:'አረንጓዴ ከቢጫ + ሰማያዊ ይሠራል።'}},
   {t:RES.O,fig:sw(RES.O.c,'orange').svg,b:1,why:{en:'Orange is made from red + yellow.',am:'ብርቱካናማ ከቀይ + ቢጫ ይሠራል።'}},
   {t:RES.P,fig:sw(RES.P.c,'purple').svg,b:1,why:{en:'Purple is made from red + blue.',am:'ወይን ጠጅ ከቀይ + ሰማያዊ ይሠራል።'}}
  ]},
 {title:{en:'Colour mixer',am:'ቀለም ማቀላቀያ'},type:'custom',
  tip:{en:'Be a scientist-artist! Choose two primary colours and mix them. Can you find how to make green, orange and purple?',am:'ሳይንቲስት-ሠዓሊ ሁኑ! ሁለት መስራች ቀለማትን መርጣችሁ አቀላቅሉ። አረንጓዴ፣ ብርቱካናማና ወይን ጠጅ እንዴት እንደሚሠሩ ማግኘት ትችላላችሁ?'},
  init(st){st.a=null;st.b=null;st.found=[]},
  render(p,api,st){const r=st.a&&st.b?MIX[st.a+st.b]:null;const R=r?RES[r]:null;
   const pot=(k,sel)=>`<button class="tile" data-p="${k}" style="display:grid;justify-items:center;gap:4px;${sel?'border-color:var(--accent);background:var(--accent-soft)':''}"><span style="width:56px;height:56px;border-radius:50%;background:${PAINT[k].c};border:3px solid var(--ink)"></span>${esc(tx(PAINT[k]))}</button>`;
   p.innerHTML=`<div class="row center" style="gap:16px;align-items:center">
     <div style="display:grid;gap:6px;justify-items:center"><span class="sub small">1</span><div class="tiles">${['R','Y','B'].map(k=>pot(k,st.a===k)).join('')}</div></div>
     <span class="big">+</span>
     <div style="display:grid;gap:6px;justify-items:center"><span class="sub small">2</span><div class="tiles">${['R','Y','B'].map(k=>pot(k,st.b===k)).join('').replace(/data-p="/g,'data-q="')}</div></div></div>
    <div class="row center" style="gap:14px"><span class="big">=</span><span class="pop" style="width:110px;height:110px;border-radius:50%;background:${R?R.c:'var(--surface-2)'};border:4px dashed ${R?'var(--ink)':'var(--line)'}"></span><span class="big" style="font-size:1.6rem">${R?esc(tx(R)):'?'}</span></div>
    <div class="row center">${['G','O','P'].map(k=>`<span class="pill" style="${st.found.includes(k)?'border-color:var(--good)':''}"><span style="width:18px;height:18px;border-radius:50%;background:${RES[k].c}"></span>${esc(tx(RES[k]))} ${st.found.includes(k)?'✓':''}</span>`).join('')}</div>
    <div class="note">${tx({en:'Try it with real paint at home or in class. Mixing more of one colour changes the shade!',am:'ቤት ወይም ክፍል ውስጥ በእውነተኛ ቀለም ሞክሩት። የአንዱን ቀለም መጠን ስትጨምሩ ቅብጥሩ ይቀየራል!'})}</div>`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.p)st.a=b.dataset.p;if(b.dataset.q)st.b=b.dataset.q;api.S.tick();
    const r2=st.a&&st.b?MIX[st.a+st.b]:null;if(r2&&'GOP'.includes(r2)&&!st.found.includes(r2)){st.found.push(r2);api.S.yay();if(st.found.length===3)api.complete()}
    api.rerender()}}},
 {title:{en:'Photo shapes',am:'የፎቶ አቀማመጥ'},type:'sort',
  tip:{en:'A photo can stand tall (portrait / ቋሚ) or lie wide (landscape / አግዳሚ). Tall things fit best in a tall photo. Wide things fit best in a wide photo. Keep everything inside the frame!',am:'ፎቶ ቁም (ቋሚ) ወይም ጋደም (አግዳሚ) ሊሆን ይችላል። ረጃጅም ነገሮች በቋሚ ፎቶ፣ ሰፋፊ ነገሮች በአግዳሚ ፎቶ በደንብ ይገባሉ። ሁሉንም ነገር ከፍሬሙ ውስጥ አስቀምጡ!'},
  buckets:[{en:'Portrait (tall)',am:'ቋሚ'},{en:'Landscape (wide)',am:'አግዳሚ'}],
  items:[
   {t:{en:'A tall tree',am:'ረጅም ዛፍ'},fig:I.tallTree,b:0},
   {t:{en:'Mountains and a wide valley',am:'ተራሮችና ሰፊ ሸለቆ'},fig:I.wideHills,b:1},
   {t:{en:'One friend standing',am:'የቆመ አንድ ጓደኛ'},b:0},
   {t:{en:'The whole football field',am:'የእግር ኳስ ሜዳው በሙሉ'},b:1},
   {t:{en:'A tall church or mosque tower',am:'ረጅም የቤተ ክርስቲያን ወይም የመስጊድ ማማ'},b:0},
   {t:{en:'Your whole class in one long row',am:'ክፍላችሁ በሙሉ በአንድ ረጅም ረድፍ'},b:1}
  ]},
 {title:{en:'Drama faces',am:'የድራማ ስሜቶች'},type:'quiz',
  tip:{en:'Actors show feelings with their face and body. Look at Kokeb\'s face, choose the feeling, then act it out with your own face!',am:'ተዋንያን ስሜትን በፊታቸውና በሰውነታቸው ያሳያሉ። የኮከብን ፊት እዩ፣ ስሜቱን ምረጡ፣ ከዚያ በራሳችሁ ፊት ተውኑት!'},
  items:[
   {fig:I.face('happy'),q:{en:'How does Kokeb feel?',am:'ኮከብ ምን ተሰማት?'},o:[{en:'Happy',am:'ደስታ'},{en:'Sad',am:'ሀዘን'},{en:'Angry',am:'ንዴት'},{en:'Scared',am:'ፍርሃት'}],a:0},
   {fig:I.face('sad'),q:{en:'How does Kokeb feel?',am:'ኮከብ ምን ተሰማት?'},o:[{en:'Surprised',am:'መደነቅ'},{en:'Happy',am:'ደስታ'},{en:'Sad',am:'ሀዘን'},{en:'Angry',am:'ንዴት'}],a:2},
   {fig:I.face('surprised'),q:{en:'How does Kokeb feel?',am:'ኮከብ ምን ተሰማት?'},o:[{en:'Sad',am:'ሀዘን'},{en:'Surprised',am:'መደነቅ'},{en:'Sleepy',am:'እንቅልፍ'},{en:'Angry',am:'ንዴት'}],a:1},
   {fig:I.face('angry'),q:{en:'How does Kokeb feel?',am:'ኮከብ ምን ተሰማት?'},o:[{en:'Angry',am:'ንዴት'},{en:'Happy',am:'ደስታ'},{en:'Scared',am:'ፍርሃት'},{en:'Surprised',am:'መደነቅ'}],a:0},
   {q:{en:'In a play, your character just got a surprise birthday party. Which face do you act?',am:'በድራማ ውስጥ ገፀ-ባሕርያችሁ ያልጠበቀው የልደት ድግስ ተዘጋጀለት። የትኛውን ስሜት ትተውናላችሁ?'},o:[{svg:I.face('scared')},{svg:I.face('surprised')},{svg:I.face('angry')},{svg:I.face('sad')}],a:1,e:{en:'Surprised, then happy! Now act out what happens next.',am:'መደነቅ፣ ቀጥሎ ደስታ! አሁን ቀጥሎ የሚሆነውን ተውኑ።'}},
   {q:{en:'Your character hears a loud noise in the dark night. Which face do you act?',am:'ገፀ-ባሕርያችሁ በጨለማ ሌሊት ኃይለኛ ድምፅ ሰማ። የትኛውን ስሜት ትተውናላችሁ?'},o:[{svg:I.face('happy')},{svg:I.face('angry')},{svg:I.face('scared')},{svg:I.face('sad')}],a:2}
  ]},
 {title:{en:"Thinker's challenge",am:'የአሳቢዎች ፈተና'},type:'quiz',
  tip:{en:'Mix everything you learned. Read carefully: some questions are tricky!',am:'የተማራችሁትን ሁሉ አቀናጁ። በጥንቃቄ አንብቡ፦ አንዳንድ ጥያቄዎች አታላይ ናቸው!'},
  items:[
   {q:{en:'True or false: green is a primary colour.',am:'እውነት ወይስ ሐሰት፦ አረንጓዴ መስራች ቀለም ነው።'},o:[{en:'True',am:'እውነት'},{en:'False',am:'ሐሰት'}],a:1,e:{en:'False. Green is made by mixing yellow and blue.',am:'ሐሰት። አረንጓዴ ቢጫና ሰማያዊን በማቀላቀል ይሠራል።'}},
   {q:{en:'How many quarter notes fill the same time as one whole note?',am:'ስንት ሩብ ኖታዎች ከአንድ ሙሉ ኖታ ጋር እኩል ጊዜ ይወስዳሉ?'},o:['1','2','3','4'],a:3,e:'1 + 1 + 1 + 1 = 4'},
   {q:{en:'How many half notes fill one whole note?',am:'ስንት ግማሽ ኖታዎች አንድ ሙሉ ኖታን ይሞላሉ?'},o:['2','4','1','3'],a:0,e:'2 + 2 = 4'},
   {q:{en:'What can we take photos with?',am:'ፎቶግራፍ በምን ማንሳት እንችላለን?'},o:[{en:'A mobile phone',am:'በሞባይል'},{en:'A camera',am:'በካሜራ'},{en:'Both',am:'በሁለቱም'},{en:'A pencil',am:'በእርሳስ'}],a:2},
   {q:{en:'Drama means…',am:'ድራማ ማለት…'},o:[{en:'Mixing paint',am:'ቀለም ማቀላቀል'},{en:'Acting out a character',am:'ገፀ-ባሕርይን ተላብሶ መተወን'},{en:'Counting beats',am:'ምት መቁጠር'},{en:'Taking photos',am:'ፎቶ ማንሳት'}],a:1}
  ]},
 {type:'notes',notes:{
 big:{en:'Music has notes and rests that last for beats. Art starts with three primary colours. Photos and drama tell stories.',am:'ሙዚቃ ለምቶች የሚቆዩ ኖታዎችና እረፍቶች አሉት። ሥዕል በሦስት መስራች ቀለማት ይጀምራል። ፎቶና ድራማ ታሪክ ይናገራሉ።'},
 points:[{en:'Whole note = 4 beats, half = 2, quarter = 1. Rests last the same but are silent.',am:'ሙሉ ኖታ = 4 ምት፣ ግማሽ = 2፣ ሩብ = 1። እረፍቶች እኩል ይቆያሉ ግን ዝም ናቸው።'},{en:'One bar holds 4 beats.',am:'አንድ ባር 4 ምት ይይዛል።'},{en:'Primary colours: red, yellow, blue. They cannot be made by mixing.',am:'መስራች ቀለማት፦ ቀይ፣ ቢጫ፣ ሰማያዊ። በማቀላቀል አይገኙም።'},{en:'Photos can be portrait (tall) or landscape (wide). Keep the subject inside the frame.',am:'ፎቶ ቋሚ ወይም አግዳሚ ሊሆን ይችላል። የምታነሱትን ከፍሬሙ ውስጥ አድርጉ።'},{en:'Drama means acting a character; faces and bodies show feelings.',am:'ድራማ ገፀ-ባሕርይን መተወን ነው፤ ፊትና ሰውነት ስሜትን ያሳያሉ።'}],
 words:[['ኖታ',{en:'note',am:'የሙዚቃ ድምፅ ምልክት'}],['እረፍት',{en:'rest',am:'የዝምታ ምልክት'}],['መስራች ቀለም',{en:'primary colour',am:'ቀይ፣ ቢጫ፣ ሰማያዊ'}]],
 remember:'4 = 2 + 2 = 2 + 1 + 1 = 1 + 1 + 1 + 1',
 exam:[[{en:'How many beats is a half note?',am:'ግማሽ ኖታ ስንት ምት ነው?'},'2'],[{en:'Is green a primary colour?',am:'አረንጓዴ መስራች ቀለም ነው?'},{en:'No (yellow + blue)',am:'አይደለም (ቢጫ + ሰማያዊ)'}],[{en:'A tall tree fits best in which photo shape?',am:'ረጅም ዛፍ በየትኛው የፎቶ አቀማመጥ ይገባል?'},{en:'Portrait',am:'ቋሚ'}],[{en:'Half note + two quarter notes = ? beats',am:'ግማሽ ኖታ + ሁለት ሩብ ኖታ = ? ምት'},'4']],
 innovate:{title:{en:'Little card studio',am:'ትንሽ የካርድ ስቱዲዮ'},text:{en:'Holidays like New Year need greeting cards. Make cards using only red, yellow and blue, and run a small card stall.',am:'እንደ አዲስ ዓመት ያሉ በዓላት የእንኳን አደረሳችሁ ካርድ ይፈልጋሉ። ቀይ፣ ቢጫና ሰማያዊ ብቻ ተጠቅማችሁ ካርድ ሥሩ፤ ትንሽ የካርድ መሸጫ አዘጋጁ።'},
  steps:[{en:'Design three different cards.',am:'ሦስት የተለያዩ ካርዶችን ንድፍ አውጡ።'},{en:'Work out the cost: paper and paint.',am:'ወጪውን አስሉ፦ ወረቀትና ቀለም።'},{en:'Decide a fair price that covers the cost.',am:'ወጪውን የሚሸፍን ፍትሐዊ ዋጋ ወስኑ።'},{en:'Sell or swap at school; note which design people liked most.',am:'በትምህርት ቤት ሽጡ ወይም ተለዋወጡ፤ ሰዎች በጣም የወደዱትን ንድፍ መዝግቡ።'}]}}}
 ]});
})();
