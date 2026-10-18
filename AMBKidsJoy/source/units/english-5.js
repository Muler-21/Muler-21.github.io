/* English · Unit 5 · Cash Crops */
Unit.start({
 id:'english-5',subject:'english',subjectName:{en:'English',am:'እንግሊዝኛ'},chapter:{en:'Unit 5',am:'ክፍል 5'},
 title:{en:'Cash Crops',am:'ገቢ የሚያስገኙ ሰብሎች (Cash Crops)'},
 footer:{en:'Built on Grade 3 English for Ethiopia, Unit 5.',am:'በ3ኛ ክፍል የእንግሊዝኛ መጽሐፍ ክፍል 5 ላይ የተመሰረተ።'},
 missions:[
 {title:{en:'Reading: Cash crops',am:'ንባብ፦ Cash Crops'},type:'quiz',
  tip:{en:'Farmers grow crops for two reasons: to sell (cash crops) or to feed the family (subsistence crops).',am:'ገበሬዎች ሰብል የሚያመርቱት ለሁለት ዓላማ ነው፦ ለመሸጥ (cash crops) ወይም ቤተሰብን ለመመገብ (subsistence crops)።'},
  passage:{title:'Crops for Money and Food',say:'Crops for Money and Food. Farmers grow crops for two purposes. Crops they grow for profit are called cash crops. Crops they grow to feed the family are called subsistence crops. In Ethiopia, coffee, sesame, flowers and pulses are cash crops. Coffee first came from Ethiopia. Today, Brazil produces the most coffee in the world. Prices of cash crops change from time to time.',
   paras:['Farmers grow crops for two purposes. Crops they grow for profit are called cash crops. Crops they grow to feed the family are called subsistence crops.','In Ethiopia, coffee, sesame, flowers and pulses are cash crops. Coffee first came from Ethiopia. Today, Brazil produces the most coffee in the world.','Prices of cash crops change from time to time.']},
  items:[
   {q:'What are cash crops grown for?',o:['profit (to sell)','only to eat at home','to feed animals'],a:0},
   {q:'Where did coffee first come from?',o:['Ethiopia','Brazil','Yemen'],a:0},
   {q:'Which country produces the most coffee today?',o:['Brazil','Kenya','Ethiopia'],a:0},
   {q:'Do prices of cash crops stay the same?',o:['No, they change','Yes, always'],a:0}
  ]},
 {title:{en:'Cash or subsistence?',am:'ለገበያ ወይስ ለቤት ፍጆታ?'},type:'sort',
  tip:{en:'Sort each use. Some farmers do both!',am:'እያንዳንዱን አጠቃቀም መድቡ። አንዳንድ ገበሬዎች ሁለቱንም ያደርጋሉ!'},
  buckets:['Cash crop use','Subsistence use'],
  items:[{t:'sold to other countries',b:0},{t:'eaten by the farmer\'s family',b:1},{t:'sold at a big market for profit',b:0},{t:'made into injera at home',b:1},{t:'exported coffee beans',b:0}]},
 {title:{en:'Likes and dislikes',am:'የምወደውና የማልወደው'},type:'quiz',
  tip:{en:'Talk about likes and dislikes: I like coffee. I don\'t like milk. I prefer tea to coffee.',am:'ስለ መውደድና አለመውደድ፦ I like coffee. I don\'t like milk. I prefer tea to coffee.'},
  items:[
   {q:'Do you like tea? — Yes, I ___.',o:['do','am','does'],a:0,say:'Do you like tea? Yes, I do.'},
   {q:'I ___ like milk. (negative)',o:["don't","doesn't","not"],a:0},
   {q:'I prefer coffee ___ tea.',o:['to','than','from'],a:0,e:{en:'"prefer A to B".',am:'"prefer A to B" እንላለን።'}},
   {q:'She ___ juice.',o:['likes','like','liking'],a:0}
  ]},
 {title:{en:'Coffee ceremony',am:'የቡና ሥነ ሥርዓት'},type:'order',vertical:true,
  tip:{en:'Put the steps of the Ethiopian coffee ceremony in order. The three rounds are called abol, tona and baraka.',am:'የኢትዮጵያ የቡና ሥነ ሥርዓት ደረጃዎችን በቅደም ተከተል አስቀምጡ። ሦስቱ ዙሮች አቦል፣ ቶናና በረካ ይባላሉ።'},help:{en:'Tap from first to last.',am:'ከመጀመሪያው እስከ መጨረሻው ንኩ።'},
  rounds:[{items:['Roast the coffee beans','Grind the beans in a mortar','Boil the coffee in a jebena','Serve the first round (abol)','Serve the second round (tona)','Serve the third round (baraka)']}]},
 {title:{en:'Irregular plurals',am:'ልዩ ብዙ ቁጥሮች'},type:'match',sayRight:'en-US',
  tip:{en:'Most plurals add -s (boy → boys). Some are special! Match each singular with its plural.',am:'አብዛኞቹ ብዙ ቁጥሮች -s ይጨምራሉ (boy → boys)። አንዳንዶቹ ልዩ ናቸው! አዛምዱ።'},
  rounds:[[['man','men'],['woman','women'],['tooth','teeth'],['child','children']],[['ox','oxen'],['sheep','sheep'],['potato','potatoes'],['foot','feet']]]},
 {type:'exam',items:[
   {q:'Crops grown to sell are…',o:['cash crops','subsistence crops'],a:0},{q:'Plural of "tooth"?',o:['teeth','tooths','teeths'],a:0},
   {q:'I prefer tea ___ coffee.',o:['to','than'],a:0},{q:'The first round of coffee is called…',o:['abol','baraka','tona'],a:0},{q:'Plural of "sheep"?',o:['sheep','sheeps'],a:0}]},
 {type:'notes',notes:{
  big:{en:'Cash crops are sold for money; subsistence crops feed the family. Coffee began in Ethiopia.',am:'Cash crops ለገንዘብ ይሸጣሉ፤ subsistence crops ቤተሰብን ይመግባሉ። ቡና ከኢትዮጵያ ተጀመረ።'},
  points:[{en:'Ethiopian cash crops: coffee, sesame, flowers, pulses, cotton.',am:'የኢትዮጵያ ገቢ ሰብሎች፦ ቡና፣ ሰሊጥ፣ አበባ፣ ጥራጥሬ፣ ጥጥ።'},{en:'Likes: I like… / I don\'t like… / I prefer A to B.',am:'መውደድ፦ I like… / I don\'t like… / I prefer A to B.'},{en:'Irregular plurals: men, women, children, teeth, feet, oxen, sheep.',am:'ልዩ ብዙ ቁጥሮች፦ men, women, children, teeth, feet, oxen, sheep።'}],
  words:[['profit',{en:'money gained',am:'ትርፍ'}],['export',{en:'sell to other countries',am:'ወደ ውጭ መላክ'}],['subsistence',{en:'for the family\'s own food',am:'ለራስ ፍጆታ'}]],
  remember:{en:'Coffee ceremony rounds: abol → tona → baraka.',am:'የቡና ዙሮች፦ አቦል → ቶና → በረካ።'},
  exam:[['child → ?','children'],[{en:'Give two Ethiopian cash crops.',am:'ሁለት የኢትዮጵያ ገቢ ሰብሎችን ጥቀሱ።'},'coffee, sesame'],['She ___ (like) mango.','likes']],
  innovate:{title:{en:'Coffee brand designer',am:'የቡና ብራንድ ዲዛይነር'},text:{en:'Ethiopian coffee is famous worldwide. Invent a coffee brand and an English label to sell it abroad.',am:'የኢትዮጵያ ቡና በዓለም ታዋቂ ነው። የቡና ብራንድ ፍጠሩ፤ ወደ ውጭ ለመሸጥ የእንግሊዝኛ መለያ ሥሩ።'},
   steps:[{en:'Choose a name and a picture for your brand.',am:'ለብራንዳችሁ ስምና ሥዕል ምረጡ።'},{en:'Write 3 English sentences about where the coffee is from.',am:'ቡናው ከየት እንደሆነ 3 የእንግሊዝኛ ዓረፍተ ነገሮች ጻፉ።'},{en:'Decide the price for 250 g.',am:'ለ250 ግራም ዋጋ ወስኑ።'},{en:'Present your label like a sales pitch.',am:'መለያችሁን እንደ የሽያጭ ገለጻ አቅርቡ።'}]}}}
 ]});
