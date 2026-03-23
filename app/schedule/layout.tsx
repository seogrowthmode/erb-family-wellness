import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule Appointment | Erb Family Wellness",
  description:
    "Book your $67 new patient appointment at Erb Family Wellness in Coppell or Southlake TX. Call (972) 393-6262.",
};

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
