const LOG_KEY = "ospap_log_v1";
const START_KEY = "ospap_start_v1";

function todayStr(){ return new Date().toISOString().slice(0,10); }
function dateStr(d){ return d.toISOString().slice(0,10); }
function daysBetween(a,b){ return Math.round((new Date(b) - new Date(a)) / 86400000); }

function getLog(){
  try { return JSON.parse(localStorage.getItem(LOG_KEY) || "{}"); }
  catch(e){ return {}; }
}
function setLog(log){ localStorage.setItem(LOG_KEY, JSON.stringify(log)); }
function getStart(){
  let s = localStorage.getItem(START_KEY);
  if(!s){ s = todayStr(); localStorage.setItem(START_KEY, s); }
  return s;
}

function computeStreak(log){
  let streak = 0;
  let d = new Date();
  while(true){
    const ds = dateStr(d);
    if(log[ds] === "full" || log[ds] === "short"){
      streak++; d.setDate(d.getDate()-1);
    } else if(ds === todayStr()){
      d.setDate(d.getDate()-1);
    } else break;
  }
  return streak;
}
function computeWeekCount(log){
  const d = new Date();
  const dow = d.getDay();
  const monOffset = dow === 0 ? 6 : dow - 1;
  let count = 0;
  for(let i=0;i<=monOffset;i++){
    const dd = new Date(d); dd.setDate(d.getDate()-i);
    if(log[dateStr(dd)] === "full" || log[dateStr(dd)] === "short") count++;
  }
  return count;
}
function missStreak(log){
  let miss = 0;
  let d = new Date(); d.setDate(d.getDate()-1);
  while(true){
    const ds = dateStr(d);
    if(log[ds] === "full" || log[ds] === "short") break;
    miss++; d.setDate(d.getDate()-1);
    if(miss > 30) break;
  }
  return miss;
}

function weekFocusFor(planWeek){
  for(const w of WEEKS){
    const parts = w.range.split("-").map(Number);
    const lo = parts[0], hi = parts.length > 1 ? parts[1] : parts[0];
    if(planWeek >= lo && planWeek <= hi) return w;
  }
  return WEEKS[WEEKS.length-1];
}
function phaseFor(planWeek){
  for(const p of PHASES){
    const parts = p.weeks.split("-").map(Number);
    if(planWeek >= parts[0] && planWeek <= parts[1]) return p;
  }
  return PHASES[PHASES.length-1];
}

function renderToday(){
  const log = getLog();
  const start = getStart();
  const planWeek = Math.min(36, Math.max(1, Math.floor(daysBetween(start, todayStr())/7) + 1));
  const wk = weekFocusFor(planWeek);

  document.getElementById("streak-val").textContent = computeStreak(log) + (computeStreak(log)===1 ? " day" : " days");
  document.getElementById("week-val").textContent = computeWeekCount(log) + " / 6";
  document.getElementById("plan-week-val").textContent = planWeek + " / 36";
  document.getElementById("today-date").textContent = new Date().toLocaleDateString(undefined, { weekday:'long', month:'long', day:'numeric' });
  document.getElementById("today-focus").textContent = "Week " + planWeek + ": " + wk.title;
  document.getElementById("header-sub").textContent = phaseFor(planWeek).title;

  const pct = Math.round((planWeek/36)*100);
  document.getElementById("overall-progress").style.width = pct + "%";
  document.getElementById("overall-progress-label").textContent = pct + "% through the 36 week plan";

  const today = todayStr();
  const doneToday = log[today] === "full" || log[today] === "short";
  document.getElementById("btn-row").style.display = doneToday ? "none" : "flex";
  document.getElementById("done-msg").classList.toggle("show", doneToday);

  const misses = missStreak(log);
  const warn = document.getElementById("warn-card");
  if(misses >= 2 && !doneToday){
    warn.style.display = "block";
    warn.textContent = misses + " days missed in a row. Skip the full hour today, just do the 15 minute version: look up this week's drugs in the BNF. Keeping the habit alive matters more than the dose today.";
  } else {
    warn.style.display = "none";
  }

  const grid = document.getElementById("history-grid");
  grid.innerHTML = "";
  for(let i=13;i>=0;i--){
    const d = new Date(); d.setDate(d.getDate()-i);
    const ds = dateStr(d);
    const status = log[ds];
    const cell = document.createElement("div");
    cell.className = "day-cell" + (status === "full" ? " full" : status === "short" ? " short" : "") + (ds===today ? " today-marker" : "");
    cell.textContent = d.getDate();
    grid.appendChild(cell);
  }
}

