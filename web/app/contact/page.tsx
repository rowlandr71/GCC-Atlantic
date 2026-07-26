import type { Metadata } from "next";
import ContactForm from "@/app/components/ContactForm";
import { site } from "@/app/site.config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with GCC. Registered in Lagos, Nigeria. Correspondence is welcome from partners and counterparties.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section section--dark section--tight">
        <div className="container" style={{ maxWidth: "44ch" }}>
          <p className="eyebrow">Contact</p>
          <h1 style={{ fontSize: "clamp(2.1rem, 5vw, 3.2rem)", color: "#fff" }}>
            Start a conversation.
          </h1>
          <p className="lead">
            Correspondence is welcome from partners, counterparties, and those
            we do business with. We aim to reply thoughtfully rather than quickly.
          </p>
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
              <div className="label">Telephone</div>
              <div className="stack-sm">
                {site.phones.map((p) => (
                  <div key={p}>
                    <a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-item">
              <div className="label">Registered office</div>
              <address style={{ fontStyle: "normal", color: "var(--slate)" }}>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.country}
              </address>
            </div>

            <div className="contact-item">
              <div className="label">Company</div>
              <p style={{ color: "var(--slate)", margin: 0 }}>
                {site.incorporation}
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
