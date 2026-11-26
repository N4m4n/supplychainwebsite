import Image from "next/image";
import globeImage from "../assets/globe_image.png";

const navigationItems = [
  "Home",
  "Our Services",
  "Ports & Routes",
  "About Us",
  "Our Clients",
  "Insights",
  "Contact Us",
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="brand">
        <Image
          alt=""
          className="brand-globe"
          priority
          sizes="(max-width: 760px) 72px, 92px"
          src={globeImage}
        />
        <span className="brand-copy">
          <span className="brand-name">OTITO GLOBAL</span>
          <span className="brand-description">LOGISTICS &amp; ADVISORY LLP</span>
          <span className="brand-motto">Trade&nbsp; • &nbsp;Transport&nbsp; • &nbsp;Grow</span>
        </span>
      </div>
      <nav className="primary-navigation" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <span
            key={item}
            className={item === "Home" ? "nav-current" : undefined}
            aria-current={item === "Home" ? "page" : undefined}
          >
            {item}
          </span>
        ))}
        <span className="quote-link">
          Get a Quote <span aria-hidden="true">→</span>
        </span>
      </nav>
    </header>
  );
}
