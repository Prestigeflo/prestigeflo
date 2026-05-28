import { Check, ArrowRight } from "lucide-react";
import { SectionHeader } from "./Services";
import { useBooking } from "./BookingProvider";

const aiFeatures = [
  "Custom AI phone receptionist built for your business",
  "Answers inbound calls 24/7 — no voicemail, no missed jobs",
  "Automated booking calendar integration",
  "Call transcripts and summaries after every call",
  "1 monthly performance & optimisation call (30 min)",
  "Minor AI script adjustments (up to 2 revisions/month)",
  "Priority support — direct line, not a ticket queue",
];

const websiteFeatures = [
  "Custom design tailored to your brand, colours, and style",
  "Fully responsive — desktop, tablet, and mobile",
  "Up to 5 pages (Home, Services, Pricing, About, Contact)",
  "Booking/contact form and social media integration",
  "Deployed to your preferred hosting platform",
  "One round of revisions before final delivery",
  "1 edit included per month + security updates maintained",
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
  const { open } = useBooking();

  return (
    <section id="pricing" className="py-28 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-0 circuit-bg pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.62 0.11 58 / 0.14), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Packages"
          title="TWO SERVICES."
          titleAccent="ONE TEAM."
          subtitle="No tiers, no upsells, no surprise fees. Either we're a fit or we're not."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* AI Receptionist Card */}
          <div className="relative rounded-2xl p-px bg-gold-gradient shadow-gold">
            <div className="rounded-2xl bg-surface px-8 py-10 relative overflow-hidden h-full flex flex-col">
              <div className="absolute inset-0 circuit-bg opacity-30" />
              <div className="relative flex flex-col h-full">
                <div className="text-[10px] tracking-[0.4em] text-gold uppercase mb-3">
                  PrestigeFlo AI
                </div>
                <h3 className="font-display text-3xl tracking-wider text-gold-gradient mb-2">
                  AI RECEPTIONIST
                </h3>
                <p className="text-silver/65 text-sm mb-8 leading-relaxed">
                  An AI that answers every call, qualifies every lead, and books every job — 24/7, in your voice.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4 text-center">
                  <div className="border border-gold/20 bg-background/60 p-4">
                    <div className="text-[10px] tracking-[0.3em] text-silver/60 uppercase mb-1">Setup</div>
                    <div className="font-display text-3xl text-foreground tracking-wider">
                      $1,250
                    </div>
                    <div className="text-silver/50 text-xs mt-1 tracking-wide">AUD · one-time</div>
                  </div>
                  <div className="border border-gold/40 bg-gold/5 p-4">
                    <div className="text-[10px] tracking-[0.3em] text-gold uppercase mb-1">Monthly</div>
                    <div className="font-display text-3xl text-gold-gradient tracking-wider">
                      $997
                    </div>
                    <div className="text-silver/50 text-xs mt-1 tracking-wide">AUD · per month</div>
                  </div>
                </div>

                <p className="text-center text-gold/80 text-xs tracking-wide mb-8">
                  Most clients recoup setup in the first week.
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {aiFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 w-4 h-4 border border-gold/40 bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-gold" strokeWidth={2.5} />
                      </span>
                      <span className="text-silver/75 text-[13px] leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={open}
                  className="group flex items-center justify-center gap-2 w-full px-7 py-4 bg-gold-gradient text-black text-[11px] font-bold tracking-[0.22em] uppercase shadow-gold hover:shadow-gold-soft hover:-translate-y-0.5 transition-all mt-auto"
                >
                  Book Your Strategy Call
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Website Build Card */}
          <div className="relative rounded-2xl border border-gold/25 bg-surface overflow-hidden h-full flex flex-col">
            <div className="absolute inset-0 circuit-bg opacity-20" />
            <div className="relative flex flex-col h-full px-8 py-10">
              <div className="text-[10px] tracking-[0.4em] text-gold uppercase mb-3">
                PrestigeFlo Web
              </div>
              <h3 className="font-display text-3xl tracking-wider text-gold-gradient mb-2">
                WEBSITE BUILD
              </h3>
              <p className="text-silver/65 text-sm mb-8 leading-relaxed">
                A custom, professional website designed, built, and maintained for your business — built to convert.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4 text-center">
                <div className="border border-gold/20 bg-background/60 p-4">
                  <div className="text-[10px] tracking-[0.3em] text-silver/60 uppercase mb-1">Build</div>
                  <div className="font-display text-3xl text-foreground tracking-wider">
                    $1,250
                  </div>
                  <div className="text-silver/50 text-xs mt-1 tracking-wide">AUD · one-time</div>
                </div>
                <div className="border border-gold/40 bg-gold/5 p-4">
                  <div className="text-[10px] tracking-[0.3em] text-gold uppercase mb-1">Monthly</div>
                  <div className="font-display text-3xl text-gold-gradient tracking-wider">
                    $250
                  </div>
                  <div className="text-silver/50 text-xs mt-1 tracking-wide">AUD · maintenance</div>
                </div>
              </div>

              <p className="text-center text-gold/80 text-xs tracking-wide mb-8">
                Your online presence, done right — the first time.
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {websiteFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 w-4 h-4 border border-gold/40 bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-gold" strokeWidth={2.5} />
                    </span>
                    <span className="text-silver/75 text-[13px] leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={open}
                className="group flex items-center justify-center gap-2 w-full px-7 py-4 border border-gold/45 text-gold text-[11px] font-bold tracking-[0.22em] uppercase hover:bg-gold/8 hover:border-gold/70 hover:-translate-y-0.5 transition-all mt-auto"
              >
                Get Your Website Built
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-silver/35 text-[12px] tracking-wide mt-8">
          Not sure if it's a fit? Let's talk first — no obligation.
        </p>
      </div>
    </section>
  );
}
