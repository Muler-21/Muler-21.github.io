/* 1ኛ ክፍል አማርኛ · ምዕራፍ 6 · የመንገድ ትራፊክ */
(function(){
const M=K1.readMissions({
 vocab:[[['መኪና','🚗'],['አውቶቡስ','🚌'],['ብስክሌት','🚲']],[['የትራፊክ መብራት','🚦'],['ፖሊስ','👮'],['እግረኛ','🚶']]],
 build:['መኪና','መንገድ','ትራፊክ','እግረኛ'],
 story:{title:'ጠንቃቃዋ ሐና',paras:['ሐና ወደ ትምህርት ቤት ትሄዳለች።','መንገዱ ላይ ብዙ መኪኖች አሉ።','ሐና ቆመች፤ ግራና ቀኝ ተመለከተች።','የትራፊክ መብራቱ አረንጓዴ ሲሆን፣ በእግረኛ ማቋረጫ ተሻገረች።','ሐና ጠንቃቃ ልጅ ናት።'],qs:[
  {q:{en:'What did Hana do first?',am:'ሐና መጀመሪያ ምን አደረገች?'},o:[{en:'Stopped and looked left and right',am:'ቆመች፤ ግራና ቀኝ ተመለከተች'},{en:'Ran across',am:'እየሮጠች ተሻገረች'}],a:0},
  {q:{en:'Where did she cross?',am:'የት ተሻገረች?'},o:[{en:'At the zebra crossing',am:'በእግረኛ ማቋረጫ'},{en:'Between cars',am:'በመኪኖች መካከል'}],a:0},
  {q:{en:'What kind of child is Hana?',am:'ሐና ምን ዓይነት ልጅ ናት?'},o:[{en:'Careful',am:'ጠንቃቃ'},{en:'Careless',am:'ግዴለሽ'}],a:0}]},
 sort:{title:{en:'Traffic light',am:'የትራፊክ መብራት'},tip:{en:'Red means stop. Yellow means get ready. Green means go, after looking both ways.',am:'ቀይ፦ ቁም። ቢጫ፦ ተዘጋጅ። አረንጓዴ፦ ግራና ቀኝ ካየህ በኋላ ሂድ።'},
  buckets:[{en:'🔴 Red',am:'🔴 ቀይ'},{en:'🟡 Yellow',am:'🟡 ቢጫ'},{en:'🟢 Green',am:'🟢 አረንጓዴ'}],
  items:[{t:{en:'Stop!',am:'ቁም!'},b:0},{t:{en:'Wait at the side',am:'ዳር ላይ ጠብቅ'},b:0},{t:{en:'Get ready',am:'ተዘጋጅ'},b:1},{t:{en:'Go carefully',am:'በጥንቃቄ ሂድ'},b:2}]},
 spell:[{w:'መኪና',blanks:[1],e:'🚗',en:'car'},{w:'መንገድ',blanks:[1],e:'🛣️',en:'road'}],
 alphabet:'መኪናንገድቀበተ',
 sentences:[['ግራና','ቀኝ','ተመልከቱ።'],['በእግረኛ','ማቋረጫ','ተሻገሩ።']]
});
M.push({title:{en:'Safe or dangerous?',am:'ደህንነቱ የተጠበቀ ወይስ አደገኛ?'},type:'sort',
 tip:{en:'Walkers keep to the left side of the road and never play on the road.',am:'እግረኞች በመንገዱ ግራ በኩል ይሄዳሉ፤ በመንገድ ላይ በፍጹም አይጫወቱም።'},
 buckets:[{en:'✅ Safe',am:'✅ ደህንነቱ የተጠበቀ'},{en:'⚠️ Dangerous',am:'⚠️ አደገኛ'}],
 items:[{t:{en:'Walk on the left side',am:'በግራ በኩል መሄድ'},b:0},{t:{en:'Cross at the zebra crossing',am:'በእግረኛ ማቋረጫ መሻገር'},b:0},{t:{en:'Hold an adult\'s hand',am:'የትልቅ ሰው እጅ መያዝ'},b:0},{t:{en:'Play football on the road',am:'በመንገድ ላይ ኳስ መጫወት'},b:1},{t:{en:'Run between cars',am:'በመኪኖች መካከል መሮጥ'},b:1}]});
M.push({type:'exam',items:[
  {q:{en:'🚦 Red light means…',am:'🚦 ቀይ መብራት ማለት…'},o:[{en:'Stop',am:'ቁም'},{en:'Go',am:'ሂድ'}],a:0},
  {q:{en:'Where should we cross?',am:'የት መሻገር አለብን?'},o:[{en:'At the zebra crossing',am:'በእግረኛ ማቋረጫ'},{en:'Anywhere',am:'በየትኛውም ቦታ'}],a:0},
  {q:{en:'🚌 is…',am:'🚌 …'},o:['አውቶቡስ','ብስክሌት','መኪና'],a:0},
  {q:{en:'Which side do walkers use?',am:'እግረኞች በየትኛው በኩል ይሄዳሉ?'},o:[{en:'Left',am:'ግራ'},{en:'Middle of the road',am:'የመንገዱ መሃል'}],a:0},
  {q:{en:'Join መ + ኪ + ና',am:'መ + ኪ + ና አጣምሩ'},o:['መኪና','ኪናመ','ናመኪ'],a:0}]});
M.push({type:'notes',notes:{
 big:{en:'The road is for everyone. We read traffic words and follow safety rules to stay alive.',am:'መንገድ የሁሉም ነው። የትራፊክ ቃላትን እናነባለን፤ ሕይወታችንን ለመጠበቅ የደህንነት ሕጎችን እንከተላለን።'},
 points:[{en:'Traffic words: መኪና, አውቶቡስ, ብስክሌት, መንገድ, እግረኛ.',am:'የትራፊክ ቃላት፦ መኪና፣ አውቶቡስ፣ ብስክሌት፣ መንገድ፣ እግረኛ።'},{en:'Red = stop, yellow = get ready, green = go.',am:'ቀይ = ቁም፣ ቢጫ = ተዘጋጅ፣ አረንጓዴ = ሂድ።'},{en:'Look left and right, cross at the zebra crossing.',am:'ግራና ቀኝ ተመልከቱ፤ በእግረኛ ማቋረጫ ተሻገሩ።'},{en:'Walk on the left; never play on the road.',am:'በግራ በኩል ሂዱ፤ በመንገድ ላይ በፍጹም አትጫወቱ።'}],
 words:[['እግረኛ',{en:'walker / pedestrian',am:'በእግሩ የሚሄድ'}],['ማቋረጫ',{en:'crossing',am:'መሻገሪያ'}],['ጠንቃቃ',{en:'careful',am:'የሚጠነቀቅ'}]],
 remember:{en:'Stop, look, listen, then cross.',am:'ቁሙ፣ ተመልከቱ፣ አዳምጡ፣ ከዚያ ተሻገሩ።'},
 exam:[[{en:'What does green mean?',am:'አረንጓዴ ምን ማለት ነው?'},'ሂድ'],[{en:'Read: ግራና ቀኝ ተመልከቱ።',am:'አንብቡ፦ ግራና ቀኝ ተመልከቱ።'},{en:'Look left and right.',am:'ግራና ቀኝ ተመልከቱ።'}],[{en:'Name 2 road safety rules',am:'2 የመንገድ ደህንነት ሕጎችን ጥቀሱ'},{en:'Cross at the crossing; walk on the left.',am:'በማቋረጫ መሻገር፤ በግራ መሄድ።'}]],
 innovate:{title:{en:'Cardboard traffic light',am:'የካርቶን የትራፊክ መብራት'},text:{en:'Make a traffic light from a carton and teach the younger children at your school how to cross safely.',am:'ከካርቶን የትራፊክ መብራት ሥሩና በትምህርት ቤታችሁ ያሉ ትናንሽ ልጆችን በደህንነት መሻገርን አስተምሩ።'},
  steps:[{en:'Cut three circles in a long carton.',am:'በረጅም ካርቶን ላይ ሦስት ክቦችን ቁረጡ።'},{en:'Colour them red, yellow and green.',am:'ቀይ፣ ቢጫና አረንጓዴ ቀለም ቀቡ።'},{en:'Draw a zebra crossing on the ground with chalk.',am:'መሬት ላይ በጠመኔ የእግረኛ ማቋረጫ ሳሉ።'},{en:'Play "stop and go" with younger children.',am:'ከትናንሽ ልጆች ጋር "ቁም፣ ሂድ" ተጫወቱ።'}]}}});
Unit.start({id:'g1-amharic-6',grade:1,subject:'amharic',subjectName:{en:'Amharic',am:'አማርኛ'},chapter:{en:'Chapter 6',am:'ምዕራፍ 6'},
 title:{en:'Road traffic',am:'የመንገድ ትራፊክ'},footer:{en:'Built on the Grade 1 Amharic student book, Chapter 6 (Road traffic): fluent reading and road safety.',am:'በ1ኛ ክፍል የአማርኛ መጽሐፍ ምዕራፍ 6 (የመንገድ ትራፊክ) ላይ የተመሰረተ፦ አቀላጥፎ ማንበብና የመንገድ ደህንነት።'},missions:M});
})();
