import plugin from 'tailwindcss/plugin';

export default plugin(function ({ addComponents, addUtilities }) {
  addUtilities({
    '@keyframes say-hi-animation': {
      '0%': {
        transform: 'rotate(0deg) scale(1)'
      },
      '5%': {
        transform: 'rotate(14deg) scale(1.01)'
      },
      '10%': {
        transform: 'rotate(-8deg) scale(0.99)'
      },
      '15%': {
        transform: 'rotate(14deg) scale(1.01)'
      },
      '20%': {
        transform: 'rotate(-4deg) scale(0.99)'
      },
      '25%': {
        transform: 'rotate(10deg) scale(1.01)'
      },
      '30%': {
        transform: 'rotate(0deg) scale(1)'
      },
      '50%': {
        transform: 'rotate(0deg) scale(1)'
      },
    },
    '@keyframes bio-picture-animation': {
      '0%': {
        filter: 'hue-rotate(0deg) brightness(140%) blur(24px)',
        transform: 'scale(1.2) translateX(-1) rotate(0deg)',
      },
      '25%': {
        filter: 'hue-rotate(90deg) brightness(160%) blur(48px)',
        transform: 'scale(1.3) translateX(-1) rotate(5deg)',
      },
      '50%': {
        filter: 'hue-rotate(180deg) brightness(190%) blur(36px)',
        transform: 'scale(1.4) translateX(-1) rotate(-5deg)',
      },
      '75%': {
        filter: 'hue-rotate(270deg) brightness(160%) blur(48px)',
        transform: 'scale(1.2) translateX(-1) rotate(0deg)',
      },
      '100%': {
        filter: 'hue-rotate(360deg) brightness(140%) blur(24px)',
        transform: 'scale(1.3) translateX(-1) rotate(5deg)',
      },
    },
    '@keyframes bio-picture-img-animation': {
      '0%': {
        transform: 'scale(1) translateX(0)',
      },
      '50%': {
        transform: 'scale(1.05) translateX(-1.5vw)',
      }
    }
  });
  addComponents({
    '.say-hi': {
      transformOrigin: '70% 70%',
      animation: 'say-hi-animation 4.5s infinite',
    },
    '.bio-picture': {
      animation: 'bio-picture-animation 30s infinite alternate',
    },
    '.bio-picture-img': {
      animation: 'bio-picture-img-animation 48s infinite',
    }
  });
});
 