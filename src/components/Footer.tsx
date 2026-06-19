import { Twitter, Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react";
import { RevedentLogo } from "./RevedentLogo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300 px-6 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center">
              <RevedentLogo height={34} textColor="#ffffff" />
            </a>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-xs">
              AI-driven dental revenue cycle management for premium practices that refuse to leave money on the table.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-5">
              Solutions
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
              <li><a href="#tech" className="hover:text-cyan-400 transition-colors">Tech</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#careers" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-5">
              Stay in the loop
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              Monthly insights on dental RCM, AI, and revenue benchmarks.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative flex items-center rounded-full border border-white/10 bg-white/10 backdrop-blur focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/30 transition-all"
            >
              <input
                type="email"
                placeholder="you@practice.com"
                className="flex-1 bg-transparent px-5 py-2.5 text-sm text-white placeholder:text-slate-400 outline-none"
              />
              <button
                type="submit"
                className="m-1 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-bold text-white shadow-[0_8px_20px_-6px_rgba(6,182,212,0.6),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all hover:scale-105"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 pb-10 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <p className="text-sm text-slate-400">© 2024 Revedent.ai. All rights reserved.</p>
          <div className="flex items-center gap-5 text-slate-400">
            <a href="#" aria-label="Twitter" className="hover:text-cyan-400 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-cyan-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-cyan-400 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-cyan-400 transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      {/* Massive typographic watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none w-full text-[15vw] font-black tracking-tighter leading-none text-center text-white/5"
      >
        revedent<span className="text-cyan-500/10">.ai</span>
      </div>
    </footer>
  );
}