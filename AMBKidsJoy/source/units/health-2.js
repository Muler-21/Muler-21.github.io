/* ጤናና ሰውነት ማጎልመሻ · ምዕራፍ 2 · የምት እንቅስቃሴዎች */
(function(){
const {tx,esc,rnd,shuffle}=G3;
const TEMPO={walk:{en:'Walking beat',am:'የርምጃ ምት',bpm:70},jog:{en:'Jogging beat',am:'የሶምሶማ ምት',bpm:120},run:{en:'Running beat',am:'የሩጫ ምት',bpm:170}};
const MOVES=[{en:'March in place',am:'ባላችሁበት ተራመዱ'},{en:'Arms forward, then back',am:'እጅ ወደ ፊት፣ ከዚያ ወደ ኋላ'},{en:'Arms and legs out to the side, then together',am:'እጅና እግር ወደ ጎን ክፈቱ፣ ከዚያ ግጠሙ'},{en:'Clap above your head',am:'ከራሳችሁ በላይ አጨብጭቡ'},{en:'Touch your knees',am:'ጉልበታችሁን ንኩ'},{en:'Turn around slowly',am:'ቀስ ብላችሁ ዙሩ'}];
let AC=null,timer=null;
function click(t,hi){const o=AC.createOscillator(),g=AC.createGain();o.type='square';o.frequency.value=hi?1100:800;g.gain.setValueAtTime(.06,t);g.gain.exponentialRampToValueAtTime(.0001,t+.06);o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+.07)}
function beats(bpm,n){try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();const sp=60/bpm;for(let k=0;k<n;k++)click(AC.currentTime+.05+k*sp,k%4===0)}catch(e){}}
function stopRoutine(st){clearInterval(timer);timer=null;st.playing=false;st.beat=-1}

