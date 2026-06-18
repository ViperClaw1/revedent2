import { Twitter, Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14">
          {/* Brand */}
          <div>
            <a href="/" className="text-2xl font-bold text-[#0B1120] tracking-tight">
              revedent<span className="text-cyan-500">.ai</span>
            </a>
            <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-xs">
              AI-driven dental revenue cycle management for premium practices that refuse to leave money on the table.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-bold text-[#0B1120] tracking-widest uppercase mb-5">
              Solutions
            </h4>
            <ul className="space-y-3 text-slate-500">
              <li><a href="#services" className="hover:text-cyan-600 transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-cyan-600 transition-colors">Pricing</a></li>
              <li><a href="#tech" className="hover:text-cyan-600 transition-colors">Tech</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-[#0B1120] tracking-widest uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-slate-500">
              <li><a href="#about" className="hover:text-cyan-600 transition-colors">About</a></li>
              <li><a href="#careers" className="hover:text-cyan-600 transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-cyan-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-[#0B1120] tracking-widest uppercase mb-5">
              Stay in the loop
            </h4>
            <p className="text-slate-500 text-sm mb-4">
              Monthly insights on dental RCM, AI, and revenue benchmarks.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative flex items-center rounded-md border border-slate-200 bg-white focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-100 transition-all"
            >
              <input
                type="email"
                placeholder="you@practice.com"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-[#0B1120] placeholder:text-slate-400 outline-none"
              />
              <button
                type="submit"
                className="m-1 inline-flex items-center gap-1 rounded-[6px] bg-cyan-500 px-4 py-2 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© 2024 Revedent.ai. All rights reserved.</p>
          <div className="flex items-center gap-5 text-slate-400">
            <a href="#" aria-label="Twitter" className="hover:text-cyan-500 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-cyan-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-cyan-500 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-cyan-500 transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}