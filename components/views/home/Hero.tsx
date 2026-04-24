"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  heroHudCornerClasses,
  heroLayerSets,
  heroLegendItems,
  heroQuickLinks,
  heroStatBadges,
  heroTagPills,
} from "@/components/views/home/content";
import { HeroIpadCanvas } from "./HeroIpadCanvas";
import { CtaPill } from "../../shared/CtaPill";

type StatBadgeConfig = {
  value: string;
  valueClassName: string;
  label: string;
  positionClassName: string;
};

function StatBadge({ cfg }: { cfg: StatBadgeConfig }) {
  return (
    <div
      className={[
        "pointer-events-none absolute z-20 hidden rounded-lg border border-orange-400/30 bg-black/80 p-3 backdrop-blur-sm lg:block",
        cfg.positionClassName,
      ].join(" ")}
    >
      <div className={["font-serif text-sm font-extrabold leading-none", cfg.valueClassName].join(" ")}>
        {cfg.value}
      </div>
      <div className="mt-1 font-mono text-xs text-white/45">{cfg.label}</div>
    </div>
  );
}

function HudCorner({ className }: { className: string }) {
  return (
    <div className={className}>
      <Image
        src="/hud-corner.svg"
        alt=""
        aria-hidden
        width={20}
        height={20}
        unoptimized
        className="h-5 w-5"
        draggable={false}
      />
    </div>
  );
}

type LegendItemConfig = {
  label: string;
  dotClassName: string;
  itemClassName: string;
};

function LegendItem({ cfg }: { cfg: LegendItemConfig }) {
  return (
    <div
      className={[
        "flex items-center gap-2 rounded border bg-black/60 px-2 py-1 font-mono text-xs",
        cfg.itemClassName,
      ].join(" ")}
    >
      <span className={["size-1.5 rounded-full", cfg.dotClassName].join(" ")} />
      {cfg.label}
    </div>
  );
}

export function Hero() {
  const [layerIdx, setLayerIdx] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setLayerIdx((i) => (i + 1) % heroLayerSets.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  const layers = heroLayerSets[layerIdx] ?? heroLayerSets[0];

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid min-h-screen grid-cols-1 gap-4 overflow-visible lg:grid-cols-2">
          {/* LEFT */}
          <div className="relative z-10 flex flex-col justify-center py-16 lg:py-20">
            <div className="mb-5 font-mono text-xs font-medium text-orange-400">
              BIM to AR: Augmented Reality Construction Site Overlay
            </div>
            <h1 className="mb-6 font-serif md:text-4xl text-2xl font-extrabold leading-tight tracking-tight">
              See Your Building Before it Exists with <span className="text-orange-400">AR BIM.</span>
            </h1>
            <p className="mb-1.5 max-w-md text-base leading-relaxed text-white/60">
              Directly overlay live IFC models onto your construction site to close the design to physical execution gap. Detect clashes and check as-built data in real-time on iOS and Android with LiDAR-anchored Augmented Reality.
            </p>
            <p className="mb-9 max-w-md text-base leading-relaxed text-white/60">
              Delta AR BIM is an IFC-first platform that translates BIM to AR within less than 60 seconds, with spatial precision of ±2cm to ensure that field teams do not have to rework.
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center font-bold bg-orange-400 px-7 py-3.5 font-mono text-xs font-bold text-black transition-opacity hover:opacity-90"
              >
                BOOK A FREE DEMO →
              </Link>
              <Link
                href="/#ifc-check"
                className="inline-flex items-center justify-center border border-white/25 px-6 py-3.5 font-mono text-xs text-white transition-colors hover:border-orange-400"
              >
                FREE IFC CHECK
              </Link>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {heroTagPills.map((t) => (
                <CtaPill
                  key={t}
                  variant="gray"
                  className="rounded px-2.5 py-1.5 text-white/50 hover:text-white/70"
                >
                  {t}
                </CtaPill>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {heroQuickLinks.map((i) => (
                <CtaPill
                  key={i.href}
                  href={i.href}
                  variant="outlineOrange"
                  className="rounded px-3 py-1.5"
                >
                  {i.label.replace(/^→\s*/, "")}
                </CtaPill>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex items-center justify-center py-10 lg:px-6">
            {/* Floating stat badges */}
            {heroStatBadges.map((cfg) => (
              <StatBadge key={cfg.label} cfg={cfg} />
            ))}

            {/* iPad */}
            <div
              className="relative z-10 w-full max-w-md rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-5 shadow-2xl ring-1 ring-zinc-700"
              style={{ aspectRatio: "3 / 4" }}
            >
              <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-orange-400/10 blur-2xl animate-pulse" />
              <div className="pointer-events-none absolute top-2 left-1/2 z-10 size-2 -translate-x-1/2 rounded-full border border-zinc-600 bg-zinc-700" />
              <div className="pointer-events-none absolute top-1/2 left-1 z-10 h-12 w-1 -translate-y-1/2 rounded bg-zinc-800" />
              <div className="pointer-events-none absolute top-1/2 right-1 z-10 h-12 w-1 -translate-y-1/2 rounded bg-zinc-800" />
              <div className="pointer-events-none absolute bottom-2 left-1/2 z-10 h-1 w-20 -translate-x-1/2 rounded bg-white/20" />

              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black">
                <HeroIpadCanvas layers={layers} />

                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-400/70 to-transparent animate-pulse" />

                  {heroHudCornerClasses.map((className) => (
                    <HudCorner key={className} className={className} />
                  ))}

                  {/* Top HUD row (prevents overlap) */}
                  <div className="absolute top-3 left-4 right-4 flex items-center justify-between">
                    <div className="flex-1" />
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                      <span className="font-mono text-xs text-white/70">
                        BIM OVERLAY LIVE
                      </span>
                    </div>
                    <div className="flex flex-1 justify-end">
                      <span className="truncate font-mono text-xs text-orange-300/80">
                        {layers.label}
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 flex flex-col gap-1.5">
                    {heroLegendItems.map((cfg) => (
                      <LegendItem key={cfg.label} cfg={cfg} />
                    ))}
                  </div>

                  <div
                    className="absolute right-5 bottom-5 flex items-center gap-2 rounded border border-rose-400/50 bg-rose-500/10 px-2.5 py-1.5 font-mono text-xs text-rose-300"
                    aria-label="Clash detected"
                  >
                    <span className="size-2 rounded-full border border-rose-300" />
                    CLASH DETECTED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

