"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function About() {
  const reduced = useReducedMotion();

  return (
    <section id="about" className="border-y border-white/5 bg-white/[0.02] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-5">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-2"
          >
            <p className="text-sm font-medium text-accent">About</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              From sales floors to AI systems
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-400">
              <p>
                I started in honest sales and lead-gen — Ammrys, Rana &amp; Sons —
                learning how pipelines actually break: messy lists, slow follow-up,
                and work that should have been automated years ago.
              </p>
              <p>
                That ops reality is why I freelance as an AI automation architect
                and full-stack vibe coder. I build n8n agents, CRMs, outbound
                engines, and SaaS that replace repetitive sales and ops work —
                shipped to production, not parked in a demo folder.
              </p>
              <p>
                Based in Pakistan, open to remote. Prefer clear scopes, fast
                feedback loops, and proof you can click.
              </p>
            </div>
          </motion.div>

          <div className="relative lg:col-span-3">
            <div
              aria-hidden
              className="absolute bottom-2 left-[15px] top-2 w-px bg-gradient-to-b from-accent/50 via-violet-400/30 to-transparent sm:left-[19px]"
            />
            <ul className="space-y-8">
              {timeline.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={reduced ? false : { opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="relative grid grid-cols-[40px_1fr] gap-4 sm:grid-cols-[48px_1fr]"
                >
                  <div className="relative z-10 flex justify-center pt-1">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A0A0B] ring-2 ring-accent/40 shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    </span>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition hover:border-accent/25">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent ring-1 ring-accent/20">
                        {item.year}
                      </span>
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {item.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
