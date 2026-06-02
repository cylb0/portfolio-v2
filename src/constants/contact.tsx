import { type Language, Languages } from '../types/language';

interface TogetherContent {
  title: string;
  subText: React.ReactNode;
}

export const together: Record<Language, TogetherContent> = {
  [Languages.ENGLISH]: {
    title: "Let's work together",
    subText: (
      <>
        Got a project in mind ? Let's talk! <br className="sm:hidden" />
        I'm available for collaborations, <br className="sm:hidden" />
        freelance missions or new opportunities.
      </>
    ),
  },
  [Languages.FRENCH]: {
    title: 'Travaillons ensemble',
    subText: (
      <>
        Un projet en tête ? Discutons-en ! <br />
        Je suis disponible pour des collaborations, <br />
        des missions freelance ou des opportunités.
      </>
    ),
  },
};

interface ContactContent {
  title: string;
  subText: string;
}

export const contact: Record<Language, ContactContent> = {
  [Languages.ENGLISH]: {
    title: 'Contact',
    subText: 'Feel free to contact me anytime.',
  },
  [Languages.FRENCH]: {
    title: 'Contact',
    subText:
      "N'hésitez pas à me contacter pour toute opportunité de collaboration.",
  },
};

interface FormContent {
  name_placeholder: string;
  email_placeholder: string;
  message_placeholder: string;
  consent_label: string;
  consent_alert: string;
  button: string;
  button_loading: string;
  confirm: string;
  error: string;
}

export const emailJsForm: Record<Language, FormContent> = {
  [Languages.ENGLISH]: {
    name_placeholder: 'What is your name ?',
    email_placeholder: 'What is your email ?',
    message_placeholder: 'What can I do for you ?',
    consent_label: 'I consent to my data being used to be contacted.',
    consent_alert: 'You need to consent to be able to send an email.',
    button: 'Send',
    button_loading: 'Sending...',
    confirm:
      'Thank you for your message, I will get back to you a soon as possible.',
    error: 'Oh ! Something went wrong, please try again.',
  },
  [Languages.FRENCH]: {
    name_placeholder: 'Quel est votre nom ?',
    email_placeholder: 'Quel est votre email ?',
    message_placeholder: 'Que puis-je faire pour vous ?',
    consent_label:
      "J'accepte que mes données soient utilisées pour être contacté.",
    consent_alert:
      "Vous devez accepter d'être recontacté pour pouvoir envoyer un message.",
    button: 'Envoyer',
    button_loading: 'Envoi en cours...',
    confirm: 'Merci pour votre message, je vous recontacterai au plus vite.',
    error: 'Un problème est survenu, veuillez réessayer.',
  },
};
