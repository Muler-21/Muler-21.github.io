/* Simple original line drawings shared by the units. Each is an <svg> string on a 100×100 canvas. */
(function(){
const W=(inner,label)=>`<svg viewBox="0 0 100 100" role="img" aria-label="${label||''}" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
const IC={
 ruler:W(`<rect x="8" y="38" width="84" height="24" rx="3" fill="var(--sun-soft)"/><path d="M18 38v10M28 38v6M38 38v10M48 38v6M58 38v10M68 38v6M78 38v10"/>`,'ruler'),
 setsquare:W(`<path d="M18 84V18l66 66z" fill="var(--blue-soft)"/><path d="M30 72V48l24 24z"/><path d="M18 30h6M18 42h6M18 54h6M18 66h6"/>`,'set square'),
 compass:W(`<circle cx="50" cy="16" r="6" fill="var(--clay-soft)"/><path d="M50 22L28 86M50 22l20 54"/><path d="M70 76l4 10" stroke="var(--blue)"/><path d="M36 60h28"/>`,'compass'),
 testtube:W(`<path d="M40 10h20M44 10v62a6 6 0 0 0 12 0V10" /><path d="M44 50h12v22a6 6 0 0 1-12 0z" fill="var(--green-soft)"/>`,'test tube'),
 funnel:W(`<path d="M14 20h72L56 56v28h-12V56z" fill="var(--sun-soft)"/>`,'funnel'),
 schoolbag:W(`<rect x="22" y="28" width="56" height="60" rx="12" fill="var(--blue-soft)"/><path d="M38 28v-8a12 12 0 0 1 24 0v8"/><rect x="34" y="56" width="32" height="20" rx="4"/>`,'school bag'),
 clip:W(`<path d="M40 30v36a10 10 0 0 0 20 0V22a14 14 0 0 0-28 0v46a18 18 0 0 0 36 0V34"/>`,'paper clip'),
 flask:W(`<path d="M40 10h20M44 10v26L22 80a6 6 0 0 0 6 8h44a6 6 0 0 0 6-8L56 36V10"/><path d="M30 66h40l6 14H24z" fill="var(--teal-soft)"/>`,'flask'),
 pencil:W(`<path d="M20 80l8-20 44-44 12 12-44 44z" fill="var(--sun-soft)"/><path d="M28 60l12 12M64 24l12 12"/><path d="M20 80l4-10 6 6z" fill="currentColor"/>`,'pencil'),
 desk:W(`<rect x="10" y="34" width="80" height="12" rx="3" fill="var(--sun-soft)"/><path d="M18 46v40M82 46v40M18 66h64"/>`,'desk'),
 board:W(`<rect x="10" y="16" width="80" height="54" rx="4" fill="var(--green)" stroke="var(--ink)"/><path d="M22 34h30M22 46h44" stroke="#fff"/><path d="M30 70l-8 18M70 70l8 18"/>`,'blackboard'),
 book:W(`<path d="M50 24c-10-8-26-8-36-4v60c10-4 26-4 36 4 10-8 26-8 36-4V20c-10-4-26-4-36 4z" fill="var(--plum-soft)"/><path d="M50 24v60"/>`,'books'),
 gate:W(`<path d="M14 88V30M86 88V30M14 30h72"/><path d="M24 88V40M34 88V40M44 88V40M56 88V40M66 88V40M76 88V40"/><circle cx="50" cy="20" r="6"/>`,'gate'),
 cup:W(`<path d="M18 40h52v18a24 24 0 0 1-48 0z" fill="var(--clay-soft)"/><path d="M70 46h6a8 8 0 0 1 0 16h-8"/><path d="M34 18c-4 6 4 8 0 14M50 18c-4 6 4 8 0 14"/>`,'cup of tea'),
 hall:W(`<path d="M10 40L50 14l40 26z" fill="var(--blue-soft)"/><path d="M16 40v44h68V40M28 84V52M44 84V52M56 84V52M72 84V52M10 84h80"/>`,'hall'),
 tap:W(`<path d="M20 30h40v12H20zM40 30V18M30 18h20"/><path d="M60 36h10a8 8 0 0 1 8 8v8"/><path d="M78 62c-4 6-4 10 0 12 4-2 4-6 0-12z" fill="var(--blue-soft)"/><path d="M16 88h68"/>`,'washroom tap'),
 /* music */
 wholeNote:`<svg viewBox="0 0 100 100" role="img" aria-label="whole note"><ellipse cx="50" cy="56" rx="20" ry="13" fill="none" stroke="currentColor" stroke-width="7" transform="rotate(-20 50 56)"/></svg>`,
 halfNote:`<svg viewBox="0 0 100 100" role="img" aria-label="half note"><ellipse cx="42" cy="72" rx="16" ry="11" fill="none" stroke="currentColor" stroke-width="6" transform="rotate(-20 42 72)"/><path d="M57 68V10" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg>`,
 quarterNote:`<svg viewBox="0 0 100 100" role="img" aria-label="quarter note"><ellipse cx="42" cy="72" rx="16" ry="11" fill="currentColor" transform="rotate(-20 42 72)"/><path d="M57 68V10" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg>`,
 wholeRest:`<svg viewBox="0 0 100 100" role="img" aria-label="whole rest"><path d="M14 36h72" stroke="currentColor" stroke-width="4"/><rect x="34" y="36" width="32" height="16" fill="currentColor"/><path d="M14 64h72" stroke="currentColor" stroke-width="2" opacity=".35"/></svg>`,
 halfRest:`<svg viewBox="0 0 100 100" role="img" aria-label="half rest"><path d="M14 36h72" stroke="currentColor" stroke-width="2" opacity=".35"/><rect x="34" y="48" width="32" height="16" fill="currentColor"/><path d="M14 64h72" stroke="currentColor" stroke-width="4"/></svg>`,
 quarterRest:`<svg viewBox="0 0 100 100" role="img" aria-label="quarter rest"><path d="M42 12l16 20-12 14 16 20c-14-6-22 4-10 20-20-10-14-30 2-24L40 40l10-12z" fill="currentColor"/></svg>`,
 /* faces for drama */
 face(mood){const m={happy:'M34 62 Q50 78 66 62',sad:'M34 72 Q50 58 66 72',angry:'M34 70 Q50 64 66 70',surprised:'',scared:'M36 70 Q42 64 48 70 Q54 76 60 70 Q63 67 66 70'}[mood];
  const brows={happy:'',sad:'M30 32l12 4M70 32l-12 4',angry:'M30 30l14 8M70 30l-14 8',surprised:'M30 28q8-6 14 0M56 28q8-6 14 0',scared:'M30 34q8-8 14-2M56 32q6-6 14 2'}[mood];
  return`<svg viewBox="0 0 100 100" role="img" aria-label="${mood} face"><circle cx="50" cy="52" r="42" fill="#F4B400" stroke="#C98F00" stroke-width="3"/>
  <circle cx="37" cy="46" r="${mood==='surprised'||mood==='scared'?6:5}" fill="#1B2A4A"/><circle cx="63" cy="46" r="${mood==='surprised'||mood==='scared'?6:5}" fill="#1B2A4A"/>
  ${brows?`<path d="${brows}" stroke="#1B2A4A" stroke-width="4" fill="none" stroke-linecap="round"/>`:''}
  ${mood==='surprised'?'<ellipse cx="50" cy="70" rx="8" ry="10" fill="#1B2A4A"/>':`<path d="${m}" stroke="#1B2A4A" stroke-width="4.5" fill="none" stroke-linecap="round"/>`}
  ${mood==='sad'?'<path d="M64 54q3 8 0 10q-3-2 0-10z" fill="#6EB7F0"/>':''}</svg>`},
 arrow(dir){const r={forward:0,right:90,back:180,left:270}[dir];return`<svg viewBox="0 0 100 100" role="img" aria-label="${dir}"><g transform="rotate(${r} 50 50)"><path d="M50 12L80 48H62v40H38V48H20z" fill="var(--accent)" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/></g></svg>`},
 /* photo scenes */
 tallTree:`<svg viewBox="0 0 60 100" role="img" aria-label="tall tree"><rect x="1" y="1" width="58" height="98" rx="4" fill="var(--blue-soft)" stroke="currentColor" stroke-width="2"/><rect x="26" y="56" width="8" height="38" fill="#8A5A2B"/><ellipse cx="30" cy="40" rx="18" ry="28" fill="var(--green)"/></svg>`,
 wideHills:`<svg viewBox="0 0 100 60" role="img" aria-label="wide landscape"><rect x="1" y="1" width="98" height="58" rx="4" fill="var(--blue-soft)" stroke="currentColor" stroke-width="2"/><circle cx="80" cy="16" r="7" fill="#F4B400"/><path d="M2 58L26 26l18 20 16-14 38 26z" fill="var(--green)"/></svg>`
};
window.IC=IC;

/* stick-figure poses for PE units: POSE(name, label?) */
function POSE(k,label){const H='<circle cx="50" cy="18" r="9" fill="#6B4423"/>';const B='M50 27V62';
 const P={
  stand:  'M50 34L36 56M50 34L64 56M50 62L40 92M50 62L60 92',
  up:     'M50 34L38 6M50 34L62 6M50 62L42 92M50 62L58 92',
  side:   'M50 36H18M50 36H82M50 62L42 92M50 62L58 92',
  forward:'M50 36L72 40M50 36L76 34M50 62L42 92M50 62L58 92',
  down:   'M50 34L44 62M50 34L56 62M50 62L44 92M50 62L56 92',
  jack:   'M50 34L30 8M50 34L70 8M50 62L30 92M50 62L70 92',
  squat:  'M50 36L76 40M50 36L76 46M50 58L74 64L70 92M50 58L26 64L30 92',
  toe:    'M50 30L34 84M50 30L40 86M50 62L42 92M50 62L58 92',
  run:    'M50 34L66 46M50 34L36 26M50 62L66 76L60 92M50 62L40 76L28 84',
  sit:    'M50 38L66 60M50 38L36 62M50 72H90M50 72L88 80',
  jog:    'M50 34L64 48M50 34L36 48M50 62L58 78L54 92M50 62L44 92',
  twist:  'M50 36L74 26M50 36L26 46M50 62L40 92M50 62L60 92'};
 let body=B,y=0;
 if(k==='toe'){return`<svg viewBox="0 0 100 100" role="img" aria-label="${label||k}" style="width:100%;height:auto"><circle cx="30" cy="76" r="8" fill="#6B4423"/><path d="M64 48L38 70M40 70L36 94M40 70L46 94M64 48L58 94M64 48L72 94" stroke="#2F6FDE" stroke-width="6" stroke-linecap="round" fill="none"/></svg>`}
 if(k==='squat'){body='M50 27V58';}
 if(k==='sit'){body='M50 27V72';}
 return`<svg viewBox="0 0 100 100" role="img" aria-label="${label||k}" style="width:100%;height:auto"><path d="${body} ${P[k]||P.stand}" stroke="#2F6FDE" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>${H}</svg>`}
window.POSE=POSE;
})();
