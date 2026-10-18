/* ሒሳብ · ምዕራፍ 11 · ገንዘብ */
(function(){
const {rnd,numOpts,tx,esc,shuffle}=G3;
const NOTE_C={200:'#6B8E4E',100:'#8A6A3C',50:'#C46A2E',10:'#3F6FB0',5:'#7A5AA8',1:'#2E8B7A'};
const note=v=>`<span style="display:inline-grid;place-items:center;width:64px;height:34px;border-radius:5px;background:${NOTE_C[v]};color:#fff;font-family:var(--display);font-weight:800;margin:2px">${v}</span>`;
const PAIRS=[[200,100],[200,50],[100,50],[100,10],[50,10],[50,5],[10,5],[10,1],[5,1],[100,5]];
const ITEMS=[{en:'Exercise book',am:'ደብተር',p:25},{en:'Pen',am:'እስክሪብቶ',p:15},{en:'Bread',am:'ዳቦ',p:10},{en:'Soap',am:'ሳሙና',p:45},{en:'Milk (1 L)',am:'ወተት (1 ሊ)',p:60},{en:'Banana (1 kg)',am:'ሙዝ (1 ኪ.ግ)',p:35}];
Unit.start({
 id:'math-11',subject:'math',subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 11',am:'ምዕራፍ 11'},
 title:{en:'Money',am:'ገንዘብ'},
 footer:{en:'Built on the Grade 3 Mathematics student book, Chapter 11: birr and santim.',am:'በ3ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 11 ላይ የተመሰረተ፦ ብርና ሳንቲም።'},
 missions:[
 {title:{en:'Changing money',am:'ገንዘብ መዘርዘር'},type:'drill',need:6,
  tip:{en:'Money can be changed into smaller amounts. 1 hundred-birr = 2 fifty-birr = 10 ten-birr.',am:'ገንዘብ ወደ ትናንሽ ሊዘረዘር ይችላል። 1 ባለ መቶ ብር = 2 ባለ ሃምሳ ብር = 10 ባለ አስር ብር።'},
  gen(){const [a,b]=PAIRS[rnd(0,PAIRS.length-1)];const ans=a/b;return{fig:note(a),q:{en:`How many ${b}-birr make ${a} birr?`,am:`${a} ብር ስንት ባለ ${b} ብር ይሆናል?`},...numOpts(ans,[1,-1,2,ans]),e:`${Array(Math.min(ans,10)).fill(b).join(' + ')}${ans>10?' + …':''} = ${a}`}}},
 {title:{en:'Birr and santim',am:'ብርና ሳንቲም'},type:'drill',need:6,
  tip:{en:'1 birr = 100 santim. 1 birr = 2 fifty-santim = 4 twenty-five-santim. 4 birr 25 santim = 425 santim.',am:'1 ብር = 100 ሳንቲም። 1 ብር = 2 ባለ ሃምሳ ሳንቲም = 4 ባለ ሃያ አምስት ሳንቲም። 4 ብር ከ25 ሳንቲም = 425 ሳንቲም።'},
  gen(){const k=rnd(0,2);if(k===0){const b=rnd(1,9),s=[5,10,25,50,75][rnd(0,4)];const ans=b*100+s;return{q:{en:`${b} birr ${s} santim = ? santim`,am:`${b} ብር ከ${s} ሳንቲም = ? ሳንቲም`},...numOpts(ans,[-100,100,s*9,b*90]),e:`${b} × 100 + ${s} = ${ans}`}}
   const pairs=[[100,50,2],[100,25,4],[50,25,2],[10,5,2],[5,1,5],[100,10,10]];const [a,c,ans]=pairs[rnd(0,pairs.length-1)];const lab=v=>v===100?{en:'1 birr',am:'1 ብር'}:{en:v+' santim',am:v+' ሳንቲም'};
   return{q:{en:`How many ${c}-santim coins make ${tx(lab(a))}?`,am:`${tx(lab(a))} ስንት ባለ ${c} ሳንቲም ይሆናል?`},...numOpts(ans,[1,-1,2,3])}}},
 {title:{en:'Shopping and change',am:'ግብይትና መልስ'},type:'custom',
  tip:{en:'Add the prices to find the total. Pay with a note, then subtract to find the change. Smart shoppers estimate first!',am:'ዋጋዎቹን ደምራችሁ ድምሩን ፈልጉ። በኖት ክፈሉ፤ ከዚያ መልሱን ለማግኘት ቀንሱ። ብልህ ገዢዎች መጀመሪያ ይገምታሉ!'},
  init(st){this.newQ(st);st.done=0},
  newQ(st){const pick=shuffle(ITEMS).slice(0,rnd(2,3));const tot=pick.reduce((a,x)=>a+x.p,0);const pay=[100,200][tot>100?1:0];st.pick=pick;st.tot=tot;st.pay=pay;st.step=0;st.msg='';st.cls='';
   const mk=a=>{const o=numOpts(a,[5,-5,10,-10]);return o};st.o1=mk(tot);st.o2=mk(pay-tot)},
  render(p,api,st){const o=st.step===0?st.o1:st.o2;
   p.innerHTML=`<div class="passage">${st.pick.map(x=>`<p style="display:flex;justify-content:space-between;margin:0"><span>${esc(tx(x))}</span><b class="num">${x.p} ${tx({en:'birr',am:'ብር'})}</b></p>`).join('')}</div>
    ${st.step>0?`<div class="explain">${tx({en:'Total',am:'ድምር'})}: <b>${st.tot} ${tx({en:'birr',am:'ብር'})}</b>. ${tx({en:'You pay with',am:'የከፈላችሁት'})} ${note(st.pay)}</div>`:''}
    <div class="q"><span class="qt">${st.step===0?tx({en:'What is the total?',am:'ድምሩ ስንት ነው?'}):st.step===1?tx({en:'How much change do you get?',am:'ስንት መልስ ታገኛላችሁ?'}):tx(api.UI.good)}</span></div>
    ${st.step<2?`<div class="opts">${o.o.map((v,j)=>`<button class="opt" data-j="${j}">${v} ${tx({en:'birr',am:'ብር'})}</button>`).join('')}</div>`:`<div class="explain">${st.pay} − ${st.tot} = ${st.pay-st.tot} ${tx({en:'birr change',am:'ብር መልስ'})}</div><div><button class="btn primary" data-act="next">${tx(api.UI.next)}</button></div>`}
    <div class="feedback ${st.cls}">${st.msg}</div><div class="progress">${tx({en:'Customers served: {n}/4',am:'የተስተናገዱ ደንበኞች፦ {n}/4'},{n:st.done})}</div>`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b)return;
    if(b.dataset.j!==undefined){if(+b.dataset.j===o.a){st.step++;st.msg='';api.S.yay();if(st.step===2){st.done++;if(st.done>=4)api.complete()}}else{st.cls='bad';st.msg=tx(api.UI.bad);api.S.nope()}}
    if(b.dataset.act==='next')this.newQ(st);
    api.rerender()}}},
 {title:{en:'Compare and decide',am:'ማወዳደርና መወሰን'},type:'quiz',
  tip:{en:'Compare amounts carefully. Change everything to the same unit (birr or santim) first.',am:'መጠኖችን በጥንቃቄ አወዳድሩ። መጀመሪያ ሁሉንም ወደ አንድ አሃድ (ብር ወይም ሳንቲም) ቀይሩ።'},
  items:[
   {q:{en:'Which is more: 3 birr 50 santim or 340 santim?',am:'የቱ ይበልጣል፦ 3 ብር ከ50 ሳንቲም ወይስ 340 ሳንቲም?'},o:[{en:'3 birr 50 santim',am:'3 ብር ከ50 ሳንቲም'},{en:'340 santim',am:'340 ሳንቲም'},{en:'Equal',am:'እኩል'}],a:0,e:'350 > 340'},
   {q:{en:'Shop A sells a pen for 15 birr. Shop B sells 2 pens for 25 birr. You need 2 pens. Which is cheaper?',am:'ሱቅ ሀ እስክሪብቶ በ15 ብር ይሸጣል። ሱቅ ለ 2 እስክሪብቶ በ25 ብር ይሸጣል። 2 እስክሪብቶ ያስፈልጋችኋል። የቱ ይረክሳል?'},o:[{en:'Shop A (30 birr)',am:'ሱቅ ሀ (30 ብር)'},{en:'Shop B (25 birr)',am:'ሱቅ ለ (25 ብር)'}],a:1,e:{en:'You save 5 birr at Shop B. Comparing prices is a money skill!',am:'በሱቅ ለ 5 ብር ትቆጥባላችሁ። ዋጋ ማወዳደር የገንዘብ ክህሎት ነው!'}},
   {q:{en:'Abebech saved 42 birr. A ball costs 300 birr. How much more does she need?',am:'አበበች 42 ብር አጠራቀመች። ኳስ 300 ብር ነው። ተጨማሪ ስንት ያስፈልጋታል?'},o:['258','342','268','248'],a:0},
   {q:{en:'You have 200 birr. You want items costing 99, 59 and 47 birr. Is it enough?',am:'200 ብር አላችሁ። 99፣ 59 እና 47 ብር የሚያወጡ ዕቃዎችን ትፈልጋላችሁ። በቂ ነው?'},o:[{en:'No, the total is 205',am:'አይደለም፤ ድምሩ 205 ነው'},{en:'Yes, with change',am:'አዎ፤ መልስም አለ'}],a:0,e:'99 + 59 + 47 = 205 > 200'}
  ]},
 {type:'exam',items:[
   {q:{en:'1 two-hundred-birr = ? fifty-birr',am:'1 ባለ ሁለት መቶ ብር = ? ባለ ሃምሳ ብር'},o:['4','2','5','10'],a:0},
   {q:{en:'1 birr = ? santim',am:'1 ብር = ? ሳንቲም'},o:['100','10','50','1,000'],a:0},
   {q:{en:'2 birr 5 santim = ? santim',am:'2 ብር ከ5 ሳንቲም = ? ሳንቲም'},o:['205','250','25','2,005'],a:0},
   {q:{en:'You buy bread for 35 birr and pay 50. Change?',am:'ዳቦ በ35 ብር ገዝታችሁ 50 ከፈላችሁ። መልስ?'},o:['15','25','85','5'],a:0}]},
 {type:'notes',notes:{
  big:{en:'Money is counted in birr and santim. Smart money skills: change, add totals, give change, compare prices and save.',am:'ገንዘብ በብርና በሳንቲም ይቆጠራል። ብልህ የገንዘብ ክህሎቶች፦ መዘርዘር፣ ድምር ማስላት፣ መልስ መስጠት፣ ዋጋ ማወዳደርና መቆጠብ።'},
  points:[{en:'1 birr = 100 santim.',am:'1 ብር = 100 ሳንቲም።'},{en:'200 = 2 × 100; 100 = 2 × 50; 50 = 5 × 10; 10 = 2 × 5; 5 = 5 × 1.',am:'200 = 2 × 100፤ 100 = 2 × 50፤ 50 = 5 × 10፤ 10 = 2 × 5፤ 5 = 5 × 1።'},{en:'Coins: 1 birr = 2 × 50 santim = 4 × 25 santim.',am:'ሳንቲሞች፦ 1 ብር = 2 × 50 ሳንቲም = 4 × 25 ሳንቲም።'},{en:'Change = money paid − total price.',am:'መልስ = የተከፈለው ገንዘብ − ጠቅላላ ዋጋ።'}],
  words:[['መዘርዘር',{en:'changing into smaller money',am:'ገንዘብን ወደ ትናንሽ መቀየር'}],['መልስ',{en:'change',am:'ከተከፈለው የሚመለሰው'}],['ቁጠባ',{en:'saving',am:'ገንዘብን ለወደፊት ማስቀመጥ'}]],
  remember:{en:'Before buying: Do I need it? Is there a cheaper price? Do I have enough?',am:'ከመግዛት በፊት፦ ያስፈልገኛል? የሚረክስ ቦታ አለ? በቂ ገንዘብ አለኝ?'},
  exam:[[{en:'How many 10-birr in 200 birr?',am:'200 ብር ስንት ባለ 10 ብር ነው?'},'20'],[{en:'5 birr 50 santim = ? santim',am:'5 ብር ከ50 ሳንቲም = ? ሳንቲም'},'550'],[{en:'Total 78 birr, paid 100. Change?',am:'ድምር 78 ብር፣ የተከፈለ 100። መልስ?'},{en:'22 birr',am:'22 ብር'}]],
  innovate:{title:{en:'Class savings bank',am:'የክፍል ቁጠባ ባንክ'},text:{en:'Like Ethiopian equb groups, saving together helps people reach big goals. Design a class savings bank.',am:'እንደ ዕቁብ፣ በጋራ መቆጠብ ሰዎች ትልቅ ግብ እንዲደርሱ ይረዳል። የክፍል ቁጠባ ባንክ ንድፍ አውጡ።'},
   steps:[{en:'Choose a class goal (e.g. a football: 300 birr).',am:'የክፍል ግብ ምረጡ (ለምሳሌ ኳስ፦ 300 ብር)።'},{en:'If 30 students save 1 birr a week, how many weeks to reach it?',am:'30 ተማሪዎች በሳምንት 1 ብር ቢቆጥቡ ግቡ ላይ ለመድረስ ስንት ሳምንት?'},{en:'Keep a record book: date, money in, total.',am:'የመዝገብ ደብተር ያዙ፦ ቀን፣ የገባ ገንዘብ፣ ድምር።'},{en:'Who keeps the money safe? Make rules everyone agrees on.',am:'ገንዘቡን በደህና የሚይዘው ማን ነው? ሁሉም የሚስማማበትን ሕግ አውጡ።'}]}}}
 ]});
})();
