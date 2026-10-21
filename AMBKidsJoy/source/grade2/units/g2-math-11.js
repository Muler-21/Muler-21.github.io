/* 2ኛ ክፍል ሒሳብ · ምዕራፍ 11 · ጊዜ */
(function(){
const {rnd,shuffle}=G3;const {clock}=K1;const SM={en:'Mathematics',am:'ሒሳብ'};
const MON=[['መስከረም','Meskerem'],['ጥቅምት','Tikimt'],['ኅዳር','Hidar'],['ታኅሣሥ','Tahsas'],['ጥር','Tir'],['የካቲት','Yekatit'],['መጋቢት','Megabit'],['ሚያዝያ','Miyazia'],['ግንቦት','Ginbot'],['ሰኔ','Sene'],['ሐምሌ','Hamle'],['ነሐሴ','Nehase'],['ጳጉሜ','Pagume']];
const mm=i=>({en:MON[i][1],am:MON[i][0]});
const tname=(h,m)=>m===0?{en:`${h} o'clock`,am:`${h} ሰዓት`}:m===30?{en:`half past ${h}`,am:`${h} ሰዓት ተኩል`}:m===15?{en:`quarter past ${h}`,am:`${h} ሰዓት ከሩብ`}:{en:`quarter to ${h%12+1}`,am:`${h%12+1} ሰዓት ሩብ ጉዳይ`};
Unit.start({id:'g2-math-11',grade:2,subject:'math',subjectName:SM,chapter:{en:'Chapter 11',am:'ምዕራፍ 11'},
 title:{en:'Time',am:'ጊዜ'},
 footer:{en:'Built on the Grade 2 Mathematics student book, Chapter 11: hours, half hours and quarter hours; hours and minutes; the months of the year.',am:'በ2ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 11 ላይ የተመሰረተ፦ ሰዓት፣ ግማሽና ሩብ ሰዓት፤ የሰዓትና የደቂቃ ዝምድና፤ የዓመቱ ወራት።'},
 missions:[
 {title:{en:"O'clock, half, quarter",am:'ሰዓት፣ ተኩል፣ ሩብ'},type:'drill',need:8,
  tip:{en:'Long hand on 12: o\'clock. On 6: half past. On 3: quarter past. On 9: quarter to.',am:'ረጅሙ ጠቋሚ 12 ላይ፦ ሰዓት። 6 ላይ፦ ተኩል። 3 ላይ፦ ከሩብ። 9 ላይ፦ ሩብ ጉዳይ።'},
  gen(){const h=rnd(1,12),m=[0,15,30,45][rnd(0,3)];const ok=tname(h,m);const set=[ok];[[h,(m+30)%60],[h%12+1,m],[h,(m+15)%60]].forEach(([a,b])=>set.push(tname(a,b)));const o=shuffle(set.slice(0,3));return{fig:clock(h,m),q:{en:'What time is it?',am:'ስንት ሰዓት ነው?'},o,a:o.indexOf(ok)}}},
 {title:{en:'Hours and minutes',am:'ሰዓትና ደቂቃ'},type:'quiz',
  tip:{en:'1 hour = 60 minutes. Half an hour = 30 minutes. A quarter of an hour = 15 minutes.',am:'1 ሰዓት = 60 ደቂቃ። ግማሽ ሰዓት = 30 ደቂቃ። ሩብ ሰዓት = 15 ደቂቃ።'},
  items:[{q:{en:'1 hour = ? minutes',am:'1 ሰዓት = ? ደቂቃ'},o:['60','100','30','12'],a:0},{q:{en:'Half an hour = ? minutes',am:'ግማሽ ሰዓት = ? ደቂቃ'},o:['30','15','50','60'],a:0},{q:{en:'A quarter of an hour = ? minutes',am:'ሩብ ሰዓት = ? ደቂቃ'},o:['15','25','30','4'],a:0},{q:{en:'2 hours = ? minutes',am:'2 ሰዓት = ? ደቂቃ'},o:['120','200','60','90'],a:0}]},
 {title:{en:'Months of the year',am:'የዓመቱ ወራት'},type:'order',
  tip:{en:'The Ethiopian year has 13 months: 12 months of 30 days and Pagume (5 or 6 days). The year begins with Meskerem.',am:'የኢትዮጵያ ዓመት 13 ወራት አሉት፦ 30 ቀን ያላቸው 12 ወራትና ጳጉሜ (5 ወይም 6 ቀን)። ዓመቱ በመስከረም ይጀምራል።'},
  help:{en:'Tap the months in order.',am:'ወራቱን በቅደም ተከተል ንኩ።'},
  rounds:[{prompt:{en:'Meskerem to Tir:',am:'ከመስከረም እስከ ጥር፦'},items:[0,1,2,3,4].map(mm)},{prompt:{en:'Yekatit to Pagume:',am:'ከየካቲት እስከ ጳጉሜ፦'},items:[5,6,7,8,9,10,11,12].map(mm)}]},
 {title:{en:'Before and after',am:'በፊትና በኋላ'},type:'drill',need:6,
  tip:{en:'Which month comes just after or just before?',am:'ወዲያው በኋላ ወይም በፊት የሚመጣው ወር የትኛው ነው?'},
  gen(){const i=rnd(0,12),after=Math.random()<.5;const ans=(i+(after?1:12))%13;const set=new Set([ans]);while(set.size<3)set.add(rnd(0,12));const o=shuffle([...set]);return{q:after?{en:`Which month comes after ${MON[i][1]}?`,am:`ከ${MON[i][0]} በኋላ የሚመጣው ወር?`}:{en:`Which month comes before ${MON[i][1]}?`,am:`ከ${MON[i][0]} በፊት የሚመጣው ወር?`},o:o.map(mm),a:o.indexOf(ans)}}},
 {type:'exam',items:[{fig:clock(4,30),q:{en:'What time is it?',am:'ስንት ሰዓት ነው?'},o:[tname(4,30),tname(4,0),tname(6,20)],a:0},{q:{en:'How many months in the Ethiopian year?',am:'በኢትዮጵያ ዓመት ስንት ወራት አሉ?'},o:['13','12','10','30'],a:0},{q:{en:'The first month is…',am:'የመጀመሪያው ወር…'},o:[mm(0),mm(4),mm(12)],a:0},{q:{en:'60 minutes = ?',am:'60 ደቂቃ = ?'},o:[{en:'1 hour',am:'1 ሰዓት'},{en:'1 day',am:'1 ቀን'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'We measure time with clocks (hours and minutes) and calendars (days and months).',am:'ጊዜን በሰዓት (ሰዓትና ደቂቃ) እና በቀን መቁጠሪያ (ቀናትና ወራት) እንለካለን።'},
  points:[{en:'O\'clock, half past, quarter past, quarter to.',am:'ሰዓት፣ ተኩል፣ ከሩብ፣ ሩብ ጉዳይ።'},{en:'1 hour = 60 minutes; half hour = 30; quarter hour = 15.',am:'1 ሰዓት = 60 ደቂቃ፤ ግማሽ = 30፤ ሩብ = 15።'},{en:'13 months: Meskerem … Nehase, then Pagume.',am:'13 ወራት፦ መስከረም … ነሐሴ፣ ከዚያ ጳጉሜ።'},{en:'Each month has 30 days; Pagume has 5 (6 in a leap year).',am:'እያንዳንዱ ወር 30 ቀናት አሉት፤ ጳጉሜ 5 (በዘመነ ሉቃስ 6) ቀናት።'}],
  words:[['ደቂቃ',{en:'minute',am:'ከሰዓት ያነሰ የጊዜ መለኪያ'}],['ወር',{en:'month',am:'30 ቀናት'}],['ጳጉሜ',{en:'Pagume',am:'13ኛው ወር'}]],
  remember:{en:'"Thirteen months of sunshine" — that is Ethiopia!',am:'"የ13 ወራት ፀጋ" — ይህች ኢትዮጵያ ናት!'},
  exam:[[{en:'Say the 13 months',am:'13ቱን ወራት በሉ'},'መስከረም … ጳጉሜ'],[{en:'How many days in Pagume?',am:'ጳጉሜ ስንት ቀናት አሉት?'},{en:'5 (6 in a leap year)',am:'5 (በዘመነ ሉቃስ 6)'}]],
  innovate:{title:{en:'Family calendar',am:'የቤተሰብ የቀን መቁጠሪያ'},text:{en:'Planners use calendars. Make a 13-month family calendar with birthdays, holidays and the planting season.',am:'አቅጣጫ ሰጪዎች የቀን መቁጠሪያ ይጠቀማሉ። ልደት፣ በዓላትና የመዝሪያ ወቅት ያለበት የ13 ወር የቤተሰብ የቀን መቁጠሪያ ሥሩ።'},
   steps:[{en:'Write the 13 months on 13 papers.',am:'13ቱን ወራት በ13 ወረቀቶች ላይ ጻፉ።'},{en:'Mark family birthdays and holidays.',am:'የቤተሰብ ልደትና በዓላትን ምልክት አድርጉ።'},{en:'Mark when the rains and harvest come.',am:'ዝናብና መከር የሚመጡበትን ምልክት አድርጉ።'},{en:'Hang it at home and use it.',am:'በቤት ስቀሉትና ተጠቀሙበት።'}]}}}
 ]});
})();
