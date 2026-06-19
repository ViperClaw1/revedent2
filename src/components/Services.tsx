import { ShieldCheck, FileText, Banknote, TrendingUp, BookOpen, BadgeCheck, ArrowRight, type LucideIcon } from "lucide-react";

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
              className="group bg-white border border-slate-100 rounded-2xl p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_20px_40px_-12px_rgba(6,182,212,0.15)]"
            >
              <div className="w-12 h-12 rounded-full p-3 bg-gradient-to-br from-cyan-50 to-white ring-1 ring-slate-100/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-cyan-500" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1120] mb-3 tracking-tight">{title}</h3>
              <p className="text-slate-500 leading-relaxed">{desc}</p>
              <div className="mt-5 flex items-center">
                <ArrowRight className="w-5 h-5 text-cyan-500 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}