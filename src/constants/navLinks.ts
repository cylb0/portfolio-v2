import { type Language, Languages } from '../types/language';

interface NavLink {
  id: string;
  titles: Record<Language, string>;
}

export const navLinks: NavLink[] = [
  {
    id: 'about',
    titles: {
      [Languages.ENGLISH]: 'About',
      [Languages.FRENCH]: 'A propos',
    },
  },
  {
    id: 'projects',
    titles: {
      [Languages.ENGLISH]: 'Projects',
      [Languages.FRENCH]: 'Projets',
    },
  },
  {
    id: 'contact',
    titles: {
      [Languages.ENGLISH]: 'Contact',
      [Languages.FRENCH]: 'Contact',
    },
  },
];
