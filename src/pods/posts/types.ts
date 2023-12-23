import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export type PostItem = {
  title: Post['data']['title'];
  subTitle: Post['data']['subTitle'];
  href: string;
  date: Post['data']['date'];
}