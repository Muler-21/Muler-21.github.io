/* Grade 1 English · Unit 8 · Caring for Body Parts */
(function(){
const M=K1.engMissions({
 listen:[['head','🙂','ራስ'],['eye','👁️','ዓይን'],['ear','👂','ጆሮ'],['nose','👃','አፍንጫ'],['mouth','👄','አፍ'],['hand','✋','እጅ'],['leg','🦵','እግር'],['foot','🦶','እግር (ታችኛው)'],['teeth','🦷','ጥርስ']],
 trace:['E','I','J','K','N','Q','U','V','X','Z'],
 spell:[{w:'hand',blanks:[0,3],e:'✋',am:'እጅ'},{w:'nose',blanks:[0],e:'👃',am:'አፍንጫ'},{w:'ear',blanks:[0],e:'👂',am:'ጆሮ'},{w:'eye',blanks:[1],e:'👁️',am:'ዓይን'},{w:'leg',blanks:[0],e:'🦵',am:'እግር'}],
 sentences:[['We','brush','our','teeth.'],['This','is','my','nose.'],['Please,','open','your','book.']]
});
M.push({title:{en:'What is it used for?',am:'ለምን ይጠቅማል?'},type:'match',sayRight:'en-US',
 tip:{en:'Each body part has a job: eyes to see, ears to hear, nose to smell, tongue to taste, hands to touch.',am:'እያንዳንዱ የሰውነት ክፍል ሥራ አለው፦ ዓይን ለማየት፣ ጆሮ ለመስማት፣ አፍንጫ ለማሽተት፣ ምላስ ለመቅመስ፣ እጅ ለመዳሰስ።'},
 rounds:[[['👁️ eye','to see'],['👂 ear','to hear'],['👃 nose','to smell']],[['👅 tongue','to taste'],['✋ hand','to touch'],['🦶 foot','to walk']]]});
M.push({title:{en:'Take care of your body',am:'ሰውነታችሁን ተንከባከቡ'},type:'match',sayRight:'en-US',
 tip:{en:'"This is the way we wash our hands…" Match the body part with how we care for it.',am:'"This is the way we wash our hands…" የሰውነቱን ክፍል ከእንክብካቤው ጋር አዛምዱ።'},
 rounds:[[['🦷 teeth','brush our teeth'],['💇 hair','comb our hair'],['✋ hands','wash our hands'],['🙂 face','wash our face']]]});
M.push({title:{en:'Follow instructions',am:'ትዕዛዝ መከተል'},type:'quiz',
 tip:{en:'Listen and choose the right picture. Then do it!',am:'አዳምጡና ትክክለኛውን ሥዕል ምረጡ። ከዚያ አድርጉት!'},
 items:[['Sit down.','🪑'],['Stand up.','🧍'],['Open your book.','📖'],['Shut the door.','🚪'],['Come here.','👋']].map(([s,e],i,A)=>{const o=G3.shuffle([A[i],A[(i+1)%A.length],A[(i+2)%A.length]]);return{say:s,q:{en:'Listen. What should you do?',am:'አዳምጡ። ምን ማድረግ አለባችሁ?'},o:o.map(x=>({svg:`<span class="emo">${x[1]}</span>`,label:x[0]})),a:o.indexOf(A[i])}})});
M.push({title:{en:'I, we, you, he, she, it, they',am:'ተውላጠ ስሞች'},type:'quiz',
 tip:{en:'I am. You are. We are. They are. He is. She is. It is.',am:'I am። You are። We are። They are። He is። She is። It is።'},
 items:[{q:'I ___ a student.',o:['am','is','are'],a:0},{q:'We ___ in class.',o:['are','am','is'],a:0},{q:'He ___ in grade 1.',o:['is','are','am'],a:0},{q:'They ___ clever.',o:['are','is','am'],a:0}]});
M.push({type:'exam',items:[
  {say:'ear',q:{en:'Listen. Which body part?',am:'አዳምጡ። የትኛው የሰውነት ክፍል?'},o:[{svg:'<span class="emo">👂</span>',label:'ear'},{svg:'<span class="emo">👃</span>',label:'nose'},{svg:'<span class="emo">✋</span>',label:'hand'}],a:0},
  {q:{en:'The eye is used to…',am:'ዓይን የሚጠቅመው…'},o:['see','hear','smell'],a:0},
  {q:'We brush our ___.',o:['teeth','legs','ears'],a:0},
  {q:'She ___ tall.',o:['is','am','are'],a:0},
  {q:{en:'"This is my nose." Point to your…',am:'"This is my nose." ጠቁሙ…'},o:['👃','👂','🦵'],a:0}]});
M.push({type:'notes',notes:{
 big:{en:'Our body parts each have a job. We name them in English and take care of them every day.',am:'እያንዳንዱ የሰውነታችን ክፍል ሥራ አለው። በእንግሊዝኛ እንሰይማቸዋለን፤ በየቀኑ እንንከባከባቸዋለን።'},
 points:[{en:'Body parts: head, hair, eye, ear, nose, mouth, teeth, hand, finger, leg, foot.',am:'የሰውነት ክፍሎች፦ head፣ hair፣ eye፣ ear፣ nose፣ mouth፣ teeth፣ hand፣ finger፣ leg፣ foot።'},{en:'Eyes see, ears hear, nose smells, tongue tastes, hands touch.',am:'ዓይን ያያል፣ ጆሮ ይሰማል፣ አፍንጫ ያሸታል፣ ምላስ ይቀምሳል፣ እጅ ይዳስሳል።'},{en:'Care: brush teeth, comb hair, wash hands and face, take a bath.',am:'እንክብካቤ፦ ጥርስ መቦረሽ፣ ፀጉር ማበጠር፣ እጅና ፊት መታጠብ፣ ገላ መታጠብ።'},{en:'I am; he/she/it is; we/you/they are.',am:'I am፤ he/she/it is፤ we/you/they are።'}],
 words:[['body',{en:'body',am:'ሰውነት'}],['brush',{en:'brush',am:'መቦረሽ'}],['comb',{en:'comb',am:'ማበጠር'}]],
 remember:{en:'Head, shoulders, knees and toes: sing and point!',am:'Head, shoulders, knees and toes፦ እየዘመራችሁ ጠቁሙ!'},
 exam:[[{en:'Name 6 body parts in English',am:'6 የሰውነት ክፍሎችን በእንግሊዝኛ ጥቀሱ'},'head, eye, ear, nose, hand, leg'],[{en:'What is the nose used for?',am:'አፍንጫ ለምን ይጠቅማል?'},'to smell'],[{en:'Introduce yourself',am:'ራሳችሁን አስተዋውቁ'},"My name is … I am a grade 1 student."]],
 innovate:{title:{en:'Healthy-me checklist',am:'የጤናዬ ማረጋገጫ ዝርዝር'},text:{en:'Make an English checklist to care for your body every day, and share it with your family.',am:'ሰውነታችሁን በየቀኑ ለመንከባከብ የእንግሊዝኛ ማረጋገጫ ዝርዝር ሥሩና ለቤተሰባችሁ አጋሩ።'},
  steps:[{en:'Write: wash face, brush teeth, comb hair, wash hands.',am:'ጻፉ፦ wash face፣ brush teeth፣ comb hair፣ wash hands።'},{en:'Draw a box next to each.',am:'ከእያንዳንዱ አጠገብ ሳጥን ሳሉ።'},{en:'Tick every day for one week.',am:'ለአንድ ሳምንት በየቀኑ ምልክት አድርጉ።'},{en:'Count your ticks on Sunday.',am:'እሁድ ምልክቶቻችሁን ቁጠሩ።'}]}}});
Unit.start({id:'g1-english-8',grade:1,subject:'english',subjectName:{en:'English',am:'እንግሊዝኛ'},chapter:{en:'Unit 8',am:'ክፍል 8'},
 title:{en:'Caring for Body Parts',am:'የሰውነት ክፍሎችን መንከባከብ'},footer:{en:'Built on English for Ethiopia, Grade 1, Unit 8: body parts, their uses, caring for them, instructions and pronouns.',am:'በEnglish for Ethiopia 1ኛ ክፍል፣ ክፍል 8 ላይ የተመሰረተ፦ የሰውነት ክፍሎች፣ ጥቅማቸው፣ እንክብካቤ፣ ትዕዛዞችና ተውላጠ ስሞች።'},missions:M});
})();
