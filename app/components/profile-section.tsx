export function ProfileSection() {
  return (
    <section className="profile-section" id="about">
      <div className="profile-art">
        <div className="profile-frame">
          <div className="profile-monogram">KK</div>
          <span className="profile-caption">
            LEADERSHIP / EXPERIENCE / EXECUTION
          </span>
          <span className="profile-corner corner-tl" />
          <span className="profile-corner corner-br" />
        </div>
        <span className="profile-side-note">BUILT FROM THE GROUND UP</span>
      </div>
      <div className="profile-copy">
        <div className="section-kicker">
          <span>04 / YOUR ADVISOR</span>
          <span className="kicker-rule" />
        </div>
        <p className="profile-overline">SUPPLY CHAIN ADVISOR</p>
        <h2>
          Kedarnath
          <br />
          <em>Kaushik.</em>
        </h2>
        <p className="profile-lead">
          A career built on solving supply chains under real-world pressure.
        </p>
        <p className="profile-description">
          With more than 25 years across manufacturing, distribution and
          multinational supply networks, Kedarnath brings global best practice
          together with a practical understanding of operating in African
          markets. His experience spans hands-on operations through to
          end-to-end supply chain leadership.
        </p>
        <div className="profile-tags">
          <span>Global rigor</span>
          <span>Local fluency</span>
          <span>Direct partnership</span>
        </div>
      </div>
    </section>
  );
}
