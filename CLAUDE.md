# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository shape

This is the working repository for **GCC Atlantic** — a Nigerian equity holding
and investment company. It is a growing monorepo: today it holds only the
corporate website under `web/`, but the top-level layout reserves room for a
future `app/` (web application) and `automations/`. Keep new top-level concerns
as sibling directories rather than folding them into `web/`.

All commands below run from **`web/`**, not the repo root.

## Commands

```bash
cd web
npm install
npm run dev      # dev server → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # next lint (no standalone eslint config; Next's default)
```

There is **no test suite** wired up yet — do not assume `npm test` exists.

## Architecture

Next.js 15 (App Router) + React 19 + TypeScript, no CSS framework and no UI
library. Understanding these three conventions is enough to work productively:

1. **`web/app/site.config.ts` is the single source of truth** for everything
   company-specific: brand name, domain, email, phones, address, incorporation
   facts, reporting currency, and the primary nav array. Metadata, canonical
   URLs, the footer, and the contact page all read from it. Change identity or
   contact details **here**, never inline in a component.

2. **Styling is one global stylesheet, not modules or Tailwind.**
   `web/app/globals.css` holds the entire design system — CSS custom properties
   for the palette/type scale plus a fixed vocabulary of semantic class names
   (`.section`, `.section--dark`, `.container`, `.split`, `.eyebrow`, `.hero`,
   `.card`, `.pillar`, `.deflist`/`.defrow`, `.btn`/`.btn--primary`, `.draft`).
   Build pages by composing these classes. Reach for inline `style={{…}}` only
   for one-off `clamp()` sizing, as the existing pages do. Before inventing a
   class, check whether one already exists.

3. **Fonts are self-hosted via `@fontsource-variable/*`** (Fraunces for display,
   Inter for body), imported in `layout.tsx` and wired to `--font-serif` /
   `--font-sans` in `globals.css`. There is **no runtime call to Google Fonts** —
   the site must build and run fully offline. Do not reintroduce `next/font` or
   any external font request.

Path alias: `@/*` maps to the `web/` root (see `tsconfig.json`), so imports read
`@/app/site.config`. Pages are Server Components by default; only `Header.tsx`
(uses `usePathname`) and `ContactForm.tsx` (uses `useState`) are `"use client"`.
The contact form is intentionally backend-free — it composes a `mailto:` link
and opens the visitor's mail client; nothing is sent or stored server-side.

## Content guardrails (non-negotiable — from the founding brief)

This is a real company's public site. These rules are content policy, not
style preferences:

- **No Investment Policy Statement (IPS) figures, ever.** Return targets, rates,
  limits, thresholds, exclusion lists, and any numeric/financial policy detail
  are confidential. Public copy may reflect only the *general character* of
  GCC's discipline — never a number.
- **No director names, titles, photos, or bios** until each director has
  approved public use of their details in writing. The About page's leadership
  block is a deliberate reserved placeholder — leave it as one.
- **Restraint is the brand.** No hype, no stock imagery. The visual language is
  deliberately spare (deep navy, warm paper, one muted brass accent).
- **Draft content is flagged in the UI** with the `.draft` badge (e.g. the home
  mission/values copy marked "pending director sign-off"). Preserve these flags;
  don't quietly promote draft copy to final.

The `web/README.md` "Placeholders awaiting real input" table tracks every item
that must be confirmed before launch (domain, mission/values wording, director
bios, real logo, contact-form backend). Keep it current when you touch those.

## Notes

- `_to_delete/` is gitignored local transfer scratch — ignore it; never commit
  or depend on its contents.
- The repo has **no commits yet** (`git log` is empty). The default branch for
  PRs is `main`.
- `web/app/icon.svg` is a text-monogram favicon placeholder, to be replaced when
  a real mark exists.
