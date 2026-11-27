const $=id=>document.getElementById(id);
let seed=3;const rnd=()=>(seed=(seed*9301+49297)%233280)/233280;
const PAL=['#f3d7d3','#fbf1ea','#e6bfc0','#efe3d0','#f0cfc8','#f7efe4'];
function bloom(x,y,r,c,c2){let s=`<g transform="translate(${x} ${y})">`;for(let i=0;i<7;i++)s+=`<ellipse cy="${-r*.55}" rx="${r*.4}" ry="${r*.6}" fill="${c}" stroke="rgba(150,100,90,.25)" stroke-width=".6" transform="rotate(${i*51})"/>`;return s+`<circle r="${r*.3}" fill="${c2||'#e3b7b0'}"/></g>`}
function hyd(x,y,r){let s='';for(let i=0;i<12;i++){const a=rnd()*6.28,d=rnd()*r;s+=`<circle cx="${x+Math.cos(a)*d}" cy="${y+Math.sin(a)*d*.8}" r="${r*.2}" fill="${i%2?'#d4dbe9':'#e4e8f1'}"/>`}return s}
function cluster(x,y,w,n){let s='';for(let i=0;i<n*2;i++){const a=rnd()*w-w/2;s+=`<ellipse cx="${x+a*1.1}" cy="${y+rnd()*14}" rx="16" ry="6" fill="#9fae8f" opacity=".85" transform="rotate(${rnd()*180} ${x+a} ${y})"/>`}
 for(let i=0;i<n;i++){const a=rnd()*w-w/2,b=rnd()*w*.35;const t=i%4;s+=t==3?hyd(x+a,y-b,18):bloom(x+a,y-b,13+rnd()*9,PAL[(rnd()*6)|0])}return s}
