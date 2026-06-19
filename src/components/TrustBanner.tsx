import { Hexagon, Triangle, Box, Circle, Diamond } from "lucide-react";

export function TrustBanner() {
  const partners = [
    { name: "Dentrix", Icon: Hexagon, color: "text-cyan-600" },
    { name: "Curve", Icon: Circle, color: "text-blue-600" },
    { name: "Eaglesoft", Icon: Triangle, color: "text-indigo-600" },
    { name: "Open Dental", Icon: Box, color: "text-emerald-600" },
    { name: "Denticon", Icon: Diamond, color: "text-rose-500" },
  ];

  return (
    <section className="bg-[#F8FAFC] border-y border-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mb-8">
          Trusted by modern practices using:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map(({ name, Icon, color }) => (
            <div
              key={name}
              className="group flex items-center gap-2 cursor-default select-none grayscale opacity-40 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              title={name}
            >
              <Icon className={`w-6 h-6 ${color}`} strokeWidth={2.25} />
              <span className="text-lg md:text-xl font-bold tracking-tight text-navy">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
