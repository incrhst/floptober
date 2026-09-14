import { internalAction } from "./_generated/server";
import { Resend } from "resend";
import { api } from "./_generated/api";
import { ConvexError } from "convex/values";

export const sendWeeklyReminders = internalAction({
  args: {},
  handler: async (ctx) => {
    // Only run if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Skipping email reminders.");
      return;
    }
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // In a real app we'd fetch all users. For now, we'll fetch them from a query
    const users = await ctx.runQuery(api.users.getLeaderboard);
    
    for (const user of users) {
      if (!user.email) continue;
      
      try {
        await resend.emails.send({
          from: "Floptober <reminders@floptober.com>",
          to: user.email,
          subject: "Your Weekly Floptober Challenge is here",
          html: `<p>Hey ${user.name},</p><p>It's time to log your next test run. Remember, the goal is to fail!</p><p>Visit your dashboard to log your attempt.</p>`
        });
      } catch (e) {
        console.error("Failed to send email to", user.email, e);
      }
    }
  }
});
