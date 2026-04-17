import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Phase 3: 301 redirects from old /services/ URLs to /coppell/ silo
      { source: "/services/hbot", destination: "/coppell/hbot", permanent: true },
      { source: "/services/softwave", destination: "/coppell/softwave", permanent: true },
      { source: "/services/thermography", destination: "/coppell/thermography", permanent: true },
      { source: "/services/blood-microscopy", destination: "/coppell/blood-microscopy", permanent: true },
      { source: "/services/spinal-correction", destination: "/coppell/spinal-correction", permanent: true },
      { source: "/services/spinal-decompression", destination: "/coppell/spinal-decompression", permanent: true },
      { source: "/services/corrective-exercises", destination: "/coppell/corrective-exercises", permanent: true },
      { source: "/services/nutrition", destination: "/coppell/nutrition", permanent: true },
      { source: "/services/neuropathy", destination: "/coppell/neuropathy", permanent: true },
      { source: "/services/pediatric", destination: "/coppell/pediatric", permanent: true },
      { source: "/services/prenatal", destination: "/coppell/prenatal", permanent: true },
      // Redirect services index to coppell location page
      { source: "/services", destination: "/coppell", permanent: true },
      // Phase 3: 301 redirects from old /conditions/ URLs to /coppell/ silo
      { source: "/conditions/back-pain", destination: "/coppell/back-pain", permanent: true },
      { source: "/conditions/neck-pain", destination: "/coppell/neck-pain", permanent: true },
      { source: "/conditions/sciatica", destination: "/coppell/sciatica", permanent: true },
      { source: "/conditions/headaches", destination: "/coppell/headaches", permanent: true },
      { source: "/conditions/neuropathy", destination: "/coppell/neuropathy-condition", permanent: true },
      { source: "/conditions/scoliosis", destination: "/coppell/scoliosis", permanent: true },
      { source: "/conditions/herniated-disc", destination: "/coppell/herniated-disc", permanent: true },
      // Legacy Squarespace URLs — 301 to canonical coppell silo
      { source: "/softwave-therapy", destination: "/coppell/softwave", permanent: true },
      { source: "/hyperbaric-oxygen-therapy", destination: "/coppell/hbot", permanent: true },
      { source: "/hbot", destination: "/coppell/hbot", permanent: true },
      { source: "/thermography", destination: "/coppell/thermography", permanent: true },
      { source: "/functional-nutrition", destination: "/coppell/nutrition", permanent: true },
      { source: "/nutrition", destination: "/coppell/nutrition", permanent: true },
      { source: "/detox", destination: "/coppell/detox", permanent: true },
      { source: "/blood-microscopy", destination: "/coppell/blood-microscopy", permanent: true },
      { source: "/chirporactic", destination: "/coppell/chiropractic", permanent: true },
      { source: "/chiropractic", destination: "/coppell/chiropractic", permanent: true },
      { source: "/spinal-correction", destination: "/coppell/spinal-correction", permanent: true },
      { source: "/spinal-decompression", destination: "/coppell/spinal-decompression", permanent: true },
      { source: "/corrective-exercises", destination: "/coppell/corrective-exercises", permanent: true },
      { source: "/neuropathy", destination: "/coppell/neuropathy", permanent: true },
      { source: "/pediatric", destination: "/coppell/pediatric", permanent: true },
      { source: "/prenatal", destination: "/coppell/prenatal", permanent: true },
      // Legacy condition URLs
      { source: "/back-pain", destination: "/coppell/back-pain", permanent: true },
      { source: "/neck-pain", destination: "/coppell/neck-pain", permanent: true },
      { source: "/sciatica", destination: "/coppell/sciatica", permanent: true },
      { source: "/headaches", destination: "/coppell/headaches", permanent: true },
      { source: "/scoliosis", destination: "/coppell/scoliosis", permanent: true },
      { source: "/herniated-disc", destination: "/coppell/herniated-disc", permanent: true },
      // Legacy utility URLs
      { source: "/testimonies", destination: "/testimonials", permanent: true },
      { source: "/contact-and-follow", destination: "/contact", permanent: true },
      { source: "/schedule-my-appointment", destination: "/schedule", permanent: true },
      { source: "/book-now", destination: "/schedule", permanent: true },
    ];
  },
};

export default nextConfig;
