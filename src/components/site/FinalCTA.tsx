import { ArrowRight, Mail } from "lucide-react";
import { useBooking } from "./BookingProvider";

export function FinalCTA() {
  const { open } = useBooking();

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 circuit-bg pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: "radial-gradient(ellipse at 50% 0%, oklch(0.62 0.11 58 / 0.18), transparent 55%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <div className="inline-flex items-center gap-3 mb-10">
          <span className="h-px w-8 bg-gold" />
          <span className="text-[10px] tracking-[0.45em] text-gold uppercase">
            Ready?
          </span>
          <span className="h-px w-8 bg-gold" />
        </div>

        <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-wide leading-[0.9] text-foreground">
          YOUR BUSINESS
          <br />
          <span className="text-gold-gradient">AUTOMATED.</span>
        </h2>

        <p className="mt-10 text-silver/55 max-w-lg mx-auto leading-relaxed">
          Start with a free 30-minute strategy call. We'll identify your biggest
          automation opportunities and show you exactly what's possible — no
          pitch, just a plan.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={open}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gold-gradient text-black font-bold text-[11px] tracking-[0.28em] uppercase shadow-gold hover:shadow-gold-soft hover:-translate-y-0.5 transition-all animate-gold-pulse"
          >
            Book Your Free Strategy Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="mailto:admin@prestigeflo.com"
            className="inline-flex items-center gap-3 px-10 py-5 border border-gold/40 text-gold text-[11px] tracking-[0.28em] uppercase hover:bg-gold/5 hover:border-gold/70 transition-all"
          >
            <Mail className="w-4 h-4" />
            Email Us
          </a>
        </div>

        <div className="mt-14 text-silver/25 text-[10px] tracking-[0.35em] uppercase">
          Any industry &nbsp;·&nbsp; Any size &nbsp;·&nbsp; Results in 30 days
        </div>
      </div>
    </section>
  );
}