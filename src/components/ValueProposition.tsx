import { Plus, ArrowUpRight, Minus } from "lucide-react";

interface StatCardProps {
  stat: string;
  description: string;
  icon: "plus" | "arrow" | "minus" | "slash";
}

function StatCard({ stat, description, icon }: StatCardProps) {
  const IconComponent =
    icon === "plus" ? Plus :
    icon === "arrow" ? ArrowUpRight :
    icon === "minus" ? Minus :
    ArrowUpRight;

  return (
    <div className="group text-center py-10 px-4 rounded-2xl transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(11,17,32,0.06)]">
      <div className="inline-flex items-center justify-center gap-1 mb-3">
        {stat.startsWith("+") || stat.startsWith("-") ? (
          <>
            {stat.startsWith("+") && (
              <Plus className="w-6 h-6 text-cyan stroke-[3]" />
            )}
            <span className="text-5xl md:text-6xl font-extrabold text-navy tracking-tight leading-none">
              {stat.replace(/^[+-]/, "")}
            </span>
          </>
        ) : (
          <span className="text-5xl md:text-6xl font-extrabold text-navy tracking-tight leading-none">
            {stat}
          </span>
        )}
        {icon === "arrow" && (
          <ArrowUpRight className="w-6 h-6 text-cyan stroke-[3]" />
        )}
        {icon === "slash" && (
          <Minus className="w-5 h-5 text-cyan stroke-[3] rotate-12" />
        )}
      </div>
      <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[200px] mx-auto">
        {description}
      </p>
    </div>
  );
}

export function ValueProposition() {
  const stats: StatCardProps[] = [
    { stat: "98%", description: "Increase in collections", icon: "arrow" },
    { stat: "50%", description: "Reduction in AR over 90 days", icon: "minus" },
    { stat: "+15%", description: "Average revenue boost", icon: "plus" },
    { stat: "24/7", description: "AI-powered claim scrubbing", icon: "slash" },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16 tracking-tight">
          Why choose Revedent?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <StatCard key={s.stat} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
