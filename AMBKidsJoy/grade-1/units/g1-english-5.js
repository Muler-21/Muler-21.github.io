/* Grade 1 English · Unit 5 · Domestic Animals */
(function(){
const {rnd,shuffle}=G3;
const A=[['cow','🐄'],['dog','🐕'],['goat','🐐'],['horse','🐴'],['ox','🐂'],['cat','🐈'],['camel','🐪'],['donkey','🫏'],['hen','🐓'],['sheep','🐑']];
const M=K1.engMissions({
 listen:A.map(([w,e])=>[w,e]),
 letters:[['🐄','cow'],['🐕','dog'],['🐐','goat'],['🐴','horse'],['🐂','ox']],
 trace:['c','d','g','h','o'],
 spell:[{w:'cow',blanks:[0],e:'🐄',am:'ላም'},{w:'dog',blanks:[0],e:'🐕',am:'ውሻ'},{w:'goat',blanks:[0],e:'🐐',am:'ፍየል'},{w:'hen',blanks:[0],e:'🐓',am:'ዶሮ'},{w:'camel',blanks:[0,3],e:'🐪',am:'ግመል'}],
 sentences:[['I','like','the','cow','most.'],['There','are','three','goats.'],['What','does','a','cow','eat?']]
});
M.push({title:{en:'There is / There are',am:'There is / There are'},type:'drill',need:5,
 tip:{en:'One thing: "There is 1 cow." More than one: "There are 3 cows."',am:'አንድ ነገር፦ "There is 1 cow." ከአንድ በላይ፦ "There are 3 cows."'},
 gen(){const [w,e]=A[rnd(0,4)];const n=rnd(1,6);const pl=w==='ox'?'oxen':w+'s';const ok=n===1?`There is 1 ${w}.`:`There are ${n} ${pl}.`;
  const bad1=n===1?`There are 1 ${w}.`:`There is ${n} ${pl}.`;const bad2=`There are ${n===1?2:n-1} ${pl}.`;const o=shuffle([ok,bad1,bad2]);
  return{fig:G3.objs(n,e,6),q:{en:'Which sentence is right?',am:'ትክክለኛው ዓረፍተ ነገር የትኛው ነው?'},o,a:o.indexOf(ok)}}});
M.push({title:{en:'Wh- questions',am:'Wh- ጥያቄዎች'},type:'match',
 tip:{en:'What, Where, Who, When, Why and How help us ask questions.',am:'What፣ Where፣ Who፣ When፣ Why እና How ጥያቄ ለመጠየቅ ይረዱናል።'},
 rounds:[[['What does a cow eat?','Grass.'],['Where does a hen live?','In a hen house.'],['Who feeds your goat?','My brother.'],['Why do we keep cows?','For milk.']]]});
M.push({type:'exam',items:[
  {say:'donkey',q:{en:'Listen. Which animal?',am:'አዳምጡ። የትኛው እንስሳ?'},o:[{svg:'<span class="emo">🫏</span>',label:'donkey'},{svg:'<span class="emo">🐴</span>',label:'horse'},{svg:'<span class="emo">🐄</span>',label:'cow'}],a:0},
  {q:'There ___ 4 hens.',o:['are','is'],a:0},
  {q:'There ___ 1 cat.',o:['is','are'],a:0},
  {q:{en:'Unscramble: t-c-a',am:'አስተካክሉ፦ t-c-a'},o:['cat','act','tac'],a:0},
  {q:'"Which domestic animal do you like the most?"',o:['I like the camel the most.','It is 2 o\'clock.'],a:0}]});
M.push({type:'notes',notes:{
 big:{en:'Domestic animals live with people and help us. We name them, count them and ask questions about them in English.',am:'ለማዳ እንስሳት ከሰዎች ጋር ይኖራሉ፤ ይረዱናል። በእንግሊዝኛ እንሰይማቸዋለን፣ እንቆጥራቸዋለን፣ ስለነሱ እንጠይቃለን።'},
 points:[{en:'Animals: cow, ox, goat, sheep, horse, donkey, camel, dog, cat, hen.',am:'እንስሳት፦ cow (ላም)፣ ox (በሬ)፣ goat (ፍየል)፣ sheep (በግ)፣ horse (ፈረስ)፣ donkey (አህያ)፣ camel (ግመል)፣ dog (ውሻ)፣ cat (ድመት)፣ hen (ዶሮ)።'},{en:'"I like the cow the most. My favourite animal is the cow."',am:'"I like the cow the most. My favourite animal is the cow."'},{en:'"There is" for one; "There are" for many.',am:'"There is" ለአንድ፤ "There are" ለብዙ።'},{en:'Question words: what, where, who, when, why, how.',am:'የጥያቄ ቃላት፦ what፣ where፣ who፣ when፣ why፣ how።'}],
 words:[['domestic animal',{en:'domestic animal',am:'ለማዳ እንስሳ'}],['favourite',{en:'favourite',am:'በጣም የምወደው'}],['village',{en:'village',am:'መንደር'}]],
 remember:{en:'one cow → two cows (add -s)',am:'one cow → two cows (-s ጨምሩ)'},
 exam:[[{en:'Name 5 domestic animals',am:'5 ለማዳ እንስሳትን ጥቀሱ'},'cow, goat, sheep, horse, hen'],[{en:'Say your favourite animal',am:'የምትወዱትን እንስሳ ተናገሩ'},'My favourite domestic animal is …'],['There ___ 5 sheep.','are']],
 innovate:{title:{en:'Village animal survey',am:'የመንደር እንስሳት ቆጠራ'},text:{en:'Count the animals in your village and make a picture chart. Farmers and planners use surveys like this!',am:'በመንደራችሁ ያሉትን እንስሳት ቁጠሩና የስዕል ሰንጠረዥ ሥሩ። ገበሬዎችና አቅጣጫ ሰጪዎች እንደዚህ ዓይነት ቆጠራ ይጠቀማሉ!'},
  steps:[{en:'Walk with an adult and count cows, goats, hens.',am:'ከትልቅ ሰው ጋር ተዘዋውራችሁ ላሞችን፣ ፍየሎችንና ዶሮዎችን ቁጠሩ።'},{en:'Draw one picture for each animal you see.',am:'ለምታዩት እያንዳንዱ እንስሳ አንድ ሥዕል ሳሉ።'},{en:'Write sentences: "There are 6 goats."',am:'ዓረፍተ ነገር ጻፉ፦ "There are 6 goats."'},{en:'Which animal is the most? Tell your class.',am:'ብዙ የሆነው የትኛው እንስሳ ነው? ለክፍላችሁ ንገሩ።'}]}}});
Unit.start({id:'g1-english-5',grade:1,subject:'english',subjectName:{en:'English',am:'እንግሊዝኛ'},chapter:{en:'Unit 5',am:'ክፍል 5'},
 title:{en:'Domestic Animals',am:'የቤት እንስሳት'},footer:{en:'Built on English for Ethiopia, Grade 1, Unit 5: animal names, favourites, wh- questions and "there is / there are".',am:'በEnglish for Ethiopia 1ኛ ክፍል፣ ክፍል 5 ላይ የተመሰረተ፦ የእንስሳት ስሞች፣ የምንወደው፣ wh- ጥያቄዎችና there is / there are።'},missions:M});
})();
