"use client";
import { useEffect, useState } from "react";
import { useUser, UserButton } from "@clerk/nextjs";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function Dashboard() {
  const { user, isLoaded } = useUser();
  const syncUser = useMutation(api.users.syncUser);
  const logCheckInAI = useMutation(api.checkIns.logCheckInAI);
  
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      syncUser({
        clerkId: user.id,
        name: user.fullName || user.firstName || "Anonymous Flopper",
        email: user.primaryEmailAddress?.emailAddress || "",
      });
    }
  }, [user, syncUser]);

  const checkIns = useQuery(api.checkIns.getUserCheckIns, 
    user ? { clerkId: user.id } : "skip"
  );
  
  const leaderboard = useQuery(api.users.getLeaderboard);
  
  if (!isLoaded) return <div className="p-8 font-body">Loading...</div>;
  if (!user) return <div className="p-8 font-body">Please sign in.</div>;

  async function handleCheckIn(e: React.FormEvent) {
    e.preventDefault();
    if (!description.trim()) return;
    setIsSubmitting(true);
    try {
      await logCheckInAI({
        clerkId: user!.id,
        sprintIndex: "Test Run",
        description,
      });
      setDescription("");
    } catch (e) {
      alert("Error logging attempt. Have you set OPENROUTER_API_KEY in Convex?");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-full w-full bg-flop-cream p-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex justify-between items-center mb-10">
          <h1 className="font-hand text-5xl text-flop-ink">Command Center</h1>
          <UserButton />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="border-[3px] border-flop-ink/80 rounded-blob p-6 sm:p-8 shadow-chunk bg-white">
              <h2 className="font-hand text-3xl text-flop-sea mb-4">Submit for Judgment</h2>
              <form onSubmit={handleCheckIn} className="flex flex-col gap-4 font-body">
                <div>
                  <label className="block text-sm font-bold text-flop-ink/80 mb-2">What did you do?</label>
                  <textarea 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="e.g., Launched my broken side project on Twitter and got 0 likes. Then I cold emailed 10 people and they all said no."
                    className="w-full border-2 border-flop-ink/30 rounded-lg p-3 outline-none focus:border-flop-sea transition-colors min-h-[120px]"
                    required
                  />
                </div>
                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="mt-2 bg-flop-yellow text-flop-ink px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm border-[3px] border-flop-ink shadow-press hover:-translate-y-[2px] hover:shadow-[0_4px_0_0_#2b2622] disabled:opacity-50 transition-all self-start flex items-center gap-2">
                  {isSubmitting ? "The Judge is thinking..." : "Face the Judge"}
                </button>
              </form>
            </div>
            
            <div className="border-[3px] border-flop-ink/80 rounded-blob p-6 shadow-chunk bg-white">
              <h2 className="font-hand text-3xl text-flop-crimson mb-4">Your Graveyard</h2>
              <div className="font-body text-flop-ink/80">
                {checkIns === undefined ? (
                  <p>Loading corpses...</p>
                ) : checkIns.length > 0 ? (
                  <ul className="flex flex-col gap-5">
                    {checkIns.map((ci) => (
                      <li key={ci._id} className="pb-4 border-b-2 border-flop-ink/10 last:border-0 last:pb-0 flex flex-col gap-2">
                        <div className="flex items-start gap-3">
                          <span className={`font-bold shrink-0 text-xl ${ci.pointsEarned > 0 ? 'text-flop-sea' : 'text-flop-crimson'}`}>
                            {ci.pointsEarned > 0 ? '+' : ''}{ci.pointsEarned} pts
                          </span>
                          <span className="text-flop-ink mt-1 font-bold">"{ci.description}"</span>
                        </div>
                        {ci.judgment && (
                          <div className="ml-[70px] bg-flop-yellow/20 p-3 rounded-lg border-l-4 border-flop-yellow italic text-sm text-flop-ink">
                            <strong>The Judge says:</strong> {ci.judgment}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No corpses here yet. Go fail at something!</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-8 lg:col-span-1">
            <div className="border-[3px] border-flop-ink/80 rounded-blob p-6 shadow-chunk bg-white h-fit">
              <h2 className="font-hand text-3xl text-flop-sea mb-4">Leaderboard</h2>
              <div className="font-body text-flop-ink/80">
                {leaderboard === undefined ? (
                  <p>Loading...</p>
                ) : leaderboard.length > 0 ? (
                  <ul className="flex flex-col gap-3">
                    {leaderboard.map((u, i) => (
                      <li key={u._id} className="flex justify-between items-center pb-2 border-b-2 border-flop-ink/10 last:border-0 last:pb-0">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-flop-ink/40 w-4">{i + 1}.</span>
                          <span className="font-bold truncate max-w-[120px]" title={u.name}>{u.name}</span>
                        </div>
                        <span className="font-bold text-flop-sea">{u.totalPoints}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No players yet.</p>
                )}
              </div>
            </div>
            
            <div className="border-[3px] border-flop-ink/80 rounded-blob p-6 shadow-chunk bg-white h-fit">
              <h2 className="font-hand text-3xl text-flop-moss mb-4">Schedule</h2>
              <ul className="font-body text-flop-ink/80 flex flex-col gap-4 mb-6">
                <li>
                  <span className="font-bold block">Week 1: The Public Flop</span>
                  <span className="text-sm">Oct 1, 9:00 AM</span>
                </li>
                <li>
                  <span className="font-bold block">Week 2: The Janky Prototype</span>
                  <span className="text-sm">Oct 8, 9:00 AM</span>
                </li>
                <li>
                  <span className="font-bold block">Week 3: The Rejection Gauntlet</span>
                  <span className="text-sm">Oct 15, 9:00 AM</span>
                </li>
                <li>
                  <span className="font-bold block">Week 4: The Eulogy & Re-Up</span>
                  <span className="text-sm">Oct 22, 9:00 AM</span>
                </li>
              </ul>
              
              <a 
                href="/api/calendar" 
                className="inline-block text-center w-full bg-flop-cream text-flop-ink px-4 py-2 rounded-full font-bold uppercase tracking-wider text-xs border-[2px] border-flop-ink shadow-press hover:-translate-y-[2px] hover:shadow-[0_4px_0_0_#2b2622] transition-all">
                Add to Calendar (.ics)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
