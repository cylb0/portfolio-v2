import React from 'react';
import { type Language, Languages } from '../types/language';
import { FaCloud, FaGlobe, FaRobot } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface AboutContent {
  title: string;
  content: React.ReactNode;
}

export const about: Record<Language, AboutContent> = {
  [Languages.ENGLISH]: {
    title: 'About me',
    content: (
      <>
        Passionate about web development and proud to embrace my inner{' '}
        <span className="text-primary font-bold">geek</span>, my retraining
        confirmed an insatiable appetite for intellectual challenge. Every line
        of code is a puzzle I look forward to solving. Outside of code, you'll
        find me under a tree with a science journal or playing a game older than
        me — special mention for{' '}
        <span className="text-primary font-bold">astrophysics</span>. I'm
        looking for a company where I can take on new{' '}
        <span className="text-primary font-bold">challenges</span>. Feel free to{' '}
        <a href="#contact" className="text-primary font-bold hover:underline">
          contact
        </a>{' '}
        me.
      </>
    ),
  },
  [Languages.FRENCH]: {
    title: 'À propos de moi',
    content: (
      <>
        Passionné de développement web et fier d'embrasser mon côté{' '}
        <span className="text-primary font-bold">geek</span>, ma reconversion a
        confirmé un désir insatiable de stimulation intellectuelle. Chaque ligne
        de code est un défi que j'ai hâte de relever. En dehors du code, vous me
        trouverez sous un arbre avec une revue scientifique ou sur un vieux jeu
        vidéo — mention spéciale pour{' '}
        <span className="text-primary font-bold">l'astrophysique</span>. Je
        cherche une entreprise où contribuer à de nouveaux{' '}
        <span className="text-primary font-bold">challenges</span>. N'hésitez
        pas à me{' '}
        <a href="#contact" className="text-primary font-bold hover:underline">
          contacter
        </a>
        .
      </>
    ),
  },
};

interface AboutDomain {
  icon: IconType;
  label: Record<Language, string> | string;
  stack: Record<Language, string> | string;
}

export const domains: AboutDomain[] = [
  {
    icon: FaGlobe,
    label: 'Web',
    stack: 'Frontend & Backend',
  },
  {
    icon: FaRobot,
    label: {
      [Languages.FRENCH]: 'IA',
      [Languages.ENGLISH]: 'AI',
    },
    stack: {
      [Languages.FRENCH]: 'Intégration & automatisation',
      [Languages.ENGLISH]: 'Integration & automation',
    },
  },
  {
    icon: FaCloud,
    label: 'Cloud',
    stack: {
      [Languages.FRENCH]: 'Déploiement & infrastructure',
      [Languages.ENGLISH]: 'Deployment & infrastructure',
    },
  },
];
