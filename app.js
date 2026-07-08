
let screen = new URLSearchParams(location.search).get("phase") ? "chart" : "login";
let currentPhase = new URLSearchParams(location.search).get("phase") || "1";
let activeTab = "notes";
let facultyOpen = false;
function $(id){return document.getElementById(id)}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]))}
function phase(){return CASE.phases.find(p=>p.id===currentPhase)||CASE.phases[0]}
function routeToChart(id="1"){screen="chart";currentPhase=id;activeTab="notes";window.selectedNoteIndex=0;history.replaceState(null,"",`?phase=${id}`);render()}
function setPhase(id){currentPhase=id;activeTab="notes";window.selectedNoteIndex=0;history.replaceState(null,"",`?phase=${id}`);render()}
function setTab(tab){activeTab=tab;render()}
function toggleFaculty(){facultyOpen=!facultyOpen;const panel=$("facultyPanel");if(panel)panel.classList.toggle("open",facultyOpen)}
function reveal4B(){const val=$("revealCode").value.trim().toUpperCase();if(val==="IPASS")setPhase("4b");else $("revealMsg").textContent="Incorrect code."}
function render(){ $("app").innerHTML = screen==="login" ? renderLogin() : renderChart(); const panel=$("facultyPanel"); if(panel && facultyOpen) panel.classList.add("open");}
function renderLogin(){return `<main class="login"><section class="login-card"><div class="login-hero"><div class="brand-login"><div class="logo">M</div><div><h1>Meridian EMR</h1><div>${esc(CASE.hospital)}</div></div></div><div class="tagline">${esc(CASE.tagline)}</div><p>A fictional pediatric electronic medical record for patient safety simulation.</p></div><div class="login-body"><h2>Hospital Medicine Patient List</h2><p class="muted">Select the active simulation patient. Other patients are placeholders for future cases.</p><div class="patient-list"><div class="patient-tile" onclick="routeToChart('1')"><div><strong>${esc(CASE.patient.name)}</strong><div class="muted">ED → Hospital Medicine · New admission</div></div><span class="pill yellow">Watcher</span></div>${CASE.inactivePatients.map(p=>`<div class="patient-tile disabled"><div><strong>${esc(p.name)}</strong><div class="muted">${esc(p.detail)}</div></div><span class="pill">Future case</span></div>`).join("")}</div></div></section></main>`}
function renderChart(){const p=phase();return `<div class="app"><header class="topbar"><div class="brand" onclick="screen='login';history.replaceState(null,'','./');render()"><div class="brand-mark">M</div><div class="brand-title">Meridian EMR<small>${esc(CASE.hospital)}</small></div></div><div class="top-right"><div class="phase-buttons">${CASE.phases.map(x=>`<button class="${x.id===p.id?'active':''}" onclick="setPhase('${x.id}')">${esc(x.label)}</button>`).join("")}</div><button class="faculty-btn" onclick="toggleFaculty()">Faculty</button></div></header>${renderTabs(p)}${renderBanner(p)}<div class="layout"><aside>${renderChartReview(p)}${renderTimelineCard(p)}</aside><main><div class="main-title"><div><h2>${esc(p.title)}</h2><p>${esc(p.time)}</p></div></div><div class="prompt"><strong>Current time:</strong> Hospital Day ${esc(p.hospitalDay || "")} • ${esc(p.time)}</div><div class="card"><div class="card-head"><h3>${tabLabel(activeTab)}</h3></div><div class="card-body">${renderTab(p,activeTab)}</div></div></main><aside class="rightcol">${renderMessagesCard(p)}${renderRecentOrders(p)}</aside></div>${renderFaculty(p)}<footer class="footer">Meridian EMR v3.0 · Educational Use Only</footer></div>`}
function renderTabs(p){return `<nav class="folder-tabs">${["summary","notes","results","flowsheet","mar","orders","imaging","growth","messages"].map(t=>`<button class="${activeTab===t?'active':''}" onclick="setTab('${t}')">${tabLabel(t)}${tabCount(p,t)}</button>`).join("")}</nav>`}
function renderBanner(p){return `<section class="patient-banner"><div class="patient-left">${patientPhoto()}<div class="patient-name"><h2>${esc(CASE.patient.name)}</h2><div class="demo-grid"><b>${esc(CASE.patient.age)}</b><span>${esc(CASE.patient.sex)}</span><b>MRN</b><span>${esc(CASE.patient.mrn)}</span><b>DOB</b><span>${esc(CASE.patient.dob)}</span><b>Room</b><span>${esc(p.room)}</span><b>Attending</b><span>${esc(CASE.patient.attending)}</span><b>PCP</b><span>${esc(CASE.patient.pcp)}</span></div></div></div><div class="banner-card"><div class="banner-top">${bannerItem("Location",p.location)}${bannerItem("Weight",`${esc(p.weight)}<br><small>${esc(p.weightDetail||"")}</small>`)}${bannerItem("Allergies",CASE.patient.allergy)}${bannerItem("Isolation","None")}${bannerItem("Code Status",CASE.patient.code)}${bannerItem("Primary Team",p.team)}${bannerItem("Diet",CASE.patient.diet)}${bannerItem("Access",CASE.patient.access)}</div><div class="vital-strip">${Object.entries(p.vitals).map(([k,v])=>`<div class="vital"><span>${esc(k)}</span><strong>${esc(v)}</strong></div>`).join("")}</div></div></section>`}
function bannerItem(k,v){return `<div class="banner-item"><span>${esc(k)}</span><strong>${v}</strong></div>`}
function patientPhoto(){ if(PATIENT_PHOTO){return `<div class="photo"><img src="${PATIENT_PHOTO}" alt="Simulated pediatric patient photo"></div>`} return `<div class="photo"><svg viewBox="0 0 120 120"><rect width="120" height="120" fill="#dff3f7"/><circle cx="60" cy="50" r="30" fill="#f0c49f"/><circle cx="49" cy="54" r="4"/><circle cx="72" cy="54" r="4"/><path d="M52 69c6 5 13 5 19 0" fill="none" stroke="#8c3f2b" stroke-width="3" stroke-linecap="round"/><path d="M20 120c6-27 25-39 40-39s34 12 40 39z" fill="#2f80b9"/><path d="M32 45c5-25 50-35 60-4-20-10-40-9-60 4z" fill="#5f371d"/></svg></div>`}
function renderChartReview(p){return `<div class="card"><div class="card-head"><h3>Chart Review</h3></div><div class="chart-nav">${["notes","results","flowsheet","orders","mar","imaging","growth","messages"].map(t=>`<button class="${activeTab===t?'active':''}" onclick="setTab('${t}')">${tabLabel(t)}${tabCount(p,t)}</button>`).join("")}</div></div>`}
function renderTimelineCard(p){return `<div class="card"><div class="card-head"><h3>Timeline</h3></div><div class="card-body">${p.timeline.map(x=>`<div class="timeline-item"><time>${esc(x[0])}</time><div>${esc(x[1])}</div></div>`).join("")}<p class="muted">View full timeline</p></div></div>`}
function renderMessagesCard(p){return `<div class="card"><div class="card-head"><h3>Messages</h3><span class="count">${p.messages.length} Unread</span></div><div class="card-body">${renderMessages(p)}<p class="muted">View all messages</p></div></div>`}
function renderRecentOrders(p){return `<div class="card"><div class="card-head"><h3>Recent Orders</h3></div><div class="card-body">${renderOrders(p,true)}<p class="muted">View all orders</p></div></div>`}
function tabLabel(t){return ({summary:"Summary",notes:"Notes",results:"Results Review",flowsheet:"Flowsheets",mar:"MAR",orders:"Orders",imaging:"Imaging",growth:"Growth Chart",messages:"Secure Chat"}[t]||t)}
function tabCount(p,t){const map={notes:p.notes,orders:p.orders,mar:p.mar,imaging:p.imaging,growth:p.growth,messages:p.messages};return map[t]?` <span class="count">${map[t].length}</span>`:""}
function renderTab(p,t){if(t==="summary")return renderSummary(p);if(t==="notes")return renderNotes(p);if(t==="flowsheet")return renderFlowsheet(p,true);if(t==="messages")return renderMessages(p);if(t==="orders")return renderOrders(p,false);if(t==="mar")return renderMAR(p);if(t==="results")return renderResults(p);if(t==="imaging")return renderImaging(p);if(t==="growth")return renderGrowth(p)}
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

  return `<div class="notes-split">
    <div class="notes-list-pane">
      ${ordered.map((note,i)=>`
        <button class="note-picker ${i===selected?'active':''}" onclick="selectNote(${i})">
          <span class="note-kind">${noteIcon(note)} ${esc(note[5]||"Note")}</span>
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

