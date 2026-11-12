/* The Data Co — shared interactions */
(function(){
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const page=document.body.dataset.page||'';
const EMAIL='admin@thedataco.co.za';

const LOGO=`<svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true"><path d="M12 9 H31 A23 23 0 0 1 31 55 H12 Z" fill="none" stroke="#fff" stroke-width="6" stroke-linejoin="round"/><rect x="20" y="37" width="6" height="11" rx="1.5" fill="#1B90FF"/><rect x="29" y="29" width="6" height="19" rx="1.5" fill="#00C2C7"/><rect x="38" y="21" width="6" height="27" rx="1.5" fill="#F0AB00"/></svg>`;
const ARROW=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const I={
 chart:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-7"/></svg>`,
 code:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>`,
 shield:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/></svg>`,
 globe:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>`
};
window.TDC_ICONS=I;

/* ---------- inject chrome ---------- */
const nav=document.createElement('header');
nav.innerHTML=`<div class="progress"></div>
<nav class="nav" aria-label="Main">
 <a class="logo" href="index.html" aria-label="The Data Co home">${LOGO}<span>The Data <b>Co</b></span></a>
 <div class="links">
  <a href="index.html" class="${page==='home'?'active':''}">Home</a>
  <div class="dd ${['analytics','abap','grc'].includes(page)?'active':''}">
   <button aria-haspopup="true">Services <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg></button>
   <div class="dd-menu">
    <a href="analytics.html"><div class="ico" style="background:rgba(0,112,242,.2);color:#1B90FF">${I.chart}</div><div><strong>Data &amp; Analytics</strong><span>BW/4HANA, Datasphere, SAC, HANA Cloud</span></div></a>
    <a href="abap-fiori.html"><div class="ico" style="background:rgba(0,194,199,.18);color:#00C2C7">${I.code}</div><div><strong>ABAP &amp; Fiori</strong><span>S/4HANA development, RAP, UI5 apps</span></div></a>
    <a href="grc.html"><div class="ico" style="background:rgba(240,171,0,.18);color:#F0AB00">${I.shield}</div><div><strong>SAP GRC</strong><span>Access Control &amp; Process Control</span></div></a>
    <a href="about.html#delivery"><div class="ico" style="background:rgba(123,97,255,.2);color:#A08CFF">${I.globe}</div><div><strong>Managed Services</strong><span>Proactive support &amp; continuous improvement</span></div></a>
   </div>
  </div>
  <a href="about.html" class="${page==='about'?'active':''}">About</a>
 </div>
 <a class="btn btn-gold magnetic" href="contact.html">Let's talk ${ARROW}</a>
 <button class="burger" aria-label="Open menu" aria-expanded="false"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
</nav>
<div class="drawer" id="drawer">
 <a href="index.html">Home</a>
 <a href="analytics.html">Data &amp; Analytics<small>BW/4HANA · Datasphere · SAC · HANA</small></a>
 <a href="abap-fiori.html">ABAP &amp; Fiori<small>S/4HANA development &amp; UI5</small></a>
 <a href="grc.html">SAP GRC<small>Access Control · Process Control</small></a>
 <a href="about.html">About</a>
 <a href="contact.html" style="color:#F0AB00">Contact us</a>
</div>
<div class="cursor-glow" aria-hidden="true"></div>`;
document.body.prepend(nav);

const foot=document.createElement('footer');
foot.innerHTML=`<div class="wrap">
 <div class="f-grid">
  <div><a class="logo" href="index.html">${LOGO}<span>The Data <b>Co</b></span></a>
   <p class="about-f">Specialist SAP partner for data &amp; analytics, application development and governance. Senior expertise, delivered with care, from strategy to steady state.</p></div>
  <div><h4>Services</h4><ul><li><a href="analytics.html">Data &amp; Analytics</a></li><li><a href="abap-fiori.html">ABAP &amp; Fiori</a></li><li><a href="grc.html">SAP GRC</a></li><li><a href="about.html#delivery">Managed Services</a></li></ul></div>
  <div><h4>Company</h4><ul><li><a href="about.html">About us</a></li><li><a href="about.html#delivery">Delivery model</a></li><li><a href="contact.html">Contact</a></li></ul></div>
  <div><h4>Get in touch</h4><ul><li><a href="mailto:${EMAIL}">${EMAIL}</a></li><li><a href="tel:+27733503260">073 350 3260</a></li><li style="color:#9BB0C9">The Colosseum, Century Way,<br>Century City, Cape Town</li></ul></div>
 </div>
 <div class="giant" aria-hidden="true">The Data Co</div>
 <div class="legal"><span>© ${new Date().getFullYear()} The Data Co (Pty) Ltd · Reg. no 2024/386316/07</span><span>SAP and SAP product names are trademarks of SAP SE.</span></div>
</div>`;
document.body.append(foot);

/* ---------- nav behaviour ---------- */
const navEl=$('.nav'),bar=$('.progress'),drawer=$('#drawer'),burger=$('.burger');
burger.addEventListener('click',()=>{const o=drawer.classList.toggle('open');burger.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':'';});
$$('#drawer a').forEach((a,i)=>{a.style.transitionDelay=(i*0.05)+'s';a.addEventListener('click',()=>{drawer.classList.remove('open');document.body.style.overflow='';});});
addEventListener('scroll',()=>{const h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';navEl.classList.toggle('scrolled',scrollY>30);},{passive:true});

/* services dropdown: hover with grace delay, click/tap toggle, keyboard + outside-click close */
$$('.dd').forEach(dd=>{
 const btn=$('button',dd);let t,openedAt=0;
 const open=()=>{clearTimeout(t);if(!dd.classList.contains('open'))openedAt=Date.now();dd.classList.add('open');btn.setAttribute('aria-expanded','true');};
 const close=()=>{dd.classList.remove('open');btn.setAttribute('aria-expanded','false');};
 const later=()=>{clearTimeout(t);t=setTimeout(close,300);};
 btn.setAttribute('aria-expanded','false');
 btn.addEventListener('click',e=>{e.stopPropagation();(dd.classList.contains('open')&&Date.now()-openedAt>600)?close():open();});
 if(matchMedia('(hover:hover)').matches){dd.addEventListener('mouseenter',open);dd.addEventListener('mouseleave',later);}
 dd.addEventListener('focusin',open);
 dd.addEventListener('focusout',e=>{if(!dd.contains(e.relatedTarget))later();});
 document.addEventListener('click',e=>{if(!dd.contains(e.target))close();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();btn.focus();}});
});

/* cursor glow */
const glow=$('.cursor-glow');
if(matchMedia('(pointer:fine)').matches&&!reduce){addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';},{passive:true});}else glow.remove();

/* magnetic buttons */
if(matchMedia('(pointer:fine)').matches&&!reduce){
 $$('.magnetic').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`;});b.addEventListener('pointerleave',()=>b.style.transform='');});
}

