"use client";

import type { LucideIcon } from "lucide-react";
import {
  Box,
  Diamond,
  Zap,
  Square,
  Target,
  LayoutGrid,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
};

const features: Feature[] = [
  {
    icon: Box,
    title: "Live IFC AR 3D Overlay",
    desc: "View your full IFC model in 3D augmented reality at true scale over the physical site. Walk through walls, verify placements, inspect hidden MEP systems live on device.",
    tag: "REAL-TIME AR · IFC",
  },
  {
    icon: Diamond,
    title: "LiDAR Room Scanning",
    desc: "Capture precise as-built geometry using the device LiDAR sensor. Compare scanned point clouds against your IFC model and instantly flag deviations — without a surveyor.",
    tag: "POINT CLOUD · AS-BUILT",
  },
  {
    icon: Zap,
    title: "Automated Clash Detection",
    desc: "DeltaARBIM highlights model-vs-reality clashes visually in AR. Walk to the exact location of a clash and see the conflict rendered in place — no laptop required.",
    tag: "CLASH ENGINE · AUTOMATED",
  },
  {
    icon: Square,
    title: "Multi-Layer IFC Control",
    desc: "Toggle structural, MEP, architectural and fit-out layers independently. Isolate any discipline mid-walk without losing spatial reference.",
    tag: "IFC LAYERS · FULL CONTROL",
  },
  {
    icon: Target,
    title: "Markerless Geo-Anchoring",
    desc: "LiDAR + computer vision locks IFC models to physical space with centimetre precision. No printed markers, no QR codes, no GPS dependency indoors.",
    tag: "CV ANCHORING · ±2CM",
  },
  {
    icon: LayoutGrid,
    title: "Field Reporting & Markup",
    desc: "Annotate issues in AR, capture geo-tagged screenshots, and sync reports to Procore, Autodesk Construction Cloud, or any webhook.",
    tag: "INTEGRATIONS · GEO-TAGGED",
  },
];

function FeatureCard({ f }: { f: Feature }) {
  const Icon = f.icon;
  return (
    <article className="group flex h-full flex-col border border-white/10 bg-[#1A1A1A] p-6 transition-colors hover:border-white/15 hover:bg-white/[0.04]">
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex size-5 items-center justify-center">
          <Icon className="size-5 text-orange-400" aria-hidden />
        </span>
      </div>

      <h3 className="font-serif text-base font-bold text-white">{f.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/55">{f.desc}</p>

      <div className="mt-5 font-mono text-xs text-orange-400">
        {f.tag}
      </div>
    </article>
  );
}

function gridItemBorder(idx: number) {
  // 1 col (base): show only row dividers
  const cls = ["border-b border-white/10 last:border-b-0"];
  // md: 2 cols (6 items => 3 rows)
  cls.push(idx % 2 === 0 ? "md:border-r" : "");
  cls.push(idx < 4 ? "md:border-b" : "md:border-b-0");
  // lg: 3 cols (6 items => 2 rows)
  cls.push(idx % 3 !== 2 ? "lg:border-r" : "");
  cls.push(idx < 3 ? "lg:border-b" : "lg:border-b-0");
  return cls.filter(Boolean).join(" ");
}

export function FeaturesSection() {
  return (
    <section id="features" aria-labelledby="feat-h2" className="w-full border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <span className="mb-2 inline-flex font-mono text-xs font-semibold tracking-widest text-orange-400">
          Capabilities
        </span>
        <h2
          id="feat-h2"
          className="max-w-4xl font-serif text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
        >
          AR for Construction — Built for the <em className="not-italic text-orange-400">job site.</em>
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/60">
          Every feature engineered for real field conditions — dust, bright sun, low connectivity, and fast-moving teams.
        </p>

        <div className="mt-8 grid grid-cols-1 border border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div key={f.title} className={gridItemBorder(idx)}>
              <FeatureCard f={f} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

