/* 2ኛ ክፍል ሒሳብ · ምዕራፍ 9 · የጂኦሜትሪ ምስሎች */
(function(){
const {shuffle}=G3;const {shape}=K1;const SM={en:'Mathematics',am:'ሒሳብ'};
const N={cube:{en:'Cube',am:'ኩብ'},prism:{en:'Rectangular prism',am:'ሬክታንግላዊ ፕሪዝም'},pyramid:{en:'Pyramid',am:'ፒራሚድ'},cylinder:{en:'Cylinder',am:'ሲሊንደር'},cone:{en:'Cone',am:'ኮን'},sphere:{en:'Sphere',am:'ሉል'},square:{en:'Square',am:'ካሬ'},rectangle:{en:'Rectangle',am:'አራት ማዕዘን'},triangle:{en:'Triangle',am:'ሦስት ማዕዘን'},circle:{en:'Circle',am:'ክብ'}};
Unit.start({id:'g2-math-9',grade:2,subject:'math',subjectName:SM,chapter:{en:'Chapter 9',am:'ምዕራፍ 9'},
 title:{en:'Shapes',am:'የጂኦሜትሪ ምስሎች'},
 footer:{en:'Built on the Grade 2 Mathematics student book, Chapter 9: solids, their faces, edges and vertices, flat shapes, and splitting and joining shapes.',am:'በ2ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 9 ላይ የተመሰረተ፦ ጥጥር ምስሎች፣ ገጽ፣ ጠርዝና መለያያ፣ የጠለል ምስሎች፣ ምስሎችን መነጠልና ማጣመር።'},
 missions:[
 {title:{en:'Faces, edges, vertices',am:'ገጽ፣ ጠርዝ፣ መለያያ'},type:'quiz',
  tip:{en:'Face = flat side. Edge = where two faces meet. Vertex = a corner where edges meet.',am:'ገጽ = ዝርግ ጎን። ጠርዝ = ሁለት ገጾች የሚገናኙበት። መለያያ = ጠርዞች የሚገናኙበት ጫፍ።'},
  items:[{fig:shape('cube',110),q:{en:'How many faces does a cube have?',am:'ኩብ ስንት ገጾች አሉት?'},o:['6','8','12','4'],a:0},{fig:shape('cube',110),q:{en:'How many vertices (corners) does a cube have?',am:'ኩብ ስንት መለያያዎች አሉት?'},o:['8','6','12','4'],a:0},{fig:shape('cube',110),q:{en:'How many edges does a cube have?',am:'ኩብ ስንት ጠርዞች አሉት?'},o:['12','8','6','10'],a:0},{fig:shape('pyramid',110),q:{en:'A square pyramid has how many faces?',am:'ካሬ መሠረት ያለው ፒራሚድ ስንት ገጾች አሉት?'},o:['5','4','6','8'],a:0},{fig:shape('sphere',110),q:{en:'How many vertices does a sphere have?',am:'ሉል ስንት መለያያዎች አሉት?'},o:['0','1','2','8'],a:0}]},
 {title:{en:'Name the solid',am:'ጥጥር ምስሉን ሰይሙ'},type:'quiz',shuffle:true,
  tip:{en:'Look at the faces: all squares, rectangles, circles or triangles?',am:'ገጾቹን ተመልከቱ፦ ሁሉም ካሬ፣ አራት ማዕዘን፣ ክብ ወይስ ሦስት ማዕዘን?'},
  items:['cube','prism','pyramid','cylinder','cone'].map(k=>{const o=shuffle([k,...shuffle(['cube','prism','pyramid','cylinder','cone','sphere'].filter(x=>x!==k)).slice(0,2)]);return{fig:shape(k,110),q:{en:'Name this solid.',am:'ይህን ጥጥር ምስል ሰይሙ።'},o:o.map(x=>N[x]),a:o.indexOf(k)}})},
 {title:{en:'Flat shapes',am:'የጠለል ምስሎች'},type:'match',
  tip:{en:'Count sides and corners to name a flat shape.',am:'የጠለል ምስልን ለመሰየም ጎኖችንና ማዕዘኖችን ቁጠሩ።'},
  rounds:[[[{en:'3 sides, 3 corners',am:'3 ጎኖች፣ 3 ማዕዘኖች'},N.triangle],[{en:'4 equal sides',am:'4 እኩል ጎኖች'},N.square],[{en:'2 long and 2 short sides',am:'2 ረጅምና 2 አጭር ጎኖች'},N.rectangle],[{en:'no sides, no corners',am:'ጎን የለም፣ ማዕዘን የለም'},N.circle]]]},
 {title:{en:'Split and join shapes',am:'ምስሎችን መነጠልና ማጣመር'},type:'quiz',
  tip:{en:'Shapes can be cut into smaller shapes, or joined to make new shapes.',am:'ምስሎች ወደ ትናንሽ ምስሎች ሊቆረጡ ወይም አዲስ ምስል ለመሥራት ሊጣመሩ ይችላሉ።'},
  items:[{q:{en:'Two triangles joined along a side can make a…',am:'ሁለት ሦስት ማዕዘኖች በአንድ ጎን ሲጣመሩ… ይሠራሉ'},o:[N.square,N.circle],a:0},{q:{en:'Cut a square from corner to corner. You get 2…',am:'ካሬን ከማዕዘን ወደ ማዕዘን ቁረጡ። 2… ታገኛላችሁ'},o:[N.triangle,N.circle,N.square],a:0},{q:{en:'Two squares side by side make a…',am:'ጎን ለጎን የተቀመጡ ሁለት ካሬዎች… ይሠራሉ'},o:[N.rectangle,N.triangle],a:0}]},
 {type:'exam',items:[{q:{en:'Where two faces meet is an…',am:'ሁለት ገጾች የሚገናኙበት…'},o:[{en:'edge',am:'ጠርዝ'},{en:'face',am:'ገጽ'}],a:0},{q:{en:'A rectangular prism has how many faces?',am:'ሬክታንግላዊ ፕሪዝም ስንት ገጾች አሉት?'},o:['6','4','8'],a:0},{q:{en:'Which has no corners?',am:'ማዕዘን የሌለው?'},o:[N.circle,N.square,N.triangle],a:0},{q:{en:'2 triangles can make a…',am:'2 ሦስት ማዕዘኖች… ሊሠሩ ይችላሉ'},o:[N.square,N.circle],a:0}]},
 {type:'notes',notes:{
  big:{en:'Solid shapes have faces, edges and vertices. Flat shapes have sides and corners, and we can split or join them.',am:'ጥጥር ምስሎች ገጽ፣ ጠርዝና መለያያ አላቸው። የጠለል ምስሎች ጎንና ማዕዘን አላቸው፤ ልንነጥላቸውና ልናጣምራቸው እንችላለን።'},
  points:[{en:'Face = flat side; edge = line where faces meet; vertex = corner.',am:'ገጽ = ዝርግ ጎን፤ ጠርዝ = ገጾች የሚገናኙበት መስመር፤ መለያያ = ጫፍ።'},{en:'A cube: 6 faces, 12 edges, 8 vertices.',am:'ኩብ፦ 6 ገጾች፣ 12 ጠርዞች፣ 8 መለያያዎች።'},{en:'Flat shapes: triangle, square, rectangle, circle.',am:'የጠለል ምስሎች፦ ሦስት ማዕዘን፣ ካሬ፣ አራት ማዕዘን፣ ክብ።'},{en:'Shapes can be split and joined to make new shapes.',am:'ምስሎች ተነጥለውና ተጣምረው አዲስ ምስል ይሠራሉ።'}],
  words:[['ጠርዝ',{en:'edge',am:'ገጾች የሚገናኙበት'}],['መለያያ',{en:'vertex',am:'ጫፍ/ማዕዘን'}]],
  remember:{en:'Cube: 6 faces, 8 corners, 12 edges.',am:'ኩብ፦ 6 ገጾች፣ 8 ማዕዘኖች፣ 12 ጠርዞች።'},
  exam:[[{en:'Count faces, edges, vertices of a box at home',am:'በቤት ያለ ሳጥንን ገጽ፣ ጠርዝና መለያያ ቁጠሩ'},'6, 12, 8'],[{en:'What do 2 squares make?',am:'2 ካሬዎች ምን ይሠራሉ?'},{en:'A rectangle',am:'አራት ማዕዘን'}]],
  innovate:{title:{en:'Box-net packaging',am:'የሳጥን ማሸጊያ ዲዛይን'},text:{en:'Packaging designers cut flat shapes that fold into boxes. Unfold an old box, look at its shapes, and design your own gift box.',am:'የማሸጊያ ዲዛይነሮች ወደ ሳጥን የሚታጠፉ የጠለል ምስሎችን ይቆርጣሉ። አሮጌ ሳጥን ዘርጉ፣ ምስሎቹን ተመልከቱ፣ የራሳችሁን የስጦታ ሳጥን ንደፉ።'},
   steps:[{en:'Open an empty box flat.',am:'ባዶ ሳጥን ዘርግታችሁ ክፈቱ።'},{en:'Count the rectangles and squares.',am:'አራት ማዕዘኖችንና ካሬዎችን ቁጠሩ።'},{en:'Draw the same net on paper and cut it.',am:'ተመሳሳዩን ቅርጽ በወረቀት ሳሉና ቁረጡ።'},{en:'Fold and glue it into a new box.',am:'አጣጥፋችሁ አዲስ ሳጥን አድርጉ።'}]}}}
 ]});
})();
