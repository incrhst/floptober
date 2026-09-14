import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Glossary | Floptober 2026',
};

const terms = [
  {
    term: "Identity Attachment",
    definition: "The toxic belief that your personal self-worth is directly tied to the success, polish, or reception of the thing you built. Breaking this delusion is the primary goal of Floptober."
  },
  {
    term: "The Scrapheap",
    definition: "The public feed where all cohort members log their failed attempts, ignored emails, and zero-engagement launches. Previously known as The Graveyard."
  },
  {
    term: "Asynchronous Cowardice",
    definition: "Relying on safe, delayed communication (like cold emails, automated DMs, or scheduled tweets) to avoid the visceral sting of real-time rejection."
  },
  {
    term: "The Janky Prototype",
    definition: "A product, service, or landing page built in under 48 hours. It must be held together by duct tape, but it must have a functional way for a user to pay or sign up."
  },
  {
    term: "Zero-Engagement Launch",
    definition: "When you finally hit 'publish' on something you worked hard on, and the internet responds with absolute, deafening silence. A highly awarded event in Floptober."
  },
  {
    term: "The 24-Hour Iteration Rule",
    definition: "The act of taking your most spectacular failure, applying exactly one piece of harsh feedback to it, and shoving it back into the public sphere within 24 hours."
  }
];

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
