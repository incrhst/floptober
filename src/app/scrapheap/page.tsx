"use client";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { JoinButton } from "@/components/JoinButton";
import Link from "next/link";

export default function PublicScrapheap() {
  const globalCheckIns = useQuery(api.checkIns.getGlobalCheckIns);

  return (
    <div className="min-h-screen w-full bg-flop-cream p-8">
      <div className="mx-auto max-w-3xl">
        <div className="flex justify-between items-center mb-10">
          <Link href="/" className="font-hand text-5xl text-flop-ink hover:text-flop-sea transition-colors">
            Floptober Scrapheap
          </Link>
          <JoinButton>Join the Challenge</JoinButton>
        </div>
        
        <div className="border-[3px] border-flop-ink/80 rounded-blob p-6 sm:p-8 shadow-chunk bg-white">
          <p className="font-body text-flop-ink/80 mb-8 font-bold text-lg">
            This is the live, public feed of all failures, rejections, and zero-like launches from the Floptober 2026 participants.
          </p>
          
          <div className="font-body text-flop-ink/80">
            {globalCheckIns === undefined ? (
              <p>Loading scrap...</p>
            ) : globalCheckIns.length > 0 ? (
              <ul className="flex flex-col gap-6">
                {globalCheckIns.map((ci) => (
                  <li key={ci._id} className="pb-6 border-b-2 border-flop-ink/10 last:border-0 last:pb-0 flex flex-col gap-2">
                    <div className="flex items-start gap-3">
                      <span className={`font-bold shrink-0 text-2xl ${ci.pointsEarned > 0 ? 'text-flop-sea' : 'text-flop-crimson'}`}>
                        {ci.pointsEarned > 0 ? '+' : ''}{ci.pointsEarned} pts
                      </span>
                      <span className="text-flop-ink mt-1 font-bold text-xl leading-tight">
                        <span className="opacity-60 font-normal mr-2 block text-sm uppercase tracking-wider mb-1">{ci.userName}:</span>
                        "{ci.description}"
                      </span>
                    </div>
                    {ci.judgment && (
                      <div className="ml-[85px] bg-flop-yellow/20 p-4 rounded-xl border-l-4 border-flop-yellow italic text-flop-ink mt-2">
                        <strong>The Judge says:</strong> {ci.judgment}
                      </div>
                    )}
                    <div className="ml-[85px] mt-3 flex items-center">
                      <span className="flex items-center gap-2 bg-flop-cream px-3 py-1 rounded-full border-2 border-flop-ink/20 font-bold text-flop-ink/60">
                        <span className="text-lg">🍅</span> {ci.tomatoes || 0} thrown
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No scrap here yet. The participants is still preparing for battle.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
