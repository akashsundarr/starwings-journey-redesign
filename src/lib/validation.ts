interface BookingValidation {
  name: string;
  mobile: string;
  tariff: string;
  vehicle: string;
  pickupDate: string;
  dropDate: string;
}

export function validateBooking(data: BookingValidation): string | null {
  if (!data.name.trim()) return "Please enter your full name.";
  if (data.name.trim().length > 100) return "Name must be under 100 characters.";

  if (!data.mobile.trim()) return "Please enter your mobile number.";
  if (!/^\d{10}$/.test(data.mobile.trim())) return "Please enter a valid 10-digit mobile number.";

  if (!data.tariff) return "Please select a tariff type.";
  if (!data.vehicle) return "Please select a vehicle type.";

  if (!data.pickupDate) return "Please select a pickup date & time.";
  if (!data.dropDate) return "Please select a drop date & time.";

  if (new Date(data.pickupDate) < new Date()) return "Pickup date must be in the future.";
  if (new Date(data.dropDate) <= new Date(data.pickupDate)) return "Drop date must be after pickup date.";

  return null;
}
