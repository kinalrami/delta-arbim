import Link from "next/link";

import { whatLinks, whatStatCards } from "@/components/views/home/content";
import { SectionHeading } from "../../shared/SectionHeading";

export function WhatSection() {
  return (
    <section id="what" aria-labelledby="what-h2" className="w-full bg-[#121212]">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          id="what-h2"
          eyebrow="What Is DeltaARBIM?"
          eyebrowClassName="mb-4 inline-flex font-mono text-xs font-semibold uppercase tracking-widest text-orange-400"
          title={
            <>
              The gap between <em className="not-italic text-orange-400">IFC design</em> and construction — closed.
            </>
          }
          titleClassName="max-w-3xl font-serif text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
          desc={
            <>
              <p>
                Construction projects lose billions every year because the design stays on laptops while workers build
                from printed drawings. A column 8cm off. A duct clashing with a beam. An opening in the wrong wall.
              </p>
              <p>
                DeltaARBIM puts your live IFC model — every structural column, every MEP pipe, every architectural layer
                — directly over the physical site through your device camera. If something is wrong, you see it before it
                gets built.
              </p>
            </>
          }
          descWrapClassName="mt-4 max-w-3xl space-y-2 text-base leading-relaxed text-neutral-400"
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {whatLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="inline-flex items-center rounded border border-orange-400/25 uppercase bg-orange-400/10 px-4 py-2 font-mono text-[11px] text-orange-300 transition-colors hover:border-orange-400/50 hover:text-orange-200"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* gap-px + neutral grid bg draws all internal dividers (incl. horizontal between rows) */}
        <div className="mt-10 border border-neutral-700 bg-neutral-700">
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2">
            {whatStatCards.map((c) => (
              <div key={c.label} className="bg-[#121212] p-6 sm:p-8">
                <div className="text-2xl font-bold leading-none tracking-tight text-orange-400 sm:text-4xl">{c.stat}</div>
                <div className="mt-2 font-mono text-xs font-bold uppercase tracking-widest text-orange-400">
                  {c.label}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
