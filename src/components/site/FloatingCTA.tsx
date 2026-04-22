import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { useBooking } from "./BookingProvider";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [hide, setHide] = useState(false);
  const { open: openBooking } = useBooking();

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
    <button
      onClick={openBooking}
      className={`group fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 pl-5 pr-6 py-3.5 rounded-full bg-gold-gradient text-black font-medium tracking-wide animate-gold-pulse hover:scale-105 transition-all duration-300 ${
        visible && !hide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Calendar className="w-4 h-4" />
      <span>Book a Call</span>
    </button>
  );
}
