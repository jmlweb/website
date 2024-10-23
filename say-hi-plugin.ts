import plugin from 'tailwindcss/plugin';

export default plugin(function ({ addComponents, addUtilities }) {
  addUtilities({
    '@keyframes say-hi-animation': {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '5%': {
        transform: 'rotate(14deg)'
      },
      '10%': {
        transform: 'rotate(-8deg)'
      },
      '15%': {
        transform: 'rotate(14deg)'
      },
      '20%': {
        transform: 'rotate(-4deg)'
      },
      '25%': {
        transform: 'rotate(10deg)'
      },
      '30%': {
        transform: 'rotate(0deg)'
      },
      '50%': {
        transform: 'rotate(0deg)'
      },
    }
  });
  addComponents({
    '.say-hi': {
      transformOrigin: '70% 70%',
      animation: 'say-hi-animation 4.5s infinite',
    }
  });
});
 