export function About() {
  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-0 circuit-bg pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: "radial-gradient(ellipse at 50% 0%, oklch(0.62 0.11 58 / 0.12), transparent 55%)" }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Visual column */}
          <div className="relative order-2 md:order-1 flex justify-center">
            <div className="absolute -inset-8 bg-gold/8 blur-3xl rounded-full" />
            <div
              className="relative w-full max-w-sm aspect-[3/4] overflow-hidden border border-gold/25 flex flex-col justify-end p-8"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 88%, 86% 100%, 0 100%)",
                background: "linear-gradient(160deg, oklch(0.18 0.03 52), oklch(0.11 0.02 50))",
              }}
            >
              <div className="absolute inset-0 circuit-bg opacity-60" />
              <div className="absolute inset-0"
                style={{ background: "radial-gradient(ellipse at 30% 30%, oklch(0.62 0.11 58 / 0.18), transparent 60%)" }} />
              <div className="relative space-y-4">
                {["AI Receptionist", "Automated Booking", "Call Transcripts", "24/7 Coverage"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-[12px] tracking-[0.18em] text-silver/70 uppercase">{item}</span>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-gold/50 translate-x-3 translate-y-3" />
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-gold/25 -translate-x-3 -translate-y-3" />
          </div>

          {/* Text column */}
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[10px] tracking-[0.42em] text-gold uppercase">
                About PrestigeFlo
              </span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wide text-foreground leading-[0.9]">
              EVERY CALL.
              <br />
              <span className="text-gold-gradient">EVERY JOB.</span>
              <br />
              NEVER MISSED.
            </h2>

            <div className="mt-8 space-y-4 text-silver/65 leading-relaxed text-[15px]">
              <p>
                PrestigeFlo builds and manages AI phone receptionists for
                businesses where the phone is money. Trades, clinics, salons,
                real estate — if a missed call means a missed job, we can fix that.
              </p>
              <p>
                We train your AI on your business, connect it to your calendar,
                and set it live. Every call answered. Every lead captured.
                Every booking confirmed — 24/7, without adding a single person
                to payroll.
              </p>
              <p>
                No fluff. No overcomplicated tech. Just a system that pays for
                itself — fast.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { number: "24/7", label: "Always answers" },
                { number: "0", label: "Missed calls" },
                { number: "2 wks", label: "To go live" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border-l-2 border-gold/30 pl-4"
                >
                  <div className="font-display text-3xl text-gold tracking-wider leading-none">
                    {stat.number}
                  </div>
                  <div className="text-silver/40 text-[10px] tracking-[0.22em] uppercase mt-1.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
