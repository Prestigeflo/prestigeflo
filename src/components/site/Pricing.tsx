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

const crmFeatures = [
  "Complete CRM setup, configuration & management",
  "Automated invoicing & payment collection",
  "Automated email & SMS follow-ups",
  "Online booking & job scheduling",
  "Custom website build included",
  "AI receptionist included",
  "Ongoing management & priority support",
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
          title="THREE SERVICES."
          titleAccent="ONE TEAM."
          subtitle="No tiers, no upsells, no surprise fees. Either we're a fit or we're not."
        />

        {/* Full CRM Setup — flagship card */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div
            className="relative rounded-2xl p-px"
            style={{
              background: "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 45%, #1d4ed8 100%)",
              boxShadow: "0 12px 48px -12px rgba(37,99,235,0.55)",
            }}
          >
            <div className="rounded-2xl bg-surface px-8 py-10 relative overflow-hidden">
              <div className="absolute inset-0 circuit-bg opacity-20" />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.16), transparent 55%)",
                }}
              />
              <div className="relative flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-1">
                  <div className="text-[10px] tracking-[0.4em] uppercase mb-3" style={{ color: "#60a5fa" }}>
                    Everything, done for you
                  </div>
                  <h3 className="font-display text-3xl tracking-wider text-gold-gradient mb-2">
                    FULL CRM SETUP
                  </h3>
                  <p className="text-silver/65 text-sm mb-6 leading-relaxed">
                    All your invoicing, automated email &amp; SMS, scheduling, website, and AI
                    receptionist — fully set up and managed under one roof.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                    {crmFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 w-4 h-4 flex items-center justify-center flex-shrink-0"
                          style={{ border: "1px solid rgba(96,165,250,0.5)", background: "rgba(37,99,235,0.12)" }}
                        >
                          <Check className="w-2.5 h-2.5" strokeWidth={2.5} style={{ color: "#60a5fa" }} />
                        </span>
                        <span className="text-silver/75 text-[13px] leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center md:text-right md:pl-8 md:border-l md:self-stretch md:flex md:flex-col md:justify-center"
                     style={{ borderColor: "rgba(96,165,250,0.25)" }}>
                  <div className="font-display text-4xl text-foreground tracking-wider">
                    $7,000
                  </div>
                  <div className="text-silver/50 text-xs mt-1 tracking-wide">AUD · setup</div>
                  <div className="font-display text-2xl tracking-wider mt-4" style={{ color: "#93c5fd" }}>
                    + $300<span className="text-sm"> /mo</span>
                  </div>
                  <div className="text-silver/50 text-xs mt-1 mb-6 tracking-wide">
                    AUD · per team member
                  </div>
                  <button
                    type="button"
                    onClick={open}
                    className="group flex items-center justify-center gap-2 w-full md:w-auto px-7 py-4 text-white text-[11px] font-bold tracking-[0.22em] uppercase hover:-translate-y-0.5 transition-all"
                    style={{
                      background: "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 45%, #1d4ed8 100%)",
                      boxShadow: "0 4px 20px -4px rgba(37,99,235,0.55)",
                    }}
                  >
                    Book Your Strategy Call
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

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

                <div className="text-[10px] tracking-[0.3em] text-silver/60 uppercase mb-2 text-center">
                  Solo Operators &amp; Teams of 2
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4 text-center">
                  <div className="border border-gold/20 bg-background/60 p-4">
                    <div className="text-[10px] tracking-[0.3em] text-silver/60 uppercase mb-1">Setup</div>
                    <div className="font-display text-3xl text-foreground tracking-wider">
                      $680
                    </div>
                    <div className="text-silver/50 text-xs mt-1 tracking-wide">AUD · one-time</div>
                  </div>
                  <div className="border border-gold/40 bg-gold/5 p-4">
                    <div className="text-[10px] tracking-[0.3em] text-gold uppercase mb-1">Monthly</div>
                    <div className="font-display text-3xl text-gold-gradient tracking-wider">
                      $200
                    </div>
                    <div className="text-silver/50 text-xs mt-1 tracking-wide">AUD · per month</div>
                  </div>
                </div>

                <div className="text-[10px] tracking-[0.3em] text-silver/60 uppercase mb-2 text-center">
                  Teams of 3+
                </div>
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
          <div className="relative rounded-2xl p-px" style={{ background: "linear-gradient(135deg, #dc2626 0%, #f87171 45%, #dc2626 100%)", boxShadow: "0 10px 40px -10px rgba(220,38,38,0.45)" }}>
            <div className="rounded-2xl bg-surface overflow-hidden h-full flex flex-col">
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
                className="group flex items-center justify-center gap-2 w-full px-7 py-4 text-white text-[11px] font-bold tracking-[0.22em] uppercase hover:-translate-y-0.5 transition-all mt-auto"
                style={{ background: "linear-gradient(135deg, #dc2626 0%, #f87171 45%, #dc2626 100%)", boxShadow: "0 4px 20px -4px rgba(220,38,38,0.5)" }}
              >
                Get Your Website Built
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
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
