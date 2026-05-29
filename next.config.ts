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
      { source: "/services/hbot", destination: "/coppell/hbot", statusCode: 301 },
      { source: "/services/softwave", destination: "/coppell/softwave", statusCode: 301 },
      { source: "/services/thermography", destination: "/coppell/thermography", statusCode: 301 },
      { source: "/services/blood-microscopy", destination: "/coppell/blood-microscopy", statusCode: 301 },
      { source: "/services/spinal-correction", destination: "/coppell/spinal-correction", statusCode: 301 },
      { source: "/services/spinal-decompression", destination: "/coppell/spinal-decompression", statusCode: 301 },
      { source: "/services/corrective-exercises", destination: "/coppell/corrective-exercises", statusCode: 301 },
      { source: "/services/nutrition", destination: "/coppell/nutrition", statusCode: 301 },
      { source: "/services/neuropathy", destination: "/coppell/neuropathy", statusCode: 301 },
      { source: "/services/pediatric", destination: "/coppell/pediatric", statusCode: 301 },
      { source: "/services/prenatal", destination: "/coppell/prenatal", statusCode: 301 },
      // Redirect services index to coppell location page
      { source: "/services", destination: "/coppell", statusCode: 301 },
      // Phase 3: 301 redirects from old /conditions/ URLs to /coppell/ silo
      { source: "/conditions/back-pain", destination: "/coppell/back-pain", statusCode: 301 },
      { source: "/conditions/neck-pain", destination: "/coppell/neck-pain", statusCode: 301 },
      { source: "/conditions/sciatica", destination: "/coppell/sciatica", statusCode: 301 },
      { source: "/conditions/headaches", destination: "/coppell/headaches", statusCode: 301 },
      { source: "/conditions/neuropathy", destination: "/coppell/neuropathy-condition", statusCode: 301 },
      { source: "/conditions/scoliosis", destination: "/coppell/scoliosis", statusCode: 301 },
      { source: "/conditions/herniated-disc", destination: "/coppell/herniated-disc", statusCode: 301 },
      // Legacy Squarespace URLs — 301 to canonical coppell silo
      { source: "/softwave-therapy", destination: "/coppell/softwave", statusCode: 301 },
      { source: "/hyperbaric-oxygen-therapy", destination: "/coppell/hbot", statusCode: 301 },
      { source: "/hbot", destination: "/coppell/hbot", statusCode: 301 },
      { source: "/thermography", destination: "/coppell/thermography", statusCode: 301 },
      { source: "/functional-nutrition", destination: "/coppell/nutrition", statusCode: 301 },
      { source: "/nutrition", destination: "/coppell/nutrition", statusCode: 301 },
      { source: "/detox", destination: "/coppell/detox", statusCode: 301 },
      { source: "/blood-microscopy", destination: "/coppell/blood-microscopy", statusCode: 301 },
      { source: "/chirporactic", destination: "/coppell/chiropractic", statusCode: 301 },
      { source: "/chiropractic", destination: "/coppell/chiropractic", statusCode: 301 },
      { source: "/spinal-correction", destination: "/coppell/spinal-correction", statusCode: 301 },
      { source: "/spinal-decompression", destination: "/coppell/spinal-decompression", statusCode: 301 },
      { source: "/corrective-exercises", destination: "/coppell/corrective-exercises", statusCode: 301 },
      { source: "/neuropathy", destination: "/coppell/neuropathy", statusCode: 301 },
      { source: "/pediatric", destination: "/coppell/pediatric", statusCode: 301 },
      { source: "/prenatal", destination: "/coppell/prenatal", statusCode: 301 },
      // Legacy condition URLs
      { source: "/back-pain", destination: "/coppell/back-pain", statusCode: 301 },
      { source: "/neck-pain", destination: "/coppell/neck-pain", statusCode: 301 },
      { source: "/sciatica", destination: "/coppell/sciatica", statusCode: 301 },
      { source: "/headaches", destination: "/coppell/headaches", statusCode: 301 },
      { source: "/scoliosis", destination: "/coppell/scoliosis", statusCode: 301 },
      { source: "/herniated-disc", destination: "/coppell/herniated-disc", statusCode: 301 },
      // Legacy utility URLs
      { source: "/testimonies", destination: "/testimonials", statusCode: 301 },
      { source: "/contact-and-follow", destination: "/contact", statusCode: 301 },
      { source: "/schedule-my-appointment", destination: "/schedule", statusCode: 301 },
      { source: "/book-now", destination: "/schedule", statusCode: 301 },
    ];
  },
};

export default nextConfig;
