import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Star } from 'lucide-react';

export function FeaturedProduct() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
            Produit Vedette
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Notre sélection coup de cœur : le matelas le plus apprécié par nos
            utilisateurs ce mois-ci.
          </p>
        </div>

        <Card className="glass-card rounded-3xl group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative overflow-hidden">
              <img
                src="/luxury-white-mattress-premium-comfort.png"
                alt="Matelas Confort Premium - Produit Vedette"
                className="w-full h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-3xl lg:rounded-l-3xl lg:rounded-r-none"
              />
              <div className="absolute top-6 left-6">
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white backdrop-blur-sm text-sm px-4 py-2">
                  🏆 Produit Vedette
                </Badge>
              </div>
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-full px-4 py-2">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-bold text-slate-700">
                    4.9/5
                  </span>
                </div>
              </div>
            </div>

            <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="font-sans text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  Matelas Confort Premium
                </h3>
                <p className="text-slate-600 text-lg mb-4">
                  Le matelas le plus plébiscité par nos utilisateurs. Mousse à
                  mémoire de forme haute densité avec régulation thermique
                  avancée.
                </p>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-accent">599€</span>
                    <span className="text-xl text-slate-400 line-through">
                      799€
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-emerald-50 text-emerald-700 border-emerald-200"
                  >
                    -25% sur Amazon
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-white/30 rounded-2xl backdrop-blur-sm">
                    <div className="text-2xl font-bold text-indigo-600">
                      1,247
                    </div>
                    <div className="text-sm text-slate-600">Avis clients</div>
                  </div>
                  <div className="text-center p-4 bg-white/30 rounded-2xl backdrop-blur-sm">
                    <div className="text-2xl font-bold text-indigo-600">
                      96%
                    </div>
                    <div className="text-sm text-slate-600">Satisfaction</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    <span className="text-slate-700">
                      Mousse à mémoire de forme haute densité
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    <span className="text-slate-700">
                      Régulation thermique avancée
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    <span className="text-slate-700">
                      Support optimal de la colonne vertébrale
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    <span className="text-slate-700">Garantie 15 ans</span>
                  </div>
                </div>
              </div>

              <Button
                className="w-full h-14 bg-gradient-to-r from-indigo-500/80 to-purple-500/80 hover:from-accent/90 hover:to-accent/90 text-white shadow-2xl backdrop-blur-xl border border-white/20 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/25 text-lg font-semibold"
                size="lg"
                asChild
              >
                <a
                  href="https://amazon.fr/matelas-confort-premium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <span>Voir l'offre sur Amazon</span>
                  </div>
                </a>
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}
