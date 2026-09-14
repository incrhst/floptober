"use client";
import { useUser } from "@clerk/nextjs";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function Dashboard() {
  const { user, isLoaded } = useUser();
  const checkIns = useQuery(api.checkIns.getUserCheckIns, 
    user ? { clerkId: user.id } : "skip"
  );
  
  if (!isLoaded) return <div className="p-8 font-body">Loading...</div>;
  if (!user) return <div className="p-8 font-body">Please sign in.</div>;

  return (
    <div className="min-h-full w-full bg-flop-cream p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-hand text-5xl text-flop-ink mb-2">Welcome, {user.firstName}!</h1>
        <p className="font-body text-flop-ink/70 mb-8">This is your command center for Floptober.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-[3px] border-flop-ink/80 rounded-blob p-6 shadow-chunk bg-white">
            <h2 className="font-hand text-3xl text-flop-sea mb-4">Log a Test Run</h2>
            <p className="font-body text-flop-ink/80 mb-4">You haven't logged any test runs yet. Get out there and flop!</p>
            {/* We will add the check-in form here in Phase 3.5 */}
            <button className="bg-flop-yellow text-flop-ink px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm border-2 border-flop-ink shadow-press hover:translate-y-[2px] hover:shadow-none transition-all">
              Log Attempt
            </button>
          </div>
          
          <div className="border-[3px] border-flop-ink/80 rounded-blob p-6 shadow-chunk bg-white">
            <h2 className="font-hand text-3xl text-flop-crimson mb-4">Your Graveyard</h2>
            <div className="font-body text-flop-ink/80">
              {checkIns && checkIns.length > 0 ? (
                <ul>
                  {checkIns.map((ci) => (
                    <li key={ci._id} className="mb-2 pb-2 border-b-2 border-flop-ink/10 last:border-0">
                      <span className="font-bold">+{ci.pointsEarned} pts</span> - {ci.description}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No corpses here yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
