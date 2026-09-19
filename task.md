# Portfolio Rebuild — Task List

Branch: `revamp/modernize-2026`. `main` stays untouched and live on GitHub Pages until this work is ready to cut over.

**2026-09-19 pivot:** originally planned to fix the existing Create React App site in place (see git history of this file for that plan). Superseded — the user found a reactbits.dev/21st.dev component for almost every section, so we're **rebuilding from scratch** in a new Next.js project (`web/`) instead, porting real content from the old site section by section. See [MEMORY.md](MEMORY.md) for the decision log and the live section-by-section build tracker — that tracker, not this file, is what a new session should check first for "what's done."

## Decisions locked in

- **Hosting:** Vercel (unchanged from original plan).
- **Framework:** Next.js (App Router) — changed from the original Vite plan once the rebuild-from-scratch pivot happened.
- **Styling:** Tailwind CSS.
- **Icons:** `lucide-react`.
- **Component sources:** reactbits.dev and 21st.dev, pasted in by the user one section at a time.

## Phase 1 — Scaffold (done 2026-09-19)

- [x] Create `web/` — Next.js 16, TypeScript, Tailwind CSS, App Router, `src/` dir, `@/*` import alias.
- [x] Install `lucide-react`.
- [x] Install `clsx` + `tailwind-merge`, add `cn()` helper at `web/src/lib/utils.ts` (near-universal dependency for reactbits/21st.dev components).
- [ ] Commit the `web/` scaffold to git.

## Phase 2 — Build sections (in progress)

Work happens one section at a time: user pastes a component + names a target section, it gets adapted into `web/`, real content gets ported in from the old site, and the tracker in MEMORY.md gets updated. Don't duplicate that tracker here — check MEMORY.md for current status per section (Navigation, Hero, Expertise, Timeline, Projects, Contact, Footer, global layout/theme).

- [ ] All sections built and wired into `web/src/app/page.tsx`.
- [ ] Contact form working end-to-end with its own env-var-based EmailJS (or alternative) setup — not the old hardcoded keys.
- [ ] Dark/light mode decided and implemented fresh (old site used a manual class toggle; consider `next-themes` + Tailwind `dark:` instead).
- [ ] Responsive/mobile pass once sections are in place.

## Phase 3 — Retire the old site

- [ ] Once `web/` fully replaces the old site's functionality, decide cutover approach (promote `web/` contents to repo root vs. keep as subfolder — revisit once Vercel project setup is underway, since Vercel can build from a subfolder directly).
- [ ] Rotate the exposed EmailJS credentials in the EmailJS dashboard (needed regardless of the rebuild — they've been public).
- [ ] Delete/archive the old `src/`, `public/`, `build/`, and root `package.json` once no longer needed as a content reference.
- [ ] Retire `.github/workflows/static.yml` and the `gh-pages` deploy path.

## Phase 4 — Hosting migration

- [ ] Create Vercel project, connect repo, configure build settings (pointing at `web/` if it stays a subfolder).
- [ ] Set environment variables in Vercel (EmailJS/contact-form keys, analytics IDs).
- [ ] Verify preview deployments on PRs.
- [ ] Custom domain setup if applicable.

## Phase 5 — SEO

- [ ] Metadata via Next.js Metadata API (title, description, canonical) per page/section.
- [ ] Open Graph + Twitter Card tags via the Metadata API.
- [ ] OG share image — generate via Next's `opengraph-image` file convention or a static designed image (no dedicated one exists yet).
- [ ] `sitemap.ts` and `robots.ts` via Next's file conventions (replaces hand-written `sitemap.xml`/`robots.txt`).
- [ ] `manifest.json`/`manifest.ts` with real name/short_name/theme colors (old one still has CRA placeholder values, but that file is going away with the old site anyway).
- [ ] Structured data (JSON-LD, `Person`/`ProfilePage` schema).

## Phase 6 — Analytics / tracking

- [ ] Decide on tracking stack — still undecided, options to evaluate:
  - **GTM + GA4** (user's initial thought): most flexible, industry standard, heavier + cookie/consent implications.
  - **Lightweight alternatives**: Plausible, Umami (self-hostable), Fathom, Simple Analytics — smaller footprint, privacy-friendly, often no consent banner needed.
  - Leaning recommendation: for a personal portfolio, a lightweight privacy-first option is usually enough unless there's a specific reason to want GA4's ecosystem.
- [ ] Implement chosen tracking (+ consent banner if required).
- [ ] Event tracking on contact form submission.

## Phase 7 — Performance & code quality

- [ ] Lighthouse audit baseline once sections are built, then again after polish.
- [ ] Image optimization — old PNG mockups/profile photo should move to Next's `<Image>` with modern formats.
- [ ] Type-check and lint cleanup.
- [ ] Re-point `.codegraph/` at `web/` once there's enough real code to index.

## Open items / TBD

- [ ] Anything else that comes up as we go — append here rather than starting a separate doc.

## Notes

- Work incrementally, commit per logical chunk, keep `main` deployable/untouched until we're ready to cut over to Vercel.
- Ask before any destructive/irreversible step (key rotation, deleting the old site, deleting the GitHub Pages workflow, DNS changes).
