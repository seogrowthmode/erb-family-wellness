import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Terms of Use | Coppell TX",
  description:
    "Terms of use for erbfamilywellness.com. Website disclaimers, medical advice limitations, intellectual property, and user conduct.",
  alternates: { canonical: "https://erbfamilywellness.com/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
        titleLight="Terms"
        titleHeavy="of Use."
        subtitle="The terms and conditions governing your use of erbfamilywellness.com."
      />

      <section className="page-section page-section--cream">
        <div className="container-erb" style={{ maxWidth: 820 }}>
          <RevealOnScroll>
            <div className="narrative">
              <p>
                <strong>Effective Date:</strong> January 1, 2025
              </p>
              <p>
                By accessing or using erbfamilywellness.com, you agree to be bound by these Terms of Use. If
                you do not agree, please do not use our website.
              </p>

              <h2>Medical Disclaimer</h2>
              <p>
                The content on this website is for informational purposes only and does not constitute
                medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider
                regarding any medical condition. Individual results may vary. No outcome, remedy, or cure is
                guaranteed.
              </p>

              <h2>No Doctor-Patient Relationship</h2>
              <p>
                Browsing this site, submitting a form, or corresponding with us does not establish a
                doctor-patient relationship. A doctor-patient relationship is only formed after an in-person
                examination at our office and execution of appropriate consent forms.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                All content on this website &mdash; including text, graphics, logos, images, and code &mdash;
                is the property of Erb Family Wellness or its licensors and is protected by U.S. and
                international copyright laws. You may not reproduce, distribute, or create derivative works
                without our written permission.
              </p>

              <h2>User Conduct</h2>
              <p>
                You agree not to use this site to post unlawful, harassing, defamatory, or infringing content;
                attempt to gain unauthorized access to our systems; or interfere with the site&rsquo;s
                operation.
              </p>

              <h2>Third-Party Links</h2>
              <p>
                Our site may link to third-party websites. We are not responsible for their content, privacy
                practices, or services. Visit those sites at your own risk.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Erb Family Wellness is not liable for any direct,
                indirect, incidental, or consequential damages arising from your use of this website or
                reliance on its content.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Texas. Any disputes shall be resolved in
                the state or federal courts located in Dallas County, Texas.
              </p>

              <h2>Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Continued use of the site after changes
                constitutes acceptance of the revised Terms.
              </p>

              <h2>Contact</h2>
              <p>
                Questions? Reach us at{" "}
                <a href="tel:9723936262" style={{ color: "var(--color-teal)" }}>(972) 393-6262</a> or via
                our <Link href="/contact" style={{ color: "var(--color-teal)" }}>contact page</Link>.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
