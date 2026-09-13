import React from 'react';
import { scoring } from '../data/floptober';

export function Scoring() {
  return (
    <section id="scoring" className="bg-flop-yellow bg-dots py-20" aria-labelledby="scoring-heading">
      <div className="mx-auto w-full max-w-4xl px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 id="scoring-heading" className="font-hand text-4xl text-flop-ink sm:text-5xl">
            # Scoring Matrix
          </h2>
          <p className="mt-2 font-body text-base text-flop-ink/75">
            Points are awarded strictly for initiating contact with reality.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-blob border-[3px] border-flop-ink/85 bg-flop-cream shadow-chunk">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Floptober scoring matrix</caption>
            <thead>
              <tr className="border-b-[3px] border-flop-ink/85 bg-flop-yellow/40">
                <th scope="col" className="w-24 px-5 py-3 font-body text-xs font-extrabold uppercase tracking-[0.18em] text-flop-ink/70 sm:w-32 sm:px-7">
                  Points
                </th>
                <th scope="col" className="px-5 py-3 font-body text-xs font-extrabold uppercase tracking-[0.18em] text-flop-ink/70 sm:px-7">
                  What earns them
                </th>
              </tr>
            </thead>
            <tbody>
              {scoring.map((row) => {
                const negative = row.points < 0;
                return (
                  <tr key={row.points} className="border-b border-flop-ink/15 last:border-b-0">
                    <td className="px-5 py-5 align-top sm:px-7">
                      <span
                        className={`inline-flex min-w-[3.75rem] justify-center rounded-full border-[3px] border-flop-ink/85 px-3 py-1 font-hand text-2xl ${
                        negative ? 'bg-flop-crimson text-flop-cream' : 'bg-flop-sea text-flop-cream'}`
                        }>
                        
                        {negative ? row.points : `+${row.points}`}
                      </span>
                    </td>
                    <td
                      className={`px-5 py-5 align-middle font-body text-base leading-relaxed sm:px-7 sm:text-lg ${
                      negative ? 'text-flop-crimson' : 'text-flop-ink/85'}`
                      }>
                      
                      {row.label}
                    </td>
                  </tr>);

              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>);

}