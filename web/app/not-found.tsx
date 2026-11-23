import type { Metadata } from "next";
import Link from "next/link";

// Static export writes this to out/404.html, which the Worker serves for any
// missing path (not_found_handling: "404-page" in wrangler.jsonc).

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <p className="eyebrow">Page not found</p>
          <h1 style={{ maxWidth: "16ch" }}>This page could not be found</h1>
          <p className="lead">
            The address may be mistyped, or the page may have moved.
          </p>
          <div className="hero__actions">
            <Link href="/" className="btn btn--primary">
              Go to the home page
            </Link>
            <Link href="/contact" className="btn btn--ghost">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
