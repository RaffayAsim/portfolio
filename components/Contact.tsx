"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { site } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "LinkedIn", value: "raffay-asim", href: site.linkedin },
  { label: "GitHub", value: "RaffayAsim", href: site.github },
  { label: "Phone", value: site.phone, href: site.phoneHref },
];

export default function Contact() {
  const reduced = useReducedMotion();

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_80px_rgba(34,211,238,0.06)] backdrop-blur-xl sm:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl"
          />

          <div className="relative z-10">
            <p className="text-sm font-medium text-accent">Contact</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Let&apos;s automate the busywork
            </h2>
            <p className="mt-4 max-w-xl text-zinc-400">
              Remote-friendly. Tell me what sales/ops loop you want gone — I&apos;ll
              ship a system you can run.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {channels.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  whileHover={reduced ? undefined : { scale: 1.02 }}
                  className="glass-panel flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 transition hover:border-accent/35"
                >
                  <span className="text-[11px] uppercase tracking-wider text-zinc-500">
                    {c.label}
                  </span>
                  <span className="mt-1 text-sm font-medium text-zinc-100">
                    {c.value}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="mt-10">
              <MagneticButton href={`mailto:${site.email}`}>
                Email Raffay
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
