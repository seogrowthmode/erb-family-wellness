import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import FormCard from "@/components/FormCard";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Chiropractor Southlake TX",
  description:
    "Top-rated chiropractor in Southlake, TX. Dr. David Erb -- 28 years, 2012 Olympics. HBOT, SoftWave, thermography, spinal correction. (817) 895-0075.",
  alternates: { canonical: "https://erbfamilywellness.com/southlake" },
};

const southlakeServices = [
  { name: "Chiropractic Care", href: "/southlake/chiropractic", desc: "Corrective chiropractic that restores spinal structure for lasting health." },
  { name: "Hyperbaric Oxygen Therapy", href: "/southlake/hbot", desc: "800% stem cell growth. Neurological recovery and cellular regeneration." },
  { name: "SoftWave Therapy", href: "/southlake/softwave", desc: "FDA-cleared acoustic wave therapy. Stem cell activation without surgery." },
  { name: "Spinal Correction", href: "/southlake/spinal-correction", desc: "Advanced structural realignment -- not just pain relief." },
  { name: "Spinal Decompression", href: "/southlake/spinal-decompression", desc: "Non-surgical traction for herniated discs, sciatica, and stenosis." },
  { name: "Thermography", href: "/southlake/thermography", desc: "AlfaSight 9000 120-point body mapping. See what X-rays miss." },
  { name: "Neuropathy Treatment", href: "/southlake/neuropathy", desc: "Restore nerve function without drugs or surgery." },
  { name: "Pediatric Chiropractic", href: "/southlake/pediatric", desc: "Gentle care for Carroll ISD families -- infants through teens." },
  { name: "Prenatal Chiropractic", href: "/southlake/prenatal", desc: "Safe, specialized care for expecting Southlake mothers." },
];

const southlakeFAQs = [
  { question: "Where is the Southlake office located?", answer: "Our Southlake office is at 1845 E Southlake Blvd, Suite 140, Southlake, TX 76092. We are on E Southlake Blvd near Town Square, easily accessible from Southlake, Keller, Colleyville, Trophy Club, Westlake, and Grapevine." },
  { question: "What are the Southlake office hours?", answer: "Monday: 8:00-10:00 AM, 3:30-6:00 PM. Tuesday: 11:00 AM-1:00 PM. Wednesday: 8:00-10:00 AM, 3:30-6:00 PM. Thursday: 11:00 AM-1:00 PM, 4:00-5:30 PM. Friday: 7:30-10:00 AM. Saturday and Sunday: Closed." },
  { question: "What does the $67 new patient visit include?", answer: "Your new patient visit includes a comprehensive consultation, examination, any necessary X-rays, and your first adjustment. Dr. Erb identifies the root cause -- not just symptoms." },
  { question: "Does the Southlake office offer HBOT and SoftWave?", answer: "Yes. Both Hyperbaric Oxygen Therapy (HBOT) and SoftWave tissue regeneration therapy are available at our Southlake location, along with thermography, spinal decompression, and corrective chiropractic." },
  { question: "Do you accept insurance at the Southlake location?", answer: "We work with most insurance plans and accept CareCredit for flexible payment. Call (817) 895-0075 to verify your coverage before your visit." },
  { question: "Is parking available at the Southlake location?", answer: "Yes. Free parking is available directly at our building on E Southlake Blvd. Convenient access for families from Timarron, Carillon, and surrounding Southlake neighborhoods." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: southlakeFAQs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Chiropractor", "MedicalBusiness"],
  "@id": "https://erbfamilywellness.com/southlake/#location",
  name: "Erb Family Wellness - Southlake",
  description: "Corrective chiropractic care, HBOT, SoftWave, thermography, and spinal decompression in Southlake, TX. Dr. David Erb -- 28 years, 2012 London Olympics. Serving Southlake since 2017.",
  url: "https://erbfamilywellness.com/southlake/",
  telephone: "(817) 895-0075",
  email: "derb@erbfamilywellness.com",
  foundingDate: "2017",
  image: "https://erbfamilywellness.com/images/erb-family-wellness-office.jpg",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, CareCredit, Insurance",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1845 E Southlake Blvd, Suite 140",
    addressLocality: "Southlake",
    addressRegion: "TX",
    postalCode: "76092",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 32.9413, longitude: -97.1342 },
  areaServed: ["Southlake", "Keller", "Colleyville", "Trophy Club", "Westlake", "Grapevine", "North Richland Hills"].map((c) => ({ "@type": "City", name: c })),
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "08:00", closes: "10:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "15:30", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "11:00", closes: "13:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "08:00", closes: "10:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "15:30", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "11:00", closes: "13:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "16:00", closes: "17:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "07:30", closes: "10:00" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", reviewCount: "105", bestRating: "5" },
  parentOrganization: { "@id": "https://erbfamilywellness.com/#organization" },
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
      { "@type": "MedicalTherapy", name: "Neuropathy Treatment" },
      { "@type": "MedicalTherapy", name: "Pediatric Chiropractic" },
      { "@type": "MedicalTherapy", name: "Prenatal Chiropractic" },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://erbfamilywellness.com" },
    { "@type": "ListItem", position: 2, name: "Southlake", item: "https://erbfamilywellness.com/southlake/" },
  ],
};

