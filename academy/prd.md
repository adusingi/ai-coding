# PRD — Mobayilo AI Academy: Website & Application Form

**Domain:** mobayilo.com  
**Status:** Ready for implementation  
**Synthesized from:** Grill session on 2026-05-31

---

## Problem Statement

Young engineers in Rwanda can write code but have never shipped a working product to real users. Unemployment is high, and the ambition to build is there — but the path from "I can code" to "I shipped something real that someone uses" remains largely unstructured.

Smartphone penetration is now widespread across Rwanda, including in rural areas. The opportunity to build digital solutions for Rwandan problems — designed with Rwanda's market, culture, and language in mind — is larger than it has ever been. The thesis is not about comparing Rwanda to the west or east. It is about Rwandan engineers solving Rwandan problems on their own terms, measuring progress against their own previous work, not against someone else's ecosystem.

Mobayilo AI Academy exists because Aimable believes in this: train engineers to build with AI, hold them accountable to a real Rwandan user, and let the work speak for itself.

---

## Solution

**Mobayilo AI Academy** — an intensive, remote-first training program for Rwandan engineers that teaches them to build software with AI across the full SDLC, then selects the strongest project ideas for a funded 3-month product development phase.

"Mobayilo" means *mobile telephone* in Kinyarwanda — the primary device through which rural Rwandans access digital services. The name signals the mission before any copy is read.

**Program arc:**
1. **Weeks 1–8 (Training):** Intensive remote training in AI-assisted engineering — Prototype → Design → Build → Deploy → Support — using Claude Code and the full SDLC with AI. English instruction.
2. **Gate (Project Selection):** Participants submit a field visit report and proof of at least one real conversation with a future user. The Kigali-based partner evaluates ideas; Aimable confirms. Selection is fluid — idea quality and evidence determine who passes, not a fixed quota.
3. **Months 1–3 (Product Phase):** Selected participants receive training valued at $500, plus a $20/month Claude or Codex Pro subscription for 3 months to access AI tools while building a working product beyond a basic MVP.
4. **After:** Products enter the Academy portfolio, promoted to investors, NGOs, and government programs. Graduates become mentors for the next cohort.

**Key design constraints baked into the program:**
- The user must exist before the product does.
- Products built for rural Rwandan users must solve the Kinyarwanda language gap by design — voice, USSD, SMS, or Kinyarwanda-language interfaces are expected, not optional afterthoughts.
- Cohort 1: 5–8 participants, self-financed. Subsequent cohorts: grant-funded (OpenAI, Anthropic programs).

**Immediate deliverable:** The mobayilo.com website with application form to launch cohort 1.

---

## User Stories

### Prospective Applicant
1. As a Rwandan engineer who has never shipped a product, I want to read what Mobayilo AI Academy expects from me, so that I can decide if I'm ready to apply.
2. As an applicant, I want to understand the full program arc (training → gate → product phase), so that I know what I'm committing to before I apply.
3. As an applicant, I want to see that the application is inclusive (more detail = more chance), so that I feel encouraged to write thoroughly rather than filtered out.
4. As an applicant, I want to submit my application directly on the website, so that the process is simple and doesn't require email back-and-forth.
5. As an applicant, I want to know what a strong application looks like, so that I can write the best answer I can.
6. As a Rwandan student who has been coding but is unemployed, I want to understand the Academy's mission is entrepreneurship, so that I know this is about building real products, not just adding a certificate to my CV.
7. As someone who speaks English as a second language, I want the application to feel approachable, so that I'm not eliminated by writing style before the content is evaluated.
8. As a potential applicant from outside Kigali, I want to confirm the training is fully remote, so that I know geography isn't a barrier to applying.

### Aimable (Academy Director)
9. As the Academy director, I want to receive all applications in one place with the full answers, so that I can review them efficiently from Japan.
10. As the director, I want the application to surface problem-awareness and commitment naturally, so that I spend less time in interviews filtering obvious mismatches.
11. As the director, I want the website to communicate the mission without overselling, so that only candidates who genuinely align with the Africa-first premise apply.
12. As the director, I want the site to work on mobile, so that applicants in Rwanda who access the internet primarily via smartphone can apply without friction.

### Kigali Partner
13. As the Kigali-based partner, I want to understand my role in the program (primary project selector), so that I know what I'm committing to when I support the Academy.
14. As the Kigali partner, I want to be able to share the Academy website with my education network credibly, so that the candidates I refer arrive with accurate expectations.

### Future Cohort (Post-Launch)
15. As a cohort 1 graduate who has been selected for the product phase, I want visibility into how the Academy will promote my product, so that I understand the value of completing the full program.
16. As a cohort 1 graduate, I want to know my role as mentor for cohort 2, so that I understand the work contribution commitment I'm making by accepting the pro subscription.

