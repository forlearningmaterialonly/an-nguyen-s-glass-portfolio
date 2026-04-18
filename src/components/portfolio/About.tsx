import Reveal from "./Reveal";
import { Sparkles, Code2, Globe } from "lucide-react";

const stats = [
  { label: "Years experience", value: "5+" },
  { label: "Projects shipped", value: "40+" },
  { label: "Happy clients", value: "20+" },
];

const highlights = [
  { Icon: Code2, title: "Engineering", text: "TypeScript, React, Node — modern stacks built to last." },
  { Icon: Sparkles, title: "Design sense", text: "Pixel-perfect UI with motion that feels alive." },
  { Icon: Globe, title: "Global mindset", text: "Worked with teams across 3 continents." },
];

const About = () => {
  return (
    <section id="about" className="relative py-28" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="font-display text-sm uppercase tracking-[0.2em] text-primary-glow">About</p>
          <h2 id="about-heading" className="mt-3 max-w-2xl font-display text-4xl font-bold sm:text-5xl">
            A designer-engineer obsessed with{" "}
            <span className="text-gradient">craft & clarity</span>.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass rounded-3xl p-8">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I'm An — a full-stack engineer based in Ho Chi Minh City. I help startups and product teams turn
                ambitious ideas into refined, performant web experiences. My happy place is the intersection of
                thoughtful design, clean architecture, and tasteful motion.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                When I'm not shipping, you'll find me sketching interfaces, brewing pour-over coffee, or wandering
                in search of the perfect bowl of phở.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="glass-subtle rounded-2xl p-4 text-center">
                    <div className="font-display text-2xl font-bold text-gradient sm:text-3xl">{s.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:col-span-2">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.1}>
                <div className="glass group flex items-start gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary-glow">
                    <h.Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">{h.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{h.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
