# GCC Atlantic — Corporate Website

The corporate website and web-app foundation for **GCC Atlantic Limited**, an
investment holding company. Built with [Next.js](https://nextjs.org/) (App
Router, TypeScript) and self-hosted fonts, exported as a static site and served
by Cloudflare Workers.

Copy source: *GCC Atlantic Website Copy & Implementation Brief*, version 2.1
(16 November 2026). Section references (A-1 … A-25, C1 … C7) below refer to it.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000 (no /api route: the contact form shows its failure message)
```

Other scripts:

```bash
npm run build    # static export to out/
npm run preview  # build, then serve out/ + the Worker locally with Wrangler (tests the form end to end)
npm run deploy   # build, then deploy to Cloudflare
npm run lint     # lint
```

## Project structure

```
app/
  layout.tsx                    Root layout, fonts, site-wide metadata
  page.tsx                      Home
  about/page.tsx                About
  contact/page.tsx              Contact
  important-information/page.tsx  Legal: Important information (counsel-approved, C3)
  privacy-notice/page.tsx       Legal: Privacy notice (counsel-approved, C3)
  site.config.ts                ← Single source of truth: name, legal name, RC, domain, email, address
  globals.css                   Design system (palette, typography, components)
  components/
    Header.tsx                  Sticky header + nav
    Footer.tsx                  Footer: legal name, RC, nav, legal links, contact, auto copyright year
    CurrentYear.tsx             Copyright year, always current
    ContactForm.tsx             Contact form, posts JSON to /api/contact
    LegalPage.tsx               Shared layout for the legal pages
    Logo.tsx                    "A" monogram mark (shared by header + footer)
  icon.png                      Favicon — the "A" monogram
worker/
  index.ts                      Cloudflare Worker: /api/contact → emails info@gccatlantic.com
public/
  logo-mark.png                 On-page logo, transparent background
  logo-original.png             Untrimmed source artwork
wrangler.jsonc                  Cloudflare config: static assets + Worker for /api/*
```

## Editing content

Company identity and contact details live in **`app/site.config.ts`**. Change
them there and the whole site (metadata, footer, contact and legal pages)
updates. No telephone numbers and no reporting currency are published.

## Contact form

The form submits server-side to `/api/contact`, handled by `worker/index.ts`,
which emails the enquiry to `info@gccatlantic.com` over HTTPS. Nothing is
stored. Spam protection is non-tracking (honeypot field + minimum
time-to-submit, both checked on the server); there are no third-party scripts.

Email is sent through [Resend](https://resend.com). Setup (completed at launch, 17 November 2026):

1. Verify `gccatlantic.com` as a sending domain with the provider (DNS records).
2. `npx wrangler secret put RESEND_API_KEY`
3. Optional: set `CONTACT_TO` / `CONTACT_FROM` as Worker variables.
4. Test validation, a successful submission, mailbox delivery and the failure
   message on staging (A-19).

To use a different provider, replace `sendEmail()` in `worker/index.ts`.

## Fonts

Fonts are **self-hosted** via `@fontsource-variable/*` (Fraunces for display,
Inter for body). There is no runtime request to Google Fonts, so the site
builds and runs fully offline.

## Launch items

Site launched at https://gccatlantic.com on 17 November 2026. Draft badges were
removed once their launch conditions closed (A-23).

| Item | Where | Status |
| --- | --- | --- |
| **Mission statement** | Home: Who we are | Closed 17 Nov 2026. Badge removed after C1 and C4 |
| **Capital stewardship principles** | Home: What guides us | Closed 17 Nov 2026. Badge removed after C1 and C4. Replace the set when the Board signs the Final Five Core Values |
| **Leadership sentence** | About: Leadership | Closed 17 Nov 2026. Badge removed after C1 and C4. Still no names, titles, photos or bios |
| **Legal pages** | Important information, Privacy notice | Closed 17 Nov 2026. Counsel's wording approved (C3); badge and `noindex` removed. Any text change needs counsel review again, unless a director approves it in writing with counsel review waived (as for the 22 Nov 2026 "Cookies and analytics" change) |
| **Privacy notice date** | `app/privacy-notice/page.tsx` (`LAST_UPDATED`) | Set to 22 Nov 2026 for the "Cookies and analytics" change. Update on every change |
| **Cookies statement** | Privacy notice | Closed 22 Nov 2026. Rewritten as "Cookies and analytics" to disclose cookieless Cloudflare Web Analytics; approved by the CTO and director, counsel review waived. Still accurate only while no analytics/advertising cookies are set (C7) |
| **Domain + mailbox** | Cloudflare / Google Workspace | Closed 17 Nov 2026. `gccatlantic.com` served by the Worker; `www` 301-redirects to the apex; `info@gccatlantic.com` live (C2, A-25) |
| **Contact form email provider** | `worker/index.ts`, Resend | Closed 17 Nov 2026. `gccatlantic.com` verified in Resend; send-only `RESEND_API_KEY` set as a Worker secret; tested live |
| **Optional "structured finance and venture debt" sentence** | About: How we invest | Closed 17 Nov 2026: omitted at launch. Add only after the C6 approvals and C3 review are recorded |
| **Remaining page copy** | All pages | Closed 17 Nov 2026. Board approved (C4) |
| **Cloudflare Web Analytics** | Cloudflare dashboard | Approved 22 Nov 2026 by the CTO and director (counsel review waived). Switch on only after the updated Privacy notice is deployed |

### Content guardrails (from the founding brief)

- **No figures from the Investment Policy Statement (IPS).** Return targets,
  rates, limits, thresholds, exclusion lists, and any numeric/financial policy
  detail are confidential and must never appear in public copy. Only the
  *general character* of GCC Atlantic's discipline is reflected.
- **No director names/photos/bios** until explicitly approved in writing.
- **No holdings, performance or third-party fund-management claims.**
- **No hype, no stock imagery.** Restraint is the brand.
