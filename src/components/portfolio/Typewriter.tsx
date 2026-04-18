import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
  className?: string;
}

/** Cycles through phrases with a typing/deleting effect. */
const Typewriter = ({
  words,
  typeSpeed = 80,
  deleteSpeed = 40,
  pause = 1400,
  className = "",
}: TypewriterProps) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.substring(0, t.length - 1) : current.substring(0, t.length + 1),
          );
        },
        deleting ? deleteSpeed : typeSpeed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="ml-1 inline-block w-[2px] h-[0.9em] -mb-1 bg-primary-glow animate-blink" />
    </span>
  );
};

export default Typewriter;
