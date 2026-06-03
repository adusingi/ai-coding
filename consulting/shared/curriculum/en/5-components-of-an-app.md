# 5 Components of an App

This document explains the difference between a **Site** (static files) and an **App** (files plus five backend components), and breaks down each component's purpose, when you need it, and the common technologies used.

---

## Diagram 1: Site vs. App

<style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');

  .sa-container {
    font-family: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    background: #080b0f;
    border: 1px solid #24313b;
    padding: 40px 30px;
    margin: 20px 0;
    overflow-x: auto;
  }
  .sa-title {
    font-family: "Instrument Serif", Georgia, serif;
    font-size: clamp(28px, 5vw, 40px);
    font-weight: 400;
    color: #f2efe6;
    margin-bottom: 8px;
    line-height: 0.95;
  }
  .sa-subtitle {
    font-size: 1rem;
    color: #9aa7a6;
    margin-bottom: 50px;
  }
  .sa-compare {
    display: flex;
    justify-content: center;
    gap: 60px;
    min-width: 600px;
  }
  .sa-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .sa-heading {
    font-family: "Instrument Serif", Georgia, serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: #f2efe6;
    margin-bottom: 8px;
  }
  .sa-box {
    padding: 18px 28px;
    text-align: center;
    min-width: 180px;
  }
  .sa-box.files {
    background: #111922;
    border: 1px solid #24313b;
    font-weight: 600;
    color: #f2efe6;
  }
  .sa-box.component {
    background: #0d1318;
    border: 1px solid #24313b;
    font-weight: 500;
    color: #f2efe6;
  }
  .sa-box.component.highlight {
    background: rgba(156, 255, 110, 0.08);
    border: 1px solid rgba(156, 255, 110, 0.45);
    color: #9cff6e;
    font-weight: 600;
  }
  .sa-plus {
    font-size: 1.4rem;
    color: #9aa7a6;
    font-weight: 600;
  }
  .sa-arrow {
    font-size: 2rem;
    color: #9aa7a6;
    align-self: center;
  }

  .comp-container {
    font-family: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    background: #080b0f;
    border: 1px solid #24313b;
    padding: 40px 30px;
    margin: 20px 0;
    overflow-x: auto;
  }
  .comp-title {
    font-family: "Instrument Serif", Georgia, serif;
    font-size: clamp(28px, 5vw, 40px);
    font-weight: 400;
    color: #f2efe6;
    margin-bottom: 8px;
    line-height: 0.95;
  }
  .comp-subtitle {
    font-size: 1rem;
    color: #9aa7a6;
    margin-bottom: 50px;
  }
  .comp-table-wrap {
    overflow-x: auto;
  }
  .comp-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 900px;
  }
  .comp-table thead th {
    text-align: left;
    padding: 14px 18px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #9aa7a6;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 2px solid #38505b;
  }
  .comp-table tbody tr {
    border-bottom: 1px solid #24313b;
  }
  .comp-table tbody tr:last-child {
    border-bottom: none;
  }
  .comp-table tbody td {
    padding: 18px;
    vertical-align: top;
    font-size: 0.9rem;
    line-height: 1.6;
    color: #c9c1ac;
  }
  .comp-table tbody td:first-child {
    color: #f2efe6;
    font-weight: 600;
    white-space: nowrap;
    width: 120px;
  }
  .comp-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .comp-pill {
    display: inline-flex;
    align-items: center;
    border: 1px solid rgba(69, 230, 199, 0.35);
    background: rgba(13, 19, 24, 0.75);
    padding: 3px 10px;
    font-size: 0.78rem;
    font-weight: 500;
    color: #45e6c7;
    white-space: nowrap;
  }
</style>

