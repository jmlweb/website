import { isDarkAtom } from '@/store';

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

isDarkAtom.listen((isDark) => {
  const unblock = AnimationBlocker();
  document.documentElement.classList.toggle('dark', isDark);
  setTimeout(() => unblock(), 500);
});

window.addEventListener('storage', (e) => {
  if (e.key === 'theme') {
    isDarkAtom.set(e.newValue === 'dark');
  }
});
