"use client";

import { techStack } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Marquee() {
  const reduced = useReducedMotion();
  const items = [...techStack, ...techStack];

  return (
    <section
      aria-label="Tech stack"
      className="relative border-y border-white/5 bg-white/[0.02] py-5 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050507] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050507] to-transparent" />
      <div
        className={`flex w-max gap-3 ${reduced ? "" : "animate-marquee"}`}
        style={reduced ? undefined : { animationDuration: "40s" }}
      >
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
