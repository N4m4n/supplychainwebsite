"use client";

import { type FormEvent, useState } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const focus = String(formData.get("focus") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Website enquiry: ${focus}`);
    const body = encodeURIComponent(
      `Hello,\n\n${message}\n\nName: ${name}\nEmail: ${email}\nArea of interest: ${focus}`,
    );

    setSubmitted(true);
    window.location.href = `mailto:info@ubantu.co.in?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-top section-wrap">
        <div>
          <div className="section-kicker section-kicker-light">
            <span>06 / REQUEST AN IMPORT CONSULTATION</span>
            <span className="kicker-rule" />
          </div>
          <h2>
            Let’s simplify
            <br />
            <em>your next import.</em>
          </h2>
          <p className="contact-intro">
            Tell us what you are importing, where you are sourcing it and
            where you need support. We’ll discuss the requirements, next steps
            and the costs to consider.
          </p>
        </div>
        <div className="contact-direct">
          <span className="contact-direct-label">CONTACT OUR TEAM</span>
          <a href="mailto:info@ubantu.co.in">
            info@ubantu.co.in
          </a>
          <span className="contact-location">
            Nigeria · India · Global trade network
          </span>
          <p className="whatsapp-note">
            TODO: Add the company WhatsApp number and click-to-chat link.
          </p>
        </div>
      </div>

      <form className="contact-form section-wrap" onSubmit={handleSubmit}>
        <div className="form-heading">
          <span>GET IN TOUCH</span>
          <p>Tell us a little about your business and where you need help.</p>
        </div>
        <div className="form-fields">
          <label>
            <span>Your name</span>
            <input autoComplete="name" name="name" placeholder="Name" required />
          </label>
          <label>
            <span>Email address</span>
            <input
              autoComplete="email"
              name="email"
              placeholder="you@company.com"
              required
              type="email"
            />
          </label>
          <label>
            <span>Area of interest</span>
            <select defaultValue="" name="focus" required>
              <option disabled value="">
                Choose a focus
              </option>
              <option>Overseas sourcing or freight</option>
              <option>Inspections or customs clearance</option>
              <option>Trade compliance or Form M</option>
              <option>End-to-end import management</option>
              <option>Something else</option>
            </select>
          </label>
          <label className="message-field">
            <span>What would you like to work through?</span>
            <textarea
              name="message"
              placeholder="A few details about your priorities..."
              required
              rows={3}
            />
          </label>
          <div className="form-submit-row">
            <p aria-live="polite">
              {submitted
                ? "Your email app should open with a draft. You can also email info@ubantu.co.in directly."
                : "Your email app will open with your message ready to send."}
            </p>
            <button className="button button-light" type="submit">
              Write an email
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
