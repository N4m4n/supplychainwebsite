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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 160" width="240" height="160" fill="none">
  
  
  
  <path d="M 48 34 L 68 42 L 50 86 L 30 78 Z" fill="#0C4A26" />

  
  <path d="M 192 34 L 172 42 L 190 86 L 210 78 Z" fill="#0C4A26" />

  
  <path d="
    M 166 46 
    C 154 44, 140 36, 124 36 
    C 112 36, 104 44, 96 54 
    L 88 64 
    C 84 69, 86 76, 92 78 
    C 98 80, 104 76, 110 71 
    L 118 64 
    C 122 61, 128 61, 132 65 
    L 174 102 
    C 178 96, 182 88, 182 80 
    L 166 46 Z" fill="#0C4A26" />

  
  <path d="
    M 74 46 
    L 100 44 
    C 93 52, 86 60, 82 66 
    C 76 74, 79 84, 88 87 
    C 96 90, 105 85, 112 79 
    L 121 71 
    C 123 69, 126 69, 128 71 
    L 170 108 
    C 174 111, 174 117, 170 120 
    C 167 123, 162 123, 159 120 
    L 137 101 
    C 135 99, 132 102, 134 104 
    L 158 125 
    C 161 128, 161 133, 158 136 
    C 155 139, 150 139, 147 136 
    L 125 117 
    C 123 115, 120 118, 122 120 
    L 143 138 
    C 146 141, 146 146, 143 149 
    C 140 152, 135 152, 132 149 
    L 62 88 
    C 60 86, 59 83, 60 80 
    L 74 46 Z" fill="#0C4A26" />

  
  <g fill="#0C4A26">
    
    <rect x="64" y="92" width="16" height="9" rx="4.5" transform="rotate(-48 64 92)" />
    
    <rect x="74" y="102" width="18" height="9" rx="4.5" transform="rotate(-48 74 102)" />
    
    <rect x="85" y="112" width="18" height="9" rx="4.5" transform="rotate(-48 85 112)" />
    
    <rect x="97" y="121" width="16" height="9" rx="4.5" transform="rotate(-48 97 121)" />
    
    <rect x="112" y="127" width="13" height="9" rx="4.5" transform="rotate(-42 112 127)" />
  </g>
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
