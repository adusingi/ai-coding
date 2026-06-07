# Docker Fundamentals

This document explains Docker from scratch — what it is, why it exists, and how the four pieces (Dockerfile, multi-stage builds, Docker Compose, and environment files) fit together to ship a real application.

---

## Diagram 1: The Core Problem Docker Solves

<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #080b0f; border: 1px solid #24313b; padding: 40px 30px; margin: 20px 0; overflow-x: auto">
  <div style="font-family: Georgia, serif; font-size: 2rem; font-weight: 400; color: #f2efe6; margin-bottom: 8px; letter-spacing: -0.02em">"It works on my machine."</div>
  <div style="font-size: 0.95rem; color: #9aa7a6; margin-bottom: 48px;">The oldest problem in software. Docker solves it by shipping the machine too.</div>

  <div style="display: flex; gap: 0; align-items: stretch; min-width: 700px;">
    <div style="flex: 1; background: #111922; border: 1px solid #24313b; padding: 28px 24px;">
      <div style="font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 16px;">Without Docker</div>
      <div style="color: #f2efe6; font-size: 0.9rem; line-height: 2;">
        Your Mac: Node 22, pnpm 9<br>
        Server: Node 18, npm 8<br>
        Colleague: Node 20, yarn<br>
        <span style="color: #e57373; margin-top: 8px; display: block;">→ Three different environments.<br>→ Three different bugs.</span>
      </div>
    </div>
    <div style="display: flex; align-items: center; padding: 0 24px; color: #9aa7a6; font-size: 1.6rem;">→</div>
    <div style="flex: 1; background: #111922; border: 1px solid rgba(156, 255, 110, 0.35); padding: 28px 24px;">
      <div style="font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 16px;">With Docker</div>
      <div style="color: #f2efe6; font-size: 0.9rem; line-height: 2;">
        Your Mac: runs a container<br>
        Server: runs the same container<br>
        Colleague: runs the same container<br>
        <span style="color: #9cff6e; margin-top: 8px; display: block;">→ One environment.<br>→ Same result everywhere.</span>
      </div>
    </div>
  </div>

  <div style="margin-top: 28px; padding: 16px 20px; border: 1px solid #24313b; background: #0d1117; font-size: 0.85rem; color: #9aa7a6; line-height: 1.7;">
    A <span style="color: #f2efe6;">container</span> is a lightweight, isolated box that holds your app and everything it needs to run — the right version of Node, the right packages, the right config. You build it once and run it identically anywhere Docker is installed.
  </div>
</div>

---

## What is a TTY?

Before diving into Docker files, one concept you will hit quickly when running Docker commands: **TTY**.

TTY stands for **teletypewriter** — a term from the days of physical terminals connected to mainframes. In modern computing it just means an interactive terminal session where there is a human on the other end.

**When a process has a TTY it can:**
- Pause and ask *"are you sure? (y/n)"*
- Show progress bars that overwrite the same line
- Read a keypress without the user pressing Enter

**Docker containers have no TTY by default** because they run headless — no human is sitting at a terminal. This causes problems when tools expect to ask questions interactively.

<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #080b0f; border: 1px solid #24313b; padding: 32px 28px; margin: 20px 0;">
  <div style="font-family: Georgia, serif; font-size: 1.4rem; font-weight: 400; color: #f2efe6; margin-bottom: 24px;">A real example: pnpm inside Docker</div>

  <div style="display: grid; gap: 12px;">
    <div style="background: #111922; border: 1px solid #24313b; padding: 16px 20px;">
      <div style="font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 10px;">What pnpm wanted to ask</div>
      <div style="color: #f2efe6; font-size: 0.9rem; font-style: italic;">"A different version of pnpm installed these modules. OK to delete and reinstall? (y/n)"</div>
    </div>
    <div style="background: #111922; border: 1px solid #e57373; padding: 16px 20px;">
      <div style="font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 10px;">What happened</div>
      <div style="color: #e57373; font-size: 0.9rem;">No TTY detected → can't ask the question → build aborted</div>
    </div>
    <div style="background: #111922; border: 1px solid rgba(156, 255, 110, 0.35); padding: 16px 20px;">
      <div style="font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 10px;">The fix</div>
      <div style="color: #9cff6e; font-size: 0.9rem; font-family: monospace;">ENV CI=true</div>
      <div style="color: #9aa7a6; font-size: 0.85rem; margin-top: 6px;">Setting <code style="color: #f2efe6;">CI=true</code> tells any tool: <em>"you are running unattended — skip questions, use safe defaults, keep going."</em> pnpm, npm, Jest, and most CLI tools all respect this flag.</div>
    </div>
  </div>

  <div style="margin-top: 20px; padding: 14px 18px; border-left: 3px solid #9aa7a6; color: #9aa7a6; font-size: 0.85rem;">
    You can force a TTY manually with <code style="color: #f2efe6;">docker run -it</code>. The flags stand for <strong style="color: #f2efe6;">i</strong>nteractive + <strong style="color: #f2efe6;">t</strong>ty — that combination opens a proper shell session where you can type commands.
  </div>
