import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const Word = ({ children, progress, range, reduce }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span
      style={{ opacity: reduce ? 1 : opacity }}
      className="inline-block mr-[0.28em]"
    >
      {children}
    </motion.span>
  );
};

/** Paragraph whose words light up as it scrolls into the reading zone. */
export default function ScrollText({ text, className = "" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.88", "end 0.55"],
  });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <Word
          key={i}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          reduce={reduce}
        >
          <span aria-hidden="true">{w}</span>
        </Word>
      ))}
    </p>
  );
}
