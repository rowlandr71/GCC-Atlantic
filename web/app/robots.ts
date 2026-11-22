import type { MetadataRoute } from "next";
import { site } from "@/app/site.config";

// Required for `output: "export"`: emit /robots.txt at build time.
export const dynamic = "force-static";

// Cloudflare's managed robots.txt (AI Crawl Control) prepends its own
// content-signal comments to this file at the edge.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
