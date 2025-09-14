type TeamMember = {
  name: string;
  role: string;
  description: string;
  image?: string;
  avatar?: React.ReactNode;
};

export function TeamGrid({
  team,
  heading,
  blurb,
}: {
  team: TeamMember[];
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
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <div
              key={i}
              className="glass-card-enhanced rounded-3xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              {m.avatar ? (
                <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center bg-accent/10">
                  {m.avatar}
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-accent/20 to-accent/5" />
              )}
              <h3 className="font-sans text-xl font-semibold text-foreground mb-2">
                {m.name}
              </h3>
              <div className="text-accent font-medium mb-3">{m.role}</div>
              <p className="text-sm text-slate-600 text-pretty">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
