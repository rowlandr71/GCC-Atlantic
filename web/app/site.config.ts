/**
 * Central site configuration.
 *
 * Everything the rest of the site reads about GCC's identity and contact
 * details lives here, so updating the domain, phone numbers, or email is a
 * one-file change.
 *
 * Changing a value here updates the whole site (metadata, canonical URLs,
 * footer, contact page) in one place.
 */

export const site = {
  // --- Identity -----------------------------------------------------------
  name: "GCC Atlantic",      // full brand name
  shortName: "GCC",          // shortform, used where brevity reads better
  legalName: "GCC Atlantic",
  tagline: "An equity holding and investment company.",

  // --- Domain -------------------------------------------------------------
  domain: "gccatlantic.com",
  url: "https://gccatlantic.com",

  // --- Contact ------------------------------------------------------------
  email: "info@gccatlantic.com",
  phones: ["0702 602 5422", "0814 632 4406", "0806 249 6340"],
  address: {
    line1: "12, Ojoboh",
    line2: "Ajah, Lagos",
    country: "Nigeria",
  },

  // --- Facts (public, from the founding brief) ---------------------------
  incorporation: "A private company limited by shares, incorporated in Nigeria.",
  reportingCurrency: "GBP",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
