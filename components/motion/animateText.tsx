"use client";
import { AnimatedTextProps } from "@/types/typings";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const defaultAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const AnimateText = ({
  text,
  el: Wrapper = "p",
  className,
}: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        // animate={isInView ? "visible " : "hidden"}
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {text.split("").map((char: string, i: number) => (
          <motion.span
            key={i}
            variants={defaultAnimations}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimateText;
