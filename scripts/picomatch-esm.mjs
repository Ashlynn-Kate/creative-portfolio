// Vite evaluates Astro's content loader as ESM; picomatch currently ships a
// CommonJS entry. Load that entry using Node's native CommonJS loader.
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
export default require('picomatch');
