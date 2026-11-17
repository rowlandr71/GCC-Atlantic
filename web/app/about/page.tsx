import type { Metadata } from "next";
import Link from "next/link";
import { addressLine, site } from "@/app/site.config";

// Copy source: Website Copy & Implementation Brief v2.1, Section 4.
// Leadership publishes no names, titles, photos or biographies.
// Board approval (C1, C4) confirmed 17 Nov 2026; badges removed (A-23).
// Optional structured finance / venture debt sentence included (C6 and C3
// approvals confirmed 17 Nov 2026).

export const metadata: Metadata = {
  title: "About",
  description:
    "GCC Atlantic's corporate mandate, investment process and governance framework for the long-term allocation of proprietary capital.",
};

const howWeInvest = [
  {
    title: "Time horizon",
    text: "Investment horizons are established at approval and inform the assessment of expected returns and subsequent performance.",
  },
  {
    title: "Core exposure",
    text: "During portfolio formation, the policy favours diversified, low-cost listed-market exposure over individual security selection.",
  },
  {
    title: "Private investments",
    text: "Private-company appraisal includes legal and financial due diligence, independent valuation and a site visit. Governance and information rights are sought in proportion to the proposed equity interest.",
  },
  {
    title: "Private credit",
    text: "Credit commitments require defined contractual terms, documented authorisation, security where appropriate and formal default-management procedures.",
  },
  {
    title: "Liquidity and concentration",
    text: "Portfolio liquidity and concentration exposures are monitored and reported to the board quarterly.",
  },
  {
    title: "Ethical limits",
    text: "Activities considered ethically objectionable by the directors are outside the investment mandate.",
  },
];

const governance = [
  {
    title: "Written policy",
    text: "The Investment Policy Statement establishes the investment mandate and approval requirements against which the board evaluates proposals and oversees capital deployment.",
  },
  {
    title: "Deliberate decisions",
    text: "Material decisions and their investment rationale are formally documented to support accountability and subsequent evaluation.",
  },
  {
    title: "Shared control",
    text: "Dual authorisation applies to the movement of company funds. Material decisions require board approval under the policy.",
  },
  {
    title: "Disclosure of interests",
    text: "Personal and related-party interests must be disclosed before discussion. The director concerned does not participate in the decision.",
  },
  {
    title: "Regular review",
    text: "Position and performance are reviewed each quarter, and the policy is reviewed twice a year.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page banner ----------------------------------------------------- */}
      <section className="section section--dark section--deep section--tight">
        <div className="container">
          <div style={{ maxWidth: "52ch" }}>
            <p className="eyebrow">About GCC Atlantic</p>
            <h1 style={{ fontSize: "clamp(2.1rem, 5vw, 3.2rem)", color: "#fff" }}>
              An investment holding company with a long-term mandate
            </h1>
            <p className="lead">
              {site.legalName} is a private investment holding company
              incorporated in Nigeria. Its proprietary investment model combines
              a multi-asset mandate with formal investment authorisation,
              documented decision-making and board oversight.
            </p>
          </div>
        </div>
      </section>

      {/* Our purpose ----------------------------------------------------- */}
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Our purpose</p>
          </div>
          <div className="measure">
            <p style={{ fontSize: "1.2rem", color: "var(--ink)" }}>
              GCC Atlantic&rsquo;s mandate is the long-term allocation of
              proprietary capital, prioritising capital preservation alongside
              capital appreciation. The permitted investment universe includes
              listed securities, fixed income, real estate, private companies and
              private credit, with Nigerian and international market exposure.
            </p>
            <p style={{ color: "var(--slate)" }}>
              The company&rsquo;s longer-term strategic direction includes the
              direct acquisition and operation of businesses and the development
              of strategic partnerships. These remain prospective objectives
              rather than representations of existing operations or
              relationships.
            </p>
            <p style={{ color: "var(--slate)" }}>
              Capital deployment remains subject to the investment policy,
              applicable approval requirements and ongoing portfolio review.
              Investment horizons inform performance assessment without
              displacing scrutiny of risk, concentration or liquidity.
            </p>
          </div>
        </div>
      </section>

      {/* How we invest --------------------------------------------------- */}
      <section className="section section--paper2">
        <div className="container">
          <p className="eyebrow">How we invest</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", maxWidth: "22ch" }}>
            Investment appraisal and portfolio oversight
          </h2>
          <div className="grid grid--3" style={{ marginTop: "2.5rem" }}>
            {howWeInvest.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <p className="measure" style={{ marginTop: "2rem", marginBottom: 0, color: "var(--slate)" }}>
            We are developing capabilities in structured finance and venture debt.
          </p>
        </div>
      </section>

      {/* Governance ------------------------------------------------------ */}
      <section className="section" id="governance">
        <div className="container">
          <p className="eyebrow">Governance</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", maxWidth: "22ch" }}>
            Board oversight and investment controls
          </h2>
          <div className="grid grid--3" style={{ marginTop: "2.5rem" }}>
            {governance.map((item, i) => (
              <div className="card" key={item.title}>
                <div className="card__num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership ------------------------------------------------------ */}
      <section className="section section--paper2">
        <div className="container split">
          <div>
            <p className="eyebrow">Leadership</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}>
              Cross-disciplinary leadership experience
            </h2>
          </div>
          <div className="measure">
            <p style={{ fontSize: "1.2rem", color: "var(--ink)", marginBottom: 0 }}>
              GCC Atlantic&rsquo;s leadership combines experience in financial
              services, information technology and artificial intelligence to
              inform investment assessment and corporate oversight.
            </p>
          </div>
        </div>
      </section>

      {/* Key facts ------------------------------------------------------- */}
      <section className="section section--dark section--tight">
        <div className="container">
          <div className="grid grid--3">
            <div className="pillar">
              <h3>Company</h3>
              <p>{site.legalName}</p>
            </div>
            <div className="pillar">
              <h3>Legal form</h3>
              <p>Private company limited by shares, incorporated in Nigeria.</p>
            </div>
            <div className="pillar">
              <h3>Registration</h3>
              <p>{site.registration}</p>
            </div>
            <div className="pillar">
              <h3>Registered office</h3>
              <p>{addressLine}</p>
            </div>
            <div className="pillar">
              <h3>Investment reach</h3>
              <p>Nigerian and international markets.</p>
            </div>
          </div>
          <div style={{ marginTop: "3rem" }}>
            <Link href="/contact" className="btn btn--ghost">
              Contact GCC Atlantic
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
