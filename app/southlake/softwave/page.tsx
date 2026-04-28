import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import FormCard from "@/components/FormCard";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";

export const metadata: Metadata = {
  title: "SoftWave Therapy Southlake TX - Erb Wellness",
  description:
    "SoftWave tissue regeneration therapy in Southlake, TX. Unfocused acoustic waves activate stem cells, reduce pain without surgery. (817) 895-0075.",
  alternates: { canonical: "https://erbfamilywellness.com/southlake/softwave" },
};

const faqs = [
  { question: "What is SoftWave therapy?", answer: "SoftWave uses patented electrohydraulic spark gap technology to deliver unfocused acoustic waves deep into damaged tissue. These waves activate your body's own stem cells, increase blood flow, reduce inflammation, and trigger tissue repair at the cellular level -- all without surgery, drugs, or downtime." },
  { question: "Is SoftWave available at the Southlake office?", answer: "Yes. SoftWave tissue regeneration therapy is available at our Southlake location at 1845 E Southlake Blvd, Suite 140. Call (817) 895-0075 to schedule." },
  { question: "How many SoftWave sessions are needed?", answer: "Most Southlake patients see significant improvement in 6-12 sessions. Dr. Erb designs a custom protocol based on your condition, severity, and diagnostic findings." },
  { question: "Can SoftWave help Carroll ISD athletes?", answer: "Absolutely. SoftWave is highly effective for sports injuries -- plantar fasciitis, tendonitis, shoulder and knee pain, and soft tissue injuries common in competitive athletics. Many Carroll Senior High athletes benefit from this technology." },
  { question: "Does SoftWave hurt?", answer: "Most patients describe a mild tapping sensation. Some areas may feel briefly uncomfortable, which helps identify the source of the problem. The treatment is well-tolerated and requires zero downtime." },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};
const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://erbfamilywellness.com" },
    { "@type": "ListItem", position: 2, name: "Southlake", item: "https://erbfamilywellness.com/southlake/" },
    { "@type": "ListItem", position: 3, name: "SoftWave Therapy", item: "https://erbfamilywellness.com/southlake/softwave/" },
  ],
};

export default function SouthlakeSoftwavePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Southlake", href: "/southlake" }, { label: "SoftWave Therapy" }]}
        titleLight="SoftWave Therapy in"
        titleHeavy="Southlake TX"
        subtitle="FDA-cleared acoustic wave technology that activates stem cells, reduces inflammation, and accelerates healing -- without surgery, injections, or downtime."
      />
      <StatsBar items={["Stem Cell Activation", "FDA-Cleared", "No Downtime", "10-15 Min Sessions"]} />
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <div style={{ display: "grid", gridTemplateColumns: "55fr 45fr", gap: 64, alignItems: "start" }} className="split--responsive">
            <RevealOnScroll>
              <div>
                <span className="label">SoftWave in Southlake</span>
                <h2 className="section-headline"><span className="light">Regenerate tissue</span><span className="heavy">without surgery.</span></h2>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
                  Southlake residents lead active lives -- running the trails around Bob Jones Nature Center, training at Dragon Stadium, commuting to DFW offices. When pain from an injury or chronic condition slows you down, SoftWave offers a path back to full function without the risks and recovery time of surgery.
                </p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
                  SoftWave Tissue Regeneration Therapy delivers unfocused acoustic waves that penetrate deep into damaged tissue. Unlike cortisone shots that mask pain temporarily, SoftWave triggers a biological cascade -- stem cell migration, new blood vessel formation, and inflammation modulation -- that addresses the root cause of pain.
                </p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                  At Erb Family Wellness in Southlake, Dr. Erb integrates SoftWave into comprehensive corrective care plans alongside spinal correction, HBOT, and advanced diagnostics. This combined approach is why patients drive past dozens of other providers to reach our Southlake office.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}><FormCard subtitle="See if SoftWave can help your condition." submitText="Book My SoftWave Consultation" /></RevealOnScroll>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="container-erb"><RevealOnScroll>
          <div className="section-head section-head--center"><span className="label">How It Works</span><h2 className="section-headline"><span className="light">The science of</span><span className="heavy">acoustic wave healing.</span></h2></div>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="empathy-grid">
            {[
              { title: "Stem Cell Migration", desc: "Acoustic waves signal your body to send stem cells to the treatment area, jumpstarting tissue regeneration from within." },
              { title: "Angiogenesis", desc: "SoftWave stimulates new blood vessel formation, increasing oxygen and nutrient delivery to damaged tissue." },
              { title: "Inflammation Modulation", desc: "Shockwave energy modulates the inflammatory response, reducing chronic inflammation that perpetuates pain cycles." },
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
            {[{ name: "HBOT", href: "/southlake/hbot" }, { name: "Spinal Correction", href: "/southlake/spinal-correction" }, { name: "Decompression", href: "/southlake/spinal-decompression" }, { name: "Thermography", href: "/southlake/thermography" }, { name: "Neuropathy", href: "/southlake/neuropathy" }].map((s) => <Link key={s.href} href={s.href} style={{ padding: "10px 20px", background: "#fff", borderRadius: 999, fontSize: 14, fontWeight: 500, color: "var(--color-teal)", textDecoration: "none", boxShadow: "0 2px 8px rgba(14,24,44,.06)" }}>{s.name}</Link>)}
          </div>
        </RevealOnScroll></div>
      </section>
      <section className="page-section page-section--navy" style={{ textAlign: "center" }}>
        <div className="container-erb"><RevealOnScroll>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "var(--color-text-light)", marginBottom: 32 }}>Experience SoftWave in Southlake.</h2>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/schedule" className="btn btn--teal">Book Your Consultation &rarr;</Link>
            <a href="tel:8178950075" className="btn btn--outline" style={{ borderColor: "rgba(241,236,232,.3)", color: "var(--color-text-light)" }}>(817) 895-0075</a>
          </div>
        </RevealOnScroll></div>
      </section>
      <section className="page-section"><div className="container-erb"><div className="split split--40-60">
        <div><span className="label">FAQ</span><RevealOnScroll><h2 style={{ lineHeight: 1.15 }}><span className="title-light">SoftWave Therapy</span><span className="title-heavy">Southlake TX</span></h2></RevealOnScroll></div>
        <RevealOnScroll delay={200}><FAQ items={faqs} /></RevealOnScroll>
      </div></div></section>
      <section style={{ padding: "40px 0", background: "var(--color-cream)", textAlign: "center" }}><div className="container-erb"><p style={{ fontSize: 15, color: "var(--color-text-secondary)" }}>This page is for our Southlake location. Looking for <Link href="/coppell/softwave" style={{ color: "var(--color-teal)", fontWeight: 600 }}>SoftWave therapy in Coppell</Link>?</p></div></section>
    </>
  );
}
