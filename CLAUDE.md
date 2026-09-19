# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this project is

Khalid's personal portfolio site. Originally built from a GitHub template and personalized with ChatGPT web + limited coding knowledge, pre-dating AI coding agents — expect rough, non-idiomatic patterns left over from that era rather than deliberate design choices.

Currently a Create React App (`react-scripts`) TypeScript app, deployed to GitHub Pages from `main`.

## Active work

This repo is mid-revamp. **[task.md](task.md) is the source of truth** for the full plan, decisions made, and known anomalies — read it before starting work rather than re-deriving context. Update it as tasks complete or new ones surface; don't create a second planning doc.

Work happens on `revamp/modernize-2026` (or its successor branches). **`main` is the live production site — never push directly to it or merge into it without the user explicitly asking.** It stays untouched until the revamp is ready to cut over.

Two locked-in decisions already made for this revamp (see task.md for full reasoning):
- Hosting is moving from GitHub Pages to **Vercel**.
- Build tooling is moving from Create React App to **Vite**.

## Code intelligence: CodeGraph

This project has [CodeGraph](https://github.com/colbymchenry/codegraph) initialized (`.codegraph/` — local-only, gitignored). It builds a symbol graph (functions, imports, call relationships) over the codebase.

- If the `codegraph_*` MCP tools are available in a session, prefer them over grep/manual reading for: finding callers/callees of a symbol, impact analysis before changing a shared component or hook, and getting oriented in an unfamiliar part of the code.
- If those tools are *not* available, the MCP server likely hasn't been registered yet for the current agent — run `codegraph install` and restart the session. `codegraph status` shows whether the index itself is present and current; `codegraph sync` refreshes it after significant file changes if it drifts.
- The index only covers `src/` (16 files as of last build: components, App.tsx, etc.) — small enough that plain reading is often fine too. Reach for CodeGraph when tracing relationships across files, not for single-file reads.

## Conventions for this repo

- Don't add speculative abstractions, config options, or "future-proofing" — this is a small personal site, not a platform.
- When removing the legacy cruft called out in task.md (dead commented-out code, hardcoded credentials, placeholder boilerplate), delete it outright rather than leaving it commented for reference — git history already preserves it.
- Treat anything currently hardcoded as a credential (EmailJS keys, etc.) as sensitive: don't reintroduce secrets into source, use env vars, and flag any newly-discovered hardcoded secret to the user immediately rather than just fixing it silently (it may need rotating).
- No destructive or hard-to-reverse actions (deleting the GitHub Pages workflow, DNS/domain changes, key rotation, force-pushing) without explicit confirmation, even if task.md lists them as planned work.
