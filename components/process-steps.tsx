type Step = { title: string; description: string };

export function ProcessSteps({
  steps,
  heading,
  blurb,
}: {
  steps: Step[];
  heading: string;
  blurb: string;
}) {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="container mx-auto">
        <div className="glass-card-enhanced rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl font-bold text-foreground mb-4">
              {heading}
            </h2>
            <p className="text-slate-600 text-pretty">{blurb}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-sans text-lg font-semibold text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 text-pretty">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
