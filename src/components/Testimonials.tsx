import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Ramesh",
    trip: "Ooty Family Trip",
    text: "Starwings made our family vacation so comfortable. The driver was professional and the vehicle was spotless. Will definitely book again!",
  },
  {
    name: "Karthik Sundaram",
    trip: "Airport Transfer",
    text: "Punctual pickup, clean car, and very reasonable pricing. I use Starwings for all my airport transfers now.",
  },
  {
    name: "Meera Krishnan",
    trip: "Tirupati Pilgrimage",
    text: "Wonderful service for our temple trip. The driver knew all the routes and was extremely helpful throughout the journey.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl font-display">
            What Our Customers Say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.trip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
