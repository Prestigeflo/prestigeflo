import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { Calendar, X } from "lucide-react";

type BookingContextValue = {
  open: () => void;
  close: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

const CALENDAR_SRC = "https://api.leadconnectorhq.com/widget/booking/Puj705HsEF3Ywv6bf60E";

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Inject the LeadConnector form_embed script once so the iframe auto-resizes
  useEffect(() => {
    if (typeof document === "undefined") return;
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://link.msgsndr.com/js/form_embed.js"]'
    );
    if (existing) return;
    const s = document.createElement("script");
    s.src = "https://link.msgsndr.com/js/form_embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  // Close on escape + lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close]);

  return (
    <BookingContext.Provider value={{ open, close }}>
      {children}
      {isOpen && (
        <div
         className="fixed inset-0 z-[100] bg-background/85 backdrop-blur-sm flex items-start justify-center p-4 pt-8 animate-fade-up"
          role="dialog"
          aria-modal="true"
          aria-label="Book a strategy call"
        >
          <div
            className="relative w-full max-w-3xl h-[92vh] max-h-[92vh] rounded-2xl border border-gold/30 bg-surface shadow-elevated overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full border border-gold/30 bg-background/70 flex items-center justify-center text-silver hover:text-gold hover:border-gold/60 transition"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="p-8 pb-4 border-b border-gold/15">
              <div className="text-[10px] tracking-[0.4em] text-gold uppercase mb-2 flex items-center gap-2">
                <Calendar className="w-3 h-3" /> Strategy Call
              </div>
              <h3 className="font-serif text-3xl text-gold-gradient">Pick a time that works for you.</h3>
              <p className="mt-2 text-silver/70 text-sm">30 minutes. No pitch — just a plan.</p>
            </div>
            <div className="flex-1 min-h-0 overflow-auto bg-background/40">
              <iframe
                src={CALENDAR_SRC}
                title="Book a call"
                style={{ width: "100%", height: "100%", minHeight: "900px", border: "none", display: "block" }}
                scrolling="yes"
                id="Puj705HsEF3Ywv6bf60E_lovable"
              />
            </div>
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within a BookingProvider");
  return ctx;
}
