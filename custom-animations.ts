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
        filter: 'hue-rotate(0deg) brightness(120%)'
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
    '@keyframes bio-picture-blur-animation': {
      '0%': {
        transform: 'translateX(0px) translateY(0px) scaleX(0.8) scaleY(1) rotate(10deg)',
        opacity: '0.9',
      },
      '10%': {
        transform: 'translateX(5px) translateY(-2px) scaleX(0.6) scaleY(0.9) rotate(-10deg)',
        opacity: '0.8',
      },
      '20%': {
        transform: 'translateX(10px) translateY(-4px) scaleX(1) scaleY(0.8) rotate(20deg)',
        opacity: '0.7',
      },
      '30%': {
        transform: 'translateX(15px) translateY(-6px) scaleX(0.8) scaleY(1) rotate(-30deg)',
        opacity: '0.9',
      },
      '40%': {
        transform: 'translateX(10px) translateY(-4px) scaleX(0.7) scaleY(0.8) rotate(40deg)',
        opacity: '1',
      },
      '50%': {
        transform: 'translateX(5px) translateY(-2px) scaleX(0.9) scaleY(0.9) rotate(-50deg)',
        opacity: '0.7',
      },
      '60%': {
        transform: 'translateX(0px) translateY(0px) scaleX(0.8) scaleY(0.5) rotate(20deg)',
        opacity: '0.9',
      },
      '70%': {
        transform: 'translateX(-5px) translateY(2px) scaleX(0.6) scaleY(0.9) rotate(10deg)',
        opacity: '0.8',
      },
      '80%': {
        transform: 'translateX(-10px) translateY(4px) scaleX(0.9) scaleY(0.8) rotate(40deg)',
        opacity: '1',
      },
      '90%': {
        transform: 'translateX(-15px) translateY(6px) scaleX(0.8) scaleY(1) rotate(0deg)',
        opacity: '0.9',
      },
      '100%': {
        transform: 'translateX(-10px) translateY(4px) scaleX(0.7) scaleY(0.8) rotate(30deg)',
        opacity: '0.7',
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
    '.bio-picture-blur': {
      animation: 'bio-picture-blur-animation 48s infinite alternate',
    }
  });
});
 