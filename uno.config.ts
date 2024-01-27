// uno.config.ts
import presetUno from '@unocss/preset-uno';
import { defineConfig } from 'unocss';

export default defineConfig({
  presets: [
    presetUno({
      dark: {
        light: '[data-theme=light]',
        dark: '[data-theme=dark]',
      },
    }),
  ],
  layers: {
    components: -1,
    default: 1,
    utilities: 2,
    dark: 3,
  },
  rules: [['optimize-legibility', { 'text-rendering': 'optimizeLegibility' }]],
  shortcuts: [
    {
      'border-base': 'border-cinder-400/20 d:border-cinder-200/10',
      'gradient-base':
        'bg-gradient-to-rb from-25% d:from-15% to-60% d:to-55% from-white/30 to-white/75 d:from-cinder-100/2 d:to-cinder-100/5',
    },
    [
      /^d:(.*)$/,
      ([, c]) => `dark:${c} group-data-[theme=auto]:@dark:${c}`,
      { layer: 'dark' },
    ],
    [/^js:(.*)$/, ([, c]) => `group-data-[js]:${c}`, { layer: 'utilities' }],
    [
      /^g-open:(.*)$/,
      ([, c]) => `group-data-[open=true]:${c}`,
      { layer: 'utilities' },
    ],
    [
      /^g-close:(.*)$/,
      ([, c]) => `group-data-[open=false]:${c}`,
      { layer: 'utilities' },
    ],
  ],
  theme: {
    breakpoints: {
      sm: '520px',
      md: '720px',
      lg: '980px',
    },
    colors: {
      cinder: {
        50: '#F5F5FA',
        100: '#E8E9F2',
        200: '#D2D4E4',
        300: '#B7BAD1',
        400: '#9598B7',
        500: '#696C8E',
        600: '#5B5E86',
        700: '#4E5179',
        800: '#3F4369',
        900: '#22253F',
        950: '#151629',
      },
    },
    data: {
      open: 'open=true',
      close: 'open=false',
    },
    fontFamily: {
      sans: 'var(--font-sans)',
    },
    maxWidth: {
      '6xl': '1280px',
    },
    width: {
      '6xl': '1280px',
    },
  },
  variants: [
    (matcher) => {
      if (
        !matcher.startsWith('scrollbar:') &&
        !matcher.startsWith('scrollbar-thumb:') &&
        !matcher.startsWith('scrollbar-track:')
      ) {
        return matcher;
      }

      if (matcher.startsWith('scrollbar-thumb:')) {
        return {
          matcher: matcher.slice(16),
          selector: (s) => {
            return `${s}::-webkit-scrollbar-thumb`;
          },
        };
      }

      if (matcher.startsWith('scrollbar-track:')) {
        return {
          matcher: matcher.slice(16),
          selector: (s) => {
            return `${s}::-webkit-scrollbar-track`;
          },
        };
      }

      return {
        matcher: matcher.slice(10),
        selector: (s) => {
          return `${s}::-webkit-scrollbar`;
        },
      };
    },
  ],
});
