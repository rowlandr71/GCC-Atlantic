import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { site } from "@/app/site.config";
// Self-hosted fonts (Fontsource) — bundled into the build, no runtime call to
// Google Fonts. The @font-face family names are wired to CSS variables in
// globals.css (--font-fraunces / --font-inter).
import "@fontsource-variable/fraunces/index.css";
import "@fontsource-variable/inter/index.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description:
    "GCC is an equity holding and investment company incorporated in Nigeria, holding diversified passive investments across Nigerian and international markets under a disciplined, written governance framework.",
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description:
      "An equity holding and investment company, governed by a written policy framework.",
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
