// Renders the portfolio from SITE and GAMES (defined in games.js).
// You normally don't need to edit this file.

(function () {
  const $ = (id) => document.getElementById(id);

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Colorful placeholder for games without a screenshot
  function hue(str) {
    let h = 0;
    for (const ch of str) h = (h * 31 + ch.charCodeAt(0)) % 360;
    return h;
  }
  function initials(title) {
    return title.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
  }
  function badges(game) {
    return (game.platform ? `<span class="platform">${esc(game.platform)}</span>` : "") +
      (game.status ? `<span class="status">${esc(game.status)}</span>` : "");
  }
  function thumb(game) {
    if (game.image) {
      return `<div class="thumb" style="background-image:url('${esc(game.image)}')">
        ${badges(game)}</div>`;
    }
    const h = hue(game.title);
    return `<div class="thumb" style="background:linear-gradient(135deg,hsl(${h},70%,45%),hsl(${(h + 60) % 360},70%,30%))">
      <span class="initials">${esc(game.title)}</span>
      ${badges(game)}</div>`;
  }
  function actions(game) {
    const ext = (url) => /^https?:\/\//.test(url) ? ' target="_blank" rel="noopener"' : "";
    let html = "";
    if (game.play) html += `<a class="btn primary" href="${esc(game.play)}"${ext(game.play)}>▶ Play</a>`;
    if (game.source) html += `<a class="btn ghost" href="${esc(game.source)}"${ext(game.source)}>Source</a>`;
    return html ? `<div class="actions">${html}</div>` : "";
  }
  function tags(game) {
    return (game.tags || []).length
      ? `<div class="tags">${game.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`
      : "";
  }

  function card(game) {
    return `<article class="card">
      ${thumb(game)}
      <div class="card-body">
        <div class="card-title"><h3>${esc(game.title)}</h3>${game.year ? `<span class="year">${esc(game.year)}</span>` : ""}</div>
        <p class="desc">${esc(game.description)}</p>
        ${tags(game)}
        ${actions(game)}
      </div>
    </article>`;
  }

  function featureCard(game) {
    return `<article class="feature-card">
      ${thumb(game)}
      <div class="feature-body">
        <span class="label">★ FEATURED</span>
        <h3>${esc(game.title)}</h3>
        <p class="desc">${esc(game.description)}</p>
        ${tags(game)}
        ${actions(game)}
      </div>
    </article>`;
  }

  // ----- Site info -----
  document.title = `${SITE.name} — Games`;
  $("site-name").textContent = SITE.name;
  $("site-tagline").textContent = SITE.tagline;
  $("site-about").textContent = SITE.about;
  $("footer-name").textContent = SITE.name;
  $("year").textContent = new Date().getFullYear();
  $("nav-github").href = SITE.github;

  let contact = `<a class="btn ghost" href="${esc(SITE.github)}" target="_blank" rel="noopener">GitHub</a>`;
  if (SITE.email) contact += `<a class="btn ghost" href="mailto:${esc(SITE.email)}">Email</a>`;
  $("contact").innerHTML = contact;

  // ----- Stats -----
  const platforms = new Set(GAMES.map((g) => g.platform).filter(Boolean));
  const years = GAMES.map((g) => g.year).filter(Boolean);
  const stats = [
    [GAMES.length, GAMES.length === 1 ? "Game" : "Games"],
    [platforms.size, platforms.size === 1 ? "Platform" : "Platforms"],
  ];
  if (years.length && Math.min(...years) < Math.max(...years)) stats.push([Math.min(...years), "Making games since"]);
  $("stats").innerHTML = stats.map(([n, l]) => `<div class="stat"><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join("");

  // ----- Featured -----
  $("featured").innerHTML = GAMES.filter((g) => g.featured).map(featureCard).join("");

  // ----- Grid + filters -----
  const sorted = [...GAMES].sort((a, b) => (b.year || 0) - (a.year || 0));
  const allTags = [...new Set(GAMES.flatMap((g) => [g.platform, ...(g.tags || [])]).filter(Boolean))];
  let active = "All";

  function render() {
    const list = active === "All" ? sorted : sorted.filter((g) => g.platform === active || (g.tags || []).includes(active));
    $("grid").innerHTML = list.map(card).join("");
    $("empty").hidden = list.length > 0;
    document.querySelectorAll(".filter").forEach((b) => b.classList.toggle("active", b.dataset.tag === active));
  }

  $("filters").innerHTML = ["All", ...allTags]
    .map((t) => `<button class="filter" data-tag="${esc(t)}">${esc(t)}</button>`)
    .join("");
  $("filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    active = btn.dataset.tag;
    render();
  });

  render();
})();
