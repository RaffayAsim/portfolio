"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsTouch } from "@/hooks/useIsTouch";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  external?: boolean;
};

export default function MagneticButton({
  href,
  children,
  className = "",
  variant = "primary",
  external,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();
  const touch = useIsTouch();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 20 });
  const sy = useSpring(y, { stiffness: 260, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    if (reduced || touch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.28);
    y.set(dy * 0.28);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    variant === "primary"
      ? "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#050507] shadow-[0_0_40px_rgba(34,211,238,0.35)] transition-shadow hover:shadow-[0_0_60px_rgba(34,211,238,0.55)]"
      : "relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-zinc-200 ring-1 ring-white/15 backdrop-blur-sm transition hover:ring-accent/50 hover:text-accent";

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${className}`}
    >
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)] opacity-0 transition-opacity duration-500 hover:opacity-100"
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
