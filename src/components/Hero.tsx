import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  const navigate = useNavigate();
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=Hi%20Starwings%2C%20I%20would%20like%20to%20enquire%20about%20a%20trip.`;

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Scenic Indian road trip"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />

      <div className="container-custom relative z-10 py-20 md:py-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl font-display text-balance">
            Explore India With Trusted Travel Experts
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85 leading-relaxed">
            At Starwings Tours & Travels, we believe travel should be smooth, affordable, and worry-free.
            From local taxi services to complete tour solutions, we help you travel comfortably with reliable vehicles
            and professional support at every step.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => navigate("/booking")}
              className="rounded-lg bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-lg transition-all hover:shadow-xl hover:brightness-110"
            >
              Book a Vehicle
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground/30 bg-primary-foreground/10 px-8 py-4 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us Instantly
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-primary-foreground/70 text-sm">
            <span className="flex items-center gap-1.5">✓ 24/7 Support</span>
            <span className="flex items-center gap-1.5">✓ No Hidden Charges</span>
            <span className="flex items-center gap-1.5">✓ Trusted Since Years</span>
          </div>
        </div>
      </div>
    </section>
  );
}
