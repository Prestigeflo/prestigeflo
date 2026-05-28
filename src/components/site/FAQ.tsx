import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeader } from "./Services";

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "Any business where a missed call means a missed job — trades, clinics, salons, real estate, hospitality, professional services, and more. If your phone is your front desk, we can automate it.",
  },
  {
    q: "How long does setup take?",
    a: "Most AI receptionist systems are fully built, trained, and live within 2–3 weeks of your onboarding call. Website builds are typically delivered within 1–2 weeks after we receive your brand assets.",
  },
  {
    q: "Do I need to change my phone number?",
    a: "No. We work with your existing business number. Your AI receptionist answers calls on the same number your customers already know — nothing changes on their end.",
  },
  {
    q: "What does 'done-for-you' actually mean?",
    a: "It means we handle everything: scripting, training, setup, testing, and handover. You're not getting a template or a DIY tool — you're getting a fully built, tested, and live AI receptionist. You don't touch a single setting unless you want to.",
  },
  {
    q: "Do I need both the AI receptionist and a website?",
    a: "No — both services are available independently. Many clients start with the AI receptionist since it delivers immediate ROI, and add the website build when they're ready for a new online presence. You can take one or both.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. Your monthly retainer includes active monitoring, maintenance, and a support call each month. If something needs adjusting — scripts, availability, booking rules — we handle it. You just run your business.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 bg-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="FAQ"
          title="GOT"
          titleAccent="QUESTIONS?"
          subtitle="Everything you need to know before we get started."
        />

        <div className="mt-14 border border-gold/15">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`border-b border-gold/10 last:border-b-0 transition-all ${
                  isOpen ? "bg-gold/[0.04]" : "hover:bg-background/40"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left"
                >
                  <span className="font-display text-xl tracking-[0.05em] text-foreground leading-tight">
                    {f.q}
                  </span>
                  <Plus
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-6 text-silver/60 leading-relaxed text-[13px]">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
