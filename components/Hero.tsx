"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { site } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduced = useReducedMotion();

  const line = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 36 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          {...(reduced
            ? {}
            : {
                initial: { opacity: 0, scale: 0.94 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.6, ease },
              })}
          className="mb-8 inline-flex"
        >
          <span className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-3.5 py-1.5 text-xs font-medium text-cyan-100">
            <span
              aria-hidden
              className={`absolute inset-0 rounded-full bg-gradient-to-r from-accent/30 via-violet-400/25 to-accent/30 ${
                reduced ? "" : "animate-border-spin"
              }`}
              style={{ padding: 1 }}
            />
            <span className="absolute inset-[1px] rounded-full bg-[#0A0A0B]/90 backdrop-blur" />
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="relative">Open to remote</span>
            <span className="relative text-zinc-500">· Pakistan</span>
          </span>
        </motion.div>

        <motion.p
          {...line(0.05)}
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent/80"
        >
          Portfolio
        </motion.p>

        <h1 className="font-display text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          <motion.span className="block" {...line(0.1)}>
            Raffay Asim
          </motion.span>
          <motion.span
            className="mt-3 block bg-gradient-to-r from-accent via-cyan-200 to-violet-300 bg-clip-text text-transparent"
            {...line(0.2)}
          >
            AI Automation Architect
          </motion.span>
        </h1>

        <motion.p
          {...line(0.3)}
          className="mt-4 max-w-xl text-lg font-medium text-zinc-300 sm:text-xl"
        >
          Full-Stack Vibe Coder
        </motion.p>

        <motion.p
          {...line(0.38)}
          className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          {site.tagline}
        </motion.p>

        <motion.div {...line(0.48)} className="mt-10 flex flex-wrap items-center gap-3">
          <MagneticButton href="#work">See selected work</MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Get in touch
          </MagneticButton>
        </motion.div>

        <motion.div
          {...line(0.58)}
          className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500"
        >
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accent"
          >
            GitHub
          </a>
          <span aria-hidden className="text-zinc-700">
            /
          </span>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accent"
          >
            LinkedIn
          </a>
          <span aria-hidden className="text-zinc-700">
            /
          </span>
          <a href={`mailto:${site.email}`} className="transition hover:text-accent">
            {site.email}
          </a>
        </motion.div>

        {/* Decorative gradient frame */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 top-20 hidden h-64 w-64 rounded-3xl border border-white/5 lg:block"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/10 via-transparent to-violet-500/10" />
          <div className="absolute inset-[1px] rounded-3xl bg-[#050507]/40 backdrop-blur-sm" />
        </div>
      </div>
    </section>
  );
}
