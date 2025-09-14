import Link from 'next/link';

type Props = {
  brand?: string;
  brandUrl?: string;
  trustpilotUrl?: string;
  brandTrust?: {
    rating?: number;
    reviews?: number;
    source?: 'trustpilot' | 'google' | 'site';
    url?: string;
  };
};

function formatReviews(n?: number) {
  return typeof n === 'number' ? n.toLocaleString('fr-FR') : undefined;
}

export function SocialProof({
  brand,
  brandUrl,
  trustpilotUrl,
  brandTrust,
}: Props) {
  if (!brand && !brandTrust?.rating && !trustpilotUrl) return null;
  const rating = brandTrust?.rating;
  const reviews = brandTrust?.reviews;
  const sourceUrl = brandTrust?.url || trustpilotUrl || brandUrl;
  const sourceLabel =
    brandTrust?.source === 'trustpilot'
      ? 'Trustpilot'
      : brandTrust?.source === 'google'
      ? 'Google Reviews'
      : 'Site de la marque';

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="flex flex-wrap items-center gap-4">
        {brand ? <span className="text-sm text-slate-500">Marque</span> : null}
        {brand ? (
          <span className="font-medium text-slate-900">{brand}</span>
        ) : null}
        {rating ? <span className="text-sm text-slate-700">•</span> : null}
        {rating ? (
          <span className="font-semibold text-slate-900">
            {rating.toFixed(1)}/5
          </span>
        ) : null}
        {reviews ? (
          <span className="text-sm text-slate-600">
            ({formatReviews(reviews)} avis)
          </span>
        ) : null}
        {sourceUrl ? (
          <>
            <span className="text-sm text-slate-700">•</span>
            <Link
              href={sourceUrl}
              target="_blank"
              rel="nofollow noopener"
              className="text-sm font-medium text-accent underline underline-offset-4"
            >
              {sourceLabel}
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
}
