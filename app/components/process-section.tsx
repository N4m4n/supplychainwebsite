import { processSteps } from "../data/advisory";

export function ProcessSection() {
  return (
    <section className="process-section section-wrap" id="process">
      <div className="section-kicker">
        <span>03 / HOW YOUR IMPORT WORKS</span>
        <span className="kicker-rule" />
        <span>Working together, step by step</span>
      </div>
      <div className="process-heading">
        <h2>
          From supplier
          <br />
          <em>to final delivery.</em>
        </h2>
        <p>
          One coordinated import journey. One responsible service partner.
          Clear communication at every stage.
        </p>
      </div>
      <div className="process-grid">
        {processSteps.map((step) => (
          <article className="process-card" key={step.number}>
            <span className="process-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
