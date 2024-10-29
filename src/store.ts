import { atom } from 'nanostores';

export const isDarkAtom = atom(document.documentElement.classList.contains('dark'));