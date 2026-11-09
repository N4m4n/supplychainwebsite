"use client";

import { useState } from "react";
import {
  regulatoryServices,
  regulatoryStages,
  supplyChainServices,
} from "../data/advisory";

export function ExpertiseSection() {
  const [activeService, setActiveService] = useState<"supply" | "regulatory">(
    "supply",
  );
  const services =
    activeService === "supply" ? supplyChainServices : regulatoryServices;

  return (
    <section className="expertise-section" id="expertise">
      <div className="section-wrap">
        <div className="section-kicker section-kicker-light">
          <span>02 / WHAT WE DO</span>
          <span className="kicker-rule" />
          <span>Two areas of support</span>
        </div>
        <div className="expertise-heading">
          <h2>
            Supply chain advice.
            <br />
            <em>Product registration help.</em>
          </h2>
          <p>Select a service to see what the work involves.</p>
        </div>

        <div className="service-tabs" role="tablist" aria-label="Service areas">
          <button
            className={`service-tab${activeService === "supply" ? " is-active" : ""}`}
            id="supply-tab"
            type="button"
            role="tab"
            aria-selected={activeService === "supply"}
            aria-controls="service-panel"
            onClick={() => setActiveService("supply")}
          >
            <span>01</span> Supply chain advisory
          </button>
          <button
            className={`service-tab${activeService === "regulatory" ? " is-active" : ""}`}
            id="regulatory-tab"
            type="button"
            role="tab"
            aria-selected={activeService === "regulatory"}
            aria-controls="service-panel"
            onClick={() => setActiveService("regulatory")}
          >
            <span>02</span> Nigeria regulatory roadmap
          </button>
        </div>

        <div
          className="service-grid"
          id="service-panel"
          role="tabpanel"
          aria-labelledby={
            activeService === "supply" ? "supply-tab" : "regulatory-tab"
          }
        >
          {services.map((service) => (
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

        {activeService === "regulatory" && <RegulatoryRoadmap />}

        <p className="service-note">
          Requirements vary by product and manufacturing location. We’ll
          confirm the relevant steps with you before work begins.
        </p>
      </div>
    </section>
  );
}

function RegulatoryRoadmap() {
  return (
    <div className="regulatory-roadmap">
      <div className="roadmap-heading">
        <span>NAFDAC FOOD REGISTRATION</span>
        <p>Applications typically pass through these five stages.</p>
      </div>
      <div className="roadmap-stages">
        {regulatoryStages.map((stage) => (
          <article className="roadmap-stage" key={stage.number}>
            <span>{stage.number}</span>
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
          </article>
        ))}
      </div>
      <p className="roadmap-footnote">
        An advertising permit is a separate approval. Launch and campaign dates
        should follow the applicable approvals.
      </p>
    </div>
  );
}
