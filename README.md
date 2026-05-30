# AI Coding

Static website for the AI-assisted engineering training package at `ai-coding.adusingi.com`.

## Local preview

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

You can also open `index.html` directly in a browser.

## Translation workflow

The English copy lives in `content/en.js`. To add French later, copy that file to
`content/fr.js`, translate the strings, and switch the script loaded by `index.html`
or add a locale selector.

See `SITE_HANDOFF.md` for deployment notes and tomorrow's review checklist.
