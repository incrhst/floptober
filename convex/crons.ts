import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

// Send an email every Monday at 9:00 AM EST (13:00 UTC)
crons.weekly(
  "send-weekly-reminders",
  { dayOfWeek: "monday", hourUTC: 13, minuteUTC: 0 },
  internal.emails.sendWeeklyReminders
);

export default crons;
