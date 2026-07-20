
let screen = new URLSearchParams(location.search).get("phase") ? "chart" : "login";
let currentPhase = new URLSearchParams(location.search).get("phase") || "1";
let activeTab = "notes";

const NEW_INFO = {
  "1": {notes:2, results:1, mar:1, messages:2},
  "2": {notes:3, mar:1, messages:1},
  "3": {notes:1, results:2, mar:1, messages:1},
  "4a": {notes:1, results:1, messages:1},
  "4b": {notes:2, messages:1},
  "5": {notes:2, results:3, mar:2, messages:2}
};
let viewedTabs = {};

let viewedNotes = {};
function noteKey(note){ return `${currentPhase}|${note[0]}|${note[2]}`; }
function isNewNote(note,index){
  const max = (NEW_INFO[currentPhase] && NEW_INFO[currentPhase].notes) || 0;
  return index < max && !viewedNotes[noteKey(note)];
}
function markNoteViewed(note){ viewedNotes[noteKey(note)] = true; }

function resetViewedForPhase(){ viewedTabs[currentPhase] = viewedTabs[currentPhase] || {}; }
function markViewed(tab){ resetViewedForPhase(); viewedTabs[currentPhase][tab] = true; }
function isNewTab(tab){ resetViewedForPhase(); return (NEW_INFO[currentPhase] && NEW_INFO[currentPhase][tab] && !viewedTabs[currentPhase][tab]); }
function newCount(tab){ return isNewTab(tab) ? NEW_INFO[currentPhase][tab] : 0; }

