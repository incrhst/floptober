import React from 'react';
import { SignUpButton, Show } from '@clerk/nextjs';
import Link from 'next/link';

interface JoinButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function JoinButton({ children, className = '' }: JoinButtonProps) {
  const baseClasses = `inline-flex items-center justify-center rounded-full border-[3px] border-flop-ink/85 bg-flop-cream px-9 py-3 font-hand text-2xl text-flop-sea shadow-sea transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-[2px] hover:shadow-[0_8px_0_0_#2e6f9e] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-flop-sea/40 active:translate-y-[4px] active:shadow-seaPress ${className}`;
  
  return (
    <>
      <Show when="signed-out">
        <SignUpButton mode="modal" asChild>
          <button className={baseClasses}>
            {children}
          </button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <Link href="/dashboard" className={baseClasses}>
          Go to Dashboard
        </Link>
      </Show>
    </>
  );
}