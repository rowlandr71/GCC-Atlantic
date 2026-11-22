import type { MetadataRoute } from "next";
import { legalNav, nav, site } from "@/app/site.config";

// Required for `output: "export"`: emit /sitemap.xml at build time.
export const dynamic = "force-static";

// Every public page is in the primary or legal nav, so the sitemap follows
// them. URLs have no trailing slash, matching what the Worker serves.
export default function sitemap(): MetadataRoute.Sitemap {
  return [...nav, ...legalNav].map(({ href }) => ({
    url: href === "/" ? site.url : `${site.url}${href}`,
  }));
}
