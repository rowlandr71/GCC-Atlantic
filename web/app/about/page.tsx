import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/app/site.config";

export const metadata: Metadata = {
  title: "About",
  description:
    "GCC is a private company limited by shares, incorporated in Nigeria, operating as an equity holding and investment company under a written governance framework.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header ----------------------------------------------------- */}
      <section className="section section--dark section--tight">
        <div className="container" style={{ maxWidth: "44ch" }}>
          <p className="eyebrow">About GCC</p>
          <h1 style={{ fontSize: "clamp(2.1rem, 5vw, 3.2rem)", color: "#fff" }}>
            A holding company, built to endure.
          </h1>
          <p className="lead">
            {site.incorporation} We hold diversified investments for the long
            term and govern them with deliberate, documented care.
          </p>
        </div>
      </section>

      {/* Overview -------------------------------------------------------- */}
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Our purpose</p>
          </div>
          <div className="measure">
            <p style={{ fontSize: "1.2rem", color: "var(--ink)" }}>
              GCC&rsquo;s primary purpose is to act as a holding vehicle for
              diversified passive investments — spanning listed equities, real
              estate, private equity stakes, and structured lending.
            </p>
            <p style={{ color: "var(--slate)" }}>
              Its secondary, longer-horizon purpose is to acquire and operate
              businesses directly. Both purposes are pursued patiently: we invest
              across Nigerian and international markets, report in{" "}
              {site.reportingCurrency}, and measure ourselves over years rather
              than quarters.
            </p>
            <p style={{ color: "var(--slate)" }}>
              The company is directed by a small board that governs through a
              formal, written policy framework. That discipline — documented
              decisions, pre-committed rules, and quarterly reporting — is not
              administrative overhead. It is how we intend to be trusted with
              capital.
            </p>
          </div>
        </div>
      </section>

      {/* Governance ------------------------------------------------------ */}
      <section className="section section--paper2">
        <div className="container">
          <p className="eyebrow">Governance</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", maxWidth: "18ch" }}>
            A framework, not a series of judgment calls.
          </h2>
          <div className="grid grid--3" style={{ marginTop: "2.5rem" }}>
            <div className="card">
              <div className="card__num">01</div>
              <h3>Written policy</h3>
              <p>
                The board governs to a documented framework agreed in advance,
                so that decisions are consistent and reviewable rather than
                reactive.
              </p>
            </div>
            <div className="card">
              <div className="card__num">02</div>
              <h3>Deliberate decisions</h3>
              <p>
                Each material decision is recorded with its reasoning, creating
                an accountable trail from principle to action.
              </p>
            </div>
            <div className="card">
              <div className="card__num">03</div>
              <h3>Regular review</h3>
              <p>
                Position and performance are reviewed on a quarterly cadence,
                keeping oversight continuous and unhurried.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership — DRAFT PLACEHOLDER (no names published) ------------- */}
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Leadership</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}>
              The board
              <span className="draft">Placeholder — awaiting approval</span>
            </h2>
          </div>
          <div
            className="card measure"
            style={{ borderStyle: "dashed", background: "rgba(154,123,79,0.05)" }}
          >
            <p style={{ color: "var(--slate)", marginBottom: "0.75rem" }}>
              GCC is directed by a small board. Director names, titles, and
              biographies are intentionally not published here yet.
            </p>
            <p className="draft-note" style={{ marginBottom: 0 }}>
              This section is reserved. No individual&rsquo;s name, title, photo,
              or biography will be added until each director has explicitly
              approved public use of their details. Provide confirmed, approved
              bios and this block will be replaced.
            </p>
          </div>
        </div>
      </section>

      {/* Facts strip ----------------------------------------------------- */}
      <section className="section section--dark section--tight">
        <div className="container">
          <div className="grid grid--3">
            <div className="pillar">
              <h3>Legal form</h3>
              <p>Private company limited by shares, incorporated in Nigeria.</p>
            </div>
            <div className="pillar">
              <h3>Reporting</h3>
              <p>Accounts and performance are reported in {site.reportingCurrency}.</p>
            </div>
            <div className="pillar">
              <h3>Reach</h3>
              <p>Investments held across Nigerian and international markets.</p>
            </div>
          </div>
          <div style={{ marginTop: "3rem" }}>
            <Link href="/contact" className="btn btn--ghost">
              Speak with us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
