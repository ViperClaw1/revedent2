import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBanner } from "@/components/TrustBanner";
import { ValueProposition } from "@/components/ValueProposition";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

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
        <TrustBanner />
        <ValueProposition />
        <Services />
        <HowItWorks />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
