export function TrustBanner() {
  const partners = [
    { name: "Dentrix", logo: "Dentrix" },
    { name: "Curve Dental", logo: "Curve" },
    { name: "Eaglesoft", logo: "Eaglesoft" },
    { name: "Open Dental", logo: "Open Dental" },
    { name: "Denticon", logo: "Denticon" },
  ];

  return (
    <section className="bg-[#F8FAFC] border-y border-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mb-8">
          Trusted by modern practices using:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group cursor-default select-none"
              title={partner.name}
            >
              <span className="text-lg md:text-xl font-bold tracking-tight text-navy grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
