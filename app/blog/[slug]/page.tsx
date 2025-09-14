import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogposts';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Article non trouvé' };

  return {
    title: `${post.title} | Blog Matelas`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
      type: 'article',
    },
  };
}

function toDateSafe(input: string) {
  const d = new Date(input);
  return isNaN(d.getTime()) ? new Date() : d;
}

export default function BlogArticlePage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const dateObj = toDateSafe(post.date);
  const dateLabel = dateObj.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const others = blogPosts.filter((p) => p.slug !== post.slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  const relatedBase = sameCategory.length > 0 ? sameCategory : others;
  const related = [...relatedBase]
    .sort((a, b) => toDateSafe(b.date).getTime() - toDateSafe(a.date).getTime())
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20">
      <Header />

      <article className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" className="mb-6" asChild>
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au blog
            </Link>
          </Button>

          <header className="mb-8">
            {post.category ? (
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full">
                  {post.category}
                </span>
              </div>
            ) : null}

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">
              {post.title}
            </h1>

            <p className="text-xl text-slate-600 mb-6 text-pretty">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
              {post.author ? (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              ) : null}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={dateObj.toISOString()}>{dateLabel}</time>
              </div>
              {post.readTime ? (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>
                    {typeof post.readTime === 'number'
                      ? `${post.readTime} min de lecture`
                      : post.readTime}
                  </span>
                </div>
              ) : null}
            </div>
          </header>

          <div className="mb-8 rounded-2xl overflow-hidden">
            <Image
              src={post.image || '/placeholder.svg'}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-64 md:h-96 object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            {post.slug === 'choisir-fermete-matelas' && (
              <>
                <p>
                  Le choix de la fermeté d&apos;un matelas est l&apos;un des
                  critères les plus importants pour garantir un sommeil
                  réparateur. Une fermeté inadaptée peut entraîner des douleurs
                  dorsales, des réveils nocturnes et une fatigue chronique.
                </p>
                <h2>Comprendre les niveaux de fermeté</h2>
                <p>
                  Les matelas sont généralement classés selon une échelle de
                  fermeté allant de 1 (très souple) à 10 (très ferme). La
                  plupart des dormeurs trouvent leur confort entre 4 et 7 sur
                  cette échelle.
                </p>
                <h3>Matelas souple (1-3)</h3>
                <ul>
                  <li>Idéal pour les dormeurs légers (moins de 60 kg)</li>
                  <li>Convient aux personnes dormant sur le côté</li>
                  <li>Excellent soulagement des points de pression</li>
                </ul>
                <h3>Matelas mi-ferme (4-6)</h3>
                <ul>
                  <li>Convient à la majorité des dormeurs</li>
                  <li>Bon compromis entre soutien et confort</li>
                  <li>Adapté aux couples avec des préférences différentes</li>
                </ul>
                <h3>Matelas ferme (7-10)</h3>
                <ul>
                  <li>Recommandé pour les dormeurs lourds (plus de 90 kg)</li>
                  <li>Idéal pour ceux qui dorment sur le ventre ou le dos</li>
                  <li>Soutien optimal de la colonne vertébrale</li>
                </ul>
                <h2>Facteurs à considérer</h2>
                <h3>Morphologie</h3>
                <p>
                  Votre poids et votre taille influencent directement la fermeté
                  nécessaire. Plus vous êtes lourd, plus un matelas ferme aide à
                  garder un bon alignement.
                </p>
                <h3>Position de sommeil</h3>
                <p>
                  Sur le côté, privilégiez un accueil plus souple. Sur le dos ou
                  le ventre, une fermeté plus élevée fonctionne mieux.
                </p>
                <h3>Problèmes de santé</h3>
                <p>
                  En cas de lombalgies, un soutien mi-ferme à ferme est souvent
                  conseillé. Pour les douleurs articulaires, un accueil plus
                  moelleux peut aider.
                </p>
                <h2>Conseils pour tester</h2>
                <p>
                  Allongez-vous au moins 10 à 15 minutes dans votre position
                  habituelle. Profitez des périodes d&apos;essai proposées par
                  de nombreuses marques.
                </p>
              </>
            )}

            {post.slug === 'mousse-vs-ressorts' && (
              <>
                <p>
                  Choisir entre mousse et ressorts est décisif lors de l’achat
                  d’un matelas. Chaque technologie a ses forces et limites.
                </p>
                <h2>Matelas en mousse</h2>
                <h3>Mémoire de forme</h3>
                <p>
                  La mousse viscoélastique épouse les contours du corps, isole
                  les mouvements et soulage les points de pression.
                </p>
                <h4>Avantages</h4>
                <ul>
                  <li>Soulagement des points de pression</li>
                  <li>Très bonne isolation des mouvements</li>
                  <li>Adaptation morphologique</li>
                </ul>
                <h4>Inconvénients</h4>
                <ul>
                  <li>
                    Tendance à retenir la chaleur sans technologies de
                    refroidissement
                  </li>
                  <li>Sensation d&apos;enfoncement pour certains dormeurs</li>
                </ul>
                <h2>Matelas à ressorts</h2>
                <h3>Ressorts ensachés</h3>
                <p>
                  Chaque ressort réagit indépendamment, offrant soutien réactif,
                  ventilation et bonne indépendance de couchage.
                </p>
                <h4>Avantages</h4>
                <ul>
                  <li>Très aéré et frais</li>
                  <li>Soutien dynamique</li>
                  <li>Durabilité élevée</li>
                </ul>
                <h4>Inconvénients</h4>
                <ul>
                  <li>Moins enveloppant que la mousse</li>
                </ul>
                <h2>Hybrides</h2>
                <p>
                  Combinaison ressorts + mousse, pour cumuler soutien, confort
                  et thermorégulation.
                </p>
              </>
            )}

            {post.slug === 'bienfaits-latex-naturel' && (
              <>
                <p>
                  Issu de la sève d’hévéa, le latex naturel se distingue par son
                  élasticité, sa respirabilité et sa durabilité.
                </p>
                <h2>Bienfaits</h2>
                <ul>
                  <li>Hypoallergénique, antibactérien et anti-acariens</li>
                  <li>Excellent maintien avec accueil souple</li>
                  <li>Ventilation naturelle grâce à sa structure alvéolaire</li>
                  <li>Durée de vie pouvant atteindre 15 à 20 ans</li>
                </ul>
                <h2>Reconnaître le vrai latex naturel</h2>
                <ul>
                  <li>Certifications GOLS, Oeko-Tex, Eurolatex</li>
                  <li>Mention 100% latex naturel</li>
                </ul>
              </>
            )}
          </div>

          {related.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Articles similaires
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group block"
                  >
                    <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <Image
                          src={rp.image || '/placeholder.svg'}
                          alt={rp.title}
                          width={120}
                          height={80}
                          className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                            {rp.title}
                          </h3>
                          <p className="text-sm text-slate-600 mt-1">
                            {typeof rp.readTime === 'number'
                              ? `${rp.readTime} min`
                              : rp.readTime}
                            {rp.category ? ` • ${rp.category}` : ''}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
}
