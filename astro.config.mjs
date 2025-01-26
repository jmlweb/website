// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

import playformCompress from '@playform/compress';


const { SITE_URL = 'https://jmlweb.es' } = loadEnv(
  process.env.NODE_ENV ?? 'production',
  process.cwd(),
  '',
);

// https://astro.build/config
export default defineConfig({
  i18n: { 
    defaultLocale: 'es', 
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  site: SITE_URL,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }), 
    icon(), 
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-US'
        }
      }
    }), 
    playformCompress()
  ],
  // Enable image optimization
  image: {
    remotePatterns: [{
      protocol: 'https'
    }],
    format: ['avif', 'webp']
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  devToolbar: {
    enabled: true
  },
  markdown: {
    rehypePlugins: ['rehype-preset-minify'],
  },
});