import type { MetadataRoute } from "next";

const BASE_URL = "https://erbfamilywellness.com";

const coppellServiceSlugs = [
  "chiropractic",
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
  "detox",
];

const coppellConditionSlugs = [
  "back-pain",
  "neck-pain",
  "sciatica",
  "headaches",
  "neuropathy-condition",
  "scoliosis",
  "herniated-disc",
];

const southlakeServiceSlugs = [
  "chiropractic",
  "spinal-correction",
  "softwave",
  "hbot",
  "spinal-decompression",
  "thermography",
  "neuropathy",
  "pediatric",
  "prenatal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/coppell`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/southlake`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/testimonials`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/new-patient`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/schedule`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const coppellServicePages: MetadataRoute.Sitemap = coppellServiceSlugs.map((slug) => ({
    url: `${BASE_URL}/coppell/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const coppellConditionPages: MetadataRoute.Sitemap = coppellConditionSlugs.map((slug) => ({
    url: `${BASE_URL}/coppell/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const southlakeServicePages: MetadataRoute.Sitemap = southlakeServiceSlugs.map((slug) => ({
    url: `${BASE_URL}/southlake/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...coppellServicePages, ...coppellConditionPages, ...southlakeServicePages];
}
