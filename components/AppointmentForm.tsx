"use client";

import { siteConfig } from "@/lib/site-config";

export default function AppointmentForm() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-2xl font-bold text-secondary-900 text-center">
          Schedule Your Appointment
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Call us at{" "}
          <a
            href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
            className="font-semibold text-primary-600 hover:text-primary-700"
          >
            {siteConfig.phone}
          </a>{" "}
          or fill out the form below.
        </p>

        {/* Placeholder form - will be connected to Basin in later phases */}
        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-secondary-900">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-secondary-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                placeholder="First name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-secondary-900">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-secondary-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                placeholder="Last name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-secondary-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-secondary-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-secondary-900">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-secondary-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              placeholder="(555) 000-0000"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-secondary-900">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-secondary-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              placeholder="How can we help you?"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
          >
            Request Appointment
          </button>
        </form>
      </div>
    </section>
  );
}
