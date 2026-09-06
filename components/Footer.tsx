import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js + Framer
          Motion.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <span className="text-zinc-600">{site.location}</span>
        </div>
      </div>
    </footer>
  );
}
