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

import { internalMutation, action } from "./_generated/server";
import { internal } from "./_generated/api";
import OpenAI from "openai";

export const insertCheckInInternal = internalMutation({
  args: {
    clerkId: v.string(),
    sprintIndex: v.string(),
    pointsEarned: v.number(),
    description: v.string(),
    judgment: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    if (!user) throw new Error("User not found");

    await ctx.db.insert("checkIns", {
      userId: user._id,
      sprintIndex: args.sprintIndex,
      pointsEarned: args.pointsEarned,
      description: args.description,
      judgment: args.judgment,
      createdAt: Date.now(),
    });

    await ctx.db.patch(user._id, {
      totalPoints: user.totalPoints + args.pointsEarned,
    });
  },
});

export const logCheckInAI = action({
  args: {
    clerkId: v.string(),
    sprintIndex: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    if (!process.env.OPENROUTER_API_KEY) {
      throw new Error("Missing OPENROUTER_API_KEY");
    }

    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const prompt = `
You are the ruthless judge of "Floptober", a challenge where people try to fail publicly.
Your job is to read a user's logged attempt and award points based on these EXACT rules:
1 pt: Messy first draft published internally.
3 pts: Explicit, direct rejection (email, call, or pitch).
5 pts: Live public experiment that generates absolute silence/zero engagement.
10 pts: A massive public crash-and-burn.
-10 pts: Admitting to holding back, sitting in drafts, or making excuses.

The user's attempt: "${args.description}"

Respond in strict JSON format:
{
  "points": <number>,
  "judgment": "<A one sentence snarky response judging their attempt and justifying the points>"
}
`;

    const response = await openai.chat.completions.create({
      model: "meta-llama/llama-3.1-8b-instruct:free",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" }
    });

    const content = response.choices[0].message.content || "{}";
    let points = 1;
    let judgment = "I'm too lazy to judge this, take 1 point.";
    
    try {
      const parsed = JSON.parse(content);
      if (typeof parsed.points === "number") points = parsed.points;
      if (typeof parsed.judgment === "string") judgment = parsed.judgment;
    } catch (e) {
      console.error("Failed to parse AI response:", content);
    }

    await ctx.runMutation(internal.checkIns.insertCheckInInternal, {
      clerkId: args.clerkId,
      sprintIndex: args.sprintIndex,
      pointsEarned: points,
      description: args.description,
      judgment: judgment,
    });
  },
});
