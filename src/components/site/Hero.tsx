import { ChevronDown } from "lucide-react";
import { useBooking } from "./BookingProvider";

export function Hero() {
  const { open } = useBooking();

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 circuit-bg opacity-100 pointer-events-none" />

      {/* Warm glow — upper left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          left: "-5%",
          width: "70%",
          height: "80%",
          background:
            "radial-gradient(ellipse at 30% 20%, oklch(0.62 0.11 58 / 0.22), transparent 60%)",
        }}
      />
      {/* Floor bounce */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "40%",
          background:
            "radial-gradient(ellipse at 40% 100%, oklch(0.45 0.08 52 / 0.14), transparent 65%)",
        }}
      />

      {/* Right-side visual — desktop */}
      <div
        className="hidden md:block absolute top-0 right-0 h-full"
        style={{
          width: "55%",
          clipPath: "polygon(13% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="absolute inset-0 circuit-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/20 to-transparent" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-float-slow"
            style={{
              width: `${1.5 + (i % 2)}px`,
              height: `${1.5 + (i % 2)}px`,
              background: `oklch(0.62 0.11 58 / ${0.2 + (i % 3) * 0.1})`,
              top: `${(i * 73) % 100}%`,
              left: `${(i * 41) % 46}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${8 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 w-full pt-24 pb-28">
        <div className="max-w-[580px] animate-fade-up">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-10">
            <span className="h-px w-10 bg-gold" />
            <span
              className="text-[10px] tracking-[0.48em] uppercase font-medium"
              style={{ color: "var(--amber)" }}
            >
              AI Receptionist Agency
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display leading-[0.88]">
            <span className="block text-[clamp(3.5rem,11vw,8rem)] text-foreground">
              NEVER
            </span>
            <span className="block text-[clamp(3.5rem,11vw,8rem)] text-gold-gradient">
              MISS A CALL.
            </span>
            <span className="block text-[clamp(3.5rem,11vw,8rem)] text-foreground">
              NEVER LOSE
            </span>
            <span
              className="block text-[clamp(3.5rem,11vw,8rem)]"
              style={{ color: "var(--silver)" }}
            >
              A CUSTOMER.
            </span>
          </h1>

          {/* Sub */}
          <p
            className="mt-9 text-[15px] max-w-sm leading-relaxed tracking-wide"
            style={{ color: "oklch(0.78 0.022 65 / 0.65)" }}
          >
            We build and manage AI phone receptionists for businesses that
            can't afford to miss a call. Every inbound call answered, every
            booking captured — 24/7, without adding a single person to payroll.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={open}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gold-gradient text-black text-[11px] font-bold tracking-[0.28em] uppercase shadow-gold hover:shadow-gold-soft hover:-translate-y-0.5 transition-all"
            >
              Book a Free Strategy Call
            </button>
            <a
              href="#services"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border text-[11px] tracking-[0.28em] uppercase transition-all hover:bg-gold/10"
              style={{
                borderColor: "oklch(0.50 0.22 27 / 0.35)",
                color: "var(--gold)",
              }}
            >
              See How It Works
            </a>
          </div>

          {/* Trust line */}
          <p
            className="mt-12 text-[10px] tracking-[0.22em] uppercase"
            style={{ color: "oklch(0.78 0.022 65 / 0.45)" }}
          >
            Trades · Clinics · Salons · Real Estate · Hospitality
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-25">
        <ChevronDown
          className="w-4 h-4 animate-bounce"
          style={{ color: "var(--silver)" }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
