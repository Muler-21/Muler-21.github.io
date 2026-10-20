/* አካባቢ ሳይንስ · ምዕራፍ 2 · ሳይንስን መረዳት */
(function(){
const {tx,esc}=G3;
const G=[{en:'Fruits & vegetables',am:'አትክልትና ፍራፍሬ',c:'var(--green)',use:{en:'protect us from disease',am:'በሽታ ይከላከላሉ'}},
 {en:'Grains & legumes',am:'ጥራጥሬዎች',c:'var(--sun)',use:{en:'give energy and build the body',am:'ኃይልና ሙቀት ይሰጣሉ፤ ሰውነትን ይገነባሉ'}},
 {en:'Milk & milk products',am:'ወተትና የወተት ውጤቶች',c:'var(--blue)',use:{en:'give energy and strength',am:'ኃይልና ጥንካሬ ይሰጣሉ'}},
 {en:'Meat & eggs',am:'ሥጋና እንቁላል',c:'var(--clay)',use:{en:'build the body',am:'ሰውነትን ይገነባሉ'}}];
const FOODS=[
 {en:'Cabbage',am:'ጎመን',g:0},{en:'Orange',am:'ብርቱካን',g:0},{en:'Papaya',am:'ፓፓዬ',g:0},{en:'Carrot',am:'ካሮት',g:0},
 {en:'Teff (injera)',am:'ጤፍ (እንጀራ)',g:1},{en:'Wheat (bread)',am:'ስንዴ (ዳቦ)',g:1},{en:'Lentils',am:'ምስር',g:1},{en:'Chickpeas (shiro)',am:'ሽንብራ (ሽሮ)',g:1},
 {en:'Milk',am:'ወተት',g:2},{en:'Cottage cheese (ayib)',am:'አይብ',g:2},{en:'Yoghurt (ergo)',am:'እርጎ',g:2},
 {en:'Egg',am:'እንቁላል',g:3},{en:'Chicken',am:'የዶሮ ሥጋ',g:3},{en:'Fish',am:'ዓሣ',g:3}];
const STATES={solid:{en:'Ice (solid)',am:'በረዶ (ጥጥር)',c:'#9FD3F5'},liquid:{en:'Water (liquid)',am:'ውኃ (ፈሳሽ)',c:'#2F6FDE'},gas:{en:'Steam (gas)',am:'ትነት (ጋዝ)',c:'#C9D3E0'}};
const ORDER=['solid','liquid','gas'];
function waterSvg(s){const base=`<rect x="40" y="70" width="120" height="90" rx="8" fill="none" stroke="var(--ink)" stroke-width="4"/>`;
 if(s==='solid')return`<svg viewBox="0 0 200 180" role="img" aria-label="ice" style="width:220px;max-width:100%">${base}<rect x="58" y="104" width="38" height="38" rx="6" fill="#BFE3FA" stroke="var(--ink)" stroke-width="2"/><rect x="104" y="96" width="38" height="38" rx="6" fill="#BFE3FA" stroke="var(--ink)" stroke-width="2" transform="rotate(10 123 115)"/></svg>`;
 if(s==='liquid')return`<svg viewBox="0 0 200 180" role="img" aria-label="water" style="width:220px;max-width:100%">${base}<path d="M44 110q20-8 40 0t40 0t32 0V156H44z" fill="#2F6FDE" opacity=".85"/></svg>`;
 return`<svg viewBox="0 0 200 180" role="img" aria-label="steam" style="width:220px;max-width:100%">${base}<path d="M44 140q20-6 40 0t40 0t32 0V156H44z" fill="#2F6FDE" opacity=".6"/>${[70,100,130].map((x,i)=>`<path d="M${x} 66c-12-12 12-20 0-34s10-20 0-28" stroke="var(--ink-soft)" stroke-width="4" fill="none" stroke-linecap="round" opacity="${.5+i*.15}"/>`).join('')}</svg>`}

Unit.start({
 id:'env-2',subject:'env',
 subjectName:{en:'Environmental Science',am:'አካባቢ ሳይንስ'},chapter:{en:'Chapter 2',am:'ምዕራፍ 2'},
 title:{en:'Understanding Science',am:'ሳይንስን መረዳት'},
 footer:{en:'Built on the Grade 3 Environmental Science student book, Chapter 2: food, hygiene, matter and light.',am:'በ3ኛ ክፍል የአካባቢ ሳይንስ መጽሐፍ ምዕራፍ 2 ላይ የተመሰረተ፦ ምግብ፣ ንጽህና፣ ቁስአካልና ብርሃን።'},
 missions:[
 {title:{en:'Where food comes from',am:'የምግብ ምንጮች'},type:'sort',
  tip:{en:'All our food comes from two sources: plants and animals. Sort each food. Which one surprised you?',am:'ምግባችን ሁሉ ከሁለት ምንጮች ይገኛል፦ ከእጽዋትና ከእንስሳት። እያንዳንዱን ምግብ መድቡ። ያስገረማችሁ የትኛው ነው?'},
  buckets:[{en:'From plants',am:'ከእጽዋት'},{en:'From animals',am:'ከእንስሳት'}],
  items:[{t:{en:'Honey',am:'ማር'},b:1,why:{en:'Bees make honey from flowers, but bees are animals.',am:'ንቦች ማርን ከአበባ ይሠራሉ፤ ንቦች ግን እንስሳት ናቸው።'}},{t:{en:'Milk',am:'ወተት'},b:1},{t:{en:'Mango',am:'ማንጎ'},b:0},{t:{en:'Teff',am:'ጤፍ'},b:0},{t:{en:'Egg',am:'እንቁላል'},b:1},{t:{en:'Carrot',am:'ካሮት'},b:0},{t:{en:'Maize',am:'በቆሎ'},b:0},{t:{en:'Butter',am:'ቅቤ'},b:1},{t:{en:'Beans',am:'ባቄላ'},b:0}]},
 {title:{en:'Four food groups',am:'አራቱ የምግብ ምድቦች'},type:'sort',
  tip:{en:'Foods are grouped into four basic groups. Each group helps the body in a different way, so we need food from ALL four.',am:'ምግቦች በአራት መሰረታዊ ምድቦች ይከፈላሉ። እያንዳንዱ ምድብ ሰውነትን በተለያየ መንገድ ይረዳል፤ ስለዚህ ከአራቱም ምድቦች መመገብ አለብን።'},
  buckets:G.map(g=>({en:g.en,am:g.am})),
  items:FOODS.map(f=>({t:{en:f.en,am:f.am},b:f.g}))},
 {title:{en:'Build a balanced plate',am:'የተመጣጠነ ገበታ'},type:'custom',
  tip:{en:'A balanced meal has food from all four groups. Tap foods to put them on the plate. Kokeb will check your plate!',am:'የተመጣጠነ ምግብ ከአራቱም ምድቦች ምግብ ይይዛል። ምግቦችን ንክታችሁ ገበታው ላይ አስቀምጡ። ኮከብ ገበታችሁን ትፈትሻለች!'},
  init(st){st.plate=[];st.msg='';st.cls='';st.made=0},
  render(p,api,st){const have=new Set(st.plate.map(i=>FOODS[i].g));
   const plateSvg=`<svg viewBox="0 0 220 220" role="img" aria-label="plate" style="width:min(240px,100%);height:auto"><circle cx="110" cy="110" r="104" fill="var(--surface-2)" stroke="var(--line)" stroke-width="4"/>
    ${G.map((g,i)=>{const a0=i*Math.PI/2-Math.PI/2,a1=a0+Math.PI/2,r=86;const x0=110+r*Math.cos(a0),y0=110+r*Math.sin(a0),x1=110+r*Math.cos(a1),y1=110+r*Math.sin(a1);
     return`<path d="M110 110L${x0} ${y0}A${r} ${r} 0 0 1 ${x1} ${y1}z" fill="${have.has(i)?g.c:'var(--surface)'}" opacity="${have.has(i)?.85:1}" stroke="var(--line)" stroke-width="3"/>`}).join('')}</svg>`;
   p.innerHTML=`<div class="row" style="align-items:flex-start;gap:20px"><div style="display:grid;gap:8px;justify-items:center">${plateSvg}
     <div style="display:grid;gap:4px">${G.map((g,i)=>`<span class="small" style="display:flex;gap:6px;align-items:center"><span style="width:14px;height:14px;border-radius:4px;background:${g.c}"></span>${esc(tx(g))} ${have.has(i)?'✓':''}</span>`).join('')}</div></div>
    <div style="display:grid;gap:10px;flex:1 1 280px;min-width:0"><div class="tiles">${FOODS.map((f,i)=>`<button class="tile" data-f="${i}" style="${st.plate.includes(i)?'border-color:var(--accent);background:var(--accent-soft)':''}">${esc(tx(f))}</button>`).join('')}</div>
     <div class="row"><button class="btn primary" data-act="check" ${st.plate.length?'':'disabled'}>${tx(api.UI.check)}</button><button class="btn" data-act="clear">${tx(api.UI.clear)}</button></div>
     <div class="feedback ${st.cls}">${st.msg}</div><div class="progress">${tx({en:'Balanced plates: {n}/2',am:'የተመጣጠኑ ገበታዎች፦ {n}/2'},{n:st.made})}</div></div></div>
    <div class="note">${tx({en:'No meat at home? Beans, lentils and chickpeas can take its place. They also build the body.',am:'ቤት ውስጥ ሥጋ የለም? ባቄላ፣ ምስርና ሽንብራ በምትኩ ሊሆኑ ይችላሉ። እነሱም ሰውነትን ይገነባሉ።'})}</div>`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
    if(b.dataset.f!==undefined){const i=+b.dataset.f;st.plate=st.plate.includes(i)?st.plate.filter(x=>x!==i):[...st.plate,i];st.msg='';api.S.tick()}
    if(b.dataset.act==='clear'){st.plate=[];st.msg=''}
    if(b.dataset.act==='check'){const miss=G.filter((g,i)=>!have.has(i));
     if(!miss.length){st.made++;st.msg=tx({en:'A balanced plate! Now build a different one.',am:'የተመጣጠነ ገበታ! አሁን የተለየ ገበታ ሥሩ።'});st.cls='good';api.S.yay();st.plate=[];if(st.made>=2)api.complete()}
     else{st.msg=tx({en:'Missing: ',am:'የጎደለ፦ '})+miss.map(g=>tx(g)).join(', ');st.cls='bad';api.S.nope()}}
    api.rerender()}}},
 {title:{en:'Safe food or not?',am:'ምግብን ከብክለት መጠበቅ'},type:'sort',
  tip:{en:'Food becomes contaminated when germs or dirt get into it. Contaminated food causes diarrhoea, typhoid and cholera. Sort each habit.',am:'ምግብ የሚበከለው ጀርሞች ወይም ቆሻሻ ሲገቡበት ነው። የተበከለ ምግብ ተቅማጥ፣ ታይፎይድና ኮሌራ ያመጣል። እያንዳንዱን ልማድ መድቡ።'},
  buckets:[{en:'Keeps food safe',am:'ምግብን ይጠብቃል'},{en:'Makes food unsafe',am:'ምግብን ይበክላል'}],
  items:[
   {t:{en:'Covering food so flies cannot land on it',am:'ዝንብ እንዳያርፍበት ምግብን መሸፈን'},b:0},
   {t:{en:'Using boiled or treated water',am:'የፈላ ወይም የታከመ ውኃ መጠቀም'},b:0},
   {t:{en:'Eating raw meat',am:'ጥሬ ሥጋ መብላት'},b:1},
   {t:{en:'Washing cooking pots and plates well',am:'የማብሰያ ዕቃዎችንና ሳህኖችን በደንብ ማጠብ'},b:0},
   {t:{en:'Eating food that has stayed for many days',am:'ብዙ ቀን የቆየ ምግብ መብላት'},b:1},
   {t:{en:'Using a toilet and keeping it clean',am:'መጸዳጃ ቤት መጠቀምና ንጹህ ማድረግ'},b:0},
   {t:{en:'Leaving rubbish near the kitchen',am:'ቆሻሻን ከማዕድ ቤት አጠገብ መተው'},b:1},
   {t:{en:'Cooking with dirty hands',am:'በቆሻሻ እጅ ምግብ ማዘጋጀት'},b:1}
  ]},
 {title:{en:'Solid, liquid, gas',am:'ጥጥር፣ ፈሳሽ፣ ጋዝ'},type:'sort',
  tip:{en:'Everything around us is matter. Solids keep their own shape. Liquids take the shape of their container. Gases spread out to fill all the space.',am:'በዙሪያችን ያለው ሁሉ ቁስአካል ነው። ጥጥሮች የራሳቸው ቅርጽ አላቸው። ፈሳሾች የመያዣቸውን ቅርጽ ይይዛሉ። ጋዞች ቦታውን በሙሉ ለመሙላት ይሰራጫሉ።'},
  buckets:[{en:'Solid',am:'ጥጥር'},{en:'Liquid',am:'ፈሳሽ'},{en:'Gas',am:'ጋዝ'}],
  items:[{t:{en:'Stone',am:'ድንጋይ'},b:0},{t:{en:'Pencil',am:'እርሳስ'},b:0},{t:{en:'Ice',am:'በረዶ'},b:0},{t:{en:'Wood',am:'እንጨት'},b:0},{t:{en:'Milk',am:'ወተት'},b:1},{t:{en:'Cooking oil',am:'ዘይት'},b:1},{t:{en:'Water',am:'ውኃ'},b:1},{t:{en:'Air in a balloon',am:'በፊኛ ውስጥ ያለ አየር'},b:2},{t:{en:'Steam from a kettle',am:'ከጀበና የሚወጣ ትነት'},b:2}]},
 {title:{en:'Water changes',am:'የውኃ የሁነት ለውጥ'},type:'custom',
  tip:{en:'Heat and cold change the state of water. Ice gets heat and melts into water. Water gets more heat and becomes steam. Cooling does the opposite. No new substance is made: this is a physical change.',am:'ሙቀትና ቅዝቃዜ የውኃን ሁነት ይቀይራሉ። በረዶ ሙቀት ሲያገኝ ይቀልጣል፤ ውኃ ይሆናል። ውኃ ተጨማሪ ሙቀት ሲያገኝ ትነት ይሆናል። ማቀዝቀዝ ተቃራኒውን ያደርጋል። አዲስ ቁስ አይፈጠርም፦ ይህ አካላዊ ለውጥ ነው።'},
  init(st){st.s=1;st.t=0;st.done=0;st.msg='';st.cls='';st.targets=['gas','solid','liquid','gas']},
  render(p,api,st){const want=st.targets[st.done%st.targets.length];const cur=ORDER[st.s];
   p.innerHTML=`<div class="row" style="gap:24px;align-items:center"><div style="display:grid;justify-items:center;gap:6px">${waterSvg(cur)}<span class="big" style="font-size:1.5rem">${esc(tx(STATES[cur]))}</span></div>
    <div style="display:grid;gap:12px;flex:1 1 240px;min-width:0"><div class="explain"><b>${tx({en:'Kokeb asks:',am:'ኮከብ ትጠይቃለች፦'})}</b> ${tx({en:'Make',am:'ይህን ሥሩ፦'})} <b>${esc(tx(STATES[want]))}</b></div>
     <div class="row"><button class="btn" data-act="heat" ${st.s===2?'disabled':''} style="border-color:var(--clay)">${tx({en:'Heat',am:'አሙቁ'})}</button><button class="btn" data-act="cool" ${st.s===0?'disabled':''} style="border-color:var(--blue)">${tx({en:'Cool',am:'አቀዝቅዙ'})}</button></div>
     <div class="feedback ${st.cls}" aria-live="polite">${st.msg}</div><div class="progress">${tx({en:'Changes made: {n}/4',am:'የተሠሩ ለውጦች፦ {n}/4'},{n:st.done})}</div></div></div>`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
    const from=ORDER[st.s];if(b.dataset.act==='heat')st.s++;if(b.dataset.act==='cool')st.s--;const to=ORDER[st.s];api.S.tick();
    const name={'solid>liquid':{en:'Melting',am:'መቅለጥ'},'liquid>gas':{en:'Evaporating (boiling)',am:'መትነን'},'gas>liquid':{en:'Condensing',am:'መጠራቀም (ጤዛ)'},'liquid>solid':{en:'Freezing',am:'መርጋት (በረዶ መሆን)'}}[from+'>'+to];
    st.msg=tx(name);st.cls='';
    if(to===want){st.done++;st.cls='good';st.msg+=' — '+tx(api.UI.good);api.S.yay();if(st.done>=4)api.complete()}
    api.rerender()}}},
 {title:{en:'Light and life',am:'ብርሃንና ሕይወት'},type:'quiz',
  tip:{en:'The sun is our main source of light. Plants need sunlight to make their food. Animals eat plants, and people eat plants and animals. So all life needs the sun!',am:'ዋነኛ የብርሃን ምንጫችን ፀሐይ ናት። እጽዋት ምግባቸውን ለማዘጋጀት የፀሐይ ብርሃን ያስፈልጋቸዋል። እንስሳት እጽዋትን ይመገባሉ፤ ሰዎች ደግሞ እጽዋትንና እንስሳትን ይመገባሉ። ስለዚህ ሕይወት ሁሉ ፀሐይን ይፈልጋል!'},
  items:[
   {q:{en:'What is our main source of light?',am:'ዋነኛ የብርሃን ምንጫችን ምንድን ነው?'},o:[{en:'The moon',am:'ጨረቃ'},{en:'The sun',am:'ፀሐይ'},{en:'A lamp',am:'ፋኖስ'},{en:'Fire',am:'እሳት'}],a:1},
   {q:{en:'Experiment: one seed grows in the sun, one grows in a dark box. What will happen to the seed in the dark?',am:'ሙከራ፦ አንዱ ዘር በፀሐይ፣ ሌላው በጨለማ ሳጥን ውስጥ ይበቅላል። በጨለማ ያለው ዘር ምን ይሆናል?'},o:[{en:'It grows greener',am:'የበለጠ አረንጓዴ ይሆናል'},{en:'It grows pale and weak',am:'ገርጥቶ ይደክማል'},{en:'It grows into a tree at once',am:'ወዲያው ዛፍ ይሆናል'},{en:'Nothing changes',am:'ምንም አይለወጥም'}],a:1,e:{en:'Without light, the plant cannot make its food. Try it with your teacher!',am:'ያለ ብርሃን ተክሉ ምግቡን ማዘጋጀት አይችልም። ከመምህራችሁ ጋር ሞክሩት!'}},
   {q:{en:'Why do animals also need the sun?',am:'እንስሳትም ፀሐይ ለምን ያስፈልጋቸዋል?'},o:[{en:'They eat plants, and plants need the sun',am:'እጽዋትን ይመገባሉ፤ እጽዋት ደግሞ ፀሐይ ይፈልጋሉ'},{en:'They do not need it',am:'አያስፈልጋቸውም'},{en:'To read books',am:'መጽሐፍ ለማንበብ'},{en:'To swim',am:'ለመዋኘት'}],a:0},
   {q:{en:'Which is NOT a use of light?',am:'ከሚከተሉት የብርሃን ጥቅም ያልሆነው የትኛው ነው?'},o:[{en:'Seeing our surroundings',am:'አካባቢያችንን ማየት'},{en:'Giving warmth',am:'ሙቀት መስጠት'},{en:'Helping plants make food',am:'እጽዋት ምግብ እንዲሠሩ መርዳት'},{en:'Making water wet',am:'ውኃን እርጥብ ማድረግ'}],a:3}
  ]},
 {title:{en:"Thinker's challenge",am:'የአሳቢዎች ፈተና'},type:'quiz',
  tip:{en:'Use everything you learned in this chapter. Think like a scientist!',am:'በዚህ ምዕራፍ የተማራችሁትን ሁሉ ተጠቀሙ። እንደ ሳይንቲስት አስቡ!'},
  items:[
   {q:{en:'A pumped-up ball is heavier than a flat ball. What does this show?',am:'አየር የተሞላ ኳስ አየር ካልተሞላው ይከብዳል። ይህ ምን ያሳያል?'},o:[{en:'Air has weight and takes up space',am:'አየር ክብደት አለው፤ ቦታም ይይዛል'},{en:'Balls grow',am:'ኳሶች ያድጋሉ'},{en:'Air is a liquid',am:'አየር ፈሳሽ ነው'},{en:'Nothing',am:'ምንም'}],a:0},
   {q:{en:'You pour milk from a bottle into a cup. What happens to its shape?',am:'ወተትን ከጠርሙስ ወደ ኩባያ ስትገለብጡ ቅርጹ ምን ይሆናል?'},o:[{en:'It keeps the bottle shape',am:'የጠርሙሱን ቅርጽ ይይዛል'},{en:'It takes the shape of the cup',am:'የኩባያውን ቅርጽ ይይዛል'},{en:'It becomes solid',am:'ጥጥር ይሆናል'},{en:'It disappears',am:'ይጠፋል'}],a:1},
   {q:{en:'Trachoma (an eye disease) is common in our region. How can we prevent it?',am:'የአይን ማዝ (ትራኮማ) በክልላችን በስፋት ይታያል። እንዴት መከላከል እንችላለን?'},o:[{en:'Wash our face every morning and evening and use a toilet',am:'ጠዋትና ማታ ፊትን መታጠብና መጸዳጃ ቤት መጠቀም'},{en:'Rub our eyes with dirty hands',am:'ዓይንን በቆሻሻ እጅ ማሸት'},{en:'Sleep more',am:'ብዙ መተኛት'},{en:'Eat only bread',am:'ዳቦ ብቻ መብላት'}],a:0},
   {q:{en:'Lemma eats only injera every day. What is the problem?',am:'ለማ በየቀኑ እንጀራ ብቻ ይበላል። ችግሩ ምንድን ነው?'},o:[{en:'No problem at all',am:'ምንም ችግር የለም'},{en:'He is missing other food groups his body needs',am:'ሰውነቱ የሚፈልጋቸውን ሌሎች የምግብ ምድቦች አያገኝም'},{en:'Injera is not food',am:'እንጀራ ምግብ አይደለም'},{en:'He eats too little teff',am:'በጣም ትንሽ ጤፍ ይበላል'}],a:1},
   {q:{en:'When ice melts into water, is a new substance made?',am:'በረዶ ቀልጦ ውኃ ሲሆን አዲስ ቁስ ይፈጠራል?'},o:[{en:'Yes',am:'አዎ'},{en:'No, it is still water. This is a physical change.',am:'አይደለም፤ አሁንም ውኃ ነው። ይህ አካላዊ ለውጥ ነው።'}],a:1}
  ]},
 {title:{en:'Keep my body clean',am:'የግል ንጽህና'},type:'sort',
  tip:{en:'Personal hygiene means keeping our own body clean: face, hands, body, hair, teeth and nails. Wash hands with soap (or ash) before and after eating, after the toilet and after touching animals.',am:'የግል ንጽህና ማለት የራሳችንን ሰውነት ንጹህ ማድረግ ነው፦ ፊት፣ እጅ፣ ገላ፣ ፀጉር፣ ጥርስና ጥፍር። ከምግብ በፊትና በኋላ፣ ከመጸዳጃ ቤት በኋላና እንስሳትን ከነካን በኋላ እጃችንን በሳሙና (ወይም በአመድ) እንታጠብ።'},
  buckets:[{en:'Healthy habit',am:'ጤናማ ልማድ'},{en:'Brings disease',am:'በሽታ ያመጣል'}],
  items:[
   {t:{en:'Washing my face every morning and evening',am:'ጠዋትና ማታ ፊቴን መታጠብ'},b:0},
   {t:{en:'Washing hands with soap or ash after the toilet',am:'ከመጸዳጃ ቤት በኋላ በሳሙና ወይም በአመድ እጅ መታጠብ'},b:0},
   {t:{en:'Cutting my nails short',am:'ጥፍሬን ማሳጠር'},b:0},
   {t:{en:'Washing my hair and body often',am:'ፀጉሬንና ገላዬን ዘወትር መታጠብ'},b:0},
   {t:{en:'Brushing my teeth after eating',am:'ከምግብ በኋላ ጥርሴን መቦረሽ'},b:0},
   {t:{en:'Eating without washing hands after playing with animals',am:'ከእንስሳት ጋር ተጫውቶ እጅ ሳይታጠቡ መብላት'},b:1},
   {t:{en:'Going to the toilet in the open field',am:'በሜዳ ላይ መጸዳዳት'},b:1},
   {t:{en:'Letting flies sit on a dirty face',am:'ዝንቦች በቆሸሸ ፊት ላይ እንዲያርፉ መተው'},b:1},
   {t:{en:'Biting long, dirty nails',am:'ረጅምና ቆሻሻ ጥፍር መንከስ'},b:1}
  ]},
 {title:{en:'Dirt diseases',am:'በንጽህና ጉድለት የሚመጡ በሽታዎች'},type:'match',
  tip:{en:'Many diseases come from dirt: germs travel by dirty hands, flies, dirty water and food. Match each disease with how it spreads or how we stop it.',am:'ብዙ በሽታዎች ከቆሻሻ ይመጣሉ፦ ጀርሞች በቆሸሸ እጅ፣ በዝንብ፣ በቆሸሸ ውኃና ምግብ ይተላለፋሉ። እያንዳንዱን በሽታ ከሚተላለፍበት ወይም ከምንከላከልበት መንገድ ጋር አዛምዱ።'},
  rounds:[
   [[{en:'Trachoma',am:'ትራኮማ'},{en:'Flies on a dirty face → wash face daily',am:'ዝንብ በቆሸሸ ፊት → በየቀኑ ፊትን መታጠብ'}],
    [{en:'Cholera',am:'ኮሌራ'},{en:'Dirty water → boil or treat water',am:'ቆሻሻ ውኃ → ውኃ ማፍላት ወይም ማከም'}],
    [{en:'Ascaris (worms)',am:'ወስፋት'},{en:'Dirty hands, soil → wash hands, wear shoes',am:'ቆሻሻ እጅ፣ አፈር → እጅ መታጠብ፣ ጫማ ማድረግ'}]],
   [[{en:'Typhoid',am:'ታይፎይድ'},{en:'Dirty food → cover and cook food',am:'ቆሻሻ ምግብ → ምግብ መሸፈንና በደንብ ማብሰል'}],
    [{en:'Amoeba',am:'አሜባ'},{en:'Open-field toilet → use a latrine',am:'በሜዳ መጸዳዳት → መጸዳጃ ቤት መጠቀም'}],
    [{en:'Typhus',am:'ታይፈስ'},{en:'Lice in dirty clothes → wash clothes and body',am:'ቅማል በቆሸሸ ልብስ → ልብስና ገላ ማጠብ'}]]
  ]},
 {type:'notes',notes:{
 big:{en:'Healthy bodies need food from all four groups, clean habits, and the sun. Everything around us is matter: solid, liquid or gas.',am:'ጤናማ ሰውነት ከአራቱም ምድቦች ምግብ፣ የንጽህና ልማድና ፀሐይ ያስፈልገዋል። በዙሪያችን ያለው ሁሉ ቁስአካል ነው፦ ጥጥር፣ ፈሳሽ ወይም ጋዝ።'},
 points:[{en:'Food comes from plants and animals.',am:'ምግብ ከእጽዋትና ከእንስሳት ይገኛል።'},{en:'Four food groups: fruits & vegetables (protect), grains & legumes (energy, building), milk products (energy, strength), meat & eggs (building).',am:'አራቱ ምድቦች፦ አትክልትና ፍራፍሬ (ይከላከላሉ)፣ ጥራጥሬ (ኃይልና ግንባታ)፣ የወተት ውጤቶች (ኃይልና ጥንካሬ)፣ ሥጋና እንቁላል (ግንባታ)።'},{en:'Contaminated food causes diarrhoea, typhoid and cholera. Cover food, use clean water, cook well.',am:'የተበከለ ምግብ ተቅማጥ፣ ታይፎይድና ኮሌራ ያመጣል። ምግብን ሸፍኑ፣ ንጹህ ውኃ ተጠቀሙ፣ በደንብ አብስሉ።'},{en:'Solids keep their shape; liquids take the container\'s shape; gases spread to fill space.',am:'ጥጥሮች ቅርጻቸውን ይጠብቃሉ፤ ፈሳሾች የመያዣቸውን ቅርጽ ይይዛሉ፤ ጋዞች ቦታውን ይሞላሉ።'},{en:'Heat: ice → water → steam. Cooling reverses it. This is a physical change.',am:'ሙቀት፦ በረዶ → ውኃ → ትነት። ማቀዝቀዝ ይገለብጠዋል። ይህ አካላዊ ለውጥ ነው።'},{en:'Personal hygiene: wash face, hands, body and hair; cut nails; wash hands with soap or ash before and after eating, after the toilet and after touching animals. This prevents trachoma, cholera, typhoid, ascaris, amoeba and typhus.',am:'የግል ንጽህና፦ ፊት፣ እጅ፣ ገላና ፀጉር መታጠብ፤ ጥፍር ማሳጠር፤ ከምግብ በፊትና በኋላ፣ ከመጸዳጃ ቤት በኋላና እንስሳትን ከነካን በኋላ በሳሙና ወይም በአመድ እጅ መታጠብ። ይህ ትራኮማን፣ ኮሌራን፣ ታይፎይድን፣ ወስፋትን፣ አሜባንና ታይፈስን ይከላከላል።'}],
 words:[['ቁስአካል',{en:'matter',am:'ቦታ የሚይዝና ክብደት ያለው ነገር'}],['ብክለት',{en:'contamination',am:'ምግብ ወይም ውኃ ጎጂ ሲሆን'}],['አካላዊ ለውጥ',{en:'physical change',am:'አዲስ ቁስ የማይፈጠርበት ለውጥ'}]],
 remember:{en:'Balanced plate = one food from each of the four groups.',am:'የተመጣጠነ ገበታ = ከአራቱ ምድቦች ከእያንዳንዱ አንድ ምግብ።'},
 exam:[[{en:'Which group protects against disease?',am:'በሽታ የሚከላከለው ምድብ?'},{en:'Fruits and vegetables',am:'አትክልትና ፍራፍሬ'}],[{en:'Is air matter?',am:'አየር ቁስአካል ነው?'},{en:'Yes: it has weight and takes up space.',am:'አዎ፤ ክብደት አለው ቦታም ይይዛል።'}],[{en:'Water + heat → ?',am:'ውኃ + ሙቀት → ?'},{en:'Steam (gas)',am:'ትነት (ጋዝ)'}],[{en:'How do we prevent trachoma?',am:'ትራኮማን እንዴት እንከላከላለን?'},{en:'Wash the face daily and use a toilet.',am:'በየቀኑ ፊትን መታጠብና መጸዳጃ ቤት መጠቀም።'}]],
 innovate:{title:{en:'Container kitchen garden',am:'የዕቃ ውስጥ የጓሮ አትክልት'},text:{en:'Many families lack vegetables. Grow vegetables in old buckets, tins or broken pots, like your book suggests.',am:'ብዙ ቤተሰቦች አትክልት ያጥራቸዋል። መጽሐፋችሁ እንደሚጠቁመው በአሮጌ ባልዲ፣ ጣሳ ወይም በተሰበረ እንስራ አትክልት አብቅሉ።'},
  steps:[{en:'Collect old containers and good soil.',am:'አሮጌ ዕቃዎችንና ጥሩ አፈር ሰብስቡ።'},{en:'Plant seeds (cabbage, onion, tomato) and place them in sunlight.',am:'ዘር (ጎመን፣ ሽንኩርት፣ ቲማቲም) ዝሩ፤ ፀሐይ ባለበት አስቀምጡ።'},{en:'Water daily and record growth in a notebook.',am:'በየቀኑ አጠጡ፤ እድገቱን በደብተር መዝግቡ።'},{en:'Use them for a balanced meal, or sell extra and count your profit.',am:'ለተመጣጠነ ምግብ ተጠቀሙባቸው፤ ወይም ትርፉን ሽጣችሁ ትርፋችሁን ቁጠሩ።'}]}}}
 ]});
})();