function orderIcon(type){
  const t = String(type||"").toLowerCase();
  if(t.includes("med")) return "💊";
  if(t.includes("lab")) return "🧪";
  if(t.includes("imaging")) return "📷";
  if(t.includes("admission")) return "🏥";
  if(t.includes("diet")) return "🍽️";
  if(t.includes("consult")) return "🩺";
  if(t.includes("page")) return "📟";
  return "▪";
}
function renderOrders(p,limit){
  let rows=limit?p.orders.slice(0,5):p.orders;
  return `<div class="order-list">${rows.map(o=>{
    let s=String(o[2]||"").toLowerCase();
    let cls=s.includes("missing")?"missing":s.includes("complete")||s.includes("given")?"completed":s.includes("process")||s.includes("pending")?"process":"";
    return `<div class="order-card"><div><div class="order-type">${orderIcon(o[3])} ${esc(o[3]||"Order")}</div><div class="order-title">${esc(o[0])}</div><div class="order-sub">${esc(o[1])}</div></div><span class="status ${cls}">${esc(o[2])}</span></div>`
  }).join("")}</div>`
}
function renderMAR(p){return `<div class="mar-grid"><table class="mar-table"><thead><tr><th>Time</th><th>Medication</th><th>Dose</th><th>Status</th><th>Comment</th></tr></thead><tbody>${p.mar.map(r=>`<tr><td class="med-time">${esc(r[0])}</td><td class="med-name">${esc(r[1])}</td><td>${esc(r[2])}</td><td>${esc(r[3])}</td><td>${esc(r[4])}</td></tr>`).join("")}</tbody></table></div>`}


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
  const val = row[1];
  if(p.id==="2" && t==="07/04 07:45" && group!=="Microbiology"){
    return `<span class="muted">—</span>`;
  }
  if((p.id==="1") && i>0){
    return `<span class="muted">—</span>`;
  }
  return esc(val);
}
function renderResultTrends(p){if(!p.resultTrends)return"";return `<div class="result-trend"><div class="card-head"><h3>Result Trends</h3></div><div class="card-body">${Object.entries(p.resultTrends).map(([k,vals])=>`<div style="margin-bottom:10px"><strong>${esc(k)}</strong><div class="muted">${vals.map(v=>`${esc(v[0])}: ${esc(v[1])}`).join("  ·  ")}</div></div>`).join("")}</div></div>`}
function renderImaging(p){return p.imaging.map(i=>`<div class="note-card"><div class="note-summary"><div class="note-icon">▣</div><div><div class="note-title">${esc(i[0])}<span class="note-tag">Radiology</span></div><div class="note-preview">${esc(i[1]).slice(0,140)}</div></div><div class="note-meta">Final</div><div class="note-meta"></div></div><div class="note-detail">${esc(i[1])}</div></div>`).join("")}

