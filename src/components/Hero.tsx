import { ArrowRight, CheckCircle2, Sparkles, TrendingDown, ShieldCheck, Clock } from "lucide-react";
import dental1 from "@/assets/dental-1.jpg";
import dental2 from "@/assets/dental-2.jpg";
import dental3 from "@/assets/dental-3.jpg";
import dental4 from "@/assets/dental-4.jpg";

type CardItem = { kind: "card"; icon: React.ReactNode; title: string; value: string; tint: string };
type ImgItem = { kind: "img"; src: string; alt: string };
type Item = CardItem | ImgItem;

function TechCard({ icon, title, value, tint }: Omit<CardItem, "kind">) {
  return (
    <div className="rounded-xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(11,17,32,0.08)] p-4 flex items-center gap-3">
      <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${tint}`}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium text-slate-500">{title}</p>
        <p className="text-sm font-bold text-navy truncate">{value}</p>
      </div>
    </div>
  );
}

function renderItem(item: Item, key: string) {
  if (item.kind === "img") {
    return (
      <img
        key={key}
        src={item.src}
        alt={item.alt}
        loading="lazy"
        width={400}
        height={500}
        className="w-full h-64 object-cover rounded-2xl shadow-[0_10px_40px_rgba(11,17,32,0.12)]"
      />
    );
  }
  return <TechCard key={key} icon={item.icon} title={item.title} value={item.value} tint={item.tint} />;
}

const cyanTint = "bg-cyan/15 text-cyan";
const navyTint = "bg-navy/10 text-navy";

const columnA: Item[] = [
  { kind: "img", src: dental1, alt: "Dental professional" },
  { kind: "card", icon: <CheckCircle2 size={18} />, title: "Claim Approved", value: "$1,250.00", tint: cyanTint },
  { kind: "card", icon: <Sparkles size={18} />, title: "AI Scrub", value: "Complete · 0 errors", tint: navyTint },
  { kind: "img", src: dental3, alt: "Dental hygienist" },
  { kind: "card", icon: <TrendingDown size={18} />, title: "AR Reduced", value: "30% in 60 days", tint: cyanTint },
];

const columnB: Item[] = [
  { kind: "card", icon: <ShieldCheck size={18} />, title: "Eligibility Verified", value: "Aetna · PPO", tint: navyTint },
  { kind: "img", src: dental2, alt: "Dentist portrait" },
  { kind: "card", icon: <Clock size={18} />, title: "Avg Claim Cycle", value: "4.2 days", tint: cyanTint },
  { kind: "img", src: dental4, alt: "Dental team" },
  { kind: "card", icon: <CheckCircle2 size={18} />, title: "Posted Today", value: "$28,940", tint: navyTint },
];

function ScrollColumn({ items, direction }: { items: Item[]; direction: "up" | "down" }) {
  const anim = direction === "up" ? "animate-scroll-up" : "animate-scroll-down";
  return (
    <div className="flex-1 overflow-hidden relative">
      <div className={`flex flex-col gap-5 ${anim}`}>
        {items.map((it, i) => renderItem(it, `a-${i}`))}
        {items.map((it, i) => renderItem(it, `b-${i}`))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-cyan/10 text-cyan px-3 py-1 text-xs font-semibold tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            AI-Powered Dental RCM
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-navy">
            Smarter Dental Billing.
            <br />
            Maximum Revenue.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-500 leading-relaxed">
            Outsource your billing to expert human billers supercharged by AI. We lower AR,
            accelerate claims, and eliminate paperwork so you can focus on patient care.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-cyan px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-[0_0_28px_rgba(6,182,212,0.55)]"
            >
              Get Started
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-md px-4 py-3 text-sm font-semibold text-navy hover:text-cyan transition-colors"
            >
              How it Works
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="relative h-[600px] overflow-hidden rounded-3xl">
            <div className="flex gap-5 h-full">
              <ScrollColumn items={columnA} direction="up" />
              <ScrollColumn items={columnB} direction="down" />
            </div>
            {/* Fades */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}