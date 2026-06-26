"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { trackConversionEvent } from "@/lib/client-tracking";

export default function AppointmentForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handlePhoneFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length > 10) val = val.slice(0, 10);
    if (val.length >= 7) {
      e.target.value = `(${val.slice(0, 3)}) ${val.slice(3, 6)}-${val.slice(6)}`;
    } else if (val.length >= 4) {
      e.target.value = `(${val.slice(0, 3)}) ${val.slice(3)}`;
    } else if (val.length >= 1) {
      e.target.value = `(${val}`;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "",
      event_source_url: window.location.href,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.ok && result.redirectPath) {
        trackConversionEvent("generate_lead", {
          event_category: "conversion",
          event_label: "appointment_form_success",
          form_name: "appointment_form",
          lead_source: "website",
          value: 67,
          currency: "USD",
        });
        trackConversionEvent("lead_submit_success", {
          event_category: "conversion",
          event_label: "lead_forwarded_to_chiroflow",
          form_name: "appointment_form",
          lead_source: "website",
        });
        router.push(result.redirectPath);
      } else if (result.ok) {
        trackConversionEvent("generate_lead", {
          event_category: "conversion",
          event_label: "appointment_form_success",
          form_name: "appointment_form",
          lead_source: "website",
          value: 67,
          currency: "USD",
        });
        router.push("/confirmation");
      } else {
        setError(result.error || "Something went wrong. Please try again.");
        setSubmitting(false);
      }
    } catch {
      setError("Unable to submit. Please call us at (972) 393-6262.");
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-2xl font-bold text-secondary-900 text-center">
          Schedule Your Appointment
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Call us at{" "}
          <a
            href="tel:9723936262"
            className="font-semibold text-primary-600 hover:text-primary-700"
          >
            (972) 393-6262
          </a>{" "}
          or fill out the form below.
        </p>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit} data-form-name="appointment_form">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="appt-firstName" className="block text-sm font-medium text-secondary-900">
                First Name
              </label>
              <input
                type="text"
                id="appt-firstName"
                name="firstName"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-secondary-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                placeholder="First name"
                required
              />
            </div>
            <div>
              <label htmlFor="appt-lastName" className="block text-sm font-medium text-secondary-900">
                Last Name
              </label>
              <input
                type="text"
                id="appt-lastName"
                name="lastName"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-secondary-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="appt-email" className="block text-sm font-medium text-secondary-900">
              Email
            </label>
            <input
              type="email"
              id="appt-email"
              name="email"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-secondary-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="appt-phone" className="block text-sm font-medium text-secondary-900">
              Phone
            </label>
            <input
              type="tel"
              id="appt-phone"
              name="phone"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-secondary-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              placeholder="(972) 393-6262"
              onChange={handlePhoneFormat}
              required
            />
          </div>
          <div>
            <label htmlFor="appt-message" className="block text-sm font-medium text-secondary-900">
              Message
            </label>
            <textarea
              id="appt-message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-secondary-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              placeholder="How can we help you?"
            />
          </div>
          {error && (
            <p style={{ color: "#e53e3e", fontSize: 13 }}>{error}</p>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-primary-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
          >
            {submitting ? "Submitting..." : "Request Appointment"}
          </button>
        </form>
      </div>
    </section>
  );
}
