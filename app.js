
let currentPhase = new URLSearchParams(location.search).get("phase") || "1";
let activeTab = "notes";

function phase(){ return CASE.phases.find(p => p.id === currentPhase) || CASE.phases[0]; }
function esc(s){ return String(s ?? "").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

function render(){
  const p = phase();
  document.title = `Meridian EMR — ${p.label}`;
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="topbar">
      <div class="brand">◆ Meridian <span>Children's EMR</span></div>
      <div class="phase-select">${CASE.phases.map(x => `<button class="${x.id===currentPhase?'active':''}" onclick="setPhase('${x.id}')">${esc(x.label)}</button>`).join("")}</div>
    </div>
    <section class="header">
      <div class="patient">
        <h1>${esc(CASE.patient.name)}</h1>
        <div class="sub">${esc(CASE.patient.age)} · ${esc(CASE.patient.sex)} · MRN ${esc(CASE.patient.mrn)} · DOB ${esc(CASE.patient.dob)}</div>
        <div class="sub"><strong>${esc(p.status)}</strong> · ${esc(p.time)}</div>
      </div>
      <div class="storyboard">
        <div class="sb"><label>Weight</label><strong>${esc(p.storyboard.weight)}</strong></div>
        <div class="sb"><label>Allergies</label><strong>${esc(CASE.patient.allergy)}</strong></div>
        <div class="sb"><label>Team</label><strong>${esc(p.storyboard.team)}</strong></div>
        <div class="sb"><label>Acuity</label><strong>${esc(p.storyboard.acuity)}</strong></div>
      </div>
    </section>
    <div class="layout">
      <aside class="sidebar">
        <div class="card"><h2>Chart navigator</h2><div class="tabs">${["notes","orders","mar","labs","imaging","growth","messages"].map(t=>`<button class="${activeTab===t?'active':''}" onclick="setTab('${t}')">${label(t)}</button>`).join("")}</div></div>
        <div class="card"><h2>Clinical timeline</h2><div class="card-body">${p.timeline.map(i=>`<div class="timeline-item"><time>${esc(i[0])}</time><div>${esc(i[1])}</div></div>`).join("")}</div></div>
      </aside>
      <main class="main">
        ${p.alerts.map(a=>`<div class="alert ${currentPhase==='5'?'danger':''}">${esc(a)}</div>`).join("")}
        <div class="card"><h2>${label(activeTab)}</h2><div class="card-body">${renderTab(p,activeTab)}</div></div>
      </main>
      <aside class="rightbar">
        <div class="card"><h2>Secure chat / notifications</h2><div class="card-body">${renderMessages(p)}</div></div>
        <div class="card"><h2>Facilitator notes</h2><div class="card-body"><button onclick="toggleFac()">Show / hide facilitator notes</button><div id="fac" class="hidden">${p.facilitator.map(x=>`<p>${esc(x)}</p>`).join("")}</div>${renderReveal(p)}</div></div>
      </aside>
    </div>
    <div class="footer">Meridian EMR Simulation Platform · Fictional patient record for education</div>
  `;
}

function label(t){
  return ({notes:"Notes",orders:"Orders",mar:"MAR",labs:"Labs",imaging:"Imaging",growth:"Growth chart",messages:"Messages"}[t] || t);
}
function setPhase(id){ currentPhase=id; activeTab="notes"; history.replaceState(null,"",`?phase=${id}`); render(); }
function setTab(t){ activeTab=t; render(); }
function toggleFac(){ document.getElementById("fac").classList.toggle("hidden"); }

function renderMessages(p){
  const msgs = p.tabs.messages || [];
  return msgs.map(m=>`<div class="msg"><span class="time">${esc(m[1])}</span><div class="from">${esc(m[0])}</div><div>${esc(m[2])}</div></div>`).join("") || "<p>No new messages.</p>";
}
function renderReveal(p){
  if(!p.reveal) return "";
  return `<div class="reveal"><strong>Facilitator reveal: Phase 4B</strong><p>Enter code after debrief.</p><input id="code" placeholder="Code" /> <button onclick="reveal4b()">Reveal</button><p id="codeMsg"></p></div>`;
}
function reveal4b(){
  const val = document.getElementById("code").value.trim().toUpperCase();
  if(val === "IPASS"){ setPhase("4b"); } else { document.getElementById("codeMsg").textContent = "Incorrect code."; }
}
function renderTab(p,t){
  const d = p.tabs[t] || [];
  if(t==="notes") return d.map(n=>`<article class="note"><div class="note-title">${esc(n[0])}<div class="note-meta">${esc(n[1])}</div></div><div class="note-content">${esc(n[2])}</div></article>`).join("");
  if(t==="orders") return table(["Order","Details","Status","Comment"], d);
  if(t==="mar") return table(["Time","Medication","Dose","Status","Comment"], d);
  if(t==="labs") return `<table class="table"><thead><tr><th>Test</th><th>Result</th><th>Flag</th></tr></thead><tbody>${d.map(r=>`<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td><td class="${flagClass(r[2])}">${esc(r[2])}</td></tr>`).join("")}</tbody></table>`;
  if(t==="imaging") return d.map(r=>`<article class="note"><div class="note-title">${esc(r[0])}</div><div class="note-content">${esc(r[1])}</div></article>`).join("");
  if(t==="growth") return table(["Date/age","Weight"], d) + `<p class="sub">Growth trend is included to support weight verification and medication safety review.</p>`;
  if(t==="messages") return renderMessages(p);
  return "";
}
function table(head, rows){
  return `<table class="table"><thead><tr>${head.map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}
function flagClass(f){ f=String(f).toLowerCase(); if(f.includes("critical")||f.includes("high")||f.includes("low")) return "flag-high"; if(f.includes("pending")||f.includes("prelim")) return "flag-warn"; return ""; }
render();
