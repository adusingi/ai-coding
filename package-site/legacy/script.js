(function () {
  const content = window.AICodingContent;
  if (!content) return;

  document.documentElement.lang = content.lang;
  document.title = content.meta.title;
  const description = document.querySelector("meta[name='description']");
  if (description) description.setAttribute("content", content.meta.description);

  const $ = (selector) => document.querySelector(selector);

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function list(items, className) {
    return `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function renderNav() {
    const nav = $("[data-js='nav']");
    if (!nav) return;
    nav.innerHTML = content.nav
      .map((item) => `<a href="${item.href}">${escapeHtml(item.label)}</a>`)
      .join("");
  }

  function renderHero() {
    const hero = $("[data-js='hero']");
    if (!hero) return;
    hero.innerHTML = `
      <div class="hero-media" aria-hidden="true">
        <img src="assets/workshop-hero.png" alt="" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <p class="eyebrow">${escapeHtml(content.hero.eyebrow)}</p>
        <h1>${escapeHtml(content.hero.title)}</h1>
        <p class="hero-lead">${escapeHtml(content.hero.lead)}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="${content.cta.email}">${escapeHtml(content.hero.primaryCta)}</a>
          <a class="button button-secondary" href="#program">${escapeHtml(content.hero.secondaryCta)}</a>
        </div>
        <div class="proof-strip" aria-label="Package highlights">
          ${content.hero.proof.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        </div>
      </div>
      <div class="hero-register" aria-label="Training package structure">
        <span>audit</span>
        <span>context</span>
        <span>architecture</span>
        <span>prototype</span>
        <span>adopt</span>
      </div>
    `;
  }

  function renderPositioning() {
    const section = $("[data-js='positioning']");
    section.innerHTML = `
      <div class="section-inner two-column">
        <h2>${escapeHtml(content.positioning.title)}</h2>
        <p>${escapeHtml(content.positioning.text)}</p>
      </div>
    `;
  }

  function renderPackage() {
    const section = $("[data-js='package']");
    section.innerHTML = `
      <div class="section-inner">
        <div class="section-heading">
          <p class="eyebrow">Package</p>
          <h2>${escapeHtml(content.package.title)}</h2>
          <p>${escapeHtml(content.package.subtitle)}</p>
        </div>
        <div class="package-grid">
          ${content.package.items
            .map(
              (item) => `
                <article class="package-step">
                  <span>${escapeHtml(item.k)}</span>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.body)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function renderProgram() {
    const section = $("[data-js='program']");
    section.innerHTML = `
      <div class="section-inner">
        <div class="section-heading split-heading">
          <div>
            <p class="eyebrow">Program</p>
            <h2>${escapeHtml(content.program.title)}</h2>
          </div>
          <p>${escapeHtml(content.program.subtitle)}</p>
        </div>
        <div class="timeline">
          ${content.program.sessions
            .map(
              (session) => `
                <article class="timeline-item">
                  <div class="timeline-meta">
                    <span>${escapeHtml(session.label)}</span>
                    <small>${escapeHtml(session.duration)}</small>
                  </div>
                  <div class="timeline-body">
                    <h3>${escapeHtml(session.title)}</h3>
                    ${list(session.bullets, "check-list")}
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function renderLifecycle() {
    const section = $("[data-js='lifecycle']");
    section.innerHTML = `
      <div class="section-inner">
        <div class="section-heading">
          <p class="eyebrow">Lifecycle</p>
          <h2>${escapeHtml(content.lifecycle.title)}</h2>
          <p>${escapeHtml(content.lifecycle.subtitle)}</p>
        </div>
        <div class="lifecycle-flow">
          ${content.lifecycle.phases
            .map(
              ([title, body], index) => `
                <article class="phase" style="--i: ${index}">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${escapeHtml(title)}</h3>
                  <p>${escapeHtml(body)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function renderMemory() {
    const section = $("[data-js='memory']");
    section.innerHTML = `
      <div class="section-inner memory-layout">
        <div>
          <p class="eyebrow">Agent memory</p>
          <h2>${escapeHtml(content.memory.title)}</h2>
          <p>${escapeHtml(content.memory.body)}</p>
        </div>
        <div class="memory-stack" aria-label="Memory layers">
          ${content.memory.layers
            .map((layer, index) => `<span style="--depth: ${index}">${escapeHtml(layer)}</span>`)
            .join("")}
        </div>
      </div>
    `;
  }

  function renderProof() {
    const section = $("[data-js='proof']");
    section.innerHTML = `
      <div class="section-inner">
        <div class="section-heading split-heading">
          <div>
            <p class="eyebrow">Proof</p>
            <h2>${escapeHtml(content.proof.title)}</h2>
          </div>
          <p>${escapeHtml(content.proof.subtitle)}</p>
        </div>
        <div class="proof-layout">
          <div class="project-table" role="table" aria-label="Portfolio project patterns">
            ${content.proof.projects
              .map(
                ([project, pattern]) => `
                  <div class="project-row" role="row">
                    <strong role="cell">${escapeHtml(project)}</strong>
                    <span role="cell">${escapeHtml(pattern)}</span>
                  </div>
                `
              )
              .join("")}
          </div>
          <div class="practice-panel">
            <h3>Practices engineers can reuse</h3>
            ${list(content.proof.practices, "slash-list")}
          </div>
        </div>
      </div>
    `;
  }

  function renderDeliverables() {
    const section = $("[data-js='deliverables']");
    section.innerHTML = `
      <div class="section-inner">
        <div class="section-heading">
          <p class="eyebrow">Deliverables</p>
          <h2>${escapeHtml(content.deliverables.title)}</h2>
        </div>
        <div class="deliverable-grid">
          ${content.deliverables.items
            .map(
              (item) => `
                <article class="deliverable">
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.body)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function renderAudience() {
    const section = $("[data-js='audience']");
    section.innerHTML = `
      <div class="section-inner audience-grid">
        <div>
          <p class="eyebrow">Fit</p>
          <h2>${escapeHtml(content.audience.title)}</h2>
        </div>
        <article>
          <h3>Good fit</h3>
          ${list(content.audience.fit, "check-list")}
        </article>
        <article>
          <h3>Not designed for</h3>
          ${list(content.audience.notFit, "x-list")}
        </article>
      </div>
    `;
  }

  function renderCta() {
    const section = $("[data-js='cta']");
    section.innerHTML = `
      <div class="cta-inner">
        <h2>${escapeHtml(content.cta.title)}</h2>
        <p>${escapeHtml(content.cta.body)}</p>
        <a class="button button-primary" href="${content.cta.email}">${escapeHtml(content.cta.button)}</a>
      </div>
    `;
  }

  function renderFooter() {
    const footer = $("[data-js='footer']");
    footer.innerHTML = `
      <div>
        <strong>${escapeHtml(content.footer.name)}</strong>
        <span>${escapeHtml(content.footer.location)}</span>
      </div>
      <p>${escapeHtml(content.footer.note)}</p>
    `;
  }

  function initHeader() {
    const header = $("[data-js='header']");
    const update = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  renderNav();
  renderHero();
  renderPositioning();
  renderPackage();
  renderProgram();
  renderLifecycle();
  renderMemory();
  renderProof();
  renderDeliverables();
  renderAudience();
  renderCta();
  renderFooter();
  initHeader();
})();
