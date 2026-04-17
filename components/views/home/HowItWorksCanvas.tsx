"use client";

import { useEffect, useMemo, useRef } from "react";

export type HowStepId = 0 | 1 | 2 | 3 | 4;

type DrawFn = (
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  alpha: number,
  t: number,
) => void;

type StepDraw = { id: HowStepId; draw: DrawFn };

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

const drawStep1: DrawFn = (ctx, W, H, p, t) => {
  ctx.fillStyle = "rgba(10,20,40,0.8)";
  ctx.fillRect(0, 0, W, H);

  const fx = W * 0.5;
  const fy = H * 0.35;
  ctx.fillStyle = `rgba(255,153,51,${p * 0.15})`;
  roundRect(ctx, fx - 40, fy - 50, 80, 65, 8);
  ctx.fill();
  ctx.strokeStyle = `rgba(255,153,51,${p * 0.6})`;
  ctx.lineWidth = 1.5;
  roundRect(ctx, fx - 40, fy - 50, 80, 65, 8);
  ctx.stroke();

  ctx.fillStyle = `rgba(255,153,51,${p * 0.8})`;
  ctx.font = "bold 14px JetBrains Mono, monospace";
  ctx.textAlign = "center";
  ctx.fillText("IFC", fx, fy - 14);
  ctx.font = "8px JetBrains Mono, monospace";
  ctx.fillStyle = `rgba(255,255,255,${p * 0.45})`;
  ctx.fillText("building_a.ifc", fx, fy + 5);
  ctx.fillStyle = `rgba(255,255,255,${p * 0.3})`;
  ctx.fillText("24.7 MB", fx, fy + 18);

  const barW = W * 0.5;
  const barX = W * 0.25;
  const barY = H * 0.62;
  ctx.fillStyle = "rgba(255,255,255,0.06)";
  roundRect(ctx, barX, barY, barW, 8, 4);
  ctx.fill();
  const prog = Math.min(1, (t % 4) / 3.5);
  const fillW = barW * prog;
  ctx.fillStyle = `rgba(255,153,51,${p * 0.85})`;
  roundRect(ctx, barX, barY, fillW, 8, 4);
  ctx.fill();

  ctx.fillStyle = `rgba(255,153,51,${p * 0.7})`;
  ctx.font = "8px JetBrains Mono, monospace";
  ctx.textAlign = "center";
  ctx.fillText(`PARSING... ${Math.round(prog * 100)}%`, W * 0.5, barY + 24);

  for (let i = 0; i < 6; i++) {
    const ly = H * 0.72 + i * 14;
    const lineP = Math.max(0, Math.min(1, ((t * 0.5 - i * 0.15) % 2 + 2) % 2));
    ctx.fillStyle = `rgba(29,207,207,${p * lineP * 0.4})`;
    ctx.fillRect(W * 0.15, ly, W * 0.7 * lineP, 2);
    if (lineP > 0.3) {
      ctx.fillStyle = `rgba(255,255,255,${p * 0.25})`;
      ctx.font = "7px JetBrains Mono, monospace";
      ctx.textAlign = "left";
      const names = ["IfcWall", "IfcColumn", "IfcSlab", "IfcPipeSegment", "IfcDuct", "IfcCableCarrier"];
      ctx.fillText(names[i] ?? "", W * 0.18, ly - 2);
    }
  }
};

const drawStep2: DrawFn = (ctx, W, H, p, t) => {
  ctx.fillStyle = "rgba(8,14,28,0.85)";
  ctx.fillRect(0, 0, W, H);

  const floors = ["B1 — BASEMENT", "GF — GROUND FLOOR", "01 — FIRST FLOOR", "02 — SECOND FLOOR"];
  floors.forEach((lbl, i) => {
    const fy = H * 0.1 + i * (H * 0.18);
    const isActive = i === 1;
    const pp = isActive ? p : p * 0.35;
    ctx.fillStyle = isActive ? `rgba(255,153,51,${pp * 0.18})` : `rgba(255,255,255,${pp * 0.03})`;
    roundRect(ctx, W * 0.08, fy, W * 0.84, H * 0.13, 6);
    ctx.fill();
    ctx.strokeStyle = isActive ? `rgba(255,153,51,${pp * 0.6})` : `rgba(255,255,255,${pp * 0.1})`;
    ctx.lineWidth = isActive ? 1.5 : 0.7;
    roundRect(ctx, W * 0.08, fy, W * 0.84, H * 0.13, 6);
    ctx.stroke();
    if (isActive) {
      ctx.fillStyle = `rgba(255,153,51,${pp * 0.9})`;
      ctx.fillRect(W * 0.08, fy, 3, H * 0.13);
    }
    ctx.fillStyle = isActive ? `rgba(255,255,255,${pp * 0.85})` : `rgba(255,255,255,${pp * 0.35})`;
    ctx.font = `${isActive ? "bold " : ""}9px JetBrains Mono, monospace`;
    ctx.textAlign = "left";
    ctx.fillText(lbl, W * 0.13, fy + H * 0.075);
    if (isActive) {
      ctx.fillStyle = `rgba(29,207,207,${pp * 0.7})`;
      ctx.font = "8px JetBrains Mono, monospace";
      ctx.fillText("▶ SELECTED", W * 0.68, fy + H * 0.075);
    }
  });

  const zp = 0.5 + 0.4 * Math.sin(t * 1.5);
  ctx.strokeStyle = `rgba(29,207,207,${p * zp * 0.5})`;
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  roundRect(ctx, W * 0.08, H * 0.28, W * 0.84, H * 0.13, 6);
  ctx.stroke();
  ctx.setLineDash([]);
};

