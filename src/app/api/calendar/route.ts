import { NextResponse } from "next/server";
import { createEvents, EventAttributes } from "ics";

export async function GET() {
  const year = new Date().getFullYear();
  
  const events: EventAttributes[] = [
    {
      title: "Floptober Week 1: The Public Flop",
      description: "Break identity attachment by publishing raw, unedited takes or demos publicly.",
      start: [year, 10, 1, 9, 0], // Oct 1, 9:00 AM
      duration: { hours: 1 },
    },
    {
      title: "Floptober Week 2: The Janky Prototype",
      description: "Ship a half-baked product, landing page, or service package capped at a strict 48 hours.",
      start: [year, 10, 8, 9, 0], // Oct 8, 9:00 AM
      duration: { hours: 1 },
    },
    {
      title: "Floptober Week 3: The Rejection Gauntlet",
      description: "Collect 10 explicit, synchronous \"No\"s.",
      start: [year, 10, 15, 9, 0], // Oct 15, 9:00 AM
      duration: { hours: 1 },
    },
    {
      title: "Floptober Week 4: The Eulogy & Re-Up",
      description: "Deconstruct the wreckage and award the worst failure.",
      start: [year, 10, 22, 9, 0], // Oct 22, 9:00 AM
      duration: { hours: 1 },
    }
  ];

  const { error, value } = createEvents(events);

  if (error) {
    return new NextResponse("Error generating calendar", { status: 500 });
  }

  return new NextResponse(value, {
    headers: {
      "Content-Type": "text/calendar",
      "Content-Disposition": 'attachment; filename="floptober.ics"',
    },
  });
}
