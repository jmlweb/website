import { defineCollection, reference, z } from 'astro:content';

const jobs = defineCollection({
  type: 'content',
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
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.union([z.literal('talk'), z.literal('workshop')]),
    year: z.number(),
    language: z.union([z.literal('en'), z.literal('es')]),
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
  // conferences,
};
