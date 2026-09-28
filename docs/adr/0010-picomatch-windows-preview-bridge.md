---
id: ADR-0010
title: ESM bridge for the local preview's picomatch dependency
status: accepted
date: 2026-09-27
area: stack
constraint: >
  Astro's Vite configuration must route picomatch imports through the tracked
  ESM bridge while its CommonJS entry fails in the Windows module runner.
  Do not patch node_modules by hand or require the owner to run extra setup steps.
---

# ESM bridge for the local preview's picomatch dependency

## Context

On the owner's Windows computer, Astro 7.3.5 and Vite 8.3.1 failed while loading
`src/content.config.ts`: Vite evaluated picomatch's CommonJS `index.js` as ESM and
reported `require is not defined`. A local edit inside `node_modules` proved that
loading picomatch through an ESM bridge fixes content sync, but an npm install
would erase that edit.

## Decision

Keep the bridge in `scripts/picomatch-esm.mjs` and alias Vite's picomatch imports
to it in `astro.config.mjs`. The bridge uses Node's native CommonJS loader for
the installed picomatch package. The normal `npm install` and `npm run dev`
commands remain unchanged.

## Options considered

- **Patch `node_modules` manually:** worked once, but a clean install removes it.
- **Run the site only in WSL:** adds a second environment for the owner to manage.
- **Track a small Vite alias and ESM bridge (chosen):** keeps setup automatic and
  the workaround visible in the repository.

## Trade-offs

- Adds a small build configuration workaround used on every platform.
- Depends on picomatch continuing to expose its CommonJS entry.

## Revisit if

- Astro, Vite, or picomatch updates make the bridge unnecessary or incompatible.
