# Content and Translation

The site is English-first. All public copy is centralized in `content/en.js`.

## Add French later

1. Copy `content/en.js` to `content/fr.js`.
2. Translate string values only.
3. Keep object keys, arrays, and URLs unchanged unless the structure changes.
4. In `index.html`, replace:

```html
<script src="content/en.js"></script>
```

with:

```html
<script src="content/fr.js"></script>
```

For a bilingual launch, keep both files and add a tiny language switcher that swaps the content script by path or deploys one file per locale route.

## Source material used

- `docs/en/proposal-saga.md`: package structure, session flow, deliverables
- `docs/en/pre-session-setup.md`: async setup before session 1
- `docs/en/session-1-questionnaire.md`: audit framing and team-fit questions
- `docs/en/starter-kit-template.md`: deliverables and 30-day adoption plan
- `docs/en/ai-agent-memory.md`: memory/context positioning
- `docs/en/shipping-software.md`: software lifecycle framing
- `PORTFOLIO_ANALYSIS.md`: proof points from production projects
- `skills/prototype/`: prototype practice and workflow positioning