function $(id){return document.getElementById(id)}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]))}
function phase(){return CASE.phases.find(p=>p.id===currentPhase)||CASE.phases[0]}
function routeToChart(id="1"){screen="chart";currentPhase=id;activeTab="notes";window.selectedNoteIndex=0;history.replaceState(null,"",`?phase=${id}`);render()}
function setPhase(id){currentPhase=id;activeTab="notes";window.selectedNoteIndex=0;history.replaceState(null,"",`?phase=${id}`);render()}
function setTab(tab){activeTab=tab;markViewed(tab);render()}
function reveal4B(){const val=$("revealCode").value.trim().toUpperCase();if(val==="IPASS")setPhase("4b");else $("revealMsg").textContent="Incorrect code."}
function render(){ $("app").innerHTML = screen==="login" ? renderLogin() : renderChart(); }
function renderLogin(){return `<main class="login"><section class="login-card"><div class="login-hero"><div class="brand-login"><div class="logo">M</div><div><h1>Meridian EMR</h1><div>${esc(CASE.hospital)}</div></div></div><div class="tagline">${esc(CASE.tagline)}</div><p>A fictional pediatric electronic medical record for patient safety simulation.</p></div><div class="login-body"><h2>Hospital Medicine Patient List</h2><p class="muted">Select the active simulation patient. Other patients are placeholders for future cases.</p><div class="patient-list"><div class="patient-tile" onclick="routeToChart('1')"><div><strong>${esc(CASE.patient.name)}</strong><div class="muted">ED → Hospital Medicine · New admission</div></div><span class="pill">New admission</span></div>${CASE.inactivePatients.map(p=>`<div class="patient-tile disabled"><div><strong>${esc(p.name)}</strong><div class="muted">${esc(p.detail)}</div></div><span class="pill">Future case</span></div>`).join("")}</div></div></section></main>`}
function renderChart(){
  const p=phase();
  markViewed(activeTab);
  return `<div class="app">
    <header class="topbar">
      <div class="brand" onclick="screen='login';history.replaceState(null,'','./');render()">
        <div class="brand-mark">M</div>
        <div class="brand-title">Meridian EMR<small>${esc(CASE.hospital)}</small></div>
      </div>
      <div class="top-right">
        <div class="phase-buttons">
          ${CASE.phases.map(x=>`<button class="${x.id===p.id?'active':''}" onclick="setPhase('${x.id}')">${esc(x.label)}</button>`).join("")}
        </div>
      </div>
    </header>
    ${renderTabs(p)}
    ${renderBanner(p)}
    <div class="layout">
      <aside class="leftcol">${renderChartReview(p)}${renderTimelineCard(p)}</aside>
      <main class="maincol">
        <div class="card">
          <div class="card-head"><h3>${tabLabel(activeTab)}</h3></div>
          <div class="card-body">${renderTab(p,activeTab)}</div>
        </div>
      </main>
      <aside class="rightcol">${renderMessagesCard(p)}${renderRecentOrders(p)}</aside>
    </div>
    <footer class="footer">Meridian EMR v5.6 · Educational Use Only</footer>
  </div>`;
}
function renderTabs(p){return `<nav class="folder-tabs" aria-label="Chart sections">${["summary","notes","results","flowsheet","orders","mar","imaging","growth","messages","resources"].map(t=>`<button class="${activeTab===t?'active':''}" onclick="setTab('${t}')">${tabLabel(t)}${tabCount(p,t)}</button>`).join("")}</nav>`}
function renderBanner(p){return `<section class="patient-banner"><div class="patient-left">${patientPhoto()}<div class="patient-name"><h2>${esc(CASE.patient.name)}</h2><div class="demo-grid"><b>${esc(CASE.patient.age)}</b><span>${esc(CASE.patient.sex)}</span><b>MRN</b><span>${esc(CASE.patient.mrn)}</span><b>DOB</b><span>${esc(CASE.patient.dob)}</span><b>Room</b><span>${esc(p.room)}</span><b>Attending</b><span>${esc(CASE.patient.attending)}</span><b>PCP</b><span>${esc(CASE.patient.pcp)}</span></div></div></div><div class="banner-card"><div class="banner-top">${bannerItem("Location",p.location)}${bannerItem("Weight",`${esc(p.weight)}<br><small>${esc(p.weightDetail||"")}</small>`)}${bannerItem("Allergies",CASE.patient.allergy)}${bannerItem("Isolation","None")}${bannerItem("Code Status",CASE.patient.code)}${bannerItem("Primary Team",p.team)}${bannerItem("Diet",p.diet||CASE.patient.diet)}${bannerItem("Access",CASE.patient.access)}</div><div class="vital-strip">${Object.entries(p.vitals).map(([k,v])=>`<div class="vital"><span>${esc(k)}</span><strong>${esc(v)}</strong></div>`).join("")}</div></div></section>`}
function bannerItem(k,v){return `<div class="banner-item"><span>${esc(k)}</span><strong>${v}</strong></div>`}
function patientPhoto(){ if(PATIENT_PHOTO){return `<div class="photo"><img src="${PATIENT_PHOTO}" alt="Simulated pediatric patient photo"></div>`} return `<div class="photo"><svg viewBox="0 0 120 120"><rect width="120" height="120" fill="#dff3f7"/><circle cx="60" cy="50" r="30" fill="#f0c49f"/><circle cx="49" cy="54" r="4"/><circle cx="72" cy="54" r="4"/><path d="M52 69c6 5 13 5 19 0" fill="none" stroke="#8c3f2b" stroke-width="3" stroke-linecap="round"/><path d="M20 120c6-27 25-39 40-39s34 12 40 39z" fill="#2f80b9"/><path d="M32 45c5-25 50-35 60-4-20-10-40-9-60 4z" fill="#5f371d"/></svg></div>`}
function renderChartReview(p){return ``}
function renderTimelineCard(p){return `<div class="card"><div class="card-head"><h3>Timeline</h3></div><div class="card-body">${p.timeline.map(x=>x[1]==="__divider__"?`<div class="timeline-divider">${esc(x[0])}</div>`:`<div class="timeline-item"><time>${esc(x[0])}</time><div>${esc(x[1])}</div></div>`).join("")}<p class="muted">View full timeline</p></div></div>`}
function renderMessagesCard(p){return `<div class="card"><div class="card-head"><h3>Messages</h3><span class="count">${p.messages.length} Unread</span></div><div class="card-body">${renderMessages(p)}<p class="muted">View all messages</p></div></div>`}
function renderRecentOrders(p){return `<div class="card"><div class="card-head"><h3>Recent Orders</h3></div><div class="card-body">${renderOrders(p,true)}<p class="muted">View all orders</p></div></div>`}
function tabLabel(t){return ({summary:"Summary",notes:"Notes",results:"Results",flowsheet:"Flowsheets",mar:"MAR",orders:"Orders",imaging:"Imaging",growth:"Growth",messages:"Secure Chat",resources:"Resources"}[t]||t)}

