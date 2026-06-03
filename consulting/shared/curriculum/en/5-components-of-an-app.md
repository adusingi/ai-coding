# 5 Components of an App

This document explains the difference between a **Site** (static files) and an **App** (files plus five backend components), and breaks down each component's purpose, when you need it, and the common technologies used.

---

## Diagram 1: Site vs. App

<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #080b0f; border: 1px solid #24313b; padding: 40px 30px; margin: 20px 0;">
  <div style="font-family: Georgia, serif; font-size: 28px; font-weight: 400; color: #f2efe6; margin-bottom: 8px; line-height: 0.95;">What turns a Site into an App?</div>
  <div style="font-size: 1rem; color: #9aa7a6; margin-bottom: 50px;">A Site is just files. An App adds five backend powers.</div>
  <table style="margin: 0 auto; border-collapse: collapse;">
    <tr>
      <td style="vertical-align: top; padding: 0 30px; text-align: center;">
        <div style="font-family: Georgia, serif; font-size: 1.4rem; font-weight: 400; color: #f2efe6; margin-bottom: 16px;">Site</div>
        <div style="background: #111922; border: 1px solid #24313b; padding: 18px 28px; text-align: center; min-width: 180px; margin-bottom: 12px; font-weight: 600; color: #f2efe6;">Files</div>
        <div style="background: #111922; border: 1px solid #24313b; padding: 18px 28px; text-align: center; min-width: 180px; margin-bottom: 12px; font-weight: 600; color: #f2efe6;">HTML / CSS / JS</div>
        <div style="background: #111922; border: 1px solid #24313b; padding: 18px 28px; text-align: center; min-width: 180px; margin-bottom: 12px; font-weight: 600; color: #f2efe6;">Images / Fonts</div>
      </td>
      <td style="vertical-align: middle; padding: 0 20px; color: #9aa7a6; font-size: 2rem; text-align: center;">→</td>
      <td style="vertical-align: top; padding: 0 30px; text-align: center;">
        <div style="font-family: Georgia, serif; font-size: 1.4rem; font-weight: 400; color: #f2efe6; margin-bottom: 16px;">App</div>
        <div style="background: #111922; border: 1px solid #24313b; padding: 18px 28px; text-align: center; min-width: 180px; margin-bottom: 12px; font-weight: 600; color: #f2efe6;">Files</div>
        <div style="font-size: 1.4rem; color: #9aa7a6; font-weight: 600; text-align: center; margin-bottom: 12px;">+</div>
        <div style="background: rgba(156, 255, 110, 0.08); border: 1px solid rgba(156, 255, 110, 0.45); padding: 18px 28px; text-align: center; min-width: 180px; margin-bottom: 12px; font-weight: 600; color: #9cff6e;">Auth</div>
        <div style="background: rgba(156, 255, 110, 0.08); border: 1px solid rgba(156, 255, 110, 0.45); padding: 18px 28px; text-align: center; min-width: 180px; margin-bottom: 12px; font-weight: 600; color: #9cff6e;">Database</div>
        <div style="background: rgba(156, 255, 110, 0.08); border: 1px solid rgba(156, 255, 110, 0.45); padding: 18px 28px; text-align: center; min-width: 180px; margin-bottom: 12px; font-weight: 600; color: #9cff6e;">Storage</div>
        <div style="background: rgba(156, 255, 110, 0.08); border: 1px solid rgba(156, 255, 110, 0.45); padding: 18px 28px; text-align: center; min-width: 180px; margin-bottom: 12px; font-weight: 600; color: #9cff6e;">Cron Jobs</div>
        <div style="background: rgba(156, 255, 110, 0.08); border: 1px solid rgba(156, 255, 110, 0.45); padding: 18px 28px; text-align: center; min-width: 180px; margin-bottom: 12px; font-weight: 600; color: #9cff6e;">APIs</div>
      </td>
    </tr>
  </table>
</div>

### The Key Difference

|  | Site | App |
|---|---|---|
| **What it is** | A collection of static files served to the browser | Files + backend services that handle data, users, files, scheduling, and integrations |
| **Can it remember users?** | No — every visitor is anonymous | Yes — via **Auth** |
| **Can it save data?** | No — data is lost on refresh | Yes — via **Database** |
| **Can users upload files?** | No — files must be hosted elsewhere | Yes — via **Storage** |
| **Can it run tasks automatically?** | No — everything requires a click | Yes — via **Cron Jobs** |
| **Can it talk to other services?** | Limited — client-side only | Yes — via **APIs** |

> 💡 **The Rule of Thumb**: If your project only needs to *show* information, it's a **Site**. If it needs to *remember*, *process*, or *connect*, it's an **App**.

---

## Diagram 2: The 5 Components

