import React from 'react';
import { JoinButton } from './JoinButton';
import { mascotImage } from '../data/floptober';
import { Term } from './Term';

export function ClosingCall() {
  return (
    <footer className="border-t-[3px] border-flop-ink/85 bg-flop-cream bg-grid-paper py-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <img
          src={mascotImage}
          alt="Goofy potato mascot shrugging"
          className="h-32 w-32 object-contain mix-blend-multiply" />
        
        <h2 className="font-hand text-4xl leading-tight text-flop-ink sm:text-5xl">
          Losers launch. <span className="text-flop-crimson">Winners learn.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-flop-ink/75 sm:text-xl">
          Sign up, pick your first embarrassment, and start filling the <Term id="scrapheap">scrapheap</Term>.
        </p>
        <JoinButton>Join Him</JoinButton>
        <div className="pt-6 flex flex-col gap-2 items-center">
          <p className="font-hand text-lg text-flop-ink/50">Floptober — October, annually, forever.</p>
          <a href="/glossary" className="font-body text-sm font-bold text-flop-ink/50 hover:text-flop-sea transition-colors underline decoration-2 underline-offset-4">
            View the Glossary
          </a>
        </div>
      </div>
    </footer>);

}