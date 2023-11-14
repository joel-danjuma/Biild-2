"use client";
import { AnimatedTextProps } from "@/types/typings";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const AnimateText = ({
  text,
  el: Wrapper = "p",
  className,
}: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        // variants={defaultAnimations}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        // initial="hidden"
        // animate="visible"
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {text.split(" ").map((word: string, i: number) => (
          <span key={i} className="inline-block">
            {word.split(" ").map((char: string, i: number) => (
              <motion.span key={i} variants={defaultAnimations}>
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimateText;
