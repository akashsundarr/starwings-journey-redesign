import { useEffect, useRef } from "react";

import hero1 from "@/assets/ciaz-sen.webp";
import hero2 from "@/assets/urbania-sen.webp";
import hero3 from "@/assets/crysta-sen.webp";

const images = [hero1, hero2, hero3];

export default function Hero() {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    let index = 0;
    const slideWidth = sliderRef.current.clientWidth;

    const interval = setInterval(() => {
      index = (index + 1) % images.length;

      sliderRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
    }, 5000); // 5s is safe

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[85vh] overflow-hidden">
      <div
        ref={sliderRef}
        className="flex h-full overflow-hidden"
      >
        {images.map((src, i) => (
          <div key={i} className="min-w-full h-full">
            <img
              src={src}
              alt={`Hero slide ${i + 1}`}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
