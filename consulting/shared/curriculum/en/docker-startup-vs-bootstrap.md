# Docker Startup vs. Bootstrap

This document explains a subtle but important production lesson: **starting the app** and **preparing the app** are not always the same responsibility. Mixing them carelessly makes containers fragile.

In plain English:
- **startup** means "bring the service online"
- **bootstrap** means "do setup work so the service has what it needs"

Sometimes those happen together. Sometimes they should be separated.

---

## Diagram 1: Two Different Kinds of Work

<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #080b0f; border: 1px solid #24313b; padding: 40px 30px; margin: 20px 0;">
  <div style="font-family: Georgia, serif; font-size: 28px; font-weight: 400; color: #f2efe6; margin-bottom: 8px; line-height: 0.95;">Startup and Bootstrap are not the same job</div>
  <div style="font-size: 1rem; color: #9aa7a6; margin-bottom: 42px;">One serves traffic. The other prepares the world around it.</div>

  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="width: 48%; background: #111922; border: 1px solid rgba(156, 255, 110, 0.35); padding: 24px; vertical-align: top;">
        <div style="font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 8px;">Startup</div>
        <div style="font-size: 1.05rem; font-weight: 600; color: #9cff6e; margin-bottom: 14px;">Bring the app online</div>
        <div style="font-size: 0.88rem; color: #9aa7a6; line-height: 1.95;">
          Launch web server<br>
          Bind to a port<br>
          Accept requests<br>
          Report healthy status
        </div>
      </td>
      <td style="width: 4%;"></td>
      <td style="width: 48%; background: #111922; border: 1px solid #24313b; padding: 24px; vertical-align: top;">
        <div style="font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 8px;">Bootstrap</div>
        <div style="font-size: 1.05rem; font-weight: 600; color: #f2efe6; margin-bottom: 14px;">Prepare the environment</div>
        <div style="font-size: 0.88rem; color: #9aa7a6; line-height: 1.95;">
          Run migrations<br>
          Seed initial data<br>
          Generate config<br>
          Warm caches<br>
          Create extensions or indexes
        </div>
      </td>
    </tr>
  </table>

  <div style="margin-top: 22px; padding: 16px 20px; border: 1px solid #24313b; background: #0d1117; font-size: 0.86rem; color: #9aa7a6; line-height: 1.8;">
    <strong style="color: #f2efe6;">The danger:</strong> if startup depends on too much bootstrap work, your app becomes unavailable whenever setup logic fails.
  </div>
</div>

---

## Diagram 2: The Fragile Pattern

<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #080b0f; border: 1px solid #24313b; padding: 40px 30px; margin: 20px 0;">
  <div style="font-family: Georgia, serif; font-size: 28px; font-weight: 400; color: #f2efe6; margin-bottom: 8px; line-height: 0.95;">One startup path, too many responsibilities</div>
  <div style="font-size: 1rem; color: #9aa7a6; margin-bottom: 38px;">This is where container startup becomes brittle.</div>

  <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap; justify-content: center;">
    <div style="background: #111922; border: 1px solid #24313b; padding: 14px 18px; color: #f2efe6;">container starts</div>
    <div style="color: #9aa7a6; font-size: 1.3rem;">→</div>
    <div style="background: #111922; border: 1px solid #24313b; padding: 14px 18px; color: #f2efe6;">run entrypoint script</div>
    <div style="color: #9aa7a6; font-size: 1.3rem;">→</div>
    <div style="background: #111922; border: 1px solid #24313b; padding: 14px 18px; color: #f2efe6;">check DB</div>
    <div style="color: #9aa7a6; font-size: 1.3rem;">→</div>
    <div style="background: #111922; border: 1px solid #24313b; padding: 14px 18px; color: #f2efe6;">seed data</div>
    <div style="color: #9aa7a6; font-size: 1.3rem;">→</div>
    <div style="background: #111922; border: 1px solid #e57373; padding: 14px 18px; color: #e57373;">finally start app</div>
  </div>

  <table style="width: 100%; border-collapse: collapse; margin-top: 28px;">
    <tr>
      <td style="width: 50%; padding: 16px 18px; border: 1px solid #e57373; background: rgba(229, 115, 115, 0.06); font-size: 0.86rem; color: #9aa7a6; line-height: 1.8; vertical-align: top;">
        <span style="color: #e57373; font-weight: 600;">What goes wrong:</span><br>
        If any setup step fails, the web server never starts.<br>
        A missing package, bad environment variable, or script bug can take down the whole service.
      </td>
      <td style="width: 50%; padding: 16px 18px; border: 1px solid #24313b; background: #0d1117; font-size: 0.86rem; color: #9aa7a6; line-height: 1.8; vertical-align: top;">
        <span style="color: #f2efe6; font-weight: 600;">The hidden cost:</span><br>
        You no longer have "web server reliability." You have "web server plus every bootstrap task" reliability.
      </td>
    </tr>
  </table>
</div>

### Why teams fall into this pattern

Because it feels convenient:
- "just run migration before startup"
- "just seed if empty"
- "just create the extension if missing"

Each one sounds small by itself. But together they build a long startup chain where every link must work.

---

## Diagram 3: The Stronger Pattern

