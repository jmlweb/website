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
    },
    '@keyframes bio-picture-animation': {
      '0%': {
        filter: 'hue-rotate(0deg) brightness(120%)',
      },
      '25%': {
        filter: 'hue-rotate(90deg) brightness(140%)'
      },
      '50%': {
        filter: 'hue-rotate(180deg) brightness(170%)'
      },
      '75%': {
        filter: 'hue-rotate(270deg) brightness(140%)'
      },
      '100%': {
        filter: 'hue-rotate(360deg) brightness(120%)'
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
      animation: 'bio-picture-img-animation 48s infinite alternate',
    }
  });
});
 