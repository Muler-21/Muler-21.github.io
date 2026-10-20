/* Grade 1 English · Unit 6 · Hot and Cold Weather */
(function(){
const M=K1.engMissions({
 listen:[['hot','🥵','ሞቃት'],['cold','🥶','ቀዝቃዛ'],['rainy','🌧️','ዝናባማ'],['sunny','☀️','ፀሐያማ'],['windy','🌬️','ነፋሻማ'],['cloudy','☁️','ደመናማ'],['foggy','🌫️','ጭጋጋማ']],
 letters:[['🥕','carrot'],['🌸','flower'],['🐓','hen'],['🐀','rat'],['☀️','sun'],['🌬️','wind']],
 trace:['c','f','h','r','s','w'],
 spell:[{w:'hot',blanks:[0],e:'🥵',am:'ሞቃት'},{w:'cold',blanks:[0,2],e:'🥶',am:'ቀዝቃዛ'},{w:'rain',blanks:[0],e:'🌧️',am:'ዝናብ'},{w:'sun',blanks:[0],e:'☀️',am:'ፀሐይ'},{w:'windy',blanks:[0,3],e:'🌬️',am:'ነፋሻማ'}],
 sentences:[['Today','is','sunny.'],['Yesterday','was','cold.'],['It','is','rainy','today.']]
});
M.push({title:{en:'Is, am, are, was, were',am:'is, am, are, was, were'},type:'quiz',
 tip:{en:'Now: I am, he/she/it is, we/they are. Yesterday: was (one) and were (many).',am:'አሁን፦ I am፣ he/she/it is፣ we/they are። ትናንት፦ was (ለአንድ)፣ were (ለብዙ)።'},
 items:[{say:'I am cold.',q:'I ___ cold.',o:['am','is','are'],a:0},{say:'She is a student.',q:'She ___ a student.',o:['is','am','are'],a:0},
  {say:'Two pens are on the table.',q:'Two pens ___ on the table.',o:['are','is','am'],a:0},{say:'Yesterday was rainy.',q:'Yesterday ___ rainy.',o:['was','were','am'],a:0},
  {say:'Yesterday, we were in the class.',q:'Yesterday, we ___ in the class.',o:['were','was','is'],a:0}]});
M.push({title:{en:'What to wear?',am:'ምን እንልበስ?'},type:'sort',
 tip:{en:'We dress for the weather! Hot day or cold day?',am:'እንደ አየሩ እንለብሳለን! ሞቃት ቀን ወይስ ቀዝቃዛ ቀን?'},
 buckets:[{en:'🥵 Hot day',am:'🥵 ሞቃት ቀን'},{en:'🥶 Cold day',am:'🥶 ቀዝቃዛ ቀን'}],
 items:[{t:{en:'🧢 a hat for the sun',am:'🧢 የፀሐይ ባርኔጣ'},b:0},{t:{en:'💧 drink a lot of water',am:'💧 ብዙ ውኃ መጠጣት'},b:0},{t:{en:'👕 a light T-shirt',am:'👕 ቀላል ቲሸርት'},b:0},{t:{en:'🧥 a warm jacket',am:'🧥 ሞቃት ጃኬት'},b:1},{t:{en:'🧣 a scarf (gabi)',am:'🧣 ጋቢ'},b:1},{t:{en:'☕ a hot drink',am:'☕ ትኩስ መጠጥ'},b:1}]});
M.push({type:'exam',items:[
  {say:'rainy',q:{en:'Listen. Which weather?',am:'አዳምጡ። የትኛው የአየር ጠባይ?'},o:[{svg:'<span class="emo">🌧️</span>',label:'rainy'},{svg:'<span class="emo">☀️</span>',label:'sunny'},{svg:'<span class="emo">🌫️</span>',label:'foggy'}],a:0},
  {q:'Today ___ windy.',o:['is','are','were'],a:0},
  {q:'Yesterday ___ sunny.',o:['was','is','are'],a:0},
  {q:{en:'On a cold day we wear…',am:'በቀዝቃዛ ቀን እንለብሳለን…'},o:['a warm jacket','nothing'],a:0},
  {q:{en:'Unscramble: t-o-h',am:'አስተካክሉ፦ t-o-h'},o:['hot','toh','oht'],a:0}]});
M.push({type:'notes',notes:{
 big:{en:'Weather changes: hot, cold, rainy, sunny, windy, cloudy, foggy. We talk about it with "It is…" and "Today is…".',am:'የአየር ጠባይ ይለዋወጣል፦ hot፣ cold፣ rainy፣ sunny፣ windy፣ cloudy፣ foggy። ስለሱ "It is…" እና "Today is…" ብለን እንናገራለን።'},
 points:[{en:'Weather words: hot, cold, rainy, sunny, windy, cloudy, foggy.',am:'የአየር ጠባይ ቃላት፦ hot (ሞቃት)፣ cold (ቀዝቃዛ)፣ rainy (ዝናባማ)፣ sunny (ፀሐያማ)፣ windy (ነፋሻማ)፣ cloudy (ደመናማ)፣ foggy (ጭጋጋማ)።'},{en:'"Today is sunny. It is cold."',am:'"Today is sunny. It is cold."'},{en:'Now: am, is, are. Yesterday: was, were.',am:'አሁን፦ am፣ is፣ are። ትናንት፦ was፣ were።'},{en:'Dress for the weather.',am:'እንደ አየሩ ልበሱ።'}],
 words:[['weather',{en:'weather',am:'የአየር ጠባይ'}],['today',{en:'today',am:'ዛሬ'}],['yesterday',{en:'yesterday',am:'ትናንት'}]],
 remember:{en:'Add -y: rain → rainy, sun → sunny, wind → windy.',am:'-y ጨምሩ፦ rain → rainy፣ sun → sunny፣ wind → windy።'},
 exam:[[{en:'What is the weather today?',am:'ዛሬ የአየር ጠባዩ እንዴት ነው?'},'Today is sunny / cloudy …'],['Yesterday ___ cold.','was'],[{en:'Spell "rain"',am:'"rain"ን ፊደል በፊደል በሉ'},'r-a-i-n']],
 innovate:{title:{en:'Class weather station',am:'የክፍል የአየር ጠባይ ጣቢያ'},text:{en:'Weather scientists record the weather every day. Make a weather chart and a rain gauge from a bottle.',am:'የአየር ጠባይ ተመራማሪዎች በየቀኑ ይመዘግባሉ። የአየር ጠባይ ሰንጠረዥና ከጠርሙስ የዝናብ መለኪያ ሥሩ።'},
  steps:[{en:'Cut the top off a plastic bottle; mark lines on it.',am:'የፕላስቲክ ጠርሙስን አናት ቁረጡ፤ መስመሮችን አስምሩበት።'},{en:'Put it outside to catch rain.',am:'ዝናብ እንዲቀበል ውጭ አስቀምጡት።'},{en:'Each day draw a symbol: ☀️ 🌧️ ☁️ 🌬️.',am:'በየቀኑ ምልክት ሳሉ፦ ☀️ 🌧️ ☁️ 🌬️።'},{en:'Say: "Today is rainy. Yesterday was sunny."',am:'በሉ፦ "Today is rainy. Yesterday was sunny."'}]}}});
Unit.start({id:'g1-english-6',grade:1,subject:'english',subjectName:{en:'English',am:'እንግሊዝኛ'},chapter:{en:'Unit 6',am:'ክፍል 6'},
 title:{en:'Hot and Cold Weather',am:'ሞቃትና ቀዝቃዛ የአየር ጠባይ'},footer:{en:'Built on English for Ethiopia, Grade 1, Unit 6: weather words and is/am/are/was/were.',am:'በEnglish for Ethiopia 1ኛ ክፍል፣ ክፍል 6 ላይ የተመሰረተ፦ የአየር ጠባይ ቃላትና is/am/are/was/were።'},missions:M});
})();
