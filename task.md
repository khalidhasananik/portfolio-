# Portfolio Revamp — Task List

Branch: `revamp/modernize-2026`. `main` stays untouched and live on GitHub Pages until this work is ready to cut over.

## Context

Original template was personalized early in the "pre-agent" AI era using ChatGPT web + limited coding knowledge. Expect rough edges: hardcoded credentials, dead commented-out code, unpersonalized boilerplate, ad-hoc CSS. Goal of this branch is to fix anomalies, modernize the stack, and get proper infra (hosting, SEO, analytics) in place.

## Decisions already made

- **Hosting:** migrating from GitHub Pages to **Vercel**.
- **Build tooling:** migrating from Create React App (`react-scripts`, deprecated/unmaintained) to **Vite**. This is also expected to fix the "only runs via `npm start`, can't use a real dev server" complaint — CRA's webpack dev server is slow to start and slow on HMR; Vite's is near-instant.

## Known anomalies found so far (pre-work audit)

- [ ] `build/` output directory is committed to git (should never be tracked) — remove from repo, confirm `.gitignore` covers it.
- [ ] `src/components/Contact.tsx` has live EmailJS credentials hardcoded in the source (`service_j9kg0m6`, `template_1u0yhej`, public key `RUEM691sObjwldyCZ`) — move to env vars, and treat the exposed keys as compromised (rotate in EmailJS dashboard) since they've been in a public repo.
- [ ] `Contact.tsx` has ~280 lines of dead, commented-out prior attempts — delete.
- [ ] `public/manifest.json` still has placeholder values (`"short_name": "React App"`, `"name": "Create React App Sample"`) — never personalized.
- [ ] `package.json` `homepage` field is malformed: `"https://https://khalidhasananik.github.io/portfolio-/"` (duplicated protocol) — remove/replace entirely once off GitHub Pages.
- [ ] `public/index.html` has no Open Graph / Twitter Card tags, no canonical URL, minimal meta description.
- [ ] `public/robots.txt` is the default CRA stub (no sitemap reference).
- [ ] No `sitemap.xml` exists.
- [ ] SCSS/CSS is a mix of `.scss` (in `src/assets/styles/`) and a stray `.css` file (`src/components/Contact.css`) — inconsistent styling approach to reconcile.
- [ ] `.github/workflows/static.yml` deploys the entire repo (including `build/`) straight to GitHub Pages — to be retired once Vercel is live.

## Task phases

### 1. Repo & tooling cleanup
- [ ] Remove `build/` from version control; verify `.gitignore` excludes build output.
- [ ] Migrate CRA → Vite (new entry point, `vite.config.ts`, env var syntax `process.env.*` → `import.meta.env.*`, index.html moved to project root per Vite convention, update TS config).
- [ ] Audit and update dependencies (React, MUI, FontAwesome, sass, TypeScript, etc.) to current stable versions; drop unused packages (e.g. `gh-pages` once off GitHub Pages).
- [ ] Confirm `npm run dev` (or equivalent) launches a real local dev server with HMR.
- [ ] Delete dead/commented-out code across components, starting with `Contact.tsx`.
- [ ] Reconcile styling approach (SCSS vs stray CSS file) into one consistent system.

### 2. Fix hardcoded credentials & contact form
- [ ] Move EmailJS service ID / template ID / public key into environment variables (`.env.local`, not committed; documented in `.env.example`).
- [ ] Rotate the EmailJS keys since the old ones were exposed in the public repo history.
- [ ] Re-test the contact form end-to-end after the change.

### 3. Hosting migration (GitHub Pages → Vercel)
- [ ] Create Vercel project, connect repo, configure build settings for Vite output.
- [ ] Set environment variables in Vercel dashboard (EmailJS keys, analytics IDs).
- [ ] Set up custom domain (if applicable) + redirects (`public/_redirects` is a Netlify-style file — not used by Vercel; replace with `vercel.json` rewrites if needed for SPA routing).
- [ ] Verify preview deployments work on PRs.
- [ ] Once verified live and stable, retire `.github/workflows/static.yml` and the `gh-pages` branch/deploy script.

### 4. SEO
- [ ] Write proper `<title>`, meta description, and canonical tag per page/section.
- [ ] Add Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) and Twitter Card tags.
- [ ] Design/generate a proper OG share image (currently no dedicated social preview image exists).
- [ ] Generate `sitemap.xml` and reference it from `robots.txt`.
- [ ] Update `robots.txt` for production (currently the unmodified CRA default).
- [ ] Update `manifest.json` with real name/short_name/theme colors (currently CRA placeholder values).
- [ ] Basic structured data (JSON-LD, `Person` or `ProfilePage` schema) for richer search results.

### 5. Analytics / tracking
- [ ] Decide on tracking stack — options to evaluate:
  - **GTM + GA4** (user's initial thought): most flexible, industry standard, but heavier and cookie/consent implications.
  - **Lightweight alternatives**: Plausible, Umami (self-hostable), Fathom, Simple Analytics — smaller script footprint, privacy-friendly, often no cookie-consent banner needed.
  - Recommendation to revisit once other phases are done: for a personal portfolio, a lightweight privacy-first option (e.g. Umami self-hosted or Plausible) is usually enough unless there's a specific reason to want GA4's ecosystem (e.g. Google Ads retargeting).
- [ ] Implement chosen tracking with a cookie-consent banner if required by the chosen tool.
- [ ] Add basic conversion/event tracking on the contact form submission.

### 6. Modernize components / UI
- [ ] Review each section (Main, Expertise, Timeline, Project, Contact, Footer, Navigation) for outdated patterns and visual polish opportunities.
- [ ] Replace/update any deprecated MUI or FontAwesome usage after dependency bumps.
- [ ] Accessibility pass (semantic HTML, alt text, color contrast, keyboard nav).
- [ ] Responsive/mobile QA pass.

### 7. Performance & code quality
- [ ] Run Lighthouse audit (performance, accessibility, best practices, SEO) as a baseline, then again after changes.
- [ ] Image optimization (the `src/assets/images/*.png` mockups and profile photo are unoptimized PNGs — consider WebP/AVIF + responsive sizes).
- [ ] Code-split/lazy-load where useful (Vite makes this straightforward).
- [ ] Type-check and lint cleanup.

### 8. Open items / TBD
- [ ] Anything else that comes up as we go — append here rather than starting a separate doc.

## Notes
- Work incrementally, commit per logical chunk, keep `main` deployable/untouched until we're ready to cut over to Vercel.
- Ask before any destructive/irreversible step (key rotation, deleting the GitHub Pages workflow, DNS changes).
