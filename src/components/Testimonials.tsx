import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Revedent cut our outstanding AR by nearly 40% in the first quarter. Our team finally has time to focus on patients instead of chasing payers.",
    name: "Dr. Megan Whitfield",
    role: "DDS, Whitfield Family Dental",
  },
  {
    quote:
      "The AI scrubbing catches things our previous biller missed for years. Clean claims, faster payments, zero excuses.",
    name: "Priya Anand",
    role: "Practice Manager",
  },
  {
    quote:
      "Onboarding took less than a week. Within 30 days collections were up 18% and patient statements were going out on autopilot.",
    name: "Dr. Jonathan Reyes",
    role: "DDS, Coastline Dental Group",
  },
  {
    quote:
      "Transparent reporting is the game changer. I can see every claim, every dollar, every denial in real time.",
    name: "Sarah Beckett",
    role: "Practice Manager",
  },
  {
    quote:
      "We replaced a 4-person billing team and ended up collecting more revenue. Genuinely the best operational decision we made this year.",
    name: "Dr. Aaron Liu",
    role: "DDS, Brightline Orthodontics",
  },
  {
    quote:
      "Credentialing alone used to eat my month. Now it just… happens. The follow-up automation is worth the price by itself.",
    name: "Daniela Cortez",
    role: "Practice Manager",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F8FAFC] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] tracking-tight leading-tight">
            What Practice Owners Say
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-[0_20px_60px_-16px_rgba(15,23,42,0.12)] mb-6 break-inside-avoid border border-white/20"
            >
              <Stars />
              <p className="text-slate-600 leading-relaxed mb-5">"{t.quote}"</p>
              <div>
                <div className="font-bold text-[#0B1120]">{t.name}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}