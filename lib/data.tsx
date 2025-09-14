import type { Mattress, BlogPost, FAQItem, Testimonial } from './types';

export const mattresses: Mattress[] = [
  {
    id: 1,
    name: 'Matelas Confort Premium',
    type: 'Mousse à mémoire',
    comfort: 'Medium',
    price: '599€',
    originalPrice: '799€',
    rating: 4.8,
    reviews: 1247,
    image: '/luxury-white-mattress-premium-comfort.png',
    benefits: [
      'Mousse à mémoire de forme haute densité',
      'Régulation thermique avancée',
      'Support optimal de la colonne vertébrale',
      'Garantie 15 ans',
    ],
    badge: 'Bestseller',
    amazonLink: 'https://amazon.fr/matelas-confort-premium',
  },
  {
    id: 2,
    name: 'Matelas Naturel Bio',
    type: 'Latex naturel',
    comfort: 'Medium-Soft',
    price: '749€',
    originalPrice: '999€',
    rating: 4.9,
    reviews: 892,
    image: '/organic-natural-mattress-eco-friendly-materials.png',
    benefits: [
      '100% matériaux naturels et bio',
      'Latex naturel certifié',
      'Housse en coton biologique',
      'Hypoallergénique et respirant',
    ],
    badge: 'Éco-responsable',
    amazonLink: 'https://amazon.fr/matelas-naturel-bio',
  },
  {
    id: 3,
    name: 'Matelas Ferme Orthopédique',
    type: 'Ressorts ensachés',
    comfort: 'Ferme',
    price: '499€',
    originalPrice: '649€',
    rating: 4.7,
    reviews: 1056,
    image: '/firm-orthopedic-mattress-medical-support.png',
    benefits: [
      'Soutien ferme recommandé par les experts',
      'Zones de confort différenciées',
      'Réduction des points de pression',
      'Idéal pour les problèmes de dos',
    ],
    badge: 'Recommandé',
    amazonLink: 'https://amazon.fr/matelas-ferme-orthopedique',
  },
  {
    id: 4,
    name: 'Matelas Hybride Premium',
    type: 'Hybride',
    comfort: 'Medium-Firm',
    price: '899€',
    originalPrice: '1199€',
    rating: 4.8,
    reviews: 743,
    image: '/matelas-hybride-premium-ressorts-mousse.png',
    benefits: [
      'Combinaison ressorts ensachés et mousse',
      'Excellente ventilation',
      'Support adaptatif',
      'Durabilité exceptionnelle',
    ],
    badge: 'Innovation',
    amazonLink: 'https://amazon.fr/matelas-hybride-premium',
  },
  {
    id: 5,
    name: 'Matelas Mousse Haute Densité',
    type: 'Mousse polyuréthane',
    comfort: 'Medium',
    price: '399€',
    originalPrice: '549€',
    rating: 4.6,
    reviews: 1324,
    image: '/matelas-mousse-haute-densit--confort.png',
    benefits: [
      'Mousse haute densité 35kg/m³',
      'Excellent rapport qualité-prix',
      'Soutien uniforme',
      'Garantie 10 ans',
    ],
    badge: 'Meilleur prix',
    amazonLink: 'https://amazon.fr/matelas-mousse-haute-densite',
  },
  {
    id: 6,
    name: 'Matelas Latex Naturel Talalay',
    type: 'Latex naturel',
    comfort: 'Soft',
    price: '1299€',
    originalPrice: '1599€',
    rating: 4.9,
    reviews: 456,
    image: '/matelas-latex-naturel-talalay-premium.png',
    benefits: [
      'Latex Talalay 100% naturel',
      'Confort moelleux et adaptatif',
      'Thermorégulation naturelle',
      'Certification GOLS',
    ],
    badge: 'Luxe',
    amazonLink: 'https://amazon.fr/matelas-latex-talalay',
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: 'Comment choisir la fermeté de son matelas ?',
    excerpt:
      'Guide complet pour déterminer le niveau de fermeté idéal selon votre morphologie et vos habitudes de sommeil.',
    date: '15 Nov 2024',
    readTime: '5 min',
    slug: 'choisir-fermete-matelas',
    image: '/blog-fermete-matelas-guide-choix.png',
  },
  {
    title: 'Matelas en mousse vs ressorts : que choisir ?',
    excerpt:
      'Comparaison détaillée entre les différents types de matelas pour vous aider à faire le bon choix.',
    date: '12 Nov 2024',
    readTime: '7 min',
    slug: 'mousse-vs-ressorts',
    image: '/blog-mousse-vs-ressorts-comparaison.png',
  },
  {
    title: 'Les bienfaits du latex naturel pour le sommeil',
    excerpt:
      "Découvrez pourquoi le latex naturel est considéré comme l'un des meilleurs matériaux pour un sommeil réparateur.",
    date: '8 Nov 2024',
    readTime: '4 min',
    slug: 'bienfaits-latex-naturel',
    image: '/blog-latex-naturel-bienfaits-sommeil.png',
  },
];

