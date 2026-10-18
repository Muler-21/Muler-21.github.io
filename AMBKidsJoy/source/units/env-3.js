/* አካባቢ ሳይንስ · ምዕራፍ 3 · ተፈጥሯዊ አካባቢ */
(function(){
const {tx,esc}=G3;
/* five Ethiopian climate zones (book §3.1.3); altitude bands are the standard Ethiopian ones */
const Z=[
 {en:'Wurch (very cold)',am:'ውርጭ (ቁር)',alt:'> 3200 m',t:{en:'below 5 °C, sometimes snow',am:'ከ5 °ሴ በታች፤ አንዳንዴ በረዶ'},c:'#E8F1FA',
  pl:{en:'Ras Dejen, Guna, Abune Yosef, Choke',am:'ራስ ደጀን፣ ጉና፣ አቡነ ዮሴፍ፣ ጮቄ'},life:{en:'Too cold for most farming',am:'ለአብዛኛው እርሻ በጣም ቀዝቃዛ'}},
 {en:'Dega (cool)',am:'ደጋ',alt:'2300–3200 m',t:{en:'below 16 °C, rainy',am:'ከ16 °ሴ በታች፤ ዝናባማ'},c:'#9FD3A8',
  pl:{en:'Debre Birhan, Debark, Injibara, Debre Tabor, Dessie',am:'ደብረ ብርሃን፣ ደባርቅ፣ እንጅባራ፣ ደብረ ታቦር፣ ደሴ'},life:{en:'Barley, potato, wheat; horses and sheep',am:'ገብስ፣ ድንች፣ ስንዴ፤ ፈረስና በግ'}},
 {en:'Woina Dega (mild)',am:'ወይና ደጋ',alt:'1500–2300 m',t:{en:'about 16–29 °C',am:'ከ16–29 °ሴ ገደማ'},c:'#5FB36B',
  pl:{en:'Most zones of our region',am:'የክልላችን አብዛኞቹ ዞኖች'},life:{en:'Teff, maize, wheat. The most productive and healthy zone.',am:'ጤፍ፣ በቆሎ፣ ስንዴ። በጣም ምርታማና ለጤና ምቹ ክልል።'}},
 {en:'Kolla (hot)',am:'ቆላ',alt:'500–1500 m',t:{en:'20–30 °C, little rain',am:'20–30 °ሴ፤ ትንሽ ዝናብ'},c:'#E9C46A',
  pl:{en:'Lowlands such as Metema',am:'እንደ መተማ ያሉ ቆላማ ቦታዎች'},life:{en:'Cotton, sesame, sorghum; few people live here',am:'ጥጥ፣ ሰሊጥ፣ ማሽላ፤ የሕዝብ ብዛት ዝቅተኛ'}},
 {en:'Bereha (desert)',am:'በረሃ',alt:'< 500 m',t:{en:'up to 45 °C, very little rain',am:'እስከ 45 °ሴ፤ በጣም ትንሽ ዝናብ'},c:'#E07A4F',
  pl:{en:'Desert lowlands',am:'በረሃማ ቆላዎች'},life:{en:'Incense trees and camels; hard place to live',am:'የእጣን ዛፍና ግመል፤ ለመኖር አስቸጋሪ'}}];
const TASKS=[
 {q:{en:'Tap the zone where Debre Birhan and Dessie are.',am:'ደብረ ብርሃንና ደሴ ያሉበትን ክልል ንኩ።'},a:1},
 {q:{en:'Tap the hottest zone, where it can reach 45 °C.',am:'እስከ 45 °ሴ የሚደርሰውን በጣም ሞቃታማ ክልል ንኩ።'},a:4},
 {q:{en:'Tap the most productive zone, where most of our region lies.',am:'የክልላችን አብዛኛው የሚገኝበትን በጣም ምርታማ ክልል ንኩ።'},a:2},
 {q:{en:'Tap the zone where Ras Dejen\'s top is covered with frost.',am:'የራስ ደጀን ጫፍ በውርጭ የሚሸፈንበትን ክልል ንኩ።'},a:0},
 {q:{en:'Tap the hot zone where cotton and sesame grow well.',am:'ጥጥና ሰሊጥ በደንብ የሚበቅሉበትን ሞቃት ክልል ንኩ።'},a:3}];
function mountain(sel){
 /* layered mountain: band i from top (0) to bottom (4) */
 const bands=Z.map((z,i)=>{const yTop=20+i*44,yBot=yTop+44,w0=12+i*28,w1=12+(i+1)*28;
  return`<path class="zband" data-z="${i}" d="M${160-w0} ${yTop}L${160+w0} ${yTop}L${160+w1} ${yBot}L${160-w1} ${yBot}Z" fill="${z.c}" stroke="${sel===i?'var(--ink)':'#fff'}" stroke-width="${sel===i?4:2}" style="cursor:pointer"/>
   <text x="${160+w1+8}" y="${yTop+28}" font-size="13" fill="var(--ink)" style="pointer-events:none">${esc(z.alt)}</text>`}).join('');
 return`<svg viewBox="0 0 450 250" role="img" aria-label="${esc(tx({en:'Mountain with five climate zones',am:'አምስት የአየር ንብረት ክልሎች ያሉት ተራራ'}))}" style="width:min(460px,100%);height:auto">
  <rect x="0" y="0" width="450" height="250" fill="var(--surface-2)" rx="12"/><g transform="translate(46 0)">${bands}</g>
  <text x="12" y="30" font-size="12" fill="var(--ink-soft)">${esc(tx({en:'High = cold',am:'ከፍታ = ቅዝቃዜ'}))}</text>
  <text x="12" y="236" font-size="12" fill="var(--ink-soft)">${esc(tx({en:'Low = hot',am:'ዝቅታ = ሙቀት'}))}</text>
  <path d="M30 50V200" stroke="var(--ink-soft)" stroke-width="3" marker-end="url(#ar)"/><defs><marker id="ar" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink-soft)"/></marker></defs></svg>`}

/* erosion experiment: three slopes in the rain */
const SL=[{en:'Bare soil',am:'የተራቆተ አፈር',lost:9,cover:'bare'},{en:'Grass and trees',am:'ሣርና ዛፍ',lost:2,cover:'grass'},{en:'Terraces',am:'እርከን',lost:3,cover:'terrace'}];
function slope(s,ran){const soil='#8B5A2B';let extra='';
 if(s.cover==='grass')extra=[30,52,74,96,118].map((x,i)=>`<path d="M${x} ${78-i*9}l-4-12M${x} ${78-i*9}l0-14M${x} ${78-i*9}l4-12" stroke="#2E8B57" stroke-width="2.5"/>`).join('')+`<circle cx="60" cy="40" r="12" fill="#2E8B57"/><rect x="58" y="50" width="4" height="18" fill="#6B4423"/>`;
 if(s.cover==='terrace')extra=[0,1,2,3].map(i=>`<path d="M${18+i*28} ${88-i*14}h22" stroke="#5A3A1A" stroke-width="5" stroke-linecap="round"/>`).join('');
 const rain=ran?[20,45,70,95,120].map((x,i)=>`<path class="drop" d="M${x} ${4+(i%2)*6}l-3 9" stroke="#2F6FDE" stroke-width="2" stroke-linecap="round"/>`).join(''):'';
 const water=ran?`<path d="M140 100q14 4 26 0v14h-26z" fill="${s.lost>5?'#9C6B3C':'#7FB2E5'}"/>`:'';
 return`<svg viewBox="0 0 170 120" role="img" aria-label="${esc(tx(s))}" style="width:100%;max-width:220px;height:auto">${rain}<path d="M6 100L140 30V100Z" fill="${soil}"/>${extra}${water}
  <rect x="146" y="64" width="18" height="36" rx="3" fill="none" stroke="var(--ink)" stroke-width="2"/>
  ${ran?`<rect x="148" y="${98-s.lost*3.4}" width="14" height="${s.lost*3.4}" fill="${soil}"/>`:''}</svg>`}

Unit.start({
 id:'env-3',subject:'env',
 subjectName:{en:'Environmental Science',am:'አካባቢ ሳይንስ'},chapter:{en:'Chapter 3',am:'ምዕራፍ 3'},
 title:{en:'Our Natural Environment',am:'ተፈጥሯዊ አካባቢ'},
 footer:{en:'Built on the Grade 3 Environmental Science student book (ANRS Education Bureau), Chapter 3: climate, natural and man-made resources, and waste.',am:'በ3ኛ ክፍል የአካባቢ ሳይንስ መጽሐፍ (አብክመ ትምህርት ቢሮ) ምዕራፍ 3 ላይ የተመሰረተ፦ የአየር ንብረት፣ የተፈጥሮና ሰው ሠራሽ ሀብቶች፣ ቆሻሻ።'},
 missions:[
 {title:{en:'Weather or climate?',am:'የአየር ጠባይ ወይስ የአየር ንብረት?'},type:'sort',
  tip:{en:'Weather is the air around us over a short time: hours, a day, a week. It changes fast. Climate is the average weather of a big area over a long time (30 years or more). Sort each sentence.',am:'የአየር ጠባይ በአጭር ጊዜ (በሰዓታት፣ በቀን፣ በሳምንት) ያለ የአየር ሁኔታ ነው፤ ቶሎ ይለዋወጣል። የአየር ንብረት የአንድ ሰፊ ቦታ የረጅም ጊዜ (30 ዓመትና ከዚያ በላይ) አማካይ የአየር ሁኔታ ነው። እያንዳንዱን ዓረፍተ ነገር መድቡ።'},
  buckets:[{en:'Weather (short time)',am:'የአየር ጠባይ (አጭር ጊዜ)'},{en:'Climate (long time)',am:'የአየር ንብረት (ረጅም ጊዜ)'}],
  items:[
   {t:{en:'It is raining this afternoon.',am:'ዛሬ ከሰዓት በኋላ እየዘነበ ነው።'},b:0},
   {t:{en:'This morning was cold, but now it is sunny.',am:'ዛሬ ጠዋት ቀዝቃዛ ነበር፤ አሁን ግን ፀሐያማ ነው።'},b:0},
   {t:{en:'Our zone gets heavy rain every June to September.',am:'ዞናችን በየዓመቱ ከሰኔ እስከ መስከረም ከፍተኛ ዝናብ ያገኛል።'},b:1},
   {t:{en:'Dega areas are cool all year round.',am:'የደጋ አካባቢዎች ዓመቱን ሙሉ ቀዝቃዛ ናቸው።'},b:1},
   {t:{en:'Strong wind is blowing right now.',am:'አሁን ኃይለኛ ነፋስ እየነፈሰ ነው።'},b:0},
   {t:{en:'The desert has been very hot for hundreds of years.',am:'በረሃው ለመቶ ዓመታት በጣም ሞቃት ሆኖ ቆይቷል።'},b:1},
   {t:{en:'Yesterday was cloudy.',am:'ትናንት ደመናማ ነበር።'},b:0}]},
 {title:{en:'Climb the mountain',am:'ተራራውን ውጡ'},type:'custom',
  tip:{en:'Ethiopia has five climate zones based on height. The higher you climb, the colder it gets. Tap each layer of the mountain to explore it, then solve the five challenges.',am:'ኢትዮጵያ በከፍታ ላይ የተመሰረቱ አምስት የአየር ንብረት ክልሎች አሏት። ወደ ላይ በወጣችሁ ቁጥር ይቀዘቅዛል። እያንዳንዱን የተራራውን ንብርብር ንክታችሁ መርምሩ፤ ከዚያ አምስቱን ፈተናዎች ፍቱ።'},
  init(st){st.sel=null;st.k=0;st.msg='';st.cls=''},
  render(p,api,st){const z=st.sel!==null?Z[st.sel]:null;const task=TASKS[st.k];
   p.innerHTML=`<div class="row" style="align-items:flex-start;gap:18px"><div style="flex:1 1 300px;min-width:0">${mountain(st.sel)}</div>
    <div style="flex:1 1 240px;min-width:0;display:grid;gap:10px">
     ${z?`<div class="card-item" style="text-align:left;display:block"><b>${esc(tx(z))}</b><br><span class="small">${tx({en:'Height',am:'ከፍታ'})}: ${esc(z.alt)}<br>${tx({en:'Temperature',am:'ሙቀት'})}: ${esc(tx(z.t))}<br>${tx({en:'Places',am:'ቦታዎች'})}: ${esc(tx(z.pl))}<br>${tx({en:'Life',am:'ኑሮ'})}: ${esc(tx(z.life))}</span></div>`:`<div class="note">${tx({en:'Tap a layer of the mountain.',am:'የተራራውን አንድ ንብርብር ንኩ።'})}</div>`}
     ${task?`<div class="q"><span class="qt">${tx({en:'Challenge {i}/5: ',am:'ፈተና {i}/5፦ '},{i:st.k+1})}${esc(tx(task.q))}</span></div>`:`<div class="explain">${tx({en:'All five solved! Remember: height controls temperature. Every 1000 m higher is about 6 °C colder.',am:'አምስቱንም ፈታችሁ! አስታውሱ፦ ከፍታ ሙቀትን ይቆጣጠራል። በየ1000 ሜትር ከፍታ ሙቀት በ6 °ሴ ገደማ ይቀንሳል።'})}</div>`}
     <div class="feedback ${st.cls}">${st.msg}</div></div></div>`;
   p.onclick=e=>{const b=e.target.closest('[data-z]');if(!b)return;st.sel=+b.dataset.z;api.S.tick();
    if(task){if(st.sel===task.a){st.k++;st.msg=tx(api.UI.good);st.cls='good';api.S.yay();if(st.k>=TASKS.length)api.complete()}else{st.msg=tx({en:'That is {z}. Read its card and try again.',am:'ያ {z} ነው። ካርዱን አንብባችሁ እንደገና ሞክሩ።'},{z:tx(Z[st.sel])});st.cls='bad'}}
    api.rerender()}}},
 {title:{en:'Natural or man-made?',am:'የተፈጥሮ ወይስ ሰው ሠራሽ?'},type:'sort',
  tip:{en:'Natural resources come from nature: soil, air, water, minerals, plants and animals. Man-made resources were built by people: dams, schools, hospitals, places of worship. Both are our shared wealth.',am:'የተፈጥሮ ሀብቶች ከተፈጥሮ ይገኛሉ፦ አፈር፣ አየር፣ ውኃ፣ ማዕድናት፣ ዕፅዋትና እንስሳት። ሰው ሠራሽ ሀብቶች በሰዎች የተገነቡ ናቸው፦ ግድብ፣ ትምህርት ቤት፣ ሆስፒታል፣ የአምልኮ ቦታዎች። ሁለቱም የጋራ ሀብታችን ናቸው።'},
  buckets:[{en:'Natural resource',am:'የተፈጥሮ ሀብት'},{en:'Man-made resource',am:'ሰው ሠራሽ ሀብት'}],
  items:[{t:{en:'Soil',am:'አፈር'},b:0},{t:{en:'Lake Tana',am:'ጣና ሐይቅ'},b:0},{t:{en:'Gold',am:'ወርቅ'},b:0},{t:{en:'Walia ibex',am:'ዋልያ'},b:0},{t:{en:'Air',am:'አየር'},b:0},
   {t:{en:'Dam',am:'ግድብ'},b:1},{t:{en:'School',am:'ትምህርት ቤት'},b:1},{t:{en:'Hospital',am:'ሆስፒታል'},b:1},{t:{en:'Road and bridge',am:'መንገድና ድልድይ'},b:1}]},
 {title:{en:'What does each resource give us?',am:'እያንዳንዱ ሀብት ምን ይሰጠናል?'},type:'match',
  tip:{en:'Every natural resource helps us live. Match each one with one of its uses.',am:'እያንዳንዱ የተፈጥሮ ሀብት እንድንኖር ይረዳናል። እያንዳንዱን ከአንድ ጥቅሙ ጋር አዛምዱ።'},
  rounds:[[
   [{en:'Soil',am:'አፈር'},{en:'Plants grow in it, so we get food',am:'ዕፅዋት ያበቅላል፤ ምግብ እናገኛለን'}],
   [{en:'Water',am:'ውኃ'},{en:'Drinking, cooking and making electricity',am:'ለመጠጥ፣ ለምግብ ማብሰልና ለኃይል ማመንጫ'}],
   [{en:'Air',am:'አየር'},{en:'We breathe it to stay alive',am:'በሕይወት ለመኖር እንተነፍሰዋለን'}],
   [{en:'Plants',am:'ዕፅዋት'},{en:'Food, medicine and clean air',am:'ምግብ፣ መድኃኒትና ንጹህ አየር'}],
   [{en:'Wild animals',am:'የዱር እንስሳት'},{en:'Tourism and jobs',am:'ቱሪዝምና የሥራ ዕድል'}],
   [{en:'Minerals',am:'ማዕድናት'},{en:'Iron, gold and fuel: income for the country',am:'ብረት፣ ወርቅ፣ ነዳጅ፦ የሀገር ገቢ'}]]]},
 {title:{en:'Rain experiment: soil erosion',am:'የዝናብ ሙከራ፦ የአፈር መሸርሸር'},type:'custom',
  tip:{en:'Scientists predict first, then test. Which slope will lose the most soil when it rains? Predict, then make it rain on each slope and watch the jar.',am:'ሳይንቲስቶች መጀመሪያ ይገምታሉ፤ ከዚያ ይፈትሻሉ። ሲዘንብ ብዙ አፈር የሚያጣው የትኛው ተዳፋት ነው? ገምቱ፤ ከዚያ በእያንዳንዱ ተዳፋት ላይ አዝንቡና ማሰሮውን ተመልከቱ።'},
  init(st){st.pred=null;st.ran={}},
  render(p,api,st){const all=SL.every((_,i)=>st.ran[i]);
   p.innerHTML=`${st.pred===null?`<div class="q"><span class="qt">${tx({en:'Your prediction: which slope will lose the most soil?',am:'ግምታችሁ፦ ብዙ አፈር የሚያጣው የትኛው ተዳፋት ነው?'})}</span></div><div class="opts">${SL.map((s,i)=>`<button class="opt" data-pred="${i}">${esc(tx(s))}</button>`).join('')}</div>`
     :`<div class="note">${tx({en:'You predicted: {p}. Now test it!',am:'የገመታችሁት፦ {p}። አሁን ፈትሹት!'},{p:tx(SL[st.pred])})}</div>`}
    <div class="row" style="gap:12px;align-items:stretch">${SL.map((s,i)=>`<div class="card-item" style="flex:1 1 180px;display:grid;gap:6px;justify-items:center">${slope(s,st.ran[i])}<b>${esc(tx(s))}</b>
     ${st.ran[i]?`<span class="small">${tx({en:'Soil lost: {n} cups',am:'የጠፋ አፈር፦ {n} ኩባያ'},{n:s.lost})}</span>`:`<button class="btn" data-rain="${i}" ${st.pred===null?'disabled':''}>${tx({en:'Make it rain',am:'አዝንቡ'})}</button>`}</div>`).join('')}</div>
    ${all?`<div class="explain">${tx({en:'Bare soil lost the most: rain washed it away. Roots hold soil together, and terraces slow the water down. This is why farmers build terraces and plant trees. {r}',am:'የተራቆተው አፈር ብዙ አጣ፦ ዝናቡ ጠርጎ ወሰደው። ሥሮች አፈርን ይይዛሉ፤ እርከን የውኃውን ፍጥነት ይቀንሳል። አርሶ አደሮች እርከን የሚሠሩትና ዛፍ የሚተክሉት ለዚህ ነው። {r}'},{r:st.pred===0?tx({en:'Your prediction was right!',am:'ግምታችሁ ትክክል ነበር!'}):tx({en:'Your prediction was different, and that is fine: testing is how scientists learn.',am:'ግምታችሁ የተለየ ነበር፤ ችግር የለውም፦ ሳይንቲስቶች የሚማሩት በመፈተሽ ነው።'})})}</div>`:''}`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
    if(b.dataset.pred!==undefined){st.pred=+b.dataset.pred;api.S.tick()}
    if(b.dataset.rain!==undefined){st.ran[+b.dataset.rain]=true;api.S.tone([400,350,300],.08,'sine',.08);if(SL.every((_,i)=>st.ran[i]))api.complete()}
    api.rerender()}}},
 {title:{en:'Why are resources disappearing?',am:'የተፈጥሮ ሀብቶች ለምን ይመናመናሉ?'},type:'quiz',
  tip:{en:'Read a grandfather\'s memory, then answer.',am:'የአንድ አያት ትዝታ አንብቡ፤ ከዚያ መልሱ።'},
  passage:{title:{en:'Grandfather\'s green hill',am:'የአያቴ አረንጓዴ ኮረብታ'},paras:{
   en:['When Grandfather was a boy, he herded cattle on a green hill full of tall native trees, monkeys and singing birds. Peas, beans and barley grew well around it.','Forty years later he went back. The trees were gone. Floods had cut deep gullies into the bare land, and the crops grew poorly. "The land looks like a person whose clothes were taken away," he said sadly.','Then he smiled at his granddaughter. "But we can bring it back. Let us plant trees and build terraces."'],
   am:['አያቴ ልጅ ሳሉ ረጃጅም ሀገር በቀል ዛፎች፣ ዝንጀሮዎችና የሚዘምሩ ወፎች በሞሉበት አረንጓዴ ኮረብታ ላይ ከብት ይጠብቁ ነበር። በዙሪያው አተር፣ ባቄላና ገብስ በደንብ ይበቅል ነበር።','ከአርባ ዓመት በኋላ ተመልሰው ሄዱ። ዛፎቹ ጠፍተዋል። ጎርፍ በተራቆተው መሬት ላይ ጥልቅ ገደል ቦርቡሮ ነበር፤ ሰብሉም ደካማ ነበር። “መሬቱ ልብሱን እንደተገፈፈ ሰው ይመስላል” አሉ በሐዘን።','ከዚያ ለልጅ ልጃቸው ፈገግ አሉ። “ግን መመለስ እንችላለን። ዛፍ እንትከል፤ እርከን እንሥራ።”']}},
  items:[
   {q:{en:'What happened to the hill after 40 years?',am:'ከ40 ዓመት በኋላ ኮረብታው ምን ሆነ?'},o:[{en:'Trees were cut and floods eroded the soil',am:'ዛፎች ተቆረጡ፤ ጎርፍ አፈሩን ሸረሸረ'},{en:'It became a bigger forest',am:'ትልቅ ደን ሆነ'},{en:'Nothing changed',am:'ምንም አልተለወጠም'}],a:0},
   {q:{en:'Why do resources disappear when the population grows fast?',am:'የሕዝብ ቁጥር በፍጥነት ሲጨምር የተፈጥሮ ሀብቶች ለምን ይመናመናሉ?'},o:[{en:'More land is needed for farms, firewood, grazing and building',am:'ለእርሻ፣ ለማገዶ፣ ለግጦሽና ለግንባታ ብዙ መሬት ይፈለጋል'},{en:'Because it rains more',am:'ብዙ ስለሚዘንብ'},{en:'Because animals eat the soil',am:'እንስሳት አፈር ስለሚበሉ'}],a:0},
   {q:{en:'Which is a result of cutting forests?',am:'ደን መጨፍጨፍ የሚያስከትለው የትኛው ነው?'},o:[{en:'Wild animals migrate or disappear',am:'የዱር እንስሳት ይሰደዳሉ ወይም ይጠፋሉ'},{en:'Soil becomes richer',am:'አፈሩ ይበለጽጋል'},{en:'More rain falls',am:'ብዙ ዝናብ ይዘንባል'}],a:0},
   {q:{en:'Which way can bring the hill back?',am:'ኮረብታውን የሚመልሰው የትኛው መንገድ ነው?'},o:[{en:'Planting trees and building terraces',am:'ዛፍ መትከልና እርከን መሥራት'},{en:'Cutting the last trees',am:'የቀሩትን ዛፎች መቁረጥ'},{en:'Letting animals graze everywhere',am:'እንስሳት በየቦታው እንዲግጡ መተው'}],a:0},
   {q:{en:'Minerals are non-renewable. What does that mean?',am:'ማዕድናት ታዳሽ አይደሉም። ይህ ምን ማለት ነው?'},o:[{en:'Once used up, they do not grow back',am:'ካለቁ በኋላ ተመልሰው አይፈጠሩም'},{en:'They grow back every year',am:'በየዓመቱ ተመልሰው ያድጋሉ'},{en:'They are made in factories',am:'በፋብሪካ ይሠራሉ'}],a:0,e:{en:'So we must use minerals wisely and not waste them.',am:'ስለዚህ ማዕድናትን በጥበብ መጠቀም፣ አለማባከን አለብን።'}}]},
 {title:{en:'Solid or liquid waste?',am:'ደረቅ ወይስ ፈሳሽ ቆሻሻ?'},type:'sort',
  tip:{en:'Waste comes from our daily life. Solid waste: paper, plastic bags, peels. Liquid waste: dirty water and urine. Liquid waste smells, breeds flies and mosquitoes, and can pollute rivers. Sort each kind.',am:'ቆሻሻ ከዕለት ተዕለት ኑሯችን ይፈጠራል። ደረቅ ቆሻሻ፦ ወረቀት፣ ፌስታል፣ ልጣጭ። ፈሳሽ ቆሻሻ፦ እጣቢና ሽንት። ፈሳሽ ቆሻሻ መጥፎ ሽታ ያመጣል፣ ዝንብና ትንኝ ያራባል፣ ወንዝን ይበክላል። እያንዳንዱን መድቡ።'},
  buckets:[{en:'Solid waste',am:'ደረቅ ቆሻሻ'},{en:'Liquid waste',am:'ፈሳሽ ቆሻሻ'}],
  items:[{t:{en:'Plastic bag',am:'ፌስታል'},b:0},{t:{en:'Banana and orange peels',am:'የሙዝና የብርቱካን ልጣጭ'},b:0},{t:{en:'Torn paper',am:'የተቀደደ ወረቀት'},b:0},{t:{en:'Dirty dish water',am:'የዕቃ እጣቢ'},b:1},{t:{en:'Factory waste water',am:'የፋብሪካ ፍሳሽ'},b:1},{t:{en:'Broken bottle',am:'የተሰበረ ጠርሙስ'},b:0},{t:{en:'Toilet waste water',am:'የመጸዳጃ ቤት ፍሳሽ'},b:1}]},
 {type:'exam',items:[
   {q:{en:'The condition of the air that changes within 24 hours is called…',am:'በ24 ሰዓት ውስጥ የሚለዋወጥ የአየር ሁኔታ ምን ይባላል?'},o:[{en:'weather',am:'የአየር ጠባይ'},{en:'climate',am:'የአየር ንብረት'},{en:'mineral',am:'ማዕድን'}],a:0},
   {q:{en:'At what time of day is it usually hottest?',am:'በቀን ውስጥ በአብዛኛው በጣም የሚሞቀው መቼ ነው?'},o:[{en:'Midday',am:'እኩለ ቀን'},{en:'Early morning',am:'ማለዳ'},{en:'Midnight',am:'እኩለ ሌሊት'}],a:0},
   {q:{en:'How are height and temperature related?',am:'ከፍታና ሙቀት እንዴት ይዛመዳሉ?'},o:[{en:'When height goes down, temperature goes up',am:'ከፍታ ሲቀንስ ሙቀት ይጨምራል'},{en:'When height goes up, temperature goes up',am:'ከፍታ ሲጨምር ሙቀት ይጨምራል'},{en:'They are not related',am:'ግንኙነት የላቸውም'}],a:0},
   {q:{en:'Which is NOT an element of weather?',am:'ከሚከተሉት የአየር ጠባይ አባል ያልሆነው የቱ ነው?'},o:[{en:'Latitude line',am:'የኬክሮስ መስመር'},{en:'Rain',am:'ዝናብ'},{en:'Wind',am:'ነፋስ'}],a:0,e:{en:'Latitude is a CONTROL of climate, not an element. Elements are rain, temperature, wind, cloud, humidity and so on.',am:'ኬክሮስ የአየር ንብረት ተቆጣጣሪ እንጂ አባል አይደለም። አባላቱ ዝናብ፣ ሙቀት፣ ነፋስ፣ ደመና፣ እርጥበት ወዘተ ናቸው።'}},
   {q:{en:'Which is a man-made resource?',am:'ሰው ሠራሽ ሀብት የትኛው ነው?'},o:[{en:'Dam',am:'ግድብ'},{en:'Soil',am:'አፈር'},{en:'Stone',am:'ድንጋይ'}],a:0},
   {q:{en:'Which is a way to care for natural resources?',am:'የተፈጥሮ ሀብትን የመንከባከቢያ ዘዴ የትኛው ነው?'},o:[{en:'All of these',am:'ሁሉም'},{en:'Planting trees',am:'ዛፍ መትከል'},{en:'Building terraces',am:'እርከን መሥራት'}],a:0},
   {q:{en:'The most productive climate zone for people is…',am:'ለሰው ልጅ በጣም ምርታማ የሆነው የአየር ንብረት ክልል…'},o:[{en:'Woina Dega',am:'ወይና ደጋ'},{en:'Bereha',am:'በረሃ'},{en:'Wurch',am:'ውርጭ'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Weather changes daily; climate is the long-time average. Height makes the five climate zones. Nature gives us soil, water, air, plants, animals and minerals, and we must protect them.',am:'የአየር ጠባይ በየቀኑ ይለዋወጣል፤ የአየር ንብረት የረጅም ጊዜ አማካይ ነው። ከፍታ አምስቱን የአየር ንብረት ክልሎች ይፈጥራል። ተፈጥሮ አፈር፣ ውኃ፣ አየር፣ ዕፅዋት፣ እንስሳትና ማዕድናት ትሰጠናለች፤ እኛም ልንጠብቃቸው ይገባል።'},
  points:[
   {en:'Elements of weather and climate: temperature, rain, wind, humidity, cloud, dew, frost, sunshine.',am:'የአየር ጠባይና የአየር ንብረት አባላት፦ ሙቀት፣ ዝናብ፣ ነፋስ፣ እርጥበት፣ ደመና፣ ጤዛ፣ ውርጭ፣ የፀሐይ ብርሃን።'},
   {en:'Controls of climate: height, latitude, landforms, clouds, winds, distance from water bodies.',am:'የአየር ንብረት ተቆጣጣሪዎች፦ ከፍታ፣ ኬክሮስ፣ የመሬት ገጽታ፣ ደመና፣ ነፋስ፣ ከውኃማ አካል ያለው ርቀት።'},
   {en:'Five zones from top to bottom: Wurch, Dega, Woina Dega, Kolla, Bereha.',am:'አምስቱ ክልሎች ከላይ ወደ ታች፦ ውርጭ፣ ደጋ፣ ወይና ደጋ፣ ቆላ፣ በረሃ።'},
   {en:'Resources disappear because of farming, firewood, grazing and building needs. Results: erosion, poor harvests, animals migrating, climate change.',am:'ሀብቶች የሚመናመኑት በእርሻ፣ በማገዶ፣ በግጦሽና በግንባታ ፍላጎት ነው። ውጤቱ፦ የአፈር መሸርሸር፣ ምርት መቀነስ፣ የዱር እንስሳት መሰደድ፣ የአየር ንብረት መዛባት።'},
   {en:'Care: plant trees, build terraces, protect wild animals, put waste in its place.',am:'እንክብካቤ፦ ዛፍ መትከል፣ እርከን መሥራት፣ የዱር እንስሳትን መጠበቅ፣ ቆሻሻን በቦታው ማስወገድ።'}],
  words:[[{en:'Weather',am:'የአየር ጠባይ'},{en:'air condition over a short time',am:'የአጭር ጊዜ የአየር ሁኔታ'}],[{en:'Climate',am:'የአየር ንብረት'},{en:'average weather over 30+ years',am:'የ30+ ዓመት አማካይ የአየር ሁኔታ'}],[{en:'Erosion',am:'የአፈር መሸርሸር'},{en:'soil washed away by water or wind',am:'አፈር በውኃ ወይም በነፋስ ሲወሰድ'}],[{en:'Non-renewable',am:'ኢ-ታዳሽ'},{en:'cannot be made again once used up',am:'ካለቀ ዳግም የማይፈጠር'}]],
  remember:{en:'Higher = colder. Bare soil runs away; roots and terraces hold it.',am:'ከፍታ = ቅዝቃዜ። የተራቆተ አፈር ይሸሻል፤ ሥርና እርከን ይይዙታል።'},
  exam:[[{en:'Name the five climate zones from top to bottom.',am:'አምስቱን የአየር ንብረት ክልሎች ከላይ ወደ ታች ጥቀሱ።'},{en:'Wurch, Dega, Woina Dega, Kolla, Bereha',am:'ውርጭ፣ ደጋ፣ ወይና ደጋ፣ ቆላ፣ በረሃ'}],
   [{en:'Give three natural resources.',am:'ሦስት የተፈጥሮ ሀብቶችን ጥቀሱ።'},{en:'soil, water, air (also plants, animals, minerals)',am:'አፈር፣ ውኃ፣ አየር (ዕፅዋት፣ እንስሳት፣ ማዕድናትም)'}],
   [{en:'Two harms of liquid waste?',am:'የፈሳሽ ቆሻሻ ሁለት ጉዳቶች?'},{en:'bad smell and breeding of flies/mosquitoes',am:'መጥፎ ሽታና የዝንብ/ትንኝ መራቢያ'}],
   [{en:'Why do farmers study climate?',am:'አርሶ አደሮች የአየር ንብረትን ለምን ያጠናሉ?'},{en:'To know when to prepare land, sow and harvest',am:'መቼ ማሳ ማዘጋጀት፣ መዝራትና መሰብሰብ እንዳለባቸው ለማወቅ'}]],
  innovate:{title:{en:'Compost business: turn peels into money',am:'የኮምፖስት ሥራ፦ ልጣጭን ወደ ገንዘብ'},text:{en:'Kitchen peels thrown on the ground pollute the area. Mixed and left to rot, they become compost: rich food for soil that gardeners will buy.',am:'መሬት ላይ የሚጣል የማዕድ ቤት ልጣጭ አካባቢን ይበክላል። ተቀላቅሎ እንዲበሰብስ ሲደረግ ግን ኮምፖስት ይሆናል፦ አትክልተኞች የሚገዙት የአፈር ምግብ።'},
   steps:[{en:'Dig a small pit at home or school with an adult.',am:'ከትልቅ ሰው ጋር ቤት ወይም ትምህርት ቤት ትንሽ ጉድጓድ ቆፍሩ።'},{en:'Add layers: peels, dry leaves, a little soil, a little water.',am:'በንብርብር ጨምሩ፦ ልጣጭ፣ ደረቅ ቅጠል፣ ትንሽ አፈር፣ ትንሽ ውኃ።'},{en:'Turn it every week; after about 2 months it is dark compost.',am:'በየሳምንቱ ገልብጡት፤ ከ2 ወር ገደማ በኋላ ጥቁር ኮምፖስት ይሆናል።'},{en:'Grow vegetables with it, or pack it and sell it to gardeners.',am:'አትክልት አብቅሉበት፤ ወይም አሽጋችሁ ለአትክልተኞች ሽጡት።'}]}}}
 ]});
})();
