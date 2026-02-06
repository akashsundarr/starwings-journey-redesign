import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { validateBooking } from "@/lib/validation";
import { buildWhatsAppMessage } from "@/lib/whatsapp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inputClass =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20";

const labelClass = "block text-sm font-semibold text-foreground mb-2";

export default function Booking() {
  const [searchParams] = useSearchParams();
  const preselectedVehicle = searchParams.get("vehicle") || "";

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    setError(null);
    setIsSubmitting(true);

    const fd = new FormData(e.currentTarget);
    const data = {
      name: fd.get("name")?.toString() || "",
      mobile: fd.get("mobile")?.toString() || "",
      email: fd.get("email")?.toString() || "",
      tariff: fd.get("tariff")?.toString() || "",
      vehicle: fd.get("vehicle")?.toString() || "",
      adults: fd.get("adults")?.toString() || "1",
      children: fd.get("children")?.toString() || "0",
      destination: fd.get("destination")?.toString() || "",
      pickup: fd.get("pickup")?.toString() || "",
      drop: fd.get("drop")?.toString() || "",
      pickupDate: fd.get("pickupDate")?.toString() || "",
      dropDate: fd.get("dropDate")?.toString() || "",
      notes: fd.get("notes")?.toString() || "",
    };

    const validationError = validateBooking({
      name: data.name,
      mobile: data.mobile,
      tariff: data.tariff,
      vehicle: data.vehicle,
      pickupDate: data.pickupDate,
      dropDate: data.dropDate,
    });

    if (validationError) {
      setError(validationError);
      setIsSubmitting(false);
      return;
    }

    const message = buildWhatsAppMessage(data);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${message}`;
    window.open(whatsappUrl, "_blank");
    setIsSubmitting(false);
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <h1 className="text-3xl font-bold text-foreground md:text-4xl font-display">
              Book Your Vehicle
            </h1>
            <p className="mt-3 text-muted-foreground">
              Fill in your trip details below and we'll connect you on WhatsApp with the best options.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-8">
              {error && (
                <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                  <span className="font-semibold">Please fix:</span> {error}
                </div>
              )}

              {/* Personal Details */}
              <fieldset className="space-y-5 rounded-xl border border-border bg-card p-6">
                <legend className="px-2 text-lg font-bold text-foreground font-display">
                  Personal Details
                </legend>
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input id="name" type="text" name="name" placeholder="Enter your full name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="mobile" className={labelClass}>
                    Mobile Number <span className="text-destructive">*</span>
                  </label>
                  <input id="mobile" type="tel" name="mobile" placeholder="10-digit mobile number" maxLength={10} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>
                  <input id="email" type="email" name="email" placeholder="your.email@example.com" className={inputClass} />
                </div>
              </fieldset>

              {/* Vehicle & Tariff */}
              <fieldset className="space-y-5 rounded-xl border border-border bg-card p-6">
                <legend className="px-2 text-lg font-bold text-foreground font-display">
                  Vehicle & Tariff
                </legend>
                <div>
                  <label htmlFor="tariff" className={labelClass}>
                    Choose Tariff <span className="text-destructive">*</span>
                  </label>
                  <select id="tariff" name="tariff" className={inputClass}>
                    <option value="">Select tariff type</option>
                    <option value="Day Basis">Day Basis</option>
                    <option value="KM Basis">KM Basis</option>
                    <option value="Hour Basis">Hour Basis</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="vehicle" className={labelClass}>
                    Select Vehicle <span className="text-destructive">*</span>
                  </label>
                  <select id="vehicle" name="vehicle" defaultValue={preselectedVehicle} className={inputClass}>
                    <option value="">Select vehicle type</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV / Innova">SUV / Innova</option>
                    <option value="Tempo Traveller">Tempo Traveller</option>
                  </select>
                </div>
              </fieldset>

              {/* Passengers */}
              <fieldset className="space-y-5 rounded-xl border border-border bg-card p-6">
                <legend className="px-2 text-lg font-bold text-foreground font-display">
                  Passenger Count
                </legend>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="adults" className={labelClass}>Adults</label>
                    <input id="adults" type="number" name="adults" min={1} defaultValue={1} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="children" className={labelClass}>Children</label>
                    <input id="children" type="number" name="children" min={0} defaultValue={0} className={inputClass} />
                  </div>
                </div>
              </fieldset>

              {/* Trip Details */}
              <fieldset className="space-y-5 rounded-xl border border-border bg-card p-6">
                <legend className="px-2 text-lg font-bold text-foreground font-display">
                  Trip Details
                </legend>
                <div>
                  <label htmlFor="destination" className={labelClass}>Destination</label>
                  <input id="destination" type="text" name="destination" placeholder="Where are you traveling to?" className={inputClass} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="pickup" className={labelClass}>Pickup Location</label>
                    <input id="pickup" type="text" name="pickup" placeholder="Pickup address" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="drop" className={labelClass}>Drop Location</label>
                    <input id="drop" type="text" name="drop" placeholder="Drop-off address" className={inputClass} />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="pickupDate" className={labelClass}>
                      Pickup Date & Time <span className="text-destructive">*</span>
                    </label>
                    <input id="pickupDate" type="datetime-local" name="pickupDate" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="dropDate" className={labelClass}>
                      Drop Date & Time <span className="text-destructive">*</span>
                    </label>
                    <input id="dropDate" type="datetime-local" name="dropDate" className={inputClass} />
                  </div>
                </div>
              </fieldset>

              {/* Additional */}
              <fieldset className="space-y-5 rounded-xl border border-border bg-card p-6">
                <legend className="px-2 text-lg font-bold text-foreground font-display">
                  Additional Information
                </legend>
                <div>
                  <label htmlFor="notes" className={labelClass}>Special Requirements</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    placeholder="Any special requirements or additional information..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 text-base font-bold text-accent-foreground shadow-lg transition-all hover:shadow-xl hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
                {isSubmitting ? "Redirecting to WhatsApp..." : "Send Booking Enquiry on WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
