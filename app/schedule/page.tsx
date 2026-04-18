import type { Metadata } from "next";
import ScheduleClient from "./ScheduleClient";

export const metadata: Metadata = {
  title: "Book Your $67 New Patient Visit | Erb Family Wellness",
  description:
    "Book your $67 new patient appointment at Erb Family Wellness. Coppell & Southlake TX locations. Call (972) 393-6262 or use our online scheduler.",
  alternates: { canonical: "https://www.erbfamilywellness.com/schedule" },
};

export default function Page() {
  return <ScheduleClient />;
}
