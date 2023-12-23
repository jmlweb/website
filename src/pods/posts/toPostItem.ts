import type { Post, PostItem } from './types';

export const toPostItem = ({ data, slug }: Post): PostItem => ({
  title: data.title,
  subTitle: data.subTitle,
  href: `/posts/${slug}`,
  date: data.date,
});
