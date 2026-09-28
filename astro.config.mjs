// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

// Where the site lives. Today it is a GitHub Pages project site:
//   https://ashlynn-kate.github.io/creative-portfolio/
// When a custom domain is attached, set SITE_URL to that domain and
// SITE_BASE to "/" (or change the defaults below). Nothing else needs to change.
const site = process.env.SITE_URL ?? 'https://ashlynn-kate.github.io';
const base = process.env.SITE_BASE ?? '/creative-portfolio';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  vite: {
    resolve: {
      // Astro's content loader imports picomatch through Vite. Its CommonJS entry
      // can fail in Vite's module runner on Windows, so load the local ESM bridge.
      alias: [
        {
          find: 'picomatch',
          replacement: fileURLToPath(new URL('./scripts/picomatch-esm.mjs', import.meta.url)),
        },
      ],
    },
  },
});
