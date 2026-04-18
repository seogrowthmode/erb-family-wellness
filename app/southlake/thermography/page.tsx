import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import FormCard from "@/components/FormCard";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";

export const metadata: Metadata = {
  title: "Thermography Southlake TX - Erb Wellness",
  description:
    "AlfaSight 9000 whole body thermography in Southlake, TX. 120-point body mapping reveals hidden dysfunction. Zero radiation. (817) 895-0075.",
  alternates: { canonical: "https://www.erbfamilywellness.com/southlake/thermography" },
};

const faqs = [
  { question: "What does thermography measure?", answer: "The AlfaSight 9000 measures precise temperature differentials across 120 points on your body, creating a detailed map of your autonomic nervous system function. It reveals inflammation, nerve dysfunction, organ stress, and metabolic imbalances that X-rays and MRIs miss entirely." },
  { question: "Is thermography available at the Southlake office?", answer: "Yes. AlfaSight 9000 digital thermography is available at our Southlake location at 1845 E Southlake Blvd, Suite 140. Call (817) 895-0075 to schedule your scan." },
  { question: "Is there any radiation involved?", answer: "No. Thermography is completely non-invasive with zero radiation exposure. It simply reads surface temperature patterns. It is safe for everyone, including pregnant women and children." },
  { question: "How long does a thermography scan take?", answer: "The full process takes about 30 minutes -- 10 minutes of temperature acclimation plus the scan. Dr. Erb reviews your results and explains the findings in detail." },
  { question: "Can thermography screen for breast health issues?", answer: "Thermography can detect thermal patterns associated with inflammation and dysfunction in breast tissue. It is not a replacement for mammography, but provides complementary functional data. Any abnormal findings are referred to the appropriate specialist." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.erbfamilywellness.com" },
  { "@type": "ListItem", position: 2, name: "Southlake", item: "https://www.erbfamilywellness.com/southlake/" },
  { "@type": "ListItem", position: 3, name: "Thermography", item: "https://www.erbfamilywellness.com/southlake/thermography/" },
]};

export default function SouthlakeThermographyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Southlake", href: "/southlake" }, { label: "Thermography" }]} titleLight="Whole Body Thermography in" titleHeavy="Southlake TX" subtitle="AlfaSight 9000 120-point body mapping. See inflammation, nerve dysfunction, and hidden health patterns before symptoms appear. Zero radiation." />
      <StatsBar items={["120 Data Points", "Zero Radiation", "Non-Invasive", "30 Min Session"]} />
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <div style={{ display: "grid", gridTemplateColumns: "55fr 45fr", gap: 64, alignItems: "start" }} className="split--responsive">
            <RevealOnScroll>
              <div>
                <span className="label">Thermography in Southlake</span>
                <h2 className="section-headline"><span className="light">See what imaging</span><span className="heavy">cannot show you.</span></h2>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>Health-conscious Southlake families who value preventive care are discovering thermography at Erb Family Wellness. Unlike X-rays and MRIs that show structural anatomy, thermography reveals functional health -- how your nervous system, organs, and metabolic processes are actually performing in real time.</p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>The AlfaSight 9000 measures temperature differentials at 120 anatomical points across your body. These thermal patterns correlate with autonomic nervous system function, identifying areas of inflammation, nerve interference, and organ stress that are invisible to standard imaging.</p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>Women in Southlake also appreciate our non-radiation breast health screening option -- a complementary tool that detects thermal changes in breast tissue without radiation exposure. At our Southlake office near Town Square, this advanced diagnostic guides every treatment plan Dr. Erb creates.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}><FormCard subtitle="Get your 120-point body map in Southlake." submitText="Schedule My Thermography Scan" /></RevealOnScroll>
          </div>
        </div>
      </section>
      <section className="page-section page-section--cream">
        <div className="container-erb"><RevealOnScroll><div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
          {[{ name: "Spinal Correction", href: "/southlake/spinal-correction" }, { name: "HBOT", href: "/southlake/hbot" }, { name: "SoftWave", href: "/southlake/softwave" }, { name: "Neuropathy", href: "/southlake/neuropathy" }, { name: "Pediatric", href: "/southlake/pediatric" }].map((s) => <Link key={s.href} href={s.href} style={{ padding: "10px 20px", background: "#fff", borderRadius: 999, fontSize: 14, fontWeight: 500, color: "var(--color-teal)", textDecoration: "none", boxShadow: "0 2px 8px rgba(14,24,44,.06)" }}>{s.name}</Link>)}
        </div></RevealOnScroll></div>
      </section>
      <section className="page-section page-section--navy" style={{ textAlign: "center" }}><div className="container-erb"><RevealOnScroll>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "var(--color-text-light)", marginBottom: 32 }}>Map your health in Southlake.</h2>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}><Link href="/schedule" className="btn btn--teal">Book Your Scan &rarr;</Link><a href="tel:8178950075" className="btn btn--outline" style={{ borderColor: "rgba(241,236,232,.3)", color: "var(--color-text-light)" }}>(817) 895-0075</a></div>
      </RevealOnScroll></div></section>
      <section className="page-section"><div className="container-erb"><div className="split split--40-60">
        <div><span className="label">FAQ</span><RevealOnScroll><h2 style={{ lineHeight: 1.15 }}><span className="title-light">Thermography</span><span className="title-heavy">Southlake TX</span></h2></RevealOnScroll></div>
        <RevealOnScroll delay={200}><FAQ items={faqs} /></RevealOnScroll>
      </div></div></section>
      <section style={{ padding: "40px 0", background: "var(--color-cream)", textAlign: "center" }}><div className="container-erb"><p style={{ fontSize: 15, color: "var(--color-text-secondary)" }}>This page is for our Southlake location. Looking for <Link href="/coppell/thermography" style={{ color: "var(--color-teal)", fontWeight: 600 }}>thermography in Coppell</Link>?</p></div></section>
    </>
  );
}
