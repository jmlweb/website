import type { Config } from 'tailwindcss'

import fluid, { extract, screens, type FluidThemeConfig } from 'fluid-tailwind';
import customAnimations from './custom-animations';
import globalFocus from './global-focus-plugin';
import printHidden from './print-hidden-plugin';

export default {
	content: {
		files: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
		extract,
	},
	darkMode: 'selector',
	theme: {
    fluid: ({ theme }) => ({
      defaultScreens: ['20rem', theme('screens.xl')]
    }),
		screens,
		extend: {
			letterSpacing: {
				'almost-wide': '0.01rem',
			},
			space: {
				'110': '27.5rem',
			}
		},
	},
	plugins: [fluid, customAnimations, globalFocus, printHidden],
} satisfies Config & {
	theme: Config['theme'] & {
		fluid: FluidThemeConfig;
	};
};
