/**
 * Points git at the tracked hooks in .githooks/ (runs automatically on `npm install`).
 * Does nothing outside a git checkout, e.g. in some CI or packaging setups.
 */
import { execSync } from 'node:child_process';

try {
  execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
  execSync('git config core.hooksPath .githooks', { stdio: 'ignore' });
} catch {
  // Not a git checkout; nothing to install.
}
