---
id: ADR-0001
title: Astro static site, no site-wide UI framework
status: accepted
date: 2026-09-27
area: stack
constraint: >
  The site is an Astro static build: pages are `.astro` files (HTML/CSS plus small
  vanilla JS), TypeScript only for logic (content schemas, Notion sync). Never add a
  site-wide UI framework (React, Vue, etc.); if one interactive piece truly needs one,
  it is a single Astro island on that page only. Never switch frameworks without a new ADR.
---

# Astro static site, no site-wide UI framework

## Context
A content-heavy static site on GitHub Pages, with a build step that pulls from Notion and resizes images. The only interactive piece today is the carousel; future interactivity is unknown. The owner is non-technical and edits through Codex.

## Decision
Build with **Astro**. `.astro` components for pages and markup, plain CSS, small vanilla JS scripts for interactivity. TypeScript only for logic.

## Options considered
- **Raw HTML/CSS/JS:** no dependencies, but we would hand-build the Notion pull, image resizing, per-project page generation, and base-path handling.
- **React (JSX/TSX, e.g. Next.js or Vite):** very flexible, but ships a JS runtime on every page and adds concepts (state, hooks, hydration) that make AI edits riskier for a non-technical owner. Overkill for a content site.
- **Astro (chosen).**

## Trade-offs
**Pros**
- Outputs plain static files, which is exactly what GitHub Pages serves.
- Built-in image pipeline (WebP, resizing) covers the media rules with no manual work.
- Content collections make categories and projects data-driven.
- One `base` setting handles `/creative-portfolio/` now and `/` after the custom domain.
- `.astro` files read like HTML, so Codex can edit them safely.
- Ships zero JS by default, so pages load fast.
- Leaves room to grow: islands allow a React/Svelte/Vue component on one page only; View Transitions give app-like page changes; GSAP/Motion work for richer animation.

**Cons**
- Needs Node.js and a build step. The site can't be edited by opening an HTML file directly.
- Dependencies need occasional upgrades (Astro major versions).
- Smaller ecosystem than React for ready-made complex UI components.
- One more thing to learn compared to raw HTML.

## Revisit if
- The site needs server features (logins, a database, saving user data). GitHub Pages can't do that. Move hosting to Netlify/Vercel first; Astro supports server rendering there, so a rewrite is likely unnecessary.
- Most pages become heavily interactive, app-like experiences. A React-based framework may then fit better.
- Astro's build or image handling can't keep up with the media library size or the Notion sync.
- Maintaining Node and dependencies becomes a real burden relative to the site's needs.
