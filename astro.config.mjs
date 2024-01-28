import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true, // or a path to the reset file
      preflights: [
        {
          getCSS: () => `
            abbr {
              cursor: help;
            }

            strong {
              font-weight: 600;
            }
          `,
        },
      ]
    }),
  ],
});
