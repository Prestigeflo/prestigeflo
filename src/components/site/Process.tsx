import { Globe2, Clock, Wrench } from "lucide-react";
import { SectionHeader } from "./Services";

const reasons = [
  {
    Icon: Globe2,
    title: "Works for Any Industry",
    body: "Trades, clinics, salons, real estate, hospitality — if your phone is your front desk, we can automate it. Any business where a missed call means a missed job.",
  },
  {
    Icon: Clock,
    title: "Live in Under 2 Weeks",
    body: "Most AI receptionist systems are fully built, trained, and answering calls within 2–3 weeks of your onboarding call. No long delays, no complex rollouts.",
  },
  {
    Icon: Wrench,
    title: "Fully Managed Setup",
    body: "You don't need to be technical. We handle scripting, training, setup, testing, and handover. You get a live AI receptionist — not a course to figure out.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: "radial-gradient(ellipse at 50% -10%, oklch(0.62 0.11 58 / 0.13), transparent 55%)" }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Why PrestigeFlo"
          title="NOT YOUR"
          titleAccent="AVERAGE AGENCY."
          subtitle="We don't sell software. We build working systems that generate real, measurable outcomes for your business."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {reasons.map(({ Icon, title, body }, i) => (
            <div
              key={title}
              className="group relative p-8 border border-gold/15 hover:border-gold/45 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ boxShadow: "var(--shadow-gold-soft)" }}
              />
              <div className="relative">
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-7 group-hover:bg-gold/5 transition-colors">
                  <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl tracking-[0.06em] text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-silver/55 leading-relaxed text-[13px]">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}