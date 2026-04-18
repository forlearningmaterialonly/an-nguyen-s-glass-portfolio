import Reveal from "./Reveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Aurora Analytics",
    description: "Real-time SaaS dashboard with custom charting, role-based access, and 40k+ daily active users.",
    tags: ["React", "TypeScript", "D3", "Postgres"],
    gradient: "from-primary/40 via-accent/30 to-secondary/40",
    live: "#",
    code: "#",
  },
  {
    title: "Lumen CMS",
    description: "Headless content platform powering 200+ marketing sites — block-based editor, edge-cached delivery.",
    tags: ["Next.js", "tRPC", "Prisma"],
    gradient: "from-secondary/40 via-primary/30 to-accent/40",
    live: "#",
    code: "#",
  },
  {
    title: "Nori Mobile",
    description: "Cross-platform meditation app with adaptive soundscapes and personalized session journeys.",
    tags: ["React Native", "Expo", "Reanimated"],
    gradient: "from-accent/40 via-secondary/30 to-primary/40",
    live: "#",
    code: "#",
  },
  {
    title: "Drift Design System",
    description: "Open-source component library with 80+ accessible primitives and a documentation site.",
    tags: ["Storybook", "Radix", "Tailwind"],
    gradient: "from-primary/30 via-secondary/40 to-accent/30",
    live: "#",
    code: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-28" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="font-display text-sm uppercase tracking-[0.2em] text-primary-glow">Selected work</p>
          <h2 id="projects-heading" className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Projects I'm <span className="text-gradient">proud of</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="glass group relative h-full overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.5)]">
                {/* Decorative gradient preview */}
                <div className={`relative h-44 overflow-hidden rounded-2xl bg-gradient-to-br ${p.gradient}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(0_0%_100%/0.3),transparent_60%)]" />
                  <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                </div>

                <div className="mt-5 flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <div className="flex gap-2 opacity-70 transition-opacity group-hover:opacity-100">
                    <a
                      href={p.code}
                      aria-label={`${p.title} source code`}
                      className="rounded-full p-2 text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={p.live}
                      aria-label={`${p.title} live site`}
                      className="rounded-full p-2 text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="glass-subtle rounded-full px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
