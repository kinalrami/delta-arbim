"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArsCanvas, type ArsActiveLayers, type ArsLayerId } from "./ArsCanvas";
import { IpadFrame } from "./IpadFrame";

type LayerDef = {
  id: ArsLayerId;
  label: string;
  dot: string;
};

function LayerButton({
  id,
  label,
  dot,
  active,
  onToggle,
}: {
  id: ArsLayerId;
  label: string;
  dot: string;
  active: boolean;
  onToggle: (id: ArsLayerId) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onToggle(id)}
      aria-pressed={active}
      className={[
        "flex w-full items-center gap-3 border px-3 py-2 border-[#ff99331a] bg-[#ff99331a] text-white uppercase text-left font-mono text-xs tracking-widest transition-colors",
      ].join(" ")}
    >
      <span className="size-2 rounded-full" style={{ background: dot }} aria-hidden />
      {label}
    </button>
  );
}

type InfoItem = { title: string; desc: string };

function InfoRow({
  item,
  active,
}: {
  item: InfoItem;
  active: boolean;
}) {
  return (
    <div
      className={[
        "border p-4 transition-colors border-white/10 bg-zinc-900/40 hover:bg-white/5",
      ].join(" ")}
    >
      <div className="font-serif text-xs font-semibold tracking-widest text-white">
        {item.title}
      </div>
      <div className="mt-1 text-sm leading-relaxed font-sans text-white/55">{item.desc}</div>
    </div>
  );
}

export function ArsSection() {
  const [active, setActive] = useState<ArsActiveLayers>({
    struct: true,
    walls: true,
    hvac: true,
    water: true,
    elec: true,
  });

  const [highlightIdx, setHighlightIdx] = useState(0);
  const hasClash = Boolean(active.hvac && active.struct);
  const clashText = hasClash ? "⚠ CLASH DETECTED" : "NO CLASHES";
  const clashColor = hasClash ? "text-rose-300/80" : "text-white/35";

  const layers = useMemo<LayerDef[]>(
    () => [
      { id: "struct", label: "Structure Layer", dot: "#888888" },
      { id: "walls", label: "Walls & Slabs", dot: "#4488FF" },
      { id: "hvac", label: "MEP — HVAC", dot: "#FF4444" },
      { id: "water", label: "MEP — Water", dot: "#44AAFF" },
      { id: "elec", label: "MEP — Electrical", dot: "#FFCC00" },
    ],
    [],
  );

  const infoItems: InfoItem[] = useMemo(
    () => [
      {
        title: "→ BIM Structure Layer",
        desc: "Grey columns, beams and slabs from your IFC file overlaid precisely to confirm placement on site.",
      },
      {
        title: "→ Wall & Slab Layer",
        desc: "Semi-transparent panels show walls and openings — catch misplacements before they're built.",
      },
      {
        title: "→ MEP Pipes & Ducts",
        desc: "Red HVAC, blue water, yellow electrical — each trade colour-coded. Toggle to isolate for clash inspection.",
      },
      {
        title: "→ AR Anchor Points",
        desc: "LiDAR nodes lock the IFC model to physical coordinates so the overlay never drifts.",
      },
    ],
    [],
  );

  const toggleLayer = (id: ArsLayerId) => {
    setActive((s) => ({ ...s, [id]: !s[id] }));
  };

  // auto-highlight info panel
  useEffect(() => {
    const id = window.setInterval(() => {
      setHighlightIdx((i) => (i + 1) % infoItems.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, [infoItems.length]);

  return (
    <section id="ars" aria-labelledby="ars-h2" className="w-full bg-[#1A1A1A]">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <span className="mb-2 inline-flex font-mono text-xs font-semibold tracking-widest text-orange-400">
          AR Scan // What You See On Site
        </span>

        <h2
          id="ars-h2"
          className="max-w-3xl font-serif text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
        >
          Every IFC layer. Every trade. <em className="not-italic text-orange-400">Live in AR.</em>
        </h2>

        <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/60">
          Toggle each layer — exactly as it works on a real construction site. Click any layer button to show or hide it.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* LEFT: iPad */}
          <div className="flex justify-center">
            <div className="w-full">
              <IpadFrame
                orientation="portrait"
                className="h-80 p-4 sm:h-96 sm:p-5"
                overlay={
                  <>
                    {/* corners */}
                    {[
                      "absolute top-3 left-3 h-5 w-5",
                      "absolute top-3 right-3 h-5 w-5 -scale-x-100",
                      "absolute bottom-3 left-3 h-5 w-5 -scale-y-100",
                      "absolute bottom-3 right-3 h-5 w-5 -scale-x-100 -scale-y-100",
                    ].map((cn) => (
                      <div key={cn} className={cn}>
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
                    ))}

                    {/* HUD overlays */}
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center gap-2 px-2 py-0.5 font-mono text-xs tracking-widest text-rose-200">
                        <span className="size-2 rounded-full bg-rose-400" />
                        AR LIVE
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="rounded bg-orange-400 px-2 py-0.5 font-mono text-xs tracking-widest text-black">
                        IFC
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 px-2 py-0.5 font-mono text-xs tracking-widest text-white/70">
                      ● LIDAR · ±2CM · 60FPS
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 font-mono text-xs tracking-widest">
                      <span className={clashColor} aria-live="polite">
                        {clashText}
                      </span>
                    </div>
                  </>
                }
              >
                <ArsCanvas className="h-full w-full" active={active} hasClash={hasClash} />
              </IpadFrame>

              {/* layer controls */}
              <div className="mt-4" role="group" aria-label="Toggle BIM layers">
                <div className="grid grid-cols-1 gap-2">
                  {layers.map((l) => (
                    <LayerButton
                      key={l.id}
                      id={l.id}
                      label={l.label}
                      dot={l.dot}
                      active={active[l.id]}
                      onToggle={toggleLayer}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: info */}
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-xl font-bold text-white">
              IFC layers in your hands.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              Each IFC discipline colour-coded and individually toggleable. Structural, MEP, architectural — isolate any trade mid-walk without losing spatial reference on site.
            </p>

            <div className="mt-6 grid">
              {infoItems.map((item, i) => (
                <InfoRow key={item.title} item={item} active={i === highlightIdx} />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center uppercase bg-orange-400 px-4 py-2 font-mono text-xs text-white transition-colors hover:border-orange-400/40 hover:text-orange-200"
              >
                → See It On Your Site
              </Link>
              <Link
                href="/#how"
                className="inline-flex items-center uppercase border border-white/15 px-4 py-2 font-mono text-xs text-white transition-colors hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-200"
              >
                → How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

