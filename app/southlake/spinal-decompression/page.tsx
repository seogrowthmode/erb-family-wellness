import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import FormCard from "@/components/FormCard";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";

export const metadata: Metadata = {
  title: "Spinal Decompression Southlake TX - Erb",
  description:
    "Non-surgical spinal decompression in Southlake, TX. Herniated disc and sciatica relief without surgery. 86%+ success rate. (817) 895-0075.",
  alternates: { canonical: "https://erbfamilywellness.com/southlake/spinal-decompression" },
};

const faqs = [
  { question: "What is spinal decompression therapy?", answer: "Spinal decompression uses a computerized traction table to gently stretch your spine, creating negative pressure within the disc. This draws herniated material back into place and promotes nutrient flow into the disc for natural healing." },
  { question: "Is spinal decompression available in Southlake?", answer: "Yes. Our Southlake office at 1845 E Southlake Blvd, Suite 140 offers computerized spinal decompression therapy. Call (817) 895-0075 to schedule your evaluation." },
  { question: "How many decompression sessions are needed?", answer: "Most treatment plans include 20-30 sessions over 6-8 weeks. Dr. Erb designs your plan based on the severity of your disc condition and your response to initial sessions." },
  { question: "Does decompression hurt?", answer: "No. Most Southlake patients find it comfortable and relaxing. The table applies gentle, controlled traction in precise cycles. Some patients fall asleep during sessions." },
  { question: "Can decompression replace back surgery?", answer: "In many cases, yes. With an 86%+ reported success rate in clinical studies, spinal decompression helps most patients avoid surgery entirely -- saving thousands of dollars and months of recovery." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://erbfamilywellness.com" },
  { "@type": "ListItem", position: 2, name: "Southlake", item: "https://erbfamilywellness.com/southlake/" },
  { "@type": "ListItem", position: 3, name: "Spinal Decompression", item: "https://erbfamilywellness.com/southlake/spinal-decompression/" },
]};

export default function SouthlakeSpinalDecompressionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Southlake", href: "/southlake" }, { label: "Spinal Decompression" }]} titleLight="Spinal Decompression in" titleHeavy="Southlake TX" subtitle="Non-surgical traction therapy that relieves disc pressure, reduces nerve compression, and promotes healing -- without the risks and cost of surgery." />
      <StatsBar items={["Non-Surgical", "86%+ Success Rate", "20-30 Min Sessions", "FDA-Cleared"]} />
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <div style={{ display: "grid", gridTemplateColumns: "55fr 45fr", gap: 64, alignItems: "start" }} className="split--responsive">
            <RevealOnScroll>
              <div>
                <span className="label">Decompression in Southlake</span>
                <h2 className="section-headline"><span className="light">Give your discs</span><span className="heavy">room to heal.</span></h2>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>Southlake professionals who spend long hours at desks in DFW corporate offices and active families in Timarron and Carillon frequently develop disc problems that lead to sciatica, radiating pain, and numbness. When medications and injections only provide temporary relief, spinal decompression addresses the structural problem itself.</p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>Our computerized decompression table applies precise, cyclical traction forces to the affected spinal segment. This creates negative intradiscal pressure that draws herniated material back toward center while flooding the disc with nutrients, oxygen, and water for healing.</p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>At our Southlake office, Dr. Erb combines decompression with corrective adjustments, SoftWave therapy, and targeted exercises for comprehensive disc recovery that treats the root cause.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}><FormCard subtitle="Find out if decompression is right for you." submitText="Book My Decompression Eval" /></RevealOnScroll>
          </div>
        </div>
      </section>
      <section className="page-section page-section--cream">
        <div className="container-erb"><RevealOnScroll><div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
          {[{ name: "Spinal Correction", href: "/southlake/spinal-correction" }, { name: "SoftWave", href: "/southlake/softwave" }, { name: "HBOT", href: "/southlake/hbot" }, { name: "Neuropathy", href: "/southlake/neuropathy" }, { name: "Chiropractic", href: "/southlake/chiropractic" }].map((s) => <Link key={s.href} href={s.href} style={{ padding: "10px 20px", background: "#fff", borderRadius: 999, fontSize: 14, fontWeight: 500, color: "var(--color-teal)", textDecoration: "none", boxShadow: "0 2px 8px rgba(14,24,44,.06)" }}>{s.name}</Link>)}
        </div></RevealOnScroll></div>
      </section>
      <section className="page-section page-section--navy" style={{ textAlign: "center" }}><div className="container-erb"><RevealOnScroll>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "var(--color-text-light)", marginBottom: 32 }}>Disc relief without surgery in Southlake.</h2>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}><Link href="/schedule" className="btn btn--teal">Book Your $67 Visit &rarr;</Link><a href="tel:8178950075" className="btn btn--outline" style={{ borderColor: "rgba(241,236,232,.3)", color: "var(--color-text-light)" }}>(817) 895-0075</a></div>
      </RevealOnScroll></div></section>
      <section className="page-section"><div className="container-erb"><div className="split split--40-60">
        <div><span className="label">FAQ</span><RevealOnScroll><h2 style={{ lineHeight: 1.15 }}><span className="title-light">Spinal Decompression</span><span className="title-heavy">Southlake TX</span></h2></RevealOnScroll></div>
        <RevealOnScroll delay={200}><FAQ items={faqs} /></RevealOnScroll>
      </div></div></section>
      <section style={{ padding: "40px 0", background: "var(--color-cream)", textAlign: "center" }}><div className="container-erb"><p style={{ fontSize: 15, color: "var(--color-text-secondary)" }}>This page is for our Southlake location. Looking for <Link href="/coppell/spinal-decompression" style={{ color: "var(--color-teal)", fontWeight: 600 }}>spinal decompression in Coppell</Link>?</p></div></section>
    </>
  );
}
