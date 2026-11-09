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
        aria-label="SAMPLE home"
        onClick={closeMenu}
      >
        <span className="wordmark-mark" aria-hidden="true">
          S
        </span>
        <span>SAMPLE</span>
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
        <a href="#approach" onClick={closeMenu}>
          Approach
        </a>
        <a href="#expertise" onClick={closeMenu}>
          Expertise
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a className="nav-contact" href="#contact" onClick={closeMenu}>
          Start a conversation
        </a>
      </nav>
    </header>
  );
}
