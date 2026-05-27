// Floating variant switcher per skills/prototype/UI.md.
// Bottom-centre pill with prev / label / next, keyboard arrows, URL persistence.
// Hidden when ?prod=1 is set, so the chosen variant can be previewed clean.
(function () {
  const variants = [
    { key: "a", file: "index.html",      name: "Editorial"    },
    { key: "b", file: "variant-b.html",  name: "SaaS landing" },
    { key: "c", file: "variant-c.html",  name: "Practitioner" },
  ];

  // Identify current variant from the page's filename (?variant=… is not how
  // these are wired — each variant is its own HTML file so the URL is shareable).
  const path = location.pathname.split("/").pop() || "index.html";
  const currentIndex = Math.max(
    0,
    variants.findIndex((v) => v.file === path)
  );

  const params = new URLSearchParams(location.search);
  if (params.get("prod") === "1") return;

  const wrap = document.createElement("div");
  wrap.id = "prototype-switcher";
  wrap.setAttribute("aria-label", "Prototype variant switcher");
  wrap.innerHTML = `
    <style>
      #prototype-switcher {
        position: fixed;
        left: 50%;
        bottom: 18px;
        transform: translateX(-50%);
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 6px 8px;
        background: #111;
        color: #fff;
        border-radius: 999px;
        box-shadow: 0 8px 28px rgba(0,0,0,0.25), 0 1px 0 rgba(255,255,255,0.05) inset;
        font: 500 13px/1 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, system-ui, sans-serif;
        user-select: none;
      }
      #prototype-switcher button {
        appearance: none;
        background: transparent;
        border: 0;
        color: #fff;
        padding: 8px 10px;
        border-radius: 999px;
        cursor: pointer;
        font: inherit;
      }
      #prototype-switcher button:hover { background: rgba(255,255,255,0.08); }
      #prototype-switcher .label {
        padding: 0 10px;
        font-variant-numeric: tabular-nums;
        letter-spacing: 0.02em;
      }
      #prototype-switcher .label .key {
        opacity: 0.6;
        margin-right: 6px;
        text-transform: uppercase;
      }
      #prototype-switcher .hint {
        margin-left: 6px;
        padding-left: 10px;
        border-left: 1px solid rgba(255,255,255,0.18);
        color: rgba(255,255,255,0.55);
        font-size: 11px;
      }
      @media (max-width: 520px) {
        #prototype-switcher .hint { display: none; }
      }
    </style>
    <button data-act="prev" aria-label="Previous variant">←</button>
    <span class="label"><span class="key"></span><span class="name"></span></span>
    <button data-act="next" aria-label="Next variant">→</button>
    <span class="hint">← / →</span>
  `;

  function render() {
    const v = variants[currentIndex];
    wrap.querySelector(".key").textContent = v.key + " —";
    wrap.querySelector(".name").textContent = v.name;
  }

  function go(delta) {
    const n = (currentIndex + delta + variants.length) % variants.length;
    const target = variants[n];
    const q = location.search; // preserve any ?lang=…
    location.href = target.file + q + location.hash;
  }

  function isEditable(el) {
    if (!el) return false;
    const tag = el.tagName;
    return (
      tag === "INPUT" ||
      tag === "TEXTAREA" ||
      el.isContentEditable === true
    );
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(wrap);
    render();
    wrap.querySelector('[data-act="prev"]').addEventListener("click", () => go(-1));
    wrap.querySelector('[data-act="next"]').addEventListener("click", () => go(1));
  });

  document.addEventListener("keydown", (e) => {
    if (isEditable(document.activeElement)) return;
    if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
  });
})();
