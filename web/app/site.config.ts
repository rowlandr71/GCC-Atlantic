/**
 * Central site configuration.
 *
 * Everything the rest of the site reads about GCC Atlantic's identity and
 * contact details lives here, so updating the domain, email or address is a
 * one-file change (metadata, canonical URLs, footer, contact and legal pages).
 *
 * Source: "GCC Atlantic Website Copy & Implementation Brief" v2.1, Section 2.
 * No telephone numbers and no reporting currency are published (A-3).
 */

export const site = {
  // --- Identity -----------------------------------------------------------
  name: "GCC Atlantic",              // brand name: titles, headings, search text
  shortName: "GCC",                  // only after "GCC Atlantic" has appeared on a page
  legalName: "GCC Atlantic Limited", // registered company name
  tagline: "An investment holding company.",
  registration: "RC 7059611",

  // --- Domain -------------------------------------------------------------
  domain: "gccatlantic.com",
  url: "https://gccatlantic.com",

  // --- Contact ------------------------------------------------------------
  email: "info@gccatlantic.com",
  address: {
    line1: "No. 12 Ojoboh Street",
    line2: "Ajah, Lagos State",
    country: "Nigeria",
  },

  // --- Official profiles ----------------------------------------------------
  linkedin: "https://www.linkedin.com/company/gcc-atlantic-limited/",

  // --- Facts --------------------------------------------------------------
  legalForm: "A private company limited by shares, incorporated in Nigeria.",
} as const;

/** Registered office on one line. */
export const addressLine = `${site.address.line1}, ${site.address.line2}, ${site.address.country}`;

/** Tagline without the trailing full stop, for titles. */
export const taglineTitle = site.tagline.replace(/\.$/, "");

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalNav = [
  { href: "/important-information", label: "Important information" },
  { href: "/privacy-notice", label: "Privacy notice" },
] as const;
