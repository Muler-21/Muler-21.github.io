/* 1ኛ ክፍል ሒሳብ · ምዕራፍ 8 · የጂኦሜትሪ ምስሎች */
(function(){
const {tx}=G3;const {shape}=K1;
const N={cube:{en:'Cube',am:'ኩብ'},sphere:{en:'Sphere',am:'ሉል'},cylinder:{en:'Cylinder',am:'ሲሊንደር'},cone:{en:'Cone',am:'ኮን'},pyramid:{en:'Pyramid',am:'ፒራሚድ'},prism:{en:'Rectangular prism (box)',am:'ሬክታንግላዊ ፕሪዝም (ሳጥን)'},
 circle:{en:'Circle',am:'ክብ'},square:{en:'Square',am:'ካሬ'},rectangle:{en:'Rectangle',am:'አራት ማዕዘን'},triangle:{en:'Triangle',am:'ሦስት ማዕዘን'}};
const O=k=>({svg:shape(k,56),label:N[k]});
Unit.start({
 id:'g1-math-8',grade:1,subject:'math',
 subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 8',am:'ምዕራፍ 8'},
 title:{en:'Shapes',am:'የጂኦሜትሪ ምስሎች'},
 footer:{en:'Built on the Grade 1 Mathematics student book, Chapter 8: solid shapes, their faces, flat shapes, sides and corners.',am:'በ1ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 8 ላይ የተመሰረተ፦ ጥጥር ምስሎች፣ ገጾቻቸው፣ የጠለል ምስሎች፣ ጎኖችና መለያያዎች (ማዕዘኖች)።'},
 missions:[
 {title:{en:'Name the solid shape',am:'ጥጥር ምስሉን ሰይሙ'},type:'quiz',shuffle:true,
  tip:{en:'Solid shapes are not flat. You can hold them: a ball is a sphere, a box is a rectangular prism.',am:'ጥጥር ምስሎች ዝርግ አይደሉም። በእጅ ልትይዟቸው ትችላላችሁ፦ ኳስ ሉል ነው፤ ሳጥን ሬክታንግላዊ ፕሪዝም ነው።'},
  items:[['cube','sphere','cone'],['sphere','cylinder','cube'],['cylinder','cone','prism'],['cone','pyramid','sphere'],['pyramid','cube','cone'],['prism','cylinder','pyramid']].map(([k,...w])=>({fig:shape(k,120),q:{en:'What is this solid shape?',am:'ይህ ጥጥር ምስል ምን ይባላል?'},o:[N[k],N[w[0]],N[w[1]]],a:0}))},
 {title:{en:'Shapes around us',am:'በዙሪያችን ያሉ ምስሎች'},type:'match',
  tip:{en:'Look around your home and school. Many things have the shape of solids!',am:'ቤታችሁንና ትምህርት ቤታችሁን ተመልከቱ። ብዙ ነገሮች የጥጥር ምስል ቅርጽ አላቸው!'},
  rounds:[[[{en:'⚽ ball',am:'⚽ ኳስ'},N.sphere],[{en:'🎲 dice',am:'🎲 ዳይ'},N.cube],[{en:'🥫 tin',am:'🥫 ጣሳ'},N.cylinder]],[[{en:'🍦 ice-cream cone',am:'🍦 የአይስክሬም ኮን'},N.cone],[{en:'📦 box',am:'📦 ሳጥን'},N.prism],[{en:'⛺ tent',am:'⛺ ድንኳን'},N.pyramid]]]},
 {title:{en:'Roll or slide?',am:'ተንከባላይ ወይስ ተንሸራታች?'},type:'sort',
  tip:{en:'Shapes with curved faces can roll. Shapes with flat faces can slide. Some can do both!',am:'ጎባጣ ገጽ ያላቸው ምስሎች ይንከባለላሉ። ዝርግ ገጽ ያላቸው ይንሸራተታሉ። አንዳንዶቹ ሁለቱንም ያደርጋሉ!'},
  buckets:[{en:'Rolls',am:'ይንከባለላል'},{en:'Slides',am:'ይንሸራተታል'},{en:'Both',am:'ሁለቱንም'}],
  items:[{t:N.sphere,fig:shape('sphere',50),b:0},{t:N.cube,fig:shape('cube',50),b:1},{t:N.prism,fig:shape('prism',50),b:1},{t:N.cylinder,fig:shape('cylinder',50),b:2},{t:N.cone,fig:shape('cone',50),b:2},{t:N.pyramid,fig:shape('pyramid',50),b:1}]},
 {title:{en:'Faces of solids',am:'የጥጥር ምስል ገጾች'},type:'quiz',
  tip:{en:'A face is a flat side of a solid shape. Trace a face on paper and you get a flat shape!',am:'ገጽ የጥጥር ምስል ዝርግ ክፍል ነው። ገጹን በወረቀት ላይ ብታስመሩት የጠለል ምስል ታገኛላችሁ!'},
  items:[{fig:shape('cube',110),q:{en:'How many faces does a cube have?',am:'ኩብ ስንት ገጾች አሉት?'},o:['6','4','8','1'],a:0},
   {fig:shape('cylinder',110),q:{en:'Trace the top of a tin. Which flat shape do you get?',am:'የጣሳውን አናት ብታስመሩት የትኛውን የጠለል ምስል ታገኛላችሁ?'},o:[O('circle'),O('square'),O('triangle')],a:0},
   {fig:shape('cube',110),q:{en:'Each face of a cube is a…',am:'የኩብ እያንዳንዱ ገጽ…'},o:[O('square'),O('circle'),O('triangle')],a:0},
   {fig:shape('sphere',110),q:{en:'How many flat faces does a sphere have?',am:'ሉል ስንት ዝርግ ገጾች አሉት?'},o:['0','1','2','6'],a:0}]},
 {title:{en:'Sides and corners',am:'ጎኖችና ማዕዘኖች'},type:'quiz',
  tip:{en:'Count the straight sides and the corners of flat shapes. A triangle has 3 sides and 3 corners.',am:'የጠለል ምስሎችን ቀጥ ያሉ ጎኖችና ማዕዘኖች ቁጠሩ። ሦስት ማዕዘን 3 ጎኖችና 3 ማዕዘኖች አሉት።'},
  items:[{fig:shape('triangle',110),q:{en:'How many sides?',am:'ስንት ጎኖች?'},o:['3','4','0','5'],a:0},
   {fig:shape('square',110),q:{en:'How many corners?',am:'ስንት ማዕዘኖች?'},o:['4','3','2','0'],a:0},
   {fig:shape('circle',110),q:{en:'How many corners does a circle have?',am:'ክብ ስንት ማዕዘኖች አሉት?'},o:['0','1','4','3'],a:0},
   {q:{en:'Which shape has 4 sides, 2 long and 2 short?',am:'2 ረጅምና 2 አጭር፣ 4 ጎኖች ያሉት ምስል የትኛው ነው?'},o:[O('rectangle'),O('square'),O('triangle')],a:0}]},
 {type:'exam',items:[
   {q:{en:'A football is shaped like a…',am:'የእግር ኳስ ቅርጹ…'},o:[O('sphere'),O('cube'),O('cone')],a:0},
   {q:{en:'Which solid has 6 square faces?',am:'6 ካሬ ገጾች ያሉት ጥጥር ምስል?'},o:[O('cube'),O('cylinder'),O('pyramid')],a:0},
   {q:{en:'Which can roll AND slide?',am:'የሚንከባለልም የሚንሸራተትም የትኛው ነው?'},o:[O('cylinder'),O('cube'),O('sphere')],a:0},
   {q:{en:'How many sides does a triangle have?',am:'ሦስት ማዕዘን ስንት ጎኖች አሉት?'},o:['3','4','6','0'],a:0},
   {q:{en:'Yosef\'s condominium building looks like a…',am:'የእነ ዮሴፍ ኮንዶሚኒየም ሕንጻ ቅርጹ…'},o:[O('prism'),O('sphere'),O('cone')],a:0}
  ]},
 {type:'notes',notes:{
  big:{en:'Shapes are everywhere. Solid shapes can be held; their flat faces are flat shapes.',am:'ምስሎች በሁሉም ቦታ አሉ። ጥጥር ምስሎች በእጅ ይያዛሉ፤ ዝርግ ገጾቻቸው የጠለል ምስሎች ናቸው።'},
  points:[{en:'Solid shapes: cube, sphere, cylinder, cone, pyramid, rectangular prism.',am:'ጥጥር ምስሎች፦ ኩብ፣ ሉል፣ ሲሊንደር፣ ኮን፣ ፒራሚድ፣ ሬክታንግላዊ ፕሪዝም።'},
   {en:'Curved shapes roll; flat-faced shapes slide; cylinders and cones do both.',am:'ጎባጦች ይንከባለላሉ፤ ዝርግ ገጽ ያላቸው ይንሸራተታሉ፤ ሲሊንደርና ኮን ሁለቱንም ያደርጋሉ።'},
   {en:'A face is a flat part; a cube has 6 square faces.',am:'ገጽ ዝርግ ክፍል ነው፤ ኩብ 6 ካሬ ገጾች አሉት።'},
   {en:'Flat shapes: triangle (3 sides), square and rectangle (4 sides), circle (no corners).',am:'የጠለል ምስሎች፦ ሦስት ማዕዘን (3 ጎኖች)፣ ካሬና አራት ማዕዘን (4 ጎኖች)፣ ክብ (ማዕዘን የለውም)።'}],
  words:[['ጥጥር ምስል',{en:'solid shape',am:'የሚያዝ ምስል'}],['የጠለል ምስል',{en:'flat shape',am:'ዝርግ ምስል'}],['ገጽ',{en:'face',am:'ዝርግ ክፍል'}],['ጎን',{en:'side',am:'ቀጥ ያለ መስመር'}]],
  remember:{en:'Count sides with your finger as you go round the shape.',am:'በምስሉ ዙሪያ እየዞራችሁ ጎኖቹን በጣታችሁ ቁጠሩ።'},
  exam:[[{en:'Name 2 things shaped like a cylinder',am:'ሲሊንደር የሚመስሉ 2 ነገሮችን ጥቀሱ'},{en:'A tin, a cup, a jerrycan, a pipe',am:'ጣሳ፣ ኩባያ፣ ቧንቧ'}],[{en:'How many corners does a rectangle have?',am:'አራት ማዕዘን ስንት ማዕዘኖች አሉት?'},'4'],[{en:'Does a cube roll?',am:'ኩብ ይንከባለላል?'},{en:'No, it slides',am:'አይንከባለልም፤ ይንሸራተታል'}]],
  innovate:{title:{en:'Shape town from waste',am:'ከቆሻሻ የተሠራች የምስሎች ከተማ'},text:{en:'Builders and designers use shapes. Build a small model town from empty boxes, tins and paper cones.',am:'ገንቢዎችና ዲዛይነሮች ምስሎችን ይጠቀማሉ። ከባዶ ሳጥኖች፣ ጣሳዎችና የወረቀት ኮኖች ትንሽ የሞዴል ከተማ ሥሩ።'},
   steps:[{en:'Collect empty boxes, tins and paper.',am:'ባዶ ሳጥኖችን፣ ጣሳዎችንና ወረቀት ሰብስቡ።'},{en:'Boxes become houses, tins become water tanks, cones become roofs.',am:'ሳጥኖች ቤት፣ ጣሳዎች የውኃ ታንከር፣ ኮኖች ጣሪያ ይሁኑ።'},{en:'Name every shape you used.',am:'የተጠቀማችሁትን እያንዳንዱን ምስል ሰይሙ።'},{en:'Show your town to your family and explain it.',am:'ከተማችሁን ለቤተሰባችሁ አሳዩና አብራሩ።'}]}
 }}
 ]});
})();