export default function SouthlakePage() {
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
              <span style={{ color: "rgba(241,236,232,.8)" }}>Southlake</span>
            </span>
          </nav>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "var(--color-teal)", marginBottom: 20 }}>
            Southlake, TX Location
          </div>
          <h1 style={{ marginBottom: 24, lineHeight: 1.05 }}>
            <span style={{ display: "block", fontSize: "clamp(40px, 5vw, 56px)", fontWeight: 300, color: "var(--color-text-light)" }}>Chiropractor in</span>
            <span style={{ display: "block", fontSize: "clamp(48px, 6.5vw, 72px)", fontWeight: 900, color: "var(--color-teal)" }}>Southlake TX</span>
          </h1>
          <p style={{ fontSize: 17, fontWeight: 400, color: "rgba(241,236,232,.8)", maxWidth: 660, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Erb Family Wellness in Southlake, TX provides corrective chiropractic care, hyperbaric oxygen therapy, SoftWave, thermography, and advanced diagnostics at 1845 E Southlake Blvd. Serving Southlake, Keller, Colleyville, and Trophy Club since 2017.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/schedule" className="btn btn--teal">Book Your $67 Visit &rarr;</Link>
            <a href="tel:8178950075" className="btn btn--outline">(817) 895-0075</a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20, marginTop: 32, fontSize: 13, fontWeight: 500, color: "rgba(241,236,232,.7)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: "var(--color-gold)" }}>{"\u2605\u2605\u2605\u2605\u2605"}</span> 4.6
            </span>
            <span>105+ Reviews</span>
            <span>Since 2017</span>
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
                  1845 E Southlake Blvd, Suite 140<br />Southlake, TX 76092
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div>
                <h2 style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--color-teal)", marginBottom: 16 }}>Phone</h2>
                <a href="tel:8178950075" style={{ fontSize: 24, fontWeight: 700, color: "var(--color-navy)" }}>(817) 895-0075</a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div>
                <h2 style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--color-teal)", marginBottom: 16 }}>Hours</h2>
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
                  Mon: 8:00-10:00 AM, 3:30-6:00 PM<br />
                  Tue: 11:00 AM-1:00 PM<br />
                  Wed: 8:00-10:00 AM, 3:30-6:00 PM<br />
                  Thu: 11:00 AM-1:00 PM, 4:00-5:30 PM<br />
                  Fri: 7:30-10:00 AM<br />
                  Sat-Sun: Closed
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ABOUT SOUTHLAKE */}
      <section style={{ padding: "100px 0", background: "#fff" }}>
        <div className="container-erb">
          <div style={{ display: "grid", gridTemplateColumns: "55fr 45fr", gap: 64, alignItems: "start" }} className="split--responsive">
            <RevealOnScroll>
              <div>
                <span className="label">About Our Southlake Office</span>
                <h2 style={{ lineHeight: 1.15, marginBottom: 24 }}>
                  <span style={{ display: "block", fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 300 }}>Wellness Center in</span>
                  <span style={{ display: "block", fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 700 }}>Southlake TX</span>
                </h2>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
                  Erb Family Wellness opened its Southlake location in December 2017 to bring the same level of advanced corrective chiropractic care to the Southlake community. Located on E Southlake Blvd near Southlake Town Square, we serve families from Timarron, Carillon, Clariden Ranch, Stone Lakes, and throughout the 76092 area.
                </p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
                  Southlake families trust Dr. David Erb for the same expertise that earned him a position as chiropractor at the 2012 London Olympics. Carroll ISD athletes, active professionals, and families with young children rely on our advanced technology stack -- HBOT, SoftWave, AlfaSight thermography, and corrective chiropractic.
                </p>
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                  We are proud members of the Southlake Chamber of Commerce, listed on Select Southlake, and recognized by CareCredit. Our 105+ reviews and 4.6-star rating reflect the trust the Southlake community places in our care.
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
            <span className="label">Services at Southlake</span>
            <RevealOnScroll>
              <h2 style={{ lineHeight: 1.15, marginBottom: 16 }}>
                <span style={{ display: "block", fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 300 }}>Holistic Medicine in</span>
                <span style={{ display: "block", fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 700 }}>Southlake TX</span>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="services-loc-grid">
              {southlakeServices.map((svc) => (
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
                { number: "\u2605 4.6", label: "Rating" },
                { number: "105+", label: "Reviews" },
                { number: "2017", label: "Opened" },
                { number: "28", label: "Years Exp." },
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

      {/* COMMUNITY */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="container-erb" style={{ textAlign: "center" }}>
          <span className="label">Community</span>
          <RevealOnScroll>
            <h2 style={{ lineHeight: 1.15, marginBottom: 32 }}>
              <span style={{ display: "block", fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 300 }}>Proud to serve the</span>
              <span style={{ display: "block", fontSize: "clamp(30px, 4vw, 40px)", fontWeight: 700 }}>Southlake community</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 32 }}>
              {["Southlake Town Square", "Carroll ISD", "Timarron", "Carillon", "Clariden Ranch", "Stone Lakes", "Southlake Chamber of Commerce", "Select Southlake"].map((name) => (
                <span key={name} style={{ padding: "10px 20px", background: "var(--color-cream)", borderRadius: 999, fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>{name}</span>
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
                <span style={{ display: "block", fontSize: "clamp(30px, 4vw, 40px)", fontWeight: 700 }}>Southlake Office</span>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll>
            <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "0 8px 32px rgba(14,24,44,.08)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350!2d-97.1342!3d32.9413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sErb%20Family%20Wellness%20Southlake!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Erb Family Wellness Southlake location map"
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
              <span className="label">Questions About Southlake</span>
              <RevealOnScroll>
                <h2 style={{ lineHeight: 1.15, marginBottom: 16 }}>
                  <span className="title-light">Frequently Asked</span>
                  <span className="title-heavy">Questions</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <p style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                  Can&apos;t find what you&apos;re looking for? Call our Southlake office at{" "}
                  <a href="tel:8178950075" style={{ color: "var(--color-teal)", fontWeight: 600 }}>(817) 895-0075</a>.
                </p>
              </RevealOnScroll>
            </div>
            <RevealOnScroll delay={200}>
              <FAQ items={southlakeFAQs} />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* OTHER LOCATION */}
      <section style={{ padding: "60px 0", background: "var(--color-cream)", textAlign: "center" }}>
        <div className="container-erb">
          <p style={{ fontSize: 16, color: "var(--color-text-secondary)", marginBottom: 16 }}>
            Also serving patients at our Coppell location.
          </p>
          <Link href="/coppell" className="btn btn--teal">Visit Coppell Office &rarr;</Link>
        </div>
      </section>
    </>
  );
}
