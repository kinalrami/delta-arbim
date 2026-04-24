import { whatLinks, whatStatCards } from "@/components/views/home/content";
import { SectionHeading } from "../../shared/SectionHeading";
import { CtaPill } from "../../shared/CtaPill";

export function WhatSection() {
  return (
    <section id="what" aria-labelledby="what-h2" className="w-full bg-[#121212]">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          id="what-h2"
          eyebrow="Measurable ROI"
          eyebrowClassName="mb-4 inline-flex font-mono text-xs font-semibold uppercase tracking-widest text-orange-400"
          title={
            <>
              Digital Construction Intelligence: Eliminating Rework with AR
            </>
          }
          titleClassName="max-w-3xl font-serif text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
          desc={
            <>
              <p>
                The Issue: Construction projects are losing billions of dollars as designs remain on laptops and workers work with printed drawings
              </p>
              <p>
                The Solution: In our Augmented Reality building solution, all structural columns and MEP pipes are placed directly on the site.
              </p>
            </>
          }
          descWrapClassName="mt-4 max-w-3xl space-y-2 text-base leading-relaxed text-neutral-400"
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {whatLinks.map((l) => (
            <CtaPill key={l.href} href={l.href} variant="outlineOrange" className="rounded">
              {l.label.replace(/^→\s*/, "")}
            </CtaPill>
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
