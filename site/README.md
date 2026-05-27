# ai-coding.adusingi.com

Marketing site for the AI-Assisted Engineering training package.

Static HTML/CSS/JS. No build step. Deploy by uploading this folder to Cloudflare Pages (or any static host) and pointing the domain `ai-coding.adusingi.com` at it.

## How to view

```bash
# Anything that serves the directory works. Examples:
cd site && python3 -m http.server 8080
# then open http://localhost:8080
```

Then open `http://localhost:8080/`.

You can also open `index.html` directly with `file://` — all i18n strings load via local `<script>` tags, not `fetch()`, so it works offline too.

## Variants — pick one

This is a UI prototype following `skills/prototype/UI.md`. Three radically different design directions are live side-by-side. Flip between them with the floating black pill at the bottom-centre of the screen (or `←` / `→` keys):

| Key | File              | Direction                                                                 |
|-----|-------------------|---------------------------------------------------------------------------|
| A   | `index.html`      | **Editorial / Essay.** Cream paper, serif, single column, long-form scroll. Voice-driven. |
| B   | `variant-b.html`  | **SaaS landing.** Dark mode, dense grid, bento patterns, three pricing cards with a featured tier. Conversion-focused. |
| C   | `variant-c.html`  | **Practitioner / Code-editor.** Slate background, monospace headers, terminal hero, projects rendered as JSON file panels. Technical credibility first. |

Same content, same i18n keys, same deliverables — three radically different layouts. The interesting feedback is usually *"I want the hero from C with the pricing from B"* — capture that in `NOTES.md`.

To preview the chosen variant clean (no switcher), append `?prod=1` to the URL.

## i18n

All copy lives in `i18n/en.js` (and a stub `i18n/fr.js` that currently mirrors English). To translate to French later:

1. Open `i18n/fr.js`.
2. Replace the `JSON.parse(JSON.stringify(...))` line with a full literal object of the same shape as `window.I18N_EN`.
3. Translate the string values only — keys must stay identical.
4. Visit any variant with `?lang=fr` to preview.

The selected language is persisted in `localStorage` under `ai-coding.lang`. Language detection: `?lang=…` → localStorage → browser `navigator.language` → default `en`.

## File layout

```
site/
├── index.html          # Variant A (editorial)
├── variant-b.html      # Variant B (SaaS landing)
├── variant-c.html      # Variant C (practitioner)
├── assets/
│   ├── shared.css      # Minimal baseline only
│   ├── variant-a.css
│   ├── variant-b.css
│   └── variant-c.css
├── i18n/
│   ├── en.js           # English strings — the source of truth
│   └── fr.js           # Translation stub
├── js/
│   ├── i18n.js         # Applies strings to [data-i18n] elements
│   └── switcher.js     # Floating prev/next variant switcher
└── NOTES.md            # Capture the verdict here
```

## Deploying

Cloudflare Pages, Netlify, Vercel, GitHub Pages, or plain S3+CloudFront all work. Upload the contents of `site/` as the build output. There is no build step. The chosen variant should be promoted to `index.html` (or `index.html` left as variant A if A wins) and the switcher / unused variants deleted before going live — see `NOTES.md` for the cleanup checklist.

## Next steps

1. **Open the three variants in a browser** and flip between them.
2. **Capture the verdict** in `NOTES.md`: which variant wins, and which pieces (if any) get borrowed from the others.
3. **Promote and clean up:** the winning variant becomes `index.html`, the others get deleted, the switcher gets removed.
4. **Translate to French:** fill in `i18n/fr.js`, then add a small language toggle to the chosen layout.
5. **Deploy** to Cloudflare Pages at `ai-coding.adusingi.com`.
