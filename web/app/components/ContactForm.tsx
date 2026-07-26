"use client";

import { useState } from "react";
import { site } from "@/app/site.config";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `${message}`;
    const mailto =
      `mailto:${site.email}` +
      `?subject=${encodeURIComponent(subject || "Enquiry via website")}` +
      `&body=${encodeURIComponent(body)}`;
    // Opens the visitor's mail client with the message pre-filled.
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="cf-name">Name</label>
        <input
          id="cf-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="cf-subject">Subject</label>
        <input
          id="cf-subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn--primary">
        Compose email
      </button>
      <p className="form-note">
        This form opens your own email application with the message prepared —
        no data is sent or stored by this site. A server-side submission handler
        can be added when required.
      </p>
    </form>
  );
}
