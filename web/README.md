# GCC — Corporate Website

The corporate website and web-app foundation for **GCC**, an equity holding and
investment company. Built with [Next.js](https://nextjs.org/) (App Router,
TypeScript) and self-hosted fonts.

This repository is the home for GCC's web presence and is structured to grow
into the broader web app and automation work over time.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

## Project structure

```
app/
  layout.tsx          Root layout, fonts, site-wide metadata
  page.tsx            Home
  about/page.tsx      About
  contact/page.tsx    Contact
  site.config.ts      ← Single source of truth: name, domain, contact details
  globals.css         Design system (palette, typography, components)
  components/
    Header.tsx        Sticky header + nav
    Footer.tsx        Footer with contact block
    ContactForm.tsx   Client-side mailto form (no backend yet)
  icon.svg            Favicon (monogram placeholder)
```

## Editing content

Almost everything company-specific lives in **`app/site.config.ts`** — the
domain, email, phone numbers, and registered address. Change it there and the
whole site (metadata, footer, contact page) updates.

## Fonts

Fonts are **self-hosted** via `@fontsource-variable/*` (Fraunces for display,
Inter for body). There is no runtime request to Google Fonts, so the site
builds and runs fully offline.

## ⚠️ Placeholders awaiting real input

The following are **draft placeholders** flagged in the UI. They must be
confirmed before this site goes public:

| Item | Where | Status |
| --- | --- | --- |
| **Mission statement** | Home page | `[DRAFT — pending director sign-off]` |
| **Values wording** | Home page | `[DRAFT — pending sign-off]`, thematic only |
| **Director bios / board section** | About page | Reserved placeholder — **no names published until each director explicitly approves** |
| **Logo / wordmark** | Header, footer, `icon.svg` | Text monogram placeholder — replace with real mark when available |
| **Contact form backend** | `app/components/ContactForm.tsx` | Opens the visitor's mail client; add a server handler when required |

### Content guardrails (from the founding brief)

- **No figures from the Investment Policy Statement (IPS).** Return targets,
  rates, limits, thresholds, exclusion lists, and any numeric/financial policy
  detail are confidential and must never appear in public copy. Only the
  *general character* of GCC's discipline is reflected.
- **No director names/photos/bios** until explicitly approved in writing.
- **No hype, no stock imagery.** Restraint is the brand.