<div class="sa-container">
  <div class="sa-title">What turns a Site into an App?</div>
  <div class="sa-subtitle">A Site is just files. An App adds five backend powers.</div>
  <div class="sa-compare">
    <div class="sa-column">
      <div class="sa-heading">Site</div>
      <div class="sa-box files">Files</div>
      <div class="sa-box files" style="opacity: 0.6;">HTML / CSS / JS</div>
      <div class="sa-box files" style="opacity: 0.4;">Images / Fonts</div>
    </div>
    <div class="sa-arrow">→</div>
    <div class="sa-column">
      <div class="sa-heading">App</div>
      <div class="sa-box files">Files</div>
      <div class="sa-plus">+</div>
      <div class="sa-box component highlight">Auth</div>
      <div class="sa-box component highlight">Database</div>
      <div class="sa-box component highlight">Storage</div>
      <div class="sa-box component highlight">Cron Jobs</div>
      <div class="sa-box component highlight">APIs</div>
    </div>
  </div>
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

<div class="comp-container">
  <div class="comp-title">The 5 Components Every App Needs</div>
  <div class="comp-subtitle">What they do, when you need them, and the tools to build them.</div>
  <div class="comp-table-wrap">
    <table class="comp-table">
      <thead>
        <tr>
          <th>Component</th>
          <th>Simple Explanation</th>
          <th>When You Need This</th>
          <th>Common Methods / Types</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Auth<br><span style="font-size:0.8rem; font-weight:400; color:#666;">(Sign in)</span></td>
          <td>Verifying who someone is before letting them access your app.</td>
          <td>Any app with user accounts, login pages, or personal data (social media, banking, e-commerce).</td>
          <td>
            <div class="comp-pills">
              <span class="comp-pill">OAuth 2.0</span>
              <span class="comp-pill">JWT</span>
              <span class="comp-pill">Session Cookies</span>
              <span class="comp-pill">SSO / SAML</span>
              <span class="comp-pill">MFA / 2FA</span>
              <span class="comp-pill">Magic Links</span>
              <span class="comp-pill">LDAP</span>
              <span class="comp-pill">API Keys</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Database</td>
          <td>An organized place to save and retrieve information that persists even when your app restarts.</td>
          <td>Apps that need to remember things: user profiles, posts, orders, messages, game scores.</td>
          <td>
            <div class="comp-pills">
              <span class="comp-pill">PostgreSQL</span>
              <span class="comp-pill">MySQL</span>
              <span class="comp-pill">SQLite</span>
              <span class="comp-pill">MongoDB</span>
              <span class="comp-pill">Redis</span>
              <span class="comp-pill">DynamoDB</span>
              <span class="comp-pill">Neo4j</span>
              <span class="comp-pill">InfluxDB</span>
              <span class="comp-pill">Elasticsearch</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Storage</td>
          <td>Where you keep files like images, videos, PDFs, and other uploads from users.</td>
          <td>Apps with profile pictures, file sharing, photo galleries, document uploads, media platforms.</td>
          <td>
            <div class="comp-pills">
              <span class="comp-pill">AWS S3</span>
              <span class="comp-pill">GCS</span>
              <span class="comp-pill">Azure Blob</span>
              <span class="comp-pill">CDN</span>
              <span class="comp-pill">Block Storage</span>
              <span class="comp-pill">NAS</span>
              <span class="comp-pill">Local Filesystem</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Cron Jobs</td>
          <td>Automatic tasks that run on a schedule without you clicking anything.</td>
          <td>Sending daily emails, clearing old data, generating reports, backing up databases, checking for updates.</td>
          <td>
            <div class="comp-pills">
              <span class="comp-pill">Cron Expressions</span>
              <span class="comp-pill">AWS Lambda</span>
              <span class="comp-pill">Celery</span>
              <span class="comp-pill">Bull</span>
              <span class="comp-pill">Airflow</span>
              <span class="comp-pill">Systemd Timers</span>
              <span class="comp-pill">Scheduled Functions</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>APIs</td>
          <td>A way for different apps or services to talk to each other and share data.</td>
          <td>Connecting to payment processors, weather data, maps, social media, sending emails, AI services.</td>
          <td>
            <div class="comp-pills">
              <span class="comp-pill">REST</span>
              <span class="comp-pill">GraphQL</span>
              <span class="comp-pill">gRPC</span>
              <span class="comp-pill">WebSockets</span>
              <span class="comp-pill">Webhooks</span>
              <span class="comp-pill">tRPC</span>
              <span class="comp-pill">SOAP</span>
              <span class="comp-pill">JSON-RPC</span>
              <span class="comp-pill">SSE</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
