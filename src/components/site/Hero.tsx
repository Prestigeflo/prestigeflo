import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useBooking } from "./BookingProvider";

export function Hero() {
  const { open: openBooking } = useBooking();
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden circuit-bg pt-28 pb-20">
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-gold/40 animate-float-slow"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              top: `${(i * 53) % 100}%`,
              left: `${(i * 37) % 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${6 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      {/* Radial glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-50"
           style={{ background: "var(--gradient-radial-gold)" }} />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <div className="animate-fade-up mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-xs tracking-[0.25em] text-gold uppercase mb-8">
            <Sparkles className="w-3.5 h-3.5" /> Currently Accepting New Clients
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            <span className="text-gold-gradient">AI Systems</span>{" "}
            <span className="text-foreground">Built for Dentists</span>{" "}
            <span className="text-silver">Who Refuse to Lose Patients.</span>
          </h1>

          <p className="mt-8 text-lg text-silver/80 max-w-2xl mx-auto leading-relaxed">
            We design and deploy custom AI automations for modern dental practices — voice agents that
            answer every patient call, workflows that fill cancellations, and integrations that quietly
            run the front desk so your team can focus on the chair.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={openBooking}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gold-gradient text-black font-medium tracking-wide shadow-gold hover:shadow-gold-soft transition-all hover:-translate-y-0.5"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-gold/50 text-gold tracking-wide hover:bg-gold/10 transition-all"
            >
              <Play className="w-4 h-4" /> See What We Build
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-xs tracking-[0.2em] uppercase text-silver/50">
            <span>Full system ownership</span>
          </div>
        </div>
      </div>
    </section>
  );
}