/* 1ኛ ክፍል አማርኛ · ምዕራፍ 4 · ጓደኝነት (ፊደላት፦ ጸ ፀ ፈ ፐ ቨ እና ዲቃላ ፊደላት) */
(function(){
const M=K1.letterMissions({
 letters:['ጸ','ፀ','ፈ','ፐ','ቨ','ሏ','ሟ','ቧ'],famRounds:['ፈ','ፀ','ፐ'],
 pics:[['☀️','ፀሐይ','ፀ'],['🌹','ጽጌረዳ','ጸ'],['🐴','ፈረስ','ፈ'],['🐐','ፍየል','ፈ'],['👮','ፖሊስ','ፐ'],['🥭','ፓፓዬ','ፐ']],
 words:[['ፈረስ','🐴'],['ፍየል','🐐'],['ፀሐይ','☀️'],['ፖሊስ','👮']],
 match:[[['ፈረስ','🐴'],['ፍየል','🐐'],['ፀሐይ','☀️']],[['ፖሊስ','👮'],['ጽጌረዳ','🌹'],['ጓደኛ','🤝']]],
 spell:[{w:'ፈረስ',blanks:[0],e:'🐴',en:'horse'},{w:'ፍየል',blanks:[0],e:'🐐',en:'goat'},{w:'ፀሐይ',blanks:[0],e:'☀️',en:'sun'}],
 alphabet:'ጸፀፈፐቨፍረስየልሐይ',
 story:{title:'ሁለቱ ጓደኛሞች',paras:['ፋሲል እና ሙሉቀን ጓደኛሞች ናቸው።','ሁልጊዜ አብረው ይማራሉ።','አንድ ቀን ሙሉቀን እርሳሱ ጠፋበት።','ፋሲል እርሳሱን አጋራው።','ጓደኛ በችግር ጊዜ ይረዳል።'],qs:[
  {q:{en:'Who lost his pencil?',am:'እርሳሱ የጠፋበት ማን ነው?'},o:[{en:'Muluken',am:'ሙሉቀን'},{en:'Fasil',am:'ፋሲል'}],a:0},
  {q:{en:'What did Fasil do?',am:'ፋሲል ምን አደረገ?'},o:[{en:'He shared his pencil',am:'እርሳሱን አጋራ'},{en:'He laughed',am:'ሳቀበት'}],a:0},
  {q:{en:'What does a good friend do?',am:'ጥሩ ጓደኛ ምን ያደርጋል?'},o:[{en:'Helps in hard times',am:'በችግር ጊዜ ይረዳል'},{en:'Runs away',am:'ይሸሻል'}],a:0}]},
 sentences:[['ፋሲል','ጓደኛውን','ረዳ።'],['ጓደኛ','በችግር','ጊዜ','ይረዳል።']]
});
M.push({title:{en:'Special letters: ሏ ሟ ሯ',am:'ዲቃላ ፊደላት፦ ሏ ሟ ሯ'},type:'match',
 tip:{en:'Some letters have a little leg that adds a "wa" sound: ለ → ሏ (lwa), መ → ሟ (mwa). Match each letter with its family.',am:'አንዳንድ ፊደላት "ዋ" ድምፅ የሚጨምር ትንሽ እግር አላቸው፦ ለ → ሏ፣ መ → ሟ። እያንዳንዱን ፊደል ከቤተሰቡ ጋር አዛምዱ።'},
 rounds:[[['ሏ','ለ'],['ሟ','መ'],['ሯ','ረ'],['ሷ','ሰ']],[['ቧ','በ'],['ቷ','ተ'],['ኗ','ነ'],['ጓ','ገ']]]});
M.push({title:{en:'Good friend or not?',am:'ጥሩ ጓደኛ ነው ወይስ አይደለም?'},type:'sort',
 tip:{en:'Friends share, help, say sorry and tell the truth.',am:'ጓደኞች ያጋራሉ፣ ይረዳዳሉ፣ ይቅርታ ይጠይቃሉ፣ እውነት ይናገራሉ።'},
 buckets:[{en:'🤝 Good friend',am:'🤝 ጥሩ ጓደኛ'},{en:'🙅 Not a good friend',am:'🙅 ጥሩ ጓደኛ አይደለም'}],
 items:[{t:{en:'Shares food',am:'ምግብ ያጋራል'},b:0},{t:{en:'Helps with homework',am:'በቤት ሥራ ይረዳል'},b:0},{t:{en:'Says sorry',am:'ይቅርታ ይጠይቃል'},b:0},{t:{en:'Tells lies',am:'ይዋሻል'},b:1},{t:{en:'Laughs at others',am:'በሌሎች ይስቃል'},b:1},{t:{en:'Takes things without asking',am:'ሳይጠይቅ ዕቃ ይወስዳል'},b:1}]});
M.push({type:'exam',items:[
  {q:{en:'Which is in the ፈ family?',am:'ከፈ ቤተሰብ የሆነው?'},o:['ፉ','ፑ','ጹ'],a:0},
  {q:{en:'☀️ is…',am:'☀️ …'},o:['ፀሐይ','ፈረስ','ፍየል'],a:0},
  {q:{en:'ሏ comes from which letter?',am:'ሏ ከየትኛው ፊደል የመጣ ነው?'},o:['ለ','መ','ረ'],a:0},
  {q:{en:'Join ፈ + ረ + ስ',am:'ፈ + ረ + ስ አጣምሩ'},o:['ፈረስ','ረፈስ','ስፈረ'],a:0},
  {q:{en:'A good friend…',am:'ጥሩ ጓደኛ…'},o:[{en:'shares',am:'ያጋራል'},{en:'tells lies',am:'ይዋሻል'}],a:0}]});
M.push({type:'notes',notes:{
 big:{en:'Good friends help, share and tell the truth. With the last letters and special letters (ሏ ሟ ሯ) we can read almost any word!',am:'ጥሩ ጓደኞች ይረዳዳሉ፣ ያጋራሉ፣ እውነት ይናገራሉ። በመጨረሻዎቹ ፊደላትና በዲቃላ ፊደላት (ሏ ሟ ሯ) ማንኛውንም ቃል ማንበብ እንችላለን!'},
 points:[{en:'New letters: ጸ ፀ ፈ ፐ ቨ.',am:'አዳዲስ ፊደላት፦ ጸ ፀ ፈ ፐ ቨ።'},{en:'Special (ዲቃላ) letters add "wa": ሏ ሟ ሯ ሷ ቧ ቷ ኗ ጓ.',am:'ዲቃላ ፊደላት "ዋ" ድምፅ ይጨምራሉ፦ ሏ ሟ ሯ ሷ ቧ ቷ ኗ ጓ።'},{en:'Read: ፈረስ, ፍየል, ፀሐይ, ጓደኛ.',am:'አንብቡ፦ ፈረስ፣ ፍየል፣ ፀሐይ፣ ጓደኛ።'},{en:'Friends share, help, say sorry and tell the truth.',am:'ጓደኞች ያጋራሉ፣ ይረዳዳሉ፣ ይቅርታ ይጠይቃሉ፣ እውነት ይናገራሉ።'}],
 words:[['ጓደኛ',{en:'friend',am:'የምንወደው ባልንጀራ'}],['ማጋራት',{en:'to share',am:'ያለንን መስጠት'}],['ዲቃላ ፊደል',{en:'"wa" letter',am:'ዋ ድምፅ ያለው ፊደል'}]],
 remember:{en:'A friend in need is a friend indeed.',am:'ወዳጅ የሚታወቀው በችግር ቀን ነው።'},
 exam:[[{en:'Say the ፀ family',am:'የፀን ቤተሰብ በሉ'},'ፀ ፁ ፂ ፃ ፄ ፅ ፆ'],[{en:'Read: ጓደኛ በችግር ጊዜ ይረዳል።',am:'አንብቡ፦ ጓደኛ በችግር ጊዜ ይረዳል።'},{en:'A friend helps in hard times.',am:'ጓደኛ በችግር ጊዜ ይረዳል።'}],[{en:'Which letter is ሟ from?',am:'ሟ ከየትኛው ፊደል ነው?'},'መ']],
 innovate:{title:{en:'Friendship sharing box',am:'የጓደኝነት መጋሪያ ሳጥን'},text:{en:'Make a class box where children share spare pencils, crayons and books with friends who need them.',am:'ልጆች ትርፍ እርሳስ፣ ቀለምና መጽሐፍ ለሚያስፈልጋቸው ጓደኞች የሚያጋሩበት የክፍል ሳጥን ሥሩ።'},
  steps:[{en:'Decorate a box and write ጓደኝነት on it.',am:'ሳጥን አስጊጡና "ጓደኝነት" ብላችሁ ጻፉበት።'},{en:'Put spare school things inside.',am:'ትርፍ የትምህርት ዕቃዎችን አስገቡበት።'},{en:'A friend in need can take one.',am:'የሚያስፈልገው ጓደኛ አንዱን መውሰድ ይችላል።'},{en:'Count and record what was shared each week.',am:'በየሳምንቱ የተጋራውን ቁጠሩና መዝግቡ።'}]}}});
Unit.start({id:'g1-amharic-4',grade:1,subject:'amharic',subjectName:{en:'Amharic',am:'አማርኛ'},chapter:{en:'Chapter 4',am:'ምዕራፍ 4'},
 title:{en:'Friendship',am:'ጓደኝነት'},footer:{en:'Built on the Grade 1 Amharic student book, Chapter 4 (Friendship): letters ጸ ፀ ፈ ፐ ቨ and the special (ዲቃላ) letters.',am:'በ1ኛ ክፍል የአማርኛ መጽሐፍ ምዕራፍ 4 (ጓደኝነት) ላይ የተመሰረተ፦ ጸ ፀ ፈ ፐ ቨ እና ዲቃላ ፊደላት።'},missions:M});
})();
