import { atom } from 'nanostores';

export const theme = atom<'auto' | 'light' | 'dark'>('auto');
export const isMenuOpen = atom<boolean>(false);