function tabCount(p,t){
  const n = newCount(t);
  if(n){ return ` <span class="new-badge"><span class="new-dot"></span>${n}</span>`; }
  return "";
}
function renderTab(p,t){if(t==="summary")return renderSummary(p);if(t==="notes")return renderNotes(p);if(t==="flowsheet")return renderFlowsheet(p,true);if(t==="messages")return renderMessages(p);if(t==="orders")return renderOrders(p,false);if(t==="mar")return renderMAR(p);if(t==="results")return renderResults(p);if(t==="imaging")return renderImaging(p);if(t==="growth")return renderGrowth(p);if(t==="resources")return renderResources(p)}
function renderSummary(p){return `<div class="summary-grid"><div class="mini"><h4>Assessment</h4><ul>${p.summary.assessment.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div><div class="mini"><h4>Active Problems</h4><ul>${p.summary.problems.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div><div class="mini"><h4>Overnight / Recent Events</h4><ul>${p.summary.events.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div><div class="mini"><h4>Today's Plan</h4><ul>${p.summary.plan.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div></div><div class="two-col"><div class="mini"><h4>Pending Studies</h4><ul>${p.summary.pending.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div><div class="mini"><h4>To Do</h4><ul>${p.summary.todo.map(x=>`<li>☐ ${esc(x)}</li>`).join("")}</ul></div></div><div class="card" style="margin-top:14px"><div class="card-head"><h3>Recent Notes</h3></div><div class="card-body">${renderNotes(p,true)}</div></div>`}


