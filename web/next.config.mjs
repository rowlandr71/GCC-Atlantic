/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Emit a fully static site to `out/` (the app has no server-side runtime).
  // Cloudflare serves `out/` as static assets — see wrangler.jsonc.
  output: "export",
  // No Next image optimization server in a static export.
  images: { unoptimized: true },
};

export default nextConfig;
