import Image from "next/image";
import Link from "next/link";
import homePageImage from "../assets/home_page_image.png";

export function HeroSection() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            India and Nigeria import facilitation
          </p>
          <h1>
            Everything your business needs
            <br />
            <span>for international trade with West Africa.</span>
          </h1>
          <p className="hero-intro">
            From overseas sourcing and inspections to customs clearance and
            final delivery, we coordinate your import through one responsible
            service partner.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/services">
              Explore import services
            </Link>
            <Link className="text-link" href="/team">
              Meet our team
            </Link>
          </div>
          <div className="hero-footnote">
            <span className="status-dot" />
            Nigeria-based coordination with India and global partners
          </div>
        </div>
        <div className="hero-art">
          <Image
            alt="OTITO GLOBAL colleagues coordinating shipments between India and Nigeria at a port-side logistics office"
            className="hero-image"
            priority
            sizes="(max-width: 760px) calc(100vw - 48px), (max-width: 1000px) 46vw, 40vw"
            src={homePageImage}
          />
        </div>
      </section>
      <ProofStrip />
    </>
  );
}

function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Trade corridor and approach">
      <div className="proof-main">
        <span className="proof-number">IN<span>/</span>NG</span>
        <span className="proof-label">India-to-Nigeria trade corridor</span>
      </div>
      <p>
        International trade knowledge with local Nigerian coordination.
      </p>
      <div className="proof-right">
        <span className="proof-spark">✳</span>
        <span>One partner. Clear communication at every stage.</span>
      </div>
    </section>
  );
}
