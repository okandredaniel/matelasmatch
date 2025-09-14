type ValueItem = { icon: React.ReactNode; title: string; description: string };

export function ValuesGrid({
  values,
  heading,
  blurb,
}: {
  values: ValueItem[];
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="glass-card-enhanced rounded-3xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{v.icon}</div>
              <h3 className="font-sans text-lg font-semibold text-foreground mb-3">
                {v.title}
              </h3>
              <p className="text-sm text-slate-600 text-pretty">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
