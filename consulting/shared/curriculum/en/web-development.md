# Web Development Roadmap

A structured breakdown of the web development landscape. This document preserves the historical 2017 view alongside a modern 2026 update, so you can see how the stack has evolved.

---

# 2026 Modern Stack (Current)

## 1. Universal Foundations

No matter which route you take, these are the baseline skills every web developer needs today.

| # | Skill | Notes |
|---|-------|-------|
| 1 | Git & GitHub / GitLab | Version control, branching, PRs, Actions, CI basics |
| 2 | Terminal & Shell Scripting | zsh, bash, PowerShell, command-line fluency |
| 3 | SSH & Key Management | Secure remote access, GitHub SSH, agent forwarding |
| 4 | HTTP/2, HTTP/3, REST, GraphQL | How clients and servers exchange data |
| 5 | WebSockets & Server-Sent Events | Real-time bidirectional and unidirectional communication |
| 6 | Docker Basics | Containers, images, Docker Compose for local dev |
| 7 | CI/CD Concepts | Automated testing, building, and deployment pipelines |

---

## 2. Modern Front End

Building user interfaces in 2026.

| Category | Technology | Details |
|----------|------------|---------|
| **AI-Powered IDEs** | Cursor | AI-native code editor built on VS Code |
| | Windsurf | Agentic IDE with autonomous coding capabilities |
| | GitHub Copilot | AI pair programmer inside VS Code / JetBrains |
| | Zed | Rust-based editor with built-in AI collaboration |
| | Claude Code | Terminal-based AI coding agent |
| **Modern Browsers** | Chrome / Edge / Safari / Firefox | Core rendering engines and DevTools |
| | Arc Browser | New Chromium-based browser with modern UX |
| **Languages** | HTML5 & Semantic Web | Accessibility-first document structure |
| | CSS3 & Modern Features | Container queries, :has(), layers, nesting |
| | TypeScript | Typed superset of JavaScript — industry standard |
| | ES2024+ | Modern JS: temporal, pipeline operator, pattern matching |
| **Build Tools** | Vite | Ultra-fast dev server and bundler |
| | esbuild / swc / Turbopack | Next-gen transpilers and bundlers |
| | Bun | All-in-one JS runtime, bundler, test runner |
| | pnpm | Disk-space efficient package manager |
| **CSS Ecosystem** | Tailwind CSS | Utility-first CSS framework — dominant in 2026 |
| | PostCSS / Lightning CSS | Modern CSS processing and minification |
| | CSS Modules / StyleX | Scoped, component-level styling |
| | Design Systems | Radix, shadcn/ui, Chakra UI v3 |
| **Frameworks** | React 19 | Server Components, Actions, improved hydration |
| | Vue 3 (Composition API) | Reactive, performant progressive framework |
| | Svelte 5 (Runes) | Compile-time reactivity, no virtual DOM |
| | Solid | Fine-grained reactivity, extreme performance |
| **Meta-Frameworks** | Next.js 15 | App Router, React Server Components, Turbo |
| | Nuxt 3 | Vue's full-stack framework |
| | SvelteKit | Svelte's official full-stack framework |
| | Remix | Web standards-focused React framework |
| **State Management** | Zustand | Minimal, unopinionated state for React |
| | Jotai / Recoil | Atomic state management |
| | TanStack Query | Server-state caching and synchronization |
| | Redux Toolkit | Predictable state for complex apps |
| **Testing** | Vitest | Vite-native test runner, Jest-compatible |
| | Playwright | Cross-browser end-to-end testing |
| | Testing Library | User-centric component testing |
| **Documentation** | Storybook | Component-driven UI development |
| | VitePress / Nuxt Content | Static site generators for docs |

---

## 3. Modern Back End

Server-side development in 2026.

| Language Family | Language / Runtime | Frameworks / Tools |
|-----------------|-------------------|-------------------|
| **JavaScript Runtimes** | Node.js 20+ | Express, Fastify, NestJS, Hono |
| | Deno 2 | Secure by default, native TypeScript |
| | Bun | Fast JS runtime with built-in bundler & test runner |
| **Python** | Python 3.12+ | FastAPI, Django, Flask |
| **Go** | Go 1.23+ | Gin, Echo, Fiber, standard library |
| **Rust** | Rust | Axum, Actix, Rocket, Leptos (full-stack) |
| **API Paradigms** | — | tRPC, GraphQL (Apollo, Pothos), gRPC, REST |
| **Serverless & Edge** | — | Vercel Functions, Netlify, AWS Lambda, Cloudflare Workers, Deno Deploy |
| **Real-Time** | — | WebSockets, Server-Sent Events (SSE), Socket.io |

