import { useEffect, useState } from "react";

const callScript = [
  { side: "caller", text: "Hi, do you have any availability this week?" },
  { side: "ai", text: "Absolutely — I've got Thursday 9am or 2pm. Which suits?" },
  { side: "caller", text: "Thursday at 9 works." },
  { side: "ai", text: "Perfect — you're booked in." },
] as const;

function CallDemo() {
  const [phase, setPhase] = useState<"ringing" | "answered">("ringing");
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState<"caller" | "ai" | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPhase("answered");
      setCount(callScript.length);
      setConfirmed(true);
      return;
    }

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>((res) => timers.push(setTimeout(res, ms)));

    (async () => {
      while (!cancelled) {
        setPhase("ringing");
        setCount(0);
        setTyping(null);
        setConfirmed(false);
        await wait(1600);
        if (cancelled) return;
        setPhase("answered");
        await wait(500);
        if (cancelled) return;
        for (let i = 0; i < callScript.length; i++) {
          setTyping(callScript[i].side);
          await wait(850);
          if (cancelled) return;
          setTyping(null);
          setCount(i + 1);
          await wait(650);
          if (cancelled) return;
        }
        setConfirmed(true);
        await wait(2600);
      }
    })();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      <style>{`@keyframes callRise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes callBlink{0%,60%,100%{opacity:.25}30%{opacity:1}}`}</style>

      <div className="relative">
        <div className="flex items-center justify-between border-b border-gold/15 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: phase === "answered" ? "#4ade80" : "#c8a855" }}
            />
            <span className="text-[9px] tracking-[0.2em] text-silver/70 uppercase">
              {phase === "answered" ? "Call answered — AI" : "Incoming call · ringing…"}
            </span>
          </div>
          <span
            className="text-[9px] tracking-[0.15em] text-gold/80 uppercase transition-opacity duration-300"
            style={{ opacity: phase === "answered" ? 1 : 0 }}
          >
            Answered · 0.8s
          </span>
        </div>

        <div className="flex flex-col gap-2.5 min-h-[210px]">
          {callScript.slice(0, count).map((m, i) => (
            <div
              key={i}
              className={`flex ${m.side === "ai" ? "justify-end" : "justify-start"}`}
              style={{ animation: "callRise .35s ease both" }}
            >
              <div
                className={
                  m.side === "ai"
                    ? "max-w-[85%] rounded-lg rounded-tr-sm border border-gold/30 bg-gold/10 px-3 py-2 text-[11px] leading-snug text-foreground"
                    : "max-w-[85%] rounded-lg rounded-tl-sm bg-silver/10 px-3 py-2 text-[11px] leading-snug text-silver/80"
                }
              >
                {m.text}
              </div>
            </div>
          ))}

          {typing && (
            <div
              className={`flex ${typing === "ai" ? "justify-end" : "justify-start"}`}
              style={{ animation: "callRise .35s ease both" }}
            >
              <div
                className={`inline-flex gap-1 items-center px-3 py-2.5 rounded-lg ${
                  typing === "ai"
                    ? "rounded-tr-sm border border-gold/30 bg-gold/10"
                    : "rounded-tl-sm bg-silver/10"
                }`}
              >
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="w-[5px] h-[5px] rounded-full"
                    style={{
                      background: "rgba(201,203,209,.6)",
                      animation: "callBlink 1s infinite",
                      animationDelay: `${d * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div
          className="mt-4 flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase transition-all duration-300"
          style={{
            color: "#4ade80",
            opacity: confirmed ? 1 : 0,
            transform: confirmed ? "scale(1)" : "scale(0.9)",
          }}
        >
          <span>✓</span>
          <span>Booking confirmed</span>
        </div>
      </div>

      <div className="relative space-y-3 pt-5 border-t border-gold/15">
        {["AI Receptionist", "Automated Booking", "Call Transcripts", "24/7 Coverage"].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
            <span className="text-[11px] tracking-[0.18em] text-silver/70 uppercase">{item}</span>
          </div>
        ))}
      </div>
    </>
  );
}

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
              className="relative w-full max-w-sm aspect-[3/4] overflow-hidden border border-gold/25 flex flex-col justify-between p-7"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 88%, 86% 100%, 0 100%)",
                background: "linear-gradient(160deg, oklch(0.18 0.03 52), oklch(0.11 0.02 50))",
              }}
            >
              <div className="absolute inset-0 circuit-bg opacity-60" />
              <div className="absolute inset-0"
                style={{ background: "radial-gradient(ellipse at 30% 30%, oklch(0.62 0.11 58 / 0.18), transparent 60%)" }} />
              <div className="relative flex flex-col justify-between h-full">
                <CallDemo />
              </div>
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
