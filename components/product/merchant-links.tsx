import { AMAZON_CTA_CLASS, buildDataAttrs } from '@/lib/cta';
import Link from 'next/link';

type Merchant = { name: string; url: string; label?: string };
type Props = { merchants?: Merchant[]; dataset?: Record<string, string> };

export function MerchantLinks({ merchants = [], dataset }: Props) {
  if (!merchants.length) return null;
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <ul className="divide-y divide-slate-100">
        {merchants.map((m, i) => {
          const isAmazon =
            /amazon\./i.test(m.url) || m.name.toLowerCase() === 'amazon';
          return (
            <li
              key={`${m.name}-${i}`}
              className="flex items-center justify-between py-3"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-slate-900">
                  {m.name}
                </p>
                {m.label ? (
                  <p className="text-xs text-slate-600">{m.label}</p>
                ) : null}
              </div>
              <Link
                href={m.url}
                target="_blank"
                rel="sponsored nofollow noopener"
                className={
                  isAmazon
                    ? `${AMAZON_CTA_CLASS} h-10 w-auto px-4 text-sm`
                    : 'inline-flex h-10 items-center justify-center rounded-lg border border-slate-300 px-4 text-sm font-medium text-slate-900 hover:bg-slate/5'
                }
                {...buildDataAttrs(dataset)}
              >
                Voir
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