const drawStep3: DrawFn = (ctx, W, H, p, t) => {
  ctx.fillStyle = "rgba(6,10,20,0.9)";
  ctx.fillRect(0, 0, W, H);
  const cx = W * 0.5,
    cy = H * 0.45;
  const cr = 40;
  ctx.strokeStyle = `rgba(255,153,51,${p * 0.7})`;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(cx - cr, cy);
  ctx.lineTo(cx - 12, cy);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + 12, cy);
  ctx.lineTo(cx + cr, cy);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx, cy - cr);
  ctx.lineTo(cx, cy - 12);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx, cy + 12);
  ctx.lineTo(cx, cy + cr);
  ctx.stroke();

  const rp = 3 + 3 * Math.sin(t * 3);
  ctx.beginPath();
  ctx.arc(cx, cy, rp + 8, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255,153,51,${p * 0.1})`;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx, cy, rp, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255,153,51,${p * 0.8})`;
  ctx.fill();

  const anchors = [
    { x: W * 0.2, y: H * 0.3, ok: true },
    { x: W * 0.75, y: H * 0.35, ok: true },
    { x: W * 0.45, y: H * 0.7, ok: false },
  ];
  anchors.forEach((a, i) => {
    const ap = Math.min(1, Math.max(0, t * 0.4 - i * 0.5));
    ctx.beginPath();
    ctx.arc(a.x, a.y, 5 + 3 * Math.sin(t * 1.5 + i), 0, Math.PI * 2);
    ctx.fillStyle = a.ok ? `rgba(34,197,94,${p * ap * 0.8})` : `rgba(255,153,51,${p * ap * 0.5})`;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(a.x, a.y, 12, 0, Math.PI * 2);
    ctx.strokeStyle = a.ok ? `rgba(34,197,94,${p * ap * 0.4})` : `rgba(255,153,51,${p * ap * 0.3})`;
    ctx.lineWidth = 1;
    ctx.stroke();
    if (ap > 0.5) {
      ctx.fillStyle = a.ok ? `rgba(34,197,94,${p * 0.7})` : `rgba(255,153,51,${p * 0.7})`;
      ctx.font = "7px JetBrains Mono, monospace";
      ctx.textAlign = "center";
      ctx.fillText(a.ok ? "LOCKED" : "SCANNING", a.x, a.y + 22);
    }
  });

  ctx.globalAlpha = p * Math.min(1, t * 0.15) * 0.5;
  ctx.strokeStyle = "rgba(16,43,77,0.9)";
  ctx.lineWidth = 0.8;
  ctx.strokeRect(W * 0.15, H * 0.2, W * 0.7, H * 0.5);
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.moveTo(W * 0.15 + (i * W * 0.35) / 2, H * 0.2);
    ctx.lineTo(W * 0.15 + (i * W * 0.35) / 2, H * 0.7);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
  ctx.fillStyle = `rgba(34,197,94,${p * 0.8})`;
  ctx.font = "8px JetBrains Mono, monospace";
  ctx.textAlign = "left";
  ctx.fillText("2/3 ANCHORS LOCKED", W * 0.08, H * 0.88);
};

