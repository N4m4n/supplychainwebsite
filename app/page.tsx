import Link from "next/link";
import { ServicesPreview } from "./components/services-preview";
import { SiteHeader } from "./components/site-header";
import { TradeVisual } from "./components/trade-visual";
import { TrustStrip } from "./components/trust-strip";

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero" id="home">
        <SiteHeader />
        <div className="hero-content" id="trade-routes">
          <div className="hero-copy">
            <h1 className="hero-title">
              Your One-Stop Partner for <span>Importing &amp; Exporting</span>
            </h1>
            <p className="hero-subtitle">
              Connecting the World to Nigeria... And Nigeria to the World.
            </p>
            <p className="hero-promise">
              <span className="promise-mark" aria-hidden="true" />
              With Trust. Transparency. Lasting Relationships.
            </p>
            <div className="hero-actions">
              <Link className="button-primary" href="#contact">
                Plan your shipment <span aria-hidden="true">→</span>
              </Link>
              <Link className="button-secondary" href="#services">
                Explore services
              </Link>
            </div>
          </div>
          <TradeVisual />
        </div>
        <TrustStrip />
      </section>
      <ServicesPreview />
      <div id="insights" />
      <div id="contact" />
    </main>
  );
}
