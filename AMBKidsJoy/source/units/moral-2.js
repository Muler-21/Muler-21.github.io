/* ግብረገብ · ምዕራፍ 2 · ሌሎችን ማክበር */
Unit.start({
 id:'moral-2',subject:'moral',
 subjectName:{en:'Moral Education',am:'ግብረገብ'},chapter:{en:'Chapter 2',am:'ምዕራፍ 2'},
 title:{en:'Respecting Others',am:'ሌሎችን ማክበር'},
 footer:{en:'Built on the Grade 3 Moral Education student book, Chapter 2. The situations are new, written for this unit.',am:'በ3ኛ ክፍል የግብረገብ መጽሐፍ ምዕራፍ 2 ላይ የተመሰረተ። ሁኔታዎቹ ለዚህ ክፍል አዲስ የተጻፉ ናቸው።'},
 missions:[
 {title:{en:'What is respect?',am:'አክብሮት ምንድን ነው?'},type:'quiz',
  tip:{en:'Respect means treating people as valuable: listening to them, speaking kindly, and caring about their feelings. We show it with words, actions and even our body.',am:'አክብሮት ማለት ሰዎችን ዋጋ እንዳላቸው አድርጎ መያዝ ነው፦ ማዳመጥ፣ በደግነት መናገርና ስሜታቸውን መጠበቅ። በቃል፣ በተግባርና በሰውነታችንም እናሳያለን።'},
  items:[
   {q:{en:'Which shows respect?',am:'አክብሮትን የሚያሳየው የትኛው ነው?'},o:[{en:'Listening while others speak',am:'ሌሎች ሲናገሩ ማዳመጥ'},{en:'Interrupting',am:'ማቋረጥ'},{en:'Laughing at mistakes',am:'በስህተት መሳቅ'},{en:'Ignoring greetings',am:'ሰላምታን ችላ ማለት'}],a:0},
   {q:{en:'In Amharic, how do we politely address an elder?',am:'በአማርኛ አረጋዊ ሰውን በትህትና የምንጠራው እንዴት ነው?'},o:['አንተ / አንቺ','እርስዎ','አንተው','ሄይ'],a:1,e:{en:'"እርስዎ" is the respectful form. Our language itself teaches respect!',am:'“እርስዎ” የአክብሮት አጠራር ነው። ቋንቋችን ራሱ አክብሮትን ያስተምራል!'}},
   {q:{en:'Who deserves respect?',am:'ክብር የሚገባው ማን ነው?'},o:[{en:'Only rich people',am:'ሀብታሞች ብቻ'},{en:'Only adults',am:'አዋቂዎች ብቻ'},{en:'Every person',am:'እያንዳንዱ ሰው'},{en:'Only friends',am:'ጓደኞች ብቻ'}],a:2},
   {q:{en:'Respect is like a mirror. What does this mean?',am:'አክብሮት እንደ መስታወት ነው። ይህ ምን ማለት ነው?'},o:[{en:'When we respect others, they respect us back',am:'ሌሎችን ስናከብር እነሱም መልሰው ያከብሩናል'},{en:'We should look in mirrors',am:'መስታወት ማየት አለብን'},{en:'Respect breaks easily',am:'አክብሮት በቀላሉ ይሰበራል'},{en:'Only some people see it',am:'አንዳንዶች ብቻ ያዩታል'}],a:0}
  ]},
 {title:{en:'Respect for everyone',am:'ሁሉንም ማክበር'},type:'match',
  tip:{en:'We show respect in different ways to different people. Match each person with a respectful action.',am:'ለተለያዩ ሰዎች አክብሮትን በተለያየ መንገድ እናሳያለን። እያንዳንዱን ሰው ከሚያከብረው ተግባር ጋር አዛምዱ።'},
  rounds:[
   [[{en:'Elders',am:'ታላላቆች'},{en:'Stand up and give them your seat',am:'ተነስቶ መቀመጫ መልቀቅ'}],[{en:'Teachers',am:'መምህራን'},{en:'Greet them and listen in class',am:'ሰላምታ መስጠትና በክፍል ማዳመጥ'}],[{en:'Parents',am:'ወላጆች'},{en:'Help with home tasks and obey them',am:'በቤት ሥራ መርዳትና መታዘዝ'}]],
   [[{en:'Neighbours',am:'ጎረቤቶች'},{en:'Greet them and help when they need it',am:'ሰላምታ መስጠትና ሲቸገሩ መርዳት'}],[{en:'Classmates',am:'የክፍል ጓደኞች'},{en:'Share and never mock them',am:'ማካፈልና ፈጽሞ አለማሾፍ'}],[{en:'Religious fathers',am:'የሃይማኖት አባቶች'},{en:'Greet them politely and listen to their advice',am:'በትህትና ሰላምታ መስጠትና ምክራቸውን መስማት'}]]
  ]},
 {title:{en:'Polite or rude?',am:'ትሁት ወይስ ባለጌ?'},type:'sort',
  tip:{en:'Words can build or break. Sort each phrase. Which words do you use every day?',am:'ቃላት ይገነባሉ ወይም ያፈርሳሉ። እያንዳንዱን አባባል መድቡ። በየቀኑ የምትጠቀሟቸው የትኞቹን ቃላት ነው?'},
  buckets:[{en:'Polite',am:'ትሁት'},{en:'Rude',am:'ባለጌ'}],
  items:[{t:'እባክዎ',b:0,why:{en:'"Please"',am:''}},{t:'አመሰግናለሁ',b:0,why:{en:'"Thank you"',am:''}},{t:'ይቅርታ',b:0,why:{en:'"Sorry / excuse me"',am:''}},{t:'ጤና ይስጥልኝ',b:0,why:{en:'A respectful greeting',am:''}},{t:'ዝም በል!',b:1,why:{en:'"Shut up!"',am:''}},{t:'ከዚህ ውጣ!',b:1,why:{en:'"Get out of here!"',am:''}},{t:'አንተ ሞኝ!',b:1,why:{en:'"You fool!"',am:''}},{t:'እንኳን ደህና መጡ',b:0,why:{en:'"Welcome"',am:''}}]},
 {title:{en:'What would you do?',am:'ምን ታደርጋላችሁ?'},type:'quiz',
  tip:{en:'Read each situation and choose the most respectful action. Think about how the other person will feel.',am:'እያንዳንዱን ሁኔታ አንብቡና በጣም አክብሮት ያለበትን ተግባር ምረጡ። ሌላው ሰው ምን እንደሚሰማው አስቡ።'},
  items:[
   {q:{en:'You are sitting on a full bus. An old woman gets on.',am:'በሞላ አውቶቡስ ውስጥ ተቀምጣችኋል። አንዲት አረጋዊት ገቡ።'},o:[{en:'Pretend you did not see her',am:'እንዳላያችሁ መምሰል'},{en:'Stand up and offer your seat',am:'ተነስቶ መቀመጫ መስጠት'},{en:'Ask her for money',am:'ገንዘብ መጠየቅ'}],a:1},
   {q:{en:'Your teacher is explaining. Your friend wants to tell you a joke.',am:'መምህሩ እያስረዱ ነው። ጓደኛችሁ ቀልድ ሊነግራችሁ ይፈልጋል።'},o:[{en:'Laugh loudly',am:'ጮክ ብሎ መሳቅ'},{en:'Kindly say "later" and keep listening',am:'በደግነት “በኋላ” ብሎ ማዳመጥ መቀጠል'},{en:'Leave the class',am:'ክፍሉን ለቅቆ መውጣት'}],a:1},
   {q:{en:'A classmate speaks a different language at home and pronounces a word differently.',am:'አንድ የክፍል ጓደኛ በቤቱ የተለየ ቋንቋ ይናገራል፤ አንድን ቃል በተለየ መንገድ ይጠራል።'},o:[{en:'Copy him to make others laugh',am:'ሌሎችን ለማሳቅ እሱን ማስመሰል'},{en:'Ask him to teach you words from his language',am:'ከቋንቋው ቃላት እንዲያስተምራችሁ መጠየቅ'},{en:'Tell him to be quiet',am:'ዝም እንዲል መንገር'}],a:1,e:{en:'Respecting differences makes everyone richer.',am:'ልዩነቶችን ማክበር ሁሉንም ያበለጽጋል።'}},
   {q:{en:'Your mother is tired after work. The dishes are dirty.',am:'እናታችሁ ከሥራ ደክመው መጡ። ሳህኖቹ ቆሻሻ ናቸው።'},o:[{en:'Wait for her to wash them',am:'እስኪያጥቡ መጠበቅ'},{en:'Wash them without being asked',am:'ሳትታዘዙ ማጠብ'},{en:'Complain that you are hungry',am:'ርቦኛል ብሎ ማማረር'}],a:1},
   {q:{en:'A neighbour greets you on the road, but you are in a hurry.',am:'አንድ ጎረቤት መንገድ ላይ ሰላም አሏችሁ፤ እናንተ ግን ቸኩላችኋል።'},o:[{en:'Walk past without answering',am:'ሳትመልሱ ማለፍ'},{en:'Stop briefly, greet back politely, then go',am:'ትንሽ ቆሞ በትህትና ሰላምታ መመለስና መሄድ'},{en:'Shout "I\'m busy!"',am:'“ቸኩያለሁ!” ብሎ መጮህ'}],a:1}
  ]},
 {title:{en:'Welcoming a guest',am:'እንግዳ መቀበል'},type:'order',vertical:true,
  tip:{en:'Ethiopian families are famous for welcoming guests. Put the steps of a respectful welcome in order.',am:'የኢትዮጵያ ቤተሰቦች እንግዳ በመቀበል ይታወቃሉ። የአክብሮት አቀባበል ደረጃዎችን በቅደም ተከተል አስቀምጡ።'},
  help:{en:'Tap the steps from first to last.',am:'ደረጃዎቹን ከመጀመሪያው እስከ መጨረሻው ንኩ።'},
  rounds:[{items:[{en:'Open the door and greet the guest warmly',am:'በሩን ከፍቶ እንግዳውን በሞቀ ሰላምታ መቀበል'},{en:'Invite them in and offer a seat',am:'ወደ ቤት ጋብዞ መቀመጫ ማቅረብ'},{en:'Offer water, coffee or food',am:'ውኃ፣ ቡና ወይም ምግብ ማቅረብ'},{en:'Listen politely while they talk',am:'ሲናገሩ በትህትና ማዳመጥ'},{en:'Walk them to the door and say goodbye',am:'እስከ በሩ ሸኝቶ መሰናበት'}]}]},
 {title:{en:'Respectful or not?',am:'አክባሪ ወይስ አይደለም?'},type:'sort',
  tip:{en:'Respectful people share some habits. Sort each behaviour.',am:'አክባሪ ሰዎች አንዳንድ የጋራ ልማዶች አሏቸው። እያንዳንዱን ባሕርይ መድቡ።'},
  buckets:[{en:'Respectful',am:'አክባሪ'},{en:'Not respectful',am:'አክባሪ ያልሆነ'}],
  items:[
   {t:{en:'Keeps promises',am:'ቃሉን ይጠብቃል'},b:0},{t:{en:'Waits for their turn to speak',am:'ለመናገር ተራውን ይጠብቃል'},b:0},{t:{en:'Takes things without asking',am:'ሳይጠይቅ ዕቃ ይወስዳል'},b:1},
   {t:{en:'Says thank you',am:'አመሰግናለሁ ይላል'},b:0},{t:{en:'Shouts at younger children',am:'በታናናሾች ላይ ይጮሃል'},b:1},{t:{en:'Respects other people\'s things',am:'የሌሎችን ንብረት ያከብራል'},b:0},
   {t:{en:'Makes fun of people\'s clothes',am:'በሰዎች ልብስ ያሾፋል'},b:1},{t:{en:'Knocks before entering a room',am:'ወደ ክፍል ከመግባቱ በፊት ያንኳኳል'},b:0}
  ]},
 {title:{en:'When respect is missing',am:'አክብሮት ሲጎድል'},type:'quiz',
  tip:{en:'Think about what happens when people do not respect each other.',am:'ሰዎች እርስ በርስ ሳይከባበሩ ሲቀሩ ምን እንደሚከሰት አስቡ።'},
  items:[
   {q:{en:'If students do not respect their teacher, what happens?',am:'ተማሪዎች መምህራቸውን ባያከብሩ ምን ይከሰታል?'},o:[{en:'Everyone learns less',am:'ሁሉም ያነሰ ይማራሉ'},{en:'Class becomes better',am:'ክፍሉ ይሻሻላል'},{en:'Nothing',am:'ምንም'}],a:0},
   {q:{en:'If neighbours do not respect each other, what happens?',am:'ጎረቤቶች ባይከባበሩ ምን ይከሰታል?'},o:[{en:'Quarrels and loneliness',am:'ጭቅጭቅና ብቸኝነት'},{en:'More friendship',am:'ተጨማሪ ወዳጅነት'},{en:'More help',am:'ተጨማሪ መረዳዳት'}],a:0},
   {q:{en:'How might a child feel if others always mock him?',am:'ሌሎች ሁልጊዜ ቢያሾፉበት አንድ ልጅ ምን ሊሰማው ይችላል?'},o:[{en:'Proud',am:'ኩራት'},{en:'Hurt and less confident',am:'ተጎድቶ በራስ መተማመኑ ይቀንሳል'},{en:'Happy',am:'ደስታ'}],a:1},
   {q:{en:'What is the best way to rebuild respect after a mistake?',am:'ከስህተት በኋላ አክብሮትን መልሶ ለመገንባት ምርጡ መንገድ ምንድን ነው?'},o:[{en:'Hide',am:'መደበቅ'},{en:'Say sorry sincerely and act better',am:'ከልብ ይቅርታ መጠየቅና በተሻለ መንገድ መኖር'},{en:'Blame someone else',am:'ሌላውን መውቀስ'}],a:1}
  ]},
 {type:'notes',notes:{
 big:{en:'Respect means treating every person as valuable, with our words, actions and body.',am:'አክብሮት ማለት እያንዳንዱን ሰው በቃላችን፣ በተግባራችንና በሰውነታችን ዋጋ እንዳለው አድርጎ መያዝ ነው።'},
 points:[{en:'We respect elders, religious fathers, teachers, family, neighbours and classmates.',am:'ታላላቆችን፣ የሃይማኖት አባቶችን፣ መምህራንን፣ ቤተሰብን፣ ጎረቤቶችንና የክፍል ጓደኞችን እናከብራለን።'},{en:'Polite words: እባክዎ, አመሰግናለሁ, ይቅርታ, ጤና ይስጥልኝ. Use እርስዎ for elders.',am:'ትሁት ቃላት፦ እባክዎ፣ አመሰግናለሁ፣ ይቅርታ፣ ጤና ይስጥልኝ። ለታላላቆች እርስዎ እንላለን።'},{en:'Respectful people keep promises, listen, wait their turn, knock before entering.',am:'አክባሪ ሰዎች ቃላቸውን ይጠብቃሉ፣ ያዳምጣሉ፣ ተራቸውን ይጠብቃሉ፣ ከመግባታቸው በፊት ያንኳኳሉ።'},{en:'Disrespect hurts people, breaks friendships and makes learning harder.',am:'አለማክበር ሰዎችን ይጎዳል፣ ወዳጅነትን ያፈርሳል፣ መማርን ያከብዳል።'}],
 words:[['አክብሮት',{en:'respect',am:'ሰውን ዋጋ እንዳለው መያዝ'}],['ትህትና',{en:'politeness, humility',am:'በእርጋታና በደግነት መናገርና መሥራት'}]],
 remember:{en:'Respect is a mirror: give it, and it comes back to you.',am:'አክብሮት መስታወት ነው፦ ስትሰጡት ይመለስላችኋል።'},
 exam:[[{en:'How do you address an elder politely?',am:'አረጋዊን በትህትና እንዴት ትጠራላችሁ?'},'እርስዎ'],[{en:'An elder enters a full bus. What do you do?',am:'አረጋዊ ወደ ሞላ አውቶቡስ ገቡ። ምን ታደርጋላችሁ?'},{en:'Stand up and offer my seat.',am:'ተነስቼ መቀመጫዬን እሰጣለሁ።'}],[{en:'First step when a guest arrives?',am:'እንግዳ ሲመጣ የመጀመሪያው እርምጃ?'},{en:'Open the door and greet warmly.',am:'በሩን ከፍቶ በሞቀ ሰላምታ መቀበል።'}],[{en:'Give two polite words.',am:'ሁለት ትሁት ቃላት ስጡ።'},'እባክዎ፣ አመሰግናለሁ']],
 innovate:{title:{en:'Respect campaign',am:'የአክብሮት ዘመቻ'},text:{en:'Design a campaign that makes your school more respectful, the way companies design advertising.',am:'ኩባንያዎች ማስታወቂያ እንደሚሠሩ፣ ትምህርት ቤታችሁን የበለጠ አክባሪ የሚያደርግ ዘመቻ ንድፍ አውጡ።'},
  steps:[{en:'Find one respect problem at school (e.g. pushing in lines).',am:'በትምህርት ቤት አንድ የአክብሮት ችግር ፈልጉ (ለምሳሌ በሰልፍ መገፋፋት)።'},{en:'Create a short slogan and a poster.',am:'አጭር መፈክርና ፖስተር ሥሩ።'},{en:'Act a 1-minute drama about it at the flag ceremony.',am:'በሰንደቅ ዓላማ ሥነ ሥርዓት ስለዚህ የ1 ደቂቃ ድራማ አቅርቡ።'},{en:'Count: did the problem get smaller after two weeks?',am:'ቁጠሩ፦ ከሁለት ሳምንት በኋላ ችግሩ ቀነሰ?'}]}}}
 ]});
