# Starter Kit — [Team Name]
**Post-session 2 deliverable. Customize for each client.**

---

## 1. Your CLAUDE.md

Create this file at the root of your main project. It gives Claude your team's context — every developer gets consistent answers.

```markdown
# [Project Name]

## Project context
[Short description of what the product does — 2-3 sentences]

## Tech stack
- Backend: [e.g. Python / Django]
- Frontend: [e.g. React / TypeScript]
- Database: [e.g. PostgreSQL]
- Deployment: [e.g. Docker on-premise]

## Architecture
[The main parts of the system — e.g. REST API, processing worker, admin interface]

## Code conventions
- [e.g. Variables named in snake_case]
- [e.g. Unit tests required for every new function]
- [e.g. PR review by at least 1 other developer]

## What we do NOT do
- [e.g. Don't touch network config without checking with Saga]
- [e.g. No deploys on Fridays]

## Glossary
- [Business term 1]: [definition]
- [Business term 2]: [definition]
```

---

## 2. Useful Prompts — Cheatsheet

### Structure an idea before coding

```
You are a senior engineer. Question me about this idea until we've resolved
every unclear point: [describe your idea in 2-3 sentences].
Ask one question at a time. Don't start coding.
```

### Architecture audit

```
Analyze the architecture of this project and generate a complete ARCHITECTURE.md.
Cover: folder structure, main components, database, external integrations, deployment,
security. Don't invent anything — base it only on what you find in the code.
```

### Ask for optimizations after the audit

```
You just generated the ARCHITECTURE.md for our project. Based only on what you saw,
what seems missing, risky, or suboptimal? Give me a prioritized list with an
explanation for each point.
```

### Prototype an idea quickly

```
I want to test an idea before building it. Create a minimal prototype that lets me
validate [specific hypothesis]. Doesn't need to be production-ready — just enough
to see if it holds up.
```

### Generate engineering tickets from a discussion

```
We just defined this feature: [description]. Break it down into independent
engineering tickets, from smallest to largest. For each ticket: title, description,
acceptance criteria, dependencies.
```

---

## 3. 30-Day Plan — Building the Habits

### Week 1 — Foundations
- [ ] Every developer opens Claude Code at least once a day
- [ ] The `CLAUDE.md` is created and committed to the main repo
- [ ] Every developer uses Claude on one real task this week

### Week 2 — Structuring ideas
- [ ] Before coding a new feature, run it through the "structure an idea" prompt
- [ ] Compare: is the result better than before? What's still missing?
- [ ] Update the `CLAUDE.md` with what you learned

### Week 3 — Architecture
- [ ] Run the architecture audit on the main project
- [ ] Ask for optimizations
- [ ] Pick 1 point to address and create the corresponding ticket

### Week 4 — Team
- [ ] Run a 30-min team check-in: what worked? What didn't?
- [ ] Choose 2 prompts to standardize across the whole team
- [ ] Decide on the next skill to acquire (prototyping? automatic tickets?)

---

## 4. Resources

- Claude Code: `npm install -g @anthropic-ai/claude-code`
- Claude Code docs: [docs.anthropic.com](https://docs.anthropic.com)
- To go further: prototyping, ADRs, ticket generation — ask Aimable
