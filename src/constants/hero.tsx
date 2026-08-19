import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { type Language, Languages } from '../types/language';

interface HeroContent {
  title: string;
  subText: React.ReactNode;
}

export const hero: Record<Language, HeroContent> = {
  [Languages.ENGLISH]: {
    title: "Hi, I'm",
    subText: (
      <>
        IT enthusiast, craving challenges, <br className="sm:hidden" />
        and eager for fresh new tech insights.
      </>
    ),
  },
  [Languages.FRENCH]: {
    title: "Salut, moi c'est",
    subText: (
      <>
        Passionné de développement web, <br className="sm:hidden" />
        assoiffé de défis et avide <br className="sm:hidden" />
        de nouvelles connaissances.
      </>
    ),
  },
};

interface HeroLink {
  link: string;
  icon: IconType;
  ariaLabel: Record<Language, string>;
}

export const heroLinks: Record<string, HeroLink> = {
  github: {
    link: 'https://github.com/cylb0',
    icon: FaGithub,
    ariaLabel: {
      [Languages.ENGLISH]: 'Github Profile',
      [Languages.FRENCH]: 'Profil Github',
    },
  },
  linkedin: {
    link: 'https://www.linkedin.com/in/morgan-foucaut/',
    icon: FaLinkedin,
    ariaLabel: {
      [Languages.ENGLISH]: 'LinkedIn Profile',
      [Languages.FRENCH]: 'Profil LinkedIn',
    },
  },
  contact: {
    link: '#contact',
    icon: FaEnvelope,
    ariaLabel: {
      [Languages.ENGLISH]: 'Send an email',
      [Languages.FRENCH]: 'Envoyer un e-mail',
    },
  },
};
