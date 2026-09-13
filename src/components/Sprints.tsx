import React from 'react';
import { sprints } from '../data/floptober';

export function Sprints() {
  return (
    <section
      id="sprints"
      className="border-y-[3px] border-flop-ink/85 bg-flop-cream bg-grid-paper py-20"
      aria-labelledby="sprints-heading">
      
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 id="sprints-heading" className="font-hand text-4xl text-flop-ink sm:text-5xl">
            ♪ Weekly Exposure Sprints
          </h2>
          <p className="mt-2 max-w-xl font-body text-base text-flop-ink/70">
            Four weeks, escalating from mild cringe to a full public burial.
          </p>
        </div>

        <ol className="relative mt-12">
          <span
            aria-hidden="true"
            className="absolute left-[27px] top-3 hidden h-[calc(100%-2rem)] w-[3px] rounded-full bg-flop-ink/20 sm:block" />
          
          {sprints.map((sprint) =>
          <li key={sprint.index} className="relative pb-10 last:pb-0 sm:pl-24">
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-flop-ink/85 bg-flop-yellow font-hand text-2xl text-flop-ink shadow-chunkSm sm:absolute sm:left-0 sm:top-0 sm:mb-0">
                {sprint.index}
              </span>
              <div className="sm:pt-2">
                <p className="font-body text-xs font-extrabold uppercase tracking-[0.22em] text-flop-crimson">
                  {sprint.week} · {sprint.theme}
                </p>
                <h3 className="mt-1 font-hand text-3xl text-flop-ink sm:text-4xl">{sprint.title}</h3>
                <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-flop-ink/80 sm:text-lg">
                  {sprint.body}
                </p>
              </div>
            </li>
          )}
        </ol>
      </div>
    </section>);

}