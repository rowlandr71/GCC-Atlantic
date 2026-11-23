import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/app/site.config";

// Share-preview image for LinkedIn, WhatsApp, email and so on. Rendered once at
// build time into the static export; Next adds the og:image tags to every page.
// Fonts and logo are read from disk, so the build stays fully offline.

export const dynamic = "force-static";
export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const root = process.cwd();
  const [serif, logo] = await Promise.all([
    // Static (non-variable) Fraunces: Satori can't read variable fonts or woff2.
    readFile(join(root, "node_modules/@fontsource/fraunces/files/fraunces-latin-500-normal.woff")),
    readFile(join(root, "public/logo-mark.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f4ee",
          padding: "72px 88px",
          borderBottom: "14px solid #0b1a27",
        }}
      >
        <img src={logoSrc} width={150} height={143} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 64, height: 2, background: "#9a7b4f", marginBottom: 36 }} />
          <div style={{ fontFamily: "Fraunces", fontSize: 96, color: "#0e1b28", lineHeight: 1.05 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 34, color: "#55616c", marginTop: 20 }}>
            {site.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Fraunces", data: serif, weight: 500, style: "normal" }] },
  );
}
