import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}

/** Fades + slides children into view on scroll. Honors reduced motion. */
const Reveal = ({ children, delay = 0, y = 24, className, as = "div" }: RevealProps) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.19, 1, 0.22, 1] as const }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
