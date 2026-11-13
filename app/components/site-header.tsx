"use client";

import { useState } from "react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="#home"
        aria-label="[Company Name] home"
        onClick={closeMenu}
      >
        <span className="wordmark-mark" aria-hidden="true">LOGO</span>
        <span>[Company Name]</span>
      </a>
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
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#process" onClick={closeMenu}>
          How it works
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a className="nav-contact" href="#contact" onClick={closeMenu}>
          Request a consultation
        </a>
      </nav>
    </header>
  );
}
