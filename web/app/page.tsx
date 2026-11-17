import Link from "next/link";

// Copy source: Website Copy & Implementation Brief v2.1, Section 3.
// Board approval (C1, C4) confirmed 17 Nov 2026; staging badges removed (A-23).

const assetClasses = [
  {
    term: "Listed securities",
    desc: "Long-term exposure to Nigerian and international equity markets, including through index funds and exchange-traded funds.",
  },
  {
    term: "Fixed income and liquidity",
    desc: "Government securities, other fixed-income instruments and money-market investments, considered for income and liquidity.",
  },
  {
    term: "Real estate",
    desc: "Residential and commercial property interests evaluated for income generation and long-term capital appreciation.",
  },
  {
    term: "Private companies",
    desc: "Selective minority equity investments, subject to legal and financial due diligence, independent valuation and appropriate governance and information rights.",
  },
  {
    term: "Private credit",
    desc: "Private lending assessed on counterparty repayment capacity, contractual terms and appropriate security arrangements.",
  },
];

const principles = [
  {
    term: "Capital preservation before appreciation",
    desc: "Downside risk is a primary consideration in investment appraisal. Capital preservation remains an objective, not an assurance against loss.",
  },
  {
    term: "Policy discipline",
    desc: "Investment decisions remain subject to established safeguards, irrespective of market conditions or transaction urgency.",
  },
  {
    term: "Decision accountability",
    desc: "Documented investment rationale provides a basis for performance evaluation, accountability and subsequent review.",
  },
  {
    term: "Liquidity as a strategic asset",
    desc: "Liquidity supports funding obligations and investment flexibility, reducing reliance on forced asset disposals.",
  },
  {
    term: "Ethical alignment",
    desc: "Activities considered ethically objectionable by the directors are excluded from investment consideration, irrespective of legality or prospective return.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Opening banner -------------------------------------------------- */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <p className="eyebrow">Investment holding</p>
            <h1>Long-term allocation of proprietary capital</h1>
            <p className="lead">
              GCC Atlantic is a Nigerian investment holding company deploying
              proprietary capital across public and private markets. Capital
              allocation is governed by a board-approved investment policy
              integrating capital preservation, portfolio diversification and
              liquidity management.
            </p>
            <div className="hero__actions">
              <Link href="/about" className="btn btn--primary">
                About GCC Atlantic
              </Link>
              <Link href="/contact" className="btn btn--ghost">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are ------------------------------------------------------ */}
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}>Our mission</h2>
          </div>
          <div>
            <p style={{ fontSize: "clamp(1.35rem, 3vw, 1.9rem)", lineHeight: 1.35, fontFamily: "var(--font-serif)", color: "var(--ink)" }}>
              To allocate proprietary capital for long-term capital appreciation,
              with capital preservation as the primary investment consideration.
            </p>
            <p className="measure" style={{ marginTop: "1.5rem", color: "var(--slate)" }}>
              Our holding-company model provides a framework for diversified
              investment across asset classes and investment horizons. The
              longer-term strategic objective is to extend this model to the
              direct acquisition and operation of businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Where we invest ------------------------------------------------- */}
      <section className="section section--paper2">
        <div className="container">
          <div className="split" style={{ marginBottom: "1rem" }}>
            <div>
              <p className="eyebrow">Where we invest</p>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                A multi-asset investment mandate
              </h2>
            </div>
            <div>
              <p className="lead" style={{ maxWidth: "52ch" }}>
                The mandate encompasses five asset classes. Investment selection
                considers expected return, downside exposure, liquidity and
                concentration, together with each investment&rsquo;s
                contribution to the overall portfolio.
              </p>
            </div>
          </div>

          <dl className="deflist" style={{ marginTop: "2rem" }}>
            {assetClasses.map((a) => (
              <div className="defrow" key={a.term}>
                <dt>{a.term}</dt>
                <dd>{a.desc}</dd>
              </div>
            ))}
          </dl>

          <p className="draft-note" style={{ marginTop: "1.5rem" }}>
            This description is general. It is not a statement of current
            holdings, allocations or returns, and it is not an offer or
            invitation to invest. See{" "}
            <Link href="/important-information" className="inline-link">
              Important information
            </Link>
            .
          </p>
        </div>
      </section>

      {/* How we govern (dark) ------------------------------------------- */}
      <section className="section section--dark">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">How we govern</p>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                Policy-led capital allocation
              </h2>
            </div>
            <div>
              <p className="lead">
                The Investment Policy Statement defines permitted investments,
                approval requirements and portfolio review obligations. The
                board oversees capital deployment within this framework.
              </p>
            </div>
          </div>

          <div className="grid grid--3" style={{ marginTop: "3rem" }}>
            <div className="pillar">
              <h3>Documented decisions</h3>
              <p>Investment approvals and their underlying rationale are formally recorded.</p>
            </div>
            <div className="pillar">
              <h3>Defined authority</h3>
              <p>
                Investment boundaries and approval requirements established
                before capital is committed.
              </p>
            </div>
            <div className="pillar">
              <h3>Regular review</h3>
              <p>
                Portfolio exposures and performance are reviewed against policy
                requirements. Further detail is provided in the{" "}
                <Link href="/about#governance" className="inline-link">
                  governance framework
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What guides us -------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">What guides us</p>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                Capital stewardship principles
              </h2>
            </div>
            <dl className="deflist">
              {principles.map((v, i) => (
                <div
                  className="defrow"
                  key={v.term}
                  style={i === 0 ? { borderTop: "1px solid var(--line)" } : undefined}
                >
                  <dt style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem" }}>{v.term}</dt>
                  <dd>{v.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Closing call to action ----------------------------------------- */}
      <section className="section section--paper2 section--tight">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.3rem)" }}>
            Business enquiries and strategic dialogue
          </h2>
          <p className="lead" style={{ margin: "0 auto 2rem", maxWidth: "60ch" }}>
            GCC Atlantic welcomes relevant proposals and introductions from
            prospective partners, counterparties and advisers. Initial
            correspondence should outline the opportunity and its alignment
            with our investment mandate.
          </p>
          <Link href="/contact" className="btn btn--primary">
            Contact GCC Atlantic
          </Link>
        </div>
      </section>
    </>
  );
}
