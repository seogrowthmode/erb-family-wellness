import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import FormCard from "@/components/FormCard";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";

export const metadata: Metadata = {
  title: "Spinal Correction Southlake TX - Erb Wellness",
  description:
    "Spinal correction in Southlake, TX. Advanced structural realignment with X-ray guided care. 28 years experience. Call (817) 895-0075.",
  alternates: { canonical: "https://www.erbfamilywellness.com/southlake/spinal-correction/" },
};

const faqs = [
  { question: "How does spinal correction work at the Southlake office?", answer: "Dr. Erb takes detailed X-rays at your first visit to identify specific structural misalignments. He then designs a phased correction plan with measurable goals -- initial intensive care, progressive correction, and long-term stabilization. Follow-up imaging verifies your structural changes over time." },
  { question: "How long does spinal correction take?", answer: "Correction timelines depend on severity. Many Southlake patients see measurable structural changes within 3-6 months, with full programs lasting 12-24 months. Dr. Erb sets clear milestones at each phase." },
  { question: "Is spinal correction safe for my whole family?", answer: "Yes. We adjust techniques based on age, condition, and individual needs. Families from Timarron, Carillon, and throughout Southlake bring everyone from newborns to grandparents for corrective care." },
  { question: "What is the Southlake office phone number?", answer: "Call our Southlake location at (817) 895-0075. We are at 1845 E Southlake Blvd, Suite 140." },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};
const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.erbfamilywellness.com" },
    { "@type": "ListItem", position: 2, name: "Southlake", item: "https://www.erbfamilywellness.com/southlake/" },
    { "@type": "ListItem", position: 3, name: "Spinal Correction", item: "https://www.erbfamilywellness.com/southlake/spinal-correction/" },
  ],
};

export default function SouthlakeSpinalCorrectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Southlake", href: "/southlake" }, { label: "Spinal Correction" }]}
        titleLight="Spinal Correction in"
        titleHeavy="Southlake TX"
        subtitle="Structural spinal realignment with X-ray verified results. Not a quick adjustment -- a measurable correction program designed for lasting change."
      />
      <StatsBar items={["X-Ray Guided", "Phased Correction", "28 Years", "Olympic Credentials"]} />
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <div style={{ display: "grid", gridTemplateColumns: "55fr 45fr", gap: 64, alignItems: "start" }} className="split--responsive">
            <RevealOnScroll>
              <div>
                <span className="label">Spinal Correction</span>
                <h2 className="section-headline"><span className="light">Your spine has a design.</span><span className="heavy">We restore it.</span></h2>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
                  Active Southlake professionals and families living in neighborhoods like Timarron and Stone Lakes often dismiss spinal issues as normal wear and tear. But structural misalignment affects nerve function, immune response, and your body&apos;s ability to heal itself.
                </p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
                  At our Southlake office, Dr. Erb identifies the exact vertebral shifts causing your symptoms through diagnostic imaging. He then creates a personalized correction plan -- measurable, phased, and verified with follow-up X-rays.
                </p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                  This approach is why patients travel from across the country and internationally for Dr. Erb&apos;s care. Now Southlake families can access the same expertise locally on E Southlake Blvd.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}><FormCard subtitle="Start your spinal correction in Southlake." /></RevealOnScroll>
          </div>
        </div>
      </section>
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center"><span className="label">Southlake Services</span></div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              {[
                { name: "Chiropractic", href: "/southlake/chiropractic" },
                { name: "HBOT", href: "/southlake/hbot" },
                { name: "SoftWave", href: "/southlake/softwave" },
                { name: "Decompression", href: "/southlake/spinal-decompression" },
                { name: "Thermography", href: "/southlake/thermography" },
                { name: "Neuropathy", href: "/southlake/neuropathy" },
              ].map((s) => <Link key={s.href} href={s.href} style={{ padding: "10px 20px", background: "#fff", borderRadius: 999, fontSize: 14, fontWeight: 500, color: "var(--color-teal)", textDecoration: "none", boxShadow: "0 2px 8px rgba(14,24,44,.06)" }}>{s.name}</Link>)}
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <section className="page-section page-section--navy" style={{ textAlign: "center" }}>
        <div className="container-erb"><RevealOnScroll>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "var(--color-text-light)", marginBottom: 32 }}>Start your correction in Southlake.</h2>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/schedule" className="btn btn--teal">Book Your $67 Visit &rarr;</Link>
            <a href="tel:8178950075" className="btn btn--outline" style={{ borderColor: "rgba(241,236,232,.3)", color: "var(--color-text-light)" }}>(817) 895-0075</a>
          </div>
        </RevealOnScroll></div>
      </section>
      <section className="page-section"><div className="container-erb"><div className="split split--40-60">
        <div><span className="label">FAQ</span><RevealOnScroll><h2 style={{ lineHeight: 1.15 }}><span className="title-light">Spinal Correction</span><span className="title-heavy">Southlake TX</span></h2></RevealOnScroll></div>
        <RevealOnScroll delay={200}><FAQ items={faqs} /></RevealOnScroll>
      </div></div></section>
      <section style={{ padding: "40px 0", background: "var(--color-cream)", textAlign: "center" }}><div className="container-erb"><p style={{ fontSize: 15, color: "var(--color-text-secondary)" }}>This page is for our Southlake location. Looking for <Link href="/coppell/spinal-correction" style={{ color: "var(--color-teal)", fontWeight: 600 }}>spinal correction in Coppell</Link>?</p></div></section>
    </>
  );
}
