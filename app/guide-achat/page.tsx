'use client';

import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { PageHero } from '@/components/page-hero';
import { ProcessSteps } from '@/components/process-steps';
import { StatsGrid } from '@/components/stats-grid';
import { TeamGrid } from '@/components/team-grid';
import { ValuesGrid } from '@/components/values-grid';
import {
  Award,
  Heart,
  Lightbulb,
  Shield,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';

export default function GuideAchatPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: 'Passion du Sommeil',
      description:
        'Nous croyons que chaque personne mérite un sommeil réparateur et de qualité.',
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: 'Transparence',
      description:
        'Nos recommandations sont basées sur des tests rigoureux et des avis authentiques.',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      title: 'Innovation',
      description:
        'Nous suivons les dernières innovations pour vous proposer les meilleures solutions.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: 'Amélioration Continue',
      description:
        'Nous améliorons constamment nos services pour mieux vous servir.',
    },
  ];

  const stats = [
    { number: '50 000+', label: 'Utilisateurs satisfaits' },
    { number: '200+', label: 'Matelas testés' },
    { number: '15+', label: 'Marques partenaires' },
    { number: '98%', label: 'Taux de satisfaction' },
  ];

  const team = [
    {
      name: 'Dr. Sophie Martin',
      role: 'Experte en Sommeil',
      description: "15 ans d'expérience en médecine du sommeil",
      avatar: <Users className="w-12 h-12 text-accent" />,
    },
    {
      name: 'Pierre Dubois',
      role: 'Spécialiste Matelas',
      description: 'Expert en technologies de literie depuis 12 ans',
      avatar: <Users className="w-12 h-12 text-accent" />,
    },
    {
      name: 'Marie Leroy',
      role: 'Conseillère Bien-être',
      description: 'Certifiée en ergonomie et confort de sommeil',
      avatar: <Users className="w-12 h-12 text-accent" />,
    },
  ];

  const steps = [
    {
      title: 'Tests physiques',
      description: 'Confort, fermeté, durabilité et régulation thermique.',
    },
    {
      title: 'Analyse des avis',
      description:
        'Compilation et analyse de milliers d’avis clients authentiques.',
    },
    {
      title: 'Recommandations',
      description: 'Conseils personnalisés selon vos besoins spécifiques.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 relative">
      <Header />
      <PageHero
        title="À propos de MatelasMatch"
        subtitle="Votre guide de confiance pour trouver le matelas parfait, créé par des experts passionnés du sommeil."
      />
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="glass-card-enhanced rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-sans text-3xl font-bold text-foreground mb-6">
                  Notre mission
                </h2>
                <p className="text-slate-600 mb-6 text-pretty">
                  Chez MatelasMatch, nous croyons que le sommeil est la
                  fondation d’une vie épanouie. Notre mission est de simplifier
                  votre recherche du matelas idéal avec des comparaisons
                  objectives, des conseils d’experts et des recommandations
                  personnalisées.
                </p>
                <p className="text-slate-600 mb-6 text-pretty">
                  Nous testons rigoureusement chaque matelas selon des critères
                  stricts : confort, durabilité, rapport qualité-prix et
                  satisfaction client. Notre équipe analyse les dernières
                  innovations pour vous offrir des informations fiables.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-green-500" /> Tests
                    indépendants et objectifs
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-green-500" /> Recommandations
                    personnalisées
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-green-500" /> Conseils
                    d’experts certifiés
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl flex items-center justify-center">
                  <Target className="w-24 h-24 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <StatsGrid
        stats={stats}
        heading="MatelasMatch en chiffres"
        blurb="La confiance de milliers d’utilisateurs nous motive chaque jour."
      />
      <ValuesGrid
        values={values}
        heading="Nos valeurs"
        blurb="Les principes qui guident notre travail au quotidien."
      />
      <TeamGrid
        team={team}
        heading="Notre équipe d’experts"
        blurb="Des professionnels passionnés au service de votre sommeil."
      />
      <ProcessSteps
        steps={steps}
        heading="Notre processus de test"
        blurb="Comment nous évaluons chaque matelas pour garantir des recommandations fiables."
      />
      <CTASection />
      <Footer />
    </div>
  );
}
