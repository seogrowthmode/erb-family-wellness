"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { trackConversionEvent } from "@/lib/client-tracking";

interface FormCardProps {
  subtitle?: string;
  submitText?: string;
  showPrice?: boolean;
}

export default function FormCard({
  subtitle = "Begin your healing journey today.",
  submitText = "Claim My $67 Visit",
  showPrice = true,
}: FormCardProps) {
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
      firstName: (form.elements.namedItem("fname") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lname") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      location: (form.elements.namedItem("location") as HTMLSelectElement).value,
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
          event_label: "form_card_success",
          form_name: "form_card",
          lead_source: "website",
          location: data.location,
          value: 67,
          currency: "USD",
        });
        trackConversionEvent("lead_submit_success", {
          event_category: "conversion",
          event_label: "lead_forwarded_to_chiroflow",
          form_name: "form_card",
          lead_source: "website",
          location: data.location,
        });
        router.push(result.redirectPath);
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
    <div className="form-card">
      {showPrice && (
        <>
          <p className="form-card__price">
            New Patient Special: <strong>$67</strong>
          </p>
          <p className="form-card__subtitle">{subtitle}</p>
        </>
      )}
      <form onSubmit={handleSubmit} data-form-name="form_card">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" placeholder="First name" required />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" placeholder="Last name" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(___) ___-____"
              onChange={handlePhoneFormat}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group form-group--full">
            <label htmlFor="location">Preferred Location</label>
            <select id="location" name="location">
              <option value="coppell">Coppell &mdash; 255 S Denton Tap Rd</option>
              <option value="southlake">Southlake &mdash; 1845 E Southlake Blvd</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group form-group--full">
            <label htmlFor="message">Message (Optional)</label>
            <textarea id="message" name="message" placeholder="Tell us about your health goals..." rows={3} />
          </div>
        </div>
        {error && (
          <p style={{ color: "#e53e3e", fontSize: 13, marginBottom: 12 }}>{error}</p>
        )}
        <button type="submit" className="form-card__submit" disabled={submitting}>
          {submitting ? "Reserving..." : submitText} &rarr;
        </button>
      </form>
      <p className="form-card__note">Save $20 with prepay ($47) &middot; CareCredit accepted &middot; Same-day availability</p>
    </div>
  );
}
