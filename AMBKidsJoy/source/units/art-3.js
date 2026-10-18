/* ሥነ ጥበባት · ምዕራፍ 3 · ባህልን በሥነ ጥበባት መግለፅ */
(function(){
const {tx,esc}=G3;
const BG=[{c:'#FFF4D6',n:{en:'Sunny cream',am:'ፀሐያማ ክሬም'}},{c:'#DFF3E4',n:{en:'Fresh green',am:'ለምለም አረንጓዴ'}},{c:'#E3ECFF',n:{en:'Sky blue',am:'ሰማያዊ'}}];
const BORDER=[{n:{en:'Tilet zigzag',am:'የጥለት ዚግዛግ'}},{n:{en:'Dots',am:'ነጠብጣብ'}},{n:{en:'Crosses',am:'መስቀለኛ'}}];
const MSG=[{en:'Happy New Year!',am:'እንኳን አደረሳችሁ!'},{en:'Happy Enkutatash!',am:'መልካም እንቁጣጣሽ!'},{en:'A bright new year to you!',am:'ብሩህ አዲስ ዓመት!'}];
function adey(x,y,s){/* yellow Meskel daisy */return`<g transform="translate(${x} ${y}) scale(${s})">${Array.from({length:12},(_,i)=>`<ellipse cx="0" cy="-14" rx="4.5" ry="11" fill="#F4C20D" transform="rotate(${i*30})"/>`).join('')}<circle r="7" fill="#8A5A00"/><path d="M0 8v40" stroke="#2E8B57" stroke-width="3"/><path d="M0 30q-12-6-16 2" stroke="#2E8B57" stroke-width="3" fill="none"/></g>`}
function border(k){const W=300,H=200;let s='';
 if(k===0){let d='M10 14';for(let x=10;x<W-10;x+=14)d+=`l7 -6 l7 6`;s=`<path d="${d}" stroke="#D9483B" stroke-width="3" fill="none"/><path d="${d.replace('M10 14','M10 192')}" stroke="#1E8A5B" stroke-width="3" fill="none"/>`}
 if(k===1){for(let x=14;x<W;x+=16)s+=`<circle cx="${x}" cy="10" r="3.5" fill="#D9483B"/><circle cx="${x}" cy="190" r="3.5" fill="#1E8A5B"/>`}
 if(k===2){for(let x=14;x<W;x+=22)s+=`<path d="M${x-5} 10h10M${x} 5v10M${x-5} 190h10M${x} 185v10" stroke="#8A4FBF" stroke-width="3"/>`}
 return s}
function card(st){const bg=st.bg!==null?BG[st.bg].c:'var(--surface-2)';
 return`<svg viewBox="0 0 300 200" role="img" aria-label="greeting card" style="width:min(420px,100%);height:auto;border-radius:12px;box-shadow:0 2px 10px #0002"><rect width="300" height="200" fill="${bg}"/>${st.br!==null?border(st.br):''}
  ${st.fl?adey(60,82,1)+adey(240,82,.8)+adey(150,70,.55):''}
  ${st.msg!==null?`<text x="150" y="${st.fl?160:110}" text-anchor="middle" font-size="22" font-weight="800" fill="#1B2A4A">${esc(tx(MSG[st.msg]))}</text>`:`<text x="150" y="110" text-anchor="middle" font-size="13" fill="var(--ink-soft)">${esc(tx({en:'Your card will appear here',am:'ካርዳችሁ እዚህ ይታያል'}))}</text>`}</svg>`}
Unit.start({
 id:'art-3',subject:'art',
 subjectName:{en:'Performing & Visual Arts',am:'ሥነ ጥበባት'},chapter:{en:'Chapter 3',am:'ምዕራፍ 3'},
 title:{en:'Expressing Culture through Art',am:'ባህልን በሥነ ጥበባት መግለፅ'},
 footer:{en:'Built on the Grade 3 Performing & Visual Arts student book (ANRS Education Bureau), Chapter 3.',am:'በ3ኛ ክፍል የሥነ ጥበባት መጽሐፍ (አብክመ ትምህርት ቢሮ) ምዕራፍ 3 ላይ የተመሰረተ።'},
 missions:[
 {title:{en:'Crafts and their uses',am:'የእደ ጥበብ ውጤቶችና ጥቅማቸው'},type:'match',
  tip:{en:'Crafts are things people make by hand for daily life: pottery, weaving, woodwork, leatherwork, basketry, metalwork and jewellery. Match each craft with what it is used for.',am:'እደ ጥበብ ሰዎች ለዕለት ኑሯቸው በእጅ የሚሠሯቸው ቁሳቁሶች ናቸው፦ ሸክላ፣ ሽመና፣ እንጨት ሥራ፣ ቆዳ ሥራ፣ ስፌት፣ ብረታ ብረትና ጌጣጌጥ። እያንዳንዱን ከጥቅሙ ጋር አዛምዱ።'},
  rounds:[[[{en:'Mesob (woven basket table)',am:'ሞሰብ'},{en:'Serving injera to the family',am:'ለቤተሰብ እንጀራ ማቅረቢያ'}],[{en:'Agelgil (leather food basket)',am:'አገልግል'},{en:'Carrying food on a journey',am:'በጉዞ ምግብ መያዣ'}],[{en:'Berchuma (three-legged stool)',am:'ባርጩሜ'},{en:'Sitting',am:'መቀመጫ'}],[{en:'Jebena (clay pot)',am:'ጀበና'},{en:'Making coffee',am:'ቡና ማፍያ'}],[{en:'Necklace and bracelet',am:'የአንገትና የእጅ ጌጥ'},{en:'Decoration and beauty',am:'ማጌጫ'}],[{en:'Hand-woven gabi',am:'በእጅ የተሸመነ ጋቢ'},{en:'Keeping warm',am:'ማሞቂያ ልብስ'}]]]},
 {title:{en:'Long ago or today?',am:'ጥንት ወይስ ዛሬ?'},type:'sort',
  tip:{en:'Art changes over time, but old art is our treasure. We must protect both and pass them to the next generation. Sort each card.',am:'ሥነ ጥበብ ከጊዜ ወደ ጊዜ ይለወጣል፤ ጥንታዊ ጥበብ ግን ሀብታችን ነው። ሁለቱንም ጠብቀን ለትውልድ ማስተላለፍ አለብን። እያንዳንዱን ካርድ መድቡ።'},
  buckets:[{en:'Long ago',am:'ጥንት'},{en:'Today',am:'ዛሬ'}],
  items:[{t:{en:'Clothes made from animal skin',am:'ከእንስሳት ቆዳ የተሠራ ልብስ'},b:0},{t:{en:'Round house with a grass roof',am:'የሣር ክዳን ያለው ክብ ቤት'},b:0},{t:{en:'Songs passed on only by word of mouth',am:'በቃል ብቻ የሚተላለፉ ዘፈኖች'},b:0},{t:{en:'Paintings on church walls with natural colours',am:'በተፈጥሮ ቀለም የተሳሉ የቤተ ክርስቲያን ግድግዳ ስዕሎች'},b:0},
   {t:{en:'Clothes sewn in factories',am:'በፋብሪካ የተሰፉ ልብሶች'},b:1},{t:{en:'House with iron sheets and cement',am:'የቆርቆሮና የሲሚንቶ ቤት'},b:1},{t:{en:'Songs recorded on phones and CDs',am:'በስልክና በሲዲ የተቀረጹ ዘፈኖች'},b:1},{t:{en:'Modern paintings by artists like Afewerk Tekle',am:'እንደ አፈወርቅ ተክሌ ያሉ ሠዓሊዎች ዘመናዊ ስዕሎች'},b:1}]},
 {title:{en:'Festivals of our land',am:'የሀገራችን በዓላት'},type:'match',
  tip:{en:'Ethiopians celebrate many holidays with songs, dances, clothes and art. Match each holiday with how it is celebrated.',am:'ኢትዮጵያውያን ብዙ በዓላትን በዘፈን፣ በጭፈራ፣ በአልባሳትና በጥበብ ያከብራሉ። እያንዳንዱን በዓል ከአከባበሩ ጋር አዛምዱ።'},
  rounds:[[[{en:'Enkutatash (New Year)',am:'እንቁጣጣሽ (ዘመን መለወጫ)'},{en:'Girls carry flowers and a drum and sing "Abebayehosh"',am:'ልጃገረዶች አበባና ከበሮ ይዘው “አበባዬሽ ሆይ” ይዘምራሉ'}],[{en:'Meskel',am:'መስቀል'},{en:'A great bonfire (demera) is lit',am:'ታላቅ ደመራ ይለኮሳል'}],[{en:'Timket (January)',am:'ጥምቀት (ጥር)'},{en:'Colourful processions to the water',am:'ወደ ውኃ የሚደረግ ደማቅ ጉዞ'}],[{en:'Arafa (Eid al-Adha)',am:'አረፋ'},{en:'Muslims pray and share food with neighbours',am:'ሙስሊሞች ይሰግዳሉ፤ ምግብ ከጎረቤት ጋር ይካፈላሉ'}],[{en:'Genna',am:'ገና'},{en:'Young people play genna with curved sticks',am:'ወጣቶች በቆልማማ ዱላ ገና ይጫወታሉ'}],[{en:'Buhe',am:'ቡሄ'},{en:'Boys go house to house singing "hoya hoye"',am:'ልጆች ቤት ለቤት እየዞሩ “ሆያ ሆዬ” ይላሉ'}]]]},
 {title:{en:'Design a New Year card',am:'የአዲስ ዓመት ካርድ ንደፉ'},type:'custom',
  tip:{en:'Artists express culture with colour and pattern. Design an Enkutatash greeting card: choose a background, a traditional border, the yellow Meskel daisy (adey abeba) and a message. Then make a real one with paper and colours!',am:'ሠዓሊዎች ባህልን በቀለምና በንድፍ ይገልጻሉ። የእንቁጣጣሽ የመልካም ምኞት ካርድ ንደፉ፦ የጀርባ ቀለም፣ ባህላዊ ጠርዝ፣ ቢጫውን የአደይ አበባና መልዕክት ምረጡ። ከዚያ በወረቀትና በቀለም እውነተኛ ካርድ ሥሩ!'},
  init(st){st.bg=null;st.br=null;st.fl=false;st.msg=null;st.done=false},
  render(p,api,st){const ready=st.bg!==null&&st.br!==null&&st.fl&&st.msg!==null;
   const grp=(label,arr,key)=>`<div><b class="small">${label}</b><div class="tiles">${arr.map((o,i)=>`<button class="tile" data-k="${key}" data-v="${i}" style="${st[key]===i?'border-color:var(--accent);background:var(--accent-soft)':''}">${o.c?`<span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:${o.c};vertical-align:middle;margin-right:6px;border:1px solid #0002"></span>`:''}${esc(tx(o.n||o))}</button>`).join('')}</div></div>`;
   p.innerHTML=`<div class="row" style="align-items:flex-start;gap:18px"><div style="flex:1 1 300px;min-width:0;text-align:center">${card(st)}</div>
    <div style="flex:1 1 260px;min-width:0;display:grid;gap:10px">${grp(tx({en:'1. Background',am:'1. ጀርባ'}),BG,'bg')}${grp(tx({en:'2. Border',am:'2. ጠርዝ'}),BORDER,'br')}
     <div><b class="small">${tx({en:'3. Flowers',am:'3. አበባ'})}</b><div class="tiles"><button class="tile" data-act="fl" style="${st.fl?'border-color:var(--accent);background:var(--accent-soft)':''}">${st.fl?'✓ ':''}${tx({en:'Add adey abeba',am:'አደይ አበባ ጨምሩ'})}</button></div></div>
     ${grp(tx({en:'4. Message',am:'4. መልዕክት'}),MSG,'msg')}
     <button class="btn primary" data-act="finish" ${ready?'':'disabled'}>${tx({en:'Finish my card',am:'ካርዴን ጨርሱ'})}</button></div></div>
    ${st.done?`<div class="explain">${tx({en:'Beautiful! Each choice carries culture: the yellow adey abeba blooms after the rainy season, when the New Year begins. Make 5 real cards and give them to neighbours, or sell them before the holiday.',am:'ውብ ነው! እያንዳንዱ ምርጫ ባህልን ይዟል፦ ቢጫው አደይ አበባ ከክረምት በኋላ አዲስ ዓመት ሲገባ ያብባል። 5 እውነተኛ ካርዶች ሠርታችሁ ለጎረቤቶች ስጡ፤ ወይም ከበዓሉ በፊት ሽጡ።'})}</div>`:''}`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
    if(b.dataset.k){st[b.dataset.k]=+b.dataset.v;api.S.tick()}
    if(b.dataset.act==='fl'){st.fl=!st.fl;api.S.tick()}
    if(b.dataset.act==='finish'){st.done=true;api.S.yay();api.complete()}
    api.rerender()}}},
 {title:{en:'Which kind of song?',am:'የትኛው ዓይነት ዘፈን?'},type:'sort',
  tip:{en:'Our people sing at weddings, at work, on holidays and to remember heroes. Read what each song is about and sort it.',am:'ሕዝባችን በሰርግ፣ በሥራ፣ በበዓልና ጀግኖችን ለማስታወስ ይዘፍናል። እያንዳንዱ ዘፈን ስለ ምን እንደሆነ አንብባችሁ መድቡ።'},
  buckets:[{en:'Wedding song',am:'የሰርግ ዘፈን'},{en:'Work song',am:'የሥራ ዘፈን'},{en:'Holiday song',am:'የበዓል ዘፈን'},{en:'Heroic chant',am:'የጀግንነት ፉከራ'}],
  items:[{t:{en:'Praises the bride and groom and wishes them a happy home',am:'ሙሽሮችን ያወድሳል፤ መልካም ትዳር ይመኛል'},b:0},{t:{en:'Sung while oxen go round to thresh grain',am:'በሬዎች እህል ሲያበራዩ የሚዘፈን'},b:1},{t:{en:'Sung while cutting the harvest with sickles',am:'በማጭድ ሲያጭዱ የሚዘፈን'},b:1},{t:{en:'Girls sing it with flowers at the New Year',am:'ልጃገረዶች በአዲስ ዓመት በአበባ የሚዘምሩት'},b:2},{t:{en:'Sung while playing genna',am:'ገና ሲጫወቱ የሚዘፈን'},b:2},{t:{en:'Fukera and shilela for Adwa Victory Day',am:'ለአድዋ ድል በዓል ፉከራና ሽለላ'},b:3}]},
 {type:'exam',items:[
   {q:{en:'Jewellery is a craft product.',am:'ጌጣጌጥ አንዱ የእደ ጥበብ ውጤት ነው።'},o:[{en:'True',am:'እውነት'},{en:'False',am:'ሐሰት'}],a:0},
   {q:{en:'Wedding songs are exactly the same in every area.',am:'የሰርግ ዘፈኖች በሁሉም አካባቢ ተመሳሳይ ናቸው።'},o:[{en:'False',am:'ሐሰት'},{en:'True',am:'እውነት'}],a:0,e:{en:'Each area has its own songs: that is cultural diversity.',am:'እያንዳንዱ አካባቢ የራሱ ዘፈኖች አሉት፦ ይህ የባህል ብዝሀነት ነው።'}},
   {q:{en:'Which is NOT a craft?',am:'እደ ጥበብ ያልሆነው የትኛው ነው?'},o:[{en:'A factory plastic cup',am:'የፋብሪካ የፕላስቲክ ኩባያ'},{en:'Mesob',am:'ሞሰብ'},{en:'Clay jebena',am:'የሸክላ ጀበና'}],a:0},
   {q:{en:'Today, old songs are passed on through…',am:'ዛሬ ጥንታዊ ዘፈኖች የሚተላለፉት በ…'},o:[{en:'recordings as well as by mouth',am:'በቃልም በቅጂም'},{en:'nothing',am:'በምንም'},{en:'only paintings',am:'በስዕል ብቻ'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Culture is our way of life: food, clothes, dances, songs, crafts and holidays. Art expresses it, and we must protect it and pass it on.',am:'ባህል የአኗኗር ዘይቤያችን ነው፦ ምግብ፣ አለባበስ፣ ጭፈራ፣ ዘፈን፣ እደ ጥበብና በዓላት። ሥነ ጥበብ ይገልጸዋል፤ ልንጠብቀውና ልናስተላልፈው ይገባል።'},
  points:[
   {en:'Crafts: pottery, weaving, woodwork, leatherwork, basketry, metalwork, jewellery.',am:'እደ ጥበብ፦ ሸክላ፣ ሽመና፣ እንጨት ሥራ፣ ቆዳ ሥራ፣ ስፌት፣ ብረታ ብረት፣ ጌጣጌጥ።'},
   {en:'Clothes, houses and paintings have changed from long ago to today.',am:'አልባሳት፣ ቤቶችና ስዕሎች ከጥንት ወደ ዛሬ ተለውጠዋል።'},
   {en:'Songs: wedding, work (ploughing, harvesting, threshing), holidays, heroic chants.',am:'ዘፈኖች፦ የሰርግ፣ የሥራ (እርሻ፣ አጨዳ፣ ውቂያ)፣ የበዓል፣ የጀግንነት።'},
   {en:'Holidays: Enkutatash, Meskel, Timket, Genna, Arafa, Buhe, Adwa.',am:'በዓላት፦ እንቁጣጣሽ፣ መስቀል፣ ጥምቀት፣ ገና፣ አረፋ፣ ቡሄ፣ አድዋ።'}],
  words:[[{en:'Craft',am:'እደ ጥበብ'},{en:'useful object made by hand',am:'በእጅ የተሠራ ጠቃሚ ዕቃ'}],[{en:'Heritage',am:'ቅርስ'},{en:'culture passed from generation to generation',am:'ከትውልድ ወደ ትውልድ የሚተላለፍ ባህል'}],[{en:'Pattern',am:'ንድፍ'},{en:'a design that repeats',am:'የሚደጋገም ቅርጽ'}]],
  remember:{en:'Old art is a treasure; new art is a gift. Keep both.',am:'ጥንታዊ ጥበብ ሀብት ነው፤ አዲስ ጥበብ ስጦታ ነው። ሁለቱንም ጠብቁ።'},
  exam:[[{en:'List four signs of culture.',am:'አራት የባህል መገለጫዎችን ዘርዝሩ።'},{en:'Food, clothes, dances, songs',am:'ምግብ፣ አለባበስ፣ ጭፈራ፣ ዘፈን'}],[{en:'Name three holidays in your area.',am:'በአካባቢያችሁ ያሉ ሦስት በዓላትን ጥቀሱ።'},{en:'For example: Meskel, Timket, Arafa',am:'ለምሳሌ፦ መስቀል፣ ጥምቀት፣ አረፋ'}]],
  innovate:{title:{en:'Holiday card business',am:'የበዓል ካርድ ሥራ'},text:{en:'Before every holiday, people buy greeting cards. Hand-made cards with local art are special. Start a small card business.',am:'ከእያንዳንዱ በዓል በፊት ሰዎች የመልካም ምኞት ካርድ ይገዛሉ። የአካባቢ ጥበብ ያለባቸው በእጅ የተሠሩ ካርዶች ልዩ ናቸው። ትንሽ የካርድ ሥራ ጀምሩ።'},
   steps:[{en:'Design one card for each holiday: New Year, Meskel, Genna, Arafa.',am:'ለእያንዳንዱ በዓል አንድ ካርድ ንደፉ፦ አዲስ ዓመት፣ መስቀል፣ ገና፣ አረፋ።'},{en:'Use cheap materials: old folders, natural colours, pressed flowers.',am:'ርካሽ ቁሳቁስ ተጠቀሙ፦ አሮጌ ፎልደር፣ የተፈጥሮ ቀለም፣ የደረቁ አበቦች።'},{en:'Count your cost for one card, then set a fair price.',am:'የአንድ ካርድ ወጪያችሁን አስሉ፤ ከዚያ ፍትሐዊ ዋጋ አውጡ።'},{en:'Sell 10 cards and record your profit.',am:'10 ካርዶች ሽጣችሁ ትርፋችሁን መዝግቡ።'}]}}}
 ]});
})();
