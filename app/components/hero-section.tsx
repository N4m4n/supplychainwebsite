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
            <span>to import into Nigeria.</span>
          </h1>
          <p className="hero-intro">
            From overseas sourcing and inspections to customs clearance and
            final delivery, we coordinate your import through one responsible
            service partner.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#services">
              Explore import services
            </a>
            <a className="text-link" href="#about">
              About our team
            </a>
          </div>
          <div className="hero-footnote">
            <span className="status-dot" />
            Nigeria-based coordination with India and global partners
          </div>
        </div>
        <div
          className="hero-art"
          role="img"
          aria-label="Illustration of the India-to-Nigeria import journey"
        >
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-cross cross-one" />
          <div className="art-cross cross-two" />
          <div className="art-card art-card-main">
            <span className="art-card-label">ONE COORDINATED IMPORT JOURNEY</span>
            <div className="flow-map" aria-hidden="true">
              <span className="flow-node node-a" />
              <span className="flow-node node-b" />
              <span className="flow-node node-c" />
              <span className="flow-node node-d" />
              <span className="flow-node node-e" />
              <span className="flow-line line-a" />
              <span className="flow-line line-b" />
              <span className="flow-line line-c" />
              <span className="flow-line line-d" />
              <span className="flow-line line-e" />
              <span className="flow-line line-f" />
              <span className="flow-line line-g" />
              <span className="flow-line line-h" />
            </div>
            <div className="art-card-footer">
              <span>INDIA · ORIGIN</span>
              <span className="footer-dash" />
              <span>NIGERIA · DELIVERY</span>
            </div>
          </div>
        </div>
        <div className="hero-index">
          <span>01</span>
          <span className="index-rule" />
          <span>ONE PARTNER. EVERY STEP OF YOUR IMPORT.</span>
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
