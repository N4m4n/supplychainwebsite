import Link from "next/link";

export function ServicesPreview() {
  return (
    <section className="services-preview" id="services">
      <div>
        <p className="eyebrow">TRADE WITH CONFIDENCE</p>
        <h2>Global reach.<br />Local understanding.</h2>
      </div>
      <div className="services-copy" id="about">
        <p>
          From sourcing and freight to customs coordination and final
          delivery, we bring each stage of your cross-border shipment into
          one clear, carefully managed journey.
        </p>
        <Link href="#contact">
          Discover how we can help <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
