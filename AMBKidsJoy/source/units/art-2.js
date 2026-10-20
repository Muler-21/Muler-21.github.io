/* ሥነ ጥበባት · ምዕራፍ 2 · የሥነ ጥበባት የተግባር ልምምድ */
(function(){
const {tx,esc,shuffle}=G3;const I=window.IC;
const S=(inner,l)=>`<svg viewBox="0 0 100 100" role="img" aria-label="${l}" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
const SH={circle:S('<circle cx="50" cy="50" r="36" fill="var(--blue-soft)"/>','circle'),square:S('<rect x="16" y="16" width="68" height="68" fill="var(--sun-soft)"/>','square'),triangle:S('<path d="M50 14L88 84H12z" fill="var(--green-soft)"/>','triangle'),rect:S('<rect x="10" y="28" width="80" height="44" fill="var(--clay-soft)"/>','rectangle'),
 leaf:S('<path d="M20 80C20 40 50 16 84 16C84 52 60 80 20 80z" fill="var(--green-soft)"/><path d="M20 80L64 36"/>','leaf'),flower:S('<circle cx="50" cy="50" r="10" fill="var(--sun)"/><path d="M50 40c-8-18 8-18 0 0M60 50c18-8 18 8 0 0M50 60c8 18-8 18 0 0M40 50c-18 8-18-8 0 0"/>','flower'),cloud:S('<path d="M24 70h52a14 14 0 0 0 0-28 20 20 0 0 0-38-6 16 16 0 0 0-14 34z" fill="var(--surface-2)"/>','cloud'),fish:S('<path d="M14 50c18-24 50-24 62 0-12 24-44 24-62 0z" fill="var(--blue-soft)"/><path d="M76 50l14-12v24z"/><circle cx="30" cy="46" r="3" fill="currentColor"/>','fish'),
 cylinder:S('<ellipse cx="50" cy="22" rx="28" ry="10" fill="var(--blue-soft)"/><path d="M22 22v56M78 22v56"/><path d="M22 78a28 10 0 0 0 56 0"/>','cylinder'),cube:S('<path d="M20 34l30-16 30 16v36L50 86 20 70z" fill="var(--sun-soft)"/><path d="M20 34l30 16 30-16M50 50v36"/>','cube'),cone:S('<path d="M50 12L22 78a28 10 0 0 0 56 0z" fill="var(--clay-soft)"/>','cone')};
const LINES={v:S('<path d="M50 12v76"/>','vertical'),h:S('<path d="M12 50h76"/>','horizontal'),d:S('<path d="M16 84L84 16"/>','diagonal'),c:S('<path d="M12 70C30 10 70 10 88 70"/>','curved'),z:S('<path d="M10 64l16-28 16 28 16-28 16 28 16-28"/>','zigzag')};
const INST=[{n:{en:'Atamo',am:'አታሞ'},d:{en:'A short drum with skin on both sides, often played by girls in songs',am:'በሁለቱም በኩል ቆዳ የለበሰ አጭር መሳሪያ፤ ብዙ ጊዜ ልጃገረዶች ይጫወቱታል'}},{n:{en:'Kebero',am:'ከበሮ'},d:{en:'A wooden drum covered with cow skin, used in spiritual songs',am:'ከእንጨት ተሠርቶ የከብት ቆዳ የሚለብስ፤ ለመንፈሳዊ ዝማሬ ያገለግላል'}},{n:{en:'Tsenatsil',am:'ጸናጽል'},d:{en:'A metal rattle shaken in church music',am:'ከብረት ወይም ከነሐስ የሚሠራ፤ በቤተ ክርስቲያን ዜማ ይወዘወዛል'}},{n:{en:'Negarit',am:'ነጋሪት'},d:{en:'A big drum beaten with a large stick to announce news in old times',am:'በትልቅ ዱላ የሚመታ ትልቅ መሳሪያ፤ በጥንት ጊዜ አዋጅ ለመንገር ያገለግል ነበር'}}];
/* drum */
let AC=null;
function thump(){try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();const t=AC.currentTime,o=AC.createOscillator(),g=AC.createGain();o.type='sine';o.frequency.setValueAtTime(160,t);o.frequency.exponentialRampToValueAtTime(55,t+.25);g.gain.setValueAtTime(.6,t);g.gain.exponentialRampToValueAtTime(.001,t+.3);o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+.32)}catch(e){}}
function playPattern(codes){try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();let t=0;const beat=.55;codes.forEach(c=>{const b={W:4,H:2,Q:1,w:4,h:2,q:1}[c];if('WHQ'.includes(c))setTimeout(thump,t*1000);t+=b*beat})}catch(e){}}
const NOTE={W:I.wholeNote,H:I.halfNote,Q:I.quarterNote,w:I.wholeRest,h:I.halfRest,q:I.quarterRest};
const PATS=['QQQQ','HQQ','QqQq','QQH','HH','QhQ'];
/* pattern designer */
const PCOL=['#D93A30','#F4C20D','#2F5FD0','#2E9B4E'];const PSH=['circle','square','triangle'];
const tileSvg=(s,c)=>`<svg viewBox="0 0 40 40" aria-hidden="true" style="width:40px;height:40px">${s==='circle'?`<circle cx="20" cy="20" r="15" fill="${c}"/>`:s==='square'?`<rect x="6" y="6" width="28" height="28" fill="${c}"/>`:`<path d="M20 5L36 34H4z" fill="${c}"/>`}</svg>`;

Unit.start({
 id:'art-2',subject:'art',
 subjectName:{en:'Performing & Visual Arts',am:'ሥነ ጥበባት'},chapter:{en:'Chapter 2',am:'ምዕራፍ 2'},
 title:{en:'Arts Practice',am:'የሥነ ጥበባት የተግባር ልምምድ'},
 footer:{en:'Built on the Grade 3 Arts student book, Chapter 2. Turn the sound on for the drum.',am:'በ3ኛ ክፍል የሥነ ጥበባት መጽሐፍ ምዕራፍ 2 ላይ የተመሰረተ። ለከበሮው ድምፁን ክፈቱ።'},
 missions:[
 {title:{en:'Ethiopian percussion',am:'የኢትዮጵያ የምት መሳሪያዎች'},type:'match',
  tip:{en:'Percussion instruments make sound when we hit or shake them. Ethiopia has many! Match each instrument with its description.',am:'የምት የሙዚቃ መሳሪያዎች ስንመታቸው ወይም ስናወዛውዛቸው ድምፅ ያሰማሉ። ኢትዮጵያ ብዙ አሏት! እያንዳንዱን መሳሪያ ከመግለጫው ጋር አዛምዱ።'},
  rounds:[INST.map(x=>[x.n,x.d])]},
 {title:{en:'Play the drum',am:'ከበሮ ምቱ'},type:'custom',
  tip:{en:'Listen to the pattern, then play it on the drum. Tap once for every NOTE. Stay silent for the rests! Count "1, 2, 3, 4" in your head.',am:'ምቱን አዳምጡ፤ ከዚያ በከበሮው ላይ ተጫወቱት። ለእያንዳንዱ ኖታ አንድ ጊዜ ምቱ። ለእረፍቶች ዝም በሉ! በአእምሯችሁ “1፣ 2፣ 3፣ 4” ቁጠሩ።'},
  init(st){st.order=shuffle(PATS);st.i=0;st.taps=0;st.msg='';st.cls='';st.ok=false;st.done=0},
  render(p,api,st){const pat=st.order[st.i%st.order.length];const need=pat.split('').filter(c=>'WHQ'.includes(c)).length;
   p.innerHTML=`<div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;padding:10px;border:3px solid var(--ink);border-radius:14px;background:var(--surface)">${pat.split('').map(c=>`<span style="display:inline-block;width:64px;height:64px">${NOTE[c]}</span>`).join('')}</div>
    <div class="row center"><button class="btn" data-act="listen">▶ ${tx(api.UI.listen)}</button><button class="btn" data-act="reset">${tx({en:'Start again',am:'እንደገና ጀምሩ'})}</button></div>
    <div class="row center"><button id="drum" aria-label="drum" style="width:180px;height:180px;border-radius:50%;background:radial-gradient(circle at 50% 45%,#E8C79A 0 55%,#B07A44 56% 64%,#7A4A22 65%);border:6px solid #5A3415;box-shadow:0 8px 0 #5A3415;font-family:var(--display);font-weight:800;color:#5A3415;font-size:1.4rem" ${st.ok?'disabled':''}>${tx({en:'Tap!',am:'ምቱ!'})}</button></div>
    <div class="sub center">${tx({en:'Taps: {t}',am:'ምቶች፦ {t}'},{t:st.taps})}</div>
    <div class="row center"><button class="btn primary" data-act="check" ${st.taps&&!st.ok?'':'disabled'}>${tx(api.UI.check)}</button></div>
    <div class="feedback center ${st.cls}">${st.msg}</div>${st.ok?`<div class="row center"><button class="btn primary" data-act="next">${tx(api.UI.next)}</button></div>`:''}
    <div class="progress center">${tx({en:'Patterns played: {n}/3',am:'የተጫወታችሁት ምት፦ {n}/3'},{n:st.done})}</div>`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
    if(b.id==='drum'){thump();st.taps++;st.msg='';}
    if(b.dataset.act==='listen')playPattern(pat.split(''));
    if(b.dataset.act==='reset'){st.taps=0;st.msg=''}
    if(b.dataset.act==='check'){if(st.taps===need){st.ok=true;st.done++;st.cls='good';st.msg=tx(api.UI.good);api.S.yay();if(st.done>=3)api.complete()}else{st.cls='bad';st.msg=tx({en:'This pattern has {n} notes. Rests are silent. Try again!',am:'ይህ ምት {n} ኖታዎች አሉት። እረፍቶች ዝም ይላሉ። እንደገና ሞክሩ!'}).replace('{n}',need);st.taps=0;api.S.nope()}}
    if(b.dataset.act==='next'){st.i++;st.taps=0;st.ok=false;st.msg=''}
    api.rerender()}}},
 {title:{en:'Geometric or natural?',am:'ጂኦሜትሪክ ወይስ ተፈጥሯዊ?'},type:'sort',
  tip:{en:'Flat shapes are either geometric (drawn with a ruler: circle, square, triangle) or natural (found in nature: leaves, flowers, clouds, animals).',am:'ዝርግ ቅርጾች ወይ ጂኦሜትሪክ (በማስመሪያ የሚሠሩ፦ ክብ፣ ካሬ፣ ሦስት ማዕዘን) ወይም ተፈጥሯዊ (በተፈጥሮ የሚገኙ፦ ቅጠል፣ አበባ፣ ደመና፣ እንስሳ) ናቸው።'},
  buckets:[{en:'Geometric',am:'ጂኦሜትሪክ'},{en:'Natural',am:'ተፈጥሯዊ'}],
  items:[{t:{en:'Circle',am:'ክብ'},fig:SH.circle,b:0},{t:{en:'Square',am:'ካሬ'},fig:SH.square,b:0},{t:{en:'Triangle',am:'ሦስት ማዕዘን'},fig:SH.triangle,b:0},{t:{en:'Rectangle',am:'ሬክታንግል'},fig:SH.rect,b:0},{t:{en:'Leaf',am:'ቅጠል'},fig:SH.leaf,b:1},{t:{en:'Flower',am:'አበባ'},fig:SH.flower,b:1},{t:{en:'Cloud',am:'ደመና'},fig:SH.cloud,b:1},{t:{en:'Fish',am:'ዓሣ'},fig:SH.fish,b:1}]},
 {title:{en:'Shapes and forms',am:'ቅርጽና ፎርም'},type:'quiz',
  tip:{en:'A shape is flat (circle, square). A form has depth, like real objects: cylinder, cube and cone. Artists shade forms to make them look real.',am:'ቅርጽ ዝርግ ነው (ክብ፣ ካሬ)። ፎርም እንደ እውነተኛ ነገሮች ጥልቀት አለው፦ ሲሊንደር፣ ኩብና ኮን። ሠዓሊዎች ፎርሞችን እውነተኛ እንዲመስሉ ያጠላሉ።'},
  items:[
   {fig:SH.cylinder,q:{en:'Which form is this?',am:'ይህ የትኛው ፎርም ነው?'},o:[{en:'Cube',am:'ኩብ'},{en:'Cylinder',am:'ሲሊንደር'},{en:'Cone',am:'ኮን'}],a:1},
   {fig:SH.cube,q:{en:'Which form is this?',am:'ይህ የትኛው ፎርም ነው?'},o:[{en:'Cube',am:'ኩብ'},{en:'Cylinder',am:'ሲሊንደር'},{en:'Cone',am:'ኮን'}],a:0},
   {fig:SH.cone,q:{en:'Which form is this?',am:'ይህ የትኛው ፎርም ነው?'},o:[{en:'Cube',am:'ኩብ'},{en:'Cylinder',am:'ሲሊንደር'},{en:'Cone',am:'ኮን'}],a:2},
   {q:{en:'A tin can is shaped like a…',am:'ቆርቆሮ ጣሳ ቅርጹ እንደ…'},o:[{en:'Cylinder',am:'ሲሊንደር'},{en:'Cone',am:'ኮን'},{en:'Cube',am:'ኩብ'}],a:0},
   {q:{en:'A box of chalk is shaped like a…',am:'የጠመኔ ሳጥን ቅርጹ እንደ…'},o:[{en:'Cone',am:'ኮን'},{en:'Cube (box)',am:'ኩብ (ሳጥን)'},{en:'Circle',am:'ክብ'}],a:1},
   {q:{en:'Which one is a FLAT shape, not a form?',am:'ፎርም ያልሆነው ዝርግ ቅርጽ የትኛው ነው?'},o:[{en:'Circle',am:'ክብ'},{en:'Cylinder',am:'ሲሊንደር'},{en:'Cone',am:'ኮን'}],a:0}
  ]},
 {title:{en:'Pattern designer',am:'ዲዛይን ሠሪ'},type:'custom',
  tip:{en:'Repeating shapes makes beautiful designs, like the borders on Ethiopian baskets and clothes. Choose a shape and colour, then fill the 8 boxes so that a pattern repeats (like A B A B…).',am:'ቅርጾችን መደጋገም ውብ ዲዛይን ይሠራል፤ ልክ እንደ ኢትዮጵያ የሰፌድና የልብስ ጥለት። ቅርጽና ቀለም ምረጡ፤ ከዚያ ጥለቱ እንዲደጋገም (እንደ ሀ ለ ሀ ለ…) 8ቱን ሳጥኖች ሙሉ።'},
  init(st){st.row=Array(8).fill(null);st.sh='circle';st.c=0;st.msg='';st.cls='';st.made=0},
  render(p,api,st){
   p.innerHTML=`<div class="row">${PSH.map(s=>`<button class="tile" data-sh="${s}" style="${st.sh===s?'border-color:var(--accent);background:var(--accent-soft)':''}">${tileSvg(s,'var(--ink)')}</button>`).join('')}<span style="width:12px"></span>${PCOL.map((c,i)=>`<button class="tile" data-c="${i}" aria-label="colour ${i+1}" style="width:48px;height:48px;background:${c};${st.c===i?'outline:4px solid var(--ink);outline-offset:2px':''}"></button>`).join('')}</div>
    <div style="display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:4px;max-width:560px">${st.row.map((v,i)=>`<button data-cell="${i}" aria-label="box ${i+1}" style="aspect-ratio:1;border-radius:10px;border:2px dashed var(--line);background:var(--surface);display:grid;place-items:center;max-width:100%">${v?tileSvg(v.s,PCOL[v.c]):''}</button>`).join('')}</div>
    <div class="row"><button class="btn primary" data-act="check" ${st.row.every(Boolean)?'':'disabled'}>${tx(api.UI.check)}</button><button class="btn" data-act="clear">${tx(api.UI.clear)}</button></div>
    <div class="feedback ${st.cls}">${st.msg}</div><div class="progress">${tx({en:'Patterns designed: {n}/2',am:'የተሠሩ ጥለቶች፦ {n}/2'},{n:st.made})}</div>`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b)return;
    if(b.dataset.sh)st.sh=b.dataset.sh;if(b.dataset.c!==undefined)st.c=+b.dataset.c;
    if(b.dataset.cell!==undefined){st.row[+b.dataset.cell]={s:st.sh,c:st.c};api.S.tick();st.msg=''}
    if(b.dataset.act==='clear'){st.row=Array(8).fill(null);st.msg=''}
    if(b.dataset.act==='check'){const k=v=>v.s+v.c;let unit=0;for(const L of [1,2,3,4]){if(st.row.every((v,i)=>k(v)===k(st.row[i%L]))){unit=L;break}}
     if(unit>=2){st.made++;st.cls='good';st.msg=tx({en:'A repeating pattern! The part that repeats has {n} shapes.',am:'የሚደጋገም ጥለት! የሚደጋገመው ክፍል {n} ቅርጾች አሉት።'}).replace('{n}',unit);api.S.yay();if(st.made>=2)api.complete();st.row=Array(8).fill(null)}
     else if(unit===1){st.cls='bad';st.msg=tx({en:'All boxes are the same. Use at least two different shapes or colours that repeat.',am:'ሁሉም ሳጥኖች አንድ ዓይነት ናቸው። የሚደጋገሙ ቢያንስ ሁለት የተለያዩ ቅርጾችን ወይም ቀለሞችን ተጠቀሙ።'});api.S.nope()}
     else{st.cls='bad';st.msg=tx({en:'This does not repeat yet. Look: does the start come back again and again?',am:'ይህ ገና አይደጋገምም። እዩ፦ መጀመሪያው ደጋግሞ ይመለሳል?'});api.S.nope()}}
    api.rerender()}}},
 {title:{en:'Lines for letters',am:'የፊደል መስመሮች'},type:'match',
  tip:{en:'Calligraphy is the art of beautiful writing. Every letter is made of lines. Match each line with its name, then find these lines in the letters ሀ, ለ, A and Z!',am:'ኪነ ጽሕፈት የፊደላትን ቅርጽ አሳምሮ የመጻፍ ጥበብ ነው። እያንዳንዱ ፊደል ከመስመሮች ይሠራል። እያንዳንዱን መስመር ከስሙ ጋር አዛምዱ፤ ከዚያ እነዚህን መስመሮች በሀ፣ ለ፣ A እና Z ውስጥ ፈልጉ!'},
  rounds:[[[{svg:LINES.v},{en:'Vertical',am:'ቋሚ'}],[{svg:LINES.h},{en:'Horizontal',am:'አግድም'}],[{svg:LINES.d},{en:'Diagonal',am:'ሰያፍ'}],[{svg:LINES.c},{en:'Curved',am:'ጎባጣ'}],[{svg:LINES.z},{en:'Zigzag',am:'ዚግዛግ'}]]]},
 {title:{en:'Colour mixing',am:'ቀለማትን ማቀላቀል'},type:'quiz',shuffle:true,
  tip:{en:'Primary colours mixed in equal amounts make secondary colours: green, orange and purple.',am:'መስራች ቀለማት በእኩል መጠን ሲደባለቁ ሁለተኛ ደረጃ ቀለማትን ይሠራሉ፦ አረንጓዴ፣ ብርቱካናማና ወይን ጠጅ።'},
  items:[
   {q:{en:'Red + yellow = ?',am:'ቀይ + ቢጫ = ?'},o:[{en:'Orange',am:'ብርቱካናማ'},{en:'Green',am:'አረንጓዴ'},{en:'Purple',am:'ወይን ጠጅ'}],a:0},
   {q:{en:'Blue + yellow = ?',am:'ሰማያዊ + ቢጫ = ?'},o:[{en:'Purple',am:'ወይን ጠጅ'},{en:'Green',am:'አረንጓዴ'},{en:'Orange',am:'ብርቱካናማ'}],a:1},
   {q:{en:'Which two colours make purple?',am:'ወይን ጠጅ የሚሠሩት ሁለት ቀለማት የትኞቹ ናቸው?'},o:[{en:'Red + blue',am:'ቀይ + ሰማያዊ'},{en:'Yellow + blue',am:'ቢጫ + ሰማያዊ'},{en:'Red + yellow',am:'ቀይ + ቢጫ'}],a:0},
   {q:{en:'You want to paint green leaves but have only yellow and blue. Can you?',am:'አረንጓዴ ቅጠሎችን መቀባት ትፈልጋላችሁ፤ ያላችሁ ቢጫና ሰማያዊ ብቻ ነው። ትችላላችሁ?'},o:[{en:'Yes, mix them',am:'አዎ፣ አቀላቅሏቸው'},{en:'No, impossible',am:'አይቻልም'}],a:0},
   {q:{en:'Green, orange and purple are called…',am:'አረንጓዴ፣ ብርቱካናማና ወይን ጠጅ የሚባሉት…'},o:[{en:'Primary colours',am:'መስራች ቀለማት'},{en:'Secondary colours',am:'ሁለተኛ ደረጃ ቀለማት'},{en:'Grey colours',am:'ግራጫ ቀለማት'}],a:1}
  ]},
 {title:{en:'Leaf printing',am:'የቅጠል ህትመት'},type:'order',vertical:true,
  tip:{en:'You can print with leaves! Put the steps in order, then try it at school or home.',am:'በቅጠል ማተም ትችላላችሁ! ደረጃዎቹን በቅደም ተከተል አስቀምጡ፤ ከዚያ በትምህርት ቤት ወይም በቤት ሞክሩት።'},
  help:{en:'Tap the steps from first to last.',am:'ደረጃዎቹን ከመጀመሪያው እስከ መጨረሻው ንኩ።'},
  rounds:[{items:[{en:'Collect clean leaves with clear lines',am:'ግልጽ መስመር ያላቸውን ንጹህ ቅጠሎች መሰብሰብ'},{en:'Paint the back of a leaf',am:'የቅጠሉን ጀርባ መቀባት'},{en:'Press the painted side onto paper',am:'የተቀባውን ጎን በወረቀት ላይ መጫን'},{en:'Lift the leaf off carefully',am:'ቅጠሉን በጥንቃቄ ማንሳት'},{en:'Let the print dry and show it',am:'ህትመቱ እንዲደርቅ ትቶ ማሳየት'}]}]},
 {title:{en:'Model with clay',am:'በሸክላ ቅርጽ መሥራት'},type:'order',vertical:true,
  tip:{en:'Clay (ሸክላ / ጭቃ) lets us make forms with depth: pots, animals, people. Ethiopian potters make jebena and mitad from clay. Work in the right order so your model does not crack.',am:'ሸክላ ጥልቀት ያላቸውን ፎርሞች እንድንሠራ ያስችለናል፦ እንስራ፣ እንስሳት፣ ሰዎች። የኢትዮጵያ ሸክላ ሠሪዎች ጀበናና ምጣድ ከሸክላ ይሠራሉ። ቅርጹ እንዳይሰነጠቅ በትክክለኛው ቅደም ተከተል ሥሩ።'},
  help:{en:'Tap the steps from first to last.',am:'ደረጃዎቹን ከመጀመሪያው እስከ መጨረሻው ንኩ።'},
  rounds:[
   {prompt:{en:'Clay model steps in order:',am:'የሸክላ ቅርጽ ደረጃዎች በቅደም ተከተል፦'},items:[{en:'Collect clay soil and remove stones',am:'የሸክላ አፈር ሰብስቡ፤ ድንጋዩን አውጡ'},{en:'Mix with a little water and knead well',am:'በጥቂት ውኃ ለውሱና በደንብ አቡኩ'},{en:'Roll balls and coils, then shape your model',am:'ኳስና ገመድ አድቦልቡሉ፤ ከዚያ ቅርጹን ሥሩ'},{en:'Add details with a stick',am:'በእንጨት ዝርዝር ነገሮችን ጨምሩ'},{en:'Dry it slowly in the shade',am:'በጥላ ቀስ ብሎ እንዲደርቅ አድርጉ'},{en:'Paint it and show it',am:'ቀለም ቀቡትና አሳዩ'}]}
  ]},
 {title:{en:'Send a message with art',am:'በጥበብ መልዕክት ማስተላለፍ'},type:'quiz',
  tip:{en:'Art can send messages to many people: a drama (acting), a poster or photo, a video, a song. Choose the best way for each message and audience.',am:'ጥበብ ለብዙ ሰዎች መልዕክት ማስተላለፍ ይችላል፦ ድራማ (ትወና)፣ ፖስተር ወይም ፎቶ፣ ቪዲዮ፣ ዘፈን። ለእያንዳንዱ መልዕክትና ተመልካች የተሻለውን መንገድ ምረጡ።'},
  items:[
   {q:{en:'Your class wants to show parents why washing hands matters, with actors on stage. This is…',am:'ክፍላችሁ እጅ መታጠብ ለምን እንደሚያስፈልግ ለወላጆች በመድረክ ላይ በተዋንያን ማሳየት ይፈልጋል። ይህ…'},o:[{en:'A drama',am:'ድራማ'},{en:'A photo',am:'ፎቶ'},{en:'A map',am:'ካርታ'}],a:0},
   {q:{en:'One picture on the school wall says "Plant a tree!" This is…',am:'በትምህርት ቤቱ ግድግዳ ላይ ያለ አንድ ስዕል "ዛፍ ትከሉ!" ይላል። ይህ…'},o:[{en:'A poster or photo message',am:'የፖስተር ወይም የፎቶ መልዕክት'},{en:'A drama',am:'ድራማ'},{en:'A song',am:'ዘፈን'}],a:0},
   {q:{en:'You record moving pictures with sound showing how to cross the road safely. This is…',am:'መንገድን በደህንነት እንዴት መሻገር እንደሚቻል የሚያሳይ ድምፅ ያለው ተንቀሳቃሽ ምስል ቀረጻችሁ። ይህ…'},o:[{en:'A video',am:'ቪዲዮ'},{en:'A drawing',am:'ስዕል'},{en:'A letter',am:'ደብዳቤ'}],a:0},
   {q:{en:'What makes a message strong?',am:'መልዕክትን ጠንካራ የሚያደርገው ምንድን ነው?'},o:[{en:'One clear idea, simple words, a strong picture',am:'አንድ ግልጽ ሐሳብ፣ ቀላል ቃላት፣ ጠንካራ ስዕል'},{en:'Many small words',am:'ብዙ ትናንሽ ቃላት'},{en:'No pictures at all',am:'ምንም ስዕል አለመኖር'}],a:0}
  ]},
 {type:'notes',notes:{
 big:{en:'Artists practise: they play rhythms on instruments, draw shapes and forms, mix colours, write beautiful letters and print.',am:'ሠዓሊዎች ይለማመዳሉ፦ በመሳሪያ ምት ይጫወታሉ፣ ቅርጽና ፎርም ይስላሉ፣ ቀለም ያቀላቅላሉ፣ ፊደላትን ያሳምራሉ፣ ያትማሉ።'},
 points:[{en:'Ethiopian percussion: atamo, kebero, bell, kachil, tsenatsil, negarit.',am:'የኢትዮጵያ የምት መሳሪያዎች፦ አታሞ፣ ከበሮ፣ ደወል፣ ቃጭል፣ ጸናጽል፣ ነጋሪት።'},{en:'Flat shapes are geometric (circle, square) or natural (leaf, cloud).',am:'ዝርግ ቅርጾች ጂኦሜትሪክ (ክብ፣ ካሬ) ወይም ተፈጥሯዊ (ቅጠል፣ ደመና) ናቸው።'},{en:'Forms have depth: cylinder, cube, cone.',am:'ፎርሞች ጥልቀት አላቸው፦ ሲሊንደር፣ ኩብ፣ ኮን።'},{en:'Secondary colours: red+yellow=orange, yellow+blue=green, red+blue=purple.',am:'ሁለተኛ ደረጃ ቀለማት፦ ቀይ+ቢጫ=ብርቱካናማ፣ ቢጫ+ሰማያዊ=አረንጓዴ፣ ቀይ+ሰማያዊ=ወይን ጠጅ።'},{en:'Letters are built from lines: vertical, horizontal, diagonal, curved, zigzag.',am:'ፊደላት ከመስመሮች ይሠራሉ፦ ቋሚ፣ አግድም፣ ሰያፍ፣ ጎባጣ፣ ዚግዛግ።'},{en:'Clay: knead, roll, shape, add details, dry slowly in the shade.',am:'ሸክላ፦ ማቡካት፣ ማድቦልቦል፣ መቅረጽ፣ ዝርዝር መጨመር፣ በጥላ ቀስ ብሎ ማድረቅ።'},{en:'Messages can be sent by drama, poster or photo, and video: one clear idea, simple words, strong pictures.',am:'መልዕክት በድራማ፣ በፖስተር ወይም በፎቶ እና በቪዲዮ ይተላለፋል፦ አንድ ግልጽ ሐሳብ፣ ቀላል ቃላት፣ ጠንካራ ስዕል።'}],
 words:[['ፎርም',{en:'form',am:'ጥልቀት ያለው ቅርጽ'}],['ኪነ ጽሕፈት',{en:'calligraphy',am:'ፊደላትን አሳምሮ መጻፍ'}],['ጥለት',{en:'pattern',am:'የሚደጋገም ዲዛይን'}]],
 remember:{en:'A pattern is a part that repeats: A B A B…',am:'ጥለት የሚደጋገም ክፍል ነው፦ ሀ ለ ሀ ለ…'},
 exam:[[{en:'Red + blue = ?',am:'ቀይ + ሰማያዊ = ?'},{en:'Purple',am:'ወይን ጠጅ'}],[{en:'A tin can has which form?',am:'ጣሳ የትኛው ፎርም አለው?'},{en:'Cylinder',am:'ሲሊንደር'}],[{en:'Which instrument announced news in old times?',am:'በጥንት አዋጅ ለመንገር ያገለገለው መሳሪያ?'},{en:'Negarit',am:'ነጋሪት'}],[{en:'Is a leaf a geometric shape?',am:'ቅጠል ጂኦሜትሪክ ቅርጽ ነው?'},{en:'No, it is natural.',am:'አይደለም፤ ተፈጥሯዊ ነው።'}]],
 innovate:{title:{en:'Pattern bookmark business',am:'የጥለት መጽሐፍ ምልክት ሥራ'},text:{en:'Readers need bookmarks. Design bookmarks with repeating patterns or leaf prints and test what sells.',am:'አንባቢዎች የመጽሐፍ ምልክት ይፈልጋሉ። የሚደጋገም ጥለት ወይም የቅጠል ህትመት ያለው ምልክት ንድፍ አውጡ፤ የሚሸጠውን ፈትሹ።'},
  steps:[{en:'Make five bookmarks with different patterns.',am:'የተለያየ ጥለት ያላቸውን አምስት ምልክቶች ሥሩ።'},{en:'Show them to ten people. Which do they choose?',am:'ለአሥር ሰዎች አሳዩ። የትኛውን ይመርጣሉ?'},{en:'Make more of the favourite design.',am:'የተወደደውን ንድፍ ተጨማሪ ሥሩ።'},{en:'Save the money or use it for more art materials.',am:'ገንዘቡን ቆጥቡ ወይም ለተጨማሪ የሥዕል ዕቃ ተጠቀሙበት።'}]}}}
 ]});
})();
