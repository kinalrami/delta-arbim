"use client";

import { marqueeHeroStats, marqueeTrackItems } from "@/components/home/content";
import { Hexagon } from "lucide-react";

type HeroStatCardConfig = {
  value: string;
  label: string;
};

function HeroStatCard({ cfg }: { cfg: HeroStatCardConfig }) {
  return (
    <div className="flex flex-col justify-center px-6 py-5">
      <div className="font-serif text-xl font-extrabold leading-none text-orange-300">
        {cfg.value}
      </div>
      <div className="mt-1 font-mono text-xs text-white/45">{cfg.label}</div>
    </div>
  );
}

export function Marquee() {
  const heroStats: HeroStatCardConfig[] = marqueeHeroStats;
  const marqueeTrack = [...marqueeTrackItems, ...marqueeTrackItems];

  return (
    <section className="w-full">
      <div className="mx-auto w-full">
        <div className="mt-2 overflow-hidden border-y border-white/10 bg-zinc-900/40">
          <div className="grid grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4 md:divide-y-0">
            {heroStats.map((cfg) => (
              <HeroStatCard key={cfg.label} cfg={cfg} />
            ))}
          </div>
        </div>

        <div
          className="relative overflow-hidden border-b border-white/10 bg-zinc-900/40 py-3"
          aria-hidden="true"
        >
          <div
            className="flex w-max items-center gap-8 px-6 animate-[marquee_30s_linear_infinite]"
          >
            {marqueeTrack.map((txt, idx) => (
              <span
                key={`${txt}-${idx}`}
                className="whitespace-nowrap font-mono text-xs text-white/55 flex items-center gap-2"
              >
                <Hexagon className="size-2.5 text-orange-400" />
                {txt}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

