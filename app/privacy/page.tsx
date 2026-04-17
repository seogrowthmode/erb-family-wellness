import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Privacy Policy | Erb Family Wellness Coppell TX",
  description:
    "Privacy policy for Erb Family Wellness. How we collect, use, and protect your personal and health information in compliance with HIPAA.",
  alternates: { canonical: "https://www.erbfamilywellness.com/privacy/" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        titleLight="Privacy"
        titleHeavy="Policy."
        subtitle="How Erb Family Wellness collects, uses, and protects your personal and health information."
      />

      <section className="page-section page-section--cream">
        <div className="container-erb" style={{ maxWidth: 820 }}>
          <RevealOnScroll>
            <div className="narrative">
              <p>
                <strong>Effective Date:</strong> January 1, 2025
              </p>
              <p>
                Erb Family Wellness (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
                protecting the privacy of our patients and website visitors. This Privacy Policy describes how
                we collect, use, disclose, and safeguard your information when you visit
                erbfamilywellness.com or receive care at our Coppell, TX office.
              </p>

              <h2>Information We Collect</h2>
              <p>
                <strong>Personal Information:</strong> When you schedule an appointment, complete forms, or
                contact us, we may collect your name, address, phone number, email, date of birth, insurance
                details, and health history.
              </p>
              <p>
                <strong>Website Usage Data:</strong> We collect non-identifying information such as browser
                type, pages visited, and referring URLs via Google Analytics and similar tools.
              </p>

              <h2>HIPAA &amp; Protected Health Information</h2>
              <p>
                As a chiropractic practice, we are a HIPAA-covered entity. Your protected health information
                (PHI) is handled in accordance with HIPAA Privacy and Security Rules. We will only disclose
                PHI for treatment, payment, healthcare operations, or when required by law.
              </p>

              <h2>How We Use Your Information</h2>
              <ul>
                <li>To provide and coordinate chiropractic care</li>
                <li>To schedule appointments and send reminders</li>
                <li>To process payments and insurance claims</li>
                <li>To comply with legal and regulatory requirements</li>
                <li>To improve our services and website experience</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information. We may share information with
                trusted third parties (payment processors, scheduling software, email providers) solely to
                operate our practice, and only under signed business associate agreements where HIPAA applies.
              </p>

              <h2>Cookies &amp; Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience. You can
                disable cookies through your browser settings, though some site features may not function
                properly.
              </p>

              <h2>Your Rights</h2>
              <p>
                You have the right to access, correct, or request deletion of your personal information. For
                PHI, you have additional rights under HIPAA to request restrictions, amendments, and an
                accounting of disclosures.
              </p>

              <h2>Contact Us</h2>
              <p>
                Questions about this Privacy Policy or your information? Contact us at{" "}
                <a href="tel:9723936262" style={{ color: "var(--color-teal)" }}>(972) 393-6262</a> or
                visit our <Link href="/contact" style={{ color: "var(--color-teal)" }}>contact page</Link>.
              </p>
              <p>
                <strong>Erb Family Wellness</strong>
                <br />
                255 S Denton Tap Rd, Suite 200
                <br />
                Coppell, TX 75019
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
