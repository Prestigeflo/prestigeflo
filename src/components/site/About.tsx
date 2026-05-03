import logo from "@/assets/prestigeflo-logo.png";

export function About() {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10 grid md:grid-cols-5 gap-14 items-center">
        <div className="md:col-span-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 hex-clip bg-gold-gradient blur-2xl opacity-40" />
            <div className="relative w-64 h-72 hex-clip bg-gold-gradient p-px">
              <div className="w-full h-full hex-clip bg-surface flex items-center justify-center overflow-hidden">
                <img src={logo} alt="Founder" className="w-44 h-44 object-contain opacity-80" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="text-[10px] tracking-[0.4em] text-gold uppercase mb-4">Who It's For</div>
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground leading-tight">
            Built for practices that can't afford another missed call.
          </h2>
          <p className="mt-5 font-serif text-2xl sm:text-3xl text-gold-gradient leading-snug">
            For dentists. For practice owners. For teams chairside all day.
          </p>
          <div className="mt-6 space-y-4 text-silver/75 leading-relaxed">
            <p>
              PrestigeFlo was built for dental practices where the front desk can't keep up. Every missed call is a missed patient — and a competitor's win. We install AI voice agents that answer every call, screen new patients, and book appointments straight into your practice management software — 24/7, without adding a single seat to payroll.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4 text-xs tracking-[0.25em] uppercase text-silver/50">
            <span className="h-px w-10 bg-gold/40" /> Never miss a call · Never lose a patient · Never overwork your team
          </div>
        </div>
      </div>
    </section>
  );
}