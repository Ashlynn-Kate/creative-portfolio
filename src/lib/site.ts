/** Site-wide settings and small helpers. */
import { marked } from 'marked';

export const SITE = {
  name: 'Ashlynn Kate',
  tagline: 'Creative production work spanning conceptual portraits, live performance, and film.',
  description:
    'Portfolio of Ashlynn Kate: creative and artistic director, choreographer, and performer.',
};

/** Builds a link that works with the site's base path (e.g. "/creative-portfolio/"). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  if (!clean) return `${base}/`;
  if (clean.startsWith('#')) return `${base}/${clean}`;
  return `${base}/${clean}${clean.endsWith('/') || clean.includes('#') ? '' : '/'}`;
}

/** "Set Design" -> "set-design" */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Markdown to HTML. Content comes from our own files, so it is trusted. */
export const md = (text: string) => marked.parse(text, { async: false });
export const mdInline = (text: string) => marked.parseInline(text, { async: false });
