"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsTouch } from "@/hooks/useIsTouch";

function SpotlightCard({
  project,
  index,
  featured,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const touch = useIsTouch();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(34,211,238,0.14), transparent 40%)`;

  const onMove = (e: React.MouseEvent) => {
    if (reduced || touch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mx.set(x);
    my.set(y);
    const px = (x / rect.width - 0.5) * 2;
    const py = (y / rect.height - 0.5) * 2;
    ry.set(px * 6);
    rx.set(-py * 6);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.article
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={
        reduced || touch
          ? undefined
          : { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }
      }
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:border-accent/35 ${
        featured ? "sm:col-span-2 sm:min-h-[280px] sm:p-8" : "min-h-[240px]"
      }`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-4 flex items-start justify-between gap-3">
          <h3
            className={`font-display font-semibold tracking-tight text-white ${
              featured ? "text-2xl sm:text-3xl" : "text-lg"
            }`}
          >
            {project.title}
          </h3>
          <span className="shrink-0 rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-500 ring-1 ring-white/10">
            {featured ? "Featured" : `#${index + 1}`}
          </span>
        </div>
        <p
          className={`flex-1 leading-relaxed text-zinc-400 transition duration-300 group-hover:text-zinc-300 ${
            featured ? "text-base sm:text-lg" : "text-sm"
          }`}
        >
          {project.blurb}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-accent/5 px-2 py-0.5 text-[11px] font-medium text-accent/90 ring-1 ring-accent/20"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-2 opacity-90 transition group-hover:opacity-100">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-[#050507] shadow-[0_0_24px_rgba(34,211,238,0.25)] transition hover:bg-cyan-300"
            >
              Live ↗
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-4 py-1.5 text-xs font-medium text-zinc-300 ring-1 ring-white/15 transition hover:text-white hover:ring-accent/40"
            >
              Repo
            </a>
          )}
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-accent/5 blur-2xl transition duration-500 group-hover:bg-accent/15"
      />
    </motion.article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium text-accent">Selected work</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Proof first — live products and repos
          </h2>
          <p className="mt-4 text-zinc-400">
            Ordered by shipping weight. Every card links to something you can
            open: a live URL, a repo, or both.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1200 }}>
          {featured.map((p, i) => (
            <SpotlightCard
              key={p.title}
              project={p}
              index={i}
              featured={i === 0}
            />
          ))}
          {rest.map((p, i) => (
            <SpotlightCard key={p.title} project={p} index={featured.length + i} />
          ))}
        </div>
      </div>
    </section>
  );
}
