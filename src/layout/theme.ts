import { theme } from '@/store';

const AnimationBlocker = () => {
  const css = document.createElement('style');
  css.appendChild(
    document.createTextNode(
      `* {
          -webkit-transition: none !important;
          -moz-transition: none !important;
          -o-transition: none !important;
          -ms-transition: none !important;
          transition: none !important;
        }`,
    ),
  );
  document.head.appendChild(css);
  window.getComputedStyle(css).opacity;
  return () => document.head.removeChild(css);
};

export const initializeTheme = () => {
  theme.set(document.documentElement.dataset.theme as 'light' | 'dark');

  theme.subscribe((value) => {
    const unblock = AnimationBlocker();
    document.documentElement.setAttribute('data-theme', value);
    unblock();
  });
};
