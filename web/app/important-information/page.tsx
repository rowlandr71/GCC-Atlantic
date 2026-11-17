import type { Metadata } from "next";
import LegalPage from "@/app/components/LegalPage";
import { addressLine, site } from "@/app/site.config";

// Copy source: brief v2.1, Section 6.1. Approved by counsel (C3).

export const metadata: Metadata = {
  title: "Important information",
};

export default function ImportantInformationPage() {
  return (
    <LegalPage title="Important information">
      <p>
        {site.legalName} ({site.registration}) is a private company limited by
        shares, incorporated in Nigeria, with its registered office at{" "}
        {addressLine}.
      </p>
      <p>
        {site.legalName} invests its own capital. It does not accept deposits,
        manage funds for third parties or provide investment advice to the
        public. It is not offering regulated financial services through this
        website.
      </p>
      <p>
        Nothing on this website is an offer, invitation or solicitation to buy
        or sell any security, to invest in or lend to {site.legalName}, or to
        enter into any transaction. Nothing here is financial, legal or tax
        advice and it should not be relied on as such.
      </p>
      <p>
        Descriptions of our investment approach are general. They are not a
        statement of current holdings, allocations or returns, and no
        performance is represented. Statements about future intentions
        describe aims, not commitments.
      </p>
      <p>Information on this website may change without notice.</p>
    </LegalPage>
  );
}
