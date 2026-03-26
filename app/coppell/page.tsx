import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import FormCard from "@/components/FormCard";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Chiropractor Coppell TX - Erb Family Wellness",
  description:
    "Top-rated chiropractor in Coppell, TX. Dr. David Erb -- 28 years, 2012 Olympics. HBOT, SoftWave, thermography, spinal correction. (972) 393-6262.",
  alternates: { canonical: "https://www.erbfamilywellness.com/coppell/" },
};

const coppellServices = [
  { name: "Spinal Correction", href: "/coppell/spinal-correction", desc: "Advanced corrective chiropractic care. Structural correction, not just pain relief." },
  { name: "Hyperbaric Oxygen Therapy", href: "/coppell/hbot", desc: "800% stem cell growth. Neurological recovery and cellular regeneration." },
  { name: "SoftWave Therapy", href: "/coppell/softwave", desc: "FDA-cleared acoustic wave therapy. Stem cell activation without surgery." },
  { name: "Spinal Decompression", href: "/coppell/spinal-decompression", desc: "Non-surgical traction for herniated discs, sciatica, and stenosis." },
  { name: "Thermography", href: "/coppell/thermography", desc: "AlfaSight 9000 120-point body mapping. See what X-rays miss." },
  { name: "Neuropathy Treatment", href: "/coppell/neuropathy", desc: "Restore nerve function without drugs or surgery." },
  { name: "Pediatric Chiropractic", href: "/coppell/pediatric", desc: "Gentle care for infants, children, and teens." },
  { name: "Prenatal Chiropractic", href: "/coppell/prenatal", desc: "Safe, specialized care for expecting mothers." },
];

const coppellFAQs = [
  { question: "Where is the Coppell office located?", answer: "Our Coppell office is at 255 S Denton Tap Rd, Suite 200, Coppell, TX 75019. We are just south of Sandy Lake Rd on Denton Tap, easily accessible from Coppell, Lewisville, Flower Mound, Carrollton, and Valley Ranch." },
  { question: "What are the Coppell office hours?", answer: "Monday: 8:00-10:30 AM, 3:30-6:00 PM. Tuesday: 12:00-3:00 PM. Wednesday: 8:00-10:30 AM, 3:30-6:00 PM. Thursday: 2:30-5:30 PM. Friday: 7:30-10:30 AM. Saturday and Sunday: Closed." },
  { question: "What does the $67 new patient visit include?", answer: "Your new patient visit includes a comprehensive consultation, examination, any necessary X-rays, and your first adjustment. Dr. Erb identifies the root cause of your health concerns, not just symptoms." },
  { question: "Do you accept insurance at the Coppell location?", answer: "We work with most insurance plans and accept CareCredit for flexible payment. Call (972) 393-6262 to verify your coverage before your visit." },
  { question: "What technology does the Coppell office have?", answer: "Our Coppell office features Hyperbaric Oxygen Therapy (HBOT), SoftWave tissue regeneration, AlfaSight 9000 digital thermography, live blood microscopy, spinal decompression, and far infrared sauna." },
  { question: "Is parking available?", answer: "Yes. Free parking is available directly in front of our building at 255 S Denton Tap Rd. There is plenty of space for patients." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: coppellFAQs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Chiropractor", "MedicalBusiness"],
  "@id": "https://www.erbfamilywellness.com/coppell/#location",
  name: "Erb Family Wellness - Coppell",
  description: "Corrective chiropractic care, HBOT, SoftWave, thermography, and spinal decompression in Coppell, TX. Dr. David Erb -- 28 years, 2012 London Olympics.",
  url: "https://www.erbfamilywellness.com/coppell/",
  telephone: "(972) 393-6262",
  email: "derb@erbfamilywellness.com",
  foundingDate: "1998",
  image: "https://www.erbfamilywellness.com/images/erb-family-wellness-office.jpg",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, CareCredit, Insurance",
  address: {
    "@type": "PostalAddress",
    streetAddress: "255 S Denton Tap Rd, Suite 200",
    addressLocality: "Coppell",
    addressRegion: "TX",
    postalCode: "75019",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 32.9582, longitude: -97.0038 },
  areaServed: ["Coppell", "Lewisville", "Flower Mound", "Carrollton", "Grapevine", "Irving", "Valley Ranch", "Las Colinas", "Dallas"].map((c) => ({ "@type": "City", name: c })),
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "08:00", closes: "10:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "15:30", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "12:00", closes: "15:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "08:00", closes: "10:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "15:30", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "14:30", closes: "17:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "07:30", closes: "10:30" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "306", bestRating: "5" },
  parentOrganization: { "@id": "https://www.erbfamilywellness.com/#organization" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Chiropractic Services",
    itemListElement: [
      { "@type": "MedicalTherapy", name: "Corrective Chiropractic Care" },
      { "@type": "MedicalTherapy", name: "Spinal Correction" },
      { "@type": "MedicalTherapy", name: "SoftWave Tissue Regeneration Therapy" },
      { "@type": "MedicalTherapy", name: "Spinal Decompression" },
      { "@type": "MedicalTherapy", name: "Hyperbaric Oxygen Therapy (HBOT)" },
      { "@type": "MedicalTherapy", name: "Digital Thermography" },
      { "@type": "MedicalTherapy", name: "Live Blood Microscopy" },
      { "@type": "MedicalTherapy", name: "Neuropathy Treatment" },
      { "@type": "MedicalTherapy", name: "Pediatric Chiropractic" },
      { "@type": "MedicalTherapy", name: "Prenatal Chiropractic" },
    ],
  },
  sameAs: [
    "https://www.facebook.com/ErbFamilyCoppell",
    "https://www.instagram.com/erbfamilywellness/",
    "https://rumble.com/c/ErbFamilyWellness",
    "https://www.linkedin.com/in/drdaviderb/",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.erbfamilywellness.com" },
    { "@type": "ListItem", position: 2, name: "Coppell", item: "https://www.erbfamilywellness.com/coppell/" },
  ],
};

