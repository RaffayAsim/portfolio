"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsTouch } from "@/hooks/useIsTouch";

export default function CursorGlow() {
  const reduced = useReducedMotion();
  const touch = useIsTouch();
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 280, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 280, damping: 28, mass: 0.4 });

  useEffect(() => {
    if (reduced || touch) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [reduced, touch, x, y]);

  if (reduced || touch) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="h-8 w-8 rounded-full border border-cyan-400/50 bg-cyan-400/10 shadow-[0_0_40px_8px_rgba(34,211,238,0.15)] mix-blend-screen" />
    </motion.div>
  );
}
