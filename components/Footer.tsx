export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} Raffay Asim. Built with Next.js.
        </p>
        <p className="text-zinc-600">Pakistan · Open to remote</p>
      </div>
    </footer>
  );
}
