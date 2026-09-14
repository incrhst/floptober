import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    name: v.string(),
    email: v.string(),
    totalPoints: v.number(),
    declaration: v.optional(v.string()),
    declarationLocked: v.optional(v.boolean()),
  }).index("by_clerk_id", ["clerkId"]),
  
  checkIns: defineTable({
    userId: v.id("users"),
    sprintIndex: v.string(),
    pointsEarned: v.number(),
    description: v.string(),
    proofUrl: v.optional(v.string()),
    judgment: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_user", ["userId"]),
});
