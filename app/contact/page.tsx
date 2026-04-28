import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Coppell & Southlake TX",
  description:
    "Contact Erb Family Wellness — two DFW locations in Coppell & Southlake TX. Call (972) 393-6262 for Coppell or (817) 895-0075 for Southlake.",
  alternates: { canonical: "https://erbfamilywellness.com/contact" },
};

export default function Page() {
  return <ContactPageClient />;
}
