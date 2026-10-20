/* 1ኛ ክፍል አማርኛ · ምዕራፍ 2 · መኖሪያ ቤት (ፊደላት፦ ቀ በ ተ ቸ ኀ ነ ኘ አ ከ ኸ ወ) */
(function(){
const M=K1.letterMissions({
 letters:['ቀ','በ','ተ','ቸ','ነ','ኘ','አ','ከ','ወ','ኀ','ኸ'],famRounds:['በ','ተ','ነ','አ'],
 pics:[['🐑','በግ','በ'],['🚆','ባቡር','በ'],['🍅','ቲማቲም','ተ'],['🐝','ንብ','ነ'],['🦁','አንበሳ','አ'],['🌼','አበባ','አ'],['⭐','ኮከብ','ከ'],['🐦','ወፍ','ወ'],['🥛','ወተት','ወ'],['🦊','ቀበሮ','ቀ']],
 words:[['ቤት','🏠'],['በግ','🐑'],['ንብ','🐝'],['ወፍ','🐦'],['አበባ','🌼']],
 match:[[['ቤት','🏠'],['በግ','🐑'],['ንብ','🐝']],[['ወፍ','🐦'],['አበባ','🌼'],['ኮከብ','⭐']]],
 spell:[{w:'ቤት',blanks:[0],e:'🏠',en:'house'},{w:'በግ',blanks:[0],e:'🐑',en:'sheep'},{w:'ወተት',blanks:[0],e:'🥛',en:'milk'},{w:'አበባ',blanks:[1],e:'🌼',en:'flower'}],
 alphabet:'ቀበተቸነኘአከወቤግንብፍት',
 story:{title:'የኛ ቤት',paras:['ቤታችን ትልቅ ነው።','ቤታችን በር፣ መስኮትና ጣሪያ አለው።','አባቴ በሩን ቀባ።','እኔና እህቴ አበባ ተከልን።'],qs:[
  {q:{en:'Is the house big or small?',am:'ቤቱ ትልቅ ነው ወይስ ትንሽ?'},o:[{en:'Big',am:'ትልቅ'},{en:'Small',am:'ትንሽ'}],a:0},
  {q:{en:'Who painted the door?',am:'በሩን የቀባው ማን ነው?'},o:[{en:'Father',am:'አባቴ'},{en:'Sister',am:'እህቴ'}],a:0},
  {q:{en:'What did the children plant?',am:'ልጆቹ ምን ተከሉ?'},o:[{en:'🌼 Flowers',am:'🌼 አበባ'},{en:'🍅 Tomatoes',am:'🍅 ቲማቲም'}],a:0}]},
 sentences:[['ቤታችን','ትልቅ','ነው።'],['እኔ','አበባ','ተከልኩ።']]
});
M.push({title:{en:'Parts of a house',am:'የቤት ክፍሎች'},type:'match',
 tip:{en:'A house has a door, windows, a roof and walls. Each part has a job.',am:'ቤት በር፣ መስኮት፣ ጣሪያና ግድግዳ አለው። እያንዳንዱ ክፍል ሥራ አለው።'},
 rounds:[[[{en:'🚪 Door',am:'🚪 በር'},{en:'We go in and out',am:'እንገባበታለን፤ እንወጣበታለን'}],[{en:'🪟 Window',am:'🪟 መስኮት'},{en:'Lets in light and air',am:'ብርሃንና አየር ያስገባል'}],[{en:'🏠 Roof',am:'🏠 ጣሪያ'},{en:'Keeps off the rain',am:'ከዝናብ ይጠብቀናል'}]]]});
M.push({type:'exam',items:[
  {q:{en:'Which letter is in the በ family?',am:'ከበ ቤተሰብ የሆነው ፊደል?'},o:['ቡ','ቱ','ኑ'],a:0},
  {q:{en:'Which word is "house"?',am:'"ቤት" የትኛው ነው?'},o:['ቤት','በግ','ንብ'],a:0},
  {q:{en:'🐝 is…',am:'🐝 …'},o:['ንብ','ወፍ','በግ'],a:0},
  {q:{en:'Join አ + በ + ባ',am:'አ + በ + ባ አጣምሩ'},o:['አበባ','ባበአ','አባበ'],a:0},
  {q:{en:'What keeps the rain off a house?',am:'ቤትን ከዝናብ የሚጠብቀው?'},o:[{en:'The roof',am:'ጣሪያ'},{en:'The door',am:'በር'}],a:0}]});
M.push({type:'notes',notes:{
 big:{en:'Our home keeps us safe. We learn new letters to read words about home: ቤት, በር, ወተት.',am:'መኖሪያ ቤታችን ይጠብቀናል። ስለቤት የሚገልጹ ቃላትን ለማንበብ አዳዲስ ፊደላትን እንማራለን፦ ቤት፣ በር፣ ወተት።'},
 points:[{en:'New letters: ቀ በ ተ ቸ ኀ ነ ኘ አ ከ ኸ ወ.',am:'አዳዲስ ፊደላት፦ ቀ በ ተ ቸ ኀ ነ ኘ አ ከ ኸ ወ።'},{en:'Each family has 7 orders: በ ቡ ቢ ባ ቤ ብ ቦ.',am:'እያንዳንዱ ቤተሰብ 7 ቤቶች አሉት፦ በ ቡ ቢ ባ ቤ ብ ቦ።'},{en:'Read words: ቤት, በግ, ንብ, ወፍ, አበባ.',am:'ቃላትን አንብቡ፦ ቤት፣ በግ፣ ንብ፣ ወፍ፣ አበባ።'},{en:'A house has a door, windows, a roof and walls.',am:'ቤት በር፣ መስኮት፣ ጣሪያና ግድግዳ አለው።'}],
 words:[['መኖሪያ ቤት',{en:'home',am:'የምንኖርበት'}],['በር',{en:'door',am:'መግቢያ'}],['መስኮት',{en:'window',am:'ብርሃን ማስገቢያ'}]],
 remember:{en:'Keep your home clean and help your family.',am:'ቤታችሁን አጽዱ፤ ቤተሰባችሁን እርዱ።'},
 exam:[[{en:'Say the ተ family',am:'የተን ቤተሰብ በሉ'},'ተ ቱ ቲ ታ ቴ ት ቶ'],[{en:'Read: ቤታችን ትልቅ ነው።',am:'አንብቡ፦ ቤታችን ትልቅ ነው።'},{en:'Our house is big.',am:'ቤታችን ትልቅ ነው።'}],[{en:'Name 3 parts of a house',am:'3 የቤት ክፍሎችን ጥቀሱ'},'በር፣ መስኮት፣ ጣሪያ']],
 innovate:{title:{en:'Model house from waste',am:'ከቆሻሻ የቤት ሞዴል'},text:{en:'Engineers design houses. Build a model house from a box: cut a door and windows, and label each part.',am:'መሐንዲሶች ቤትን ይነድፋሉ። ከሳጥን የቤት ሞዴል ሥሩ፦ በርና መስኮት ቁረጡ፤ እያንዳንዱን ክፍል ሰይሙ።'},
  steps:[{en:'Find an empty box.',am:'ባዶ ሳጥን ፈልጉ።'},{en:'Cut a door and two windows.',am:'አንድ በርና ሁለት መስኮቶች ቁረጡ።'},{en:'Make a roof from folded paper.',am:'ከታጠፈ ወረቀት ጣሪያ ሥሩ።'},{en:'Write the labels: በር, መስኮት, ጣሪያ.',am:'ስሞቹን ጻፉ፦ በር፣ መስኮት፣ ጣሪያ።'}]}}});
Unit.start({id:'g1-amharic-2',grade:1,subject:'amharic',subjectName:{en:'Amharic',am:'አማርኛ'},chapter:{en:'Chapter 2',am:'ምዕራፍ 2'},
 title:{en:'Our home',am:'መኖሪያ ቤት'},footer:{en:'Built on the Grade 1 Amharic student book, Chapter 2 (Our home): letters ቀ በ ተ ቸ ኀ ነ ኘ አ ከ ኸ ወ.',am:'በ1ኛ ክፍል የአማርኛ መጽሐፍ ምዕራፍ 2 (መኖሪያ ቤት) ላይ የተመሰረተ፦ ቀ በ ተ ቸ ኀ ነ ኘ አ ከ ኸ ወ።'},missions:M});
})();
