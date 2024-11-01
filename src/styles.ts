import { cva, compose } from '@/utils/cva';

export const sectionSpacingX = cva({
  base: '~px-4/8',
})

export const container = compose(sectionSpacingX, cva({
  base: 'w-full mx-auto max-w-screen-xl',
}));

export const leading = cva({
  base: 'text-pretty leading-relaxed ~text-base/lg dark:text-slate-400',
});

export const sectionAccentBg = cva({
  base: "border-slate-300 bg-gradient-to-br from-slate-50/70 to-slate-200 dark:border-slate-800 dark:from-slate-800/30 dark:to-slate-800/10",
  variants: {
    borderTop: {
      true: 'border-t',
    },
    borderBottom: {
      true: 'border-b',
    }
  },
  defaultVariants: {
    borderTop: true,
    borderBottom: true,
  }
})

export const sectionHeading = cva({
  base: 'font-semibold tracking-tight text-slate-800 ~text-2xl/3xl dark:text-slate-100',
});

export const gridTwoColumns = cva({
  base: 'grid ~gap-x-6/8 lg:grid-cols-2',
});

export const containerGridTwoColumns = compose(container, gridTwoColumns);