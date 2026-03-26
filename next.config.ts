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
    ];
  },
};

export default nextConfig;
