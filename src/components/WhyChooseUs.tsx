import { Settings, Clock, Users, ShieldCheck, Timer, IndianRupee } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Customized Travel Support",
    desc: "From flexible pickup options to travel-friendly vehicle choices, we adapt every trip to your comfort and requirements.",
  },
  {
    icon: Clock,
    title: "Reliable, Every Time",
    desc: "Count on Starwings for consistent service, clear communication, and dependable travel—day or night.",
  },
  {
    icon: Users,
    title: "Trusted by Regular Travelers",
    desc: "Our growing base of satisfied customers chooses us for repeat journeys and referrals.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Journeys",
    desc: "Well-maintained vehicles and experienced drivers ensure your safety throughout the trip.",
  },
  {
    icon: Timer,
    title: "Punctual & Professional",
    desc: "We respect your time with on-time pickups, smooth coordination, and hassle-free drop-offs.",
  },
  {
    icon: IndianRupee,
    title: "Affordable & Transparent Pricing",
    desc: "Honest pricing with no hidden charges—quality travel that fits your budget.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Promise</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl font-display">
            Why Choose Starwings Tours & Travels
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-xl border border-border bg-card p-7 transition-all hover:shadow-lg hover:border-primary/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
