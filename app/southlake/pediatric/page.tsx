import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import FormCard from "@/components/FormCard";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";

export const metadata: Metadata = {
  title: "Pediatric Chiropractor Southlake TX - Erb",
  description:
    "Pediatric chiropractor in Southlake, TX. Gentle care for infants, children, and Carroll ISD student athletes. Dr. Kimberly Erb specializes in kids. (817) 895-0075.",
  alternates: { canonical: "https://www.erbfamilywellness.com/southlake/pediatric/" },
};

const faqs = [
  { question: "At what age can a child see a chiropractor?", answer: "We see patients from newborns to teens. Dr. Kimberly Erb uses extremely gentle techniques for infants -- finger-tip pressure adjustments that are safe and comfortable. Many Southlake families bring their babies within the first weeks of life." },
  { question: "Why would a child need chiropractic care?", answer: "Birth can create spinal stress. As children grow, falls, sports, screen time, and heavy backpacks all affect spinal alignment. Early correction supports healthy nervous system development, better sleep, improved immune function, and fewer ear infections." },
  { question: "Do you work with Carroll ISD student athletes?", answer: "Yes. We see many Carroll Senior High and Carroll ISD athletes for sports injuries, recovery, and performance. Dr. Erb's 2012 Olympic credentials mean your young athlete gets elite-level assessment and care." },
  { question: "Where is the Southlake pediatric office?", answer: "We are at 1845 E Southlake Blvd, Suite 140, Southlake, TX 76092 -- convenient for families in Timarron, Carillon, Clariden Ranch, and throughout Southlake. Call (817) 895-0075 to schedule." },
  { question: "Is pediatric chiropractic safe?", answer: "Absolutely. Pediatric adjustments use gentle, age-appropriate techniques. Dr. Kimberly has adjusted thousands of children over her career. The force used on an infant is comparable to the pressure you would use to test the ripeness of a tomato." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.erbfamilywellness.com" },
  { "@type": "ListItem", position: 2, name: "Southlake", item: "https://www.erbfamilywellness.com/southlake/" },
  { "@type": "ListItem", position: 3, name: "Pediatric Chiropractic", item: "https://www.erbfamilywellness.com/southlake/pediatric/" },
]};

export default function SouthlakePediatricPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Southlake", href: "/southlake" }, { label: "Pediatric Chiropractic" }]} titleLight="Pediatric Chiropractor in" titleHeavy="Southlake TX" subtitle="Gentle chiropractic care for infants, children, and teens. Dr. Kimberly Erb specializes in pediatric adjustments that support healthy development from day one." />
      <StatsBar items={["Newborns to Teens", "Gentle Techniques", "Carroll ISD Families", "Dr. Kimberly Erb"]} />
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <div style={{ display: "grid", gridTemplateColumns: "55fr 45fr", gap: 64, alignItems: "start" }} className="split--responsive">
            <RevealOnScroll>
              <div>
                <span className="label">Pediatric Care in Southlake</span>
                <h2 className="section-headline"><span className="light">Give your child</span><span className="heavy">the best start.</span></h2>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>Southlake parents raising families in Timarron, Carillon, and the neighborhoods surrounding Carroll ISD choose Erb Family Wellness because we understand that children are not small adults. Their growing spines need specialized attention -- gentle techniques calibrated for their developing bodies.</p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>Dr. Kimberly Erb has adjusted thousands of children throughout her career, from newborns with nursing difficulties to Carroll Senior High athletes recovering from competitive sports injuries. She uses finger-tip pressure adjustments for infants and progressively adapts her approach as children grow.</p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>Our Southlake office sees children for colic, ear infections, sleep issues, growing pains, sports injuries, scoliosis screening, and proactive wellness. Many Southlake families bring their entire household -- from the youngest to the oldest -- because corrective chiropractic benefits everyone.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}><FormCard subtitle="Schedule your child's first visit in Southlake." /></RevealOnScroll>
          </div>
        </div>
      </section>
      <section className="page-section page-section--cream">
        <div className="container-erb"><RevealOnScroll><div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
          {[{ name: "Prenatal", href: "/southlake/prenatal" }, { name: "Chiropractic", href: "/southlake/chiropractic" }, { name: "Spinal Correction", href: "/southlake/spinal-correction" }, { name: "Thermography", href: "/southlake/thermography" }].map((s) => <Link key={s.href} href={s.href} style={{ padding: "10px 20px", background: "#fff", borderRadius: 999, fontSize: 14, fontWeight: 500, color: "var(--color-teal)", textDecoration: "none", boxShadow: "0 2px 8px rgba(14,24,44,.06)" }}>{s.name}</Link>)}
        </div></RevealOnScroll></div>
      </section>
      <section className="page-section page-section--navy" style={{ textAlign: "center" }}><div className="container-erb"><RevealOnScroll>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "var(--color-text-light)", marginBottom: 32 }}>Your child&apos;s health starts here.</h2>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}><Link href="/schedule" className="btn btn--teal">Book Your Child&apos;s Visit &rarr;</Link><a href="tel:8178950075" className="btn btn--outline" style={{ borderColor: "rgba(241,236,232,.3)", color: "var(--color-text-light)" }}>(817) 895-0075</a></div>
      </RevealOnScroll></div></section>
      <section className="page-section"><div className="container-erb"><div className="split split--40-60">
        <div><span className="label">FAQ</span><RevealOnScroll><h2 style={{ lineHeight: 1.15 }}><span className="title-light">Pediatric Chiropractic</span><span className="title-heavy">Southlake TX</span></h2></RevealOnScroll></div>
        <RevealOnScroll delay={200}><FAQ items={faqs} /></RevealOnScroll>
      </div></div></section>
      <section style={{ padding: "40px 0", background: "var(--color-cream)", textAlign: "center" }}><div className="container-erb"><p style={{ fontSize: 15, color: "var(--color-text-secondary)" }}>This page is for our Southlake location. Looking for <Link href="/coppell/pediatric" style={{ color: "var(--color-teal)", fontWeight: 600 }}>pediatric chiropractic in Coppell</Link>?</p></div></section>
    </>
  );
}
