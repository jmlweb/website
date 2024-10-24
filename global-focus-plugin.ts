import plugin from 'tailwindcss/plugin';

export default plugin(function ({ addBase, addComponents, theme }) {
  const createStyle = (primaryColor: string, secondaryColor: string) => ({
    outline: `${`${theme('borderWidth.md', '2px')} solid`} ${primaryColor}`,
    outlineOffset: '2px',
    boxShadow: `0 0 0 4px ${secondaryColor}`,
  });

  const styles = {
    default: createStyle(theme('colors.blue.700'), theme('colors.blue.100')),
    dark: createStyle(theme('colors.blue.100'), theme('colors.blue.700')),
  }

  addBase({
    '*:focus-visible': styles.default,
    '.dark *:focus-visible': styles.dark
  });

  addComponents({
    '.focused': {
      ...styles.default,
      '.dark &': styles.dark,
    },
  })
});
 