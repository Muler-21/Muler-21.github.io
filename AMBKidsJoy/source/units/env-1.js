/* አካባቢ ሳይንስ · ምዕራፍ 1 · የዞናችን መገኛ */
(function(){
const {tx,esc,shuffle,rnd}=G3;
const DIRS={N:{en:'North',am:'ሰሜን',dx:0,dy:-1},NE:{en:'North-east',am:'ሰሜን ምስራቅ',dx:1,dy:-1},E:{en:'East',am:'ምስራቅ',dx:1,dy:0},SE:{en:'South-east',am:'ደቡብ ምስራቅ',dx:1,dy:1},
 S:{en:'South',am:'ደቡብ',dx:0,dy:1},SW:{en:'South-west',am:'ደቡብ ምዕራብ',dx:-1,dy:1},W:{en:'West',am:'ምዕራብ',dx:-1,dy:0},NW:{en:'North-west',am:'ሰሜን ምዕራብ',dx:-1,dy:-1}};
const OPP={N:'S',S:'N',E:'W',W:'E',NE:'SW',SW:'NE',NW:'SE',SE:'NW'};
const GRID=[['NW','N','NE'],['W',null,'E'],['SW','S','SE']];
const PLACES=[{d:'N',en:'Market',am:'ገበያ',c:'var(--sun)'},{d:'S',en:'Health centre',am:'ጤና ጣቢያ',c:'var(--clay)'},{d:'E',en:'Mill',am:'ወፍጮ ቤት',c:'var(--plum)'},{d:'W',en:'River',am:'ወንዝ',c:'var(--blue)'},
 {d:'NE',en:'Mountain',am:'ተራራ',c:'var(--green)'},{d:'NW',en:'Farm',am:'እርሻ',c:'var(--sun)'},{d:'SE',en:'Water well',am:'የውኃ ጉድጓድ',c:'var(--teal)'},{d:'SW',en:'Football field',am:'የእግር ኳስ ሜዳ',c:'var(--green)'}];
const SCHOOL={en:'School',am:'ትምህርት ቤት'};

function villageMap(){const cx=d=>150+DIRS[d].dx*100,cy=d=>150+DIRS[d].dy*100;
 return`<svg viewBox="0 0 300 300" role="img" aria-label="village map" style="width:min(340px,100%);height:auto">
 <rect x="2" y="2" width="296" height="296" rx="16" fill="var(--green-soft)" stroke="var(--line)" stroke-width="3"/>
 <path d="M150 150L150 50M150 150L250 150M150 150L150 250M150 150L50 150M150 150L250 50M150 150L50 50M150 150L250 250M150 150L50 250" stroke="var(--line)" stroke-width="3" stroke-dasharray="6 6"/>
 ${PLACES.map(p=>`<circle cx="${cx(p.d)}" cy="${cy(p.d)}" r="20" fill="${p.c}"/><text x="${cx(p.d)}" y="${cy(p.d)+38}" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)" font-family="var(--display)">${esc(tx(p))}</text>`).join('')}
 <rect x="128" y="128" width="44" height="40" rx="6" fill="var(--blue)"/><path d="M122 132L150 110l28 22z" fill="var(--clay)"/><text x="150" y="190" text-anchor="middle" font-size="15" font-weight="800" fill="var(--ink)" font-family="var(--display)">${esc(tx(SCHOOL))}</text>
 <g transform="translate(262 30)"><circle r="20" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/><path d="M0-16L6 0H-6z" fill="var(--clay)"/><path d="M0 16L6 0H-6z" fill="var(--ink-soft)"/><text y="-23" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">N</text></g>
 </svg>`}
function compassButtons(disabled){return`<div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;max-width:360px">${GRID.flat().map(d=>d?`<button class="btn" data-dir="${d}" ${disabled?'disabled':''} style="padding:8px 4px;font-size:.95rem">${esc(tx(DIRS[d]))}</button>`:`<span style="display:grid;place-items:center;font-size:1.6rem">✦</span>`).join('')}</div>`}

/* neighbours of South Gondar, as given in the textbook */
const NB=[{d:'N',en:'Central Gondar',am:'ማዕከላዊ ጎንደር'},{d:'NE',en:'Wag Hemra',am:'ዋግ ኽምራ'},{d:'E',en:'North Wollo',am:'ሰሜን ወሎ'},{d:'SE',en:'South Wollo',am:'ደቡብ ወሎ'},
 {d:'S',en:'East Gojjam',am:'ምስራቅ ጎጃም'},{d:'W',en:'West Gojjam',am:'ምዕራብ ጎጃም'},{d:'NW',en:'Lake Tana',am:'ጣና ሐይቅ'}];
function wheel(){const pos=d=>[180+DIRS[d].dx*125,150+DIRS[d].dy*105];
 return`<svg viewBox="0 0 360 300" role="img" aria-label="South Gondar and its neighbours" style="width:min(420px,100%);height:auto">
 ${NB.map(n=>{const[x,y]=pos(n.d);return`<line x1="180" y1="150" x2="${x}" y2="${y}" stroke="var(--line)" stroke-width="3"/>`}).join('')}
 <circle cx="180" cy="150" r="46" fill="var(--green)"/><text x="180" y="146" text-anchor="middle" font-size="14" font-weight="800" fill="#fff" font-family="var(--display)">${esc(tx({en:'South',am:'ደቡብ'}))}</text><text x="180" y="164" text-anchor="middle" font-size="14" font-weight="800" fill="#fff" font-family="var(--display)">${esc(tx({en:'Gondar',am:'ጎንደር'}))}</text>
 ${NB.map(n=>{const[x,y]=pos(n.d);const lake=n.d==='NW';return`<rect x="${x-50}" y="${y-17}" width="100" height="34" rx="17" fill="${lake?'var(--blue-soft)':'var(--surface)'}" stroke="${lake?'var(--blue)':'var(--ink-soft)'}" stroke-width="2"/><text x="${x}" y="${y+5}" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)" font-family="var(--display)">${esc(tx(n))}</text>`}).join('')}
 <g transform="translate(60 270)"><path d="M0-18L6 0H-6z" fill="var(--clay)"/><text y="-22" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">N</text></g></svg>`}

/* lat/long treasure grid: latitude 1–5°N rows, longitude 1–5°E columns */
const SPOTS=[{lat:4,lon:2,en:'Lighthouse',am:'የመብራት ማማ',c:'var(--clay)'},{lat:2,lon:4,en:'Palm tree',am:'የዘንባባ ዛፍ',c:'var(--green)'},{lat:5,lon:5,en:'Cave',am:'ዋሻ',c:'var(--ink-soft)'},
 {lat:1,lon:1,en:'Boat',am:'ጀልባ',c:'var(--blue)'},{lat:3,lon:3,en:'Treasure',am:'ውድ ሀብት',c:'var(--sun)'},{lat:5,lon:1,en:'Hut',am:'ጎጆ ቤት',c:'var(--plum)'},{lat:1,lon:4,en:'Rock',am:'አለት',c:'var(--teal)'}];
function gridMap(hl){const X=l=>40+(l-1)*60,Y=l=>280-(l-1)*55;
 return`<svg viewBox="0 0 330 330" role="img" aria-label="grid map" style="width:min(380px,100%);height:auto">
 <rect x="16" y="20" width="300" height="290" rx="20" fill="var(--blue-soft)"/><ellipse cx="160" cy="170" rx="140" ry="130" fill="var(--green-soft)"/>
 ${[1,2,3,4,5].map(l=>`<line x1="20" y1="${Y(l)}" x2="300" y2="${Y(l)}" stroke="var(--blue)" stroke-width="2"/><text x="304" y="${Y(l)+4}" font-size="12" font-weight="800" fill="var(--blue)">${l}°N</text>`).join('')}
 ${[1,2,3,4,5].map(l=>`<line x1="${X(l)}" y1="40" x2="${X(l)}" y2="300" stroke="var(--clay)" stroke-width="2"/><text x="${X(l)}" y="318" text-anchor="middle" font-size="12" font-weight="800" fill="var(--clay)">${l}°E</text>`).join('')}
 ${SPOTS.map(s=>`<circle cx="${X(s.lon)}" cy="${Y(s.lat)}" r="${hl===s?14:11}" fill="${s.c}" stroke="var(--surface)" stroke-width="3"/>`).join('')}
 </svg>`}
const legend=()=>`<div class="row" style="gap:6px">${SPOTS.map(s=>`<span class="tile" style="font-size:.95rem;padding:4px 10px;box-shadow:none"><span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${s.c};margin-right:6px"></span>${esc(tx(s))}</span>`).join('')}</div>`;
const coord=(s)=>tx({en:`${s.lat}°N, ${s.lon}°E`,am:`${s.lat}° ሰሜን፣ ${s.lon}° ምስራቅ`});

const GLOBE=`<svg viewBox="0 0 220 120" role="img" aria-label="latitude and longitude lines" style="width:min(320px,100%);height:auto;display:block;margin:6px auto">
 <g transform="translate(60 60)"><circle r="50" fill="var(--blue-soft)" stroke="var(--ink)" stroke-width="2"/><path d="M-50 0H50" stroke="var(--clay)" stroke-width="3"/><path d="M-43-25H43M-43 25H43M-25-43H25M-25 43H25" stroke="var(--blue)" stroke-width="2"/></g>
 <g transform="translate(160 60)"><circle r="50" fill="var(--blue-soft)" stroke="var(--ink)" stroke-width="2"/><path d="M0-50V50" stroke="var(--clay)" stroke-width="3"/><ellipse rx="25" ry="50" fill="none" stroke="var(--blue)" stroke-width="2"/><ellipse rx="42" ry="50" fill="none" stroke="var(--blue)" stroke-width="2"/></g>
 <text x="60" y="118" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">LATITUDE · ኬክሮስ</text><text x="160" y="118" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">LONGITUDE · ኬንትሮስ</text></svg>`;

Unit.start({
 id:'env-1',subject:'env',
 subjectName:{en:'Environmental Science',am:'አካባቢ ሳይንስ'},
 chapter:{en:'Chapter 1',am:'ምዕራፍ 1'},
 title:{en:'Where Is Our Zone?',am:'የዞናችን መገኛ'},
 footer:{en:'Built on the Grade 3 Environmental Science student book, Chapter 1.',am:'በ3ኛ ክፍል የአካባቢ ሳይንስ መጽሐፍ ምዕራፍ 1 ላይ የተመሰረተ።'},
 missions:[
 {title:{en:'From kebele to country',am:'ከቀበሌ እስከ ሀገር'},type:'order',vertical:true,
  tip:{en:'Places fit inside each other like boxes. Several kebeles make a woreda. Three or more woredas make a zone. Zones make a region, and regions make our country.',am:'ቦታዎች እንደ ሳጥን አንዱ በሌላው ውስጥ ይገባሉ። በርካታ ቀበሌዎች ወረዳ ይሆናሉ። ሦስትና ከዚያ በላይ ወረዳዎች ዞን ይሆናሉ። ዞኖች ክልል፣ ክልሎች ደግሞ ሀገራችንን ይመሰርታሉ።'},
  help:{en:'Tap from the smallest to the biggest.',am:'ከትንሹ ወደ ትልቁ ንኩ።'},
  rounds:[
   {prompt:{en:'Order from smallest to biggest:',am:'ከትንሹ ወደ ትልቁ አስቀምጡ፦'},items:[{en:'Kebele',am:'ቀበሌ'},{en:'Woreda',am:'ወረዳ'},{en:'Zone',am:'ዞን'},{en:'Region',am:'ክልል'},{en:'Country',am:'ሀገር'}],
    e:{en:'Kebele → Woreda → Zone → Region → Country (Ethiopia).',am:'ቀበሌ → ወረዳ → ዞን → ክልል → ሀገር (ኢትዮጵያ)።'}},
   {prompt:{en:'Now from biggest to smallest:',am:'አሁን ከትልቁ ወደ ትንሹ፦'},items:[{en:'Ethiopia',am:'ኢትዮጵያ'},{en:'Amhara Region',am:'አማራ ክልል'},{en:'My zone',am:'ዞኔ'},{en:'My woreda',am:'ወረዳዬ'},{en:'My kebele',am:'ቀበሌዬ'}],
    e:{en:'Ask your family: what are the names of your kebele, woreda and zone?',am:'ቤተሰባችሁን ጠይቁ፦ የቀበሌያችሁ፣ የወረዳችሁና የዞናችሁ ስም ማን ነው?'}}
  ]},
 {title:{en:'Directions',am:'አቅጣጫዎች'},type:'custom',
  tip:{en:'Stand at the school and look at the map. North is up. Tap the direction on the compass buttons. Later the questions start from other places. Think carefully!',am:'ትምህርት ቤቱ ላይ ቆማችሁ ካርታውን እዩ። ሰሜን ወደ ላይ ነው። አቅጣጫውን በኮምፓሱ ቁልፎች ላይ ንኩ። በኋላ ጥያቄዎቹ ከሌሎች ቦታዎች ይጀምራሉ። በጥንቃቄ አስቡ!'},
  init(st){st.score=0;st.q=null;st.msg='';st.cls='';st.solved=false},
  newQ(st){const lvl=st.score<3?0:st.score<6?1:2;let p;
   if(lvl===0){p=shuffle(PLACES.filter(x=>x.d.length===1))[0];return{place:p,ans:p.d,rev:false}}
   if(lvl===1){p=shuffle(PLACES.filter(x=>x.d.length===2))[0];return{place:p,ans:p.d,rev:false}}
   p=shuffle(PLACES)[0];return{place:p,ans:OPP[p.d],rev:true}},
  render(p,api,st){if(!st.q)st.q=this.newQ(st);const q=st.q;
   const ask=q.rev?tx({en:`From the ${tx(q.place)}, in which direction is the School?`,am:`ከ${tx(q.place)} ሲታይ ትምህርት ቤቱ በስተየት ይገኛል?`})
     :tx({en:`The ${tx(q.place)} is in which direction from the School?`,am:`${tx(q.place)} ከትምህርት ቤቱ በስተየት ይገኛል?`});
   p.innerHTML=`<div class="row" style="align-items:flex-start;gap:20px"><div>${villageMap()}</div>
    <div style="display:grid;gap:12px;min-width:0;flex:1 1 260px"><div class="q"><span class="qt">${esc(ask)}</span></div>${compassButtons(st.solved)}
    <div class="feedback ${st.cls}" aria-live="polite">${st.msg}</div>
    ${st.solved?`<div><button class="btn primary" data-act="next">${tx(api.UI.next)}</button></div>`:''}
    <div class="progress">${tx({en:'Correct: {n}/9',am:'ትክክል፦ {n}/9'},{n:st.score})}</div></div></div>
    ${st.score>=6?`<div class="note">${tx({en:'Trick: from the other place, the school is in the OPPOSITE direction. North ↔ South, East ↔ West.',am:'ዘዴ፦ ከሌላው ቦታ ሲታይ ትምህርት ቤቱ በተቃራኒ አቅጣጫ ይገኛል። ሰሜን ↔ ደቡብ፣ ምስራቅ ↔ ምዕራብ።'})}</div>`:''}`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
    if(b.dataset.dir){if(b.dataset.dir===q.ans){st.score++;st.solved=true;st.cls='good';st.msg=tx(api.UI.good)+' '+tx(DIRS[q.ans]);api.S.yay();if(st.score>=9)api.complete()}
     else{st.cls='bad';st.msg=tx(api.UI.bad);api.S.nope()}}
    if(b.dataset.act==='next'){st.q=this.newQ(st);st.solved=false;st.msg=''}
    api.rerender()}}},
 {title:{en:'Our neighbours',am:'አዋሳኞቻችን'},type:'quiz',
  tip:{en:'Relative location tells where a place is compared to things around it. Here is the example from your book: South Gondar zone and its neighbours.',am:'አንፃራዊ መገኛ አንድ ቦታ በአካባቢው ካሉ ነገሮች አንፃር የት እንዳለ ይነግረናል። ከመጽሐፋችሁ የተወሰደው ምሳሌ ይህ ነው፦ የደቡብ ጎንደር ዞንና አዋሳኞቹ።'},
  items:[
   {fig:wheel(),q:{en:'Which zone borders South Gondar on the north?',am:'ደቡብ ጎንደርን በስተሰሜን የሚያዋስነው ዞን የትኛው ነው?'},o:[{en:'Central Gondar',am:'ማዕከላዊ ጎንደር'},{en:'East Gojjam',am:'ምስራቅ ጎጃም'},{en:'South Wollo',am:'ደቡብ ወሎ'},{en:'Wag Hemra',am:'ዋግ ኽምራ'}],a:0},
   {fig:wheel(),q:{en:'Which zone is to the south?',am:'በስተደቡብ ያለው ዞን የትኛው ነው?'},o:[{en:'North Wollo',am:'ሰሜን ወሎ'},{en:'East Gojjam',am:'ምስራቅ ጎጃም'},{en:'West Gojjam',am:'ምዕራብ ጎጃም'},{en:'Central Gondar',am:'ማዕከላዊ ጎንደር'}],a:1},
   {fig:wheel(),q:{en:'What borders South Gondar on the north-west?',am:'ደቡብ ጎንደርን በሰሜን ምዕራብ የሚያዋስነው ምንድን ነው?'},o:[{en:'A mountain',am:'ተራራ'},{en:'Lake Tana',am:'ጣና ሐይቅ'},{en:'North Wollo',am:'ሰሜን ወሎ'},{en:'A river',am:'ወንዝ'}],a:1,e:{en:'Natural features like lakes can also be neighbours.',am:'እንደ ሐይቅ ያሉ የተፈጥሮ ክስተቶችም አዋሳኝ ሊሆኑ ይችላሉ።'}},
   {fig:wheel(),q:{en:'In which direction is Wag Hemra from South Gondar?',am:'ዋግ ኽምራ ከደቡብ ጎንደር በስተየት ይገኛል?'},o:[{en:'South-west',am:'ደቡብ ምዕራብ'},{en:'North-east',am:'ሰሜን ምስራቅ'},{en:'West',am:'ምዕራብ'},{en:'South',am:'ደቡብ'}],a:1},
   {fig:wheel(),q:{en:'Think backwards! In which direction is South Gondar from North Wollo?',am:'ገልብጣችሁ አስቡ! ደቡብ ጎንደር ከሰሜን ወሎ በስተየት ይገኛል?'},o:[{en:'East',am:'ምስራቅ'},{en:'West',am:'ምዕራብ'},{en:'North',am:'ሰሜን'},{en:'South',am:'ደቡብ'}],a:1,e:{en:'North Wollo is EAST of South Gondar, so South Gondar is WEST of North Wollo.',am:'ሰሜን ወሎ ከደቡብ ጎንደር በስተ ምስራቅ ነው፤ ስለዚህ ደቡብ ጎንደር ከሰሜን ወሎ በስተ ምዕራብ ነው።'}},
   {fig:wheel(),q:{en:'How many ZONES border South Gondar? (The lake is not a zone.)',am:'ደቡብ ጎንደርን ስንት ዞኖች ያዋስኑታል? (ሐይቁ ዞን አይደለም።)'},o:['5','6','7','8'],a:1,e:{en:'Six zones and Lake Tana. Now ask your teacher: which zones border YOUR zone?',am:'ስድስት ዞኖችና ጣና ሐይቅ። አሁን መምህራችሁን ጠይቁ፦ የእናንተን ዞን የሚያዋስኑት ዞኖች እነማን ናቸው?'}}
  ]},
 {title:{en:'Lines on the globe',am:'የዲግሪ ልኬት መስመሮች'},type:'sort',
  tip:{en:'Mapmakers draw two kinds of lines. Latitude lines go across, east to west, starting from the Equator (0°). Longitude lines go from pole to pole, starting from Greenwich (0°).',am:'ካርታ ሰሪዎች ሁለት ዓይነት መስመሮችን ይሰምራሉ። የኬክሮስ መስመሮች ከምስራቅ ወደ ምዕራብ ይሰመራሉ፤ መነሻቸው የምድር ወገብ (0°) ነው። የኬንትሮስ መስመሮች ከዋልታ ወደ ዋልታ ይሰመራሉ፤ መነሻቸው ግሪኒውች (0°) ነው።'},
  intro:{en:GLOBE+'Sort each fact into the right group.',am:GLOBE+'እያንዳንዱን እውነታ በትክክለኛው ምድብ አስቀምጡ።'},
  buckets:[{en:'Latitude (ኬክሮስ)',am:'ኬክሮስ'},{en:'Longitude (ኬንትሮስ)',am:'ኬንትሮስ'}],
  items:[
   {t:{en:'Drawn from east to west',am:'ከምስራቅ ወደ ምዕራብ ይሰመራሉ'},b:0,short:{en:'east–west',am:'ምስራቅ–ምዕራብ'}},
   {t:{en:'Drawn from the North Pole to the South Pole',am:'ከሰሜን ዋልታ ወደ ደቡብ ዋልታ ይሰመራሉ'},b:1,short:{en:'pole to pole',am:'ዋልታ–ዋልታ'}},
   {t:{en:'The starting line is the Equator (0°)',am:'መነሻው የምድር ወገብ (0°) ነው'},b:0,short:{en:'Equator',am:'የምድር ወገብ'}},
   {t:{en:'The starting line is Greenwich (0°)',am:'መነሻው ግሪኒውች (0°) ነው'},b:1,short:{en:'Greenwich',am:'ግሪኒውች'}},
   {t:{en:'The lines never meet. They are parallel.',am:'መስመሮቹ ፈጽሞ አይገናኙም፤ ተጓዳኝ ናቸው'},b:0,short:{en:'parallel',am:'ተጓዳኝ'}},
   {t:{en:'All the lines meet at the poles',am:'መስመሮቹ ሁሉ በዋልታዎች ይገናኛሉ'},b:1,short:{en:'meet at poles',am:'በዋልታ ይገናኛሉ'}},
   {t:{en:'The lines get shorter near the poles',am:'ወደ ዋልታዎች ሲጠጉ ርዝመታቸው ያጥራል'},b:0,short:{en:'get shorter',am:'ያጥራሉ'}},
   {t:{en:'Tells how far north or south a place is',am:'ቦታው ምን ያህል ወደ ሰሜን ወይም ደቡብ እንደሆነ ይነግራል'},b:0,short:{en:'north/south',am:'ሰሜን/ደቡብ'}},
   {t:{en:'Tells how far east or west a place is',am:'ቦታው ምን ያህል ወደ ምስራቅ ወይም ምዕራብ እንደሆነ ይነግራል'},b:1,short:{en:'east/west',am:'ምስራቅ/ምዕራብ'}}
  ]},
 {title:{en:'Treasure grid',am:'የውድ ሀብት ፍለጋ'},type:'custom',
  tip:{en:'Absolute location is an exact address made of two numbers. Say the latitude first (blue, °N), then the longitude (red, °E). Find the spot where the two lines cross!',am:'ፍፁማዊ መገኛ ከሁለት ቁጥሮች የተሠራ ትክክለኛ አድራሻ ነው። መጀመሪያ ኬክሮስን (ሰማያዊ፣ °ሰሜን)፣ ቀጥሎ ኬንትሮስን (ቀይ፣ °ምስራቅ) ተናገሩ። ሁለቱ መስመሮች የሚገናኙበትን ቦታ ፈልጉ!'},
  init(st){st.score=0;st.q=null;st.msg='';st.cls='';st.solved=false},
  newQ(st){const s=shuffle(SPOTS)[0];const rev=st.score%2===1;
   if(!rev)return{s,rev,opts:shuffle([s,...shuffle(SPOTS.filter(x=>x!==s)).slice(0,3)])};
   const wrong=[{lat:s.lon,lon:s.lat},{lat:s.lat,lon:s.lon===5?4:s.lon+1},{lat:s.lat===1?2:s.lat-1,lon:s.lon}].filter(w=>!(w.lat===s.lat&&w.lon===s.lon));
   const uniq=[];[s,...wrong].forEach(w=>{if(!uniq.some(u=>u.lat===w.lat&&u.lon===w.lon))uniq.push(w)});return{s,rev,opts:shuffle(uniq)}},
  render(p,api,st){if(!st.q)st.q=this.newQ(st);const q=st.q;
   const ask=q.rev?tx({en:`What is the location of the ${tx(q.s)}?`,am:`የ${tx(q.s)} መገኛ የትኛው ነው?`}):tx({en:`What is at ${coord(q.s)}?`,am:`${coord(q.s)} ላይ ምን ይገኛል?`});
   p.innerHTML=`<div class="row" style="align-items:flex-start;gap:20px"><div>${gridMap(st.solved?q.s:null)}</div>
    <div style="display:grid;gap:12px;min-width:0;flex:1 1 260px"><div class="q"><span class="qt">${esc(ask)}</span></div>
    <div class="opts">${q.opts.map((o,j)=>`<button class="opt" data-j="${j}" ${st.solved?'disabled':''}>${q.rev?esc(coord(o)):esc(tx(o))}</button>`).join('')}</div>
    <div class="feedback ${st.cls}">${st.msg}</div>${st.solved?`<div><button class="btn primary" data-act="next">${tx(api.UI.next)}</button></div>`:''}
    <div class="progress">${tx({en:'Correct: {n}/6',am:'ትክክል፦ {n}/6'},{n:st.score})}</div></div></div>
    ${legend()}
    <div class="note">${tx({en:'Real example from your book: South Gondar zone lies between 11°20′N and 12°30′N latitude, and between 37°30′E and 38°40′E longitude.',am:'ከመጽሐፋችሁ እውነተኛ ምሳሌ፦ የደቡብ ጎንደር ዞን ከ11°20′ እስከ 12°30′ ሰሜን ኬክሮስ እና ከ37°30′ እስከ 38°40′ ምስራቅ ኬንትሮስ ላይ ይገኛል።'})}</div>`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
    if(b.dataset.j!==undefined){const o=q.opts[+b.dataset.j];const ok=o.lat===q.s.lat&&o.lon===q.s.lon;
     if(ok){st.score++;st.solved=true;st.cls='good';st.msg=tx(api.UI.good)+' '+coord(q.s);api.S.yay();if(st.score>=6)api.complete()}
     else{st.cls='bad';st.msg=tx({en:'Not yet. Find the blue latitude line first, then the red longitude line.',am:'ገና ነው። መጀመሪያ ሰማያዊውን የኬክሮስ መስመር፣ ከዚያ ቀዩን የኬንትሮስ መስመር ፈልጉ።'});api.S.nope()}}
    if(b.dataset.act==='next'){st.q=this.newQ(st);st.solved=false;st.msg=''}
    api.rerender()}}},
 {title:{en:'Relative or absolute?',am:'አንፃራዊ ወይስ ፍፁማዊ?'},type:'sort',
  tip:{en:'Relative location uses nearby things: "next to the river". Absolute location uses latitude and longitude numbers: "12°N, 37°E".',am:'አንፃራዊ መገኛ በአቅራቢያ ያሉ ነገሮችን ይጠቀማል፦ “ከወንዙ አጠገብ”። ፍፁማዊ መገኛ የኬክሮስና የኬንትሮስ ቁጥሮችን ይጠቀማል፦ “12° ሰሜን፣ 37° ምስራቅ”።'},
  buckets:[{en:'Relative location',am:'አንፃራዊ መገኛ'},{en:'Absolute location',am:'ፍፁማዊ መገኛ'}],
  items:[
   {t:{en:'The school is next to the river.',am:'ትምህርት ቤቱ ከወንዙ አጠገብ ነው።'},b:0,short:{en:'next to river',am:'ከወንዙ አጠገብ'}},
   {t:{en:'12° North, 37° East',am:'12° ሰሜን፣ 37° ምስራቅ'},b:1,short:'12°N 37°E'},
   {t:{en:'The market is east of the church.',am:'ገበያው ከቤተ ክርስቲያኑ በስተ ምስራቅ ነው።'},b:0,short:{en:'east of church',am:'በስተ ምስራቅ'}},
   {t:{en:'My house is behind the mosque.',am:'ቤቴ ከመስጊዱ ጀርባ ነው።'},b:0,short:{en:'behind mosque',am:'ከመስጊዱ ጀርባ'}},
   {t:{en:'11° North latitude and 38° East longitude',am:'11° ሰሜን ኬክሮስ እና 38° ምስራቅ ኬንትሮስ'},b:1,short:'11°N 38°E'},
   {t:{en:'Our zone borders Lake Tana on the north-west.',am:'ዞናችን በሰሜን ምዕራብ ከጣና ሐይቅ ጋር ይዋሰናል።'},b:0,short:{en:'borders Lake Tana',am:'ጣና ሐይቅ'}},
   {t:{en:'0° latitude (on the Equator)',am:'0° ኬክሮስ (የምድር ወገብ ላይ)'},b:1,short:'0°'}
  ]},
 {title:{en:"Thinker's challenge",am:'የአሳቢዎች ፈተና'},type:'quiz',
  tip:{en:'These puzzles need careful thinking. Use your body: stand up, face north, and try them!',am:'እነዚህ እንቆቅልሾች ጥንቃቄ የተሞላበት አስተሳሰብ ይፈልጋሉ። ሰውነታችሁን ተጠቀሙ፦ ተነሱ፣ ወደ ሰሜን ዙሩና ሞክሩ!'},
  items:[
   {q:{en:'You face north. What is behind you?',am:'ወደ ሰሜን ዞራችኋል። ከጀርባችሁ ያለው አቅጣጫ የትኛው ነው?'},o:[{en:'East',am:'ምስራቅ'},{en:'South',am:'ደቡብ'},{en:'West',am:'ምዕራብ'},{en:'North',am:'ሰሜን'}],a:1},
   {q:{en:'You face north. Which direction is on your right hand?',am:'ወደ ሰሜን ዞራችኋል። በቀኝ እጃችሁ በኩል ያለው አቅጣጫ የትኛው ነው?'},o:[{en:'East',am:'ምስራቅ'},{en:'West',am:'ምዕራብ'},{en:'South',am:'ደቡብ'},{en:'North-west',am:'ሰሜን ምዕራብ'}],a:0},
   {q:{en:'The sun rises in the…',am:'ፀሐይ የምትወጣው በስተ…'},o:[{en:'West',am:'ምዕራብ'},{en:'North',am:'ሰሜን'},{en:'East',am:'ምስራቅ'},{en:'South',am:'ደቡብ'}],a:2,e:{en:'So in the morning, the side where the sun rises is east. That is a free compass!',am:'ስለዚህ ጠዋት ፀሐይ የምትወጣበት በኩል ምስራቅ ነው። ይህ ነጻ ኮምፓስ ነው!'}},
   {q:{en:'Which direction is exactly between north and east?',am:'በሰሜንና በምስራቅ መካከል ያለው አቅጣጫ የትኛው ነው?'},o:[{en:'South-east',am:'ደቡብ ምስራቅ'},{en:'North-west',am:'ሰሜን ምዕራብ'},{en:'North-east',am:'ሰሜን ምስራቅ'},{en:'South-west',am:'ደቡብ ምዕራብ'}],a:2},
   {q:{en:'When we write an absolute location, which comes first?',am:'ፍፁማዊ መገኛን ስንጽፍ መጀመሪያ የሚመጣው የትኛው ነው?'},o:[{en:'Longitude',am:'ኬንትሮስ'},{en:'Latitude',am:'ኬክሮስ'},{en:'The zone name',am:'የዞኑ ስም'},{en:'Either one',am:'የትኛውም'}],a:1,e:{en:'Latitude first, then longitude.',am:'መጀመሪያ ኬክሮስ፣ ቀጥሎ ኬንትሮስ።'}},
   {q:{en:'Why is it useful to know locations?',am:'መገኛን ማወቅ ለምን ይጠቅማል?'},o:[{en:'To travel from place to place',am:'ከቦታ ቦታ ለመንቀሳቀስ'},{en:'To know our kebele, woreda and zone',am:'ቀበሌያችንን፣ ወረዳችንንና ዞናችንን ለማወቅ'},{en:'To build good relations with neighbours',am:'ከአጎራባቾቻችን ጋር ግንኙነት ለመፍጠር'},{en:'All of these',am:'ሁሉም'}],a:3}
  ]},
 {type:'notes',notes:{
 big:{en:'We can describe where a place is in two ways: by what is around it (relative) or by exact numbers (absolute).',am:'የአንድን ቦታ መገኛ በሁለት መንገድ መግለጽ እንችላለን፦ በአካባቢው ባሉ ነገሮች (አንፃራዊ) ወይም በትክክለኛ ቁጥሮች (ፍፁማዊ)።'},
 points:[{en:'Kebele → woreda → zone → region → country. A zone is three or more woredas.',am:'ቀበሌ → ወረዳ → ዞን → ክልል → ሀገር። ዞን ሦስትና ከዚያ በላይ ወረዳዎች ነው።'},{en:'Four main directions: north, south, east, west. Between them: NE, NW, SE, SW.',am:'አራት ዋና አቅጣጫዎች፦ ሰሜን፣ ደቡብ፣ ምስራቅ፣ ምዕራብ። በመካከላቸው፦ ሰሜን ምስራቅ፣ ሰሜን ምዕራብ፣ ደቡብ ምስራቅ፣ ደቡብ ምዕራብ።'},{en:'Latitude lines run east–west from the Equator (0°). Longitude lines run pole to pole from Greenwich (0°).',am:'የኬክሮስ መስመሮች ከምስራቅ ወደ ምዕራብ ይሰመራሉ፤ መነሻ የምድር ወገብ (0°)። የኬንትሮስ መስመሮች ከዋልታ ወደ ዋልታ፤ መነሻ ግሪኒውች (0°)።'},{en:'Absolute location: latitude first, then longitude.',am:'ፍፁማዊ መገኛ፦ መጀመሪያ ኬክሮስ፣ ቀጥሎ ኬንትሮስ።'}],
 words:[['መገኛ',{en:'location',am:'አንድ ነገር ያለበት ቦታ'}],['አንፃራዊ መገኛ',{en:'relative location',am:'ከአካባቢ ነገሮች አንፃር'}],['ፍፁማዊ መገኛ',{en:'absolute location',am:'በኬክሮስና በኬንትሮስ'}],['የምድር ወገብ',{en:'Equator',am:'0° ኬክሮስ'}]],
 remember:{en:'Face north: south is behind you, east is on your right, west on your left. The sun rises in the east.',am:'ወደ ሰሜን ዙሩ፦ ደቡብ ከኋላችሁ፣ ምስራቅ በቀኛችሁ፣ ምዕራብ በግራችሁ ነው። ፀሐይ በምስራቅ ትወጣለች።'},
 exam:[[{en:'Which is bigger: woreda or zone?',am:'የቱ ይበልጣል፦ ወረዳ ወይስ ዞን?'},{en:'Zone',am:'ዞን'}],[{en:'Which lines meet at the poles?',am:'በዋልታዎች የሚገናኙት መስመሮች?'},{en:'Longitude',am:'ኬንትሮስ'}],[{en:'"Next to the river" is which location?',am:'“ከወንዙ አጠገብ” የትኛው መገኛ ነው?'},{en:'Relative',am:'አንፃራዊ'}],[{en:'What is 0° latitude?',am:'0° ኬክሮስ ምንድን ነው?'},{en:'The Equator',am:'የምድር ወገብ'}]],
 innovate:{title:{en:'Kebele map maker',am:'የቀበሌ ካርታ ሠሪ'},text:{en:'Visitors, health workers and delivery people need to find places. Make a clear map of your kebele.',am:'እንግዶች፣ የጤና ባለሙያዎችና ዕቃ አድራሾች ቦታዎችን ማግኘት ይፈልጋሉ። የቀበሌያችሁን ግልጽ ካርታ ሥሩ።'},
  steps:[{en:'Walk with an adult and note the school, clinic, water point and market.',am:'ከአዋቂ ጋር ተዘዋውራችሁ ትምህርት ቤቱን፣ ጤና ጣቢያውን፣ የውኃ ቦታውንና ገበያውን ልብ በሉ።'},{en:'Draw the map with a north arrow and a key.',am:'የሰሜን ቀስትና ማብራሪያ ያለው ካርታ ሳሉ።'},{en:'Write directions: "The clinic is east of the school."',am:'አቅጣጫ ጻፉ፦ “ጤና ጣቢያው ከትምህርት ቤቱ በስተ ምስራቅ ነው።”'},{en:'Ask a visitor to use it. What was confusing? Improve it.',am:'አንድ እንግዳ እንዲጠቀምበት ጠይቁ። ምን አደናገረው? አሻሽሉት።'}]}}}
 ]});
})();
