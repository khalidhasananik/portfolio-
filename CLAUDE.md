# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this project is

Khalid's personal portfolio site. The original was built from a GitHub template and personalized with ChatGPT web + limited coding knowledge, pre-dating AI coding agents — expect rough, non-idiomatic patterns in it, not deliberate design choices.

**We rebuilt from scratch instead of patching the original**, and as of 2026-09-19 the rebuild has been cut over: the Next.js site now lives at the repo root on `main`. Read [MEMORY.md](MEMORY.md) before doing anything — it has the decisions, the section-by-section build history, and where matching content came from in the old codebase. This file (CLAUDE.md) is the *how to work here*; MEMORY.md is the *what's true right now*. Don't re-derive either from scratch each session.

## Repo layout

- **Repo root** — the site itself: Next.js (App Router, v16+), TypeScript, Tailwind CSS. Formerly nested under `web/`; flattened to the root on 2026-09-19 when the new site went live. Run all commands (`npm run dev`, `npm run build`, `npx shadcn@latest add ...`) from the repo root now, not from a `web/` subdirectory.
  - **Icons: `lucide-animated`, pulled per-icon via the shadcn CLI** (`npx shadcn@latest add "@lucide-animated/<icon-name>"`, e.g. `github`, `linkedin`) — not the plain `lucide-react` package (still a dependency but currently unused directly; components pulled from other registries may bring it in transitively). Each icon lands in `src/components/ui/` as its own `forwardRef` component: a `<div>` wrapping an inline SVG, Motion-driven (`motion` npm package, already installed), animating a hover-triggered path-draw/morph by default via `onMouseEnter`/`onMouseLeave`, plus an imperative `startAnimation()`/`stopAnimation()` handle for manual control. Size via the `size` prop (pixels, default 28) — **not** a Tailwind `size-*` class, since that only sizes the wrapper div, not the inner SVG. Note: `lucide-animated` icons are Lucide's generic outline style, not brand-accurate marks — fine for most UI icons, but flag it to the user if a brand logo (GitHub, LinkedIn, etc.) needs to look pixel-exact.
  - The **shadcn CLI is initialized** (`components.json`, style `base-nova`, headless primitives via `@base-ui/react` not Radix, `iconLibrary: lucide`). `src/lib/utils.ts` exports `cn()` (via the `cn` npm package, swapped in by shadcn init).
  - **Three registries are wired up in `components.json`**, all installed the same way (`npx shadcn@latest add <namespace>/<item>`), but with different auth needs:
    - **`@react-bits`** (`https://reactbits.dev/r/{name}.json`) — public, no auth. `npx shadcn@latest add @react-bits/<ComponentName>-TS-TW`. **Prefer the `-TS-TW` suffix** (TypeScript + Tailwind) to match this project's stack, not `-JS-CSS` (plain `.jsx`/`.css`, breaks the all-TS/all-Tailwind convention) — flag it if a component only ships `-JS-CSS`.
    - **`@lucide-animated`** (`https://lucide-animated.com/r/{name}.json`) — public, no auth. `npx shadcn@latest add @lucide-animated/<icon-name>`. This is the default path for any new icon — see above.
    - **`@21st`** (`https://21st.dev/r/{name}`) — configured and working via `npx shadcn@latest add @21st/<author>/<slug>` (verified with `--dry-run`; `API_KEY_21ST` is set in `.env.local`, gitignored). **But the user found the separate `@21st-dev/cli` package unreliable** (its own `add` command doesn't read `.env.local`, only real shell env vars — confusing, so avoid recommending it) **and has decided to paste 21st.dev components manually instead of installing via CLI at all.** Treat 21st.dev components as pasted code by default (same handling as react-bits' pasted-code path below), not as something to `shadcn add`. The registry stays configured in case that preference changes — don't remove it, just don't default to using it.
    - Use `--dry-run` first on any of these to see what files/deps an item would add before committing, and `--diff`/`--view` to inspect without writing.
  - Component placement convention:
    - `src/components/` (flat root) — raw components as landed by `shadcn add @react-bits/...` or pasted in from 21st.dev, kept close to their original form.
    - `src/components/ui/` — shadcn-native primitives (e.g. `button.tsx`) and small generic reusable atoms.
    - `src/components/sections/` — the actual page sections wired into `page.tsx`: composes the raw components above with real ported content. Create `ui/`/`sections/` as needed rather than pre-scaffolding empty ones.
  - `CLAUDE.md` / `AGENTS.md` auto-regenerate at the repo root when the Next.js dev server (`next dev`) runs — **this file you're reading is the real one and will get overwritten/appended to by that regeneration.** If `next dev` clobbers it, restore the real content from git history (this is a known Next.js quirk, not data loss) rather than working from the regenerated boilerplate. The regenerated version also warns that this Next.js version may differ from training data — check `node_modules/next/dist/docs/` before relying on remembered Next.js APIs.
