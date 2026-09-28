---
id: ADR-0014
title: Design lab — explore layouts in throwaway prototypes before implementing
status: accepted
date: 2026-09-27
area: workflow
constraint: >
  Layout and visual ideas are explored first as throwaway prototypes in `lab/<topic>/<version>.astro`,
  served only by `npm run dev` through `src/lab/integration.mjs`. Lab pages must never be built,
  deployed, or linked from the site, nothing in `src/` may import from `lab/`, and prototypes stay
  git-ignored (only `lab/README.md` and `lab/example/` are tracked). Exploring is not deciding: when
  the owner chooses a version ("make it real"), rebuild it properly in `src/` under all other ADRs,
  record the design decision in an ADR, run the full checks, and open a pull request.
---

# Design lab: explore layouts in throwaway prototypes before implementing

## Context
After v1 shipped, the owner's vision for the site grew, and she wants to try many UI/UX changes. Every idea was going straight into production code, so each one paid the full cost: editing real components, keeping the content schema valid, running the checks and build after each edit, and considering an ADR. Iteration was slow.

She is an artistic director and thinks visually. She needs to react to real layouts with her real photos, quickly, before committing to one.

## Decision
Split design work into three steps:
1. **Explore (fast, disposable):** Codex writes two or three versions of an idea as standalone Astro components in `lab/<topic>/`. They can use real components and images from `src/` but don't have to fit the content model. The dev server shows each version full size and all versions side by side, at desktop or phone width. No checks, builds, or ADRs.
2. **Decide:** the owner picks a version and asks to "make it real."
3. **Implement (careful):** Codex rebuilds the chosen version properly in `src/`, following every ADR, records the design decision, runs `npm run check` and `npm run build`, and opens a pull request.

The lab is added to the dev server by a small integration that registers `/lab/` routes only when the command is `dev`, so `astro build` never sees it.

## Options considered
- **Keep designing in production code:** safest, but slow; the reason for this ADR.
- **Notion:** good for references, mood boards, and notes (still used for that), but it can't show a layout.
- **ASCII / Mermaid diagrams in Markdown:** agents read them well and they suit structure (site map, section order), but they can't show visual design (scale, type, spacing, how photos sit), which is what she's designing.
- **Figma:** the professional tool and still the likely "later" (see the design notes in AGENTS.md), but a new tool to learn right when she needs speed.
- **AI chat mockups (e.g. HTML previews in a chat app):** no setup, but not her real site, components, or photos, and the result has to be carried over by hand.
- **Local throwaway prototypes in a dev-only lab (chosen).**

## Trade-offs
**Pros**
- Real visuals with her real photos, updated live as files change.
- Several versions side by side, at desktop and phone sizes.
- Exploration costs almost nothing; the careful process runs once per chosen idea.
- Prototypes never reach the public repo (ADR-0002) or the site.

**Cons**
- Git-ignored prototypes exist only on the machine where they were made; the developer can't review them remotely unless one is deliberately shared.
- "Make it real" is a rebuild, not a copy; prototype code may take shortcuts that don't belong in `src/`.
- Prototypes can drift from the real site's components as the site changes.

## Revisit if
- The owner and developer need to review prototypes together remotely (consider tracking selected topics, or a separate private repo).
- She adopts Figma for layout work.
- Lab prototypes routinely get copied into `src/` wholesale; then the lab should share more of the real component structure.
