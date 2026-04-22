import { Check, ArrowRight } from "lucide-react";
import { SectionHeader } from "./Services";

const features = [
  "Custom AI system designed and built end-to-end",
  "Full integration with your existing tools and stack",
  "Monthly maintenance",
  "Monthly performance check-in and optimization call",
  "Priority support — direct line, not a ticket queue",
  "Ongoing system updates and new feature builds",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute -inset-x-20 top-1/2 h-[500px] -translate-y-1/2 opacity-50 pointer-events-none"
           style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Engagement"
          title="One package. Built for serious operators."
          subtitle="No tiers, no upsells, no surprise fees. Either we're a fit or we're not."
        />

        <div className="max-w-2xl mx-auto mt-16">
          <div className="relative rounded-3xl p-px bg-gold-gradient shadow-gold">
            <div className="rounded-3xl bg-surface px-10 py-12 relative overflow-hidden">
              <div className="absolute inset-0 circuit-bg opacity-30" />
              <div className="relative">
                <div className="text-[10px] tracking-[0.4em] text-gold uppercase mb-3 text-center">
                  PrestigeFlo Complete
                </div>
                <h3 className="font-serif text-5xl text-gold-gradient text-center mb-2">
                  The Full System
                </h3>
                <p className="text-silver/70 text-center text-sm mb-10">
                  Everything you need to put your business on autopilot.
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

                <ul className="space-y-3 mb-10">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full border border-gold/40 bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-gold" strokeWidth={2.5} />
                      </span>
                      <span className="text-silver text-[15px]">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="group flex items-center justify-center gap-2 w-full px-7 py-4 rounded-full bg-gold-gradient text-black font-medium tracking-wide shadow-gold hover:shadow-gold-soft transition-all"
                >
                  Book Your Strategy Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

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