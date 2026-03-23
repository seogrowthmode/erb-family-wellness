"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useCallback } from "react";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import { RW_EMBED_ID, LOCATIONS } from "@/lib/lead-config";

function nativeSetter(el: HTMLInputElement | null, val: string) {
  if (!el || !val || el.value) return;
  const ns = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
  if (ns) ns.call(el, val);
  el.dispatchEvent(new Event("input", { bubbles: true }));
  el.dispatchEvent(new Event("change", { bubbles: true }));
  el.classList.remove("empty");
}

const CONFIRM_PATTERNS = [
  "appointment has been scheduled",
  "appointment is confirmed",
  "you are all set",
  "successfully booked",
  "booking confirmed",
];

function ScheduleContent() {
  const params = useSearchParams();
  const firstName = params.get("firstName") || "";
  const lastName = params.get("lastName") || "";
  const email = params.get("email") || "";
  const phone = params.get("phone") || "";
  const location = (params.get("location") || "coppell") as keyof typeof LOCATIONS;
  const observerRef = useRef<MutationObserver | null>(null);
  const trackedRef = useRef(false);

  const fireAppointmentTracker = useCallback(async () => {
    if (trackedRef.current) return;
    trackedRef.current = true;
    try {
      await fetch("/api/funnel/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "appointment",
          slug: "david-erb",
          location,
          firstName,
          lastName,
          email,
          phone,
          source: "Website",
        }),
      });
    } catch {
      // fire and forget
    }
  }, [location, firstName, lastName, email, phone]);

  useEffect(() => {
    // Auto-fill RW fields after embed loads
    const fillInterval = setInterval(() => {
      const fnField = document.getElementById("rw-first-name-field") as HTMLInputElement | null;
      const lnField = document.getElementById("rw-last-name-field") as HTMLInputElement | null;
      const emField = document.getElementById("rw-email-field") as HTMLInputElement | null;
      const phField = document.getElementById("rw-phone-field") as HTMLInputElement | null;
      const privacyField = document.getElementById("rw-privacy-agree-field") as HTMLInputElement | null;

      if (fnField) {
        nativeSetter(fnField, firstName);
        nativeSetter(lnField, lastName);
        nativeSetter(emField, email);
        nativeSetter(phField, phone);
        if (privacyField && !privacyField.checked) {
          privacyField.click();
        }
        clearInterval(fillInterval);
      }
    }, 500);

    // Detect RW booking confirmation
    observerRef.current = new MutationObserver(() => {
      const text = document.body.innerText.toLowerCase();
      if (CONFIRM_PATTERNS.some((p) => text.includes(p))) {
        observerRef.current?.disconnect();
        fireAppointmentTracker();
        // Wait for tracker, then redirect to prepay
        setTimeout(() => {
          window.location.href = `/prepay?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&location=${location}`;
        }, 3000);
      }
    });

    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      clearInterval(fillInterval);
      observerRef.current?.disconnect();
    };
  }, [firstName, lastName, email, phone, location, fireAppointmentTracker]);

  const loc = LOCATIONS[location] || LOCATIONS.coppell;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Schedule Appointment" }]}
        titleLight="Schedule Your"
        titleHeavy="Appointment"
        subtitle={`${loc.label} location -- ${loc.address}`}
        short
      />

      <section className="page-section page-section--cream">
        <div className="container-erb">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <RevealOnScroll>
              <div
                className="form-card"
                style={{ padding: "48px 40px", textAlign: "center" }}
              >
                <h2
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "var(--color-navy)",
                    marginBottom: 8,
                  }}
                >
                  Choose Your Appointment Time
                </h2>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--color-text-secondary)",
                    marginBottom: 32,
                  }}
                >
                  {firstName ? `${firstName}, select` : "Select"} a time that works
                  best for you.
                </p>

                {/* ReviewWave embed */}
                <div id="rw-embed-container">
                  <script
                    charSet="utf-8"
                    src="https://cdn.reviewwave.com/js/reviewwave.js"
                    data-id={RW_EMBED_ID}
                    async
                  />
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="trust-strip" style={{ marginTop: 24 }}>
                <span>
                  <span className="stars">{"\u2605\u2605\u2605\u2605\u2605"}</span> 4.8
                </span>
                <span>306+ Reviews</span>
                <span>28 Years</span>
                <span>2012 Olympics</span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <p
                style={{
                  textAlign: "center",
                  marginTop: 24,
                  fontSize: 16,
                  fontWeight: 600,
                  color: "var(--color-text-secondary)",
                }}
              >
                Prefer to call?{" "}
                <a href={`tel:${loc.phone.replace(/\D/g, "")}`} style={{ color: "var(--color-teal)" }}>
                  {loc.phone}
                </a>
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ScheduleAppointmentPage() {
  return (
    <Suspense
      fallback={
        <div style={{ padding: 80, textAlign: "center" }}>Loading...</div>
      }
    >
      <ScheduleContent />
    </Suspense>
  );
}
