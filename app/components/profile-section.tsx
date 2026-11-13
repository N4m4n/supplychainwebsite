export function ProfileSection() {
  return (
    <section className="profile-section" id="about">
      <div className="profile-art">
        <div className="profile-frame">
          <div className="profile-image-placeholder">
            <span>IMAGE PLACEHOLDER</span>
            <p>TODO: Add a founder/team photo, or replace with India-Nigeria trade imagery.</p>
          </div>
          <span className="profile-corner corner-tl" />
          <span className="profile-corner corner-br" />
        </div>
      </div>
      <div className="profile-copy">
        <div className="section-kicker">
          <span>04 / ABOUT [COMPANY NAME]</span>
          <span className="kicker-rule" />
        </div>
        <p className="profile-overline">A BRIDGE BETWEEN INDIA & NIGERIA</p>
        <h2>
          Your trusted partner
          <br />
          <em>in international trade.</em>
        </h2>
        <p className="profile-lead">
          Shared global and Nigerian partnerships. One simpler way to import.
        </p>
        <p className="profile-description">
          We combine international trade expertise with a practical
          understanding of Nigerian regulations and business practices. Based
          in Nigeria and India, our network helps businesses connect with
          global markets through transparent, reliable import facilitation.
        </p>
        <div className="profile-values">
          <div>
            <h3>Our mission</h3>
            <p>
              Make cross-border trade more seamless and dependable with
              reliable service, honest advice and accountable support.
            </p>
          </div>
          <div>
            <h3>Our vision</h3>
            <p>
              Become a trusted partner for businesses trading with Nigeria,
              building a lasting bridge between Nigeria and global markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
