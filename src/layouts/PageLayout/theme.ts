import { theme } from './store';

declare global {
  var AnimationBlocker: () => () => void;
}

export const initializeTheme = () => {
  theme.set(document.documentElement.classList.contains('dark') ? 'dark' : 'light');

  theme.listen((value) => {
    const unblock = AnimationBlocker();
    document.documentElement.classList[value === 'dark' ? 'add' : 'remove']('dark');
    localStorage.setItem('theme', value);
    unblock();
  });
};
