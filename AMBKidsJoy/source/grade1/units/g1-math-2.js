/* 1ኛ ክፍል ሒሳብ · ምዕራፍ 2 · እስከ 20 ያሉ ቁጥሮችን ማወዳደር */
(function(){
const {tx,rnd,shuffle,numOpts}=G3;const {pick,two,tenframe}=K1;
function line(a,b,hide){let s='';const n=b-a,w=Math.max(300,n*34+40);
 for(let i=0;i<=n;i++){const x=20+i*(w-40)/n,v=a+i;s+=`<line x1="${x}" y1="30" x2="${x}" y2="44" stroke="var(--ink)" stroke-width="3"/>`+
  (hide.includes(v)?`<rect x="${x-13}" y="50" width="26" height="26" rx="6" fill="var(--sun-soft)" stroke="var(--sun)" stroke-width="2"/><text x="${x}" y="70" text-anchor="middle" font-size="18" font-weight="800" fill="var(--ink)">?</text>`
  :`<text x="${x}" y="70" text-anchor="middle" font-size="18" font-family="Baloo 2" font-weight="800" fill="var(--ink)">${v}</text>`)}
 return`<svg viewBox="0 0 ${w} 84" style="width:min(${w}px,100%);height:auto" role="img" aria-label="number line"><line x1="10" y1="37" x2="${w-10}" y2="37" stroke="var(--ink)" stroke-width="3"/>${s}</svg>`}
const MORE={en:'Which group has MORE?',am:'በቁጥር የሚበልጠው የትኛው ቡድን ነው?'},LESS={en:'Which group has FEWER?',am:'በቁጥር የሚያንሰው የትኛው ቡድን ነው?'};
Unit.start({
 id:'g1-math-2',grade:1,subject:'math',
 subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 2',am:'ምዕራፍ 2'},
 title:{en:'Comparing numbers up to 20',am:'እስከ 20 ያሉ ቁጥሮችን ማወዳደር'},
 footer:{en:'Built on the Grade 1 Mathematics student book, Chapter 2: before, after, between, more, fewer, and making numbers.',am:'በ1ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 2 ላይ የተመሰረተ፦ በፊት፣ በኋላ፣ መካከል፣ ይበልጣል፣ ያንሳል እና ቁጥሮችን ማጣመር።'},
 missions:[
 {title:{en:'Before, after, between',am:'በፊት፣ በኋላ፣ መካከል'},type:'drill',need:6,
  tip:{en:'A number line shows numbers in order. The number before is 1 less. The number after is 1 more.',am:'የቁጥር መስመር ቁጥሮችን በቅደም ተከተል ያሳያል። በፊት ያለው በ1 ያንሳል። በኋላ ያለው በ1 ይበልጣል።'},
  gen(){const a=rnd(0,10);const v=rnd(a+1,a+8);return{fig:line(a,a+9,[v]),q:{en:`Which number is hiding? It comes after ${v-1} and before ${v+1}.`,am:`የተደበቀው ቁጥር የትኛው ነው? ከ${v-1} በኋላ፣ ከ${v+1} በፊት ይገኛል።`},...numOpts(v,[1,-1,2,10]),e:`${v-1}, ${v}, ${v+1}`}}},
 {title:{en:'More or fewer?',am:'ይበልጣል ወይስ ያንሳል?'},type:'drill',need:6,
  tip:{en:'Line the things up one to one. The row with things left over has MORE.',am:'ነገሮቹን አንድ ለአንድ አሰልፉ። የተረፈ ነገር ያለው ረድፍ ይበልጣል።'},
  gen(){let a=rnd(2,10),b=rnd(2,10);if(a===b)b=a<10?a+1:a-1;const e1=pick('animal');const more=Math.random()<.5;
   return{fig:two(a,b,e1,pick('fruit')),q:more?MORE:LESS,o:['A','B'],a:more?(a>b?0:1):(a<b?0:1),e:{en:`A has ${a}, B has ${b}.`,am:`A ${a} አለው፤ B ${b} አለው።`}}}},
 {title:{en:'Greater, smaller, equal',am:'ይበልጣል፣ ያንሳል፣ እኩል'},type:'drill',need:6,
  tip:{en:'The number that comes later when we count is greater. 15 is greater than 12 because it comes after 12.',am:'ስንቆጥር በኋላ የሚመጣው ቁጥር ይበልጣል። 15 ከ12 ይበልጣል፤ ምክንያቱም ከ12 በኋላ ይመጣል።'},
  gen(){const a=rnd(0,20);let b=Math.random()<.2?a:rnd(0,20);const o=[{en:'is greater than',am:'ይበልጣል'},{en:'is less than',am:'ያንሳል'},{en:'is equal to',am:'እኩል ነው'}];
   return{q:{en:`${a} ___ ${b}`,am:`${a} ከ${b} ___`},o,a:a>b?0:a<b?1:2}}},
 {title:{en:'Put in order',am:'በቅደም ተከተል አስቀምጡ'},type:'order',
  tip:{en:'Start with the smallest number, then the next, up to the biggest.',am:'ከትንሹ ቁጥር ጀምሩ፤ ቀጥሎ የሚመጣውን፣ እስከ ትልቁ ድረስ።'},
  help:{en:'Tap from the smallest to the biggest.',am:'ከትንሹ እስከ ትልቁ ንኩ።'},
  rounds:[{prompt:{en:'Smallest to biggest:',am:'ከትንሹ እስከ ትልቁ፦'},items:['2','4','5','7','9']},
   {prompt:{en:'Smallest to biggest:',am:'ከትንሹ እስከ ትልቁ፦'},items:['11','13','16','18','20']},
   {prompt:{en:'Children in a line, shortest first:',am:'ልጆች በሰልፍ፣ አጭሩ መጀመሪያ፦'},items:['🧒 1','🧒 3','🧒 6','🧒 8','🧒 10']}]},
 {title:{en:'Make 10 (number bonds)',am:'10ን ማጣመርና መነጠል'},type:'drill',need:6,
  tip:{en:'A number can be split into two parts. 10 is 6 and 4, or 7 and 3. Look at the empty boxes!',am:'አንድ ቁጥር ለሁለት ክፍሎች ሊነጠል ይችላል። 10 6ና 4፣ ወይም 7ና 3 ነው። ባዶ ሳጥኖቹን ተመልከቱ!'},
  gen(){const t=Math.random()<.6?10:rnd(5,9);const a=rnd(1,t-1);return{fig:tenframe(a),q:{en:`${a} and ? make ${t}`,am:`${a} እና ? ${t} ይሆናሉ`},...numOpts(t-a,[1,-1,2]),e:`${a} + ${t-a} = ${t}`}}},
 {title:{en:'Who sits in the middle?',am:'መካከል የተቀመጠው ማን ነው?'},type:'quiz',
  tip:{en:'Draw a picture in your head, or with stones, to solve the problem.',am:'ፕሮብሌሙን ለመፍታት በአእምሯችሁ ወይም በጠጠር ስዕል ሥሩ።'},
  items:[
   {q:{en:'Kassa sits after Zerihun. Jemal sits after Kassa. Who sits in the middle?',am:'ካሳ ከዘሪሁን በኋላ ተቀምጧል። ጀማል ደግሞ ከካሳ በኋላ ተቀምጧል። መካከል የተቀመጠው ማን ነው?'},o:[{en:'Kassa',am:'ካሳ'},{en:'Zerihun',am:'ዘሪሁን'},{en:'Jemal',am:'ጀማል'}],a:0,e:{en:'Zerihun, Kassa, Jemal: Kassa is in the middle.',am:'ዘሪሁን፣ ካሳ፣ ጀማል፦ ካሳ መካከል ነው።'}},
   {fig:two(7,5,'🦋','🌼','🦋','🌼'),q:{en:'Are there more butterflies or more flowers?',am:'ቢራቢሮዎች ይበልጣሉ ወይስ አበቦች?'},o:[{en:'Butterflies',am:'ቢራቢሮዎች'},{en:'Flowers',am:'አበቦች'},{en:'The same',am:'እኩል'}],a:0},
   {q:{en:'Hana has 12 eggs. Bekele has 9 eggs. Who has fewer?',am:'ሐና 12 እንቁላሎች አሏት። በቀለ 9 እንቁላሎች አሉት። ያነሰ ያለው ማን ነው?'},o:[{en:'Hana',am:'ሐና'},{en:'Bekele',am:'በቀለ'}],a:1}
  ]},
 {type:'exam',items:[
   {q:{en:'What number comes just before 8?',am:'ወዲያው ከ8 በፊት የሚመጣው ቁጥር?'},o:['9','7','6','10'],a:1},
   {q:{en:'What number is between 14 and 16?',am:'በ14 እና በ16 መካከል ያለው ቁጥር?'},o:['13','15','17','12'],a:1},
   {q:{en:'Which is greater: 17 or 13?',am:'የትኛው ይበልጣል፦ 17 ወይስ 13?'},o:['17','13'],a:0},
   {q:{en:'3 and ? make 10',am:'3 እና ? 10 ይሆናሉ'},o:['6','7','8','13'],a:1},
   {q:{en:'Which list is in order from smallest?',am:'ከትንሹ ጀምሮ በቅደም ተከተል የተቀመጠው የትኛው ነው?'},o:['4, 6, 9, 12','9, 4, 12, 6','12, 9, 6, 4'],a:0}
  ]},
 {type:'notes',notes:{
  big:{en:'We compare numbers to know which is more, which is less, or if they are equal.',am:'የትኛው እንደሚበልጥ፣ የትኛው እንደሚያንስ ወይም እኩል መሆናቸውን ለማወቅ ቁጥሮችን እናወዳድራለን።'},
  points:[{en:'On the number line, the number before is 1 less and the number after is 1 more.',am:'በቁጥር መስመር ላይ በፊት ያለው በ1 ያንሳል፤ በኋላ ያለው በ1 ይበልጣል።'},
   {en:'Match things one to one: the group with things left over has more.',am:'ነገሮችን አንድ ለአንድ አዛምዱ፦ የተረፈ ያለው ቡድን ይበልጣል።'},
   {en:'Order numbers from smallest to biggest, or biggest to smallest.',am:'ቁጥሮችን ከትንሹ ወደ ትልቁ ወይም ከትልቁ ወደ ትንሹ አስቀምጡ።'},
   {en:'A number can be split into two parts: 10 = 7 and 3.',am:'አንድ ቁጥር በሁለት ክፍሎች ይነጠላል፦ 10 = 7 እና 3።'}],
  words:[['ይበልጣል',{en:'more / greater',am:'ብዙ'}],['ያንሳል',{en:'fewer / less',am:'ጥቂት'}],['እኩል',{en:'equal',am:'ተመሳሳይ ብዛት'}],['መካከል',{en:'between',am:'በሁለቱ መሃል'}]],
  remember:{en:'Before = 1 less. After = 1 more.',am:'በፊት = በ1 ያንሳል። በኋላ = በ1 ይበልጣል።'},
  exam:[[{en:'What comes after 19?',am:'ከ19 በኋላ የሚመጣው?'},'20'],[{en:'Which is less: 6 or 11?',am:'የትኛው ያንሳል፦ 6 ወይስ 11?'},'6'],[{en:'5 and ? make 10',am:'5 እና ? 10 ይሆናሉ'},'5'],[{en:'Order 9, 3, 15 from smallest',am:'9፣ 3፣ 15ን ከትንሹ ጀምራችሁ አስቀምጡ'},'3, 9, 15']],
  innovate:{title:{en:'Fair-share market stall',am:'ፍትሐዊ የገበያ ሱቅ'},text:{en:'Sellers must compare to be fair. Set up a pretend stall with stones as tomatoes and make bundles of the same size.',am:'ሻጮች ፍትሐዊ ለመሆን ማወዳደር አለባቸው። ጠጠሮችን እንደ ቲማቲም ተጠቅማችሁ የሙከራ ሱቅ አዘጋጁና እኩል ብዛት ያላቸው ክምሮች ሥሩ።'},
   steps:[{en:'Collect 20 small stones.',am:'20 ትናንሽ ጠጠሮችን ሰብስቡ።'},{en:'Make heaps of 2, 5 and 10.',am:'የ2፣ የ5 እና የ10 ክምሮች ሥሩ።'},{en:'Ask a friend: which heap has more? fewer?',am:'ጓደኛችሁን ጠይቁ፦ የትኛው ክምር ይበልጣል? ያንሳል?'},{en:'Sell heaps for bottle caps and count your caps.',am:'ክምሮቹን በጠርሙስ ክዳን ሽጡና ክዳኖቻችሁን ቁጠሩ።'}]}
 }}
 ]});
})();
