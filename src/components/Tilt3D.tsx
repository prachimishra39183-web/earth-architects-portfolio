import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "motion/react";
import type { ReactNode } from "react";
import type { MouseEvent } from "react";

/**
 * Subtle 3D parallax tilt. Wraps any block and rotates it in space as the
 * pointer moves across it, with a soft specular sheen following the cursor.
 */
export function Tilt3D({
  children,
  className = "",
  max = 8,
  sheen = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  sheen?: boolean;
}) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { stiffness: 150, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);

  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);
  const sheenBg = useMotionTemplate`radial-gradient(38rem circle at ${gx} ${gy}, rgba(255,255,255,0.16), transparent 55%)`;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };

  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div className={`[perspective:1400px] ${className}`}>
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative will-change-transform"
      >
        <div style={{ transform: "translateZ(38px)" }}>{children}</div>
        {sheen && (
          <motion.div
            aria-hidden="true"
            style={{ background: sheenBg }}
            className="pointer-events-none absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500 hover:opacity-100 lg:opacity-100"
          />
        )}
      </motion.div>
    </div>
  );
}
