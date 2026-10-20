/* Grade 1 English · Unit 4 · Plants */
(function(){
const M=K1.engMissions({
 listen:[['tree','🌳','ዛፍ'],['flower','🌸','አበባ'],['leaf','🍃','ቅጠል'],['fruit','🍎','ፍሬ'],['seed','🌰','ዘር'],['sun','☀️','ፀሐይ'],['water','💧','ውኃ']],
 letters:[['🍎','apple'],['🌶️','pepper'],['🍉','watermelon'],['☀️','sun'],['🪟','window'],['🐜','ant'],['🍍','pineapple']],
 trace:['a','p','s','w','A','P','S','W'],
 spell:[{w:'tree',blanks:[0],e:'🌳',am:'ዛፍ'},{w:'leaf',blanks:[0,3],e:'🍃',am:'ቅጠል'},{w:'sun',blanks:[1],e:'☀️',am:'ፀሐይ'},{w:'seed',blanks:[0],e:'🌰',am:'ዘር'}],
 sentences:[['I','have','a','pineapple.'],['She','has','an','apple.'],['Goodbye,','see','you','tomorrow.']]
});
M.push({title:{en:'Parts of a plant',am:'የተክል ክፍሎች'},type:'match',sayRight:'en-US',
 tip:{en:'Plants have roots, a stem, leaves, flowers and fruits. They all work together.',am:'ተክሎች ሥር፣ ግንድ፣ ቅጠል፣ አበባና ፍሬ አላቸው። ሁሉም አብረው ይሠራሉ።'},
 rounds:[[[{en:'ሥር (under the soil)',am:'ሥር (ከአፈር በታች)'},'root'],[{en:'ግንድ (holds the plant up)',am:'ግንድ (ተክሉን ቀጥ ያደርጋል)'},'stem'],[{en:'🍃 ቅጠል',am:'🍃 ቅጠል'},'leaf'],[{en:'🌸 አበባ',am:'🌸 አበባ'},'flower'],[{en:'🍎 ፍሬ',am:'🍎 ፍሬ'},'fruit']]]});
M.push({title:{en:'Have or has?',am:'have ወይስ has?'},type:'quiz',
 tip:{en:'I / We / You / They have. He / She / It has.',am:'I / We / You / They → have። He / She / It → has።'},
 items:[{say:'I have a tree.',q:'I ___ a tree.',o:['have','has'],a:0},{say:'She has an umbrella.',q:'She ___ an umbrella.',o:['has','have'],a:0},
  {say:'They have a pencil.',q:'They ___ a pencil.',o:['have','has'],a:0},{say:'He has a puppy.',q:'He ___ a puppy.',o:['has','have'],a:0},
  {say:'Solomon has an orange.',q:'Solomon ___ an orange.',o:['has','have'],a:0}]});
M.push({type:'exam',items:[
  {q:{en:'Which part is under the soil?',am:'ከአፈር በታች ያለው ክፍል?'},o:['root','flower','fruit'],a:0},
  {q:'We ___ a stool.',o:['have','has'],a:0},
  {q:'He ___ a pumpkin.',o:['has','have'],a:0},
  {q:{en:'"window" starts with…',am:'"window" የሚጀምረው በ…'},o:['w','p','s'],a:0},
  {q:{en:'A plant needs…',am:'ተክል የሚያስፈልገው…'},o:['sun, water and soil','only stones'],a:0}]});
M.push({type:'notes',notes:{
 big:{en:'Plants have parts that work together. We name them in English and use "have" and "has".',am:'ተክሎች አብረው የሚሠሩ ክፍሎች አሏቸው። በእንግሊዝኛ እንሰይማቸዋለን፤ "have" እና "has" እንጠቀማለን።'},
 points:[{en:'Plant parts: root, stem, leaf, flower, fruit, seed.',am:'የተክል ክፍሎች፦ root (ሥር)፣ stem (ግንድ)፣ leaf (ቅጠል)፣ flower (አበባ)፣ fruit (ፍሬ)፣ seed (ዘር)።'},{en:'Plants need sun, water, air and soil.',am:'ተክሎች ፀሐይ፣ ውኃ፣ አየርና አፈር ያስፈልጋቸዋል።'},{en:'I/We/You/They have; He/She/It has.',am:'I/We/You/They → have፤ He/She/It → has።'},{en:'Saying goodbye: "Goodbye. See you tomorrow."',am:'መሰናበት፦ "Goodbye. See you tomorrow."'}],
 words:[['plant',{en:'plant',am:'ተክል'}],['soil',{en:'soil',am:'አፈር'}],['seed',{en:'seed',am:'ዘር'}]],
 remember:{en:'She has. He has. I have!',am:'She has. He has. I have!'},
 exam:[[{en:'Name 4 plant parts',am:'4 የተክል ክፍሎችን ጥቀሱ'},'root, stem, leaf, flower'],['She ___ a book.','has'],[{en:'Say goodbye to a friend',am:'ለጓደኛችሁ ተሰናበቱ'},'Goodbye. See you tomorrow.']],
 innovate:{title:{en:'Bean-in-a-bottle experiment',am:'በጠርሙስ ውስጥ የባቄላ ሙከራ'},text:{en:'Watch a seed become a plant! Grow a bean on wet cotton in a clear bottle and write the English names of the parts you see.',am:'ዘር ተክል ሲሆን ተመልከቱ! በግልጽ ጠርሙስ ውስጥ በእርጥብ ጥጥ ላይ ባቄላ አብቅሉና የምታዩትን ክፍሎች በእንግሊዝኛ ጻፉ።'},
  steps:[{en:'Put wet cotton and a bean in a clear bottle.',am:'እርጥብ ጥጥና ባቄላ በግልጽ ጠርሙስ ውስጥ አድርጉ።'},{en:'Keep it near a window; add water daily.',am:'በመስኮት አጠገብ አስቀምጡ፤ በየቀኑ ውኃ ጨምሩ።'},{en:'Draw it every 2 days.',am:'በየ2 ቀኑ ሳሉት።'},{en:'Label root, stem and leaf.',am:'root፣ stem እና leaf ብላችሁ ሰይሙ።'}]}}});
Unit.start({id:'g1-english-4',grade:1,subject:'english',subjectName:{en:'English',am:'እንግሊዝኛ'},chapter:{en:'Unit 4',am:'ክፍል 4'},
 title:{en:'Plants',am:'ተክሎች'},footer:{en:'Built on English for Ethiopia, Grade 1, Unit 4: plant parts, letters a p s w, have/has and saying goodbye.',am:'በEnglish for Ethiopia 1ኛ ክፍል፣ ክፍል 4 ላይ የተመሰረተ፦ የተክል ክፍሎች፣ ፊደላት a p s w፣ have/has እና መሰናበት።'},missions:M});
})();
