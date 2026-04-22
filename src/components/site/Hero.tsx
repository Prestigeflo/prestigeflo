import { ArrowRight, Play, Sparkles, Activity, Zap, TrendingUp } from "lucide-react";
import logo from "@/assets/prestigeflo-logo.png";
import { useBooking } from "./BookingProvider";

export function Hero() {
  const { open: openBooking } = useBooking();
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden circuit-bg pt-28 pb-20">
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-gold/40 animate-float-slow"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              top: `${(i * 53) % 100}%`,
              left: `${(i * 37) % 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${6 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      {/* Radial glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-50"
           style={{ background: "var(--gradient-radial-gold)" }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-xs tracking-[0.25em] text-gold uppercase mb-8">
            <Sparkles className="w-3.5 h-3.5" /> Currently Accepting New Clients
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            <span className="text-gold-gradient">AI Systems</span>{" "}
            <span className="text-foreground">Built for Tradies</span>{" "}
            <span className="text-silver">Who Refuse to Stay Stuck.</span>
          </h1>

          <p className="mt-8 text-lg text-silver/80 max-w-xl leading-relaxed">
            We design and deploy custom AI automations for serious business owners — agents that qualify
            leads, workflows that close gaps, and integrations that quietly run the parts of your business
            you shouldn't be touching anymore.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={openBooking}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gold-gradient text-black font-medium tracking-wide shadow-gold hover:shadow-gold-soft transition-all hover:-translate-y-0.5"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-gold/50 text-gold tracking-wide hover:bg-gold/10 transition-all"
            >
              <Play className="w-4 h-4" /> See What We Build
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-xs tracking-[0.2em] uppercase text-silver/50">
            <span>Full system ownership</span>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -inset-6 rounded-3xl opacity-60"
               style={{ background: "var(--gradient-radial-gold)" }} />
          <div className="relative">
            <div className="absolute -top-10 -right-6 w-44 h-44 hex-clip bg-gold-gradient/20 blur-2xl" />
            <div className="relative rounded-2xl border border-gold/25 bg-surface/80 backdrop-blur-sm p-6 shadow-elevated overflow-hidden">
              <div className="absolute inset-0 circuit-bg opacity-30" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img src={logo} alt="" className="w-9 h-9" />
                    <div>
                      <div className="text-[11px] tracking-[0.25em] text-silver/60 uppercase">Live System</div>
                      <div className="text-sm text-foreground">PF Operator Console</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-gold tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" /> ONLINE
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { icon: Activity, label: "Leads / 24h", value: "147" },
                    { icon: Zap, label: "Avg Reply", value: "38s" },
                    { icon: TrendingUp, label: "Booked", value: "23" },
                  ].map((s, i) => (
                    <div key={i} className="rounded-lg border border-gold/15 bg-background/40 p-3">
                      <s.icon className="w-3.5 h-3.5 text-gold mb-2" />
                      <div className="text-[10px] text-silver/60 uppercase tracking-wider">{s.label}</div>
                      <div className="font-serif text-xl text-gold-gradient">{s.value}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2.5">
                  {[
                    { name: "Inbound qualified", v: 92 },
                    { name: "Calendar synced", v: 76 },
                    { name: "Follow-up sent", v: 88 },
                  ].map((row) => (
                    <div key={row.name}>
                      <div className="flex justify-between text-[11px] text-silver/70 mb-1">
                        <span>{row.name}</span>
                        <span className="text-gold">{row.v}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-background/60 overflow-hidden">
                        <div className="h-full bg-gold-gradient relative" style={{ width: `${row.v}%` }}>
                          <div className="absolute inset-0 animate-shimmer" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-gold/15 flex items-center gap-2">
                  <div className="flex-1 text-[11px] text-silver/60">
                    <span className="text-electric">●</span> All systems operational
                  </div>
                  <div className="text-[11px] text-gold">+12.4% wk</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}