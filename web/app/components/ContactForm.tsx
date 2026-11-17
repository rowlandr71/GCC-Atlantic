"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { site } from "@/app/site.config";

/**
 * Contact form (brief v2.1, Section 5.3).
 *
 * Submits server-side as JSON to /api/contact, handled by the Cloudflare
 * Worker in web/worker/index.ts, which emails the enquiry to site.email.
 * Spam protection is non-tracking: a hidden honeypot field plus a minimum
 * time-to-submit check, both enforced on the server. No third-party scripts.
 *
 * Note: `npm run dev` has no /api route, so submissions show the failure
 * message locally. Use `npm run preview` (Wrangler) to test end to end.
 */

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const startedAt = useRef(Date.now());
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    subject: "",
    message: "",
    consent: false,
    website: "", // honeypot: real visitors never see or fill this
  });

  const set =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const v = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
      setForm((f) => ({ ...f, [key]: v }));
    };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, startedAt: startedAt.current }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setForm({ name: "", email: "", organisation: "", subject: "", message: "", consent: false, website: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="form-status" role="status">
        Thank you for contacting GCC Atlantic. Your enquiry has been submitted.
        We will contact you where further information or follow-up is
        appropriate.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" type="text" value={form.name} onChange={set("name")} autoComplete="name" maxLength={200} required />
      </div>
      <div className="form-field">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" type="email" value={form.email} onChange={set("email")} autoComplete="email" maxLength={254} required />
      </div>
      <div className="form-field">
        <label htmlFor="cf-org">Organisation (optional)</label>
        <input id="cf-org" type="text" value={form.organisation} onChange={set("organisation")} autoComplete="organization" maxLength={200} />
      </div>
      <div className="form-field">
        <label htmlFor="cf-subject">Subject (optional)</label>
        <input id="cf-subject" type="text" value={form.subject} onChange={set("subject")} maxLength={200} />
      </div>
      <div className="form-field">
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" rows={6} value={form.message} onChange={set("message")} maxLength={5000} required />
      </div>

      <div className="form-hp" aria-hidden="true">
        <label htmlFor="cf-website">Leave this field empty</label>
        <input id="cf-website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
      </div>

      <div className="form-field form-field--check">
        <input id="cf-consent" type="checkbox" checked={form.consent} onChange={set("consent")} required />
        <label htmlFor="cf-consent">
          I have read the <Link href="/privacy-notice">Privacy notice</Link> and
          agree that {site.legalName} may use my details to respond to my
          enquiry.
        </label>
      </div>

      <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="form-status form-status--error" role="alert">
          Your message could not be sent. Please email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}

      <p className="form-note">
        Please send general business enquiries only. Do not include
        confidential documents, financial account details, loan applications or
        investment instructions. An enquiry does not create a commitment on
        either side.
      </p>
    </form>
  );
}
