"use client";

import { useEffect, useRef } from "react";
import type { IndustryKey } from "./content";

export type IndustryHud = {
  topLeft: string;
  topRight: string;
  bottomLeft: string;
};

function drawGrid(ctx: CanvasRenderingContext2D, w: number, h: number, alpha: number) {
  ctx.save();
  ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
  ctx.lineWidth = 1;
  const sx = Math.max(28, Math.round(w / 8));
  const sy = Math.max(24, Math.round(h / 6));
  for (let x = 0; x <= w; x += sx) {
    ctx.beginPath();
    ctx.moveTo(x + 0.5, 0);
    ctx.lineTo(x + 0.5, h);
    ctx.stroke();
  }
  for (let y = 0; y <= h; y += sy) {
    ctx.beginPath();
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(w, y + 0.5);
    ctx.stroke();
  }
  ctx.restore();
}

function drawSweep(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  t: number,
  color: string,
) {
  const y = ((t * 0.012) % 1) * h;
  const g = ctx.createLinearGradient(0, y - 18, 0, y + 2);
  g.addColorStop(0, "rgba(0,0,0,0)");
  g.addColorStop(1, color);
  ctx.fillStyle = g;
  ctx.fillRect(0, y - 18, w, 20);
  ctx.strokeStyle = color.replace("0.10", "0.35");
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, y + 0.5);
  ctx.lineTo(w, y + 0.5);
  ctx.stroke();
}

function drawConstruction(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);
  drawGrid(ctx, w, h, 0.06);

  // plan box
  ctx.strokeStyle = "rgba(255,255,255,0.40)";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(w * 0.1, h * 0.12, w * 0.8, h * 0.76);

  // partitions
  ctx.strokeStyle = "rgba(255,255,255,0.18)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.5);
  ctx.lineTo(w * 0.9, h * 0.5);
  ctx.stroke();
  [0.37, 0.63].forEach((fx) => {
    ctx.beginPath();
    ctx.moveTo(fx * w, h * 0.12);
    ctx.lineTo(fx * w, h * 0.88);
    ctx.stroke();
  });

  // clash line
  ctx.strokeStyle = "rgba(255, 80, 80, 0.75)";
  ctx.lineWidth = 2.5;
  ctx.setLineDash([10, 6]);
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.33);
  ctx.lineTo(w * 0.9, h * 0.33);
  ctx.stroke();
  ctx.setLineDash([]);

  const pulse = 0.45 + 0.35 * Math.sin(t * 0.09);
  [0.22, 0.5, 0.78].forEach((fx) => {
    ctx.strokeStyle = `rgba(255, 60, 60, ${0.75 * pulse})`;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(fx * w, h * 0.33, 7 + pulse * 4, 0, Math.PI * 2);
    ctx.stroke();
  });

  drawSweep(ctx, w, h, t, "rgba(255,153,51,0.10)");
}

function drawDefence(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);
  drawGrid(ctx, w, h, 0.05);

  // hangar outline
  ctx.strokeStyle = "rgba(68, 180, 80, 0.45)";
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.08, h * 0.18, w * 0.84, h * 0.62);

  // aircraft (dashed)
  const ax = w * 0.5;
  const ay = h * 0.5;
  const a = Math.sin(t * 0.03) * 0.35;
  ctx.strokeStyle = "rgba(68, 180, 80, 0.75)";
  ctx.lineWidth = 1.5;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.moveTo(ax - w * 0.14, ay);
  ctx.lineTo(ax + w * 0.14, ay);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(ax - w * 0.05, ay);
  ctx.lineTo(ax - w * 0.16, ay + h * (0.14 + a));
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(ax - w * 0.05, ay);
  ctx.lineTo(ax - w * 0.16, ay - h * (0.14 + a));
  ctx.stroke();
  ctx.setLineDash([]);

  // clearance ring
  const cp = 0.22 + 0.14 * Math.sin(t * 0.05);
  ctx.strokeStyle = `rgba(68, 180, 80, ${cp})`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(ax, ay, w * 0.22, 0, Math.PI * 2);
  ctx.stroke();

  drawSweep(ctx, w, h, t, "rgba(68,180,80,0.10)");
}

function drawManufacturing(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);
  drawGrid(ctx, w, h, 0.05);

  // conveyor
  ctx.strokeStyle = "rgba(255,153,51,0.45)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.15, h * 0.55);
  ctx.lineTo(w * 0.85, h * 0.55);
  ctx.stroke();

  // moving parts
  const part = (t * 0.008) % 1;
  [0, 0.33, 0.66].forEach((off) => {
    const px = w * 0.15 + (((part + off) % 1) * w * 0.7);
    ctx.fillStyle = "rgba(255,153,51,0.65)";
    ctx.fillRect(px - 8, h * 0.51, 16, 8);
  });

  // robotic arm
  const baseX = w * 0.52;
  const baseY = h * 0.42;
  const ang = Math.sin(t * 0.03) * 0.6;
  const arm = w * 0.15;
  const endX = baseX + Math.cos(ang) * arm;
  const endY = baseY + Math.sin(ang) * arm;
  ctx.strokeStyle = "rgba(160,160,255,0.75)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(baseX, baseY + h * 0.15);
  ctx.lineTo(baseX, baseY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.fillStyle = "rgba(255,153,51,0.85)";
  ctx.beginPath();
  ctx.arc(endX, endY, 5, 0, Math.PI * 2);
  ctx.fill();

  drawSweep(ctx, w, h, t, "rgba(120,120,255,0.10)");
}

