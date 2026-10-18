/* ሒሳብ · ምዕራፍ 9 · የጂኦሜትሪ ምስሎች */
(function(){
const {rnd,shuffle}=G3;
const F='<path d="M0 0h14v6H6v6h8v6H6v12H0z" fill="var(--blue)"/>'; /* letter-F shape: not symmetric, shows moves clearly */
const scene=(kind)=>{const a=`<g transform="translate(30 30)">${F}</g>`;let b;
 if(kind==='slide')b=`<g transform="translate(110 30)">${F}</g>`;
 if(kind==='flip')b=`<g transform="translate(144 30) scale(-1 1)">${F}</g>`;
 if(kind==='turn')b=`<g transform="translate(140 44) rotate(90)">${F}</g>`;
 return`<svg viewBox="0 0 190 90" role="img" aria-label="shape moved" style="width:min(300px,100%);height:auto"><rect x="1" y="1" width="188" height="88" rx="10" fill="var(--surface-2)"/>${a}<path d="M62 46h30" stroke="var(--ink-soft)" stroke-width="3" marker-end="url(#ar)"/><defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4 0 8z" fill="var(--ink-soft)"/></marker></defs>${kind==='flip'?'<path d="M127 10v70" stroke="var(--clay)" stroke-dasharray="4 4" stroke-width="2"/>':''}${b}</svg>`};
const poly=n=>{const pts=Array.from({length:n},(_,i)=>{const a=-Math.PI/2+i*2*Math.PI/n;return(50+38*Math.cos(a)).toFixed(1)+','+(52+38*Math.sin(a)).toFixed(1)}).join(' ');return`<svg viewBox="0 0 100 100" role="img" aria-label="${n}-sided shape"><polygon points="${pts}" fill="var(--green-soft)" stroke="var(--green)" stroke-width="4"/></svg>`};
const PN={3:{en:'Triangle (3 sides)',am:'ጎነ-ሦስት (3 ጎን)'},4:{en:'Quadrilateral (4 sides)',am:'ጎነ-አራት (4 ጎን)'},5:{en:'Pentagon (5 sides)',am:'ጎነ-አምስት (5 ጎን)'},6:{en:'Hexagon (6 sides)',am:'ጎነ-ስድስት (6 ጎን)'},8:{en:'Octagon (8 sides)',am:'ጎነ-ስምንት (8 ጎን)'}};
const MV={slide:{en:'Slide',am:'ማንሸራተት'},flip:{en:'Flip (mirror)',am:'ማንፀባረቅ'},turn:{en:'Turn',am:'ማዞር'}};
const S=(inner,l)=>`<svg viewBox="0 0 100 100" role="img" aria-label="${l}">${inner}</svg>`;
Unit.start({
 id:'math-9',subject:'math',subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 9',am:'ምዕራፍ 9'},
 title:{en:'Geometric Shapes',am:'የጂኦሜትሪ ምስሎች'},
 footer:{en:'Built on the Grade 3 Mathematics student book, Chapter 9: slides, flips, turns, symmetry and polygons.',am:'በ3ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 9 ላይ የተመሰረተ፦ ማንሸራተት፣ ማንፀባረቅ፣ ማዞር፣ ምጥጥንና ጎነ-ብዙዎች።'},
 missions:[
 {title:{en:'Slide, flip or turn?',am:'ማንሸራተት፣ ማንፀባረቅ ወይስ ማዞር?'},type:'drill',need:6,
  tip:{en:'A SLIDE moves a shape without changing which way it faces. A FLIP makes a mirror image. A TURN spins it around a point.',am:'ማንሸራተት ምስሉ የሚመለከትበትን አቅጣጫ ሳይቀይር ያንቀሳቅሳል። ማንፀባረቅ የመስታወት አምሳያ ይሠራል። ማዞር በአንድ ነጥብ ዙሪያ ያሽከረክረዋል።'},
  gen(){const k=['slide','flip','turn'][rnd(0,2)];const o=['slide','flip','turn'];return{fig:scene(k),q:{en:'How did the shape move?',am:'ምስሉ እንዴት ተንቀሳቀሰ?'},o:o.map(x=>MV[x]),a:o.indexOf(k)}}},
 {title:{en:'Symmetry',am:'ምጥጥን'},type:'sort',
  tip:{en:'A shape is symmetric if you can fold it so both halves match exactly. The fold line is the line of symmetry.',am:'አንድ ምስል ሲታጠፍ ሁለቱ ግማሾች በትክክል ከተገጣጠሙ ምጥጥናዊ ነው። የማጠፊያው መስመር የምጥጥን መስመር ይባላል።'},
  buckets:[{en:'Symmetric',am:'ምጥጥናዊ'},{en:'Not symmetric',am:'ኢ-ምጥጥናዊ'}],
  items:[{t:{en:'Heart',am:'ልብ'},fig:S('<path d="M50 86C10 58 14 22 36 22c8 0 12 6 14 10 2-4 6-10 14-10 22 0 26 36-14 64z" fill="var(--clay)"/><path d="M50 14v80" stroke="var(--ink)" stroke-dasharray="4 4"/>','heart'),b:0},
   {t:{en:'Butterfly',am:'ቢራቢሮ'},fig:S('<ellipse cx="32" cy="40" rx="20" ry="16" fill="var(--plum)"/><ellipse cx="68" cy="40" rx="20" ry="16" fill="var(--plum)"/><ellipse cx="34" cy="68" rx="14" ry="12" fill="var(--sun)"/><ellipse cx="66" cy="68" rx="14" ry="12" fill="var(--sun)"/><rect x="47" y="24" width="6" height="56" rx="3" fill="var(--ink)"/>','butterfly'),b:0},
   {t:{en:'Letter F',am:'F ፊደል'},fig:S('<path d="M30 14h40v12H44v14h20v12H44v34H30z" fill="var(--blue)"/>','F'),b:1},
   {t:{en:'Circle',am:'ክብ'},fig:S('<circle cx="50" cy="50" r="36" fill="var(--green)"/>','circle'),b:0},
   {t:{en:'Letter G',am:'G ፊደል'},fig:S('<path d="M76 30A30 30 0 1 0 80 56H54V44h26" fill="none" stroke="var(--blue)" stroke-width="10"/>','G'),b:1},
   {t:{en:'Ethiopian cross pattern',am:'የመስቀል ቅርጽ'},fig:S('<path d="M42 10h16v32h32v16H58v32H42V58H10V42h32z" fill="var(--sun)"/>','cross'),b:0},
   {t:{en:'Footprint',am:'የእግር ዱካ'},fig:S('<ellipse cx="46" cy="60" rx="16" ry="26" fill="var(--ink-soft)"/><circle cx="38" cy="24" r="6" fill="var(--ink-soft)"/><circle cx="52" cy="22" r="5" fill="var(--ink-soft)"/><circle cx="62" cy="28" r="4" fill="var(--ink-soft)"/>','footprint'),b:1}]},
 {title:{en:'Name the polygon',am:'ጎነ-ብዙውን ሰይሙ'},type:'drill',need:6,
  tip:{en:'A polygon is a closed shape with straight sides. We name it by counting its sides. Touch each side as you count!',am:'ጎነ-ብዙ ቀጥተኛ ጎኖች ያሉት ዝግ ምስል ነው። ጎኖቹን በመቁጠር እንሰይመዋለን። ስትቆጥሩ እያንዳንዱን ጎን ንኩ!'},
  gen(){const n=[3,4,5,6,8][rnd(0,4)];const o=shuffle([3,4,5,6,8]).slice(0,3);if(!o.includes(n))o[0]=n;const oo=shuffle(o);return{fig:poly(n),q:{en:'What is this shape called?',am:'ይህ ምስል ምን ይባላል?'},o:oo.map(x=>PN[x]),a:oo.indexOf(n)}}},
 {title:{en:'Shapes around us',am:'በዙሪያችን ያሉ ምስሎች'},type:'quiz',
  tip:{en:'Look for shapes in daily life: road signs, houses, mesob baskets and fabric patterns.',am:'በዕለት ሕይወት ምስሎችን ፈልጉ፦ የመንገድ ምልክቶች፣ ቤቶች፣ መሶብና የጥለት ጨርቆች።'},
  items:[
   {q:{en:'A STOP road sign has 8 sides. It is an…',am:'“ቁም” የሚል የመንገድ ምልክት 8 ጎኖች አሉት። ይህ…'},o:[PN[8],PN[6],PN[5]],a:0},
   {q:{en:'A door is a rectangle. How many sides?',am:'በር ሬክታንግል ነው። ስንት ጎኖች አሉት?'},o:['4','3','5','2'],a:0},
   {q:{en:'Honeycomb cells have 6 sides. They are…',am:'የማር እንጀራ ቀዳዳዎች 6 ጎኖች አሏቸው። እነሱም…'},o:[PN[6],PN[4],PN[8]],a:0,e:{en:'Bees use hexagons because they fit together with no gaps. Nature is a great engineer!',am:'ንቦች ባለ ስድስት ጎንን የሚጠቀሙት ያለ ክፍተት ስለሚገጣጠም ነው። ተፈጥሮ ታላቅ መሐንዲስ ናት!'}},
   {q:{en:'Is a circle a polygon?',am:'ክብ ጎነ-ብዙ ነው?'},o:[{en:'Yes',am:'አዎ'},{en:'No, it has no straight sides',am:'አይደለም፤ ቀጥተኛ ጎን የለውም'}],a:1},
   {q:{en:'You see your face in a mirror. This is like a…',am:'ፊታችሁን በመስታወት ታያላችሁ። ይህ እንደ…'},o:[MV.flip,MV.slide,MV.turn],a:0}
  ]},
 {type:'exam',items:[
   {q:{en:'A shape with 5 sides is a…',am:'5 ጎኖች ያሉት ምስል…'},o:[PN[5],PN[6],PN[4]],a:0},
   {q:{en:'Moving a book across a table without turning it is a…',am:'መጽሐፍን ሳያዞሩ በጠረጴዛ ላይ ማንቀሳቀስ…'},o:[MV.slide,MV.flip,MV.turn],a:0},
   {q:{en:'The hands of a clock move by…',am:'የሰዓት ቆጣሪዎች የሚንቀሳቀሱት በ…'},o:[MV.turn,MV.slide,MV.flip],a:0},
   {q:{en:'How many lines of symmetry does a square have?',am:'ካሬ ስንት የምጥጥን መስመሮች አሉት?'},o:['4','1','2','0'],a:0,e:{en:'2 straight (up-down, left-right) + 2 diagonal.',am:'2 ቀጥ (ላይ-ታች፣ ግራ-ቀኝ) + 2 ሰያፍ።'}}]},
 {type:'notes',notes:{
  big:{en:'Shapes can move (slide, flip, turn), can be symmetric, and polygons are named by their number of sides.',am:'ምስሎች ሊንቀሳቀሱ (ማንሸራተት፣ ማንፀባረቅ፣ ማዞር)፣ ምጥጥናዊ ሊሆኑ ይችላሉ፤ ጎነ-ብዙዎች በጎናቸው ብዛት ይሰየማሉ።'},
  points:[{en:'Slide: same direction, new place. Flip: mirror image. Turn: rotate around a point (clockwise or anticlockwise).',am:'ማንሸራተት፦ ያው አቅጣጫ፣ አዲስ ቦታ። ማንፀባረቅ፦ የመስታወት አምሳያ። ማዞር፦ በነጥብ ዙሪያ (በሰዓትዮሽ ወይም በኢ-ሰዓትዮሽ)።'},{en:'Symmetric: fold it and both halves match.',am:'ምጥጥናዊ፦ ሲታጠፍ ሁለቱ ግማሾች ይገጣጠማሉ።'},{en:'3 sides triangle, 4 quadrilateral, 5 pentagon, 6 hexagon, 8 octagon.',am:'3 ጎን ጎነ-ሦስት፣ 4 ጎነ-አራት፣ 5 ጎነ-አምስት፣ 6 ጎነ-ስድስት፣ 8 ጎነ-ስምንት።'}],
  words:[['ጎነ-ብዙ',{en:'polygon',am:'ቀጥተኛ ጎኖች ያሉት ዝግ ምስል'}],['ምጥጥን',{en:'symmetry',am:'የሁለት ግማሾች መገጣጠም'}]],
  remember:{en:'Count sides → name the polygon.',am:'ጎኖችን ቁጠሩ → ጎነ-ብዙውን ሰይሙ።'},
  exam:[[{en:'6 sides = ?',am:'6 ጎን = ?'},{en:'Hexagon',am:'ጎነ-ስድስት'}],[{en:'Mirror image is a…',am:'የመስታወት አምሳያ…'},{en:'Flip',am:'ማንፀባረቅ'}],[{en:'Is the letter A symmetric?',am:'A ፊደል ምጥጥናዊ ነው?'},{en:'Yes, one vertical line.',am:'አዎ፤ አንድ ቋሚ መስመር።'}]],
  innovate:{title:{en:'Design a symmetric logo',am:'ምጥጥናዊ አርማ ንድፍ'},text:{en:'Many famous company logos are symmetric because they look balanced. Design a logo for a pretend business.',am:'ብዙ ታዋቂ የኩባንያ አርማዎች ሚዛናዊ ስለሚመስሉ ምጥጥናዊ ናቸው። ለሙከራ ንግድ አርማ ንድፍ አውጡ።'},
   steps:[{en:'Name your business (e.g. a juice stall).',am:'ንግዳችሁን ሰይሙ (ለምሳሌ የጭማቂ መሸጫ)።'},{en:'Fold a paper, draw half the logo on one side, cut it out.',am:'ወረቀት አጥፉ፤ የአርማውን ግማሽ በአንድ በኩል ሳሉና ቁረጡ።'},{en:'Open it: is it symmetric? Use polygons in your design.',am:'ክፈቱት፦ ምጥጥናዊ ነው? በንድፋችሁ ጎነ-ብዙዎችን ተጠቀሙ።'},{en:'Ask five people which logo they remember best.',am:'አምስት ሰዎችን የትኛውን አርማ በደንብ እንደሚያስታውሱ ጠይቁ።'}]}}}
 ]});
})();
