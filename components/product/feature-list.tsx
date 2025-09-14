type Props = { items?: string[] };

export function FeatureList({ items = [] }: Props) {
  if (!items.length) return null;
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-3">
        Caractéristiques principales
      </h3>
      <ul className="grid md:grid-cols-2 gap-3">
        {items.map((f, i) => (
          <li key={`feat-${i}`} className="flex gap-2 text-slate-700">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
