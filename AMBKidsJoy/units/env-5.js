/* አካባቢ ሳይንስ · ምዕራፍ 5 · አንገብጋቢ እና ትኩረት የሚሹ ጉዳዮች */
(function(){
const {tx,esc}=G3;
/* simple road scenes */
const kid=(x,y)=>`<g transform="translate(${x} ${y})"><circle cx="0" cy="-26" r="7" fill="#6B4423"/><path d="M0-19v18M0-14l-8 8M0-14l8 8M0-1l-6 12M0-1l6 12" stroke="#2F6FDE" stroke-width="4" stroke-linecap="round"/></g>`;
const car=(x,y,c)=>`<g transform="translate(${x} ${y})"><rect x="0" y="0" width="58" height="22" rx="6" fill="${c||'#D9483B'}"/><rect x="10" y="-10" width="34" height="14" rx="4" fill="${c||'#D9483B'}"/><rect x="14" y="-7" width="12" height="9" fill="#CFE6FF"/><rect x="29" y="-7" width="12" height="9" fill="#CFE6FF"/><circle cx="14" cy="23" r="6" fill="#222"/><circle cx="44" cy="23" r="6" fill="#222"/></g>`;
function scene(k){const road=`<rect x="0" y="0" width="300" height="150" fill="#9FD3A8"/><rect x="0" y="50" width="300" height="60" fill="#5C6470"/><path d="M0 80h300" stroke="#fff" stroke-width="2" stroke-dasharray="14 10"/>`;
 const zebra=`<g>${[0,1,2,3,4,5].map(i=>`<rect x="130" y="${52+i*10}" width="44" height="6" fill="#fff"/>`).join('')}</g>`;
 let s=road;
 if(k==='zebra')s+=zebra+car(16,82)+kid(152,46);
 if(k==='parked')s+=car(150,60,'#3E7CB1')+kid(212,98)+car(10,82);
 if(k==='play')s+=`<circle cx="140" cy="94" r="8" fill="#F4B400"/>`+kid(170,104)+car(30,82);
 if(k==='left')s+=kid(30,46)+kid(60,46)+car(200,82);
 if(k==='hand')s+=zebra+`<g transform="translate(150 46)"><circle cx="0" cy="-34" r="8" fill="#6B4423"/><path d="M0-26v24M0-20l-10 10M0-2l-7 14M0-2l7 14" stroke="#1E8A5B" stroke-width="5" stroke-linecap="round"/></g><path d="M141 26l8 4" stroke="#6B4423" stroke-width="4"/>`+kid(164,46);
 if(k==='run')s+=kid(110,100)+car(170,58)+`<path d="M96 96l-10-4M96 104l-12 0" stroke="#6B4423" stroke-width="2"/>`;
 return`<svg viewBox="0 0 300 150" role="img" aria-label="road scene" style="width:min(360px,100%);height:auto;border-radius:12px">${s}</svg>`}
const SAFE={en:'Safe',am:'ደህንነቱ የተጠበቀ'},UNSAFE={en:'Not safe',am:'አደገኛ'};
Unit.start({
 id:'env-5',subject:'env',
 subjectName:{en:'Environmental Science',am:'አካባቢ ሳይንስ'},chapter:{en:'Chapter 5',am:'ምዕራፍ 5'},
 title:{en:'Staying Safe and Protected',am:'አንገብጋቢ እና ትኩረት የሚሹ ጉዳዮች'},
 footer:{en:'Built on the Grade 3 Environmental Science student book (ANRS Education Bureau), Chapter 5: road safety, child rights, addictive substances and HIV/AIDS.',am:'በ3ኛ ክፍል የአካባቢ ሳይንስ መጽሐፍ (አብክመ ትምህርት ቢሮ) ምዕራፍ 5 ላይ የተመሰረተ፦ የመንገድ ደህንነት፣ የሕፃናት መብት፣ ሱስ አምጪ ነገሮችና ኤች አይ ቪ/ኤድስ።'},
 missions:[
 {title:{en:'Safe or not safe?',am:'ደህንነቱ የተጠበቀ ነው ወይስ አደገኛ?'},type:'quiz',
  tip:{en:'Pedestrians are people who walk. Look at each picture like a traffic police officer. Is the child safe?',am:'እግረኞች በእግር የሚሄዱ ሰዎች ናቸው። እያንዳንዱን ስዕል እንደ ትራፊክ ፖሊስ ተመልከቱ። ልጁ ደህና ነው?'},
  items:[
   {fig:scene('zebra'),q:{en:'The child crosses at the zebra crossing after checking that the car is far away.',am:'ልጁ መኪናው ሩቅ መሆኑን አረጋግጦ በዜብራ ማቋረጫ ያቋርጣል።'},o:[SAFE,UNSAFE],a:0},
   {fig:scene('parked'),q:{en:'The child crosses from behind a parked car.',am:'ልጁ ከቆመ መኪና ጀርባ ወጥቶ ያቋርጣል።'},o:[UNSAFE,SAFE],a:0,e:{en:'Drivers cannot see you behind a parked car, and you cannot see them. Never cross from behind a parked car.',am:'ከቆመ መኪና ጀርባ ስትሆኑ ሾፌሮች አያዩአችሁም፤ እናንተም አታዩአቸውም። ከቆመ መኪና ጀርባ ፈጽሞ አታቋርጡ።'}},
   {fig:scene('play'),q:{en:'The child plays with a ball on the road.',am:'ልጁ መንገድ ላይ ኳስ ይጫወታል።'},o:[UNSAFE,SAFE],a:0},
   {fig:scene('left'),q:{en:'The children walk on the left side of the road, on the footpath.',am:'ልጆቹ የመንገዱን ግራ ይዘው በእግረኛ መንገድ ይሄዳሉ።'},o:[SAFE,UNSAFE],a:0},
   {fig:scene('hand'),q:{en:'An adult holds the child\'s hand while crossing.',am:'አንድ ትልቅ ሰው የልጁን እጅ ይዞ ያሻግራል።'},o:[SAFE,UNSAFE],a:0},
   {fig:scene('run'),q:{en:'The child runs across without looking.',am:'ልጁ ሳያይ እየሮጠ ያቋርጣል።'},o:[UNSAFE,SAFE],a:0}]},
 {title:{en:'How to cross the road',am:'መንገድ እንዴት እናቋርጣለን'},type:'order',vertical:true,
  tip:{en:'Put the safe crossing steps in order. Practise them every day until they are a habit.',am:'መንገድ በደህንነት የማቋረጫ ደረጃዎችን በቅደም ተከተል አስቀምጡ። ልማድ እስኪሆን በየቀኑ ተለማመዱ።'},
  rounds:[{items:[{en:'Find a zebra crossing.',am:'የዜብራ ማቋረጫ ፈልጉ።'},{en:'Stop at the edge of the road.',am:'በመንገዱ ጠርዝ ቁሙ።'},{en:'Look left, look right, then left again.',am:'ወደ ግራ፣ ወደ ቀኝ፣ እንደገና ወደ ግራ ተመልከቱ።'},{en:'Wait until no car is coming.',am:'የሚመጣ መኪና እስከማይኖር ጠብቁ።'},{en:'Walk straight across calmly. Do not run.',am:'በእርጋታ ቀጥ ብላችሁ ተሻገሩ። አትሩጡ።'}]}]},
 {title:{en:'Right or violation?',am:'መብት ወይስ የመብት ጥሰት?'},type:'sort',
  tip:{en:'A child is anyone under 18 years old. Children are the future of the country, so their rights must be respected. Sort each card: a child\'s right, or a violation of that right?',am:'ሕፃን ማለት ከ18 ዓመት በታች የሆነ ማንኛውም ሰው ነው። ሕፃናት የሀገር ተረካቢ ናቸው፤ መብታቸው መከበር አለበት። እያንዳንዱን ካርድ መድቡ፦ የሕፃን መብት ነው ወይስ የመብት ጥሰት?'},
  buckets:[{en:'A child\'s right',am:'የሕፃን መብት'},{en:'Violation of rights',am:'የመብት ጥሰት'}],
  items:[{t:{en:'Going to school and learning',am:'ትምህርት ቤት ሄዶ መማር'},b:0},{t:{en:'Growing up safely with family',am:'ከቤተሰብ ጋር በደህንነት ማደግ'},b:0},{t:{en:'Time to play and rest',am:'የመጫወቻና የማረፊያ ጊዜ'},b:0},{t:{en:'Getting health care',am:'የጤና አገልግሎት ማግኘት'},b:0},
   {t:{en:'Carrying loads too heavy for a child',am:'ከአቅም በላይ ሸክም መሸከም'},b:1},{t:{en:'Being taken out of school to work',am:'ለሥራ ከትምህርት ቤት መውጣት'},b:1},{t:{en:'Being beaten',am:'መደብደብ'},b:1},{t:{en:'Marriage before the right age',am:'ያለ ዕድሜ ጋብቻ'},b:1}]},
 {title:{en:'Story: two children at work',am:'ታሪክ፦ ሁለት ሠራተኛ ልጆች'},type:'quiz',
  tip:{en:'Read the story and think about what is wrong and how to fix it.',am:'ታሪኩን አንብቡ፤ ምን ስህተት እንዳለና እንዴት እንደሚስተካከል አስቡ።'},
  passage:{title:{en:'Abel and Tigist',am:'አቤልና ትዕግሥት'},paras:{
   en:['Abel is 12 and his sister Tigist is 10. Their family has little income, so the parents sent them to work in other people\'s homes instead of school.','Abel chops wood, ploughs and carries sacks of grain far too heavy for him. Tigist carries a baby on her back, bakes injera, fetches water in a heavy pot and washes clothes all day.','Their classmates miss them. Their teacher says: "Every child has the right to learn and play. Let us talk to their family and the kebele to find help."'],
   am:['አቤል 12 ዓመቱ ነው፤ እህቱ ትዕግሥት 10 ዓመቷ ነው። ቤተሰባቸው ገቢው አነስተኛ ስለሆነ ወላጆቻቸው ወደ ትምህርት ቤት ሳይሆን ሰው ቤት ተቀጥረው እንዲሠሩ ላኳቸው።','አቤል እንጨት ይፈልጣል፣ ያርሳል፣ ከአቅሙ በላይ የሆነ የእህል ጆንያ ይሸከማል። ትዕግሥት ልጅ ታዝላለች፣ እንጀራ ትጋግራለች፣ በከባድ እንስራ ውኃ ትቀዳለች፣ ቀኑን ሙሉ ልብስ ታጥባለች።','የክፍል ጓደኞቻቸው ናፈቋቸው። መምህራቸው እንዲህ አሉ፦ “እያንዳንዱ ሕፃን የመማርና የመጫወት መብት አለው። ቤተሰባቸውንና ቀበሌውን አነጋግረን እርዳታ እንፈልግ።”']}},
  items:[
   {q:{en:'Which rights were taken from Abel and Tigist?',am:'ከአቤልና ከትዕግሥት የተወሰደው መብት የትኛው ነው?'},o:[{en:'The right to learn and play',am:'የመማርና የመጫወት መብት'},{en:'The right to eat',am:'የመብላት መብት'},{en:'None',am:'ምንም'}],a:0},
   {q:{en:'What kind of violation is carrying very heavy sacks?',am:'በጣም ከባድ ጆንያ መሸከም ምን ዓይነት ጥሰት ነው?'},o:[{en:'Child labour beyond their strength',am:'ከአቅም በላይ የጉልበት ብዝበዛ'},{en:'Healthy exercise',am:'ጤናማ እንቅስቃሴ'},{en:'A school lesson',am:'የትምህርት ቤት ትምህርት'}],a:0},
   {q:{en:'What is the best way to help?',am:'ለመርዳት በጣም የተሻለው መንገድ የትኛው ነው?'},o:[{en:'Tell a teacher or trusted adult who can talk to the family',am:'ቤተሰቡን ሊያነጋግር ለሚችል መምህር ወይም ታማኝ ትልቅ ሰው መንገር'},{en:'Say nothing',am:'ዝም ማለት'},{en:'Laugh at them',am:'መሳቅባቸው'}],a:0},
   {q:{en:'Who is a child?',am:'ሕፃን የሚባለው ማን ነው?'},o:[{en:'Anyone under 18',am:'ከ18 ዓመት በታች የሆነ ማንኛውም ሰው'},{en:'Only babies',am:'ጨቅላዎች ብቻ'},{en:'Anyone under 25',am:'ከ25 ዓመት በታች ያለ'}],a:0}]},
 {title:{en:'Say no to addictive things',am:'ለሱስ አምጪ ነገሮች እምቢ በሉ'},type:'quiz',
  tip:{en:'Khat, alcohol and cigarettes are addictive substances. At first they excite the brain, but soon they make people tired, angry, worried and sick, and they waste money. Practise saying no.',am:'ጫት፣ አልኮልና ሲጋራ ሱስ አምጪ ነገሮች ናቸው። መጀመሪያ አእምሮን ያነቃቃሉ፤ ብዙም ሳይቆዩ ግን ሰዎችን ያደክማሉ፣ ያበሳጫሉ፣ ያስጨንቃሉ፣ ያሳምማሉ፤ ገንዘብም ያባክናሉ። እምቢ ማለትን ተለማመዱ።'},
  items:[
   {q:{en:'An older boy offers you a cigarette: "Try it, everyone does." What do you say?',am:'አንድ ታላቅ ልጅ ሲጋራ ይሰጣችኋል፦ “ሞክረው፣ ሁሉም ያደርጋል።” ምን ትላላችሁ?'},o:[{en:'"No, thank you. I want a healthy body." Then walk away.',am:'“አይ፣ አመሰግናለሁ። ጤናማ ሰውነት እፈልጋለሁ።” ከዚያ ሂዱ።'},{en:'"OK, just once."',am:'“እሺ፣ አንድ ጊዜ ብቻ።”'},{en:'Hide it in your bag',am:'በቦርሳችሁ ደብቁት'}],a:0},
   {q:{en:'Which of these is addictive?',am:'ከሚከተሉት ሱስ አምጪ የሆነው የትኛው ነው?'},o:[{en:'All of them: khat, alcohol, cigarettes',am:'ሁሉም፦ ጫት፣ አልኮል፣ ሲጋራ'},{en:'Milk',am:'ወተት'},{en:'Water',am:'ውኃ'}],a:0},
   {q:{en:'What happens to people who use addictive things for a long time?',am:'ሱስ አምጪ ነገሮችን ለረጅም ጊዜ የሚጠቀሙ ሰዎች ምን ይሆናሉ?'},o:[{en:'They get sick, angry and lose money and time',am:'ይታመማሉ፣ ይበሳጫሉ፣ ገንዘብና ጊዜ ያጣሉ'},{en:'They become stronger',am:'ይጠነክራሉ'},{en:'Nothing happens',am:'ምንም አይሆኑም'}],a:0},
   {q:{en:'A friend keeps pushing you to chew khat. What is the best next step?',am:'አንድ ጓደኛ ጫት እንድትቅሙ ደጋግሞ ይገፋፋችኋል። ቀጣዩ ጥሩ እርምጃ ምንድን ነው?'},o:[{en:'Tell a parent or teacher and spend time with other friends',am:'ለወላጅ ወይም ለመምህር ንገሩ፤ ከሌሎች ጓደኞች ጋር ጊዜ አሳልፉ'},{en:'Chew it so they stop asking',am:'መጠየቁን እንዲያቆም ቅሙ'},{en:'Keep it a secret',am:'በሚስጥር ያዙት'}],a:0}]},
 {title:{en:'HIV: true or myth?',am:'ኤች አይ ቪ፦ እውነት ወይስ የተሳሳተ አመለካከት?'},type:'sort',
  tip:{en:'AIDS is caused by a germ called HIV. It passes from person to person mainly through blood, for example when sharp things like needles or razors are shared. It does NOT pass through everyday contact, so we should never isolate people living with HIV. Sort each card.',am:'ኤድስ ኤች አይ ቪ በሚባል ተሀዋሲ ይመጣል። በዋናነት ከሰው ወደ ሰው በደም ይተላለፋል፤ ለምሳሌ እንደ መርፌ ወይም ምላጭ ያሉ ስለታም ነገሮችን በጋራ ሲጠቀሙ። በዕለት ተዕለት ንክኪ አይተላለፍም፤ ስለዚህ ከኤች አይ ቪ ጋር የሚኖሩ ሰዎችን ፈጽሞ ማግለል የለብንም። እያንዳንዱን ካርድ መድቡ።'},
  buckets:[{en:'Can pass HIV',am:'ኤች አይ ቪ ሊያስተላልፍ ይችላል'},{en:'Cannot pass HIV',am:'ኤች አይ ቪ አያስተላልፍም'}],
  items:[{t:{en:'Sharing a needle or syringe',am:'መርፌ በጋራ መጠቀም'},b:0},{t:{en:'Sharing a razor blade',am:'ምላጭ በጋራ መጠቀም'},b:0},{t:{en:'Touching someone\'s blood without protection',am:'ያለ ጥንቃቄ የሰው ደም መንካት'},b:0},{t:{en:'From a mother to her baby',am:'ከእናት ወደ ልጅ'},b:0,why:{en:'Doctors can help mothers protect their babies, so pregnant women should visit a health centre.',am:'ሐኪሞች እናቶች ልጆቻቸውን እንዲጠብቁ ሊረዷቸው ይችላሉ፤ ስለዚህ ነፍሰ ጡሮች ጤና ጣቢያ መሄድ አለባቸው።'}},
   {t:{en:'Shaking hands',am:'መጨባበጥ'},b:1},{t:{en:'Hugging a friend',am:'ጓደኛን ማቀፍ'},b:1},{t:{en:'Eating and drinking together',am:'አብሮ መብላትና መጠጣት'},b:1},{t:{en:'Sharing a toilet',am:'መጸዳጃ ቤት በጋራ መጠቀም'},b:1},{t:{en:'Breathing the same air',am:'አንድ አየር መተንፈስ'},b:1}]},
 {type:'exam',items:[
   {q:{en:'Which is NOT a traffic rule?',am:'የትራፊክ ሕግና ደንብ ያልሆነው የቱ ነው?'},o:[{en:'Crossing from behind a parked car',am:'ከቆመ መኪና ጀርባ ማቋረጥ'},{en:'Looking left and right before crossing',am:'ከማቋረጥ በፊት ግራና ቀኝ መመልከት'},{en:'Crossing at the zebra',am:'በዜብራ ማቋረጥ'}],a:0},
   {q:{en:'Which age shows someone who is NOT a child?',am:'ሕፃንነትን የማያሳየው ዕድሜ የትኛው ነው?'},o:[{en:'19 years',am:'19 ዓመት'},{en:'10 years',am:'10 ዓመት'},{en:'17 years',am:'17 ዓመት'}],a:0},
   {q:{en:'Which is a violation of a child\'s rights?',am:'የሕፃናት መብት ጥሰት የትኛው ነው?'},o:[{en:'Making a child work beyond their strength',am:'ሕፃንን ከአቅም በላይ ማሠራት'},{en:'Sending a child to school',am:'ሕፃንን ትምህርት ቤት መላክ'},{en:'Growing up with parents',am:'ከወላጆች ጋር ማደግ'}],a:0},
   {q:{en:'Which is NOT a way HIV passes?',am:'የኤች አይ ቪ መተላለፊያ መንገድ ያልሆነው የቱ ነው?'},o:[{en:'Eating and drinking together',am:'አብሮ መብላትና መጠጣት'},{en:'Sharp objects like needles and razors',am:'እንደ መርፌና ምላጭ ያሉ ስለታም ነገሮች'},{en:'Blood contact',am:'የደም ንክኪ'}],a:0},
   {q:{en:'Pedestrians should walk on which side of the road?',am:'እግረኞች የመንገዱን የትኛውን ጎን ይዘው መሄድ አለባቸው?'},o:[{en:'The left side',am:'ግራውን'},{en:'The middle',am:'መሃሉን'},{en:'Anywhere',am:'የትም'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Know the traffic rules, know your rights, say no to addictive things and know the facts about HIV. A safe, healthy child can build a strong Ethiopia.',am:'የትራፊክ ሕጎችን፣ መብታችሁን እወቁ፤ ለሱስ አምጪ ነገሮች እምቢ በሉ፤ ስለ ኤች አይ ቪ እውነቱን እወቁ። ደህንነቱ የተጠበቀና ጤናማ ልጅ ጠንካራ ኢትዮጵያን ይገነባል።'},
  points:[
   {en:'Walk on the left side of the road, on the footpath. Cross only at the zebra after looking left-right-left.',am:'የመንገዱን ግራ ይዛችሁ በእግረኛ መንገድ ሂዱ። ግራ-ቀኝ-ግራ ተመልክታችሁ በዜብራ ብቻ ተሻገሩ።'},
   {en:'Never cross from behind a parked car; never play on the road.',am:'ከቆመ መኪና ጀርባ ፈጽሞ አታቋርጡ፤ መንገድ ላይ አትጫወቱ።'},
   {en:'Child = under 18. Violations: heavy labour, early marriage, beating, dropping out of school, trafficking.',am:'ሕፃን = ከ18 ዓመት በታች። ጥሰቶች፦ የጉልበት ብዝበዛ፣ ያለ ዕድሜ ጋብቻ፣ ድብደባ፣ ትምህርት ማቋረጥ፣ ሕገ ወጥ ዝውውር።'},
   {en:'Addictive substances: khat, alcohol, cigarettes. They harm the body, mind and pocket.',am:'ሱስ አምጪዎች፦ ጫት፣ አልኮል፣ ሲጋራ። ሰውነትን፣ አእምሮንና ኪስን ይጎዳሉ።'},
   {en:'HIV passes through blood (needles, razors), and from mother to child. Not by touching, hugging or eating together.',am:'ኤች አይ ቪ በደም (መርፌ፣ ምላጭ) እና ከእናት ወደ ልጅ ይተላለፋል። በመነካካት፣ በማቀፍ ወይም አብሮ በመብላት አይተላለፍም።'}],
  words:[[{en:'Pedestrian',am:'እግረኛ'},{en:'a person walking on the road',am:'በመንገድ በእግሩ የሚሄድ ሰው'}],[{en:'Violation',am:'ጥሰት'},{en:'breaking someone\'s rights',am:'የሰውን መብት መጣስ'}],[{en:'Addiction',am:'ሱስ'},{en:'not being able to stop using something harmful',am:'ጎጂ ነገርን ማቆም አለመቻል'}]],
  remember:{en:'Stop, look left, look right, look left again, then cross.',am:'ቁሙ፣ ወደ ግራ፣ ወደ ቀኝ፣ እንደገና ወደ ግራ ተመልከቱ፤ ከዚያ ተሻገሩ።'},
  exam:[[{en:'Give two traffic rules.',am:'ሁለት የትራፊክ ደንቦችን ጥቀሱ።'},{en:'Walk on the left; cross at the zebra',am:'ግራውን ይዞ መሄድ፤ በዜብራ ማቋረጥ'}],[{en:'Name three child rights.',am:'ሦስት የሕፃናት መብቶችን ጥቀሱ።'},{en:'to learn, to play, to grow up safely',am:'የመማር፣ የመጫወት፣ በደህንነት የማደግ'}],[{en:'How can we prevent HIV?',am:'ኤች አይ ቪን እንዴት መከላከል እንችላለን?'},{en:'Never share needles, razors or sharp objects',am:'መርፌ፣ ምላጭና ስለታም ነገሮችን በጋራ አለመጠቀም'}]],
  innovate:{title:{en:'Safe route to school map',am:'ወደ ትምህርት ቤት የሚወስድ የደህንነት ካርታ'},text:{en:'Engineers and city planners make roads safer. Be a young planner: map your walk to school and find the dangerous spots.',am:'መሐንዲሶችና የከተማ ዕቅድ አውጪዎች መንገዶችን ደህንነታቸው የተጠበቀ ያደርጋሉ። ወጣት ዕቅድ አውጪ ሁኑ፦ ወደ ትምህርት ቤት የምትሄዱበትን መንገድ ካርታ ሥሩ፤ አደገኛ ቦታዎችን ፈልጉ።'},
   steps:[{en:'Draw your route from home to school.',am:'ከቤት ወደ ትምህርት ቤት ያለውን መንገዳችሁን ሳሉ።'},{en:'Mark dangerous places in red: busy roads, no zebra, deep ditches.',am:'አደገኛ ቦታዎችን በቀይ ምልክት አድርጉ፦ የተጨናነቁ መንገዶች፣ ዜብራ የሌለበት፣ ጥልቅ ቦይ።'},{en:'Mark the safest crossing places in green.',am:'በጣም ደህንነታቸው የተጠበቁ ማቋረጫዎችን በአረንጓዴ ምልክት አድርጉ።'},{en:'Show your map to your teacher and suggest one fix (a sign, a zebra, a walking group).',am:'ካርታችሁን ለመምህራችሁ አሳዩ፤ አንድ መፍትሔ አቅርቡ (ምልክት፣ ዜብራ፣ በቡድን መሄድ)።'}]}}}
 ]});
})();
