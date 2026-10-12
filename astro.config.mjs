// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import designLab from './src/lab/integration.mjs';

// The live site is a GitHub Pages custom domain, served from the domain root.
// Environment variables keep it possible to build a project-path preview when needed.
const site = process.env.SITE_URL ?? 'https://byashlynnkate.com';
const base = process.env.SITE_BASE ?? '/';
const basePrefix = base.replace(/\/$/, '');

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  // Preserve existing links while the full collection becomes the main case page.
  redirects: {
    '/work/object-translations': `${basePrefix}/work/object-translations/all-concepts/`,
  },
  // Design lab: /lab/ prototypes under `npm run dev` only; never built.
  integrations: [designLab()],
  vite: {
    resolve: {
      // Astro's Windows module runner can evaluate these CommonJS dependencies
      // as ESM. The tracked bridges preserve Node's native package loading.
      alias: [
        {
          find: 'esbuild',
          replacement: fileURLToPath(new URL('./scripts/esbuild-esm.mjs', import.meta.url)),
        },
        {
          find: 'eventemitter3',
          replacement: fileURLToPath(new URL('./scripts/eventemitter3-esm.mjs', import.meta.url)),
        },
        {
          find: 'picomatch',
          replacement: fileURLToPath(new URL('./scripts/picomatch-esm.mjs', import.meta.url)),
        },
      ],
    },
  },
});
