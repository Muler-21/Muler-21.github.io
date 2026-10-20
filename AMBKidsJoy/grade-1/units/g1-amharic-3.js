/* 1ኛ ክፍል አማርኛ · ምዕራፍ 3 · ትምህርት ቤት (ፊደላት፦ ዐ ዘ ዠ የ ደ ጀ ገ ጠ ጨ ጰ) */
(function(){
const M=K1.letterMissions({
 letters:['ዐ','ዘ','ዠ','የ','ደ','ጀ','ገ','ጠ','ጨ','ጰ'],famRounds:['ደ','ገ','ጠ'],
 pics:[['🐟','ዓሣ','ዐ'],['🐘','ዝሆን','ዘ'],['🌳','ዛፍ','ዘ'],['🐈','ድመት','ደ'],['🐓','ዶሮ','ደ'],['📒','ደብተር','ደ'],['⛵','ጀልባ','ጀ'],['👂','ጆሮ','ጀ'],['🐪','ግመል','ገ'],['🐒','ጦጣ','ጠ'],['🌙','ጨረቃ','ጨ'],['👟','ጫማ','ጨ']],
 words:[['ደብተር','📒'],['ዛፍ','🌳'],['ዶሮ','🐓'],['ጫማ','👟'],['ግመል','🐪']],
 match:[[['ደብተር','📒'],['ድመት','🐈'],['ዛፍ','🌳']],[['ጫማ','👟'],['ጨረቃ','🌙'],['ግመል','🐪']]],
 spell:[{w:'ዶሮ',blanks:[0],e:'🐓',en:'hen'},{w:'ዛፍ',blanks:[0],e:'🌳',en:'tree'},{w:'ጫማ',blanks:[0],e:'👟',en:'shoes'},{w:'ጆሮ',blanks:[0],e:'👂',en:'ear'}],
 alphabet:'ዐዘየደጀገጠጨዶሮዛፍጫማጆ',
 story:{title:'ትምህርት ቤቴ',paras:['ትምህርት ቤቴ ደስ ይላል።','መምህራችን ጎበዝ ናቸው።','ደብተርና እርሳስ ይዘን እንመጣለን።','በእረፍት ሰዓት ኳስ እንጫወታለን።'],qs:[
  {q:{en:'What do the children bring?',am:'ልጆቹ ምን ይዘው ይመጣሉ?'},o:[{en:'📒 An exercise book and ✏️ a pencil',am:'📒 ደብተርና ✏️ እርሳስ'},{en:'🍲 Food only',am:'🍲 ምግብ ብቻ'}],a:0},
  {q:{en:'What do they play at break time?',am:'በእረፍት ሰዓት ምን ይጫወታሉ?'},o:[{en:'⚽ Ball',am:'⚽ ኳስ'},{en:'🎻 Violin',am:'🎻 ቫዮሊን'}],a:0},
  {q:{en:'How is the teacher?',am:'መምህራቸው እንዴት ናቸው?'},o:[{en:'Clever',am:'ጎበዝ'},{en:'Lazy',am:'ሰነፍ'}],a:0}]},
 sentences:[['ትምህርት','ቤቴ','ደስ','ይላል።'],['ደብተር','ይዘን','እንመጣለን።']]
});
M.push({title:{en:'School rules',am:'የትምህርት ቤት ሕግ'},type:'sort',
 tip:{en:'Good students follow school rules. Sort: is this a good thing to do at school?',am:'ጎበዝ ተማሪዎች የትምህርት ቤትን ሕግ ያከብራሉ። ለዩ፦ ይህ በትምህርት ቤት መደረግ ያለበት ነው?'},
 buckets:[{en:'👍 Good',am:'👍 ጥሩ'},{en:'👎 Not good',am:'👎 ጥሩ አይደለም'}],
 items:[{t:{en:'Come to school on time',am:'በሰዓቱ መምጣት'},b:0},{t:{en:'Listen to the teacher',am:'መምህርን ማዳመጥ'},b:0},{t:{en:'Put rubbish in the bin',am:'ቆሻሻን በቆሻሻ ማጠራቀሚያ መጣል'},b:0},{t:{en:'Write on the desk',am:'በጠረጴዛ ላይ መጻፍ'},b:1},{t:{en:'Fight with friends',am:'ከጓደኛ ጋር መጣላት'},b:1},{t:{en:'Tear the book',am:'መጽሐፍ መቅደድ'},b:1}]});
M.push({type:'exam',items:[
  {q:{en:'Which is in the ደ family?',am:'ከደ ቤተሰብ የሆነው?'},o:['ዱ','ጉ','ዙ'],a:0},
  {q:{en:'📒 is…',am:'📒 …'},o:['ደብተር','ዶሮ','ዛፍ'],a:0},
  {q:{en:'Which word starts with ጨ?',am:'በጨ የሚጀምረው ቃል?'},o:['ጫማ','ዛፍ','ዶሮ'],a:0},
  {q:{en:'Join ዶ + ሮ',am:'ዶ + ሮ አጣምሩ'},o:['ዶሮ','ሮዶ','ዶዶ'],a:0},
  {q:{en:'A good student…',am:'ጎበዝ ተማሪ…'},o:[{en:'comes on time',am:'በሰዓቱ ይመጣል'},{en:'tears books',am:'መጽሐፍ ይቀዳል'}],a:0}]});
M.push({type:'notes',notes:{
 big:{en:'School is where we learn together. New letters help us read school words like ደብተር and ጠረጴዛ.',am:'ትምህርት ቤት አብረን የምንማርበት ቦታ ነው። አዳዲስ ፊደላት እንደ ደብተር፣ ጠረጴዛ ያሉ ቃላትን እንድናነብ ይረዱናል።'},
 points:[{en:'New letters: ዐ ዘ ዠ የ ደ ጀ ገ ጠ ጨ ጰ.',am:'አዳዲስ ፊደላት፦ ዐ ዘ ዠ የ ደ ጀ ገ ጠ ጨ ጰ።'},{en:'Read: ዶሮ, ዛፍ, ጫማ, ግመል, ደብተር.',am:'አንብቡ፦ ዶሮ፣ ዛፍ፣ ጫማ፣ ግመል፣ ደብተር።'},{en:'Words make sentences; a sentence ends with ።',am:'ቃላት ዓረፍተ ነገር ይሠራሉ፤ ዓረፍተ ነገር በ። ያልቃል።'},{en:'Follow school rules: on time, listen, keep clean.',am:'የትምህርት ቤትን ሕግ አክብሩ፦ በሰዓቱ፣ ማዳመጥ፣ ንጽህና።'}],
 words:[['ትምህርት ቤት',{en:'school',am:'የምንማርበት'}],['መምህር',{en:'teacher',am:'የሚያስተምር'}],['ደብተር',{en:'exercise book',am:'የምንጽፍበት'}]],
 remember:{en:'A sentence starts with a word and ends with ።',am:'ዓረፍተ ነገር በቃል ይጀምራል፤ በ። ያልቃል።'},
 exam:[[{en:'Say the ገ family',am:'የገን ቤተሰብ በሉ'},'ገ ጉ ጊ ጋ ጌ ግ ጎ'],[{en:'Read: ደብተር ይዘን እንመጣለን።',am:'አንብቡ፦ ደብተር ይዘን እንመጣለን።'},{en:'We come with exercise books.',am:'ደብተር ይዘን እንመጣለን።'}],[{en:'Name 2 school rules',am:'2 የትምህርት ቤት ሕጎችን ጥቀሱ'},{en:'Come on time; keep the class clean.',am:'በሰዓቱ መምጣት፤ ክፍልን ማጽዳት።'}]],
 innovate:{title:{en:'Class word wall',am:'የክፍል የቃላት ግድግዳ'},text:{en:'Make a word wall of school things so everyone learns to read their names. Add a new word each day!',am:'ሁሉም የነገሮችን ስም ማንበብ እንዲማር የትምህርት ቤት ነገሮችን የቃላት ግድግዳ ሥሩ። በየቀኑ አዲስ ቃል ጨምሩ!'},
  steps:[{en:'Write names of school things on paper strips.',am:'የትምህርት ቤት ነገሮችን ስሞች በወረቀት ቁራጮች ላይ ጻፉ።'},{en:'Stick each name on the real thing: ጠረጴዛ, በር, መስኮት.',am:'እያንዳንዱን ስም በእውነተኛው ነገር ላይ ለጥፉ፦ ጠረጴዛ፣ በር፣ መስኮት።'},{en:'Read all the names every morning.',am:'በየጠዋቱ ሁሉንም ስሞች አንብቡ።'},{en:'Add one new word each day.',am:'በየቀኑ አንድ አዲስ ቃል ጨምሩ።'}]}}});
Unit.start({id:'g1-amharic-3',grade:1,subject:'amharic',subjectName:{en:'Amharic',am:'አማርኛ'},chapter:{en:'Chapter 3',am:'ምዕራፍ 3'},
 title:{en:'School',am:'ትምህርት ቤት'},footer:{en:'Built on the Grade 1 Amharic student book, Chapter 3 (School): letters ዐ ዘ ዠ የ ደ ጀ ገ ጠ ጨ ጰ.',am:'በ1ኛ ክፍል የአማርኛ መጽሐፍ ምዕራፍ 3 (ትምህርት ቤት) ላይ የተመሰረተ፦ ዐ ዘ ዠ የ ደ ጀ ገ ጠ ጨ ጰ።'},missions:M});
})();
