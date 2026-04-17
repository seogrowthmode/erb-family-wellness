import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FormCard from "@/components/FormCard";
import FAQ from "@/components/FAQ";
import RevealOnScroll from "@/components/RevealOnScroll";
import StatsBar from "@/components/StatsBar";

// ---- SERVICE AND CONDITION SLUGS ----
const serviceSlugs = ["hbot", "softwave", "thermography", "blood-microscopy", "spinal-correction", "spinal-decompression", "corrective-exercises", "nutrition", "neuropathy", "pediatric", "prenatal", "chiropractic", "detox"];
const conditionSlugs = ["back-pain", "neck-pain", "sciatica", "headaches", "neuropathy-condition", "scoliosis", "herniated-disc"];

const allSlugs = [...serviceSlugs, ...conditionSlugs];

export async function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

const titleMap: Record<string, string> = {
  hbot: "HBOT Coppell TX",
  softwave: "SoftWave Therapy Coppell TX",
  thermography: "Thermography Coppell TX",
  "blood-microscopy": "Blood Microscopy Coppell TX",
  "spinal-correction": "Spinal Correction Coppell TX",
  "spinal-decompression": "Spinal Decompression Coppell TX",
  "corrective-exercises": "Corrective Exercises Coppell TX",
  nutrition: "Nutrition Counseling Coppell TX",
  neuropathy: "Neuropathy Treatment Coppell TX",
  pediatric: "Pediatric Chiropractic Coppell TX",
  prenatal: "Prenatal Chiropractic Coppell TX",
  chiropractic: "Chiropractic Care Coppell TX",
  detox: "Detox Services Coppell TX",
  "back-pain": "Back Pain Treatment Coppell TX",
  "neck-pain": "Neck Pain Treatment Coppell TX",
  sciatica: "Sciatica Treatment Coppell TX",
  headaches: "Headache Treatment Coppell TX",
  "neuropathy-condition": "Neuropathy Coppell TX",
  scoliosis: "Scoliosis Treatment Coppell TX",
  "herniated-disc": "Herniated Disc Treatment Coppell TX",
};

const nameMap: Record<string, string> = {
  hbot: "Hyperbaric Oxygen Therapy",
  softwave: "SoftWave Therapy",
  thermography: "Digital Thermography",
  "blood-microscopy": "Live Blood Microscopy",
  "spinal-correction": "Spinal Correction",
  "spinal-decompression": "Spinal Decompression",
  "corrective-exercises": "Corrective Exercises",
  nutrition: "Nutrition Counseling",
  neuropathy: "Neuropathy Treatment",
  pediatric: "Pediatric Chiropractic",
  prenatal: "Prenatal Chiropractic",
  chiropractic: "Chiropractic Care",
  detox: "Detox Services",
  "back-pain": "Back Pain Treatment",
  "neck-pain": "Neck Pain Treatment",
  sciatica: "Sciatica Treatment",
  headaches: "Headache & Migraine Treatment",
  "neuropathy-condition": "Neuropathy",
  scoliosis: "Scoliosis Treatment",
  "herniated-disc": "Herniated Disc Treatment",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!allSlugs.includes(slug)) return {};
  const name = nameMap[slug] || "Service";
  return {
    title: titleMap[slug] || `${name} Coppell TX`,
    description: `${name} at Erb Family Wellness in Coppell, TX. 28 years of corrective care. Call (972) 393-6262.`,
    alternates: { canonical: `https://www.erbfamilywellness.com/coppell/${slug}/` },
  };
}

