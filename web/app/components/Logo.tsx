/* eslint-disable @next/next/no-img-element */
import { site } from "@/app/site.config";

/**
 * GCC Atlantic monogram — the "A" (for Atlantic) mark with the gold swoosh.
 *
 * Renders the shared logo asset (public/logo-mark.png, transparent background).
 * On dark backgrounds the navy letterform would disappear, so pass `tile` to
 * sit it on a light paper chip (used in the footer). The same artwork backs the
 * browser-tab favicon via app/icon.png.
 */
export default function LogoMark({ tile = false }: { tile?: boolean }) {
  return (
    <span
      className={tile ? "wordmark__mark wordmark__mark--tile" : "wordmark__mark"}
      aria-hidden="true"
    >
      <img src="/logo-mark.png" alt={`${site.name} monogram`} />
    </span>
  );
}