---

## 4. Data & Databases

Storage and retrieval in the modern stack.

| Category | Technology | Notes |
|----------|------------|-------|
| **Relational** | PostgreSQL | The default choice for modern apps |
| | MySQL / MariaDB | Widely used, especially in LAMP stacks |
| | SQLite | Embedded, serverless, perfect for edge |
| | PlanetScale | Vitess-based MySQL platform with branching |
| | Neon | Serverless PostgreSQL with autoscaling |
| | Turso | SQLite at the edge, globally distributed |
| **Vector Databases** | pgvector | PostgreSQL extension for vector search |
| | Pinecone | Managed vector DB for AI/ML |
| | Weaviate | Open-source vector search engine |
| | Qdrant | Rust-based vector DB |
| | Chroma | AI-native embedding database |
| | Milvus | Cloud-native vector DB for massive scale |
| **Document** | MongoDB Atlas | Managed NoSQL with vector search |
| **Key-Value & Cache** | Redis / Valkey | In-memory cache and message broker |
| **Analytics** | DuckDB | In-process OLAP for embedded analytics |
| | ClickHouse | Columnar DB for real-time analytics |
| **Edge / Serverless Data** | Supabase | Open-source Firebase alternative (Postgres) |
| | Firebase | Google's backend-as-a-service |
| **ORMs & Query Builders** | Prisma | Type-safe ORM with declarative schema |
| | Drizzle | Lightweight, SQL-like TypeScript ORM |
| | TypeORM | Decorator-based ORM for TS/JS |
| | SQLx | Compile-time checked queries for Rust |

---

## 5. AI & LLM Integration

The newest layer of the modern web stack.

| Category | Technology | Notes |
|----------|------------|-------|
| **LLM APIs** | OpenAI GPT-4o / o1 | General-purpose reasoning models |
| | Anthropic Claude 3.5 | Strong coding and reasoning capabilities |
| | Google Gemini 1.5 | Long context, multimodal |
| | Mistral / Cohere / Groq | Alternative LLM providers |
| **Local LLMs** | Ollama | Run LLMs locally (Llama, Mistral, Gemma) |
| | llama.cpp | Optimized C++ inference for local models |
| | LM Studio | Desktop app for running local LLMs |
| **AI Frameworks** | LangChain | Orchestration for LLM applications |
| | LangGraph | Multi-agent workflows and state machines |
| | LlamaIndex | Retrieval-Augmented Generation (RAG) |
| **AI SDKs** | Vercel AI SDK | React/JS SDK for streaming LLM responses |
| | OpenAI SDK | Official client for OpenAI API |
| | Anthropic SDK | Official client for Claude API |
| **Vector Search & RAG** | — | Embedding models (OpenAI, Cohere, local), similarity search, chunking strategies |
| **AI Agents** | — | Autonomous agents with memory, tools, and planning |
| | MCP (Model Context Protocol) | Standard for connecting AI assistants to data sources |

---

## 6. DevOps & Infrastructure

Shipping, scaling, and maintaining applications in 2026.

| Category | Technology | Notes |
|----------|------------|-------|
| **Containers** | Docker | Still the standard for containerization |
| | Docker Compose | Multi-container local development |
| | Podman | Daemonless alternative to Docker |
| **Orchestration** | Kubernetes (k3s, kind, EKS, GKE) | Container orchestration at scale |
| | Docker Swarm | Lightweight alternative to K8s |
| | Nomad | HashiCorp's workload orchestrator |
| **IaC** | Terraform | Infrastructure as code (multi-cloud) |
| | Pulumi | TypeScript/Python/Go-based IaC |
| **CI/CD** | GitHub Actions | Most popular CI/CD platform |
| | GitLab CI | Integrated DevOps platform |
| | CircleCI / TravisCI | Cloud CI alternatives |
| **Cloud Platforms** | AWS | EC2, Lambda, S3, RDS, EKS — market leader |
| | Google Cloud Platform (GCP) | BigQuery, Cloud Run, Firebase |
| | Microsoft Azure | Enterprise-focused cloud platform |
| **Modern PaaS** | Fly.io | Globally distributed apps close to users |
| | Railway | Developer-friendly deployment platform |
| | Render | Simple cloud for full-stack apps |
| | Coolify | Self-hosted Heroku alternative |
| **Reverse Proxy & Edge** | Nginx | High-performance web server and proxy |
| | Caddy | Automatic HTTPS, config simplicity |
| | Traefik | Cloud-native edge router |
| | Cloudflare | CDN, DDoS protection, Workers, R2 |
| **Monitoring** | Sentry | Error tracking and performance monitoring |
| | Datadog | Full-stack observability |
| | Grafana + Prometheus | Open-source metrics and dashboards |
| | Vercel Analytics / Plausible | Web analytics |

