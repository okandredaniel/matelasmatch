import { faqItems } from '@/lib/data';
import { HelpCircle, Send, Star } from 'lucide-react';
import Link from 'next/link';

export function ContactFAQ() {
  return (
    <div className="glass-card-enhanced rounded-3xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="w-6 h-6 text-accent" aria-hidden="true" />
        <h2 className="font-sans text-2xl font-bold text-foreground">
          Questions fréquentes
        </h2>
      </div>

      <div className="space-y-6">
        {faqItems.map((item: any, index: number) => (
          <div
            key={index}
            className="border-b border-white/20 pb-4 last:border-b-0"
          >
            <h3 className="font-medium text-foreground mb-2">
              {item.question}
            </h3>
            {typeof item.answer === 'string' ? (
              <p className="text-sm text-slate-600 text-pretty">
                {item.answer}
              </p>
            ) : (
              <div className="text-sm text-slate-600 text-pretty [&_p]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-accent/5 rounded-2xl border border-accent/20">
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-5 h-5 text-accent" aria-hidden="true" />
          <span className="font-medium text-foreground">Conseil d’expert</span>
        </div>
        <p className="text-sm text-slate-600">
          Pour une recommandation personnalisée, utilisez notre comparateur qui
          analyse vos besoins et propose les meilleurs matelas adaptés à votre
          profil.
        </p>
        <Link
          href="/comparateur"
          prefetch={false}
          className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-accent hover:underline"
        >
          Essayer le comparateur
          <Send className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
