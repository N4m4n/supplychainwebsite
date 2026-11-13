import { industries } from "../data/advisory";

export function IndustriesSection() {
  return (
    <section className="industries-section section-wrap">
      <div className="industry-intro">
        <div className="section-kicker">
          <span>INDUSTRIES & IMPORTERS</span>
          <span className="kicker-rule" />
        </div>
        <h2>
          Businesses
          <br />
          <em>we work with.</em>
        </h2>
        <p>
          We support businesses importing food, FMCG and other goods into
          Nigeria, with guidance tailored to the products and requirements
          involved.
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
