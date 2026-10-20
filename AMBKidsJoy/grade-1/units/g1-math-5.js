/* 1ኛ ክፍል ሒሳብ · ምዕራፍ 5 · ጊዜ */
(function(){
const {tx,rnd,shuffle}=G3;const {clock}=K1;
const DAYS=[{en:'Monday',am:'ሰኞ'},{en:'Tuesday',am:'ማክሰኞ'},{en:'Wednesday',am:'ረቡዕ'},{en:'Thursday',am:'ሐሙስ'},{en:'Friday',am:'ዓርብ'},{en:'Saturday',am:'ቅዳሜ'},{en:'Sunday',am:'እሁድ'}];
function hourOpts(h,half){const set=new Set([h]);while(set.size<4)set.add(rnd(1,12));const o=shuffle([...set]);
 return{o:o.map(v=>half?{en:`half past ${v}`,am:`${v} ሰዓት ተኩል`}:{en:`${v} o'clock`,am:`${v} ሰዓት`}),a:o.indexOf(h)}}
Unit.start({
 id:'g1-math-5',grade:1,subject:'math',
 subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 5',am:'ምዕራፍ 5'},
 title:{en:'Time',am:'ጊዜ'},
 footer:{en:'Built on the Grade 1 Mathematics student book, Chapter 5: order of events, telling time to the hour and half hour, and the days of the week.',am:'በ1ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 5 ላይ የተመሰረተ፦ የድርጊቶች ቅደም ተከተል፣ ጊዜን በሰዓትና በግማሽ ሰዓት መግለጽና የሳምንቱ ቀናት።'},
 missions:[
 {title:{en:'Morning, afternoon, evening',am:'ጠዋት፣ ከሰዓት፣ ምሽት'},type:'sort',
  tip:{en:'Morning, afternoon and evening are times of the day. What do you do at each time?',am:'ጠዋት፣ ከሰዓትና ምሽት በቀን ውስጥ ያሉ ጊዜያት ናቸው። በእያንዳንዱ ጊዜ ምን ታደርጋላችሁ?'},
  buckets:[{en:'🌅 Morning',am:'🌅 ጠዋት'},{en:'☀️ Afternoon',am:'☀️ ከሰዓት'},{en:'🌙 Evening',am:'🌙 ምሽት'}],
  items:[{t:{en:'🪥 Wake up and wash my face',am:'🪥 ከእንቅልፍ ተነስቶ ፊትን መታጠብ'},b:0},{t:{en:'🍞 Eat breakfast',am:'🍞 ቁርስ መብላት'},b:0},{t:{en:'🚩 Flag ceremony at school',am:'🚩 የሰንደቅ ዓላማ ሥነ ሥርዓት'},b:0},
   {t:{en:'🍲 Eat lunch',am:'🍲 ምሳ መብላት'},b:1},{t:{en:'⚽ Play after school',am:'⚽ ከትምህርት በኋላ መጫወት'},b:1},
   {t:{en:'🍽️ Eat dinner with family',am:'🍽️ ከቤተሰብ ጋር እራት መብላት'},b:2},{t:{en:'😴 Go to sleep',am:'😴 መተኛት'},b:2}]},
 {title:{en:'What happens first?',am:'መጀመሪያ የሚሆነው?'},type:'order',vertical:true,
  tip:{en:'Put the actions in order: first, second, third…',am:'ድርጊቶቹን በቅደም ተከተል አስቀምጡ፦ መጀመሪያ፣ ሁለተኛ፣ ሦስተኛ…'},
  help:{en:'Tap from first to last.',am:'ከመጀመሪያው እስከ መጨረሻው ንኩ።'},
  rounds:[{prompt:{en:'Selamawit\'s morning:',am:'የሰላማዊት ጠዋት፦'},items:[{en:'😴 Wake up',am:'😴 ከእንቅልፍ መነሳት'},{en:'🧼 Wash face and hands',am:'🧼 ፊትና እጅ መታጠብ'},{en:'🍞 Eat breakfast',am:'🍞 ቁርስ መብላት'},{en:'🎒 Go to school',am:'🎒 ወደ ትምህርት ቤት መሄድ'}]},
   {prompt:{en:'A seed grows:',am:'ዘር ያድጋል፦'},items:[{en:'🌰 Plant the seed',am:'🌰 ዘሩን መትከል'},{en:'💧 Water it',am:'💧 ውኃ ማጠጣት'},{en:'🌱 A small plant comes up',am:'🌱 ትንሽ ተክል ይወጣል'},{en:'🌻 It flowers',am:'🌻 ያብባል'}]}]},
 {title:{en:'Time to the hour',am:'ጊዜ በሰዓት'},type:'drill',need:5,
  tip:{en:'The short hand shows the hour. When the long hand points to 12, we say "… o\'clock".',am:'አጭሩ ጠቋሚ ሰዓቱን ያሳያል። ረጅሙ ጠቋሚ 12 ላይ ሲያርፍ "… ሰዓት" እንላለን።'},
  gen(){const h=rnd(1,12);return{fig:clock(h,0),q:{en:'What time is it?',am:'ስንት ሰዓት ነው?'},...hourOpts(h,false)}}},
 {title:{en:'Half past',am:'ሰዓት ተኩል'},type:'drill',need:5,
  tip:{en:'When the long hand points to 6, it is half past. The short hand sits between two numbers.',am:'ረጅሙ ጠቋሚ 6 ላይ ሲጠቁም ተኩል ነው። አጭሩ ጠቋሚ በሁለት ቁጥሮች መካከል ይሆናል።'},
  gen(){const h=rnd(1,12);return{fig:clock(h,30),q:{en:'What time is it?',am:'ስንት ሰዓት ነው?'},...hourOpts(h,true)}}},
 {title:{en:'Days of the week',am:'የሳምንቱ ቀናት'},type:'order',
  tip:{en:'There are 7 days in a week. Sing the days song: Monday, Tuesday…',am:'በሳምንት ውስጥ 7 ቀናት አሉ። የቀናቱን መዝሙር ዘምሩ፦ ሰኞ፣ ማክሰኞ…'},
  help:{en:'Tap the days in order, starting with Monday.',am:'ከሰኞ ጀምራችሁ ቀናቱን በቅደም ተከተል ንኩ።'},
  rounds:[{prompt:{en:'Monday to Sunday:',am:'ከሰኞ እስከ እሁድ፦'},items:DAYS}]},
 {title:{en:'Yesterday, today, tomorrow',am:'ትናንት፣ ዛሬ፣ ነገ'},type:'drill',need:5,
  tip:{en:'Tomorrow is the day after today. Yesterday is the day before today. After Sunday comes Monday again!',am:'ነገ ከዛሬ ቀጥሎ ያለው ቀን ነው። ትናንት ከዛሬ በፊት ያለው ቀን ነው። ከእሁድ በኋላ ሰኞ እንደገና ይመጣል!'},
  gen(){const d=rnd(0,6);const after=Math.random()<.5;const ans=(d+(after?1:6))%7;const set=new Set([ans]);while(set.size<3)set.add(rnd(0,6));const o=shuffle([...set]);
   return{q:after?{en:`Today is ${DAYS[d].en}. What day is tomorrow?`,am:`ዛሬ ${DAYS[d].am} ነው። ነገ ምን ቀን ነው?`}:{en:`Today is ${DAYS[d].en}. What day was yesterday?`,am:`ዛሬ ${DAYS[d].am} ነው። ትናንት ምን ቀን ነበር?`},o:o.map(i=>DAYS[i]),a:o.indexOf(ans)}}},
 {type:'exam',items:[
   {fig:clock(3,0),q:{en:'What time is it?',am:'ስንት ሰዓት ነው?'},o:[{en:"3 o'clock",am:'3 ሰዓት'},{en:"12 o'clock",am:'12 ሰዓት'},{en:'half past 3',am:'3 ሰዓት ተኩል'}],a:0},
   {fig:clock(8,30),q:{en:'What time is it?',am:'ስንት ሰዓት ነው?'},o:[{en:"8 o'clock",am:'8 ሰዓት'},{en:'half past 8',am:'8 ሰዓት ተኩል'},{en:"6 o'clock",am:'6 ሰዓት'}],a:1},
   {q:{en:'How many days are in a week?',am:'በሳምንት ውስጥ ስንት ቀናት አሉ?'},o:['5','7','10','12'],a:1},
   {q:{en:'Which day comes after Wednesday?',am:'ከረቡዕ በኋላ የሚመጣው ቀን?'},o:[DAYS[1],DAYS[3],DAYS[6]],a:1},
   {q:{en:'Dagim woke up at 12. Seid woke up 1 hour later. When did Seid wake up?',am:'ዳግም 12 ሰዓት ላይ ተነሳ። ሰይድ ከ1 ሰዓት በኋላ ተነሳ። ሰይድ ስንት ሰዓት ተነሳ?'},o:[{en:"1 o'clock",am:'1 ሰዓት'},{en:"11 o'clock",am:'11 ሰዓት'},{en:"2 o'clock",am:'2 ሰዓት'}],a:0}
  ]},
 {type:'notes',notes:{
  big:{en:'Time tells us when things happen: the order of our day, the clock and the days of the week.',am:'ጊዜ ነገሮች መቼ እንደሚሆኑ ይነግረናል፦ የቀናችን ቅደም ተከተል፣ ሰዓትና የሳምንቱ ቀናት።'},
  points:[{en:'Morning, afternoon and evening are times of the day.',am:'ጠዋት፣ ከሰዓትና ምሽት በቀን ውስጥ ያሉ ጊዜያት ናቸው።'},
   {en:'We do things in order: first, next, last.',am:'ነገሮችን በቅደም ተከተል እናደርጋለን፦ መጀመሪያ፣ ቀጥሎ፣ መጨረሻ።'},
   {en:'Long hand on 12: "… o\'clock". Long hand on 6: "half past".',am:'ረጅሙ ጠቋሚ 12 ላይ፦ "… ሰዓት"። ረጅሙ ጠቋሚ 6 ላይ፦ "… ሰዓት ተኩል"።'},
   {en:'A week has 7 days: Monday to Sunday, then again.',am:'ሳምንት 7 ቀናት አሉት፦ ከሰኞ እስከ እሁድ፣ ከዚያ እንደገና።'}],
  words:[['ሰዓት',{en:'hour / clock',am:'የጊዜ መለኪያ'}],['ተኩል',{en:'half past',am:'ግማሽ ሰዓት'}],['ሳምንት',{en:'week',am:'7 ቀናት'}],['ነገ',{en:'tomorrow',am:'ከዛሬ ቀጥሎ'}]],
  remember:{en:'Short hand = hour. Long hand = minutes.',am:'አጭሩ ጠቋሚ = ሰዓት። ረጅሙ ጠቋሚ = ደቂቃ።'},
  exam:[[{en:'Say the 7 days in order',am:'7ቱን ቀናት በቅደም ተከተል በሉ'},{en:'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',am:'ሰኞ፣ ማክሰኞ፣ ረቡዕ፣ ሐሙስ፣ ዓርብ፣ ቅዳሜ፣ እሁድ'}],[{en:'Long hand on 6 means…',am:'ረጅሙ ጠቋሚ 6 ላይ ማለት…'},{en:'half past',am:'ተኩል'}],[{en:'What do you do in the evening?',am:'ምሽት ምን ታደርጋላችሁ?'},{en:'Eat dinner, study, sleep',am:'እራት መብላት፣ ማጥናት፣ መተኛት'}]],
  innovate:{title:{en:'My paper-plate clock and day plan',am:'የወረቀት ሳህን ሰዓትና የቀን ዕቅዴ'},text:{en:'People who plan their time get more done. Build a clock and make a picture plan for your day.',am:'ጊዜያቸውን የሚያቅዱ ሰዎች ብዙ ይሠራሉ። ሰዓት ሥሩና ለቀናችሁ የስዕል ዕቅድ አዘጋጁ።'},
   steps:[{en:'Write 1 to 12 around a paper plate.',am:'በወረቀት ሳህን ዙሪያ ከ1 እስከ 12 ጻፉ።'},{en:'Cut a short and a long hand; fix them with a thorn or pin.',am:'አጭርና ረጅም ጠቋሚ ቁረጡ፤ በእሾህ ወይም በመርፌ አያይዙ።'},{en:'Draw your day: wake up, school, play, sleep.',am:'ቀናችሁን ሳሉ፦ መነሳት፣ ትምህርት ቤት፣ ጨዋታ፣ መተኛት።'},{en:'Show the time for each on your clock.',am:'የእያንዳንዱን ሰዓት በሰዓታችሁ አሳዩ።'}]}
 }}
 ]});
})();
