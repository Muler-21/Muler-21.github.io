/* ግብረገብ · ምዕራፍ 4 · ጤናማ ማህበራዊ ህይወት */
(function(){
const {tx,esc}=G3;
const PALS=[{en:'Ali',am:'አሊ'},{en:'Meron',am:'ሜሮን'},{en:'Tadesse',am:'ታደሰ'},{en:'Fatuma',am:'ፋጡማ'},{en:'Kidus',am:'ቅዱስ'}];
const WEB=[
 {q:{en:'Aman sits alone at break. What does Ali do?',am:'አማን በእረፍት ሰዓት ብቻውን ተቀምጧል። አሊ ምን ያደርጋል?'},o:[{en:'Sits with him and asks about his day',am:'አጠገቡ ተቀምጦ ስለ ቀኑ ይጠይቀዋል'},{en:'Walks past without looking',am:'ሳያየው ያልፋል'},{en:'Laughs with others about him',am:'ከሌሎች ጋር ይስቅበታል'}],a:0},
 {q:{en:'Meron\'s group is playing. Aman uses a crutch. What should they do?',am:'የሜሮን ቡድን እየተጫወተ ነው። አማን በክራንች ይሄዳል። ምን ማድረግ አለባቸው?'},o:[{en:'Change the game a little so Aman can join',am:'አማን እንዲቀላቀል ጨዋታውን ትንሽ ይቀይሩ'},{en:'Tell him he cannot play',am:'መጫወት እንደማይችል ይንገሩት'},{en:'Ignore him',am:'ችላ ይበሉት'}],a:0},
 {q:{en:'Tadesse and Aman disagree about a group drawing. How should they solve it?',am:'ታደሰና አማን በቡድን ስዕል ላይ አልተስማሙም። እንዴት ይፍቱት?'},o:[{en:'Listen to each other and agree together',am:'እርስ በርስ ተደማምጠው በጋራ ይስማሙ'},{en:'Shout until one gives up',am:'አንዱ እስኪተው ይጩሁ'},{en:'Stop being friends',am:'ጓደኝነታቸውን ያቁሙ'}],a:0},
 {q:{en:'Fatuma sees Aman looking sad for many days. What is best?',am:'ፋጡማ አማን ለብዙ ቀናት አዝኖ ታየዋለች። ምን ብታደርግ ይሻላል?'},o:[{en:'Ask kindly and tell a teacher he may need support',am:'በደግነት ጠይቃ ድጋፍ ሊያስፈልገው እንደሚችል ለመምህር ትንገር'},{en:'Keep quiet, it is not her business',am:'ዝም ትበል፤ የሷ ጉዳይ አይደለም'},{en:'Tell everyone he is strange',am:'እንግዳ ነው ብላ ለሁሉም ትንገር'}],a:0},
 {q:{en:'Kidus is good at maths; Aman is good at stories. What can they do?',am:'ቅዱስ በሂሳብ፣ አማን በታሪክ ጎበዝ ናቸው። ምን ማድረግ ይችላሉ?'},o:[{en:'Help each other: share skills',am:'ይረዳዱ፦ ክህሎታቸውን ይካፈሉ'},{en:'Compete and hide their skills',am:'ይፎካከሩ፤ ክህሎታቸውን ይደብቁ'},{en:'Work alone always',am:'ሁልጊዜ ለብቻቸው ይሥሩ'}],a:0}];
function web(n){const cx=170,cy=120,R=92;
 const pos=PALS.map((_,i)=>{const a=-Math.PI/2+i*2*Math.PI/PALS.length;return[cx+R*Math.cos(a),cy+R*Math.sin(a)]});
 const lines=pos.slice(0,n).map(([x,y])=>`<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>`).join('')
  +(n>=PALS.length?pos.map(([x,y],i)=>{const [x2,y2]=pos[(i+1)%pos.length];return`<line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6 6"/>`}).join(''):'');
 const node=(x,y,label,on,main)=>`<g><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${main?30:24}" fill="${on?'var(--accent-soft)':'var(--surface-2)'}" stroke="${on?'var(--accent)':'var(--line)'}" stroke-width="3"/><text x="${x.toFixed(1)}" y="${(y+5).toFixed(1)}" text-anchor="middle" font-size="${main?15:13}" font-weight="700" fill="var(--ink)">${esc(label)}</text></g>`;
 const mood=n>=3?'M158 146q12 10 24 0':'M158 152q12-8 24 0';
 return`<svg viewBox="0 0 340 250" role="img" aria-label="friendship web" style="width:min(400px,100%);height:auto">${lines}${pos.map(([x,y],i)=>node(x,y,tx(PALS[i]),i<n)).join('')}${node(cx,cy,tx({en:'Aman',am:'አማን'}),true,true)}<path d="${mood}" stroke="var(--ink)" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`}
Unit.start({
 id:'moral-4',subject:'moral',
 subjectName:{en:'Moral Education',am:'ግብረገብ'},chapter:{en:'Chapter 4',am:'ምዕራፍ 4'},
 title:{en:'Healthy Social Life',am:'ጤናማ ማህበራዊ ሕይወት'},
 footer:{en:'Built on the Grade 3 Moral Education student book (ANRS Education Bureau / MoE), Chapter 4: healthy social life.',am:'በ3ኛ ክፍል የግብረገብ መጽሐፍ (አብክመ ትምህርት ቢሮ / ትምህርት ሚኒስቴር) ምዕራፍ 4 ላይ የተመሰረተ፦ ጤናማ ማህበራዊ ሕይወት።'},
 missions:[
 {title:{en:'Build Aman\'s friendship web',am:'የአማንን የጓደኝነት ድር ገንቡ'},type:'custom',
  tip:{en:'People are social beings: we need good relationships to be healthy and happy. Aman felt lonely and sad until friends came close. Choose the kind action, and watch his friendship web grow.',am:'ሰዎች ማህበራዊ ፍጡራን ናቸው፦ ጤናማና ደስተኛ ለመሆን መልካም ግንኙነት ያስፈልገናል። አማን ጓደኞች እስኪቀርቡት ድረስ ብቸኝነትና ሐዘን ተሰምቶት ነበር። ደግ ተግባሩን ምረጡ፤ የጓደኝነት ድሩ ሲያድግ ተመልከቱ።'},
  init(st){st.k=0;st.picked=null},
  render(p,api,st){const it=WEB[st.k];
   p.innerHTML=`<div class="row" style="align-items:flex-start;gap:18px"><div style="flex:1 1 300px;min-width:0;text-align:center">${web(st.k)}</div>
    <div style="flex:1 1 260px;min-width:0;display:grid;gap:10px">${it?`<div class="progress">${tx(api.UI.item,{i:st.k+1,n:WEB.length})}</div><div class="q"><span class="qt">${esc(tx(it.q))}</span></div>
     <div class="opts long">${it.o.map((o,j)=>`<button class="opt ${st.picked===j?(j===it.a?'right':'wrong'):''}" data-j="${j}" ${st.picked===it.a?'disabled':''}>${esc(tx(o))}</button>`).join('')}</div>
     <div class="feedback ${st.picked===null?'':st.picked===it.a?'good':'bad'}">${st.picked===null?'':st.picked===it.a?tx(api.UI.good):tx(api.UI.bad)}</div>`
     :`<div class="explain">${tx({en:'Aman now has a web of friends, and they are all connected to each other too. Strong friendships lower worry, keep the mind sharp and help us solve problems together.',am:'አማን አሁን የጓደኞች ድር አለው፤ ጓደኞቹም እርስ በርሳቸው ተገናኝተዋል። ጠንካራ ጓደኝነት ጭንቀትን ይቀንሳል፣ አእምሮን ያሳላል፣ ችግርን በጋራ እንድንፈታ ይረዳናል።'})}</div>`}</div></div>`;
   p.onclick=e=>{const b=e.target.closest('[data-j]');if(!b||!it||st.picked===it.a)return;st.picked=+b.dataset.j;
    if(st.picked===it.a){api.S.yay();api.rerender();setTimeout(()=>{st.k++;st.picked=null;if(st.k>=WEB.length)api.complete();if(api.visible(1))api.rerender()},700);return}
    api.S.nope();api.rerender()}}},
 {title:{en:'Healthy or unhealthy?',am:'ጤናማ ወይስ ጤናማ ያልሆነ?'},type:'sort',
  tip:{en:'Healthy social life is the ability to get along with others and build meaningful relationships. Sort each behaviour.',am:'ጤናማ ማህበራዊ ሕይወት ከሌሎች ጋር የመግባባትና ትርጉም ያለው ግንኙነት የመፍጠር ችሎታ ነው። እያንዳንዱን ባህሪ መድቡ።'},
  buckets:[{en:'Healthy',am:'ጤናማ'},{en:'Unhealthy',am:'ጤናማ ያልሆነ'}],
  items:[{t:{en:'Treating others with respect',am:'ሌሎችን በአክብሮት መያዝ'},b:0},{t:{en:'Solving problems by talking',am:'ችግርን በውይይት መፍታት'},b:0},{t:{en:'Accepting other people\'s ideas',am:'የሌሎችን ሐሳብ መቀበል'},b:0},{t:{en:'Asking for help when you need it',am:'ሲያስፈልግ ድጋፍ መጠየቅ'},b:0},{t:{en:'Helping each other',am:'መረዳዳት'},b:0},
   {t:{en:'Solving problems by force',am:'ችግርን በኃይል መፍታት'},b:1},{t:{en:'Always living alone, avoiding everyone',am:'ሁሉንም ሸሽቶ ሁልጊዜ ብቻ መኖር'},b:1},{t:{en:'Always arguing',am:'ሁልጊዜ መጨቃጨቅ'},b:1},{t:{en:'Sulking and ignoring people',am:'ማኩረፍና ሰዎችን ችላ ማለት'},b:1}]},
 {title:{en:'Why a healthy social life matters',am:'ጤናማ ማህበራዊ ሕይወት ለምን ያስፈልጋል'},type:'quiz',shuffle:true,
  tip:{en:'Good relationships help our mind, body and whole community. Choose the best answer.',am:'መልካም ግንኙነት አእምሯችንን፣ ሰውነታችንንና ማኅበረሰቡን በሙሉ ይረዳል። ትክክለኛውን ምረጡ።'},
  items:[
   {q:{en:'People with good friends usually feel…',am:'ጥሩ ጓደኞች ያሏቸው ሰዎች በአብዛኛው ምን ይሰማቸዋል?'},o:[{en:'that they belong',am:'የባለቤትነት ስሜት'},{en:'lonely',am:'ብቸኝነት'},{en:'angry',am:'ቁጣ'}],a:0},
   {q:{en:'When people care about you, your worry level becomes…',am:'ሰዎች ሲያስቡላችሁ የጭንቀት ደረጃችሁ…'},o:[{en:'lower',am:'ይቀንሳል'},{en:'higher',am:'ይጨምራል'},{en:'the same',am:'አይለወጥም'}],a:0},
   {q:{en:'Which shows a healthy family?',am:'ጤናማ ቤተሰብን የሚያሳየው የትኛው ነው?'},o:[{en:'Respecting each other',am:'እርስ በርስ መከባበር'},{en:'Arguing all day',am:'ቀኑን ሙሉ መጨቃጨቅ'},{en:'Solving problems by force',am:'ችግርን በኃይል መፍታት'}],a:0},
   {q:{en:'Healthy social life helps the whole society to…',am:'ጤናማ ማህበራዊ ሕይወት ማኅበረሰቡን በሙሉ…'},o:[{en:'grow socially and economically',am:'በማኅበራዊና በኢኮኖሚ እንዲያድግ ይረዳል'},{en:'fight more',am:'የበለጠ እንዲጣላ ያደርጋል'},{en:'stop working',am:'ሥራ እንዲያቆም ያደርጋል'}],a:0}]},
 {title:{en:'What harms social life?',am:'ማህበራዊ ሕይወትን የሚጎዳው ምንድን ነው?'},type:'sort',
  tip:{en:'Some things weaken our relationships; others make them stronger. Sort each card.',am:'አንዳንድ ነገሮች ግንኙነታችንን ያዳክማሉ፤ ሌሎቹ ያጠናክራሉ። እያንዳንዱን ካርድ መድቡ።'},
  buckets:[{en:'Makes it stronger',am:'ያጠናክራል'},{en:'Harms it',am:'ይጎዳል'}],
  items:[{t:{en:'Discrimination and prejudice',am:'አድልዎና ጭፍን ጥላቻ'},b:1},{t:{en:'Not being open with each other',am:'ግልጽነት አለመኖር'},b:1},{t:{en:'Neglecting someone',am:'ቸልተኝነት'},b:1},{t:{en:'Little talk between parents and children',am:'የወላጅና የልጅ ግንኙነት ማነስ'},b:1},{t:{en:'Showing respect',am:'አክብሮት ማሳየት'},b:0},{t:{en:'Talking openly about problems',am:'ስለ ችግሮች በግልጽ መነጋገር'},b:0},{t:{en:'Spending time together as a family',am:'እንደ ቤተሰብ አብሮ ጊዜ ማሳለፍ'},b:0}]},
 {title:{en:'Kind words to solve problems',am:'ችግርን የሚፈቱ ደግ ቃላት'},type:'match',
  tip:{en:'Words can build or break friendships. Match each problem with a kind thing to say.',am:'ቃላት ጓደኝነትን ሊገነቡ ወይም ሊያፈርሱ ይችላሉ። እያንዳንዱን ችግር ከሚነገር ደግ ቃል ጋር አዛምዱ።'},
  rounds:[[[{en:'You bumped into someone',am:'ሰው ገጫችሁ'},{en:'"Sorry, are you OK?"',am:'“ይቅርታ፣ ደህና ነህ?”'}],[{en:'A friend did well in a test',am:'ጓደኛ ፈተና ላይ ጥሩ ሠራ'},{en:'"Well done! I am happy for you."',am:'“ጎበዝ! ደስ ብሎኛል።”'}],[{en:'You disagree with a friend',am:'ከጓደኛ ጋር አልተስማማችሁም'},{en:'"Let us listen to each other first."',am:'“መጀመሪያ እንደማመጥ።”'}],[{en:'A new student arrives',am:'አዲስ ተማሪ መጣ'},{en:'"Welcome! Come and sit with us."',am:'“እንኳን ደህና መጣህ! መጥተህ ከእኛ ጋር ተቀመጥ።”'}],[{en:'Someone helped you',am:'ሰው ረዳችሁ'},{en:'"Thank you very much."',am:'“በጣም አመሰግናለሁ።”'}]]]},
 {type:'exam',items:[
   {q:{en:'Healthy social life is the ability to make meaningful relationships with others.',am:'ጤናማ ማህበራዊ ሕይወት ከሌሎች ጋር ትርጉም ያለው ግንኙነት የመፍጠር ችሎታ ነው።'},o:[{en:'True',am:'እውነት'},{en:'False',am:'ሐሰት'}],a:0},
   {q:{en:'There is no link between social life and physical health.',am:'በማህበራዊ ሕይወትና በአካል ጤንነት መካከል ግንኙነት የለም።'},o:[{en:'False',am:'ሐሰት'},{en:'True',am:'እውነት'}],a:0,e:{en:'Good relationships even help the body fight disease.',am:'መልካም ግንኙነት ሰውነት በሽታን እንዲከላከል እንኳን ይረዳል።'}},
   {q:{en:'Which is a sign of being socially healthy?',am:'ማህበራዊ ጤናማ የመሆን ምልክት የትኛው ነው?'},o:[{en:'Treating others with respect',am:'ሌሎችን በአክብሮት ማስተናገድ'},{en:'Aggressive behaviour',am:'ጠበኛ ባህሪ'},{en:'Not adapting to others',am:'ከሌሎች ጋር አለመላመድ'}],a:0},
   {q:{en:'Which does NOT harm healthy social life?',am:'ጤናማ ማህበራዊ ሕይወትን የማይጎዳው የትኛው ነው?'},o:[{en:'Showing respect',am:'አክብሮት ማሳየት'},{en:'Discrimination',am:'አድልዎ'},{en:'Neglect',am:'ቸልተኝነት'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'People are social beings. Respect, tolerance, helping each other and solving problems by talking make a healthy social life, which keeps us healthy and happy.',am:'ሰዎች ማህበራዊ ፍጡራን ናቸው። መከባበር፣ መቻቻል፣ መረዳዳትና ችግርን በውይይት መፍታት ጤናማ ማህበራዊ ሕይወት ይፈጥራሉ፤ ይህም ጤናማና ደስተኛ ያደርገናል።'},
  points:[
   {en:'Signs: respect, strong family and friend ties, accepting others\' ideas, cooperation, tolerance, avoiding conflict.',am:'ምልክቶች፦ መከባበር፣ ጠንካራ የቤተሰብና የጓደኛ ትስስር፣ የሌሎችን ሐሳብ መቀበል፣ ትብብር፣ መቻቻል፣ ግጭትን ማስወገድ።'},
   {en:'Benefits: sense of belonging, less worry, sharper mind, better health, peaceful community.',am:'ጥቅሞች፦ የባለቤትነት ስሜት፣ ያነሰ ጭንቀት፣ የሰላ አእምሮ፣ የተሻለ ጤና፣ ሰላማዊ ማኅበረሰብ።'},
   {en:'Harmful factors: discrimination, prejudice, lack of openness, neglect, poor parent–child talk.',am:'ጎጂ ምክንያቶች፦ አድልዎ፣ ጭፍን ጥላቻ፣ ግልጽነት ማጣት፣ ቸልተኝነት፣ የወላጅና የልጅ ግንኙነት ማነስ።'}],
  words:[[{en:'Social life',am:'ማህበራዊ ሕይወት'},{en:'our relationships with family, friends and community',am:'ከቤተሰብ፣ ከጓደኞችና ከማኅበረሰብ ጋር ያለን ግንኙነት'}],[{en:'Prejudice',am:'ጭፍን ጥላቻ'},{en:'judging someone without knowing the truth',am:'እውነቱን ሳያውቁ በሰው ላይ መፍረድ'}],[{en:'Respect',am:'ክብር'},{en:'the regard we give to others',am:'ለሌሎች የምንሰጠው አክብሮት'}]],
  remember:{en:'Talk it out, never fight it out.',am:'በውይይት እንጂ በጠብ አትፍቱ።'},
  exam:[[{en:'Give three signs of a healthy social life.',am:'የጤናማ ማህበራዊ ሕይወት ሦስት ምልክቶችን ስጡ።'},{en:'Respect, cooperation, solving problems by discussion',am:'መከባበር፣ ትብብር፣ ችግርን በውይይት መፍታት'}],[{en:'Name two things that harm social life.',am:'ማህበራዊ ሕይወትን የሚጎዱ ሁለት ነገሮችን ጥቀሱ።'},{en:'Discrimination, lack of openness',am:'አድልዎ፣ ግልጽነት ማጣት'}],[{en:'What helped Aman?',am:'አማንን የረዳው ምንድን ነው?'},{en:'Friendship with Ali and his classmates',am:'ከአሊና ከክፍል ጓደኞቹ ጋር ጓደኝነት'}]],
  innovate:{title:{en:'New-student welcome team',am:'የአዲስ ተማሪ እንግዳ ተቀባይ ቡድን'},text:{en:'Being new is hard. Great companies have "onboarding" teams to welcome new people. Create one for your school.',am:'አዲስ መሆን ከባድ ነው። ታላላቅ ድርጅቶች አዲስ ሰዎችን የሚቀበሉ ቡድኖች አሏቸው። ለትምህርት ቤታችሁ አንድ ፍጠሩ።'},
   steps:[{en:'Form a team of 3 friendly classmates.',am:'3 ተግባቢ የክፍል ጓደኞች ያሉበት ቡድን መሥርቱ።'},{en:'Draw a simple welcome map: toilets, library, water point, playground.',am:'ቀላል የእንኳን ደህና መጣችሁ ካርታ ሳሉ፦ መጸዳጃ፣ ቤተ መጻሕፍት፣ የውኃ ቦታ፣ የመጫወቻ ሜዳ።'},{en:'Agree on a buddy plan: sit together and play together for the first week.',am:'የጓደኛ እቅድ ተስማሙ፦ በመጀመሪያው ሳምንት አብሮ መቀመጥና መጫወት።'},{en:'After a week, ask the new student: what helped most?',am:'ከሳምንት በኋላ አዲሱን ተማሪ ጠይቁ፦ በጣም የረዳው ምንድን ነው?'}]}}}
 ]});
})();
