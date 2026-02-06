interface BookingData {
  name: string;
  mobile: string;
  email: string;
  tariff: string;
  vehicle: string;
  adults: string;
  children: string;
  destination: string;
  pickup: string;
  drop: string;
  pickupDate: string;
  dropDate: string;
  notes: string;
}

export function buildWhatsAppMessage(data: BookingData): string {
  const lines = [
    `*New Booking Enquiry*`,
    ``,
    `*Personal Details*`,
    `Name: ${data.name}`,
    `Mobile: ${data.mobile}`,
    data.email ? `Email: ${data.email}` : "",
    ``,
    `*Vehicle & Tariff*`,
    `Tariff: ${data.tariff}`,
    `Vehicle: ${data.vehicle}`,
    ``,
    `*Passengers*`,
    `Adults: ${data.adults}`,
    `Children: ${data.children}`,
    ``,
    `*Trip Details*`,
    data.destination ? `Destination: ${data.destination}` : "",
    data.pickup ? `Pickup: ${data.pickup}` : "",
    data.drop ? `Drop: ${data.drop}` : "",
    `Pickup Date: ${data.pickupDate}`,
    `Drop Date: ${data.dropDate}`,
    data.notes ? `\n*Notes*\n${data.notes}` : "",
  ];

  return encodeURIComponent(lines.filter(Boolean).join("\n"));
}
