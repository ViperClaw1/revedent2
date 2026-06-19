import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, FileText, Sparkles } from "lucide-react";

type Claim = {
  patient: string;
  code: string;
  desc: string;
  amount: number;
  threshold: number; // 0-1, scanner progress at which it flips
};

const claims: Claim[] = [
  { patient: "Sarah Chen",       code: "D2740", desc: "Crown · porcelain",     amount: 1250, threshold: 0.22 },
  { patient: "Marcus Bell",      code: "D7140", desc: "Extraction · erupted",  amount: 285,  threshold: 0.42 },
  { patient: "Aaliyah Patel",    code: "D4341", desc: "Perio scaling",         amount: 940,  threshold: 0.62 },
  { patient: "Jordan Whitaker",  code: "D6010", desc: "Implant · endosteal",   amount: 2150, threshold: 0.82 },
];

const TOTAL_TARGET = claims.reduce((s, c) => s + c.amount, 0);
const DURATION_MS = 3000;

export function Hero() {
  const [progress, setProgress] = useState(0); // 0..1
  const [displayTotal, setDisplayTotal] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = (t: number) => {
      if (startRef.current === null) startRef.current = t;
      const elapsed = (t - startRef.current) % DURATION_MS;
      setProgress(elapsed / DURATION_MS);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // approved total based on which claims the scanner has passed
  const approvedTotal = claims.reduce(
    (s, c) => (progress >= c.threshold ? s + c.amount : s),
    0,
  );

  // smooth count-up toward approvedTotal (resets when scanner loops to top)
  useEffect(() => {
    setDisplayTotal((prev) => {
      if (approvedTotal < prev) return 0; // loop reset
      return prev;
    });
  }, [approvedTotal]);

  useEffect(() => {
    let raf: number;
    const step = () => {
      setDisplayTotal((prev) => {
        const diff = approvedTotal - prev;
        if (Math.abs(diff) < 1) return approvedTotal;
        return prev + diff * 0.18;
      });
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [approvedTotal]);

  return (
    <section className="relative pt-32 pb-16 px-6 min-h-[90vh] flex items-center overflow-hidden">
      {/* Dot-matrix background */}
      <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" aria-hidden="true">
        <defs>
          <pattern id="hero-dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#CBD5E1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      {/* Soft background accents */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -top-20 -right-20 h-[800px] w-[800px] rounded-full bg-cyan-50 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — Content */}
        <div className="flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-semibold tracking-widest uppercase border border-cyan-100">
            <Sparkles className="w-3.5 h-3.5" />
            AI-Powered Claim Scrubbing
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-[#0B1120] tracking-tight leading-[1.05]">
            Smarter Dental Billing.
            <br />
            <span className="text-[#0B1120]">Maximum Revenue.</span>
          </h1>

          <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl">
            Outsource your billing to expert human billers supercharged by AI.
            We lower AR, accelerate claims, and eliminate paperwork so you can
            focus on patient care.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <button className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-white font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40">
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-50 text-[#0B1120] font-bold hover:bg-slate-100 transition-colors">
              How it Works
            </button>
          </div>
        </div>

        {/* RIGHT — AI Scrubber mockup */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md">
            {/* glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-400/20 via-transparent to-cyan-300/20 blur-2xl rounded-3xl" />

            <div className="relative rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-[0_40px_100px_-24px_rgba(15,23,42,0.18)] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-slate-100">
                <div>
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-slate-400">
                    Total Recovered · Today
                  </p>
                  <p className="mt-1 text-3xl font-bold text-[#0B1120] tabular-nums tracking-tight">
                    ${Math.round(displayTotal).toLocaleString()}
                    <span className="text-slate-300">
                      {" / "}${TOTAL_TARGET.toLocaleString()}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-semibold text-emerald-700">LIVE</span>
                </div>
              </div>

              {/* Claims list with scanner */}
              <div className="relative px-2 py-2">
                {/* Scanner line */}
                <div
                  aria-hidden
                  className="absolute left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_18px_4px_rgba(6,182,212,0.7)] pointer-events-none z-10"
                  style={{ top: `${progress * 100}%`, opacity: progress < 0.02 || progress > 0.98 ? 0 : 1 }}
                />

                {claims.map((c) => {
                  const approved = progress >= c.threshold;
                  return (
                    <div
                      key={c.patient}
                      className="flex items-center gap-3 px-4 py-4 rounded-lg transition-colors"
                    >
                      <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4 text-slate-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-[#0B1120] truncate">{c.patient}</p>
                        <p className="text-xs text-slate-500 truncate">
                          <span className="font-mono">{c.code}</span> · {c.desc}
                        </p>
                      </div>
                      <div className="text-sm font-bold text-[#0B1120] tabular-nums">
                        ${c.amount.toLocaleString()}
                      </div>
                      <StatusBadge approved={approved} />
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50/60">
                <p className="text-xs text-slate-500">AI Scrubber · v4.2</p>
                <p className="text-xs font-semibold text-cyan-600">
                  {claims.filter((c) => progress >= c.threshold).length}/{claims.length} approved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ approved }: { approved: boolean }) {
  return (
    <div
      className={[
        "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all duration-300 min-w-[92px] justify-center",
        approved
          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
          : "bg-slate-100 text-slate-500 border border-slate-200",
      ].join(" ")}
    >
      {approved ? (
        <>
          <Check className="w-3 h-3" />
          Approved
        </>
      ) : (
        <>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
          Pending
        </>
      )}
    </div>
  );
}