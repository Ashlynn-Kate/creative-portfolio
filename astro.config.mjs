// @ts-check
import { defineConfig } from 'astro/config';

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
});
