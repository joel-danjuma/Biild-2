"use client";
import { motion, HTMLMotionProps } from "framer-motion";

type CustomMotionProps = HTMLMotionProps<"div"> & { delay?: number };

export const FallInPlace = (props: CustomMotionProps) => {
  const { children, delay = 0.2, ...rest } = props;

  return (
    <motion.div
      initial={{ scale: 1, opacity: 0, translateY: "20px" }}
      animate={{ scale: 1, opacity: 1, translateY: 0 }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 2,
        delay,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
