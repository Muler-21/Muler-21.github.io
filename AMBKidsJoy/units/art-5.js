/* ሥነ ጥበባት · ምዕራፍ 5 · የሥነ ጥበባት ዝምድና ከሌሎች ትምህርቶች ጋር */
(function(){
const {tx,esc,rnd,shuffle,numOpts}=G3;
const SH={tri:{en:'triangles',am:'ሦስት ማዕዘኖች'},circ:{en:'circles',am:'ክቦች'},rect:{en:'rectangles',am:'አራት ማዕዘኖች'}};
function shapeArt(){/* random picture made of shapes; returns {svg,counts} */
 const n={tri:rnd(2,5),circ:rnd(1,5),rect:rnd(2,5)};const cells=shuffle(Array.from({length:20},(_,i)=>i));let k=0,s='';
 const col=['#D9483B','#2F6FDE','#1E8A5B','#F4B400','#8A4FBF'];
 for(const t of ['tri','circ','rect'])for(let i=0;i<n[t];i++){const c=cells[k++],x=20+(c%5)*56,y=20+Math.floor(c/5)*44,f=col[(k)%5];
  if(t==='tri')s+=`<path d="M${x} ${y+34}L${x+18} ${y}L${x+36} ${y+34}Z" fill="${f}"/>`;
  if(t==='circ')s+=`<circle cx="${x+18}" cy="${y+17}" r="16" fill="${f}"/>`;
  if(t==='rect')s+=`<rect x="${x}" y="${y+4}" width="38" height="26" rx="3" fill="${f}"/>`}
 return{svg:`<svg viewBox="0 0 300 200" role="img" aria-label="shapes" style="width:min(340px,100%);height:auto;background:var(--surface-2);border-radius:12px">${s}</svg>`,n}}
function pie(parts,col){const r=50,cx=60,cy=60;let s='';for(let i=0;i<parts;i++){const a0=-Math.PI/2+i*2*Math.PI/parts,a1=a0+2*Math.PI/parts;
  s+=`<path d="M${cx} ${cy}L${(cx+r*Math.cos(a0)).toFixed(1)} ${(cy+r*Math.sin(a0)).toFixed(1)}A${r} ${r} 0 0 1 ${(cx+r*Math.cos(a1)).toFixed(1)} ${(cy+r*Math.sin(a1)).toFixed(1)}Z" fill="${i<col?'#F4B400':'var(--surface)'}" stroke="#8A5A2B" stroke-width="3"/>`}
 return`<svg viewBox="0 0 120 120" role="img" aria-label="injera" width="150" height="150">${s}</svg>`}
const duck=(x)=>`<g transform="translate(${x} 0)"><ellipse cx="20" cy="40" rx="18" ry="12" fill="#F4C20D"/><circle cx="34" cy="24" r="9" fill="#F4C20D"/><path d="M42 24l9 2-9 3z" fill="#E07A1F"/><circle cx="36" cy="22" r="1.8" fill="#1B2A4A"/></g>`;
Unit.start({
 id:'art-5',subject:'art',
 subjectName:{en:'Performing & Visual Arts',am:'ሥነ ጥበባት'},chapter:{en:'Chapter 5',am:'ምዕራፍ 5'},
 title:{en:'Art and Other Subjects',am:'የሥነ ጥበባት ዝምድና ከሌሎች ትምህርቶች ጋር'},
 footer:{en:'Built on the Grade 3 Performing & Visual Arts student book (ANRS Education Bureau), Chapter 5.',am:'በ3ኛ ክፍል የሥነ ጥበባት መጽሐፍ (አብክመ ትምህርት ቢሮ) ምዕራፍ 5 ላይ የተመሰረተ።'},
 missions:[
 {title:{en:'Art + maths: count the shapes',am:'ጥበብ + ሒሳብ፦ ቅርጾችን ቁጠሩ'},type:'drill',need:5,
  tip:{en:'Artists build pictures from basic shapes, and mathematicians count them! Look at the shape picture and count carefully.',am:'ሠዓሊዎች ስዕልን ከመሠረታዊ ቅርጾች ይገነባሉ፤ የሒሳብ ሰዎች ደግሞ ይቆጥሯቸዋል! የቅርጽ ስዕሉን ተመልከቱና በጥንቃቄ ቁጠሩ።'},
  gen(){const a=shapeArt();const t=['tri','circ','rect'][rnd(0,2)];const ans=a.n[t];const {o,a:ai}=numOpts(ans,[1,-1,2,-2]);
   return{fig:a.svg,q:{en:'How many {s} are in the picture?'.replace('{s}',SH[t].en),am:'በስዕሉ ውስጥ ስንት {s} አሉ?'.replace('{s}',SH[t].am)},o,a:ai}}},
 {title:{en:'Art + maths: fractions of injera',am:'ጥበብ + ሒሳብ፦ የእንጀራ ክፍልፋይ'},type:'drill',need:4,
  tip:{en:'Colour helps us see fractions. The injera is cut into equal parts and some parts are coloured. What fraction is coloured?',am:'ቀለም ክፍልፋይን እንድናይ ይረዳናል። እንጀራው በእኩል ክፍሎች ተቆርጧል፤ የተወሰኑት ክፍሎች ቀለም ተቀብተዋል። ቀለም የተቀባው ምን ያህል ክፍልፋይ ነው?'},
  gen(){const parts=[2,3,4,6,8][rnd(0,4)];const col=rnd(1,parts-1);const right=`${col}/${parts}`;
   const set=new Set([right]);const cand=[`${parts-col}/${parts}`,`${col}/${parts+1}`,`${parts}/${col}`,`${col+1}/${parts}`];for(const c of cand){if(set.size<3&&c!==right&&!(c.split('/')[0]===c.split('/')[1]))set.add(c)}
   const o=shuffle([...set]);return{fig:pie(parts,col),q:{en:'What fraction of the injera is coloured?',am:'ከእንጀራው ቀለም የተቀባው ክፍልፋይ ስንት ነው?'},o,a:o.indexOf(right),e:{en:'{c} coloured parts out of {p} equal parts = {c}/{p}'.replace(/\{c\}/g,col).replace(/\{p\}/g,parts),am:'ከ{p} እኩል ክፍሎች {c} ቀለም ተቀብተዋል = {c}/{p}'.replace(/\{c\}/g,col).replace(/\{p\}/g,parts)}}}},
 {title:{en:'Art + maths: the counting-song ducks',am:'ጥበብ + ሒሳብ፦ የመዝሙሩ ዳክዬዎች'},type:'drill',need:4,
  tip:{en:'In the counting song from the book, ducks follow their mother and some do not come back. Songs make subtraction easy to remember. How many ducks are left?',am:'በመጽሐፉ ባለው የቁጥር መዝሙር ዳክዬዎች እናታቸውን ይከተላሉ፤ አንዳንዶቹ አይመለሱም። መዝሙር መቀነስን ለማስታወስ ቀላል ያደርገዋል። ስንት ዳክዬዎች ቀሩ?'},
  gen(){const n=rnd(3,8),g=rnd(1,n-1);const {o,a}=numOpts(n-g,[1,-1,2]);
   return{fig:`<svg viewBox="0 0 ${Math.max(n*54,200)} 60" role="img" aria-label="ducks" style="width:min(${Math.max(n*54,200)*1.6}px,100%);height:auto">${Array.from({length:n},(_,i)=>`<g opacity="${i>=n-g?.25:1}">${duck(i*54)}</g>`).join('')}</svg>`,
    q:{en:'{n} ducks went out to play. {g} did not come back. How many came back?'.replace('{n}',n).replace('{g}',g),am:'{n} ዳክዬዎች ሊጫወቱ ወጡ። {g} አልተመለሱም። ስንት ተመለሱ?'.replace('{n}',n).replace('{g}',g)},o,a,
    e:{en:'{n} − {g} = {r}'.replace('{n}',n).replace('{g}',g).replace('{r}',n-g),am:'{n} − {g} = {r}'.replace('{n}',n).replace('{g}',g).replace('{r}',n-g)}}}},
 {title:{en:'Which subject does it help?',am:'የትኛውን ትምህርት ይረዳል?'},type:'match',
  tip:{en:'Art connects to every subject: it builds confidence, memory, creativity and makes learning fun. Match each art activity with the subject it helps.',am:'ሥነ ጥበብ ከሁሉም ትምህርቶች ጋር ይዛመዳል፦ በራስ መተማመንን፣ ትውስታንና ፈጠራን ያዳብራል፤ መማርን አስደሳች ያደርጋል። እያንዳንዱን የጥበብ ተግባር ከሚረዳው ትምህርት ጋር አዛምዱ።'},
  rounds:[[[{en:'Singing the A, B, C song',am:'የA, B, C መዝሙር መዘመር'},{en:'English',am:'እንግሊዝኛ'}],[{en:'Shaping fidel letters from clay',am:'ፊደላትን በሸክላ መቅረጽ'},{en:'Amharic',am:'አማርኛ'}],[{en:'Drawing pictures to add numbers',am:'ቁጥር ለመደመር ስዕል መሳል'},{en:'Mathematics',am:'ሒሳብ'}],[{en:'A song about washing hands with soap',am:'እጅን በሳሙና ስለ መታጠብ የሚዘመር መዝሙር'},{en:'Science and health',am:'ሳይንስና ጤና'}],[{en:'Singing while skipping rope',am:'ገመድ እየዘለሉ መዘመር'},{en:'Health & PE',am:'ጤናና ሰውነት ማጎልመሻ'}],[{en:'A song about rainbow colours',am:'ስለ ቀስተ ደመና ቀለማት መዝሙር'},{en:'The arts with each other (music + colour)',am:'ሥነ ጥበባት እርስ በርስ (ሙዚቃ + ቀለም)'}]]]},
 {title:{en:'Art + science: colours of the rainbow',am:'ጥበብ + ሳይንስ፦ የቀስተ ደመና ቀለማት'},type:'order',
  tip:{en:'A rainbow appears when sunlight passes through raindrops and splits into colours. Artists use these colours every day. Put them in rainbow order, from the top.',am:'ቀስተ ደመና የሚታየው የፀሐይ ብርሃን በዝናብ ጠብታዎች ውስጥ አልፎ ወደ ቀለማት ሲከፈል ነው። ሠዓሊዎች እነዚህን ቀለማት በየቀኑ ይጠቀማሉ። ከላይ ጀምራችሁ በቀስተ ደመና ቅደም ተከተል አስቀምጧቸው።'},
  rounds:[{items:[{en:'Red',am:'ቀይ'},{en:'Orange',am:'ብርቱካናማ'},{en:'Yellow',am:'ቢጫ'},{en:'Green',am:'አረንጓዴ'},{en:'Blue',am:'ሰማያዊ'},{en:'Indigo',am:'ደማቅ ሰማያዊ'},{en:'Violet',am:'ወይን ጠጅ'}]}]},
 {title:{en:'True or false?',am:'እውነት ወይስ ሐሰት?'},type:'quiz',
  tip:{en:'Think about what you learned in this chapter.',am:'በዚህ ምዕራፍ የተማራችሁትን አስቡ።'},
  items:[
   {q:{en:'Music has very little connection with other subjects.',am:'ሙዚቃ ከሌሎች ትምህርቶች ጋር ያለው ግንኙነት ዝቅተኛ ነው።'},o:[{en:'False',am:'ሐሰት'},{en:'True',am:'እውነት'}],a:0},
   {q:{en:'We can send different messages through music.',am:'በሙዚቃ የተለያዩ መልዕክቶችን ማስተላለፍ ይቻላል።'},o:[{en:'True',am:'እውነት'},{en:'False',am:'ሐሰት'}],a:0},
   {q:{en:'Doing sport does more harm than good.',am:'ስፖርት መሥራት ከጥቅሙ ይልቅ ጉዳቱ ያመዝናል።'},o:[{en:'False',am:'ሐሰት'},{en:'True',am:'እውነት'}],a:0},
   {q:{en:'If a classmate skips rope, which subject does it remind you of?',am:'አንድ የክፍል ጓደኛ ገመድ ቢዘል የትኛውን ትምህርት ታስታውሳላችሁ?'},o:[{en:'Health & PE',am:'ጤናና ሰውነት ማጎልመሻ'},{en:'Music only',am:'ሙዚቃን ብቻ'},{en:'Amharic',am:'አማርኛ'}],a:0},
   {q:{en:'A story from your Amharic book can be shown as…',am:'ከአማርኛ መጽሐፋችሁ ያለ ተረት በ… ሊቀርብ ይችላል'},o:[{en:'a drama',am:'ድራማ'},{en:'a maths sum',am:'የሒሳብ ስሌት'},{en:'nothing',am:'ምንም'}],a:0}]},
 {type:'exam',items:[
   {q:{en:'Singing "A, B, C, D" connects music with…',am:'“A, B, C, D” መዘመር ሙዚቃን ከ… ጋር ያገናኛል'},o:[{en:'English',am:'እንግሊዝኛ'},{en:'Mathematics',am:'ሒሳብ'},{en:'Amharic',am:'አማርኛ'}],a:0},
   {q:{en:'Singing a rainbow song connects…',am:'የቀስተ ደመና መዝሙር መዘመር…'},o:[{en:'the arts with each other',am:'ሥነ ጥበባትን እርስ በርስ ያገናኛል'},{en:'only Amharic',am:'አማርኛን ብቻ'},{en:'nothing',am:'ምንም'}],a:0},
   {q:{en:'Which is a benefit of art for children?',am:'ሥነ ጥበብ ለልጆች የሚሰጠው ጥቅም የትኛው ነው?'},o:[{en:'All of these',am:'ሁሉም'},{en:'Confidence',am:'በራስ መተማመን'},{en:'Better memory',am:'የተሻለ ትውስታ'},{en:'Less worry',am:'ያነሰ ጭንቀት'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Art connects with every subject: songs teach letters and numbers, drawings show maths, drama tells stories, and music makes exercise fun. Art makes learning memorable.',am:'ሥነ ጥበብ ከሁሉም ትምህርቶች ጋር ይዛመዳል፦ መዝሙሮች ፊደልና ቁጥር ያስተምራሉ፣ ስዕሎች ሒሳብን ያሳያሉ፣ ድራማ ተረት ይነግራል፣ ሙዚቃ እንቅስቃሴን አስደሳች ያደርጋል። ጥበብ ትምህርትን የማይረሳ ያደርጋል።'},
  points:[
   {en:'Language: fidel shapes, stories as drama, poems as songs.',am:'ቋንቋ፦ የፊደል ቅርጽ፣ ተረትን በድራማ፣ ግጥምን በዜማ።'},
   {en:'Maths: basic shapes, fractions, graphs and counting songs.',am:'ሒሳብ፦ መሠረታዊ ቅርጾች፣ ክፍልፋይ፣ ግራፍና የቁጥር መዝሙሮች።'},
   {en:'Science: songs about hygiene, plants and a clean environment.',am:'ሳይንስ፦ ስለ ንጽህና፣ ስለ ዕፅዋትና ስለ ንጹህ አካባቢ መዝሙሮች።'},
   {en:'PE: singing games like skipping rope and teter qelmosh.',am:'ሰውነት ማጎልመሻ፦ እንደ ገመድ ዝላይና ቅልሞሽ ያሉ የዜማ ጨዋታዎች።'},
   {en:'Benefits: confidence, brain growth, friendship, less worry, better speech and memory.',am:'ጥቅሞች፦ በራስ መተማመን፣ የአእምሮ እድገት፣ ወዳጅነት፣ ያነሰ ጭንቀት፣ የተሻለ ንግግርና ትውስታ።'}],
  words:[[{en:'Fraction',am:'ክፍልፋይ'},{en:'a part of a whole',am:'የሙሉ ነገር ክፍል'}],[{en:'Drama',am:'ድራማ'},{en:'a story acted out',am:'በተግባር የሚቀርብ ታሪክ'}],[{en:'Rhythm',am:'ምት'},{en:'the repeating beat of music',am:'የሙዚቃ ተደጋጋሚ ምት'}]],
  remember:{en:'Sing it, draw it, act it: then you will never forget it.',am:'ዘምሩት፣ ሳሉት፣ ተውኑት፦ ከዚያ አትረሱትም።'},
  exam:[[{en:'Give two ways art helps maths.',am:'ጥበብ ሒሳብን የሚረዳባቸውን ሁለት መንገዶች ስጡ።'},{en:'Drawing shapes; counting songs',am:'ቅርጽ መሳል፤ የቁጥር መዝሙሮች'}],[{en:'List three benefits of art for children.',am:'ሥነ ጥበብ ለልጆች የሚሰጣቸውን ሦስት ጥቅሞች ዘርዝሩ።'},{en:'Confidence, memory, less worry',am:'በራስ መተማመን፣ ትውስታ፣ ያነሰ ጭንቀት'}],[{en:'Order of the rainbow colours?',am:'የቀስተ ደመና ቀለማት ቅደም ተከተል?'},{en:'Red, orange, yellow, green, blue, indigo, violet',am:'ቀይ፣ ብርቱካናማ፣ ቢጫ፣ አረንጓዴ፣ ሰማያዊ፣ ደማቅ ሰማያዊ፣ ወይን ጠጅ'}]],
  innovate:{title:{en:'Edutainment creator',am:'የትምህርት-መዝናኛ ፈጣሪ'},text:{en:'"Edutainment" companies make learning fun with songs, videos and posters, and they are a growing business. Create a learning product for younger children.',am:'“የትምህርት-መዝናኛ” ድርጅቶች በመዝሙር፣ በቪዲዮና በፖስተር መማርን አስደሳች ያደርጋሉ፤ እያደገ ያለ ሥራ ነው። ለታናናሽ ልጆች የመማሪያ ምርት ፍጠሩ።'},
   steps:[{en:'Choose a hard topic, such as the times table or fidel families.',am:'ከባድ ርዕስ ምረጡ፤ ለምሳሌ የማባዛት ሰንጠረዥ ወይም የፊደል ቤተሰቦች።'},{en:'Write a short original song or draw a colourful poster about it.',am:'ስለ እሱ አጭር አዲስ መዝሙር ጻፉ ወይም ባለ ቀለም ፖስተር ሳሉ።'},{en:'Test it with a younger child: did they learn faster?',am:'ከታናሽ ልጅ ጋር ሞክሩት፦ በፍጥነት ተማሩ?'},{en:'Improve it, then make copies for Grade 1 and 2 classrooms.',am:'አሻሽላችሁ ለ1ኛና 2ኛ ክፍል ቅጂዎችን ሥሩ።'}]}}}
 ]});
})();
