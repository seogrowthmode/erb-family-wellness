import type { MetadataRoute } from "next";

const BASE_URL = "https://www.erbfamilywellness.com";

const serviceSlugs = [
  "hbot",
  "softwave",
  "thermography",
  "blood-microscopy",
  "spinal-correction",
  "spinal-decompression",
  "corrective-exercises",
  "nutrition",
  "neuropathy",
  "pediatric",
  "prenatal",
];

const conditionSlugs = [
  "back-pain",
  "neck-pain",
  "sciatica",
  "headaches",
  "neuropathy",
  "scoliosis",
  "herniated-disc",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/testimonials`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/new-patient`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/schedule`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const conditionPages: MetadataRoute.Sitemap = conditionSlugs.map((slug) => ({
    url: `${BASE_URL}/conditions/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...conditionPages];
}
