const services = [
  {
    number: "01",
    title: "24/7 AI Reception",
    body: "Your AI receptionist answers every inbound call in your business voice — lunch breaks, after hours, weekends. No missed calls. No voicemail. No customers lost to the competitor down the road.",
  },
  {
    number: "02",
    title: "Caller Qualification",
    body: "Every caller gets asked the right questions — reason for call, job type, urgency, location — so your team only handles the calls that need a human. Everything else is handled automatically.",
  },
  {
    number: "03",
    title: "Automated Booking",
    body: "Appointments booked straight into your calendar with SMS confirmations and reminders. Cancellations get filled from your waiting list. No back-and-forth, no manual entry.",
  },
  {
    number: "04",
    title: "Call Transcripts & Summaries",
    body: "Every call recorded, transcribed, and summarised — delivered straight to you after each call. Full visibility without listening to a single voicemail.",
  },
  {
    number: "05",
    title: "Custom AI Training",
    body: "Your AI is trained on your business — your services, pricing, FAQs, and tone of voice. It sounds like you. Clients won't know the difference.",
  },
  {
    number: "06",
    title: "Website Build",
    body: "A custom, fully responsive website designed and built for your business. Up to 5 pages, booking integration, and deployed to your preferred platform — ready to convert from day one.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 bg-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-0 circuit-bg pointer-events-none" />
      <div className="absolute top-0 right-0 w-[50%] h-[60%] pointer-events-none opacity-60"
           style={{ background: "radial-gradient(ellipse at 80% 10%, oklch(0.62 0.11 58 / 0.10), transparent 60%)" }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="What We Build"
          title="ONE AI."
          titleAccent="SIX CAPABILITIES."
          subtitle="Everything your front desk does — answered, qualified, booked, and reported — without a single extra hire."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 border border-gold/15 divide-y divide-x-0 md:divide-y-0 divide-gold/10">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative bg-surface hover:bg-background/80 p-8 lg:p-10 transition-all duration-300 cursor-default
                ${i < 3 ? "md:border-b md:border-gold/10" : ""}
                ${i % 2 === 0 ? "md:border-r md:border-gold/10" : ""}
                ${i % 3 !== 2 ? "lg:border-r lg:border-gold/10" : ""}
                ${i % 2 !== 0 ? "md:border-r-0" : ""}
              `}
            >
              {/* Gold left border on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="font-display text-6xl text-gold/10 group-hover:text-gold/20 transition-colors leading-none mb-3 select-none">
                  {s.number}
                </div>
                <h3 className="font-display text-2xl tracking-[0.08em] text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-silver/55 leading-relaxed text-[13px]">
                  {s.body}
                </p>
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
  titleAccent,
  subtitle,
  centered = true,
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <div
        className={`inline-flex items-center gap-3 mb-6 ${centered ? "" : ""}`}
      >
        <span className="h-px w-8 bg-gold" />
        <span className="text-[10px] tracking-[0.42em] text-gold uppercase">
          {eyebrow}
        </span>
        <span className="h-px w-8 bg-gold" />
      </div>
      <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wide text-foreground leading-[0.92]">
        {title}
        {titleAccent && (
          <>
            <br />
            <span className="text-gold-gradient">{titleAccent}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="mt-6 text-silver/55 text-[15px] leading-relaxed max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
