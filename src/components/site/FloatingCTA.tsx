import { useEffect, useState } from "react";
import { Calendar, X } from "lucide-react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [hide, setHide] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      setVisible(y > vh * 0.6);

      const contact = document.getElementById("contact");
      const footer = document.querySelector("footer");
      const inHidden = [contact, footer].some((el) => {
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top < vh && r.bottom > 0;
      });
      setHide(inHidden);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        onClick={() => setModal(true)}
        className={`group fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 pl-5 pr-6 py-3.5 rounded-full bg-gold-gradient text-black font-medium tracking-wide animate-gold-pulse hover:scale-105 transition-all duration-300 ${
          visible && !hide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <Calendar className="w-4 h-4" />
        <span>Book a Call</span>
      </button>

      {modal && (
        <div
          className="fixed inset-0 z-[60] bg-background/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setModal(false)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl border border-gold/30 bg-surface shadow-elevated overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-silver hover:text-gold hover:border-gold/60 transition"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="p-8 pb-4">
              <div className="text-[10px] tracking-[0.4em] text-gold uppercase mb-2">Strategy Call</div>
              <h3 className="font-serif text-3xl text-gold-gradient">Let's find the leaks.</h3>
              <p className="mt-2 text-silver/70 text-sm">30 minutes. No pitch. Pick a time below.</p>
            </div>
            <div className="aspect-video bg-background/60 border-t border-gold/15 flex items-center justify-center">
              {/* Placeholder iframe slot — wire up Calendly / GoHighLevel later */}
              <div className="text-center px-8">
                <Calendar className="w-10 h-10 text-gold mx-auto mb-3" />
                <div className="text-silver/70 text-sm">Calendar embed slot</div>
                <div className="text-silver/40 text-xs mt-1">Drop your Calendly or GoHighLevel iframe here.</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}