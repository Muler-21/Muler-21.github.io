/* ሒሳብ · ምዕራፍ 2 · እስከ 10,000 ያሉ ቁጥሮችን መደመርና መቀነስ */
(function(){
const {tx,esc,rnd,shuffle}=G3;
const fmt=n=>n.toLocaleString('en-US');
const PLC=['th','hu','te','on'];
const PCOL={th:'var(--blue)',hu:'var(--green)',te:'var(--sun)',on:'var(--clay)'};
const PNAME={th:{en:'thousands',am:'ሺህዎች'},hu:{en:'hundreds',am:'መቶዎች'},te:{en:'tens',am:'አስሮች'},on:{en:'ones',am:'አንዶች'}};
const digits=n=>String(n).padStart(4,'0').split('').map(Number);
const keypad=dis=>`<div style="display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px;max-width:340px">${[1,2,3,4,5,6,7,8,9,0].map(d=>`<button class="btn" data-d="${d}" ${dis?'disabled':''} style="font-size:1.4rem;padding:8px 0">${d}</button>`).join('')}</div>`;

/* ---- column addition / subtraction engine (shared) ---- */
function genAdd(){let a,b;do{a=rnd(1000,8999);b=rnd(100,9999-a)}while(b<100||digits(a).every((x,i)=>x+digits(b)[i]<10));return{a,b,op:'+'}}
function genSub(){let a,b,da,db;do{da=[rnd(2,9),rnd(1,9),rnd(1,9),rnd(1,9)];a=+da.join('');b=rnd(100,a-100);db=digits(b)}while(!da.some((x,i)=>i>0&&x<db[i]));return{a,b,op:'-'}}
function colInit(st,gen){st.p=gen();st.col=3;st.out=[null,null,null,null];st.carry=[0,0,0,0];st.top=digits(st.p.a);st.borrowed=[false,false,false,false];st.msg='';st.cls='';st.done=false}
function colRender(p,api,st,gen,need){const P=st.p,bot=digits(P.b),add=P.op==='+';
 const cell=(v,i,extra='')=>`<td style="width:58px;height:56px;text-align:center;font-family:var(--display);font-weight:800;font-size:2rem;color:${PCOL[PLC[i]]};${i===st.col&&!st.done?'background:var(--accent-soft);border-radius:10px;':''}${extra}">${v}</td>`;
 const topRow=st.top.map((d,i)=>{const orig=digits(P.a)[i];const changed=d!==orig;return cell(changed?`<span style="font-size:1rem;text-decoration:line-through;opacity:.5">${orig}</span><br><span style="font-size:1.4rem">${d}</span>`:(i===0&&P.a<1000?'':d),i)}).join('');
 const carryRow=st.carry.map((c,i)=>`<td style="height:22px;text-align:center;font-family:var(--display);font-weight:800;color:var(--accent)">${c?'1':''}</td>`).join('');
 const botRow=bot.map((d,i)=>cell(P.b<Math.pow(10,3-i)&&d===0&&i<3?'':d,i)).join('');
 const outRow=st.out.map((d,i)=>cell(d===null?'':d,i,'border-top:4px solid var(--ink);')).join('');
 const k=PLC[st.col];const needReg=!add&&!st.done&&st.top[st.col]<bot[st.col];
 p.innerHTML=`<div class="row" style="align-items:flex-start;gap:24px">
  <div class="scroll"><table style="border-collapse:separate;border-spacing:4px"><tr><td></td>${PLC.map(c=>`<th style="font-family:var(--display);font-size:.78rem;color:${PCOL[c]}">${esc(tx(PNAME[c]))}</th>`).join('')}</tr>
   ${add?`<tr><td></td>${carryRow}</tr>`:''}<tr><td></td>${topRow}</tr><tr><td class="big" style="text-align:right">${P.op}</td>${botRow}</tr><tr><td></td>${outRow}</tr></table></div>
  <div style="display:grid;gap:10px;flex:1 1 260px;min-width:0">
   ${st.done?'':`<div class="q"><span class="qt">${esc(tx(add?{en:`Add the ${tx(PNAME[k])}. Tap the answer digit.`,am:`${tx(PNAME[k])}ን ደምሩ። የመልሱን ሆሄ ንኩ።`}:{en:`Subtract the ${tx(PNAME[k])}.`,am:`${tx(PNAME[k])}ን ቀንሱ።`}))}</span></div>`}
   ${!add&&!st.done?`<div><button class="btn" data-act="reg" style="border-color:var(--sun)">${tx({en:'Regroup: borrow 1 from the next house',am:'እንደገና አቧድኑ፦ ከቀጣዩ ቤት 1 ተበደሩ'})}</button></div>`:''}
   ${keypad(st.done)}
   <div class="feedback ${st.cls}" aria-live="polite">${st.msg}</div>
   ${st.done?`<div class="explain">${tx({en:'Check it the other way:',am:'በተቃራኒው አረጋግጡ፦'})} <b class="num">${add?`${fmt(P.a+P.b)} − ${fmt(P.b)} = ${fmt(P.a)}`:`${fmt(P.a-P.b)} + ${fmt(P.b)} = ${fmt(P.a)}`}</b></div><div><button class="btn primary" data-act="next">${tx(api.UI.next)}</button></div>`:''}
   <div class="progress">${tx({en:'Solved: {n}/{m}',am:'የተፈቱ፦ {n}/{m}'},{n:st.solved||0,m:need})}</div></div></div>`;
 p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
  if(b.dataset.act==='next'){colInit(st,gen);api.rerender();return}
  if(b.dataset.act==='reg'){const i=st.col;if(i===0||st.top[i]>=bot[i]){st.msg=tx({en:'No need to regroup here: the top digit is big enough.',am:'እዚህ ማቧደን አያስፈልግም፦ የላይኛው ሆሄ በቂ ነው።'});st.cls='bad';api.S.nope()}
   else if(st.top[i-1]===0){st.msg=tx({en:'The next house is empty. Ask your teacher about regrouping across zeros!',am:'ቀጣዩ ቤት ባዶ ነው። በዜሮ በኩል ስለማቧደን መምህራችሁን ጠይቁ!'});st.cls='bad'}
   else{st.top[i-1]--;st.top[i]+=10;st.msg=tx({en:'1 {a} became 10 {b}. Now subtract!',am:'1 {a} 10 {b} ሆነ። አሁን ቀንሱ!'}).replace('{a}',tx(PNAME[PLC[i-1]])).replace('{b}',tx(PNAME[PLC[i]]));st.cls='good';api.S.tick()}
   api.rerender();return}
  if(b.dataset.d!==undefined){const d=+b.dataset.d,i=st.col;
   if(!add&&st.top[i]<bot[i]){st.msg=tx({en:'The top digit is smaller. Regroup first!',am:'የላይኛው ሆሄ ያንሳል። መጀመሪያ አቧድኑ!'});st.cls='bad';api.S.nope();api.rerender();return}
   const s=add?st.top[i]+bot[i]+st.carry[i]:st.top[i]-bot[i];const want=add?s%10:s;
   if(d===want){st.out[i]=d;api.S.tick();
    if(add&&s>=10&&i>0){st.carry[i-1]=1;st.msg=tx({en:'{s} {a} = 1 {b} and {r} {a}. Carry the 1!',am:'{s} {a} = 1 {b} እና {r} {a}። 1ን ወደ ቀጣዩ ቤት ውሰዱ!'}).replace('{s}',s).replace(/\{a\}/g,tx(PNAME[PLC[i]])).replace('{b}',tx(PNAME[PLC[i-1]])).replace('{r}',s%10);st.cls='good'}
    else{st.msg='';st.cls=''}
    st.col--;
    if(st.col<0){st.done=true;st.solved=(st.solved||0)+1;st.msg=tx(api.UI.good)+' '+fmt(add?P.a+P.b:P.a-P.b);st.cls='good';api.S.yay();if(st.solved>=need)api.complete()}}
   else{st.msg=tx(add?{en:'Not yet. Add the two digits and any carried 1.',am:'ገና ነው። ሁለቱን ሆሄያትና የመጣውን 1 ደምሩ።'}:{en:'Not yet. Top digit minus bottom digit.',am:'ገና ነው። የላይኛው ሆሄ ሲቀነስ የታችኛው።'});st.cls='bad';api.S.nope()}
   api.rerender()}}}

/* ---- number pyramid ---- */
function pyrInit(st){const base=Array.from({length:4},()=>rnd(1,9)*100+(Math.random()<.5?rnd(1,9)*10:0));st.rows=[base];for(let r=1;r<4;r++){const prev=st.rows[r-1];st.rows.push(prev.slice(1).map((v,i)=>v+prev[i]))}st.vals={};st.msg='';st.cls='';st.ok=false}

Unit.start({
 id:'math-2',subject:'math',
 subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 2',am:'ምዕራፍ 2'},
 title:{en:'Adding and Subtracting',am:'መደመርና መቀነስ'},
 footer:{en:'Built on the Grade 3 Mathematics student book, Chapter 2: adding and subtracting numbers up to 10,000.',am:'በ3ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 2 ላይ የተመሰረተ፦ እስከ 10,000 ያሉ ቁጥሮችን መደመርና መቀነስ።'},
 missions:[
 {title:{en:'Mental maths',am:'በቃል ማስላት'},type:'quiz',shuffle:true,
  tip:{en:'Big round numbers are easy! 1,400 + 1,200 is just 14 hundreds + 12 hundreds = 26 hundreds. Think in hundreds and thousands.',am:'ትልልቅ ሙሉ ቁጥሮች ቀላል ናቸው! 1,400 + 1,200 ማለት 14 መቶዎች + 12 መቶዎች = 26 መቶዎች ነው። በመቶዎችና በሺህዎች አስቡ።'},
  items:[
   {q:'1,400 + 1,200 = ?',o:['2,600','2,400','1,600','26,000'],a:0,e:{en:'14 hundreds + 12 hundreds = 26 hundreds = 2,600',am:'14 መቶዎች + 12 መቶዎች = 26 መቶዎች = 2,600'}},
   {q:'2,300 + 3,700 = ?',o:['5,000','6,000','5,100','6,100'],a:1,e:{en:'300 + 700 = 1,000, and 2,000 + 3,000 = 5,000. Together 6,000.',am:'300 + 700 = 1,000፤ 2,000 + 3,000 = 5,000። በአንድ ላይ 6,000።'}},
   {q:'6,500 − 2,000 = ?',o:['4,500','6,300','4,000','8,500'],a:0,e:{en:'Only the thousands change: 6 − 2 = 4 thousands.',am:'የሚለወጡት ሺህዎቹ ብቻ ናቸው፦ 6 − 2 = 4 ሺህ።'}},
   {q:'7,200 − 1,800 = ?',o:['6,600','5,400','5,600','6,400'],a:1,e:{en:'72 hundreds − 18 hundreds = 54 hundreds = 5,400',am:'72 መቶዎች − 18 መቶዎች = 54 መቶዎች = 5,400'}},
   {q:'3,500 + 900 = ?',o:['3,400','4,500','4,400','12,500'],a:2,e:{en:'3,500 + 500 = 4,000, then + 400 = 4,400',am:'3,500 + 500 = 4,000፣ ከዚያ + 400 = 4,400'}},
   {q:'1,500 − 700 = ?',o:['800','1,200','700','900'],a:0,e:{en:'15 hundreds − 7 hundreds = 8 hundreds',am:'15 መቶዎች − 7 መቶዎች = 8 መቶዎች'}},
   {q:'6,000 + ? = 9,000',o:['2,000','3,000','15,000','300'],a:1,e:{en:'Think: 6 + ? = 9 → 3. So 3,000.',am:'አስቡ፦ 6 + ? = 9 → 3። ስለዚህ 3,000።'}}
  ]},
 {title:{en:'Column addition',am:'በቁልቁል መደመር'},type:'custom',
  tip:{en:'Always start with the ones. If a house gets 10 or more, keep the ones digit and carry 1 to the next house, just like trading 10 ones for 1 ten.',am:'ሁልጊዜ ከአንዶች ጀምሩ። አንድ ቤት 10 ወይም ከዚያ በላይ ሲሆን የአንድን ቤት ሆሄ አስቀምጡና 1ን ወደ ቀጣዩ ቤት ውሰዱ፤ ልክ 10 አንዶችን በ1 አስር እንደመቀየር።'},
  init(st){colInit(st,genAdd);st.solved=0},render(p,api,st){colRender(p,api,st,genAdd,4)}},
 {title:{en:'Column subtraction',am:'በቁልቁል መቀነስ'},type:'custom',
  tip:{en:'Start with the ones. If the top digit is smaller, regroup: borrow 1 from the next house. It becomes 10 in this house. Then check by adding!',am:'ከአንዶች ጀምሩ። የላይኛው ሆሄ ካነሰ አቧድኑ፦ ከቀጣዩ ቤት 1 ተበደሩ። በዚህ ቤት 10 ይሆናል። ከዚያ በመደመር አረጋግጡ!'},
  init(st){colInit(st,genSub);st.solved=0},render(p,api,st){colRender(p,api,st,genSub,4)}},
 {title:{en:'Estimate first',am:'መጀመሪያ ገምቱ'},type:'quiz',
  tip:{en:'Clever mathematicians estimate before they calculate. Round each number, add or subtract in your head, then you know if an answer is sensible.',am:'ብልህ የሒሳብ ሰዎች ከማስላታቸው በፊት ይገምታሉ። እያንዳንዱን ቁጥር አጠጋጉ፣ በአእምሯችሁ ደምሩ ወይም ቀንሱ፤ ከዚያ መልሱ ትክክል መሆኑን ታውቃላችሁ።'},
  items:[
   {q:{en:'Estimate 6,543 + 2,898 (round to thousands).',am:'6,543 + 2,898ን ገምቱ (ወደ ሺህ አጠጋጉ)።'},o:['8,000','9,000','10,000','11,000'],a:2,e:'7,000 + 3,000 = 10,000'},
   {q:{en:'Estimate 725 − 428 (round to hundreds).',am:'725 − 428ን ገምቱ (ወደ መቶ አጠጋጉ)።'},o:['200','300','400','1,100'],a:1,e:'700 − 400 = 300'},
   {q:{en:'Zeyneb wrote 5,896 + 420 = 10,096. Use an estimate: is she right?',am:'ዘይነብ 5,896 + 420 = 10,096 ብላ ጻፈች። በግምት አረጋግጡ፦ ትክክል ናት?'},o:[{en:'Yes, it looks right',am:'አዎ፣ ትክክል ይመስላል'},{en:'No. About 6,000 + 400 = 6,400, so 10,096 is far too big',am:'አይደለም። በግምት 6,000 + 400 = 6,400 ነው፤ 10,096 በጣም ትልቅ ነው'}],a:1,e:{en:'She lined up the digits wrongly. The real answer is 6,316.',am:'ሆሄያቱን በተሳሳተ ቤት አስቀምጣለች። ትክክለኛው መልስ 6,316 ነው።'}},
   {q:{en:'Estimate 8,974 − 6,347 (round to thousands).',am:'8,974 − 6,347ን ገምቱ (ወደ ሺህ አጠጋጉ)።'},o:['2,000','3,000','4,000','15,000'],a:1,e:'9,000 − 6,000 = 3,000'},
   {q:{en:'Which answer to 4,089 + 1,925 makes sense?',am:'ለ4,089 + 1,925 ትክክል የሚመስለው መልስ የትኛው ነው?'},o:['6,014','5,904','60,014','2,164'],a:0,e:{en:'Estimate: 4,000 + 2,000 = 6,000. Only 6,014 is close.',am:'ግምት፦ 4,000 + 2,000 = 6,000። ቅርብ የሆነው 6,014 ብቻ ነው።'}}
  ]},
 {title:{en:'Smart strategies',am:'ብልህ ስልቶች'},type:'quiz',
  tip:{en:'You do not always need columns! Split a number to make a friendly ten, hundred or thousand. Or round up, then fix the extra.',am:'ሁልጊዜ በቁልቁል ማስላት አያስፈልግም! ቁጥርን ከፋፍላችሁ ሙሉ አስር፣ መቶ ወይም ሺህ አድርጉ። ወይም አጠጋግታችሁ ትርፉን አስተካክሉ።'},
  items:[
   {q:{en:'5,042 + 2,970. Add 3,000 instead of 2,970. Then what must you do?',am:'5,042 + 2,970። በ2,970 ፋንታ 3,000 ደምሩ። ከዚያ ምን ማድረግ አለባችሁ?'},o:[{en:'Subtract 30',am:'30 መቀነስ'},{en:'Add 30',am:'30 መደመር'},{en:'Subtract 300',am:'300 መቀነስ'},{en:'Nothing',am:'ምንም'}],a:0,e:{en:'You added 30 too many, so take 30 away: 8,042 − 30 = 8,012.',am:'30 በትርፍ ደምራችኋል፤ ስለዚህ 30 ቀንሱ፦ 8,042 − 30 = 8,012።'}},
   {q:{en:'2,087 + 1,216. Split 1,216 into 13 + ? so that 2,087 + 13 = 2,100.',am:'2,087 + 1,216። 2,087 + 13 = 2,100 እንዲሆን 1,216ን 13 + ? ብላችሁ ከፋፍሉ።'},o:['1,203','1,229','1,103','1,213'],a:0,e:'2,100 + 1,203 = 3,303'},
   {q:{en:'3,200 − 1,750 by counting up: 1,750 → 1,800 → 2,000 → 3,200. How big are all the jumps together?',am:'3,200 − 1,750ን ወደፊት በመቁጠር፦ 1,750 → 1,800 → 2,000 → 3,200። ዝላዮቹ በአንድ ላይ ስንት ናቸው?'},o:['1,450','1,550','1,350','2,450'],a:0,e:'50 + 200 + 1,200 = 1,450'},
   {q:{en:'4,542 − 1,810. Subtract 2,000 instead. What do you add back?',am:'4,542 − 1,810። በፋንታው 2,000 ቀንሱ። መልሳችሁ የምትደምሩት ስንት ነው?'},o:['190','210','1,810','10'],a:0,e:{en:'2,000 is 190 more than 1,810. 2,542 + 190 = 2,732.',am:'2,000 ከ1,810 በ190 ይበልጣል። 2,542 + 190 = 2,732።'}},
   {q:'45 + 66 + 74 = ?',o:['175','185','195','1,115'],a:1,e:{en:'Ones: 5 + 6 + 4 = 15 → write 5, carry 1. Tens: 1 + 4 + 6 + 7 = 18. Answer 185.',am:'አንዶች፦ 5 + 6 + 4 = 15 → 5 ጻፉ፣ 1 ውሰዱ። አስሮች፦ 1 + 4 + 6 + 7 = 18። መልሱ 185።'}}
  ]},
 {title:{en:'Number pyramid',am:'የቁጥር ፒራሚድ'},type:'custom',
  tip:{en:'Each brick is the sum of the two bricks under it. Fill the pyramid from the bottom to the top!',am:'እያንዳንዱ ጡብ ከሥሩ ያሉት የሁለቱ ጡቦች ድምር ነው። ፒራሚዱን ከታች ወደ ላይ ሙሉ!'},
  init(st){pyrInit(st);st.done=0},
  render(p,api,st){const R=st.rows;
   p.innerHTML=`<div style="display:grid;gap:6px;justify-items:center">${[3,2,1,0].map(r=>`<div style="display:flex;gap:6px">${R[r].map((v,i)=>r===0?`<span class="tile num" style="min-width:78px;text-align:center;background:var(--sun-soft)">${fmt(v)}</span>`
     :`<input id="py-${r}-${i}" inputmode="numeric" aria-label="row ${r} brick ${i}" value="${st.vals[r+'-'+i]??''}" style="width:86px;text-align:center;font:inherit;font-family:var(--display);font-weight:800;font-size:1.15rem;padding:8px 4px;border-radius:12px;border:2px solid ${st.ok?'var(--good)':'var(--line)'};background:var(--surface);color:var(--ink)">`).join('')}</div>`).join('')}</div>
    <div class="row center"><button class="btn primary" data-act="check" ${st.ok?'disabled':''}>${tx(api.UI.check)}</button>${st.ok?`<button class="btn" data-act="new">${tx({en:'New pyramid',am:'አዲስ ፒራሚድ'})}</button>`:''}</div>
    <div class="feedback center ${st.cls}">${st.msg}</div><div class="progress center">${tx({en:'Pyramids built: {n}/2',am:'የተገነቡ ፒራሚዶች፦ {n}/2'},{n:st.done})}</div>`;
   p.querySelectorAll('input').forEach(inp=>inp.oninput=()=>{st.vals[inp.id.slice(3)]=inp.value.replace(/[^0-9]/g,'')});
   p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
    if(b.dataset.act==='new'){pyrInit(st);api.rerender();return}
    let wrong=0;for(let r=1;r<4;r++)R[r].forEach((v,i)=>{if(+(st.vals[r+'-'+i]||-1)!==v)wrong++});
    if(!wrong){st.ok=true;st.done++;st.msg=tx(api.UI.good);st.cls='good';api.S.yay();if(st.done>=2)api.complete()}
    else{st.msg=tx({en:'{n} bricks are not right yet. Add the two bricks under each one.',am:'{n} ጡቦች ገና ትክክል አይደሉም። ከሥሩ ያሉትን ሁለት ጡቦች ደምሩ።'}).replace('{n}',wrong);st.cls='bad';api.S.nope()}
    api.rerender()}}},
 {title:{en:'Word problems',am:'የቃላት ፕሮብሌሞች'},type:'quiz',
  tip:{en:'Read slowly. Ask: are things being put together (add) or taken away / compared (subtract)? Estimate, then solve.',am:'በቀስታ አንብቡ። ራሳችሁን ጠይቁ፦ ነገሮች እየተሰበሰቡ ነው (መደመር) ወይስ እየተቀነሱ/እየተወዳደሩ ነው (መቀነስ)? ገምቱ፣ ከዚያ ፍቱ።'},
  items:[
   {q:{en:'A school planned to plant 850 seedlings. They planted 476. How many are still to plant?',am:'አንድ ትምህርት ቤት 850 ችግኞችን ለመትከል አቀደ። 476 ተከለ። ገና ያልተተከሉ ስንት ናቸው?'},o:['374','484','1,326','426'],a:0,e:'850 − 476 = 374'},
   {q:{en:'Three women saved 1,252, 1,189 and 2,745 birr. How much did they save together?',am:'ሦስት ሴቶች 1,252፣ 1,189 እና 2,745 ብር ቆጠቡ። በአንድ ላይ ስንት ብር ቆጠቡ?'},o:['5,186','4,186','5,086','3,941'],a:0,e:'1,252 + 1,189 + 2,745 = 5,186'},
   {q:{en:'Kedija has 1,641 sheep. Feleke has 998. How many more sheep does Kedija have?',am:'ከድጃ 1,641 በጎች አሏት። ፈለቀ 998 አሉት። ከድጃ ስንት በጎች ትበልጣለች?'},o:['643','743','2,639','653'],a:0,e:'1,641 − 998 = 643. Trick: 1,641 − 1,000 + 2'},
   {q:{en:'Azalech has 8,974 birr. How much more does she need to have 10,000 birr?',am:'አዛለች 8,974 ብር አላት። 10,000 ብር እንዲሆንላት ስንት ተጨማሪ ብር ያስፈልጋታል?'},o:['1,026','1,126','2,026','1,036'],a:0,e:{en:'Count up: 8,974 → 9,000 is 26, then 9,000 → 10,000 is 1,000.',am:'ወደፊት ቁጠሩ፦ 8,974 → 9,000 26 ነው፤ 9,000 → 10,000 ደግሞ 1,000።'}},
   {q:{en:'A play was watched by 650 students on Friday and 893 on Saturday. How many in total?',am:'አንድ ድራማ ዓርብ 650፣ ቅዳሜ 893 ተማሪዎች ተመለከቱት። በአጠቃላይ ስንት ናቸው?'},o:['1,543','1,443','243','1,533'],a:0,e:'650 + 893 = 1,543'},
   {q:{en:'A student was asked to write 8,406 but wrote 8,604. How much bigger is his number?',am:'አንድ ተማሪ 8,406 እንዲጽፍ ተጠይቆ 8,604 ጻፈ። የጻፈው ቁጥር በስንት ይበልጣል?'},o:['198','202','200','298'],a:0,e:'8,604 − 8,406 = 198'}
  ]},
 {title:{en:'Always, sometimes, never',am:'ሁልጊዜ፣ አንዳንድ ጊዜ፣ በፍፁም'},type:'sort',
  tip:{en:'Real mathematicians test ideas with examples. Try some numbers in your head, then decide: is it always true, sometimes true, or never true?',am:'እውነተኛ የሒሳብ ሰዎች ሐሳቦችን በምሳሌ ይፈትሻሉ። በአእምሯችሁ ጥቂት ቁጥሮችን ሞክሩ፤ ከዚያ ወስኑ፦ ሁልጊዜ እውነት ነው፣ አንዳንድ ጊዜ፣ ወይስ በፍፁም?'},
  buckets:[{en:'Always',am:'ሁልጊዜ'},{en:'Sometimes',am:'አንዳንድ ጊዜ'},{en:'Never',am:'በፍፁም'}],
  items:[
   {t:{en:'Two 3-digit numbers add up to a 3-digit number.',am:'የሁለት ባለ 3 ሆሄ ቁጥሮች ድምር ባለ 3 ሆሄ ነው።'},b:1,short:{en:'3+3 → 3 digits',am:'3+3 → 3'},why:{en:'100 + 200 = 300 (yes), but 600 + 700 = 1,300 (no).',am:'100 + 200 = 300 (አዎ)፣ 600 + 700 = 1,300 ግን (አይደለም)።'}},
   {t:{en:'Two 3-digit numbers add up to a 4-digit number.',am:'የሁለት ባለ 3 ሆሄ ቁጥሮች ድምር ባለ 4 ሆሄ ነው።'},b:1,short:{en:'3+3 → 4 digits',am:'3+3 → 4'}},
   {t:{en:'The difference of two 3-digit numbers is a 4-digit number.',am:'የሁለት ባለ 3 ሆሄ ቁጥሮች ልዩነት ባለ 4 ሆሄ ነው።'},b:2,short:{en:'3−3 → 4 digits',am:'3−3 → 4'},why:{en:'The biggest is 999 − 100 = 899. That is still 3 digits.',am:'ትልቁ 999 − 100 = 899 ነው። አሁንም ባለ 3 ሆሄ ነው።'}},
   {t:{en:'Adding 0 to a number leaves it the same.',am:'ቁጥር ላይ 0 ሲደመር ቁጥሩ አይለወጥም።'},b:0,short:{en:'+ 0',am:'+ 0'}},
   {t:{en:'The sum is smaller than one of the numbers we added.',am:'ድምሩ ከተደማሪዎቹ ከአንዱ ያንሳል።'},b:2,short:{en:'sum smaller',am:'ድምር ያንሳል'},why:{en:'Adding (whole numbers) never makes things smaller.',am:'መደመር ነገሮችን በፍፁም አያሳንስም።'}},
   {t:{en:'a + b gives the same answer as b + a.',am:'a + b እና b + a አንድ ዓይነት መልስ ይሰጣሉ።'},b:0,short:'a+b = b+a'},
   {t:{en:'The difference is bigger than the bigger number.',am:'ልዩነቱ ከትልቁ ቁጥር ይበልጣል።'},b:2,short:{en:'difference bigger',am:'ልዩነት ይበልጣል'}}
  ]},
 {type:'notes',notes:{
 big:{en:'Add and subtract by place value, always starting with the ones. Estimate first, check after.',am:'በቁጥር ቤት ደምሩና ቀንሱ፤ ሁልጊዜ ከአንዶች ጀምሩ። መጀመሪያ ገምቱ፣ በኋላ አረጋግጡ።'},
 points:[{en:'Line up ones under ones, tens under tens.',am:'አንዶችን ከአንዶች፣ አስሮችን ከአስሮች በታች አሰልፉ።'},{en:'Adding: if a house makes 10 or more, carry 1 to the next house.',am:'መደመር፦ አንድ ቤት 10 ወይም ከዚያ በላይ ከሆነ 1ን ወደ ቀጣዩ ቤት ውሰዱ።'},{en:'Subtracting: if the top digit is smaller, regroup (borrow 1 = 10).',am:'መቀነስ፦ የላይኛው ሆሄ ካነሰ አቧድኑ (1 ተበድሮ = 10)።'},{en:'Check subtraction by adding: answer + bottom = top.',am:'መቀነስን በመደመር አረጋግጡ፦ መልስ + የታችኛው = የላይኛው።'},{en:'Smart strategies: split numbers, round and fix, count up.',am:'ብልህ ስልቶች፦ መከፋፈል፣ አጠጋግቶ ማስተካከል፣ ወደፊት መቁጠር።'}],
 words:[['ድምር',{en:'sum',am:'የመደመር ውጤት'}],['ልዩነት',{en:'difference',am:'የመቀነስ ውጤት'}],['ማቧደን',{en:'regrouping',am:'10 አንዶችን በ1 አስር መቀየር ወይም መልሶ'}]],
 remember:{en:'Estimate → calculate → check. If the answer is far from the estimate, look again!',am:'ገምቱ → አስሉ → አረጋግጡ። መልሱ ከግምቱ ከራቀ እንደገና እዩ!'},
 exam:[['3,456 + 2,378 = ?','5,834'],['7,000 − 2,345 = ?','4,655'],[{en:'Estimate 4,912 + 3,087',am:'4,912 + 3,087ን ገምቱ'},'5,000 + 3,000 = 8,000'],[{en:'A + B = B + A. Always, sometimes or never?',am:'A + B = B + A። ሁልጊዜ፣ አንዳንድ ጊዜ ወይስ በፍፁም?'},{en:'Always',am:'ሁልጊዜ'}],[{en:'Saved 2,450 birr, spent 875. Left?',am:'2,450 ብር ቆጥቦ 875 አወጣ። የቀረው?'},{en:'1,575 birr',am:'1,575 ብር'}]],
 innovate:{title:{en:'Run a pretend shop',am:'የሙከራ ሱቅ አካሂዱ'},text:{en:'Every shopkeeper adds totals and gives change all day. Open a pretend shop with paper money and keep a sales book.',am:'እያንዳንዱ ባለሱቅ ቀኑን ሙሉ ድምር ያሰላል፣ መልስ ይሰጣል። በወረቀት ገንዘብ የሙከራ ሱቅ ክፈቱ፤ የሽያጭ ደብተር ያዙ።'},
  steps:[{en:'Price 6 items between 100 and 2,000 birr.',am:'ከ100 እስከ 2,000 ብር ባለ ዋጋ 6 ዕቃዎችን ዋጋ አውጡ።'},{en:'A customer buys 2 or 3 items: add the total.',am:'ደንበኛ 2 ወይም 3 ዕቃዎችን ይገዛል፦ ድምሩን አስሉ።'},{en:'They pay with a big note: subtract to give change.',am:'በትልቅ ኖት ይከፍላሉ፦ መልሱን ቀንሳችሁ ስጡ።'},{en:'At the end, add all sales. Which item earned most?',am:'በመጨረሻ ሽያጩን ሁሉ ደምሩ። ብዙ ያስገኘው የትኛው ዕቃ ነው?'}]}}}
 ]});
})();