</div>

---

## Diagram 2: The Dockerfile — a Recipe for One Image

A **Dockerfile** is a recipe for building a single **image**. It describes one application — what base to start from, what files to copy in, what commands to run, and what port to expose.

<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #080b0f; border: 1px solid #24313b; padding: 40px 30px; margin: 20px 0;">
  <div style="font-family: Georgia, serif; font-size: 1.6rem; font-weight: 400; color: #f2efe6; margin-bottom: 8px;">Think of it like a cake recipe</div>
  <div style="font-size: 0.9rem; color: #9aa7a6; margin-bottom: 36px;">It only knows how to make one cake. It says nothing about what to serve alongside it.</div>

  <div style="display: grid; grid-template-columns: 1fr 60px 1fr; gap: 0; align-items: center;">
    <div style="background: #111922; border: 1px solid #24313b; padding: 24px;">
      <div style="font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 16px;">Dockerfile (the recipe)</div>
      <div style="font-size: 0.88rem; color: #f2efe6; line-height: 2.1;">
        <span style="color: #9aa7a6;">1.</span> Start with Node.js 22<br>
        <span style="color: #9aa7a6;">2.</span> Copy my code in<br>
        <span style="color: #9aa7a6;">3.</span> Run pnpm install<br>
        <span style="color: #9aa7a6;">4.</span> Build the app<br>
        <span style="color: #9aa7a6;">5.</span> Start the server on port 3000
      </div>
    </div>
    <div style="text-align: center; color: #9aa7a6; font-size: 1.6rem;">→</div>
    <div style="background: #111922; border: 1px solid rgba(156, 255, 110, 0.35); padding: 24px;">
      <div style="font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 16px;">Image (the baked cake)</div>
      <div style="font-size: 0.88rem; color: #f2efe6; line-height: 2.1;">
        A frozen, portable snapshot<br>
        of your app + its environment.<br>
        Run it anywhere Docker<br>
        is installed and it behaves<br>
        <span style="color: #9cff6e;">exactly the same.</span>
      </div>
    </div>
  </div>

  <div style="margin-top: 20px; padding: 14px 18px; border-left: 3px solid #9aa7a6; color: #9aa7a6; font-size: 0.85rem; line-height: 1.8;">
    Think of a <strong style="color: #f2efe6;">movie</strong>. The <strong style="color: #f2efe6;">image</strong> is the film reel sitting in the storage room — complete, fixed, ready to use, nobody watching yet. A <strong style="color: #f2efe6;">container</strong> is one screening of that film in a theater — the reel now running as a live event. Fifty theaters can screen the exact same reel simultaneously. What happens in theater 1 (a projector breaks, someone spills popcorn) has zero effect on theater 2. Same image, many fully isolated live processes.
  </div>
</div>

---

## Diagram 3: Multi-Stage Builds — The Assembly Line

A Dockerfile can have multiple stages that run one after the other, like an assembly line. Each stage starts fresh and only passes forward what the next stage needs.

