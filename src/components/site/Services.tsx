import { Bot, Target, Workflow, Plug, CalendarClock, FileText } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Customer Support Agents",
    body: "24/7 agents trained on your knowledge base — answering, triaging, and escalating like your best rep, without the salary.",
  },
  {
    icon: Target,
    title: "Lead Qualification & Outreach",
    body: "Inbound and outbound systems that score, message, and book qualified prospects directly into your calendar.",
  },
  {
    icon: Workflow,
    title: "Internal Workflow Automation",
    body: "Quietly remove the manual handoffs draining your team — invoicing, onboarding, reporting, status updates.",
  },
  {
    icon: Plug,
    title: "Custom AI Integrations",
    body: "Bespoke builds connecting OpenAI, Anthropic, n8n and the rest of your stack into one system that actually fits.",
  },
  {
    icon: CalendarClock,
    title: "CRM & Calendar Automation",
    body: "End the back-and-forth. Pipelines that update themselves, calendars that fill themselves, follow-ups that never miss.",
  },
  {
    icon: FileText,
    title: "AI-Powered Content Systems",
    body: "Repeatable systems for proposals, posts, emails, and reports — generated in your voice, signed off in minutes.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 bg-surface">
      <div className="absolute inset-0 circuit-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Services"
          title="Six systems. One unfair advantage."
          subtitle="Each engagement is custom — but most of what we ship falls into one of these six categories."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-gold/15 bg-background/40 p-8 transition-all duration-500 hover:border-gold/50 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                   style={{ boxShadow: "var(--shadow-gold-soft)" }} />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold/5 transition-colors">
                  <s.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-gold mb-3">{s.title}</h3>
                <p className="text-silver/75 leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <div className="text-[10px] tracking-[0.4em] text-gold uppercase mb-4">{eyebrow}</div>
      <h2 className="font-serif text-4xl sm:text-5xl leading-tight text-foreground">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-silver/70 text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}