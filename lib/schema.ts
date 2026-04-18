import { siteConfig } from "./site-config";

type LocationKey = keyof typeof siteConfig.locations;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    email: siteConfig.email,
  };
}

export function localBusinessSchema(locationKey: LocationKey) {
  const location = siteConfig.locations[locationKey];
  if (!location) return null;
  const pageUrl = `${siteConfig.url}/${locationKey}/`;
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness", "Chiropractor"],
    "@id": `${pageUrl}#localbusiness`,
    name: location.name,
    telephone: location.phone,
    url: pageUrl,
    image: `${siteConfig.url}/images/logo.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address.street,
      addressLocality: location.address.city,
      addressRegion: location.address.state,
      postalCode: location.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    },
    openingHoursSpecification: buildOpeningHours(location.hours),
    areaServed: (location.serviceArea || []).map((city) => ({
      "@type": "City",
      name: city,
    })),
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function medicalBusinessSchemaForService(
  locationKey: LocationKey,
  service: { name: string; url: string; description?: string }
) {
  const location = siteConfig.locations[locationKey];
  if (!location) return null;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `${service.name} - ${location.name}`,
    url: `${siteConfig.url}${service.url}`,
    description: service.description,
    telephone: location.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address.street,
      addressLocality: location.address.city,
      addressRegion: location.address.state,
      postalCode: location.address.zip,
      addressCountry: "US",
    },
  };
}

export function serviceSchema(params: {
  name: string;
  url: string;
  description: string;
  locationKey: LocationKey;
}) {
  const location = siteConfig.locations[params.locationKey];
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: params.name,
    description: params.description,
    url: `${siteConfig.url}${params.url}`,
    provider: {
      "@type": "MedicalBusiness",
      name: location?.name || siteConfig.name,
      telephone: location?.phone,
      address: location
        ? {
            "@type": "PostalAddress",
            streetAddress: location.address.street,
            addressLocality: location.address.city,
            addressRegion: location.address.state,
            postalCode: location.address.zip,
            addressCountry: "US",
          }
        : undefined,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: siteConfig.doctor.name,
    jobTitle: "Chiropractor",
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/team/`,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

function buildOpeningHours(hours: Record<string, string>) {
  const dayMap: Record<string, string> = {
    monday: "Mo",
    tuesday: "Tu",
    wednesday: "We",
    thursday: "Th",
    friday: "Fr",
    saturday: "Sa",
    sunday: "Su",
  };
  const specs: Array<Record<string, string | string[]>> = [];
  for (const [day, val] of Object.entries(hours || {})) {
    const short = dayMap[day.toLowerCase()];
    if (!short || !val || /closed/i.test(val)) continue;
    const rangeParts = val.split(",").map((r) => r.trim());
    for (const part of rangeParts) {
      const m = part.match(/(\d{1,2}:\d{2}\s*[AaPp][Mm])\s*[-–]\s*(\d{1,2}:\d{2}\s*[AaPp][Mm])/);
      if (!m) continue;
      specs.push({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: short,
        opens: to24h(m[1]),
        closes: to24h(m[2]),
      });
    }
  }
  return specs;
}

function to24h(timeStr: string): string {
  const m = timeStr.trim().match(/(\d{1,2}):(\d{2})\s*([AaPp][Mm])/);
  if (!m) return timeStr;
  let hour = parseInt(m[1], 10);
  const minute = m[2];
  const suffix = m[3].toUpperCase();
  if (suffix === "PM" && hour !== 12) hour += 12;
  if (suffix === "AM" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${minute}`;
}
