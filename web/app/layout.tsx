import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { site, taglineTitle } from "@/app/site.config";
// Self-hosted fonts (Fontsource) — bundled into the build, no runtime call to
// Google Fonts. The @font-face family names are wired to CSS variables in
// globals.css (--font-fraunces / --font-inter).
import "@fontsource-variable/fraunces/index.css";
import "@fontsource-variable/inter/index.css";
import "./globals.css";

const description =
  "GCC Atlantic deploys proprietary capital across public and private markets under a board-approved framework for investment, risk and governance.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${taglineTitle}`,
    template: `%s | ${site.name}`,
  },
  description,
  openGraph: {
    title: `${site.name} | ${taglineTitle}`,
    description,
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
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
