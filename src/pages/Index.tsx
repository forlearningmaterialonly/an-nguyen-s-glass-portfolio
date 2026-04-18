import { motion } from "framer-motion";
import Navbar from "@/components/portfolio/Navbar";
import ParticleBackground from "@/components/portfolio/ParticleBackground";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import { useEffect } from "react";

/**
 * Portfolio for An Nguyen — glassmorphism theme.
 * Sections: Hero · About · Projects · Skills · Experience · Contact
 */
const Index = () => {
  // Set page title + meta description for SEO
  useEffect(() => {
    document.title = "An Nguyen — Full-stack Engineer & Designer";
    const desc = "Portfolio of An Nguyen, a full-stack engineer crafting elegant, performant web experiences with React and TypeScript.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-screen"
    >
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </motion.div>
  );
};

export default Index;