<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #080b0f; border: 1px solid #24313b; padding: 40px 30px; margin: 20px 0;">
  <div style="font-family: Georgia, serif; font-size: 28px; font-weight: 400; color: #f2efe6; margin-bottom: 8px; line-height: 0.95;">The 5 Components Every App Needs</div>
  <div style="font-size: 1rem; color: #9aa7a6; margin-bottom: 50px;">What they do, when you need them, and the tools to build them.</div>
  <table style="width: 100%; border-collapse: collapse; min-width: 900px;">
    <thead>
      <tr>
        <th style="text-align: left; padding: 14px 18px; font-size: 0.8rem; font-weight: 600; color: #9aa7a6; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 2px solid #38505b;">Component</th>
        <th style="text-align: left; padding: 14px 18px; font-size: 0.8rem; font-weight: 600; color: #9aa7a6; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 2px solid #38505b;">Simple Explanation</th>
        <th style="text-align: left; padding: 14px 18px; font-size: 0.8rem; font-weight: 600; color: #9aa7a6; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 2px solid #38505b;">When You Need This</th>
        <th style="text-align: left; padding: 14px 18px; font-size: 0.8rem; font-weight: 600; color: #9aa7a6; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 2px solid #38505b;">Common Methods / Types</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #24313b;">
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #f2efe6; font-weight: 600; white-space: nowrap; width: 120px;">Auth<br><span style="font-size:0.8rem; font-weight:400; color:#9aa7a6;">(Sign in)</span></td>
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #c9c1ac;">Verifying who someone is before letting them access your app.</td>
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #c9c1ac;">Any app with user accounts, login pages, or personal data (social media, banking, e-commerce).</td>
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #c9c1ac;">
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">OAuth 2.0</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">JWT</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">Session Cookies</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">SSO / SAML</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">MFA / 2FA</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">Magic Links</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">LDAP</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">API Keys</span>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #24313b;">
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #f2efe6; font-weight: 600; white-space: nowrap; width: 120px;">Database</td>
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #c9c1ac;">An organized place to save and retrieve information that persists even when your app restarts.</td>
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #c9c1ac;">Apps that need to remember things: user profiles, posts, orders, messages, game scores.</td>
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #c9c1ac;">
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">PostgreSQL</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">MySQL</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">SQLite</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">MongoDB</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">Redis</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">DynamoDB</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">Neo4j</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">InfluxDB</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">Elasticsearch</span>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #24313b;">
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #f2efe6; font-weight: 600; white-space: nowrap; width: 120px;">Storage</td>
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #c9c1ac;">Where you keep files like images, videos, PDFs, and other uploads from users.</td>
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #c9c1ac;">Apps with profile pictures, file sharing, photo galleries, document uploads, media platforms.</td>
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #c9c1ac;">
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">AWS S3</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">GCS</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">Azure Blob</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">CDN</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">Block Storage</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">NAS</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">Local Filesystem</span>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #24313b;">
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #f2efe6; font-weight: 600; white-space: nowrap; width: 120px;">Cron Jobs</td>
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #c9c1ac;">Automatic tasks that run on a schedule without you clicking anything.</td>
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #c9c1ac;">Sending daily emails, clearing old data, generating reports, backing up databases, checking for updates.</td>
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #c9c1ac;">
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">Cron Expressions</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">AWS Lambda</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">Celery</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">Bull</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">Airflow</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">Systemd Timers</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">Scheduled Functions</span>
        </td>
      </tr>
      <tr>
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #f2efe6; font-weight: 600; white-space: nowrap; width: 120px;">APIs</td>
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #c9c1ac;">A way for different apps or services to talk to each other and share data.</td>
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #c9c1ac;">Connecting to payment processors, weather data, maps, social media, sending emails, AI services.</td>
        <td style="padding: 18px; vertical-align: top; font-size: 0.9rem; line-height: 1.6; color: #c9c1ac;">
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">REST</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">GraphQL</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">gRPC</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">WebSockets</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">Webhooks</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">tRPC</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">SOAP</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">JSON-RPC</span>
          <span style="display: inline-block; border: 1px solid rgba(69, 230, 199, 0.35); background: rgba(13, 19, 24, 0.75); padding: 3px 10px; font-size: 0.78rem; font-weight: 500; color: #45e6c7; white-space: nowrap; margin: 0 6px 6px 0;">SSE</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

---

## How the Components Work Together

Think of an **App** as a restaurant:

| Component | Restaurant Analogy |
|---|---|
| **Files** | The dining room — what customers see and interact with. |
| **Auth** | The bouncer / host stand — checks reservations and IDs before letting anyone in. |
| **Database** | The kitchen's recipe book — remembers every order, preference, and ingredient count. |
| **Storage** | The walk-in freezer — stores ingredients (files) that don't fit on the counter. |
| **Cron Jobs** | The early-morning prep crew — arrives before opening to chop vegetables and set tables. |
| **APIs** | The delivery service — connects your kitchen to suppliers, payment terminals, and review platforms. |

---

## Summary

A **Site** is just the front door. An **App** is the whole building — with security (Auth), memory (Database), a warehouse (Storage), automatic staff (Cron Jobs), and phone lines to the outside world (APIs).

When you're planning a project, ask yourself: *"Does this need to remember users, save data, handle uploads, run tasks automatically, or talk to other services?"*

If the answer is **yes** to any of those, you're building an **App** — and you'll need to design for all five components.
