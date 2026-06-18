import { ShieldCheck, FileText, Banknote, TrendingUp, BookOpen, BadgeCheck, type LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const services: Service[] = [
  { icon: ShieldCheck, title: "Insurance Verification", desc: "AI-driven eligibility checks before every appointment, so you always know what's covered." },
  { icon: FileText, title: "Claim Scrubbing & Submission", desc: "Error-free daily submissions powered by machine learning and clearinghouse intelligence." },
  { icon: Banknote, title: "Patient Billing", desc: "Automated statements and follow-ups that keep patient balances moving without friction." },
  { icon: TrendingUp, title: "AR Recovery", desc: "Relentless pursuit of unpaid claims with prioritized worklists and appeal automation." },
  { icon: BookOpen, title: "Payment Posting", desc: "Accurate ledger reconciliation across ERAs, EOBs, and patient payments — daily." },
  { icon: BadgeCheck, title: "Credentialing", desc: "Keeping providers in-network with proactive renewals, CAQH updates, and payer enrollment." },
];

export function Services() {
  return (
    <section id="services" className="bg-[#0B1120] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-5">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Full-Cycle Revenue Management
          </h2>
          <p className="mt-5 text-slate-400 text-lg">
            Every touchpoint between your practice and a paid claim — automated, audited, and accountable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-20px_rgba(6,182,212,0.35)]"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-cyan-500" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1120] mb-3 tracking-tight">{title}</h3>
              <p className="text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}