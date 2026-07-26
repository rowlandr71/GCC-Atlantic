import Link from "next/link";
import { site } from "@/app/site.config";

export default function HomePage() {
  return (
    <>
      {/* Hero ------------------------------------------------------------ */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <p className="eyebrow">Equity holding &amp; investment</p>
            <h1>Capital, held with discipline.</h1>
            <p className="lead">
              GCC is an equity holding and investment company incorporated in
              Nigeria. We hold and steward a diversified portfolio of investments
              across Nigerian and international markets, governed by a written
              framework rather than by improvisation.
            </p>
            <div className="hero__actions">
              <Link href="/about" className="btn btn--primary">
                About GCC
              </Link>
              <Link href="/contact" className="btn btn--ghost">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning / mission (DRAFT) ---------------------------------- */}
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Who we are</p>
          </div>
          <div>
            <p style={{ fontSize: "clamp(1.35rem, 3vw, 1.9rem)", lineHeight: 1.35, fontFamily: "var(--font-serif)", color: "var(--ink)" }}>
              We exist to preserve and compound capital patiently — first by
              protecting it, then by allowing it to grow.
              <span className="draft">Draft — mission, pending director sign-off</span>
            </p>
            <p className="measure" style={{ marginTop: "1.5rem", color: "var(--slate)" }}>
              GCC acts as a holding vehicle for diversified passive investments,
              with a secondary, longer-horizon purpose of acquiring and operating
              businesses directly. We report in {site.reportingCurrency} and are
              directed by a small board that governs the company through a formal,
              documented policy framework.
            </p>
          </div>
        </div>
      </section>

      {/* What we do ------------------------------------------------------ */}
      <section className="section section--paper2">
        <div className="container">
          <div className="split" style={{ marginBottom: "1rem" }}>
            <div>
              <p className="eyebrow">What we hold</p>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                A diversified base of passive investments.
              </h2>
            </div>
            <div>
              <p className="lead" style={{ maxWidth: "52ch" }}>
                Our portfolio is deliberately spread across asset classes so that
                no single market decides the outcome. Each holding is chosen for
                the role it plays in the whole.
              </p>
            </div>
          </div>

          <dl className="deflist" style={{ marginTop: "2rem" }}>
            <div className="defrow">
              <dt>Listed equities</dt>
              <dd>
                Positions in publicly traded companies across Nigerian and
                international exchanges, held for the long term.
              </dd>
            </div>
            <div className="defrow">
              <dt>Real estate</dt>
              <dd>
                Property interests held as a store of value and a source of
                durable, income-generating exposure.
              </dd>
            </div>
            <div className="defrow">
              <dt>Private equity</dt>
              <dd>
                Selective stakes in private companies, taken where we understand
                the business and the people behind it.
              </dd>
            </div>
            <div className="defrow">
              <dt>Structured lending</dt>
              <dd>
                Lending arranged on defined terms, contributing measured,
                contractual returns to the portfolio.
              </dd>
            </div>
          </dl>

          <p className="draft-note" style={{ marginTop: "1.5rem" }}>
            Descriptions above are general and public in nature. No specific
            allocations, targets, or figures are disclosed.
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
                Decisions are written down before they are made.
              </h2>
            </div>
            <div>
              <p className="lead">
                Governance discipline is a genuine part of GCC&rsquo;s identity.
                The company is run to a pre-committed set of rules, and its board
                answers to them.
              </p>
            </div>
          </div>

          <div className="grid grid--3" style={{ marginTop: "3rem" }}>
            <div className="pillar">
              <h3>Documented decisions</h3>
              <p>
                Investment decisions are recorded and reasoned, not improvised —
                so each one can be reviewed against the framework that produced it.
              </p>
            </div>
            <div className="pillar">
              <h3>Pre-committed rules</h3>
              <p>
                The board sets its policy in advance and holds to it, keeping
                judgment consistent across cycles and market moods.
              </p>
            </div>
            <div className="pillar">
              <h3>Quarterly reporting</h3>
              <p>
                Performance and position are reviewed on a regular quarterly
                cadence, keeping oversight deliberate and continuous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values ---------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">What guides us</p>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                Principles before positions.
                <span className="draft">Draft — values, pending sign-off</span>
              </h2>
            </div>
            <div className="grid" style={{ gap: "0" }}>
              <div className="defrow" style={{ borderTop: "1px solid var(--line)" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem" }}>
                  Capital preservation before appreciation
                </dt>
                <dd style={{ color: "var(--slate)" }}>
                  Protecting what we hold comes first; growth follows from not
                  losing.
                </dd>
              </div>
              <div className="defrow">
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem" }}>
                  Liquidity as a strategic asset
                </dt>
                <dd style={{ color: "var(--slate)" }}>
                  Keeping room to act is a position in its own right, not idle
                  capital.
                </dd>
              </div>
              <div className="defrow" style={{ borderBottom: "1px solid var(--line)" }}>
                <dt style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem" }}>
                  Ethical alignment
                </dt>
                <dd style={{ color: "var(--slate)" }}>
                  What we invest in should sit comfortably with what we stand for.
                </dd>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA ------------------------------------------------------------- */}
      <section className="section section--paper2 section--tight">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.3rem)" }}>
            For enquiries, we prefer a conversation.
          </h2>
          <p className="lead" style={{ margin: "0 auto 2rem" }}>
            Correspondence is welcome from partners, counterparties, and those
            we do business with.
          </p>
          <Link href="/contact" className="btn btn--primary">
            Contact GCC
          </Link>
        </div>
      </section>
    </>
  );
}
