import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";
import RevealOnScroll from "@/components/RevealOnScroll";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Chiropractic Services | Erb Family Wellness",
  description:
    "HBOT, SoftWave, spinal decompression, thermography & more in Coppell TX. 28 years of corrective care. Call (972) 393-6262.",
};

const services = [
  {
    name: "Chiropractic",
    title: "Spinal Correction",
    description: "Advanced corrective chiropractic care — not just pain relief, but structural correction.",
    href: "/services/spinal-correction",
    imagePlaceholder: "Spinal adjustment technique",
  },
  {
    name: "Hyperbaric",
    title: "HBOT",
    description: "800% stem cell growth. Neurological recovery. Cellular regeneration.",
    href: "/services/hbot",
    imagePlaceholder: "Patient inside HBOT chamber",
    badge: "FLAGSHIP",
  },
  {
    name: "Regenerative",
    title: "SoftWave Therapy",
    description: "Targeted shockwaves for tissue regeneration and inflammation reduction.",
    href: "/services/softwave",
    imagePlaceholder: "SoftWave therapy device",
  },
  {
    name: "Non-Surgical",
    title: "Spinal Decompression",
    description: "Non-surgical motorized traction for herniated discs, bulging discs, and stenosis.",
    href: "/services/spinal-decompression",
    imagePlaceholder: "Spinal decompression table",
  },
  {
    name: "Diagnostic",
    title: "Thermography",
    description: "AlfaSight 120-point digital body mapping. Find what X-rays and MRIs miss.",
    href: "/services/thermography",
    imagePlaceholder: "AlfaSight thermal scan",
  },
  {
    name: "Diagnostic",
    title: "Blood Microscopy",
    description: "Cellular health analysis from a single drop of blood.",
    href: "/services/blood-microscopy",
    imagePlaceholder: "Blood analysis microscope",
  },
  {
    name: "Rehabilitation",
    title: "Corrective Exercises",
    description: "Custom exercise protocols to reinforce structural corrections.",
    href: "/services/corrective-exercises",
    imagePlaceholder: "Corrective exercise photo",
  },
  {
    name: "Wellness",
    title: "Nutrition Counseling",
    description: "Metabolix testing and functional nutrition tailored to your body.",
    href: "/services/nutrition",
    imagePlaceholder: "Nutrition consultation",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        titleLight="Advanced technology."
        titleHeavy="Corrective care."
        subtitle="The most comprehensive chiropractic wellness center in DFW. Technology no other chiropractor offers."
      />

      <StatsBar items={["28 Years Experience", "2012 London Olympics", "8+ Advanced Services", "2 DFW Locations"]} />

      {/* ALL SERVICES */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">OUR SERVICES</span>
              <h2 className="section-headline">
                <span className="light">Everything you need</span>
                <span className="heavy">under one roof.</span>
              </h2>
              <p className="section-sub">From advanced diagnostics to cutting-edge treatment technology &mdash; this is why patients travel from around the world.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="cards-grid cards-grid--4">
              {services.map((svc) => (
                <ServiceCard key={svc.title} {...svc} />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 5 ESSENTIALS */}
      <section className="page-section page-section--navy">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label label--light">THE FRAMEWORK</span>
              <h2 className="section-headline section-headline--light">
                <span className="light">Built on the</span>
                <span className="heavy">5 Essentials.</span>
              </h2>
              <p className="section-sub section-sub--light" style={{ marginLeft: "auto", marginRight: "auto" }}>
                Every service at Erb Family Wellness is part of a comprehensive approach to health built on 5 pillars.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="cards-grid cards-grid--5" style={{ gap: 20 }}>
              {[
                { num: "01", name: "Core Chiropractic", desc: "Structural correction of the spine and nervous system." },
                { num: "02", name: "Nutrition", desc: "Metabolix testing and functional nutrition." },
                { num: "03", name: "Mindset", desc: "Stress management and mental wellness." },
                { num: "04", name: "Oxygen & Exercise", desc: "HBOT, corrective exercises, movement." },
                { num: "05", name: "Minimize Toxins", desc: "Reduce toxic load on the body." },
              ].map((essential) => (
                <div key={essential.num} style={{ background: "rgba(241,236,232,.06)", borderRadius: "var(--r-md)", padding: "28px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 2, color: "var(--color-gold)", marginBottom: 12 }}>{essential.num}</div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "var(--color-text-light)", marginBottom: 8 }}>{essential.name}</h4>
                  <p style={{ fontSize: 13, color: "rgba(241,236,232,.55)", lineHeight: 1.6 }}>{essential.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
