import { isDarkAtom } from '@/store';

const AnimationBlocker = () => {
  document.documentElement.classList.add('no-transitions');
  return () => document.documentElement.classList.remove('no-transitions');
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
