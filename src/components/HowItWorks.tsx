const steps = [
  {
    n: "01",
    title: "Onboarding & Integration",
    desc: "We plug directly into your practice management software in days — not months. Full audit of historical AR, payer mix, and workflow before we touch a single claim.",
  },
  {
    n: "02",
    title: "AI Scrubbing & Human Review",
    desc: "Every claim runs through our proprietary AI scrubber to catch coding, eligibility, and modifier errors. Certified billers review high-value claims before submission.",
  },
  {
    n: "03",
    title: "Fast Collections & Reporting",
    desc: "Aggressive follow-up on aging AR, automated patient statements, and real-time dashboards so you always know exactly where your revenue stands.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-slate-50 py-24 px-6 overflow-hidden">
      {/* Dot-matrix background */}
      <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" aria-hidden="true">
        <defs>
          <pattern id="hiw-dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#CBD5E1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hiw-dots)" />
      </svg>

      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-3xl mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-semibold tracking-widest uppercase mb-5">
            How it Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] tracking-tight leading-tight">
            From sign-up to paid claims in three steps.
          </h2>
        </div>

        <div className="relative">
          {steps.map((step, idx) => (
            <div key={step.n} className="relative grid grid-cols-[auto_1fr] md:grid-cols-[260px_1fr] gap-6 md:gap-12 pb-16 last:pb-0">
              {/* dashed connector */}
              {idx < steps.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-[60px] md:left-[110px] top-24 bottom-0 w-px border-l-2 border-dashed border-cyan-300"
                />
              )}

              {/* Number */}
              <div className="flex md:justify-end items-start">
                <span className="text-7xl md:text-8xl font-black leading-none tracking-tighter select-none text-[#0B1120]/10">
                  {step.n}
                </span>
              </div>

              {/* Content */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B1120] tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}