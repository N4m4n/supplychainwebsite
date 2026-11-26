function TrustIcon({ kind }: { kind: "shield" | "eye" | "handshake" }) {
  if (kind === "shield") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 40 40">
        <path d="M20 3 34 8v10c0 9-5.8 15-14 19C11.8 33 6 27 6 18V8l14-5Z" fill="currentColor" />
        <path d="m13 20 5 5 10-11" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      </svg>
    );
  }

  if (kind === "eye") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 40 40">
        <path d="M3 20s6-11 17-11 17 11 17 11-6 11-17 11S3 20 3 20Z" stroke="currentColor" strokeWidth="3" />
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="3" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 40 40">
      <path d="m4 18 8-7 8 4 5-3 11 7-7 8-8 3-9-3-8-9Z" fill="currentColor" />
      <path d="m13 18 6 5 6-5m-13 8 5-3m9 2 4-3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function TrustItem({
  icon,
  title,
  secondLine,
}: {
  icon: "shield" | "eye" | "handshake";
  title: string;
  secondLine: string;
}) {
  return (
    <div className="trust-item">
      <span className="trust-icon"><TrustIcon kind={icon} /></span>
      <strong>{title}<br />{secondLine}</strong>
    </div>
  );
}

export function TrustStrip() {
  return (
    <div className="trust-wave" id="clients">
      <div className="cross-border-label">Our Cross-Border Supply Chain</div>
      <div className="trust-inner">
        <TrustItem icon="shield" title="Trusted" secondLine="Partner" />
        <span className="trust-divider" aria-hidden="true" />
        <TrustItem icon="eye" title="Transparent" secondLine="Processes" />
        <span className="trust-divider" aria-hidden="true" />
        <TrustItem icon="handshake" title="Our Clients" secondLine="Our Priority" />
      </div>
      <p className="trust-message">
        One connected journey, from global supplier to your door.
      </p>
    </div>
  );
}
