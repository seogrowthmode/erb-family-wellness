import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConversionCTA from "@/components/ConversionCTA";
import GrainOverlay from "@/components/GrainOverlay";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Erb Family Wellness | Chiropractor in Coppell & Southlake TX",
    template: "%s | Erb Family Wellness",
  },
  description:
    "Erb Family Wellness -- advanced chiropractic care in Coppell and Southlake, TX. 28 years, 2012 Olympics. HBOT, SoftWave, thermography. $67 new patient special.",
  keywords: [
    "chiropractor coppell tx",
    "chiropractor southlake tx",
    "best chiropractor coppell",
    "HBOT coppell",
    "softwave therapy coppell",
    "spinal decompression coppell",
    "thermography coppell",
    "Dr. David Erb",
    "Erb Family Wellness",
  ],
  openGraph: {
    title: "Erb Family Wellness | Chiropractor in Coppell & Southlake, TX",
    description:
      "28 years. 2012 London Olympics. The most advanced chiropractic wellness center in DFW. $67 New Patient Special.",
    url: "https://www.erbfamilywellness.com",
    siteName: "Erb Family Wellness",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://www.erbfamilywellness.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.variable}`} style={{ fontFamily: "'Inter', sans-serif" }}>
        <GrainOverlay />
        <Header />
        <main>{children}</main>
        <ConversionCTA />
        <Footer />
      </body>
    </html>
  );
}
