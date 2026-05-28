import { useEffect, useState } from "react";
import { useBooking } from "./BookingProvider";
import logo from "@/assets/prestigeflo-logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "Why Us" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { open: openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/92 border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#top" className="flex items-center">
          <img src={logo} alt="PrestigeFlo" className="h-20 w-20 object-contain" style={{ mixBlendMode: "lighten" }} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] tracking-[0.22em] uppercase text-silver/70 hover:text-gold transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-gold-gradient after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={openBooking}
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-gold-gradient text-black text-[11px] font-bold tracking-[0.22em] uppercase shadow-gold hover:shadow-gold-soft hover:-translate-y-0.5 transition-all"
        >
          Free Strategy Call
        </button>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          className="md:hidden text-silver"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gold/15 bg-background/97 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-silver/80 hover:text-gold text-sm tracking-[0.22em] uppercase transition-colors"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); openBooking(); }}
              className="mt-2 inline-flex justify-center px-5 py-3.5 bg-gold-gradient text-black text-sm font-bold tracking-[0.22em] uppercase"
            >
              Free Strategy Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
