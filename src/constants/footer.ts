import { type Language, Languages } from '../types/language';

export const copyright: Record<Language, string> = {
  [Languages.ENGLISH]: 'All rights reserved.',
  [Languages.FRENCH]: 'Tous droits réservés.',
};

interface RgpdContent {
  legal: string;
  privacy: string;
}

export const rgpd: Record<Language, RgpdContent> = {
  [Languages.FRENCH]: {
    legal: 'Mentions légales',
    privacy: 'Politique de confidentialité',
  },
  [Languages.ENGLISH]: {
    legal: 'Legal Notice',
    privacy: 'Privacy Policy',
  },
};
