import type { Metadata } from "next";
import ContactForm from "@/app/components/ContactForm";
import { addressLine, site } from "@/app/site.config";

// Copy source: Website Copy & Implementation Brief v2.1, Section 5.
// No telephone numbers are published (A-18).

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact GCC Atlantic for corporate enquiries, proposed transactions and professional introductions relevant to its investment mandate.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section section--dark section--deep section--tight">
        <div className="container">
          <div style={{ maxWidth: "52ch" }}>
            <p className="eyebrow">Contact</p>
            <h1 style={{ fontSize: "clamp(2.1rem, 5vw, 3.2rem)", color: "#fff" }}>
              Corporate enquiries
            </h1>
            <p className="lead">
              For corporate enquiries, proposed transactions and professional
              introductions, please provide your organisation, the nature of the
              enquiry and its relevance to GCC Atlantic&rsquo;s investment
              mandate. Initial submissions should be non-confidential.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          {/* Details */}
          <div>
            <p className="eyebrow">Reach us directly</p>

            <div className="contact-item">
              <div className="label">Email</div>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>

            <div className="contact-item">
              <div className="label">Registered office</div>
              <address style={{ fontStyle: "normal", color: "var(--slate)" }}>
                {addressLine}
              </address>
            </div>

            <div className="contact-item">
              <div className="label">Company</div>
              <p style={{ color: "var(--slate)", margin: 0 }}>
                {site.legalName}, a private company limited by shares,
                incorporated in Nigeria. {site.registration}.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <p className="eyebrow">Send a message</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
