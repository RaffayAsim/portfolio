"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Capabilities() {
  const reduced = useReducedMotion();

  return (
    <section id="capabilities" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium text-accent">Capabilities</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            What I actually build
          </h2>
          <p className="mt-4 text-zinc-400">
            Automation that ships. Interfaces people use. No fake metrics —
            just systems that remove busywork.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={reduced ? undefined : { y: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-accent/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/25 transition group-hover:shadow-[0_0_24px_rgba(34,211,238,0.25)]">
                <span className="font-display text-sm font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-base font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {c.body}
              </p>
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/0 blur-2xl transition group-hover:bg-violet-500/10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
