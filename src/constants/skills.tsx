import type { IconType } from 'react-icons';
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { BsTypescript } from 'react-icons/bs';
import { DiDjango } from 'react-icons/di';
import { SiCloudflare, SiOllama, SiYolo } from 'react-icons/si';
import { Languages, type Language } from '../types/language';

export const skillsTitle: Record<Language, string> = {
  [Languages.ENGLISH]: 'Tech stack',
  [Languages.FRENCH]: 'Stack technique',
};

export const technos: [string, IconType][] = [
  ['HTML/CSS', FaHtml5],
  ['Typescript', BsTypescript],
  ['NodeJs', FaNodeJs],
  ['React', FaReact],
  ['Django', DiDjango],
  ['Docker', FaDocker],
  ['AWS', FaAws],
  ['Git & GitHub', FaGithub],
  ['Ollama', SiOllama],
  ['Cloudflare', SiCloudflare],
  ['Computer Vision', SiYolo],
];

export const skillQuote: Record<Language, string> = {
  [Languages.FRENCH]:
    "Le code est comme l'univers: infini, fascinant et en constante évolution.",
  [Languages.ENGLISH]:
    'Code is like the universe: infinite, fascinating and constantly evolving.',
};