function chibi(o){const sk='#f7dcc8',hr='#2b2220';
const eyes=(x)=>`<ellipse class="eye" cx="${x-10}" cy="76" rx="3.4" ry="4.8" fill="${hr}"/><ellipse class="eye" cx="${x+10}" cy="76" rx="3.4" ry="4.8" fill="${hr}"/><circle cx="${x-9}" cy="74" r="1.2" fill="#fff"/><circle cx="${x+11}" cy="74" r="1.2" fill="#fff"/><circle cx="${x-16}" cy="86" r="4.5" fill="#f2a7a7" opacity=".5"/><circle cx="${x+16}" cy="86" r="4.5" fill="#f2a7a7" opacity=".5"/><path d="M${x-4} 87q4 4 8 0" stroke="#a5645c" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
const crown=(x)=>o.crown?`<path d="M${x-12} 44l3-12 5 7 4-10 4 10 5-7 3 12z" fill="url(#gd)"/>`:'';
return `<g class="sway">
<path d="M52 192v20M68 192v20" stroke="#e3d5ba" stroke-width="12" stroke-linecap="round"/>
<path d="M38 124Q60 108 82 124L86 194H34Z" fill="${o.g}"/><path d="M60 114v80" stroke="url(#gd)" stroke-width="3"/>${[132,146,160,174].map(y=>`<circle cx="60" cy="${y}" r="2.2" fill="#b8985a"/>`).join('')}
<path d="M46 117q14 8 28 0" stroke="url(#gd)" stroke-width="4" fill="none"/>
<path d="M42 130q-7 20-4 36" stroke="${o.g}" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="38" cy="168" r="5.5" fill="${sk}"/>
<g transform="rotate(4 60 80)"><circle cx="60" cy="72" r="31" fill="${sk}"/><path d="M29 72Q24 36 60 36Q96 36 91 72Q82 54 60 54Q38 54 29 72Z" fill="${hr}"/>${eyes(60)}${crown(60)}</g>
<path d="M126 192v20M144 192v20" stroke="#e3d5ba" stroke-width="12" stroke-linecap="round"/>
<path d="M122 120Q140 108 158 120L190 206Q140 222 90 206Z" fill="${o.b}"/><path d="M96 200Q140 214 184 200" stroke="url(#gd)" stroke-width="3" fill="none"/>${[112,128,146,164,180].map((x,i)=>`<circle cx="${x}" cy="${196+(i%2?4:0)-Math.abs(i-2)*-3}" r="2.6" fill="#c9a96a"/>`).join('')}
<path d="M128 112q12 16 24 0" stroke="url(#gd)" stroke-width="3" fill="none"/>
<path d="M158 130q8 20 6 36" stroke="${o.b}" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="164" cy="168" r="5.5" fill="${sk}"/>
<g transform="rotate(-4 140 80)"><ellipse cx="140" cy="84" rx="35" ry="36" fill="${hr}"/><circle cx="140" cy="72" r="31" fill="${sk}"/><path d="M109 72Q104 38 140 38Q176 38 171 72Q166 56 150 52Q124 58 109 72Z" fill="${hr}"/>${eyes(140)}
<path d="M104 70Q100 110 112 150Q130 92 140 40Q160 92 168 150Q182 110 176 70Q160 36 140 36Q112 38 104 70Z" fill="${o.v||'#fbf4ea'}" opacity=".72" stroke="#c9a96a" stroke-width="1.2"/>
<circle cx="140" cy="46" r="3" fill="#c9a96a"/><circle cx="107" cy="92" r="3.5" fill="#c9a96a"/><circle cx="173" cy="92" r="3.5" fill="#c9a96a"/>${crown(140)}</g>
<path d="M82 128Q96 142 100 158" stroke="${o.g}" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M118 128Q104 142 100 158" stroke="${o.b}" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="100" cy="160" r="6" fill="${sk}"/>
<path d="M100 146c-6-8-14 0-6 8l6 5 6-5c8-8 0-16-6-8z" fill="#e79aa0" opacity=".9" transform="translate(0 -22) scale(.9) translate(11 -10)"/>
</g>`}
const OUT=[{g:'#e9dcc2',b:'#ecc9c8'},{g:'#f1e8d6',b:'#fffdf8',v:'#fff'},{g:'#d5dccb',b:'#f2d8d6'},{g:'#c9a46a',b:'#c98b86',v:'#f0d9b5'},{g:'#efe3c8',b:'#f4efe6',crown:1}];

const IMG={wall:'assets/img/wall.webp', dl:'assets/img/door-left.webp', dr:'assets/img/door-right.webp', tile:'assets/img/wall-tile.webp', pavcut:'assets/img/pavilion-cutout.webp', fc:'assets/img/rose-corner.webp', fb:'assets/img/rose-bunch.webp', pav:'assets/img/pavilion.jpg', cp3:'assets/img/couple-in-pavilion.webp', cp:'assets/img/couple-finale.webp'};
const ABS=p=>new URL(p,document.baseURI).href;$('gate').style.setProperty('--dl','url("'+ABS(IMG.dl)+'")');$('gate').style.setProperty('--dr','url("'+ABS(IMG.dr)+'")');document.documentElement.style.setProperty('--tile','url("'+ABS(IMG.tile)+'")');document.querySelector('#gate .wall').src=IMG.wall;$('pavimg').src=IMG.pav;$('pavcut').src=IMG.pavcut;$('cpl').src=IMG.cp3;

/* text */
const t=$('title');`${C.groom} & ${C.bride}`.split('').forEach((c,i)=>{const s=document.createElement('span');s.textContent=c==' '?'\u00a0':c;s.style.animationDelay=(1.6+i*.13)+'s';t.appendChild(s)});
$('sig').textContent=`${C.groom} & ${C.bride}`;
seed=21;document.querySelectorAll('.cr').forEach(e=>e.innerHTML=cluster(50,70,70,3)+bloom(26,28,16,'#f3d7d3')+hyd(60,24,14));
seed=5;$('fl').innerHTML=cluster(120,150,220,10)+cluster(400,155,200,6)+cluster(680,150,220,10);
$('fin').innerHTML=`<img src="${IMG.cp}" alt="Ateeb and Esha" style="width:100%;display:block;-webkit-mask-image:linear-gradient(#000 80%,transparent);mask-image:linear-gradient(#000 80%,transparent)">`;

/* gallery */
const GAL=[['The Celebration','background:url(assets/img/gallery-1-celebration.jpg) 50% 30%/cover no-repeat'],['Royal Couple','background:url(assets/img/gallery-2-royal-couple.jpg) 50% 30%/cover no-repeat'],['Hand in Hand','background:url(assets/img/gallery-3-hand-in-hand.jpg) 50% 30%/cover no-repeat'],['A Quiet Portrait','background:url(assets/img/gallery-4-quiet-portrait.jpg) 50% 30%/cover no-repeat'],['Beneath the Floral Arch','background:url(assets/img/gallery-5-floral-arch.jpg) 50% 30%/cover no-repeat']];
const car=$('car');let cur=0;
GAL.forEach((g,i)=>{const d=document.createElement('div');d.className='sl';d.setAttribute('aria-label',g[0]);d.innerHTML='<div class="sc" style="'+g[1]+'"></div><span class="cp">'+g[0]+'</span>';d.onclick=()=>go(i);car.appendChild(d)});
function go(n){cur=(n+GAL.length)%GAL.length;[...car.children].forEach((s,i)=>{let d=i-cur;const L=GAL.length;if(d>L/2)d-=L;if(d<-L/2)d+=L;const a=Math.abs(d);s.style.transform=`translateX(${d*58}%) translateZ(${-a*170}px) rotateY(${-d*30}deg)`;s.style.opacity=a>2?0:1-a*.25;s.style.zIndex=9-a});$('cap').textContent=GAL[cur][0]}
go(0);$('pv').onclick=()=>go(cur-1);$('nx').onclick=()=>go(cur+1);
let sx=null;car.addEventListener('pointerdown',e=>sx=e.clientX);car.addEventListener('pointerup',e=>{if(sx!==null&&Math.abs(e.clientX-sx)>40)go(cur+(e.clientX<sx?1:-1));sx=null});
setInterval(()=>{if(!matchMedia('(prefers-reduced-motion:reduce)').matches&&document.hasFocus())go(cur+1)},5500);

/* countdown */
const tgt=new Date(C.date).getTime(),pr=[];
function tick(){let r=Math.max(0,tgt-Date.now());const v=[Math.floor(r/864e5),Math.floor(r/36e5)%24,Math.floor(r/6e4)%60,Math.floor(r/1e3)%60];v.forEach((n,i)=>{const e=$('t'+i),s=String(n).padStart(2,'0');if(pr[i]!==s){e.textContent=s;e.classList.remove('tk');void e.offsetWidth;e.classList.add('tk');pr[i]=s}})}
tick();setInterval(tick,1000);

/* petals */
for(let i=0;i<16;i++){const p=document.createElement('i');p.className='pt';p.style.cssText=`left:${Math.random()*100}%;--dx:${(Math.random()-.5)*200}px;animation-duration:${9+Math.random()*9}s;animation-delay:${-Math.random()*14}s;transform:scale(${.6+Math.random()*.8})`;$('petals').appendChild(p)}

/* open */
const gate=$('gate');
function open(){if(gate.classList.contains('open'))return;gate.classList.add('open');startMusic();$('hint').classList.add('gone');setTimeout(()=>{const h=$('hint');h&&h.remove()},1200);document.body.classList.add('opened');setTimeout(()=>{document.body.classList.remove('locked');gate.style.display='none'},3800)}
gate.onclick=open;gate.onkeydown=e=>{if(e.key=='Enter'||e.key==' '){e.preventDefault();open()}};
/* parallax + reveal */
const l1=$('lay1');addEventListener('mousemove',e=>l1.style.setProperty('--mx',(e.clientX/innerWidth-.5)*2));
addEventListener('scroll',()=>l1.style.setProperty('--sy',scrollY),{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in')}}),{threshold:.2});document.querySelectorAll('.rv').forEach(e=>io.observe(e));
document.querySelectorAll('.card').forEach(cd=>{cd.addEventListener('pointermove',e=>{const r=cd.getBoundingClientRect();cd.style.transform=`perspective(900px) rotateY(${((e.clientX-r.left)/r.width-.5)*10}deg) rotateX(${-((e.clientY-r.top)/r.height-.5)*10}deg)`});cd.addEventListener('pointerleave',()=>cd.style.transform='')});

/* soft generative music (Web Audio, no files) */
let AC,MG,mOn=false;
function startMusic(){if(AC){AC.resume();return}try{AC=new(window.AudioContext||window.webkitAudioContext)()}catch(e){return}
MG=AC.createGain();MG.gain.value=0;const cv=AC.createConvolver(),n=AC.sampleRate*3,bf=AC.createBuffer(2,n,AC.sampleRate);
for(let c=0;c<2;c++){const d=bf.getChannelData(c);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,2.5)}cv.buffer=bf;
const wet=AC.createGain();wet.gain.value=.8;cv.connect(wet);wet.connect(MG);const dry=AC.createGain();dry.gain.value=.45;dry.connect(MG);MG.connect(AC.destination);
const out=AC.createGain();out.connect(cv);out.connect(dry);const f=m=>440*Math.pow(2,(m-69)/12);
function note(m,t,dur,v,type){const o=AC.createOscillator(),g=AC.createGain();o.type=type;o.frequency.value=f(m);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+(type=='sine'?.02:dur*.3));g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(out);o.start(t);o.stop(t+dur+.1)}
const CH=[[48,55,64,71],[45,52,60,67],[41,48,57,64],[43,50,59,62]];let st=0,nt=AC.currentTime+.2;
(function sch(){while(nt<AC.currentTime+1.5){const ch=CH[(st>>3)%4];if(st%8==0)ch.forEach(m=>note(m,nt,7.6,.04,'triangle'));
if(st%2==0||Math.random()<.35)note(ch[(st*3+((Math.random()*3)|0))%4]+24+(Math.random()<.3?12:0),nt,2.6,.05,'sine');st++;nt+=.95}setTimeout(sch,500)})();
mOn=true;MG.gain.linearRampToValueAtTime(.55,AC.currentTime+5)}
$('mu').onclick=()=>{if(!AC)return startMusic();mOn=!mOn;AC.resume();MG.gain.setTargetAtTime(mOn?.55:0,AC.currentTime,.4);$('mu').classList.toggle('off',!mOn)};

/* arch-shaped hole in the wall, matching the door's own shape */
function archHole(){const g=$('gate'),w=g.querySelector('.dw');if(!w||g.classList.contains('open'))return;const k=w.offsetWidth/570,L=w.offsetLeft,T=w.offsetTop,W=g.clientWidth,H=g.clientHeight,P=(x,y)=>(L+x*k).toFixed(1)+'px '+(T+y*k).toFixed(1)+'px';
const pts=[],n=2.6,sg=v=>v<0?-1:1;for(let i=0;i<=90;i++){const a=Math.PI+Math.PI*i/90,cs=Math.cos(a),sn=Math.sin(a);pts.push(P(285+262*sg(cs)*Math.pow(Math.abs(cs),2/n),400+346*sg(sn)*Math.pow(Math.abs(sn),2/n)))}
pts.push(P(547,1000),P(23,1000));g.style.setProperty('--clip','polygon(evenodd,0 0,'+W+'px 0,'+W+'px '+H+'px,0 '+H+'px,0 0,'+pts[0]+','+pts.join(',')+','+pts[0]+',0 0)')}
archHole();addEventListener('resize',archHole);addEventListener('orientationchange',archHole);if(document.fonts)document.fonts.ready.then(archHole);

document.querySelectorAll('.card').forEach(c=>{[['tl','c'],['tr','c'],['bl','c'],['br','c'],['tm','m'],['bm','m']].forEach(([p,k])=>{const im=new Image();im.className='fl '+k+' '+p;im.alt='';im.src=k=='c'?IMG.fc:IMG.fb;c.appendChild(im)})});

/* garland of pavilion roses around the whole Barat border */
(function(){const card=document.querySelector('.barat');if(!card)return;const cv=document.createElement('canvas');cv.className='fl arc';card.appendChild(cv);
const A=new Image(),B=new Image();let ld=0;A.onload=B.onload=()=>{if(++ld==2)draw()};A.src=IMG.fc;B.src=IMG.fb;
function rnd(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function path(W,H,ry){const rx=W/2,p=[];for(let x=rx;x>=0;x-=4)p.push([x,H]);for(let y=H-4;y>=ry;y-=4)p.push([0,y]);for(let i=1;i<=60;i++){const t=Math.PI+Math.PI*i/120;p.push([rx+rx*Math.cos(t),ry+ry*Math.sin(t)])}return p}
function sample(p,step){const o=[];let acc=0,pr=p[0];o.push({x:pr[0],y:pr[1],a:Math.PI});for(let i=1;i<p.length;i++){const q=p[i],dx=q[0]-pr[0],dy=q[1]-pr[1];acc+=Math.hypot(dx,dy);if(acc>=step){acc=0;o.push({x:q[0],y:q[1],a:Math.atan2(dy,dx)})}pr=q}return o}
function draw(){try{const W=card.clientWidth,H=card.clientHeight;if(!W||!H)return;const ry=160,M=48,w=W+2*M,h=H+2*M,d=Math.min(devicePixelRatio||1,2);cv.width=w*d;cv.height=h*d;cv.style.left=cv.style.top=-M+'px';cv.style.width=w+'px';cv.style.height=h+'px';
const c=cv.getContext('2d');c.scale(d,d);c.translate(M,M);const r=rnd(7),pts=path(W,H,ry),P=[],pick=()=>r()<.55?A:B;
const put=(q,off,row,s)=>P.push({x:q.x+Math.sin(q.a)*off,y:q.y-Math.cos(q.a)*off,a:q.a,row,s,rot:(r()-.5)*1.5,img:pick()});
sample(pts,24).forEach(q=>put(q,-2,0,.40+r()*.12));sample(pts,28).forEach(q=>put(q,6,1,.30+r()*.10));
for(let k=0;k<4;k++)P.push({x:(r()-.5)*30,y:H+(r()-.5)*30,a:0,row:0,s:.5+r()*.1,rot:r()*6,img:pick()});
for(let k=0;k<2;k++)P.push({x:W/2-8-k*12,y:-4+(r()-.5)*8,a:0,row:0,s:.48+r()*.08,rot:r()*6,img:pick()});
c.shadowColor='rgba(70,55,35,.38)';c.shadowBlur=6;c.shadowOffsetY=3;
const pass=row=>{for(const m of[0,1]){c.save();if(m){c.translate(W,0);c.scale(-1,1)}for(const p of P)if(p.row==row){c.save();c.translate(p.x,p.y);c.rotate(p.a+p.rot);const iw=p.img.width*p.s,ih=p.img.height*p.s;c.drawImage(p.img,-iw/2,-ih/2,iw,ih);c.restore()}c.restore()}};pass(1);pass(0)}catch(e){}}
if(window.ResizeObserver)new ResizeObserver(draw).observe(card);else addEventListener('resize',draw)})();

/* door scene: the reference door fitted to any screen, wall pattern filling the rest */
function layoutGate(){const g=$('gate'),vw=g.clientWidth||innerWidth,vh=g.clientHeight||innerHeight,s=Math.min(vh/903,vw/640),iw=1742*s,ih=903*s,sx=(vw-iw)/2,sy=vh-ih,r=document.documentElement.style;
r.setProperty('--s',s.toFixed(4));r.setProperty('--sx',sx.toFixed(1));r.setProperty('--sy',sy.toFixed(1));r.setProperty('--tbt',sy>2?1:0);r.setProperty('--tbx',sx>2?1:0)}
layoutGate();addEventListener('resize',layoutGate);addEventListener('orientationchange',layoutGate);if(document.fonts)document.fonts.ready.then(layoutGate);
