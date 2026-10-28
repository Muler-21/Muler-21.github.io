/* AMBKidsJoy Grade 4 kit: maths drill generators with pictures (window.K4) */
(function(){
const {rnd,shuffle,numOpts}=G3;
const fmt=n=>Number(n).toLocaleString('en-US');
const A='var(--accent)',S='var(--surface)',I='var(--ink)';
/* Ethiopic (Ge'ez) numerals 1-100 */
const ONES=['','፩','፪','፫','፬','፭','፮','፯','፰','፱'],TENS=['','፲','፳','፴','፵','፶','፷','፸','፹','፺'];
const eth=n=>n===100?'፻':TENS[Math.floor(n/10)]+ONES[n%10];
const opts=(ans,pool)=>{const set=[ans];for(const p of shuffle(pool))if(set.length<4&&!set.includes(p))set.push(p);const o=shuffle(set);return{o,a:o.indexOf(ans)}};
const nOpts=(ans,offs)=>{const c=offs.map(d=>ans+d).filter(v=>v>=0&&v!==ans);return opts(fmt(ans),c.map(fmt))};
/* pictures */
function grid(h){let g='';for(let i=0;i<100;i++){const r=Math.floor(i/10),c=i%10;g+=`<rect x="${4+c*11}" y="${4+r*11}" width="11" height="11" fill="${i<h?A:S}" stroke="${I}" stroke-width="1"/>`}return`<svg viewBox="0 0 118 118" style="width:140px;height:auto" role="img" aria-label="${h} hundredths">${g}</svg>`}
function strip(t){let g='';for(let i=0;i<10;i++)g+=`<rect x="${4+i*20}" y="10" width="20" height="40" fill="${i<t?A:S}" stroke="${I}" stroke-width="2"/>`;return`<svg viewBox="0 0 208 60" style="width:220px;height:auto" role="img" aria-label="${t} tenths">${g}</svg>`}
function angle(deg){const r=60,x0=20,y0=90,rad=deg*Math.PI/180;const x1=x0+r*1.4,y1=y0;const x2=x0+r*1.2*Math.cos(rad),y2=y0-r*1.2*Math.sin(rad);
 const arc=deg===90?`<path d="M${x0+16} ${y0}V${y0-16}H${x0}" fill="none" stroke="${A}" stroke-width="3"/>`:`<path d="M${x0+22} ${y0}A22 22 0 0 0 ${x0+22*Math.cos(rad)} ${y0-22*Math.sin(rad)}" fill="none" stroke="${A}" stroke-width="3"/>`;
 return`<svg viewBox="-10 0 140 100" style="width:170px;height:auto" role="img" aria-label="angle"><line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y1}" stroke="${I}" stroke-width="4" stroke-linecap="round"/><line x1="${x0}" y1="${y0}" x2="${x2}" y2="${y2}" stroke="${I}" stroke-width="4" stroke-linecap="round"/>${arc}<circle cx="${x0}" cy="${y0}" r="4" fill="${I}"/></svg>`}
function tri(kind){const P={equilateral:'60,10 110,96 10,96',isosceles:'60,6 96,96 24,96',scalene:'20,96 112,96 80,20',right:'20,10 20,96 110,96',obtuse:'10,96 120,96 30,50'}[kind];
 return`<svg viewBox="0 0 130 104" style="width:150px;height:auto" role="img" aria-label="triangle"><polygon points="${P}" fill="var(--accent-soft)" stroke="${I}" stroke-width="3" stroke-linejoin="round"/>${kind==='right'?`<path d="M20 84H32V96" fill="none" stroke="${A}" stroke-width="2.5"/>`:''}</svg>`}
function quad(kind){const P={square:'20,10 100,10 100,90 20,90',rectangle:'6,24 124,24 124,86 6,86',parallelogram:'30,20 124,20 100,86 6,86',trapezium:'40,20 90,20 124,86 6,86',rhombus:'65,6 120,50 65,94 10,50'}[kind];
 return`<svg viewBox="0 0 130 100" style="width:150px;height:auto" role="img" aria-label="quadrilateral"><polygon points="${P}" fill="var(--accent-soft)" stroke="${I}" stroke-width="3" stroke-linejoin="round"/></svg>`}
function rect(l,w,u){const W=Math.min(200,40+l*12),H=Math.min(110,24+w*10);return`<svg viewBox="0 0 ${W+60} ${H+40}" style="width:${Math.min(260,W+60)}px;height:auto" role="img" aria-label="rectangle ${l} by ${w}"><rect x="30" y="10" width="${W}" height="${H}" fill="var(--accent-soft)" stroke="${I}" stroke-width="3"/><text x="${30+W/2}" y="${H+32}" text-anchor="middle" font-size="16" font-weight="700" fill="${I}">${l} ${u}</text><text x="20" y="${10+H/2}" text-anchor="end" font-size="16" font-weight="700" fill="${I}" transform="rotate(-90 20 ${10+H/2})">${w} ${u}</text></svg>`}
function bars(data,unit){const mx=Math.max(...data.map(d=>d[1]));const step=mx>20?5:mx>10?2:1;const top=Math.ceil(mx/step)*step;const H=150,W=data.length*58+50;
 let g='';for(let v=0;v<=top;v+=step){const y=10+H-(v/top)*H;g+=`<line x1="40" x2="${W}" y1="${y}" y2="${y}" stroke="var(--line)" stroke-width="1"/><text x="34" y="${y+4}" text-anchor="end" font-size="11" fill="${I}">${v}</text>`}
 data.forEach(([lab,v],i)=>{const h=(v/top)*H;g+=`<rect x="${52+i*58}" y="${10+H-h}" width="36" height="${h}" rx="3" fill="${A}"/><text x="${70+i*58}" y="${H+28}" text-anchor="middle" font-size="12" fill="${I}">${lab}</text>`});
 return`<svg viewBox="0 0 ${W+10} ${H+40}" style="width:100%;max-width:${W+10}px;height:auto" role="img" aria-label="bar graph">${g}<line x1="40" x2="40" y1="10" y2="${H+10}" stroke="${I}" stroke-width="2"/><line x1="40" x2="${W}" y1="${H+10}" y2="${H+10}" stroke="${I}" stroke-width="2"/></svg>${unit?`<div class="sub small center">${unit}</div>`:''}`}
function nline(lo,hi,mark,den){const n=hi-lo;let g='';for(let i=0;i<=n*den;i++){const x=20+i*(220/(n*den));const big=i%den===0;g+=`<line x1="${x}" x2="${x}" y1="${big?30:36}" y2="${big?56:50}" stroke="${I}" stroke-width="${big?3:2}"/>`+(big?`<text x="${x}" y="74" text-anchor="middle" font-size="14" font-weight="700" fill="${I}">${lo+i/den}</text>`:'')}
 const mx=20+mark*(220/(n*den));return`<svg viewBox="0 0 260 82" style="width:260px;height:auto" role="img" aria-label="number line"><line x1="20" x2="240" y1="43" y2="43" stroke="${I}" stroke-width="3"/>${g}<polygon points="${mx-8},10 ${mx+8},10 ${mx},26" fill="${A}"/></svg>`}
/* drill generators */
const PV=['ones','tens','hundreds','thousands','ten thousands','hundred thousands'],PVA=['አንዶች','አስሮች','መቶዎች','ሺዎች','አስር ሺዎች','መቶ ሺዎች'];
const GEN={
 place(){const n=rnd(100000,999999);const k=rnd(0,5);const d=Math.floor(n/10**k)%10;if(!d)return GEN.place();const v=d*10**k;
  const pool=[0,1,2,3,4,5].filter(j=>j!==k).map(j=>fmt(d*10**j));const o=opts(fmt(v),pool);
  return{fig:`<div class="bigq">${fmt(n)}</div>`,q:{en:`What is the value of the digit ${d} in the ${PV[k]} place?`,am:`በ${PVA[k]} ቤት ያለው ${d} ዋጋው ስንት ነው?`},...o,e:{en:`${d} × ${fmt(10**k)} = ${fmt(v)}`,am:`${d} × ${fmt(10**k)} = ${fmt(v)}`}}},
 compare(){let a=rnd(10000,999999),b=a+[-1,1][rnd(0,1)]*rnd(1,9)*10**rnd(0,4);if(b<0)b=a+5;const s=a>b?'>':a<b?'<':'=';const o=['>','<','='];
  return{q:`${fmt(a)}  ?  ${fmt(b)}`,o,a:o.indexOf(s),e:{en:'Compare digit by digit from the left.',am:'ከግራ ጀምራችሁ ሆሄ በሆሄ አወዳድሩ።'}}},
 round(){const to=[10,100,1000][rnd(0,2)];const n=rnd(1000,99999);const r=Math.round(n/to)*to;const o=opts(fmt(r),[fmt(r+to),fmt(r-to),fmt(Math.floor(n/to)*to===r?r+to:Math.floor(n/to)*to)]);
  return{q:{en:`Round ${fmt(n)} to the nearest ${fmt(to)}.`,am:`${fmt(n)}ን ወደ ቅርብ ${fmt(to)} አጠጋጉ።`},...o,e:{en:'Look at the digit to the right: 5 or more rounds up.',am:'በቀኝ በኩል ያለውን ሆሄ ተመልከቱ፤ 5 ወይም ከዚያ በላይ ከሆነ ወደ ላይ ይጠጋጋል።'}}},
 eth(){const n=rnd(11,100);const o=opts(eth(n),[eth(Math.min(100,n+10)),eth(Math.max(11,n-10)),eth(n%10?n-n%10+((n%10)%9+1):n-1)]);
  return{fig:`<div class="bigq">${n}</div>`,q:{en:'Which Ethiopic numeral shows this number?',am:'ይህን ቁጥር የሚያሳየው የግዕዝ አኃዝ የትኛው ነው?'},...o}},
 add(){const a=rnd(10000,500000),b=rnd(1000,400000);return{fig:`<div class="vcol"><span>${fmt(a)}</span><span>+ ${fmt(b)}</span><span class="ln">?</span></div>`,q:{en:'Add.',am:'ደምሩ።'},...nOpts(a+b,[1000,-1000,10,-100,10000])}},
 sub(){const a=rnd(100000,999999),b=rnd(1000,a-1000);return{fig:`<div class="vcol"><span>${fmt(a)}</span><span>− ${fmt(b)}</span><span class="ln">?</span></div>`,q:{en:'Subtract.',am:'ቀንሱ።'},...nOpts(a-b,[1000,-1000,10,-100,10000])}},
 word(){const W=[[`A farmer harvested {a} kg of teff and {b} kg of wheat. How many kg in all?`,`አንድ ገበሬ {a} ኪ.ግ ጤፍና {b} ኪ.ግ ስንዴ ሰበሰበ። በአጠቃላይ ስንት ኪ.ግ?`,'+'],[`A school had {a} birr and spent {b} birr on books. How much is left?`,`አንድ ትምህርት ቤት {a} ብር ነበረው፤ {b} ብር ለመጻሕፍት አወጣ። ስንት ቀረ?`,'-'],[`{a} people visited Lalibela in one month and {b} the next. How many in total?`,`በአንድ ወር {a}፣ በቀጣዩ {b} ሰዎች ላሊበላን ጎበኙ። በአጠቃላይ ስንት?`,'+']];
  const w=W[rnd(0,2)];let a=rnd(20000,90000),b=rnd(1000,19000);const ans=w[2]==='+'?a+b:a-b;const f=s=>s.replace('{a}',fmt(a)).replace('{b}',fmt(b));return{q:{en:f(w[0]),am:f(w[1])},...nOpts(ans,[1000,-1000,100,10000])}},
 frac(){const d=[2,3,4,5,6,8][rnd(0,5)],n=rnd(1,d-1);const o=opts(`${n}/${d}`,[`${d-n}/${d}`,`${n}/${d+1}`,`${d}/${n}`].filter(x=>x!==`${n}/${d}`));
  return{fig:K1.frac(d<=4&&rnd(0,1)?'circle':'bar',d,n),q:{en:'What fraction is shaded?',am:'የተቀባው ክፍልፋይ ስንት ነው?'},...o}},
 fraccmp(){const d=[5,6,8,10,12][rnd(0,4)];let a=rnd(1,d-1),b=rnd(1,d-1);if(a===b)b=a===1?2:a-1;const s=a>b?'>':'<';const o=['>','<','='];
  return{q:`${a}/${d}  ?  ${b}/${d}`,o,a:o.indexOf(s),e:{en:'Same denominator: the bigger numerator is bigger.',am:'ቆጣሪያቸው ተመሳሳይ ሲሆን ትልቅ ጠሪ ያለው ይበልጣል።'}}},
 fracadd(){const d=[5,6,7,8,9,10][rnd(0,5)];const a=rnd(1,d-2),b=rnd(1,d-a-1);const plus=rnd(0,1);const ans=plus?a+b:Math.max(a,b)-Math.min(a,b);const x=plus?a:Math.max(a,b),y=plus?b:Math.min(a,b);
  const o=opts(`${ans}/${d}`,[`${ans}/${2*d}`,`${ans+1}/${d}`,`${Math.max(1,ans-1)}/${d}`]);return{q:`${x}/${d} ${plus?'+':'−'} ${y}/${d} = ?`,...o,e:{en:'Add or subtract the numerators; keep the denominator.',am:'ጠሪዎቹን ደምሩ ወይም ቀንሱ፤ ቆጣሪው አይለወጥም።'}}},
 equiv(){const n=rnd(1,4),d=n+rnd(1,4),k=rnd(2,4);const o=opts(`${n*k}/${d*k}`,[`${n+k}/${d+k}`,`${n*k}/${d}`,`${n}/${d*k}`]);return{q:{en:`Which fraction is equivalent to ${n}/${d}?`,am:`ከ${n}/${d} ጋር አቻ የሆነው ክፍልፋይ የትኛው ነው?`},...o,e:{en:`Multiply top and bottom by ${k}.`,am:`ጠሪውንና ቆጣሪውን በ${k} አባዙ።`}}},
 dec(){if(rnd(0,1)){const t=rnd(1,9);const o=opts(`0.${t}`,[`0.0${t}`,`${t}.0`,`0.${10-t}`]);return{fig:strip(t),q:{en:'Write the shaded part as a decimal.',am:'የተቀባውን ክፍል በአስርዮሽ ጻፉ።'},...o}}
  const h=rnd(11,99);const s=(h/100).toFixed(2);const o=opts(s,[`0.${String(100-h).padStart(2,'0')}`,`${h}.0`,`0.0${h%10||1}`]);return{fig:grid(h),q:{en:'Write the shaded part as a decimal.',am:'የተቀባውን ክፍል በአስርዮሽ ጻፉ።'},...o}},
 deccmp(){const a=rnd(1,99)/100,b=rnd(1,99)/100;if(a===b)return GEN.deccmp();const o=['>','<','='];return{q:`${a.toFixed(2)}  ?  ${b.toFixed(2)}`,o,a:o.indexOf(a>b?'>':'<')}},
 nline(){const den=[2,4,10][rnd(0,2)];const m=rnd(1,2*den-1);if(m%den===0)return GEN.nline();const v=den===10?(m/10).toFixed(1):`${Math.floor(m/den)?Math.floor(m/den)+' ':''}${m%den}/${den}`;
  const alt=den===10?[((m+1)/10).toFixed(1),((m-1)/10).toFixed(1),(m/100).toFixed(2)]:[`${m%den+1}/${den}`,`${m%den}/${den+1}`,`${den}/${m%den}`];return{fig:nline(0,2,m,den),q:{en:'What number does the arrow show?',am:'ቀስቱ የሚያሳየው ቁጥር ስንት ነው?'},...opts(v,alt.filter(x=>x!==v))}},
 mul10(){const z=[1000,10000][rnd(0,1)];const a=rnd(1,9)*z,b=rnd(2,9);return{q:`${fmt(a)} × ${b} = ?`,...nOpts(a*b,[z,-z,z*10,a]),e:{en:`${a/z} × ${b} = ${a/z*b}, then add the zeros: ${fmt(a*b)}`,am:`${a/z} × ${b} = ${a/z*b}፤ ከዚያ ዜሮዎቹን ጨምሩ፦ ${fmt(a*b)}`}}},
 mul(){const a=rnd(120,9999),b=rnd(2,9);return{fig:`<div class="vcol"><span>${fmt(a)}</span><span>× ${b}</span><span class="ln">?</span></div>`,q:{en:'Multiply.',am:'አባዙ።'},...nOpts(a*b,[b,-b,10,a,-10])}},
 mul2(){const a=rnd(12,99),b=rnd(11,49);return{fig:`<div class="vcol"><span>${a}</span><span>× ${b}</span><span class="ln">?</span></div>`,q:{en:'Multiply.',am:'አባዙ።'},...nOpts(a*b,[a,-a,10,b])}},
 div(){const b=rnd(2,9),q=rnd(12,999);const a=b*q;return{q:`${fmt(a)} ÷ ${b} = ?`,...nOpts(q,[1,-1,10,-10,b])}},
 divr(){const b=rnd(3,9),q=rnd(10,99),r=rnd(1,b-1);const a=b*q+r;const o=opts(`${q} r ${r}`,[`${q} r ${r+1}`,`${q+1} r ${r}`,`${q-1} r ${b-r}`]);return{q:`${a} ÷ ${b} = ?`,...o,e:{en:`${b} × ${q} = ${b*q}, and ${a} − ${b*q} = ${r} left over.`,am:`${b} × ${q} = ${b*q}፤ ${a} − ${b*q} = ${r} ቀሪ።`}}},
 angle(){const k=rnd(0,3);const deg=[rnd(25,70),90,rnd(110,160),180][k];const N=[{en:'Acute angle',am:'ሹል አንግል'},{en:'Right angle',am:'ማዕዘናዊ አንግል'},{en:'Obtuse angle',am:'ዝርጥ አንግል'},{en:'Straight angle',am:'ዝርግ አንግል'}];
  return{fig:angle(deg),q:{en:'What kind of angle is this?',am:'ይህ ምን ዓይነት አንግል ነው?'},o:N,a:k,e:{en:'Acute < 90°, right = 90°, obtuse between 90° and 180°, straight = 180°.',am:'ሹል < 90°፣ ማዕዘናዊ = 90°፣ ዝርጥ በ90° እና በ180° መካከል፣ ዝርግ = 180°።'}}},
 tri(){const K=['equilateral','isosceles','scalene','right'];const N={equilateral:{en:'Equilateral (3 equal sides)',am:'እኩል ጎን ጎነ-ሶስት (3 እኩል ጎኖች)'},isosceles:{en:'Isosceles (2 equal sides)',am:'ሁለት እኩል ጎን ጎነ-ሶስት'},scalene:{en:'Scalene (no equal sides)',am:'ሶስቱም ጎኖች እኩል ያልሆኑ'},right:{en:'Right-angled triangle',am:'ማዕዘናዊ አንግል ጎነ-ሶስት'}};
  const k=K[rnd(0,3)];const o=shuffle(K);return{fig:tri(k),q:{en:'Which triangle is this?',am:'ይህ የትኛው ጎነ-ሶስት ነው?'},o:o.map(x=>N[x]),a:o.indexOf(k)}},
 quad(){const K=['square','rectangle','parallelogram','trapezium','rhombus'];const N={square:{en:'Square',am:'ካሬ'},rectangle:{en:'Rectangle',am:'ሬክታንግል'},parallelogram:{en:'Parallelogram',am:'ፓራሌሎግራም'},trapezium:{en:'Trapezium',am:'ትራፒዚየም'},rhombus:{en:'Rhombus',am:'ሮምበስ'}};
  const k=K[rnd(0,4)];const o=shuffle(K).slice(0,4);if(!o.includes(k))o[0]=k;const oo=shuffle(o);return{fig:quad(k),q:{en:'Name this quadrilateral.',am:'ይህን ጎነ-አራት ሰይሙ።'},o:oo.map(x=>N[x]),a:oo.indexOf(k)}},
 perim(){const l=rnd(3,12),w=rnd(2,l);return{fig:rect(l,w,'m'),q:{en:'What is the perimeter of this rectangle?',am:'የዚህ ሬክታንግል ዙሪያ ስንት ነው?'},...opts(`${2*(l+w)} m`,[`${l*w} m`,`${l+w} m`,`${2*(l+w)+2} m`].filter(x=>x!==`${2*(l+w)} m`)),e:{en:`P = 2 × (${l} + ${w}) = ${2*(l+w)} m`,am:`ዙሪያ = 2 × (${l} + ${w}) = ${2*(l+w)} ሜ`}}},
 area(){const l=rnd(3,12),w=rnd(2,9);return{fig:rect(l,w,'cm'),q:{en:'What is the area of this rectangle?',am:'የዚህ ሬክታንግል ስፋት ስንት ነው?'},...opts(`${l*w} cm²`,[`${2*(l+w)} cm²`,`${l+w} cm²`,`${l*w+l} cm²`].filter(x=>x!==`${l*w} cm²`)),e:{en:`A = ${l} × ${w} = ${l*w} cm²`,am:`ስፋት = ${l} × ${w} = ${l*w} ሴ.ሜ²`}}},
 units(){const C=[[()=>{const m=rnd(2,9);return[`${m} m = ? cm`,m*100,'cm']}],[()=>{const k=rnd(2,9);return[`${k} km = ? m`,k*1000,'m']}],[()=>{const c=rnd(2,9);return[`${c} cm = ? mm`,c*10,'mm']}],[()=>{const k=rnd(2,9);return[`${k} kg = ? g`,k*1000,'g']}],[()=>{const l=rnd(2,9);return[`${l} L = ? mL`,l*1000,'mL']}],[()=>{const g=rnd(2,9)*1000;return[`${fmt(g)} g = ? kg`,g/1000,'kg']}]];
  const [q,ans,u]=C[rnd(0,C.length-1)][0]();return{q,...opts(`${fmt(ans)} ${u}`,[ans*10,ans/10,ans+100].filter(v=>v>0&&Number.isInteger(v)).map(v=>`${fmt(v)} ${u}`)),e:{en:'1 km = 1,000 m · 1 m = 100 cm · 1 cm = 10 mm · 1 kg = 1,000 g · 1 L = 1,000 mL',am:'1 ኪ.ሜ = 1,000 ሜ · 1 ሜ = 100 ሴ.ሜ · 1 ሴ.ሜ = 10 ሚ.ሜ · 1 ኪ.ግ = 1,000 ግ · 1 ሊ = 1,000 ሚ.ሊ'}}},
 bar(){const L=(e,a)=>G3.tx({en:e,am:a});const SETS=[[[L('Teff','ጤፍ'),L('Maize','በቆሎ'),L('Wheat','ስንዴ'),L('Barley','ገብስ')],{en:'Quintals harvested',am:'የተሰበሰበ ኩንታል'}],[[L('Mon','ሰኞ'),L('Tue','ማክሰኞ'),L('Wed','ረቡዕ'),L('Thu','ሐሙስ'),L('Fri','ዓርብ')],{en:'Students absent',am:'የቀሩ ተማሪዎች'}],[[L('Red','ቀይ'),L('Blue','ሰማያዊ'),L('Green','አረንጓዴ'),L('Yellow','ቢጫ')],{en:'Favourite colour (students)',am:'ተወዳጅ ቀለም (ተማሪዎች)'}]];
  const [labs,cap]=SETS[rnd(0,2)];const vals=labs.map(()=>rnd(2,20));const data=labs.map((l,i)=>[l,vals[i]]);const t=rnd(0,2);const mx=Math.max(...vals),mn=Math.min(...vals);
  if(t===0){const i=rnd(0,labs.length-1);return{fig:bars(data,G3.tx(cap)),q:{en:`What is the value for ${labs[i]}?`,am:`የ${labs[i]} ዋጋ ስንት ነው?`},...nOpts(vals[i],[1,-1,2,-2])}}
  if(t===1){const i=vals.indexOf(mx);if(vals.filter(v=>v===mx).length>1)return GEN.bar();const o=shuffle(labs.slice());return{fig:bars(data,G3.tx(cap)),q:{en:'Which bar is the tallest (most)?',am:'ከፍተኛው (ረጅሙ) የትኛው ነው?'},o,a:o.indexOf(labs[i])}}
  return{fig:bars(data,G3.tx(cap)),q:{en:'How much more is the highest than the lowest?',am:'ከፍተኛው ከዝቅተኛው በስንት ይበልጣል?'},...nOpts(mx-mn,[1,-1,2,3])}},
 time(){const T=[()=>{const h=rnd(2,6);return[{en:`${h} hours = ? minutes`,am:`${h} ሰዓት = ? ደቂቃ`},h*60,{en:'minutes',am:'ደቂቃ'}]},()=>{const m=rnd(2,9);return[{en:`${m} minutes = ? seconds`,am:`${m} ደቂቃ = ? ሰከንድ`},m*60,{en:'seconds',am:'ሰከንድ'}]},()=>{const d=rnd(2,5);return[{en:`${d} days = ? hours`,am:`${d} ቀን = ? ሰዓት`},d*24,{en:'hours',am:'ሰዓት'}]},()=>{const w=rnd(2,8);return[{en:`${w} weeks = ? days`,am:`${w} ሳምንት = ? ቀን`},w*7,{en:'days',am:'ቀን'}]}];
  const [q,ans]=T[rnd(0,3)]();return{q,...nOpts(ans,[10,-10,60,6,-6]),e:{en:'1 day = 24 hours · 1 hour = 60 minutes · 1 minute = 60 seconds · 1 week = 7 days',am:'1 ቀን = 24 ሰዓት · 1 ሰዓት = 60 ደቂቃ · 1 ደቂቃ = 60 ሰከንድ · 1 ሳምንት = 7 ቀን'}}},
 elapsed(){const h=rnd(1,9),m=[0,15,30,45][rnd(0,3)],dh=rnd(1,3),dm=[15,30,45][rnd(0,2)];let eh=h+dh,em=m+dm;if(em>=60){eh++;em-=60}const f=(a,b)=>`${a}:${String(b).padStart(2,'0')}`;
  return{q:{en:`A lesson starts at ${f(h,m)} and lasts ${dh} h ${dm} min. When does it end?`,am:`አንድ ትምህርት ${f(h,m)} ጀምሮ ${dh} ሰዓት ከ${dm} ደቂቃ ይቆያል። መቼ ያልቃል?`},...opts(f(eh,em),[f(eh+1,em),f(eh,(em+15)%60),f(eh-1,em)].filter(x=>x!==f(eh,em)))}},
 pattern(){const a=rnd(2,9),b=rnd(1,9);const seq=[1,2,3,4].map(n=>a*n+b);const n=rnd(6,12);return{q:{en:`Pattern: ${seq.join(', ')}, … What is term number ${n}?`,am:`ፓተርን፦ ${seq.join('፣ ')}፣ … ${n}ኛው ቃል ስንት ነው?`},...nOpts(a*n+b,[a,-a,1,b])
  ,e:{en:`Rule: term = ${a} × n + ${b}. So ${a} × ${n} + ${b} = ${a*n+b}.`,am:`ሕግ፦ ቃል = ${a} × n + ${b}። ስለዚህ ${a} × ${n} + ${b} = ${a*n+b}።`}}},
 rule(){const a=rnd(2,9),b=rnd(0,9);const seq=[1,2,3,4].map(n=>a*n+b);const rr=(x,y)=>y?`${x}n + ${y}`:`${x}n`;const o=opts(rr(a,b),[rr(a+1,b),rr(b||1,a),rr(a,b+a)].filter(x=>x!==rr(a,b)));
  return{q:{en:`Which rule makes ${seq.join(', ')}, … (n = 1, 2, 3, 4)?`,am:`${seq.join('፣ ')}፣ … ን የሚሰጠው ሕግ የትኛው ነው? (n = 1፣ 2፣ 3፣ 4)`},...o}}
};
function drills(list){return list.map(d=>({title:d.title,tip:d.tip,type:'drill',need:d.need||5,gen:GEN[d.kind]}))}
window.K4={drills,GEN,eth,grid,strip,angle,tri,quad,rect,bars,nline,fmt};
})();
