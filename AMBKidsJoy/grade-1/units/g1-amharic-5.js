/* 1ኛ ክፍል አማርኛ · ምዕራፍ 5 · ተክሎች */
(function(){
const M=K1.readMissions({
 vocab:[[['ዛፍ','🌳'],['አበባ','🌼'],['ቅጠል','🍃']],[['ችግኝ','🌱'],['ብርቱካን','🍊'],['ካሮት','🥕']]],
 build:['ችግኝ','ማንጎ','ቅጠል','ብርቱካን'],trace:['ሏ','ቋ','ጓ','ኋ'],
 story:{title:'ችግኝ ተከላ',paras:['ዛሬ የችግኝ ተከላ ቀን ነው።','ተማሪዎችና መምህራን ጉድጓድ ቆፈሩ።','የማንጎና የብርቱካን ችግኞችን ተከሉ።','በየቀኑ ውኃ አጠጡ።','ችግኞቹ አደጉ፤ ፍሬም ሰጡ።'],qs:[
  {q:{en:'What day is it today?',am:'ዛሬ ምን ቀን ነው?'},o:[{en:'Seedling planting day',am:'የችግኝ ተከላ ቀን'},{en:'Market day',am:'የገበያ ቀን'}],a:0},
  {q:{en:'Which seedlings did they plant?',am:'የምን ችግኞችን ተከሉ?'},o:[{en:'🥭 Mango and 🍊 orange',am:'🥭 ማንጎና 🍊 ብርቱካን'},{en:'🌵 Cactus',am:'🌵 ቁልቋል'}],a:0},
  {q:{en:'What did they do every day?',am:'በየቀኑ ምን አደረጉ?'},o:[{en:'💧 Watered them',am:'💧 ውኃ አጠጡ'},{en:'✂️ Cut them',am:'✂️ ቆረጡ'}],a:0}]},
 sort:{title:{en:'Fruit or vegetable?',am:'ፍራፍሬ ወይስ አትክልት?'},tip:{en:'We eat many plants. Fruits are usually sweet; vegetables are cooked or eaten in salads.',am:'ብዙ ተክሎችን እንመገባለን። ፍራፍሬዎች በአብዛኛው ጣፋጭ ናቸው፤ አትክልቶች ይበሰላሉ ወይም በሰላጣ ይበላሉ።'},
  buckets:[{en:'🍎 Fruit',am:'🍎 ፍራፍሬ'},{en:'🥬 Vegetable',am:'🥬 አትክልት'}],
  items:[{t:'🍊 ብርቱካን',b:0},{t:'🥭 ማንጎ',b:0},{t:'🍌 ሙዝ',b:0},{t:'🥬 ጎመን',b:1},{t:'🥕 ካሮት',b:1},{t:'🧅 ሽንኩርት',b:1}]},
 spell:[{w:'ዛፍ',blanks:[1],e:'🌳',en:'tree'},{w:'ችግኝ',blanks:[1],e:'🌱',en:'seedling'},{w:'ቅጠል',blanks:[0],e:'🍃',en:'leaf'}],
 alphabet:'ዛፍችግኝቅጠልሎማ',
 sentences:[['ተማሪዎች','ችግኝ','ተከሉ።'],['ዛፍ','አየርን','ያጸዳል።']]
});
M.push({type:'exam',items:[
  {q:{en:'🌱 is…',am:'🌱 …'},o:['ችግኝ','ዛፍ','ፍሬ'],a:0},
  {q:{en:'What does a plant need to grow?',am:'ተክል ለማደግ ምን ያስፈልገዋል?'},o:[{en:'Water, sun and soil',am:'ውኃ፣ ፀሐይና አፈር'},{en:'Only stones',am:'ድንጋይ ብቻ'}],a:0},
  {q:{en:'Which is a fruit?',am:'ፍራፍሬ የሆነው?'},o:['ሙዝ','ጎመን','ሽንኩርት'],a:0},
  {q:{en:'Join ቅ + ጠ + ል',am:'ቅ + ጠ + ል አጣምሩ'},o:['ቅጠል','ጠቅል','ልቅጠ'],a:0},
  {q:{en:'ቋ comes from which letter?',am:'ቋ ከየትኛው ፊደል ነው?'},o:['ቀ','ከ','ገ'],a:0}]});
M.push({type:'notes',notes:{
 big:{en:'Plants give us food, shade and clean air. We plant and care for them, and we read about them fluently.',am:'ተክሎች ምግብ፣ ጥላና ንጹህ አየር ይሰጡናል። እንተክላቸዋለን፣ እንንከባከባቸዋለን፤ ስለነሱም አቀላጥፈን እናነባለን።'},
 points:[{en:'Plant words: ዛፍ, አበባ, ቅጠል, ችግኝ, ፍሬ.',am:'የተክል ቃላት፦ ዛፍ፣ አበባ፣ ቅጠል፣ ችግኝ፣ ፍሬ።'},{en:'Read long words sound by sound: ች-ግ-ኝ.',am:'ረጃጅም ቃላትን ድምፅ በድምፅ አንብቡ፦ ች-ግ-ኝ።'},{en:'Letters with a "wa" sound: ሏ ቋ ጓ ኋ.',am:'"ዋ" ድምፅ ያላቸው ፊደላት፦ ሏ ቋ ጓ ኋ።'},{en:'Plants need water, sun and soil; we eat fruits and vegetables.',am:'ተክሎች ውኃ፣ ፀሐይና አፈር ያስፈልጋቸዋል፤ ፍራፍሬና አትክልት እንመገባለን።'}],
 words:[['ችግኝ',{en:'seedling',am:'ትንሽ ተክል'}],['ፍሬ',{en:'fruit',am:'የተክል ምርት'}],['ተከላ',{en:'planting',am:'መትከል'}]],
 remember:{en:'Plant a tree, water it, and it will feed you one day.',am:'ዛፍ ትከሉ፣ አጠጡ፤ አንድ ቀን ይመግባችኋል።'},
 exam:[[{en:'Name 3 fruits',am:'3 ፍራፍሬዎችን ጥቀሱ'},'ብርቱካን፣ ማንጎ፣ ሙዝ'],[{en:'Read: ዛፍ አየርን ያጸዳል።',am:'አንብቡ፦ ዛፍ አየርን ያጸዳል።'},{en:'Trees clean the air.',am:'ዛፍ አየርን ያጸዳል።'}],[{en:'What does a plant need?',am:'ተክል ምን ያስፈልገዋል?'},'ውኃ፣ ፀሐይ፣ አፈር']],
 innovate:{title:{en:'Seedling nursery in old cans',am:'በአሮጌ ጣሳ የችግኝ ጣቢያ'},text:{en:'Grow seedlings in old cans and plastic bottles, then give or sell them to neighbours. That is how green businesses start!',am:'በአሮጌ ጣሳና በፕላስቲክ ጠርሙስ ችግኝ አፍሉ፤ ከዚያ ለጎረቤቶች ስጡ ወይም ሽጡ። አረንጓዴ ንግድ በዚህ መልኩ ይጀምራል!'},
  steps:[{en:'Fill old cans with soil.',am:'አሮጌ ጣሳዎችን በአፈር ሙሉ።'},{en:'Plant mango, orange or papaya seeds.',am:'የማንጎ፣ የብርቱካን ወይም የፓፓዬ ዘር ዝሩ።'},{en:'Water every day and write a name label.',am:'በየቀኑ አጠጡ፤ የስም ምልክት ጻፉ።'},{en:'Plant or share the seedlings when they grow.',am:'ችግኞቹ ሲያድጉ ትከሏቸው ወይም አጋሯቸው።'}]}}});
Unit.start({id:'g1-amharic-5',grade:1,subject:'amharic',subjectName:{en:'Amharic',am:'አማርኛ'},chapter:{en:'Chapter 5',am:'ምዕራፍ 5'},
 title:{en:'Plants',am:'ተክሎች'},footer:{en:'Built on the Grade 1 Amharic student book, Chapter 5 (Plants): fluent reading, long words and "wa" letters.',am:'በ1ኛ ክፍል የአማርኛ መጽሐፍ ምዕራፍ 5 (ተክሎች) ላይ የተመሰረተ፦ አቀላጥፎ ማንበብ፣ ረጃጅም ቃላትና ዲቃላ ፊደላት።'},missions:M});
})();
