"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  blurb: string;
  tags: string[];
  live?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "Paper-Plane",
    blurb:
      "Outbound / messaging product shipped to production on Vercel — full-stack vibe-coded delivery.",
    tags: ["Full-stack", "Vercel", "Product"],
    live: "https://paper-plane-umber.vercel.app/",
    repo: "https://github.com/RaffayAsim/Paper-Plane",
  },
  {
    title: "THE-QHQ",
    blurb:
      "Live QuantumArc product surface — production site with repo-backed development.",
    tags: ["SaaS", "Production", "Web"],
    live: "https://qhq.quantumarc.us",
    repo: "https://github.com/RaffayAsim/THE-QHQ",
  },
  {
    title: "HireForce AI",
    blurb:
      "AI screening workflows for hiring — automation that cuts repetitive candidate review work.",
    tags: ["AI", "Hiring", "Automation"],
    repo: "https://github.com/RaffayAsim/HireForce-AI-Screening",
  },
  {
    title: "Connect CRM",
    blurb:
      "CRM built for sales/ops — live at connect.quantumarc.us.",
    tags: ["CRM", "Sales", "Ops"],
    live: "https://connect.quantumarc.us",
  },
  {
    title: "yelp-scraper-automation",
    blurb:
      "Lead-gen scraping automation for outbound pipelines — less manual list building.",
    tags: ["Automation", "Lead-gen", "Scraping"],
    repo: "https://github.com/RaffayAsim/yelp-scraper-automation",
  },
  {
    title: "Solo-No-More",
    blurb:
      "Product/experiment repo focused on helping solo operators ship with systems.",
    tags: ["Product", "Systems"],
    repo: "https://github.com/RaffayAsim/Solo-No-More",
  },
  {
    title: "Saad-Website",
    blurb:
      "Client website shipped live — clean full-stack delivery with public repo.",
    tags: ["Client work", "Web"],
    live: "https://saadzain.net/",
    repo: "https://github.com/RaffayAsim/Saad-Website",
  },
  {
    title: "Ebook-Brand",
    blurb:
      "Brand / ebook project — packaging content into a shippable digital product.",
    tags: ["Brand", "Content"],
    repo: "https://github.com/RaffayAsim/Ebook-Brand",
  },
  {
    title: "TTS",
    blurb:
      "Text-to-speech tooling — practical AI audio utility for product workflows.",
    tags: ["AI", "Audio", "Utility"],
    repo: "https://github.com/RaffayAsim/TTS",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium text-accent">Selected work</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Proof first — live products and repos
          </h2>
          <p className="mt-3 text-zinc-400">
            Ordered by shipping weight. Every card links to something you can
            open: a live URL, a repo, or both.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.24) }}
              className="card-hover flex flex-col rounded-2xl border border-white/10 bg-surface p-5 glow-border"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <span className="shrink-0 rounded-full bg-white/5 px-2 py-0.5 text-[11px] text-zinc-500">
                  #{i + 1}
                </span>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-zinc-400">
                {p.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-accent/5 px-2 py-0.5 text-[11px] font-medium text-accent/90 ring-1 ring-accent/15"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent ring-1 ring-accent/25 transition hover:bg-accent/20"
                  >
                    Live
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-3 py-1.5 text-xs font-medium text-zinc-300 ring-1 ring-white/10 transition hover:text-white hover:ring-white/25"
                  >
                    Repo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
