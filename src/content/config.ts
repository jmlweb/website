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
    order: z.number(),
  }),
});

export const collections = {
  jobs,
};
