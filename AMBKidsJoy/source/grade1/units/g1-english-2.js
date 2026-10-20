/* Grade 1 English · Unit 2 · Times of the Day */
(function(){
const {rnd,shuffle}=G3;const {clock}=K1;
const NUM=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
const M=K1.engMissions({
 listen:[['morning','🌅','ጠዋት'],['afternoon','☀️','ከሰዓት'],['evening','🌆','ምሽት'],['night','🌙','ሌሊት'],['clock','🕰️','ሰዓት']],
 letters:[['🐱','cat'],['🐴','horse'],['🦁','lion'],['🐒','monkey'],['🍊','orange'],['🍋','lemon'],['🏠','house']],
 trace:['c','h','l','m','o','C','H','L','M','O'],
 spell:[{w:'cat',blanks:[0],e:'🐱',am:'ድመት'},{w:'hat',blanks:[0],e:'👒',am:'ባርኔጣ'},{w:'lion',blanks:[0],e:'🦁',am:'አንበሳ'},{w:'clock',blanks:[0,4],e:'🕰️',am:'ሰዓት'}],
 sentences:[['What','time','is','it?'],['It','is','3',"o'clock."],['Good','evening,','mum.']]
});
M.push({title:{en:'Numbers 0 to 12',am:'ቁጥሮች ከ0 እስከ 12'},type:'drill',need:6,
 tip:{en:'Listen to the number word and count the oranges.',am:'የቁጥሩን ስም አዳምጡና ብርቱካኖቹን ቁጠሩ።'},
 gen(){const n=rnd(1,12);const set=new Set([n]);while(set.size<4)set.add(rnd(0,12));const o=shuffle([...set]);
  return{fig:G3.objs(n,'🍊',6),q:{en:'How many? Choose the word.',am:'ስንት ናቸው? ቃሉን ምረጡ።'},o:o.map(v=>NUM[v]),a:o.indexOf(n),e:`${n} = ${NUM[n]}`}}});
M.push({title:{en:"What time is it?",am:'ስንት ሰዓት ነው?'},type:'drill',need:5,
 tip:{en:'When the long hand is on 12, say "It is … o\'clock".',am:'ረጅሙ ጠቋሚ 12 ላይ ሲሆን "It is … o\'clock" በሉ።'},
 gen(){const h=rnd(1,12);const set=new Set([h]);while(set.size<3)set.add(rnd(1,12));const o=shuffle([...set]);return{fig:clock(h,0),q:'What time is it?',o:o.map(v=>`It is ${v} o'clock.`),a:o.indexOf(h)}}});
M.push({title:{en:'Greet at the right time',am:'በትክክለኛው ጊዜ ሰላም በሉ'},type:'quiz',
 tip:{en:'Good morning, good afternoon, good evening, good night: choose by the time of day.',am:'Good morning፣ good afternoon፣ good evening፣ good night፦ በቀኑ ጊዜ ምረጡ።'},
 items:[{fig:'<span class="emo" style="font-size:3rem">🌅</span>',q:{en:'In the morning we say…',am:'ጠዋት እንላለን…'},o:['Good morning.','Good night.','Good evening.'],a:0},
  {fig:'<span class="emo" style="font-size:3rem">☀️</span>',q:{en:'After lunch we say…',am:'ከምሳ በኋላ እንላለን…'},o:['Good afternoon.','Good morning.','Good night.'],a:0},
  {fig:'<span class="emo" style="font-size:3rem">🌙</span>',q:{en:'Before sleeping we say…',am:'ከመተኛታችን በፊት እንላለን…'},o:['Good night.','Good morning.','Hello.'],a:0},
  {say:'Where are you from?',q:'"Where are you from?"',o:["I'm from Bahir Dar.",'I am eight years old.','It is 2 o\'clock.'],a:0}]});
M.push({type:'exam',items:[
  {q:{en:'"seven" is…',am:'"seven" ስንት ነው?'},o:['7','11','17'],a:0},
  {fig:clock(4,0),q:'What time is it?',o:["It is 4 o'clock.","It is 12 o'clock.","It is 8 o'clock."],a:0},
  {q:{en:'At night we say…',am:'ሌሊት እንላለን…'},o:['Good night.','Good morning.'],a:0},
  {q:{en:'"lion" starts with…',am:'"lion" የሚጀምረው በ…'},o:['l','m','h'],a:0},
  {q:'"How old are you?"',o:['I am seven years old.','I am fine.','My name is Sara.'],a:0}]});
M.push({type:'notes',notes:{
 big:{en:'We use time words, numbers and greetings to talk about our day in English.',am:'ስለቀናችን በእንግሊዝኛ ለመናገር የጊዜ ቃላትን፣ ቁጥሮችንና ሰላምታን እንጠቀማለን።'},
 points:[{en:'Times of day: morning, afternoon, evening, night.',am:'የቀን ጊዜያት፦ morning (ጠዋት)፣ afternoon (ከሰዓት)፣ evening (ምሽት)፣ night (ሌሊት)።'},{en:'Numbers zero to twelve.',am:'ቁጥሮች ከzero እስከ twelve።'},{en:'"What time is it?" "It is 3 o\'clock."',am:'"What time is it?" "It is 3 o\'clock."'},{en:'Letters c, h, l, m, o: cat, horse, lion, monkey, orange.',am:'ፊደላት c፣ h፣ l፣ m፣ o፦ cat፣ horse፣ lion፣ monkey፣ orange።'}],
 words:[['clock',{en:'clock',am:'የግድግዳ ሰዓት'}],['hour',{en:'hour',am:'ሰዓት'}],['late',{en:'late',am:'ዘግይቶ'}]],
 remember:{en:'Good morning → Good afternoon → Good evening → Good night.',am:'Good morning → Good afternoon → Good evening → Good night።'},
 exam:[[{en:'Count 1 to 12 in English',am:'ከ1 እስከ 12 በእንግሊዝኛ ቁጠሩ'},'one, two, three … twelve'],[{en:'Ask the time',am:'ሰዓት ጠይቁ'},'What time is it?'],[{en:'Introduce yourself',am:'ራሳችሁን አስተዋውቁ'},"Hello. My name is … I'm from …"]],
 innovate:{title:{en:'English time-table for my day',am:'የቀኔ የእንግሊዝኛ የጊዜ ሰሌዳ'},text:{en:'Make a picture time-table of your day in English and stick it at home.',am:'የቀናችሁን የስዕል የጊዜ ሰሌዳ በእንግሊዝኛ ሥሩና በቤት ለጥፉት።'},
  steps:[{en:'Draw 4 boxes: morning, afternoon, evening, night.',am:'4 ሳጥኖችን ሳሉ፦ morning፣ afternoon፣ evening፣ night።'},{en:'Draw what you do in each.',am:'በእያንዳንዱ የምታደርጉትን ሳሉ።'},{en:'Write the time: 7 o\'clock…',am:'ሰዓቱን ጻፉ፦ 7 o\'clock…'},{en:'Read it to your family in English.',am:'ለቤተሰባችሁ በእንግሊዝኛ አንብቡት።'}]}}});
Unit.start({id:'g1-english-2',grade:1,subject:'english',subjectName:{en:'English',am:'እንግሊዝኛ'},chapter:{en:'Unit 2',am:'ክፍል 2'},
 title:{en:'Times of the Day',am:'የቀኑ ጊዜያት'},footer:{en:'Built on English for Ethiopia, Grade 1, Unit 2: times of day, numbers, telling time and introductions.',am:'በEnglish for Ethiopia 1ኛ ክፍል፣ ክፍል 2 ላይ የተመሰረተ፦ የቀን ጊዜያት፣ ቁጥሮች፣ ሰዓትና ራስን ማስተዋወቅ።'},missions:M});
})();
