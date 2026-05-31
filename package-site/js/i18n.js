// Tiny i18n applier.
// Usage in markup:
//   <h1 data-i18n="hero.title_a"></h1>
//   <p data-i18n="hero.subtitle_a" data-i18n-html></p>   <!-- allows inline HTML -->
//   <meta data-i18n-attr="content" data-i18n="meta.description">
// Programmatic:  window.t('hero.title_a')  and  window.tList('projects.list')
(function () {
  const supported = ["en", "fr"];
  const params = new URLSearchParams(location.search);
  const fromUrl = params.get("lang");
  const fromStorage = (function () {
    try { return localStorage.getItem("ai-coding.lang"); } catch (_) { return null; }
  })();
  const navLang = (navigator.language || "en").slice(0, 2);
  const lang = supported.includes(fromUrl)
    ? fromUrl
    : supported.includes(fromStorage)
    ? fromStorage
    : supported.includes(navLang)
    ? navLang
    : "en";

  try { localStorage.setItem("ai-coding.lang", lang); } catch (_) {}

  const bundles = { en: window.I18N_EN, fr: window.I18N_FR };
  const dict = bundles[lang] || bundles.en;

  function get(path) {
    return path.split(".").reduce((o, k) => (o == null ? o : o[k]), dict);
  }

  window.t = function (path, fallback) {
    const v = get(path);
    return v == null ? (fallback != null ? fallback : path) : v;
  };
  window.tList = function (path) {
    const v = get(path);
    return Array.isArray(v) ? v : [];
  };
  window.tLang = lang;

  function applyTo(root) {
    root = root || document;
    root.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = get(key);
      if (val == null) return;
      const attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, val);
      } else if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });
  }

  document.documentElement.setAttribute("lang", lang);
  window.applyI18n = applyTo;
  document.addEventListener("DOMContentLoaded", () => applyTo());
})();
