import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils"; // Standard shadcn utility

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Why Us", id: "why-us" },
  { label: "Vehicles", id: "vehicles" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for sticky header transparency
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 py-3",
        scrolled ? "mt-2" : "mt-0"
      )}
    >
      <div
        className={cn(
          "container mx-auto transition-all duration-300 rounded-2xl border border-transparent",
          scrolled 
            ? "bg-background/80 backdrop-blur-md shadow-lg border-border/50 py-2" 
            : "bg-transparent py-4"
        )}
      >
        <div className="flex items-center justify-between px-4 md:px-6">
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")}>
            <img
              src="/logo.png"
              alt="Starwings Logo"
              className="h-9 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="group relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
                <span className="absolute inset-x-4 bottom-1 h-0.5 scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden md:flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-md transition-all hover:shadow-primary/20 hover:scale-105 active:scale-95"
            >
              <Phone className="h-4 w-4" />
              <span>Book Now</span>
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/50 text-foreground md:hidden"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
            mobileMenuOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="grid gap-2 border-t border-border pt-4 pb-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-muted transition-colors"
              >
                {item.label}
                <ChevronRight size={16} className="text-muted-foreground" />
              </button>
            ))}
            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary py-4 text-sm font-bold text-primary-foreground"
            >
              <Phone size={18} />
              Call Starwings
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}