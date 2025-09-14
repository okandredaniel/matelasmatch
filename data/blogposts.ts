import { BlogPost } from '@/types/content';

export const blogPosts: BlogPost[] = [
  {
    kind: 'blog',
    title: 'Comment choisir la fermeté de son matelas ?',
    excerpt:
      'Guide complet pour déterminer le niveau de fermeté idéal selon votre morphologie et vos habitudes de sommeil.',
    date: '15 mars 2024',
    readTime: '5 min',
    slug: 'choisir-fermete-matelas',
    image: '/blog-fermete-matelas-guide-choix.png',
    category: "Guide d'achat",
    author: 'Dr. Sophie Martin',
  },
  {
    kind: 'blog',
    title: 'Matelas en mousse vs ressorts : que choisir ?',
    excerpt:
      'Comparaison détaillée entre les différents types de matelas pour vous aider à faire le bon choix.',
    date: '12 mars 2024',
    readTime: '7 min',
    slug: 'mousse-vs-ressorts',
    image: '/blog-mousse-vs-ressorts-comparaison.png',
    category: 'Comparatif',
    author: 'Pierre Dubois',
  },
  {
    kind: 'blog',
    title: 'Les bienfaits du latex naturel pour le sommeil',
    excerpt:
      "Découvrez pourquoi le latex naturel est considéré comme l'un des meilleurs matériaux pour un sommeil réparateur.",
    date: '8 mars 2024',
    readTime: '4 min',
    slug: 'bienfaits-latex-naturel',
    image: '/blog-latex-naturel-bienfaits-sommeil.png',
    category: 'Santé & Bien-être',
    author: 'Marie Leroy',
  },
];
