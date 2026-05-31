# Site Handoff

## What this site is

`ai-coding.adusingi.com` is a dedicated English landing site for Aimable's AI-assisted engineering training package.

The offer is framed as a practical team adoption package:

- AI coding training for engineering teams
- Two live sessions plus async setup and real-task homework
- Team `CLAUDE.md` as the shared context layer
- Architecture audit workflow
- Prototype-before-commitment workflow
- Starter kit and 30-day adoption plan

## Design direction

The visual direction is editorial and engineering-focused: restrained, serious, textured, and workshop-oriented. It avoids generic AI imagery and uses:

- `assets/workshop-hero.png` for the main engineering-workshop hero
- `assets/brand-landscape.jpg` from `/Users/mac3jis/Documents/Code/p/page branding/ai-coding` as a subtle branded CTA backdrop

## Deployment assumptions

The site is static and can be deployed from the repository root.

Included deployment files:

- `CNAME` for `ai-coding.adusingi.com`
- `robots.txt`
- `sitemap.xml`
- `404.html`

Local preview:

```bash
python3 -m http.server 4173
```

Direct file opening also works:

```text
index.html
```

## Translation readiness

Public copy lives in `content/en.js`. The rendering code in `script.js` reads structured content instead of hard-coding section copy.

For French, copy `content/en.js` to `content/fr.js` and translate values. See `content/README.md`.

## Tomorrow review checklist

- Confirm the public positioning: "AI coding training for engineering teams" versus a more founder-oriented phrase.
- Decide whether to publish pricing publicly or keep the CTA as a discussion call.
- Replace `mailto:aimable@adusingi.com` if a TidyCal link should be the primary CTA.
- Review the generated hero image for brand fit.
- If deploying on Cloudflare Pages instead of GitHub Pages, keep `CNAME` harmless or remove it depending on the deployment flow.
