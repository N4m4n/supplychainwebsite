import { importServices } from "../data/advisory";

export function ExpertiseSection() {
  return (
    <section className="expertise-section" id="services">
      <div className="section-wrap">
        <div className="section-kicker section-kicker-light">
          <span>OUR COMPLETE IMPORT SERVICES</span>
          <span className="kicker-rule" />
        </div>
        <div className="expertise-heading">
          <h1>
            Complete import solutions
            <br />
            <em>under one roof.</em>
          </h1>
          <p>Choose the support you need, or work with us to coordinate the full journey.</p>
        </div>

        <div className="service-grid">
          {importServices.map((service) => (
            <details className="service-card" key={service.number}>
              <summary>
                <span className="card-number">{service.number}</span>
                <span className="card-content">
                  <span className="card-title">{service.title}</span>
                  <span className="card-description">
                    {service.description}
                  </span>
                </span>
                <span className="card-toggle" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="card-detail">{service.detail}</p>
            </details>
          ))}
        </div>

        <p className="service-note">
          Requirements vary by product and route. We’ll confirm the applicable
          steps and responsibilities with you before work begins.
        </p>
      </div>
    </section>
  );
}
