export function HeroSection() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            Independent advisory · Nigeria & Africa
          </p>
          <h1>
            Make complexity
            <br />
            <span>work for you.</span>
          </h1>
          <p className="hero-intro">
            Practical supply chain and regulatory advisory for businesses
            building resilient operations and bringing products to market.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#expertise">
              Explore our expertise
            </a>
            <a className="text-link" href="#about">
              Meet the advisor
            </a>
          </div>
          <div className="hero-footnote">
            <span className="status-dot" />
            Working across Nigeria, Africa & India
          </div>
        </div>
        <div className="hero-art" aria-label="Supply chain advisory graphic">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-cross cross-one" />
          <div className="art-cross cross-two" />
          <div className="art-stamp">
            <span>STRATEGY</span>
            <span className="stamp-star">✳</span>
            <span>IN MOTION</span>
          </div>
          <div className="art-card art-card-main">
            <span className="art-card-label">SUPPLY CHAIN / 01</span>
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
              <span>From source</span>
              <span className="footer-dash" />
              <span>To scale</span>
            </div>
          </div>
          <div className="art-card art-card-note">
            <span>
              Clarity
              <br />
              into action
            </span>
          </div>
        </div>
        <div className="hero-index">
          <span>01</span>
          <span className="index-rule" />
          <span>ADVISORY, BUILT AROUND YOU</span>
        </div>
      </section>
      <ProofStrip />
    </>
  );
}

function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Experience and focus">
      <div className="proof-main">
        <span className="proof-number">
          25<span>+</span>
        </span>
        <span className="proof-label">
          years across global
          <br />
          & African supply chains
        </span>
      </div>
      <p>
        Global perspective. Local fluency.
        <br />
        Advice designed for the way business really works.
      </p>
      <div className="proof-right">
        <span className="proof-spark">✳</span>
        <span>
          People-first.
          <br />
          Implementation-focused.
        </span>
      </div>
    </section>
  );
}
