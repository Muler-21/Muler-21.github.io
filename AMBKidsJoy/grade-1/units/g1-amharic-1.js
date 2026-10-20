/* 1ኛ ክፍል አማርኛ · ምዕራፍ 1 · ቤተሰብ (ፊደላት፦ ሀ ለ ሐ መ ሠ ረ ሰ ሸ) */
(function(){
const M=K1.letterMissions({
 letters:['ሀ','ለ','ሐ','መ','ሠ','ረ','ሰ','ሸ'],famRounds:['ሀ','ለ','መ'],
 pics:[['🍋','ሎሚ','ለ'],['🐄','ላም','ለ'],['🍉','ሐብሐብ','ሐ'],['🥭','ማንጎ','መ'],['🌿','ሣር','ሠ'],['🕊️','ርግብ','ረ'],['🧼','ሳሙና','ሰ'],['🧅','ሽንኩርት','ሸ']],
 words:[['ለማ','👦'],['ሎሚ','🍋'],['ላም','🐄'],['ሣራ','👧'],['ሻማ','🕯️']],
 match:[[['ሎሚ','🍋'],['ላም','🐄'],['ሻማ','🕯️']],[['ሣር','🌿'],['ሱሪ','👖'],['ሐብሐብ','🍉']]],
 spell:[{w:'ሎሚ',blanks:[1],e:'🍋',en:'lemon'},{w:'ላም',blanks:[0],e:'🐄',en:'cow'},{w:'ሻማ',blanks:[0],e:'🕯️',en:'candle'},{w:'ሣር',blanks:[1],e:'🌿',en:'grass'}],
 alphabet:'ሀለሐመሠረሰሸሎሚላምሻማሣርሱሪ',
 story:{title:'የለማ ቤተሰብ',paras:['ለማ ሎሚ ሸጠ።','ሣራ ላም ሳለች።','ሁሉም ሥራ ሠሩ።','ሁሉም ተደሰቱ።'],qs:[
  {q:{en:'What did Lemma sell?',am:'ለማ ምን ሸጠ?'},o:[{en:'🍋 Lemons',am:'🍋 ሎሚ'},{en:'🐄 A cow',am:'🐄 ላም'},{en:'🕯️ Candles',am:'🕯️ ሻማ'}],a:0},
  {q:{en:'What did Sara draw?',am:'ሣራ ምን ሳለች?'},o:[{en:'🐄 A cow',am:'🐄 ላም'},{en:'🍋 A lemon',am:'🍋 ሎሚ'}],a:0},
  {q:{en:'Did everyone work?',am:'ሁሉም ሠሩ?'},o:[{en:'Yes, everyone worked',am:'አዎ፣ ሁሉም ሠሩ'},{en:'No',am:'አይደለም'}],a:0}]},
 sentences:[['ለማ','ሎሚ','ሸጠ።'],['ሣራ','ላም','ሳለች።']]
});
M.push({type:'exam',items:[
  {q:{en:'Which letter is in the ለ family?',am:'ከለ ቤተሰብ የሆነው ፊደል የትኛው ነው?'},o:['ሉ','ሙ','ሩ'],a:0},
  {q:{en:'Which word means lemon?',am:'"ሎሚ" የትኛው ነው?'},o:['ሎሚ','ላም','ሻማ'],a:0},
  {q:{en:'What is the 7th order of መ?',am:'የመ 7ኛ ቤት ማን ነው?'},o:['ሞ','ሚ','ም'],a:0},
  {q:{en:'Join ሣ + ራ',am:'ሣ + ራ አጣምሩ'},o:['ሣራ','ራሣ','ሣር'],a:0},
  {q:{en:'Who is part of a family?',am:'ከቤተሰብ አባላት የሆነው የትኛው ነው?'},o:[{en:'Mother, father, sister',am:'እናት፣ አባት፣ እህት'},{en:'A chair',am:'ወንበር'}],a:0}]});
M.push({type:'notes',notes:{
 big:{en:'Letters have sounds. Each letter family has 7 orders, and we join sounds to read words like ለማ and ሎሚ.',am:'ፊደላት ድምፅ አላቸው። እያንዳንዱ የፊደል ቤተሰብ 7 ቤቶች አሉት፤ ድምፆችን አጣምረን እንደ ለማ፣ ሎሚ ያሉ ቃላትን እናነባለን።'},
 points:[{en:'New letters: ሀ ለ ሐ መ ሠ ረ ሰ ሸ.',am:'አዳዲስ ፊደላት፦ ሀ ለ ሐ መ ሠ ረ ሰ ሸ።'},{en:'Each family has 7 orders: ለ ሉ ሊ ላ ሌ ል ሎ.',am:'እያንዳንዱ ቤተሰብ 7 ቤቶች አሉት፦ ለ ሉ ሊ ላ ሌ ል ሎ።'},{en:'Join sounds to read: ለ + ማ = ለማ.',am:'ድምፆችን አጣምራችሁ አንብቡ፦ ለ + ማ = ለማ።'},{en:'A family works and helps each other.',am:'ቤተሰብ አብሮ ይሠራል፤ ይረዳዳል።'}],
 words:[['ቤተሰብ',{en:'family',am:'እናት፣ አባት፣ ልጆች'}],['ሥራ',{en:'work',am:'የምንሠራው ተግባር'}],['ሎሚ',{en:'lemon',am:'ቢጫ ፍራፍሬ'}]],
 remember:{en:'Say the sound, then join: ሣ… ራ… ሣራ!',am:'ድምፁን በሉ፣ ከዚያ አጣምሩ፦ ሣ… ራ… ሣራ!'},
 exam:[[{en:'Say the ሀ family',am:'የሀን ቤተሰብ በሉ'},'ሀ ሁ ሂ ሃ ሄ ህ ሆ'],[{en:'Read: ለማ ሎሚ ሸጠ።',am:'አንብቡ፦ ለማ ሎሚ ሸጠ።'},{en:'Lemma sold lemons.',am:'ለማ ሎሚ ሸጠ።'}],[{en:'Write 3 words with ለ',am:'በለ የሚጀምሩ 3 ቃላት ጻፉ'},'ለማ፣ ሎሚ፣ ላም']],
 innovate:{title:{en:'Family letter cards',am:'የቤተሰብ የፊደል ካርዶች'},text:{en:'Make letter cards from old cartons and teach your family members the new letters. Teaching others is the best way to learn!',am:'ከአሮጌ ካርቶን የፊደል ካርዶች ሥሩና አዳዲሶቹን ፊደላት ለቤተሰባችሁ አስተምሩ። ሌሎችን ማስተማር ምርጡ የመማሪያ መንገድ ነው!'},
  steps:[{en:'Cut 8 cards from an old carton.',am:'ከአሮጌ ካርቶን 8 ካርዶች ቁረጡ።'},{en:'Write one new letter on each card.',am:'በእያንዳንዱ ካርድ ላይ አንድ አዲስ ፊደል ጻፉ።'},{en:'Draw a picture that starts with that letter.',am:'በዚያ ፊደል የሚጀምር ሥዕል ሳሉ።'},{en:'Play a guessing game with your family.',am:'ከቤተሰባችሁ ጋር የመገመት ጨዋታ ተጫወቱ።'}]}}});
Unit.start({id:'g1-amharic-1',grade:1,subject:'amharic',subjectName:{en:'Amharic',am:'አማርኛ'},chapter:{en:'Chapter 1',am:'ምዕራፍ 1'},
 title:{en:'Family',am:'ቤተሰብ'},footer:{en:'Built on the Grade 1 Amharic student book, Chapter 1 (Family): letters ሀ ለ ሐ መ ሠ ረ ሰ ሸ.',am:'በ1ኛ ክፍል የአማርኛ መጽሐፍ ምዕራፍ 1 (ቤተሰብ) ላይ የተመሰረተ፦ ሀ ለ ሐ መ ሠ ረ ሰ ሸ።'},missions:M});
})();