---

## 7. Security

Essential security knowledge for modern web development.

| Category | Technology / Concept | Notes |
|----------|---------------------|-------|
| **Authentication** | OAuth 2.0 / OpenID Connect | Industry-standard delegated auth |
| | Passkeys / WebAuthn | Passwordless authentication |
| | Magic Links / OTP | Email and SMS-based auth |
| **Authorization** | JWT (JSON Web Tokens) | Stateless token-based auth |
| | Session Cookies | Stateful server-side sessions |
| | RBAC / ABAC | Role-based and attribute-based access control |
| **Security Headers** | CSP (Content Security Policy) | Mitigate XSS and injection attacks |
| | CORS | Controlled cross-origin resource sharing |
| | HSTS | Enforce HTTPS connections |
| **Secrets Management** | 1Password / Bitwarden | Team password and secret management |
| | Doppler | Universal secrets manager for dev teams |
| | HashiCorp Vault | Enterprise secret management |

---

## 8. Design & Collaboration

Tools that bridge engineering, design, and product.

| Category | Tool | Notes |
|----------|------|-------|
| **Design** | Figma | Collaborative interface design — industry standard |
| | Framer | Interactive prototyping and site building |
| **API Development** | Postman | API testing and documentation |
| | Insomnia | Open-source API client |
| | Hoppscotch | Lightweight web-based API client |
| **Project Management** | Linear | Modern issue tracking for software teams |
| | GitHub Projects | Integrated project management |
| | Jira | Enterprise project tracking |
| **Communication** | Slack | Team messaging and integrations |
| | Discord | Community and developer collaboration |

---

## 9. 2026 State of Web Dev AI — Survey Data

