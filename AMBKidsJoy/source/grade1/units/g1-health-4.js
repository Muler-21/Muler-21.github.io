/* 1ኛ ክፍል ጤናና ሰ/ማጎልመሻ · ምዕራፍ 4 · ጤናና የአካል ብቃት */
(function(){
const SN={en:'Health & Physical Education',am:'ጤናና ሰውነት ማጎልመሻ'};
Unit.start({id:'g1-health-4',grade:1,subject:'health',subjectName:SN,chapter:{en:'Chapter 4',am:'ምዕራፍ 4'},
 title:{en:'Health and fitness',am:'ጤናና የአካል ብቃት'},
 footer:{en:'Built on the Grade 1 Health & PE student book, Chapter 4: heart and lung endurance, muscle strength and stretching.',am:'በ1ኛ ክፍል የጤናና ሰ/ማጎልመሻ መጽሐፍ ምዕራፍ 4 ላይ የተመሰረተ፦ የልብና የሳንባ ብርታት፣ የጡንቻ ብርታትና መሳሳብ።'},
 missions:[
 {title:{en:'Heart, muscles, stretch',am:'ልብ፣ ጡንቻ፣ መሳሳብ'},type:'sort',
  tip:{en:'Skipping and jogging make the heart and lungs strong. Push-ups and squats build muscles. Stretching makes us bendy.',am:'ገመድ ዝላይና ሶምሶማ ልብንና ሳንባን ያጠነክራሉ። ስኩዋትና ፑሽ-አፕ ጡንቻን ይገነባሉ። መሳሳብ ሰውነትን ተጣጣፊ ያደርጋል።'},
  buckets:[{en:'❤️ Heart & lungs',am:'❤️ ልብና ሳንባ'},{en:'💪 Muscles',am:'💪 ጡንቻ'},{en:'🤸 Stretch',am:'🤸 መሳሳብ'}],
  items:[{t:{en:'Skipping rope',am:'ገመድ ዝላይ'},b:0},{t:{en:'Jogging',am:'ሶምሶማ ሩጫ'},b:0},{t:{en:'Running around circles',am:'በክቦች ዙሪያ መሮጥ'},b:0},{t:{en:'Squats',am:'ቁጢጥ ብድግ'},b:1},{t:{en:'Lifting both legs while sitting',am:'ተቀምጦ ሁለት እግር ማንሳት'},b:1},{t:{en:'Touch your toes',am:'የእግር ጣት መንካት'},b:2},{t:{en:'Reach both arms up high',am:'ሁለት እጅ ወደ ላይ ማሳሳብ'},b:2}]},
 K1.moveMission({en:'Fitness circuit',am:'የአካል ብቃት ዙር'},{en:'Do each exercise. Feel your heart beat faster!',am:'እያንዳንዱን እንቅስቃሴ ሥሩ። ልባችሁ በፍጥነት ሲመታ ይሰማችኋል!'},[
  {pose:'jack',en:'Jumping jacks',am:'እጅና እግር እየዘረጉ መዝለል',n:10},{pose:'squat',en:'Squats',am:'ቁጢጥ ብድግ',n:5},{pose:'toe',en:'Touch your toes and hold',am:'የእግር ጣታችሁን ንኩና ያዙ',n:3},{pose:'up',en:'Stretch up tall',am:'ወደ ላይ ተሳሳቡ',n:3}]),
 {title:{en:'My heart experiment',am:'የልቤ ሙከራ'},type:'quiz',
  tip:{en:'Put your hand on your chest. Feel your heartbeat. Now jump 20 times and feel it again!',am:'እጃችሁን ደረታችሁ ላይ አድርጉ። የልባችሁን ምት ተሰማችሁ? አሁን 20 ጊዜ ዝለሉና እንደገና ተሰማችሁ!'},
  items:[{q:{en:'After jumping, your heart beats…',am:'ከዘለላችሁ በኋላ ልባችሁ የሚመታው…'},o:[{en:'faster',am:'በፍጥነት'},{en:'slower',am:'በዝግታ'}],a:0,e:{en:'Your muscles need more blood and air, so the heart works harder.',am:'ጡንቻዎቻችሁ ብዙ ደምና አየር ስለሚፈልጉ ልብ በብርታት ይሠራል።'}},
   {q:{en:'After resting for 2 minutes, it…',am:'ለ2 ደቂቃ ካረፋችሁ በኋላ…'},o:[{en:'slows down again',am:'እንደገና ይረጋጋል'},{en:'stops',am:'ይቆማል'}],a:0},
   {q:{en:'Exercising often makes the heart…',am:'ዘወትር መንቀሳቀስ ልብን…'},o:[{en:'strong',am:'ጠንካራ ያደርጋል'},{en:'weak',am:'ያደክማል'}],a:0}]},
 {title:{en:'Healthy habits',am:'ጤናማ ልማዶች'},type:'sort',
  tip:{en:'Fit bodies need exercise, sleep, water and good food.',am:'ብቁ ሰውነት እንቅስቃሴ፣ እንቅልፍ፣ ውኃና ጥሩ ምግብ ያስፈልገዋል።'},
  buckets:[{en:'💚 Healthy',am:'💚 ጤናማ'},{en:'💔 Unhealthy',am:'💔 ጤናማ ያልሆነ'}],
  items:[{t:{en:'Play outside every day',am:'በየቀኑ ውጭ መጫወት'},b:0},{t:{en:'Sleep early',am:'በጊዜ መተኛት'},b:0},{t:{en:'Drink clean water',am:'ንጹህ ውኃ መጠጣት'},b:0},{t:{en:'Sit all day',am:'ቀኑን ሙሉ መቀመጥ'},b:1},{t:{en:'Eat many sweets',am:'ብዙ ጣፋጭ መብላት'},b:1}]},
 {type:'exam',items:[
  {q:{en:'Skipping rope makes strong…',am:'ገመድ ዝላይ… ያጠነክራል'},o:[{en:'heart and lungs',am:'ልብና ሳንባን'},{en:'hair',am:'ፀጉርን'}],a:0},
  {q:{en:'Touching your toes is…',am:'የእግር ጣት መንካት…'},o:[{en:'stretching',am:'መሳሳብ ነው'},{en:'sleeping',am:'መተኛት ነው'}],a:0},
  {q:{en:'After running, the heart beats…',am:'ከሩጫ በኋላ ልብ…'},o:[{en:'faster',am:'በፍጥነት ይመታል'},{en:'not at all',am:'አይመታም'}],a:0},
  {q:{en:'Squats build…',am:'ቁጢጥ ብድግ… ይገነባል'},o:[{en:'leg muscles',am:'የእግር ጡንቻ'},{en:'teeth',am:'ጥርስ'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Fitness means a strong heart, strong muscles and a bendy body. Exercise every day keeps us healthy.',am:'የአካል ብቃት ማለት ጠንካራ ልብ፣ ጠንካራ ጡንቻና ተጣጣፊ ሰውነት ነው። በየቀኑ መንቀሳቀስ ጤናማ ያደርገናል።'},
  points:[{en:'Heart and lungs: skip, jog, run.',am:'ልብና ሳንባ፦ ገመድ ዝላይ፣ ሶምሶማ፣ ሩጫ።'},{en:'Muscles: squats, leg lifts, pushing.',am:'ጡንቻ፦ ቁጢጥ ብድግ፣ እግር ማንሳት።'},{en:'Stretching: touch toes, reach up, sit and reach.',am:'መሳሳብ፦ ጣት መንካት፣ ወደ ላይ መዘርጋት፣ ተቀምጦ ወደ ፊት መሳብ።'},{en:'The heart beats faster when we exercise.',am:'ስንንቀሳቀስ ልብ በፍጥነት ይመታል።'}],
  words:[['የአካል ብቃት',{en:'fitness',am:'ጠንካራና ብርቱ መሆን'}],['ጡንቻ',{en:'muscle',am:'ለመንቀሳቀስ የሚረዳ'}],['ሶምሶማ',{en:'jogging',am:'ቀስ ያለ ሩጫ'}]],
  remember:{en:'Warm up, exercise, cool down, drink water.',am:'ማሟሟቅ፣ መንቀሳቀስ፣ ማቀዝቀዝ፣ ውኃ መጠጣት።'},
  exam:[[{en:'Name one exercise for the heart',am:'ለልብ አንድ እንቅስቃሴ ጥቀሱ'},'ገመድ ዝላይ'],[{en:'What happens to your heartbeat after running?',am:'ከሩጫ በኋላ የልብ ምት ምን ይሆናል?'},'ይፈጥናል']],
  innovate:{title:{en:'Homemade skipping rope',am:'በቤት የተሠራ የዝላይ ገመድ'},text:{en:'Make a skipping rope from old plastic bags or cloth strips and count your jumps each day.',am:'ከአሮጌ ፌስታል ወይም ከጨርቅ ቁራጭ የዝላይ ገመድ ሥሩና በየቀኑ ዝላዮቻችሁን ቁጠሩ።'},
   steps:[{en:'Cut plastic bags into long strips.',am:'ፌስታሎችን ረጅም ቁራጭ አድርጋችሁ ቁረጡ።'},{en:'Plait 3 strips together to make a rope.',am:'3 ቁራጮችን ጎንጉናችሁ ገመድ ሥሩ።'},{en:'Tie handles at each end.',am:'በሁለቱ ጫፎች መያዣ እሰሩ።'},{en:'Count and record your jumps every day.',am:'በየቀኑ ዝላዮቻችሁን ቁጠሩና መዝግቡ።'}]}}}
 ]});
})();
