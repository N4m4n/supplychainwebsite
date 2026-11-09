export function HeroSection() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            Supply chain and regulatory advice
          </p>
          <h1>
            Supply chain advice.
            <br />
            <span>Nigeria product registration.</span>
          </h1>
          <p className="hero-intro">
            Helping businesses improve their supply chains and bring products
            to market in Nigeria and across Africa.
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
            Based in Nigeria, working across Africa and India
          </div>
        </div>
        <div className="hero-art" aria-label="Supply chain advisory graphic">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-cross cross-one" />
          <div className="art-cross cross-two" />
          <div className="art-card art-card-main">
            <span className="art-card-label">HOW PRODUCTS MOVE</span>
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
              <span>Supplier</span>
              <span className="footer-dash" />
              <span>Customer</span>
            </div>
          </div>
        </div>
        <div className="hero-index">
          <span>01</span>
          <span className="index-rule" />
          <span>SUPPLY CHAIN & PRODUCT REGISTRATION</span>
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
          years working in global and African supply chains
        </span>
      </div>
      <p>
        Experience across global supply chains and African markets.
      </p>
      <div className="proof-right">
        <span className="proof-spark">✳</span>
        <span>Advice and help with implementation</span>
      </div>
    </section>
  );
}