function logToday(type){
  const log = getLog();
  log[todayStr()] = type;
  setLog(log);
  renderToday();
}
function undoToday(){
  const log = getLog();
  delete log[todayStr()];
  setLog(log);
  renderToday();
}
function resetAll(){
  if(confirm("Reset all progress? This clears your streak, history, and start date.")){
    localStorage.removeItem(LOG_KEY);
    localStorage.removeItem(START_KEY);
    renderToday();
  }
}

function renderPlan(){
  const start = getStart();
  const planWeek = Math.min(36, Math.max(1, Math.floor(daysBetween(start, todayStr())/7) + 1));

  const phaseList = document.getElementById("phase-list");
  phaseList.innerHTML = "";
  PHASES.forEach(p => {
    const parts = p.weeks.split("-").map(Number);
    const isActive = planWeek >= parts[0] && planWeek <= parts[1];
    const div = document.createElement("div");
    div.className = "phase-card" + (isActive ? " active" : "");
    div.innerHTML = '<p class="weeks">Weeks ' + p.weeks + (isActive ? ' &middot; you are here' : '') + '</p><p class="title">' + p.title + '</p><p class="detail">' + p.detail + '</p>';
    phaseList.appendChild(div);
  });

  const weekList = document.getElementById("week-list");
  weekList.innerHTML = "";
  WEEKS.forEach(w => {
    const parts = w.range.split("-").map(Number);
    const lo = parts[0], hi = parts.length > 1 ? parts[1] : parts[0];
    const isActive = planWeek >= lo && planWeek <= hi;
    const div = document.createElement("div");
    div.className = "phase-card" + (isActive ? " active" : "");
    div.innerHTML = '<p class="weeks">Week' + (lo===hi?'':'s') + ' ' + w.range + (isActive ? ' &middot; current' : '') + '</p><p class="title">' + w.title + '</p><p class="detail">' + w.detail + '</p>';
    weekList.appendChild(div);
  });
}

function renderResources(){
  const core = document.getElementById("res-core");
  core.innerHTML = "";
  RESOURCES_CORE.forEach(r => {
    const div = document.createElement("div");
    div.className = "res-card";
    div.innerHTML = '<a href="' + r.url + '" target="_blank" rel="noopener">' + r.label + '</a><p class="note">' + r.note + '</p>';
    core.appendChild(div);
  });
  const reg = document.getElementById("res-reg");
  reg.innerHTML = "";
  RESOURCES_REG.forEach(r => {
    const div = document.createElement("div");
    div.className = "res-card";
    div.innerHTML = '<a href="' + r.url + '" target="_blank" rel="noopener">' + r.label + '</a><p class="note">' + r.note + '</p>';
    reg.appendChild(div);
  });
}

function renderGuardrails(){
  const list = document.getElementById("guardrail-list");
  list.innerHTML = "";
  GUARDRAILS.forEach((g,i) => {
    const div = document.createElement("div");
    div.className = "guardrail";
    div.innerHTML = '<div class="num">' + (i+1) + '</div><div><p class="title">' + g.title + '</p><p class="body">' + g.body + '</p></div>';
    list.appendChild(div);
  });
}

function switchView(name){
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById("view-" + name).classList.add("active");
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.view === name));
}

document.getElementById("btn-full").addEventListener("click", () => logToday("full"));
document.getElementById("btn-short").addEventListener("click", () => logToday("short"));
document.getElementById("undo-btn").addEventListener("click", undoToday);
document.getElementById("reset-btn").addEventListener("click", resetAll);
document.querySelectorAll(".tab-btn").forEach(b => b.addEventListener("click", () => switchView(b.dataset.view)));

renderToday();
renderPlan();
renderResources();
renderGuardrails();

let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const banner = document.getElementById("install-banner");
  const text = document.getElementById("install-text");
  const btn = document.getElementById("install-btn");
  text.textContent = "Add this to your home screen so it's there every day, separate from any browser tab.";
  btn.style.display = "block";
  banner.classList.add("show");
  btn.addEventListener("click", async () => {
    banner.classList.remove("show");
    deferredPrompt.prompt();
  });
});

if("serviceWorker" in navigator){
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(()=>{});
  });
}
