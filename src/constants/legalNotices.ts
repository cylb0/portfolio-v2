import { type Language, Languages } from '../types/language';

const URL = 'https://www.morganfoucaut.fr';
const WEBMASTER = {
  firstname: 'Morgan',
  lastname: 'Foucaut',
  address:
    'Morgan Foucaut, 18 Rue Paul Vaillant Couturier, 57300 Hagondange, FRANCE',
  email: 'foucaut.morgan@gmail.com',
};
const HOST = {
  name: 'OVH SAS',
  address: '2 rue Kellermann, 59100 Roubaix, France',
};

const DNS = {
  name: 'Cloudflare, Inc.',
  address: '101 Townsend St, San Francisco, CA 94107, USA',
};

const MAILING = {
  name: 'EmailJS',
};

type LNElement = {
  title: string;
  content: (string | string[])[];
};

interface LegalNoticeContent {
  title: string;
  content: LNElement[];
}

export const legalNotices: Record<Language, LegalNoticeContent> = {
  [Languages.FRENCH]: {
    title: 'Mentions légales',
    content: [
      {
        title: 'Éditeur du site',
        content: [
          `Le site accessible à l'adresse ${URL} est édité par:`,
          [
            `Identité: ${WEBMASTER.firstname} ${WEBMASTER.lastname}`,
            `Adresse: ${WEBMASTER.address}`,
            `Email: ${WEBMASTER.email}`,
          ],
          `Le directeur de publication est ${WEBMASTER.firstname} ${WEBMASTER.lastname}`,
        ],
      },
      {
        title: 'Hébergement et infrastructure',
        content: [
          `Le contenu de ce site est auto-hébergé sur un serveur privé administré par ${WEBMASTER.firstname} ${WEBMASTER.lastname}.`,
          [
            `Nom de domain: Enregistré auprès de la société ${HOST.name}, dont le siège social est situé ${HOST.address}.`,
            `Gestion du trafic et sécurité: Ce site utilise les services de ${DNS.name} (${DNS.address}) pour la protection,
                        l'optimisation et la distribution du contenu. ${DNS.name} peut être amené à traiter des données techniques (addresse IP)
                        à des fins de sécurité.`,
            'Architecture technique: le site est déployé via des conteneurs Docker sur un serveur privé.',
          ],
        ],
      },
      {
        title: 'Protection des données personnelles',
        content: [
          `Les informations recueillies via le formulaire de contact (nom, prénom, adresse e-mail) sont traitées afin de permettre la
                    gestion et le suivi de vos demandes de contact.`,
          [
            `Service tiers: Le formulaire de contact utilise le service ${MAILING.name}. Ce service assure l'acheminement des messages
                        vers et depuis la messagerie électronique de l'éditeur. ${MAILING.name} peut conserver temporairement une trace des envois
                        dans son tablesau de bord d'administration pour des besoins techniques de suivi`,
            `Destinataires: Les données collectées sont destinées exclusivement à ${WEBMASTER.firstname} ${WEBMASTER.lastname}.
                        Aucune donnée n'est cédée, vendue ou louée à des tiers.`,
            `Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification,
                        d'effacement et d'opposition concernant vos données personnelles. Pour exercer ces droits, vous pouvez contacter l'éditeur
                        à l'adresse suivante: ${WEBMASTER.email}.`,
          ],
        ],
      },
      {
        title: 'Propriété intellectuelle',
        content: [
          `L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                    Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques
                    et photographiques. La reproduction de tout ou partie de ce site sur un support électronique ou papier quel qu'il soit est formellement
                    interdite sauf autorisation expresse du directeur de la publication.`,
        ],
      },
      {
        title: 'Cookies et traceurs',
        content: [
          `Ce site limite l'utilisation de cookies au strict nécessaire pour son fonctionnement technique. Aucun cookie de pistage publicitaire
                    ou de profilage n'est utilisé. En utilisant ce site, vous acceptez le dépôt de cookies techniques nécessaires à la navigation via Cloudflare 
                    (le cas échéant).`,
        ],
      },
    ],
  },
  [Languages.ENGLISH]: {
    title: 'Terms and Conditions',
    content: [
      {
        title: 'Site Editor',
        content: [
          `The site accessible at the address ${URL} is edited by:`,
          [
            `Identity: ${WEBMASTER.firstname} ${WEBMASTER.lastname}`,
            `Address: ${WEBMASTER.address}`,
            `Email: ${WEBMASTER.email}`,
          ],
          `The publication director is ${WEBMASTER.firstname} ${WEBMASTER.lastname}`,
        ],
      },
      {
        title: 'Hosting and Infrastructure',
        content: [
          `The content of this site is self-hosted on a private server managed by ${WEBMASTER.firstname} ${WEBMASTER.lastname}.`,
          [
            `Domain name: Registered with the company ${HOST.name}, whose headquarters are located at ${HOST.address}.`,
            `Traffic management and security: This site uses the services of ${DNS.name} (${DNS.address}) for protection,
                optimization, and distribution of content. ${DNS.name} may process technical data (IP address)
                for security purposes.`,
            'Technical architecture: The site is deployed via Docker containers on a private server.',
          ],
        ],
      },
      {
        title: 'Personal Data Protection',
        content: [
          `Information collected through the contact form (name, surname, email) are processed to allow
                management and tracking of your contact requests.`,
          [
            `Third-party service: The contact form uses the ${MAILING.name} service. This service ensures the forwarding of messages
                to and from the editor's electronic mail. ${MAILING.name} may temporarily store delivery traces in its administration dashboard for technical follow-up purposes`,
            `Recipients: The collected data is exclusively destined for ${WEBMASTER.firstname} ${WEBMASTER.lastname}.
                No data is transferred, sold, or leased to third parties.`,
            `In accordance with the General Data Protection Regulation (GDPR), you have the right of access, rectification,
                erasure, and objection regarding your personal data. To exercise these rights, you can contact the editor
                at the following address: ${WEBMASTER.email}.`,
          ],
        ],
      },
      {
        title: 'Intellectual Property',
        content: [
          `The entire site falls under French and international laws on copyright and intellectual property.
                All reproduction rights are reserved, including for downloadable documents and iconographic or photographic representations.
                Any reproduction of all or part of this site on an electronic or paper support whatsoever is strictly prohibited
                without the express permission of the publication director.`,
        ],
      },
      {
        title: 'Cookies and Trackers',
        content: [
          `This site limits the use of cookies to what is strictly necessary for its technical operation. No public advertising cookies
                or profiling cookies are used. By using this site, you accept the deposition of necessary technical cookies for navigation via Cloudflare 
                (if applicable).`,
        ],
      },
    ],
  },
};