Unit.start({
 id:'health-2',subject:'health',
 subjectName:{en:'Health & Physical Education',am:'ጤናና ሰውነት ማጎልመሻ'},chapter:{en:'Chapter 2',am:'ምዕራፍ 2'},
 title:{en:'Rhythmic Movements',am:'የምት እንቅስቃሴዎች'},
 footer:{en:'Built on the Grade 3 Health & PE student book, Chapter 2. Turn the sound on, and move with a teacher in a safe, open space.',am:'በ3ኛ ክፍል የጤናና ሰውነት ማጎልመሻ መጽሐፍ ምዕራፍ 2 ላይ የተመሰረተ። ድምፁን ክፈቱ፤ ከመምህር ጋር ሰፊና ደህንነቱ በተጠበቀ ቦታ ተንቀሳቀሱ።'},
 missions:[
 {title:{en:'What is rhythm?',am:'ምት ምንድን ነው?'},type:'quiz',
  tip:{en:'Rhythmic movement means moving to a beat. We start slow, like walking, then the beat gets faster: jogging, then running. It trains fitness, coordination and quick reactions, and it is fun!',am:'የምት እንቅስቃሴ ማለት ከምት ጋር መንቀሳቀስ ነው። ቀስ ብለን እንደ ርምጃ እንጀምራለን፤ ከዚያ ምቱ ይፈጥናል፦ ሶምሶማ፣ ከዚያ ሩጫ። የአካል ብቃትን፣ ቅንጅትንና ፈጣን ምላሽን ያዳብራል፤ ደግሞም ያስደስታል!'},
  items:[
   {q:{en:'Rhythmic movement means…',am:'የምት እንቅስቃሴ ማለት…'},o:[{en:'Moving to a beat or music',am:'ከምት ወይም ከሙዚቃ ጋር መንቀሳቀስ'},{en:'Sitting still',am:'ዝም ብሎ መቀመጥ'},{en:'Sleeping',am:'መተኛት'},{en:'Reading',am:'ማንበብ'}],a:0},
   {q:{en:'Put the speeds in order from slow to fast:',am:'ፍጥነቶቹን ከቀስታ ወደ ፈጣን አስቀምጡ፦'},o:[{en:'Run → jog → walk',am:'ሩጫ → ሶምሶማ → ርምጃ'},{en:'Walk → jog → run',am:'ርምጃ → ሶምሶማ → ሩጫ'},{en:'Jog → walk → run',am:'ሶምሶማ → ርምጃ → ሩጫ'}],a:1},
   {q:{en:'Which is a benefit of rhythmic movement?',am:'የምት እንቅስቃሴ ጥቅም የቱ ነው?'},o:[{en:'Better coordination and fitness',am:'የተሻለ ቅንጅትና የአካል ብቃት'},{en:'Getting sleepy',am:'እንቅልፍ መምጣት'},{en:'Forgetting things',am:'መርሳት'},{en:'None',am:'ምንም'}],a:0},
   {q:{en:'The beat gets faster. What should your feet do?',am:'ምቱ እየፈጠነ ሄደ። እግራችሁ ምን ማድረግ አለበት?'},o:[{en:'Move faster to match it',am:'ለመመሳሰል በፍጥነት መንቀሳቀስ'},{en:'Stop',am:'ማቆም'},{en:'Move slower',am:'ቀስ ማለት'}],a:0}
  ]},
 {title:{en:'Beat detective',am:'የምት መርማሪ'},type:'custom',
  tip:{en:'Press Listen. Is it a walking, jogging or running beat? Then stand up and move to it in place!',am:'“አዳምጡ”ን ተጫኑ። የርምጃ፣ የሶምሶማ ወይስ የሩጫ ምት ነው? ከዚያ ተነሱና ባላችሁበት ከምቱ ጋር ተንቀሳቀሱ!'},
  init(st){st.k=shuffle(Object.keys(TEMPO))[0];st.score=0;st.msg='';st.cls='';st.ok=false},
  render(p,api,st){
   p.innerHTML=`<div class="row center"><button class="btn primary" data-act="play" style="font-size:1.3rem;padding:14px 28px">▶ ${tx(api.UI.listen)}</button></div>
    <div class="sub center">${tx({en:'Which beat is it?',am:'የትኛው ምት ነው?'})}</div>
    <div class="row center">${Object.keys(TEMPO).map(k=>`<button class="btn" data-k="${k}" ${st.ok?'disabled':''}>${esc(tx(TEMPO[k]))}</button>`).join('')}</div>
    <div class="feedback center ${st.cls}">${st.msg}</div>${st.ok?`<div class="row center"><button class="btn primary" data-act="next">${tx(api.UI.next)}</button></div>`:''}
    <div class="note">${tx({en:'Try them all: press a button below to hear each beat and move to it.',am:'ሁሉንም ሞክሩ፦ እያንዳንዱን ምት ለመስማትና አብራችሁ ለመንቀሳቀስ ከታች ያለውን ቁልፍ ተጫኑ።'})}<div class="row" style="margin-top:8px">${Object.keys(TEMPO).map(k=>`<button class="btn" data-try="${k}">${esc(tx(TEMPO[k]))}</button>`).join('')}</div></div>
    <div class="progress center">${tx({en:'Correct: {n}/5',am:'ትክክል፦ {n}/5'},{n:st.score})}</div>`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
    if(b.dataset.act==='play')beats(TEMPO[st.k].bpm,8);
    if(b.dataset.try)beats(TEMPO[b.dataset.try].bpm,8);
    if(b.dataset.k){if(b.dataset.k===st.k){st.ok=true;st.score++;st.cls='good';st.msg=tx(api.UI.good)+' '+tx({en:'Now move to it!',am:'አሁን አብራችሁ ተንቀሳቀሱ!'});api.S.yay();if(st.score>=5)api.complete()}else{st.cls='bad';st.msg=tx({en:'Listen again. Count how many beats you hear in a short time.',am:'እንደገና አዳምጡ። በአጭር ጊዜ ውስጥ ስንት ምት እንደምትሰሙ ቁጠሩ።'});api.S.nope()}}
    if(b.dataset.act==='next'){st.k=shuffle(Object.keys(TEMPO))[0];st.ok=false;st.msg=''}
    api.rerender()}}},
 {title:{en:'Make a routine',am:'የእንቅስቃሴ ቅንብር'},type:'custom',
  tip:{en:'Choose 4 moves to build your own routine. Choose the speed, then press Play. Do each move for 4 beats. You are the choreographer!',am:'የራሳችሁን ቅንብር ለመሥራት 4 እንቅስቃሴዎችን ምረጡ። ፍጥነቱን ምረጡ፤ ከዚያ “አጫውት”ን ተጫኑ። እያንዳንዱን እንቅስቃሴ ለ4 ምት ሥሩ። እናንተ የዳንስ አቀናባሪ ናችሁ!'},
  init(st){st.seq=[];st.speed='walk';st.beat=-1;st.playing=false;st.plays=0},
  render(p,api,st){const cur=st.beat>=0?Math.floor(st.beat/4):-1;
   p.innerHTML=`<div class="sub small">${tx({en:'1. Pick 4 moves',am:'1. 4 እንቅስቃሴዎችን ምረጡ'})}</div>
    <div class="tiles">${MOVES.map((m,i)=>`<button class="tile" data-m="${i}" ${st.seq.length>=4||st.playing?'disabled':''}>${esc(tx(m))}</button>`).join('')}</div>
    <div class="steps">${[0,1,2,3].map(k=>`<div class="tile" style="box-shadow:none;${cur===k?'background:var(--accent);color:var(--on-accent);border-color:var(--accent)':''}">${k+1}. ${st.seq[k]!==undefined?esc(tx(MOVES[st.seq[k]])):'…'} ${cur===k?` · ${st.beat%4+1}`:''}</div>`).join('')}</div>
    <div class="sub small">${tx({en:'2. Pick a speed',am:'2. ፍጥነት ምረጡ'})}</div>
    <div class="row">${Object.keys(TEMPO).map(k=>`<button class="btn" data-sp="${k}" ${st.playing?'disabled':''} style="${st.speed===k?'border-color:var(--accent);background:var(--accent-soft)':''}">${esc(tx(TEMPO[k]))}</button>`).join('')}</div>
    <div class="row"><button class="btn primary" data-act="play" ${st.seq.length===4?'':'disabled'}>${st.playing?tx({en:'Stop',am:'አቁም'}):'▶ '+tx({en:'Play routine',am:'ቅንብሩን አጫውት'})}</button><button class="btn" data-act="clear" ${st.playing?'disabled':''}>${tx(api.UI.clear)}</button></div>
    <div class="progress">${tx({en:'Routines performed: {n}/2',am:'የተሠሩ ቅንብሮች፦ {n}/2'},{n:st.plays})}</div>`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
    if(b.dataset.m!==undefined){st.seq.push(+b.dataset.m);api.S.tick()}
    if(b.dataset.sp)st.speed=b.dataset.sp;
    if(b.dataset.act==='clear'){st.seq=[]}
    if(b.dataset.act==='play'){if(st.playing){stopRoutine(st)}else{try{AC=AC||new (window.AudioContext||window.webkitAudioContext)()}catch(_){}st.playing=true;st.beat=-1;const ms=60000/TEMPO[st.speed].bpm;
     timer=setInterval(()=>{st.beat++;if(st.beat>=16){stopRoutine(st);st.plays++;api.S.yay();if(st.plays>=2)api.complete()}else{try{click(AC.currentTime+.01,st.beat%4===0)}catch(_){}}if(api.visible(3))api.rerender()},ms)}}
    api.rerender()}}},
 {title:{en:'Moving with equipment',am:'በመሳሪያ የሚሠሩ'},type:'match',
  tip:{en:'We can also use a ball or a rope with the beat. Match each activity with the beat it is done to in your book.',am:'ኳስ ወይም ገመድም ከምት ጋር መጠቀም እንችላለን። እያንዳንዱን እንቅስቃሴ በመጽሐፋችሁ ከሚሠራበት ምት ጋር አዛምዱ።'},
  rounds:[[[{en:'Passing a ball with your foot to a friend',am:'ኳስን በእግር ለጓደኛ መቀባበል'},{en:'Walking beat',am:'የርምጃ ምት'}],[{en:'Skipping rope forward in place',am:'በቦታ ላይ ገመድ ወደ ፊት መዝለል'},{en:'Jogging beat',am:'የሶምሶማ ምት'}],[{en:'Running in place, faster and faster',am:'በቦታ ላይ እየፈጠኑ መሮጥ'},{en:'Running beat',am:'የሩጫ ምት'}]]]},
 {title:{en:'Body only or equipment?',am:'በሰውነት ብቻ ወይስ በመሳሪያ?'},type:'sort',
  tip:{en:'Some rhythmic movements use only your body. Others use equipment. Sort them.',am:'አንዳንድ የምት እንቅስቃሴዎች ሰውነትን ብቻ ይጠቀማሉ። ሌሎቹ መሳሪያ ይጠቀማሉ። መድቧቸው።'},
  buckets:[{en:'Body only',am:'በሰውነት ብቻ'},{en:'With equipment',am:'በመሳሪያ'}],
  items:[{t:{en:'Arms and legs out, then together',am:'እጅና እግርን ከፍቶ መግጠም'},b:0},{t:{en:'Bouncing and catching a ball to the beat',am:'በምት ኳስ ማንጠርና መቅለብ'},b:1},{t:{en:'Skipping rope backwards',am:'ገመድ ወደ ኋላ መዝለል'},b:1},{t:{en:'Marching in place',am:'ባሉበት መራመድ'},b:0},{t:{en:'Stretching arms forward and back',am:'እጅን ወደ ፊትና ወደ ኋላ መዘርጋት'},b:0},{t:{en:'Passing a ball with your foot',am:'ኳስን በእግር መቀባበል'},b:1}]},
 {title:{en:"Thinker's challenge",am:'የአሳቢዎች ፈተና'},type:'quiz',
  tip:{en:'Think about music, beats and your body.',am:'ስለ ሙዚቃ፣ ምትና ሰውነታችሁ አስቡ።'},
  items:[
   {q:{en:'A routine has 4 moves. Each move lasts 4 beats. How many beats is the whole routine?',am:'አንድ ቅንብር 4 እንቅስቃሴዎች አሉት። እያንዳንዱ 4 ምት ይቆያል። ቅንብሩ በሙሉ ስንት ምት ነው?'},o:['8','12','16','4'],a:2,e:'4 × 4 = 16'},
   {q:{en:'Why do we start rhythmic exercise with a slow beat?',am:'የምት እንቅስቃሴን በቀስታ ምት የምንጀምረው ለምንድን ነው?'},o:[{en:'To warm up the body safely',am:'ሰውነትን በደህና ለማሟሟቅ'},{en:'Because fast music is bad',am:'ፈጣን ሙዚቃ መጥፎ ስለሆነ'},{en:'To get tired quickly',am:'ቶሎ ለመድከም'}],a:0},
   {q:{en:'Which Ethiopian instrument could keep the beat for our exercises?',am:'ለእንቅስቃሴያችን ምት ሊሰጥ የሚችለው የኢትዮጵያ የሙዚቃ መሳሪያ የትኛው ነው?'},o:[{en:'Drum (kebero)',am:'ከበሮ'},{en:'A book',am:'መጽሐፍ'},{en:'A pillow',am:'ትራስ'}],a:0},
   {q:{en:'Your friend keeps losing the beat. What helps?',am:'ጓደኛችሁ ምቱን ይስታል። ምን ይረዳዋል?'},o:[{en:'Laugh at him',am:'መሳቅ'},{en:'Count "1-2-3-4" aloud together',am:'“1-2-3-4” እያሉ አብሮ ጮክ ብሎ መቁጠር'},{en:'Tell him to stop',am:'እንዲያቆም መንገር'}],a:1}
  ]},
 {type:'notes',notes:{
 big:{en:'Rhythmic movement means moving to a beat. The beat grows: walking → jogging → running.',am:'የምት እንቅስቃሴ ከምት ጋር መንቀሳቀስ ነው። ምቱ ያድጋል፦ ርምጃ → ሶምሶማ → ሩጫ።'},
 points:[{en:'It builds fitness, coordination and quick reactions, and relaxes body and mind.',am:'የአካል ብቃትን፣ ቅንጅትንና ፈጣን ምላሽን ያዳብራል፤ አካልንና አእምሮን ያዝናናል።'},{en:'Body-only moves: arms forward/back, open and close arms and legs, marching.',am:'በሰውነት ብቻ፦ እጅ ወደ ፊትና ወደ ኋላ፣ እጅና እግርን መክፈትና መግጠም፣ መራመድ።'},{en:'With equipment: passing a ball (walking beat), bouncing a ball, skipping rope (jogging beat).',am:'በመሳሪያ፦ ኳስ መቀባበል (የርምጃ ምት)፣ ኳስ ማንጠር፣ ገመድ መዝለል (የሶምሶማ ምት)።'},{en:'Count "1-2-3-4" to stay on the beat.',am:'በምቱ ለመቆየት “1-2-3-4” ቁጠሩ።'}],
 words:[['ምት',{en:'beat, rhythm',am:'በእኩል ጊዜ የሚደጋገም ድምፅ'}],['ሶምሶማ',{en:'jogging',am:'ቀስ ያለ ሩጫ'}]],
 remember:{en:'4 moves × 4 beats = a 16-beat routine.',am:'4 እንቅስቃሴ × 4 ምት = 16 ምት ቅንብር።'},
 exam:[[{en:'Order from slow to fast.',am:'ከቀስታ ወደ ፈጣን አስቀምጡ።'},{en:'Walk → jog → run',am:'ርምጃ → ሶምሶማ → ሩጫ'}],[{en:'Skipping rope forward goes with which beat?',am:'ገመድ ወደ ፊት መዝለል በየትኛው ምት?'},{en:'Jogging beat',am:'የሶምሶማ ምት'}],[{en:'Name one benefit of rhythmic movement.',am:'የምት እንቅስቃሴ አንድ ጥቅም ጥቀሱ።'},{en:'Better coordination (or fitness, relaxation).',am:'የተሻለ ቅንጅት (ወይም የአካል ብቃት፣ መዝናናት)።'}]],
 innovate:{title:{en:'Teach a rhythm workout class',am:'የምት እንቅስቃሴ ክፍል አስተምሩ'},text:{en:'Fitness trainers earn a living by teaching classes. Design a 3-minute rhythm class for your family, using a pot or jerrycan as a drum.',am:'የአካል ብቃት አሰልጣኞች ክፍል በማስተማር ይተዳደራሉ። ድስት ወይም ጀሪካን እንደ ከበሮ ተጠቅማችሁ ለቤተሰባችሁ የ3 ደቂቃ ክፍል አዘጋጁ።'},
  steps:[{en:'Choose 4 moves and the order.',am:'4 እንቅስቃሴዎችንና ቅደም ተከተላቸውን ምረጡ።'},{en:'Practise the beat: slow, then faster.',am:'ምቱን ተለማመዱ፦ ቀስታ፣ ከዚያ ፈጣን።'},{en:'Lead your family through it.',am:'ቤተሰባችሁን እየመራችሁ አሠሩ።'},{en:'Ask: what did they enjoy? What should change?',am:'ጠይቁ፦ ምን አስደሰታቸው? ምን መለወጥ አለበት?'}]}}}
 ]});
})();
