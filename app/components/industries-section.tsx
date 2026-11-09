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
          Businesses
          <br />
          <em>we work with.</em>
        </h2>
        <p>
          Kedarnath works with established companies and growing businesses
          that want to improve how they source, make and deliver their
          products.
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
