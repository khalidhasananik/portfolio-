"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Transition } from "motion/react";

const SWAP_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const HOLD_SECONDS = 0.15;

function randomChar() {
  return SWAP_CHARS[Math.floor(Math.random() * SWAP_CHARS.length)];
}

interface RandomLetterSwapProps {
  label: string;
  className?: string;
  staggerDuration?: number;
  transition?: Transition;
}

export function RandomLetterSwap({
  label,
  className,
  staggerDuration = 0.025,
  transition = { duration: 0.6, type: "spring" },
}: RandomLetterSwapProps) {
  const [hovered, setHovered] = useState(false);
  const [swapLetters, setSwapLetters] = useState(() => label.split(""));
  const letters = label.split("");
  const revertTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (revertTimeout.current) clearTimeout(revertTimeout.current);
    };
  }, []);

  const transitionDuration = typeof transition.duration === "number" ? transition.duration : 0.6;
  const revealDuration = (letters.length - 1) * staggerDuration + transitionDuration + HOLD_SECONDS;

  const handleEnter = () => {
    if (revertTimeout.current) clearTimeout(revertTimeout.current);
    setSwapLetters(letters.map((letter) => (letter === " " ? " " : randomChar())));
    setHovered(true);
    revertTimeout.current = setTimeout(() => setHovered(false), revealDuration * 1000);
  };

  return (
    <span
      className={className}
      onMouseEnter={handleEnter}
      style={{ display: "inline-flex", overflow: "hidden" }}
    >
      {letters.map((letter, index) => (
        <span key={index} style={{ position: "relative", display: "inline-block" }}>
          <motion.span
            style={{ display: "inline-block" }}
            animate={{ y: hovered ? "-100%" : "0%", opacity: hovered ? 0 : 1 }}
            transition={{ ...transition, delay: index * staggerDuration }}
          >
            {letter === " " ? " " : letter}
          </motion.span>
          <motion.span
            aria-hidden="true"
            style={{ position: "absolute", inset: 0, display: "inline-block" }}
            animate={{ y: hovered ? "0%" : "100%", opacity: hovered ? 1 : 0 }}
            transition={{ ...transition, delay: index * staggerDuration }}
          >
            {swapLetters[index] === " " ? " " : swapLetters[index]}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