export default function CoppellPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="hero" style={{ minHeight: "60vh" }}>
        <div className="hero__video-bg">
          <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #0E182C 0%, #162240 40%, #0E182C 100%)" }} />
        </div>
        <div className="hero__content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 20 }}>
            <span style={{ fontSize: 12, color: "rgba(241,236,232,.5)" }}>
              <Link href="/" style={{ color: "rgba(241,236,232,.5)" }}>Home</Link>
              {" / "}
              <span style={{ color: "rgba(241,236,232,.8)" }}>Coppell</span>
            </span>
          </nav>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "var(--color-teal)", marginBottom: 20 }}>
            Coppell, TX Location
          </div>
          <h1 style={{ marginBottom: 24, lineHeight: 1.05 }}>
            <span style={{ display: "block", fontSize: "clamp(40px, 5vw, 56px)", fontWeight: 300, color: "var(--color-text-light)" }}>Chiropractor in</span>
            <span style={{ display: "block", fontSize: "clamp(48px, 6.5vw, 72px)", fontWeight: 900, color: "var(--color-teal)" }}>Coppell TX</span>
          </h1>
          <p style={{ fontSize: 17, fontWeight: 400, color: "rgba(241,236,232,.8)", maxWidth: 660, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Erb Family Wellness in Coppell, TX provides corrective chiropractic care, hyperbaric oxygen therapy, SoftWave, thermography, and advanced diagnostics at 255 S Denton Tap Rd. Serving Coppell families since 1998.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/schedule" className="btn btn--teal">Book Your $67 Visit &rarr;</Link>
            <a href="tel:9723936262" className="btn btn--outline">(972) 393-6262</a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20, marginTop: 32, fontSize: 13, fontWeight: 500, color: "rgba(241,236,232,.7)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: "var(--color-gold)" }}>{"\u2605\u2605\u2605\u2605\u2605"}</span> 4.8
            </span>
            <span>306+ Reviews</span>
            <span>28 Years</span>
            <span>2012 Olympics</span>
          </div>
        </div>
      </section>

      {/* NAP + HOURS */}
      <section style={{ padding: "80px 0", background: "var(--color-cream)" }}>
        <div className="container-erb">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40, textAlign: "center" }} className="loc-detail-grid">
            <RevealOnScroll>
              <div>
                <h2 style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--color-teal)", marginBottom: 16 }}>Address</h2>
                <p style={{ fontSize: 16, color: "var(--color-text-primary)", lineHeight: 1.7 }}>
                  255 S Denton Tap Rd, Suite 200<br />Coppell, TX 75019
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div>
                <h2 style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--color-teal)", marginBottom: 16 }}>Phone</h2>
                <a href="tel:9723936262" style={{ fontSize: 24, fontWeight: 700, color: "var(--color-navy)" }}>(972) 393-6262</a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div>
                <h2 style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--color-teal)", marginBottom: 16 }}>Hours</h2>
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
                  Mon: 8:00-10:30 AM, 3:30-6:00 PM<br />
                  Tue: 12:00-3:00 PM<br />
                  Wed: 8:00-10:30 AM, 3:30-6:00 PM<br />
                  Thu: 2:30-5:30 PM<br />
                  Fri: 7:30-10:30 AM<br />
                  Sat-Sun: Closed
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ABOUT COPPELL */}
      <section style={{ padding: "100px 0", background: "#fff" }}>
        <div className="container-erb">
          <div style={{ display: "grid", gridTemplateColumns: "55fr 45fr", gap: 64, alignItems: "start" }} className="split--responsive">
            <RevealOnScroll>
              <div>
                <span className="label">About Our Coppell Office</span>
                <h2 style={{ lineHeight: 1.15, marginBottom: 24 }}>
                  <span style={{ display: "block", fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 300 }}>Wellness Center in</span>
                  <span style={{ display: "block", fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 700 }}>Coppell TX</span>
                </h2>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
                  Dr. David Erb and Dr. Kimberly Erb founded Erb Family Wellness in Coppell in 1998. Over 28 years, the Coppell office has grown into the most advanced chiropractic wellness center in the DFW Metroplex -- featuring HBOT, SoftWave, AlfaSight thermography, blood microscopy, and comprehensive corrective care.
                </p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
                  Our Coppell location serves patients from Coppell, Lewisville, Flower Mound, Carrollton, Grapevine, Irving, Valley Ranch, Las Colinas, and the broader DFW area. Patients also travel from across the country and internationally for Dr. Erb&apos;s intensive correction programs.
                </p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                  As part of the MaxLiving Network and with 2012 London Olympics credentials, Erb Family Wellness in Coppell provides a level of corrective care unavailable at traditional chiropractic offices.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div style={{ marginTop: -40, position: "relative", zIndex: 11 }}>
                <FormCard />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "100px 0", background: "var(--color-cream)" }}>
        <div className="container-erb">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="label">Services at Coppell</span>
            <RevealOnScroll>
              <h2 style={{ lineHeight: 1.15, marginBottom: 16 }}>
                <span style={{ display: "block", fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 300 }}>Holistic Medicine in</span>
                <span style={{ display: "block", fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 700 }}>Coppell TX</span>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="services-loc-grid">
              {coppellServices.map((svc) => (
                <Link key={svc.href} href={svc.href} style={{ display: "block", background: "#fff", borderRadius: "var(--radius-md)", padding: "32px 28px", boxShadow: "0 4px 20px rgba(14,24,44,.06)", transition: "transform .3s ease, box-shadow .3s ease", textDecoration: "none" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 8 }}>{svc.name}</h3>
                  <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{svc.desc}</p>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section style={{ padding: "60px 0", background: "var(--color-teal)" }}>
        <div className="container-erb">
          <RevealOnScroll>
            <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", textAlign: "center" }}>
              {[
                { number: "\u2605 4.8", label: "Rating" },
                { number: "306+", label: "Reviews" },
                { number: "28", label: "Years" },
                { number: "2012", label: "Olympics" },
              ].map((stat, i) => (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: 48 }}>
                  {i > 0 && <span style={{ width: 1, height: 60, background: "rgba(241,236,232,.2)" }} className="stat-divider" />}
                  <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <span style={{ fontSize: 48, fontWeight: 900, color: "var(--color-cream)" }}>{stat.number}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(241,236,232,.8)", letterSpacing: 1, textTransform: "uppercase" }}>{stat.label}</span>
                  </span>
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "100px 0", background: "#fff" }}>
        <div className="container-erb">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="label">Patient Reviews</span>
            <RevealOnScroll>
              <h2 style={{ lineHeight: 1.15 }}>
                <span style={{ display: "block", fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 300 }}>What our Coppell</span>
                <span style={{ display: "block", fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 700 }}>patients say</span>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="testi-home-grid">
              {[
                { quote: "Dr. Erb's a great chiropractor. It's been over 20 years! When I first met him he found my issue within minutes. He's thorough, knowledgeable, and genuinely cares about his patients. Our whole family trusts him.", author: "Long-term patient, 20+ years" },
                { quote: "Adrian at Erb is an angel. She is so caring, kind, and patient with my son. We have been taking my baby to Erb since he was 2 months old.", author: "Pediatric parent" },
                { quote: "The staff is incredible and has really helped my family with our health goals. Advanced technology and genuine care -- you won't find this anywhere else in DFW.", author: "Family wellness patient" },
                { quote: "Best chiropractor in the DFW area. The whole team makes you feel like family from the moment you walk in.", author: "Coppell patient" },
              ].map((t, i) => (
                <div key={i} style={{ background: "var(--color-cream)", borderRadius: "var(--radius-md)", padding: "32px 28px" }}>
                  <div style={{ color: "var(--color-gold)", marginBottom: 10, fontSize: 14 }}>{"\u2605\u2605\u2605\u2605\u2605"}</div>
                  <p style={{ fontSize: 15, color: "var(--color-text-primary)", lineHeight: 1.65, marginBottom: 16 }}>{t.quote}</p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-secondary)" }}>-- {t.author}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* MAP EMBED */}
      <section style={{ padding: "80px 0", background: "var(--color-cream)" }}>
        <div className="container-erb">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="label">Find Us</span>
            <RevealOnScroll>
              <h2 style={{ lineHeight: 1.15 }}>
                <span style={{ display: "block", fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 300 }}>Directions to our</span>
                <span style={{ display: "block", fontSize: "clamp(30px, 4vw, 40px)", fontWeight: 700 }}>Coppell Office</span>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll>
            <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "0 8px 32px rgba(14,24,44,.08)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.5!2d-97.0038!3d32.9582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c29a9f3a3d5ad%3A0x6b0c02c0ca93bb3a!2sErb%20Family%20Wellness!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Erb Family Wellness Coppell location map"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "100px 0", background: "#fff" }}>
        <div className="container-erb">
          <div className="split split--40-60">
            <div>
              <span className="label">Questions About Coppell</span>
              <RevealOnScroll>
                <h2 style={{ lineHeight: 1.15, marginBottom: 16 }}>
                  <span className="title-light">Frequently Asked</span>
                  <span className="title-heavy">Questions</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <p style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                  Can&apos;t find what you&apos;re looking for? Call us at{" "}
                  <a href="tel:9723936262" style={{ color: "var(--color-teal)", fontWeight: 600 }}>(972) 393-6262</a>.
                </p>
              </RevealOnScroll>
            </div>
            <RevealOnScroll delay={200}>
              <FAQ items={coppellFAQs} />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* OTHER LOCATION */}
      <section style={{ padding: "60px 0", background: "var(--color-cream)", textAlign: "center" }}>
        <div className="container-erb">
          <p style={{ fontSize: 16, color: "var(--color-text-secondary)", marginBottom: 16 }}>
            Also serving patients at our Southlake location.
          </p>
          <Link href="/southlake" className="btn btn--teal">Visit Southlake Office &rarr;</Link>
        </div>
      </section>
    </>
  );
}
