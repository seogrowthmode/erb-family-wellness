import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import FormCard from "@/components/FormCard";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";

export const metadata: Metadata = {
  title: "HBOT Southlake TX - Erb Family Wellness",
  description:
    "Hyperbaric oxygen therapy in Southlake, TX. Breathe 100% oxygen in a pressurized chamber for up to 800% stem cell growth. (817) 895-0075.",
  alternates: { canonical: "https://www.erbfamilywellness.com/southlake/hbot" },
};

const faqs = [
  { question: "What is Hyperbaric Oxygen Therapy (HBOT)?", answer: "HBOT places you inside a pressurized chamber where you breathe approximately 100% pure oxygen. This dramatically increases oxygen concentration in your blood and tissues, stimulating up to 800% stem cell growth and accelerating your body's natural healing processes at the cellular level." },
  { question: "Is HBOT available at the Southlake location?", answer: "Yes. Our Southlake office at 1845 E Southlake Blvd, Suite 140 offers HBOT sessions. Call (817) 895-0075 to schedule your consultation." },
  { question: "How long is an HBOT session?", answer: "Sessions typically last 60-90 minutes. Many patients relax, read, or rest during the session. The chamber is clear and comfortable." },
  { question: "What conditions does HBOT treat?", answer: "HBOT is used for neurological recovery, stroke rehabilitation, traumatic brain injury, concussion recovery, sports injuries, chronic pain, neuropathy, wound healing, Lyme disease, and anti-aging. Dr. Erb will evaluate whether HBOT is appropriate for your specific condition." },
  { question: "How many HBOT sessions will I need?", answer: "Treatment plans vary. Some patients see results in 10-20 sessions, while chronic neurological conditions may require 40 or more. Dr. Erb creates a custom plan based on your condition and diagnostic findings." },
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
    { "@type": "ListItem", position: 3, name: "HBOT", item: "https://www.erbfamilywellness.com/southlake/hbot/" },
  ],
};

export default function SouthlakeHBOTPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Southlake", href: "/southlake" }, { label: "HBOT" }]}
        titleLight="Hyperbaric Oxygen Therapy in"
        titleHeavy="Southlake TX"
        subtitle="Breathe 100% oxygen in a pressurized chamber. Up to 800% stem cell growth. Neurological recovery, injury healing, and cellular regeneration."
      />
      <StatsBar items={["800% Stem Cell Growth", "~100% Oxygen", "Non-Invasive", "60-90 Min Sessions"]} />
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <div style={{ display: "grid", gridTemplateColumns: "55fr 45fr", gap: 64, alignItems: "start" }} className="split--responsive">
            <RevealOnScroll>
              <div>
                <span className="label">HBOT in Southlake</span>
                <h2 className="section-headline"><span className="light">Healing at the</span><span className="heavy">cellular level.</span></h2>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
                  Southlake families dealing with neurological conditions, concussion recovery for Carroll ISD athletes, or chronic pain that has not responded to conventional treatment are discovering HBOT at Erb Family Wellness. Our Southlake office on E Southlake Blvd brings this advanced technology to the Southlake, Keller, and Colleyville communities.
                </p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
                  HBOT delivers approximately 100% pure oxygen under pressure, dissolving oxygen directly into your blood plasma and reaching tissues that red blood cells cannot access. Research demonstrates this environment can stimulate up to 800% stem cell production -- your body&apos;s own repair mechanism, supercharged.
                </p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                  Dr. Erb integrates HBOT into comprehensive treatment plans alongside corrective chiropractic, SoftWave, and advanced diagnostics. This multi-modal approach is what makes Erb Family Wellness in Southlake fundamentally different from standalone HBOT providers.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}><FormCard subtitle="Experience HBOT at our Southlake office." submitText="Book My HBOT Consultation" /></RevealOnScroll>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="container-erb"><RevealOnScroll>
          <div className="section-head section-head--center"><span className="label">The Science</span><h2 className="section-headline"><span className="light">Why pressurized oxygen</span><span className="heavy">transforms healing.</span></h2></div>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="empathy-grid">
            {[
              { title: "Stem Cell Proliferation", desc: "Pressurized oxygen triggers massive stem cell release from bone marrow, flooding damaged tissues with your body's natural repair cells." },
              { title: "Neuroplasticity Support", desc: "Increased oxygen delivery to the brain supports neurological recovery from stroke, TBI, and concussion -- critical for Southlake athletes." },
              { title: "Anti-Inflammatory Cascade", desc: "HBOT reduces systemic inflammation at the cellular level, addressing the root mechanism behind many chronic conditions." },
            ].map((c, i) => (
              <div key={i} style={{ background: "var(--color-cream)", borderRadius: "var(--radius-md)", padding: "36px 28px", borderLeft: "4px solid var(--color-olive)" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll></div>
      </section>
      <section className="page-section page-section--cream">
        <div className="container-erb"><RevealOnScroll><div className="section-head section-head--center"><span className="label">Southlake Services</span></div></RevealOnScroll>
        <RevealOnScroll delay={100}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            {[{ name: "SoftWave", href: "/southlake/softwave" }, { name: "Spinal Correction", href: "/southlake/spinal-correction" }, { name: "Thermography", href: "/southlake/thermography" }, { name: "Neuropathy", href: "/southlake/neuropathy" }, { name: "Decompression", href: "/southlake/spinal-decompression" }].map((s) => <Link key={s.href} href={s.href} style={{ padding: "10px 20px", background: "#fff", borderRadius: 999, fontSize: 14, fontWeight: 500, color: "var(--color-teal)", textDecoration: "none", boxShadow: "0 2px 8px rgba(14,24,44,.06)" }}>{s.name}</Link>)}
          </div>
        </RevealOnScroll></div>
      </section>
      <section className="page-section page-section--navy" style={{ textAlign: "center" }}>
        <div className="container-erb"><RevealOnScroll>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "var(--color-text-light)", marginBottom: 32 }}>Experience HBOT in Southlake.</h2>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/schedule" className="btn btn--teal">Book Your Consultation &rarr;</Link>
            <a href="tel:8178950075" className="btn btn--outline" style={{ borderColor: "rgba(241,236,232,.3)", color: "var(--color-text-light)" }}>(817) 895-0075</a>
          </div>
        </RevealOnScroll></div>
      </section>
      <section className="page-section"><div className="container-erb"><div className="split split--40-60">
        <div><span className="label">FAQ</span><RevealOnScroll><h2 style={{ lineHeight: 1.15 }}><span className="title-light">HBOT</span><span className="title-heavy">Southlake TX</span></h2></RevealOnScroll></div>
        <RevealOnScroll delay={200}><FAQ items={faqs} /></RevealOnScroll>
      </div></div></section>
      <section style={{ padding: "40px 0", background: "var(--color-cream)", textAlign: "center" }}><div className="container-erb"><p style={{ fontSize: 15, color: "var(--color-text-secondary)" }}>This page is for our Southlake location. Looking for <Link href="/coppell/hbot" style={{ color: "var(--color-teal)", fontWeight: 600 }}>HBOT in Coppell</Link>?</p></div></section>
    </>
  );
}
