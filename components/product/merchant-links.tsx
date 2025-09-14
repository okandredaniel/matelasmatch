'use client';

import { AmazonButton } from '@/components/amazon-button';
import type { Mattress } from '@/types/mattress';
import { BadgeCheck, ChevronDown, ChevronUp, Store } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';

type Props = { mattress: Mattress };

function isAmazon(url: string, name?: string) {
  return /amazon\./i.test(url) || (name || '').toLowerCase() === 'amazon';
}

export function MerchantLinks({ mattress }: Props) {
  const [expanded, setExpanded] = useState(false);

  const others = useMemo(() => {
    const arr = mattress.merchants || [];
    return arr.filter((m) => !isAmazon(m.url, m.name));
  }, [mattress.merchants]);

  if (!mattress.asin && others.length === 0) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700"
                aria-hidden="true"
              >
                <Store className="h-4 w-4" />
              </span>
              <span className="truncate text-sm font-semibold text-slate-900">
                Amazon
              </span>
              <span className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                Recommandé
              </span>
            </div>
          </div>
          {mattress.asin ? (
            <AmazonButton
              asin={mattress.asin}
              brand={mattress.brand}
              product={mattress.name}
              compact
            />
          ) : null}
        </div>

        {others.length > 0 && (
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              aria-expanded={expanded}
            >
              {expanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
              {expanded
                ? 'Voir moins d’options'
                : `Voir plus d’options (${others.length})`}
            </button>

            {expanded && (
              <ul className="mt-4 divide-y divide-slate-100">
                {others.map((m, i) => (
                  <li
                    key={`${m.name}-${i}`}
                    className="py-3 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600"
                            aria-hidden="true"
                          >
                            <Store className="h-4 w-4" />
                          </span>
                          <span className="truncate text-sm font-semibold text-slate-900">
                            {m.name}
                          </span>
                          {m.label && (
                            <span className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                              <BadgeCheck
                                className="h-3.5 w-3.5"
                                aria-hidden="true"
                              />
                              {m.label}
                            </span>
                          )}
                        </div>
                      </div>
                      <Link
                        href={m.url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        prefetch={false}
                        className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-300 px-4 text-sm font-medium text-slate-900 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                        aria-label={`Voir sur ${m.name}`}
                      >
                        Voir
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