function noteTimeKey(note){
  const raw = String(note[2] || "");
  const m = raw.match(/(\d{2})\/(\d{2})\s+(\d{2}):(\d{2})/);
  if(!m) return raw;
  return `${m[1]}${m[2]}${m[3]}${m[4]}`;
}
function noteShortTime(note){
  const raw = String(note[2] || "");
  const m = raw.match(/(\d{2})\/(\d{2})\s+(\d{2}):(\d{2})/);
  return m ? `${m[3]}:${m[4]}` : raw;
}
function noteIcon(note){
  const type = String(note[5] || note[0] || "").toLowerCase();
  if(type.includes("nursing") || type.includes("triage")) return "👩‍⚕️";
  if(type.includes("pharmacy")) return "💊";
  if(type.includes("consult")) return "🩺";
  if(type.includes("handoff")) return "📋";
  if(type.includes("event")) return "🚨";
  if(type.includes("result") || type.includes("radiology")) return "🧪";
  return "📝";
}
function renderNotes(p,compact=false){
  const ordered = [...p.notes].sort((a,b)=> noteTimeKey(b).localeCompare(noteTimeKey(a)));
  if(compact){
    return `<div class="note-list">${ordered.slice(0,4).map((n,i)=>`
      <div class="note-card">
        <div class="note-summary">
          <div class="note-icon">${noteIcon(n)}</div>
          <div>
            <div class="note-title">${esc(n[0])}<span class="note-tag">${esc(n[5]||"Note")}</span></div>
            <div class="note-preview">${esc(n[3])}</div>
          </div>
          <div class="note-meta">${esc(n[1])}</div>
          <div class="note-meta">${esc(noteShortTime(n))}</div>
        </div>
      </div>`).join("")}</div>`;
  }

  const selected = Math.min(window.selectedNoteIndex ?? 0, ordered.length - 1);
  const n = ordered[selected] || ordered[0];
  if(n) markNoteViewed(n);

  return `<div class="notes-split">
    <div class="notes-list-pane">
      ${ordered.map((note,i)=>`
        <button class="note-picker ${i===selected?'active':''} ${isNewNote(note,i)?'unread-note':''}" onclick="selectNote(${i})">
          <span class="note-kind">${isNewNote(note,i)?'<span class="new-dot"></span> ':''}${noteIcon(note)} ${esc(note[5]||"Note")}</span>
          <strong>${esc(note[0])}</strong>
          <small>${esc(note[1])} · ${esc(noteShortTime(note))}</small>
          <em>${esc(note[3])}</em>
        </button>`).join("")}
    </div>
    <div class="note-reader">
      <div class="note-reader-head">
        <span class="note-tag">${noteIcon(n)} ${esc(n[5]||"Note")}</span>
        <h3>${esc(n[0])}</h3>
        <p>${esc(n[1])} · ${esc(n[2])}</p>
      </div>
      <div class="note-detail open">${formatNoteBody(n[4])}</div>
    </div>
  </div>`;
}
function formatNoteBody(text){
  let safe = esc(text || "");
  safe = safe.replace(/\n\n/g, "<br><br>");
  safe = safe.replace(/\b(Chief Complaint|HPI|Exam|Physical Exam|Assessment|Plan|Medical Decision Making|Impression|Recommendations|I — Illness severity|P — Patient summary|A — Action list|S — Situation awareness\/contingency|S — Synthesis by receiver):/g, "<strong>$1:</strong>");
  return safe;
}
function selectNote(i){window.selectedNoteIndex=i;render();}
function toggleNote(i){const el=$("note"+i); if(el) el.classList.toggle("hidden")}
function renderMessages(p){return p.messages.map(m=>{let cls=(m[3]||"").toLowerCase();return `<div class="msg"><div class="msg-head"><div class="avatar ${cls}">${esc(m[3]||"AR")}</div><div><div class="from">${esc(m[0])}</div><div>${esc(m[2])}</div></div><div class="time">${esc(m[1])}<span class="unread"></span></div></div></div>`}).join("")||"<p>No messages.</p>"}


