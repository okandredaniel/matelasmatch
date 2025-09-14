import type { BlogPost } from '@/types/content';

export const blogPosts: BlogPost[] = [
  {
    kind: 'blog',
    title: 'Comment choisir la fermeté de son matelas ?',
    excerpt:
      'Découvrez comment déterminer le bon niveau de fermeté selon votre morphologie, votre position de sommeil et vos préférences.',
    date: '15 mars 2024',
    dateISO: '2024-03-15',
    updatedISO: '2024-03-20',
    readTime: '8 min',
    slug: 'choisir-fermete-matelas',
    image: '/blog-fermete-matelas-guide-choix.png',
    category: "Guide d'achat",
    author: 'Dr. Sophie Martin',
    tags: ['fermété', 'morphologie', 'conseils'],
    contentHtml: `
      <p>Le choix de la fermeté d’un matelas conditionne la qualité de votre sommeil. Un matelas trop souple ou trop ferme peut provoquer des douleurs dorsales, des réveils nocturnes et une récupération incomplète.</p>

      <h2>Niveaux de fermeté : comment les comprendre</h2>
      <p>On distingue généralement trois grandes familles de confort : souple, mi-ferme et ferme. L’objectif est de garder la colonne alignée tout en répartissant la pression.</p>

      <h3>Souple</h3>
      <ul>
        <li>Idéal pour les dormeurs légers (&lt; 60 kg)</li>
        <li>Convient aux dormeurs sur le côté</li>
        <li>Soulagement marqué des points de pression</li>
      </ul>

      <h3>Mi-ferme</h3>
      <ul>
        <li>Confort universel, adapté à la majorité</li>
        <li>Bon compromis entre soutien et accueil</li>
        <li>Recommandé pour les couples</li>
      </ul>

      <h3>Ferme</h3>
      <ul>
        <li>Meilleur maintien pour les gabarits &gt; 90 kg</li>
        <li>Convient aux dormeurs sur le dos ou le ventre</li>
        <li>Alignement optimal de la colonne</li>
      </ul>

      <h2>Facteurs clés</h2>
      <h3>Morphologie</h3>
      <p>Plus le poids est élevé, plus le matelas doit offrir un soutien ferme pour éviter l’enfoncement excessif.</p>

      <h3>Position de sommeil</h3>
      <p>Sur le côté : accueil plus moelleux. Sur le dos/ventre : soutien plus tonique.</p>

      <h3>Sensibilités</h3>
      <p>En cas de lombalgies, privilégiez un mi-ferme à ferme. Pour des douleurs articulaires, préférez un accueil plus souple.</p>

      <h2>Comment tester</h2>
      <ol>
        <li>Allongez-vous 10–15 minutes dans votre position habituelle.</li>
        <li>Vérifiez l’alignement nuque-épaules-hanches.</li>
        <li>Assurez-vous de pouvoir changer de position sans effort.</li>
      </ol>

      <h2>À retenir</h2>
      <p>Visez l’équilibre : un soutien suffisant pour l’alignement, un accueil adapté à votre morphologie pour la décharge des pressions.</p>
    `,
  },
  {
    kind: 'blog',
    title: 'Matelas en mousse vs ressorts : que choisir ?',
    excerpt:
      'Mousse viscoélastique, mousse HR, ressorts ensachés… Comparez leurs avantages, limites et profils de dormeurs.',
    date: '12 mars 2024',
    dateISO: '2024-03-12',
    updatedISO: '2024-03-18',
    readTime: '9 min',
    slug: 'mousse-vs-ressorts',
    image: '/blog-mousse-vs-ressorts-comparaison.png',
    category: 'Comparatif',
    author: 'Pierre Dubois',
    tags: ['mousse', 'ressorts', 'hybride'],
    contentHtml: `
      <p>Faut-il choisir un matelas en mousse ou à ressorts ? Les deux familles répondent à des besoins différents en matière de soutien, d’aération et de sensation de couchage.</p>

      <h2>Matelas en mousse</h2>
      <h3>Mousse à mémoire de forme</h3>
      <ul>
        <li>Soulagement des points de pression</li>
        <li>Excellente isolation des mouvements</li>
        <li>Peut conserver la chaleur si non ventilée</li>
      </ul>

      <h3>Mousse HR (haute résilience)</h3>
      <ul>
        <li>Soutien plus tonique</li>
        <li>Budget souvent plus accessible</li>
        <li>Durabilité variable selon la densité</li>
      </ul>

      <h2>Matelas à ressorts ensachés</h2>
      <ul>
        <li>Aération supérieure et régulation thermique</li>
        <li>Soutien réactif et zoné</li>
        <li>Très bonne indépendance de couchage</li>
      </ul>

      <h2>Hybrides : le compromis</h2>
      <p>Ils associent ressorts ensachés et couches de mousse pour combiner soutien, confort et fraîcheur.</p>

      <h2>Recommandations selon le profil</h2>
      <ul>
        <li>Douleurs articulaires : mousse mémoire</li>
        <li>Chaleur nocturne : ressorts</li>
        <li>Couples sensibles aux mouvements : mousse mémoire ou hybrides</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Choisissez selon votre besoin prioritaire : soulagement de pression (mousse) ou réactivité/ventilation (ressorts). Les hybrides offrent un équilibre pertinent.</p>
    `,
  },
  {
    kind: 'blog',
    title: 'Les bienfaits du latex naturel pour le sommeil',
    excerpt:
      'Latex 100 % naturel, certifications, ventilation, soutien… pourquoi ce matériau premium améliore la qualité du sommeil.',
    date: '8 mars 2024',
    dateISO: '2024-03-08',
    updatedISO: '2024-03-10',
    readTime: '7 min',
    slug: 'bienfaits-latex-naturel',
    image: '/blog-latex-naturel-bienfaits-sommeil.png',
    category: 'Santé & Bien-être',
    author: 'Marie Leroy',
    tags: ['latex naturel', 'ventilation', 'hypoallergénique'],
    contentHtml: `
      <p>Issu de la sève d’hévéa, le latex naturel est plébiscité pour sa résilience, sa ventilation et ses propriétés hypoallergéniques.</p>

      <h2>Pourquoi choisir le latex naturel</h2>
      <ul>
        <li>Élasticité immédiate et soutien précis</li>
        <li>Structure alvéolaire très ventilée</li>
        <li>Propriétés naturellement antibactériennes</li>
        <li>Durabilité supérieure (jusqu’à 15–20 ans)</li>
      </ul>

      <h2>Certifications à vérifier</h2>
      <ul>
        <li>GOLS pour le latex biologique</li>
        <li>OEKO-TEX pour l’absence de substances nocives</li>
        <li>Traçabilité de l’origine</li>
      </ul>

      <h2>Pour qui ?</h2>
      <ul>
        <li>Personnes allergiques ou asthmatiques</li>
        <li>Dormeurs ayant chaud</li>
        <li>Couples en recherche d’indépendance de couchage</li>
      </ul>

      <h2>Entretien</h2>
      <p>Utilisez un protège-matelas respirant, aérez régulièrement et évitez l’exposition directe au soleil prolongée.</p>

      <h2>Conclusion</h2>
      <p>Le latex naturel représente un investissement durable pour un confort sain et haut de gamme.</p>
    `,
  },
];
