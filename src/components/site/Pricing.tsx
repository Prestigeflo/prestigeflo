import { Check, ArrowRight } from "lucide-react";
import { SectionHeader } from "./Services";
import { useBooking } from "./BookingProvider";

const aiFeatures = [
  "Custom AI receptionist designed and built for your practice",
  "Full integration with your practice management software",
  "Monthly maintenance",
  "Monthly performance check-in and optimization call",
  "Priority support — direct line, not a ticket queue",
  "Ongoing system updates and new feature builds",
];

const websiteFeatures = [
  "Custom design tailored to your brand, colours & style",
  "Fully responsive — desktop, tablet & mobile",
  "Up to 5 pages (Home, Services, Pricing, About, Contact)",
  "Booking & contact form integration",
  "Social media links & Google Maps embed",
  "1 small edit included per month",
];

export function Pricing() {
  const { open: openBooking } = useBooking();
  return (
    <section id="pricing" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute -inset-x-20 top-1/2 h-[500px] -translate-y-1/2 opacity-50 pointer-events-none"
           style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Engagement"
          title="Two packages. One agency."
          subtitle="No tiers, no upsells, no surprise fees. Either we're a fit or we're not."
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">

          {/* ── The Full System ── */}
          <div className="relative rounded-3xl p-px bg-gold-gradient shadow-gold">
            <div className="rounded-3xl bg-surface px-10 py-12 relative overflow-hidden h-full">
              <div className="absolute inset-0 circuit-bg opacity-30" />
              <div className="relative flex flex-col h-full">
                <div className="text-[10px] tracking-[0.4em] text-gold uppercase mb-3 text-center">
                  PrestigeFlo Complete
                </div>
                <h3 className="font-serif text-5xl text-gold-gradient text-center mb-2">
                  The Full System
                </h3>
                <p className="text-silver/70 text-center text-sm mb-10">
                  Everything you need to put your front desk on autopilot.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10 text-center">
                  <div className="rounded-xl border border-gold/20 bg-background/60 p-6">
                    <div className="text-[10px] tracking-[0.3em] text-silver/60 uppercase mb-2">Setup</div>
                    <div className="font-serif text-4xl text-foreground">
                      $1,250<span className="text-base text-silver/60 ml-1">AUD</span>
                    </div>
                    <div className="text-silver/60 text-xs mt-1">one-time</div>
                  </div>
                  <div className="rounded-xl border border-gold/40 bg-gold/5 p-6">
                    <div className="text-[10px] tracking-[0.3em] text-gold uppercase mb-2">Monthly</div>
                    <div className="font-serif text-4xl text-gold-gradient">
                      $997<span className="text-base text-silver/60 ml-1">AUD</span>
                    </div>
                    <div className="text-silver/60 text-xs mt-1">recurring / month</div>
                  </div>
                </div>

                <p className="text-center text-gold/90 text-sm font-medium -mt-4 mb-10">
                  Most practices recoup setup in the first week.
                </p>

                <ul className="space-y-3 mb-10 flex-1">
                  {aiFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full border border-gold/40 bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-gold" strokeWidth={2.5} />
                      </span>
                      <span className="text-silver text-[15px]">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={openBooking}
                  className="group flex items-center justify-center gap-2 w-full px-7 py-4 rounded-full bg-gold-gradient text-black font-medium tracking-wide shadow-gold hover:shadow-gold-soft transition-all"
                >
                  Book Your Strategy Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-silver/55 text-xs mt-6">
                  Not sure if it's a fit? Let's talk first — no obligation.
                </p>
              </div>
            </div>
          </div>

          {/* ── Website Build ── */}
          <div className="relative rounded-3xl p-px shadow-[0_10px_40px_-10px_rgba(220,38,38,0.45)]"
               style={{ background: "linear-gradient(135deg, #dc2626 0%, #f87171 45%, #dc2626 100%)" }}>
            <div className="rounded-3xl bg-surface px-10 py-12 relative overflow-hidden h-full">
              <div className="absolute inset-0 circuit-bg opacity-30" />
              <div className="relative flex flex-col h-full">
                <div className="text-[10px] tracking-[0.4em] uppercase mb-3 text-center"
                     style={{ color: "#f87171" }}>
                  PrestigeFlo Web
                </div>
                <h3 className="font-serif text-5xl text-center mb-2"
                    style={{ background: "linear-gradient(135deg, #dc2626 0%, #f87171 45%, #dc2626 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Website Build
                </h3>
                <p className="text-silver/70 text-center text-sm mb-10">
                  A premium custom website that converts visitors into clients.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10 text-center">
                  <div className="rounded-xl border bg-background/60 p-6"
                       style={{ borderColor: "rgba(220,38,38,0.25)" }}>
                    <div className="text-[10px] tracking-[0.3em] text-silver/60 uppercase mb-2">Build</div>
                    <div className="font-serif text-4xl text-foreground">
                      $1,250<span className="text-base text-silver/60 ml-1">AUD</span>
                    </div>
                    <div className="text-silver/60 text-xs mt-1">one-time</div>
                  </div>
                  <div className="rounded-xl border p-6"
                       style={{ borderColor: "rgba(220,38,38,0.45)", background: "rgba(220,38,38,0.05)" }}>
                    <div className="text-[10px] tracking-[0.3em] uppercase mb-2"
                         style={{ color: "#f87171" }}>Monthly</div>
                    <div className="font-serif text-4xl"
                         style={{ background: "linear-gradient(135deg, #dc2626 0%, #f87171 45%, #dc2626 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      $250<span className="text-base text-silver/60 ml-1" style={{ WebkitTextFillColor: "initial", color: "rgb(148 163 184 / 0.6)" }}>AUD</span>
                    </div>
                    <div className="text-silver/60 text-xs mt-1">recurring / month</div>
                  </div>
                </div>

                <p className="text-center text-sm font-medium -mt-4 mb-10"
                   style={{ color: "rgba(248,113,113,0.9)" }}>
                  Includes hosting, maintenance & 1 edit per month.
                </p>

                <ul className="space-y-3 mb-10 flex-1">
                  {websiteFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ border: "1px solid rgba(220,38,38,0.4)", background: "rgba(220,38,38,0.1)" }}>
                        <Check className="w-3 h-3" strokeWidth={2.5} style={{ color: "#f87171" }} />
                      </span>
                      <span className="text-silver text-[15px]">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={openBooking}
                  className="group flex items-center justify-center gap-2 w-full px-7 py-4 rounded-full font-medium tracking-wide transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #dc2626 0%, #f87171 45%, #dc2626 100%)", color: "#fff", boxShadow: "0 10px 40px -10px rgba(220,38,38,0.55)" }}
                >
                  Book Your Strategy Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-silver/55 text-xs mt-6">
                  Not sure if it's a fit? Let's talk first — no obligation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}