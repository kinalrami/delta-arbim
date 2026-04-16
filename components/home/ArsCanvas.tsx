"use client";

import { useEffect, useMemo, useRef } from "react";

export type ArsLayerId = "struct" | "walls" | "hvac" | "water" | "elec";
export type ArsActiveLayers = Record<ArsLayerId, boolean>;

type LayerDef = {
  id: ArsLayerId;
  draw: (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    alpha: number,
    t: number,
  ) => void;
};

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

function drawStructure(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  a: number,
) {
  ctx.save();
  ctx.globalAlpha = 0.65 * a;
  ctx.strokeStyle = "rgba(180,190,205,0.75)";
  ctx.lineWidth = 2;

  const padX = w * 0.18;
  const padY = h * 0.22;
  const x1 = padX,
    x2 = w - padX;
  const y1 = padY,
    y2 = h - padY * 0.9;

  const cols = [
    [x1, y1],
    [x2, y1],
    [x1, y2],
    [x2, y2],
    [w * 0.5, y1],
    [w * 0.5, y2],
  ];

  cols.forEach(([x, y]) => {
    ctx.beginPath();
    ctx.moveTo(x, y - h * 0.12);
    ctx.lineTo(x, y + h * 0.22);
    ctx.stroke();
  });

  ctx.globalAlpha = 0.32 * a;
  ctx.strokeStyle = "rgba(140,160,185,0.55)";
  [0.18, 0.32, 0.46].forEach((yy) => {
    const sy = h * yy;
    ctx.beginPath();
    ctx.rect(x1, sy, x2 - x1, h * 0.02);
    ctx.stroke();
  });

  ctx.restore();
}

function drawWalls(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  a: number,
) {
  ctx.save();
  ctx.globalAlpha = 0.18 * a;
  ctx.fillStyle = "rgba(70,140,255,1)";
  const x = w * 0.2;
  const y = h * 0.22;
  const ww = w * 0.6;
  const hh = h * 0.54;
  ctx.fillRect(x, y, ww, hh);
  ctx.globalAlpha = 0.55 * a;
  ctx.strokeStyle = "rgba(110,175,255,0.9)";
  ctx.lineWidth = 1.2;
  ctx.strokeRect(x, y, ww, hh);
  ctx.restore();
}

function drawHvac(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  a: number,
) {
  ctx.save();
  ctx.globalAlpha = 0.85 * a;
  ctx.strokeStyle = "rgba(255,68,68,0.95)";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(w * 0.28, h * 0.32);
  ctx.lineTo(w * 0.72, h * 0.32);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.55, h * 0.32);
  ctx.lineTo(w * 0.55, h * 0.58);
  ctx.stroke();
  ctx.restore();
}

function drawWater(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  a: number,
) {
  ctx.save();
  ctx.globalAlpha = 0.85 * a;
  ctx.strokeStyle = "rgba(68,170,255,0.95)";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(w * 0.32, h * 0.52);
  ctx.lineTo(w * 0.75, h * 0.52);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.42, h * 0.44);
  ctx.lineTo(w * 0.42, h * 0.66);
  ctx.stroke();
  ctx.restore();
}

function drawElec(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  a: number,
  t: number,
) {
  ctx.save();
  ctx.globalAlpha = 0.85 * a;
  ctx.strokeStyle = "rgba(255,204,0,0.95)";
  ctx.lineWidth = 3.5;
  ctx.lineCap = "round";
  const wobble = 2 * Math.sin(t * 2);
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.62 + wobble);
  ctx.lineTo(w * 0.7, h * 0.62 - wobble);
  ctx.stroke();
  ctx.restore();
}

export function ArsCanvas({
  active,
  hasClash,
  className,
}: {
  active: ArsActiveLayers;
  hasClash: boolean;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);

  const layers = useMemo<LayerDef[]>(
    () => [
      {
        id: "struct",
        draw: (ctx, w, h, a) => drawStructure(ctx, w, h, a),
      },
      { id: "walls", draw: (ctx, w, h, a) => drawWalls(ctx, w, h, a) },
      { id: "hvac", draw: (ctx, w, h, a) => drawHvac(ctx, w, h, a) },
      { id: "water", draw: (ctx, w, h, a) => drawWater(ctx, w, h, a) },
      { id: "elec", draw: (ctx, w, h, a, t) => drawElec(ctx, w, h, a, t) },
    ],
    [],
  );

  useEffect(() => {
    function resize() {
      const cv = canvasRef.current;
      const host = hostRef.current;
      if (!cv || !host) return;
      const rect = host.getBoundingClientRect();
      cv.width = Math.max(1, Math.floor(rect.width));
      cv.height = Math.max(1, Math.floor(rect.height));
    }
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;

    const anchors = (w: number, h: number) => [
      [w * 0.2, h * 0.25],
      [w * 0.5, h * 0.25],
      [w * 0.8, h * 0.25],
      [w * 0.2, h * 0.65],
      [w * 0.5, h * 0.65],
      [w * 0.8, h * 0.65],
    ] as const;

    const draw = () => {
      t += 0.016;
      const w = cv.width;
      const h = cv.height;
      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = "#060c18";
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < w; i += 32) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, h);
        ctx.strokeStyle = "rgba(16,43,77,0.25)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      for (let j = 0; j < h; j += 32) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(w, j);
        ctx.strokeStyle = "rgba(16,43,77,0.25)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      ctx.fillStyle = "rgba(20,28,45,0.6)";
      ctx.fillRect(0, 0, w, h);

      const sy = (t * 22) % h;
      const grad = ctx.createLinearGradient(0, sy - 2, 0, sy + 2);
      grad.addColorStop(0, "transparent");
      grad.addColorStop(0.5, "rgba(255,153,51,0.35)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, sy - 2, w, 4);

      layers.forEach((l) => {
        const a = active[l.id] ? 1 : 0;
        if (a <= 0) return;
        l.draw(ctx, w, h, clamp01(a), t);
      });

      anchors(w, h).forEach(([ax, ay], i) => {
        const p = 0.4 + 0.4 * Math.sin(t * 1.5 + i * 0.8);
        ctx.beginPath();
        ctx.arc(ax, ay, 3 + p * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(29,207,207,${p * 0.2})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(ax, ay, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(29,207,207,${0.6 + p * 0.3})`;
        ctx.fill();
      });

      if (hasClash) {
        const cr = 6 + 3 * Math.sin(t * 3);
        ctx.beginPath();
        ctx.arc(w * 0.3, h * 0.35, cr, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,60,60,${0.6 + 0.3 * Math.sin(t * 3)})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(w * 0.3, h * 0.35, cr * 1.8, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,60,60,0.2)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      raf = window.requestAnimationFrame(draw);
    };

    raf = window.requestAnimationFrame(draw);
    return () => window.cancelAnimationFrame(raf);
  }, [active, hasClash, layers]);

  return (
    <div ref={hostRef} className={className}>
      <canvas
        ref={canvasRef}
        id="ars-canvas"
        aria-label="Interactive AR BIM layer demo"
        className="h-full w-full"
      />
    </div>
  );
}

