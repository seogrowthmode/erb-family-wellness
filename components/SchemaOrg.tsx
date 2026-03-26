import { siteConfig } from "@/lib/site-config";

export default function SchemaOrg() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    foundingDate: "1998",
    image: `${siteConfig.url}/images/erb-family-wellness-office.jpg`,
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.rumble,
      siteConfig.social.linkedin,
    ],
    department: [
      { "@id": `${siteConfig.url}/coppell/#location` },
      { "@id": `${siteConfig.url}/southlake/#location` },
    ],
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

  const schemas = [organization, doctor];

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
