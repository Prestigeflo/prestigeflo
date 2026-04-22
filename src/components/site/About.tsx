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
          <div className="text-[10px] tracking-[0.4em] text-gold uppercase mb-4">The Founder</div>
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground leading-tight">
            Built by an operator. <span className="text-gold-gradient italic">For operators.</span>
          </h2>
          <div className="mt-6 space-y-4 text-silver/75 leading-relaxed">
            <p>
              PrestigeFlo Systems was founded after years of running operations at companies that grew faster than they could be managed. The pattern was always the same: smart owners, capable teams, and a thousand small leaks no one had time to fix.
            </p>
            <p>
              We exist to close those leaks — quietly, permanently, and at a level of craft that most agencies don't bother with. No buzzwords, no bloat. Just systems that work, owned by you.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4 text-xs tracking-[0.25em] uppercase text-silver/50">
            <span className="h-px w-10 bg-gold/40" /> Selective intake · 6 clients per quarter
          </div>
        </div>
      </div>
    </section>
  );
}