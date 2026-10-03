---
id: ADR-0004
title: Static hosting on GitHub Pages with a configurable base path
status: accepted
date: 2026-09-27
area: hosting
constraint: >
  The site is static only: no server, no database, no server-side code. Forms must use a
  third-party service (e.g. Formspree). The base path must stay configurable (`SITE_BASE` /
  `SITE_URL` in `astro.config.mjs`), and every internal link must be built with `url()` from
  `src/lib/site.ts`, never hardcoded, so the move from `/creative-portfolio/` to `/` on a
  custom domain needs no code changes. Deploys go through `.github/workflows/deploy.yml`.
---

# Static hosting on GitHub Pages with a configurable base path

## Context
The site is hosted on GitHub Pages at the custom domain `https://byashlynnkate.com/`, so public URLs begin at `/`. GitHub Pages serves static files only.

## Decision
- Static output only. Anything interactive runs in the browser; anything needing a server uses a third-party service.
- The base path and site URL are set in one place, `astro.config.mjs`, with custom-domain defaults and environment overrides (`SITE_BASE`, `SITE_URL`) for a project-path build when needed.
- All internal links go through the `url()` helper, which prefixes the base path.
- Deploys run from GitHub Actions on every push to `main` (repo Settings → Pages → Source must be "GitHub Actions"; a branch deploy runs Jekyll on the raw source and fails).

## Options considered
- **Hardcode `/creative-portfolio/` in links:** simplest today, but every link breaks when the domain changes.
- **Relative links everywhere:** fragile across nested pages (`/work/<case>/<page>/`) and the 404 page.
- **Configurable base plus a `url()` helper (chosen).**
- **A host with server features (Netlify, Vercel):** not needed; revisit per ADR-0001 if server features are ever required.

## Trade-offs
**Pros**
- Free hosting, simple deploys, nothing to maintain server-side.
- The custom-domain switch is a config change.

**Cons**
- No server features (logins, databases, custom headers, password protection).
- Every contributor, human or agent, has to remember `url()`; a hardcoded link works locally under the dev server's base path but is easy to get wrong.

## Revisit if
- A feature truly needs a server. Move hosting first (ADR-0001 notes Astro supports this).
- The public domain changes or the site moves back to a GitHub project path.
