import React from 'react';
import { personas } from '../data/floptober';

const tilts = ['-rotate-[1deg]', 'rotate-[1.5deg]', '-rotate-[0.5deg]', 'rotate-[1deg]', '-rotate-[1.2deg]', 'rotate-[0.8deg]', '-rotate-[1.5deg]', 'rotate-[1.2deg]', '-rotate-[1deg]'];
const colors = ['text-flop-sea', 'text-pink-600', 'text-flop-ink', 'text-orange-600', 'text-green-700', 'text-purple-600', 'text-blue-700', 'text-red-600', 'text-teal-700'];

export function TargetAudience() {
  return (
    <section id="audience" className="bg-flop-cream pb-20 pt-16 border-y-4 border-flop-ink" aria-labelledby="audience-heading">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex items-end gap-3 justify-center text-center">
          <h2 id="audience-heading" className="font-hand text-4xl text-flop-ink sm:text-5xl">
            ★ Who is this for?
          </h2>
        </div>
        <p className="mt-4 text-center font-body text-xl font-bold text-flop-ink/80 max-w-2xl mx-auto">
          If you see yourself in this list, you are legally required to participate.
        </p>
        <div className="mt-4 h-[3px] w-24 rounded-full bg-flop-ink/25 mx-auto" />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((persona, i) => (
            <li
              key={persona.title}
              className={`flex h-full flex-col rounded-blob border-[3px] border-flop-ink bg-white p-6 shadow-chunk transition-transform hover:scale-[1.02] ${tilts[i % tilts.length]}`}
            >
              <h3 className={`font-hand text-2xl ${colors[i % colors.length]}`}>
                {persona.title}
              </h3>
              <p className="mt-2 font-body text-base leading-relaxed text-flop-ink/90 font-semibold">
                {persona.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
