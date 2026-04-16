"use client";

import Link from "next/link";

type WhatCard = {
  stat: string;
  label: string;
  desc: string;
};

const cards: WhatCard[] = [
  {
    stat: "30%",
    label: "Rework Reduction",
    desc: "Sites using IFC AR overlays report up to 30% reduction in costly rework through early clash detection.",
  },
  {
    stat: "80%",
    label: "Less QA/QC Time",
    desc: "AR-powered quality walkthroughs take a fraction of traditional time — 2 hours to 20 minutes.",
  },
  {
    stat: "75%",
    label: "Faster Understanding",
    desc: "Workers understand complex 3D designs up to 75% faster with AR on-site visualisation.",
  },
  {
    stat: "±2cm",
    label: "Spatial Accuracy",
    desc: "LiDAR + computer vision anchoring locks IFC models with centimetre-level precision — no markers needed.",
  },
];

const links = [
  { href: "/#ars", label: "→ Explore AR Layers" },
  { href: "/demo", label: "→ Book a Demo" },
  { href: "/pricing", label: "→ View Pricing" },
] as const;

export function WhatSection() {
  return (
    <section id="what" aria-labelledby="what-h2" className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <span className="mb-4 inline-flex font-mono text-xs font-semibold tracking-widest text-orange-400">
          What Is DeltaARBIM?
        </span>

        <h2
          id="what-h2"
          className="max-w-3xl font-serif text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
        >
          The gap between <em className="not-italic text-orange-400">IFC design</em> and construction — closed.
        </h2>

        <div className="mt-6 max-w-3xl space-y-6 text-base leading-relaxed text-white/60">
          <p>
            Construction projects lose billions every year because the design stays on laptops while workers build
            from printed drawings. A column 8cm off. A duct clashing with a beam. An opening in the wrong wall.
          </p>
          <p>
            DeltaARBIM puts your live IFC model — every structural column, every MEP pipe, every architectural layer —
            directly over the physical site through your device camera. If something is wrong, you see it before it
            gets built.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="inline-flex items-center rounded border border-orange-400/25 uppercase bg-orange-400/10 px-4 py-2 font-mono text-[11px] text-orange-300 transition-colors hover:border-orange-400/50 hover:text-orange-200"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.label}
              className="rounded-xl border border-white/10 bg-zinc-900/40 p-5 shadow-sm"
            >
              <div className="font-serif text-3xl font-extrabold leading-none text-orange-300">
                {c.stat}
              </div>
              <div className="mt-3 font-mono text-xs font-semibold tracking-widest text-white/70">
                {c.label}
              </div>
              <div className="mt-3 text-sm leading-relaxed text-white/55">
                {c.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

