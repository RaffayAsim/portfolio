"use client";

import { motion } from "framer-motion";
import { skills, techStack } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function ProgressRing({
  level,
  label,
  delay,
}: {
  level: number;
  label: string;
  delay: number;
}) {
  const reduced = useReducedMotion();
  const r = 42;
  const c = 2 * Math.PI * r;
  const offset = c - (level / 100) * c;

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative h-28 w-28">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="6"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke={`url(#ringGrad-${label.replace(/\s+/g, "-")})`}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: reduced ? 0 : 1.2, delay: delay + 0.15, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id={`ringGrad-${label.replace(/\s+/g, "-")}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-semibold text-white">{level}%</span>
        </div>
      </div>
      <p className="max-w-[9rem] text-center text-xs font-medium text-zinc-400">
        {label}
      </p>
    </motion.div>
  );
}

export default function Skills() {
  const reduced = useReducedMotion();
  const orbit = techStack.slice(0, 8);

  return (
    <section id="skills" className="border-y border-white/5 bg-white/[0.02] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-medium text-accent">Skills</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Craft calibrated for shipping
          </h2>
          <p className="mt-4 text-zinc-400">
            Animated rings for depth of practice — not résumé padding.
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {skills.map((s, i) => (
              <ProgressRing
                key={s.name}
                level={s.level}
                label={s.name}
                delay={i * 0.06}
              />
            ))}
          </div>

          <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full border border-dashed border-white/10"
            />
            <div
              aria-hidden
              className="absolute inset-8 rounded-full border border-white/5"
            />
            <div className="relative z-10 rounded-full bg-gradient-to-br from-accent/20 to-violet-500/20 px-6 py-4 text-center ring-1 ring-accent/30 backdrop-blur">
              <p className="font-display text-sm font-semibold text-white">Tech orbit</p>
              <p className="mt-1 text-[11px] text-zinc-400">core stack</p>
            </div>
            <div
              className={`absolute inset-0 ${reduced ? "" : "animate-orbit"}`}
              style={{ animationDuration: "28s" }}
            >
              {orbit.map((t, i) => {
                const angle = (i / orbit.length) * Math.PI * 2;
                const x = 50 + Math.cos(angle) * 42;
                const y = 50 + Math.sin(angle) * 42;
                return (
                  <span
                    key={t}
                    className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#0A0A0B]/90 px-2.5 py-1 text-[10px] font-medium text-zinc-300 shadow-lg backdrop-blur"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    {t}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
