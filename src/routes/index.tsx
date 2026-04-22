import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Results } from "@/components/site/Results";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { About } from "@/components/site/About";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Results />
        <Pricing />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
