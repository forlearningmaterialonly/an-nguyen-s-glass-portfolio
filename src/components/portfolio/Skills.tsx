import Reveal from "./Reveal";

const groups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    title: "Backend",
    items: ["Node.js", "tRPC", "PostgreSQL", "Prisma", "Redis", "REST & GraphQL"],
  },
  {
    title: "Design & Tooling",
    items: ["Figma", "Storybook", "Vitest", "Playwright", "Docker", "GitHub Actions"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-28" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="font-display text-sm uppercase tracking-[0.2em] text-primary-glow">Toolkit</p>
          <h2 id="skills-heading" className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Skills & <span className="text-gradient">technologies</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.1}>
              <div className="glass h-full rounded-3xl p-6">
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="glass-subtle rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-all hover:scale-105 hover:text-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
