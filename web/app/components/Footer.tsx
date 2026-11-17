import Link from "next/link";
import { addressLine, legalNav, nav, site } from "@/app/site.config";
import LogoMark from "@/app/components/Logo";
import CurrentYear from "@/app/components/CurrentYear";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="wordmark" style={{ marginBottom: "1rem", display: "inline-flex" }}>
              <LogoMark tile />
              <span>{site.legalName}</span>
            </span>
            <p style={{ color: "#9aa4ae", maxWidth: "34ch", marginTop: "0.75rem" }}>
              {site.legalForm} {site.registration}.
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
            <h4>Legal</h4>
            <ul>
              {legalNav.map((item) => (
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
            </ul>
            <h4 style={{ marginTop: "1.5rem" }}>Registered office</h4>
            <ul>
              <li style={{ color: "#9aa4ae" }}>{addressLine}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © <CurrentYear /> {site.legalName}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
