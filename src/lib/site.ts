/**
 * Flip `hiringOpen` to hide/show the hiring banner and jobs CTA.
 * One-line change — no other files need to move.
 *
 * Hours: edit weeklyHours / holidays in src/lib/hours.ts.
 */
import { hoursDisplayRows } from "./hours";

export const hiringOpen = true;

export const site = {
  name: "Failla's Pizzeria & Ristorante",
  shortName: "Failla's",
  tagline: "Home of the Grandma Pizza",
  description:
    "Family-owned Sicilian restaurant in Phoenixville. Grandma pie, pasta, steaks, salads, catering, and delivery.",
  phone: "610-255-2828",
  phoneHref: "tel:+16102552828",
  email: "mujtaba.valli@gmail.com",
  addressLine: "2669 Charlestown Rd",
  cityLine: "Phoenixville, PA 19460",
  googleListingUrl: "https://maps.app.goo.gl/NchGPaKP2GC58EqC8",
  mapsUrl: "https://maps.app.goo.gl/NchGPaKP2GC58EqC8",
  mapsEmbed:
    "https://maps.google.com/maps?q=2669%20Charlestown%20Rd%20Phoenixville%20PA%2019460&output=embed",
  orderUrl: "https://onlineordering.cmpmobile.com/menu/faillas_pizzeria",
  applyUrl: "https://cmpmobile.formstack.com/forms/faillas_pizzeria_employment",
  doorDashUrl:
    "https://www.doordash.com/store/failla%E2%80%99s-pizzeria-&-ristorante-phoenixville-27685451",
  uberEatsUrl:
    "https://www.ubereats.com/store/faillas-pizzeria-&-ristorante/oOpedRcJUCingV0Udi2bmw",
  facebookUrl: "https://www.facebook.com/FaillasPizzeria/",
  instagramUrl: "https://www.instagram.com/faillaspizza/",
  tiktokUrl: "https://www.tiktok.com/@faillaspizza",
  tripAdvisorUrl:
    "https://www.tripadvisor.com/Restaurant_Review-g53437-d26949019-Reviews-Failla_s_Pizzeria_Restaurant-Phoenixville_Pennsylvania.html",
  tripAdvisorReviewUrl:
    "https://www.tripadvisor.com/UserReviewEdit-g53437-d26949019-Failla_s_Pizzeria_Restaurant-Phoenixville_Pennsylvania.html",
  menuPdf:
    "https://onlineorderingmadeeasy.com/wp-content/uploads/2025/08/Faillas-Menu-2025.07.pdf",
  hours: hoursDisplayRows(),
  notes: [
    "Dine-in, takeout, and delivery",
    "BYOB",
    "Cash purchases receive a 3.99% discount",
    "Outdoor seating · leashed pets welcome on the patio",
    "No reservations — walk-in anytime",
  ],
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/catering", label: "Catering" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;
