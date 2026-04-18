import { useState } from "react";
import Reveal from "./Reveal";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Demo only — wire to your email service or Lovable Cloud function.
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! I'll get back to you soon.");
    }, 900);
  };

  return (
    <section id="contact" className="relative py-28" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-5xl px-4">
        <div className="glass-strong relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div aria-hidden className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="font-display text-sm uppercase tracking-[0.2em] text-primary-glow">Contact</p>
              <h2 id="contact-heading" className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                Let's build something <span className="text-gradient">beautiful</span>.
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                I'm currently open to freelance and full-time opportunities. Have a project in mind, or just want to
                say hi? My inbox is always open.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href="mailto:hello@annguyen.dev"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
                >
                  <span className="glass-subtle flex h-10 w-10 items-center justify-center rounded-xl">
                    <Mail size={16} />
                  </span>
                  hello@annguyen.dev
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
                >
                  <span className="glass-subtle flex h-10 w-10 items-center justify-center rounded-xl">
                    <Github size={16} />
                  </span>
                  github.com/annguyen
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
                >
                  <span className="glass-subtle flex h-10 w-10 items-center justify-center rounded-xl">
                    <Linkedin size={16} />
                  </span>
                  linkedin.com/in/annguyen
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-7" aria-label="Contact form">
                <div className="grid gap-4">
                  <div>
                    <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-1.5 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/50 focus:bg-white/10"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-1.5 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/50 focus:bg-white/10"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="mt-1.5 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/50 focus:bg-white/10"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02] disabled:opacity-60"
                  >
                    {sending ? "Sending..." : "Send message"}
                    <Send size={16} />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} An Nguyen. Crafted with care.
        </p>
      </div>
    </section>
  );
};

export default Contact;
