import React from 'react';
import { JoinButton } from './JoinButton';
import { mascotImage } from '../data/floptober';

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
          Sign up, pick your first embarrassment, and start filling the graveyard.
        </p>
        <JoinButton>Join Him</JoinButton>
        <p className="pt-6 font-hand text-lg text-flop-ink/50">Floptober — October, annually, forever.</p>
      </div>
    </footer>);

}