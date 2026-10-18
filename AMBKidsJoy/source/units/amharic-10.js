/* አማርኛ · ምዕራፍ 10 · ገበያ */
Unit.start({
 id:'amharic-10',subject:'amharic',subjectName:{en:'Amharic',am:'አማርኛ'},chapter:{en:'Chapter 10',am:'ምዕራፍ 10'},
 title:{en:'Market (ገበያ)',am:'ገበያ'},
 footer:{en:'Built on the Grade 3 Amharic student book, Chapter 10. The story here is new, written for this unit.',am:'በ3ኛ ክፍል የአማርኛ መጽሐፍ ምዕራፍ 10 ላይ የተመሰረተ። ታሪኩ ለዚህ ክፍል አዲስ የተጻፈ ነው።'},
 missions:[
 {title:{en:'Reading',am:'አንብቦ መረዳት'},type:'quiz',
  tip:{en:'Read about Emama Kuri\'s small market stall. How does she run her business well?',am:'ስለ እማማ ኩሪ ትንሽ የጉልት ሥራ አንብቡ። ንግዳቸውን እንዴት በደንብ ያካሂዳሉ?'},
  passage:{title:'የእማማ ኩሪ ጉልት',paras:[
   'እማማ ኩሪ በየቀኑ ጠዋት በሰፈሩ ገበያ ጉልት ይዘረጋሉ። ቲማቲም፣ ሽንኩርት፣ ጎመንና ሎሚ ይሸጣሉ።',
   'አትክልቶቹን ንጹህ አድርገው በሥርዓት ይደረድራሉ። ደንበኞቻቸውን በፈገግታ ተቀብለው ትክክለኛ ሚዛን ይሰጣሉ።',
   'ማታ ማታ የሸጡትንና ያወጡትን በደብተር ይመዘግባሉ። ከትርፋቸው ትንሽ በዕቁብ ይቆጥባሉ።',
   'ደንበኞች “የእማማ ኩሪ አትክልት ትኩስ ነው፤ ሚዛናቸውም ትክክል ነው” ይላሉ።']},
  items:[
   {q:'እማማ ኩሪ ምን ይሸጣሉ?',o:['አትክልት','ልብስ','ጫማ'],a:0},
   {q:'ደንበኞቻቸውን እንዴት ይቀበላሉ?',o:['በፈገግታ','በቁጣ','ዝም ብለው'],a:0},
   {q:'ማታ ማታ ምን ያደርጋሉ?',o:['ሽያጭና ወጪን በደብተር ይመዘግባሉ','ይተኛሉ ብቻ','ዕቃ ይጥላሉ'],a:0,e:'መዝገብ መያዝ የጎበዝ ነጋዴ ልምድ ነው።'},
   {q:'ከትርፋቸው በምን ይቆጥባሉ?',o:['በዕቁብ','በቦርሳ ውስጥ ብቻ','አይቆጥቡም'],a:0},
   {q:'ደንበኞች የሚወዷቸው ለምንድን ነው?',o:['ትኩስ አትክልትና ትክክለኛ ሚዛን','ርካሽ ስለሆኑ ብቻ','ስለማይናገሩ'],a:0}
  ]},
 {title:{en:'Traditional or modern market?',am:'ባህላዊ ወይስ ዘመናዊ ገበያ?'},type:'sort',
  tip:{en:'Both kinds of market are important. Sort the features.',am:'ሁለቱም የገበያ ዓይነቶች አስፈላጊ ናቸው። ባሕርያቱን መድቡ።'},
  buckets:[{en:'Traditional market',am:'ባህላዊ ገበያ'},{en:'Modern market (supermarket)',am:'ዘመናዊ ገበያ (ሱፐርማርኬት)'}],
  items:[{t:'በሳምንት የተወሰኑ ቀናት በሜዳ ይቆማል',b:0},{t:'ዋጋ ተደራድሮ መግዛት ይቻላል',b:0},{t:'ዋጋ በዕቃው ላይ ተለጥፏል',b:1},{t:'ዕቃዎች በመደርደሪያ ላይ ይቀመጣሉ',b:1},{t:'እንስሳት ይሸጣሉ',b:0},{t:'በገንዘብ መመዝገቢያ ማሽን ይከፈላል',b:1}]},
 {title:{en:'Market talk',am:'የገበያ ጭውውት'},type:'order',vertical:true,
  tip:{en:'Put the conversation between a buyer and a seller in order. Notice the polite words!',am:'በገዢና በሻጭ መካከል ያለውን ንግግር በቅደም ተከተል አስቀምጡ። ትሁት ቃላቱን አስተውሉ!'},help:{en:'Tap from the first line to the last.',am:'ከመጀመሪያው መስመር እስከ መጨረሻው ንኩ።'},
  rounds:[{items:['ገዢ፦ ጤና ይስጥልኝ እማማ።','ሻጭ፦ እግዚአብሔር ይስጥልኝ ልጄ። ምን ልስጥሽ?','ገዢ፦ ቲማቲም በኪሎ ስንት ነው?','ሻጭ፦ በኪሎ አርባ ብር ነው።','ገዢ፦ ሁለት ኪሎ ይስጡኝ።','ሻጭ፦ እሺ፤ ሰማንያ ብር ነው።','ገዢ፦ አመሰግናለሁ።']}]},
 {title:{en:'Market words',am:'የገበያ ቃላት'},type:'match',
  tip:{en:'Match each market word with its meaning.',am:'እያንዳንዱን የገበያ ቃል ከትርጉሙ ጋር አዛምዱ።'},
  rounds:[[['ሻጭ','ዕቃ የሚሸጥ ሰው'],['ገዢ','ዕቃ የሚገዛ ሰው'],['ትርፍ','ከወጪ በላይ የሚገኝ ገንዘብ'],['ሚዛን','ክብደት መለኪያ'],['ዕቁብ','በጋራ የመቆጠቢያ ዘዴ']]]},
 {type:'exam',items:[
   {q:'ዋጋ ተደራድሮ የሚገዛበት?',o:['ባህላዊ ገበያ','ሱፐርማርኬት'],a:0},{q:'ትርፍ ማለት…',o:['ከወጪ በላይ የሚገኝ ገንዘብ','ኪሳራ','ዕዳ'],a:0},
   {q:'ጎበዝ ነጋዴ ማታ ምን ያደርጋል?',o:['ሽያጩን ይመዘግባል','ዕቃውን ይጥላል','ምንም'],a:0},{q:'“ሁለት ኪሎ ይስጡኝ።” የሚለው?',o:['ገዢ','ሻጭ'],a:0}]},
 {type:'notes',notes:{
  big:{en:'Markets connect buyers and sellers. Good sellers are honest, polite, keep records and save.',am:'ገበያ ገዢንና ሻጭን ያገናኛል። ጎበዝ ነጋዴዎች ታማኝ፣ ትሁት ናቸው፤ መዝገብ ይይዛሉ፤ ይቆጥባሉ።'},
  points:[{en:'Traditional markets: open air, bargaining, animals. Modern markets: price tags, shelves, cash register.',am:'ባህላዊ ገበያ፦ ሜዳ ላይ፣ መደራደር፣ እንስሳት። ዘመናዊ ገበያ፦ የዋጋ መለያ፣ መደርደሪያ፣ መመዝገቢያ ማሽን።'},{en:'Profit = money from sales − costs.',am:'ትርፍ = የሽያጭ ገንዘብ − ወጪ።'},{en:'Polite market words: ጤና ይስጥልኝ, ይስጡኝ, አመሰግናለሁ.',am:'ትሁት የገበያ ቃላት፦ ጤና ይስጥልኝ፣ ይስጡኝ፣ አመሰግናለሁ።'}],
  words:[['ጉልት',{en:'small market stall',am:'ትንሽ የመሸጫ ቦታ'}],['ትርፍ',{en:'profit',am:'የተገኘ ተጨማሪ ገንዘብ'}],['ዕቁብ',{en:'savings group',am:'በጋራ መቆጠብ'}]],
  remember:{en:'Fresh goods, fair scales, a friendly smile and a record book.',am:'ትኩስ ዕቃ፣ ትክክለኛ ሚዛን፣ ፈገግታና የመዝገብ ደብተር።'},
  exam:[['ገዢ ማለት?','ዕቃ የሚገዛ ሰው'],['ሽያጭ 500፣ ወጪ 350፤ ትርፍ?','150 ብር'],['ሁለት የባህላዊ ገበያ ባሕርያት?','ሜዳ ላይ ይቆማል፤ መደራደር ይቻላል']],
  innovate:{title:{en:'Plan a market stall',am:'የገበያ ጉልት አቅዱ'},text:{en:'Like Emama Kuri, plan a small stall: what to sell, where, for how much, and how to keep records.',am:'እንደ እማማ ኩሪ ትንሽ ጉልት አቅዱ፦ ምን፣ የት፣ በስንት እንደምትሸጡና መዝገብ እንዴት እንደምትይዙ።'},
   steps:[{en:'Choose a product people in your area need.',am:'በአካባቢያችሁ ሰዎች የሚፈልጉትን ምርት ምረጡ።'},{en:'Find the buying cost and choose a selling price.',am:'የመግዣ ዋጋውን ፈልጉ፤ የመሸጫ ዋጋ ምረጡ።'},{en:'Draw a record-book page: date, sales, costs, profit.',am:'የመዝገብ ገጽ ሳሉ፦ ቀን፣ ሽያጭ፣ ወጪ፣ ትርፍ።'},{en:'Write a friendly Amharic sign for your stall.',am:'ለጉልታችሁ ደግ የአማርኛ ምልክት ጻፉ።'}]}}}
 ]});
