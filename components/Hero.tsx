"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-medium tracking-wide text-accent">
            Pakistan · Open to remote
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Raffay Asim
          </h1>
          <p className="mt-3 text-lg font-medium text-zinc-300 sm:text-xl">
            AI Automation Architect{" "}
            <span className="text-zinc-500">|</span> Full-Stack Vibe Coder
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            I ship production AI automation and vibe-coded full-stack systems —
            n8n agents, CRMs, outbound engines, and SaaS — that replace
            repetitive sales/ops work.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-cyan-300"
            >
              See selected work
            </a>
            <a
              href="#contact"
              className="rounded-full px-5 py-2.5 text-sm font-medium text-zinc-200 ring-1 ring-white/15 transition hover:ring-accent/40 hover:text-accent"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 text-sm text-zinc-500">
            <a
              href="https://github.com/RaffayAsim"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              GitHub
            </a>
            <span aria-hidden>·</span>
            <a
              href="https://www.linkedin.com/in/raffay-asim-52bb92247/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              LinkedIn
            </a>
            <span aria-hidden>·</span>
            <a href="mailto:raffay.asim6@gmail.com" className="hover:text-accent">
              raffay.asim6@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
