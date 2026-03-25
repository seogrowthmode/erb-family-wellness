import { siteConfig } from "@/lib/site-config";

export default function SchemaOrg() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["Chiropractor", "MedicalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: "1998",
    image: `${siteConfig.url}/images/erb-family-wellness-office.jpg`,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, CareCredit, Insurance",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.9582,
      longitude: -97.0038,
    },
    areaServed: siteConfig.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
    })),
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "08:00", closes: "10:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "15:30", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "12:00", closes: "15:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "08:00", closes: "10:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "15:30", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "14:30", closes: "17:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "07:30", closes: "10:30" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "306",
      bestRating: "5",
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.rumble,
      siteConfig.social.linkedin,
    ],
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
  };

  const southlakeLocation = {
    "@context": "https://schema.org",
    "@type": ["Chiropractor", "MedicalBusiness"],
    "@id": `${siteConfig.url}/#southlake`,
    name: "Erb Family Wellness - Southlake",
    url: siteConfig.url,
    telephone: siteConfig.phone,
    parentOrganization: { "@id": `${siteConfig.url}/#organization` },
    address: {
      "@type": "PostalAddress",
      streetAddress: "1845 E Southlake Blvd, Suite 140",
      addressLocality: "Southlake",
      addressRegion: "TX",
      postalCode: "76092",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.9413,
      longitude: -97.1342,
    },
  };

  const doctor = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. David Erb",
    jobTitle: "Doctor of Chiropractic",
    description: "28+ years of clinical experience. 2012 London Olympics chiropractor for USA Wrestling, Judo, and Weightlifting. MaxLiving Network member.",
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", credentialCategory: "DC" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "CCCN" },
    ],
    alumniOf: { "@type": "EducationalOrganization", name: "Parker College of Chiropractic" },
  };

  const schemas = [localBusiness, southlakeLocation, doctor];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
