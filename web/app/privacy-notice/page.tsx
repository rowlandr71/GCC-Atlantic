import type { Metadata } from "next";
import LegalPage from "@/app/components/LegalPage";
import { addressLine, site } from "@/app/site.config";

// Copy source: brief v2.1, Section 6.2. Approved by counsel (C3); the
// "Cookies and analytics" section was approved by the CTO and director on
// 22 November 2026 (counsel review waived).
// Set LAST_UPDATED on every change.
// The Cookies statement holds only while the site sets no analytics or
// advertising cookies (condition C7). Cloudflare Web Analytics is cookieless.

const LAST_UPDATED = "22 November 2026";

export const metadata: Metadata = {
  title: "Privacy notice",
};

export default function PrivacyNoticePage() {
  return (
    <LegalPage title="Privacy notice">
      <p>Last updated: {LAST_UPDATED}.</p>

      <h2>Who we are</h2>
      <p>
        {site.legalName} ({site.registration}), {addressLine}, is responsible
        for the personal data described here. You can contact us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>What we collect</h2>
      <p>
        When you use the contact form we collect your name, email address,
        organisation (if given), subject and message.
      </p>

      <h2>Why we use it</h2>
      <p>
        We use it only to read and respond to your enquiry and to keep a record
        of our correspondence. We rely on your consent, which you give by
        ticking the box on the form.
      </p>

      <h2>Who sees it</h2>
      <p>
        Authorised people at {site.legalName}, and the service providers that
        host this website and our email. Some of these providers may store data
        outside Nigeria. We do not sell your data or use it for marketing.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiries only as long as needed to respond and to keep a record
        of our correspondence, and then delete them.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        This website uses only cookies that are necessary for it to work. It
        does not use advertising cookies. We use Cloudflare Web Analytics, which
        does not use cookies, to count visits and see which pages are read. It
        does not identify you or track you across other websites.
      </p>

      <h2>Your rights</h2>
      <p>
        You may ask us to give you a copy of your personal data, to correct it,
        to delete it or to stop using it, by emailing{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. You may also complain
        to the Nigeria Data Protection Commission.
      </p>
    </LegalPage>
  );
}
