"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <Link
        className="wordmark"
        href="/"
        aria-label="[Company Name] home"
        onClick={closeMenu}
      >
        <span className="wordmark-mark" aria-hidden="true">LOGO</span>
        <span>[Company Name]</span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>
      <nav
        className={`primary-navigation${menuOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          href="/services"
          aria-current={pathname === "/services" ? "page" : undefined}
          onClick={closeMenu}
        >
          Our Services
        </Link>
        <Link
          href="/team"
          aria-current={pathname === "/team" ? "page" : undefined}
          onClick={closeMenu}
        >
          Our team
        </Link>
        <Link
          href="/about"
          aria-current={pathname === "/about" ? "page" : undefined}
          onClick={closeMenu}
        >
          About
        </Link>
        <Link className="nav-contact" href="/#contact" onClick={closeMenu}>
          Request a consultation
        </Link>
      </nav>
    </header>
  );
}
