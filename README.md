# Creative Portfolio

A website showcasing all of Ashlynn's creative work: dance and choreography, set design, video and directing, photography, acting, and whatever comes next.

- **Live site:** https://ashlynn-kate.github.io/creative-portfolio/
- **Hidden from search:** the site won't show up on Google, but anyone you send the link to can view it.

> **Status:** version 1 is built and can be previewed locally. It has **not** been published yet.

## Where things live

| What | Where |
|---|---|
| Project text, photos, and design ideas | Notion |
| Full-resolution photos and videos | Google Drive (the site links to them) |
| The website itself | This GitHub repository |

## One-time setup on a Windows computer

Do this once per computer. After that, you never need to think about it again.

1. **Install Node.js:** download the "LTS" version (22.12 or newer) from https://nodejs.org and run the installer with the default options. This is what builds the site.
2. **Install Git:** download from https://git-scm.com/download/win and run the installer with the default options. This is what sends changes to GitHub.
3. **Get a copy of the site:** clone this repository into an easy-to-find folder, such as `Documents\creative-portfolio`.
4. **Open that folder in the Codex app.**
5. **Ask Codex:** "Install the project's dependencies and show me the site." It will run `npm install` and start the preview.

## Seeing the site on your computer (before it goes live)

**The easy way:** ask Codex "Show me the site." It will start the preview and give you a link to open.

**By hand:** open a terminal in the project folder and run:

1. `npm run dev`
2. Open http://localhost:4321/creative-portfolio/ in your browser.
3. The page updates by itself as changes are made.
4. When you're done, press `Ctrl+C` in the terminal to stop it.

**Final check before publishing:** run `npm run build`, then `npm run preview`. This shows exactly what will go live.

Nothing you see on your computer is public until it's published.

## Making changes

Ask Codex in plain language, for example:

- "Make the headings on the photography page bigger."
- "Add a new category called Costume Design."
- "Swap the order of the first two dance projects."

Codex will make the change, explain what it did, and tell you where to look to see it.

**Adding a new project:** for now, ask Codex, for example: "Add a new case study called ___ with these photos," and drop the photos into the project folder or point Codex to them. Later, the plan is that you add the project in Notion and the site picks it up automatically.

**Where the content lives (for reference):**
- Words and layout for each case study: `src/content/cases/` (one file per case)
- Extra pages under a case (like "Throne Inspiration"): `src/content/pages/`
- Photos: `src/assets/images/` (they are shrunk for the web automatically)

## Publishing

When you're happy with a change, ask Codex to "commit and push." GitHub then rebuilds the site and publishes it automatically. The live site updates within a few minutes.

## For the developer

- Project rules and design rules for AI agents live in [`AGENTS.md`](AGENTS.md). `CLAUDE.md` just imports it, so Claude Code gets the same rules.
- Decisions live in [`docs/adr/`](docs/adr/) (index: [`docs/adr/README.md`](docs/adr/README.md)). Each ADR's one-line `constraint` is copied into `AGENTS.md` by `npm run adr`; A pre-commit hook (`.githooks/pre-commit`, installed automatically by `npm install`) regenerates them in the same commit, or blocks the commit if an ADR is invalid. CI runs `npm run adr:check` as a backstop for commits made without the hook (e.g. GitHub's web editor or `--no-verify`).
- Stack: Astro 7 static site, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main` (repo Settings → Pages → Source must be "GitHub Actions").
- `npm run check` type-checks the project, including every content file against the schema in `src/content.config.ts`.
- `notion-export-*/` holds one-time Notion exports and is git-ignored.
