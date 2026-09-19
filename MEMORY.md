# MEMORY.md

Running project memory for Claude sessions working on this repo. Unlike [task.md](task.md) (the plan/checklist), this file is *why things are the way they are* and *what's already been decided* — read it to avoid re-litigating settled questions or re-discovering things already known. Keep entries dated and terse; prune once something is fully superseded by the actual code (e.g. once EmailJS keys are rotated and moved to env vars, remove the entry about them being hardcoded).

## Origin & constraints

- Site was built from a GitHub portfolio template, personalized via ChatGPT web + the owner's limited coding knowledge, before AI coding agents existed. Rough/non-idiomatic code is leftover history, not intentional design — safe to clean up aggressively rather than preserve "in case it was deliberate."
- Owner (Khalid) is doing a full revamp: fix anomalies, modernize the stack, move hosting, add SEO/analytics. Full scope lives in [task.md](task.md).

## Decisions made (2026-09-19)

- **Hosting: GitHub Pages → Vercel.** Chosen over Cloudflare Pages for easier DX/preview deployments; owner explicitly called Vercel "most easy."
  - How to apply: any hosting-specific config (redirects, env vars, headers) should target Vercel conventions (`vercel.json`), not Netlify's `_redirects` (currently present in `public/` but unused by the target host) or GitHub Pages' Jekyll assumptions.
- **Build tooling: Create React App → Vite.** CRA (`react-scripts`) is deprecated/unmaintained; its dev server is also what was causing the "can't run a real dev server, only `npm start`" complaint (slow webpack dev server vs Vite's near-instant HMR).
  - How to apply: entry point moves to project root `index.html` (Vite convention), env vars change from `process.env.REACT_APP_*` to `import.meta.env.VITE_*`, and `package.json` scripts change from `react-scripts start/build` to `vite`/`vite build`.
- **Analytics: not yet decided.** Owner's initial instinct was GTM + GA4; flagged in task.md that a lightweight privacy-first alternative (Plausible, Umami, Fathom) may suit a personal portfolio better and avoid cookie-consent overhead. Revisit after other phases — don't implement either until asked.

## Known issues to fix (found during initial audit, 2026-09-19)

- `build/` directory was committed to git (tracked output, ~25 files) — should never have been tracked; remove and confirm `.gitignore` covers it going forward.
- `src/components/Contact.tsx` has **live EmailJS credentials hardcoded** in source: service ID `service_j9kg0m6`, template ID `template_1u0yhej`, public key `RUEM691sObjwldyCZ`. These have been in a public repo — treat as compromised, not just misplaced. Owner needs to rotate them in the EmailJS dashboard in addition to moving new ones to env vars.
- Same file has ~280 lines of dead, commented-out earlier implementation attempts — delete outright, don't keep "for reference."
- `public/manifest.json` still has CRA placeholder content (`"name": "Create React App Sample"`) — never personalized.
- `package.json` `homepage` field is malformed (`"https://https://khalidhasananik.github.io/portfolio-/"`, duplicated protocol) — moot once off GitHub Pages, just remove.
- No Open Graph/Twitter Card tags, no `sitemap.xml`, `robots.txt` is the untouched CRA default — all queued in task.md's SEO phase.
- Styling is inconsistent: mostly SCSS in `src/assets/styles/`, but one stray `Contact.css` colocated with its component.

## Tooling

- **CodeGraph** was added 2026-09-19 (`.codegraph/`, gitignored, local-only DB) for code-graph-based navigation (symbol search, callers/callees, impact analysis). As of that date it was indexed (`codegraph status`: 16 files, 100 nodes, 131 edges) but **not yet registered as an MCP server** for Claude Code in this environment — no `codegraph_*` tools were available in-session. Needs `codegraph install` run and the Claude Code session restarted before those tools show up. See [CLAUDE.md](CLAUDE.md) for how to use it once available.

## Status snapshot

- 2026-09-19: `revamp/modernize-2026` branch created off `main`. `task.md`, `CLAUDE.md`, `MEMORY.md` added. No application code changed yet — Phase 1 (repo/tooling cleanup + Vite migration) has not started.
