"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";

export type VideoLightboxEmbed = {
  /** YouTube video ID only (e.g. from youtube.com/watch?v=XXXX) */
  youtubeVideoId?: string;
  vimeoId?: string;
  /** Path under /public or absolute URL to .mp4 */
  mp4Src?: string;
};

export function VideoLightbox({
  open,
  onClose,
  embed,
  closeLabel = "CLOSE",
  placeholderTitle = "PASTE YOUR VIDEO EMBED HERE",
  placeholderSubtitle = "YouTube iframe or direct MP4 video tag",
}: {
  open: boolean;
  onClose: () => void;
  embed: VideoLightboxEmbed;
  closeLabel?: string;
  placeholderTitle?: string;
  placeholderSubtitle?: string;
}) {
  const yt = embed.youtubeVideoId?.trim();
  const vimeo = embed.vimeoId?.trim(); // Add this
  const mp4 = embed.mp4Src?.trim();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const node = (
    <div
      className="fixed inset-0 z-[500] flex flex-col bg-black/92"
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
    >
      <div className="flex shrink-0 justify-end p-4 sm:p-6">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-white/80 transition-colors hover:text-white"
        >
          <X className="size-5" aria-hidden />
          {closeLabel}
        </button>
      </div>

      <div
        className="flex min-h-0 flex-1 items-center justify-center px-4 pb-10 sm:px-8"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-5xl overflow-hidden bg-zinc-800/90 shadow-2xl ring-1 ring-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            {vimeo ? (
              <iframe
                title="Vimeo Video"
                src={`https://player.vimeo.com/video/${vimeo}?autoplay=1`}
                className="absolute inset-0 size-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : yt ? (
              <iframe
                title="YouTube Video"
                src={`https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 size-full border-0"
              />
            ) : mp4 ? (
              <video
                className="absolute inset-0 size-full bg-black object-contain"
                controls
                autoPlay
                playsInline
                src={mp4}
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center bg-zinc-800 px-6">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="flex size-14 items-center justify-center rounded-full border border-white/15 bg-black/40">
                    <Play className="size-7 text-white/35" aria-hidden />
                  </div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                    {placeholderTitle}
                  </p>
                  <p className="max-w-md font-mono text-[11px] leading-relaxed text-white/30">
                    {placeholderSubtitle}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (typeof document === "undefined") return null;
  return createPortal(node, document.body);
}