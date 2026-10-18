/* ሒሳብ · ምዕራፍ 12 · ጊዜ */
(function(){
const {rnd,numOpts,shuffle}=G3;
const clock=(h,m)=>{const ma=m*6*Math.PI/180,ha=((h%12)+m/60)*30*Math.PI/180;let t='';for(let i=1;i<=12;i++){const a=i*30*Math.PI/180;t+=`<text x="${60+44*Math.sin(a)}" y="${64-44*Math.cos(a)}" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">${i}</text>`}
 return`<svg viewBox="0 0 120 120" role="img" aria-label="clock" style="width:170px"><circle cx="60" cy="60" r="56" fill="var(--surface)" stroke="var(--ink)" stroke-width="4"/>${t}<line x1="60" y1="60" x2="${60+28*Math.sin(ha)}" y2="${60-28*Math.cos(ha)}" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"/><line x1="60" y1="60" x2="${60+42*Math.sin(ma)}" y2="${60-42*Math.cos(ma)}" stroke="var(--clay)" stroke-width="3" stroke-linecap="round"/><circle cx="60" cy="60" r="4" fill="var(--ink)"/></svg>`};
const tstr=(h,m)=>`${h}:${String(m).padStart(2,'0')}`;
const EM=['መስከረም','ጥቅምት','ኅዳር','ታኅሣሥ','ጥር','የካቲት','መጋቢት','ሚያዝያ','ግንቦት','ሰኔ','ሐምሌ','ነሐሴ','ጳጉሜ'];
Unit.start({
 id:'math-12',subject:'math',subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 12',am:'ምዕራፍ 12'},
 title:{en:'Time',am:'ጊዜ'},
 footer:{en:'Built on the Grade 3 Mathematics student book, Chapter 12: clocks, units of time and the Ethiopian calendar.',am:'በ3ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 12 ላይ የተመሰረተ፦ ሰዓት፣ የጊዜ አሃዶችና የኢትዮጵያ ቀን መቁጠሪያ።'},
 missions:[
 {title:{en:'Read the clock',am:'ሰዓት ማንበብ'},type:'drill',need:6,
  tip:{en:'The short hand shows the hour. The long red hand shows minutes: count by 5s from 12. 3 → 15 minutes, 6 → 30, 9 → 45.',am:'አጭሩ ቆጣሪ ሰዓቱን ያሳያል። ረጅሙ ቀይ ቆጣሪ ደቂቃን ያሳያል፦ ከ12 ጀምሮ በ5 በ5 ቁጠሩ። 3 → 15 ደቂቃ፣ 6 → 30፣ 9 → 45።'},
  gen(){const h=rnd(1,12),m=rnd(0,11)*5;const ans=tstr(h,m);const o=shuffle([ans,tstr(h%12+1,m),tstr(h,(m+15)%60),tstr(m/5||12,h*5%60)].filter((v,i,a)=>a.indexOf(v)===i));return{fig:clock(h,m),q:{en:'What time is it?',am:'ስንት ሰዓት ነው?'},o,a:o.indexOf(ans)}}},
 {title:{en:'Hours and minutes',am:'ሰዓትና ደቂቃ'},type:'drill',need:6,
  tip:{en:'1 hour = 60 minutes. Half an hour = 30 minutes. A quarter of an hour = 15 minutes.',am:'1 ሰዓት = 60 ደቂቃ። ግማሽ ሰዓት (ተኩል) = 30 ደቂቃ። ሩብ ሰዓት = 15 ደቂቃ።'},
  gen(){const k=rnd(0,2);if(k===0){const h=rnd(1,8);return{q:{en:`${h} hours = ? minutes`,am:`${h} ሰዓት = ? ደቂቃ`},...numOpts(h*60,[60,-60,h*40-h*60,10]),e:`${h} × 60 = ${h*60}`}}
   if(k===1){const h=rnd(1,5);return{q:{en:`${h*60} minutes = ? hours`,am:`${h*60} ደቂቃ = ? ሰዓት`},...numOpts(h,[1,-1,2,h*9]),e:`${h*60} ÷ 60 = ${h}`}}
   const h=rnd(1,4),m=[15,30,45][rnd(0,2)];return{q:{en:`${h} hour(s) ${m} minutes = ? minutes`,am:`${h} ሰዓት ከ${m} ደቂቃ = ? ደቂቃ`},...numOpts(h*60+m,[60,-60,10,-15]),e:`${h*60} + ${m} = ${h*60+m}`}}},
 {title:{en:'Days, weeks, months, years',am:'ቀናት፣ ሳምንታት፣ ወራት፣ ዓመታት'},type:'quiz',shuffle:true,
  tip:{en:'1 week = 7 days. 1 year = 12 months (Gregorian) or 13 months (Ethiopian). 1 year = 365 days (366 in a leap year).',am:'1 ሳምንት = 7 ቀናት። 1 ዓመት = 12 ወራት (በጎርጎርሳውያን) ወይም 13 ወራት (በኢትዮጵያ)። 1 ዓመት = 365 ቀናት (በዘመነ ሉቃስ 366)።'},
  items:[
   {q:{en:'How many days are in 3 weeks?',am:'በ3 ሳምንት ውስጥ ስንት ቀናት አሉ?'},o:['21','14','10','30'],a:0},
   {q:{en:'28 days = ? weeks',am:'28 ቀናት = ? ሳምንታት'},o:['4','3','5','7'],a:0},
   {q:{en:'How many months does the Ethiopian year have?',am:'የኢትዮጵያ ዓመት ስንት ወራት አሉት?'},o:['12','13','10','14'],a:1},
   {q:{en:'How many days do the first 12 Ethiopian months have together?',am:'የመጀመሪያዎቹ 12 የኢትዮጵያ ወራት በአንድ ላይ ስንት ቀናት አሏቸው?'},o:['360','365','300','120'],a:0,e:'12 × 30 = 360. Pagume adds 5 or 6 → 365 or 366.'},
   {q:{en:'Today is the 3rd. What date is it after 2 weeks?',am:'ዛሬ 3 ነው። ከ2 ሳምንት በኋላ ቀኑ ስንት ይሆናል?'},o:['17','10','5','14'],a:0,e:'3 + 14 = 17'}
  ]},
 {title:{en:'Ethiopian months',am:'የኢትዮጵያ ወራት'},type:'order',
  tip:{en:'Put the Ethiopian months in order, starting with መስከረም, the month of New Year. Say them aloud!',am:'የኢትዮጵያን ወራት ከአዲስ ዓመት ወር ከመስከረም ጀምራችሁ በቅደም ተከተል አስቀምጡ። ጮክ ብላችሁ በሉ!'},
  help:{en:'Tap the months in order.',am:'ወራቱን በቅደም ተከተል ንኩ።'},
  rounds:[{items:EM.slice(0,7)},{items:EM.slice(6)}]},
 {title:{en:'Calendar detective',am:'የቀን መቁጠሪያ መርማሪ'},type:'quiz',
  tip:{en:'A calendar shows days, dates and holidays. Use it to plan! If the 1st is a Tuesday, then the 8th, 15th, 22nd and 29th are Tuesdays too.',am:'ቀን መቁጠሪያ ዕለታትን፣ ቀኖችንና በዓላትን ያሳያል። ለማቀድ ተጠቀሙበት! 1ኛው ቀን ማክሰኞ ከሆነ 8፣ 15፣ 22 እና 29ም ማክሰኞ ናቸው።'},
  items:[
   {q:{en:'Meskerem 1 is a Sunday. What day is Meskerem 8?',am:'መስከረም 1 እሁድ ነው። መስከረም 8 ምን ዕለት ነው?'},o:[{en:'Sunday',am:'እሁድ'},{en:'Monday',am:'ሰኞ'},{en:'Saturday',am:'ቅዳሜ'}],a:0},
   {q:{en:'Meskerem has 30 days and starts on a Sunday. On what day does Tikimt 1 fall?',am:'መስከረም 30 ቀን አለው፤ በእሁድ ይጀምራል። ጥቅምት 1 በምን ዕለት ይውላል?'},o:[{en:'Tuesday',am:'ማክሰኞ'},{en:'Sunday',am:'እሁድ'},{en:'Monday',am:'ሰኞ'}],a:0,e:{en:'30 days = 4 weeks + 2 days. Sunday + 2 days → Tuesday.',am:'30 ቀን = 4 ሳምንት + 2 ቀን። እሁድ + 2 ቀን → ማክሰኞ።'}},
   {q:{en:'School starts at 2:30 (Ethiopian time) and lasts 5 hours. When does it end?',am:'ትምህርት በ2፡30 (በኢትዮጵያ አቆጣጠር) ይጀምራል፤ 5 ሰዓት ይቆያል። መቼ ያልቃል?'},o:['7:30','6:30','7:00','5:30'],a:0},
   {q:{en:'In Amharic, 5:45 is read as…',am:'በአማርኛ 5፡45 የሚነበበው…'},o:['ለ6 ሩብ ጉዳይ','5 ሰዓት ተኩል','5 ሰዓት ከሩብ'],a:0}
  ]},
 {type:'exam',items:[
   {q:{en:'1 hour = ? minutes',am:'1 ሰዓት = ? ደቂቃ'},o:['60','100','30','24'],a:0},{q:{en:'Half an hour = ? minutes',am:'ግማሽ ሰዓት = ? ደቂቃ'},o:['30','15','50','20'],a:0},
   {q:{en:'Minute hand on 9 means…',am:'የደቂቃ ቆጣሪ 9 ላይ ሲሆን…'},o:[{en:'45 minutes',am:'45 ደቂቃ'},{en:'9 minutes',am:'9 ደቂቃ'},{en:'90 minutes',am:'90 ደቂቃ'}],a:0},
   {q:{en:'The last Ethiopian month is…',am:'የመጨረሻው የኢትዮጵያ ወር…'},o:['ጳጉሜ','ነሐሴ','መስከረም'],a:0},{q:{en:'14 days = ? weeks',am:'14 ቀን = ? ሳምንት'},o:['2','7','1','3'],a:0}]},
 {type:'notes',notes:{
  big:{en:'Time is measured in minutes, hours, days, weeks, months and years. Clocks and calendars help us plan.',am:'ጊዜ በደቂቃ፣ በሰዓት፣ በቀን፣ በሳምንት፣ በወርና በዓመት ይለካል። ሰዓትና ቀን መቁጠሪያ ለማቀድ ይረዱናል።'},
  points:[{en:'Minute hand: count by 5s. 3 → 15, 6 → 30, 9 → 45.',am:'የደቂቃ ቆጣሪ፦ በ5 በ5 ቁጠሩ። 3 → 15፣ 6 → 30፣ 9 → 45።'},{en:'1 hour = 60 minutes; 1 day = 24 hours; 1 week = 7 days.',am:'1 ሰዓት = 60 ደቂቃ፤ 1 ቀን = 24 ሰዓት፤ 1 ሳምንት = 7 ቀን።'},{en:'Ethiopian year: 12 months × 30 days + ጳጉሜ (5 or 6 days).',am:'የኢትዮጵያ ዓመት፦ 12 ወር × 30 ቀን + ጳጉሜ (5 ወይም 6 ቀን)።'},{en:'Amharic clock words: ተኩል (half past), ከሩብ (quarter past), ሩብ ጉዳይ (quarter to).',am:'የአማርኛ የሰዓት ቃላት፦ ተኩል፣ ከሩብ፣ ሩብ ጉዳይ።'}],
  words:[['ደቂቃ',{en:'minute',am:'የሰዓት 1/60'}],['ቀን መቁጠሪያ',{en:'calendar',am:'ቀናትንና በዓላትን የሚያሳይ'}]],
  remember:'መስከረም ጥቅምት ኅዳር ታኅሣሥ ጥር የካቲት መጋቢት ሚያዝያ ግንቦት ሰኔ ሐምሌ ነሐሴ ጳጉሜ',
  exam:[[{en:'3 hours = ? minutes',am:'3 ሰዓት = ? ደቂቃ'},'180'],[{en:'Month after ሰኔ?',am:'ከሰኔ ቀጥሎ?'},'ሐምሌ'],[{en:'Days in 5 weeks?',am:'በ5 ሳምንት ስንት ቀን?'},'35'],[{en:'Read 7:15 in Amharic.',am:'7፡15ን በአማርኛ አንብቡ።'},'7 ሰዓት ከሩብ']],
  innovate:{title:{en:'Time manager',am:'የጊዜ አስተዳዳሪ'},text:{en:'Successful people plan their time. Design a daily timetable that leaves time to study, help at home, play and rest.',am:'ስኬታማ ሰዎች ጊዜያቸውን ያቅዳሉ። ለማጥናት፣ ቤት ለመርዳት፣ ለመጫወትና ለማረፍ ጊዜ የሚተው የዕለት ፕሮግራም ንድፍ አውጡ።'},
   steps:[{en:'List everything you do in a day and how long each takes.',am:'በቀን የምታደርጉትን ሁሉና እያንዳንዱ የሚወስደውን ጊዜ ዘርዝሩ።'},{en:'Add up the minutes. Does it fit in your day?',am:'ደቂቃዎቹን ደምሩ። በቀናችሁ ውስጥ ይገባል?'},{en:'Find 30 minutes for a new skill or small business idea.',am:'ለአዲስ ክህሎት ወይም ለትንሽ የንግድ ሐሳብ 30 ደቂቃ ፈልጉ።'},{en:'Follow it for a week and note what worked.',am:'ለአንድ ሳምንት ተከተሉት፤ የሠራውን መዝግቡ።'}]}}}
 ]});
})();