const drawStep4: DrawFn = (ctx, W, H, p, t) => {
  ctx.fillStyle = "rgba(6,12,24,0.85)";
  ctx.fillRect(0, 0, W, H);

  const rY = t * 0.08;
  const co = Math.cos(rY);
  const si = Math.sin(rY);
  const fov = 380;
  function proj(px: number, py: number, pz: number) {
    const rx = px * co - pz * si;
    const rz = px * si + pz * co;
    const d = fov / (fov + rz + 260);
    return { x: W * 0.5 + rx * d * 2, y: H * 0.5 - py * d * 2 + 10 };
  }

  for (let i = -4; i <= 4; i++) {
    const a = proj(i * 28, 0, -112);
    const b = proj(i * 28, 0, 112);
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = `rgba(16,43,77,${p * 0.45})`;
    ctx.lineWidth = 0.5;
    ctx.stroke();

    const c = proj(-112, 0, i * 28);
    const d = proj(112, 0, i * 28);
    ctx.beginPath();
    ctx.moveTo(c.x, c.y);
    ctx.lineTo(d.x, d.y);
    ctx.strokeStyle = `rgba(16,43,77,${p * 0.45})`;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }

  function box(ox: number, oy: number, oz: number, bw: number, bh: number, bd: number, col: string, lw: number) {
    const v = [
      proj(ox - bw / 2, oy, oz - bd / 2),
      proj(ox + bw / 2, oy, oz - bd / 2),
      proj(ox + bw / 2, oy, oz + bd / 2),
      proj(ox - bw / 2, oy, oz + bd / 2),
      proj(ox - bw / 2, oy + bh, oz - bd / 2),
      proj(ox + bw / 2, oy + bh, oz - bd / 2),
      proj(ox + bw / 2, oy + bh, oz + bd / 2),
      proj(ox - bw / 2, oy + bh, oz + bd / 2),
    ];
    const e: Array<[number, number]> = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ];
    e.forEach(([a, b]) => {
      ctx.beginPath();
      ctx.moveTo(v[a].x, v[a].y);
      ctx.lineTo(v[b].x, v[b].y);
      ctx.strokeStyle = col;
      ctx.lineWidth = lw;
      ctx.stroke();
    });
  }

  box(0, 0, 0, 90, 140, 70, `rgba(16,43,77,${p * 0.9})`, 1);
  box(-60, 0, 0, 40, 80, 40, `rgba(16,43,77,${p * 0.65})`, 0.8);
  box(62, 0, 0, 36, 60, 35, `rgba(16,43,77,${p * 0.5})`, 0.7);

  const m = [proj(-40, 45, 0), proj(0, 45, 0), proj(0, 45, 32), proj(40, 45, 32)];
  ctx.beginPath();
  m.forEach((pt, i) => (i === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y)));
  ctx.strokeStyle = `rgba(255,153,51,${p * 0.85})`;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.beginPath();
  m.forEach((pt, i) => (i === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y)));
  ctx.strokeStyle = `rgba(255,153,51,${p * 0.14})`;
  ctx.lineWidth = 7;
  ctx.stroke();

  const sY = Math.sin(t * 0.5) * 50 + 50;
  const sp = [proj(-150, sY, -150), proj(150, sY, -150), proj(150, sY, 150), proj(-150, sY, 150)];
  ctx.beginPath();
  sp.forEach((pt, i) => (i === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y)));
  ctx.closePath();
  ctx.fillStyle = `rgba(29,207,207,${p * 0.03})`;
  ctx.fill();
  ctx.strokeStyle = `rgba(29,207,207,${p * 0.45})`;
  ctx.lineWidth = 0.8;
  ctx.stroke();

  for (let i = 0; i < 30; i++) {
    const ang = (i / 30) * Math.PI * 2 + t * 0.12;
    const r = 30 + (i % 4) * 18;
    const pt = proj(Math.cos(ang) * r, (i % 5) * 24, Math.sin(ang) * r);
    const pulse = 0.15 + 0.55 * Math.sin(t * 1.5 + i * 0.4);
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 1.2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,153,51,${p * pulse})`;
    ctx.fill();
  }
};

const drawStep5: DrawFn = (ctx, W, H, p, t) => {
  ctx.fillStyle = "rgba(6,10,22,0.9)";
  ctx.fillRect(0, 0, W, H);
  const cardX = W * 0.08;
  const cardY = H * 0.08;
  const cardW = W * 0.84;
  const cardH = H * 0.55;

  ctx.fillStyle = `rgba(16,43,77,${p * 0.4})`;
  roundRect(ctx, cardX, cardY, cardW, cardH, 8);
  ctx.fill();
  ctx.strokeStyle = `rgba(255,153,51,${p * 0.3})`;
  ctx.lineWidth = 1;
  roundRect(ctx, cardX, cardY, cardW, cardH, 8);
  ctx.stroke();

  ctx.fillStyle = `rgba(255,153,51,${p * 0.8})`;
  ctx.font = "bold 10px JetBrains Mono, monospace";
  ctx.textAlign = "left";
  ctx.fillText("SITE_REPORT_GF_A.pdf", cardX + 12, cardY + 20);
  ctx.fillStyle = `rgba(255,255,255,${p * 0.3})`;
  ctx.font = "7.5px JetBrains Mono, monospace";
  ctx.fillText("GEO-TAGGED · CLASH COUNT: 2 · ZONE: GF", cardX + 12, cardY + 34);

  const rows = [
    { tag: "CLASH", loc: "COL-B3 / MEP-HVAC", clr: "rgba(255,80,80,0.8)" },
    { tag: "DEVIATION", loc: "WALL-W7 +12mm", clr: "rgba(255,153,51,0.8)" },
    { tag: "OK", loc: "SLAB-GF confirmed", clr: "rgba(34,197,94,0.8)" },
  ];
  rows.forEach((row, i) => {
    const ry = cardY + 52 + i * 36;
    ctx.fillStyle = `rgba(255,255,255,${p * 0.03})`;
    roundRect(ctx, cardX + 10, ry, cardW - 20, 28, 4);
    ctx.fill();
    ctx.fillStyle = row.clr.replace("0.8", String(p * 0.8));
    ctx.font = "8px JetBrains Mono, monospace";
    ctx.fillText(`[${row.tag}]`, cardX + 16, ry + 18);
    ctx.fillStyle = `rgba(255,255,255,${p * 0.5})`;
    ctx.font = "8px Inter, sans-serif";
    ctx.fillText(row.loc, cardX + 80, ry + 18);
  });

  const syncP = 0.5 + 0.45 * Math.sin(t * 1.2);
  const syncs = [
    { lbl: "Procore", p: 1 },
    { lbl: "Autodesk", p: 0.75 },
    { lbl: "Email", p: syncP },
  ];
  syncs.forEach((s, i) => {
    const sy = H * 0.7 + i * (H * 0.09);
    ctx.fillStyle = `rgba(255,255,255,${p * 0.25})`;
    ctx.font = "8px JetBrains Mono, monospace";
    ctx.textAlign = "left";
    ctx.fillText(s.lbl, W * 0.08, sy);
    ctx.fillStyle = "rgba(255,255,255,0.04)";
    roundRect(ctx, W * 0.28, sy - 10, W * 0.55, 8, 3);
    ctx.fill();
    ctx.fillStyle = s.p === 1 ? `rgba(34,197,94,${p * 0.7})` : `rgba(255,153,51,${p * 0.7})`;
    roundRect(ctx, W * 0.28, sy - 10, W * 0.55 * s.p, 8, 3);
    ctx.fill();
    if (s.p === 1) {
      ctx.fillStyle = `rgba(34,197,94,${p * 0.8})`;
      ctx.font = "7px JetBrains Mono, monospace";
      ctx.textAlign = "right";
      ctx.fillText("✓ SYNCED", W * 0.86, sy);
    }
  });
};

export function HowItWorksCanvas({
  activeStep,
  className,
}: {
  activeStep: HowStepId;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);
  const localTRef = useRef(0);

  const steps = useMemo<StepDraw[]>(
    () => [
      { id: 0, draw: drawStep1 },
      { id: 1, draw: drawStep2 },
      { id: 2, draw: drawStep3 },
      { id: 3, draw: drawStep4 },
      { id: 4, draw: drawStep5 },
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

    const draw = () => {
      t += 0.016;
      localTRef.current += 0.016;
      const W = cv.width;
      const H = cv.height;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#050b18";
      ctx.fillRect(0, 0, W, H);

      for (let i = 0; i < W; i += 34) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, H);
        ctx.strokeStyle = "rgba(16,43,77,0.22)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      for (let j = 0; j < H; j += 34) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(W, j);
        ctx.strokeStyle = "rgba(16,43,77,0.22)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      const alpha = clamp01(localTRef.current * 2);
      const fn = steps.find((s) => s.id === activeStep)?.draw ?? drawStep1;
      fn(ctx, W, H, alpha, t);

      const sy = (t * 18) % H;
      const sg = ctx.createLinearGradient(0, sy - 1, 0, sy + 1);
      sg.addColorStop(0, "transparent");
      sg.addColorStop(0.5, "rgba(255,153,51,0.2)");
      sg.addColorStop(1, "transparent");
      ctx.fillStyle = sg;
      ctx.fillRect(0, sy - 1, W, 2);

      raf = window.requestAnimationFrame(draw);
    };

    raf = window.requestAnimationFrame(draw);
    return () => window.cancelAnimationFrame(raf);
  }, [activeStep, steps]);

  useEffect(() => {
    localTRef.current = 0;
  }, [activeStep]);

  return (
    <div ref={hostRef} className={className}>
      <canvas ref={canvasRef} id="ipad2-cv" className="h-full w-full" />
    </div>
  );
}

