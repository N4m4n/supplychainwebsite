import { industries } from "../data/advisory";

export function IndustriesSection() {
  return (
    <section className="industries-section section-wrap">
      <div className="industry-intro">
        <div className="section-kicker">
          <span>05 / WHO WE WORK WITH</span>
          <span className="kicker-rule" />
        </div>
        <h2>
          Built for businesses
          <br />
          <em>ready to move.</em>
        </h2>
        <p>
          We work with established enterprises and ambitious growth-stage
          businesses looking to professionalize their supply chain function and
          grow with confidence.
        </p>
      </div>
      <div className="industry-list">
        {industries.map((industry, index) => (
          <div className="industry-item" key={industry}>
            <span className="industry-number">0{index + 1}</span>
            <span>{industry}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
