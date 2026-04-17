import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Patient Resources | Erb Family Wellness Coppell TX",
  description:
    "Patient resources at Erb Family Wellness in Coppell, TX. New patient forms, what to expect, insurance info, and frequently asked questions. Call (972) 393-6262.",
  alternates: { canonical: "https://www.erbfamilywellness.com/patient-resources/" },
};

const resources = [
  {
    title: "New Patient Forms",
    desc: "Download and complete your new patient paperwork online before your first visit to save time.",
    href: "/new-patient",
    cta: "Start Intake →",
  },
  {
    title: "Schedule Your Visit",
    desc: "Book your $67 first visit at our Coppell office. Includes exam, consultation, and report of findings.",
    href: "/schedule",
    cta: "Book Now →",
  },
  {
    title: "Meet Dr. David & Dr. Kimberly Erb",
    desc: "Learn about Dr. Erb's 28 years of corrective chiropractic experience and 2012 London Olympics credentials.",
    href: "/about",
    cta: "Our Story →",
  },
  {
    title: "Real Patient Testimonials",
    desc: "Read and watch real stories from patients who overcame pain, disease, and chronic conditions through corrective care.",
    href: "/testimonials",
    cta: "See Results →",
  },
  {
    title: "Our Coppell Location",
    desc: "Address, hours, directions, and a full list of services offered at our Coppell flagship office.",
    href: "/coppell",
    cta: "Coppell Office →",
  },
  {
    title: "Our Southlake Location",
    desc: "Information about our second DFW location serving Southlake, Keller, Colleyville, and Trophy Club.",
    href: "/southlake",
    cta: "Southlake Office →",
  },
];

const faqs = [
  {
    q: "What should I expect at my first visit?",
    a: "Your first visit includes a one-on-one consultation, a thorough exam, digital posture analysis, and (if indicated) spinal X-rays. Dr. Erb will review your findings and build a corrective care plan at your second visit.",
  },
  {
    q: "Do you accept insurance?",
    a: "We accept most major insurance plans. Our team will verify your benefits before your visit. We also offer affordable cash-pay options for patients without coverage.",
  },
  {
    q: "Is chiropractic care safe for kids?",
    a: "Yes. Pediatric chiropractic care uses gentle, age-appropriate techniques. Dr. Kimberly Erb has over two decades of experience adjusting infants, toddlers, and children.",
  },
  {
    q: "How soon will I feel results?",
    a: "Many patients report noticeable improvement within 1-2 weeks. True corrective care, however, is measured in months as the spine structurally changes. Your care plan will outline expected milestones.",
  },
  {
    q: "Do I need a referral?",
    a: "No. You can schedule directly with us. If you'd like, we're happy to coordinate with your primary care physician or other specialists.",
  },
];

export default function PatientResourcesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Patient Resources" }]}
        titleLight="Patient"
        titleHeavy="Resources."
        subtitle="Everything you need before, during, and after your visit to Erb Family Wellness."
      />

      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">HELPFUL LINKS</span>
              <h2 className="section-headline">
                <span className="light">Start here to get</span>
                <span className="heavy">the most from your care.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
              marginTop: 40,
            }}
          >
            {resources.map((r, i) => (
              <RevealOnScroll key={r.href} delay={i * 60}>
                <Link
                  href={r.href}
                  style={{
                    display: "block",
                    padding: 32,
                    background: "#fff",
                    borderRadius: 16,
                    textDecoration: "none",
                    color: "inherit",
                    boxShadow: "0 2px 12px rgba(14,24,44,.06)",
                    height: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      color: "var(--color-navy)",
                      marginBottom: 12,
                    }}
                  >
                    {r.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.6,
                      marginBottom: 16,
                    }}
                  >
                    {r.desc}
                  </p>
                  <span style={{ color: "var(--color-teal)", fontWeight: 600, fontSize: 14 }}>
                    {r.cta}
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--white">
        <div className="container-erb" style={{ maxWidth: 820 }}>
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">FREQUENTLY ASKED</span>
              <h2 className="section-headline">
                <span className="light">Common questions</span>
                <span className="heavy">from new patients.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div style={{ marginTop: 40 }}>
            {faqs.map((f, i) => (
              <RevealOnScroll key={i} delay={i * 50}>
                <div
                  style={{
                    padding: "24px 0",
                    borderBottom: "1px solid rgba(14,24,44,.08)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: "var(--color-navy)",
                      marginBottom: 12,
                    }}
                  >
                    {f.q}
                  </h3>
                  <p style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                    {f.a}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--navy" style={{ textAlign: "center" }}>
        <div className="container-erb">
          <RevealOnScroll>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 300,
                color: "var(--color-text-light)",
                marginBottom: 16,
              }}
            >
              Still have questions?
            </h2>
            <p style={{ color: "rgba(241,236,232,.8)", fontSize: 17, marginBottom: 32 }}>
              Our team is happy to help. Call us or start with our new patient intake.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/schedule" className="btn btn--teal">
                Book Your $67 Visit &rarr;
              </Link>
              <a
                href="tel:9723936262"
                className="btn btn--outline"
                style={{ borderColor: "rgba(241,236,232,.3)", color: "var(--color-text-light)" }}
              >
                (972) 393-6262
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
