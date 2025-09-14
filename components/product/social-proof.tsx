import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Mattress } from '@/types/mattress';
import {
  BadgeCheck,
  CheckCircle2,
  ExternalLink,
  Moon,
  ShieldCheck,
  Star,
} from 'lucide-react';
import Link from 'next/link';

type Props = { mattress: Mattress };

function Stars({
  value = 0,
  size = 'w-5 h-5',
}: {
  value?: number;
  size?: string;
}) {
  const v = Math.max(0, Math.min(5, Number.isFinite(value) ? value : 0));
  const filled = Math.round(v);
  return (
    <div className="flex items-center gap-1" aria-label={`Note ${v}/5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${size} ${
            i < filled
              ? 'text-amber-400 fill-current'
              : 'text-slate-300 dark:text-slate-600'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-xl px-3 py-1.5 text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100">
      {children}
    </span>
  );
}

export function SocialProof({ mattress }: Props) {
  const avg = typeof mattress.rating === 'number' ? mattress.rating : undefined;
  const total =
    typeof mattress.reviews === 'number' ? mattress.reviews : undefined;
  const bt = mattress.brandTrust;
  const hasBrandTrust = !!(bt?.rating || bt?.reviews || bt?.url);

  return (
    <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <CardContent className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-slate-50 dark:bg-slate-800 px-4 py-3">
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {avg ? avg.toFixed(1) : '—'}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  /5
                </span>
              </div>
              <div className="mt-1">
                <Stars value={avg} />
              </div>
            </div>
            <div className="text-sm text-slate-700 dark:text-slate-200">
              <div className="font-medium">{mattress.name || 'Ce modèle'}</div>
              <div className="text-slate-500 dark:text-slate-400">
                {total ? `${total} avis vérifiés` : 'Avis indisponibles'}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Chip>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                {mattress.warrantyYears
                  ? `${mattress.warrantyYears} ans de garantie`
                  : 'Garantie fabricant'}
              </span>
            </Chip>
            <Chip>
              <span className="inline-flex items-center gap-2">
                <Moon className="w-4 h-4" aria-hidden="true" />
                {mattress.trialNights
                  ? `${mattress.trialNights} nuits d’essai`
                  : 'Essai à domicile'}
              </span>
            </Chip>
            {mattress.brand && (
              <Chip>
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4" aria-hidden="true" />
                  {mattress.brand}
                </span>
              </Chip>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {typeof mattress.motionIsolation === 'string' && (
            <div className="flex items-center gap-2 text-sm text-slate-800 dark:text-slate-200">
              <CheckCircle2
                className="w-4 h-4 text-emerald-600"
                aria-hidden="true"
              />
              <span className="font-medium">{mattress.motionIsolation}</span>
              <span className="text-slate-500 dark:text-slate-400">
                isolation des mouvements
              </span>
            </div>
          )}
          {typeof mattress.edgeSupport === 'string' && (
            <div className="flex items-center gap-2 text-sm text-slate-800 dark:text-slate-200">
              <CheckCircle2
                className="w-4 h-4 text-emerald-600"
                aria-hidden="true"
              />
              <span className="font-medium">{mattress.edgeSupport}</span>
              <span className="text-slate-500 dark:text-slate-400">
                soutien des bords
              </span>
            </div>
          )}
          {typeof mattress.cooling === 'string' && (
            <div className="flex items-center gap-2 text-sm text-slate-800 dark:text-slate-200">
              <CheckCircle2
                className="w-4 h-4 text-emerald-600"
                aria-hidden="true"
              />
              <span className="font-medium">{mattress.cooling}</span>
              <span className="text-slate-500 dark:text-slate-400">
                régulation thermique
              </span>
            </div>
          )}
        </div>

        {hasBrandTrust && (
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-2">
                <BadgeCheck
                  className="w-5 h-5 text-slate-700 dark:text-slate-200"
                  aria-hidden="true"
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {mattress.brandTrust?.source === 'trustpilot'
                    ? 'Trustpilot'
                    : mattress.brandTrust?.source === 'google'
                    ? 'Google Reviews'
                    : 'Avis de la marque'}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  {mattress.brandTrust?.rating
                    ? `${mattress.brandTrust.rating.toFixed(1)}/5`
                    : '—'}
                  {mattress.brandTrust?.reviews
                    ? ` • ${mattress.brandTrust.reviews} avis`
                    : ''}
                </div>
              </div>
            </div>
            {mattress.brandTrust?.url && (
              <Link
                href={mattress.brandTrust.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition"
                prefetch={false}
                aria-label="Voir les avis de la marque"
              >
                Voir les avis
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
