import React from 'react';

interface JoinButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export function JoinButton({ children, href = '#join', className = '' }: JoinButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border-[3px] border-flop-ink/85 bg-flop-cream px-9 py-3 font-hand text-2xl text-flop-sea shadow-sea transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-[2px] hover:shadow-[0_8px_0_0_#2e6f9e] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-flop-sea/40 active:translate-y-[4px] active:shadow-seaPress ${className}`}>
      
      {children}
    </a>);

}