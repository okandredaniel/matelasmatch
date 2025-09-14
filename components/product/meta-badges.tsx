type Props = { brand?: string; typeLabel?: string; comfortLabel?: string };

export function MetaBadges({ brand, typeLabel, comfortLabel }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {brand ? (
        <span className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-800">
          {brand}
        </span>
      ) : null}
      {typeLabel ? (
        <span className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-800">
          {typeLabel}
        </span>
      ) : null}
      {comfortLabel ? (
        <span className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-800">
          {comfortLabel}
        </span>
      ) : null}
    </div>
  );
}
