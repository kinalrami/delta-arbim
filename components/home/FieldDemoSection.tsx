"use client";

import Image from "next/image";
import Link from "next/link";
import { Diamond, Hexagon, Play, Target, Zap } from "lucide-react";

import { fieldDemoBullets, site, type FieldDemoBulletIcon } from "@/components/home/content";
import { SectionHeading } from "../shared/SectionHeading";

function Corner({ className }: { className: string }) {
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

type Bullet = { icon: FieldDemoBulletIcon; text: string };

function BulletRow({ b }: { b: Bullet }) {
  const Icon =
    b.icon === "hex"
      ? Hexagon
      : b.icon === "zap"
        ? Zap
        : b.icon === "target"
          ? Target
          : Diamond;
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-white/60">
      <span className="mt-0.5 inline-flex size-5 items-center justify-center">
        <Icon className="size-3.5 text-orange-400" aria-hidden />
      </span>
      <span>{b.text}</span>
    </li>
  );
}

export function FieldDemoSection() {
  const bullets: Bullet[] = [
    {
      icon: "hex",
      text: "Live IFC model aligned to the real site — columns, MEP runs, slabs overlaid precisely.",
    },
    {
      icon: "zap",
      text: "HVAC duct clash detected and flagged visually in AR before installation.",
    },
    {
      icon: "target",
      text: "Markerless geo-anchoring — no QR codes, no printed markers, no GPS required.",
    },
    {
      icon: "diamond",
      text: "LiDAR room scan vs as-designed IFC — deviation flagged in seconds.",
    },
  ];

  return (
    <section id="field-demo" aria-labelledby="vid-h2" className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Video card */}
          <div className="flex items-center justify-center">
            <div
              role="button"
              tabIndex={0}
              aria-label="Play DeltaARBIM field demo video"
              className="relative w-full max-w-xl overflow-hidden border border-orange-400/25 bg-black shadow-2xl outline-none transition-colors hover:border-orange-400/40 focus-visible:ring-2 focus-visible:ring-orange-400/50"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  // placeholder for future modal/player
                }
              }}
              onClick={() => {
                // placeholder for future modal/player
              }}
            >
              <div className="relative w-full bg-zinc-900/40" style={{ aspectRatio: "16 / 9" }}>
                {/* corners */}
                <Corner className="absolute top-2 left-2 h-5 w-5" />
                <Corner className="absolute top-2 right-2 h-5 w-5 -scale-x-100" />
                <Corner className="absolute bottom-2 left-2 h-5 w-5 -scale-y-100" />
                <Corner className="absolute bottom-2 right-2 h-5 w-5 -scale-x-100 -scale-y-100" />

                {/* HUD top */}
                <div className="pointer-events-none absolute top-2 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-white/80">
                    <span className="size-2 rounded-full bg-rose-400 shadow-sm shadow-rose-400/60 animate-pulse" />
                    LIVE FIELD RECORDING
                  </div>
                  <div className="rounded bg-orange-400 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-widest text-black">
                    UGC · REAL SITE
                  </div>
                </div>

                {/* Play overlay */}
                <div className="pointer-events-none absolute inset-0 z-20 grid place-items-center">
                  <div className="grid place-items-center rounded-full border border-orange-400/30 bg-black/40 p-4 shadow-[0_0_0_6px_rgba(255,153,51,0.08)]">
                    <Play className="size-7 translate-x-0.5 text-orange-200" aria-hidden />
                  </div>
                </div>

                {/* Thumbnail placeholder */}
                <div className="absolute inset-0 z-10 grid place-items-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="text-4xl opacity-15" aria-hidden>
                      🏗
                    </div>
                    <div className="text-center font-mono text-xs tracking-widest text-white/20">
                      REPLACE WITH VIDEO THUMBNAIL
                      <br />
                      site-demo.jpg · 16:9
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              id="vid-h2"
              eyebrow="Real Human. Real Site. Real AR."
              title={
                <>
                  Watch DeltaARBIM on an <em className="not-italic text-orange-400">active construction site.</em>
                </>
              }
              titleClassName="font-serif text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
              desc="Not a studio recording. Our engineer walks onto a live construction floor, opens DeltaARBIM, and aligns the full IFC model in under 60 seconds — then detects a duct clash before concrete is poured."
              descWrapClassName="mt-4 max-w-prose text-base leading-relaxed text-white/60"
            />

            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <BulletRow key={b.text} b={b} />
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center bg-orange-400 px-5 py-3 font-mono text-xs font-bold uppercase text-black transition-opacity hover:opacity-90"
              >
                Book Your Own Demo →
              </Link>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded border border-white/15 bg-white/5 px-5 py-3 font-mono text-xs uppercase text-white/70 transition-colors hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-200"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

