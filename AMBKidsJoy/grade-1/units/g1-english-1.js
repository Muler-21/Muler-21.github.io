/* Grade 1 English · Unit 1 · My Family */
(function(){
const {shuffle}=G3;
const M=K1.engMissions({
 listen:[['mother','👩','እናት'],['father','👨','አባት'],['sister','👧','እህት'],['brother','👦','ወንድም'],['grandmother','👵','አያት (ሴት)'],['grandfather','👴','አያት (ወንድ)'],['baby','👶','ሕፃን']],
 letters:[['🐜','ant'],['📘','book'],['🦊','fox'],['🐭','mouse'],['⭐','star'],['☀️','sun']],
 trace:['a','b','f','m','s','A','B','F','M','S'],
 spell:[{w:'mother',blanks:[0],e:'👩',am:'እናት'},{w:'father',blanks:[0],e:'👨',am:'አባት'},{w:'sister',blanks:[0],e:'👧',am:'እህት'},{w:'bag',blanks:[0,2],e:'🎒',am:'ቦርሳ'},{w:'pen',blanks:[1],e:'🖊️',am:'እስክሪብቶ'}],
 sentences:[['This','is','my','mother.'],['This','is','my','brother.'],['Good','morning,','teacher.']]
});
M.push({title:{en:'Classroom objects',am:'የክፍል ዕቃዎች'},type:'match',sayRight:'en-US',
 tip:{en:'Match the picture with the English word. You will hear the word!',am:'ሥዕሉን ከእንግሊዝኛው ቃል ጋር አዛምዱ። ቃሉን ትሰማላችሁ!'},
 rounds:[[['🎒','bag'],['📘','book'],['🪑','chair'],['✏️','pencil']],[['📏','ruler'],['🖊️','pen'],['🧽','duster'],['🧹','eraser']].slice(0,3).concat([['🗑️','bin']])]});
M.push({title:{en:'Greetings',am:'ሰላምታ'},type:'quiz',
 tip:{en:'We greet people kindly: "Good morning! How are you?" "I\'m fine, thank you."',am:'ሰዎችን በትህትና ሰላም እንላለን፦ "Good morning! How are you?" "I\'m fine, thank you."'},
 items:[{say:'How are you?',q:'"How are you?"',o:["I'm fine, thank you.",'My name is Hana.','Goodbye.'],a:0},
  {say:'Good morning, teacher.',q:{en:'The teacher says "Good morning, students." You say…',am:'መምህሩ "Good morning, students." አሉ። እናንተ…'},o:['Good morning, teacher.','Good night.','Thank you, Ali.'],a:0},
  {say:'What is your name?',q:'"What is your name?"',o:['My name is Ali.',"I'm fine.",'It is a pen.'],a:0}]});
M.push({type:'exam',items:[
  {say:'father',q:{en:'Listen. Who is it?',am:'አዳምጡ። ማን ነው?'},o:[{svg:'<span class="emo">👨</span>',label:'father'},{svg:'<span class="emo">👩</span>',label:'mother'},{svg:'<span class="emo">👶</span>',label:'baby'}],a:0},
  {q:{en:'Which letter does "sun" start with?',am:'"sun" በየትኛው ፊደል ይጀምራል?'},o:['s','m','b'],a:0},
  {q:{en:'Capital letter of "b"?',am:'የ"b" ትልቁ ፊደል?'},o:['B','D','P'],a:0},
  {q:'"Good morning!"',o:['Good morning!','Goodbye!','Sit down.'],a:0},
  {q:{en:'This is my ___ (👧)',am:'This is my ___ (👧)'},o:['sister','father','book'],a:0}]});
M.push({type:'notes',notes:{
 big:{en:'In English we greet people, name our family and classroom things, and learn the 26 letters a to z.',am:'በእንግሊዝኛ ሰላምታ እንሰጣለን፣ የቤተሰባችንንና የክፍል ዕቃዎችን ስም እንናገራለን፤ ከ a እስከ z ያሉትን 26 ፊደላት እንማራለን።'},
 points:[{en:'The alphabet has 26 letters, each with a capital and a small form: A a, B b…',am:'የእንግሊዝኛ ፊደላት 26 ናቸው፤ እያንዳንዱ ትልቅና ትንሽ መልክ አለው፦ A a፣ B b…'},{en:'Family words: mother, father, sister, brother, grandmother, grandfather.',am:'የቤተሰብ ቃላት፦ mother (እናት)፣ father (አባት)፣ sister (እህት)፣ brother (ወንድም)፣ grandmother፣ grandfather።'},{en:'Greetings: Good morning. How are you? I\'m fine, thank you.',am:'ሰላምታ፦ Good morning. How are you? I\'m fine, thank you.'},{en:'Classroom words: bag, book, pen, pencil, chair, desk.',am:'የክፍል ቃላት፦ bag፣ book፣ pen፣ pencil፣ chair፣ desk።'}],
 words:[['family',{en:'family',am:'ቤተሰብ'}],['teacher',{en:'teacher',am:'መምህር'}],['student',{en:'student',am:'ተማሪ'}]],
 remember:{en:'"This is my mother." Point and say it!',am:'"This is my mother." እያመለከታችሁ በሉ!'},
 exam:[[{en:'Say the alphabet song',am:'የፊደል መዝሙሩን ዘምሩ'},'a b c d e f g …'],[{en:'Say: How are you?',am:'"How are you?" በሉ'},"I'm fine, thank you."],[{en:'Name 3 family members in English',am:'3 የቤተሰብ አባላትን በእንግሊዝኛ ጥቀሱ'},'mother, father, sister']],
 innovate:{title:{en:'My family tree poster',am:'የቤተሰቤ ዛፍ ፖስተር'},text:{en:'Draw your family as a tree and label everyone in English. Show it to your class and say "This is my…".',am:'ቤተሰባችሁን እንደ ዛፍ ሳሉና እያንዳንዱን በእንግሊዝኛ ሰይሙ። ለክፍላችሁ አሳዩና "This is my…" በሉ።'},
  steps:[{en:'Draw a big tree.',am:'ትልቅ ዛፍ ሳሉ።'},{en:'Draw your family on the branches.',am:'ቤተሰባችሁን በቅርንጫፎቹ ላይ ሳሉ።'},{en:'Write: mother, father, sister, brother…',am:'ጻፉ፦ mother፣ father፣ sister፣ brother…'},{en:'Present it: "This is my mother."',am:'አቅርቡ፦ "This is my mother."'}]}}});
Unit.start({id:'g1-english-1',grade:1,subject:'english',subjectName:{en:'English',am:'እንግሊዝኛ'},chapter:{en:'Unit 1',am:'ክፍል 1'},
 title:{en:'My Family',am:'ቤተሰቤ'},footer:{en:'Built on English for Ethiopia, Grade 1, Unit 1: the alphabet, greetings, family and classroom words.',am:'በEnglish for Ethiopia 1ኛ ክፍል፣ ክፍል 1 ላይ የተመሰረተ፦ ፊደላት፣ ሰላምታ፣ የቤተሰብና የክፍል ቃላት።'},missions:M});
})();
