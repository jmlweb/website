import { defineCollection, reference, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subTitle: z.string(),
    date: z.date(),
    relatedContent: z.array(reference('posts')).optional(),
    tags: z.array(reference('tags')).optional(),
  }),
});

const tags = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
  }),
});

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
  posts,
  tags,
  jobs,
};
