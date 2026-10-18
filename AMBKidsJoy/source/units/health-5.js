/* ጤናና ሰውነት ማጎልመሻ · ምዕራፍ 5 · መሠረታዊ ጅምናስቲክስ */
(function(){
const {tx,esc,shuffle,rnd}=G3;
const MOVES=[{k:'up',t:{en:'Arms up',am:'እጅ ወደ ላይ'}},{k:'side',t:{en:'Arms to the side',am:'እጅ ወደ ጎን'}},{k:'forward',t:{en:'Arms forward',am:'እጅ ወደ ፊት'}},{k:'down',t:{en:'Arms down',am:'እጅ ወደ ታች'}},{k:'squat',t:{en:'Squat',am:'ቁጢጥ'}},{k:'twist',t:{en:'Twist',am:'መጠምዘዝ'}}];
const LEN=[3,4,5];
function newSeq(n){const s=[];while(s.length<n){const k=rnd(0,MOVES.length-1);if(s[s.length-1]!==k)s.push(k)}return s}
Unit.start({
 id:'health-5',subject:'health',
 subjectName:{en:'Health & Physical Education',am:'ጤናና ሰውነት ማጎልመሻ'},chapter:{en:'Chapter 5',am:'ምዕራፍ 5'},
 title:{en:'Basic Gymnastics',am:'መሠረታዊ ጅምናስቲክስ'},
 footer:{en:'Built on the Grade 3 Health & Physical Education student book (ANRS Education Bureau), Chapter 5. Always practise rolls and headstands on a mat with a teacher.',am:'በ3ኛ ክፍል የጤናና ሰውነት ማጎልመሻ መጽሐፍ (አብክመ ትምህርት ቢሮ) ምዕራፍ 5 ላይ የተመሰረተ። መንከባለልንና በግንባር መቆምን ሁልጊዜ ፍራሽ ላይ ከመምህር ጋር ተለማመዱ።'},
 missions:[
 {title:{en:'Number gymnastics: remember the routine',am:'የቁጥር ጅምናስቲክስ፦ ቅደም ተከተሉን አስታውሱ'},type:'custom',
  tip:{en:'Number gymnastics means doing a series of moves in order while counting 1, 2, 3, 4… Watch the routine, do it with your body, then rebuild it from memory by tapping the moves in order.',am:'የቁጥር ጅምናስቲክስ ማለት 1፣ 2፣ 3፣ 4… እየቆጠሩ ተከታታይ እንቅስቃሴዎችን በቅደም ተከተል መሥራት ነው። ቅደም ተከተሉን ተመልከቱ፣ በሰውነታችሁ ሥሩት፣ ከዚያ እንቅስቃሴዎቹን በቅደም ተከተል በመንካት ከትውስታ መልሳችሁ ገንቡት።'},
  init(st){st.r=0;st.seq=newSeq(LEN[0]);st.show=true;st.got=[];st.msg='';st.cls=''},
  render(p,api,st){if(st.r>=LEN.length){p.innerHTML=`<div class="explain">${tx({en:'Three routines remembered! Number gymnastics trains memory, order and flexibility together. Now do a 5-move routine with your class, counting aloud.',am:'ሦስት ቅደም ተከተሎችን አስታወሳችሁ! የቁጥር ጅምናስቲክስ ትውስታን፣ ቅደም ተከተልንና መተጣጠፍን አብሮ ያሠለጥናል። አሁን ከክፍላችሁ ጋር ጮክ ብላችሁ እየቆጠራችሁ ባለ 5 እንቅስቃሴ ልምምድ ሥሩ።'})}</div>`;return}
   const cell=(k,n)=>`<div style="display:grid;justify-items:center;gap:2px;width:84px"><b>${n}</b><div style="width:70px">${POSE(MOVES[k].k)}</div><span class="small">${esc(tx(MOVES[k].t))}</span></div>`;
   p.innerHTML=`<div class="progress">${tx(api.UI.round,{i:st.r+1,n:LEN.length})}</div>
    ${st.show?`<div class="note">${tx({en:'Watch and do it with your body: count aloud!',am:'ተመልከቱና በሰውነታችሁ ሥሩት፦ ጮክ ብላችሁ ቁጠሩ!'})}</div><div class="row" data-seq="${st.seq.join(',')}" style="gap:8px;justify-content:center">${st.seq.map((k,i)=>cell(k,i+1)).join('')}</div><div class="row" style="justify-content:center"><button class="btn primary" data-act="hide">${tx({en:'I\'m ready: hide it',am:'ዝግጁ ነኝ፦ ደብቁት'})}</button></div>`
     :`<div class="row" style="gap:8px;justify-content:center;min-height:120px">${st.seq.map((_,i)=>st.got[i]!==undefined?cell(st.got[i],i+1):`<div style="width:84px;height:110px;border:2px dashed var(--line);border-radius:12px;display:grid;place-items:center"><b>${i+1}</b></div>`).join('')}</div>
      <div class="tiles" style="justify-content:center">${MOVES.map((m,j)=>`<button class="tile" data-mv="${j}" style="display:grid;justify-items:center;width:96px"><span style="width:56px">${POSE(m.k)}</span>${esc(tx(m.t))}</button>`).join('')}</div>`}
    <div class="feedback ${st.cls}">${st.msg}</div>`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b)return;
    if(b.dataset.act==='hide'){st.show=false;st.got=[];st.msg=''}
    if(b.dataset.mv!==undefined){const j=+b.dataset.mv,i=st.got.length;
     if(st.seq[i]===j){st.got.push(j);api.S.tick();if(st.got.length===st.seq.length){api.S.yay();st.msg=tx(api.UI.good);st.cls='good';st.r++;if(st.r>=LEN.length)api.complete();else{st.seq=newSeq(LEN[st.r]);st.show=true}}}
     else{api.S.nope();st.msg=tx({en:'Not that one. Watch the routine again.',am:'ያ አይደለም። ቅደም ተከተሉን እንደገና ተመልከቱ።'});st.cls='bad';st.show=true}}
    api.rerender()}}},
 {title:{en:'How to do a forward roll',am:'ወደ ፊት እንዴት እንንከባለላለን'},type:'order',vertical:true,
  tip:{en:'Gymnastics means moves that bend and stretch the body. Put the forward roll steps in order. Practise only on a mat with your teacher.',am:'ጅምናስቲክስ ሰውነትን የሚያጥፉና የሚዘረጉ እንቅስቃሴዎች ናቸው። ወደ ፊት የመንከባለል ደረጃዎችን በቅደም ተከተል አስቀምጡ። ፍራሽ ላይ ከመምህራችሁ ጋር ብቻ ተለማመዱ።'},
  rounds:[{items:[{en:'Stand on the mat with both feet.',am:'ፍራሹ ላይ በሁለት እግር ቁሙ።'},{en:'Squat down and put your hands on the mat.',am:'ቁጢጥ ብላችሁ እጃችሁን ፍራሹ ላይ አድርጉ።'},{en:'Tuck your chin to your chest.',am:'አገጫችሁን ወደ ደረታችሁ አስጠጉ።'},{en:'Push with your hands and roll on your back.',am:'በእጃችሁ ገፍታችሁ በጀርባችሁ ተንከባለሉ።'},{en:'Land on both feet and stand up.',am:'በሁለት እግራችሁ አርፋችሁ ተነሱ።'}]}]},
 {title:{en:'Gymnastics or another game?',am:'ጅምናስቲክስ ወይስ ሌላ ጨዋታ?'},type:'sort',
  tip:{en:'Basic gymnastics moves: rolling sideways on the mat, jumping on the mat, star jumps on the mat, forward roll, cartwheel and headstand. Sort each activity.',am:'መሠረታዊ የጅምናስቲክስ እንቅስቃሴዎች፦ ፍራሽ ላይ ወደ ጎን መንከባለል፣ ፍራሽ ላይ መዝለል፣ ፍራሽ ላይ እጅና እግርን ዘርግቶ መዝለል፣ ወደ ፊት መንከባለል፣ ወደ ጎን መሽከርከርና በግንባር መቆም። እያንዳንዱን ተግባር መድቡ።'},
  buckets:[{en:'Gymnastics move',am:'የጅምናስቲክስ እንቅስቃሴ'},{en:'Another game',am:'ሌላ ጨዋታ'}],
  items:[{t:{en:'Forward roll',am:'ወደ ፊት መንከባለል'},b:0},{t:{en:'Backward roll',am:'ወደ ኋላ መንከባለል'},b:0},{t:{en:'Cartwheel (side turn)',am:'ወደ ጎን መሽከርከር'},b:0},{t:{en:'Headstand on the mat',am:'ፍራሽ ላይ በግንባር መቆም'},b:0},{t:{en:'Rolling sideways on the mat',am:'ፍራሽ ላይ ወደ ጎን መንከባለል'},b:0},
   {t:{en:'Linking by number',am:'በቁጥር መያያዝ'},b:1},{t:{en:'Thief and police',am:'ሌባና ፖሊስ'},b:1},{t:{en:'Running on the spot',am:'በቦታ መሮጥ'},b:1}]},
 {title:{en:'Move and method',am:'እንቅስቃሴና አሠራሩ'},type:'match',
  tip:{en:'Match each move with how it is done.',am:'እያንዳንዱን እንቅስቃሴ ከአሠራሩ ጋር አዛምዱ።'},
  rounds:[[[{en:'Cartwheel',am:'ወደ ጎን መሽከርከር'},{en:'Arms up, place one hand then the other on the floor, land on two feet',am:'እጅ ወደ ላይ፣ አንዱን ከዚያ ሌላውን እጅ መሬት ላይ አሳርፎ በሁለት እግር ማረፍ'}],[{en:'Headstand',am:'በግንባር መቆም'},{en:'Hands and forehead make a triangle, then lift the legs straight up',am:'እጆችና ግንባር ሦስት ማዕዘን ይሠራሉ፤ ከዚያ እግሮችን ቀጥ አድርጎ ማንሳት'}],[{en:'Star jump on the mat',am:'ፍራሽ ላይ ኮከብ ዝላይ'},{en:'Jump and open arms and legs, then close',am:'ዘሎ እጅና እግርን መክፈትና መግጠም'}],[{en:'Forward roll',am:'ወደ ፊት መንከባለል'},{en:'Squat, chin in, roll on the back',am:'ቁጢጥ፣ አገጭ ወደ ደረት፣ በጀርባ መንከባለል'}]]]},
 {title:{en:'Safe and smart',am:'በጥንቃቄና በብልሃት'},type:'quiz',shuffle:true,
  tip:{en:'Gymnastics builds flexibility, coordination, confidence, and teaches us to protect ourselves from falls. Safety comes first.',am:'ጅምናስቲክስ መተጣጠፍን፣ ቅንጅትንና በራስ መተማመንን ያዳብራል፤ ራሳችንን ከውድቀት እንድንከላከልም ያስተምረናል። ጥንቃቄ ይቀድማል።'},
  items:[
   {q:{en:'Before rolling, what should you do first?',am:'ከመንከባለል በፊት መጀመሪያ ምን ማድረግ አለባችሁ?'},o:[{en:'Warm up and check the mat',am:'ሰውነትን ማሟሟቅና ፍራሹን መፈተሽ'},{en:'Eat a big meal',am:'ብዙ ምግብ መብላት'},{en:'Roll on the stone floor',am:'በድንጋይ ወለል ላይ መንከባለል'}],a:0},
   {q:{en:'Who should help you with a headstand?',am:'በግንባር ስትቆሙ ማን ሊረዳችሁ ይገባል?'},o:[{en:'A teacher or trained helper (spotter)',am:'መምህር ወይም የሰለጠነ ረዳት'},{en:'Nobody',am:'ማንም'},{en:'A younger child',am:'ታናሽ ልጅ'}],a:0},
   {q:{en:'Which is a benefit of gymnastics?',am:'የጅምናስቲክስ ጥቅም የትኛው ነው?'},o:[{en:'All of these',am:'ሁሉም'},{en:'More flexibility',am:'መተጣጠፍ መጨመር'},{en:'Better coordination',am:'የአካል ቅንጅት መዳበር'},{en:'Protecting yourself from accidents',am:'ራስን ከአደጋ መከላከል'}],a:0},
   {q:{en:'During a forward roll, your chin should be…',am:'ወደ ፊት ስትንከባለሉ አገጫችሁ…'},o:[{en:'tucked to your chest',am:'ወደ ደረት የተጠጋ'},{en:'pointing up',am:'ወደ ላይ የቀና'},{en:'on the floor',am:'መሬት ላይ'}],a:0,e:{en:'Tucking the chin protects your neck: you roll on your back, not your head.',am:'አገጭን ማስጠጋት አንገትን ይጠብቃል፦ የምትንከባለሉት በጀርባ እንጂ በራስ አይደለም።'}}]},
 {type:'exam',items:[
   {q:{en:'Which is NOT a benefit of basic gymnastics?',am:'ከመሠረታዊ ጅምናስቲክስ ጥቅም ያልሆነው የትኛው ነው?'},o:[{en:'None (all are benefits)',am:'መልስ አልተሰጠም (ሁሉም ጥቅም ናቸው)'},{en:'Increase flexibility',am:'የመተጣጠፍ አቅምን መጨመር'},{en:'Develop coordination',am:'የአካል ቅንጅትን ማዳበር'},{en:'Protect oneself from accidents',am:'ራስን ከአደጋ መከላከል'}],a:0},
   {q:{en:'Which is a basic gymnastics move?',am:'የመሠረታዊ ጅምናስቲክስ እንቅስቃሴ የሆነው የትኛው ነው?'},o:[{en:'Backward roll',am:'ወደ ኋላ መንከባለል'},{en:'Linking by number',am:'በቁጥር መያያዝ'},{en:'Thief and police',am:'ሌባና ፖሊስ'},{en:'Running on the spot',am:'በቦታ መሮጥ'}],a:0},
   {q:{en:'Number gymnastics is done…',am:'የቁጥር ጅምናስቲክስ የሚሠራው…'},o:[{en:'in order while counting, without equipment',am:'ያለ መሣሪያ እየቆጠሩ በቅደም ተከተል'},{en:'only with a ball',am:'በኳስ ብቻ'},{en:'sitting still',am:'ዝም ብሎ ተቀምጦ'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Gymnastics moves bend and stretch the body. They build flexibility, coordination and confidence, and help us protect ourselves from falls.',am:'የጅምናስቲክስ እንቅስቃሴዎች ሰውነትን ያጥፋሉ፤ ይዘረጋሉ። መተጣጠፍን፣ ቅንጅትንና በራስ መተማመንን ያዳብራሉ፤ ራሳችንን ከውድቀት እንድንከላከል ይረዳሉ።'},
  points:[
   {en:'Mat moves: roll sideways, jump, star jump, forward roll, cartwheel, headstand.',am:'የፍራሽ እንቅስቃሴዎች፦ ወደ ጎን መንከባለል፣ መዝለል፣ ኮከብ ዝላይ፣ ወደ ፊት መንከባለል፣ መሽከርከር፣ በግንባር መቆም።'},
   {en:'Number gymnastics: a series of moves done in order while counting; for arms, waist, legs or all together.',am:'የቁጥር ጅምናስቲክስ፦ እየቆጠሩ በቅደም ተከተል የሚሠሩ ተከታታይ እንቅስቃሴዎች፤ ለእጅ፣ ለወገብ፣ ለእግር ወይም ለሁሉም።'},
   {en:'Safety: mat, warm-up, a helper, chin tucked.',am:'ጥንቃቄ፦ ፍራሽ፣ ማሟሟቅ፣ ረዳት፣ አገጭን ማስጠጋት።'}],
  words:[[{en:'Gymnastics',am:'ጅምናስቲክስ'},{en:'moves that bend and stretch the body',am:'ሰውነትን የሚያጥፉና የሚዘረጉ እንቅስቃሴዎች'}],[{en:'Spotter',am:'ረዳት'},{en:'a person who supports you during a move',am:'በእንቅስቃሴ ጊዜ የሚደግፋችሁ ሰው'}],[{en:'Sequence',am:'ቅደም ተከተል'},{en:'things in a set order',am:'በተወሰነ ቅደም ተከተል ያሉ ነገሮች'}]],
  remember:{en:'Mat first, warm up, chin in, helper near.',am:'መጀመሪያ ፍራሽ፣ አሟሙቁ፣ አገጭ ወደ ደረት፣ ረዳት በአጠገብ።'},
  exam:[[{en:'List three basic gymnastics moves.',am:'ሦስት መሠረታዊ የጅምናስቲክስ እንቅስቃሴዎችን ዘርዝሩ።'},{en:'Forward roll, cartwheel, headstand',am:'ወደ ፊት መንከባለል፣ መሽከርከር፣ በግንባር መቆም'}],[{en:'Why tuck your chin in a roll?',am:'ስትንከባለሉ አገጭን ለምን ታስጠጋላችሁ?'},{en:'To protect the neck',am:'አንገትን ለመጠበቅ'}]],
  innovate:{title:{en:'Build a safe practice mat',am:'ደህንነቱ የተጠበቀ መለማመጃ ፍራሽ ሥሩ'},text:{en:'Many schools have no gym mats. Engineers solve problems with what they have. Design a soft, safe mat from local materials.',am:'ብዙ ትምህርት ቤቶች የጅምናስቲክስ ፍራሽ የላቸውም። መሐንዲሶች ባላቸው ነገር ችግር ይፈታሉ። ከአካባቢ ቁሳቁሶች ለስላሳና ደህንነቱ የተጠበቀ ፍራሽ ንደፉ።'},
   steps:[{en:'Collect empty grain sacks and old clothes or dry grass.',am:'ባዶ የእህል ጆንያዎችንና አሮጌ ልብሶችን ወይም ደረቅ ሣር ሰብስቡ።'},{en:'Stuff the sacks evenly and sew them shut with an adult.',am:'ጆንያዎቹን በእኩል ሞልታችሁ ከትልቅ ሰው ጋር ስፉዋቸው።'},{en:'Test it: is it soft, flat and not slippery?',am:'ሞክሩት፦ ለስላሳ፣ ጠፍጣፋና የማያንሸራትት ነው?'},{en:'Improve your design and make mats for the whole class.',am:'ንድፋችሁን አሻሽላችሁ ለክፍሉ በሙሉ ፍራሽ ሥሩ።'}]}}}
 ]});
})();