/* spotlight cards */
$$('.spot').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--x',(e.clientX-r.left)+'px');c.style.setProperty('--y',(e.clientY-r.top)+'px');}));

/* split headline words */
$$('.split').forEach(el=>{
 const walk=n=>{[...n.childNodes].forEach(ch=>{if(ch.nodeType===3){const f=document.createDocumentFragment();ch.textContent.split(/(\s+)/).forEach(w=>{if(!w)return;if(/^\s+$/.test(w)){f.append(w);return;}const o=document.createElement('span');o.className='w';const i=document.createElement('span');i.textContent=w;o.append(i);f.append(o);});ch.replaceWith(f);}else if(ch.nodeType===1&&!ch.classList.contains('rotator'))walk(ch);});};
 walk(el);$$('.w>span',el).forEach((s,i)=>s.style.transitionDelay=(i*0.06)+'s');
});

/* reveal on scroll */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.15,rootMargin:'0px 0px -40px 0px'});
$$('.rv,.split').forEach(el=>io.observe(el));

/* counters */
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,to=+el.dataset.count,suf=el.dataset.suffix||'';let t0;const step=t=>{t0??=t;const p=Math.min((t-t0)/1600,1);el.textContent=Math.round(to*(1-Math.pow(1-p,3)))+suf;if(p<1)requestAnimationFrame(step);};reduce?el.textContent=to+suf:requestAnimationFrame(step);co.unobserve(el);}),{threshold:.5});
$$('[data-count]').forEach(el=>co.observe(el));

