import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Smooth vertical text rotator that cycles through `items`.
 * No springs, no bounces — just an ease-out fade + 8px translate.
 *
 * When `stack` is true, each whitespace-separated word renders on its own
 * line so multi-word roles (e.g. "AI Enthusiast", "Very Curious") all get
 * the same two-line layout regardless of width.
 */
const RoleRotator = ({
  items,
  intervalMs = 2800,
  className = "",
  stack = false,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items || items.length <= 1) return undefined;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [items, intervalMs]);

  if (!items || items.length === 0) return null;

  const current = items[index];
  const words = stack ? current.split(/\s+/).filter(Boolean) : null;

  return (
    <span
      className={`relative inline-block align-baseline ${className}`}
      style={{ minWidth: "1ch" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={current}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          {stack
            ? words.map((word, i) => (
                <span key={`${word}-${i}`} className="block">
                  {word}
                </span>
              ))
            : current}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RoleRotator;
