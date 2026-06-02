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

export const heroLinks: Record<string, { link: string; icon: IconType }> = {
  github: {
    link: 'https://github.com/cylb0',
    icon: FaGithub,
  },
  linkedin: {
    link: 'https://www.linkedin.com/in/morgan-foucaut/',
    icon: FaLinkedin,
  },
  contact: {
    link: '#contact',
    icon: FaEnvelope,
  },
};
