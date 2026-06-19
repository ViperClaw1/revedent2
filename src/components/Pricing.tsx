import { Check, Star } from "lucide-react";

const tiers = [
  {
    name: "AI Scrubber Only",
    price: "$499",
    subtext: "/mo",
    description: "For practices with an in-house biller who needs AI super-powers.",
    highlighted: false,
    features: [
      "AI claim scrubbing & validation",
      "Daily claim submission",
      "Denial prediction & appeals",
      "24/7 Dashboard access",
      "Email support",
    ],
  },
  {
    name: "Full-Cycle RCM",
    price: "3.5%",
    subtext: "of monthly collections",
    description: "Total outsourcing. We only get paid when you get paid.",
    highlighted: true,
    features: [
      "Everything in AI Scrubber",
      "Insurance verification",
      "Patient billing & follow-ups",
      "AR recovery & appeals",
      "Dedicated account manager",
    ],
  },
  {
    name: "Enterprise / DSO",
    price: "Custom",
    subtext: "",
    description: "Tailored solutions for multi-location groups.",
    highlighted: false,
    features: [
      "Multi-location billing hub",
      "White-glove onboarding",
      "Custom integrations & API Key",
      "Priority support & SLA",
      "Dedicated success team",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-navy">
            Transparent pricing. No hidden fees.
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Choose the plan that fits your practice volume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier) => {
            const isPopular = tier.highlighted;
            return (
              <div
                key={tier.name}
                className={`
                  relative flex flex-col rounded-2xl p-8 transition-all duration-300
                  ${
                    isPopular
                      ? "bg-white border-t-4 border-cyan-500 shadow-xl shadow-cyan-500/10 md:scale-105 z-10"
                      : "bg-white shadow-sm border border-slate-100"
                  }
                `}
              >

                <h3 className="text-lg font-semibold text-navy tracking-tight flex items-center gap-2">
                  {tier.name}
                  {isPopular && <Star className="h-4 w-4 fill-cyan-500 text-cyan-500" />}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-navy tracking-tight">
                    {tier.price}
                  </span>
                  {tier.subtext && (
                    <span className="text-base font-medium text-slate-500">
                      {tier.subtext}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                  {tier.description}
                </p>

                <ul className="mt-8 space-y-4 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-50">
                        <Check className="h-3.5 w-3.5 text-cyan-500" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-slate-600 leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  {isPopular ? (
                  <a
                      href="#contact"
                      className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 shadow-[0_8px_20px_-6px_rgba(6,182,212,0.6),inset_0_1px_0_rgba(255,255,255,0.3)]"
                    >
                      Get Started
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-600 hover:shadow-md"
                    >
                      Book a Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
