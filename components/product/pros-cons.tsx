type Props = { pros?: string[]; cons?: string[] };

export function ProsCons({ pros = [], cons = [] }: Props) {
  if (!pros.length && !cons.length) return null;
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {pros.length ? (
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            Points forts
          </h3>
          <ul className="space-y-2">
            {pros.map((p, i) => (
              <li key={`pro-${i}`} className="flex gap-2 text-slate-700">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {cons.length ? (
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            Points faibles
          </h3>
          <ul className="space-y-2">
            {cons.map((c, i) => (
              <li key={`con-${i}`} className="flex gap-2 text-slate-700">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
