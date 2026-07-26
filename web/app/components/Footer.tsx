import Link from "next/link";
import { nav, site } from "@/app/site.config";
import LogoMark from "@/app/components/Logo";

export default function Footer() {
  const year = 2026; // static; update as needed

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="wordmark" style={{ marginBottom: "1rem", display: "inline-flex" }}>
              <LogoMark tile />
              <span>{site.name}</span>
            </span>
            <p style={{ color: "#9aa4ae", maxWidth: "34ch", marginTop: "0.75rem" }}>
              {site.incorporation} Reporting in {site.reportingCurrency}.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={`tel:${site.phones[0].replace(/\s/g, "")}`}>{site.phones[0]}</a>
              </li>
              <li style={{ color: "#9aa4ae", marginTop: "0.5rem" }}>
                {site.address.line1}, {site.address.line2}
                <br />
                {site.address.country}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {site.legalName}. All rights reserved.
          </span>
          <span>{site.incorporation}</span>
        </div>
      </div>
    </footer>
  );
}
