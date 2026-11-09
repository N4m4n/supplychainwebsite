import { processSteps } from "../data/advisory";

export function ProcessSection() {
  return (
    <section className="process-section section-wrap">
      <div className="section-kicker">
        <span>03 / HOW WE WORK</span>
        <span className="kicker-rule" />
        <span>Working together, step by step</span>
      </div>
      <div className="process-heading">
        <h2>
          We make a plan together,
          <br />
          <em>then see it through.</em>
        </h2>
        <p>
          We agree on the priorities with your team, work through them together
          and share progress along the way. The aim is to leave your team with
          processes it can keep using.
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
