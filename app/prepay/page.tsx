import type { Metadata } from "next";
import PrepayClient from "./PrepayClient";

export const metadata: Metadata = {
  title: "Prepay New Patient Visit | Erb Family Wellness Coppell TX",
  description:
    "Securely prepay your $67 new patient visit at Erb Family Wellness. Coppell & Southlake TX chiropractic care. Call (972) 393-6262 for questions.",
  alternates: { canonical: "https://www.erbfamilywellness.com/prepay" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PrepayClient />;
}
