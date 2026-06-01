// Floating variant switcher per skills/prototype/UI.md (sub-shape B).
// Three variants of the Mobayilo Academy site, switchable from a bottom-center pill.
(function () {
  if (document.getElementById('ps-bar-mounted')) return;

  var variants = [
    { key: 'A', name: 'Terminal',  href: 'variant-a.html' },
    { key: 'B', name: 'Logbook',   href: 'variant-b.html' },
    { key: 'C', name: 'Manifesto', href: 'variant-c.html' }
  ];

  var current = (window.__variant || 'A').toUpperCase();
  var idx = Math.max(0, variants.findIndex(function (v) { return v.key === current; }));

  var css = '\
  #ps-bar { position:fixed; left:50%; bottom:18px; transform:translateX(-50%); z-index:9999;\
    display:flex; align-items:center; gap:8px; padding:8px 10px;\
    background:rgba(10,10,10,.92); color:#d6e9d6;\
    border:1px solid #2a3b32; border-radius:999px;\
    font: 600 12px/1 ui-monospace, "JetBrains Mono", Menlo, monospace;\
    backdrop-filter: blur(8px); box-shadow:0 10px 30px rgba(0,0,0,.5); }\
  #ps-bar button { background:transparent; color:#d6e9d6; border:0; cursor:pointer;\
    padding:6px 10px; border-radius:999px; font:inherit; }\
  #ps-bar button:hover { background:#1a2620; }\
  #ps-bar .label { padding:4px 10px; color:#3ddc84; letter-spacing:.06em;\
    border-left:1px solid #2a3b32; border-right:1px solid #2a3b32; }\
  #ps-bar .label .dim { color:#6b8a78; margin-left:8px; font-weight:500; }\
  #ps-bar .hint { color:#6b8a78; padding:0 8px 0 4px; font-weight:500; }\
  ';
  var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);

  var host = document.getElementById('ps-bar') || (function () {
    var d = document.createElement('div'); d.id = 'ps-bar'; document.body.appendChild(d); return d;
  })();
  host.id = 'ps-bar';
  host.setAttribute('aria-label', 'Prototype variant switcher');
  host.innerHTML = '';

  function go(delta) {
    var n = (idx + delta + variants.length) % variants.length;
    window.location.href = variants[n].href;
  }

  var prev = document.createElement('button'); prev.textContent = '←'; prev.title = 'Previous variant';
  prev.onclick = function () { go(-1); };
  var label = document.createElement('div'); label.className = 'label';
  label.innerHTML = variants[idx].key + ' <span class="dim">' + variants[idx].name + '</span>';
  var next = document.createElement('button'); next.textContent = '→'; next.title = 'Next variant';
  next.onclick = function () { go(1); };
  var hint = document.createElement('span'); hint.className = 'hint'; hint.textContent = 'prototype';

  host.appendChild(prev); host.appendChild(label); host.appendChild(next); host.appendChild(hint);
  host.id = 'ps-bar';
  var marker = document.createElement('span'); marker.id = 'ps-bar-mounted'; marker.style.display = 'none';
  document.body.appendChild(marker);

  document.addEventListener('keydown', function (e) {
    var tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target && e.target.isContentEditable)) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
  });
})();