function orderGroupFromName(o){
  const name = String(o[0]||"").toLowerCase();
  const type = String(o[3]||"").toLowerCase();
  if(name.includes("d5") || name.includes("kcl") || name.includes("fluid")) return "IV Fluids";
  if(type.includes("diet") || name.includes("diet")) return "Diet and Nutrition";
  if(type.includes("monitor") || name.includes("vital") || name.includes("serial") || name.includes("intake") || name.includes("output") || name.includes("notify physician")) return "Nursing";
  if(type.includes("lab") || name.includes("culture") || name.includes("cbc") || name.includes("crp")) return "Laboratory";
  if(type.includes("imaging") || name.includes("x-ray") || name.includes("radiograph") || name.includes("mri")) return "Imaging";
  if(type.includes("consult")) return "Consults & Referrals";
  if(type.includes("admission")) return "Admission";
  if(type.includes("med")) return "Medications";
  return "Other";
}
function orderGroupOrder(group){
  return {
    "Medications":1,
    "IV Fluids":2,
    "Diet and Nutrition":3,
    "Nursing":4,
    "Laboratory":5,
    "Imaging":6,
    "Admission":7,
    "Consults & Referrals":8,
    "Other":9
  }[group] || 99;
}
function renderOrders(p,limit){
  const sourceRows = p.activeOrders || p.orders || [];
  let rows = limit ? sourceRows.slice(0,5) : sourceRows;
  if(limit){
    return `<div class="order-list">${rows.map(o=>renderRecentOrder(o)).join("")}</div>`;
  }
  const groups = {};
  rows.forEach(o=>{
    const g = orderGroupFromName(o);
    groups[g] = groups[g] || [];
    groups[g].push(o);
  });
  return `<div class="orders-epic">${Object.keys(groups).sort((a,b)=>orderGroupOrder(a)-orderGroupOrder(b)).map(g=>`
    <section class="orders-group">
      <div class="orders-section">${esc(g)}</div>
      ${groups[g].map(o=>renderOrderRow(o)).join("")}
    </section>
  `).join("")}</div>`;
}
function renderRecentOrder(o){
  let s=String(o[2]||"").toLowerCase();
  let cls=s.includes("missing")||s.includes("not ordered")?"missing":s.includes("complete")||s.includes("given")?"completed":s.includes("process")||s.includes("pending")?"process":"";
  return `<div class="order-card"><div><div class="order-type">${esc(o[3]||"Order")}</div><div class="order-title">${esc(o[0])}</div><div class="order-sub">${esc(o[1])}</div></div><span class="status ${cls}">${esc(o[2])}</span></div>`;
}
function renderOrderRow(o){
  const name = o[0] || "";
  const detail = o[1] || "";
  const status = o[2] || "";
  let s=String(status).toLowerCase();
  let cls=s.includes("missing")||s.includes("not ordered")?"missing":s.includes("complete")||s.includes("given")?"completed":s.includes("process")||s.includes("pending")?"process":"";
  return `<div class="order-row">
    <div class="order-name">${esc(name)}</div>
    <div class="order-detail">${esc(detail)}</div>
    <div class="order-actions"><span class="status ${cls}">${esc(status)}</span></div>
  </div>`;
}
function renderMAR(p){return `<div class="mar-grid"><table class="mar-table"><thead><tr><th>Time</th><th>Medication</th><th>Dose</th><th>Status</th><th>Comment</th></tr></thead><tbody>${p.mar.map(r=>`<tr><td class="med-time">${esc(r[0])}</td><td class="med-name">${esc(r[1])}</td><td>${esc(r[2])}</td><td>${esc(r[3])}</td><td>${esc(r[4])}</td></tr>`).join("")}</tbody></table></div>`}


function renderResources(p){
  const resources=p.resources||[];
  if(!resources.length)return `<p class="muted">No resources available for this phase.</p>`;
  return `<div class="resource-list">${resources.map(r=>{
    const content=`<div class="resource-type">${esc(r.type||"Resource")}</div><div class="resource-title">${esc(r.title)}</div><div class="resource-description">${esc(r.description||"")}</div>`;
    return r.url?`<a class="resource-card" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${content}<span class="resource-open">Open ↗</span></a>`:`<div class="resource-card">${content}</div>`;
  }).join("")}</div>`;
}

