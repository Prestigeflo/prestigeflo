import { Mail, Instagram, Linkedin } from "lucide-react";
import { useBooking } from "./BookingProvider";

export function Footer() {
  const { open } = useBooking();

  return (
    <footer id="contact" className="bg-surface relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.62 0.11 58 / 0.12), transparent 55%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      {/* Top CTA banner */}
      <div className="relative border-b border-gold/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-6 bg-gold" />
                <span className="text-[10px] tracking-[0.45em] text-gold uppercase">
                  Get Started
                </span>
              </div>
              <div
                className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-[1] text-foreground"
                style={{ textShadow: "0 0 40px oklch(0.62 0.11 58 / 0.55), 0 0 80px oklch(0.62 0.11 58 / 0.25)" }}
              >
                FREE STRATEGY
              </div>
              <div
                className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-[1] text-gold-gradient"
                style={{ textShadow: "0 0 40px oklch(0.78 0.13 86 / 0.60), 0 0 80px oklch(0.78 0.13 86 / 0.30)" }}
              >
                CALL AVAILABLE
              </div>
              <div className="mt-4 text-[13px] text-silver/45 tracking-wide max-w-md">
                30 minutes. No pitch — just a clear plan showing where automation will save you the most time and money.
              </div>
            </div>

            <div className="lg:text-right flex flex-col items-start lg:items-end gap-6">
              <button
                onClick={open}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-gold-gradient text-black text-[11px] font-bold tracking-[0.25em] uppercase shadow-gold hover:shadow-gold-soft hover:-translate-y-0.5 transition-all"
              >
                Book Your Free Strategy Call
              </button>
              <a
                href="mailto:admin@prestigeflo.com"
                className="group inline-flex items-center gap-2.5 px-6 py-3 border border-gold/30 text-gold text-[11px] tracking-[0.25em] uppercase hover:bg-gold/5 hover:border-gold/60 transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                admin@prestigeflo.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom grid */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="font-display text-2xl tracking-wider leading-none mb-1">
              PRESTIGE<span className="text-gold-gradient">FLO</span>
            </div>
            <div className="text-[9px] tracking-[0.35em] text-silver/40 uppercase mb-4">
              AI Automation Agency
            </div>
            <p className="text-silver/40 text-[13px] leading-relaxed">
              We help businesses of all sizes automate leads, follow-ups, and
              operations with intelligent systems that work around the clock.
            </p>
            <button
              onClick={open}
              className="inline-flex mt-5 px-5 py-2.5 bg-gold-gradient text-black text-[10px] font-bold tracking-[0.22em] uppercase hover:shadow-gold transition-all hover:-translate-y-0.5"
            >
              Free Strategy Call
            </button>
          </div>

          {/* Industries */}
          <div>
            <div className="text-[10px] tracking-[0.35em] text-gold uppercase mb-4">
              Industries
            </div>
            <ul className="space-y-2 text-silver/45 text-[13px]">
              {["Trades & Construction", "Healthcare", "Professional Services", "Finance & Legal", "Hospitality", "Real Estate", "E-Commerce"].map((ind) => (
                <li key={ind}>{ind}</li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <div className="text-[10px] tracking-[0.35em] text-gold uppercase mb-4">
              Navigate
            </div>
            <ul className="space-y-2 text-silver/40 text-[13px]">
              {[
                { href: "#services", label: "Services" },
                { href: "#pricing", label: "Pricing" },
                { href: "#process", label: "Why Us" },
                { href: "#about", label: "About" },
                { href: "#faq", label: "FAQ" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="text-[10px] tracking-[0.35em] text-gold uppercase mb-3 mt-7">
              Follow Us
            </div>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/prestigeflo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold/25 flex items-center justify-center text-silver/45 hover:text-gold hover:border-gold/60 transition-all hover:-translate-y-0.5"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/prestigeflo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold/25 flex items-center justify-center text-silver/45 hover:text-gold hover:border-gold/60 transition-all hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] tracking-[0.35em] text-gold uppercase mb-4">
              Contact
            </div>
            <ul className="space-y-4 text-silver/45 text-[13px]">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold/50 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:admin@prestigeflo.com"
                  className="hover:text-gold transition-colors leading-relaxed"
                >
                  admin@prestigeflo.com
                </a>
              </li>
            </ul>
            <div className="mt-6 space-y-1 text-[11px] text-silver/30 tracking-wide">
              <div>Any industry. Any size.</div>
              <div>Results in 30 days.</div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-silver/25">
          <div>
            © {new Date().getFullYear()} PrestigeFlo. All rights reserved.
          </div>
          <div className="tracking-[0.25em] uppercase text-gold/25">
            Automate. Scale. Dominate.
          </div>
        </div>
      </div>
    </footer>
  );
}
