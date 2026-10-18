/* ጤናና ሰውነት ማጎልመሻ · ምዕራፍ 4 · ጤናና የአካል ብቃት እንቅስቃሴ */
(function(){
const {tx,esc}=G3;
const F=k=>`<span style="width:64px;display:inline-block">${POSE(k)}</span>`;
const STATIONS=[{k:'jack',t:{en:'Jumping jacks',am:'እጅና እግርን ዘርግቶ መዝለል'},part:{en:'Heart & lungs',am:'ልብና ሳንባ'}},
 {k:'squat',t:{en:'Squat down and stand up',am:'ቁጢጥ ብሎ መነሳት'},part:{en:'Leg muscles',am:'የእግር ጡንቻ'}},
 {k:'toe',t:{en:'Reach up, then touch your toes',am:'እጅ ዘርግቶ የእግር ጣት መንካት'},part:{en:'Flexibility',am:'መተጣጠፍ'}},
 {k:'side',t:{en:'Arm raises to the side',am:'እጅን ወደ ጎን ማንሳት'},part:{en:'Arm & shoulder muscles',am:'የእጅና የትከሻ ጡንቻ'}}];
Unit.start({
 id:'health-4',subject:'health',
 subjectName:{en:'Health & Physical Education',am:'ጤናና ሰውነት ማጎልመሻ'},chapter:{en:'Chapter 4',am:'ምዕራፍ 4'},
 title:{en:'Health and Fitness',am:'ጤናና የአካል ብቃት እንቅስቃሴ'},
 footer:{en:'Built on the Grade 3 Health & Physical Education student book (ANRS Education Bureau), Chapter 4. Exercise with an adult nearby and stop if you feel pain.',am:'በ3ኛ ክፍል የጤናና ሰውነት ማጎልመሻ መጽሐፍ (አብክመ ትምህርት ቢሮ) ምዕራፍ 4 ላይ የተመሰረተ። ትልቅ ሰው ባለበት እንቅስቃሴ አድርጉ፤ ሕመም ከተሰማችሁ አቁሙ።'},
 missions:[
 {title:{en:'Experiment: your heart at work',am:'ሙከራ፦ ልባችሁ ሲሠራ'},type:'custom',
  tip:{en:'Be a sports scientist! Put two fingers on your neck or wrist and count your heartbeats for 15 seconds. Then do 30 seconds of jumping jacks and count again. What happens?',am:'የስፖርት ሳይንቲስት ሁኑ! ሁለት ጣቶቻችሁን አንገታችሁ ወይም የእጅ አንጓችሁ ላይ አድርጋችሁ ለ15 ሰከንድ የልብ ምታችሁን ቁጠሩ። ከዚያ ለ30 ሰከንድ እጅና እግርን ዘርግታችሁ ዝለሉ፤ እንደገና ቁጠሩ። ምን ይሆናል?'},
  init(st){st.rest=20;st.after=20;st.step=0;st.timer=0;st.left=0},
  render(p,api,st){const bpm=v=>v*4;const maxv=Math.max(bpm(st.rest),bpm(st.after),60);
   const bar=(v,c,l)=>`<div style="display:grid;gap:4px;justify-items:center"><svg viewBox="0 0 60 160" width="60" height="160" aria-hidden="true"><rect x="10" y="${150-130*v/maxv}" width="40" height="${130*v/maxv}" rx="6" fill="${c}"/><line x1="0" y1="150" x2="60" y2="150" stroke="var(--line)" stroke-width="2"/></svg><b class="num">${v}</b><span class="small">${l}</span></div>`;
   const counter=(key,label)=>`<div class="row" style="gap:8px;align-items:center"><span style="min-width:150px">${label}</span><button class="btn" data-dec="${key}" aria-label="minus">−</button><b class="num" style="min-width:2.5em;text-align:center;font-size:1.3rem">${st[key]}</b><button class="btn" data-inc="${key}" aria-label="plus">+</button></div>`;
   p.innerHTML=`<div class="row" style="align-items:flex-start;gap:18px">
    <div style="flex:1 1 300px;min-width:0;display:grid;gap:12px">
     <div class="card-item" style="display:block;text-align:left"><b>1.</b> ${tx({en:'Sit quietly. Count beats for 15 seconds.',am:'በጸጥታ ተቀመጡ። ለ15 ሰከንድ ምቱን ቁጠሩ።'})}<br>${counter('rest',tx({en:'Beats at rest',am:'በእረፍት ያለ ምት'}))}</div>
     <div class="card-item" style="display:block;text-align:left"><b>2.</b> ${tx({en:'Do jumping jacks for 30 seconds.',am:'ለ30 ሰከንድ እጅና እግርን ዘርግታችሁ ዝለሉ።'})}
      <div class="row" style="align-items:center"><span style="width:56px">${POSE('jack')}</span><button class="btn" data-act="timer">${st.left>0?tx({en:'{s} s… keep going!',am:'{s} ሰከንድ… ቀጥሉ!'},{s:st.left}):tx({en:'Start 30-second timer',am:'የ30 ሰከንድ ሰዓት ጀምሩ'})}</button></div></div>
     <div class="card-item" style="display:block;text-align:left"><b>3.</b> ${tx({en:'Count again for 15 seconds right away.',am:'ወዲያውኑ ለ15 ሰከንድ እንደገና ቁጠሩ።'})}<br>${counter('after',tx({en:'Beats after exercise',am:'ከእንቅስቃሴ በኋላ ያለ ምት'}))}</div>
     <div><button class="btn primary" data-act="done">${tx({en:'Compare my results',am:'ውጤቴን አነጻጽሩ'})}</button></div></div>
    <div style="flex:0 1 220px;min-width:0;display:grid;gap:8px;justify-items:center"><span class="small">${tx({en:'Beats per minute (×4)',am:'በደቂቃ ያለ ምት (×4)'})}</span><div class="row" style="gap:16px">${bar(bpm(st.rest),'var(--blue)',tx({en:'Rest',am:'እረፍት'}))}${bar(bpm(st.after),'var(--clay, #D9483B)',tx({en:'After',am:'በኋላ'}))}</div></div></div>
    ${st.step?`<div class="explain">${st.after>st.rest?tx({en:'Your heart rate went from {a} to {b} beats per minute! Exercise makes the heart pump faster to send more oxygen to your muscles. Doing this often makes your heart and lungs strong: that is cardio-respiratory endurance.',am:'የልብ ምታችሁ ከ{a} ወደ {b} በደቂቃ ጨመረ! እንቅስቃሴ ለጡንቻዎች ተጨማሪ ኦክስጅን ለመላክ ልብ በፍጥነት እንዲመታ ያደርጋል። ይህን አዘውትሮ መሥራት ልብንና ሳንባን ያጠነክራል፦ ይህ የልብና የሥርዓተ ትንፈሳ ብርታት ነው።'},{a:bpm(st.rest),b:bpm(st.after)}):tx({en:'Hmm, the second count should be higher. Try the jumping again for the full 30 seconds and count carefully.',am:'ሁለተኛው ቁጥር ከፍ ማለት ነበረበት። ለ30 ሰከንድ ሙሉ እንደገና ዝለሉ፤ በጥንቃቄ ቁጠሩ።'})}</div>`:''}`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b)return;
    if(b.dataset.inc){st[b.dataset.inc]=Math.min(60,st[b.dataset.inc]+1);api.S.tick()}
    if(b.dataset.dec){st[b.dataset.dec]=Math.max(5,st[b.dataset.dec]-1);api.S.tick()}
    if(b.dataset.act==='timer'&&st.left<=0){st.left=30;clearInterval(st.timer);st.timer=setInterval(()=>{st.left--;if(st.left<=0){clearInterval(st.timer);api.S.fanfare()}if(api.visible(1))api.rerender()},1000)}
    if(b.dataset.act==='done'){st.step=1;if(st.after>st.rest){api.S.yay();api.complete()}else api.S.nope()}
    api.rerender()}}},
 {title:{en:'Four parts of fitness',am:'አራቱ የአካል ብቃት ክፍሎች'},type:'sort',
  tip:{en:'Fitness has four parts. Heart & lungs: the base of all fitness. Muscle endurance: working long without tiring. Flexibility: joints bend and stretch well. Agility: changing position fast. Which part does each exercise train?',am:'የአካል ብቃት አራት ክፍሎች አሉት። ልብና ሳንባ፦ የሁሉም መሠረት። የጡንቻ ብርታት፦ ሳይደክሙ ለረጅም ጊዜ መሥራት። መተጣጠፍ፦ መገጣጠሚያዎች በደንብ መታጠፍና መዘርጋት። ቅልጥፍና፦ በፍጥነት አቋም መቀየር። እያንዳንዱ እንቅስቃሴ የትኛውን ያሠለጥናል?'},
  buckets:[{en:'Heart & lungs',am:'ልብና ሳንባ'},{en:'Muscle endurance',am:'የጡንቻ ብርታት'},{en:'Flexibility',am:'መተጣጠፍ'},{en:'Agility',am:'ቅልጥፍና'}],
  items:[{t:{en:'Skipping rope',am:'ገመድ መዝለል'},b:0,fig:F('jack')},{t:{en:'Six-minute run',am:'የስድስት ደቂቃ ሩጫ'},b:0,fig:F('run')},
   {t:{en:'Squat to 90° and stand',am:'90° ቁጢጥ ብሎ መነሳት'},b:1,fig:F('squat')},{t:{en:'Raising both arms forward again and again',am:'ሁለቱንም እጆች ደጋግሞ ወደ ፊት ማንሳት'},b:1,fig:F('forward')},
   {t:{en:'Sitting and touching your toes',am:'ተቀምጦ የእግር ጣት መንካት'},b:2,fig:F('sit')},{t:{en:'Bending the waist left and right',am:'ወገብን ወደ ግራና ቀኝ ማዘንበል'},b:2,fig:F('twist')},
   {t:{en:'From squatting, sprint at the whistle',am:'ቁጢጥ ካሉበት በፊሽካ ተነስቶ መሮጥ'},b:3,fig:F('squat')},{t:{en:'Lying down, jump up and run at the signal',am:'ተኝቶ በምልክት ተነስቶ መሮጥ'},b:3,fig:F('run')}]},
 {title:{en:'Mini workout',am:'አጭር የእንቅስቃሴ ልምምድ'},type:'custom',
  tip:{en:'Stand up! Do each station for 20 seconds. Use the timer, then tap "I did it". Breathe in through your nose and out through your mouth.',am:'ተነሱ! እያንዳንዱን ጣቢያ ለ20 ሰከንድ ሥሩ። ሰዓቱን ተጠቀሙ፤ ከዚያ “ሠራሁት” ንኩ። በአፍንጫ አስገቡ፤ በአፍ አስወጡ።'},
  init(st){st.i=0;st.left=0;st.timer=0},
  render(p,api,st){const S=STATIONS[st.i];
   if(!S){p.innerHTML=`<div class="explain">${tx({en:'Workout complete! You trained your heart, muscles and flexibility. Do this every morning and you will feel stronger in two weeks.',am:'ልምምዱ ተጠናቀቀ! ልባችሁን፣ ጡንቻችሁንና መተጣጠፋችሁን አሠለጠናችሁ። በየጠዋቱ ይህን ሥሩ፤ በሁለት ሳምንት ውስጥ የበለጠ ጥንካሬ ይሰማችኋል።'})}</div><div><button class="btn" data-act="again">${tx(api.UI.playAgain)}</button></div>`;
    p.onclick=e=>{if(e.target.closest('[data-act=again]')){st.i=0;api.rerender()}};return}
   p.innerHTML=`<div class="progress">${tx({en:'Station {i} of {n}',am:'ጣቢያ {i} ከ{n}'},{i:st.i+1,n:STATIONS.length})}</div>
    <div class="row" style="align-items:center;gap:20px;justify-content:center"><div style="width:150px">${POSE(S.k)}</div>
     <div style="display:grid;gap:8px"><b style="font-size:1.2rem">${esc(tx(S.t))}</b><span class="pill">${tx({en:'Trains',am:'የሚያሠለጥነው'})}: ${esc(tx(S.part))}</span>
      <div class="row"><button class="btn" data-act="timer">${st.left>0?tx({en:'{s} s',am:'{s} ሰከንድ'},{s:st.left}):tx({en:'Start 20 s',am:'20 ሰከንድ ጀምሩ'})}</button><button class="btn primary" data-act="did">${tx({en:'I did it',am:'ሠራሁት'})}</button></div></div></div>`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b)return;
    if(b.dataset.act==='timer'&&st.left<=0){st.left=20;clearInterval(st.timer);st.timer=setInterval(()=>{st.left--;if(st.left<=0){clearInterval(st.timer);api.S.yay()}if(api.visible(3))api.rerender()},1000)}
    if(b.dataset.act==='did'){clearInterval(st.timer);st.left=0;st.i++;api.S.tick();if(st.i>=STATIONS.length)api.complete()}
    api.rerender()}}},
 {title:{en:'Fitness facts',am:'የአካል ብቃት እውነታዎች'},type:'quiz',shuffle:true,
  tip:{en:'Health means being free from disease, doing daily work well and living in harmony with the environment. Answer each question.',am:'ጤና ማለት ከበሽታ ነጻ መሆን፣ የዕለት ተግባርን በተሻለ ማከናወንና ከአካባቢ ጋር ተስማምቶ መኖር ነው። እያንዳንዱን ጥያቄ መልሱ።'},
  items:[
   {q:{en:'Muscle endurance is…',am:'የጡንቻ ብርታት ማለት…'},o:[{en:'muscles working a long time without tiring',am:'ጡንቻ ሳይደክም ለረጅም ጊዜ መሥራት'},{en:'being very tall',am:'በጣም ረጅም መሆን'},{en:'running once',am:'አንድ ጊዜ መሮጥ'}],a:0},
   {q:{en:'Which part of fitness is the base for all the others?',am:'የሁሉም የአካል ብቃት መሠረት የሆነው የትኛው ነው?'},o:[{en:'Heart and lungs',am:'የልብና የአተነፋፈስ ሥርዓት'},{en:'Hair',am:'ፀጉር'},{en:'Teeth',am:'ጥርስ'}],a:0},
   {q:{en:'Flexibility helps our…',am:'መተጣጠፍ የሚረዳው…'},o:[{en:'joints, muscles and tendons to bend and stretch',am:'መገጣጠሚያ፣ ጡንቻና ጅማት እንዲታጠፉና እንዲዘረጉ'},{en:'eyes to see far',am:'ዓይን ሩቅ እንዲያይ'},{en:'stomach to digest',am:'ሆድ እንዲፈጭ'}],a:0},
   {q:{en:'Exercising regularly helps prevent diseases of the…',am:'አዘውትሮ እንቅስቃሴ ማድረግ የትኞቹን በሽታዎች ለመከላከል ይረዳል?'},o:[{en:'heart and breathing system',am:'የልብና የሥርዓተ ትንፈሳ'},{en:'shoes',am:'የጫማ'},{en:'books',am:'የመጻሕፍት'}],a:0}]},
 {type:'exam',items:[
   {q:{en:'Which is NOT a benefit of exercise?',am:'የአካል ብቃት እንቅስቃሴ ጥቅም ያልሆነው የትኛው ነው?'},o:[{en:'None (all are benefits)',am:'መልስ አልተሰጠም (ሁሉም ጥቅም ናቸው)'},{en:'More flexible muscles',am:'የጡንቻ መተጣጠፍ መጨመር'},{en:'Better agility',am:'ቅልጥፍናን ማሻሻል'},{en:'Better breathing',am:'የትንፈሳ ሥርዓትን ማሻሻል'}],a:0},
   {q:{en:'Which exercise builds the heart and lungs?',am:'ልብንና የአተነፋፈስ ሥርዓትን የሚያዳብረው የትኛው ነው?'},o:[{en:'Six-minute run',am:'የስድስት ደቂቃ ሩጫ'},{en:'Sitting and touching toes',am:'ተቀምጦ የእግር ጣት መንካት'},{en:'Bending the waist',am:'ወገብን ማዘንበል'}],a:0},
   {q:{en:'Which builds agility?',am:'ቅልጥፍናን የሚያዳብረው የትኛው ነው?'},o:[{en:'Getting up from lying and running at a signal',am:'ከተኙበት በምልክት ተነስቶ መሮጥ'},{en:'Sleeping',am:'መተኛት'},{en:'Standing still',am:'ዝም ብሎ መቆም'}],a:0},
   {q:{en:'After exercise, your heart beats…',am:'ከእንቅስቃሴ በኋላ ልባችሁ…'},o:[{en:'faster',am:'በፍጥነት ይመታል'},{en:'slower',am:'በዝግታ ይመታል'},{en:'stops',am:'ይቆማል'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Fitness has four parts: heart & lungs, muscle endurance, flexibility and agility. Regular exercise keeps us healthy and prevents disease.',am:'የአካል ብቃት አራት ክፍሎች አሉት፦ ልብና ሳንባ፣ የጡንቻ ብርታት፣ መተጣጠፍና ቅልጥፍና። አዘውትሮ እንቅስቃሴ ጤናማ ያደርገናል፤ በሽታን ይከላከላል።'},
  points:[
   {en:'Heart & lungs: rope skipping, jumping jacks, running laps.',am:'ልብና ሳንባ፦ ገመድ ዝላይ፣ እጅና እግርን ዘርግቶ መዝለል፣ ዙር መሮጥ።'},
   {en:'Muscle: arm raises, 90° squats, lying chest raises, leg bends in the air.',am:'ጡንቻ፦ እጅ ማንሳት፣ 90° ቁጢጥ ማለት፣ በደረት ተኝቶ እግርና እጅ ማንሳት፣ እግርን በአየር ማጠፍ።'},
   {en:'Flexibility: toe touches, side bends, sit and reach.',am:'መተጣጠፍ፦ የእግር ጣት መንካት፣ ወገብ ማዘንበል፣ ተቀምጦ መዘርጋት።'},
   {en:'Agility: get up fast from squatting, sitting or lying and sprint; partner foot taps.',am:'ቅልጥፍና፦ ቁጢጥ፣ ቁጭ ወይም ተኝቶ ከማለት ፈጥኖ ተነስቶ መሮጥ፤ በጥንድ እግር ማነካካት።'}],
  words:[[{en:'Endurance',am:'ብርታት'},{en:'lasting a long time without tiring',am:'ሳይደክሙ ለረጅም ጊዜ መቆየት'}],[{en:'Agility',am:'ቅልጥፍና'},{en:'changing body position quickly',am:'በፍጥነት አቋም መቀየር'}],[{en:'Pulse',am:'የልብ ምት'},{en:'heartbeats you can feel in neck or wrist',am:'በአንገት ወይም በእጅ አንጓ የሚሰማ የልብ ምት'}]],
  remember:{en:'Move every day: at least 60 minutes of play keeps a child strong.',am:'በየቀኑ ተንቀሳቀሱ፦ ቢያንስ 60 ደቂቃ ጨዋታ ልጅን ጠንካራ ያደርጋል።'},
  exam:[[{en:'List three flexibility exercises.',am:'ሦስት የመተጣጠፍ እንቅስቃሴዎችን ዘርዝሩ።'},{en:'Toe touch, side bend, sit and reach',am:'የእግር ጣት መንካት፣ ወገብ ማዘንበል፣ ተቀምጦ መዘርጋት'}],[{en:'List three agility exercises.',am:'ሦስት የቅልጥፍና እንቅስቃሴዎችን ዘርዝሩ።'},{en:'Squat-start run, lying-start run, partner foot taps',am:'ከቁጢጥ መሮጥ፣ ከተኙበት መሮጥ፣ በጥንድ እግር ማነካካት'}],[{en:'How do you find beats per minute from a 15-second count?',am:'ከ15 ሰከንድ ቆጠራ በደቂቃ ያለውን ምት እንዴት ታገኛላችሁ?'},{en:'Multiply by 4',am:'በ4 ማባዛት'}]],
  innovate:{title:{en:'Family fitness coach',am:'የቤተሰብ የአካል ብቃት አሰልጣኝ'},text:{en:'Coaches and trainers earn a living by helping people get fit. Be your family\'s coach for one week, and make your own jump rope.',am:'አሰልጣኞች ሰዎችን ጤናማ በማድረግ ይተዳደራሉ። ለአንድ ሳምንት የቤተሰባችሁ አሰልጣኝ ሁኑ፤ የራሳችሁንም መዝለያ ገመድ ሥሩ።'},
   steps:[{en:'Braid old cloth strips or sisal into a 2-metre jump rope.',am:'አሮጌ የጨርቅ ቁርጥራጭ ወይም ቃጫ ጎንጉናችሁ 2 ሜትር መዝለያ ገመድ ሥሩ።'},{en:'Plan a 10-minute daily routine with one exercise from each fitness part.',am:'ከእያንዳንዱ የአካል ብቃት ክፍል አንድ እንቅስቃሴ ያለበት የ10 ደቂቃ ዕለታዊ ልምምድ አቅዱ።'},{en:'Record everyone\'s pulse on day 1 and day 7.',am:'በ1ኛውና በ7ኛው ቀን የሁሉንም የልብ ምት መዝግቡ።'},{en:'Make more ropes and sell them at school sports day.',am:'ተጨማሪ ገመዶችን ሠርታችሁ በትምህርት ቤት የስፖርት ቀን ሽጡ።'}]}}}
 ]});
})();
