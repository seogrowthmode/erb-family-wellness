import type { Metadata } from "next";
import ConfirmationClient from "./ConfirmationClient";

export const metadata: Metadata = {
  title: "Appointment Confirmation | Erb Family Wellness Coppell TX",
  description:
    "Your $67 new patient appointment is confirmed with Erb Family Wellness in Coppell or Southlake TX. Questions? Call (972) 393-6262 or email us.",
  alternates: { canonical: "https://erbfamilywellness.com/confirmation" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ConfirmationClient />;
}
