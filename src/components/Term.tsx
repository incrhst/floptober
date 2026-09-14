import Link from 'next/link';
import React from 'react';

export function Term({ id, children }: { id: string, children: React.ReactNode }) {
  return (
    <Link 
      href={`?glossary=${id}`} 
      scroll={false} 
      className="inline-block border-b-2 border-dashed border-flop-crimson text-flop-crimson hover:bg-flop-crimson hover:text-white transition-colors cursor-pointer px-1 -mx-1 rounded-sm"
    >
      {children}
    </Link>
  );
}
