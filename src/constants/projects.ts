import { Languages, type Language } from "../types/language";

type Tech = "react" | "threejs" | "typescript" | "nextjs" | "restAPI" | "mysql" | "symfony" | "twig";
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
};

export const projectsTitle: Record<Language, string> = {
  [Languages.ENGLISH]: "Recent projects",
  [Languages.FRENCH]: "Projets récents",
};

export const projects: Project[] = [
  {
    name: "Portfolio",
    screenshot: "screenshots/portfolio.webp",
    subtext: {
      [Languages.ENGLISH]: "The website you're browsing right now",
      [Languages.FRENCH]: "Le portfolio que vous visitez actuellement",
    },
    links: {
      live: "/",
      github: "https://github.com/cylb0/portfolio-v2",
    },
    tags: ["react", "typescript", "threejs"],
  },
    {
    name: "PogoPVP",
    screenshot: "screenshots/pogopvp.webp",
    subtext: {
      [Languages.ENGLISH]: "An application built with React that fetches an existing API and allows the user to calculate stats for the mobile game Pokemon GO.",
      [Languages.FRENCH]: "Une application React exploitant une API anglophone et permettant de calculer des statistiques pour le jeu mobile Pokemon GO.",
    },
    links: {
      live: "https://pogopvp.morganfoucaut.fr",
      github: "https://github.com/cylb0/nextjs-pogopvp-app",
    },
    tags: ["nextjs", "react", "restAPI"],
  },
  {
    name: "GameGuy",
    screenshot: "screenshots/gameguy.webp",
    subtext: {
      [Languages.ENGLISH]: "An interactive famous handheld look-alike on which you can play a famous block game.",
      [Languages.FRENCH]: "Un petit projet de console portable permettant de jouer à un célèbre jeu de blocs.",
    },
    links: {
      live: "https://gameguy.morganfoucaut.fr",
      github: "https://github.com/cylb0/blocks",
    },
    tags: ["react", "typescript"],
  },
  {
    name: "Feuocu",
    screenshot: "screenshots/feuocu.webp",
    subtext: {
      [Languages.ENGLISH]: "Final project of my training that I presented to a panel of professional developers. It is an online shop with a back-office developed from scratch using Symfony 6.",
      [Languages.FRENCH]: "Le projet de fin de formation que j'ai soutenu devant un jury de professionnels. Une boutique en ligne fictive et son back-office développée sous Symfony 6.",
    },
    links: {
    //   live: "https://feuocu.morganfoucaut.fr",
      github: "https://github.com/cylb0/feuocu",
    },
    tags: ["symfony", "mysql", "twig"],
  },
];
