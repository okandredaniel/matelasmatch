import { NavLink, NavSection } from '@/types/common';

export const headerLinks: NavLink[] = [
  { href: '/', label: 'Accueil' },
  { href: '/comparateur', label: 'Comparateur' },
  { href: '/articles', label: 'Articles' },
  { href: '/blog', label: 'Blog' },
  { href: '/guide-achat', label: 'Guide d’achat' },
  { href: '/contact', label: 'Contact' },
];

export const footerSections: NavSection[] = [
  {
    title: 'Comparateur',
    links: [
      {
        href: '/categorie/matelas-mousse-memoire',
        label: 'Matelas en mousse à mémoire',
      },
      {
        href: '/categorie/matelas-ressorts-ensaches',
        label: 'Matelas à ressorts ensachés',
      },
      {
        href: '/categorie/matelas-latex-naturel',
        label: 'Matelas en latex naturel',
      },
      { href: '/categorie/matelas-hybrides', label: 'Matelas hybrides' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/articles', label: 'Articles & guides' },
      { href: '/blog?c=Comparatif', label: 'Comparatifs' },
      { href: '/avis-clients', label: 'Avis clients' },
      { href: '/faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Contact',
    links: [
      {
        href: 'mailto:contact@matelasmatch.fr',
        label: 'contact@matelasmatch.fr',
        external: true,
      },
      { href: '/mentions-legales', label: 'Mentions légales' },
      {
        href: '/politique-confidentialite',
        label: 'Politique de confidentialité',
      },
    ],
  },
];