---

## Implementation Decisions

### Website (mobayilo.com)

- **Stack:** Static site. No backend required at launch. Same approach as the existing ai-coding site (vanilla HTML/CSS/JS) for simplicity and fast deployment.
- **Language:** English only at launch. No i18n system needed for v1 — unlike the B2B site which has French, the Academy is English-instruction and English-application.
- **Mobile-first layout:** All sections must render cleanly on a 375px viewport. Applicants in Rwanda are primarily mobile users.
- **Sections:**
  1. **Hero** — Name, one-line mission, primary CTA ("Apply to cohort 1")
  2. **Mission** — The Africa-first premise. "The user must exist before the product does." Why Kinyarwanda matters. Why rural.
  3. **Program** — Three-phase arc: Training (6–8 weeks) → Gate → Product phase (3 months). What each phase demands and delivers.
  4. **What we teach** — The SDLC with AI: Prototype → Design → Build → Deploy → Support. Not prompt tips — engineering discipline.
  5. **Application** — The form (see below) with a framing statement: "There are no trick questions. The more concrete your answers, the stronger your application."
  6. **Footer** — Aimable Dusingizimana, mobayilo.com, contact.

### Application Form

Four questions. All free-text. No word limits, but guidance toward concrete answers.

**Question 1 — The problem**
> What problem have you personally observed in your community that technology hasn't solved yet?
> *Be specific. Name the place, the situation, the people affected.*

**Question 2 — The person**
> Who suffers from this problem? Describe one specific person — not a category of people.
> *A name, an age, a situation. If you've met them, tell us.*

**Question 3 — Something you've built**
> Share something you've built — a GitHub repo, a deployed project, anything that runs.
> *We're not evaluating code quality. We want proof you can ship something that works.*

**Question 4 — The commitment**
> What are you willing to give up for 6–8 weeks to focus on this program?
> *Be honest. We want to know you've thought about the real cost.*

**Form framing note (displayed above the questions):**
> "We are not looking for the right words. We are looking for real answers. The more detail and honesty you bring to these questions, the stronger your application. Nothing here eliminates you — everything here helps us understand you."

**Form submission:** Email delivery to Aimable (no database required for cohort 1). Tally, Typeform, or a simple `mailto:` form with `action` pointing to a form backend (e.g., Formspree) — whichever is fastest to ship.

### Social PR Launch
- Announce on LinkedIn and X simultaneously with the site launch.
- Message: mission-first, not feature-first. Lead with the Africa premise and the Kinyarwanda constraint. The word "Mobayilo" and its meaning should appear in the first sentence.
- Tag education contacts in Rwanda. Share in Kigali tech and university community channels.

---

## Testing Decisions

Since this is a static marketing site with a form:

- **Mobile rendering:** Test at 375px (iPhone SE), 390px (iPhone 14), and 412px (Android common) before launch.
- **Form submission:** End-to-end test — submit a real application through the form and confirm Aimable receives it at the correct address with all four answers intact.
- **Link check:** All anchor links (#sections) resolve correctly on both desktop and mobile.
- **No automated test suite needed** for v1. Manual review before launch is sufficient given the cohort-1 scope.

---

## Out of Scope

- **French translation** — English only for v1.
- **Applicant dashboard or login** — Not needed for 5–8 applicants.
- **Payment processing** — No tuition at launch; self-financed.
- **LMS or curriculum delivery platform** — Training is delivered remotely via sessions, not a self-serve platform.
- **Portfolio section** — Built after cohort 1 graduates produce products.
- **Mentor matching system** — Manual for cohort 2; automated when cohorts scale.
- **Grant application materials** (OpenAI, Anthropic) — Separate deliverable after cohort 1 launches.

---

## Further Notes

- **The Kigali partner role** is operationally critical for project selection and local credibility, but is not yet formally committed. The website and social launch will help signal seriousness and make that conversation easier.
- **The rural digitalization constraint** (products must solve the Kinyarwanda language gap) should appear explicitly in the program description on the site — not as a rule, but as a design challenge the Academy is proud of. It differentiates Mobayilo from every generic AI bootcamp.
- **Grant targets post cohort-1:** OpenAI and Anthropic both have active programs for education and access initiatives. The cohort 1 results (products built, users reached, rural impact) are the primary evidence for those applications.
- **Success metrics for cohort 1:** Not "X participants enrolled" — but "Y participants reached the project gate with a real user conversation documented" and "Z products deployed to a real Rwandan user by end of month 3."