/* rotating typed words */
$$('.rotator').forEach(r=>{
 const words=JSON.parse(r.dataset.words);const t=r.querySelector('.txt');let wi=0,ci=words[0].length,del=true;
 if(reduce)return;
 const tick=()=>{const w=words[wi];if(del){ci--;t.textContent=w.slice(0,ci);if(ci===0){del=false;wi=(wi+1)%words.length;}setTimeout(tick,45);}else{ci++;t.textContent=words[wi].slice(0,ci);if(ci===words[wi].length){del=true;setTimeout(tick,2200);}else setTimeout(tick,85);}};
 setTimeout(tick,2600);
});

/* 3D tilt */
if(matchMedia('(pointer:fine)').matches&&!reduce){
 $$('[data-tilt]').forEach(el=>{const p=el.parentElement;p.addEventListener('pointermove',e=>{const r=p.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`rotateY(${x*12}deg) rotateX(${-y*12}deg)`;});p.addEventListener('pointerleave',()=>el.style.transform='');});
}

/* hero particle network */
$$('canvas[data-network]').forEach(cv=>{
 const ctx=cv.getContext('2d');let W,H,pts=[],mouse={x:-999,y:-999};const DPR=Math.min(devicePixelRatio||1,2);
 const cols=['#1B90FF','#00C2C7','#F0AB00'];
 const size=()=>{W=cv.clientWidth;H=cv.clientHeight;cv.width=W*DPR;cv.height=H*DPR;ctx.setTransform(DPR,0,0,DPR,0,0);const n=Math.min(110,Math.floor(W*H/14000));pts=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.8+.6,c:cols[Math.random()<.7?0:Math.random()<.6?1:2]}));};
 size();addEventListener('resize',size);
 cv.parentElement.addEventListener('pointermove',e=>{const r=cv.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top;});
 cv.parentElement.addEventListener('pointerleave',()=>{mouse.x=mouse.y=-999;});
 let vis=true;new IntersectionObserver(([e])=>vis=e.isIntersecting).observe(cv);
 const loop=()=>{requestAnimationFrame(loop);if(!vis)return;ctx.clearRect(0,0,W,H);
  for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;const dx=p.x-mouse.x,dy=p.y-mouse.y,d=Math.hypot(dx,dy);if(d<140){p.x+=dx/d*1.2;p.y+=dy/d*1.2;}}
  for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const a=pts[i],b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<130){ctx.strokeStyle=`rgba(80,150,255,${(1-d/130)*.28})`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}}
  for(const p of pts){const d=Math.hypot(p.x-mouse.x,p.y-mouse.y);if(d<180){ctx.strokeStyle=`rgba(240,171,0,${(1-d/180)*.5})`;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(mouse.x,mouse.y);ctx.stroke();}ctx.fillStyle=p.c;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);ctx.fill();}
 };
 reduce?(()=>{})():loop();
});

/* generic tabs: [data-tabs] with buttons[data-k] and panes [data-pane] */
$$('[data-tabs]').forEach(tb=>{
 const btns=$$('button',tb),ind=$('.ind',tb),scope=document.getElementById(tb.dataset.tabs);
 const set=b=>{btns.forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-selected',x===b);});if(ind){ind.style.left=b.offsetLeft+'px';ind.style.width=b.offsetWidth+'px';}
  $$('[data-pane]',scope).forEach(p=>{const on=p.dataset.pane===b.dataset.k;p.hidden=!on;if(on){p.classList.remove('fade-swap');void p.offsetWidth;p.classList.add('fade-swap');}});};
 btns.forEach(b=>b.addEventListener('click',()=>set(b)));
 requestAnimationFrame(()=>set(btns.find(b=>b.classList.contains('on'))||btns[0]));
 addEventListener('resize',()=>set(btns.find(b=>b.classList.contains('on'))));
});

