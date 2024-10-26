import type { Config } from 'tailwindcss'

import defaultTheme from 'tailwindcss/defaultTheme';
import fluid, { extract, screens, type FluidThemeConfig } from 'fluid-tailwind';
import customAnimations from './custom-animations';
import globalFocus from './global-focus-plugin';

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
			fontFamily: {
				//sans: ['DM Sans Variable', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [fluid, customAnimations, globalFocus],
} satisfies Config & {
	theme: Config['theme'] & {
		fluid: FluidThemeConfig;
	};
};
