import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const jobs = defineCollection({
  // Remove type: 'content'
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}', 
    base: './src/content/jobs'
  }),
  schema: z.object({
    period: z.string(),
    position: z.string(),
    company: z.object({
      title: z.string(),
      href: z.string().url(),
    }),
    weight: z.number(),
  }),
});

const conferences = defineCollection({
  // Remove type: 'data'
  loader: glob({
    pattern: '*.json',
    base: './src/content/conferences'
  }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['talk', 'workshop', 'article']),
    year: z.number(),
    language: z.enum(['en', 'es']),
    for: z.object({
      title: z.string(),
      href: z.string().url().optional(),
    }),
    weight: z.number(),
    place: z.string().optional(),
    youtube: z.string().optional(),
  }),
});

export const collections = {
  jobs,
  conferences,
}; 