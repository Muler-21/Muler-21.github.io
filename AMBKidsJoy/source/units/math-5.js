/* ሒሳብ · ምዕራፍ 5 · ማባዛትና ማካፈል እስከ 10,000 */
(function(){
const {rnd,numOpts}=G3;const f=n=>n.toLocaleString('en-US');
Unit.start({
 id:'math-5',subject:'math',subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 5',am:'ምዕራፍ 5'},
 title:{en:'Big Multiplying & Dividing',am:'ማባዛትና ማካፈል እስከ 10,000'},
 footer:{en:'Built on the Grade 3 Mathematics student book, Chapter 5.',am:'በ3ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 5 ላይ የተመሰረተ።'},
 missions:[
 {title:{en:'Thousands × digit',am:'ሺህዎች × ሆሄ'},type:'drill',need:5,
  tip:{en:'3,000 × 3 is 3 thousands × 3 = 9 thousands = 9,000. Multiply the digit, keep the three zeros.',am:'3,000 × 3 ማለት 3 ሺህ × 3 = 9 ሺህ = 9,000 ነው። ሆሄውን አባዙ፤ ሦስቱን ዜሮዎች አስቀምጡ።'},
  gen(){let d,m;do{d=rnd(1,9);m=rnd(2,9)}while(d*m>10);const ans=d*m*1000;return{q:`${f(d*1000)} × ${m} = ?`,...numOpts(ans,[1000,-1000,ans*9]),e:`${d} × ${m} = ${d*m} → ${f(ans)}`}}},
 {title:{en:'Dividing tens and hundreds',am:'አስሮችንና መቶዎችን ማካፈል'},type:'drill',need:5,
  tip:{en:'600 ÷ 3: think 6 hundreds ÷ 3 = 2 hundreds = 200. 80 ÷ 4: 8 tens ÷ 4 = 2 tens = 20.',am:'600 ÷ 3፦ 6 መቶዎች ÷ 3 = 2 መቶዎች = 200። 80 ÷ 4፦ 8 አስሮች ÷ 4 = 2 አስሮች = 20።'},
  gen(){const big=Math.random()<.5;const m=rnd(2,9),q=rnd(1,Math.floor(9/m)||1);const unit=big?100:10;const tot=m*q*unit;const ans=q*unit;return{q:`${f(tot)} ÷ ${m} = ?`,...numOpts(ans,[unit,-unit,ans*10,m]),e:`${m*q} ÷ ${m} = ${q} → ${f(ans)}`}}},
 {title:{en:'Multiply up to 10,000',am:'እስከ 10,000 ማባዛት'},type:'drill',need:5,
  tip:{en:'Split by place value: 1,234 × 4 = 4,000 + 800 + 120 + 16 = 4,936. Estimate first: about 1,200 × 4 = 4,800.',am:'በቁጥር ቤት ከፋፍሉ፦ 1,234 × 4 = 4,000 + 800 + 120 + 16 = 4,936። መጀመሪያ ገምቱ፦ በግምት 1,200 × 4 = 4,800።'},
  gen(){const m=rnd(2,9);const n=rnd(101,Math.floor(9999/m));const ans=n*m;const parts=[1000,100,10,1].map(p=>Math.floor(n/p)%10*p).filter(Boolean);return{q:`${f(n)} × ${m} = ?`,...numOpts(ans,[100,-100,10,-10,m]),e:parts.map(x=>`${f(x)}×${m}`).join(' + ')+' = '+f(ans)}}},
 {title:{en:'Divide up to 1,000',am:'እስከ 1,000 ማካፈል'},type:'drill',need:5,
  tip:{en:'Share the biggest house first: 846 ÷ 2 → 8 hundreds ÷ 2 = 4 hundreds, 4 tens ÷ 2 = 2 tens, 6 ones ÷ 2 = 3. Answer 423. Check: 423 × 2 = 846.',am:'መጀመሪያ ትልቁን ቤት አካፍሉ፦ 846 ÷ 2 → 8 መቶ ÷ 2 = 4 መቶ፣ 4 አስር ÷ 2 = 2 አስር፣ 6 ÷ 2 = 3። መልስ 423። ማረጋገጫ፦ 423 × 2 = 846።'},
  gen(){const m=rnd(2,9);const q=rnd(11,Math.floor(999/m));const tot=q*m;return{q:`${f(tot)} ÷ ${m} = ?`,...numOpts(q,[1,-1,10,-10]),e:{en:`Check: ${q} × ${m} = ${f(tot)}`,am:`ማረጋገጫ፦ ${q} × ${m} = ${f(tot)}`}}}},
 {title:{en:'Real-life problems',am:'የሕይወት ፕሮብሌሞች'},type:'quiz',
  tip:{en:'First decide: multiply (equal groups put together) or divide (sharing or grouping)? Then estimate and solve.',am:'መጀመሪያ ወስኑ፦ ማባዛት (እኩል ቡድኖችን መሰብሰብ) ወይስ ማካፈል (ማከፋፈል)? ከዚያ ገምቱና ፍቱ።'},
  items:[
   {q:{en:'A school buys 4 sacks of teff at 2,350 birr each. Total cost?',am:'አንድ ትምህርት ቤት እያንዳንዱን በ2,350 ብር 4 ኩንታል ጤፍ ገዛ። ጠቅላላ ወጪ?'},o:['9,400','8,400','9,350','2,354'],a:0,e:'2,000×4 + 300×4 + 50×4 = 8,000 + 1,200 + 200 = 9,400'},
   {q:{en:'900 seedlings are planted in 3 equal rows. How many per row?',am:'900 ችግኞች በ3 እኩል ረድፎች ተተከሉ። በእያንዳንዱ ረድፍ ስንት?'},o:['300','30','3,000','897'],a:0},
   {q:{en:'A bus carries 45 people. How many people do 8 trips carry?',am:'አንድ አውቶቡስ 45 ሰዎችን ይጭናል። በ8 ጉዞ ስንት ሰዎች?'},o:['360','320','53','400'],a:0},
   {q:{en:'A cooperative shares 840 birr profit equally among 4 members. Each gets?',am:'አንድ ማኅበር 840 ብር ትርፍ ለ4 አባላት በእኩል አከፋፈለ። እያንዳንዱ?'},o:['210','220','836','3,360'],a:0},
   {q:{en:'Which estimate is best for 1,987 × 5?',am:'ለ1,987 × 5 ምርጡ ግምት የትኛው ነው?'},o:['10,000','1,000','5,000','20,000'],a:0,e:'2,000 × 5 = 10,000'}
  ]},
 {type:'exam',items:[
   {q:'2,000 × 4 = ?',o:['8,000','800','6,000','2,004'],a:0},{q:'490 ÷ 7 = ?',o:['70','7','60','49'],a:0},{q:'1,205 × 3 = ?',o:['3,615','3,605','3,515','1,208'],a:0},
   {q:'936 ÷ 3 = ?',o:['312','321','302','933'],a:0},{q:{en:'Check 504 ÷ 6 = 84 by…',am:'504 ÷ 6 = 84ን በ… አረጋግጡ'},o:['84 × 6','84 + 6','504 − 6'],a:0,e:'84 × 6 = 504 ✓'}]},
 {type:'notes',notes:{
  big:{en:'Multiply and divide big numbers house by house. Estimate first and check last.',am:'ትልልቅ ቁጥሮችን በየቤቱ አባዙና አካፍሉ። መጀመሪያ ገምቱ፣ በመጨረሻ አረጋግጡ።'},
  points:[{en:'3,000 × 3 = 9,000 (3 × 3 = 9, keep three zeros).',am:'3,000 × 3 = 9,000 (3 × 3 = 9፣ ሦስት ዜሮ አስቀምጡ)።'},{en:'600 ÷ 3 = 200 (6 ÷ 3 = 2, keep two zeros).',am:'600 ÷ 3 = 200 (6 ÷ 3 = 2፣ ሁለት ዜሮ አስቀምጡ)።'},{en:'1,234 × 4 = 4,000 + 800 + 120 + 16 = 4,936.',am:'1,234 × 4 = 4,000 + 800 + 120 + 16 = 4,936።'},{en:'Divide from the biggest house: 846 ÷ 2 = 423.',am:'ከትልቁ ቤት ጀምሩ፦ 846 ÷ 2 = 423።'}],
  remember:{en:'Multiplication and division undo each other: 423 × 2 = 846 and 846 ÷ 2 = 423.',am:'ማባዛትና ማካፈል አንዱ የሌላውን ይመልሳሉ፦ 423 × 2 = 846 እና 846 ÷ 2 = 423።'},
  exam:[['4,000 × 2 = ?','8,000'],['800 ÷ 4 = ?','200'],['2,103 × 3 = ?','6,309'],['684 ÷ 2 = ?','342']],
  innovate:{title:{en:'Cooperative profit planner',am:'የማኅበር ትርፍ እቅድ'},text:{en:'Farmers\' cooperatives share income fairly. Plan one.',am:'የገበሬ ማኅበራት ገቢን በፍትሐዊነት ያከፋፍላሉ። አንድ አቅዱ።'},
   steps:[{en:'5 farmers each sell 3 quintals of maize at 2,450 birr per quintal. Total income?',am:'5 ገበሬዎች እያንዳንዳቸው 3 ኩንታል በቆሎ በኩንታል 2,450 ብር ሸጡ። ጠቅላላ ገቢ?'},{en:'Transport costs 1,750 birr. What is left?',am:'ትራንስፖርት 1,750 ብር ቢያስወጣ የቀረው?'},{en:'Share the rest equally among 5 farmers.',am:'የቀረውን ለ5ቱ ገበሬዎች በእኩል አከፋፍሉ።'},{en:'Suggest how the cooperative could cut costs or earn more.',am:'ማኅበሩ ወጪ የሚቀንስበትን ወይም ተጨማሪ የሚያገኝበትን መንገድ አቅርቡ።'}]}}}
 ]});
})();
