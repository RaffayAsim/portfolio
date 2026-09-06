"use client";

import { motion } from "framer-motion";

const caps = [
  {
    title: "n8n agents & workflows",
    body: "Production automation agents that watch inboxes, CRMs, and leads — then act without babysitting.",
  },
  {
    title: "CRMs & outbound engines",
    body: "Custom CRM surfaces and outbound systems that replace spreadsheet chaos with shippable ops.",
  },
  {
    title: "Full-stack vibe coding",
    body: "Next.js / TypeScript products from idea to Vercel — fast loops, clean UI, real deploys.",
  },
  {
    title: "Sales / ops replacement",
    body: "I design systems that cut repetitive lead-gen, screening, and follow-up work — not dashboards for vanity.",
  },
  {
    title: "Scrapers & data pipelines",
    body: "Targeted scraping and enrichment wired into outreach — useful lists, not noise.",
  },
  {
    title: "AI product features",
    body: "Screening, TTS, and agentic helpers embedded where they save hours — proof over hype.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="border-y border-white/5 bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium text-accent">Capabilities</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What I actually build
          </h2>
          <p className="mt-3 text-zinc-400">
            Automation that ships. Interfaces people use. No fake metrics —
            just systems that remove busywork.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caps.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="rounded-2xl border border-white/10 bg-bg p-5"
            >
              <div className="mb-3 h-1 w-8 rounded-full bg-accent/70" />
              <h3 className="text-base font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