function renderResults(p){
  const timeCols = getResultTimes(p);
  const groups = p.results || {};
  return `<div class="lab-review">
    <div class="lab-grid" style="--timecols:${timeCols.length}">
      <div class="lab-cell lab-sticky lab-head">Test</div>
      ${timeCols.map(t=>`<div class="lab-cell lab-head">${esc(t)}</div>`).join("")}
      ${Object.entries(groups).map(([group,rows])=>renderLabGroup(group,rows,timeCols,p)).join("")}
    </div>
  </div>`;
}
function getResultTimes(p){
  if(p.resultTimes) return p.resultTimes;
  if(p.id==="1") return ["07/03 16:00"];
  if(p.id==="2") return ["07/03 16:00","07/04 07:45"];
  if(p.id==="3") return ["07/03 16:00","07/04 07:45","07/04 14:20"];
  if(p.id==="4a" || p.id==="4b") return ["07/03 16:00","07/04 07:45","07/04 21:35"];
  return ["07/03 16:00","07/04 07:45","07/04 21:35","07/05 02:00"];
}
function renderLabGroup(group,rows,timeCols,p){
  return `<div class="lab-section">▾ ${esc(group)}</div>${rows.map(r=>{
    return `<div class="lab-cell lab-row-name">${esc(r[0])}</div>${timeCols.map((t,i)=>`<div class="lab-cell ${flagClass(r[2]||"")}">${labValueForTime(p,group,r,t,i)}</div>`).join("")}`
  }).join("")}`;
}
function labValueForTime(p,group,row,t,i){
  const name = row[0];
  if(p.resultHistory){
    const value = p.resultHistory?.[t]?.[group]?.[name];
    return value===undefined ? `<span class="muted">—</span>` : esc(value);
  }
  const val = row[1];
  if(p.id==="2" && t==="07/04 07:45" && group!=="Microbiology") return `<span class="muted">—</span>`;
  if((p.id==="1") && i>0) return `<span class="muted">—</span>`;
  return esc(val);
}
function renderResultTrends(p){if(!p.resultTrends)return"";return `<div class="result-trend"><div class="card-head"><h3>Result Trends</h3></div><div class="card-body">${Object.entries(p.resultTrends).map(([k,vals])=>`<div style="margin-bottom:10px"><strong>${esc(k)}</strong><div class="muted">${vals.map(v=>`${esc(v[0])}: ${esc(v[1])}`).join("  ·  ")}</div></div>`).join("")}</div></div>`}
function renderImaging(p){return p.imaging.map(i=>`<div class="note-card"><div class="note-summary"><div class="note-icon">▣</div><div><div class="note-title">${esc(i[0])}<span class="note-tag">Radiology</span></div><div class="note-preview">${esc(i[1]).slice(0,140)}</div></div><div class="note-meta">Final</div><div class="note-meta"></div></div><div class="note-detail">${esc(i[1])}</div></div>`).join("")}

function renderGrowth(p){let pts=p.growth.map((g,i)=>[g[0],parseFloat(String(g[1]).replace(/[^\d.]/g,""))||0]);return `<div class="growth-wrap"><div class="growth-chart"><svg viewBox="0 0 520 300" style="width:100%;height:300px"><line class="growth-axis" x1="55" y1="250" x2="490" y2="250"/><line class="growth-axis" x1="55" y1="30" x2="55" y2="250"/><path class="growth-line" d="M70 215 C160 190,230 172,330 150 C390 135,440 125,480 115"/><text class="growth-label" x="20" y="38">kg</text><text class="growth-label" x="440" y="278">Age / date</text>${pts.map((pt,i)=>{let x=75+i*95;let y=250-(pt[1]/32)*210;let current=String(pt[0]).toLowerCase().includes("today");return `<circle class="${current?'growth-dot-current':'growth-dot'}" cx="${x}" cy="${y}" r="${current?7:5}"/><text class="growth-label" x="${x}" y="${y-10}" text-anchor="middle">${esc(pt[1])}</text><text class="growth-label" x="${x}" y="270" text-anchor="middle">${esc(pt[0])}</text>`}).join("")}</svg></div><div>${table(["Date / age","Weight"],p.growth)}</div></div>`}

