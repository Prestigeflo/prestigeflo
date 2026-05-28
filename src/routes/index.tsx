import { createFileRoute } from "@tanstack/react-router";
import { BookingProvider } from "@/components/site/BookingProvider";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <BookingProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <main>
          <Hero />
          <TrustBar />
          <Services />
          <Pricing />
          <Process />
          <About />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </BookingProvider>
  );
}
