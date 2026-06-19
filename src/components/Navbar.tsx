import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Resources", href: "#resources" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="backdrop-blur-xl bg-white/60 border-b border-white/40 shadow-[0_1px_0_0_rgba(255,255,255,0.6)]">
        <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-extrabold tracking-tight text-navy">
            revedent<span className="text-cyan">.ai</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-slate-500 hover:text-navy transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40"
            >
              Book a Demo
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-navy hover:bg-white/60"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden border-t border-white/40 bg-white/80 backdrop-blur-xl">
            <ul className="px-6 py-4 space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-sm font-medium text-slate-500 hover:text-navy"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#demo"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30"
                >
                  Book a Demo
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}