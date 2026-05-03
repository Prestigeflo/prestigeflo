import { SectionHeader } from "./Services";

const steps = [
  { n: "01", title: "Discovery Call", body: "We map your patient flow, your front desk bottlenecks, and the calls costing you the most — then decide what to build first." },
  { n: "02", title: "Custom Build", body: "We design and build your AI receptionist end-to-end — practice management integration, voice agent, scripts, recall workflows, the works." },
  { n: "03", title: "Launch & Train", body: "We deploy, train your team, and document everything. Your practice owns the system the moment it goes live." },
  { n: "04", title: "Ongoing Optimization", body: "Monthly tuning, performance reviews, and new automations as your practice grows." },
];

export function Process() {
  return (
    <section id="process" className="py-28 bg-background relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="The Process"
          title="Four steps. No mystery."
          subtitle="From first call to fully deployed system, you'll always know exactly where things stand."
        />

        <div className="mt-20 relative">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((s) => (
              <div key={s.n} className="relative text-center lg:text-left">
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                  <div className="absolute inset-0 rounded-full border border-gold/40" />
                  <div className="absolute inset-1.5 rounded-full bg-background border border-gold/30 flex items-center justify-center">
                    <span className="font-serif text-gold-gradient text-lg">{s.n}</span>
                  </div>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{s.title}</h3>
                <p className="text-silver/70 leading-relaxed text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}