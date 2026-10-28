/* AMBKidsJoy Grade 5 kit: maths drill generators (window.K5), built on K4. Grade 5 English uses a British voice. */
(function(){
window.AMB_EN='en-GB';
const {rnd,shuffle}=G3;const K4=window.K4;
const fmt=n=>Number(n).toLocaleString('en-US',{maximumFractionDigits:3});
const r3=x=>Math.round(x*1000)/1000;
const gcd=(a,b)=>b?gcd(b,a%b):Math.abs(a);
const F=(n,d)=>{const g=gcd(n,d);n/=g;d/=g;return d===1?String(n):`${n}/${d}`};
const MIX=(n,d)=>{const g=gcd(n,d);n/=g;d/=g;const w=Math.floor(n/d),r=n%d;return w&&r?`${w} ${r}/${d}`:w?String(w):`${r}/${d}`};
const opts=(ans,pool)=>{const set=[ans];for(const p of shuffle(pool))if(set.length<4&&!set.includes(p)&&p!=null&&p!=='')set.push(p);const o=shuffle(set);return{o,a:o.indexOf(ans)}};
const nO=(ans,offs)=>opts(fmt(ans),offs.map(d=>r3(ans+d)).filter(v=>v>=0&&v!==ans).map(fmt));
const L=(en,am)=>({en,am});
const A='var(--accent)',I='var(--ink)',SF='var(--surface)';
function pie(n,d){let g='';const cx=60,cy=60,r=52;for(let i=0;i<d;i++){const a0=-Math.PI/2+i*2*Math.PI/d,a1=a0+2*Math.PI/d;const x0=cx+r*Math.cos(a0),y0=cy+r*Math.sin(a0),x1=cx+r*Math.cos(a1),y1=cy+r*Math.sin(a1);
 g+=d===1?`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${i<n?A:SF}" stroke="${I}" stroke-width="2"/>`:`<path d="M${cx} ${cy}L${x0.toFixed(1)} ${y0.toFixed(1)}A${r} ${r} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}Z" fill="${i<n?A:SF}" stroke="${I}" stroke-width="2"/>`}
 return`<svg viewBox="0 0 120 120" style="width:120px;height:auto" role="img" aria-label="${n} of ${d} parts">${g}</svg>`}
function pies(n,d){let s='',left=n;while(left>0){s+=pie(Math.min(left,d),d);left-=d}return`<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">${s}</div>`}
function box(l,w,h){const s=14,dx=w*s*0.5,dy=w*s*0.35,W=l*s,H=h*s;const x=20,y=34+dy;
 return`<svg viewBox="0 0 ${W+dx+80} ${H+dy+64}" style="width:${Math.min(280,W+dx+80)}px;height:auto" role="img" aria-label="cuboid ${l} by ${w} by ${h}"><polygon points="${x},${y} ${x+W},${y} ${x+W+dx},${y-dy} ${x+dx},${y-dy}" fill="var(--accent-soft)" stroke="${I}" stroke-width="2"/><polygon points="${x+W},${y} ${x+W+dx},${y-dy} ${x+W+dx},${y-dy+H} ${x+W},${y+H}" fill="var(--accent-soft)" stroke="${I}" stroke-width="2" opacity=".8"/><rect x="${x}" y="${y}" width="${W}" height="${H}" fill="var(--surface)" stroke="${I}" stroke-width="2"/>
 <text x="${x+W/2}" y="${y+H+20}" text-anchor="middle" font-size="14" font-weight="700" fill="${I}">${l} cm</text><text x="${x+W+dx+6}" y="${y-dy+H/2+5}" font-size="14" font-weight="700" fill="${I}">${h} cm</text><text x="${x+dx+W/2}" y="${y-dy-8}" text-anchor="middle" font-size="13" font-weight="700" fill="${I}">${w} cm</text></svg>`}
function dots(vals,lab){const mx=Math.max(...vals.map(v=>v[1]));let g='';vals.forEach(([k,c],i)=>{for(let j=0;j<c;j++)g+=`<circle cx="${40+i*46}" cy="${150-j*18}" r="7" fill="${A}"/>`;g+=`<text x="${40+i*46}" y="178" text-anchor="middle" font-size="13" font-weight="700" fill="${I}">${k}</text>`});
 return`<svg viewBox="0 0 ${vals.length*46+40} 190" style="width:100%;max-width:${vals.length*46+40}px;height:auto" role="img" aria-label="dot plot"><line x1="18" x2="${vals.length*46+22}" y1="162" y2="162" stroke="${I}" stroke-width="2"/>${g}</svg><div class="sub small center">${G3.tx(lab)}</div>`}
const SOLIDS=[[L('cube','ኩብ'),6,12,8,'🧊'],[L('rectangular prism','ሬክታንግላዊ ፕሪዝም'),6,12,8,'📦'],[L('triangular prism','ትሪያንግላዊ ፕሪዝም'),5,9,6,'⛺'],[L('square pyramid','ካሬ ፒራሚድ'),5,8,5,'🔺'],[L('triangular pyramid','ትሪያንግላዊ ፒራሚድ'),4,6,4,'🔻']];
const GEN={
 mixed(){const d=[2,3,4,5,6,8][rnd(0,5)],w=rnd(1,4),r=rnd(1,d-1);const n=w*d+r;
  if(rnd(0,1))return{fig:pies(n,d),q:L(`Write ${n}/${d} as a mixed number.`,`${n}/${d}ን በድብልቅ ቁጥር ጻፉ።`),...opts(`${w} ${r}/${d}`,[`${r} ${w}/${d}`,`${w+1} ${r}/${d}`,`${w} ${d-r}/${d}`]),e:L(`${n} ÷ ${d} = ${w} remainder ${r}, so ${w} ${r}/${d}.`,`${n} ÷ ${d} = ${w} ቀሪ ${r}፤ ስለዚህ ${w} ${r}/${d}።`)};
  return{fig:pies(n,d),q:L(`Write ${w} ${r}/${d} as an improper fraction.`,`${w} ${r}/${d}ን በኢ-መደበኛ ክፍልፋይ ጻፉ።`),...opts(`${n}/${d}`,[`${w+r}/${d}`,`${w*r+d}/${d}`,`${n}/${w}`]),e:L(`${w} × ${d} + ${r} = ${n}, so ${n}/${d}.`,`${w} × ${d} + ${r} = ${n}፤ ስለዚህ ${n}/${d}።`)}},
 ftype(){const k=rnd(0,2);let s;if(k===0){const d=rnd(3,9);s=`${rnd(1,d-1)}/${d}`}else if(k===1){const d=rnd(2,7);s=`${d+rnd(1,6)}/${d}`}else{const d=rnd(3,8);s=`${rnd(1,4)} ${rnd(1,d-1)}/${d}`}
  const N=[L('Proper fraction','መደበኛ ክፍልፋይ'),L('Improper fraction','ኢ-መደበኛ ክፍልፋይ'),L('Mixed number','ድብልቅ ቁጥር')];const o=shuffle([0,1,2]);
  return{fig:`<div class="bigq">${s}</div>`,q:L('What kind of fraction is this?','ይህ ምን ዓይነት ክፍልፋይ ነው?'),o:o.map(i=>N[i]),a:o.indexOf(k),e:L('Proper: top < bottom. Improper: top ≥ bottom. Mixed: a whole number and a fraction.','መደበኛ፦ ጠሪ < ቆጣሪ። ኢ-መደበኛ፦ ጠሪ ≥ ቆጣሪ። ድብልቅ፦ ሙሉ ቁጥርና ክፍልፋይ።')}},
 fcmp(){let a,b,c,d;do{b=[2,3,4,5,6,8,10][rnd(0,6)];d=[2,3,4,5,6,8,10][rnd(0,6)];a=rnd(1,b-1);c=rnd(1,d-1)}while(a*d===b*c||b===d);
  const big=a*d>b*c?`${a}/${b}`:`${c}/${d}`;return{q:L(`Which is bigger: ${a}/${b} or ${c}/${d}?`,`የትኛው ይበልጣል፦ ${a}/${b} ወይስ ${c}/${d}?`),...opts(big,[big===`${a}/${b}`?`${c}/${d}`:`${a}/${b}`,L('They are equal','እኩል ናቸው')].map(x=>typeof x==='string'?x:G3.tx(x))),
  e:L(`Cross-multiply: ${a} × ${d} = ${a*d} and ${c} × ${b} = ${c*b}.`,`በመስቀል አባዙ፦ ${a} × ${d} = ${a*d} እና ${c} × ${b} = ${c*b}።`)}},
 fadd(){const P=[[2,4],[2,6],[3,6],[4,8],[2,3],[3,4],[2,5],[4,12],[3,9],[5,10]];const [x,y]=P[rnd(0,P.length-1)];const l=x*y/gcd(x,y);const a=rnd(1,x-1),b=rnd(1,y-1);const plus=rnd(0,1)||a*l/x<b*l/y;
  const n=plus?a*l/x+b*l/y:a*l/x-b*l/y;const ans=MIX(n,l);
  return{q:L(`${a}/${x} ${plus?'+':'−'} ${b}/${y} = ?`,`${a}/${x} ${plus?'+':'−'} ${b}/${y} = ?`),...opts(ans,[`${plus?a+b:Math.abs(a-b)}/${x+y}`,MIX(n+1,l),MIX(Math.max(1,n-1),l),MIX(n,l*2)]),
  e:L(`Common denominator ${l}: ${a*l/x}/${l} ${plus?'+':'−'} ${b*l/y}/${l} = ${n}/${l} = ${ans}.`,`የጋራ ቆጣሪ ${l}፦ ${a*l/x}/${l} ${plus?'+':'−'} ${b*l/y}/${l} = ${n}/${l} = ${ans}።`)}},
 fmul(){if(rnd(0,1)){const d=[2,3,4,5,6,8][rnd(0,5)],n=rnd(1,d-1),w=d*rnd(1,6);return{q:L(`${n}/${d} of ${w} = ?`,`የ${w} ${n}/${d} = ?`),...nO(w*n/d,[w/d,-w/d,n,1]),e:L(`${w} ÷ ${d} = ${w/d}, then × ${n} = ${w*n/d}.`,`${w} ÷ ${d} = ${w/d}፣ ከዚያ × ${n} = ${w*n/d}።`)}}
  const b=rnd(2,6),d=rnd(2,6),a=rnd(1,b-1),c=rnd(1,d-1);const ans=F(a*c,b*d);return{q:L(`${a}/${b} × ${c}/${d} = ?`,`${a}/${b} × ${c}/${d} = ?`),...opts(ans,[F(a+c,b+d),F(a*d,b*c),F(a*c,b+d)]),e:L(`Multiply tops and bottoms: (${a}×${c})/(${b}×${d}) = ${a*c}/${b*d} = ${ans}.`,`ጠሪዎችንና ቆጣሪዎችን አባዙ፦ (${a}×${c})/(${b}×${d}) = ${a*c}/${b*d} = ${ans}።`)}},
 fdiv(){const b=rnd(2,6),d=rnd(2,6),a=rnd(1,b-1),c=rnd(1,d-1);const ans=MIX(a*d,b*c);return{q:L(`${a}/${b} ÷ ${c}/${d} = ?`,`${a}/${b} ÷ ${c}/${d} = ?`),...opts(ans,[MIX(a*c,b*d),MIX(b*c,a*d),MIX(a*d+1,b*c)]),e:L(`Flip the second fraction and multiply: ${a}/${b} × ${d}/${c} = ${a*d}/${b*c}.`,`ሁለተኛውን ክፍልፋይ ገልብጣችሁ አባዙ፦ ${a}/${b} × ${d}/${c} = ${a*d}/${b*c}።`)}},
 decpv(){const n=(rnd(1,99)+rnd(1,999)/1000);const s=n.toFixed(3);const k=rnd(0,2);const dg=s.split('.')[1][k];if(dg==='0')return GEN.decpv();
  const P=[L('tenths','አስረኛ'),L('hundredths','መቶኛ'),L('thousandths','ሺኛ')];const val=['0.'+dg,'0.0'+dg,'0.00'+dg][k];
  return{fig:`<div class="bigq">${s}</div>`,q:L(`What is the value of the digit ${dg} in the ${P[k].en} place?`,`በ${P[k].am} ቤት ያለው ${dg} ዋጋው ስንት ነው?`),...opts(val,['0.'+dg,'0.0'+dg,'0.00'+dg,dg].filter(x=>x!==val)),e:L(`${P[k].en}: ${val}`,`${P[k].am}፦ ${val}`)}},
 dcmp(){const a=rnd(100,999)/100;let b=r3(a+[-1,1][rnd(0,1)]*rnd(1,9)/[10,100][rnd(0,1)]);if(b<=0)b=r3(a+0.1);const s1=a.toFixed(2),s2=String(b).length>s1.length?b.toFixed(3):b.toFixed(2);
  const big=a>b?s1:s2;return{q:L(`Which is greater: ${s1} or ${s2}?`,`የትኛው ይበልጣል፦ ${s1} ወይስ ${s2}?`),...opts(big,[big===s1?s2:s1]),e:L('Compare whole parts, then tenths, then hundredths.','ሙሉውን፣ ከዚያ አስረኛውን፣ ከዚያ መቶኛውን አወዳድሩ።')}},
 dadd(){const a=rnd(100,9999)/100,b=rnd(100,9999)/100;const plus=rnd(0,1);const x=plus?a:Math.max(a,b),y=plus?b:Math.min(a,b);const ans=r3(plus?x+y:x-y);
  return{q:L(`${x.toFixed(2)} ${plus?'+':'−'} ${y.toFixed(2)} = ?`,`${x.toFixed(2)} ${plus?'+':'−'} ${y.toFixed(2)} = ?`),...opts(ans.toFixed(2),[r3(ans+1).toFixed(2),r3(ans+0.1).toFixed(2),Math.max(0,r3(ans-0.01)).toFixed(2)]),e:L('Line up the decimal points, then add or subtract like whole numbers.','የአስርዮሽ ነጥቦቹን አሰልፉ፤ ከዚያ እንደ ሙሉ ቁጥር ደምሩ ወይም ቀንሱ።')}},
 dmul(){if(rnd(0,1)){const a=rnd(11,999)/10,p=[10,100,1000][rnd(0,2)];const ans=r3(a*p);return{q:L(`${a} × ${fmt(p)} = ?`,`${a} × ${fmt(p)} = ?`),...opts(fmt(ans),[fmt(r3(ans/10)),fmt(r3(ans*10)),fmt(r3(a+p))]),e:L(`× ${fmt(p)} moves the decimal point ${String(p).length-1} places to the right.`,`× ${fmt(p)} የአስርዮሽ ነጥቡን ${String(p).length-1} ቤት ወደ ቀኝ ያንቀሳቅሰዋል።`)}}
  const a=rnd(2,9)/10*([1,10][rnd(0,1)]),b=rnd(2,9)/10;const ans=r3(a*b);return{q:L(`${a} × ${b} = ?`,`${a} × ${b} = ?`),...opts(String(ans),[String(r3(ans*10)),String(r3(ans/10)),String(r3(a+b))]),e:L(`Multiply as whole numbers, then count the decimal places: ${a} × ${b} = ${ans}.`,`እንደ ሙሉ ቁጥር አባዙ፤ ከዚያ የአስርዮሽ ቤቶችን ቁጠሩ፦ ${a} × ${b} = ${ans}።`)}},
 ddiv(){if(rnd(0,1)){const q=rnd(11,99)/10,d=rnd(2,9);const a=r3(q*d);return{q:L(`${a} ÷ ${d} = ?`,`${a} ÷ ${d} = ?`),...opts(String(q),[String(r3(q*10)),String(r3(q+1)),String(r3(q/10))]),e:L(`Check: ${q} × ${d} = ${a}.`,`ማረጋገጫ፦ ${q} × ${d} = ${a}።`)}}
  const a=rnd(11,999)/10,p=[10,100][rnd(0,1)];const ans=r3(a/p);return{q:L(`${a} ÷ ${p} = ?`,`${a} ÷ ${p} = ?`),...opts(String(ans),[String(r3(ans*10)),String(r3(ans/10)),String(r3(a*p))]),e:L(`÷ ${p} moves the decimal point ${String(p).length-1} places to the left.`,`÷ ${p} የአስርዮሽ ነጥቡን ${String(p).length-1} ቤት ወደ ግራ ያንቀሳቅሰዋል።`)}},
 pct(){const k=rnd(0,2);if(k===0){const P=[[1,2],[1,4],[3,4],[1,5],[2,5],[3,10],[7,10],[1,10],[9,20],[3,25],[1,20]];const [n,d]=P[rnd(0,P.length-1)];const v=n*100/d;
   return{fig:K4.grid(v),q:L(`${n}/${d} = ? %`,`${n}/${d} = ? %`),...opts(`${v}%`,[`${n*10}%`,`${d}%`,`${v+5}%`,`${100-v}%`]),e:L(`Make the denominator 100: ${n}/${d} = ${v}/100 = ${v}%.`,`ቆጣሪውን 100 አድርጉ፦ ${n}/${d} = ${v}/100 = ${v}%።`)}}
  if(k===1){const v=rnd(1,99);const dec=(v/100).toFixed(2);return{fig:K4.grid(v),q:L(`${dec} = ? %`,`${dec} = ? %`),...opts(`${v}%`,[`${v/10}%`,`${v*10}%`,`${100-v}%`]),e:L('Multiply by 100: move the point 2 places right.','በ100 አባዙ፦ ነጥቡን 2 ቤት ወደ ቀኝ።')}}
  const v=[5,10,20,25,40,50,75][rnd(0,6)];return{fig:K4.grid(v),q:L(`${v}% as a fraction in simplest form is…`,`${v}% በቀላሉ ክፍልፋይ…`),...opts(F(v,100),[`${v}/10`,F(v+5,100),`1/${v}`]),e:L(`${v}% = ${v}/100 = ${F(v,100)}`,`${v}% = ${v}/100 = ${F(v,100)}`)}},
 pctof(){const p=[10,20,25,50,75,5,15,30][rnd(0,7)];const n=[20,40,60,80,100,120,200,240,300,400][rnd(0,9)];const ans=r3(p*n/100);
  return{q:L(`What is ${p}% of ${n}?`,`የ${n} ${p}% ስንት ነው?`),...nO(ans,[n/10,-n/10,p,5]),e:L(`${p}/100 × ${n} = ${ans}`,`${p}/100 × ${n} = ${ans}`)}},
 pctis(){const b=[10,20,25,40,50,200][rnd(0,5)];const p=[10,20,25,50,75,40][rnd(0,5)];const a=b*p/100;if(a%1)return GEN.pctis();
  return{q:L(`${a} is what percent of ${b}?`,`${a} የ${b} ስንት ፐርሰንት ነው?`),...opts(`${p}%`,[`${p+10}%`,`${Math.max(5,p-10)}%`,`${a}%`]),e:L(`${a}/${b} × 100% = ${p}%`,`${a}/${b} × 100% = ${p}%`)}},
 expr(){const a=rnd(2,9),b=rnd(1,20),x=rnd(2,10);const k=rnd(0,1);const ans=k?a*x+b:a*x-Math.min(b,a*x-1);const bb=k?b:Math.min(b,a*x-1);
  return{q:L(`If x = ${x}, what is ${a}x ${k?'+':'−'} ${bb}?`,`x = ${x} ቢሆን ${a}x ${k?'+':'−'} ${bb} ስንት ነው?`),...nO(ans,[a,-a,x,1]),e:L(`${a} × ${x} ${k?'+':'−'} ${bb} = ${ans}`,`${a} × ${x} ${k?'+':'−'} ${bb} = ${ans}`)}},
 simp(){const a=rnd(2,9),b=rnd(1,9),c=rnd(1,9);const k=rnd(0,1);const s=k?a+b:a-b;if(!k&&s<=0)return GEN.simp();const ans=`${s}x + ${c}`;
  return{q:L(`Simplify: ${a}x ${k?'+':'−'} ${b}x + ${c}`,`አቃልሉ፦ ${a}x ${k?'+':'−'} ${b}x + ${c}`),...opts(ans,[`${s+c}x`,`${k?a+b+c:a+b}x`,`${s}x + ${c+1}`,`${a*b}x + ${c}`]),e:L(`Combine like terms: ${a}x ${k?'+':'−'} ${b}x = ${s}x. The number ${c} stays.`,`ተመሳሳይ ቁሞችን አዋህዱ፦ ${a}x ${k?'+':'−'} ${b}x = ${s}x። ${c} እንዳለ ይቀራል።`)}},
 solve(){const k=rnd(0,2);const x=rnd(2,15);if(k===0){const a=rnd(3,30);return{q:L(`Solve: x + ${a} = ${x+a}`,`ፍቱ፦ x + ${a} = ${x+a}`),...nO(x,[a,-1,1,2]),e:L(`x = ${x+a} − ${a} = ${x}`,`x = ${x+a} − ${a} = ${x}`)}}
  if(k===1){const a=rnd(2,9);return{q:L(`Solve: ${a}x = ${a*x}`,`ፍቱ፦ ${a}x = ${a*x}`),...nO(x,[a,-1,1,x])
  ,e:L(`x = ${a*x} ÷ ${a} = ${x}`,`x = ${a*x} ÷ ${a} = ${x}`)}}
  const a=rnd(2,9),b=rnd(1,10);return{q:L(`Solve: ${a}x + ${b} = ${a*x+b}`,`ፍቱ፦ ${a}x + ${b} = ${a*x+b}`),...nO(x,[1,-1,b,2]),e:L(`${a}x = ${a*x+b} − ${b} = ${a*x}, so x = ${x}.`,`${a}x = ${a*x+b} − ${b} = ${a*x}፤ ስለዚህ x = ${x}።`)}},
 mean(){const n=rnd(3,5);const m=rnd(5,40);let v=Array.from({length:n},()=>m+rnd(-5,5));const s=v.reduce((a,b)=>a+b,0);const fix=m*n-s;v[0]+=fix;if(v[0]<0)return GEN.mean();
  return{q:L(`Find the mean (average): ${v.join(', ')}`,`አማካዩን ፈልጉ፦ ${v.join('፣ ')}`),...nO(m,[1,-1,2,n]),e:L(`Sum = ${m*n}; ${m*n} ÷ ${n} = ${m}.`,`ድምር = ${m*n}፤ ${m*n} ÷ ${n} = ${m}።`)}},
 prob(){const k=rnd(0,2);if(k===0){const r=rnd(1,6),b=rnd(1,6);const t=r+b;return{fig:`<div style="font-size:2rem;text-align:center">${'🔴'.repeat(r)}${'🔵'.repeat(b)}</div>`,q:L(`A bag has ${r} red and ${b} blue balls. Chance of picking red?`,`ከረጢቱ ${r} ቀይና ${b} ሰማያዊ ኳሶች አሉት። ቀይ የመውጣት ዕድሉ?`),...opts(`${r}/${t}`,[`${b}/${t}`,`${r}/${b}`,`1/${t}`]),e:L(`Favourable outcomes ÷ all outcomes = ${r}/${t}.`,`ተፈላጊ ውጤቶች ÷ ሁሉም ውጤቶች = ${r}/${t}።`)}}
  if(k===1){const f=rnd(1,6);return{fig:'<div style="font-size:3rem;text-align:center">🎲</div>',q:L(`You roll a die. Chance of getting ${f}?`,`ዳይስ ብትወረውሩ ${f} የማግኘት ዕድሉ?`),...opts('1/6',['1/2',`${f}/6`,'6/1'].filter(x=>x!=='1/6')),e:L('A die has 6 equal faces, one of each number.','ዳይስ 6 እኩል ገጾች አሉት፤ እያንዳንዱ ቁጥር አንድ ጊዜ።')}}
  const W=[[L('certain','እርግጠኛ'),L('The sun will rise tomorrow.','ፀሐይ ነገ ትወጣለች።')],[L('impossible','የማይቻል'),L('A cow will fly to the moon.','ላም ወደ ጨረቃ ትበራለች።')],[L('even chance','እኩል ዕድል'),L('A coin lands on heads.','ሳንቲም ሲወረወር ጭንቅላቱ ይወጣል።')]];const i=rnd(0,2);const o=shuffle([0,1,2]);
  return{q:L(`How likely? "${W[i][1].en}"`,`ምን ያህል ሊሆን ይችላል? "${W[i][1].am}"`),o:o.map(j=>W[j][0]),a:o.indexOf(i)}},
 dotplot(){const lab=L('Number of siblings of students','የተማሪዎች የወንድምና እህት ብዛት');const vals=[0,1,2,3,4].map(k=>[k,rnd(1,6)]);const mx=vals.reduce((p,c)=>c[1]>p[1]?c:p);const tot=vals.reduce((a,c)=>a+c[1],0);
  if(rnd(0,1))return{fig:dots(vals,lab),q:L('Which value is most common?','በብዛት የተደጋገመው የትኛው ነው?'),...opts(String(mx[0]),['0','1','2','3','4'].filter(x=>x!==String(mx[0]))),e:L('The tallest column of dots is the most common value (the mode).','ረጅሙ የነጥብ ዓምድ በብዛት የተደጋገመው ነው።')};
  return{fig:dots(vals,lab),q:L('How many students are shown in total?','በአጠቃላይ ስንት ተማሪዎች ተመዝግበዋል?'),...nO(tot,[1,-1,2,5]),e:L('Count every dot.','እያንዳንዱን ነጥብ ቁጠሩ።')}},
 atype(){const k=rnd(0,4);const deg=[rnd(10,85),90,rnd(95,175),180,rnd(190,350)][k];const N=[L('acute','ሹል'),L('right','ማዕዘናዊ'),L('obtuse','ዝርጥ'),L('straight','ዝርግ'),L('reflex','ገልባጭ (ሪፍሌክስ)')];const o=shuffle([0,1,2,3,4]).slice(0,4);if(!o.includes(k))o[0]=k;const oo=shuffle(o);
  return{fig:deg<=180?K4.angle(deg):`<div class="bigq">${deg}°</div>`,q:L(`An angle of ${deg}° is…`,`${deg}° የሆነ አንግል…`),o:oo.map(j=>N[j]),a:oo.indexOf(k),e:L('Acute < 90° · right = 90° · obtuse between 90° and 180° · straight = 180° · reflex > 180°.','ሹል < 90° · ማዕዘናዊ = 90° · ዝርጥ ከ90° እስከ 180° · ዝርግ = 180° · ገልባጭ > 180°።')}},
 solid(){const s=SOLIDS[rnd(0,4)];const k=rnd(0,2);const P=[L('faces','ገጾች'),L('edges','ጠርዞች'),L('vertices','መለያያዎች (ጫፎች)')];const v=s[1+k];
  return{fig:`<div style="font-size:3.4rem;text-align:center">${s[4]}</div>`,q:L(`How many ${P[k].en} does a ${s[0].en} have?`,`${s[0].am} ስንት ${P[k].am} አሉት?`),...nO(v,[1,-1,2,-2]),e:L(`${s[0].en}: ${s[1]} faces, ${s[2]} edges, ${s[3]} vertices.`,`${s[0].am}፦ ${s[1]} ገጾች፣ ${s[2]} ጠርዞች፣ ${s[3]} መለያያዎች።`)}},
 vol(){const l=rnd(2,9),w=rnd(2,6),h=rnd(2,6);const v=l*w*h;return{fig:box(l,w,h),q:L('What is the volume of this box?','የዚህ ሳጥን ይዘት ስንት ነው?'),...opts(`${v} cm³`,[`${l+w+h} cm³`,`${2*(l*w+w*h+l*h)} cm³`,`${l*w} cm³`]),e:L(`V = l × w × h = ${l} × ${w} × ${h} = ${v} cm³`,`ይዘት = ር × ወ × ከ = ${l} × ${w} × ${h} = ${v} ሴ.ሜ³`)}},
 areau(){const C=[()=>{const m=rnd(2,9);return[`${m} m² = ? cm²`,m*10000,[m*100,m*1000,m*100000]]},()=>{const h=rnd(2,9);return[`${h} ha = ? m²`,h*10000,[h*1000,h*100,h*100000]]},()=>{const k=rnd(2,9);return[`${k} km² = ? ha`,k*100,[k*1000,k*10,k*10000]]},()=>{const c=rnd(2,9)*10000;return[`${fmt(c)} cm² = ? m²`,c/10000,[c/100,c/1000,c/10]]},()=>{const d=rnd(2,9);return[`${d} dm² = ? cm²`,d*100,[d*10,d*1000,d*10000]]}];
  const [q,ans,pool]=C[rnd(0,4)]();return{q:L(q,q),...opts(fmt(ans),pool.map(fmt)),e:L('1 m² = 10,000 cm² · 1 ha = 10,000 m² · 1 km² = 100 ha · 1 dm² = 100 cm²','1 ሜ² = 10,000 ሳ.ሜ² · 1 ሄክታር = 10,000 ሜ² · 1 ኪ.ሜ² = 100 ሄክታር · 1 ዴ.ሜ² = 100 ሳ.ሜ²')}},
 volu(){const C=[()=>{const l=rnd(2,9);return[`${l} L = ? mL`,l*1000,[l*100,l*10,l*10000]]},()=>{const c=rnd(2,9)*100;return[`${c} cm³ = ? mL`,c,[c*10,c/10,c*1000]]},()=>{const m=rnd(2,9);return[`${m} m³ = ? L`,m*1000,[m*100,m*10,m*1000000]]},()=>{const d=rnd(2,9);return[`${d} dm³ = ? L`,d,[d*10,d*1000,d*100]]}];
  const [q,ans,pool]=C[rnd(0,3)]();return{q:L(q,q),...opts(fmt(ans),pool.map(fmt)),e:L('1 L = 1,000 mL = 1 dm³ · 1 mL = 1 cm³ · 1 m³ = 1,000 L','1 ሊትር = 1,000 ሚ.ሊ = 1 ዴ.ሜ³ · 1 ሚ.ሊ = 1 ሳ.ሜ³ · 1 ሜ³ = 1,000 ሊትር')}}
};
function drills(list){return list.map(d=>({title:d.title,tip:d.tip,type:'drill',need:d.need||5,gen:GEN[d.kind]||K4.GEN[d.kind]}))}
window.K5={drills,GEN,pie,pies,box,dots,F,MIX};
})();
