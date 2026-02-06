import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm shadow-sm">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="text-xl font-bold font-display text-primary">
            {siteConfig.name}
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["Home", "hero"],
              ["About", "about"],
              ["Why Us", "why-us"],
              ["Vehicles", "vehicles"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-border py-4 md:hidden animate-fade-in">
            <div className="flex flex-col gap-3">
              {[
                ["Home", "hero"],
                ["About", "about"],
                ["Why Us", "why-us"],
                ["Vehicles", "vehicles"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left text-sm font-medium text-foreground/70 transition-colors hover:text-primary px-2 py-1"
                >
                  {label}
                </button>
              ))}
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground mt-2 justify-center"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
