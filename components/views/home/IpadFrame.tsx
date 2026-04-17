"use client";

import type { ReactNode } from "react";

type Props = {
  /** Set to portrait (3/4) or landscape (4/3) if you want a default aspect ratio. */
  orientation?: "portrait" | "landscape";
  className?: string;
  children: ReactNode;
  overlay?: ReactNode;
};

export function IpadFrame({
  orientation = "portrait",
  className,
  children,
  overlay,
}: Props) {
  const ratio = orientation === "landscape" ? "4 / 3" : "3 / 4";

  return (
    <div
      className={[
        "relative z-10 w-full rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-5 shadow-2xl ring-1 ring-zinc-700",
        className ?? "",
      ].join(" ")}
      style={{ aspectRatio: ratio }}
    >
      <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-orange-400/10 blur-2xl animate-pulse" />
      <div className="pointer-events-none absolute top-2 left-1/2 z-10 size-2 -translate-x-1/2 rounded-full border border-zinc-600 bg-zinc-700" />
      <div className="pointer-events-none absolute top-1/2 left-1 z-10 h-12 w-1 -translate-y-1/2 rounded bg-zinc-800" />
      <div className="pointer-events-none absolute top-1/2 right-1 z-10 h-12 w-1 -translate-y-1/2 rounded bg-zinc-800" />
      <div className="pointer-events-none absolute bottom-2 left-1/2 z-10 h-1 w-20 -translate-x-1/2 rounded bg-white/20" />

      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black">
        {children}
        {overlay ? <div className="pointer-events-none absolute inset-0">{overlay}</div> : null}
      </div>
    </div>
  );
}

