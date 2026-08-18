import { type Language, Languages } from "../types/language";

export const menuAriaLabels: Record<Language, { open: string; close: string }> = {
    [Languages.ENGLISH]: {
        open: 'Open menu',
        close: 'Close menu',
    },
    [Languages.FRENCH]: {
        open: 'Ouvrir le menu',
        close: 'Fermer le menu',
    }
}

export const carouselAriaLabels: Record<Language, { prev: string, next: string }> = {
    [Languages.ENGLISH]: {
        prev: 'Previous project',
        next: 'Next project',
    },
    [Languages.FRENCH]: {
        prev: 'Projet précédent',
        next: 'Projet suivant',
    }
}

export const scrollAriaLabels: Record<Language, { top: string, about: string }> = {
    [Languages.ENGLISH]: {
        top: 'Scroll to top',
        about: 'Scroll to About section'
    },
    [Languages.FRENCH]: {
        top:  'Défiler jusqu\'en haut de la page',
        about: 'Défiler jusqu\'à la section À propos'
    }
}

export const projectCardAriaLabels: Record<Language, { github: (name: string) => string; live: (name: string) => string }> = {
    [Languages.ENGLISH]: {
        github: (name: string) => `GitHub source code for ${name}`,
        live: (name: string) => `Live demo for ${name}`,
    },
    [Languages.FRENCH]: {
        github: (name: string) => `Code source GitHub pour ${name}`,
        live: (name: string) => `Démonstration en ligne pour ${name}`,
    },
};
