import Link from "next/link";

export function TeamSection() {
  return (
    <section className="profile-section team-section" id="team">
      <div className="profile-art">
        <div className="profile-frame">
          <div className="profile-image-placeholder">
            <span>TEAM IMAGE</span>
            <p>
              TODO: Add a founder/team portrait, or use a trade-route image if
              you prefer not to feature an individual.
            </p>
          </div>
          <span className="profile-corner corner-tl" />
          <span className="profile-corner corner-br" />
        </div>
      </div>
      <div className="profile-copy">
        <div className="section-kicker">
          <span>OUR TEAM</span>
          <span className="kicker-rule" />
        </div>
        <p className="profile-overline">NIGERIA · INDIA · GLOBAL PARTNERS</p>
        <h1>
          One connected team.
          <br />
          <em>Every step of the way.</em>
        </h1>
        <p className="profile-lead">
          International trade knowledge, local understanding, and clear
          communication.
        </p>
        <p className="profile-description">
          Our team brings together Nigeria-based operations, partners in India,
          and a wider global network. We work across these markets to coordinate
          sourcing, shipping, compliance and delivery as one import journey.
        </p>
        <div className="profile-values">
          <div>
            <h3>Nigeria operations</h3>
            <p>
              Local knowledge of Nigerian regulations, ports and business
              practices.
            </p>
          </div>
          <div>
            <h3>India and global network</h3>
            <p>
              Overseas sourcing and partner coordination that connects
              suppliers to the destination.
            </p>
          </div>
        </div>
        <Link className="text-link" href="/#contact">
          Talk to our team
        </Link>
      </div>
    </section>
  );
}
