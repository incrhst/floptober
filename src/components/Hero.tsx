"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { JoinButton } from './JoinButton';
import { graveyardImage } from '../data/floptober';
import { SignInButton, UserButton } from '@clerk/nextjs';
import { Show } from './Show';
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const ease = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  const userCount = useQuery(api.users.getTotalUserCount);
  const maxUsers = 500;
  
  // Cap at 500 for the visual bar even if it exceeds
  const displayCount = userCount !== undefined ? Math.min(userCount, maxUsers) : 0;
  const percentage = (displayCount / maxUsers) * 100;

  return (
    <header className="relative overflow-hidden bg-flop-yellow bg-dots">
      <div className="mx-auto w-full max-w-6xl px-6 pb-10 pt-8">
        <nav aria-label="Primary" className="flex items-center justify-between gap-4">
          <span className="font-hand text-xl text-flop-ink">Floptober</span>
          <div className="flex items-center gap-7">
            <ul className="hidden items-center gap-7 font-body text-sm font-bold uppercase tracking-[0.14em] text-flop-ink/70 sm:flex">
              <li>
                <a className="transition-colors duration-150 ease-out hover:text-flop-crimson" href="#principles">
                  Principles
                </a>
              </li>
              <li>
                <a className="transition-colors duration-150 ease-out hover:text-flop-crimson" href="#sprints">
                  Test Runs
                </a>
              </li>
              <li>
                <a className="transition-colors duration-150 ease-out hover:text-flop-crimson" href="#scoring">
                  Scoring
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4 font-body font-bold text-sm text-flop-ink">
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <span className="hover:text-flop-crimson cursor-pointer">Sign In</span>
                </SignInButton>
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </div>
          </div>
        </nav>

        <div className="grid items-center gap-10 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pt-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease }}>
            <div className="mb-2 flex items-center gap-4 -rotate-1">
              <img
                src="https://cdn.prod.website-files.com/6648e694572e95ad568c26b9/664aa8a50c2191226309bb5a_dbain-logo.png"
                alt="David Bain"
                className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
              />
              <p className="font-hand text-2xl text-flop-sea sm:text-3xl">
                David Bain would like to invite you to his
              </p>
            </div>
            <h1 className="font-hand text-[clamp(3.5rem,11vw,8.5rem)] leading-[0.85] text-flop-ink">
              Floptober
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-flop-ink/85 sm:text-xl">
              <span className="font-hand text-2xl text-flop-crimson">The rules:</span> the objective is
              simple — desensitize the cohort to rejection, public embarrassment, and half-baked launches.
            </p>

            <div className="mt-8 inline-block -rotate-[1.2deg]">
              <div className="rounded-blob border-[3px] border-flop-ink/85 bg-flop-cream px-7 py-6 shadow-chunk sm:px-10 sm:py-8">
                <p className="font-hand text-[clamp(1.5rem,3.4vw,2.5rem)] leading-tight text-flop-crimson">
                  “You win by learning, and losers launch{' '}
                  <span className="text-flop-sea">(which is still good).”</span>
                </p>
              </div>
            </div>

            <div className="mt-9" id="join">
              <JoinButton>Join Him</JoinButton>
              <p className="mt-4 font-body text-sm font-semibold text-flop-ink/60 mb-6">
                One month. Four test runs. Zero dignity required.
              </p>
              
              <div className="max-w-md space-y-2">
                <div className="flex justify-between font-body text-sm font-bold text-flop-ink/80">
                  <span>Spots Claimed</span>
                  <span>{userCount !== undefined ? userCount : "..."} / {maxUsers}</span>
                </div>
                <div className="h-4 w-full bg-white border-2 border-flop-ink/30 rounded-full overflow-hidden relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-flop-sea" 
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.08, ease }}
            className="rotate-[1.5deg]">
            
            <div className="overflow-hidden rounded-blob border-[3px] border-flop-ink/85 shadow-chunk">
              <img
                src={graveyardImage}
                alt="Cartoon hillside piled with broken laptops, tangled cables and dead gadgets, with a wide-eyed potato creature peeking out"
                className="h-full w-full object-cover" />
              
            </div>
            <figcaption className="mt-3 text-center font-hand text-lg text-flop-ink/70">
              The Graveyard, currently accepting donations.
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </header>);

}