import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const logCheckIn = mutation({
  args: {
    clerkId: v.string(),
    sprintIndex: v.string(),
    pointsEarned: v.number(),
    description: v.string(),
    proofUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    if (!user) {
      throw new Error("User not found");
    }

    await ctx.db.insert("checkIns", {
      userId: user._id,
      sprintIndex: args.sprintIndex,
      pointsEarned: args.pointsEarned,
      description: args.description,
      proofUrl: args.proofUrl,
      createdAt: Date.now(),
    });

    await ctx.db.patch(user._id, {
      totalPoints: user.totalPoints + args.pointsEarned,
    });
  },
});

export const getUserCheckIns = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    if (!user) return [];

    const checkIns = await ctx.db
      .query("checkIns")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .collect();

    return checkIns.sort((a, b) => b.createdAt - a.createdAt);
  },
});
