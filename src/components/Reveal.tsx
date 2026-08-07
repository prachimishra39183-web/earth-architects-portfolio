import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function RevealImage({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        initial={reduce ? false : { opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className={`h-full w-full object-cover ${imgClassName ?? ""}`}
      />
    </div>
  );
}
