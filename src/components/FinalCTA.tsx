export function FinalCTA() {
  return (
    <section className="px-6 py-28 bg-gradient-to-br from-[#0B1120] via-[#0B1120] to-[#1A2540]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Stop leaving money on the table.
          <br />
          <span className="text-slate-300">Let AI handle the heavy lifting.</span>
        </h2>
        <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
          Get a free revenue audit and see exactly how much your practice could be collecting.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-white font-bold text-base transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40">
            Book Your Free Audit
          </button>
          <button className="px-8 py-3.5 rounded-full border border-white/30 text-white font-bold text-base transition-all duration-300 hover:bg-white/10">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
}