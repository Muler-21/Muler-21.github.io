/* ጤናና ሰውነት ማጎልመሻ · ምዕራፍ 1 · መሠረታዊ የእንቅስቃሴ ክህሎት */
(function(){
const {tx,esc}=G3;const I=window.IC;
const DIR={forward:{en:'Forward',am:'ወደ ፊት'},back:{en:'Backward',am:'ወደ ኋላ'},left:{en:'Left',am:'ወደ ግራ'},right:{en:'Right',am:'ወደ ቀኝ'}};
const dq=(d,n)=>({fig:I.arrow(d),q:{en:`Kokeb points this way. Which direction is it? Then stand up and take ${n} steps that way!`,am:`ኮከብ ወደዚህ ታመለክታለች። ይህ የትኛው አቅጣጫ ነው? ከዚያ ተነሱና ወደዚያ ${n} እርምጃ ሂዱ!`},
 o:[DIR.forward,DIR.back,DIR.left,DIR.right],a:['forward','back','left','right'].indexOf(d)});
const STATIONS=[
 {en:'Warm up: march in place and swing your arms',am:'ማሟሟቂያ፦ ባላችሁበት ተራመዱ፤ እጆቻችሁን አወዛውዙ',s:30},
 {en:'Run in place, lifting your knees high',am:'ባላችሁበት ሩጡ፤ ጉልበታችሁን ከፍ አድርጉ',s:20},
 {en:'Jump forward on two feet, then walk back',am:'በሁለት እግር ወደ ፊት ዝለሉ፤ ከዚያ ተመለሱ',s:20},
 {en:'Stand on your right foot, arms out like wings',am:'በቀኝ እግራችሁ ቁሙ፤ እጆቻችሁን እንደ ክንፍ ዘርጉ',s:15},
 {en:'Now stand on your left foot',am:'አሁን በግራ እግራችሁ ቁሙ',s:15},
 {en:'Walk on your toes',am:'በእግር ጣቶቻችሁ ተራመዱ',s:20},
 {en:'Walk on your heels',am:'በተረከዛችሁ ተራመዱ',s:20},
 {en:'Jump side to side over a line',am:'በመስመር ላይ ወደ ጎን ወዲያና ወዲህ ዝለሉ',s:20},
 {en:'Cool down: breathe slowly and stretch up tall',am:'ማቀዝቀዣ፦ በቀስታ ተንፍሱ፤ ወደ ላይ ተንጠራሩ',s:20}];

Unit.start({
 id:'health-1',subject:'health',
 subjectName:{en:'Health & Physical Education',am:'ጤናና ሰውነት ማጎልመሻ'},
 chapter:{en:'Chapter 1',am:'ምዕራፍ 1'},
 title:{en:'Basic Movement Skills',am:'መሠረታዊ የእንቅስቃሴ ክህሎት'},
 footer:{en:'Built on the Grade 3 Health & PE student book, Chapter 1. Do the moving activities with a teacher, in a clear and safe space.',am:'በ3ኛ ክፍል የጤናና ሰውነት ማጎልመሻ መጽሐፍ ምዕራፍ 1 ላይ የተመሰረተ። የእንቅስቃሴ ተግባራትን ከመምህር ጋር፣ ሰፊና ደህንነቱ በተጠበቀ ቦታ ሥሩ።'},
 missions:[
 {title:{en:'Kokeb says: directions',am:'ኮከብ ትላለች፦ አቅጣጫ'},type:'quiz',
  tip:{en:'We can move in four directions: forward, backward, left and right. Look at the arrow, choose the direction, then really move! Your body learns by doing.',am:'በአራት አቅጣጫዎች መንቀሳቀስ እንችላለን፦ ወደ ፊት፣ ወደ ኋላ፣ ወደ ግራና ወደ ቀኝ። ቀስቱን እዩ፣ አቅጣጫውን ምረጡ፣ ከዚያ በእውነት ተንቀሳቀሱ! ሰውነታችሁ በመሥራት ይማራል።'},
  items:[dq('forward',3),dq('left',2),dq('right',2),dq('back',2),dq('right',3),dq('forward',1)]},
 {title:{en:'Types of movement',am:'የእንቅስቃሴ ዓይነቶች'},type:'sort',
  tip:{en:'Some movements take you from place to place. Some happen while you stay in one place. Some use equipment like a ball, hoop or rope. Sort each one!',am:'አንዳንድ እንቅስቃሴዎች ከቦታ ቦታ ያንቀሳቅሳሉ። አንዳንዶቹ ባላችሁበት ቦታ ይሠራሉ። አንዳንዶቹ እንደ ኳስ፣ ቀለበት ወይም ገመድ ያሉ መሳሪያዎችን ይጠቀማሉ። እያንዳንዱን መድቡ!'},
  buckets:[{en:'Moving from place to place',am:'ከቦታ ቦታ በመንቀሳቀስ'},{en:'Staying in one place',am:'በቦታ ላይ በመሆን'},{en:'Using equipment',am:'መሳሪያ በመጠቀም'}],
  items:[
   {t:{en:'Running zigzag between cones',am:'በኮኖች መካከል በዚግዛግ መሮጥ'},b:0,short:{en:'zigzag',am:'ዚግዛግ'}},
   {t:{en:'Jumping forward on two feet',am:'በሁለት እግር ወደ ፊት መዝለል'},b:0,short:{en:'jumping',am:'መዝለል'}},
   {t:{en:'Walking on your heels',am:'በተረከዝ መራመድ'},b:0,short:{en:'heel walk',am:'በተረከዝ'}},
   {t:{en:'Running in place, holding your knees',am:'በቦታ ላይ በመሮጥ ጉልበት መያዝ'},b:1,short:{en:'run in place',am:'በቦታ ሩጫ'}},
   {t:{en:'Standing on one foot',am:'በአንድ እግር መቆም'},b:1,short:{en:'one foot',am:'አንድ እግር'}},
   {t:{en:'Standing on your toes',am:'በእግር ጣት መዳፍ መቆም'},b:1,short:{en:'on toes',am:'በጣት'}},
   {t:{en:'Spinning a hoop around your waist',am:'ቀለበትን በወገብ ማሽከርከር'},b:2,short:{en:'hoop',am:'ቀለበት'}},
   {t:{en:'Bouncing a ball along a line',am:'ኳስን እያነጠሩ በመስመር መሄድ'},b:2,short:{en:'bouncing',am:'ማንጠር'}},
   {t:{en:'Kicking a ball to a friend',am:'ኳስን በእግር ለጓደኛ ማቀበል'},b:2,short:{en:'kicking',am:'መምታት'}}
  ]},
 {title:{en:'What does it build?',am:'ምን ያዳብራል?'},type:'match',
  tip:{en:'Every movement trains something in your body. Match each activity with what it builds.',am:'እያንዳንዱ እንቅስቃሴ በሰውነታችሁ ውስጥ አንድ ነገር ያሠለጥናል። እያንዳንዱን ተግባር ከሚያዳብረው ጋር አዛምዱ።'},
  rounds:[
   [[{en:'Zigzag running',am:'የዚግዛግ ሩጫ'},{en:'Speed and quick turns',am:'ፍጥነትና ቅልጥፍና'}],[{en:'Standing on one foot',am:'በአንድ እግር መቆም'},{en:'Balance',am:'ሚዛን'}],[{en:'Throwing and catching',am:'መወርወርና መቅለብ'},{en:'Hand–eye teamwork',am:'የእጅና የዓይን ቅንጅት'}],[{en:'Jumping on two feet',am:'በሁለት እግር መዝለል'},{en:'Leg strength',am:'የእግር ብርታት'}]]
  ]},
 {title:{en:'Movement circuit',am:'የእንቅስቃሴ ዙር'},type:'custom',
  tip:{en:'Time to move! Follow each station until the timer ends. Your teacher can press Skip. Warm up first and cool down at the end, just like real athletes.',am:'የመንቀሳቀሻ ጊዜ ነው! ሰዓቱ እስኪያልቅ እያንዳንዱን ጣቢያ ተከተሉ። መምህራችሁ “ዝለል” መጫን ይችላሉ። እንደ እውነተኛ አትሌቶች መጀመሪያ አሟሙቁ፤ በመጨረሻ አቀዝቅዙ።'},
  init(st){st.i=0;st.left=STATIONS[0].s;st.run=false;clearInterval(st.iv)},
  render(p,api,st){const S=STATIONS[st.i];const done=st.i>=STATIONS.length;
   if(done){p.innerHTML=`<div class="winner"><svg viewBox="0 0 100 100" aria-hidden="true">${G3.KOKEB}</svg><div><h3>${tx({en:'Circuit complete!',am:'ዙሩ ተጠናቀቀ!'})}</h3><p style="margin:0">${tx({en:'Drink some water. How does your body feel now?',am:'ውኃ ጠጡ። አሁን ሰውነታችሁ ምን ይሰማዋል?'})}</p></div></div><div><button class="btn" data-act="restart">${tx(api.UI.playAgain)}</button></div>`;
    p.onclick=e=>{if(e.target.closest('[data-act=restart]')){this.init(st);api.rerender()}};return}
   const pct=100*(1-st.left/S.s);
   p.innerHTML=`<div class="progress">${tx({en:'Station {i} of {n}',am:'ጣቢያ {i} ከ{n}'},{i:st.i+1,n:STATIONS.length})}</div>
    <div class="card-item"><span style="font-size:1.5rem">${esc(tx(S))}</span>
     <span class="num" style="font-size:3.4rem;color:var(--accent)" aria-live="polite">${st.left}</span>
     <div style="width:100%;height:14px;border-radius:7px;background:var(--surface);overflow:hidden"><div style="height:100%;width:${pct}%;background:var(--accent);transition:width .9s linear"></div></div></div>
    <div class="row center"><button class="btn primary" data-act="go">${st.run?tx({en:'Pause',am:'አቁም'}):tx({en:'Start',am:'ጀምር'})}</button><button class="btn" data-act="skip">${tx({en:'Skip',am:'ዝለል'})}</button></div>
    <div class="note">${tx({en:'Safety: clear space around you, no pushing, and stop if anything hurts.',am:'ደህንነት፦ በዙሪያችሁ ሰፊ ቦታ ይኑር፣ አትገፋፉ፣ ህመም ከተሰማችሁ አቁሙ።'})}</div>`;
   const next=()=>{clearInterval(st.iv);st.i++;api.S.yay();if(st.i>=STATIONS.length){st.run=false;api.complete()}else{st.left=STATIONS[st.i].s;if(st.run)start()}if(api.visible(4))api.rerender()};
   const start=()=>{clearInterval(st.iv);st.iv=setInterval(()=>{st.left--;if(st.left<=3&&st.left>0)api.S.tick();if(st.left<=0)next();else if(api.visible(4))api.rerender()},1000)};
   p.onclick=e=>{const b=e.target.closest('button');if(!b)return;
    if(b.dataset.act==='go'){st.run=!st.run;if(st.run)start();else clearInterval(st.iv);api.rerender()}
    if(b.dataset.act==='skip')next()}}},
 {title:{en:'Safety first',am:'ደህንነት ይቅደም'},type:'quiz',
  tip:{en:'Good athletes stay safe. Choose the safest answer.',am:'ጎበዝ አትሌቶች ደህንነታቸውን ይጠብቃሉ። ደህንነቱ የተጠበቀውን መልስ ምረጡ።'},
  items:[
   {q:{en:'What should we do before hard exercise?',am:'ከባድ እንቅስቃሴ ከመሥራታችን በፊት ምን ማድረግ አለብን?'},o:[{en:'Warm up slowly',am:'ቀስ ብሎ ማሟሟቅ'},{en:'Eat a big meal',am:'ብዙ ምግብ መብላት'},{en:'Sleep',am:'መተኛት'},{en:'Nothing',am:'ምንም'}],a:0,e:{en:'Warming up gets your muscles ready and helps prevent injury.',am:'ማሟሟቅ ጡንቻዎችን ያዘጋጃል፤ ጉዳትን ለመከላከልም ይረዳል።'}},
   {q:{en:'In a jumping game, your partner is next to you. What is NOT allowed?',am:'በመዝለል ጨዋታ ጓደኛችሁ ከጎናችሁ ነው። የማይፈቀደው የትኛው ነው?'},o:[{en:'Pushing your partner',am:'ጓደኛን መግፋት'},{en:'Jumping carefully',am:'በጥንቃቄ መዝለል'},{en:'Landing on two feet',am:'በሁለት እግር ማረፍ'},{en:'Waiting your turn',am:'ተራን መጠበቅ'}],a:0},
   {q:{en:'You feel sharp pain in your ankle while running. What do you do?',am:'ስትሮጡ ቁርጭምጭሚታችሁ ላይ ከባድ ህመም ተሰማችሁ። ምን ታደርጋላችሁ?'},o:[{en:'Keep running faster',am:'በፍጥነት መሮጥ መቀጠል'},{en:'Stop and tell the teacher',am:'ማቆምና ለመምህሩ መንገር'},{en:'Hide it',am:'መደበቅ'},{en:'Jump on it',am:'በላዩ መዝለል'}],a:1},
   {q:{en:'Where is the best place to practise zigzag running?',am:'የዚግዛግ ሩጫን ለመለማመድ ምርጡ ቦታ የትኛው ነው?'},o:[{en:'On a busy road',am:'ብዙ መኪና ባለበት መንገድ'},{en:'In a flat, open field',am:'ሜዳማና ክፍት ቦታ'},{en:'On stairs',am:'በደረጃ ላይ'},{en:'Near a cliff',am:'ገደል አጠገብ'}],a:1},
   {q:{en:'After exercise, what helps your body most?',am:'ከእንቅስቃሴ በኋላ ሰውነታችሁን በጣም የሚረዳው ምንድን ነው?'},o:[{en:'Drinking clean water',am:'ንጹህ ውኃ መጠጣት'},{en:'Soda only',am:'ለስላሳ መጠጥ ብቻ'},{en:'Running again at once',am:'ወዲያው እንደገና መሮጥ'},{en:'Nothing',am:'ምንም'}],a:0}
  ]},
 {title:{en:"Thinker's challenge",am:'የአሳቢዎች ፈተና'},type:'quiz',
  tip:{en:'Look carefully at each list. One answer does not belong. Find it and explain why to a friend.',am:'እያንዳንዱን ዝርዝር በጥንቃቄ እዩ። አንዱ መልስ አይመደብም። ፈልጉትና ለምን እንደሆነ ለጓደኛችሁ አስረዱ።'},
  items:[
   {q:{en:'Which one is NOT moving from place to place?',am:'ከቦታ ቦታ የሚደረግ እንቅስቃሴ ያልሆነው የትኛው ነው?'},o:[{en:'Running',am:'መሮጥ'},{en:'Catching a ball',am:'ኳስ መቅለብ'},{en:'Jumping forward',am:'ወደ ፊት መዝለል'},{en:'Heel walking',am:'በተረከዝ መራመድ'}],a:1,e:{en:'Catching a ball uses equipment and can be done standing still.',am:'ኳስ መቅለብ መሳሪያ ይጠቀማል፤ ቆሞም ይሠራል።'}},
   {q:{en:'Which one does NOT use equipment?',am:'መሳሪያ የማይጠቀመው የትኛው ነው?'},o:[{en:'Spinning a hoop',am:'ቀለበት ማሽከርከር'},{en:'Bouncing a ball',am:'ኳስ ማንጠር'},{en:'Jumping on two feet',am:'በሁለት እግር መዝለል'},{en:'Kicking a ball far',am:'ኳስ ለርቀት መምታት'}],a:2},
   {q:{en:'"Run, jump and land on two feet" mixes which two skills?',am:'“ሩጦ፣ ዘሎ በሁለት እግር ማረፍ” የትኞቹን ሁለት ክህሎቶች ያቀናጃል?'},o:[{en:'Running and jumping',am:'ሩጫና ዝላይ'},{en:'Throwing and catching',am:'መወርወርና መቅለብ'},{en:'Kicking and bouncing',am:'መምታትና ማንጠር'},{en:'Sitting and standing',am:'መቀመጥና መቆም'}],a:0},
   {q:{en:'Why do footballers practise zigzag running?',am:'የእግር ኳስ ተጫዋቾች የዚግዛግ ሩጫ ለምን ይለማመዳሉ?'},o:[{en:'To get tired',am:'ለመድከም'},{en:'To change direction quickly around other players',am:'በሌሎች ተጫዋቾች ዙሪያ አቅጣጫን በፍጥነት ለመቀየር'},{en:'To walk slowly',am:'ቀስ ብሎ ለመራመድ'},{en:'For no reason',am:'ያለ ምክንያት'}],a:1,e:{en:'Basic movement skills are the start of every sport.',am:'መሠረታዊ የእንቅስቃሴ ክህሎቶች የሁሉም ስፖርቶች መነሻ ናቸው።'}}
  ]},
 {type:'notes',notes:{
 big:{en:'Basic movement skills are the start of every sport: moving from place to place, staying in place, and using equipment.',am:'መሠረታዊ የእንቅስቃሴ ክህሎቶች የሁሉም ስፖርቶች መነሻ ናቸው፦ ከቦታ ቦታ፣ በቦታ ላይና መሳሪያ በመጠቀም።'},
 points:[{en:'We move in four directions: forward, backward, left and right.',am:'በአራት አቅጣጫዎች እንንቀሳቀሳለን፦ ወደ ፊት፣ ወደ ኋላ፣ ወደ ግራና ወደ ቀኝ።'},{en:'Zigzag running builds speed and quick turns; standing on one foot builds balance.',am:'የዚግዛግ ሩጫ ፍጥነትና ቅልጥፍናን፣ በአንድ እግር መቆም ሚዛንን ያዳብራል።'},{en:'Throwing and catching build hand–eye coordination.',am:'መወርወርና መቅለብ የእጅና የዓይን ቅንጅትን ያዳብራሉ።'},{en:'Safety: warm up, clear space, no pushing, stop if it hurts, drink water.',am:'ደህንነት፦ ማሟሟቅ፣ ሰፊ ቦታ፣ አለመገፋፋት፣ ህመም ካለ ማቆም፣ ውኃ መጠጣት።'}],
 words:[['ቅልጥፍና',{en:'agility',am:'አቅጣጫን በፍጥነት መቀየር'}],['ሚዛን',{en:'balance',am:'ሳይወድቁ መቆም'}],['ቅንጅት',{en:'coordination',am:'የአካል ክፍሎች አብረው መሥራት'}]],
 remember:{en:'Warm up first, cool down last, like real athletes.',am:'መጀመሪያ አሟሙቁ፣ በመጨረሻ አቀዝቅዙ፤ እንደ እውነተኛ አትሌቶች።'},
 exam:[[{en:'Is catching a ball moving from place to place?',am:'ኳስ መቅለብ ከቦታ ቦታ የሚደረግ እንቅስቃሴ ነው?'},{en:'No, it uses equipment.',am:'አይደለም፤ መሳሪያ ይጠቀማል።'}],[{en:'What does standing on one foot build?',am:'በአንድ እግር መቆም ምን ያዳብራል?'},{en:'Balance',am:'ሚዛን'}],[{en:'What do we do before hard exercise?',am:'ከከባድ እንቅስቃሴ በፊት ምን እናደርጋለን?'},{en:'Warm up',am:'እናሟሙቃለን'}]],
 innovate:{title:{en:'Organise a mini sports day',am:'ትንሽ የስፖርት ቀን አዘጋጁ'},text:{en:'Event organisers plan, invite and run events. Plan a mini sports day for younger children.',am:'የዝግጅት አስተባባሪዎች ዝግጅቶችን ያቅዳሉ፣ ይጋብዛሉ፣ ያካሂዳሉ። ለታናናሾች ትንሽ የስፖርት ቀን አቅዱ።'},
  steps:[{en:'Choose four stations (zigzag, jumping, balance, ball passing).',am:'አራት ጣቢያዎችን ምረጡ (ዚግዛግ፣ ዝላይ፣ ሚዛን፣ ኳስ ማቀበል)።'},{en:'Make cones from bottles and stones.',am:'ከጠርሙስና ከድንጋይ ኮኖችን ሥሩ።'},{en:'Write simple safety rules and invite children.',am:'ቀላል የደህንነት ሕጎችን ጽፋችሁ ልጆችን ጋብዙ።'},{en:'Time each child and celebrate improvement, not only winners.',am:'የእያንዳንዱን ልጅ ጊዜ መዝግቡ፤ አሸናፊዎችን ብቻ ሳይሆን መሻሻልን አክብሩ።'}]}}}
 ]});
})();
