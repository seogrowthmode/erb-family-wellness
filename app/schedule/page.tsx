"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function SchedulePage() {
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

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Schedule" }]}
        titleLight="Schedule Your"
        titleHeavy="Appointment"
        subtitle="$67 New Patient Special — Comprehensive consultation, exam, X-rays, and first adjustment."
        short
      />

      {/* MAIN FORM */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <RevealOnScroll>
              <div className="form-card" style={{ padding: "56px 48px" }}>
                <p className="form-card__price">
                  New Patient Special: <strong style={{ fontSize: 40 }}>$67</strong>
                </p>
                <p className="form-card__subtitle">Choose your location and preferred service below.</p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fname">First Name</label>
                      <input type="text" id="fname" placeholder="First name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lname">Last Name</label>
                      <input type="text" id="lname" placeholder="Last name" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" placeholder="you@email.com" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input type="tel" id="phone" placeholder="(555) 555-5555" onChange={handlePhoneFormat} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group form-group--full">
                      <label htmlFor="location">Preferred Location</label>
                      <select id="location" required defaultValue="">
                        <option value="" disabled>Select a location</option>
                        <option value="coppell">Coppell &mdash; 255 S Denton Tap Rd</option>
                        <option value="southlake">Southlake &mdash; 1845 E Southlake Blvd</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group form-group--full">
                      <label htmlFor="reason">Reason for Visit</label>
                      <select id="reason" required defaultValue="">
                        <option value="" disabled>Select a reason</option>
                        <option value="new-patient">New Patient Visit ($67 Special)</option>
                        <option value="hbot">Hyperbaric Oxygen Therapy (HBOT)</option>
                        <option value="softwave">SoftWave Therapy</option>
                        <option value="thermography">Thermography</option>
                        <option value="blood-microscopy">Blood Microscopy</option>
                        <option value="spinal-correction">Spinal Correction</option>
                        <option value="spinal-decompression">Spinal Decompression</option>
                        <option value="neuropathy">Neuropathy Treatment</option>
                        <option value="pediatric">Pediatric Care</option>
                        <option value="prenatal">Prenatal Care</option>
                        <option value="nutrition">Nutrition Consultation</option>
                        <option value="follow-up">Follow-Up Visit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group form-group--full">
                      <label htmlFor="day">Preferred Day</label>
                      <select id="day" required defaultValue="">
                        <option value="" disabled>Select a day</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group form-group--full">
                      <label htmlFor="message">Message <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(optional)</span></label>
                      <textarea id="message" placeholder="Anything we should know before your visit?" />
                    </div>
                  </div>
                  <button type="submit" className="form-card__submit">Book My Appointment &rarr;</button>
                </form>
                <p className="form-card__note">CareCredit accepted &middot; Same-day availability &middot; We&rsquo;ll confirm within 2 hours</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="trust-strip">
                <span><span className="stars">{"\u2605\u2605\u2605\u2605\u2605"}</span> 4.8</span>
                <span>306+ Reviews</span>
                <span>28 Years</span>
                <span>2012 Olympics</span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <p style={{ textAlign: "center", marginTop: 32, fontSize: 16, fontWeight: 600, color: "var(--color-text-secondary)" }}>
                Prefer to call? <a href="tel:9723936262" style={{ color: "var(--color-teal)" }}>(972) 393-6262</a>
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="page-section page-section--white page-section--compact">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <h2 className="section-headline" style={{ marginBottom: 0 }}>
                <span className="light" style={{ fontSize: 28 }}>Two locations.</span>
                <span className="heavy" style={{ fontSize: 36 }}>Same level of care.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="split split--50-50">
              <div className="loc-card" style={{ boxShadow: "0 8px 32px rgba(14,24,44,.07)" }}>
                <span className="loc-card__badge">Primary</span>
                <h3 className="loc-card__name">Coppell</h3>
                <div className="loc-card__detail">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--color-teal)" strokeWidth="1.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                  255 S Denton Tap Rd, Suite 200<br />Coppell, TX 75019
                </div>
                <div className="loc-card__detail">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--color-teal)" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:9723936262" style={{ color: "var(--color-teal)", fontWeight: 600 }}>(972) 393-6262</a>
                </div>
              </div>
              <div className="loc-card" style={{ boxShadow: "0 8px 32px rgba(14,24,44,.07)" }}>
                <span className="loc-card__badge">Second Location</span>
                <h3 className="loc-card__name">Southlake</h3>
                <div className="loc-card__detail">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--color-teal)" strokeWidth="1.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                  1845 E Southlake Blvd, Suite 140<br />Southlake, TX 76092
                </div>
                <div className="loc-card__detail">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--color-teal)" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:9723936262" style={{ color: "var(--color-teal)", fontWeight: 600 }}>(972) 393-6262</a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
