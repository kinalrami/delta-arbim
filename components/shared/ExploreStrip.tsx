"use client";

import { CtaPill } from "@/components/shared/CtaPill";

export type ExploreStripLink = { href: string; label: string };

export function ExploreStrip({
  title = "Explore Delta ARBIM",
  links,
}: {
  title?: string;
  links: readonly ExploreStripLink[];
}) {
  return (
    <section aria-label={title} className="w-full">
      <div className="px-4 py-8 sm:px-6 max-w-6xl mx-auto">
        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-orange-400">
          {title}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {links.map((l) => (
            <CtaPill
              key={l.href}
              href={l.href}
              variant="gray"
              className="px-3 py-1.5 text-[10px] font-bold text-white/60 hover:text-orange-200"
            >
              → {l.label}
            </CtaPill>
          ))}
        </div>
      </div>
    </section>
  );
}