function flowGroups(rows){
  const groups = [
    ["Vitals", ["Temperature","Heart Rate","Respiratory Rate","Blood Pressure","SpO₂","Cap refill"]],
    ["Pain", ["Pain","FLACC"]],
    ["Activity / Neuro", ["Mental status","Activity","Weight bearing"]],
    ["Meals / Snacks", ["PO intake"]],
    ["Intake", ["Intake","Total In"]],
    ["Output", ["Urine output"]],
    ["I/O Totals", ["I/O Net","Cumulative Net"]]
  ];
  const used = new Set();
  const out = groups.map(([name,names])=>{
    const matched = rows.filter(r=>names.includes(r[0]));
    matched.forEach(r=>used.add(r[0]));
    return [name, matched];
  }).filter(g=>g[1].length);
  const other = rows.filter(r=>!used.has(r[0]));
  if(other.length) out.push(["Other", other]);
  return out;
}
function renderFlowsheet(p, includeGraphs){
  const times = p.flowsheet.times;
  const groups = flowGroups(p.flowsheet.rows);
  const gridCols = times.length + 1;
  const tableHtml = `<div class="flow-epic"><div class="flow-grid" style="--flowcols:${gridCols}">
    <div class="flow-cell flow-corner">Time:</div>
    ${times.map(t=>`<div class="flow-cell flow-time">${esc(t)}</div>`).join("")}
    ${groups.map(([group,rows])=>`
      <div class="flow-section">▾ ${esc(group)}</div>
      ${rows.map(r=>`
        <div class="flow-cell flow-row-name">${esc(r[0])}</div>
        ${r.slice(1).map(v=>`<div class="flow-cell ${cellClass(r[0],v)}">${esc(v)}</div>`).join("")}
      `).join("")}
    `).join("")}
  </div></div>`;
  return tableHtml + (includeGraphs ? `<div class="card" style="margin-top:14px"><div class="card-head"><h3>Trend Graphs</h3></div><div class="card-body">${renderTrends(p.flowsheet)}</div></div>` : "");
}
function cellClass(row,v){let s=String(v).toLowerCase();let n=parseFloat(v);if(row==="Heart Rate"&&n>=180)return"crit";if(row==="Heart Rate"&&n>=170)return"abn";if(row==="Temperature"&&n>=40)return"crit";if(row==="Temperature"&&n>=39.5)return"abn";if(row==="Respiratory Rate"&&n>=40)return"abn";if(row==="SpO₂"&&n<=92)return"crit";if(s.includes("mottled")||s.includes("difficult")||s.includes("none")||s.includes("weak")||s.includes("5 sec"))return"crit";if(s.includes("low")||s.includes("minimal")||s.includes("cool")||s.includes("4 sec")||s.includes("1+"))return"abn";return""}
function renderTrends(flow){const allowed=new Set(["Temperature","Heart Rate","Respiratory Rate","SpO₂"]);const numericRows=flow.rows.filter(r=>allowed.has(r[0])&&r.slice(1).every(v=>!isNaN(parseFloat(v))));return `<div class="trend-grid">${numericRows.map((r,i)=>renderTrend(r[0],r.slice(1).map(Number),i)).join("")}</div>`}
function renderTrend(name,vals,idx){const min=Math.min(...vals),max=Math.max(...vals),w=300,h=125,pad=28;const pts=vals.map((v,i)=>{const x=pad+i*((w-pad*2)/(vals.length-1||1));const y=h-pad-(max===min?.5:(v-min)/(max-min))*(h-pad*2);return [x,y,v]});const path=pts.map((p,i)=>(i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" ");const color=idx<3?"red":"blue";return `<div class="trend"><div class="trend-top"><span>${esc(name)}</span><small>latest ${esc(vals[vals.length-1])}</small></div><svg class="chart" viewBox="0 0 ${w} ${h}"><line class="axis" x1="${pad}" y1="${h-pad}" x2="${w-pad}" y2="${h-pad}"/><line class="axis" x1="${pad}" y1="${pad}" x2="${pad}" y2="${h-pad}"/><path class="line-${color}" d="${path}"/>${pts.map((p,i)=>`<circle class="dot-${color}" cx="${p[0]}" cy="${p[1]}" r="4"/><text class="lab" x="${p[0]}" y="${p[1]-8}" text-anchor="middle">${esc(p[2])}</text><text class="xlab" x="${p[0]}" y="${h-8}" text-anchor="middle">${i+1}</text>`).join("")}</svg></div>`}
function table(head,rows){return `<table class="table"><thead><tr>${head.map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td class="${flagClass(c)}">${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>`}
function flagClass(f){f=String(f).toLowerCase();if(f.includes("critical"))return"flag-critical";if(f.includes("high"))return"flag-high";if(f.includes("low"))return"flag-low";if(f.includes("pending"))return"flag-pending";if(f.includes("prelim"))return"flag-prelim";return""}
render();