export const faqItems: FAQItem[] = [
  {
    id: 'item-1',
    question:
      'Comment choisir la fermeté de mon matelas selon ma position de sommeil ?',
    answer: (
      <div className="text-slate-600 leading-relaxed space-y-3">
        <p>
          <strong className="text-indigo-600">Dormeurs sur le côté :</strong>{' '}
          Privilégiez un matelas moelleux à medium (3-5/10) pour épouser les
          courbes du corps.
        </p>
        <p>
          <strong className="text-indigo-600">Dormeurs sur le dos :</strong>{' '}
          Optez pour un matelas medium à ferme (5-7/10) pour maintenir
          l'alignement de la colonne.
        </p>
        <p>
          <strong className="text-indigo-600">Dormeurs sur le ventre :</strong>{' '}
          Choisissez un matelas ferme (7-9/10) pour éviter l'affaissement du
          bassin.
        </p>
      </div>
    ),
  },
  {
    id: 'item-2',
    question: 'Quel type de matelas pour les douleurs de dos ?',
    answer: (
      <p className="text-slate-600 leading-relaxed">
        Pour les douleurs lombaires, privilégiez un matelas{' '}
        <strong className="text-indigo-600">medium-ferme à ferme</strong> avec
        un bon soutien. Les matelas à{' '}
        <strong className="text-indigo-600">ressorts ensachés</strong> ou{' '}
        <strong className="text-indigo-600">
          mousse à mémoire de forme haute densité
        </strong>{' '}
        sont recommandés. Évitez les matelas trop mous qui peuvent aggraver les
        douleurs en créant des points de pression.
      </p>
    ),
  },
  {
    id: 'item-3',
    question:
      'Quelle est la différence entre mousse à mémoire de forme et latex naturel ?',
    answer: (
      <div className="text-slate-600 leading-relaxed space-y-3">
        <p>
          <strong className="text-indigo-600">Mousse à mémoire :</strong>{' '}
          S'adapte à la forme du corps, excellente pour soulager les points de
          pression, mais peut retenir la chaleur.
        </p>
        <p>
          <strong className="text-indigo-600">Latex naturel :</strong> Plus
          respirant, rebond naturel, durabilité supérieure, hypoallergénique,
          mais prix plus élevé. Le latex convient mieux aux personnes qui ont
          chaud la nuit.
        </p>
      </div>
    ),
  },
  {
    id: 'item-4',
    question: 'Combien de temps garder un matelas et quand le changer ?',
    answer: (
      <p className="text-slate-600 leading-relaxed">
        Un matelas de qualité dure généralement{' '}
        <strong className="text-indigo-600">8 à 12 ans</strong>. Changez votre
        matelas si vous ressentez : des douleurs au réveil, des affaissements
        visibles, des ressorts qui se font sentir, ou si vous dormez mieux
        ailleurs. Un matelas usé peut affecter la qualité du sommeil et la
        santé.
      </p>
    ),
  },
  {
    id: 'item-5',
    question: 'Matelas hybride : pour qui et pourquoi ?',
    answer: (
      <p className="text-slate-600 leading-relaxed">
        Les matelas hybrides combinent{' '}
        <strong className="text-indigo-600">ressorts ensachés et mousse</strong>
        , offrant le meilleur des deux mondes : soutien ferme des ressorts +
        confort adaptatif de la mousse. Idéal pour les couples avec des
        préférences différentes, les personnes qui bougent beaucoup la nuit, et
        ceux qui cherchent un bon compromis confort/soutien.
      </p>
    ),
  },
  {
    id: 'item-6',
    question: 'Comment tester un matelas acheté en ligne ?',
    answer: (
      <p className="text-slate-600 leading-relaxed">
        La plupart des marques offrent une{' '}
        <strong className="text-indigo-600">
          période d'essai de 90 à 365 nuits
        </strong>
        . Dormez dessus au moins 3-4 semaines pour que votre corps s'adapte.
        Vérifiez les conditions de retour sur Amazon : frais de retour, état
        requis du matelas, et délais. Gardez l'emballage d'origine si possible.
      </p>
    ),
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: "Grâce à MatelasMatch, j'ai enfin trouvé le matelas parfait pour mes douleurs de dos. Le comparateur m'a aidé à choisir un matelas ferme qui a complètement transformé mes nuits !",
    name: 'Marie Dubois',
    location: 'Lyon, France',
    initials: 'MD',
    gradient: 'from-indigo-400 to-purple-400',
  },
  {
    id: 2,
    rating: 5,
    text: "Interface très intuitive et conseils d'experts précieux. J'ai pu comparer facilement les matelas et trouver celui qui correspondait à mon budget. Livraison Amazon rapide en plus !",
    name: 'Jean Moreau',
    location: 'Marseille, France',
    initials: 'JM',
    gradient: 'from-emerald-400 to-teal-400',
  },
  {
    id: 3,
    rating: 4,
    text: "Excellent site pour comparer les matelas ! Les filtres par type et confort sont très pratiques. J'ai trouvé un matelas hybride parfait pour mon couple avec des préférences différentes.",
    name: 'Sophie Lefevre',
    location: 'Toulouse, France',
    initials: 'SL',
    gradient: 'from-rose-400 to-pink-400',
  },
  {
    id: 4,
    rating: 5,
    text: "Les articles du blog m'ont énormément aidé à comprendre les différences entre les types de matelas. Service client réactif et conseils personnalisés au top !",
    name: 'Pierre Martin',
    location: 'Bordeaux, France',
    initials: 'PM',
    gradient: 'from-amber-400 to-orange-400',
  },
  {
    id: 5,
    rating: 5,
    text: "Parfait pour les indécis comme moi ! Le comparateur m'a permis de voir tous les avantages de chaque matelas. Mon matelas en latex naturel est un vrai bonheur.",
    name: 'Anne Rousseau',
    location: 'Nantes, France',
    initials: 'AR',
    gradient: 'from-violet-400 to-purple-400',
  },
  {
    id: 6,
    rating: 4,
    text: "Site très complet avec de bons conseils. J'ai apprécié la transparence sur les prix et les liens directs vers Amazon. Mon nouveau matelas à mémoire de forme est parfait !",
    name: 'Thomas Bernard',
    location: 'Lille, France',
    initials: 'TB',
    gradient: 'from-blue-400 to-cyan-400',
  },
];
