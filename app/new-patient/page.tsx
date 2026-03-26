import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "$67 New Patient Special | Erb Family Wellness",
  description:
    "$67 new patient visit in Coppell TX includes consultation, exam, X-rays & first adjustment. Call (972) 393-6262 to book.",
};

const faqItems = [
  {
    question: "What's included in the $67 visit?",
    answer: "Comprehensive consultation, thorough examination, any necessary X-rays, and your first adjustment. Dr. Erb will identify the root cause of your health concerns.",
  },
  {
    question: "How long is the first visit?",
    answer: "Plan for approximately 45-60 minutes. We take time to understand your health history, perform thorough diagnostics, and discuss your personalized care plan.",
  },
  {
    question: "Do I need a referral?",
    answer: "No referral needed. You can book directly by calling (972) 393-6262 or using our online form.",
  },
  {
    question: "What if I'm nervous about chiropractic care?",
    answer: "That's completely normal. Dr. Erb and our team will explain everything before any treatment. We see patients of all ages — from 2-month-old babies to grandparents.",
  },
  {
    question: "Which location should I choose?",
    answer: "Both locations offer the same level of care. Choose whichever is most convenient: Coppell (255 S Denton Tap Rd) or Southlake (1845 E Southlake Blvd).",
  },
];

export default function NewPatientPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "New Patients" }]}
        titleLight="Your $67 first visit —"
        titleHeavy="everything you need to know."
        subtitle="Comprehensive consultation, exam, X-rays, and your first adjustment. Two locations: Coppell and Southlake."
      />

      {/* WHAT TO EXPECT */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">WHAT TO EXPECT</span>
              <h2 className="section-headline">
                <span className="light">Three steps to</span>
                <span className="heavy">extraordinary health.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div style={{ maxWidth: 700, margin: "0 auto" }}>
              <div className="steps">
                <div className="step">
                  <div className="step__num">01</div>
                  <div className="step__content">
                    <h4>Book Your $67 Visit</h4>
                    <p>Choose Coppell or Southlake. Call (972) 393-6262 or book online. We&rsquo;ll confirm your appointment and send you everything you need.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step__num">02</div>
                  <div className="step__content">
                    <h4>Advanced Diagnostics</h4>
                    <p>Your first visit includes a comprehensive consultation, thorough examination, and any necessary X-rays. Dr. Erb may also recommend thermography or blood microscopy for a complete picture.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step__num">03</div>
                  <div className="step__content">
                    <h4>Your Custom 5 Essentials Plan</h4>
                    <p>Based on your diagnostics, Dr. Erb creates a personalized corrective care plan built on all 5 pillars of health &mdash; designed for YOUR body, YOUR goals, YOUR family.</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div style={{ marginTop: 56 }}>
              <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", minHeight: 280, background: "linear-gradient(135deg, rgba(42,125,108,.12) 0%, rgba(14,24,44,.06) 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 32 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-teal)", letterSpacing: 1, textTransform: "uppercase" }}>Erb Family Wellness &mdash; Advanced Care</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* $67 SPECIAL */}
      <section className="page-section page-section--navy" style={{ textAlign: "center" }}>
        <div className="container-erb">
          <RevealOnScroll>
            <span className="label label--light">NEW PATIENT SPECIAL</span>
            <div style={{ fontSize: 80, fontWeight: 900, color: "var(--color-gold)", lineHeight: 1, marginBottom: 16 }}>$67</div>
            <p style={{ fontSize: 20, fontWeight: 500, color: "var(--color-text-light)", lineHeight: 1.5, marginBottom: 12 }}>
              Comprehensive Consultation + Exam + X-Rays + First Adjustment
            </p>
            <p style={{ fontSize: 15, color: "rgba(241,236,232,.5)", marginBottom: 36 }}>
              Everything you need to start your healing journey &mdash; for just $67.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 20 }}>
              <Link href="/schedule" className="btn btn--teal">Book at Coppell &rarr;</Link>
              <Link href="/schedule" className="btn btn--outline">Book at Southlake &rarr;</Link>
            </div>
            <p style={{ fontSize: 13, color: "rgba(241,236,232,.4)" }}>CareCredit accepted &middot; Same-day availability</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* PATIENT PAPERWORK */}
      <section className="page-section page-section--white">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head">
              <span className="label">BEFORE YOUR VISIT</span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="split split--45-55">
              <div className="form-card">
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 6 }}>Download Patient Forms</h3>
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", marginBottom: 24 }}>Complete before your visit to save time.</p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {["New Patient Intake Form", "Health History Questionnaire", "Insurance Information Form"].map((form) => (
                    <a key={form} href="#" className="form-download-item" style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 0", borderBottom: "1px solid rgba(14,24,44,.08)", textDecoration: "none" }}>
                      <div style={{ width: 40, height: 40, minWidth: 40, borderRadius: "var(--radius-sm)", background: "rgba(42,125,108,.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="var(--color-teal)" fill="none" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </div>
                      <span style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)" }}>{form}</span>
                    </a>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: "var(--color-text-secondary)", marginTop: 20, fontStyle: "italic" }}>
                  Or complete forms in-office upon arrival.
                </p>
              </div>
              <div>
                <h2 className="section-headline" style={{ marginBottom: 32 }}>
                  <span className="light">What to bring</span>
                  <span className="heavy">to your first visit.</span>
                </h2>
                <div className="checklist">
                  {[
                    "Photo ID",
                    "Insurance card (if applicable)",
                    "List of current medications",
                    "Completed patient forms (if downloaded)",
                    "Comfortable clothing for examination",
                    "Any prior imaging (X-rays, MRI) if available",
                  ].map((item) => (
                    <div key={item} className="checklist__item">
                      <div className="checklist__icon">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--color-teal)" fill="none" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 15, color: "var(--color-text-secondary)", marginTop: 32 }}>
                  Questions? Call <a href="tel:9723936262" style={{ fontWeight: 700, color: "var(--color-teal)" }}>(972) 393-6262</a>
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* INSURANCE & PAYMENT */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">INSURANCE &amp; PAYMENT</span>
              <h2 className="section-headline">
                <span className="light">Flexible payment</span>
                <span className="heavy">options.</span>
              </h2>
              <p className="section-sub">We believe everyone deserves access to advanced corrective care. We work with most insurance plans and offer flexible payment options.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="cards-grid cards-grid--3">
              {[
                { title: "Insurance", desc: "We work with most major insurance providers. Call to verify your coverage before your visit.", gold: false },
                { title: "CareCredit", desc: "Interest-free financing available. Apply online or in-office. Approved in minutes.", gold: true },
                { title: "Cash Pay", desc: "Affordable cash-pay options for uninsured patients. Ask about our wellness packages.", gold: false },
              ].map((card) => (
                <div key={card.title} style={{ background: "#fff", borderRadius: "var(--radius-md)", padding: "36px 28px", textAlign: "center", boxShadow: "0 4px 20px rgba(14,24,44,.06)", transition: "transform .3s" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(42,125,108,.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <svg viewBox="0 0 24 24" width="28" height="28" stroke="var(--color-teal)" fill="none" strokeWidth="1.5">
                      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: card.gold ? "var(--color-gold)" : "var(--color-text-primary)", marginBottom: 10 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHY ERB */}
      <section className="page-section page-section--white">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head">
              <span className="label">WHY ERB</span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="split split--50-50">
              <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", minHeight: 360, background: "linear-gradient(135deg, rgba(42,125,108,.15) 0%, rgba(14,24,44,.08) 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 32 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-teal)", letterSpacing: 1, textTransform: "uppercase" }}>HBOT &amp; Advanced Technology</span>
              </div>
              <div>
                <h2 className="section-headline" style={{ marginBottom: 32 }}>
                  <span className="light">This isn&rsquo;t</span>
                  <span className="heavy">a normal chiropractor.</span>
                </h2>
                <div className="checklist" style={{ marginBottom: 32 }}>
                  {[
                    "Board-Certified Chiropractic Neurologist \u2014 one of few in DFW",
                    "2012 London Olympics \u2014 treated gold medalists",
                    "HBOT, SoftWave, Thermography, Blood Microscopy \u2014 technology no one else offers",
                    "28 years, 306+ reviews, patients from around the world",
                  ].map((item) => (
                    <div key={item} className="checklist__item">
                      <div className="checklist__icon">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--color-teal)" fill="none" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, fontStyle: "italic" }}>
                  We&rsquo;re not here to crack your back and send you home. We&rsquo;re here to find the root cause and correct it.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FIRST VISIT FAQ */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="split split--40-60">
              <div>
                <span className="label">FIRST VISIT FAQ</span>
                <h2 className="section-headline" style={{ marginTop: 8 }}>
                  <span className="light">New patient</span>
                  <span className="heavy">questions.</span>
                </h2>
              </div>
              <FAQ items={faqItems} />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