<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #080b0f; border: 1px solid #24313b; padding: 40px 30px; margin: 20px 0;">
  <div style="font-family: Georgia, serif; font-size: 28px; font-weight: 400; color: #f2efe6; margin-bottom: 8px; line-height: 0.95;">Let startup stay small</div>
  <div style="font-size: 1rem; color: #9aa7a6; margin-bottom: 38px;">Separate "serve traffic" from "prepare the system" whenever setup gets non-trivial.</div>

  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="width: 48%; background: #111922; border: 1px solid rgba(156, 255, 110, 0.35); padding: 22px; vertical-align: top;">
        <div style="font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 8px;">App container</div>
        <div style="font-size: 1rem; font-weight: 600; color: #9cff6e; margin-bottom: 12px;">Does the minimum</div>
        <div style="font-size: 0.86rem; color: #9aa7a6; line-height: 1.9;">
          start server<br>
          expose port<br>
          respond to health check
        </div>
      </td>
      <td style="width: 4%;"></td>
      <td style="width: 48%; background: #111922; border: 1px solid #24313b; padding: 22px; vertical-align: top;">
        <div style="font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 8px;">Bootstrap job / deploy step</div>
        <div style="font-size: 1rem; font-weight: 600; color: #f2efe6; margin-bottom: 12px;">Handles setup separately</div>
        <div style="font-size: 0.86rem; color: #9aa7a6; line-height: 1.9;">
          run migrations<br>
          seed data<br>
          create DB extensions<br>
          repair or rerun manually if needed
        </div>
      </td>
    </tr>
  </table>

  <div style="margin-top: 22px; padding: 16px 20px; border-left: 3px solid #9aa7a6; color: #9aa7a6; font-size: 0.86rem; line-height: 1.8;">
    Separating bootstrap work does not mean it is unimportant. It means its failures should be easier to see, rerun, and debug without taking down the web server itself.
  </div>
</div>

---

## When Keeping Bootstrap in Startup is Fine

Not every pre-start task needs to be separated.

Keeping setup in startup is often reasonable when the task is:
- very fast
- deterministic
- required every single time
- easy to support in the final runtime image
- unlikely to fail for external reasons

Examples:
- generate a tiny config file
- confirm a required directory exists
- perform a fast local sanity check

The rule is not "never do bootstrap in startup."  
The rule is "keep startup small and reliable."

---

## When Bootstrap Should Become a Separate Job

You should strongly consider separating it when the task:
- needs extra dependencies not otherwise required by the app
- touches the database in non-trivial ways
- may be slow
- may fail due to networking or environment issues
- is something you may want to rerun manually
- is logically a deployment step, not a request-serving step

Examples:
- database migrations
- initial seeding
- index creation
- extension installation
- large data imports

---

## A Real Example

In one production setup, a Next.js container did this:

- container starts
- `entrypoint.sh` runs
- `check-and-seed.ts` runs
- maybe `seed.ts` runs
- only then does `node server.js` start

That became fragile because:
- the final runtime image did not include everything those scripts needed
- the health check depended on a tool that was missing from the image
- one script behaved differently in the real container runtime than expected

So the lesson was not:

> "Never run scripts before startup."

The lesson was:

> "If startup includes bootstrap work, the final runtime image must fully support that work. Otherwise the service is only as reliable as the weakest setup step."

---

## Diagram 4: A Practical Decision Rule

<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #080b0f; border: 1px solid #24313b; padding: 40px 30px; margin: 20px 0;">
  <div style="font-family: Georgia, serif; font-size: 28px; font-weight: 400; color: #f2efe6; margin-bottom: 8px; line-height: 0.95;">Ask one question</div>
  <div style="font-size: 1rem; color: #9aa7a6; margin-bottom: 36px;">If this step fails, should the web server still be allowed to come online?</div>

  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="width: 50%; background: #111922; border: 1px solid rgba(156, 255, 110, 0.35); padding: 22px; vertical-align: top;">
        <div style="font-size: 0.9rem; color: #9cff6e; font-weight: 600; margin-bottom: 10px;">If the answer is "yes"</div>
        <div style="font-size: 0.86rem; color: #9aa7a6; line-height: 1.85;">
          The step probably should not block startup.<br>
          Make it a separate job, a deploy step, or a manual repair path.
        </div>
      </td>
      <td style="width: 50%; background: #111922; border: 1px solid #24313b; padding: 22px; vertical-align: top;">
        <div style="font-size: 0.9rem; color: #f2efe6; font-weight: 600; margin-bottom: 10px;">If the answer is "no"</div>
        <div style="font-size: 0.86rem; color: #9aa7a6; line-height: 1.85;">
          The step may belong in startup — but then your runtime image, health checks, and observability must fully support it.
        </div>
      </td>
    </tr>
  </table>
</div>

---

## Rules Worth Remembering

- Startup and bootstrap are different responsibilities even when they happen in the same script.
- Every extra responsibility attached to startup makes the service more fragile.
- If a script runs from `CMD` or `ENTRYPOINT`, treat it as production code.
- Separate bootstrap tasks when they are large, failure-prone, or operational in nature.
- If you keep bootstrap in startup, test the real container startup path, not just the build.

---

## Summary

Containers do not fail only because the app code is broken. They also fail when too much setup logic is attached to startup.

The safest mindset is:

- let startup bring the service online
- let bootstrap prepare the system
- combine them only when the work is truly small, necessary, and fully supported by the runtime image
