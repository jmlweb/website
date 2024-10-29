import { cx } from '@/utils/cva';

const article = 'bg-slate-50 dark:bg-slate-700/30';

const border = 'border-2 dark:border-slate-700/50';

const content = 'flex flex-col p-4 flex-1';

export const articleWithoutVideo = cx(article, content, border);

export const articleWithVideo = cx(article, border, 'flex flex-col');

export const contentWithVideo = cx(content, 'border-t-2 dark:border-slate-700/50');