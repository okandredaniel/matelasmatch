import { faqItems } from '@/data/faq';
import type { FaqItem } from '@/types/faq';
import { HelpCircle, Send, Star } from 'lucide-react';
import Link from 'next/link';

type Props = { items?: FaqItem[]; limit?: number };

export function ContactFAQ({ items, limit = 6 }: Props) {
  const list = (items ?? (faqItems as FaqItem[])).slice(0, limit);

  return (
    <div className="glass-card-enhanced rounded-3xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="w-6 h-6 text-accent" aria-hidden="true" />
        <h2 className="font-sans text-2xl font-bold text-foreground">
          Questions fréquentes
        </h2>
      </div>

      <div className="space-y-6">
        {list.map((item, index) => (
          <div
            key={index}
            className="border-b border-white/20 pb-4 last:border-b-0"
          >
            <h3 className="font-medium text-foreground mb-2">
              {item.question}
            </h3>
            <p className="text-sm text-slate-600">
              {typeof item.answer === 'string' ? item.answer : ''}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-white/40 p-4">
        <div className="flex items-center gap-2 text-slate-800">
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
