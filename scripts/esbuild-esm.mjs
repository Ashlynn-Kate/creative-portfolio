// Preserve esbuild's native CommonJS loader for Astro's Windows dev renderer.
import { createRequire } from 'node:module';

const nativeRequire = createRequire(import.meta.url);
const esbuild = nativeRequire('esbuild');
export const {
  analyzeMetafile, analyzeMetafileSync, build, buildSync, context, formatMessages,
  formatMessagesSync, initialize, stop, transform, transformSync, version,
} = esbuild;
export default esbuild;
