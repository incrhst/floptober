import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const syncUser = mutation({
  args: {
    clerkId: v.string(),
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    if (existing) {
      return existing._id;
    }

    return await ctx.db.insert("users", {
      clerkId: args.clerkId,
      name: args.name,
      email: args.email,
      totalPoints: 0,
    });
  },
});

export const getLeaderboard = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db
      .query("users")
      .collect();

    return users.sort((a, b) => b.totalPoints - a.totalPoints);
  },
});

export const getCurrentUser = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();
  },
});

export const saveDeclaration = mutation({
  args: {
    clerkId: v.string(),
    declaration: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    if (!user) throw new Error("User not found");
    
    // Check if it is before October 1st
    const now = new Date();
    const currentYear = now.getFullYear();
    const oct1 = new Date(currentYear, 9, 1); // 9 is October (0-indexed)
    
    if (now > oct1) {
      throw new Error("The deadline to declare (October 1st) has passed!");
    }

    await ctx.db.patch(user._id, {
      declaration: args.declaration,
    });
  },
});
