import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import FormCard from "@/components/FormCard";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";

export const metadata: Metadata = {
  title: "Chiropractic Care Southlake TX - Erb Wellness",
  description:
    "Chiropractic care in Southlake, TX. Dr. David Erb provides corrective adjustments, not just symptom relief. Carroll ISD families trust us. (817) 895-0075.",
  alternates: { canonical: "https://www.erbfamilywellness.com/southlake/chiropractic" },
};

const faqs = [
  { question: "What makes Erb different from other Southlake chiropractors?", answer: "Dr. Erb practices advanced corrective chiropractic -- structural realignment of the spine, not just pain management. With 2012 Olympic credentials, 28 years of experience, and technology like HBOT and SoftWave that no other Southlake practice offers, Erb Family Wellness provides a fundamentally different level of care." },
  { question: "Where is the Southlake chiropractic office?", answer: "We are at 1845 E Southlake Blvd, Suite 140, Southlake, TX 76092 -- on E Southlake Blvd near Town Square. Convenient for families in Timarron, Carillon, Clariden Ranch, and throughout Southlake." },
  { question: "Do you treat Carroll ISD student athletes?", answer: "Absolutely. We work with many Carroll Senior High and Carroll ISD athletes for sports-related injuries, performance optimization, and injury prevention. Dr. Erb's Olympic experience means your athlete gets elite-level care." },
  { question: "What are the Southlake office hours?", answer: "Monday: 8-10 AM, 3:30-6 PM. Tuesday: 11 AM-1 PM. Wednesday: 8-10 AM, 3:30-6 PM. Thursday: 11 AM-1 PM, 4-5:30 PM. Friday: 7:30-10 AM. Call (817) 895-0075 to schedule." },
  { question: "How much does the first visit cost?", answer: "Your new patient visit is $67 and includes consultation, examination, necessary X-rays, and your first adjustment. Save $20 by prepaying online for $47." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.erbfamilywellness.com" },
    { "@type": "ListItem", position: 2, name: "Southlake", item: "https://www.erbfamilywellness.com/southlake/" },
    { "@type": "ListItem", position: 3, name: "Chiropractic Care", item: "https://www.erbfamilywellness.com/southlake/chiropractic/" },
  ],
};

export default function SouthlakeChiropracticPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Southlake", href: "/southlake" }, { label: "Chiropractic Care" }]}
        titleLight="Chiropractic Care in"
        titleHeavy="Southlake TX"
        subtitle="Corrective chiropractic that restores your spine's structural alignment. Not temporary relief -- lasting correction backed by 28 years and Olympic-level expertise."
      />
      <StatsBar items={["28 Years Experience", "2012 London Olympics", "105+ Southlake Reviews", "Carroll ISD Families"]} />

      {/* INTRO */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <div style={{ display: "grid", gridTemplateColumns: "55fr 45fr", gap: 64, alignItems: "start" }} className="split--responsive">
            <RevealOnScroll>
              <div>
                <span className="label">Chiropractic in Southlake</span>
                <h2 className="section-headline">
                  <span className="light">Your Southlake family</span>
                  <span className="heavy">deserves corrective care.</span>
                </h2>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
                  Families throughout Southlake -- from Timarron to Carillon to the neighborhoods around Town Square -- bring their children, athletes, and aging parents to Erb Family Wellness because we practice corrective chiropractic care, not temporary pain relief.
                </p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
                  Dr. David Erb uses detailed X-ray analysis to identify specific spinal misalignments that cause symptoms. Then he builds a phased correction plan that progressively restores your spine's natural structure -- similar to how braces realign teeth over time.
                </p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                  At our Southlake office on E Southlake Blvd, you get the same advanced technology and Olympic-caliber care that draws patients from around the world to Dr. Erb -- including HBOT, SoftWave, thermography, and blood microscopy.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <FormCard subtitle="Schedule your chiropractic evaluation in Southlake." />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="page-section">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">Our Approach</span>
              <h2 className="section-headline">
                <span className="light">Corrective care that</span>
                <span className="heavy">changes your structure.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="empathy-grid">
              {[
                { title: "X-Ray Guided", desc: "Every correction plan starts with detailed imaging. We measure your spinal angles and track structural changes over time." },
                { title: "Phased Correction", desc: "Initial intensive care, then corrective adjustments, then stabilization and maintenance. Each phase has measurable goals." },
                { title: "Whole-Body Integration", desc: "Part of the MaxLiving 5 Essentials: spine, nutrition, mindset, oxygen, and toxin reduction for complete transformation." },
              ].map((card, i) => (
                <div key={i} style={{ background: "var(--color-cream)", borderRadius: "var(--radius-md)", padding: "36px 28px", borderLeft: "4px solid var(--color-olive)" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 8 }}>{card.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">Southlake Services</span>
              <h2 className="section-headline">
                <span className="light">Complete care at our</span>
                <span className="heavy">Southlake office.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="cards-grid cards-grid--4">
              {[
                { name: "HBOT", href: "/southlake/hbot" },
                { name: "SoftWave", href: "/southlake/softwave" },
                { name: "Spinal Correction", href: "/southlake/spinal-correction" },
                { name: "Thermography", href: "/southlake/thermography" },
                { name: "Neuropathy", href: "/southlake/neuropathy" },
                { name: "Pediatric", href: "/southlake/pediatric" },
                { name: "Prenatal", href: "/southlake/prenatal" },
                { name: "Decompression", href: "/southlake/spinal-decompression" },
              ].map((svc) => (
                <Link key={svc.href} href={svc.href} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "24px 16px", background: "#fff", borderRadius: "var(--radius-md)", textDecoration: "none", boxShadow: "0 2px 12px rgba(14,24,44,.04)" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-primary)", textAlign: "center" }}>{svc.name}</span>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section page-section--navy" style={{ textAlign: "center" }}>
        <div className="container-erb">
          <RevealOnScroll>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "var(--color-text-light)", marginBottom: 8 }}>Ready for corrective care?</h2>
            <p style={{ fontSize: 18, color: "rgba(241,236,232,.7)", marginBottom: 32 }}>Call our Southlake office today.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/schedule" className="btn btn--teal">Book Your $67 Visit &rarr;</Link>
              <a href="tel:8178950075" className="btn btn--outline" style={{ borderColor: "rgba(241,236,232,.3)", color: "var(--color-text-light)" }}>(817) 895-0075</a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="page-section">
        <div className="container-erb">
          <div className="split split--40-60">
            <div>
              <span className="label">Common Questions</span>
              <RevealOnScroll>
                <h2 style={{ lineHeight: 1.15, marginBottom: 16 }}>
                  <span className="title-light">Chiropractic Care</span>
                  <span className="title-heavy">in Southlake TX</span>
                </h2>
              </RevealOnScroll>
            </div>
            <RevealOnScroll delay={200}>
              <FAQ items={faqs} />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* LOCATION NOTICE */}
      <section style={{ padding: "40px 0", background: "var(--color-cream)", textAlign: "center" }}>
        <div className="container-erb">
          <p style={{ fontSize: 15, color: "var(--color-text-secondary)" }}>
            This page is for our Southlake location. Looking for <Link href="/coppell/chiropractic" style={{ color: "var(--color-teal)", fontWeight: 600 }}>chiropractic care in Coppell</Link>?
          </p>
        </div>
      </section>
    </>
  );
}
