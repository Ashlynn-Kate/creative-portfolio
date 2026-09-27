/**
 * Looks up images in src/assets/images/ by their path, e.g. "prince-of-egypt/palace.png".
 * Astro then resizes and converts them to WebP at build time.
 */
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{png,jpg,jpeg,webp,avif,gif,tiff}',
  { eager: true },
);

export function getImage(path: string): ImageMetadata {
  const file = files[`/src/assets/images/${path}`];
  if (!file) {
    throw new Error(
      `Image not found: "${path}". Put the file in src/assets/images/ and check the spelling in the content file.`,
    );
  }
  return file.default;
}
