import { Calendar } from "lucide-react";
import { useBooking } from "./BookingProvider";

export function FloatingCTA() {
  const { open } = useBooking();

  return (
    <div className="fixed bottom-7 right-7 z-50 flex flex-col items-center gap-2">
      <span className="text-[9px] tracking-[0.3em] text-gold/70 uppercase font-medium">
        Strategy Call
      </span>

      <button
        onClick={open}
        aria-label="Book your free strategy call"
        className="relative w-16 h-16 flex items-center justify-center bg-gold-gradient shadow-gold animate-gold-pulse hover:scale-110 transition-transform duration-200 rounded-full"
      >
        <svg
          className="absolute inset-0 w-full h-full animate-spin-slow opacity-60"
          viewBox="0 0 64 64"
          fill="none"
        >
          <circle
            cx="32"
            cy="32"
            r="29"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 8"
            strokeLinecap="round"
          />
        </svg>
        <Calendar className="w-6 h-6 text-white relative z-10" strokeWidth={2} />
      </button>
    </div>
  );
}