/* data-journey flow */
const flow=$('#flow');
if(flow){
 const data=JSON.parse($('#flow-data').textContent);const nodes=$$('.node',flow),panel=$('#flow-panel'),dots=$$('#flow-steps button');let cur=0,timer;
 const show=i=>{cur=i;nodes.forEach((n,k)=>n.classList.toggle('on',k===i));dots.forEach((d,k)=>d.classList.toggle('on',k<=i));$$('.pulse',flow).forEach((p,k)=>p.style.opacity=k<i?1:.15);
  const d=data[i];panel.innerHTML=`<div class="fade-swap"><div class="step-k">STEP 0${i+1} / 0${data.length}</div><h3>${d.t}</h3><p>${d.d}</p><div class="chips">${d.c.map(x=>`<span class="pill">${x}</span>`).join('')}</div></div>`;};
 const auto=()=>{clearInterval(timer);if(!reduce)timer=setInterval(()=>show((cur+1)%data.length),4200);};
 nodes.forEach((n,i)=>{n.setAttribute('tabindex','0');n.setAttribute('role','button');n.addEventListener('click',()=>{show(i);auto();});n.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show(i);auto();}});});
 dots.forEach((d,i)=>d.addEventListener('click',()=>{show(i);auto();}));
 show(0);auto();
}

/* timeline fill */
$$('.timeline').forEach(tl=>{const fill=$('.fill',tl),items=$$('.tl',tl);
 const upd=()=>{const r=tl.getBoundingClientRect(),mid=innerHeight*.6;const h=Math.max(0,Math.min(r.height,mid-r.top));fill.style.height=h+'px';items.forEach(it=>it.classList.toggle('on',it.getBoundingClientRect().top<mid));};
 addEventListener('scroll',upd,{passive:true});upd();});

/* before/after */
$$('.compare').forEach(c=>{const inp=$('input',c);const set=v=>c.style.setProperty('--pos',v+'%');inp.addEventListener('input',()=>set(inp.value));set(inp.value);
 if(!reduce){let t=0;const demo=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;demo.disconnect();const s=performance.now();const an=n=>{const p=(n-s)/1800;if(p>1||t)return;const v=50+Math.sin(p*Math.PI*2)*28;inp.value=v;set(v);requestAnimationFrame(an);};requestAnimationFrame(an);},{threshold:.6});demo.observe(c);inp.addEventListener('pointerdown',()=>t=1);}
});

/* architecture stack */
$$('.stack').forEach(st=>{const ls=$$('.layer',st),det=document.getElementById(st.dataset.detail);
 const set=l=>{ls.forEach(x=>x.classList.toggle('on',x===l));det.innerHTML=`<span class="fade-swap" style="display:block">${l.dataset.info}</span>`;};
 ls.forEach(l=>{l.tabIndex=0;l.addEventListener('mouseenter',()=>set(l));l.addEventListener('click',()=>set(l));l.addEventListener('focus',()=>set(l));});set(ls[0]);});

/* code window with typing */
const codeWin=$('[data-code]');
if(codeWin){
 const src={};$$('script[data-code-src]').forEach(s=>src[s.dataset.codeSrc]=s.textContent.replace(/^\n/,''));
 const pre=$('pre',codeWin),btns=$$('.code-tabs button',codeWin);let tok=0;
 const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
 const KW='define|view|entity|as|select|from|association|to|on|key|managed|implementation|in|class|unique|strict|persistent|table|lock|master|authorization|instance|create|update|delete|function|return|const|then|method|endmethod|data|loop|at|into|endloop|if|endif|read|entities|of|with|fields|result|value|local|mode|entity|append|validation|determination|action|field|readonly|save|modify|behavior|alias|corresponding';
 const RE=new RegExp(`(\\/\\/.*$)|('(?:[^'\\n])*'?|"(?:[^"\\n])*"?)|(@[\\w.]+)|\\b(${KW})\\b|([A-Za-z_][\\w]*(?=\\s*\\())`,'gmi');
 const hl=s=>{let out='',last=0,m;RE.lastIndex=0;while((m=RE.exec(s))){out+=esc(s.slice(last,m.index));const v=esc(m[0]);out+=m[1]?`<span class="c">${v}</span>`:m[2]?`<span class="s">${v}</span>`:m[3]?`<span class="t">${v}</span>`:m[4]?`<span class="k">${v}</span>`:`<span class="f">${v}</span>`;last=RE.lastIndex;if(m[0]==='')RE.lastIndex++;}return out+esc(s.slice(last));};
 const run=k=>{const my=++tok;const full=src[k];btns.forEach(b=>b.classList.toggle('on',b.dataset.k===k));
  if(reduce){pre.innerHTML=hl(full);return;}let i=0;const step=()=>{if(my!==tok)return;i=Math.min(full.length,i+3);pre.innerHTML=hl(full.slice(0,i))+'<span class="type-caret"></span>';if(i<full.length)setTimeout(step,12);};step();};
 btns.forEach(b=>b.addEventListener('click',()=>run(b.dataset.k)));
 new IntersectionObserver(([e],o)=>{if(e.isIntersecting){run(btns[0].dataset.k);o.disconnect();}},{threshold:.3}).observe(codeWin);
}

