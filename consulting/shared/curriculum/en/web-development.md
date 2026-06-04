# Web Development Roadmap

A structured breakdown of the modern web development landscape. This document covers the foundational skills, front-end and back-end paths, and operational knowledge required to build and ship web applications.

---

## 1. Universal Foundations

No matter which route you take, these are the baseline skills every web developer needs.

| # | Skill | Notes |
|---|-------|-------|
| 1 | FTP & Web Host Setup | Understanding how to deploy files to a server (e.g. HostGator) |
| 2 | Basic Terminal Usage | Navigating the file system, running commands, shell basics |
| 3 | Basic SSH | Secure remote server access and key management |
| 4 | GitHub Basics | Version control, branching, pull requests, collaboration |
| 5 | Client & Server Communication | How browsers and servers exchange data over HTTP |
| 6 | RESTful Web Services | Understanding GET, POST, PUT, DELETE request semantics |

---

## 2. Basic Front End

The starting point for building user-facing interfaces.

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
| | jQuery | Legacy DOM manipulation library (still widely encountered) |

---

## 3. Back End

Server-side development — choosing a language and understanding how to build APIs, manage data, and handle authentication.

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
| **High-Performance / Compiled** | Go / GoLang | Standard library focus, goroutines |
| | Rust | Actix, Rocket — memory-safe systems |
| | Java | Spring Boot, Jakarta EE |
| | C# | ASP.NET Core |

### 3.2 Things Every Back-End Developer Must Learn

| Area | Topic | Details |
|------|-------|---------|
| **Data** | Caching | Nginx, Apache, Redis, In-Memory stores |
| | Relational Databases | MySQL, PostgreSQL |
| | Session / Cache Stores | Redis |
| | Document Databases | MongoDB, Couchbase, RethinkDB |
| | Search Engines | ElasticSearch, Solr |
| **Testing** | Unit / Functional Testing | Framework-specific testing strategies |
| **APIs** | RESTful Services | Designing and consuming REST APIs |
| **Security** | Authorization / Authentication | OAUTH2, JSON Web Tokens (JWT) |
| **Architecture** | SOA / Microservices | Service decomposition and inter-service communication |
| | WebSocket | Real-time bidirectional communication |
| | ORM / Data Structure | Object-relational mapping and schema design |
| **Deployment** | Deploying Your App | flightplan (Node.js), Fabric (Python), Capistrano (Ruby) |
| **Cloud Platforms** | Digital Ocean | VPS hosting |
| | Amazon Web Services (AWS) | EC2, S3, RDS, Lambda |
| | Azure | Microsoft's cloud platform |
| | Rackspace | Managed cloud hosting |
| | Heroku | Platform-as-a-Service (PaaS) |

---

## 4. DevOps

Operations knowledge for shipping, scaling, and maintaining applications.

| Area | Tool / Topic | Details |
|------|--------------|---------|
| **Containerization** | Docker | Containerized applications and databases |
| **Server Management (CM)** | Linux | Server OS fundamentals |
| | Docker | Container runtime |
| | Ansible | Agentless configuration management |
| | Salt | Scalable config management |
| | Chef | Infrastructure as code |
| | Puppet | Declarative config management |
| **Orchestration** | Big Scale | Kubernetes, Mesos |
| | Small Scale | Docker Swarm, Docker 1.12 swarm mode |
| | UI-Driven | Rancher, Docker Cloud, Docker Datacenter / Universal Control Plane |
| **CI/CD** | Jenkins | Self-hosted continuous integration |
| | SemaphoreCI | Hosted CI/CD |
| | CircleCI | Cloud-based CI/CD |
| | Codeship | Hosted continuous delivery |
| **Local Environment** | Vagrant | Local development environment provisioning |

---

## 5. Front End Developer (Advanced)

Modern front-end engineering beyond the basics — build tools, frameworks, and testing.

| Category | Topic | Details |
|----------|-------|---------|
| **JavaScript Modern** | ES6/ES2015 | Modern JS syntax (transpiled with Babel) |
| **CSS Tools** | Precompilers | SASS / LESS / Stylus |
| | CSS Frameworks | Bootstrap, Foundation |
| | Responsive Design | Mobile-first and adaptive layouts |
| **Task Runners** | Gulp | Stream-based build system |
| | Grunt | Config-based task runner |
| **Dependency Management** | Browserify | Node-style requires in the browser |
| | Webpack | Module bundler and asset pipeline |
| | Bower / Package Management | Legacy front-end package manager |
| | Yeoman.io | Project scaffolding generator |
| **Front End Build Tools** | — | Bundling, minification, transpilation pipelines |
| **MV* JavaScript Frameworks** | React.js | Component-based UI library |
| | | Mobx, Flux, Redux, Relay, GraphQL, create-react-app |
| | Angular.js | Google's full-featured framework |
| | Ember.js | Opinionated convention-over-configuration framework |
| | Vue.js | Progressive, incrementally adoptable framework |
| | ClojureScript | Clojure compiled to JavaScript |
| | Elm | Functional language with no runtime errors |
| **Unit Testing** | Mocha | Flexible test framework |
| | Jasmine | Behavior-driven testing |
| | Karma | Test runner for real browsers |
| | enzyme | React component testing utilities |

---

> **Note on Diagrams**: The mind-map images referenced during the creation of this document are preserved for a future visual diagram update. The tabular format above is the canonical source of truth for curriculum content.