<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #080b0f; border: 1px solid #24313b; padding: 40px 30px; margin: 20px 0;">
  <div style="font-family: Georgia, serif; font-size: 1.6rem; font-weight: 400; color: #f2efe6; margin-bottom: 8px;">Three stages. One lean final image.</div>
  <div style="font-size: 0.9rem; color: #9aa7a6; margin-bottom: 32px;">Each stage starts with a clean machine. Only the output moves forward — not the tools that built it.</div>

  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="width: 30%; background: #111922; border: 1px solid #24313b; padding: 20px; vertical-align: top;">
        <div style="font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 6px;">Stage 1</div>
        <div style="font-size: 1rem; font-weight: 600; color: #f2efe6; margin-bottom: 12px;">deps — The Installer</div>
        <div style="font-size: 0.82rem; color: #9aa7a6; line-height: 1.9; margin-bottom: 16px;">Starts with clean Node.js. Copies only <code style="color: #f2efe6;">package.json</code> and the lockfile. Runs <code style="color: #f2efe6;">pnpm install --ignore-scripts</code> — installs packages but skips their setup scripts.</div>
        <div style="background: rgba(156, 255, 110, 0.07); border: 1px solid rgba(156, 255, 110, 0.25); padding: 8px 12px; font-size: 0.8rem; color: #9cff6e;">Output: node_modules/</div>
      </td>
      <td style="width: 5%; text-align: center; color: #9aa7a6; font-size: 1.2rem; vertical-align: middle; padding: 0 8px;">
        <div style="font-size: 0.65rem; letter-spacing: 0.1em; color: #9aa7a6; margin-bottom: 4px;">passes</div>
        <div>→</div>
      </td>
      <td style="width: 30%; background: #111922; border: 1px solid #24313b; padding: 20px; vertical-align: top;">
        <div style="font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 6px;">Stage 2</div>
        <div style="font-size: 1rem; font-weight: 600; color: #f2efe6; margin-bottom: 12px;">builder — The Compiler</div>
        <div style="font-size: 0.82rem; color: #9aa7a6; line-height: 1.9; margin-bottom: 16px;">Starts fresh. Copies <code style="color: #f2efe6;">node_modules</code> from Stage 1 (no re-download), then all source code. Runs <code style="color: #f2efe6;">next build</code> to compile everything into production files.</div>
        <div style="background: rgba(156, 255, 110, 0.07); border: 1px solid rgba(156, 255, 110, 0.25); padding: 8px 12px; font-size: 0.8rem; color: #9cff6e;">Output: .next/</div>
      </td>
      <td style="width: 5%; text-align: center; color: #9aa7a6; font-size: 1.2rem; vertical-align: middle; padding: 0 8px;">
        <div style="font-size: 0.65rem; letter-spacing: 0.1em; color: #9aa7a6; margin-bottom: 4px;">passes</div>
        <div>→</div>
      </td>
      <td style="width: 30%; background: #111922; border: 1px solid rgba(156, 255, 110, 0.35); padding: 20px; vertical-align: top;">
        <div style="font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 6px;">Stage 3</div>
        <div style="font-size: 1rem; font-weight: 600; color: #f2efe6; margin-bottom: 12px;">runner — The Final Image</div>
        <div style="font-size: 0.82rem; color: #9aa7a6; line-height: 1.9; margin-bottom: 16px;">Starts clean one more time. Copies <em>only</em> the compiled <code style="color: #f2efe6;">.next/</code> output and a few runtime packages. Source code, dev tools, and the full node_modules are left behind entirely.</div>
        <div style="background: rgba(156, 255, 110, 0.07); border: 1px solid rgba(156, 255, 110, 0.25); padding: 8px 12px; font-size: 0.8rem; color: #9cff6e;">Ships to server ✓</div>
      </td>
    </tr>
  </table>

  <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
    <tr>
      <td style="width: 50%; padding: 16px 20px; border: 1px solid #e57373; background: rgba(229, 115, 115, 0.06); font-size: 0.84rem; color: #9aa7a6; line-height: 1.7; vertical-align: top;">
        <span style="color: #e57373; font-weight: 600;">Without multi-stage:</span> the final image contains everything — source code, dev dependencies, build tools. Can be 2–3 GB and includes files you never want on a server.
      </td>
      <td style="width: 50%; padding: 16px 20px; border: 1px solid rgba(156, 255, 110, 0.35); background: rgba(156, 255, 110, 0.05); font-size: 0.84rem; color: #9aa7a6; line-height: 1.7; vertical-align: top;">
        <span style="color: #9cff6e; font-weight: 600;">With multi-stage:</span> the final image contains only what runs. Smaller, faster to deploy, and nothing sensitive leaks into production.
      </td>
    </tr>
  </table>

  <div style="margin-top: 16px; padding: 14px 18px; border-left: 3px solid #9aa7a6; color: #9aa7a6; font-size: 0.85rem;">
    <strong style="color: #f2efe6;">Why call next build directly instead of pnpm build?</strong> pnpm 11 added a safety check: before running any script it verifies that all packages with setup scripts actually ran them. Since Stage 1 used <code style="color: #f2efe6;">--ignore-scripts</code>, they didn't — so pnpm refused. Calling <code style="color: #f2efe6;">node_modules/.bin/next build</code> skips pnpm entirely and goes straight to the compiler.
  </div>
