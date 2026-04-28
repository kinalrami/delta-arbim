"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeatureGrid, type FeatureGridItem } from "@/components/shared/FeatureGrid";
import { CtaPill } from "@/components/shared/CtaPill";
import { overviewCopy, overviewItems } from "@/components/views/industry/content";

export function OverviewSection() {
  const items: FeatureGridItem[] = overviewItems.map((it) => ({
    key: it.key,
    iconNode: (
      <span className="text-2xl leading-none" aria-hidden>
        {it.icon}
      </span>
    ),
    title: it.title,
    description: it.desc,
    tag: (
      <div className="mt-1">
        <div className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-orange-400">
          {it.tag}
        </div>
        {/* <div className="mt-2">
          <CtaPill href={it.href ?? "/contact"} variant="gray" className="text-[10px] text-white/50 group-hover:text-orange-200">
            {it.key === "your-industry" ? "Talk to us →" : "Explore →"}
          </CtaPill>
        </div> */}
      </div>
    ),
  }));

  return (
    <section aria-labelledby="industry-overview-h2" className="w-full bg-[#1A1A1A]">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          id="industry-overview-h2"
          eyebrow={overviewCopy.eyebrow}
          title={
            <>
              {overviewCopy.titleBefore}<br />
              {overviewCopy.titleEmphasis}
            </>
          }
          desc={overviewCopy.desc}
          eyebrowClassName="mb-2 inline-flex font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-orange-400"
          titleClassName="max-w-5xl font-serif text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
        />

        <FeatureGrid
          items={items}
          wrapClassName="mt-6 border border-white/10 bg-white/10"
          columnsClassName="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3"
          cardClassName="group flex h-full flex-col bg-[#1A1A1A] p-8 transition-colors hover:bg-white/[0.04]"
        />
      </div>
    </section>
  );
}

