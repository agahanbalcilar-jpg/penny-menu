const $ = (sel) => document.querySelector(sel);

const state = {
  lang: "TR",
  theme: "dark",
  activeCat: "all",
  q: "",
};

function moneyTRY(v){
  if (typeof v !== "number") return "";
  // Turkish format: 1.400,00 ₺
  return v.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ₺";
}

function getTitle(cat){
  return state.lang === "TR" ? cat.titleTR : cat.titleEN;
}

function flattenMenu(){
  const rows = [];
  for (const cat of window.MENU){
    for (const item of cat.items){
      rows.push({ catId: cat.id, catTitle: getTitle(cat), ...item });
    }
  }
  return rows;
}

function matchesQuery(item, q){
  if (!q) return true;
  const hay = [
    item.name,
    item.desc || "",
    (item.tags || []).join(" "),
    item.catTitle || ""
  ].join(" ").toLowerCase();
  return hay.includes(q.toLowerCase());
}

function buildChips(){
  const chips = $("#chips");
  chips.innerHTML = "";

  const allChip = document.createElement("button");
  allChip.className = "chip" + (state.activeCat === "all" ? " active" : "");
  allChip.type = "button";
  allChip.innerHTML = `<span class="dot"></span> ${state.lang === "TR" ? "Tümü" : "All"}`;
  allChip.onclick = () => { state.activeCat = "all"; render(); };
  chips.appendChild(allChip);

  for (const cat of window.MENU){
    const b = document.createElement("button");
    b.className = "chip" + (state.activeCat === cat.id ? " active" : "");
    b.type = "button";
    b.innerHTML = `<span class="dot"></span> ${getTitle(cat)}`;
    b.onclick = () => { state.activeCat = cat.id; render(); };
    chips.appendChild(b);
  }
}

function openSheet(item){
  const sheet = $("#sheet");
  const back = $("#sheetBackdrop");
  const content = $("#sheetContent");

  const title = item.name;
  const price = moneyTRY(item.price);
  const size = item.size ? `• ${item.size}` : "";
  const cat = item.catTitle ? `• ${item.catTitle}` : "";
  const avail = item.available === false
    ? (state.lang === "TR" ? "Mevcut değil" : "Unavailable")
    : (state.lang === "TR" ? "Mevcut" : "Available");

  content.innerHTML = `
    <div class="sheetTitle">${title}</div>
    <div class="sheetLine">${avail} ${size} ${cat}</div>
    ${item.desc ? `<div class="sheetLine">${item.desc}</div>` : ""}
    ${item.tags?.length ? `<div class="tags" style="margin-top:10px">${item.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>` : ""}
    ${typeof item.price === "number" ? `<div class="sheetPrice">💳 ${price}</div>` : ""}
  `;

  back.classList.remove("hidden");
  sheet.classList.remove("hidden");
}

function closeSheet(){
  $("#sheetBackdrop").classList.add("hidden");
  $("#sheet").classList.add("hidden");
}

function render(){
  buildChips();

  const list = $("#list");
  const count = $("#count");
  list.innerHTML = "";

  let items = flattenMenu();

  if (state.activeCat !== "all"){
    items = items.filter(x => x.catId === state.activeCat);
  }
  items = items.filter(x => matchesQuery(x, state.q));

  count.textContent =
    (state.lang === "TR"
      ? `${items.length} ürün gösteriliyor`
      : `${items.length} items shown`);

  // Group by category visually
  const groups = new Map();
  for (const it of items){
    if (!groups.has(it.catTitle)) groups.set(it.catTitle, []);
    groups.get(it.catTitle).push(it);
  }

  for (const [catTitle, groupItems] of groups.entries()){
    const h = document.createElement("div");
    h.style.margin = "10px 2px 4px";
    h.style.color = "var(--muted)";
    h.style.fontSize = "12px";
    h.style.fontWeight = "900";
    h.textContent = catTitle;
    list.appendChild(h);

    for (const item of groupItems){
      const card = document.createElement("button");
      card.type = "button";
      card.className = "card" + (item.available === false ? " disabled" : "");
      card.style.textAlign = "left";
      card.style.width = "100%";

      const priceText = (typeof item.price === "number") ? moneyTRY(item.price) : "";
      const sizeText = item.size || (item.available === false ? (state.lang==="TR"?"Mevcut değil":"Unavailable") : "");

      card.innerHTML = `
        <div class="badge">
          <div class="price">${priceText ? priceText.replace(" ₺","") : "—"}</div>
          <div class="size">${priceText ? "₺" : ""}</div>
        </div>
        <div class="body">
          <div class="name">${item.name}</div>
          ${item.desc ? `<div class="desc">${item.desc}</div>` : `<div class="desc">${sizeText}</div>`}
          ${item.tags?.length ? `<div class="tags">${item.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>` : ""}
        </div>
      `;

      card.onclick = () => openSheet(item);
      list.appendChild(card);
    }
  }
}

function init(){
  // Theme
  document.documentElement.dataset.theme = state.theme;

  $("#modeBtn").onclick = () => {
    state.theme = (state.theme === "dark") ? "light" : "dark";
    document.documentElement.dataset.theme = state.theme;
    $("#modeBtn").textContent = state.theme === "dark" ? "🌙" : "☀️";
  };

  // Language
  $("#langBtn").onclick = () => {
    state.lang = (state.lang === "TR") ? "EN" : "TR";
    $("#langBtn").textContent = state.lang;
    render();
  };

  // Search
  $("#search").addEventListener("input", (e) => {
    state.q = e.target.value.trim();
    render();
  });

  $("#clearBtn").onclick = () => {
    state.q = "";
    $("#search").value = "";
    render();
  };

  // Sheet close
  $("#closeSheet").onclick = closeSheet;
  $("#sheetBackdrop").onclick = closeSheet;

  render();
}
init();
