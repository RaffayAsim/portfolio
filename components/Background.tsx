"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsTouch } from "@/hooks/useIsTouch";

export default function Background() {
  const reduced = useReducedMotion();
  const touch = useIsTouch();
  const gridRef = useRef<HTMLDivElement>(null);
  const meshRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced || touch) return;
    const onMove = (e: MouseEvent) => {
      const px = (e.clientX / window.innerWidth - 0.5) * 2;
      const py = (e.clientY / window.innerHeight - 0.5) * 2;
      if (gridRef.current) {
        gridRef.current.style.transform = `translate3d(${px * 12}px, ${py * 12}px, 0)`;
      }
      if (meshRef.current) {
        meshRef.current.style.transform = `translate3d(${px * -24}px, ${py * -18}px, 0)`;
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced, touch]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#050507]" />
      <div
        ref={meshRef}
        className="absolute -left-1/4 top-[-20%] h-[70vh] w-[70vw] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.14),transparent_60%)] blur-3xl transition-transform duration-300 ease-out will-change-transform"
      />
      <div className="absolute -right-1/4 bottom-[-10%] h-[60vh] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.12),transparent_60%)] blur-3xl" />
      <div
        ref={gridRef}
        className="absolute inset-[-40px] opacity-[0.35] transition-transform duration-300 ease-out will-change-transform [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050507_70%)]" />
      {!reduced && (
        <div className="animate-grid-pulse absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] [background-size:120px_120px]" />
      )}
    </div>
  );
}
