import { useState } from "react";
import { ArrowRight, Mail, Phone, Building2, User, MessageSquare } from "lucide-react";
import { useBooking } from "./BookingProvider";

export function FinalCTA() {
  const { open: openBooking } = useBooking();
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 opacity-50"
           style={{ background: "radial-gradient(ellipse at center, oklch(0.78 0.13 86 / 0.15), transparent 60%)" }} />
      <div className="absolute inset-0 circuit-bg opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <div className="text-[10px] tracking-[0.4em] text-gold uppercase mb-5">Ready When You Are</div>
          <h2 className="font-serif text-5xl sm:text-6xl leading-[1.05] text-foreground">
            Ready to put your front desk <span className="text-gold-gradient">on autopilot?</span>
          </h2>
          <p className="mt-6 text-silver/75 text-lg max-w-md leading-relaxed">
            One call. Thirty minutes. We'll map exactly what to automate in your practice first — and what those missed calls and empty chairs are really costing you — whether you hire us or not.
          </p>

          <button
            type="button"
            onClick={openBooking}
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-gradient text-black font-medium tracking-wide shadow-gold hover:shadow-gold-soft transition-all"
          >
            Book a Call <ArrowRight className="w-4 h-4" />
          </button>

          <div className="mt-12 space-y-3 text-silver/70 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold" />
              <span>admin@prestigeflo.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold" />
              <span>By appointment only</span>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    try {
      const subject = `New inquiry from ${data.name || "website"}`;
      const body =
        `Name: ${data.name || ""}\n` +
        `Email: ${data.email || ""}\n` +
        `Phone: ${data.phone || ""}\n` +
        `Company: ${data.company || ""}\n\n` +
        `What they want to automate:\n${data.message || ""}`;
      window.location.href = `mailto:admin@prestigeflo.com?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      setSent(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      id="contact-form"
      onSubmit={onSubmit}
      className="rounded-2xl border border-gold/25 bg-surface/80 backdrop-blur p-8 shadow-elevated"
    >
      <h3 className="font-serif text-2xl text-gold-gradient mb-1">Tell us what to automate.</h3>
      <p className="text-silver/60 text-sm mb-6">We'll respond within one business day.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field icon={User} name="name" placeholder="Full name" required />
        <Field icon={Mail} name="email" type="email" placeholder="Email" required />
        <Field icon={Phone} name="phone" placeholder="Phone" />
        <Field icon={Building2} name="company" placeholder="Company" />
      </div>

      <div className="mt-4 relative">
        <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gold/70" />
        <textarea
          name="message"
          rows={4}
          required
          placeholder="What are you trying to automate?"
          className="w-full pl-11 pr-4 py-3 rounded-lg bg-background/60 border border-gold/20 text-foreground placeholder:text-silver/40 focus:border-gold/60 focus:outline-none focus:shadow-gold-soft transition resize-none"
        />
      </div>

      <button
        disabled={loading || sent}
        className="mt-6 w-full px-7 py-4 rounded-full bg-gold-gradient text-black font-medium tracking-wide shadow-gold hover:shadow-gold-soft transition-all disabled:opacity-70"
      >
        {sent ? "Received — we'll be in touch." : loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}

function Field({
  icon: Icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="relative">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/70" />
      <input
        {...props}
        className="w-full pl-11 pr-4 py-3 rounded-lg bg-background/60 border border-gold/20 text-foreground placeholder:text-silver/40 focus:border-gold/60 focus:outline-none focus:shadow-gold-soft transition"
      />
    </div>
  );
}