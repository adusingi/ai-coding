# Shipping Software: From Idea to Market

This document outlines the end-to-end process of shipping software, from product conception through to growth marketing, and dives deep into the design phase where AI-assisted development accelerates delivery.

---

## Diagram 1: The Full Team Handoff Flow

<style>
  .ss-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: #f0efe9;
    padding: 40px 20px;
    border-radius: 12px;
    margin: 20px 0;
    overflow-x: auto;
  }
  .ss-title {
    font-size: 2.2rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 60px;
    letter-spacing: -0.02em;
  }
  .ss-flow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    min-width: 900px;
  }
  .ss-box {
    width: 160px;
    height: 200px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  }
  .ss-box .icon {
    font-size: 2.2rem;
    margin-bottom: 16px;
  }
  .ss-box .label {
    font-size: 1.05rem;
    font-weight: 600;
    color: #1a1a1a;
    line-height: 1.3;
  }
  .ss-arrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
    color: #888;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.05em;
  }
  .ss-arrow .arr {
    font-size: 1.4rem;
    margin-top: 4px;
    color: #999;
  }
  .bg-sage  { background: #d6d9d0; }
  .bg-grey  { background: #a8aca4; }
  .bg-peach { background: #e8d5cf; }
  .bg-teal  { background: #c5d5cf; }
  .bg-lav   { background: #c8c8d8; }

  .design-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: #f0efe9;
    padding: 40px 30px;
    border-radius: 12px;
    margin: 20px 0;
    overflow-x: auto;
  }
  .design-title {
    font-size: 2rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
  }
  .design-subtitle {
    font-size: 1.1rem;
    color: #888;
    margin-bottom: 50px;
  }
  .design-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    min-width: 800px;
  }
  .design-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .design-col.left {
    align-items: flex-end;
    padding-right: 20px;
  }
  .design-col.center {
    align-items: center;
    padding: 0 20px;
  }
  .design-col.right {
    align-items: flex-start;
    padding-left: 40px;
    gap: 12px;
  }
  .d-box {
    border-radius: 16px;
    padding: 18px 24px;
    text-align: center;
    font-size: 0.95rem;
    font-weight: 500;
    color: #1a1a1a;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    white-space: nowrap;
  }
  .d-box.light { background: #d6d9d0; }
  .d-box.dark  { background: #1a1a1a; color: #fff; font-weight: 600; font-size: 1.1rem; }
  .d-box.white { background: #fff; border: 1px solid #ddd; }
  .d-box.small { padding: 14px 20px; font-size: 0.9rem; }
  .d-arrow-h { font-size: 1.6rem; color: #777; padding: 0 12px; }
  .d-arrow-v {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    margin: 16px 0;
  }
  .d-arrow-v .v { font-size: 1.2rem; line-height: 1; }
  .branch-wrap {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .branch-vert {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30px;
    flex-shrink: 0;
  }
  .branch-top {
    border-left: 2px solid #999;
    border-top: 2px solid #999;
    border-top-left-radius: 12px;
    height: 24px;
    width: 28px;
  }
  .branch-mid {
    border-left: 2px solid #999;
    height: 24px;
    width: 28px;
  }
  .branch-end {
    border-left: 2px solid #999;
    border-bottom: 2px solid #999;
    border-bottom-left-radius: 12px;
    height: 24px;
    width: 28px;
  }
  .branch-spacer {
    height: 24px;
    width: 28px;
  }

  .build-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: #f0efe9;
    padding: 40px 30px;
    border-radius: 12px;
    margin: 20px 0;
    overflow-x: auto;
  }
  .build-title {
    font-size: 2rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
  }
  .build-subtitle {
    font-size: 1.1rem;
    color: #888;
    margin-bottom: 50px;
  }
  .build-flow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    min-width: 800px;
  }
  .build-box {
    border-radius: 16px;
    padding: 22px 28px;
    text-align: center;
    min-width: 140px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
  }
  .build-box.light {
    background: #d6d9d0;
  }
  .build-box.white {
    background: #f7f7f5;
    border: 1px solid #ccc;
  }
  .build-box .b-icon {
    font-size: 1.6rem;
    margin-bottom: 10px;
    line-height: 1;
  }
  .build-box .b-label {
    font-size: 0.95rem;
    font-weight: 600;
    color: #1a1a1a;
    line-height: 1.3;
  }
  .build-box .b-sublabel {
    font-size: 0.85rem;
    font-weight: 400;
    color: #333;
    margin-top: 2px;
  }
  .build-hand {
    font-size: 2.8rem;
    margin-right: 16px;
    line-height: 1;
  }
  .build-arrow {
    font-size: 1.6rem;
    color: #777;
    padding: 0 18px;
  }

  .orch-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: #f0efe9;
    padding: 40px 30px;
    border-radius: 12px;
    margin: 20px 0;
    overflow-x: auto;
  }
  .orch-title {
    font-size: 2rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
  }
  .orch-subtitle {
    font-size: 1.1rem;
    color: #888;
    margin-bottom: 50px;
  }
  .orch-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 700px;
  }
  .orch-box-dark {
    background: #1a1a1a;
    color: #fff;
    border-radius: 16px;
    padding: 24px 36px;
    text-align: center;
    font-weight: 600;
    font-size: 1.1rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
  .orch-branches {
    display: flex;
    justify-content: center;
    gap: 140px;
    margin-top: 4px;
  }
  .orch-branch {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .orch-branch-line {
    border-left: 2px solid #999;
    border-top: 2px solid #999;
    border-top-left-radius: 12px;
    height: 32px;
    width: 80px;
    margin-bottom: -1px;
  }
  .orch-branch-center {
    border-left: 2px solid #999;
    height: 32px;
    width: 0;
  }
  .orch-branch-right {
    border-right: 2px solid #999;
    border-top: 2px solid #999;
    border-top-right-radius: 12px;
    height: 32px;
    width: 80px;
    margin-bottom: -1px;
  }
  .orch-subagent {
    background: #d6d9d0;
    border-radius: 16px;
    padding: 20px 28px;
    text-align: center;
    min-width: 150px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
  }
  .orch-subagent .o-label {
    font-size: 0.95rem;
    font-weight: 600;
    color: #1a1a1a;
  }
  .orch-subagent .o-sublabel {
    font-size: 0.85rem;
    color: #333;
    margin-top: 4px;
  }
  .orch-arrow-down {
    font-size: 1.4rem;
    color: #777;
    margin: 10px 0;
  }
  .orch-target {
    border: 2px dashed #b88;
    color: #855;
    border-radius: 12px;
    padding: 12px 24px;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 500;
    background: transparent;
  }

  .sec-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: #f0efe9;
    padding: 40px 30px;
    border-radius: 12px;
    margin: 20px 0;
    overflow-x: auto;
  }
  .sec-title {
    font-size: 2rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
  }
  .sec-subtitle {
    font-size: 1.1rem;
    color: #888;
    margin-bottom: 50px;
  }
  .sec-flow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    min-width: 900px;
  }
  .sec-box-dark {
    background: #1a1a1a;
    color: #fff;
    border-radius: 12px;
    padding: 16px 20px;
    font-family: monospace;
    font-size: 0.9rem;
  }
  .sec-box-alert {
    background: #c97;
    color: #1a1a1a;
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    min-width: 140px;
  }
  .sec-box-alert .alert-icon {
    font-size: 2.2rem;
    margin-bottom: 10px;
  }
  .sec-box-alert .alert-label {
    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1.3;
  }
  .sec-box-white {
    background: #f7f7f5;
    border: 1px solid #ccc;
    border-radius: 16px;
    padding: 20px 22px;
    text-align: center;
    min-width: 130px;
  }
  .sec-box-white .w-label {
    font-size: 0.95rem;
    font-weight: 600;
    color: #1a1a1a;
  }
  .sec-box-white .w-sublabel {
    font-size: 0.8rem;
    color: #555;
    margin-top: 4px;
  }
  .sec-box-end {
    background: #d6d9d0;
    border-radius: 16px;
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
  }
  .sec-arrow {
    font-size: 1.6rem;
    color: #777;
    padding: 0 14px;
  }
  .sec-arrow-down {
    font-size: 1.4rem;
    color: #777;
    margin: 8px 0;
  }
  .sec-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .support-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: #f0efe9;
    padding: 40px 30px;
    border-radius: 12px;
    margin: 20px 0;
    overflow-x: auto;
  }
  .support-title {
    font-size: 2rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
  }
  .support-subtitle {
    font-size: 1.1rem;
    color: #888;
    margin-bottom: 50px;
  }
  .support-flow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    min-width: 800px;
  }
  .support-box {
    border-radius: 16px;
    padding: 22px 28px;
    text-align: center;
    min-width: 150px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
  }
  .support-box.light { background: #d6d9d0; }
  .support-box.white { background: #f7f7f5; border: 1px solid #ccc; }
  .support-box .s-icon { font-size: 1.8rem; margin-bottom: 10px; }
  .support-box .s-label { font-size: 0.95rem; font-weight: 600; color: #1a1a1a; }
  .support-box .s-sublabel { font-size: 0.85rem; color: #333; margin-top: 4px; }
  .support-arrow { font-size: 1.6rem; color: #777; padding: 0 18px; }

  .sum-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: #f0efe9;
    padding: 40px 30px;
    border-radius: 12px;
    margin: 20px 0;
    overflow-x: auto;
  }
  .sum-title {
    font-size: 2rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
  }
  .sum-subtitle {
    font-size: 1.1rem;
    color: #888;
    margin-bottom: 50px;
  }
  .sum-flow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    min-width: 900px;
  }
  .sum-box {
    width: 140px;
    height: 100px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: #1a1a1a;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  }
  .sum-arrow {
    font-size: 1.6rem;
    color: #777;
    padding: 0 18px;
  }
  .sum-divider {
    height: 1px;
    background: #ccc;
    margin: 40px 0;
    min-width: 900px;
  }
  .sum-grid {
    display: flex;
    gap: 20px;
    justify-content: center;
    min-width: 900px;
  }
  .sum-card {
    background: #f7f7f5;
    border: 1px solid #ddd;
    border-radius: 16px;
    padding: 28px 20px;
    flex: 1;
    text-align: center;
    max-width: 280px;
  }
  .sum-card .card-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 4px;
  }
  .sum-card .card-eq {
    font-size: 1.4rem;
    color: #888;
    margin: 8px 0;
  }
  .sum-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    margin-top: 12px;
  }
  .sum-pill {
    background: #d6d9d0;
    border-radius: 8px;
    padding: 6px 12px;
    font-size: 0.8rem;
    font-weight: 500;
    color: #1a1a1a;
  }
  .sum-card .card-body {
    font-size: 0.85rem;
    color: #555;
    line-height: 1.4;
    margin-top: 12px;
    padding: 12px;
    background: #e8e8e2;
    border-radius: 10px;
  }
  .sum-icon-big {
    font-size: 2.5rem;
    margin-top: 8px;
  }
</style>

<div class="ss-container">
  <div class="ss-title">Shipping software still takes a full team</div>
  <div class="ss-flow">
    <div class="ss-box bg-sage">
      <div class="icon">🎯</div>
      <div class="label">Product<br>Manager</div>
    </div>
    <div class="ss-arrow">
      <span>Handoff</span>
      <span class="arr">→</span>
    </div>
    <div class="ss-box bg-grey">
      <div class="icon">🧩</div>
      <div class="label">UI/UX<br>Developer</div>
    </div>
    <div class="ss-arrow">
      <span>Handoff</span>
      <span class="arr">→</span>
    </div>
    <div class="ss-box bg-peach">
      <div class="icon">💻</div>
      <div class="label">Software<br>Engineer</div>
    </div>
    <div class="ss-arrow">
      <span>Handoff</span>
      <span class="arr">→</span>
    </div>
    <div class="ss-box bg-teal">
      <div class="icon">🛡️</div>
      <div class="label">Security<br>Engineer</div>
    </div>
    <div class="ss-arrow">
      <span>Handoff</span>
      <span class="arr">→</span>
    </div>
    <div class="ss-box bg-lav">
      <div class="icon">📈</div>
      <div class="label">Growth<br>Marketer</div>
    </div>
  </div>
</div>

### What Happens in Each Phase

| Phase | Role | Key Activities |
|-------|------|---------------|
| **1. Product** | Product Manager | Defines the problem space, writes PRDs, prioritizes features on the roadmap, gathers stakeholder input, and decides *what* gets built and *when*. |
| **2. Design** | UI/UX Developer | Translates requirements into wireframes, interactive prototypes, and a cohesive design system. Defines user flows, accessibility standards, and visual language. |
| **3. Engineering** | Software Engineer | Builds the actual product—writing frontend and backend code, setting up databases, APIs, and infrastructure. Handles code review, testing, and deployment pipelines. |
| **4. Security** | Security Engineer | Performs code audits, penetration testing, dependency scanning, and ensures compliance with security standards (SOC 2, GDPR, etc.). |
| **5. Growth** | Growth Marketer | Drives go-to-market strategy, runs acquisition campaigns, sets up analytics funnels, A/B tests messaging, and optimizes for user retention and revenue. |

> 💡 **The Bottleneck**: Each "Handoff" arrow represents a potential delay—requirements get lost, designs are misinterpreted, and feedback loops take days or weeks.

---

## Diagram 2: The Design Phase — AI-Accelerated UI/UX Development

<div class="design-container">
  <div class="design-title">Design: UI/UX Developer</div>
  <div class="design-subtitle">"I take the wireframe and define the architecture."</div>
  <div class="design-wrap">
    <div class="design-col left">
      <div class="d-box light" style="padding: 28px 20px;">01/wireframe.html</div>
    </div>
    <div class="design-col center">
      <div class="d-arrow-h">→</div>
      <div class="d-box dark" style="padding: 32px 20px;">Claude Code</div>
      <div class="d-arrow-v">
        <span class="v">↑</span>
        <span>MCP</span>
        <span class="v">↓</span>
      </div>
      <div class="d-box white">
        <div style="font-weight:600; margin-bottom:4px;">Figma Board</div>
        <div style="font-size:0.8rem; color:#777;">mcp.figma.com</div>
      </div>
    </div>
    <div class="design-col right">
      <div class="branch-wrap">
        <div class="branch-vert">
          <div class="branch-top"></div>
        </div>
        <div class="d-box light small">landing.html</div>
      </div>
      <div class="branch-wrap">
        <div class="branch-vert">
          <div class="branch-mid"></div>
        </div>
        <div class="d-box light small">form.html</div>
      </div>
      <div class="branch-wrap">
        <div class="branch-vert">
          <div class="branch-mid"></div>
        </div>
        <div class="d-box light small">thanks.html</div>
      </div>
      <div class="branch-wrap">
        <div class="branch-vert">
          <div class="branch-mid"></div>
        </div>
        <div class="d-box light small">dashboard.html</div>
      </div>
      <div class="branch-wrap">
        <div class="branch-vert">
          <div class="branch-end"></div>
        </div>
        <div class="d-box light small">styles.css</div>
      </div>
    </div>
  </div>
</div>

### What Happens in the Design Phase

This diagram illustrates a modern, AI-accelerated design workflow where **Claude Code** acts as the UI/UX Developer, bridging raw wireframes and polished, production-ready assets.

| Step | Input / Tool | Output | Description |
|------|-------------|--------|-------------|
| **Wireframe** | `01/wireframe.html` | — | The starting point: a low-fidelity HTML structure representing page layout, content blocks, and basic hierarchy. |
| **AI Processing** | **Claude Code** | Multiple `.html` files | The AI ingests the wireframe and generates fully designed, responsive page templates: `landing.html`, `form.html`, `thanks.html`, and `dashboard.html`. |
| **Design Sync** | **MCP ↔ Figma Board** | `styles.css` + Design Tokens | Via the **Model Context Protocol (MCP)**, Claude Code connects to a live Figma board (`mcp.figma.com`). It pulls design tokens (colors, typography, spacing) and pushes back generated CSS to keep the codebase and design file in sync. |
| **Stylesheet** | Figma + AI synthesis | `styles.css` | A centralized CSS file containing all design tokens, utility classes, and component styles extracted from Figma and refined by the AI. |

### Key Concepts

- **Wireframe (`01/wireframe.html`)**  
  A skeleton HTML file with no styling. It communicates *what* goes on the page (headers, forms, buttons, sections) without prescribing *how* it looks.

- **Claude Code**  
  An AI coding agent that reads the wireframe, understands the intended user flow, and writes complete, semantic HTML. It can iterate based on feedback and maintain consistency across multiple page templates.

- **MCP (Model Context Protocol)**  
  A bidirectional bridge between the AI and external tools. Here, MCP allows Claude Code to read design specifications directly from Figma and write generated CSS back, eliminating manual copy-paste between design and code.

- **Figma Board (`mcp.figma.com`)**  
  The single source of truth for visual design. It houses components, color palettes, typography scales, and exported assets. By connecting via MCP, the AI ensures every pixel in code matches the design system.

---

## Diagram 3: Build — Software Engineer (Cloud Architecture)

<div class="build-container">
  <div class="build-title">Build: SWE</div>
  <div class="build-subtitle">"I design the cloud architecture, then build all three services in parallel."</div>
  <div class="build-flow">
    <div class="build-hand">👌</div>
    <div class="build-arrow">→</div>
    <div class="build-box light">
      <div class="b-label">API Service</div>
      <div class="b-sublabel">Feedback API</div>
    </div>
    <div class="build-arrow">→</div>
    <div class="build-box white">
      <div class="b-icon">🗄️</div>
      <div class="b-label">Database</div>
      <div class="b-sublabel">Responses Store</div>
    </div>
    <div class="build-arrow">→</div>
    <div class="build-box white">
      <div class="b-icon">📊</div>
      <div class="b-label">Data Processing</div>
      <div class="b-sublabel">Analytics Engine</div>
    </div>
    <div class="build-arrow">→</div>
    <div class="build-box light">
      <div class="b-label">Dashboard</div>
      <div class="b-sublabel">Visualization</div>
    </div>
  </div>
</div>

### What Happens in the Build Phase

This diagram shows the classic **data pipeline architecture** that a Software Engineer designs and builds. Rather than being locked to a single cloud vendor, each layer is **swappable** with multiple proven solutions from the open-source and commercial ecosystems.

| Layer | Role | Popular Options |
|-------|------|-----------------|
| **API Service** | Ingests requests from users or clients and validates incoming data. | AWS Lambda, Azure Functions, Cloudflare Workers, FastAPI on EC2/Droplets, Google Cloud Run, Vercel Edge Functions |
| **Database** | Persists structured or semi-structured data durably. | PostgreSQL, MySQL, MongoDB, DynamoDB, Redis, CockroachDB, PlanetScale, SQLite (edge), Firestore, Couchbase |
| **Data Processing** | Transforms, aggregates, and enriches raw data for analysis. | Apache Spark, BigQuery, Snowflake, ClickHouse, DuckDB, Apache Flink, dbt, AWS Athena, Trino, Databricks |
| **Dashboard** | Visualizes metrics and insights for stakeholders. | Grafana, Tableau, Metabase, Apache Superset, Power BI, Looker, Preset, Hex, Streamlit, Dash |

### Why This Architecture Pattern Is Everywhere

The flow **API → Database → Processing → Dashboard** is the backbone of almost every modern SaaS product:

1. **A user submits feedback** through the API (REST, GraphQL, or gRPC).
2. **The API writes raw data** into a database — this could be a relational row, a JSON document, or a time-series event.
3. **A data processing layer** periodically (or in real time) reads that raw data, cleans it, joins it with other sources, and produces aggregate tables or materialized views.
4. **A dashboard** queries those aggregates and renders charts, tables, and alerts that product teams use to make decisions.

### Vendor-Neutral vs. Cloud-Native Stacks

| Stack Type | Example Combination | Best For |
|---|---|---|
| **Fully Open Source** | FastAPI + PostgreSQL + Apache Spark + Grafana | Teams that want zero vendor lock-in and full control over infrastructure. |
| **Managed Cloud** | AWS Lambda + DynamoDB + Athena + QuickSight | Teams that want serverless scaling and pay-per-use billing without managing servers. |
| **Modern Data Stack** | Vercel Functions + Snowflake + dbt + Metabase | Teams prioritizing analytics velocity and collaborative SQL transformations. |
| **Edge-First** | Cloudflare Workers + D1 + DuckDB + Streamlit | Teams building low-latency, globally distributed apps with minimal backend complexity. |

### Key Concepts

- **API Service**  
  The front door of your backend. It handles authentication, rate limiting, request validation, and routing. It should be stateless so you can scale it horizontally.

- **Database**  
  The source of truth. Choosing the right database depends on your access patterns: relational (ACID transactions), document (flexible schemas), key-value (caching), columnar (analytics), or graph (relationships).

- **Data Processing / Analytics**  
  Raw data is rarely useful on its own. Processing layers transform events into metrics, run scheduled batch jobs, or stream real-time aggregations. This is where business logic turns into insight.

- **Dashboard**  
  The human-facing layer. A great dashboard doesn't just show numbers — it surfaces anomalies, tracks goals, and lets non-technical stakeholders explore data without writing SQL.

---

## Diagram 3A: Build — Parallel Subagent Orchestration

<div class="orch-container">
  <div class="orch-title">Build: SWE</div>
  <div class="orch-subtitle">"I build the API, the pipeline, and the dashboard. In parallel."</div>
  <div class="orch-wrap">
    <div class="orch-box-dark">LLM Orchestrator</div>
    <div class="orch-branches">
      <div class="orch-branch">
        <div class="orch-branch-line"></div>
      </div>
      <div class="orch-branch">
        <div class="orch-branch-center"></div>
      </div>
      <div class="orch-branch">
        <div class="orch-branch-right"></div>
      </div>
    </div>
    <div style="display: flex; gap: 30px; justify-content: center;">
      <div class="orch-subagent">
        <div class="o-label">Subagent A</div>
        <div class="o-sublabel">backend-api</div>
      </div>
      <div class="orch-subagent">
        <div class="o-label">Subagent B</div>
        <div class="o-sublabel">data-pipeline</div>
      </div>
      <div class="orch-subagent">
        <div class="o-label">Subagent C</div>
        <div class="o-sublabel">Dashboard</div>
      </div>
    </div>
    <div style="display: flex; gap: 30px; justify-content: center; margin-top: 10px;">
      <div class="orch-arrow-down">↓</div>
      <div class="orch-arrow-down">↓</div>
      <div class="orch-arrow-down">↓</div>
    </div>
    <div style="display: flex; gap: 30px; justify-content: center;">
      <div class="orch-target">Container / Serverless</div>
      <div class="orch-target">Data Warehouse</div>
      <div class="orch-target">HTML / JS / React</div>
    </div>
  </div>
</div>

### How Parallel Subagents Accelerate Delivery

Instead of building services sequentially, an **LLM Orchestrator** can spawn multiple specialized subagents that work in parallel. Each subagent owns a distinct slice of the architecture:

| Subagent | Responsibility | Typical Output |
|----------|---------------|----------------|
| **Subagent A** | Backend API | REST or GraphQL endpoints, auth middleware, request validators, OpenAPI specs |
| **Subagent B** | Data Pipeline | ETL jobs, streaming consumers, aggregation queries, materialized views |
| **Subagent C** | Frontend Dashboard | React/Vue components, chart libraries, filtering UI, export features |

This pattern collapses what used to be three separate sprints into a single parallel burst. The orchestrator ensures consistency across boundaries—shared data models, matching API contracts, and unified styling—while each subagent focuses deeply on its own domain.

---

## Diagram 4: Deploy — Security Engineer

<div class="sec-container">
  <div class="sec-title">Deploy: Security Engineer</div>
  <div class="sec-subtitle">"Nothing ships without my review."</div>
  <div class="sec-flow">
    <div class="sec-box-dark">/security-review</div>
    <div class="sec-arrow">→</div>
    <div class="sec-col">
      <div class="sec-box-alert">
        <div class="alert-icon">👌</div>
        <div class="alert-label">Found missing<br>input validation</div>
      </div>
      <div class="sec-arrow-down">↓</div>
      <div class="sec-box-white">
        <div class="w-label">Edit Code</div>
        <div class="w-sublabel">Add schema check</div>
      </div>
    </div>
    <div class="sec-arrow">→</div>
    <div class="sec-box-white">
      <div class="w-label">Set Permissions</div>
      <div class="w-sublabel">Least-privilege<br>service account</div>
    </div>
    <div class="sec-arrow">→</div>
    <div class="sec-box-white">
      <div class="w-label">Build & Deploy</div>
    </div>
    <div class="sec-arrow">→</div>
    <div class="sec-box-end">💻</div>
  </div>
</div>

### What Happens in the Security Review Phase

Before any code reaches production, a Security Engineer (or an AI security agent) runs a structured review. The process is always the same: **scan → find → fix → harden → ship**.

| Step | Action | Example Findings |
|------|--------|------------------|
| **1. Trigger Review** | Run `/security-review` command or CI gate. | Kicks off static analysis, dependency scanning, and policy checks. |
| **2. Detect Issues** | Surface vulnerabilities and misconfigurations. | Missing input validation, exposed secrets, overly permissive IAM roles, unpatched dependencies. |
| **3. Fix Code** | Patch the root cause in source. | Add schema validation, sanitize user inputs, parameterize queries, enforce rate limiting. |
| **4. Harden Permissions** | Apply least-privilege access. | Scope service accounts to specific resources, enable MFA, rotate credentials, segment networks. |
| **5. Build & Deploy** | Pass final checks and release. | Signed artifacts, immutable infrastructure, automated rollback on failure. |

### More Security Review Examples

- **Secret Scanning**: A subagent detects a hardcoded API key in a commit. The fix is to move it to a secrets manager (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault) and inject it at runtime.
- **Dependency Audit**: A vulnerable version of `lodash` or `openssl` is flagged. The fix is to bump the version, run regression tests, and lock the dependency tree.
- **Infrastructure Drift**: Terraform plan shows an S3 bucket was made public. The fix is to revert the ACL, enable block-public-access, and add a policy-as-code guardrail (OPA, Sentinel, or Checkov).

---

## Diagram 5: Support — Post-Launch Feedback Loop

<div class="support-container">
  <div class="support-title">Support: Post-Launch</div>
  <div class="support-subtitle">"We ship, we listen, we improve."</div>
  <div class="support-flow">
    <div class="support-box light">
      <div class="s-icon">📊</div>
      <div class="s-label">Dashboard</div>
      <div class="s-sublabel">Live Metrics</div>
    </div>
    <div class="support-arrow">→</div>
    <div class="support-box white">
      <div class="s-icon">🔍</div>
      <div class="s-label">Analyze Feedback</div>
      <div class="s-sublabel">Trends & Anomalies</div>
    </div>
    <div class="support-arrow">→</div>
    <div class="support-box white">
      <div class="s-icon">⚡</div>
      <div class="s-label">Take Action</div>
      <div class="s-sublabel">Patch or Iterate</div>
    </div>
    <div class="support-arrow">→</div>
    <div class="support-box light">
      <div class="s-icon">🚀</div>
      <div class="s-label">Ship Update</div>
      <div class="s-sublabel">New Release</div>
    </div>
  </div>
</div>

### The Support Phase Is a Closed Loop

Shipping is not the finish line — it is the starting line for learning. The Support phase turns user behavior and feedback into the next cycle of improvement:

1. **Dashboard Monitoring** — Track error rates, latency, user engagement, and conversion funnels in real time.
2. **Analyze Feedback** — Aggregate support tickets, survey responses, NPS scores, and session replays to find patterns.
3. **Take Action** — Prioritize bugs, usability fixes, and feature requests based on impact and frequency.
4. **Ship Update** — Release patches on a continuous cadence. Hotfixes for critical issues, scheduled releases for enhancements.

> 🔄 This loop feeds directly back into the **Product** phase, creating a virtuous cycle of build-measure-learn.

---

## Summary: The AI-Assisted Software Lifecycle

<div class="sum-container">
  <div class="sum-title">From Prototype to Support</div>
  <div class="sum-subtitle">How AI agents and cloud infrastructure combine to ship software end-to-end.</div>
  <div class="sum-flow">
    <div class="sum-box bg-sage">Prototype</div>
    <div class="sum-arrow">→</div>
    <div class="sum-box bg-grey">Design</div>
    <div class="sum-arrow">→</div>
    <div class="sum-box bg-peach">Build</div>
    <div class="sum-arrow">→</div>
    <div class="sum-box bg-teal">Deploy</div>
    <div class="sum-arrow">→</div>
    <div class="sum-box bg-lav">Support</div>
  </div>
  <div class="sum-divider"></div>
  <div class="sum-grid">
    <div class="sum-card">
      <div class="card-title">AI Agent Platform</div>
      <div class="card-eq">=</div>
      <div class="sum-pills">
        <span class="sum-pill">Memory</span>
        <span class="sum-pill">Tools</span>
        <span class="sum-pill">Subagents</span>
        <span class="sum-pill">Skills</span>
        <span class="sum-pill">MCP</span>
      </div>
    </div>
    <div class="sum-card">
      <div class="card-title">Cloud Provider</div>
      <div class="card-eq">=</div>
      <div class="card-body">AI inside your cloud project<br>(IAM, region, billing,<br>compute, storage)</div>
    </div>
    <div class="sum-card">
      <div class="card-title">AI + Cloud</div>
      <div class="card-eq">=</div>
      <div class="sum-icon-big">🎉</div>
    </div>
  </div>
</div>

### Putting It All Together

Shipping software today is no longer a linear conveyor belt of handoffs. It is a **continuous lifecycle** where five phases flow into each other, powered by two forces:

1. **AI Agent Platforms** — Systems with memory, tool access, subagent orchestration, reusable skills, and MCP integrations that can reason, design, code, review, and deploy.
2. **Cloud Providers** — The compute, storage, networking, and identity infrastructure that hosts and scales the product.

When these two forces combine, a small team (or even a solo builder) can move through **Prototype → Design → Build → Deploy → Support** at a speed that previously required a full organization. The AI handles the repetitive and cross-disciplinary work; the human focuses on strategy, taste, and validation.

The result: better software, shipped faster, with tighter feedback loops between the builder and the user.
