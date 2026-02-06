import { useNavigate } from "react-router-dom";
import { vehicles } from "@/lib/site-config";
import sedanImg from "@/assets/vehicle-sedan.jpg";
import suvImg from "@/assets/vehicle-suv.jpg";
import tempoImg from "@/assets/vehicle-tempo.jpg";

const imageMap: Record<string, string> = {
  sedan: sedanImg,
  suv: suvImg,
  tempo: tempoImg,
};

export default function Vehicles() {
  const navigate = useNavigate();

  return (
    <section id="vehicles" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Fleet</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl font-display">
            Choose the Right Vehicle for Your Journey
          </h2>
          <p className="mt-4 text-muted-foreground">
            From solo travel to family trips and group tours, our vehicle options are maintained for comfort and reliability.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v) => (
            <div
              key={v.id}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={imageMap[v.image]}
                  alt={v.name}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">{v.name}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
                <div className="mt-1 text-sm text-muted-foreground">{v.seats} · {v.ideal}</div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-primary">{v.startingPrice}</span>
                  <span className="text-sm text-muted-foreground">starting</span>
                </div>
                <button
                  onClick={() => navigate(`/booking?vehicle=${encodeURIComponent(v.name)}`)}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Book This Vehicle →
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          *Prices are indicative and may vary based on trip details, distance, and duration.
        </p>
      </div>
    </section>
  );
}
