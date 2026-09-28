# Design lab

Quick, throwaway layout ideas that you can see in the browser before anything is built for real.

- **Only on your computer.** Lab pages appear only while the preview is running (`npm run dev`). They are never built, never published, and never linked from the site.
- **Not saved to GitHub.** Everything in this folder is ignored by git, except this README and the `example/` folder. Ideas stay private until you decide to make one real.

## How to use it

1. Start the preview (`npm run dev`), or ask Codex to "show me the design lab".
2. Ask for ideas, for example: "In the design lab, make three versions of the home page opening: one full-screen photo, one split layout, one with the carousel first." A photo of a pencil sketch helps.
3. Open **http://localhost:4321/creative-portfolio/lab/**:
   - Click a topic to see all its versions **side by side**, at desktop or phone size.
   - Click a version to see it full size. The badge in the corner switches between versions.
4. React and adjust: "B, but bigger type and the photo on the left." The page updates as soon as the file changes.
5. When you're happy, say **"make it real"**. Codex then builds it properly into the site, records the design decision, runs the checks, and opens a pull request.

## For agents

- One folder per idea, one file per version: `lab/<topic>/<version>.astro` (e.g. `lab/home-hero/a-full-bleed.astro`). Names starting with `_` are helpers, not versions.
- A version is a plain Astro component: its markup is the whole page. It may import from `src/` (components, images via `MediaImage`, styles are already loaded), but nothing in `src/` may import from `lab/`.
- Lab work is exploration: keep it fast. See "Design lab" in AGENTS.md.
