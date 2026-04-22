import { Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/prestigeflo-logo.png";

export function Footer() {
  return (
    <footer className="bg-background border-t border-gold/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="PrestigeFlo Systems" className="h-12 w-12" />
              <div>
                <div className="font-serif text-xl text-gold-gradient">PrestigeFlo Systems</div>
                <div className="text-[10px] tracking-[0.3em] text-silver/60 uppercase">AI Agency</div>
              </div>
            </div>
            <p className="mt-5 text-silver/60 text-sm max-w-sm leading-relaxed">
              Custom AI systems for operators who refuse to stay stuck.
            </p>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.3em] text-gold uppercase mb-4">Site</div>
            <ul className="space-y-2 text-silver/70 text-sm">
              <li><a href="#services" className="hover:text-gold transition">Services</a></li>
              <li><a href="#process" className="hover:text-gold transition">Process</a></li>
              <li><a href="#pricing" className="hover:text-gold transition">Pricing</a></li>
              <li><a href="#faq" className="hover:text-gold transition">FAQ</a></li>
              <li><a href="#contact" className="hover:text-gold transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.3em] text-gold uppercase mb-4">Connect</div>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-silver/70 hover:text-gold hover:border-gold/60 transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="mt-5 text-silver/60 text-sm">admin@prestigeflo.com</div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-silver/50">
          <div>© {new Date().getFullYear()} PrestigeFlo Systems. All rights reserved.</div>
          <div className="tracking-[0.25em] uppercase">Built quietly. Deployed precisely.</div>
        </div>
      </div>
    </footer>
  );
}