/* 1ኛ ክፍል አማርኛ · ምዕራፍ 7 · ታሪኮች */
(function(){
const M=K1.readMissions({
 vocab:[[['ጥንቸል','🐇'],['ኤሊ','🐢'],['ጦጣ','🐒']],[['አህያ','🫏'],['ድመት','🐈'],['አንበሳ','🦁']]],
 build:['ጥንቸል','ታሪክ','ሩጫ','ውድድር'],trace:['ሟ','ሯ','ቷ','ኳ'],
 story:{title:'ጥንቸልና ኤሊ',paras:['ጥንቸልና ኤሊ የሩጫ ውድድር አደረጉ።','ጥንቸል በፍጥነት ሮጠች።','ከዚያ "ኤሊ ቀርፋፋ ነው" ብላ ተኛች።','ኤሊ ግን ሳያቋርጥ ቀስ ብሎ ሄደ።','ኤሊ አሸነፈ!'],qs:[
  {q:{en:'Who ran fast at first?',am:'መጀመሪያ በፍጥነት የሮጠው ማን ነው?'},o:[{en:'🐇 The rabbit',am:'🐇 ጥንቸል'},{en:'🐢 The tortoise',am:'🐢 ኤሊ'}],a:0},
  {q:{en:'Why did the rabbit lose?',am:'ጥንቸል ለምን ተሸነፈች?'},o:[{en:'She slept during the race',am:'በውድድሩ መሃል ተኛች'},{en:'She was too slow',am:'በጣም ቀርፋፋ ነበረች'}],a:0},
  {q:{en:'What does the story teach?',am:'ታሪኩ ምን ያስተምራል?'},o:[{en:'Keep going and do not boast',am:'ሳታቋርጡ ሥሩ፤ አትኩራሩ'},{en:'Sleep a lot',am:'ብዙ ተኙ'}],a:0}]},
 sort:{title:{en:'Hard-working or lazy?',am:'ታታሪ ወይስ ሰነፍ?'},tip:{en:'Stories teach us lessons. Sort the actions.',am:'ታሪኮች ትምህርት ይሰጡናል። ድርጊቶቹን ለዩ።'},
  buckets:[{en:'💪 Hard-working',am:'💪 ታታሪ'},{en:'😴 Lazy',am:'😴 ሰነፍ'}],
  items:[{t:{en:'Does homework on time',am:'የቤት ሥራን በሰዓቱ ይሠራል'},b:0},{t:{en:'Keeps trying',am:'ደጋግሞ ይሞክራል'},b:0},{t:{en:'Helps at home',am:'በቤት ውስጥ ያግዛል'},b:0},{t:{en:'Sleeps instead of studying',am:'ከማጥናት ይልቅ ይተኛል'},b:1},{t:{en:'Gives up quickly',am:'ቶሎ ተስፋ ይቆርጣል'},b:1}]},
 spell:[{w:'ኤሊ',blanks:[0],e:'🐢',en:'tortoise'},{w:'ጦጣ',blanks:[1],e:'🐒',en:'monkey'}],
 alphabet:'ኤሊጦጣአድመ',
 sentences:[['ኤሊ','ውድድሩን','አሸነፈ።'],['ጥንቸል','በመንገድ','ተኛች።']]
});
M.push({title:{en:'Story order',am:'የታሪኩ ቅደም ተከተል'},type:'order',vertical:true,
 tip:{en:'Every story has a beginning, a middle and an end.',am:'እያንዳንዱ ታሪክ መጀመሪያ፣ መሃልና መጨረሻ አለው።'},
 help:{en:'Tap from first to last.',am:'ከመጀመሪያው እስከ መጨረሻው ንኩ።'},
 rounds:[{prompt:{en:'Rabbit and Tortoise:',am:'ጥንቸልና ኤሊ፦'},items:[{en:'🏁 The race starts',am:'🏁 ውድድሩ ይጀምራል'},{en:'🐇 The rabbit runs fast',am:'🐇 ጥንቸል በፍጥነት ትሮጣለች'},{en:'😴 The rabbit sleeps',am:'😴 ጥንቸል ትተኛለች'},{en:'🐢 The tortoise wins',am:'🐢 ኤሊ ያሸንፋል'}]}]});
M.push({type:'exam',items:[
  {q:{en:'🐢 is…',am:'🐢 …'},o:['ኤሊ','ጥንቸል','ጦጣ'],a:0},
  {q:{en:'Who won the race?',am:'ውድድሩን ያሸነፈው?'},o:[{en:'The tortoise',am:'ኤሊ'},{en:'The rabbit',am:'ጥንቸል'}],a:0},
  {q:{en:'A story has a beginning, middle and…',am:'ታሪክ መጀመሪያ፣ መሃልና… አለው'},o:[{en:'end',am:'መጨረሻ'},{en:'number',am:'ቁጥር'}],a:0},
  {q:{en:'ሟ comes from…',am:'ሟ የመጣው ከ…'},o:['መ','ለ','ነ'],a:0},
  {q:{en:'A hard-working child…',am:'ታታሪ ልጅ…'},o:[{en:'keeps trying',am:'ደጋግሞ ይሞክራል'},{en:'gives up',am:'ተስፋ ይቆርጣል'}],a:0}]});
M.push({type:'notes',notes:{
 big:{en:'Stories have a beginning, middle and end, and they teach us lessons for life.',am:'ታሪኮች መጀመሪያ፣ መሃልና መጨረሻ አላቸው፤ ለሕይወት የሚጠቅም ትምህርት ይሰጡናል።'},
 points:[{en:'Story animals: ጥንቸል, ኤሊ, ጦጣ, አህያ, ድመት, አንበሳ.',am:'የታሪክ እንስሳት፦ ጥንቸል፣ ኤሊ፣ ጦጣ፣ አህያ፣ ድመት፣ አንበሳ።'},{en:'A story has a beginning, middle and end.',am:'ታሪክ መጀመሪያ፣ መሃልና መጨረሻ አለው።'},{en:'Every story has a lesson: keep going, do not boast.',am:'እያንዳንዱ ታሪክ ትምህርት አለው፦ ሳታቋርጡ ሥሩ፣ አትኩራሩ።'},{en:'Read with feeling, like you are telling the story.',am:'ታሪኩን እንደምትነግሩ በስሜት አንብቡ።'}],
 words:[['ታሪክ',{en:'story',am:'የሚነገር ተረት'}],['ውድድር',{en:'race / competition',am:'ማን ያሸንፋል'}],['ታታሪ',{en:'hard-working',am:'ጠንክሮ የሚሠራ'}]],
 remember:{en:'Slow and steady wins the race.',am:'ቀስ በቀስ እንቁላል በእግሩ ይሄዳል።'},
 exam:[[{en:'Retell "Rabbit and Tortoise" in 3 sentences',am:'"ጥንቸልና ኤሊ"ን በ3 ዓረፍተ ነገሮች ተናገሩ'},{en:'They raced. The rabbit slept. The tortoise won.',am:'ተወዳደሩ። ጥንቸል ተኛች። ኤሊ አሸነፈ።'}],[{en:'What is the lesson?',am:'ትምህርቱ ምንድን ነው?'},{en:'Do not give up; do not boast.',am:'ተስፋ አትቁረጡ፤ አትኩራሩ።'}]],
 innovate:{title:{en:'Story-telling corner',am:'የተረት መንገሪያ ጥግ'},text:{en:'Great storytellers become writers, teachers and film makers. Make puppets and tell a story to your family.',am:'ጎበዝ ተራኪዎች ደራሲ፣ መምህርና ፊልም ሠሪ ይሆናሉ። አሻንጉሊቶችን ሥሩና ለቤተሰባችሁ ተረት ንገሩ።'},
  steps:[{en:'Draw a rabbit and a tortoise on paper.',am:'በወረቀት ላይ ጥንቸልና ኤሊ ሳሉ።'},{en:'Stick them on sticks to make puppets.',am:'አሻንጉሊት ለመሥራት በበትር ላይ ለጥፏቸው።'},{en:'Tell the story: beginning, middle, end.',am:'ታሪኩን ንገሩ፦ መጀመሪያ፣ መሃል፣ መጨረሻ።'},{en:'Make up your own new ending!',am:'የራሳችሁን አዲስ መጨረሻ ፍጠሩ!'}]}}});
Unit.start({id:'g1-amharic-7',grade:1,subject:'amharic',subjectName:{en:'Amharic',am:'አማርኛ'},chapter:{en:'Chapter 7',am:'ምዕራፍ 7'},
 title:{en:'Stories',am:'ታሪኮች'},footer:{en:'Built on the Grade 1 Amharic student book, Chapter 7 (Stories): fables, story order and lessons.',am:'በ1ኛ ክፍል የአማርኛ መጽሐፍ ምዕራፍ 7 (ታሪኮች) ላይ የተመሰረተ፦ ተረቶች፣ የታሪክ ቅደም ተከተልና ትምህርቶች።'},missions:M});
})();
