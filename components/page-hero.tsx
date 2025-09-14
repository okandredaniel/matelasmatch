export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{title}</h1>
        <p className="text-lg text-slate-600 mb-8 text-pretty">{subtitle}</p>
      </div>
    </section>
  )
}