- **`legacy-cra-site` branch** — the old Create React App site, exactly as it stood at the moment of cutover (2026-09-19). Kept for history/reference only (bio copy, project descriptions, timeline entries, images, styling ideas) — not part of `main`'s working tree anymore, not maintained, don't build on it. Check it out (`git checkout legacy-cra-site -- <path>`) if you need to pull something from the old codebase.

`main` is the live production branch. As of 2026-09-19 it serves the new Next.js site (hosting migration to Vercel is the user's own follow-up — the repo is ready for it, but no Vercel project is wired up yet). Never push directly to it or merge into it without the user explicitly asking.

## The main workflow: "use X component for Y section"

The user is collecting components from **reactbits.dev** and **21st.dev** for nearly every section, and will either (a) paste code directly, or (b) ask to pull one via the shadcn CLI (`npx shadcn@latest add @react-bits/<Name>-TS-TW`, run from the repo root), with an instruction like "use this for the hero" or "use this for Contact." Each time, that means:

1. **Get it in.** For a CLI pull: run `--dry-run` first to see what files/deps it brings in, confirm the `-TS-TW` variant is what's being added (flag it if only `-JS-CSS` exists), then add for real — it lands flat in `src/components/`. For pasted code: place it the same way, or straight into `src/components/ui/` if it's a generic primitive.
2. **Install what it needs.** For pasted code, check its imports against `package.json` — reactbits/21st.dev components commonly pull in `framer-motion` (or `motion`), `class-variance-authority`, `gsap`, etc. (this project's shadcn primitives are `@base-ui/react`, not Radix — a component assuming Radix may need adapting). Install only what's actually imported, don't pre-guess. Icons: pull the corresponding one from `@lucide-animated` (`npx shadcn@latest add @lucide-animated/<icon-name>`) instead of a static `lucide-react` import, unless the icon choice is load-bearing (e.g. a brand logo) — flag that case to the user rather than silently swapping.
3. **Build the section.** Compose the raw component(s) into `src/components/sections/<Section>.tsx` and wire that into `src/app/page.tsx` (or the relevant layout) in the right position.
4. **Port real content**, don't leave placeholder/lorem-ipsum text. MEMORY.md's section tracker says exactly which old file (on `legacy-cra-site`) has the matching real content (bio text, skills, timeline entries, project list, social links) — pull it via Read or `git show legacy-cra-site:<path>`, don't retype from memory.
5. **Update the tracker** in MEMORY.md: mark the section done, note which component/source was used, and flag anything ported imperfectly (e.g. a data shape that needs the user's input, like real project links/screenshots).

If a request is ambiguous (which section, which of several pasted components, whether to replace or add alongside existing work), ask rather than guessing — these are one-shot placements the user will look at directly.

## Code intelligence: CodeGraph

`.codegraph/` was initialized against the **old** CRA site's `src/` and has not been re-run since the cutover — it is now stale (indexes code that no longer exists on `main`). Re-init/sync it (`codegraph sync` or re-`init`) before relying on it again; until then, prefer plain Read/Grep for this repo.

- MCP tool `codegraph_explore` (when available): one call returns verbatim source plus call paths.
- Shell fallback: `codegraph explore "<symbol names or question>"`.

## Conventions

- No speculative abstractions, config options, or "future-proofing" — this is a small personal site.
- Delete replaced/dead code outright (don't comment it out "for reference" — git history already has it).
- Treat any credential (the old site's EmailJS service ID/template ID/public key were hardcoded and already known-exposed — see MEMORY.md) as sensitive: never hardcode in this site, use env vars (`.env.local`, gitignored), and flag any newly-found hardcoded secret to the user immediately rather than silently fixing it.
- No destructive or hard-to-reverse actions (deleting branches/workflows, DNS/domain changes, key rotation, force-pushing) without explicit confirmation.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
