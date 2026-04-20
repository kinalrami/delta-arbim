"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Instagram, Play } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  VideoLightbox,
  type VideoLightboxEmbed,
} from "@/components/shared/VideoLightbox";
import { demoHeroCopy } from "@/components/views/demo/content";
import { site } from "@/components/views/home/content";

function resolveHeroEmbed(
  base: { readonly youtubeVideoId: string; readonly mp4Src: string },
  override?: { readonly youtubeVideoId: string; readonly mp4Src: string },
): VideoLightboxEmbed {
  const oYt = override?.youtubeVideoId?.trim();
  const oMp4 = override?.mp4Src?.trim();
  if (oYt || oMp4) {
    return { youtubeVideoId: oYt || undefined, mp4Src: oMp4 || undefined };
  }
  const bYt = base.youtubeVideoId?.trim();
  const bMp4 = base.mp4Src?.trim();
  return { youtubeVideoId: bYt || undefined, mp4Src: bMp4 || undefined };
}

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

export function DemoHeroSection() {
  const c = demoHeroCopy;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeEmbed, setActiveEmbed] = useState<VideoLightboxEmbed>({});

  function openMain() {
    setActiveEmbed(resolveHeroEmbed(c.videoEmbed));
    setLightboxOpen(true);
  }

  function openReel(reel: (typeof c.reels)[number]) {
    setActiveEmbed(resolveHeroEmbed(c.videoEmbed, reel));
    setLightboxOpen(true);
  }

  return (
    <section
      aria-labelledby="demo-hero-h2"
      className="relative w-full overflow-hidden bg-[#0a0a0a] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,140,51,0.12),transparent)]"
    >
      <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="text-center">
          <SectionHeading
            id="demo-hero-h2"
            eyebrow={c.eyebrow}
            title={
              <>
                {c.title.before}{" "}
                <span className="text-orange-400">{c.title.emphasis}</span>{" "}
                {c.title.after}
              </>
            }
            desc={<p>{c.desc}</p>}
            eyebrowClassName="mb-3 inline-flex font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-orange-400"
            titleClassName="mx-auto max-w-4xl font-serif text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
            descWrapClassName="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/60"
          />
        </div>

        {/* Main 16:9 player */}
        <div className="mx-auto mt-10 max-w-5xl">
          <div
            role="button"
            tabIndex={0}
            aria-label="Play field recording video"
            className="relative w-full cursor-pointer overflow-hidden border border-white/10 bg-black outline-none transition-colors hover:border-orange-400/55 focus-visible:ring-2 focus-visible:ring-orange-400/50"
            onClick={openMain}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openMain();
              }
            }}
          >
            <div className="relative w-full bg-zinc-950" style={{ aspectRatio: "16 / 9" }}>
              <Corner className="absolute top-2 left-2 z-10" />
              <Corner className="absolute top-2 right-2 z-10 -scale-x-100" />
              <Corner className="absolute bottom-2 left-2 z-10 -scale-y-100" />
              <Corner className="absolute bottom-2 right-2 z-10 -scale-x-100 -scale-y-100" />

              <div className="pointer-events-none absolute top-2.5 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-orange-400">
                    {c.mainVideo.hudLeft}
                  </span>
                  <span className="rounded border border-orange-400/40 bg-orange-400/15 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-orange-200">
                    {c.mainVideo.badge}
                  </span>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">
                  {c.mainVideo.hudRight}
                </span>
              </div>

              <div className="pointer-events-none absolute inset-0 z-20 grid place-items-center">
                <div className="flex size-16 items-center justify-center rounded-full border-2 border-orange-400/50 bg-black/50 shadow-[0_0_24px_rgba(255,153,51,0.25)]">
                  <Play className="size-7 translate-x-0.5 text-orange-300" fill="currentColor" aria-hidden />
                </div>
              </div>

              <div className="absolute inset-0 z-[5] grid place-items-center opacity-30">
                <span className="text-6xl" aria-hidden>
                  🏗️
                </span>
              </div>

              {/* Bottom HUD */}
              <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-black/75 px-3 py-3 backdrop-blur-sm sm:px-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-6">
                    {c.mainVideo.stats.map((s) => (
                      <div key={s.label} className="text-left">
                        <div className="font-mono text-sm font-bold text-orange-400 sm:text-base">
                          {s.value}
                        </div>
                        <div className="font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-white/55">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="max-w-md text-right sm:pl-4">
                    <p className="text-[10px] font-medium text-white sm:text-base">
                      {c.mainVideo.captionTitle}
                    </p>
                    <p className="mt-1 font-mono text-[9px] font-bold uppercase text-orange-400">
                      {c.mainVideo.captionSub}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tag chips */}
        <div className="mx-auto mt-8 max-w-5xl">
          <div className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
            {c.inThisVideo}
          </div>
          <div className="flex flex-wrap gap-2">
            {c.videoTags.map((tag) => (
              <span
                key={tag}
                className="border border-orange-400/35 bg-black/40 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-orange-300/90"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Reels grid */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 sm:grid-cols-3">
          {c.reels.map((reel) => (
            <div
              key={reel.caption}
              role="button"
              tabIndex={0}
              aria-label={`Play reel: ${reel.caption}`}
              className="relative cursor-pointer overflow-hidden border border-white/10 bg-zinc-950 transition-colors hover:border-orange-400/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50"
              style={{ aspectRatio: "9 / 16" }}
              onClick={() => openReel(reel)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openReel(reel);
                }
              }}
            >
              <Corner className="absolute top-2 left-2 z-10" />
              <Corner className="absolute top-2 right-2 z-10 -scale-x-100" />
              <Corner className="absolute bottom-2 left-2 z-10 -scale-y-100" />
              <Corner className="absolute bottom-2 right-2 z-10 -scale-x-100 -scale-y-100" />

              <div className="absolute top-2.5 left-4 right-4 z-10 flex items-start justify-between gap-2">
                <span className="font-mono text-[8px] font-bold uppercase tracking text-white/50">
                  {reel.clipLabel}
                </span>
                <span className="font-mono text-[8px] text-white/40">@DELTAARBIM</span>
              </div>

              <div className="absolute inset-0 z-[5] grid place-items-center">
                <div className="flex size-12 items-center justify-center rounded-full border border-orange-400/40 bg-black/50">
                  <Play className="size-5 translate-x-0.5 text-orange-300" fill="currentColor" aria-hidden />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-1 right-0 z-10 p-3">
                <div className="mb-2 inline-block bg-orange-400 px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-black">
                  {reel.tag}
                </div>
                <p className="text-[11px] leading-snug text-white/85">{reel.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-5xl border-t border-white/8 bg-zinc-900/90 px-4 py-3.5 sm:px-6">
          <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
              {c.reelsFooter.left}
            </p>
            <Link
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 self-start font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-orange-400/85 transition-colors hover:text-orange-300 sm:self-auto"
            >
              <Instagram className="size-4 text-orange-400/90" aria-hidden />
              {c.reelsFooter.follow}
            </Link>
          </div>
        </div>
      </div>

      <VideoLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        embed={activeEmbed}
        closeLabel={c.videoModal.closeLabel}
        placeholderTitle={c.videoModal.placeholderTitle}
        placeholderSubtitle={c.videoModal.placeholderSubtitle}
      />
    </section>
  );
}
