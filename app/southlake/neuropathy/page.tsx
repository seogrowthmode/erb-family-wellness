import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import FormCard from "@/components/FormCard";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";

export const metadata: Metadata = {
  title: "Neuropathy Treatment Southlake TX - Erb",
  description:
    "Neuropathy treatment in Southlake, TX. Restore nerve function without drugs or surgery. HBOT, SoftWave, corrective care. (817) 895-0075.",
  alternates: { canonical: "https://www.erbfamilywellness.com/southlake/neuropathy/" },
};

const faqs = [
  { question: "What causes neuropathy?", answer: "Peripheral neuropathy can result from diabetes, spinal nerve compression, autoimmune conditions, chemotherapy, toxin exposure, or idiopathic (unknown) causes. At Erb Family Wellness, we use advanced diagnostics to identify your specific contributing factors." },
  { question: "How does Erb treat neuropathy differently?", answer: "Most providers prescribe medications that mask symptoms. Dr. Erb combines HBOT (which promotes nerve regeneration at the cellular level), SoftWave (which increases blood flow to damaged nerves), corrective chiropractic (which removes spinal nerve compression), and thermography (which maps nervous system dysfunction). This multi-modal approach targets the root causes, not just symptoms." },
  { question: "Is neuropathy treatment available in Southlake?", answer: "Yes. Our Southlake office at 1845 E Southlake Blvd, Suite 140 provides comprehensive neuropathy treatment. Call (817) 895-0075 to schedule your evaluation." },
  { question: "Can HBOT help with neuropathy?", answer: "Yes. HBOT delivers oxygen directly to nerve tissue, supporting nerve regeneration and reducing inflammation. For neuropathy patients in Southlake, HBOT is often a critical component of the treatment plan." },
  { question: "How long until I see results?", answer: "Many neuropathy patients notice improvement within weeks, though complete nerve recovery can take months. Dr. Erb tracks your progress with objective measures including thermography scans." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.erbfamilywellness.com" },
  { "@type": "ListItem", position: 2, name: "Southlake", item: "https://www.erbfamilywellness.com/southlake/" },
  { "@type": "ListItem", position: 3, name: "Neuropathy Treatment", item: "https://www.erbfamilywellness.com/southlake/neuropathy/" },
]};

export default function SouthlakeNeuropathyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Southlake", href: "/southlake" }, { label: "Neuropathy Treatment" }]} titleLight="Neuropathy Treatment in" titleHeavy="Southlake TX" subtitle="Numbness, tingling, burning pain in your hands or feet? We treat the nerve damage itself -- not just the symptoms -- using HBOT, SoftWave, and corrective care." />
      <StatsBar items={["Multi-Modal Approach", "HBOT + SoftWave", "No Drugs", "Objective Tracking"]} />
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <div style={{ display: "grid", gridTemplateColumns: "55fr 45fr", gap: 64, alignItems: "start" }} className="split--responsive">
            <RevealOnScroll>
              <div>
                <span className="label">Neuropathy in Southlake</span>
                <h2 className="section-headline"><span className="light">Your nerves can</span><span className="heavy">regenerate.</span></h2>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>Southlake residents living with neuropathy often feel they have exhausted every option. Medications dull the pain but do nothing to restore nerve function. The numbness in your feet makes walking the trails around Southlake Town Square uncomfortable. The tingling in your hands affects your grip during golf at Timarron or tennis at the Southlake Recreation Center.</p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>At Erb Family Wellness in Southlake, we take a fundamentally different approach. HBOT delivers oxygen directly to damaged nerve tissue, promoting regeneration at the cellular level. SoftWave increases blood flow to peripheral nerves. Corrective chiropractic removes spinal nerve compression that may be contributing to your symptoms. Thermography objectively tracks your nervous system recovery over time.</p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>This integrated protocol is not available at any other Southlake provider. It is why patients from Keller, Colleyville, and throughout DFW seek us out specifically for neuropathy care.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}><FormCard subtitle="Start your neuropathy recovery in Southlake." submitText="Book My Neuropathy Evaluation" /></RevealOnScroll>
          </div>
        </div>
      </section>
      <section className="page-section page-section--cream">
        <div className="container-erb"><RevealOnScroll><div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
          {[{ name: "HBOT", href: "/southlake/hbot" }, { name: "SoftWave", href: "/southlake/softwave" }, { name: "Thermography", href: "/southlake/thermography" }, { name: "Spinal Correction", href: "/southlake/spinal-correction" }, { name: "Decompression", href: "/southlake/spinal-decompression" }].map((s) => <Link key={s.href} href={s.href} style={{ padding: "10px 20px", background: "#fff", borderRadius: 999, fontSize: 14, fontWeight: 500, color: "var(--color-teal)", textDecoration: "none", boxShadow: "0 2px 8px rgba(14,24,44,.06)" }}>{s.name}</Link>)}
        </div></RevealOnScroll></div>
      </section>
      <section className="page-section page-section--navy" style={{ textAlign: "center" }}><div className="container-erb"><RevealOnScroll>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "var(--color-text-light)", marginBottom: 32 }}>Reclaim your nerve health in Southlake.</h2>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}><Link href="/schedule" className="btn btn--teal">Book Your Evaluation &rarr;</Link><a href="tel:8178950075" className="btn btn--outline" style={{ borderColor: "rgba(241,236,232,.3)", color: "var(--color-text-light)" }}>(817) 895-0075</a></div>
      </RevealOnScroll></div></section>
      <section className="page-section"><div className="container-erb"><div className="split split--40-60">
        <div><span className="label">FAQ</span><RevealOnScroll><h2 style={{ lineHeight: 1.15 }}><span className="title-light">Neuropathy</span><span className="title-heavy">Southlake TX</span></h2></RevealOnScroll></div>
        <RevealOnScroll delay={200}><FAQ items={faqs} /></RevealOnScroll>
      </div></div></section>
      <section style={{ padding: "40px 0", background: "var(--color-cream)", textAlign: "center" }}><div className="container-erb"><p style={{ fontSize: 15, color: "var(--color-text-secondary)" }}>This page is for our Southlake location. Looking for <Link href="/coppell/neuropathy" style={{ color: "var(--color-teal)", fontWeight: 600 }}>neuropathy treatment in Coppell</Link>?</p></div></section>
    </>
  );
}
