import { vehicles } from "@/lib/site-config";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./Vehicles.css";
import lineupImg from "@/assets/line-up.png";

export default function Vehicles() {
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const autoScrollInterval = useRef<number | null>(null);
  const autoScrollRuns = useRef(0);
  const AUTO_SCROLL_LIMIT = 2;

  /* --------------------------------------------------
     Helpers
  -------------------------------------------------- */
  const getCardWidth = () => {
    const slider = sliderRef.current;
    if (!slider) return 0;
    const card = slider.firstElementChild as HTMLElement | null;
    if (!card) return 0;
    return card.offsetWidth + 24; // gap = 24px
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  const scrollByCards = (direction: "next" | "prev") => {
    const slider = sliderRef.current;
    if (!slider) return;

    stopAutoScroll();

    const offset = getCardWidth();
    if (offset === 0) return;

    slider.scrollBy({
      left: direction === "next" ? offset : -offset,
      behavior: "smooth",
    });
  };

  /* --------------------------------------------------
     Auto-scroll (mobile + desktop)
  -------------------------------------------------- */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Delay until layout & images settle
    const start = window.setTimeout(() => {
      autoScrollInterval.current = window.setInterval(() => {
        const offset = getCardWidth();
        if (offset === 0) return;

        if (autoScrollRuns.current >= AUTO_SCROLL_LIMIT) {
          stopAutoScroll();
          return;
        }

        slider.scrollBy({
          left: offset,
          behavior: "smooth",
        });

        autoScrollRuns.current += 1;
      }, 3500);
    }, 800); // small delay = critical

    return () => {
      clearTimeout(start);
      stopAutoScroll();
    };
  }, []);

  /* --------------------------------------------------
     Stop on real user interaction
  -------------------------------------------------- */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const stop = () => stopAutoScroll();

    slider.addEventListener("wheel", stop, { passive: true });
    slider.addEventListener("touchstart", stop);

    return () => {
      slider.removeEventListener("wheel", stop);
      slider.removeEventListener("touchstart", stop);
    };
  }, []);

  return (
    <section id="vehicles" className="section-padding bg-secondary">
      <div className="container-custom relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl font-display">
            Best Travel Operator in Coimbatore
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choose from our well-maintained vehicles for a safe, comfortable,
            and affordable journey.
          </p>
        </div>

        {/* Arrows (desktop only) */}
        <button
          onClick={() => scrollByCards("prev")}
          className="
            hidden lg:flex
            absolute left-0 top-1/2 -translate-y-1/2
            z-10
            h-10 w-10 items-center justify-center
            rounded-full bg-background shadow
            hover:bg-muted
          "
        >
          ◀
        </button>

        <button
          onClick={() => scrollByCards("next")}
          className="
            hidden lg:flex
            absolute right-0 top-1/2 -translate-y-1/2
            z-10
            h-10 w-10 items-center justify-center
            rounded-full bg-background shadow
            hover:bg-muted
          "
        >
          ▶
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="
            mt-14
            flex gap-6
            overflow-x-auto
            hide-scrollbar
            scroll-smooth
            snap-x snap-mandatory
            pb-4
          "
        >
          {vehicles.map((v) => (
            <div
              key={v.id}
              className="
                snap-center
                min-w-[85%]
                sm:min-w-[60%]
                md:min-w-[45%]
                lg:min-w-[32%]
                rounded-2xl
                bg-card
                p-6
                shadow-sm
                transition-transform duration-300 ease-out
                hover:-translate-y-1
              "
            >
              <p className="text-sm font-medium text-muted-foreground">
                {v.seats}
              </p>

              <h3 className="mt-1 text-xl font-bold text-foreground">
                {v.name}
              </h3>

              <hr className="my-4 border-border" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">
                    Rent
                  </p>
                  <p className="text-xl font-bold text-primary">
                    ₹{v.pricePerDay}
                    <span className="text-sm font-medium text-muted-foreground">
                      {" "}
                      / day
                    </span>
                  </p>
                </div>

                <button
                  onClick={() => navigate(v.ctaLink)}
                  className="
                    rounded-lg
                    bg-primary
                    px-4 py-2
                    text-sm font-semibold
                    text-primary-foreground
                    hover:bg-primary/90
                  "
                >
                  Book Now
                </button>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                {v.freeKm} km{" "}
                <span className="font-semibold text-foreground">FREE</span> |
                Extra per km ₹{v.extraKmRate}
              </p>

              <div className="mt-6 flex justify-center">
                <img
                  src={v.image}
                  alt={v.name}
                  className="h-36 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
  {/* Optional heading (remove if not needed) */}
  <div className="mx-auto max-w-6xl text-center px-4">
    <h3 className="text-2xl font-bold text-foreground md:text-3xl">
      Our Vehicle Fleet
    </h3>
    <p className="mt-3 text-muted-foreground">
      A complete range of vehicles for every travel need.
    </p>
  </div>

  {/* Full-width lineup */}
  <div className="mt-10 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
  <div
    className="
      mx-auto
      w-full
      max-w-none

      /* HEIGHT CONTROL */
      min-h-[260px]
      sm:min-h-[340px]
      md:min-h-[420px]
      lg:min-h-[520px]
      xl:min-h-[600px]

      /* ASPECT RATIO BACKUP */
      aspect-[16/6]
      sm:aspect-[16/5]
      md:aspect-[16/4.2]
    "
  >
    <img
      src={lineupImg}
      alt="Complete vehicle fleet lineup"
      loading="lazy"
      className="
        h-full
        w-full
        object-contain
        drop-shadow-2xl
      "
    />
  </div>
</div>

</div>

      </div>
    </section>
  );
}
