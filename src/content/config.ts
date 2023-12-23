import { z, defineCollection, reference } from 'astro:content';

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

export const collections = {
  posts,
  tags,
};
