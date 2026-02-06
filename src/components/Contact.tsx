import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=Hi%20Starwings%2C%20I%20would%20like%20to%20enquire%20about%20a%20trip.`;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name")?.toString() || "";
    const phone = fd.get("phone")?.toString() || "";
    const message = fd.get("message")?.toString() || "";

    const text = encodeURIComponent(
      `Hi Starwings,\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`
    );
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, "_blank");
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Get In Touch</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl font-display">
              Start Your Journey With Starwings
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Share your travel details and our team will assist you with the best vehicle and route options.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-xl border border-border bg-card p-8 text-center">
                  <div className="text-4xl mb-3">✓</div>
                  <p className="font-semibold text-foreground">Thank you for your enquiry!</p>
                  <p className="mt-1 text-sm text-muted-foreground">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Full name"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="10-digit mobile"
                      maxLength={10}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1.5">
                      Travel Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Where are you traveling? Dates, passengers, etc."
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
                  >
                    <Send className="h-4 w-4" />
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 flex flex-col gap-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">WhatsApp Now</p>
                  <p className="text-sm text-muted-foreground">Quick response, instant booking</p>
                </div>
              </a>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-3">
                <h3 className="font-semibold text-foreground">Contact Info</h3>
                <p className="text-sm text-muted-foreground">{siteConfig.phone}</p>
                <p className="text-sm text-muted-foreground">{siteConfig.email}</p>
                <p className="text-sm text-muted-foreground">{siteConfig.address}</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-semibold text-foreground">Availability</h3>
                <p className="text-sm text-muted-foreground mt-1">24/7 support for all bookings.</p>
                <p className="text-sm text-muted-foreground">Response within 30 minutes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
