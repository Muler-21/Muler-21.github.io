/* 1ኛ ክፍል አማርኛ · ምዕራፍ 8 · ምግብ */
(function(){
const M=K1.readMissions({
 vocab:[[['ዳቦ','🍞'],['ወተት','🥛'],['እንቁላል','🥚']],[['ድንች','🥔'],['ካሮት','🥕'],['ሙዝ','🍌']]],
 build:['ድንች','እንጀራ','እንቁላል','ምግብ'],trace:['ጧ','ጇ','ዷ','ቋ'],
 story:{title:'የድንችና የካሮት ጠብ',paras:['ድንችና ካሮት በማዕድ ቤት ተጣሉ።','ድንች "እኔ እጠቅማለሁ" አለ።','ካሮትም "እኔም ለዓይን እጠቅማለሁ" አለ።','እናት "ሁላችሁም ትጠቅማላችሁ" አለች።','በአንድ ድስት አብስላ ጣፋጭ ወጥ ሠራች።'],qs:[
  {q:{en:'Who quarrelled?',am:'የተጣሉት እነማን ናቸው?'},o:[{en:'🥔 Potato and 🥕 carrot',am:'🥔 ድንችና 🥕 ካሮት'},{en:'🍞 Bread and 🥛 milk',am:'🍞 ዳቦና 🥛 ወተት'}],a:0},
  {q:{en:'What is carrot good for?',am:'ካሮት ለምን ይጠቅማል?'},o:[{en:'👀 The eyes',am:'👀 ለዓይን'},{en:'👂 The ears only',am:'👂 ለጆሮ ብቻ'}],a:0},
  {q:{en:'What did mother make?',am:'እናት ምን ሠራች?'},o:[{en:'A tasty stew with both',am:'በሁለቱም ጣፋጭ ወጥ'},{en:'Nothing',am:'ምንም'}],a:0}]},
 sort:{title:{en:'Healthy or not?',am:'ጤናማ ነው ወይስ አይደለም?'},tip:{en:'A healthy meal has different kinds of food. Too many sweets are bad for teeth.',am:'ጤናማ ምግብ የተለያዩ ዓይነት ምግቦች አሉት። ብዙ ጣፋጭ ለጥርስ ጎጂ ነው።'},
  buckets:[{en:'😊 Healthy',am:'😊 ጤናማ'},{en:'😟 Not healthy',am:'😟 ጤናማ ያልሆነ'}],
  items:[{t:'🥕 ካሮት',b:0},{t:'🥛 ወተት',b:0},{t:'🍌 ሙዝ',b:0},{t:'🥚 እንቁላል',b:0},{t:{en:'🍬 Many sweets',am:'🍬 ብዙ ከረሜላ'},b:1},{t:{en:'🥤 Many sugary drinks',am:'🥤 ብዙ ለስላሳ መጠጥ'},b:1}]},
 spell:[{w:'ዳቦ',blanks:[0],e:'🍞',en:'bread'},{w:'ድንች',blanks:[1],e:'🥔',en:'potato'},{w:'ሙዝ',blanks:[1],e:'🍌',en:'banana'}],
 alphabet:'ዳቦድንችሙዝወተ',
 sentences:[['እናት','ጣፋጭ','ወጥ','ሠራች።'],['ከመብላታችን','በፊት','እጃችንን','እንታጠባለን።']]
});
M.push({type:'exam',items:[
  {q:{en:'🥚 is…',am:'🥚 …'},o:['እንቁላል','ዳቦ','ወተት'],a:0},
  {q:{en:'Which is healthy?',am:'ጤናማው የትኛው ነው?'},o:[{en:'🥕 Carrot',am:'🥕 ካሮት'},{en:'🍬 Many sweets',am:'🍬 ብዙ ከረሜላ'}],a:0},
  {q:{en:'Before eating we…',am:'ከመብላታችን በፊት…'},o:[{en:'wash our hands',am:'እጃችንን እንታጠባለን'},{en:'play in mud',am:'በጭቃ እንጫወታለን'}],a:0},
  {q:{en:'Join ድ + ን + ች',am:'ድ + ን + ች አጣምሩ'},o:['ድንች','ንድች','ችድን'],a:0},
  {q:{en:'In the story, who said "you are all useful"?',am:'በታሪኩ "ሁላችሁም ትጠቅማላችሁ" ያለችው ማን ናት?'},o:[{en:'Mother',am:'እናት'},{en:'Carrot',am:'ካሮት'}],a:0}]});
M.push({type:'notes',notes:{
 big:{en:'Food gives us strength. Every kind of food is useful, and we eat a mix of foods to stay healthy.',am:'ምግብ ጥንካሬ ይሰጠናል። እያንዳንዱ የምግብ ዓይነት ይጠቅማል፤ ጤናማ ለመሆን የተለያዩ ምግቦችን እንመገባለን።'},
 points:[{en:'Food words: ዳቦ, ወተት, እንቁላል, ድንች, ካሮት, እንጀራ.',am:'የምግብ ቃላት፦ ዳቦ፣ ወተት፣ እንቁላል፣ ድንች፣ ካሮት፣ እንጀራ።'},{en:'Read long words sound by sound: እ-ን-ቁ-ላ-ል.',am:'ረጃጅም ቃላትን ድምፅ በድምፅ አንብቡ፦ እ-ን-ቁ-ላ-ል።'},{en:'Healthy food: fruit, vegetables, milk, eggs. Few sweets.',am:'ጤናማ ምግብ፦ ፍራፍሬ፣ አትክልት፣ ወተት፣ እንቁላል። ጣፋጭ ጥቂት።'},{en:'Wash hands before eating.',am:'ከመብላት በፊት እጅ መታጠብ።'}],
 words:[['ምግብ',{en:'food',am:'የምንበላው'}],['ማዕድ ቤት',{en:'kitchen',am:'ምግብ የሚበስልበት'}],['ጤናማ',{en:'healthy',am:'ለሰውነት የሚጠቅም'}]],
 remember:{en:'Eat many colours of food every day!',am:'በየቀኑ ብዙ ቀለም ያላቸውን ምግቦች ተመገቡ!'},
 exam:[[{en:'Name 3 healthy foods',am:'3 ጤናማ ምግቦችን ጥቀሱ'},'ካሮት፣ ወተት፣ እንቁላል'],[{en:'Read: እናት ጣፋጭ ወጥ ሠራች።',am:'አንብቡ፦ እናት ጣፋጭ ወጥ ሠራች።'},{en:'Mother made a tasty stew.',am:'እናት ጣፋጭ ወጥ ሠራች።'}]],
 innovate:{title:{en:'Healthy snack stand',am:'የጤናማ መክሰስ ቦታ'},text:{en:'Plan a healthy snack for your class: fruit pieces or roasted grains (ቆሎ). Draw a menu with prices.',am:'ለክፍላችሁ ጤናማ መክሰስ አቅዱ፦ የፍራፍሬ ቁራጭ ወይም ቆሎ። ዋጋ ያለው የምግብ ዝርዝር ሳሉ።'},
  steps:[{en:'Choose 3 healthy snacks.',am:'3 ጤናማ መክሰሶችን ምረጡ።'},{en:'Draw and name them on a menu card.',am:'በምግብ ዝርዝር ካርድ ላይ ሳሏቸውና ሰይሟቸው።'},{en:'Give each a pretend price.',am:'ለእያንዳንዱ የሙከራ ዋጋ ስጡ።'},{en:'Explain to your class why they are healthy.',am:'ለምን ጤናማ እንደሆኑ ለክፍላችሁ አስረዱ።'}]}}});
Unit.start({id:'g1-amharic-8',grade:1,subject:'amharic',subjectName:{en:'Amharic',am:'አማርኛ'},chapter:{en:'Chapter 8',am:'ምዕራፍ 8'},
 title:{en:'Food',am:'ምግብ'},footer:{en:'Built on the Grade 1 Amharic student book, Chapter 8 (Food): food words, fluent reading and healthy eating.',am:'በ1ኛ ክፍል የአማርኛ መጽሐፍ ምዕራፍ 8 (ምግብ) ላይ የተመሰረተ፦ የምግብ ቃላት፣ አቀላጥፎ ማንበብና ጤናማ አመጋገብ።'},missions:M});
})();
