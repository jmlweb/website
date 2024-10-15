// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const { SITE_URL = 'https://jmlweb.es' } = loadEnv(
  process.env.NODE_ENV ?? 'production',
  process.cwd(),
  '',
);

// https://astro.build/config
export default defineConfig({
  i18n: { defaultLocale: 'es', locales: ['es', 'en'] },
  site: SITE_URL,
});
