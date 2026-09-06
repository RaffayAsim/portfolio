"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050507]/75 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a
          href="#top"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-white"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/30">
            <span className="font-display text-xs text-accent">RA</span>
          </span>
          Raffay Asim
          <span className="text-accent transition group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
            .
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-400 transition hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <MagneticButton href="mailto:raffay.asim6@gmail.com" className="!px-4 !py-1.5 text-xs">
            Email me
          </MagneticButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="rounded-xl p-2 text-zinc-300 ring-1 ring-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-[#0A0A0B]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/5 hover:text-accent"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="mailto:raffay.asim6@gmail.com"
                className="mt-1 rounded-lg px-3 py-2.5 text-sm font-medium text-accent"
              >
                Email me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
