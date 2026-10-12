// Load eventemitter3's CommonJS implementation through Node rather than Vite's
// Windows module runner, retaining its ESM named and default exports.
import { createRequire } from 'node:module';

const nativeRequire = createRequire(import.meta.url);
const EventEmitter = nativeRequire('eventemitter3');
export { EventEmitter };
export default EventEmitter;
