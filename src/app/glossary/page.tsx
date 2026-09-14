import React from 'react';
import Link from 'next/link';
import { glossaryTerms as terms } from '@/data/glossary';

export const metadata = {
  title: 'Glossary | Floptober 2026',
};

export default function Glossary() {
  return (
    <div className="min-h-screen w-full bg-flop-cream p-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <Link href="/" className="font-hand text-xl text-flop-ink hover:text-flop-sea transition-colors">
            ← Back to Floptober
          </Link>
          <h1 className="font-hand text-5xl text-flop-ink mt-6 mb-4">The Glossary</h1>
          <p className="font-body text-flop-ink/80 text-lg">
            A quick reference guide to the terminology of failure, rejection, and digital wreckage.
          </p>
        </div>
        
        <div className="flex flex-col gap-6">
          {terms.map((item) => (
            <div key={item.term} className="border-[3px] border-flop-ink/80 rounded-blob p-6 sm:p-8 shadow-chunk bg-white">
              <h2 className="font-hand text-3xl text-flop-crimson mb-3">{item.term}</h2>
              <p className="font-body text-flop-ink/90 font-semibold leading-relaxed text-lg">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
