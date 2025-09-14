type Stat = { number: string; label: string };

export function StatsGrid({
  stats,
  heading,
  blurb,
}: {
  stats: Stat[];
  heading: string;
  blurb: string;
}) {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-sans text-3xl font-bold text-foreground mb-4">
            {heading}
          </h2>
          <p className="text-slate-600 text-pretty">{blurb}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="glass-card-enhanced rounded-3xl p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {s.number}
              </div>
              <div className="text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
