/* ግብረገብ · ምዕራፍ 1 · ሰብዓዊነትን ማክበር */
(function(){
const {tx,esc,store,rnd}=G3;
const V={love:{en:'Love',am:'ፍቅር'},comp:{en:'Compassion',am:'ርኅራኄ'},charity:{en:'Charity',am:'በጎ አድራጎት'},vol:{en:'Volunteering',am:'በጎ ፈቃደኝነት'},
 hum:{en:'Humility',am:'ትህትና'},bro:{en:'Brotherhood & sisterhood',am:'ወንድማማችነት'},pat:{en:'Patience',am:'ትዕግስት'},peace:{en:'Peace',am:'ሰላም'}};
const ACTS=[
 {en:'Help a younger child carry their bag',am:'ታናሽ ልጅ ቦርሳውን እንዲሸከም መርዳት'},
 {en:'Share my snack with a friend who has none',am:'ምግብ የሌለውን ጓደኛ ምግቤን ማካፈል'},
 {en:'Say "thank you" and "sorry" every day',am:'በየቀኑ “አመሰግናለሁ” እና “ይቅርታ” ማለት'},
 {en:'Wait for my turn without pushing',am:'ሳልገፋ ተራዬን መጠበቅ'},
 {en:'Play with a classmate who is alone',am:'ብቻውን ካለ የክፍል ጓደኛ ጋር መጫወት'},
 {en:'Help clean our classroom without being asked',am:'ሳልታዘዝ የመማሪያ ክፍላችንን ማጽዳት'},
 {en:'Visit or help an older neighbour',am:'አረጋዊ ጎረቤትን መጠየቅ ወይም መርዳት'},
 {en:'Stop a quarrel by talking calmly',am:'ጭቅጭቅን በረጋ ንግግር ማቆም'}];

Unit.start({
 id:'moral-1',subject:'moral',
 subjectName:{en:'Moral Education',am:'ግብረገብ'},
 chapter:{en:'Chapter 1',am:'ምዕራፍ 1'},
 title:{en:'Respecting Humanity',am:'ሰብዓዊነትን ማክበር'},
 footer:{en:'Built on the Grade 3 Moral Education student book, Chapter 1. The situations are new, written for this unit.',am:'በ3ኛ ክፍል የግብረገብ መጽሐፍ ምዕራፍ 1 ላይ የተመሰረተ። ሁኔታዎቹ ለዚህ ክፍል አዲስ የተጻፉ ናቸው።'},
 missions:[
 {title:{en:'What is humanity?',am:'ሰብዓዊነት ምንድን ነው?'},type:'quiz',
  tip:{en:'Humanity has two meanings. It means all human beings, and it means kindness from the heart. People are different in height, language and family, but every person has equal dignity.',am:'ሰብዓዊነት ሁለት ትርጉሞች አሉት። የሰው ልጆችን ሁሉ ያመለክታል፤ ከልብ የመነጨ ደግነትንም ያመለክታል። ሰዎች በቁመት፣ በቋንቋና በቤተሰብ ይለያያሉ፤ ነገር ግን እያንዳንዱ ሰው እኩል ክብር አለው።'},
  items:[
   {q:{en:'Humanity means human beings. What is its second meaning?',am:'ሰብዓዊነት የሰው ልጅ ማለት ነው። ሁለተኛው ትርጉሙ ምንድን ነው?'},o:[{en:'Being rich',am:'ሀብታም መሆን'},{en:'Kindness from the heart',am:'ከልብ የመነጨ ደግነት'},{en:'Being tall',am:'ረጅም መሆን'},{en:'Winning games',am:'ጨዋታ ማሸነፍ'}],a:1},
   {q:{en:'What can a person do that a chair cannot?',am:'ሰው ማድረግ የሚችለው፣ ወንበር ግን የማይችለው ምንድን ነው?'},o:[{en:'Stand in a room',am:'ክፍል ውስጥ መቆም'},{en:'Be made of wood',am:'ከእንጨት መሠራት'},{en:'Think, decide and care for others',am:'ማሰብ፣ መወሰንና ለሌሎች መጨነቅ'},{en:'Have four legs',am:'አራት እግር መኖር'}],a:2,e:{en:'Humans can think, choose freely, and protect the dignity of others.',am:'የሰው ልጆች ማሰብ፣ በነጻነት መምረጥና የሌሎችን ክብር መጠበቅ ይችላሉ።'}},
   {q:{en:'People are different in height, language and gender. In humanity, they are…',am:'ሰዎች በቁመት፣ በቋንቋና በጾታ ይለያያሉ። በሰብዓዊነት ግን…'},o:[{en:'not equal',am:'እኩል አይደሉም'},{en:'all equal',am:'ሁሉም እኩል ናቸው'},{en:'only equal if rich',am:'ሀብታም ከሆኑ ብቻ እኩል ናቸው'},{en:'equal only at school',am:'ትምህርት ቤት ብቻ እኩል ናቸው'}],a:1},
   {q:{en:'Hana\'s family is poor. Some children laugh at her old shoes. Is this right?',am:'የሐና ቤተሰብ ድሃ ነው። አንዳንድ ልጆች በአሮጌ ጫማዋ ይስቃሉ። ይህ ትክክል ነው?'},o:[{en:'Yes, it is just a joke',am:'አዎ፣ ቀልድ ብቻ ነው'},{en:'No. Every person deserves respect, whatever their family has.',am:'አይደለም። ቤተሰቡ ያለው ምንም ይሁን እያንዳንዱ ሰው ክብር ይገባዋል።'},{en:'Yes, if she is new',am:'አዎ፣ አዲስ ከሆነች'},{en:'It does not matter',am:'ምንም አይደለም'}],a:1,e:{en:'Humanity means no one is left out because of money, background or looks.',am:'ሰብዓዊነት ማለት ማንም በገንዘብ፣ በአስተዳደግ ወይም በመልክ ምክንያት አይገለልም ማለት ነው።'}},
   {q:{en:'Human dignity means…',am:'ሰብዓዊ ክብር ማለት…'},o:[{en:'Only adults deserve respect',am:'አዋቂዎች ብቻ ክብር ይገባቸዋል'},{en:'Every person has worth and deserves respect',am:'እያንዳንዱ ሰው ዋጋ አለው፤ ክብርም ይገባዋል'},{en:'Only friends deserve respect',am:'ጓደኞች ብቻ ክብር ይገባቸዋል'},{en:'Respect must be bought',am:'ክብር በገንዘብ ይገዛል'}],a:1}
  ]},
 {title:{en:'Eight values',am:'ስምንቱ እሴቶች'},type:'match',
  tip:{en:'Humanity shows in eight values. Match each value with an action that shows it.',am:'ሰብዓዊነት በስምንት እሴቶች ይገለጻል። እያንዳንዱን እሴት ከሚያሳየው ተግባር ጋር አዛምዱ።'},
  rounds:[
   [[V.love,{en:'Caring for my family every day',am:'ቤተሰቤን በየቀኑ መንከባከብ'}],[V.comp,{en:'Feeling sad for a hurt friend and helping',am:'ለተጎዳ ጓደኛ ማዘንና መርዳት'}],[V.charity,{en:'Giving clothes to someone in need',am:'ለተቸገረ ሰው ልብስ መስጠት'}],[V.vol,{en:'Cleaning the school compound for free',am:'የትምህርት ቤቱን ግቢ በነጻ ማጽዳት'}]],
   [[V.hum,{en:'Saying "please" and listening to others',am:'“እባክህ/ሽ” ማለትና ሌሎችን ማዳመጥ'}],[V.bro,{en:'Treating every classmate like family',am:'እያንዳንዱን የክፍል ጓደኛ እንደ ቤተሰብ ማየት'}],[V.pat,{en:'Waiting calmly for my turn',am:'ተራዬን በእርጋታ መጠበቅ'}],[V.peace,{en:'Solving a fight by talking',am:'ጠብን በንግግር መፍታት'}]]
  ]},
 {title:{en:'What would you do?',am:'ምን ታደርጋላችሁ?'},type:'quiz',
  tip:{en:'Read each situation. Think: which choice shows humanity? There may be more than one kind choice, but pick the BEST one.',am:'እያንዳንዱን ሁኔታ አንብቡ። አስቡ፦ ሰብዓዊነትን የሚያሳየው ምርጫ የትኛው ነው? ከአንድ በላይ ጥሩ ምርጫ ሊኖር ይችላል፤ ነገር ግን ምርጡን ምረጡ።'},
  items:[
   {q:{en:'A new student sits alone at break. She speaks a different language.',am:'አዲስ ተማሪ በእረፍት ሰዓት ብቻዋን ተቀምጣለች። የተለየ ቋንቋ ትናገራለች።'},o:[{en:'Ignore her',am:'ችላ ማለት'},{en:'Smile, sit with her, and teach her a game',am:'ፈገግ ብሎ አጠገቧ መቀመጥና ጨዋታ ማስተማር'},{en:'Laugh at how she talks',am:'በአነጋገሯ መሳቅ'},{en:'Tell others not to play with her',am:'ሌሎች እንዳይጫወቱባት መንገር'}],a:1,e:{en:'This shows brotherhood and love. Language does not change a person\'s worth.',am:'ይህ ወንድማማችነትንና ፍቅርን ያሳያል። ቋንቋ የሰውን ዋጋ አይቀይርም።'}},
   {q:{en:'Your friend falls and hurts his knee during football.',am:'ጓደኛችሁ እግር ኳስ ሲጫወት ወድቆ ጉልበቱን ተጎዳ።'},o:[{en:'Keep playing',am:'መጫወት መቀጠል'},{en:'Laugh',am:'መሳቅ'},{en:'Stop, help him up, and call a teacher',am:'ቆሞ ማንሳትና መምህር መጥራት'},{en:'Take his ball',am:'ኳሱን መውሰድ'}],a:2,e:{en:'This is compassion: feeling another person\'s pain and acting to help.',am:'ይህ ርኅራኄ ነው፦ የሌላውን ህመም መሰማትና ለመርዳት መንቀሳቀስ።'}},
   {q:{en:'Two classmates are shouting at each other over a pencil.',am:'ሁለት የክፍል ጓደኞች በእርሳስ ምክንያት ይጯጯሃሉ።'},o:[{en:'Shout louder',am:'የበለጠ መጮህ'},{en:'Take a side and push',am:'ወገን ይዞ መግፋት'},{en:'Calmly help them talk and share',am:'በእርጋታ እንዲነጋገሩና እንዲካፈሉ መርዳት'},{en:'Hide the pencil',am:'እርሳሱን መደበቅ'}],a:2,e:{en:'This builds peace. Peacemakers solve problems with words, not fists.',am:'ይህ ሰላምን ይገነባል። ሰላም ፈጣሪዎች ችግርን በቃል እንጂ በቡጢ አይፈቱም።'}},
   {q:{en:'You won first place in class. Your friend got a low mark.',am:'በክፍል አንደኛ ወጣችሁ። ጓደኛችሁ ዝቅተኛ ውጤት አመጣ።'},o:[{en:'Boast about it',am:'መኩራራት'},{en:'Say "well done" quietly and offer to study together',am:'በትህትና መቀበልና አብሮ ለማጥናት መጋበዝ'},{en:'Call him lazy',am:'ሰነፍ ብሎ መጥራት'},{en:'Stop being his friend',am:'ጓደኝነትን ማቆም'}],a:1,e:{en:'This is humility. Clever people help others grow too.',am:'ይህ ትህትና ነው። ብልህ ሰዎች ሌሎችም እንዲያድጉ ይረዳሉ።'}},
   {q:{en:'The queue for water is long and you are thirsty.',am:'የውኃ ሰልፍ ረጅም ነው፤ እናንተም ተጠምታችኋል።'},o:[{en:'Push to the front',am:'ገፍቶ ወደ ፊት መሄድ'},{en:'Wait for your turn calmly',am:'ተራን በእርጋታ መጠበቅ'},{en:'Cry loudly',am:'ጮክ ብሎ ማልቀስ'},{en:'Take someone\'s cup',am:'የሌላውን ኩባያ መውሰድ'}],a:1,e:{en:'Patience is respect for others\' time and needs.',am:'ትዕግስት የሌሎችን ጊዜና ፍላጎት ማክበር ነው።'}},
   {q:{en:'Your kebele plans a tree-planting day on Saturday.',am:'ቀበሌያችሁ ቅዳሜ የዛፍ ተከላ ቀን አዘጋጅቷል።'},o:[{en:'Join and help without pay',am:'ያለ ክፍያ ተሳትፎ መርዳት'},{en:'Only go if paid',am:'ከተከፈለ ብቻ መሄድ'},{en:'Say it is not my job',am:'የኔ ሥራ አይደለም ማለት'},{en:'Stay home and complain',am:'ቤት ቆይቶ ማማረር'}],a:0,e:{en:'This is volunteering: giving your time and effort freely for the community.',am:'ይህ በጎ ፈቃደኝነት ነው፦ ጊዜንና ጉልበትን ለማኅበረሰቡ በነጻ መስጠት።'}}
  ]},
 {title:{en:'Kind or unkind?',am:'ደግ ወይስ ደግ ያልሆነ?'},type:'sort',
  tip:{en:'Sort each action. Ask: does it make another person feel respected?',am:'እያንዳንዱን ተግባር መድቡ። ራሳችሁን ጠይቁ፦ ሌላውን ሰው እንደተከበረ እንዲሰማው ያደርጋል?'},
  buckets:[{en:'Kind',am:'ደግ ተግባር'},{en:'Unkind',am:'ደግ ያልሆነ ተግባር'}],
  items:[
   {t:{en:'Sharing your book with a classmate',am:'መጽሐፍን ለክፍል ጓደኛ ማካፈል'},b:0,short:{en:'sharing',am:'ማካፈል'}},
   {t:{en:'Calling someone a bad name',am:'ሰውን በመጥፎ ስም መጥራት'},b:1,short:{en:'bad name',am:'መጥፎ ስም'}},
   {t:{en:'Helping an old person cross the road',am:'አረጋዊ ሰው መንገድ እንዲሻገር መርዳት'},b:0,short:{en:'helping elder',am:'አረጋዊ መርዳት'}},
   {t:{en:'Leaving a friend out of a game',am:'ጓደኛን ከጨዋታ ማግለል'},b:1,short:{en:'leaving out',am:'ማግለል'}},
   {t:{en:'Saying sorry when you make a mistake',am:'ስህተት ስትሠሩ ይቅርታ መጠየቅ'},b:0,short:{en:'sorry',am:'ይቅርታ'}},
   {t:{en:'Laughing at someone\'s accent',am:'በሰው አነጋገር መሳቅ'},b:1,short:{en:'laughing',am:'መሳቅ'}},
   {t:{en:'Giving food to a hungry person',am:'ለተራበ ሰው ምግብ መስጠት'},b:0,short:{en:'giving food',am:'ምግብ መስጠት'}},
   {t:{en:'Pushing to be first in line',am:'ቀዳሚ ለመሆን መግፋት'},b:1,short:{en:'pushing',am:'መግፋት'}}
  ]},
 {title:{en:'Peace builder',am:'ሰላም ፈጣሪ'},type:'order',vertical:true,
  tip:{en:'When people disagree, peacemakers follow steps. Put the steps for solving a quarrel in the right order.',am:'ሰዎች ሲጋጩ ሰላም ፈጣሪዎች ደረጃዎችን ይከተላሉ። ጭቅጭቅን የመፍቻ ደረጃዎችን በትክክለኛው ቅደም ተከተል አስቀምጡ።'},
  help:{en:'Tap the steps from first to last.',am:'ደረጃዎቹን ከመጀመሪያው እስከ መጨረሻው ንኩ።'},
  rounds:[
   {items:[{en:'Stop and calm down',am:'ማቆምና መረጋጋት'},{en:'Listen to the other person',am:'ሌላውን ሰው ማዳመጥ'},{en:'Say how you feel, kindly',am:'የሚሰማችሁን በደግነት መናገር'},{en:'Find a fair solution together',am:'በጋራ ፍትሐዊ መፍትሔ መፈለግ'},{en:'Shake hands and stay friends',am:'መጨባበጥና ጓደኛ ሆኖ መቀጠል'}],
    e:{en:'Calm first! Nobody solves problems well while angry.',am:'መጀመሪያ መረጋጋት! በንዴት ማንም ችግርን በደንብ አይፈታም።'}}
  ]},
 {title:{en:'Patience game',am:'የትዕግስት ጨዋታ'},type:'custom',
  tip:{en:'Patience means waiting calmly. Wait for the light to turn GREEN, then tap. If you tap too early, you must start again. Can you do it 3 times?',am:'ትዕግስት ማለት በእርጋታ መጠበቅ ነው። መብራቱ አረንጓዴ እስኪሆን ጠብቁ፤ ከዚያ ንኩ። ቀድማችሁ ከነካችሁ እንደገና ትጀምራላችሁ። 3 ጊዜ ማድረግ ትችላላችሁ?'},
  init(st){st.wins=0;st.state='idle';st.msg='';st.cls='';clearTimeout(st.timer)},
  render(p,api,st){const col=st.state==='green'?'var(--good)':st.state==='red'?'var(--bad)':'var(--surface-2)';
   const label=st.state==='idle'?tx({en:'Tap to start',am:'ለመጀመር ንኩ'}):st.state==='red'?tx({en:'Wait… wait…',am:'ጠብቁ… ጠብቁ…'}):st.state==='green'?tx({en:'TAP NOW!',am:'አሁን ንኩ!'}):tx({en:'Tap to play again',am:'እንደገና ለመጫወት ንኩ'});
   p.innerHTML=`<button id="pat" style="width:min(280px,80vw);aspect-ratio:1;border-radius:50%;background:${col};border:6px solid var(--line);margin:0 auto;display:grid;place-items:center;font-family:var(--display);font-weight:800;font-size:1.6rem;color:${st.state==='idle'||st.state==='done'?'var(--ink)':'#fff'}">${label}</button>
    <div class="feedback center ${st.cls}" aria-live="polite">${st.msg}</div>
    <div class="progress center">${tx({en:'Calm waits: {n}/3',am:'በእርጋታ የተጠበቀ፦ {n}/3'},{n:st.wins})}</div>
    <div class="note">${tx({en:'Talk about it: when do you need patience at home? At school? On the road?',am:'ተወያዩበት፦ ቤት ውስጥ መቼ ትዕግስት ያስፈልጋችኋል? ትምህርት ቤት? መንገድ ላይ?'})}</div>`;
   p.querySelector('#pat').onclick=()=>{
    if(st.state==='idle'||st.state==='done'){if(st.state==='done'){st.wins=0}st.state='red';st.msg='';clearTimeout(st.timer);st.timer=setTimeout(()=>{if(st.state==='red'){st.state='green';st.t0=Date.now();api.S.tick();if(api.visible(6))api.rerender()}},rnd(1800,4200));api.rerender();return}
    if(st.state==='red'){clearTimeout(st.timer);st.state='idle';st.cls='bad';st.msg=tx({en:'Too early! Patience means waiting. Try again.',am:'ቀደማችሁ! ትዕግስት ማለት መጠበቅ ነው። እንደገና ሞክሩ።'});api.S.nope();api.rerender();return}
    if(st.state==='green'){st.wins++;st.cls='good';st.msg=tx(api.UI.good);api.S.yay();
     if(st.wins>=3){st.state='done';api.complete()}else st.state='idle';api.rerender()}}}},
 {title:{en:'Why it matters',am:'ለምን ያስፈልጋል?'},type:'quiz',
  tip:{en:'When humanity is not respected, people get hurt. Think about what happens in each case.',am:'ሰብዓዊነት ካልተከበረ ሰዎች ይጎዳሉ። በእያንዳንዱ ሁኔታ ምን እንደሚከሰት አስቡ።'},
  items:[
   {q:{en:'If people insult each other, what happens?',am:'ሰዎች እርስ በርስ ቢሰዳደቡ ምን ይከሰታል?'},o:[{en:'Friendship grows',am:'ጓደኝነት ያድጋል'},{en:'People feel hurt and quarrels start',am:'ሰዎች ይጎዳሉ፤ ጭቅጭቅ ይጀምራል'},{en:'Nothing happens',am:'ምንም አይከሰትም'},{en:'Everyone laughs happily',am:'ሁሉም በደስታ ይስቃሉ'}],a:1},
   {q:{en:'If nobody helps people in need, what happens?',am:'ማንም የተቸገሩትን ባይረዳ ምን ይከሰታል?'},o:[{en:'They feel alone and suffer more',am:'ብቸኝነት ይሰማቸዋል፤ ይበልጥ ይሰቃያሉ'},{en:'They become rich',am:'ሀብታም ይሆናሉ'},{en:'The community gets stronger',am:'ማኅበረሰቡ ይጠነክራል'},{en:'Nothing changes',am:'ምንም አይለወጥም'}],a:0},
   {q:{en:'If there is no peace in a village, what happens?',am:'በአንድ መንደር ሰላም ባይኖር ምን ይከሰታል?'},o:[{en:'Children learn better',am:'ልጆች በተሻለ ይማራሉ'},{en:'People cannot work, learn or live safely',am:'ሰዎች በሰላም መሥራት፣ መማርና መኖር አይችሉም'},{en:'Markets grow',am:'ገበያዎች ያድጋሉ'},{en:'Everyone is happy',am:'ሁሉም ደስተኛ ነው'}],a:1},
   {q:{en:'If a classmate is always left out, how might they feel?',am:'አንድ የክፍል ጓደኛ ሁልጊዜ ቢገለል ምን ሊሰማው ይችላል?'},o:[{en:'Proud',am:'ኩራት'},{en:'Sad and lonely',am:'ሀዘንና ብቸኝነት'},{en:'Excited',am:'ደስታ'},{en:'Hungry',am:'ረሃብ'}],a:1,e:{en:'Imagine being in their place. That is the first step of compassion.',am:'በእነሱ ቦታ ሆናችሁ አስቡ። ይህ የርኅራኄ የመጀመሪያው እርምጃ ነው።'}}
  ]},
 {title:{en:'My kindness pledge',am:'የደግነት ቃል ኪዳኔ'},type:'custom',
  tip:{en:'Values grow when we practise them. Choose 3 kind acts you will do this week. Tell your family about your pledge!',am:'እሴቶች የሚያድጉት ስንለማመዳቸው ነው። በዚህ ሳምንት የምታደርጓቸውን 3 ደግ ተግባራት ምረጡ። ስለ ቃል ኪዳናችሁ ለቤተሰባችሁ ንገሩ!'},
  init(st){st.pick=store.get('g3-pledge',[]);st.name=store.get('g3-pledge-name','')},
  render(p,api,st){const ok=st.pick.length===3;
   p.innerHTML=`<div class="row"><label for="pl-name" class="sub">${tx({en:'My name:',am:'ስሜ፦'})}</label><input id="pl-name" value="${esc(st.name)}" maxlength="30" style="font:inherit;font-size:1.1rem;padding:8px 12px;border-radius:12px;border:2px solid var(--line);background:var(--surface);color:var(--ink);min-width:0;flex:1 1 180px"></div>
    <div class="sub small">${tx({en:'Choose exactly 3:',am:'ልክ 3 ምረጡ፦'})} ${st.pick.length}/3</div>
    <div class="opts long">${ACTS.map((a,i)=>`<button class="opt ${st.pick.includes(i)?'right':''}" data-i="${i}" ${!st.pick.includes(i)&&ok?'disabled':''}>${esc(tx(a))}</button>`).join('')}</div>
    ${ok?`<div class="winner"><svg viewBox="0 0 100 100" aria-hidden="true">${G3.KOKEB}</svg><div><h3><span id="pl-show">${esc(st.name||tx({en:'I',am:'እኔ'}))}</span> ${tx({en:'promise to:',am:'ቃል እገባለሁ፦'})}</h3><ol style="margin:6px 0 0;padding-left:22px">${st.pick.map(i=>`<li>${esc(tx(ACTS[i]))}</li>`).join('')}</ol></div></div>`:''}`;
   const inp=p.querySelector('#pl-name');inp.oninput=()=>{st.name=inp.value;store.set('g3-pledge-name',st.name);const h=p.querySelector('#pl-show');if(h)h.textContent=st.name||tx({en:'I',am:'እኔ'})};
   p.onclick=e=>{const b=e.target.closest('button[data-i]');if(!b||b.disabled)return;const i=+b.dataset.i;
    st.pick=st.pick.includes(i)?st.pick.filter(x=>x!==i):[...st.pick,i];store.set('g3-pledge',st.pick);api.S.tick();
    if(st.pick.length===3)api.complete();api.rerender()}}},
 {type:'notes',notes:{
 big:{en:'Every person has equal dignity. Humanity means kindness from the heart, shown through eight values.',am:'እያንዳንዱ ሰው እኩል ክብር አለው። ሰብዓዊነት ከልብ የመነጨ ደግነት ሲሆን በስምንት እሴቶች ይገለጻል።'},
 points:[{en:'Humanity has two meanings: all human beings, and kindness.',am:'ሰብዓዊነት ሁለት ትርጉሞች አሉት፦ የሰው ልጆች ሁሉና ደግነት።'},{en:'Eight values: love, compassion, charity, volunteering, humility, brotherhood, patience, peace.',am:'ስምንቱ እሴቶች፦ ፍቅር፣ ርኅራኄ፣ በጎ አድራጎት፣ በጎ ፈቃደኝነት፣ ትህትና፣ ወንድማማችነት፣ ትዕግስትና ሰላም።'},{en:'People differ in height, language, gender and wealth, but are equal in dignity.',am:'ሰዎች በቁመት፣ በቋንቋ፣ በጾታና በሀብት ይለያያሉ፤ በክብር ግን እኩል ናቸው።'},{en:'Solve quarrels: calm down, listen, speak kindly, find a fair solution, make peace.',am:'ጭቅጭቅን መፍታት፦ መረጋጋት፣ ማዳመጥ፣ በደግነት መናገር፣ ፍትሐዊ መፍትሔ መፈለግ፣ መታረቅ።'}],
 words:[['ሰብዓዊ ክብር',{en:'human dignity',am:'የእያንዳንዱ ሰው ዋጋ'}],['ርኅራኄ',{en:'compassion',am:'የሌላውን ህመም ተሰምቶ መርዳት'}],['በጎ ፈቃደኝነት',{en:'volunteering',am:'ጊዜንና ጉልበትን በነጻ መስጠት'}]],
 remember:{en:'Before you act, ask: "How would I feel in their place?"',am:'ከመሥራታችሁ በፊት ጠይቁ፦ “በእነሱ ቦታ ብሆን ምን ይሰማኛል?”'},
 exam:[[{en:'Name four of the eight values.',am:'ከስምንቱ እሴቶች አራቱን ጥቀሱ።'},{en:'e.g. love, compassion, patience, peace',am:'ለምሳሌ ፍቅር፣ ርኅራኄ፣ ትዕግስት፣ ሰላም'}],[{en:'Giving clothes to someone in need is…',am:'ለተቸገረ ልብስ መስጠት…'},{en:'charity',am:'በጎ አድራጎት'}],[{en:'Waiting calmly for your turn is…',am:'ተራን በእርጋታ መጠበቅ…'},{en:'patience',am:'ትዕግስት'}],[{en:'What happens when humanity is not respected?',am:'ሰብዓዊነት ካልተከበረ ምን ይሆናል?'},{en:'People get hurt, feel lonely and conflicts grow.',am:'ሰዎች ይጎዳሉ፣ ብቸኝነት ይሰማቸዋል፣ ግጭት ያድጋል።'}]],
 innovate:{title:{en:'Start a kindness club',am:'የደግነት ክበብ መሥርቱ'},text:{en:'Great organisations start with a small group that wants to help. Start a kindness club at school.',am:'ታላላቅ ድርጅቶች ለመርዳት በሚፈልጉ ጥቂት ሰዎች ይጀምራሉ። በትምህርት ቤታችሁ የደግነት ክበብ መሥርቱ።'},
  steps:[{en:'Invite three friends and choose a club name.',am:'ሦስት ጓደኞችን ጋብዙና የክበቡን ስም ምረጡ።'},{en:'Pick one value for each week.',am:'ለእያንዳንዱ ሳምንት አንድ እሴት ምረጡ።'},{en:'Plan one kind act for that value and do it.',am:'ለዚያ እሴት አንድ ደግ ተግባር አቅዳችሁ ፈጽሙ።'},{en:'Keep a club diary: who did you help? What changed?',am:'የክበብ ማስታወሻ ያዙ፦ ማንን ረዳችሁ? ምን ተለወጠ?'}]}}}
 ]});
})();
