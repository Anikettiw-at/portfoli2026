import { useEffect, useState } from "react";

const TypewriterText = () => {
  const phrases = [
    "a Developer",
    "a Competitive Programmer",
    "a Problem Solver",
    "a Tech Enthusiast",
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = 100;

    const timeout = setTimeout(() => {
      setText(currentPhrase.slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    }, typingSpeed);

    if (charIndex === currentPhrase.length) {
      clearTimeout(timeout);
      setTimeout(() => {
        setCharIndex(0);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setText("");
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, phraseIndex]);

  return (
    <h1 className="text-3xl font-semibold">
      I’m <span className="text-cyan-400">{text}</span>
      <span className="animate-blink">|</span>
    </h1>
  );
};

export default TypewriterText;
