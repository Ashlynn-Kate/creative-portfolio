---
id: ADR-0063
title: Native dependency bridges for Windows preview
status: accepted
date: 2026-10-11
area: stack
constraint: >
  While Astro's Windows module runner misloads eventemitter3 and esbuild,
  Vite must route them through tracked ESM bridges that use Node's native
  CommonJS loader, without manual node_modules patches or additional setup.
---

# Native dependency bridges for Windows preview

## Context

The dev server reported itself ready but stalled on page requests because its
renderer failed to initialize. Vite evaluated eventemitter3's CommonJS entry
without its exports, making p-queue's EventEmitter superclass undefined.
After correcting that import, esbuild's CommonJS entry failed with
`module is not defined`. Both packages load correctly through Node's native loader.

## Decision

Extend ADR-0010's existing bridge approach to eventemitter3 and esbuild. Keep
their default and named exports and alias them in Vite. Preserve the existing
picomatch bridge. The normal `npm run dev` command and local lab URL remain
unchanged. This is consistent with ADR-0010 and does not change the Astro stack.

## Options considered

- Upgrade Vite's patch release: tested, but did not resolve the loading failures.
- Alter SSR externalization: tested, but did not restore the renderer.
- Use small native-loading bridges (chosen): addresses both observed failures
  and survives dependency reinstalls.

## Trade-offs

Two more small compatibility modules require review when Astro or Vite changes.

## Revisit if

Astro's module runner handles these dependencies correctly without the bridges.
