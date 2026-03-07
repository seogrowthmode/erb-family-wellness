"use client";

import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function ContactPage() {
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
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" placeholder="First name" />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" placeholder="Last name" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" placeholder="you@email.com" />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" placeholder="(___) ___-____" onChange={handlePhoneFormat} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group form-group--full">
                      <label>Preferred Location</label>
                      <select>
                        <option value="" disabled>Select a location</option>
                        <option value="coppell">Coppell</option>
                        <option value="southlake">Southlake</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group form-group--full">
                      <label>Message</label>
                      <textarea placeholder="How can we help you?" rows={4} />
                    </div>
                  </div>
                  <button type="submit" className="form-card__submit">Send Message &rarr;</button>
                  <p className="form-card__note">We&rsquo;ll respond within 24 hours.</p>
                </form>
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
                  <a href="tel:9723936262" style={{ color: "var(--color-teal)", fontWeight: 600 }}>(972) 393-6262</a>
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

      {/* IMAGE SECTION */}
      <section className="page-section page-section--white page-section--compact">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="img-placeholder img-placeholder--med">
              Modern Erb Family Wellness clinic interior. HBOT chamber, thermography equipment, warm reception area visible.
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
