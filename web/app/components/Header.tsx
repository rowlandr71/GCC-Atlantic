"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/app/site.config";
import LogoMark from "@/app/components/Logo";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="wordmark" aria-label={`${site.name}, home`}>
          <LogoMark />
          <span>{site.name}</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
