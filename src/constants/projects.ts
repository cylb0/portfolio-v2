import { Languages, type Language } from '../types/language';

type Tech = string;
type TechList = Tech[];

export type Project = {
  name: string;
  screenshot: string;
  subtext: Record<Language, string>;
  links?: {
    live?: string;
    github?: string;
  };
  tags: TechList;
  ongoing?: boolean;
};

export const projectsTitle: Record<Language, string> = {
  [Languages.ENGLISH]: 'Recent projects',
  [Languages.FRENCH]: 'Projets récents',
};

export const projects: Project[] = [
  {
    name: 'Pkmscan',
    screenshot: 'screenshots/pkmscan.webp',
    subtext: {
      [Languages.ENGLISH]:
        'Serverless Pokémon card intelligence pipeline using YOLO-based detection, mobile capture upload, LLM identification (Gemini or similar), and Django API storage of normalized card assets and multilingual metadata.',
      [Languages.FRENCH]:
        "Pipeline serverless d'analyse de cartes Pokémon utilisant une détection YOLO, upload depuis mobile, identification via LLM (Gemini ou autre), et API Django pour stocker les cartes normalisées et leurs métadonnées multilingues.",
    },
    links: {
      github: 'https://github.com/cylb0/pkmscan-main',
    },
    tags: ['django', 'aws', 'ec2', 'iam', 'mobile', 'yolo', 'computer-vision'],
    ongoing: true,
  },
  {
    name: 'Portfolio',
    screenshot: 'screenshots/portfolio.webp',
    subtext: {
      [Languages.ENGLISH]: "The website you're browsing right now",
      [Languages.FRENCH]: 'Le portfolio que vous visitez actuellement',
    },
    links: {
      live: '/',
      github: 'https://github.com/cylb0/portfolio-v2',
    },
    tags: ['react', 'typescript', 'threejs'],
  },
  {
    name: 'LegoCatalogPipeline',
    screenshot: 'screenshots/lego_pipeline.svg',
    subtext: {
      [Languages.ENGLISH]:
        'Automate Lego data gathering from rebrickable csv, LDraw downloads, orphans removal, and .glb conversion for optimized React frontend rendering.',
      [Languages.FRENCH]:
        'Automatiser la récupération des données CSV Rebrickable CSV, le téléchargement des archives LDraw, la suppression des orphelins et la conversion en .glb pour un affichage optimisé dans le frontend React.',
    },
    links: {
      github: 'https://github.com/cylb0/lego-catalog-pipeline',
    },
    tags: ['python', 'aws-lambda', 's3', 'queues', 'blender'],
  },
  {
    name: 'PogoPVP',
    screenshot: 'screenshots/pogopvp.webp',
    subtext: {
      [Languages.ENGLISH]:
        'An application built with React that fetches an existing API and allows the user to calculate stats for the mobile game Pokemon GO.',
      [Languages.FRENCH]:
        'Une application React exploitant une API anglophone et permettant de calculer des statistiques pour le jeu mobile Pokemon GO.',
    },
    links: {
      live: 'https://pogopvp.morganfoucaut.fr',
      github: 'https://github.com/cylb0/nextjs-pogopvp-app',
    },
    tags: ['nextjs', 'react', 'restAPI'],
  },
  {
    name: 'GameGuy',
    screenshot: 'screenshots/gameguy.webp',
    subtext: {
      [Languages.ENGLISH]:
        'An interactive famous handheld look-alike on which you can play a famous block game.',
      [Languages.FRENCH]:
        'Un petit projet de console portable permettant de jouer à un célèbre jeu de blocs.',
    },
    links: {
      live: 'https://gameguy.morganfoucaut.fr',
      github: 'https://github.com/cylb0/blocks',
    },
    tags: ['react', 'typescript'],
  },
  {
    name: 'Feuocu',
    screenshot: 'screenshots/feuocu.webp',
    subtext: {
      [Languages.ENGLISH]:
        'Final project of my training that I presented to a panel of professional developers. It is an online shop with a back-office developed from scratch using Symfony 6.',
      [Languages.FRENCH]:
        "Le projet de fin de formation que j'ai soutenu devant un jury de professionnels. Une boutique en ligne fictive et son back-office développée sous Symfony 6.",
    },
    links: {
      github: 'https://github.com/cylb0/feuocu',
    },
    tags: ['symfony', 'mysql', 'twig'],
  },
];
