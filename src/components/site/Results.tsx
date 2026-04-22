import { SectionHeader } from "./Services";

const stats = [
  { v: "80%", label: "Reduction in response time" },
  { v: "$14k+", label: "Average monthly savings" },
  { v: "10+ hrs", label: "Reclaimed per week, per operator" },
];

const testimonials = [
  {
    quote: "We replaced two FTEs of inbound triage with one PrestigeFlo system. It paid for itself in 19 days. I don't even check the inbox anymore.",
    name: "Marcus Rell",
    role: "Founder",
    company: "Northwind Capital",
  },
  {
    quote: "These guys don't sell AI — they sell quiet. My team gets to do real work because the system handles the noise. That's worth a lot.",
    name: "Alana Vasquez",
    role: "COO",
    company: "Meridian Group",
  },
  {
    quote: "I've hired three other agencies before this. PrestigeFlo is the first one that actually understood the operations side, not just the tech.",
    name: "Daniel Okafor",
    role: "Managing Partner",
    company: "Halo Advisory",
  },
];

export function Results() {
  return (
    <section className="py-28 bg-surface relative">
      <div className="absolute inset-0 circuit-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Results"
          title="The kind of numbers that close themselves."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-gold/20 bg-background/50 p-10 text-center">
              <div className="font-serif text-6xl text-gold-gradient mb-3">{s.v}</div>
              <div className="text-silver/70 text-sm tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-gold/15 bg-background/60 p-8 hover:border-gold/40 transition-colors">
              <svg className="w-8 h-8 text-gold/60 mb-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.5 6C5.91 6 3 8.91 3 12.5V18h6v-5.5H6c0-1.93 1.57-3.5 3.5-3.5V6zm11 0c-3.59 0-6.5 2.91-6.5 6.5V18h6v-5.5h-3c0-1.93 1.57-3.5 3.5-3.5V6z"/>
              </svg>
              <blockquote className="text-silver leading-relaxed text-[15px]">"{t.quote}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-gold/15 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gold-gradient/30 border border-gold/30 flex items-center justify-center text-gold font-serif">
                  {t.name.split(" ").map((p) => p[0]).join("")}
                </div>
                <div>
                  <div className="text-foreground text-sm font-medium">{t.name}</div>
                  <div className="text-silver/60 text-xs">{t.role} · {t.company}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}