"use client";

import { motion } from "framer-motion";

const channels = [
  {
    label: "Email",
    value: "raffay.asim6@gmail.com",
    href: "mailto:raffay.asim6@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "raffay-asim",
    href: "https://www.linkedin.com/in/raffay-asim-52bb92247/",
  },
  {
    label: "GitHub",
    value: "RaffayAsim",
    href: "https://github.com/RaffayAsim",
  },
  {
    label: "Phone",
    value: "+92 333 2877852",
    href: "tel:+923332877852",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-white/10 bg-bg p-8 glow-border sm:p-12"
        >
          <p className="text-sm font-medium text-accent">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s automate the busywork
          </h2>
          <p className="mt-3 max-w-xl text-zinc-400">
            Remote-friendly. Tell me what sales/ops loop you want gone — I&apos;ll
            ship a system you can run.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-hover flex flex-col rounded-2xl border border-white/10 bg-surface px-4 py-3"
              >
                <span className="text-xs uppercase tracking-wide text-zinc-500">
                  {c.label}
                </span>
                <span className="mt-1 text-sm font-medium text-zinc-200">
                  {c.value}
                </span>
              </a>
            ))}
          </div>
          <a
            href="mailto:raffay.asim6@gmail.com"
            className="mt-8 inline-flex rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-bg transition hover:bg-cyan-300"
          >
            Email Raffay
          </a>
        </motion.div>
      </div>
    </section>
  );
}
