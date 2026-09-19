# MEMORY.md

Running project memory for Claude sessions working on this repo. Unlike [task.md](task.md) (the phased plan) or [CLAUDE.md](CLAUDE.md) (how to work here), this file is *why things are the way they are* and *what's true right now* — read it first in a new session, especially the section tracker, before doing anything. Keep entries dated; prune once something is fully superseded by the actual code.

## Big pivot (2026-09-19): rebuild from scratch, not patch

Original plan (see task.md history) was to fix the existing Create React App site in place. Superseded: the user found a reactbits.dev / 21st.dev component to use for almost every section, so patching the old markup first just to tear it out again would be wasted work. **New approach: rebuild the site from scratch in a new Next.js project, porting real content (not markup/styling) from the old site as each section is built.**

## Decisions made

- **2026-09-19 — Hosting: Vercel** (superseded nothing, still current). Chosen over Cloudflare Pages for DX/preview deployments.
- **2026-09-19 — Framework: ~~Vite~~ → Next.js (App Router).** Originally planned Vite; revised same day once the "rebuild from scratch" pivot happened. Chosen because it lines up with the SEO phase (file-convention sitemap/robots/OG-image generation, Metadata API) and is Vercel's own framework (zero-config deploys, image optimization). Scaffolded with `create-next-app@16` (Next.js 16), TypeScript, Tailwind CSS, App Router, `src/` dir, import alias `@/*`, ESLint, ID `web/`.
- **2026-09-19 — Icons: `lucide-react`.** Installed in `web/`.
- **2026-09-19 — Styling glue: `clsx` + `tailwind-merge`**, exposed as `cn()` in `web/src/lib/utils.ts`. Installed preemptively because reactbits.dev/21st.dev components almost universally import `cn` from a utils module — added now to avoid every first paste breaking on a missing import.
- **Analytics: still not decided.** GTM+GA4 vs. a lightweight privacy-first option (Plausible/Umami/Fathom) — revisit after the rebuild, not blocking section work.

## Repo layout right now

- Repo root (`src/`, `public/`, root `package.json`) = **old CRA site**. Frozen as a read-only content source — do not keep fixing it, only extract content/data/images from it. Original audit findings about it (hardcoded EmailJS creds, dead commented code, committed `build/`, etc.) still stand but are no longer "things to fix" — they're context for what to avoid repeating in the rebuild, and a reminder that the EmailJS keys need rotating regardless of which codebase they end up referenced from.
- `web/` = **new Next.js site**, actively being built section by section. This is where all new work happens.
- `.codegraph/` at repo root indexes the **old** `src/` only, not yet re-run against `web/`. Re-init/sync it once `web/` has enough real code to be worth indexing.

## Section build tracker

The core loop is: user pastes a reactbits.dev/21st.dev component and says "use this for `<section>`." Status of each target section in `web/`, and exactly where its real content lives in the old site for porting:

| Section | Status | Old content source | Notes |
|---|---|---|---|
| Global layout / theme (dark-light mode, fonts, `<head>` metadata) | Not started | `src/App.tsx` (mode state/toggle logic), `web/src/app/layout.tsx` (current default scaffold) | Old site did dark/light via a class on a wrapper div + custom CSS; decide fresh whether to keep manual toggle or use Tailwind's `dark:` + `next-themes`. |
| Navigation | Not started | `src/components/Navigation.tsx` | Nav items: Expertise, History, Projects, Contact (scroll-to-section anchors). Old version used MUI AppBar/Drawer — being fully replaced. |
| Hero / "Main" | Not started | `src/components/Main.tsx` | Real content: name "Khalid Hasan", title "Software Engineer", GitHub (`github.com/khalidhasananik`) + LinkedIn (`linkedin.com/in/khalidhasananik`) links. |
| Expertise / Skills | Not started | `src/components/Expertise.tsx` | 4 real skill cards with copy already written: Automation Engineering, Full Stack Web Development, Machine Learning, Problem Solving — each has a description paragraph + tech-stack chip list in the source, worth reusing verbatim or near-verbatim. |
| Timeline / History | Not started | `src/components/Timeline.tsx` | 3 real entries (uses `react-vertical-timeline-component`, being replaced): AI Ops & Automation Engineer @ AWTOMATIG (Jul 2025–Present), Software Development Intern @ Ahsan Technologies Ltd. (Sep–Dec 2024), Education: BSc Computer Science and Engineering @ North South University (2021–2024). Two older entries (Staff Engineer Intern, Data Analyst Intern) are commented out in the source — ask the user before reviving those, don't assume they're current. |
| Projects | Not started | `src/components/Project.tsx` | 6 real project cards, each with title/description/link/thumbnail (`src/assets/images/1.png`–`6.png`): Real-Time Soil Analysis and Predictive Analytics (huggingface.co/spaces/khalidhasananik/CSE499), Dengue Cases Prediction (github: CSE445-Project), AutoDoc: VS Code Extension (github: AutoDoc_VSCode_Extension), Linux Task Manager (github: LinuxTaskmanager), Crossy Road (github: crossyroad, built with Three.js), Coin Game (github: myfirstgame, Unity/C#). An older mock-data project set (`mock01`–`mock11`) is commented out — ignore, it's from the original template author, not the user's own work. |
| Contact | Not started | `src/components/Contact.tsx` | **Contains the hardcoded, already-exposed EmailJS credentials** (service `service_j9kg0m6`, template `template_1u0yhej`, public key `RUEM691sObjwldyCZ`) — do not copy these into the new site as-is; new implementation needs its own env-var-based setup, and the owner still needs to rotate these in the EmailJS dashboard independent of the rebuild. |
| Footer | Not started | `src/components/Footer.tsx` | Real content: GitHub + LinkedIn icon links, "© 2025 Khalid Hasan Anik. All rights reserved." |

Update this table as sections land: mark status (`Not started` / `In progress` / `Done`), and add a short note on which pasted component (reactbits/21st.dev, and which one) was used, so it's traceable later.

## Known issues in the old codebase (context, not active tasks)

Kept for reference so the rebuild doesn't repeat them — see task.md for full detail:
- Live EmailJS credentials hardcoded in source (needs rotation regardless of rebuild).
- `build/` directory committed to git.
- ~280 lines of dead commented-out code in the old `Contact.tsx`.
- Placeholder `manifest.json`, malformed `homepage` field in root `package.json`, no OG tags/sitemap, default `robots.txt`.

## Tooling

- **CodeGraph**: registered and working as an MCP tool (`codegraph_explore`) as of 2026-09-19. Indexes repo root `src/` (old site) — 16 files, 100 nodes, 131 edges at last check. Not yet pointed at `web/`.

## Status snapshot

- 2026-09-19: `revamp/modernize-2026` branch has `task.md`, `CLAUDE.md`, `MEMORY.md`. Pivoted from "fix in place" to "rebuild from scratch" the same day. Scaffolded `web/` (Next.js 16 + TS + Tailwind + App Router + `src/` dir), installed `lucide-react`, `clsx`, `tailwind-merge`, added `web/src/lib/utils.ts` (`cn()` helper). No sections built yet — all rows in the tracker above are "Not started." `web/` scaffold not yet committed to git.
