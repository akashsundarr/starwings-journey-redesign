import ciazImg from "@/assets/ciaz.webp";
import innovaImg from "@/assets/innova-crysta.webp";
import tempoImg from "@/assets/tempo-travellor.webp";
import urbaniaImg from "@/assets/urbania.webp";
import benzImg from "@/assets/benz-c-class.jpg";
import coachImg from "@/assets/coach-non-ac.webp";


export const siteConfig = {
  name: "Starwings Tours & Travels",
  phone: "+91 730606 3033",
  email: "starwingsholidays@gmail.com",
  whatsapp: "917306063033",
  address: "Tamil Nadu, India",
};


export const vehicles = [
  {
    id: "ciaz",
    category: "Sedan",
    seats: "5 Seater",
    name: "Maruti Suzuki Ciaz",
    pricePerDay: 3500,
    freeKm: 100,
    extraKmRate: 13,
    image: ciazImg,
    ctaLink: "/booking",
  },
  {
    id: "innova-crysta",
    category: "SUV",
    seats: "7 Seater",
    name: "Toyota Innova Crysta",
    pricePerDay: 4500,
    freeKm: 100,
    extraKmRate: 16,
    image: innovaImg,
    ctaLink: "/booking",
  },
  {
    id: "tempo-traveller",
    category: "Tempo Traveller",
    seats: "12–17 Seater",
    name: "Tempo Traveller",
    pricePerDay: 7500,
    freeKm: 100,
    extraKmRate: 22,
    image: tempoImg,
    ctaLink: "/booking",
  },
  {
    id: "urbania",
    category: "Luxury Van",
    seats: "10–17 Seater",
    name: "Force Urbania",
    pricePerDay: 9000,
    freeKm: 100,
    extraKmRate: 25,
    image: urbaniaImg,
    ctaLink: "/booking",
  },
  {
    id: "benz-c-class",
    category: "Wedding Car Rental",
    seats: "5 Seater",
    name: "Mercedes-Benz C-Class",
    pricePerDay: 15000,
    freeKm: 100,
    extraKmRate: 40,
    image: benzImg,
    ctaLink: "/booking",
  },
  {
    id: "coach-non-ac",
    category: "Coach",
    seats: "40–50 Seater",
    name: "Coach (Non-AC)",
    pricePerDay: 12000,
    freeKm: 100,
    extraKmRate: 30,
    image: coachImg,
    ctaLink: "/booking",
  },
];