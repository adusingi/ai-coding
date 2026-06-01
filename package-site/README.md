# ai-coding.adusingi.com

Marketing site for the AI-Assisted Engineering training package.

Static HTML / CSS / vanilla JS. No build step.

## Local preview

```bash
cd site && python3 -m http.server 8080
# then open http://localhost:8080
```

You can also open `index.html` directly with `file://` — all strings load via local `<script>` tags, not `fetch()`.

## i18n

All copy lives in `i18n/en.js`. A stub `i18n/fr.js` currently mirrors English so the site renders without missing keys.

To translate to French:

1. Open `i18n/fr.js`.
2. Replace the one-line `JSON.parse(JSON.stringify(...))` body with a full literal object matching the shape of `window.I18N_EN`.
3. Translate the string values only — keys must stay identical.
4. Visit `index.html?lang=fr` to preview.

Language detection: `?lang=…` → `localStorage` (`ai-coding.lang`) → `navigator.language` → default `en`.

## File layout

```
site/
├── index.html          # The page
├── assets/
│   ├── shared.css      # Minimal baseline
│   └── style.css       # Theme + layout
├── i18n/
│   ├── en.js           # English strings — source of truth
│   └── fr.js           # Translation stub
└── js/
    └── i18n.js         # Applies strings to [data-i18n] elements
```

## Deploy

Cloudflare Pages, Netlify, Vercel, GitHub Pages, or S3 + CloudFront all work. Upload the contents of `site/` as the build output and point `ai-coding.adusingi.com` at it. No build command needed.

## Still to do before launch

- Confirm the placeholder pricing for the 1-on-1 tier (`pricing.tier_1_price` in `i18n/en.js` — currently "From €200 / per session").
- Confirm the contact email (`cta.email` in `i18n/en.js` — currently `aimable@adusingi.com`).
- Decide whether the 1-on-1 tier should link to the existing `https://adusingi.com/ai-1on1.html` instead of being a tier here.
- Translate `i18n/fr.js` and (optionally) add a header language toggle.
- Add a real OpenGraph image at `assets/og.png` and reference it from `meta.og_image` in `i18n/en.js`.
- Optional: add testimonials once the Saga workshop runs.
