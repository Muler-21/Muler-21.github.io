/* ጤናና ሰውነት ማጎልመሻ · ምዕራፍ 3 · ማህበራዊ ግንኙነትንና ስሜትን የሚያዳብሩ ጨዋታዎች */
(function(){
const {tx,esc,rnd,shuffle}=G3;
const LIGHT=[{c:'#1E8A5B',name:{en:'GREEN',am:'አረንጓዴ'},act:{en:'Jog around',am:'በሶምሶማ ሩጡ'},pose:'run'},
 {c:'#F4B400',name:{en:'YELLOW',am:'ቢጫ'},act:{en:'Hop on the spot',am:'ባላችሁበት ዱብ ዱብ በሉ'},pose:'jog'},
 {c:'#D9483B',name:{en:'RED',am:'ቀይ'},act:{en:'Sit down',am:'ቁጭ በሉ'},pose:'sit'}];
const ACTS=[{k:'up',t:{en:'Hands up!',am:'እጅ ወደ ላይ!'}},{k:'side',t:{en:'Arms out to the side!',am:'እጅ ወደ ጎን!'}},{k:'forward',t:{en:'Arms forward!',am:'እጅ ወደ ፊት!'}},{k:'squat',t:{en:'Squat!',am:'ቁጢጥ በሉ!'}},{k:'jack',t:{en:'Star jump!',am:'ኮከብ ዝላይ!'}}];
function light(i){return`<svg data-lit="${i}" viewBox="0 0 80 200" role="img" aria-label="traffic light" style="width:80px;height:auto"><rect x="6" y="4" width="68" height="192" rx="16" fill="#2A2F3A"/>${[2,1,0].map((j,k)=>`<circle cx="40" cy="${38+k*62}" r="24" fill="${i===j?LIGHT[j].c:'#4A5060'}"/>`).join('')}</svg>`}
Unit.start({
 id:'health-3',subject:'health',
 subjectName:{en:'Health & Physical Education',am:'ጤናና ሰውነት ማጎልመሻ'},chapter:{en:'Chapter 3',am:'ምዕራፍ 3'},
 title:{en:'Games for Friendship and Feelings',am:'ማህበራዊ ግንኙነትንና ስሜትን የሚያዳብሩ ጨዋታዎች'},
 footer:{en:'Built on the Grade 3 Health & Physical Education student book (ANRS Education Bureau), Chapter 3. Play every game for real with your class!',am:'በ3ኛ ክፍል የጤናና ሰውነት ማጎልመሻ መጽሐፍ (አብክመ ትምህርት ቢሮ) ምዕራፍ 3 ላይ የተመሰረተ። እያንዳንዱን ጨዋታ ከክፍላችሁ ጋር በእውነት ተጫወቱ!'},
 missions:[
 {title:{en:'The traffic light game',am:'የትራፊክ ጨዋታ'},type:'custom',
  tip:{en:'In the playground: GREEN = jog around, YELLOW = hop on the spot, RED = sit down. Here, react fast: tap the right action when the light changes. Get 6 of 8 right.',am:'በሜዳ ላይ፦ አረንጓዴ = በሶምሶማ መሮጥ፣ ቢጫ = ባሉበት ዱብ ዱብ ማለት፣ ቀይ = መቀመጥ። እዚህ ፈጥናችሁ ምላሽ ስጡ፦ መብራቱ ሲቀየር ትክክለኛውን ተግባር ንኩ። ከ8 ቢያንስ 6 አግኙ።'},
  init(st){st.n=0;st.ok=0;st.cur=rnd(0,2);st.t0=0;st.msg='';st.cls='';st.best=null},
  render(p,api,st){const over=st.n>=8;
   p.innerHTML=`<div class="row" style="align-items:center;gap:22px;justify-content:center">${light(over?-1:st.cur)}
    <div style="display:grid;gap:10px;flex:1 1 260px;min-width:0">
     ${over?`<div class="explain">${tx({en:'You scored {k}/8. {m}',am:'{k}/8 አገኛችሁ። {m}'},{k:st.ok,m:st.ok>=6?tx({en:'Sharp reactions! This game trains listening, alertness and quick decisions.',am:'ፈጣን ምላሽ! ይህ ጨዋታ ማዳመጥን፣ ንቃትንና ፈጣን ውሳኔን ያሠለጥናል።'}):tx({en:'Practise again: aim for 6.',am:'እንደገና ተለማመዱ፦ 6 ለማግኘት ሞክሩ።'})})}</div><div><button class="btn" data-act="again">${tx(api.UI.playAgain)}</button></div>`
     :`<div class="progress">${tx(api.UI.round,{i:st.n+1,n:8})} · ${tx({en:'Correct',am:'ትክክል'})}: ${st.ok}</div>
      <div class="opts">${LIGHT.map((L,j)=>`<button class="opt" data-tl="${j}" style="display:flex;gap:10px;align-items:center"><span style="width:44px;flex:none">${POSE(L.pose)}</span>${esc(tx(L.act))}</button>`).join('')}</div>`}
     <div class="feedback ${st.cls}">${st.msg}</div></div></div>`;
   if(!st.t0)st.t0=performance.now();
   p.onclick=e=>{const b=e.target.closest('button');if(!b)return;
    if(b.dataset.act==='again'){this.init(st);api.rerender();return}
    if(b.dataset.tl!==undefined&&!over){const ms=Math.round(performance.now()-st.t0);const right=+b.dataset.tl===st.cur;
     if(right){st.ok++;api.S.yay();st.msg=tx({en:'Yes! {ms} ms',am:'ትክክል! {ms} ሚሊ ሰከንድ'},{ms});st.cls='good'}else{api.S.nope();st.msg=tx({en:'{c} means: {a}',am:'{c} ማለት፦ {a}'},{c:tx(LIGHT[st.cur].name),a:tx(LIGHT[st.cur].act)});st.cls='bad'}
     st.n++;let nx;do{nx=rnd(0,2)}while(nx===st.cur&&Math.random()<.7);st.cur=nx;st.t0=0;
     if(st.n>=8&&st.ok>=6)api.complete()}
    api.rerender()}}},
 {title:{en:'Do what I SAY, not what I DO',am:'የምለውን እንጂ የማደርገውን አታድርጉ'},type:'drill',need:5,
  tip:{en:'A tricky game for your brain: the leader says one thing but shows another. Follow the WORDS, not the picture! This builds self-control.',am:'ለአእምሮ አስቸጋሪ ጨዋታ፦ መሪው አንድ ነገር ይላል፤ ሌላ ያሳያል። ቃሉን እንጂ ስዕሉን አትከተሉ! ይህ ራስን መቆጣጠርን ያዳብራል።'},
  gen(){const said=rnd(0,ACTS.length-1);let shown;do{shown=rnd(0,ACTS.length-1)}while(shown===said);
   const opts=shuffle([said,shown,...shuffle(ACTS.map((_,i)=>i).filter(i=>i!==said&&i!==shown)).slice(0,1)]);
   return{fig:`<div style="display:grid;justify-items:center;gap:4px"><div style="width:120px">${POSE(ACTS[shown].k)}</div><b style="font-size:1.25rem">“${esc(tx(ACTS[said].t))}”</b></div>`,
    q:{en:'The leader SAYS this and DOES the picture. What do you do?',am:'መሪው ይህን ይላል፤ ስዕሉን ያደርጋል። እናንተ ምን ታደርጋላችሁ?'},
    o:opts.map(i=>({svg:`<span style="width:48px;display:inline-block">${POSE(ACTS[i].k)}</span>`,label:ACTS[i].t})),a:opts.indexOf(said),
    e:{en:'Words win! Your brain stopped your eyes from tricking you.',am:'ቃሉ ያሸንፋል! አእምሯችሁ ዓይናችሁ እንዳያታልላችሁ አቆመ።'}}}},
 {title:{en:'What does each game build?',am:'እያንዳንዱ ጨዋታ ምን ያዳብራል?'},type:'match',
  tip:{en:'Every game in the book trains something special. Match each game with what it builds most.',am:'በመጽሐፉ ያለ እያንዳንዱ ጨዋታ ልዩ ነገር ያሠለጥናል። እያንዳንዱን ጨዋታ በዋናነት ከሚያዳብረው ጋር አዛምዱ።'},
  rounds:[[[{en:'Find a spot (run round the circles, stand on one at the whistle)',am:'ቦታ መያዝ (በክቦች ዙሪያ መሮጥ፣ ፊሽካ ሲነፋ ክብ ላይ መቆም)'},{en:'Making your own quick decisions',am:'በራስ ፈጣን ውሳኔ መስጠት'}],
   [{en:'Pass the ball along the team',am:'ዕቃ መቀባበል'},{en:'Working together',am:'በጋራ መሥራት'}],
   [{en:'Fishing net (catch others and hold hands)',am:'አሳ ማጥመድ (ሌሎችን ይዞ እጅ ለእጅ መያያዝ)'},{en:'Teamwork: the net grows bigger',am:'የቡድን ሥራ፦ መረቡ እያደገ ይሄዳል'}],
   [{en:'Name call: catch the ball before it falls',am:'ስም ሲጠራ ኳስ መቅለብ'},{en:'Alertness and hand–eye coordination',am:'ንቃትና የእጅና የዓይን ቅንጅት'}],
   [{en:'Find the ball with eyes covered',am:'ዓይን ተሸፍኖ ኳስ መፈለግ'},{en:'Using other senses and trust',am:'ሌሎች የስሜት ሕዋሳትንና መተማመንን መጠቀም'}]]]},
 {title:{en:'Good sport or bad sport?',am:'ጥሩ ስፖርተኛ ወይስ መጥፎ?'},type:'sort',
  tip:{en:'Games teach us to respect rules and others, and to value ourselves. Sort each behaviour.',am:'ጨዋታዎች ሕግንና ሌሎችን ማክበርን፣ ለራስ ዋጋ መስጠትን ያስተምሩናል። እያንዳንዱን ባህሪ መድቡ።'},
  buckets:[{en:'Good sport',am:'ጥሩ ስፖርተኛ'},{en:'Bad sport',am:'መጥፎ ስፖርተኛ'}],
  items:[{t:{en:'Following the rules even when losing',am:'ሲሸነፉም ሕግ ማክበር'},b:0},{t:{en:'Helping a fallen player up',am:'የወደቀን ተጫዋች ማንሳት'},b:0},{t:{en:'Shaking hands after the game',am:'ከጨዋታ በኋላ መጨባበጥ'},b:0},{t:{en:'Cheering for teammates',am:'ለቡድን አጋሮች ማበረታታት'},b:0},
   {t:{en:'Cheating when no one is looking',am:'ማንም ሳያይ ማጭበርበር'},b:1},{t:{en:'Pushing to win',am:'ለማሸነፍ መግፋት'},b:1},{t:{en:'Shouting at the referee',am:'በዳኛ ላይ መጮህ'},b:1},{t:{en:'Leaving out a slow player',am:'ቀርፋፋ ተጫዋችን ማግለል'},b:1}]},
 {title:{en:'Play it for real',am:'በእውነት ተጫወቱት'},type:'order',vertical:true,
  tip:{en:'Ready to play "Linking by number" in the playground? Put the steps in order, then try it with your class.',am:'“በቁጥር መያያዝ”ን በሜዳ ለመጫወት ዝግጁ ናችሁ? ደረጃዎቹን በቅደም ተከተል አስቀምጡ፤ ከዚያ ከክፍላችሁ ጋር ሞክሩት።'},
  rounds:[{items:[{en:'Everyone jogs around a big circle.',am:'ሁሉም በትልቅ ክብ ዙሪያ በሶምሶማ ይሮጣል።'},{en:'The teacher calls a number, for example "3!"',am:'መምህሩ ቁጥር ይጠራል፤ ለምሳሌ “3!”'},{en:'Quickly hold hands in groups of exactly that number.',am:'በፍጥነት በዚያ ቁጥር ልክ በቡድን እጅ ለእጅ ተያያዙ።'},{en:'Anyone left without a group does 5 star jumps, then rejoins.',am:'ቡድን ያላገኘ 5 ኮከብ ዝላይ ሠርቶ ይቀላቀላል።'}]}]},
 {type:'exam',items:[
   {q:{en:'Games with simple rules played together are called…',am:'በቀላል ሕግ በጋራ የሚጫወቱ ጨዋታዎች ምን ይባላሉ?'},o:[{en:'Low-organised games',am:'ልዩ ልዩ ጨዋታዎች'},{en:'Gymnastics',am:'ጅምናስቲክስ'},{en:'Dances',am:'ጭፈራዎች'}],a:0},
   {q:{en:'In the traffic game, RED means…',am:'በትራፊክ ጨዋታ ቀይ ማለት…'},o:[{en:'Sit down',am:'መቀመጥ'},{en:'Run',am:'መሮጥ'},{en:'Hop',am:'ዱብ ዱብ ማለት'}],a:0},
   {q:{en:'The "thief and police" game teaches that…',am:'የ“ሌባና ፖሊስ” ጨዋታ የሚያስተምረው…'},o:[{en:'stealing is wrong and police protect the law',am:'ሌብነት ስህተት እንደሆነና ፖሊስ ሕግ እንደሚያስከብር'},{en:'running is bad',am:'መሮጥ መጥፎ እንደሆነ'},{en:'police are enemies',am:'ፖሊስ ጠላት እንደሆነ'}],a:0},
   {q:{en:'Which game builds teamwork most?',am:'የቡድን ሥራን በብዛት የሚያዳብረው የትኛው ጨዋታ ነው?'},o:[{en:'Fishing net',am:'አሳ ማጥመድ'},{en:'Standing alone',am:'ብቻ መቆም'},{en:'Sleeping',am:'መተኛት'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Simple games with rules make us fit AND teach us to know ourselves, cooperate, decide fast, stay alert and respect others.',am:'ሕግ ያላቸው ቀላል ጨዋታዎች ጤናማ ያደርጉናል፤ ራሳችንን እንድናውቅ፣ እንድንተባበር፣ ፈጥነን እንድንወስን፣ ንቁ እንድንሆንና ሌሎችን እንድናከብር ያስተምሩናል።'},
  points:[
   {en:'Self-knowledge games: find a spot, do what I say, follow the leader.',am:'ራስን የማወቂያ ጨዋታዎች፦ ቦታ መያዝ፣ የምለውን አድርጉ፣ መሪውን ተከተሉ።'},
   {en:'Social games: pass the object, link by number, collect small balls.',am:'ማህበራዊ ጨዋታዎች፦ ዕቃ መቀባበል፣ በቁጥር መያያዝ፣ ትንንሽ ኳሶችን መሰብሰብ።'},
   {en:'Alertness games: name call, traffic light, thief and police.',am:'የንቃት ጨዋታዎች፦ ስም ሲጠራ ኳስ መቅለብ፣ የትራፊክ ጨዋታ፣ ሌባና ፖሊስ።'},
   {en:'Cooperation games: fishing net, hit the ball with balls.',am:'የትብብር ጨዋታዎች፦ አሳ ማጥመድ፣ ኳስን በኳስ መምታት።'}],
  words:[[{en:'Alertness',am:'ንቃተ ህሊና'},{en:'being awake and ready to react',am:'ንቁ መሆንና ለምላሽ ዝግጁ መሆን'}],[{en:'Coordination',am:'ቅንጅት'},{en:'body parts working together',am:'የአካል ክፍሎች በጋራ መሥራት'}],[{en:'Reaction',am:'ምላሽ'},{en:'how fast you respond to a signal',am:'ለምልክት ምን ያህል ፈጥናችሁ እንደምትመልሱ'}]],
  remember:{en:'Play fair, play safe, play together.',am:'በፍትሐዊነት፣ በጥንቃቄ፣ በጋራ ተጫወቱ።'},
  exam:[[{en:'Name two games that build alertness.',am:'ንቃትን የሚያዳብሩ ሁለት ጨዋታዎችን ጥቀሱ።'},{en:'Traffic light game; name call catch',am:'የትራፊክ ጨዋታ፤ ስም ሲጠራ ኳስ መቅለብ'}],[{en:'What do the three traffic colours mean in the game?',am:'በጨዋታው ሦስቱ የትራፊክ ቀለሞች ምን ማለት ናቸው?'},{en:'Green: jog; yellow: hop; red: sit',am:'አረንጓዴ፦ ሩጫ፤ ቢጫ፦ ዱብ ዱብ፤ ቀይ፦ መቀመጥ'}]],
  innovate:{title:{en:'Toy-maker: balls from waste',am:'አሻንጉሊት ሠሪ፦ ከቆሻሻ ኳስ'},text:{en:'Many schools have few balls. Turn plastic bags and old socks into strong balls, and invent a new game to play with them.',am:'ብዙ ትምህርት ቤቶች ኳስ ያንሳቸዋል። ፌስታልና አሮጌ ካልሲ ወደ ጠንካራ ኳስ ቀይሩ፤ የሚጫወቱበት አዲስ ጨዋታ ፍጠሩ።'},
   steps:[{en:'Squeeze clean plastic bags into a tight ball.',am:'ንጹህ ፌስታሎችን አጥብቃችሁ ኳስ አድርጉ።'},{en:'Wrap it with string or put it inside an old sock and tie it.',am:'በክር ጠቅልሉት ወይም አሮጌ ካልሲ ውስጥ አስገብታችሁ እሰሩት።'},{en:'Invent a game with 3 simple rules and test it with friends.',am:'3 ቀላል ሕጎች ያሉት ጨዋታ ፈጥራችሁ ከጓደኞች ጋር ሞክሩት።'},{en:'Make 5 balls for your school or sell them to a nearby school.',am:'ለትምህርት ቤታችሁ 5 ኳሶች ሥሩ ወይም በአቅራቢያ ላለ ትምህርት ቤት ሽጡ።'}]}}}
 ]});
})();