</div>

---

## Diagram 4: Docker Compose — The Conductor

A **Dockerfile** only knows about one service. A real app needs multiple services running together — a database, a web server, a background worker. **Docker Compose** is the tool that coordinates them.

<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #080b0f; border: 1px solid #24313b; padding: 40px 30px; margin: 20px 0;">
  <div style="font-family: Georgia, serif; font-size: 1.6rem; font-weight: 400; color: #f2efe6; margin-bottom: 8px;">The Dockerfile is a musician. Compose is the conductor.</div>
  <div style="font-size: 0.9rem; color: #9aa7a6; margin-bottom: 32px;">Each musician only knows their own part. The conductor tells them when to start, how to connect, and in what order.</div>

  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="width: 200px; background: #111922; border: 2px solid rgba(156, 255, 110, 0.45); padding: 24px 20px; text-align: center; vertical-align: middle;">
        <div style="font-size: 1.8rem; margin-bottom: 10px;">🎼</div>
        <div style="font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: #9cff6e; margin-bottom: 6px;">Docker Compose</div>
        <div style="font-size: 0.8rem; color: #9aa7a6; line-height: 1.6;">Reads one YAML file. Starts everything.</div>
      </td>
      <td style="padding: 0 20px; vertical-align: middle;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 6px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="width: 80px; color: #9aa7a6; font-size: 0.85rem; white-space: nowrap; padding-right: 12px;">→ starts</td>
                  <td style="background: #111922; border: 1px solid #24313b; padding: 12px 16px; font-size: 0.85rem; color: #f2efe6;"><strong>postgres</strong> <span style="color: #9aa7a6; font-size: 0.8rem;">— pre-built image from Docker Hub, no Dockerfile needed</span></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="width: 80px; color: #9aa7a6; font-size: 0.85rem; white-space: nowrap; padding-right: 12px;">→ builds</td>
                  <td style="background: #111922; border: 1px solid #24313b; padding: 12px 16px; font-size: 0.85rem; color: #f2efe6;"><strong>board</strong> <span style="color: #9aa7a6; font-size: 0.8rem;">— uses Dockerfile to build the Next.js app image</span></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="width: 80px; color: #9aa7a6; font-size: 0.85rem; white-space: nowrap; padding-right: 12px;">→ builds</td>
                  <td style="background: #111922; border: 1px solid #24313b; padding: 12px 16px; font-size: 0.85rem; color: #f2efe6;"><strong>agent</strong> <span style="color: #9aa7a6; font-size: 0.8rem;">— uses agent/Dockerfile to build the Telegram bot image</span></td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <div style="margin-top: 20px; padding: 14px 18px; border-left: 3px solid #9aa7a6; color: #9aa7a6; font-size: 0.85rem;">
    Compose also handles <strong style="color: #f2efe6;">networking</strong> (services talk to each other by name — the bot reaches the board at <code style="color: #f2efe6;">http://board:3000</code>), <strong style="color: #f2efe6;">startup order</strong> (board waits for postgres to be healthy), and <strong style="color: #f2efe6;">restart policies</strong> (if a service crashes, Compose restarts it automatically).
  </div>
</div>

---

## Diagram 5: Two Compose Files — Two Environments

The same Compose tool can use different files for different situations.

<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #080b0f; border: 1px solid #24313b; padding: 40px 30px; margin: 20px 0;">
  <div style="font-family: Georgia, serif; font-size: 1.6rem; font-weight: 400; color: #f2efe6; margin-bottom: 32px;">Same tool. Different environments.</div>

  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="width: 50%; background: #111922; border: 1px solid #24313b; padding: 24px; vertical-align: top;">
        <div style="font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 6px;">Local development</div>
        <div style="font-size: 1rem; font-weight: 600; color: #f2efe6; margin-bottom: 16px;">docker-compose.yml</div>
        <div style="font-size: 0.84rem; color: #9aa7a6; line-height: 2; margin-bottom: 16px;">
          Starts: <span style="color: #f2efe6;">Postgres only</span><br>
          Next.js: <span style="color: #f2efe6;">pnpm dev on your Mac</span><br>
          Bot: <span style="color: #f2efe6;">pnpm agent:start on your Mac</span><br>
          Reloads on save: <span style="color: #9cff6e;">yes — hot reload</span><br>
          Use for: <span style="color: #f2efe6;">writing code</span>
        </div>
        <div style="padding: 12px 16px; background: #0d1117; border: 1px solid #24313b; font-size: 0.8rem; color: #9aa7a6; line-height: 1.7;">
          You run the app directly so changes appear instantly. Docker only handles the database — no need to install PostgreSQL on your machine.
        </div>
      </td>
      <td style="width: 4px; background: #080b0f;"></td>
      <td style="width: 50%; background: #111922; border: 1px solid rgba(156, 255, 110, 0.35); padding: 24px; vertical-align: top;">
        <div style="font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 6px;">Production</div>
        <div style="font-size: 1rem; font-weight: 600; color: #f2efe6; margin-bottom: 16px;">docker-compose.prod.yml</div>
        <div style="font-size: 0.84rem; color: #9aa7a6; line-height: 2; margin-bottom: 16px;">
          Starts: <span style="color: #f2efe6;">Postgres + board + agent</span><br>
          Next.js: <span style="color: #f2efe6;">inside Docker</span><br>
          Bot: <span style="color: #f2efe6;">inside Docker</span><br>
          Reloads on save: <span style="color: #e57373;">no — must rebuild image</span><br>
          Use for: <span style="color: #f2efe6;">shipping to a server</span>
        </div>
        <div style="padding: 12px 16px; background: #0d1117; border: 1px solid #24313b; font-size: 0.8rem; color: #9aa7a6; line-height: 1.7;">
          Everything runs inside Docker — the server only needs Docker installed, not Node or pnpm. The whole stack is self-contained.
        </div>
      </td>
    </tr>
  </table>
</div>

---

## Diagram 6: A Real Failure — "Build Passed, Production Still Broke"

One of the easiest Docker mistakes to make is thinking:

> "The image built successfully, so production is fine."

That is false.

A Docker build only proves that Docker could assemble the image. It does **not** prove that:
- the container can actually start
- the startup scripts can run
- the health check works
- the app can talk to its database

<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #080b0f; border: 1px solid #24313b; padding: 40px 30px; margin: 20px 0;">
  <div style="font-family: Georgia, serif; font-size: 1.6rem; font-weight: 400; color: #f2efe6; margin-bottom: 8px;">A container can build fine and still fail at startup</div>
  <div style="font-size: 0.9rem; color: #9aa7a6; margin-bottom: 32px;">This is what happened in a real Next.js + Postgres deployment.</div>

  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="width: 32%; background: #111922; border: 1px solid rgba(156, 255, 110, 0.35); padding: 22px; vertical-align: top;">
        <div style="font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 8px;">What looked good</div>
        <div style="font-size: 1rem; font-weight: 600; color: #9cff6e; margin-bottom: 12px;">docker build succeeded</div>
        <div style="font-size: 0.84rem; color: #9aa7a6; line-height: 1.8;">
          Next.js compiled.<br>
          The image was created.<br>
          Docker had no complaint.<br>
          <span style="color: #f2efe6;">It looked ready to ship.</span>
        </div>
      </td>
      <td style="width: 4%; text-align: center; color: #9aa7a6; font-size: 1.4rem; vertical-align: middle;">→</td>
      <td style="width: 32%; background: #111922; border: 1px solid #e57373; padding: 22px; vertical-align: top;">
        <div style="font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 8px;">What really happened</div>
        <div style="font-size: 1rem; font-weight: 600; color: #e57373; margin-bottom: 12px;">container startup failed</div>
        <div style="font-size: 0.84rem; color: #9aa7a6; line-height: 1.8;">
          Entrypoint ran a TypeScript script.<br>
          The script needed runtime packages.<br>
          The final image did not include them.<br>
          <span style="color: #f2efe6;">So the app never reached "ready".</span>
        </div>
      </td>
      <td style="width: 4%; text-align: center; color: #9aa7a6; font-size: 1.4rem; vertical-align: middle;">→</td>
      <td style="width: 28%; background: #111922; border: 1px solid rgba(156, 255, 110, 0.35); padding: 22px; vertical-align: top;">
        <div style="font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 8px;">The real fix</div>
        <div style="font-size: 1rem; font-weight: 600; color: #9cff6e; margin-bottom: 12px;">make the runner image truly runnable</div>
        <div style="font-size: 0.84rem; color: #9aa7a6; line-height: 1.8;">
          Install the runtime dependencies.<br>
          Include the health-check tool.<br>
          Fix the startup script itself.<br>
          Fail fast on missing config.
        </div>
      </td>
    </tr>
  </table>

  <div style="margin-top: 22px; padding: 16px 20px; border: 1px solid #24313b; background: #0d1117; font-size: 0.85rem; color: #9aa7a6; line-height: 1.8;">
    <strong style="color: #f2efe6;">The key idea:</strong> a production container is not just the web server binary. It is <em>everything needed on the real startup path</em> — entrypoint scripts, runtime packages, health-check commands, and required environment values.
  </div>
</div>

### What went wrong in plain English

The deployment used a multi-stage Docker build:
- one stage installed dependencies
- one stage built the Next.js app
- the final `runner` stage copied only the compiled output

That is normally good practice. The problem was that the final image also ran startup scripts before launching the app:
- `entrypoint.sh`
- `check-and-seed.ts`
- `seed.ts`

Those scripts were part of production startup, but the final image did not fully support them.

The important lesson is **not**:

> "Never run scripts before the app starts."

Running scripts before startup is often completely valid. Many real systems do this:
- database migrations
- seed checks
- config generation
- cache warming

The real problem is different:

> startup became responsible for too many things, and the final runtime image was not fully prepared to do all of them safely.

Three separate things were wrong:

1. **The startup scripts needed packages that were not present in the final image.**  
   The app code was there, but the scripts needed packages like `postgres` and `drizzle-orm` at runtime.

2. **The health check used `curl`, but `curl` was not installed in the final image.**  
   That meant Docker could mark the service unhealthy even if the app itself had started.

3. **One startup script used top-level `await` in a way that failed under the actual container execution mode.**  
   So the script crashed before it could finish the database check.

### The lesson from this failure

<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #080b0f; border: 1px solid #24313b; padding: 28px 24px; margin: 20px 0;">
  <div style="font-family: Georgia, serif; font-size: 1.35rem; font-weight: 400; color: #f2efe6; margin-bottom: 22px;">A safe mental model</div>

  <div style="display: grid; gap: 12px;">
    <div style="background: #111922; border: 1px solid #24313b; padding: 14px 18px; color: #9aa7a6; font-size: 0.86rem; line-height: 1.7;">
      <span style="color: #f2efe6; font-weight: 600;">Build success</span> means: Docker assembled the image.
    </div>
    <div style="background: #111922; border: 1px solid #24313b; padding: 14px 18px; color: #9aa7a6; font-size: 0.86rem; line-height: 1.7;">
      <span style="color: #f2efe6; font-weight: 600;">Startup success</span> means: the container can execute its entrypoint and stay alive.
    </div>
    <div style="background: #111922; border: 1px solid #24313b; padding: 14px 18px; color: #9aa7a6; font-size: 0.86rem; line-height: 1.7;">
      <span style="color: #f2efe6; font-weight: 600;">Health success</span> means: Docker can run the health-check command inside the shipped image.
    </div>
    <div style="background: #111922; border: 1px solid rgba(156, 255, 110, 0.35); padding: 14px 18px; color: #9aa7a6; font-size: 0.86rem; line-height: 1.7;">
      <span style="color: #9cff6e; font-weight: 600;">Production success</span> means: all three are true at the same time.
    </div>
  </div>
</div>

### The deeper architectural lesson

<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #080b0f; border: 1px solid #24313b; padding: 28px 24px; margin: 20px 0;">
  <div style="font-family: Georgia, serif; font-size: 1.35rem; font-weight: 400; color: #f2efe6; margin-bottom: 22px;">One startup path, many responsibilities</div>

  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="width: 48%; background: #111922; border: 1px solid #e57373; padding: 18px 20px; vertical-align: top;">
        <div style="font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 8px;">Fragile version</div>
        <div style="color: #e57373; font-size: 0.95rem; font-weight: 600; margin-bottom: 10px;">One failure blocks everything</div>
        <div style="color: #9aa7a6; font-size: 0.84rem; line-height: 1.8;">
          container starts<br>
          → run setup script<br>
          → check database<br>
          → maybe seed data<br>
          → maybe run health tooling<br>
          → finally start the app
        </div>
      </td>
      <td style="width: 4%;"></td>
      <td style="width: 48%; background: #111922; border: 1px solid rgba(156, 255, 110, 0.35); padding: 18px 20px; vertical-align: top;">
        <div style="font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase; color: #9aa7a6; margin-bottom: 8px;">Stronger version</div>
        <div style="color: #9cff6e; font-size: 0.95rem; font-weight: 600; margin-bottom: 10px;">Startup does the minimum</div>
        <div style="color: #9aa7a6; font-size: 0.84rem; line-height: 1.8;">
          container starts<br>
          → launch the app<br>
          → keep health check simple<br>
          → run seeding/migrations separately<br>
          → isolate setup failures from app availability
        </div>
      </td>
    </tr>
  </table>

  <div style="margin-top: 18px; padding: 14px 18px; border-left: 3px solid #9aa7a6; color: #9aa7a6; font-size: 0.85rem; line-height: 1.8;">
    The more responsibilities you attach to startup, the more fragile startup becomes. Your web app is then only as reliable as the weakest pre-start task.
  </div>
</div>

### Should setup tasks always be separated?

No. Small setup work during startup can be fine.

Good candidates to keep in startup:
- tiny, fast checks
- deterministic config generation
- logic that the app truly cannot run without

Better candidates to separate into one-off jobs or deployment steps:
- large seeding operations
- anything that needs many extra dependencies
- tasks that may fail for environmental reasons unrelated to serving traffic
- tasks you may want to rerun manually without restarting the app

### Rules worth remembering

- In a multi-stage build, the final stage must contain **everything used at runtime**, not just the main app binary.
- If a script runs from `CMD` or `ENTRYPOINT`, treat it as **production code**.
- Do not overload startup with many unrelated responsibilities unless you are willing to make the runtime image support all of them.
- Every health check command must exist inside the final image.
- Required environment variables should fail fast with a clear error, not silently become blank.
- Always test the container the way production runs it, not just with `docker build`.

> For a deeper explanation of when setup work belongs in startup versus a separate job, see [Docker Startup vs. Bootstrap](./docker-startup-vs-bootstrap.md).

---

## Diagram 7: How All Four Pieces Connect

<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #080b0f; border: 1px solid #24313b; padding: 40px 30px; margin: 20px 0;">
  <div style="font-family: Georgia, serif; font-size: 1.6rem; font-weight: 400; color: #f2efe6; margin-bottom: 32px;">The full picture</div>

  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="width: 220px; background: #111922; border: 1px solid #24313b; padding: 12px 16px; font-size: 0.85rem; vertical-align: middle;">
        <span style="color: #9aa7a6; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; display: block; margin-bottom: 4px;">File</span>
        <span style="color: #f2efe6;">Dockerfile</span>
      </td>
      <td style="width: 40px; text-align: center; color: #9aa7a6; vertical-align: middle; padding: 4px;">→</td>
      <td style="background: #111922; border: 1px solid #24313b; padding: 12px 16px; font-size: 0.84rem; color: #9aa7a6; vertical-align: middle;">
        Defines how to build <strong style="color: #f2efe6;">one image</strong> (the board web app)
      </td>
    </tr>
    <tr><td colspan="3" style="padding: 4px 0;"></td></tr>
    <tr>
      <td style="background: #111922; border: 1px solid #24313b; padding: 12px 16px; font-size: 0.85rem; vertical-align: middle;">
        <span style="color: #9aa7a6; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; display: block; margin-bottom: 4px;">File</span>
        <span style="color: #f2efe6;">agent/Dockerfile</span>
      </td>
      <td style="text-align: center; color: #9aa7a6; vertical-align: middle; padding: 4px;">→</td>
      <td style="background: #111922; border: 1px solid #24313b; padding: 12px 16px; font-size: 0.84rem; color: #9aa7a6; vertical-align: middle;">
        Defines how to build <strong style="color: #f2efe6;">one image</strong> (the Telegram bot)
      </td>
    </tr>
    <tr><td colspan="3" style="padding: 4px 0;"></td></tr>
    <tr>
      <td style="background: #111922; border: 1px solid #24313b; padding: 12px 16px; font-size: 0.85rem; vertical-align: middle;">
        <span style="color: #9aa7a6; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; display: block; margin-bottom: 4px;">File</span>
        <span style="color: #f2efe6;">docker-compose.yml</span>
      </td>
      <td style="text-align: center; color: #9aa7a6; vertical-align: middle; padding: 4px;">→</td>
      <td style="background: #111922; border: 1px solid #24313b; padding: 12px 16px; font-size: 0.84rem; color: #9aa7a6; vertical-align: middle;">
        Starts <strong style="color: #f2efe6;">Postgres only</strong> for local dev. You run everything else on your machine.
      </td>
    </tr>
    <tr><td colspan="3" style="padding: 4px 0;"></td></tr>
    <tr>
      <td style="background: #111922; border: 1px solid rgba(156, 255, 110, 0.35); padding: 12px 16px; font-size: 0.85rem; vertical-align: middle;">
        <span style="color: #9aa7a6; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; display: block; margin-bottom: 4px;">File</span>
        <span style="color: #9cff6e;">docker-compose.prod.yml</span>
      </td>
      <td style="text-align: center; color: #9aa7a6; vertical-align: middle; padding: 4px;">→</td>
      <td style="background: #111922; border: 1px solid rgba(156, 255, 110, 0.2); padding: 12px 16px; font-size: 0.84rem; color: #9aa7a6; vertical-align: middle;">
        Reads both Dockerfiles, builds both images, starts <strong style="color: #f2efe6;">Postgres + board + agent</strong> together on a server.
      </td>
    </tr>
    <tr><td colspan="3" style="padding: 4px 0;"></td></tr>
    <tr>
      <td style="background: #111922; border: 1px solid #24313b; padding: 12px 16px; font-size: 0.85rem; vertical-align: middle;">
        <span style="color: #9aa7a6; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; display: block; margin-bottom: 4px;">File</span>
        <span style="color: #f2efe6;">.env</span>
      </td>
      <td style="text-align: center; color: #9aa7a6; vertical-align: middle; padding: 4px;">→</td>
      <td style="background: #111922; border: 1px solid #24313b; padding: 12px 16px; font-size: 0.84rem; color: #9aa7a6; vertical-align: middle;">
        Holds secrets and config. Compose reads it automatically and injects values into every service. <strong style="color: #f2efe6;">Never committed to git.</strong>
      </td>
    </tr>
  </table>

  <div style="margin-top: 20px; padding: 16px 20px; border: 1px solid #24313b; background: #0d1117; font-size: 0.85rem; color: #9aa7a6; line-height: 1.8;">
    <strong style="color: #f2efe6;">PostgreSQL needs no Dockerfile</strong> because it is a well-known, pre-built image published on Docker Hub. You reference it by name (<code style="color: #f2efe6;">postgres:16-alpine</code>) and Docker downloads it. You only write a Dockerfile for code <em>you</em> built.
  </div>
</div>

---

## Key Terms at a Glance

| Term | One sentence |
|---|---|
| **Image** | A frozen, portable snapshot of an app and its environment. Built from a Dockerfile. |
| **Container** | An image running as a live process. Isolated from everything else on the machine. |
| **Dockerfile** | A step-by-step recipe for building one image. |
| **Multi-stage build** | A Dockerfile with multiple stages. Only the final stage ships — earlier stages are discarded. |
| **Docker Compose** | A tool for starting multiple containers together from a single YAML file. |
| **TTY** | An interactive terminal session. Docker containers have none by default — use `CI=true` to tell tools not to expect one. |
| **`expose`** | Makes a port reachable within the Docker network only. Other containers can use it; your laptop cannot. |
| **`ports`** | Maps a container port to your host machine. `"3000:3000"` means your laptop can reach it at localhost:3000. |
