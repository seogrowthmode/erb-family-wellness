"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import { OFFER, LOCATIONS } from "@/lib/lead-config";

function ConfirmationContent() {
  const params = useSearchParams();
  const firstName = params.get("firstName") || "";
  const location = (params.get("location") || "coppell") as keyof typeof LOCATIONS;
  const loc = LOCATIONS[location] || LOCATIONS.coppell;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Confirmation" }]}
        titleLight="You're"
        titleHeavy="All Set!"
        subtitle="Your appointment has been confirmed."
        short
      />

      <section className="page-section page-section--cream">
        <div className="container-erb">
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <RevealOnScroll>
              <div
                className="form-card"
                style={{ padding: "48px 40px", textAlign: "center" }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: "var(--color-teal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    fontSize: 36,
                    color: "white",
                  }}
                >
                  &#10003;
                </div>

                <h2
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "var(--color-navy)",
                    marginBottom: 8,
                  }}
                >
                  {firstName ? `${firstName}, we'll see you soon!` : "We'll see you soon!"}
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    color: "var(--color-text-secondary)",
                    marginBottom: 32,
                    lineHeight: 1.6,
                  }}
                >
                  Your appointment at our {loc.label} office is confirmed.
                  You'll receive a confirmation email shortly.
                </p>

                <div
                  style={{
                    background: "rgba(14,24,44,.03)",
                    borderRadius: 12,
                    padding: "24px 28px",
                    textAlign: "left",
                    marginBottom: 24,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--color-navy)",
                      marginBottom: 16,
                    }}
                  >
                    What to Expect
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {OFFER.whatToExpect.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: 14,
                          color: "var(--color-text-secondary)",
                          padding: "6px 0",
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <span style={{ color: "var(--color-teal)", fontSize: 16 }}>
                          &#10003;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    background: "rgba(14,24,44,.03)",
                    borderRadius: 12,
                    padding: "20px 24px",
                    textAlign: "left",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--color-navy)",
                      marginBottom: 12,
                    }}
                  >
                    {loc.label} Office
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--color-text-secondary)",
                      margin: "4px 0",
                    }}
                  >
                    {loc.address}
                  </p>
                  <p style={{ fontSize: 14, margin: "4px 0" }}>
                    <a
                      href={`tel:${loc.phone.replace(/\D/g, "")}`}
                      style={{ color: "var(--color-teal)", fontWeight: 600 }}
                    >
                      {loc.phone}
                    </a>
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense
      fallback={
        <div style={{ padding: 80, textAlign: "center" }}>Loading...</div>
      }
    >
      <ConfirmationContent />
    </Suspense>
  );
}