function drawInfrastructure(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);
  drawGrid(ctx, w, h, 0.05);

  // tunnel arch
  const cx = w * 0.5;
  const cy = h * 0.72;
  const rx = w * 0.38;
  const ry = h * 0.55;
  ctx.strokeStyle = "rgba(220,220,220,0.38)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, 0, Math.PI, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx - rx, cy);
  ctx.lineTo(cx + rx, cy);
  ctx.stroke();

  drawSweep(ctx, w, h, t, "rgba(180,100,255,0.10)");
}

function drawEnergy(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);
  drawGrid(ctx, w, h, 0.05);

  // pipes
  const pipes: Array<[number, number, number, number, string]> = [
    [0.1, 0.35, 0.9, 0.35, "rgba(255,120,60,0.75)"],
    [0.1, 0.65, 0.9, 0.65, "rgba(68,170,255,0.55)"],
    [0.3, 0.35, 0.3, 0.65, "rgba(255,120,60,0.55)"],
    [0.55, 0.35, 0.55, 0.65, "rgba(255,120,60,0.55)"],
  ];
  ctx.lineWidth = 3;
  ctx.setLineDash([10, 6]);
  pipes.forEach(([x1, y1, x2, y2, c]) => {
    ctx.strokeStyle = c;
    ctx.beginPath();
    ctx.moveTo(x1 * w, y1 * h);
    ctx.lineTo(x2 * w, y2 * h);
    ctx.stroke();
  });
  ctx.setLineDash([]);

  // valve nodes
  const vp = 0.5 + 0.5 * Math.sin(t * 0.07);
  [
    [0.3, 0.35],
    [0.55, 0.35],
    [0.3, 0.65],
    [0.55, 0.65],
  ].forEach(([x, y], i) => {
    const open = i % 2 === 0;
    ctx.fillStyle = open
      ? `rgba(68, 220, 120, ${0.7 + vp * 0.2})`
      : `rgba(255, 60, 60, ${0.7 + vp * 0.2})`;
    ctx.beginPath();
    ctx.arc(x * w, y * h, 6, 0, Math.PI * 2);
    ctx.fill();
  });

  drawSweep(ctx, w, h, t, "rgba(255,140,0,0.10)");
}

function drawByIndustry(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  t: number,
  industry: IndustryKey,
) {
  if (industry === "construction") return drawConstruction(ctx, w, h, t);
  if (industry === "defence") return drawDefence(ctx, w, h, t);
  if (industry === "manufacturing") return drawManufacturing(ctx, w, h, t);
  if (industry === "infrastructure") return drawInfrastructure(ctx, w, h, t);
  return drawEnergy(ctx, w, h, t);
}

export function IndustryIpadCanvas({
  industry,
  hud,
}: {
  industry: IndustryKey;
  hud: IndustryHud;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== w) canvas.width = w;
      if (canvas.height !== h) canvas.height = h;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);
    resize();

    const loop = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      drawByIndustry(ctx, w, h, t, industry);
      t += 1;
      raf = window.requestAnimationFrame(loop);
    };

    raf = window.requestAnimationFrame(loop);

    return () => {
      ro.disconnect();
      window.cancelAnimationFrame(raf);
    };
  }, [industry]);

  return (
    <div className="absolute inset-0">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />

      {/* HUD corners */}
      <div className="absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-orange-400" />
      <div className="absolute right-3 top-3 h-3 w-3 border-r-2 border-t-2 border-orange-400" />
      <div className="absolute left-3 bottom-3 h-3 w-3 border-l-2 border-b-2 border-orange-400" />
      <div className="absolute right-3 bottom-3 h-3 w-3 border-r-2 border-b-2 border-orange-400" />

      {/* top left */}
      <div className="absolute left-3 top-3.5">
        <div className="inline-flex items-center gap-2 bg-black/60 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white/75">
          <span className="inline-block size-2 rounded-full bg-red-500 animate-pulse" aria-hidden />
          {hud.topLeft}
        </div>
      </div>
      {/* top right */}
      <div className="absolute right-3 top-3.5">
        <div className="bg-orange-400 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-black">
          {hud.topRight}
        </div>
      </div>
      {/* bottom left */}
      <div className="absolute left-3 bottom-3.5">
        <div className="bg-black/60 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white/70">
          {hud.bottomLeft}
        </div>
      </div>
    </div>
  );
}

