/* Grade 1 English · Unit 7 · My Role Model */
(function(){
const M=K1.engMissions({
 listen:[['runner','🏃','ሯጭ'],['hero','🦸','ጀግና'],['teacher','👩‍🏫','መምህር'],['doctor','👨‍⚕️','ሐኪም'],['farmer','👨‍🌾','ገበሬ'],['medal','🏅','ሜዳሊያ']],
 letters:[['⚽','ball'],['🦆','duck'],['🎩','hat'],['🦗','grasshopper'],['🐭','mouse'],['🏃','runner'],['🧱','wall']],
 trace:['B','D','G','H','M','R','W'],
 spell:[{w:'hero',blanks:[0],e:'🦸',am:'ጀግና'},{w:'brave',blanks:[0,3],e:'🦁',am:'ደፋር'},{w:'runner',blanks:[0],e:'🏃',am:'ሯጭ'},{w:'winner',blanks:[0,3],e:'🏆',am:'አሸናፊ'}],
 sentences:[['My','mother','is','my','role','model.'],['She','always','works','hard.'],['He','is','a','hard','worker.']]
});
M.push({title:{en:'An Ethiopian hero',am:'ኢትዮጵያዊ ጀግና'},type:'quiz',passage:{title:'Kenenisa Bekele',say:'Kenenisa Bekele is an Ethiopian runner. He won many gold medals. He trains hard every day. He is a hero.',sayLang:'en-US',paras:['Kenenisa Bekele is an Ethiopian runner.','He won many gold medals.','He trains hard every day.','He is a hero.']},
 tip:{en:'Listen to the short text about a famous Ethiopian runner, then answer.',am:'ስለ ታዋቂ ኢትዮጵያዊ ሯጭ የተጻፈውን አጭር ጽሑፍ አዳምጡ፤ ከዚያ መልሱ።'},
 items:[{q:{en:'What is Kenenisa?',am:'ቀነኒሳ ምንድን ነው?'},o:['a runner','a farmer','a doctor'],a:0},
  {q:{en:'What did he win?',am:'ምን አሸነፈ?'},o:['gold medals','a cow','a car'],a:0},
  {q:{en:'Why is he a hero?',am:'ለምን ጀግና ሆነ?'},o:['He trains hard every day.','He sleeps a lot.'],a:0}]});
M.push({title:{en:'Good role model words',am:'የአርአያ ቃላት'},type:'sort',
 tip:{en:'A role model is someone good we want to be like: honest, brave, kind, hard-working.',am:'አርአያ መሆን የምንፈልገው ጥሩ ሰው ነው፦ ታማኝ፣ ደፋር፣ ደግ፣ ታታሪ።'},
 buckets:[{en:'👍 Role model',am:'👍 አርአያ'},{en:'👎 Not a role model',am:'👎 አርአያ ያልሆነ'}],
 items:[{t:'honest',b:0},{t:'brave',b:0},{t:'kind',b:0},{t:'hard-working',b:0},{t:'tells lies',b:1},{t:'lazy',b:1},{t:'rude',b:1}].map(x=>Object.assign(x,{say:x.t,sayLang:'en-US'}))});
M.push({type:'exam',items:[
  {q:{en:'A person we want to be like is a…',am:'እንደሱ መሆን የምንፈልገው ሰው…'},o:['role model','runner only','stranger'],a:0},
  {q:'My father is my role ___.',o:['model','modal','medal'],a:0},
  {q:{en:'Which word is good?',am:'ጥሩው ቃል የትኛው ነው?'},o:['honest','lazy','rude'],a:0},
  {q:{en:'Blend: h-e-r-o',am:'አጣምሩ፦ h-e-r-o'},o:['hero','here','hare'],a:0},
  {q:'"Who is your role model?"',o:['My teacher is my role model.','It is sunny.'],a:0}]});
M.push({type:'notes',notes:{
 big:{en:'A role model is someone good we learn from. We can say who our role model is and why, in English.',am:'አርአያ ከሱ የምንማረው ጥሩ ሰው ነው። አርአያችን ማን እንደሆነና ለምን እንደሆነ በእንግሊዝኛ መናገር እንችላለን።'},
 points:[{en:'"My role model is… My hero is… My good example is…"',am:'"My role model is… My hero is… My good example is…"'},{en:'Good words: honest, brave, kind, strong, hard-working, winner.',am:'ጥሩ ቃላት፦ honest (ታማኝ)፣ brave (ደፋር)፣ kind (ደግ)፣ strong (ጠንካራ)፣ hard-working (ታታሪ)፣ winner (አሸናፊ)።'},{en:'Ethiopia has many great runners and heroes.',am:'ኢትዮጵያ ብዙ ታላላቅ ሯጮችና ጀግኖች አሏት።'},{en:'Blend sounds: b-r-a-v-e → brave.',am:'ድምፆችን አጣምሩ፦ b-r-a-v-e → brave።'}],
 words:[['role model',{en:'role model',am:'አርአያ'}],['hero',{en:'hero',am:'ጀግና'}],['honest',{en:'honest',am:'ታማኝ'}]],
 remember:{en:'Be the role model for a younger child!',am:'ለታናሽ ልጅ አርአያ ሁኑ!'},
 exam:[[{en:'Who is your role model? Why?',am:'አርአያችሁ ማን ነው? ለምን?'},{en:'My role model is my mother. She works hard.',am:'My role model is my mother. She works hard.'}],[{en:'Name 3 good qualities',am:'3 ጥሩ ባሕርያትን ጥቀሱ'},'honest, brave, kind']],
 innovate:{title:{en:'My hero book',am:'የጀግናዬ መጽሐፍ'},text:{en:'Make a small book about your role model: who they are, what they do, and what you will do to be like them.',am:'ስለ አርአያችሁ ትንሽ መጽሐፍ ሥሩ፦ ማን እንደሆኑ፣ ምን እንደሚሠሩና እነሱን ለመምሰል ምን እንደምታደርጉ።'},
  steps:[{en:'Fold 2 papers to make a little book.',am:'ትንሽ መጽሐፍ ለመሥራት 2 ወረቀቶችን እጠፉ።'},{en:'Draw your role model on the cover.',am:'አርአያችሁን በሽፋኑ ላይ ሳሉ።'},{en:'Write: "My role model is… He/She is…"',am:'ጻፉ፦ "My role model is… He/She is…"'},{en:'Write one thing you will do like them.',am:'እንደነሱ የምታደርጉትን አንድ ነገር ጻፉ።'}]}}});
Unit.start({id:'g1-english-7',grade:1,subject:'english',subjectName:{en:'English',am:'እንግሊዝኛ'},chapter:{en:'Unit 7',am:'ክፍል 7'},
 title:{en:'My Role Model',am:'አርአያዬ'},footer:{en:'Built on English for Ethiopia, Grade 1, Unit 7: role models, heroes, good qualities and blending sounds.',am:'በEnglish for Ethiopia 1ኛ ክፍል፣ ክፍል 7 ላይ የተመሰረተ፦ አርአያዎች፣ ጀግኖች፣ ጥሩ ባሕርያትና ድምፅ ማጣመር።'},missions:M});
})();
