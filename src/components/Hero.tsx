"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { JoinButton } from './JoinButton';
import { graveyardImage } from '../data/floptober';
import { SignInButton, UserButton } from '@clerk/nextjs';
import { Show } from './Show';
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const ease = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const userCount = useQuery(api.users.getTotalUserCount);
  const maxUsers = 500;
  
  // Cap at 500 for the visual bar even if it exceeds
  const displayCount = userCount !== undefined ? Math.min(userCount, maxUsers) : 0;
  const percentage = (displayCount / maxUsers) * 100;

  return (
    <header className="relative bg-flop-yellow bg-dots">
      <div className="mx-auto w-full max-w-6xl px-6 pb-10 pt-8 relative z-10">
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
              
              <button 
                className="sm:hidden text-flop-ink p-1"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {isMobileMenuOpen ? (
                    <>
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </>
                  ) : (
                    <>
                      <line x1="4" x2="20" y1="12" y2="12" />
                      <line x1="4" x2="20" y1="6" y2="6" />
                      <line x1="4" x2="20" y1="18" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <div className="sm:hidden fixed inset-0 z-[100] flex justify-end">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute inset-0 bg-flop-ink/40 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-64 bg-flop-cream h-full shadow-2xl border-l-[3px] border-flop-ink flex flex-col pt-20 px-6 font-body font-bold uppercase tracking-wider text-sm gap-2"
              >
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-8 right-6 text-flop-ink"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
                <a onClick={() => setIsMobileMenuOpen(false)} href="#principles" className="p-4 border-b-2 border-flop-ink/10 hover:text-flop-sea transition-colors">Principles</a>
                <a onClick={() => setIsMobileMenuOpen(false)} href="#sprints" className="p-4 border-b-2 border-flop-ink/10 hover:text-flop-sea transition-colors">Test Runs</a>
                <a onClick={() => setIsMobileMenuOpen(false)} href="#scoring" className="p-4 border-b-2 border-flop-ink/10 hover:text-flop-sea transition-colors">Scoring</a>
                <a onClick={() => setIsMobileMenuOpen(false)} href="/scrapheap" className="p-4 text-flop-crimson hover:text-flop-sea transition-colors">Public Scrapheap ↗</a>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

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
                David Bain would like to invite you to
              </p>
            </div>
            <h1 className="font-hand text-[clamp(3.5rem,11vw,8.5rem)] leading-[0.85] text-flop-ink">
              Floptober<sup className="text-[0.45em] align-super text-flop-crimson ml-1">2026</sup>
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-flop-ink/85 sm:text-xl">
              <span className="font-hand text-2xl text-flop-crimson">The rules:</span> the objective is
              simple... desensitize you to rejection, public embarrassment, and half-baked launches.
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
              
              {userCount !== undefined && userCount >= 15 && (
                <div className="max-w-md space-y-2">
                  <div className="flex justify-between font-body text-sm font-bold text-flop-ink/80">
                    <span>Spots Claimed</span>
                    <span>{displayCount} / {maxUsers}</span>
                  </div>
                  <div className="h-4 w-full bg-white border-2 border-flop-ink/30 rounded-full overflow-hidden relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute top-0 left-0 h-full bg-flop-sea" 
                    />
                  </div>
                </div>
              )}
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
              The Scrapheap, currently accepting donations.
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </header>);

}