function renderGrowth(p){let pts=p.growth.map((g,i)=>[g[0],parseFloat(String(g[1]).replace(/[^\d.]/g,""))||0]);return `<div class="growth-wrap"><div class="growth-chart"><svg viewBox="0 0 520 300" style="width:100%;height:300px"><line class="growth-axis" x1="55" y1="250" x2="490" y2="250"/><line class="growth-axis" x1="55" y1="30" x2="55" y2="250"/><path class="growth-line" d="M70 215 C160 190,230 172,330 150 C390 135,440 125,480 115"/><text class="growth-label" x="20" y="38">kg</text><text class="growth-label" x="440" y="278">Age / date</text>${pts.map((pt,i)=>{let x=75+i*95;let y=250-(pt[1]/32)*210;let current=String(pt[0]).toLowerCase().includes("today");return `<circle class="${current?'growth-dot-current':'growth-dot'}" cx="${x}" cy="${y}" r="${current?7:5}"/><text class="growth-label" x="${x}" y="${y-10}" text-anchor="middle">${esc(pt[1])}</text><text class="growth-label" x="${x}" y="270" text-anchor="middle">${esc(pt[0])}</text>`}).join("")}</svg></div><div>${table(["Date / age","Weight"],p.growth)}</div></div>`}
function renderFlowsheet(p, includeGraphs){let times=p.flowsheet.times, rows=p.flowsheet.rows;let tableHtml=`<div class="flow-wrap"><table class="flowsheet"><thead><tr><th>Row</th>${times.map(t=>`<th>${esc(t)}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr><td>${esc(r[0])}</td>${r.slice(1).map(v=>`<td class="${cellClass(r[0],v)}">${esc(v)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;return tableHtml+(includeGraphs?`<div class="card" style="margin-top:14px"><div class="card-head"><h3>Trend Graphs</h3></div><div class="card-body">${renderTrends(p.flowsheet)}</div></div>`:"")}
function cellClass(row,v){let s=String(v).toLowerCase();let n=parseFloat(v);if(row==="Heart Rate"&&n>=180)return"crit";if(row==="Heart Rate"&&n>=170)return"abn";if(row==="Temperature"&&n>=40)return"crit";if(row==="Temperature"&&n>=39.5)return"abn";if(row==="Respiratory Rate"&&n>=40)return"abn";if(row==="SpO₂"&&n<=92)return"crit";if(s.includes("mottled")||s.includes("difficult")||s.includes("none")||s.includes("weak")||s.includes("5 sec"))return"crit";if(s.includes("low")||s.includes("minimal")||s.includes("cool")||s.includes("4 sec")||s.includes("1+"))return"abn";return""}
function renderTrends(flow){const numericRows=flow.rows.filter(r=>r.slice(1).every(v=>!isNaN(parseFloat(v)))).slice(0,4);return `<div class="trend-grid">${numericRows.map((r,i)=>renderTrend(r[0],r.slice(1).map(Number),i)).join("")}</div>`}
function renderTrend(name,vals,idx){const min=Math.min(...vals),max=Math.max(...vals),w=300,h=125,pad=28;const pts=vals.map((v,i)=>{const x=pad+i*((w-pad*2)/(vals.length-1||1));const y=h-pad-(max===min?.5:(v-min)/(max-min))*(h-pad*2);return [x,y,v]});const path=pts.map((p,i)=>(i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" ");const color=idx<3?"red":"blue";return `<div class="trend"><div class="trend-top"><span>${esc(name)}</span><small>latest ${esc(vals[vals.length-1])}</small></div><svg class="chart" viewBox="0 0 ${w} ${h}"><line class="axis" x1="${pad}" y1="${h-pad}" x2="${w-pad}" y2="${h-pad}"/><line class="axis" x1="${pad}" y1="${pad}" x2="${pad}" y2="${h-pad}"/><path class="line-${color}" d="${path}"/>${pts.map((p,i)=>`<circle class="dot-${color}" cx="${p[0]}" cy="${p[1]}" r="4"/><text class="lab" x="${p[0]}" y="${p[1]-8}" text-anchor="middle">${esc(p[2])}</text><text class="xlab" x="${p[0]}" y="${h-8}" text-anchor="middle">${i+1}</text>`).join("")}</svg></div>`}
function table(head,rows){return `<table class="table"><thead><tr>${head.map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td class="${flagClass(c)}">${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>`}
function flagClass(f){f=String(f).toLowerCase();if(f.includes("critical"))return"flag-critical";if(f.includes("high"))return"flag-high";if(f.includes("low"))return"flag-low";if(f.includes("pending"))return"flag-pending";if(f.includes("prelim"))return"flag-prelim";return""}
function renderFaculty(p){return `<div class="faculty"><button class="faculty-btn" onclick="toggleFaculty()">Faculty</button><div class="faculty-panel ${facultyOpen?'open':''}" id="facultyPanel"><div class="card-head"><h3>Facilitator Mode</h3><button class="primary" onclick="toggleFaculty()">Close</button></div><div class="card-body"><div class="faculty-clue"><strong>Aha moment:</strong><br>${esc(p.aha||"")}</div><p><strong>Current phase:</strong> ${esc(p.label)} — ${esc(p.title)}</p><p><strong>Teaching notes:</strong></p><ul>${p.facilitator.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>${p.reveal?`<div class="reveal"><strong>Reveal Phase 4B</strong><p>Use after the documentation/handoff debrief.</p><input id="revealCode" placeholder="Code"> <button class="primary" onclick="reveal4B()">Reveal</button><p id="revealMsg"></p></div>`:""}</div></div></div>`}
render();
