"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import { OFFER, LOCATIONS } from "@/lib/lead-config";

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PK_ERB
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK_ERB)
  : null;

function CheckoutForm({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError("");

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/confirmation?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}`,
      },
    });

    if (result.error) {
      setError(result.error.message || "Payment failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {error && (
        <p style={{ color: "#e53e3e", fontSize: 14, marginTop: 12 }}>
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="form-card__submit"
        style={{ marginTop: 24, width: "100%" }}
      >
        {loading ? "Processing..." : `Pay ${OFFER.prepayPrice} Now`} &rarr;
      </button>
    </form>
  );
}

function PrepayContent() {
  const params = useSearchParams();
  const firstName = params.get("firstName") || "";
  const lastName = params.get("lastName") || "";
  const email = params.get("email") || "";
  const phone = params.get("phone") || "";
  const location = (params.get("location") || "coppell") as keyof typeof LOCATIONS;
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [paymentError, setPaymentError] = useState("");

  useEffect(() => {
    fetch("/api/stripe/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name: `${firstName} ${lastName}`.trim(),
        location,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok && data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setPaymentError(
            "Unable to initialize payment. Please call us to complete your booking."
          );
        }
      })
      .catch(() => {
        setPaymentError(
          "Unable to connect to payment service. Please call us."
        );
      });
  }, [email, firstName, lastName, location]);

  const loc = LOCATIONS[location] || LOCATIONS.coppell;

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Schedule", href: "/schedule-appointment" },
          { label: "Prepay" },
        ]}
        titleLight="Save"
        titleHeavy={OFFER.savings}
        subtitle={`Pay ${OFFER.prepayPrice} now instead of ${OFFER.price} at your visit.`}
        short
      />

      <section className="page-section page-section--cream">
        <div className="container-erb">
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <RevealOnScroll>
              <div className="form-card" style={{ padding: "48px 40px" }}>
                {firstName && (
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: "var(--color-navy)",
                      marginBottom: 4,
                      textAlign: "center",
                    }}
                  >
                    {firstName}, your appointment is confirmed!
                  </p>
                )}
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--color-text-secondary)",
                    marginBottom: 24,
                    textAlign: "center",
                  }}
                >
                  Prepay now and save {OFFER.savings} on your first visit.
                </p>

                <div
                  style={{
                    background: "rgba(14,24,44,.03)",
                    borderRadius: 12,
                    padding: "20px 24px",
                    marginBottom: 28,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 12,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      New Patient Visit
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        textDecoration: "line-through",
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      {OFFER.price}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: "var(--color-navy)",
                      }}
                    >
                      Prepay Price
                    </span>
                    <span
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        color: "var(--color-teal)",
                      }}
                    >
                      {OFFER.prepayPrice}
                    </span>
                  </div>
                </div>

                {paymentError && (
                  <p
                    style={{
                      color: "#e53e3e",
                      fontSize: 14,
                      marginBottom: 16,
                      textAlign: "center",
                    }}
                  >
                    {paymentError}{" "}
                    <a
                      href={`tel:${loc.phone.replace(/\D/g, "")}`}
                      style={{ color: "var(--color-teal)", fontWeight: 600 }}
                    >
                      {loc.phone}
                    </a>
                  </p>
                )}

                {clientSecret && stripePromise ? (
                  <Elements
                    stripe={stripePromise}
                    options={{ clientSecret, appearance: { theme: "stripe" } }}
                  >
                    <CheckoutForm firstName={firstName} lastName={lastName} />
                  </Elements>
                ) : !paymentError ? (
                  <div style={{ textAlign: "center", padding: 40 }}>
                    <p style={{ color: "var(--color-text-secondary)" }}>
                      Loading payment form...
                    </p>
                  </div>
                ) : null}

                <p
                  className="form-card__note"
                  style={{ marginTop: 20, textAlign: "center" }}
                >
                  Secure payment via Stripe. CareCredit also accepted.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div
                style={{
                  marginTop: 32,
                  padding: "24px 28px",
                  background: "white",
                  borderRadius: 16,
                  boxShadow: "0 4px 16px rgba(14,24,44,.05)",
                }}
              >
                <h2
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--color-navy)",
                    marginBottom: 16,
                  }}
                >
                  Your visit includes:
                </h2>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {OFFER.includes.map((item, i) => (
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
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <p
                style={{
                  textAlign: "center",
                  marginTop: 24,
                  fontSize: 14,
                  color: "var(--color-text-secondary)",
                }}
              >
                Prefer to pay at your visit?{" "}
                <a href="/confirmation" style={{ color: "var(--color-teal)", fontWeight: 600 }}>
                  Skip prepay &rarr;
                </a>
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}

export default function PrepayPage() {
  return (
    <Suspense
      fallback={
        <div style={{ padding: 80, textAlign: "center" }}>Loading...</div>
      }
    >
      <PrepayContent />
    </Suspense>
  );
}
