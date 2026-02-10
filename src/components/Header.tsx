


import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Why Us", id: "why-us" },
  { label: "Vehicles", id: "vehicles" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="w-full border-b border-border bg-white">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollTo("hero")}
          >
            <img
              src="/logo.png"
              alt="Company Logo"
              className="h-20 w-auto"
            />
          </div>

          {/* Center Nav (Desktop) */}
          <nav className="hidden lg:flex items-center rounded-full border border-border px-6 py-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "px-4 text-sm font-medium transition-colors",
                  index === 0
                    ? "text-orange-500"
                    : "text-foreground hover:text-primary"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Booking Info (Desktop) */}
          <div className="hidden lg:flex flex-col items-end gap-1">
            <span className="text-sm font-semibold text-foreground">
              For Booking
            </span>
            <a
              href={`tel:${siteConfig.phone}`}
              className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
            >
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-xs text-muted-foreground"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-md border border-border"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            mobileOpen ? "max-h-[500px] pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-base font-medium text-foreground"
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Booking */}
            <div className="mt-4 flex flex-col items-start gap-2">
              <span className="text-sm font-semibold">For Booking</span>
              <a
                href={`tel:${siteConfig.phone}`}
                className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
              >
                {siteConfig.phone}
              </a>
              <span className="text-xs text-muted-foreground">
                {siteConfig.email}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