export default async function CoppellServicePage({ params }: Props) {
  const { slug } = await params;
  if (!allSlugs.includes(slug)) notFound();

  const name = nameMap[slug] || slug;
  const isCondition = conditionSlugs.includes(slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.erbfamilywellness.com" },
      { "@type": "ListItem", position: 2, name: "Coppell", item: "https://www.erbfamilywellness.com/coppell/" },
      { "@type": "ListItem", position: 3, name: name, item: `https://www.erbfamilywellness.com/coppell/${slug}/` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": isCondition ? "MedicalCondition" : "MedicalTherapy",
    name,
    provider: {
      "@type": "Chiropractor",
      "@id": "https://www.erbfamilywellness.com/coppell/#location",
      name: "Erb Family Wellness - Coppell",
      telephone: "(972) 393-6262",
    },
  };

  // Related Coppell services for internal linking (silo discipline)
  const relatedServices = serviceSlugs
    .filter((s) => s !== slug && s !== "chiropractic")
    .slice(0, 6)
    .map((s) => ({ name: nameMap[s] || s, href: `/coppell/${s}` }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Coppell", href: "/coppell" }, { label: name }]}
        titleLight={`${name} in`}
        titleHeavy="Coppell TX"
        subtitle={`Advanced ${name.toLowerCase()} at Erb Family Wellness in Coppell, TX. Dr. David Erb -- 28 years of experience, 2012 London Olympics credentials. Call (972) 393-6262.`}
      />

      <StatsBar items={["28 Years Experience", "2012 London Olympics", "4.8 Stars", "(972) 393-6262"]} />

      <section className="page-section page-section--cream">
        <div className="container-erb">
          <div style={{ display: "grid", gridTemplateColumns: "55fr 45fr", gap: 64, alignItems: "start" }} className="split--responsive">
            <RevealOnScroll>
              <div>
                <span className="label">{name.toUpperCase()} IN COPPELL</span>
                <h2 className="section-headline">
                  <span className="light">Expert {name.toLowerCase()}</span>
                  <span className="heavy">in Coppell, TX.</span>
                </h2>
                <p style={{ fontSize: 17, color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: 24 }}>
                  Erb Family Wellness at 255 S Denton Tap Rd, Suite 200, Coppell, TX 75019 provides advanced {name.toLowerCase()} as part of our comprehensive corrective care approach. With 28 years of experience and 2012 London Olympics credentials, Dr. David Erb delivers a level of care unavailable at traditional chiropractic offices.
                </p>
                <p style={{ fontSize: 17, color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: 24 }}>
                  Our Coppell office serves patients from Coppell, Lewisville, Flower Mound, Carrollton, Grapevine, Irving, Valley Ranch, and the broader DFW Metroplex. Patients also travel from across the country for Dr. Erb&apos;s expertise.
                </p>
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>
                  <strong>Full service page content is available.</strong> For the complete {name.toLowerCase()} experience, call <a href="tel:9723936262" style={{ color: "var(--color-teal)", fontWeight: 600 }}>(972) 393-6262</a> or <Link href="/schedule" style={{ color: "var(--color-teal)", fontWeight: 600 }}>schedule online</Link>.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <FormCard subtitle={`Start your ${name.toLowerCase()} journey in Coppell.`} />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* RELATED COPPELL SERVICES */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">Coppell Services</span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              {relatedServices.map((s) => (
                <Link key={s.href} href={s.href} style={{ padding: "10px 20px", background: "#fff", borderRadius: 999, fontSize: 14, fontWeight: 500, color: "var(--color-teal)", textDecoration: "none", boxShadow: "0 2px 8px rgba(14,24,44,.06)" }}>{s.name}</Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section page-section--navy" style={{ textAlign: "center" }}>
        <div className="container-erb">
          <RevealOnScroll>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "var(--color-text-light)", marginBottom: 32 }}>{name} in Coppell starts here.</h2>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/schedule" className="btn btn--teal">Book Your $67 Visit &rarr;</Link>
              <a href="tel:9723936262" className="btn btn--outline" style={{ borderColor: "rgba(241,236,232,.3)", color: "var(--color-text-light)" }}>(972) 393-6262</a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* LOCATION NOTICE */}
      <section style={{ padding: "40px 0", background: "var(--color-cream)", textAlign: "center" }}>
        <div className="container-erb">
          <p style={{ fontSize: 15, color: "var(--color-text-secondary)" }}>
            This page is for our Coppell location. Looking for <Link href={`/southlake/${slug === "neuropathy-condition" ? "neuropathy" : slug}`} style={{ color: "var(--color-teal)", fontWeight: 600 }}>{name.toLowerCase()} in Southlake</Link>?
          </p>
        </div>
      </section>
    </>
  );
}
