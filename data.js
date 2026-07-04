const qs = new URLSearchParams(location.search);
const phaseId = Number(qs.get('phase') || 1);
const data = window.MERIDIAN_CASE;
const phase = data.phases.find(p => p.id === phaseId) || data.phases[0];
let activeTab = (phase.tabs && phase.tabs[0]) || 'Overview';
let reveal4b = sessionStorage.getItem('meridian_phase4b') === 'true';
const app = document.getElementById('app');

function esc(s){return String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
function badgeClass(flag){ if(!flag) return ''; const f=String(flag).toLowerCase(); if(f.includes('danger')||f.includes('critical')||f==='h'||f.includes('overdue')) return 'danger'; if(f.includes('warn')||f.includes('rising')||f==='l') return 'warn'; if(f.includes('ok')) return 'ok'; return ''; }
function initials(name){return name.split(/\s+/).map(x=>x[0]).join('').slice(0,2).toUpperCase();}
function rowTable(rows, headers){
 if(!rows || !rows.length) return '<p class="muted">No data available.</p>';
 const hs = headers || rows[0].map((_,i)=>`Column ${i+1}`);
 const body = rows.map(r=>`<tr>${r.map((c,i)=>`<td class="${i===2?badgeClass(c):''}">${esc(c)}</td>`).join('')}</tr>`).join('');
 return `<table class="table"><thead><tr>${hs.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table>`;
}
function renderShell(){
 app.innerHTML = `
 <div class="topbar"><div class="brand"><div class="brand-icon">M</div><div>${esc(data.platform.name)} <small> · ${esc(data.platform.hospital)}</small></div></div><small>${esc(data.platform.disclaimer)}</small></div>
 <div class="app">
  <section class="patient-header">
   <div class="patient-strip">
    <div class="patient-main"><div class="avatar">${esc(data.patient.avatar || initials(data.patient.name))}</div><div><div class="patient-name">${esc(data.patient.name)}</div><div class="demog"><span>${esc(data.patient.age)}</span><span>${esc(data.patient.sex)}</span><span>MRN ${esc(data.patient.mrn)}</span><span>DOB ${esc(data.patient.dob)}</span></div></div></div>
    <div class="status-block"><div class="status-label">Current location</div><div class="status-value">${esc(phase.location)}</div><div class="demog"><span class="pill">${esc(phase.time)}</span></div></div>
    <div class="status-block"><div class="status-label">Working diagnosis</div><div class="status-value">${esc(phase.diagnosis)}</div><div class="demog"><span class="pill ok">${esc(data.patient.allergies)}</span><span class="pill">${esc(data.patient.code)}</span></div></div>
    <div class="phase-control"><select class="select" onchange="location.href='index.html?case=osteomyelitis-mason&phase='+this.value">${data.phases.map(p=>`<option value="${p.id}" ${p.id===phase.id?'selected':''}>${p.label}</option>`).join('')}</select></div>
   </div>
   <div class="clinical-timeline">${data.phases.map(p=>`<a class="timeline-chip ${p.id===phase.id?'active':''}" href="index.html?case=osteomyelitis-mason&phase=${p.id}">${esc(p.label)} · ${esc(p.short)}</a>`).join('')}</div>
  </section>
  <div class="content">
   <aside class="sidebar">
    <div class="sidebar-section"><div class="sidebar-title">Notifications</div>${(phase.alerts||[]).map(a=>`<div class="notify">${esc(a)}</div>`).join('')||'<p class="muted">No active alerts.</p>'}</div>
    <div class="sidebar-section"><div class="sidebar-title">Chart</div>${phase.tabs.map(t=>`<button class="tab-button ${t===activeTab?'active':''}" data-tab="${esc(t)}"><span>${esc(t)}</span><span>›</span></button>`).join('')}</div>
    <div class="sidebar-section"><div class="sidebar-title">Simulation</div><p class="muted">Pause after this phase for group debrief before advancing everyone together.</p><a class="mini-link" href="launch.html">← Launch page</a></div>
   </aside>
   <main class="main-panel"><section class="phase-banner"><h1>${esc(phase.label)}: ${esc(phase.title)}</h1><p>${esc(phase.subtitle)}</p><div class="prompt"><strong>Resident prompt:</strong> ${esc(phase.prompt)}</div></section><div id="tab-content"></div></main>
  </div>
  <div class="footer">Meridian EMR is a fictional interface for healthcare simulation. No real patient data.</div>
 </div>`;
 document.querySelectorAll('.tab-button').forEach(b=>b.addEventListener('click',()=>{activeTab=b.dataset.tab;renderShell();renderTab();}));
 renderTab();
}
function renderTab(){
 const root = document.getElementById('tab-content');
 if(!root) return;
 const t = activeTab;
 let html='';
 if(t==='Overview') html = renderOverview();
 else if(t==='Notes') html = renderNotes();
 else if(t==='Orders') html = renderOrders();
 else if(t==='MAR') html = renderMAR();
 else if(t==='Labs') html = renderLabs();
 else if(t==='Imaging') html = renderImaging();
 else if(t==='Growth') html = renderGrowth();
 else if(t==='Messages') html = renderMessages();
 else if(t==='Flowsheets') html = renderFlowsheets();
 else if(t==='Consults') html = renderConsults();
 else if(t==='Pathway') html = renderPathway();
 else if(t==='Handoff') html = renderHandoff();
 else if(t==='Facilitator') html = renderFacilitator();
 else html='<div class="card"><p class="muted">No module data for this tab.</p></div>';
 root.innerHTML = html;
 const revealBtn = document.getElementById('revealBtn');
 if(revealBtn) revealBtn.addEventListener('click',()=>{const val=document.getElementById('revealCode').value.trim().toUpperCase(); if(val==='IPASS'){reveal4b=true;sessionStorage.setItem('meridian_phase4b','true');renderTab();} else {document.getElementById('revealMsg').textContent='Code not recognized.';}});
 const resetBtn = document.getElementById('resetReveal');
 if(resetBtn) resetBtn.addEventListener('click',()=>{reveal4b=false;sessionStorage.removeItem('meridian_phase4b');renderTab();});
}
function renderOverview(){return `<div class="card"><h2>Patient storyboard</h2><div class="grid three">${phase.storyboard.map(([k,v,f])=>`<div class="metric ${badgeClass(f)}"><div class="metric-label">${esc(k)}</div><div class="metric-value">${esc(v)}</div></div>`).join('')}</div></div><div class="card"><h2>Clinical timeline</h2>${rowTable(phase.timeline,['Time','Event'])}</div>`;}
function renderNotes(){return `<div class="card"><h2>Clinical notes</h2>${(phase.notes||[]).map(([title,author,body])=>`<article class="note"><div class="note-head"><div class="note-title">${esc(title)}</div><div class="note-author">${esc(author)}</div></div><div class="note-body">${esc(body)}</div></article>`).join('')}</div>`;}
function renderOrders(){return `<div class="card"><h2>Orders</h2>${rowTable(phase.orders,['Order','Status / detail'])}</div>`;}
function renderMAR(){return `<div class="card"><h2>Medication administration record</h2>${rowTable(phase.mar,['Time','Medication','Dose','Status','Comment'])}</div>`;}
function renderLabs(){return `<div class="card"><h2>Laboratory results</h2>${rowTable(phase.labs,['Test','Result','Flag / trend'])}</div>`;}
function renderImaging(){return `<div class="card"><h2>Imaging</h2>${(phase.imaging||[]).map(([title,body])=>`<article class="note"><div class="note-head"><div class="note-title">${esc(title)}</div><div class="note-author">Radiology</div></div><div class="note-body">${esc(body)}</div></article>`).join('')}</div>`;}
function renderGrowth(){
 const max=31; return `<div class="card"><h2>Growth history</h2><p class="muted">Growth data are intentionally displayed as routine chart history, not as a warning.</p><div class="chart-canvas">${(phase.growth||[]).map(([label,w])=>{const n=parseFloat(w);return `<div class="bar-wrap"><div class="bar ${n>20?'bad':''}" style="height:${Math.max(12,(n/max)*150)}px"></div><div class="bar-label">${esc(label)}<br><strong>${esc(w)}</strong></div></div>`}).join('')}</div>${rowTable(phase.growth,['Date','Weight'])}</div>`;
}
function renderMessages(){return `<div class="card"><h2>Secure messages</h2>${(phase.messages||[]).map(([from,msg])=>`<div class="message"><div class="msg-bubble">${esc(initials(from.replace(/→.*/,'')))}</div><div><div class="msg-title">${esc(from)}</div><div class="msg-text">${esc(msg)}</div></div></div>`).join('')}</div>`;}
function renderFlowsheets(){ const rows=(phase.flowsheets||[]); const headers=rows[0]||[]; return `<div class="card"><h2>Flowsheets</h2>${rowTable(rows.slice(1), headers)}</div>`;}
function renderConsults(){return `<div class="card"><h2>Consult notes</h2>${(phase.consults||[]).map(([title,body])=>`<article class="note"><div class="note-head"><div class="note-title">${esc(title)}</div><div class="note-author">Consult service</div></div><div class="note-body">${esc(body)}</div></article>`).join('')}</div>`;}
function renderPathway(){return `<div class="card"><h2>Clinical pathway</h2>${(phase.pathway||[]).map(([title,body])=>`<article class="note"><div class="note-head"><div class="note-title">${esc(title)}</div><div class="note-author">Meridian Clinical Decision Support</div></div><div class="note-body">${esc(body)}</div></article>`).join('')}</div>`;}
function renderHandoff(){
 const bad = `<div class="card"><h2>4A: Received handoff</h2><p class="muted">This is intentionally the first handoff learners see.</p><div class="handoff-grid">${phase.handoffA.map(([k,v])=>`<div class="handoff-item"><strong>${esc(k)}</strong>${esc(v)}</div>`).join('')}</div></div>`;
 const reveal = `<div class="card"><h2>Facilitator reveal</h2><div class="reveal-box"><p>After learners identify the unsafe handoff and outdated documentation, enter the facilitator code to show the corrected handoff and event note.</p><div class="input-row"><input id="revealCode" placeholder="Enter reveal code"><button class="btn" id="revealBtn">Reveal 4B</button></div><p id="revealMsg" class="muted"></p></div></div>`;
 const good = `<div class="card"><h2>4B: Corrected IPASS handoff</h2><div class="handoff-grid">${phase.handoffB.map(([k,v])=>`<div class="handoff-item"><strong>${esc(k)}</strong>${esc(v)}</div>`).join('')}</div><h3>Physician event note</h3><div class="event-note">${esc(phase.eventNote)}</div><button class="btn secondary" id="resetReveal">Hide 4B again</button></div>`;
 return bad + (reveal4b ? good : reveal);
}
function renderFacilitator(){return `<div class="card"><h2>Facilitator guide</h2>${(phase.facilitator||[]).map(x=>`<p>${esc(x)}</p>`).join('')}<h3>Expected stop point</h3><p class="muted">Stop all groups when they reach this phase objective, then proceed with didactics/debriefing before showing the next QR/phase link.</p></div>`;}
renderShell();
