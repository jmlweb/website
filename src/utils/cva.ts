import { defineConfig } from 'cva';
import { twMerge } from './twMerge';

export const { cva, cx, compose } = defineConfig({
  hooks: {
    onComplete: (className) => twMerge(className),
  },
});
