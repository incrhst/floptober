import React from 'react';
import { principles } from '../data/floptober';

const tilts = ['-rotate-[1.4deg]', 'rotate-[0.8deg]', '-rotate-[0.6deg]'];

export function Principles() {
  return (
    <section id="principles" className="bg-flop-yellow texture-graveyard pb-20 pt-8 overflow-hidden" aria-labelledby="principles-heading">
      <div className="mx-auto w-full max-w-6xl px-6 relative z-10">
        <div className="flex items-end gap-3">
          <h2 id="principles-heading" className="font-hand text-4xl text-flop-ink sm:text-5xl">
            ★ Core Principles
          </h2>
        </div>
        <div className="mt-3 h-[3px] w-24 rounded-full bg-flop-ink/25" />

        <ul className="mt-10 grid gap-7 md:grid-cols-3">
          {principles.map((principle, i) =>
          <li
            key={principle.title}
            className={`flex h-full flex-col rounded-blob border-[3px] border-flop-ink bg-[#f3ecd5] p-7 shadow-chunk ${tilts[i]}`}>
            
              <img
              src={principle.icon}
              alt={principle.iconAlt}
              className="h-24 w-24 object-contain mix-blend-multiply" />
            
              <h3 className="mt-4 font-hand text-3xl text-flop-sea">{principle.title}</h3>
              <p className="mt-3 font-body text-base leading-relaxed text-flop-ink/80">{principle.body}</p>
            </li>
          )}
        </ul>
      </div>
    </section>);

}