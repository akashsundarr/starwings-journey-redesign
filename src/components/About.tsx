import { MapPin, ShieldCheck, Compass } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl font-display text-balance">
              Travel With Confidence. Travel With Starwings.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              With a strong understanding of customer needs, Starwings Tours & Travels goes beyond just transportation.
              We focus on comfort, safety, and transparent service to create journeys that customers remember positively.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether it's a peaceful hill-station trip, a temple visit across South India, an airport transfer,
              or an outstation journey, Starwings is here to guide you every mile of the way.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: MapPin, title: "Pan-India Coverage", desc: "From Coimbatore to anywhere in India" },
              { icon: ShieldCheck, title: "Safety First", desc: "Well-maintained vehicles, vetted drivers" },
              { icon: Compass, title: "Custom Itineraries", desc: "Trips tailored to your schedule" },
              { icon: MapPin, title: "Local Expertise", desc: "Deep knowledge of South Indian routes" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl bg-card p-6 shadow-sm border border-border transition-shadow hover:shadow-md"
              >
                <item.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-3 font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
