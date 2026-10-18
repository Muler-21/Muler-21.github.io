/* አካባቢ ሳይንስ · ምዕራፍ 4 · ማህበራዊ አካባቢ */
(function(){
const {tx,esc}=G3;
const SELL=[{en:'Bag of teff',am:'ከረጢት ጤፍ',p:300},{en:'Jar of honey',am:'ማሰሮ ማር',p:200},{en:'Butter',am:'ቅቤ',p:150},{en:'Ten eggs',am:'አሥር እንቁላል',p:100}];
const BUY=[{en:'Sugar',am:'ስኳር',p:120},{en:'Cooking oil',am:'ዘይት',p:180},{en:'Soap',am:'ሳሙና',p:50},{en:'Salt',am:'ጨው',p:30},{en:'Exercise book',am:'ደብተር',p:40}];
const NEED=BUY.reduce((s,b)=>s+b.p,0);
Unit.start({
 id:'env-4',subject:'env',
 subjectName:{en:'Environmental Science',am:'አካባቢ ሳይንስ'},chapter:{en:'Chapter 4',am:'ምዕራፍ 4'},
 title:{en:'Our Social Environment',am:'ማህበራዊ አካባቢ'},
 footer:{en:'Built on the Grade 3 Environmental Science student book (ANRS Education Bureau), Chapter 4: culture, diversity and economic activities.',am:'በ3ኛ ክፍል የአካባቢ ሳይንስ መጽሐፍ (አብክመ ትምህርት ቢሮ) ምዕራፍ 4 ላይ የተመሰረተ፦ ባህል፣ ብዝሀነትና የምጣኔ ሀብት እንቅስቃሴዎች።'},
 missions:[
 {title:{en:'Saturday market',am:'የቅዳሜ ገበያ'},type:'quiz',
  tip:{en:'Read about a busy market town, then answer.',am:'ስለ አንድ ሞቅ ያለ የገበያ ከተማ አንብቡ፤ ከዚያ መልሱ።'},
  passage:{title:{en:'Our Town',am:'የኛ ከተማ'},paras:{
   en:['The people of our town have different religions and speak different languages, but they live and work together. Most of them earn a living from farming.','Every Saturday morning, farmers come to town on horses, donkeys and cars. Some bring teff, wheat, maize, peas and beans. Others bring goats, sheep, oxen, honey and butter.','Town people buy these farm products. The farmers then buy factory products such as sugar, oil, shoes, clothes, iron sheets and nails, and go back home.'],
   am:['የኛ ከተማ ነዋሪዎች የተለያየ ሃይማኖት አላቸው፤ የተለያዩ ቋንቋዎችንም ይናገራሉ፤ ግን አብረው ይኖራሉ፣ ይሠራሉ። አብዛኞቹ የሚተዳደሩት በግብርና ነው።','በየቅዳሜው ጠዋት አርሶ አደሮች በፈረስ፣ በአህያና በመኪና ወደ ከተማ ይመጣሉ። አንዳንዶቹ ጤፍ፣ ስንዴ፣ በቆሎ፣ አተርና ባቄላ ያመጣሉ። ሌሎቹ ፍየል፣ በግ፣ በሬ፣ ማርና ቅቤ ያመጣሉ።','የከተማው ነዋሪ እነዚህን የእርሻ ምርቶች ይገዛል። አርሶ አደሮቹ ደግሞ ስኳር፣ ዘይት፣ ጫማ፣ ልብስ፣ ቆርቆሮና ምስማር የመሳሰሉ የፋብሪካ ውጤቶችን ገዝተው ወደ ቤታቸው ይመለሳሉ።']}},
  items:[
   {q:{en:'What shows cultural diversity in our town?',am:'በከተማችን የባህል ብዝሀነትን የሚያሳየው ምንድን ነው?'},o:[{en:'Different religions and languages',am:'የተለያዩ ሃይማኖቶችና ቋንቋዎች'},{en:'Only one language',am:'አንድ ቋንቋ ብቻ'},{en:'The market day',am:'የገበያ ቀኑ'}],a:0},
   {q:{en:'What do most people in the town live on?',am:'የከተማው አብዛኛው ሰው የሚተዳደረው በምንድን ነው?'},o:[{en:'Farming (agriculture)',am:'በግብርና'},{en:'Mining',am:'በማዕድን'},{en:'Fishing',am:'በዓሣ ማጥመድ'}],a:0},
   {q:{en:'What do farmers buy at the market?',am:'አርሶ አደሮች ከገበያ ምን ይገዛሉ?'},o:[{en:'Factory products like sugar and oil',am:'እንደ ስኳርና ዘይት ያሉ የፋብሪካ ውጤቶች'},{en:'Teff and beans',am:'ጤፍና ባቄላ'},{en:'Nothing',am:'ምንም'}],a:0},
   {q:{en:'Selling and buying between people is called…',am:'በሰዎች መካከል የሚደረግ መሸጥና መግዛት ምን ይባላል?'},o:[{en:'Trade (marketing)',am:'ግብይት'},{en:'Culture',am:'ባህል'},{en:'Transport',am:'ትራንስፖርት'}],a:0}]},
 {title:{en:'Helpful or harmful practice?',am:'ጠቃሚ ወይስ ጎጂ ልማድ?'},type:'sort',
  tip:{en:'Culture is the way of life of a people: language, religion, food, clothes, songs. Some traditional practices are helpful and we keep them; harmful ones must stop. Sort each practice.',am:'ባህል የአንድ ሕዝብ የአኗኗር ዘይቤ ነው፦ ቋንቋ፣ ሃይማኖት፣ ምግብ፣ አለባበስ፣ ዘፈን። አንዳንድ ልማዳዊ ድርጊቶች ጠቃሚ ናቸው፤ እንጠብቃቸዋለን። ጎጂዎቹ መቆም አለባቸው። እያንዳንዱን ድርጊት መድቡ።'},
  buckets:[{en:'Helpful: keep it',am:'ጠቃሚ፦ እንጠብቀው'},{en:'Harmful: stop it',am:'ጎጂ፦ እናስቁመው'}],
  items:[{t:{en:'Welcoming guests warmly',am:'እንግዳን በክብር መቀበል'},b:0},{t:{en:'Helping and caring for elders',am:'አረጋውያንን መርዳትና መንከባከብ'},b:0},{t:{en:'Traditional peace-making by elders (shimglina)',am:'ባህላዊ ሽምግልና'},b:0},{t:{en:'Respecting work',am:'ሥራን ማክበር'},b:0},{t:{en:'Wearing traditional clothes on holidays',am:'በበዓል ባህላዊ ልብስ መልበስ'},b:0},
   {t:{en:'Marriage before the right age',am:'ያለ ዕድሜ ጋብቻ'},b:1},{t:{en:'Cutting the uvula (intil)',am:'እንጥል መቁረጥ'},b:1},{t:{en:'Spending more than you have on a feast',am:'ከአቅም በላይ መደገስ'},b:1},{t:{en:'Drunkenness',am:'ስካር'},b:1}]},
 {title:{en:'Climate shapes culture',am:'የአየር ንብረት በባህል ላይ'},type:'sort',
  tip:{en:'What people grow, raise, wear and build depends on climate. People in Dega raise horses; people in hot lowlands raise camels. Put each product in its climate zone.',am:'ሰዎች የሚያመርቱት፣ የሚያረቡት፣ የሚለብሱትና የሚሠሩት በአየር ንብረት ይወሰናል። በደጋ ፈረስ ይረባል፤ በሞቃት ቆላ ግመል ይረባል። እያንዳንዱን ምርት በአየር ንብረት ክልሉ አስቀምጡ።'},
  buckets:[{en:'Dega',am:'ደጋ'},{en:'Woina Dega',am:'ወይና ደጋ'},{en:'Kolla',am:'ቆላ'},{en:'Bereha',am:'በረሃ'}],
  items:[{t:{en:'Potato',am:'ድንች'},b:0},{t:{en:'Barley',am:'ገብስ'},b:0},{t:{en:'Maize',am:'በቆሎ'},b:1},{t:{en:'Teff',am:'ጤፍ'},b:1},{t:{en:'Cotton',am:'ጥጥ'},b:2},{t:{en:'Sesame',am:'ሰሊጥ'},b:2},{t:{en:'Incense',am:'እጣን'},b:3},{t:{en:'Camel',am:'ግመል'},b:3}]},
 {title:{en:'Market day: be a smart farmer',am:'የገበያ ቀን፦ ብልህ አርሶ አደር ሁኑ'},type:'custom',
  tip:{en:'You are a farmer at the Saturday market. Your family needs 5 things from the shop list. Sell some farm products to get money, buy all 5 needs, and try to keep money left over as savings.',am:'እናንተ በቅዳሜ ገበያ ያላችሁ አርሶ አደር ናችሁ። ቤተሰባችሁ ከግዢ ዝርዝሩ 5 ነገሮች ያስፈልጉታል። ገንዘብ ለማግኘት የተወሰኑ የእርሻ ምርቶችን ሽጡ፣ 5ቱን ፍላጎቶች ግዙ፣ የተረፈውን ገንዘብ ለቁጠባ ለማስቀመጥ ሞክሩ።'},
  init(st){st.sold={};st.bought={};st.msg='';st.cls='';st.done=false},
  render(p,api,st){const money=SELL.reduce((s,x,i)=>s+(st.sold[i]?x.p:0),0)-BUY.reduce((s,x,i)=>s+(st.bought[i]?x.p:0),0);
   const nb=BUY.filter((_,i)=>st.bought[i]).length;const unsold=SELL.filter((_,i)=>!st.sold[i]);
   const coin=`<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#F4B400" stroke="#C98F00" stroke-width="2"/><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="700" fill="#5A4300">ብር</text></svg>`;
   p.innerHTML=`<div class="row" style="justify-content:space-between"><span class="pill" style="font-size:1.1rem;gap:6px">${coin}<b class="num">${money}</b> ${tx({en:'birr',am:'ብር'})}</span><span class="progress">${tx({en:'Needs bought: {n}/5 (total cost {t} birr)',am:'የተገዙ ፍላጎቶች፦ {n}/5 (ጠቅላላ ዋጋ {t} ብር)'},{n:nb,t:NEED})}</span></div>
    <div class="row" style="align-items:flex-start;gap:16px">
     <div style="flex:1 1 240px;min-width:0"><h3 style="margin:.2em 0">${tx({en:'Sell from your farm',am:'ከእርሻችሁ ሽጡ'})}</h3><div class="tiles">${SELL.map((x,i)=>`<button class="tile" data-s="${i}" ${st.sold[i]||st.done?'disabled':''} style="${st.sold[i]?'opacity:.45':''}">${esc(tx(x))}<br><b>+${x.p}</b></button>`).join('')}</div></div>
     <div style="flex:1 1 240px;min-width:0"><h3 style="margin:.2em 0">${tx({en:'Buy for your family',am:'ለቤተሰባችሁ ግዙ'})}</h3><div class="tiles">${BUY.map((x,i)=>`<button class="tile" data-b="${i}" ${st.bought[i]||st.done?'disabled':''} style="${st.bought[i]?'border-color:var(--green);background:var(--accent-soft)':''}">${st.bought[i]?'✓ ':''}${esc(tx(x))}<br><b>−${x.p}</b></button>`).join('')}</div></div></div>
    <div class="feedback ${st.cls}">${st.msg}</div>
    ${st.done?`<div class="explain">${tx({en:'Market finished! You saved {m} birr and still have {u} at home to sell another day. Smart farmers sell only what they need and save the rest. Savings can buy seeds, a beehive or a sheep, so money grows!',am:'ገበያው አለቀ! {m} ብር ቆጠባችሁ፤ ሌላ ቀን የምትሸጡትም {u} ቤት አላችሁ። ብልህ አርሶ አደር የሚያስፈልገውን ብቻ ሸጦ ቀሪውን ይቆጥባል። ቁጠባ ዘር፣ ቀፎ ወይም በግ ይገዛል፤ ገንዘብም ያድጋል!'},{m:money,u:unsold.length?unsold.map(x=>tx(x)).join(', '):tx({en:'nothing',am:'ምንም'})})}</div><div><button class="btn" data-act="again">${tx(api.UI.playAgain)}</button></div>`:''}`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
    if(b.dataset.act==='again'){st.sold={};st.bought={};st.msg='';st.done=false;api.rerender();return}
    if(b.dataset.s!==undefined){st.sold[+b.dataset.s]=true;st.msg=tx({en:'Sold! Money in your pocket.',am:'ተሸጠ! ገንዘብ በኪሳችሁ።'});st.cls='good';api.S.tone([880,1175],.07)}
    if(b.dataset.b!==undefined){const i=+b.dataset.b;if(money>=BUY[i].p){st.bought[i]=true;st.msg='';api.S.tick();
      if(BUY.every((_,j)=>st.bought[j])){st.done=true;api.complete()}}
     else{st.msg=tx({en:'Not enough money. Sell something first.',am:'በቂ ገንዘብ የለም። መጀመሪያ የሆነ ነገር ሽጡ።'});st.cls='bad';api.S.nope()}}
    api.rerender()}}},
 {title:{en:'Raw material to product',am:'ከጥሬ ዕቃ ወደ ምርት'},type:'match',
  tip:{en:'Industry changes farm and mineral products into new, useful goods. Cottage industry works by hand at home; modern industry uses machines in factories. Match each raw material with what it becomes.',am:'ኢንዱስትሪ የእርሻና የማዕድን ምርቶችን ወደ አዲስ ጠቃሚ ዕቃ ይለውጣል። የጎጆ ኢንዱስትሪ በእጅ ቤት ውስጥ ይሠራል፤ ዘመናዊ ኢንዱስትሪ በፋብሪካ ማሽን ይጠቀማል። እያንዳንዱን ጥሬ ዕቃ ከሚሆነው ጋር አዛምዱ።'},
  rounds:[[[{en:'Clay soil',am:'የሸክላ አፈር'},{en:'Water pot (insera) and mitad',am:'እንስራና ምጣድ'}],[{en:'Cotton',am:'ጥጥ'},{en:'Gabi, netela and cloth',am:'ጋቢ፣ ነጠላና ጨርቅ'}],[{en:'Animal hide',am:'የእንስሳት ቆዳ'},{en:'Shoes and bags',am:'ጫማና ቦርሳ'}],[{en:'Sugar cane',am:'የሸንኮራ አገዳ'},{en:'Sugar',am:'ስኳር'}],[{en:'Wood pulp',am:'የእንጨት ጭማቂ'},{en:'Paper',am:'ወረቀት'}],[{en:'Iron ore',am:'የብረት ማዕድን'},{en:'Nails and iron sheets',am:'ምስማርና ቆርቆሮ'}]]]},
 {title:{en:'Cottage or modern industry?',am:'የጎጆ ወይስ ዘመናዊ ኢንዱስትሪ?'},type:'sort',
  tip:{en:'Sort each product: made by hand at home (cottage) or by machines in a factory (modern)?',am:'እያንዳንዱን ምርት መድቡ፦ በቤት ውስጥ በእጅ የተሠራ (ጎጆ) ወይስ በፋብሪካ በማሽን የተሠራ (ዘመናዊ)?'},
  buckets:[{en:'Cottage industry',am:'የጎጆ ኢንዱስትሪ'},{en:'Modern industry',am:'ዘመናዊ ኢንዱስትሪ'}],
  items:[{t:{en:'Clay pot',am:'የሸክላ ድስት'},b:0},{t:{en:'Hand-woven netela',am:'በእጅ የተሸመነ ነጠላ'},b:0},{t:{en:'Habesha dress',am:'የሐበሻ ቀሚስ'},b:0},{t:{en:'Blacksmith\'s plough tip',am:'የአንጥረኛ ማረሻ'},b:0},{t:{en:'Packed cooking oil',am:'የታሸገ ዘይት'},b:1},{t:{en:'Factory blanket',am:'የፋብሪካ ብርድ ልብስ'},b:1},{t:{en:'Bottled soft drink',am:'የታሸገ ለስላሳ መጠጥ'},b:1},{t:{en:'Packed sugar',am:'የታሸገ ስኳር'},b:1}]},
 {title:{en:'Traditional or modern transport?',am:'ባህላዊ ወይስ ዘመናዊ መጓጓዣ?'},type:'sort',
  tip:{en:'Transport carries people and goods from where they are made to where they are needed. It is like the blood vessels of a country. Sort each kind.',am:'ትራንስፖርት ሰዎችንና ዕቃዎችን ከሚመረቱበት ወደሚፈለጉበት ያደርሳል። ለሀገር እድገት እንደ ደም ሥር ነው። እያንዳንዱን መድቡ።'},
  buckets:[{en:'Traditional',am:'ባህላዊ'},{en:'Modern',am:'ዘመናዊ'}],
  items:[{t:{en:'Donkey',am:'አህያ'},b:0},{t:{en:'Mule',am:'በቅሎ'},b:0},{t:{en:'Horse',am:'ፈረስ'},b:0},{t:{en:'Camel, "the ship of the desert"',am:'ግመል፣ “የበረሃ መርከብ”'},b:0,why:{en:'Camels carry heavy loads across the hot desert for days without water.',am:'ግመል ያለ ውኃ ለቀናት ከባድ ጭነት ተሸክሞ በረሃን ያቋርጣል።'}},{t:{en:'Bajaj',am:'ባጃጅ'},b:1},{t:{en:'Train',am:'ባቡር'},b:1},{t:{en:'Bus',am:'አውቶቡስ'},b:1},{t:{en:'Aeroplane',am:'አውሮፕላን'},b:1}]},
 {type:'exam',items:[
   {q:{en:'Which shows cultural diversity?',am:'የባህል ብዝሀነትን የሚያሳየው የትኛው ነው?'},o:[{en:'All of these',am:'ሁሉም'},{en:'Language',am:'ቋንቋ'},{en:'Religion',am:'ሃይማኖት'},{en:'Food preparation',am:'የምግብ አዘገጃጀት'}],a:0},
   {q:{en:'Which practice is accepted by the community?',am:'በማህበረሰቡ ዘንድ ተቀባይነት ያለው ድርጊት የትኛው ነው?'},o:[{en:'Respecting guests',am:'እንግዳ ማክበር'},{en:'Early marriage',am:'ያለ ዕድሜ ጋብቻ'},{en:'Drunkenness',am:'ስካር'}],a:0},
   {q:{en:'The backbone of our country\'s economy is…',am:'የሀገራችን ምጣኔ ሀብት የጀርባ አጥንት…'},o:[{en:'Agriculture',am:'ግብርና'},{en:'Tourism',am:'ቱሪዝም'},{en:'Industry',am:'ኢንዱስትሪ'}],a:0,e:{en:'About 82% of our people live on agriculture.',am:'82 በመቶ ገደማ የሚሆነው ሕዝባችን የሚተዳደረው በግብርና ነው።'}},
   {q:{en:'Which is NOT a pack animal (gama kebt)?',am:'ከጋማ ከብቶች የማይመደበው የትኛው ነው?'},o:[{en:'Cow',am:'ላም'},{en:'Horse',am:'ፈረስ'},{en:'Donkey',am:'አህያ'}],a:0},
   {q:{en:'Which natural resource is raw material for cottage industry?',am:'ለጎጆ ኢንዱስትሪ ጥሬ ዕቃ የሚሆነው የተፈጥሮ ሀብት የትኛው ነው?'},o:[{en:'Clay soil',am:'የሸክላ አፈር'},{en:'Maize',am:'በቆሎ'},{en:'Sand',am:'አሸዋ'}],a:0},
   {q:{en:'Selling sand and cutting forests for charcoal can cause…',am:'አሸዋ መሸጥና ለከሰል ደን መቁረጥ ምን ያስከትላል?'},o:[{en:'Erosion and drying rivers',am:'የአፈር መሸርሸርና የወንዝ መድረቅ'},{en:'More forests',am:'ብዙ ደን'},{en:'Nothing',am:'ምንም'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Culture is our way of life, and many cultures living together is diversity. Our economy runs on agriculture, industry and trade, and transport connects them.',am:'ባህል የአኗኗር ዘይቤያችን ነው፤ ብዙ ባህሎች አብረው መኖራቸው ብዝሀነት ነው። ምጣኔ ሀብታችን በግብርና፣ በኢንዱስትሪና በንግድ ይንቀሳቀሳል፤ ትራንስፖርት ያገናኛቸዋል።'},
  points:[
   {en:'Helpful practices: respecting guests and elders, shimglina, helping each other, loving work.',am:'ጠቃሚ ልማዶች፦ እንግዳና ታላቅ ማክበር፣ ሽምግልና፣ መረዳዳት፣ ሥራ መውደድ።'},
   {en:'Harmful practices: early marriage, cutting the uvula, overspending on feasts.',am:'ጎጂ ልማዶች፦ ያለ ዕድሜ ጋብቻ፣ እንጥል መቁረጥ፣ ከአቅም በላይ ድግስ።'},
   {en:'Agriculture = crops + livestock. About 82% of Ethiopians live on it.',am:'ግብርና = ሰብል + የእንስሳት እርባታ። 82% ገደማ ኢትዮጵያውያን ይተዳደሩበታል።'},
   {en:'Industry: cottage (by hand) and modern (factory).',am:'ኢንዱስትሪ፦ ጎጆ (በእጅ) እና ዘመናዊ (በፋብሪካ)።'},
   {en:'Transport: traditional (donkey, mule, horse, camel) and modern (bajaj, car, train, aeroplane).',am:'ትራንስፖርት፦ ባህላዊ (አህያ፣ በቅሎ፣ ፈረስ፣ ግመል) እና ዘመናዊ (ባጃጅ፣ መኪና፣ ባቡር፣ አውሮፕላን)።'}],
  words:[[{en:'Culture',am:'ባህል'},{en:'way of life of a people',am:'የሕዝብ የአኗኗር ዘይቤ'}],[{en:'Economy',am:'ምጣኔ ሀብት'},{en:'daily activities to meet our needs',am:'ፍላጎታችንን ለማሟላት የምናደርገው እንቅስቃሴ'}],[{en:'Trade',am:'ግብይት'},{en:'selling and buying (exchange)',am:'መሸጥና መግዛት (ልውውጥ)'}]],
  remember:{en:'Raw material + work = more valuable product. That is how industry creates jobs.',am:'ጥሬ ዕቃ + ሥራ = የበለጠ ዋጋ ያለው ምርት። ኢንዱስትሪ የሥራ ዕድል የሚፈጥረው እንዲህ ነው።'},
  exam:[[{en:'What is culture?',am:'ባህል ምንድን ነው?'},{en:'The way of life of a community',am:'የአንድ ማህበረሰብ የአኗኗር ዘይቤ'}],[{en:'Give two cottage industry products.',am:'ሁለት የጎጆ ኢንዱስትሪ ውጤቶችን ጥቀሱ።'},{en:'clay pot, gabi (also netela, mitad)',am:'የሸክላ ድስት፣ ጋቢ (ነጠላ፣ ምጣድም)'}],[{en:'Which animal is "the ship of the desert"?',am:'“የበረሃ መርከብ” የሚባለው እንስሳ?'},{en:'Camel',am:'ግመል'}]],
  innovate:{title:{en:'Add value, earn more',am:'እሴት ጨምሩ፤ የበለጠ አግኙ'},text:{en:'A farmer who sells raw milk earns a little. One who makes butter, cheese (ayib) or yoghurt (ergo) earns more. Find a product in your area and plan how to add value to it.',am:'ጥሬ ወተት የሚሸጥ አርሶ አደር ትንሽ ያገኛል። ቅቤ፣ አይብ ወይም እርጎ የሚሠራ ግን የበለጠ ያገኛል። በአካባቢያችሁ ያለ ምርት ፈልጋችሁ እሴት እንዴት እንደምትጨምሩበት አቅዱ።'},
   steps:[{en:'Choose a raw product: milk, honey, cotton, clay or grain.',am:'ጥሬ ምርት ምረጡ፦ ወተት፣ ማር፣ ጥጥ፣ ሸክላ ወይም እህል።'},{en:'Ask a family member how to turn it into something better.',am:'ወደ ተሻለ ምርት እንዴት እንደሚለወጥ የቤተሰብ አባል ጠይቁ።'},{en:'Find the price of the raw product and of the finished product at the market.',am:'በገበያ የጥሬውንና የተሠራውን ምርት ዋጋ ፈልጉ።'},{en:'Calculate: how much more money does the work add?',am:'አስሉ፦ ሥራው ስንት ብር ይጨምራል?'}]}}}
 ]});
})();
