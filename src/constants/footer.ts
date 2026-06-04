import { type Language, Languages } from '../types/language';

export const copyright: Record<Language, string> = {
  [Languages.ENGLISH]: 'All rights reserved.',
  [Languages.FRENCH]: 'Tous droits réservés.',
};

export const rgpd: Record<Language, string> = {
  [Languages.FRENCH]: "Mentions légales et politique de confidentialité",
  [Languages.ENGLISH]: "Legal Notice & Privacy Policy"
}