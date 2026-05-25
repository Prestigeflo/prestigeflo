import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeader } from "./Services";

const faqs = [
  { q: "How long does setup take?", a: "Most systems are fully built and deployed within 1–2 weeks of the discovery call." },
  { q: "What if I cancel?", a: "Cancel anytime with 30 days notice." },
  { q: "Do you offer refunds?", a: "If we haven't started the build, full refund. Once active, we don't refund completed work — but we'll make it right." },
  { q: "Is my data secure?", a: "We follow least-privilege access, encrypted credentials, isolated environments, and your data never trains third-party models. Full audit trail available." },
  { q: "What's included in monthly maintenance?", a: "Uptime monitoring, model updates, integration patches, performance tuning, and a monthly review call." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28 bg-surface relative">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeader eyebrow="FAQ" title="Questions, answered plainly." />
        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-xl border transition-all ${
                  isOpen ? "border-gold/50 bg-background/60" : "border-gold/15 bg-background/30 hover:border-gold/30"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-serif text-lg text-foreground">{f.q}</span>
                  <Plus
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-silver/75 leading-relaxed">{f.a}</p>
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