"use client";

import Link from "next/link";

import { simulationStats } from "@/components/views/home/content";
import { SectionHeading } from "../../shared/SectionHeading";

type Stat = { value: string; label: string, desc: string };

function StatTile({ s }: { s: Stat }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-5">
      <div className="font-serif text-2xl font-extrabold leading-none text-orange-300">
        {s.value}
      </div>
      <div className="mt-1.5 font-mono text-xs uppercase text-white/60">
        {s.label}
      </div>
      <div className="mt-1.5 font-mono text-[10px] text-white/45">
        {s.desc}
      </div>
    </div>
  );
}

export function SimulationSection() {
  return (
    <section id="simulation" aria-labelledby="sim-h2" className="relative w-full overflow-hidden bg-[#1A1A1A]">
      {/* canvas background */}
      {/* <div className="absolute inset-0">
        <SimulationCanvas className="h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />
      </div> */}

      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          id="sim-h2"
          eyebrow="Live AR Simulation — Delta ARBIM Engine"
          eyebrowClassName="mb-2 inline-flex font-mono text-xs uppercase font-semibold text-orange-400"
          title={
            <>
              Your site. <span className="text-orange-400">Your IFC model.</span> Perfectly aligned.
            </>
          }
          titleClassName="max-w-5xl font-serif text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl"
          desc="This demo shows a multiple-building construction layout, where you can see the structure grid, moving MEP pipe routes, automated clash detection markers, and dynamic LiDAR scanning planes. With Delta ARBIM, you are assured of having the perfect alignment of your digital construction data with the actual physical construction site."
          descWrapClassName="mt-2 max-w-3xl text-base leading-relaxed text-white/60"
        />

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/demo"
            className="inline-flex items-center bg-orange-400 px-6 py-3 font-mono text-xs font-bold text-black uppercase transition-opacity hover:opacity-90"
          >
            See It On Your Actual Site →
          </Link>
          <Link
            href="/#how"
            className="inline-flex items-center border border-white/15 bg-white/5 px-6 py-3 font-mono text-xs uppercase text-white/70 transition-colors hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-200"
          >
            → How It Works
          </Link>
        </div>

        <div className="mt-10 overflow-hidden border border-white/10 bg-black/25">
          <div className="grid grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4 md:divide-y-0">
            {simulationStats.map((s) => (
              <StatTile key={s.label} s={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