/* SoD matrix */
const mx=$('#matrix');
if(mx){
 const fns=JSON.parse(mx.dataset.fns),risk=JSON.parse(mx.dataset.risk),card=$('#risk-card');
 const lv=[['No conflict','rgba(255,255,255,.1)','#CFDBEA'],['Low','rgba(0,194,199,.25)','#5EF2F5'],['Medium','rgba(240,171,0,.25)','#FFC845'],['High / critical','rgba(255,90,90,.3)','#FF9A9A']];
 let html='<div></div>'+fns.map(f=>`<div class="h">${f}</div>`).join('');
 fns.forEach((r,i)=>{html+=`<div class="rh">${r}</div>`;fns.forEach((c,j)=>{const k=i<j?i+'-'+j:j+'-'+i;const x=i===j?null:risk[k];const l=x?x[0]:0;html+=`<button class="cell l${l}" data-i="${i}" data-j="${j}" aria-label="${r} versus ${c}">${i===j?'—':''}</button>`;});});
 mx.innerHTML=html;
 const show=(i,j)=>{$$('.cell',mx).forEach(c=>c.classList.toggle('on',+c.dataset.i===i&&+c.dataset.j===j));const k=i<j?i+'-'+j:j+'-'+i;const x=i===j?null:risk[k];const l=x?x[0]:0;
  card.innerHTML=`<div class="fade-swap"><span class="lvl" style="background:${lv[l][1]};color:${lv[l][2]}">${lv[l][0].toUpperCase()} RISK</span><h3>${fns[i]} + ${fns[j]}</h3><p>${i===j?'Same function: select two different functions to see the segregation-of-duties conflict.':(x?x[1]:'These functions can generally be combined without a significant segregation-of-duties conflict.')}</p></div>`;};
 $$('.cell',mx).forEach(c=>{c.addEventListener('mouseenter',()=>show(+c.dataset.i,+c.dataset.j));c.addEventListener('click',()=>show(+c.dataset.i,+c.dataset.j));c.addEventListener('focus',()=>show(+c.dataset.i,+c.dataset.j));});
 show(0,1);
}

/* contact wizard */
const wz=$('#wizard');
if(wz){
 const panes=$$('.w-pane',wz),bars=$$('.w-steps span',wz);let s=0;
 const go=n=>{s=n;panes.forEach((p,i)=>p.classList.toggle('on',i===s));bars.forEach((b,i)=>b.classList.toggle('on',i<=s));};
 const q=new URLSearchParams(location.search).get('service');if(q){const r=wz.querySelector(`input[name=practice][value="${q}"]`);if(r)r.checked=true;}
 $$('[data-next]',wz).forEach(b=>b.addEventListener('click',()=>{const p=panes[s];const req=$$('input[required],textarea[required]',p);for(const f of req){if(!f.reportValidity())return;}if(p.querySelector('input[type=radio]')&&!p.querySelector('input:checked')){p.querySelector('.choice label').animate([{transform:'translateX(-6px)'},{transform:'translateX(6px)'},{transform:'none'}],{duration:300});return;}go(s+1);}));
 $$('[data-prev]',wz).forEach(b=>b.addEventListener('click',()=>go(s-1)));
 wz.addEventListener('submit',e=>{e.preventDefault();for(const f of $$('[required]',panes[s]))if(!f.reportValidity())return;const fd=new FormData(wz);
  const body=`Practice: ${fd.get('practice')}\nEngagement: ${fd.get('engage')}\n\nName: ${fd.get('name')}\nCompany: ${fd.get('company')}\nEmail: ${fd.get('email')}\nPhone: ${fd.get('phone')}\n\n${fd.get('msg')}`;
  location.href=`mailto:${EMAIL}?subject=${encodeURIComponent('Website enquiry – '+fd.get('practice'))}&body=${encodeURIComponent(body)}`;go(panes.length-1);});
 go(0);
}
})();
