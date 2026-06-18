import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

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
      <main>
        <Hero />
      </main>
    </div>
  );
}
