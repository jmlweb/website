import { cva } from '@/utils/cva';

export const container = cva({
  base: 'w-full mx-auto max-w-screen-xl ~px-4/8',
});

export const leading = cva({
  base: 'text-pretty leading-relaxed ~text-base/lg dark:text-slate-400',
});

export const sectionHeading = cva({
  base: 'font-semibold tracking-tight text-slate-800 ~text-2xl/3xl dark:text-slate-100',
});
