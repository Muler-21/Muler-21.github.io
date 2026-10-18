/* ግብረገብ · ምዕራፍ 5 · ትብብር እና የቡድን ስራ */
(function(){
const {tx,esc}=G3;
function sticks(n,state){/* state: null | 'broke' | 'held' */
 const w=14,gap=4,x0=170-(n*(w+gap))/2;let s='';
 for(let i=0;i<n;i++){const x=x0+i*(w+gap);
  if(state==='broke')s+=`<rect x="${x}" y="30" width="${w}" height="62" rx="4" fill="#B5793F" transform="rotate(-14 ${x+w/2} 92)"/><rect x="${x}" y="98" width="${w}" height="62" rx="4" fill="#B5793F" transform="rotate(14 ${x+w/2} 98)"/>`;
  else s+=`<rect x="${x}" y="30" width="${w}" height="130" rx="4" fill="#B5793F" stroke="#7A4E22" stroke-width="1.5"/>`}
 if(n>1&&state!=='broke')s+=`<rect x="${x0-4}" y="88" width="${n*(w+gap)+4}" height="12" rx="3" fill="#2E8B57"/>`;
 const hands=`<path d="M60 70h40M60 120h40M240 70h40M240 120h40" stroke="#6B4423" stroke-width="10" stroke-linecap="round"/>`;
 const fx=state==='broke'?`<text x="170" y="22" text-anchor="middle" font-size="18" font-weight="700" fill="#D9483B">${esc(tx({en:'SNAP!',am:'ቋ!'}))}</text>`:state==='held'?`<text x="170" y="22" text-anchor="middle" font-size="16" font-weight="700" fill="#1E8A5B">${esc(tx({en:'Too strong to break!',am:'ለመስበር በጣም ጠንካራ!'}))}</text>`:'';
 return`<svg viewBox="0 0 340 180" role="img" aria-label="sticks" style="width:min(400px,100%);height:auto">${hands}${s}${fx}</svg>`}
Unit.start({
 id:'moral-5',subject:'moral',
 subjectName:{en:'Moral Education',am:'ግብረገብ'},chapter:{en:'Chapter 5',am:'ምዕራፍ 5'},
 title:{en:'Cooperation and Teamwork',am:'ትብብር እና የቡድን ሥራ'},
 footer:{en:'Built on the Grade 3 Moral Education student book (ANRS Education Bureau / MoE), Chapter 5: cooperation and teamwork.',am:'በ3ኛ ክፍል የግብረገብ መጽሐፍ (አብክመ ትምህርት ቢሮ / ትምህርት ሚኒስቴር) ምዕራፍ 5 ላይ የተመሰረተ፦ ትብብርና የቡድን ሥራ።'},
 missions:[
 {title:{en:'Experiment: one stick or many?',am:'ሙከራ፦ አንድ እንጨት ወይስ ብዙ?'},type:'custom',
  tip:{en:'Our elders say: "ድር ቢያብር አንበሳ ያስር" (when spider webs join together, they can tie up a lion). Test it! Choose how many sticks to tie together, then try to break them.',am:'አባቶቻችን “ድር ቢያብር አንበሳ ያስር” ይላሉ። ፈትሹት! ስንት እንጨት አንድ ላይ እንደምታስሩ ምረጡ፤ ከዚያ ለመስበር ሞክሩ።'},
  init(st){st.n=1;st.state=null;st.broke=false;st.held=false},
  render(p,api,st){
   p.innerHTML=`<div style="text-align:center">${sticks(st.n,st.state)}</div>
    <div class="row" style="justify-content:center">${[1,2,3,4,5].map(k=>`<button class="tile" data-n="${k}" style="${st.n===k?'border-color:var(--accent);background:var(--accent-soft)':''}">${tx({en:'{k} stick'+(k>1?'s':''),am:'{k} እንጨት'},{k})}</button>`).join('')}</div>
    <div class="row" style="justify-content:center"><button class="btn primary" data-act="bend">${tx({en:'Try to break',am:'ለመስበር ሞክሩ'})}</button></div>
    <div class="progress" style="text-align:center">${st.broke?'✓ ':''}${tx({en:'Break a single stick',am:'አንድ እንጨት ስበሩ'})} · ${st.held?'✓ ':''}${tx({en:'Find a bundle that will not break',am:'የማይሰበር ጥቅል ፈልጉ'})}</div>
    ${st.broke&&st.held?`<div class="explain">${tx({en:'Alone, one stick snaps easily. Together, the bundle is too strong. People are the same: a team can do what one person cannot. That is why Ethiopians work together in debo and help each other in idir.',am:'አንድ እንጨት ብቻውን በቀላሉ ይሰበራል። በአንድ ላይ ሲታሰሩ ግን ጥቅሉ በጣም ጠንካራ ነው። ሰዎችም እንደዚሁ ናቸው፦ ቡድን አንድ ሰው የማይችለውን ይችላል። ኢትዮጵያውያን በደቦ አብረው የሚሠሩትና በእድር የሚረዳዱት ለዚህ ነው።'})}</div>`:''}`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b)return;
    if(b.dataset.n){st.n=+b.dataset.n;st.state=null;api.S.tick()}
    if(b.dataset.act==='bend'){if(st.n<4){st.state='broke';st.broke=true;api.S.tone([220,110],.09,'square',.12)}else{st.state='held';st.held=true;api.S.yay()}
     if(st.broke&&st.held)api.complete()}
    api.rerender()}}},
 {title:{en:'Teamwork in our community',am:'በማኅበረሰባችን ያለ ትብብር'},type:'match',
  tip:{en:'Ethiopians have a long history of working together. Match each tradition or idea with its meaning.',am:'ኢትዮጵያውያን አብሮ የመሥራት ረጅም ታሪክ አላቸው። እያንዳንዱን ባህል ወይም ሐሳብ ከትርጉሙ ጋር አዛምዱ።'},
  rounds:[[[{en:'Debo',am:'ደቦ'},{en:'Neighbours farm or harvest together without payment',am:'ጎረቤቶች ያለ ክፍያ በጋራ ያርሳሉ ወይም ይሰበስባሉ'}],[{en:'Idir',am:'እድር'},{en:'An association that helps members in times of trouble, such as death',am:'እንደ ሞት ባሉ ችግሮች አባላትን የሚረዳ ማኅበር'}],[{en:'Group work at school',am:'በትምህርት ቤት የቡድን ሥራ'},{en:'Students share knowledge and skills to finish a task',am:'ተማሪዎች ሥራ ለመጨረስ እውቀትና ክህሎት ይካፈላሉ'}],[{en:'Team leader',am:'የቡድን መሪ'},{en:'The person who organises and guides the group',am:'ቡድኑን የሚያደራጅና የሚመራ ሰው'}],[{en:'Common goal',am:'የጋራ ግብ'},{en:'What the whole team wants to achieve',am:'ቡድኑ በሙሉ ሊያሳካ የሚፈልገው'}]]]},
 {title:{en:'Good team member?',am:'ጥሩ የቡድን አባል?'},type:'sort',
  tip:{en:'Principles of teamwork: everyone does their part, communicates well and encourages others. Sort each action.',am:'የቡድን ሥራ መርሆዎች፦ ሁሉም ድርሻውን ይወጣል፣ በደንብ ይግባባል፣ ሌሎችን ያበረታታል። እያንዳንዱን ተግባር መድቡ።'},
  buckets:[{en:'Helps the team',am:'ቡድኑን ይረዳል'},{en:'Hurts the team',am:'ቡድኑን ይጎዳል'}],
  items:[{t:{en:'Doing my own part of the work',am:'የራሴን የሥራ ድርሻ መሥራት'},b:0},{t:{en:'Listening to ideas I disagree with',am:'የማልስማማበትን ሐሳብ ማዳመጥ'},b:0},{t:{en:'Encouraging a member who is stuck',am:'የተቸገረን አባል ማበረታታት'},b:0},{t:{en:'Speaking clearly and kindly',am:'በግልጽና በደግነት መናገር'},b:0},
   {t:{en:'Letting others do all the work',am:'ሥራውን በሙሉ ለሌሎች መተው'},b:1},{t:{en:'Laughing at someone\'s idea',am:'በሰው ሐሳብ መሳቅ'},b:1},{t:{en:'Coming late to every meeting',am:'ለእያንዳንዱ ስብሰባ ማርፈድ'},b:1},{t:{en:'Hurting other members',am:'ሌሎች አባላትን መጉዳት'},b:1}]},
 {title:{en:'Teamwork skills',am:'የቡድን ሥራ ክህሎቶች'},type:'match',
  tip:{en:'Strong teams use five skills. Match each skill with what it means.',am:'ጠንካራ ቡድኖች አምስት ክህሎቶችን ይጠቀማሉ። እያንዳንዱን ክህሎት ከትርጉሙ ጋር አዛምዱ።'},
  rounds:[[[{en:'Open mind',am:'ብሩህ አእምሮ'},{en:'Being willing to listen to other ideas',am:'የሌሎችን ሐሳብ ለማዳመጥ ፈቃደኛ መሆን'}],[{en:'Communication',am:'ተግባቦት'},{en:'Giving, receiving and sharing information',am:'መረጃ መስጠት፣ መቀበልና መለዋወጥ'}],[{en:'Organisation',am:'ድርጅት'},{en:'Planning a task in parts and carrying it out',am:'ሥራን በክፍል ማቀድና መፈጸም'}],[{en:'Debate',am:'ክርክር'},{en:'A formal discussion with rules about one topic',am:'በአንድ ጉዳይ ላይ ሕግ ያለው መደበኛ ውይይት'}],[{en:'Time management',am:'የጊዜ አጠቃቀም'},{en:'Planning how to use your time',am:'ጊዜን እንዴት እንደምንጠቀም ማቀድ'}]]]},
 {title:{en:'Plan your time like a pro',am:'ጊዜያችሁን እንደ ባለሙያ አቅዱ'},type:'order',vertical:true,
  tip:{en:'Good time management helps you finish work well and on time. Put the steps in order.',am:'ጥሩ የጊዜ አጠቃቀም ሥራን በጥራትና በሰዓቱ ለመጨረስ ይረዳል። ደረጃዎቹን በቅደም ተከተል አስቀምጡ።'},
  rounds:[{items:[{en:'Set the goal you want to reach.',am:'ልትደርሱበት የምትፈልጉትን ግብ አስቀምጡ።'},{en:'Put tasks in order: most urgent and important first.',am:'ሥራዎችን በአስቸኳይነትና በአስፈላጊነት ደርድሩ።'},{en:'Make a timetable for each task.',am:'ለእያንዳንዱ ሥራ የጊዜ ሰሌዳ አዘጋጁ።'},{en:'Do the tasks following your plan.',am:'በእቅዳችሁ መሠረት ሥራዎቹን ፈጽሙ።'}]}]},
 {title:{en:'Who does what?',am:'ማን ምን ይሠራል?'},type:'match',
  tip:{en:'Great teams give each person the job that fits their strength. Your class is making a poster about clean water. Match each student to the best role.',am:'ታላላቅ ቡድኖች ለእያንዳንዱ ሰው ከጥንካሬው ጋር የሚስማማ ሥራ ይሰጣሉ። ክፍላችሁ ስለ ንጹህ ውኃ ፖስተር እየሠራ ነው። እያንዳንዱን ተማሪ ከተሻለው ሚና ጋር አዛምዱ።'},
  rounds:[[[{en:'Hana loves drawing',am:'ሐና መሳል ትወዳለች'},{en:'Artist',am:'ሠዓሊ'}],[{en:'Abebe writes neatly',am:'አበበ በንጽህና ይጽፋል'},{en:'Writer',am:'ጸሐፊ'}],[{en:'Rahel always knows the time',am:'ራሔል ሁልጊዜ ሰዓት ታውቃለች'},{en:'Timekeeper',am:'ጊዜ ጠባቂ'}],[{en:'Musa speaks confidently',am:'ሙሳ በልበ ሙሉነት ይናገራል'},{en:'Presenter',am:'አቅራቢ'}],[{en:'Liya listens and organises everyone',am:'ሊያ ታዳምጣለች፤ ሁሉንም ታደራጃለች'},{en:'Team leader',am:'የቡድን መሪ'}]]]},
 {type:'exam',items:[
   {q:{en:'An association of neighbours that helps in emergencies is…',am:'በአደጋ ጊዜ የሚረዳ የጎረቤቶች ማኅበር…'},o:[{en:'Idir',am:'እድር'},{en:'Debo',am:'ደቦ'},{en:'Wedding',am:'ሰርግ'}],a:0},
   {q:{en:'Which is NOT a principle of teamwork?',am:'የቡድን ሥራ መርሕ ያልሆነው የትኛው ነው?'},o:[{en:'Hurting others',am:'ሌሎችን መጉዳት'},{en:'Individual responsibility',am:'የግለሰብ ኃላፊነት'},{en:'Communication skills',am:'የግንኙነት ችሎታ'}],a:0},
   {q:{en:'Communication is only giving information to others.',am:'ተግባቦት ለሌሎች መረጃ መስጠት ብቻ ነው።'},o:[{en:'False',am:'ሐሰት'},{en:'True',am:'እውነት'}],a:0,e:{en:'Communication is giving, receiving AND exchanging information: talking, writing and listening.',am:'ተግባቦት መረጃ መስጠት፣ መቀበልና መለዋወጥ ነው፦ መናገር፣ መጻፍና ማዳመጥ።'}},
   {q:{en:'Teamwork is most useful for tasks that are…',am:'የቡድን ሥራ በጣም የሚጠቅመው…'},o:[{en:'hard for one person',am:'ለአንድ ሰው አስቸጋሪ ለሆኑ ሥራዎች'},{en:'very tiny',am:'በጣም ትንንሽ ለሆኑ ሥራዎች'},{en:'never finished',am:'ፈጽሞ ለማያልቁ'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Cooperation means working together for a common goal. A team can do what one person cannot: "ድር ቢያብር አንበሳ ያስር".',am:'ትብብር ለጋራ ግብ አብሮ መሥራት ነው። ቡድን አንድ ሰው የማይችለውን ይችላል፦ “ድር ቢያብር አንበሳ ያስር”።'},
  points:[
   {en:'A team needs: members with roles, friendship, a leader, and a common goal.',am:'ቡድን የሚያስፈልገው፦ ሚና ያላቸው አባላት፣ ወዳጅነት፣ መሪ፣ የጋራ ግብ።'},
   {en:'Ethiopian traditions: debo (working together) and idir (helping in trouble).',am:'የኢትዮጵያ ባህሎች፦ ደቦ (በጋራ መሥራት) እና እድር (በችግር መረዳዳት)።'},
   {en:'Principles: positive interaction, individual responsibility, communication, encouragement.',am:'መርሆዎች፦ መልካም መስተጋብር፣ የግለሰብ ኃላፊነት፣ ተግባቦት፣ ማበረታታት።'},
   {en:'Skills: open mind, communication, organisation, debate, time management.',am:'ክህሎቶች፦ ብሩህ አእምሮ፣ ተግባቦት፣ ድርጅት፣ ክርክር፣ የጊዜ አጠቃቀም።'}],
  words:[[{en:'Cooperation',am:'ትብብር'},{en:'working with others for one aim',am:'ለአንድ ዓላማ ከሌሎች ጋር መሥራት'}],[{en:'Organisation',am:'ድርጅት'},{en:'planning and doing a task in parts',am:'ሥራን በክፍል ማቀድና መፈጸም'}],[{en:'Debate',am:'ክርክር'},{en:'discussion of different opinions with rules',am:'ሕግ ያለው የተለያዩ አስተያየቶች ውይይት'}]],
  remember:{en:'Together we are stronger: one stick breaks, a bundle holds.',am:'አንድ ላይ ስንሆን እንጠነክራለን፦ አንድ እንጨት ይሰበራል፤ ጥቅል ይጸናል።'},
  exam:[[{en:'Why is teamwork important?',am:'የቡድን ሥራ ለምን አስፈላጊ ነው?'},{en:'People share knowledge, skills and energy to reach a common goal',am:'ሰዎች ለጋራ ግብ እውቀት፣ ክህሎትና ጉልበት ይካፈላሉ'}],[{en:'Steps of good time management?',am:'የጥሩ ጊዜ አጠቃቀም ደረጃዎች?'},{en:'Set goals, prioritise, make a timetable, follow the plan',am:'ግብ ማስቀመጥ፣ ቅድሚያ መስጠት፣ የጊዜ ሰሌዳ፣ በእቅዱ መሥራት'}],[{en:'What is debo?',am:'ደቦ ምንድን ነው?'},{en:'Working together to help each other, for example at harvest',am:'ለመረዳዳት በጋራ መሥራት፣ ለምሳሌ በአዝመራ'}]],
  innovate:{title:{en:'Class team business: the school garden',am:'የክፍል ቡድን ሥራ፦ የትምህርት ቤት አትክልት'},text:{en:'Real companies are teams with roles. Run a small team project: grow vegetables in a school plot and sell them, like a mini company.',am:'እውነተኛ ኩባንያዎች ሚና ያላቸው ቡድኖች ናቸው። ትንሽ የቡድን ፕሮጀክት አካሂዱ፦ በትምህርት ቤት ቦታ አትክልት አብቅላችሁ ሽጡ፤ እንደ ትንሽ ኩባንያ።'},
   steps:[{en:'Choose roles: leader, planters, waterers, record keeper, seller.',am:'ሚናዎችን ምረጡ፦ መሪ፣ ተካዮች፣ አጠጪዎች፣ መዝጋቢ፣ ሻጭ።'},{en:'Make a weekly timetable so the plants get water every day.',am:'ተክሎቹ በየቀኑ ውኃ እንዲያገኙ ሳምንታዊ የጊዜ ሰሌዳ አውጡ።'},{en:'Record costs (seeds) and income (sales) in a notebook.',am:'ወጪን (ዘር) እና ገቢን (ሽያጭ) በደብተር መዝግቡ።'},{en:'Hold a team meeting: what worked? What will you improve next season?',am:'የቡድን ስብሰባ አድርጉ፦ ምን ሠራ? በሚቀጥለው ወቅት ምን ታሻሽላላችሁ?'}]}}}
 ]});
})();
