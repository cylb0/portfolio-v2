import { type Language, Languages } from '../types/language';

interface MetaContent {
  description: string;
}

export const DEFAULT_PATH = '/';

export const meta: Record<string, Record<Language, MetaContent>> = {
  '/': {
    [Languages.ENGLISH]: {
      description:
        'Portfolio of Morgan Foucaut, web developer: React, TypeScript, Node.js, Django, Docker and AWS. Browse my projects and get in touch.',
    },
    [Languages.FRENCH]: {
      description:
        'Portfolio de Morgan Foucaut, développeur web : React, TypeScript, Node.js, Django, Docker et AWS. Découvrez mes projets et contactez-moi.',
    },
  },
  '/legal-notice': {
    [Languages.ENGLISH]: {
      description:
        'Legal notice and privacy policy for morganfoucaut.fr: publisher, hosting provider and personal data handling.',
    },
    [Languages.FRENCH]: {
      description:
        'Mentions légales et politique de confidentialité de morganfoucaut.fr : éditeur, hébergeur et traitement des données personnelles.',
    },
  },
};
