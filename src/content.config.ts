/**
 * Content definitions.
 *
 * All site content lives in YAML files under src/content/:
 *   - cases/  one file per case study (shown on the home page, in `order`)
 *   - pages/  detail pages that belong to a case, e.g. pages/prince-of-egypt/throne-inspiration.yaml
 *
 * Every case and page is a list of "blocks" (heading, text, image, grid,
 * carousel, details, video, pages, page-link). This mirrors how Notion structures content,
 * so a future Notion sync can map Notion blocks straight onto these.
 *
 * Image paths are relative to src/assets/images/, e.g. "prince-of-egypt/palace.png".
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** One image as referenced from content. */
const image = z.object({
  src: z.string(),
  alt: z.string(),
  /** Short text shown under the image. Markdown allowed (**bold**, *italic*). */
  caption: z.string().optional(),
  /** Link to the full-resolution original on Google Drive. Clicking the image opens it. */
  highRes: z.url().optional(),
});

const heading = z.object({
  type: z.literal('heading'),
  text: z.string(),
  /** Smaller line under the heading, e.g. "Volume · Texture · Gold". */
  sub: z.string().optional(),
});

const text = z.object({
  type: z.literal('text'),
  /** Markdown: paragraphs, **bold**, *italic*, lists, links. */
  body: z.string(),
});

const imageBlock = image.extend({
  type: z.literal('image'),
  /** "wide" breaks out of the text column; "full" spans the window. */
  size: z.enum(['text', 'wide', 'full']).default('wide'),
});

const grid = z.object({
  type: z.literal('grid'),
  images: z.array(image).min(1),
  /** Optional small label above each image, in the same order, e.g. ["Object", "Portrait"]. */
  labels: z.array(z.string()).optional(),
});

const carousel = z.object({
  type: z.literal('carousel'),
  /** Read out by screen readers, e.g. "Performance photos". */
  label: z.string(),
  images: z.array(image).min(1),
});

const video = z.object({
  type: z.literal('video'),
  /** v1: a thumbnail linking to the video on Google Drive. Later: YouTube embeds. */
  thumbnail: image,
  url: z.url(),
  caption: z.string().optional(),
});

const pages = z.object({
  type: z.literal('pages'),
  /** Page ids, e.g. "prince-of-egypt/throne-inspiration". Shown as cards in this order. */
  items: z.array(z.string()).min(1),
});

const pageLink = z.object({
  type: z.literal('page-link'),
  /** Page id, e.g. "object-translations/all-concepts". */
  item: z.string(),
  /** Visible call to action. */
  label: z.string(),
});

// `details` holds other blocks, so it is defined lazily (a block can contain blocks).
type Block =
  | z.infer<typeof heading>
  | z.infer<typeof text>
  | z.infer<typeof imageBlock>
  | z.infer<typeof grid>
  | z.infer<typeof carousel>
  | z.infer<typeof video>
  | z.infer<typeof pages>
  | z.infer<typeof pageLink>
  | { type: 'details'; summary: string; sub?: string; blocks: Block[] };

const block: z.ZodType<Block> = z.lazy(() =>
  z.discriminatedUnion('type', [
    heading,
    text,
    imageBlock,
    grid,
    carousel,
    video,
    pages,
    pageLink,
    z.object({
      type: z.literal('details'),
      /** The clickable line; the blocks inside are hidden until opened. */
      summary: z.string(),
      /** Optional supporting line shown beside the clickable title. */
      sub: z.string().optional(),
      blocks: z.array(block),
    }),
  ]),
);

const cases = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/cases' }),
  schema: z.object({
    /** Position on the home page (1 = first). */
    order: z.number(),
    title: z.string(),
    /** Short line above the title, e.g. "Full-length production". */
    kicker: z.string().optional(),
    /** One-line facts, e.g. "Full-length contemporary ballet · Fuzion School of the Arts · May 2024". */
    meta: z.string().optional(),
    /** e.g. "In production". Shown as a badge. */
    status: z.string().optional(),
    role: z.string().optional(),
    /** Used on discipline pages and in link previews. */
    summary: z.string(),
    cover: image,
    /** Free-form list. New disciplines appear on the site automatically. */
    disciplines: z.array(z.string()).min(1),
    published: z.boolean().default(true),
    blocks: z.array(block),
  }),
});

const detailPages = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/pages' }),
  schema: z.object({
    /** The case this page belongs to (its file name, e.g. "prince-of-egypt"). */
    case: z.string(),
    order: z.number(),
    title: z.string(),
    sub: z.string().optional(),
    summary: z.string(),
    cover: image,
    published: z.boolean().default(true),
    blocks: z.array(block),
  }),
});

export const collections = { cases, pages: detailPages };
export type { Block };
