# Variant verdict

> Question being prototyped: *What should the ai-coding.adusingi.com landing page look like?*
>
> Three radically different directions are live. Flip through them in the browser (`←` / `→` or the floating pill), then capture the verdict below before any of the variants get promoted to production.

## Pick a winner

- [ ] **A — Editorial / Essay** (`index.html`)
- [ ] **B — SaaS landing** (`variant-b.html`)
- [ ] **C — Practitioner / Code-editor** (`variant-c.html`)
- [ ] Hybrid — see "Borrowed pieces" below

## Why this one

*(One paragraph. What it does that the others don't.)*

—

## Borrowed pieces

If parts of the losing variants should fold into the winner, list them here.

- e.g. *Take the terminal hero from C, drop it into A above the title.*
- e.g. *Use B's pricing cards instead of A's pricing list.*

—

## Cleanup checklist (after the verdict)

- [ ] Rename the winning variant's HTML to `index.html` (if not already).
- [ ] Delete the other two variant HTML files and their CSS.
- [ ] Delete `js/switcher.js` and its `<script>` tag from `index.html`.
- [ ] Delete `site/NOTES.md` (the question has been answered).
- [ ] Update `README.md` to drop the "Variants" section.
- [ ] Translate `i18n/fr.js` and add a language toggle to the layout.
- [ ] Add real OpenGraph image at `assets/og.png` and set `meta.og_image` in `i18n/en.js`.
- [ ] Deploy to Cloudflare Pages at `ai-coding.adusingi.com`.

## Content edits still to do

*(Things that need a second pass before launch, regardless of which variant wins.)*

- [ ] Confirm pricing for the "1-on-1" tier (current placeholder: "From €200 / per session").
- [ ] Confirm contact email (currently `aimable@adusingi.com` in `i18n/en.js`).
- [ ] Decide whether to link the existing `https://adusingi.com/ai-1on1.html` from the 1-on-1 tier instead of duplicating that offer here.
- [ ] Optional: add testimonials / logos once the Saga workshop runs.
- [ ] Optional: add a French language switch in the header of the chosen variant.
