import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import FormCard from "@/components/FormCard";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";

export const metadata: Metadata = {
  title: "Prenatal Chiropractor Southlake TX - Erb",
  description:
    "Prenatal chiropractor in Southlake, TX. Safe, gentle chiropractic care for expecting mothers. Dr. Kimberly Erb specializes in pregnancy care. (817) 895-0075.",
  alternates: { canonical: "https://www.erbfamilywellness.com/southlake/prenatal/" },
};

const faqs = [
  { question: "Is chiropractic safe during pregnancy?", answer: "Yes. Prenatal chiropractic care is safe throughout all trimesters. Dr. Kimberly Erb uses specialized techniques and pregnancy-adapted tables designed for the comfort and safety of both mother and baby." },
  { question: "What trimester should I start prenatal chiropractic?", answer: "You can begin at any stage of pregnancy. Many Southlake mothers start in the first trimester for proactive pelvic alignment, while others come later when back pain or pelvic discomfort develops. Earlier is better for optimal results." },
  { question: "Can chiropractic help with breech presentation?", answer: "The Webster Technique is a specific chiropractic analysis and adjustment that addresses sacral misalignment and pelvic imbalance. By restoring proper pelvic function, it may create a more favorable environment for the baby to turn naturally." },
  { question: "Where is the Southlake prenatal chiropractic office?", answer: "Our Southlake office is at 1845 E Southlake Blvd, Suite 140, Southlake, TX 76092. Convenient for expecting mothers in Southlake, Keller, Colleyville, and Trophy Club. Call (817) 895-0075." },
  { question: "Will I need to come frequently during pregnancy?", answer: "Dr. Kimberly designs a care schedule based on your specific needs. Many expecting mothers visit 1-2 times per week during the second and third trimesters as the body undergoes rapid changes." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.erbfamilywellness.com" },
  { "@type": "ListItem", position: 2, name: "Southlake", item: "https://www.erbfamilywellness.com/southlake/" },
  { "@type": "ListItem", position: 3, name: "Prenatal Chiropractic", item: "https://www.erbfamilywellness.com/southlake/prenatal/" },
]};

export default function SouthlakePrenatalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Southlake", href: "/southlake" }, { label: "Prenatal Chiropractic" }]} titleLight="Prenatal Chiropractor in" titleHeavy="Southlake TX" subtitle="Safe, gentle chiropractic care for expecting mothers. Pelvic alignment, back pain relief, and optimal positioning for a healthier pregnancy and delivery." />
      <StatsBar items={["All Trimesters", "Webster Technique", "Dr. Kimberly Erb", "Pregnancy-Safe"]} />
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <div style={{ display: "grid", gridTemplateColumns: "55fr 45fr", gap: 64, alignItems: "start" }} className="split--responsive">
            <RevealOnScroll>
              <div>
                <span className="label">Prenatal Care in Southlake</span>
                <h2 className="section-headline"><span className="light">Pregnancy changes</span><span className="heavy">your body. We support it.</span></h2>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>Expecting mothers in Southlake -- from the young families of Clariden Ranch to the growing households in Stone Lakes and Carillon -- trust Dr. Kimberly Erb for prenatal chiropractic care that addresses the unique biomechanical changes of pregnancy.</p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>As your center of gravity shifts and hormones loosen your ligaments, pelvic misalignment can cause low back pain, sciatica, round ligament pain, and difficulty sleeping. Prenatal chiropractic gently restores proper pelvic alignment, reducing pain and creating optimal space for your baby&apos;s development and positioning.</p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>Dr. Kimberly is experienced in the Webster Technique and uses pregnancy-adapted adjusting tables at our Southlake office. Many mothers continue care through delivery and transition seamlessly into postnatal and pediatric care for their newborns.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}><FormCard subtitle="Schedule your prenatal visit in Southlake." /></RevealOnScroll>
          </div>
        </div>
      </section>
      <section className="page-section page-section--cream">
        <div className="container-erb"><RevealOnScroll><div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
          {[{ name: "Pediatric", href: "/southlake/pediatric" }, { name: "Chiropractic", href: "/southlake/chiropractic" }, { name: "Spinal Correction", href: "/southlake/spinal-correction" }, { name: "Thermography", href: "/southlake/thermography" }].map((s) => <Link key={s.href} href={s.href} style={{ padding: "10px 20px", background: "#fff", borderRadius: 999, fontSize: 14, fontWeight: 500, color: "var(--color-teal)", textDecoration: "none", boxShadow: "0 2px 8px rgba(14,24,44,.06)" }}>{s.name}</Link>)}
        </div></RevealOnScroll></div>
      </section>
      <section className="page-section page-section--navy" style={{ textAlign: "center" }}><div className="container-erb"><RevealOnScroll>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "var(--color-text-light)", marginBottom: 32 }}>A healthier pregnancy starts in Southlake.</h2>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}><Link href="/schedule" className="btn btn--teal">Book Your Prenatal Visit &rarr;</Link><a href="tel:8178950075" className="btn btn--outline" style={{ borderColor: "rgba(241,236,232,.3)", color: "var(--color-text-light)" }}>(817) 895-0075</a></div>
      </RevealOnScroll></div></section>
      <section className="page-section"><div className="container-erb"><div className="split split--40-60">
        <div><span className="label">FAQ</span><RevealOnScroll><h2 style={{ lineHeight: 1.15 }}><span className="title-light">Prenatal Chiropractic</span><span className="title-heavy">Southlake TX</span></h2></RevealOnScroll></div>
        <RevealOnScroll delay={200}><FAQ items={faqs} /></RevealOnScroll>
      </div></div></section>
      <section style={{ padding: "40px 0", background: "var(--color-cream)", textAlign: "center" }}><div className="container-erb"><p style={{ fontSize: 15, color: "var(--color-text-secondary)" }}>This page is for our Southlake location. Looking for <Link href="/coppell/prenatal" style={{ color: "var(--color-teal)", fontWeight: 600 }}>prenatal chiropractic in Coppell</Link>?</p></div></section>
    </>
  );
}
