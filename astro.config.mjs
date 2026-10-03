// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import designLab from './src/lab/integration.mjs';

// The live site is a GitHub Pages custom domain, served from the domain root.
// Environment variables keep it possible to build a project-path preview when needed.
const site = process.env.SITE_URL ?? 'https://byashlynnkate.com';
const base = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  // Design lab: /lab/ prototypes under `npm run dev` only; never built.
  integrations: [designLab()],
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
