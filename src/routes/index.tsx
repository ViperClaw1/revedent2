import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Revedent.ai — AI-Driven Dental Billing" },
      { name: "description", content: "Premium AI-driven dental billing that maximizes revenue and eliminates claim friction." },
      { property: "og:title", content: "Revedent.ai — AI-Driven Dental Billing" },
      { property: "og:description", content: "Premium AI-driven dental billing." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 px-6 max-w-7xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Revedent.ai</p>
        <h1 className="mt-4 text-5xl md:text-6xl font-extrabold tracking-tight text-navy">
          AI-driven dental billing,
          <br />
          built for premium practices.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-500">
          We recover more revenue, cut claim cycles, and give your front office hours back — powered by purpose-built AI.
        </p>
      </main>
    </div>
  );
}