> Data sourced from the [State of Web Dev AI 2026](https://2026.stateofai.dev/en-US) survey — **7,258 respondents**, April–May 2026. This section provides real-world signals on what tools developers are actually using, paying for, and concerned about.

### 9.1 Survey Overview

| Metric | Value |
|--------|-------|
| **Respondents** | 7,258 |
| **Period** | April 8 – May 8, 2026 |
| **YoY Growth** | +73% participation vs. 2025 |
| **AI Code Generated (avg)** | 54% (up from 28% in 2025) |
| **AI as Integral Workflow** | 72% of respondents |
| **AI Quality Improved YoY** | 72% agree |
| **Believe We're in an AI Bubble** | 60% agree |
| **AGI Within 10 Years** | 27% believe |

### 9.2 AI Models — Usage & Payment

Models ranked by **usage** (% of respondents who have used it).

| Rank | Model | Usage | Payment Rank | Paying Users |
|------|-------|-------|--------------|-------------|
| 1 | ChatGPT | 88.4% | 1 | 4,592 |
| 2 | Claude | 82.1% (+26% YoY) | 2 | 3,261 |
| 3 | Google Gemini | 72.6% | 3 | 2,129 |
| 4 | Llama | 31.0% | — | — |
| 5 | Perplexity | 30.9% | — | — |
| 6 | Mistral | — | — | — |
| 7 | DeepSeek | — | — | — |
| 8 | Grok | — | — | — |
| 9 | Qwen | — | — | — |

> **Key insight**: Despite ChatGPT having the most users, **Claude** is the model developers actually **pay for** the most (after ChatGPT). Claude also saw the largest year-over-year usage gain (+26%).

### 9.3 Coding Agents & Assistants

| Rank | Tool | Usage | Notable |
|------|------|-------|---------|
| 1 | **Claude Code** | 67.9% | 58% of users pay for it |
| 2 | **GitHub Copilot** | High | Deep IDE integration |
| 3 | **OpenAI Codex** | High | OpenAI's agentic coding tool |
| 4 | **Devin** | Mid | Autonomous AI software engineer |
| 5 | **Tabnine** | Mid | AI code completion |
| 6 | **JetBrains AI** | Mid | Built into JetBrains IDEs |
| 7 | **Supermaven** | Lower | Fast code completion |
| 8 | **Replit Agent & Assistant** | Lower | Cloud-native coding |

### 9.4 Text Editors — What Developers Actually Use

Editors ranked by respondents who regularly use them.

| Rank | Editor | Users |
|------|--------|-------|
| 1 | VS Code | 4,667 |
| 2 | **Cursor** | 1,770 |
| 3 | JetBrains (IntelliJ, WebStorm, etc.) | 1,196 |
| 4 | Vim / Neovim | 964 |
| 5 | **Zed** | 812 |
| 6 | **Windsurf** | 611 |
| 7 | Sublime Text | 468 |
| 8 | Xcode | 193 |

> **Key insight**: AI-native editors (Cursor, Zed, Windsurf) now collectively rival JetBrains in adoption among survey respondents.

### 9.5 Languages Used with AI Tools

| Rank | Language | Users |
|------|----------|-------|
| 1 | JavaScript | 5,360 |
| 2 | Python | 4,831 |
| 3 | TypeScript | 2,597 |
| 4 | HTML / CSS | 1,483 |
| 5 | Java | 1,134 |
| 6 | C# | 919 |
| 7 | PHP | 765 |
| 8 | Rust | 731 |
| 9 | Go | 681 |
| 10 | C++ | 406 |

### 9.6 AI Pain Points

What frustrates developers most when using AI tools.

| Rank | Pain Point | Respondents |
|------|------------|-------------|
| 1 | **Hallucinations & Inaccuracies** | 3,899 |
| 2 | **Code Quality** | 3,249 |
| 3 | **Lack of Context** | 2,321 |
| 4 | **Financial Costs** | 1,923 |
| 5 | **Privacy Concerns** | 1,903 |
| 6 | Prompt Comprehension | 1,496 |
| 7 | Copyright Concerns | 784 |
| 8 | Integration Difficulties | 784 |

### 9.7 Capabilities Developers Want from AI

| Rank | Missing Capability | Respondents |
|------|-------------------|-------------|
| 1 | **Truthfulness** | 2,801 |
| 2 | **Long-Term Memory** | 2,592 |
| 3 | **Up-to-Date Knowledge** | 2,032 |
| 4 | **Accountability** | 1,977 |
| 5 | Awareness of Runtime Behavior | 1,345 |
| 6 | High-Level Planning | 1,320 |
| 7 | Larger Context Window | 1,151 |
| 8 | Good UI/UX | 1,018 |
| 9 | Larger Codebase Support | 1,007 |
| 10 | Better Tool Integration | 628 |

### 9.8 AI Risk Concerns

| Rank | Risk | Respondents |
|------|------|-------------|
| 1 | **Job Displacement** | 3,003 |
| 2 | **Military Use of AI** | 2,804 |
| 3 | **Environmental Impact** | 2,490 |
| 4 | **AI Slop Takeover** | 2,107 |
| 5 | Negative Cognitive Impacts | 1,850 |
| 6 | Security Issues | 1,821 |
| 7 | AI Overuse | 1,106 |
| 8 | Rising AI Costs | 1,031 |
| 9 | Copyright & Ethics | 730 |
| 10 | Open-Source Disruption | 597 |

### 9.9 Developer Opinions on AI

| Statement | Agree | Disagree |
|-----------|-------|----------|
| AI is an integral part of my workflow | 72% | — |
| AI has made me a lot more productive | Majority agree | — |
| Relying on AI will result in less skilled developers | 57% | — |
| AI tools are a threat to my job security | 52% | — |
| AI poses an existential risk to humanity | ~42% | — |
| We are currently in an "AI bubble" | 60% | — |
| AI tool quality improved significantly YoY | 72% | — |

---

---

# 2017 Historical Stack (Legacy Reference)

> Preserved for historical context. Many of these technologies are still in use, but the ecosystem has shifted significantly.

## 1. Universal Foundations (2017)

| # | Skill | Notes |
|---|-------|-------|
| 1 | FTP & Web Host Setup | Understanding how to deploy files to a server (e.g. HostGator) |
| 2 | Basic Terminal Usage | Navigating the file system, running commands, shell basics |
| 3 | Basic SSH | Secure remote server access and key management |
| 4 | GitHub Basics | Version control, branching, pull requests, collaboration |
| 5 | Client & Server Communication | How browsers and servers exchange data over HTTP |
| 6 | RESTful Web Services | Understanding GET, POST, PUT, DELETE request semantics |

---

## 2. Basic Front End (2017)

| Category | Topic | Details |
|----------|-------|---------|
| **Text Editors** | Atom.io | GitHub's hackable text editor |
| | Sublime Text | Fast, lightweight editor |
| | Brackets.io | Adobe's editor focused on web design |
| **Languages** | HTML | Document structure and semantic markup |
| | CSS | Styling, layout, and visual presentation |
| | JavaScript Fundamentals | Core language concepts and DOM manipulation |
| **JavaScript Deep Dives** | JavaScript is Weird and Awesome | Understanding JS quirks and edge cases |
| | Modular JS | ES modules, CommonJS, module bundling concepts |
| | jQuery | Legacy DOM manipulation library |

---

## 3. Back End (2017)

### 3.1 Back-End Languages

| Language Family | Language | Frameworks / Notes |
|-----------------|----------|-------------------|
| **Scripting** | Node.js | express, hapi |
| | Python | django, flask |
| | Ruby | Ruby on Rails, Sinatra |
| | PHP | Laravel, Symfony2, Lumen |
| **Functional** | Elixir | OTP, Phoenix |
| | Scala | Play Framework, Akka |
| | Clojure | Ring, Compojure |
| | Haskell | Yesod, Scotty |
| **High-Performance / Compiled** | Go / GoLang | Standard library focus |
| | Rust | Actix, Rocket |
| | Java | Spring Boot |
| | C# | ASP.NET |

### 3.2 Things Every Back-End Developer Must Learn (2017)

| Area | Topic | Details |
|------|-------|---------|
| **Data** | Caching | Nginx, Apache, Redis, In-Memory |
| | Relational Databases | MySQL, PostgreSQL |
| | Session / Cache Stores | Redis |
| | Document Databases | MongoDB, Couchbase, RethinkDB |
| | Search Engines | ElasticSearch, Solr |
| **Testing** | Unit / Functional Testing | Framework-specific testing |
| **APIs** | RESTful Services | Designing and consuming REST APIs |
| **Security** | Authorization / Authentication | OAUTH2, JSON Web Tokens |
| **Architecture** | SOA / Microservices | Service decomposition |
| | WebSocket | Real-time communication |
| | ORM / Data Structure | Schema design |
| **Deployment** | Deploying Your App | flightplan, Fabric, Capistrano |
| **Cloud Platforms** | Digital Ocean | VPS hosting |
| | Amazon Web Services (AWS) | EC2, S3, RDS |
| | Azure | Microsoft's cloud |
| | Rackspace | Managed hosting |
| | Heroku | PaaS |

---

## 4. DevOps (2017)

| Area | Tool / Topic | Details |
|------|--------------|---------|
| **Containerization** | Docker | Containerized apps |
| **Server Management** | Linux | Server OS |
| | Ansible | Config management |
| | Salt | Scalable CM |
| | Chef | Infrastructure as code |
| | Puppet | Declarative CM |
| **Orchestration** | Big Scale | Kubernetes, Mesos |
| | Small Scale | Docker Swarm |
| | UI-Driven | Rancher, Docker Cloud |
| **CI/CD** | Jenkins | Self-hosted CI |
| | SemaphoreCI | Hosted CI/CD |
| | CircleCI | Cloud CI |
| | Codeship | Hosted CD |
| **Local Environment** | Vagrant | Local dev environments |

---

## 5. Front End Developer — Advanced (2017)

| Category | Topic | Details |
|----------|-------|---------|
| **JavaScript Modern** | ES6/ES2015 | Modern JS syntax (Babel) |
| **CSS Tools** | Precompilers | SASS / LESS / Stylus |
| | CSS Frameworks | Bootstrap, Foundation |
| | Responsive Design | Mobile-first layouts |
| **Task Runners** | Gulp | Stream-based build |
| | Grunt | Config-based task runner |
| **Dependency Management** | Browserify | Node-style requires in browser |
| | Webpack | Module bundler |
| | Bower | Front-end package manager |
| | Yeoman.io | Project scaffolding |
| **MV* Frameworks** | React.js | Component-based UI |
| | | Mobx, Flux, Redux, Relay, GraphQL |
| | Angular.js | Full-featured framework |
| | Ember.js | Convention-over-configuration |
| | Vue.js | Progressive framework |
| | ClojureScript | Clojure to JS |
| | Elm | Functional language |
| **Unit Testing** | Mocha | Test framework |
| | Jasmine | BDD testing |
| | Karma | Browser test runner |
| | enzyme | React testing utilities |

---

> **Note on Diagrams**: The original 2017 mind-map images are preserved for reference. A visual diagram for the 2026 stack will be created in a future update.
