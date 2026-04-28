import type { Metadata } from "next";
import ScheduleAppointmentClient from "./ScheduleAppointmentClient";

export const metadata: Metadata = {
  title: "Schedule Appointment | Erb Family Wellness Coppell TX",
  description:
    "Complete your appointment booking with Erb Family Wellness in Coppell & Southlake TX. $67 new patient visit. Call (972) 393-6262 for help.",
  alternates: { canonical: "https://erbfamilywellness.com/schedule-appointment" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ScheduleAppointmentClient />;
}
