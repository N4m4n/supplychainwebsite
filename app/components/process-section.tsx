import { processSteps } from "../data/advisory";

export function ProcessSection() {
  return (
    <section className="process-section section-wrap">
      <div className="section-kicker">
        <span>03 / HOW WE WORK</span>
        <span className="kicker-rule" />
        <span>Clear steps, shared ownership</span>
      </div>
      <div className="process-heading">
        <h2>
          From the first question
          <br />
          <em>to lasting change.</em>
        </h2>
        <p>
          Every engagement is shaped around your priorities. The work is
          collaborative, transparent and focused on building capability that
          remains in-house.
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
