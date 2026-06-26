"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import { trackConversionEvent } from "@/lib/client-tracking";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handlePhoneFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length > 10) val = val.slice(0, 10);
    if (val.length >= 7) {
      e.target.value = `(${val.slice(0, 3)}) ${val.slice(3, 6)}-${val.slice(6)}`;
    } else if (val.length >= 4) {
      e.target.value = `(${val.slice(0, 3)}) ${val.slice(3)}`;
    } else if (val.length >= 1) {
      e.target.value = `(${val}`;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("fname") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lname") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      location: (form.elements.namedItem("location") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "",
      source: "contact-form",
      event_source_url: window.location.href,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.ok) {
        trackConversionEvent("generate_lead", {
          event_category: "conversion",
          event_label: "contact_form_success",
          form_name: "contact_form",
          lead_source: "website",
          location: data.location,
          value: 67,
          currency: "USD",
        });
        trackConversionEvent("lead_submit_success", {
          event_category: "conversion",
          event_label: "lead_forwarded_to_chiroflow",
          form_name: "contact_form",
          lead_source: "website",
          location: data.location,
        });
        setSubmitted(true);
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Unable to submit. Please call us at (972) 393-6262.");
    }
    setSubmitting(false);
  };

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        titleLight="Get in"
        titleHeavy="touch."
        subtitle="Two locations. One team dedicated to your health."
        short
      />

      {/* THREE COLUMN: FORM + LOCATIONS */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="three-col">
              {/* FORM */}
              <div className="form-card">
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 24 }}>
                  Send Us a Message
                </h3>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "32px 0" }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>&#10003;</div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--color-teal)", marginBottom: 8 }}>Message Sent!</h3>
                    <p style={{ fontSize: 15, color: "var(--color-text-secondary)" }}>We&rsquo;ll respond within 24 hours.</p>
                  </div>
                ) : (
                <form onSubmit={handleSubmit} data-form-name="contact_form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-fname">First Name</label>
                      <input type="text" id="contact-fname" name="fname" placeholder="First name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-lname">Last Name</label>
                      <input type="text" id="contact-lname" name="lname" placeholder="Last name" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-email">Email</label>
                      <input type="email" id="contact-email" name="email" placeholder="you@email.com" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-phone">Phone</label>
                      <input type="tel" id="contact-phone" name="phone" placeholder="(___) ___-____" onChange={handlePhoneFormat} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group form-group--full">
                      <label htmlFor="contact-location">Preferred Location</label>
                      <select id="contact-location" name="location" defaultValue="">
                        <option value="" disabled>Select a location</option>
                        <option value="coppell">Coppell</option>
                        <option value="southlake">Southlake</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group form-group--full">
                      <label htmlFor="contact-message">Message</label>
                      <textarea id="contact-message" name="message" placeholder="How can we help you?" rows={4} />
                    </div>
                  </div>
                  {error && (
                    <p style={{ color: "#e53e3e", fontSize: 13, marginBottom: 12 }}>{error}</p>
                  )}
                  <button type="submit" className="form-card__submit" disabled={submitting}>
                    {submitting ? "Sending..." : "Send Message"} &rarr;
                  </button>
                  <p className="form-card__note">We&rsquo;ll respond within 24 hours.</p>
                </form>
                )}
              </div>

              {/* COPPELL */}
              <div className="loc-card">
                <span className="loc-card__badge">PRIMARY LOCATION</span>
                <h3 className="loc-card__name">Coppell</h3>
                <div className="loc-card__detail">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>255 S Denton Tap Rd, Suite 200,<br />Coppell, TX 75019</span>
                </div>
                <div className="loc-card__detail">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:9723936262" style={{ color: "var(--color-teal)", fontWeight: 600 }}>(972) 393-6262</a>
                </div>
                <div className="loc-card__detail">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:derb@erbfamilywellness.com" style={{ color: "var(--color-text-secondary)" }}>derb@erbfamilywellness.com</a>
                </div>
                <div className="loc-card__hours">
                  <h4>Hours</h4>
                  <p>
                    Mon: 8:00&ndash;10:30 AM, 3:30&ndash;6:00 PM<br />
                    Tue: 12:00&ndash;3:00 PM<br />
                    Wed: 8:00&ndash;10:30 AM, 3:30&ndash;6:00 PM<br />
                    Thu: 2:30&ndash;5:30 PM<br />
                    Fri: 7:30&ndash;10:30 AM<br />
                    Sat&ndash;Sun: Closed
                  </p>
                </div>
                <a href="https://maps.google.com/?q=255+S+Denton+Tap+Rd+Suite+200+Coppell+TX+75019" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "var(--color-teal)", marginTop: 16 }}>
                  Get Directions &rarr;
                </a>
              </div>

              {/* SOUTHLAKE */}
              <div className="loc-card">
                <span className="loc-card__badge">SECOND LOCATION</span>
                <h3 className="loc-card__name">Southlake</h3>
                <div className="loc-card__detail">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>1845 E Southlake Blvd, Suite 140,<br />Southlake, TX 76092</span>
                </div>
                <div className="loc-card__detail">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:8178950075" style={{ color: "var(--color-teal)", fontWeight: 600 }}>(817) 895-0075</a>
                </div>
                <div className="loc-card__detail">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:derb@erbfamilywellness.com" style={{ color: "var(--color-text-secondary)" }}>derb@erbfamilywellness.com</a>
                </div>
                <a href="https://maps.google.com/?q=1845+E+Southlake+Blvd+Suite+140+Southlake+TX+76092" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "var(--color-teal)", marginTop: 20 }}>
                  Get Directions &rarr;
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="page-section page-section--white page-section--compact">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">FIND US</span>
              <h2 style={{ lineHeight: 1.15, marginBottom: 32 }}>
                <span className="title-light">Two locations</span>
                <span className="title-heavy">in the DFW Metroplex.</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="map-grid">
              <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", height: 320 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.0!2d-96.9867!3d32.9558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2be59e4b1a47%3A0x7c3b8b7d7b7b7b7b!2s255%20S%20Denton%20Tap%20Rd%20%23200%2C%20Coppell%2C%20TX%2075019!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Erb Family Wellness - Coppell Location"
                />
              </div>
              <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", height: 320 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.0!2d-97.1342!3d32.9414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dd5b2e14c8a7b%3A0x7c3b8b7d7b7b7b7b!2s1845%20E%20Southlake%20Blvd%20%23140%2C%20Southlake%2C%20TX%2076092!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Erb Family Wellness - Southlake Location"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="page-section page-section--cream page-section--compact">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="trust-strip">
              <span className="stars">{"\u2605\u2605\u2605\u2605\u2605"}</span>
              <span>4.8</span>
              <span>&middot;</span>
              <span>306+ Reviews</span>
              <span>&middot;</span>
              <span>28 Years</span>
              <span>&middot;</span>
              <span>2012 Olympics</span>
              <span>&middot;</span>
              <span>CareCredit Accepted</span>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
