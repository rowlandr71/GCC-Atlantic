/**
 * Shared layout for the legal pages. Wording approved by Nigerian counsel
 * (launch condition C3, confirmed 17 Nov 2026). Any change to the text needs
 * counsel review again.
 */
export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="section section--dark section--deep section--tight">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1 style={{ fontSize: "clamp(2.1rem, 5vw, 3.2rem)", color: "#fff" }}>
            {title}
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="legal measure">{children}</div>
        </div>
      </section>
    </>
  );
}
