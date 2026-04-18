import { motion, type Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Typewriter from "./Typewriter";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] as const } },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-4 pt-28"
      aria-labelledby="hero-heading"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-4xl text-center"
      >
        <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          id="hero-heading"
          variants={item}
          className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl"
        >
          Hi, I'm <span className="text-gradient">An Nguyen</span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 text-lg text-muted-foreground sm:text-xl">
          I build{" "}
          <Typewriter
            className="font-display text-foreground"
            words={[
              "delightful interfaces.",
              "performant web apps.",
              "design systems.",
              "human-centered tools.",
            ]}
          />
        </motion.p>

        <motion.p variants={item} className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground/80 sm:text-base">
          Full-stack engineer crafting modern, accessible products with React, TypeScript, and a soft spot for elegant motion.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="glass rounded-full px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
          >
            Contact me
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex items-center justify-center gap-3">
          {[
            { href: "https://github.com", label: "GitHub", Icon: Github },
            { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
            { href: "mailto:hello@annguyen.dev", label: "Email", Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-all hover:scale-110 hover:text-foreground"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-float"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
