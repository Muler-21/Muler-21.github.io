/* ሥነ ጥበባት · ምዕራፍ 4 · ሥነ ጥበባትን ማድነቅ */
(function(){
const {tx,esc}=G3;
/* an original painting for the gallery mission: evening market under the hills */
const PAINT=`<svg viewBox="0 0 320 210" role="img" aria-label="painting" style="width:min(440px,100%);height:auto;border:10px solid #8A5A2B;border-radius:6px;box-shadow:0 3px 12px #0003">
 <defs><linearGradient id="sky4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F7A440"/><stop offset="1" stop-color="#FCE3A6"/></linearGradient></defs>
 <rect width="320" height="210" fill="url(#sky4)"/><circle cx="250" cy="70" r="26" fill="#FFF3C4"/>
 <path d="M0 120Q60 70 120 112T240 100T320 110V210H0Z" fill="#6A8F4E"/><path d="M0 150Q80 120 160 148T320 140V210H0Z" fill="#4E7A3A"/>
 <g transform="translate(60 132)"><path d="M0 30L22 6L44 30Z" fill="#B5793F"/><rect x="6" y="30" width="32" height="26" fill="#E6C79A"/><rect x="18" y="40" width="8" height="16" fill="#5A3A1A"/></g>
 ${[150,180,210,240].map((x,i)=>`<g transform="translate(${x} ${168-(i%2)*4})"><circle cx="0" cy="-20" r="5" fill="#5A3A1A"/><path d="M-7 -14h14l4 22h-22z" fill="${['#D9483B','#FFFFFF','#2F6FDE','#F4B400'][i]}"/></g>`).join('')}
 <ellipse cx="280" cy="180" rx="16" ry="9" fill="#C0742E"/><ellipse cx="280" cy="174" rx="10" ry="4" fill="#9A5B22"/></svg>`;
const STEPS=[
 {q:{en:'1. DESCRIBE: What do you see?',am:'1. ግለጹ፦ ምን ታያላችሁ?'},o:[{en:'Hills, a sunset, a hut, people and a clay pot',am:'ኮረብቶች፣ ፀሐይ ስትጠልቅ፣ ጎጆ፣ ሰዎችና የሸክላ ዕቃ'},{en:'A city with tall buildings',am:'ረጃጅም ሕንፃዎች ያሉት ከተማ'},{en:'The sea and ships',am:'ባሕርና መርከቦች'}],a:0},
 {q:{en:'2. ANALYSE: Which colours are used most?',am:'2. ተንትኑ፦ በብዛት የተጠቀመባቸው ቀለሞች የትኞቹ ናቸው?'},o:[{en:'Warm orange and yellow, and green',am:'ሞቃት ብርቱካናማና ቢጫ፣ እና አረንጓዴ'},{en:'Only black and white',am:'ጥቁርና ነጭ ብቻ'},{en:'Only purple',am:'ሐምራዊ ብቻ'}],a:0},
 {q:{en:'3. INTERPRET: What feeling does it give?',am:'3. ተርጉሙ፦ ምን ስሜት ይሰጣል?'},o:[{en:'A calm, warm evening in the countryside',am:'በገጠር የተረጋጋና ሞቃት ምሽት'},{en:'Fear and danger',am:'ፍርሃትና አደጋ'},{en:'A cold snowy night',am:'ቀዝቃዛ የበረዶ ሌሊት'}],a:0},
 {q:{en:'4. JUDGE: What is a good way to share your opinion?',am:'4. ፍረዱ፦ አስተያየትን ለመግለጽ ጥሩው መንገድ የትኛው ነው?'},o:[{en:'"I like the warm colours because they feel peaceful."',am:'“ሞቃት ቀለሞቹ ሰላም ስለሚሰጡ ወድጃቸዋለሁ።”'},{en:'"It is bad." (with no reason)',am:'“መጥፎ ነው።” (ያለ ምክንያት)'},{en:'Laugh at the artist',am:'በሠዓሊው መሳቅ'}],a:0}];
Unit.start({
 id:'art-4',subject:'art',
 subjectName:{en:'Performing & Visual Arts',am:'ሥነ ጥበባት'},chapter:{en:'Chapter 4',am:'ምዕራፍ 4'},
 title:{en:'Appreciating Art',am:'ሥነ ጥበባትን ማድነቅ'},
 footer:{en:'Built on the Grade 3 Performing & Visual Arts student book (ANRS Education Bureau), Chapter 4. The painting on this page is an original made for this platform.',am:'በ3ኛ ክፍል የሥነ ጥበባት መጽሐፍ (አብክመ ትምህርት ቢሮ) ምዕራፍ 4 ላይ የተመሰረተ። በዚህ ገጽ ያለው ስዕል ለዚህ መድረክ የተሠራ አዲስ ሥራ ነው።'},
 missions:[
 {title:{en:'Gallery visit: look like an art critic',am:'የስዕል ማሳያ ጉብኝት፦ እንደ ጥበብ ሀያሲ ተመልከቱ'},type:'custom',
  tip:{en:'Appreciating art means looking carefully and giving thoughtful praise. Art critics use 4 steps: describe, analyse, interpret, judge. Look at this painting and try all four.',am:'ጥበብን ማድነቅ ማለት በጥንቃቄ መመልከትና በአስተሳሰብ ማድነቅ ነው። የጥበብ ሀያስያን 4 ደረጃዎችን ይጠቀማሉ፦ መግለጽ፣ መተንተን፣ መተርጎም፣ መፍረድ። ይህን ስዕል ተመልከቱና አራቱንም ሞክሩ።'},
  init(st){st.k=0;st.picked=null},
  render(p,api,st){const it=STEPS[st.k];
   p.innerHTML=`<div class="row" style="align-items:flex-start;gap:18px"><div style="flex:1 1 300px;min-width:0;text-align:center">${PAINT}<div class="small" style="margin-top:6px">${tx({en:'"Evening Market", made for AMBKidsJoy',am:'“የምሽት ገበያ”፣ ለAMBKidsJoy የተሠራ'})}</div></div>
    <div style="flex:1 1 260px;min-width:0;display:grid;gap:10px">${it?`<div class="q"><span class="qt">${esc(tx(it.q))}</span></div><div class="opts long">${it.o.map((o,j)=>`<button class="opt ${st.picked===j?(j===it.a?'right':'wrong'):''}" data-j="${j}" ${st.picked===it.a?'disabled':''}>${esc(tx(o))}</button>`).join('')}</div>
     ${st.picked===it.a?`<div><button class="btn primary" data-act="next">${tx(api.UI.next)}</button></div>`:st.picked!==null?`<div class="feedback bad">${tx(api.UI.bad)}</div>`:''}`
     :`<div class="explain">${tx({en:'You looked like a real critic! Describe → analyse → interpret → judge works for paintings, sculptures, dances, music and buildings. Always give a reason for your opinion.',am:'እንደ እውነተኛ ሀያሲ ተመለከታችሁ! መግለጽ → መተንተን → መተርጎም → መፍረድ ለስዕል፣ ለኪነ ቅርጽ፣ ለጭፈራ፣ ለሙዚቃና ለሕንፃ ይሠራል። ለአስተያየታችሁ ሁልጊዜ ምክንያት ስጡ።'})}</div>`}</div></div>`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
    if(b.dataset.j!==undefined){st.picked=+b.dataset.j;st.picked===it.a?api.S.yay():api.S.nope()}
    if(b.dataset.act==='next'){st.k++;st.picked=null;if(st.k>=STEPS.length)api.complete()}
    api.rerender()}}},
 {title:{en:'Kinds of art',am:'የሥነ ጥበብ ዓይነቶች'},type:'match',
  tip:{en:'Art comes in many forms. Match each kind of art with an example.',am:'ሥነ ጥበብ ብዙ ዓይነቶች አሉት። እያንዳንዱን ዓይነት ከምሳሌው ጋር አዛምዱ።'},
  rounds:[[[{en:'Painting',am:'የቀለም ቅብ'},{en:'Colours on canvas or a church wall',am:'በሸራ ወይም በቤተ ክርስቲያን ግድግዳ ላይ ያሉ ቀለሞች'}],[{en:'Sculpture',am:'ኪነ ቅርጽ'},{en:'A figure carved from wood or stone',am:'ከእንጨት ወይም ከድንጋይ የተቀረጸ ምስል'}],[{en:'Architecture',am:'ኪነ ሕንፃ'},{en:'The rock-hewn churches of Lalibela',am:'የላሊበላ ውቅር አብያተ ክርስቲያናት'}],[{en:'Craft',am:'እደ ጥበብ'},{en:'Clay pots and woven baskets',am:'የሸክላ ዕቃና ሰፌድ'}],[{en:'Photography',am:'ፎቶግራፍ'},{en:'A picture of the Blue Nile Falls taken with a camera',am:'በካሜራ የተነሳ የጢስ አባይ ፏፏቴ ምስል'}],[{en:'Performing arts',am:'የክዋኔ ጥበብ'},{en:'Music, dance and theatre',am:'ሙዚቃ፣ ውዝዋዜና ቴአትር'}]]]},
 {title:{en:'Made by people or by nature?',am:'በሰው የተሠራ ወይስ በተፈጥሮ?'},type:'sort',
  tip:{en:'We visit and admire both heritage that people built and wonders that nature made. Sort each place.',am:'ሰዎች የገነቡትንም ተፈጥሮ የሠራቸውንም ድንቆች እንጎበኛለን፤ እናደንቃለን። እያንዳንዱን ቦታ መድቡ።'},
  buckets:[{en:'Built by people',am:'በሰው የተገነባ'},{en:'Made by nature',am:'በተፈጥሮ የተሠራ'}],
  items:[{t:{en:'Lalibela rock-hewn churches',am:'የላሊበላ ውቅር አብያተ ክርስቲያናት'},b:0},{t:{en:'Fasil Ghebbi castles in Gondar',am:'የጎንደር ፋሲል ግቢ'},b:0},{t:{en:'Aksum obelisks',am:'የአክሱም ሐውልቶች'},b:0},{t:{en:'Blue Nile Falls (Tis Abay)',am:'የጢስ አባይ ፏፏቴ'},b:1},{t:{en:'Sof Omar Cave',am:'የሶፍ ዑመር ዋሻ'},b:1},{t:{en:'Simien Mountains',am:'የሰሜን ተራሮች'},b:1}]},
 {title:{en:'Dances of our region and country',am:'የክልላችንና የሀገራችን ጭፈራዎች'},type:'quiz',shuffle:true,
  tip:{en:'Our region has many dance styles: Gojjam, Gondar, Awi, Kemise, Shewa, Sekota, Wollo, Argoba, Raya Kobo… and every region of Ethiopia has its own. Watch them, learn one, and admire the differences.',am:'ክልላችን ብዙ የአጨፋፈር ስልቶች አሉት፦ ጎጃም፣ ጎንደር፣ አዊ፣ ኬሚሴ፣ ሸዋ፣ ሰቆጣ፣ ወሎ፣ አርጎባ፣ ራያ ቆቦ… እያንዳንዱ የኢትዮጵያ ክልልም የራሱ አለው። ተመልከቷቸው፣ አንዱን ተማሩ፣ ልዩነቶቹን አድንቁ።'},
  items:[
   {q:{en:'When you compare two dances, what should you look at?',am:'ሁለት ጭፈራዎችን ስታነጻጽሩ ምን መመልከት አለባችሁ?'},o:[{en:'Movements, clothes and musical instruments',am:'እንቅስቃሴ፣ አለባበስና የሙዚቃ መሣሪያ'},{en:'Only the weather',am:'የአየር ሁኔታውን ብቻ'},{en:'Nothing',am:'ምንም'}],a:0},
   {q:{en:'A visit (gubegnit) means…',am:'ጉብኝት ማለት…'},o:[{en:'travelling to see historical places, art or crafts',am:'ታሪካዊ ቦታዎችን፣ ጥበብን ወይም እደ ጥበብን ለማየት መሄድ'},{en:'sleeping at home',am:'ቤት መተኛት'},{en:'buying food',am:'ምግብ መግዛት'}],a:0},
   {q:{en:'Why should we appreciate artists?',am:'ሠዓሊዎችንና ከያኒዎችን ለምን እናደንቃለን?'},o:[{en:'It helps art grow and keeps our culture alive',am:'ጥበብ እንዲያድግና ባህላችን በሕይወት እንዲቆይ ይረዳል'},{en:'It does not matter',am:'ምንም ለውጥ የለውም'},{en:'To make them stop working',am:'ሥራ እንዲያቆሙ'}],a:0},
   {q:{en:'Photography is valuable because…',am:'ፎቶግራፍ ጠቃሚ የሆነው…'},o:[{en:'it records places and events for the future',am:'ቦታዎችንና ክስተቶችን ለወደፊት ስለሚመዘግብ'},{en:'it has no use',am:'ጥቅም ስለሌለው'},{en:'it is only for adults',am:'ለትልቅ ሰው ብቻ ስለሆነ'}],a:0}]},
 {title:{en:'Plan a class visit',am:'የክፍል ጉብኝት አቅዱ'},type:'order',vertical:true,
  tip:{en:'Visiting a museum, a craft workshop or a historical place is a great way to appreciate art. Put the planning steps in order.',am:'ሙዚየም፣ የእደ ጥበብ ቤት ወይም ታሪካዊ ቦታ መጎብኘት ጥበብን ለማድነቅ ጥሩ መንገድ ነው። የዕቅድ ደረጃዎቹን በቅደም ተከተል አስቀምጡ።'},
  rounds:[{items:[{en:'Choose a place: a potter\'s workshop, a church, a mosque or a museum.',am:'ቦታ ምረጡ፦ የሸክላ ሠሪ ቤት፣ ቤተ ክርስቲያን፣ መስጊድ ወይም ሙዚየም።'},{en:'Ask permission from the school and the place.',am:'ከትምህርት ቤቱና ከቦታው ፈቃድ ጠይቁ።'},{en:'Prepare 3 questions to ask the artist or guide.',am:'ለሠዓሊው ወይም ለአስጎብኚው 3 ጥያቄዎችን አዘጋጁ።'},{en:'Visit, look carefully and take notes or drawings.',am:'ጎብኙ፣ በጥንቃቄ ተመልከቱ፣ ማስታወሻ ወይም ስዕል ያዙ።'},{en:'Share what you admired with the class.',am:'ያደነቃችሁትን ለክፍሉ አካፍሉ።'}]}]},
 {type:'exam',items:[
   {q:{en:'A visit means going around to see historical places.',am:'ጉብኝት ማለት ታሪካዊ ቦታዎችን ተዘዋውሮ መመልከት ነው።'},o:[{en:'True',am:'እውነት'},{en:'False',am:'ሐሰት'}],a:0},
   {q:{en:'Photography has great value for society.',am:'ፎቶግራፍ ለኅብረተሰቡ ከፍተኛ ጠቀሜታ አለው።'},o:[{en:'True',am:'እውነት'},{en:'False',am:'ሐሰት'}],a:0},
   {q:{en:'The rock-hewn churches of Lalibela are an example of…',am:'የላሊበላ ውቅር አብያተ ክርስቲያናት የ… ምሳሌ ናቸው'},o:[{en:'architecture',am:'ኪነ ሕንፃ'},{en:'photography',am:'ፎቶግራፍ'},{en:'music',am:'ሙዚቃ'}],a:0},
   {q:{en:'The first step of looking at art like a critic is…',am:'ጥበብን እንደ ሀያሲ የመመልከት የመጀመሪያው ደረጃ…'},o:[{en:'Describe what you see',am:'የምታዩትን መግለጽ'},{en:'Judge it immediately',am:'ወዲያውኑ መፍረድ'},{en:'Walk away',am:'መሄድ'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Appreciating art means visiting, looking carefully and giving thoughtful praise to paintings, sculpture, crafts, buildings, photos, music, dance and theatre.',am:'ጥበብን ማድነቅ ማለት ስዕልን፣ ኪነ ቅርጽን፣ እደ ጥበብን፣ ሕንፃን፣ ፎቶን፣ ሙዚቃን፣ ውዝዋዜንና ቴአትርን መጎብኘት፣ በጥንቃቄ መመልከትና በአስተሳሰብ ማድነቅ ነው።'},
  points:[
   {en:'Critic steps: describe, analyse, interpret, judge (with a reason).',am:'የሀያሲ ደረጃዎች፦ መግለጽ፣ መተንተን፣ መተርጎም፣ መፍረድ (በምክንያት)።'},
   {en:'Amhara region dances: Gojjam, Gondar, Awi, Kemise, Shewa, Sekota, Wollo, Argoba, Raya Kobo.',am:'የአማራ ክልል ጭፈራዎች፦ ጎጃም፣ ጎንደር፣ አዊ፣ ኬሚሴ፣ ሸዋ፣ ሰቆጣ፣ ወሎ፣ አርጎባ፣ ራያ ቆቦ።'},
   {en:'Heritage built by people: Lalibela, Fasil Ghebbi, Aksum. Natural wonders: Tis Abay, Sof Omar, Simien.',am:'በሰው የተገነቡ ቅርሶች፦ ላሊበላ፣ ፋሲል ግቢ፣ አክሱም። የተፈጥሮ ድንቆች፦ ጢስ አባይ፣ ሶፍ ዑመር፣ ሰሜን።'}],
  words:[[{en:'Appreciate',am:'ማድነቅ'},{en:'to see the value of something and praise it',am:'የአንድን ነገር ዋጋ አይቶ ማወደስ'}],[{en:'Sculpture',am:'ኪነ ቅርጽ'},{en:'art shaped or carved in 3D',am:'በሦስት አቅጣጫ የተቀረጸ ጥበብ'}],[{en:'Architecture',am:'ኪነ ሕንፃ'},{en:'the art of designing buildings',am:'ሕንፃን የመንደፍ ጥበብ'}]],
  remember:{en:'Look, think, feel, then say why.',am:'ተመልከቱ፣ አስቡ፣ ይሰማችሁ፣ ከዚያ ለምን እንደሆነ ተናገሩ።'},
  exam:[[{en:'List three crafts in your area.',am:'በአካባቢያችሁ ያሉ ሦስት የእደ ጥበብ ውጤቶችን ዘርዝሩ።'},{en:'Pottery, baskets, woven cloth',am:'ሸክላ፣ ሰፌድ፣ ሽመና'}],[{en:'Give one built heritage and one natural wonder.',am:'አንድ በሰው የተገነባ ቅርስና አንድ የተፈጥሮ ድንቅ ጥቀሱ።'},{en:'Lalibela; Blue Nile Falls',am:'ላሊበላ፤ ጢስ አባይ ፏፏቴ'}]],
  innovate:{title:{en:'Young tour guide and photographer',am:'ወጣት አስጎብኚና ፎቶግራፈር'},text:{en:'Tourism brings jobs: guides, photographers, craft sellers. Become a young guide for one special place near you.',am:'ቱሪዝም የሥራ ዕድል ያመጣል፦ አስጎብኚዎች፣ ፎቶግራፈሮች፣ የእደ ጥበብ ሻጮች። በአቅራቢያችሁ ላለ አንድ ልዩ ቦታ ወጣት አስጎብኚ ሁኑ።'},
   steps:[{en:'Pick a beautiful or historical place near your home.',am:'በቤታችሁ አቅራቢያ ያለ ውብ ወይም ታሪካዊ ቦታ ምረጡ።'},{en:'Learn its story from elders and write 5 facts.',am:'ታሪኩን ከሽማግሌዎች ተምራችሁ 5 እውነታዎችን ጻፉ።'},{en:'Draw it, or take photos with a family phone, from 3 different angles.',am:'ሳሉት፤ ወይም በቤተሰብ ስልክ ከ3 የተለያዩ አቅጣጫዎች ፎቶ አንሱ።'},{en:'Give a 2-minute guided tour to your class.',am:'ለክፍላችሁ የ2 ደቂቃ ጉብኝት አቅርቡ።'}]}}}
 ]});
})();
