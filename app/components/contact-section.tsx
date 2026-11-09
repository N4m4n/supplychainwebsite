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
      `Hello Kedarnath,\n\n${message}\n\nName: ${name}\nEmail: ${email}\nArea of interest: ${focus}`,
    );

    setSubmitted(true);
    window.location.href = `mailto:kaushikkedar.dk@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-top section-wrap">
        <div>
          <div className="section-kicker section-kicker-light">
            <span>06 / LET’S TALK</span>
            <span className="kicker-rule" />
          </div>
          <h2>
            A conversation,
            <br />
            <em>not a sales pitch.</em>
          </h2>
          <p className="contact-intro">
            If your supply chain is holding back growth, tying up cash or
            exposing your business to risk, let’s talk about what could work
            better.
          </p>
        </div>
        <div className="contact-direct">
          <span className="contact-direct-label">REACH KEDARNATH DIRECTLY</span>
          <a href="mailto:kaushikkedar.dk@gmail.com">
            kaushikkedar.dk@gmail.com
          </a>
          <a href="tel:+919311872626">
            +91 93118 72626
          </a>
          <span className="contact-location">
            Lagos, Nigeria · Delhi, India · Across Africa
          </span>
        </div>
      </div>

      <form className="contact-form section-wrap" onSubmit={handleSubmit}>
        <div className="form-heading">
          <span>HAVE SOMETHING IN MIND?</span>
          <p>Share a little context and we’ll take it from there.</p>
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
              <option>Supply chain advisory</option>
              <option>Nigeria regulatory roadmap</option>
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
                ? "Your email app should open with your enquiry. You can also email us directly."
                : "Submitting opens a pre-filled email in your email app."}
            </p>
            <button className="button button-light" type="submit">
              Prepare an enquiry
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
