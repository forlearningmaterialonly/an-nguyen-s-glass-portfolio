import Reveal from "./Reveal";

const roles = [
  {
    role: "Senior Frontend Engineer",
    company: "Northwind Labs",
    period: "2023 — Present",
    points: [
      "Lead UI architecture for a multi-tenant analytics SaaS used by 40k+ DAUs.",
      "Cut Largest Contentful Paint by 48% via streaming SSR and edge caching.",
    ],
  },
  {
    role: "Product Engineer",
    company: "Heron Studio",
    period: "2021 — 2023",
    points: [
      "Shipped 12 client products end-to-end across fintech, health, and education.",
      "Built an internal design system adopted by 6 teams.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Bloom Agency",
    period: "2019 — 2021",
    points: [
      "Crafted award-winning marketing sites with rich interactive storytelling.",
      "Mentored 4 junior devs through structured pairing sessions.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-28" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-4xl px-4">
        <Reveal>
          <p className="font-display text-sm uppercase tracking-[0.2em] text-primary-glow">Career</p>
          <h2 id="experience-heading" className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            <span className="text-gradient">Experience</span> & impact
          </h2>
        </Reveal>

        <ol className="mt-12 relative space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary/60 before:via-accent/40 before:to-transparent md:before:left-4">
          {roles.map((r, i) => (
            <Reveal as="li" key={r.role} delay={i * 0.08} className="relative pl-10 md:pl-14">
              <span className="absolute left-0 top-3 flex h-6 w-6 items-center justify-center md:left-1">
                <span className="h-3 w-3 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_hsl(var(--primary)/0.6)]" />
              </span>

              <div className="glass rounded-3xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold">{r.role}</h3>
                    <p className="text-sm text-primary-glow">{r.company}</p>
                  </div>
                  <span className="glass-subtle rounded-full px-3 py-1 text-xs text-muted-foreground">
                    {r.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-glow" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
