import plugin from 'tailwindcss/plugin';

export default plugin(function ({ addComponents }) {
  addComponents({
    '.print-hidden': {
      '@media print': {
        display: 'none !important',
      }
    },
  })
});
 