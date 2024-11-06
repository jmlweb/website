// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import compressor from 'astro-compressor';


import sitemap from '@astrojs/sitemap';


import playformCompress from '@playform/compress';


const { SITE_URL = 'https://jmlweb.es' } = loadEnv(
  process.env.NODE_ENV ?? 'production',
  process.cwd(),
  '',
);

// https://astro.build/config
export default defineConfig({
  i18n: { defaultLocale: 'es', locales: ['es', 'en'] },
  site: SITE_URL,
  integrations: [tailwind({
    applyBaseStyles: false,
  }), icon(), sitemap(), playformCompress({
    CSS: false,
    Image: false,
    JavaScript: false,
  }), compressor()],
  devToolbar: {
    enabled: false,
  },
  markdown: {
    rehypePlugins: ['rehype-preset-minify'],
  }
});