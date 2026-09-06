"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="sm:col-span-2"
        >
          <p className="text-sm font-medium text-accent">About</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From sales floors to AI systems
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="space-y-4 text-base leading-relaxed text-zinc-400 sm:col-span-3"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
