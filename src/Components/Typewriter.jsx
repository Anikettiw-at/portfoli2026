import { useEffect, useState } from "react";

const PHRASES = [
  "an AI Developer",
  "a Full-Stack Engineer",
  "a Voice-AI Builder",
  "a Competitive Programmer",
];

const TypewriterText = ({ phrases = PHRASES }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = phrases[index];
    const finishedTyping = !deleting && text === full;
    const finishedDeleting = deleting && text === "";

    let delay = deleting ? 45 : 95;
    if (finishedTyping) delay = 1600;
    if (finishedDeleting) delay = 300;

    const timeout = setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
      } else if (finishedDeleting) {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(full.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, phrases]);

  return (
    <p
      className="h-10 text-2xl font-semibold text-zinc-300 sm:text-3xl"
      aria-label={`I'm ${phrases.join(", ")}`}
    >
      <span aria-hidden="true">
        I’m <span className="text-cyan-400">{text}</span>
        <span className="ml-0.5 animate-blink text-amber-400">|</span>
      </span>
    </p>
  );
};

export default TypewriterText;
