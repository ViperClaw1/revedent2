import { Check } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Mercer",
    role: "Operations Manager",
    image: "/team-1.jpg",
  },
  {
    name: "Jordan Blake",
    role: "AI Systems Lead",
    image: "/team-2.jpg",
  },
  {
    name: "Samira Holt",
    role: "Insurance Verification Expert",
    image: "/team-3.jpg",
  },
  {
    name: "Casey Nguyen",
    role: "Client Experience Manager",
    image: "/team-4.jpg",
  },
];

export function AboutUs() {
  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Part 1: Mission & Tech */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] tracking-tight leading-tight">
              Human expertise. Supercharged by AI.
            </h2>
            <p className="mt-6 text-slate-500 text-lg leading-relaxed">
              Revedent was built to solve the biggest bottleneck in dental practices: revenue cycle management. We combine top-tier dental billing experts with proprietary AI scrubbing technology to eliminate errors, fight denials, and ensure you get paid for every procedure.
            </p>
          </div>

          {/* Right Column */}
          <div className="relative">
            <img
              src="/about-mission.jpg"
              alt="Modern professional team collaborating"
              className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3]"
            />
            {/* Glassmorphism floating card */}
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md rounded-xl px-5 py-4 shadow-lg border border-white/30 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-cyan-600" strokeWidth={3} />
              </div>
              <span className="text-sm font-semibold text-[#0B1120]">
                15+ Years Dental RCM Experience
              </span>
            </div>
          </div>
        </div>

        {/* Part 2: Team Grid */}
        <div className="mt-24">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0B1120] tracking-tight text-center">
            Meet your dedicated experts
          </h3>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <h4 className="mt-4 text-lg font-bold text-[#0B1120]">
                  {member.name}
                </h4>
                <p className="text-sm font-medium text-cyan-600">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
