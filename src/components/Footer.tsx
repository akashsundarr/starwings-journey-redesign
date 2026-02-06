import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="container-custom">
        <div className="grid gap-8 py-12 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-display">{siteConfig.name}</h3>
            <p className="text-sm text-primary-foreground/70">
              Your trusted travel partner in Coimbatore for local, outstation, and tour packages across India.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm">
              {[
                ["Home", "hero"],
                ["About", "about"],
                ["Vehicles", "vehicles"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Contact</h4>
            <div className="text-sm text-primary-foreground/60 space-y-1">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.address}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 py-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
