export function ProfileSection() {
  return (
    <section className="profile-section" id="about">
      <div className="profile-art">
        <div className="profile-frame">
          <div className="profile-monogram">KK</div>
          <span className="profile-corner corner-tl" />
          <span className="profile-corner corner-br" />
        </div>
      </div>
      <div className="profile-copy">
        <div className="section-kicker">
          <span>04 / FOUNDER & ADVISOR</span>
          <span className="kicker-rule" />
        </div>
        <p className="profile-overline">FOUNDER & SUPPLY CHAIN ADVISOR</p>
        <h2>
          Kedarnath
          <br />
          <em>Kaushik.</em>
        </h2>
        <p className="profile-lead">
          From hands-on operations to leading supply chains for multinational
          businesses.
        </p>
        <p className="profile-description">
          Kedarnath has worked in manufacturing, distribution and
          multinational supply networks. He began in operations and went on
          to lead end-to-end supply chain strategy. Today, he advises
          businesses in Nigeria and across Africa, drawing on international
          experience and an understanding of local operating conditions.
        </p>
        <div className="profile-tags">
          <span>Global experience</span>
          <span>African markets</span>
          <span>Direct support</span>
        </div>
      </div>
    </section>
  );
}
