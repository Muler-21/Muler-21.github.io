/* 1ኛ ክፍል አማርኛ · ምዕራፍ 9 · የግል ንጽሕና */
(function(){
const M=K1.readMissions({
 vocab:[[['ሳሙና','🧼'],['ውኃ','💧'],['ማበጠሪያ','🪮']],[['የጥርስ ብሩሽ','🪥'],['ጥፍር','💅'],['ልብስ','👕']]],
 build:['ሳሙና','ንጽሕና','ጥርስ','ማበጠሪያ'],trace:['ፏ','ኗ','ጧ','ቷ'],
 story:{title:'ጎበዙ ያሬድ',paras:['ያሬድ በየጠዋቱ ፊቱን ይታጠባል።','ጥርሱን በብሩሽ ይቦርሻል።','ጥፍሩን ያሳጥራል፤ ፀጉሩን ያበጥራል።','ልብሱ ሁልጊዜ ንጹህ ነው።','ያሬድ ጤናማና ደስተኛ ልጅ ነው።'],qs:[
  {q:{en:'What does Yared do every morning?',am:'ያሬድ በየጠዋቱ ምን ያደርጋል?'},o:[{en:'Washes his face',am:'ፊቱን ይታጠባል'},{en:'Sleeps again',am:'እንደገና ይተኛል'}],a:0},
  {q:{en:'What does he use for his teeth?',am:'ለጥርሱ ምን ይጠቀማል?'},o:[{en:'🪥 A toothbrush',am:'🪥 ብሩሽ'},{en:'🪮 A comb',am:'🪮 ማበጠሪያ'}],a:0},
  {q:{en:'What kind of child is Yared?',am:'ያሬድ ምን ዓይነት ልጅ ነው?'},o:[{en:'Healthy and happy',am:'ጤናማና ደስተኛ'},{en:'Dirty',am:'ቆሻሻ'}],a:0}]},
 sort:{title:{en:'Clean habits',am:'የንጽሕና ልማዶች'},tip:{en:'Clean habits keep germs away.',am:'የንጽሕና ልማዶች ጀርሞችን ያርቃሉ።'},
  buckets:[{en:'✅ Clean habit',am:'✅ የንጽሕና ልማድ'},{en:'❌ Dirty habit',am:'❌ የቆሻሻ ልማድ'}],
  items:[{t:{en:'Wash hands with soap',am:'እጅን በሳሙና መታጠብ'},b:0},{t:{en:'Brush teeth',am:'ጥርስ መቦረሽ'},b:0},{t:{en:'Cut nails short',am:'ጥፍር ማሳጠር'},b:0},{t:{en:'Wear dirty clothes',am:'ቆሻሻ ልብስ መልበስ'},b:1},{t:{en:'Throw rubbish in the river',am:'ቆሻሻን ወንዝ ውስጥ መጣል'},b:1},{t:{en:'Bite dirty nails',am:'ቆሻሻ ጥፍር መንከስ'},b:1}]},
 spell:[{w:'ሳሙና',blanks:[0],e:'🧼',en:'soap'},{w:'ውኃ',blanks:[0],e:'💧',en:'water'},{w:'ልብስ',blanks:[0],e:'👕',en:'clothes'}],
 alphabet:'ሳሙናውኃልብስጥር',
 sentences:[['ያሬድ','ጥርሱን','ይቦርሻል።'],['ልብሳችንን','ንጹህ','እናደርጋለን።']]
});
M.push({type:'exam',items:[
  {q:{en:'🧼 is…',am:'🧼 …'},o:['ሳሙና','ውኃ','ልብስ'],a:0},
  {q:{en:'We brush our teeth with…',am:'ጥርሳችንን የምንቦርሸው በ…'},o:[{en:'a toothbrush',am:'ብሩሽ'},{en:'a comb',am:'ማበጠሪያ'}],a:0},
  {q:{en:'Which is a clean habit?',am:'የንጽሕና ልማድ የሆነው?'},o:[{en:'Washing hands',am:'እጅ መታጠብ'},{en:'Throwing rubbish in the river',am:'ቆሻሻን ወንዝ ውስጥ መጣል'}],a:0},
  {q:{en:'Join ሳ + ሙ + ና',am:'ሳ + ሙ + ና አጣምሩ'},o:['ሳሙና','ሙናሳ','ናሳሙ'],a:0},
  {q:{en:'Why keep clean?',am:'ለምን ንጹህ እንሆናለን?'},o:[{en:'To stay healthy',am:'ጤናማ ለመሆን'},{en:'To get sick',am:'ለመታመም'}],a:0}]});
M.push({type:'notes',notes:{
 big:{en:'Keeping our body, clothes and surroundings clean keeps us healthy.',am:'ሰውነታችንን፣ ልብሳችንንና አካባቢያችንን ንጹህ ማድረግ ጤናማ ያደርገናል።'},
 points:[{en:'Hygiene words: ሳሙና, ውኃ, ብሩሽ, ማበጠሪያ, ጥፍር.',am:'የንጽሕና ቃላት፦ ሳሙና፣ ውኃ፣ ብሩሽ፣ ማበጠሪያ፣ ጥፍር።'},{en:'Wash face and hands, brush teeth, cut nails, comb hair.',am:'ፊትና እጅ መታጠብ፣ ጥርስ መቦረሽ፣ ጥፍር ማሳጠር፣ ፀጉር ማበጠር።'},{en:'Do not throw rubbish in rivers: dirty water makes us sick.',am:'ቆሻሻን ወንዝ ውስጥ አትጣሉ፤ የቆሸሸ ውኃ ያሳምመናል።'},{en:'Read fluently: ጎበዙ ያሬድ.',am:'አቀላጥፋችሁ አንብቡ፦ ጎበዙ ያሬድ።'}],
 words:[['ንጽሕና',{en:'cleanliness',am:'ንጹህ መሆን'}],['ጀርም',{en:'germ',am:'በሽታ የሚያመጣ ትንሽ ነገር'}],['መቦረሽ',{en:'to brush',am:'ጥርስ ማጽዳት'}]],
 remember:{en:'Soap + water + 20 seconds = clean hands.',am:'ሳሙና + ውኃ + 20 ሰከንድ = ንጹህ እጅ።'},
 exam:[[{en:'Name 3 clean habits',am:'3 የንጽሕና ልማዶችን ጥቀሱ'},'እጅ መታጠብ፣ ጥርስ መቦረሽ፣ ጥፍር ማሳጠር'],[{en:'Read: ያሬድ ጥርሱን ይቦርሻል።',am:'አንብቡ፦ ያሬድ ጥርሱን ይቦርሻል።'},{en:'Yared brushes his teeth.',am:'ያሬድ ጥርሱን ይቦርሻል።'}]],
 innovate:{title:{en:'Tippy-tap hand-wash station',am:'የቲፒ-ታፕ የእጅ መታጠቢያ'},text:{en:'A tippy-tap saves water: a jerrycan hangs on sticks and tips when you press a foot pedal. Build one with an adult for your home or school.',am:'ቲፒ-ታፕ ውኃ ይቆጥባል፦ ጀሪካን በእንጨት ላይ ይንጠለጠላል፤ መርገጫውን ስትረግጡ ያዘነብላል። ከትልቅ ሰው ጋር ለቤታችሁ ወይም ለትምህርት ቤታችሁ ሥሩ።'},
  steps:[{en:'Get a clean jerrycan, two sticks, string and soap.',am:'ንጹህ ጀሪካን፣ ሁለት እንጨቶች፣ ገመድና ሳሙና አዘጋጁ።'},{en:'With an adult, make a small hole near the top.',am:'ከትልቅ ሰው ጋር ከላይ አጠገብ ትንሽ ቀዳዳ አብጁ።'},{en:'Hang it and tie a string to a foot stick.',am:'አንጠልጥሉትና ገመዱን ከመርገጫ እንጨት ጋር እሰሩ።'},{en:'Teach everyone to wash hands with soap.',am:'ሁሉም በሳሙና እጁን እንዲታጠብ አስተምሩ።'}]}}});
Unit.start({id:'g1-amharic-9',grade:1,subject:'amharic',subjectName:{en:'Amharic',am:'አማርኛ'},chapter:{en:'Chapter 9',am:'ምዕራፍ 9'},
 title:{en:'Personal hygiene',am:'የግል ንጽሕና'},footer:{en:'Built on the Grade 1 Amharic student book, Chapter 9 (Personal hygiene): hygiene words, fluent reading and clean habits.',am:'በ1ኛ ክፍል የአማርኛ መጽሐፍ ምዕራፍ 9 (የግል ንጽሕና) ላይ የተመሰረተ፦ የንጽሕና ቃላት፣ አቀላጥፎ ማንበብና የንጽሕና ልማዶች።'},missions:M});
})();
