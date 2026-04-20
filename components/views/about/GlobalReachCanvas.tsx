"use client";

import { useEffect, useRef } from "react";

export function GlobeCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    const host = hostRef.current;
    if (!cv || !host) return;

    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;

    const nodes = [
      { x: 0.72, y: 0.45, lbl: "Ahmedabad", hq: true }, // Adjusted Y slightly for h-80
      { x: 0.25, y: 0.30, lbl: "New York", hq: false },
      { x: 0.50, y: 0.25, lbl: "London", hq: false },
      { x: 0.82, y: 0.32, lbl: "Singapore", hq: false },
      { x: 0.78, y: 0.38, lbl: "UAE", hq: false },
      // ... other nodes (kept for connections)
      { x: 0.15, y: 0.40, lbl: "Toronto", hq: false },
      { x: 0.90, y: 0.35, lbl: "Tokyo", hq: false },
    ];

    const connections = [1, 2, 3, 4, 5];

    function resize() {
      if (!host || !cv) return;
      const rect = host.getBoundingClientRect();
      // Important: Use devicePixelRatio for sharp labels on high-res screens
      const dpr = window.devicePixelRatio || 1;
      cv.width = rect.width * dpr;
      cv.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      cv.style.width = `${rect.width}px`;
      cv.style.height = `${rect.height}px`;
    }

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      t += 1;
      const W = cv.width / (window.devicePixelRatio || 1);
      const H = cv.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#090909";
      ctx.fillRect(0, 0, W, H);

      // Grid
      ctx.strokeStyle = "rgba(255,153,51,0.04)";
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += W / 12) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }

      const hq = nodes[0];
      const animProgress = (t * 0.006) % 1;

      // Draw Connections
      connections.forEach((ni, i) => {
        const n = nodes[ni];
        const delay = i / connections.length;
        const ap = (animProgress - delay + 1) % 1;

        ctx.strokeStyle = "rgba(255,153,51,0.1)";
        ctx.beginPath(); ctx.moveTo(hq.x * W, hq.y * H); ctx.lineTo(n.x * W, n.y * H); ctx.stroke();

        const px = hq.x * W + (n.x - hq.x) * W * ap;
        const py = hq.y * H + (n.y - hq.y) * H * ap;
        ctx.fillStyle = `rgba(255,153,51,${Math.sin(ap * Math.PI)})`;
        ctx.beginPath(); ctx.arc(px, py, 1.5, 0, Math.PI * 2); ctx.fill();
      });

      // Draw Nodes & Labels
      nodes.forEach((n, i) => {
        const nx = n.x * W;
        const ny = n.y * H;

        if (n.hq) {
          const pulse = Math.sin(t * 0.05);
          ctx.fillStyle = "#ff9933";
          ctx.beginPath(); ctx.arc(nx, ny, 3, 0, Math.PI * 2); ctx.fill();
          ctx.strokeStyle = `rgba(255,153,51,${0.3 + pulse * 0.2})`;
          ctx.beginPath(); ctx.arc(nx, ny, 8 + pulse * 3, 0, Math.PI * 2); ctx.stroke();

          // HQ Label
          ctx.fillStyle = "#ff9933";
          ctx.font = "10px monospace";
          ctx.textAlign = "center";
          ctx.fillText("Ahmedabad", nx, ny - 15);
          ctx.font = "7px monospace";
          ctx.fillText("HQ", nx, ny + 12);
        } else {
          ctx.fillStyle = "rgba(255,153,51,0.5)";
          ctx.beginPath(); ctx.arc(nx, ny, 1.5, 0, Math.PI * 2); ctx.fill();

          // City Labels (matching your 2nd SS)
          const labelsToShow = ["New York", "London", "Singapore", "UAE"];
          if (labelsToShow.includes(n.lbl)) {
            ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
            ctx.font = "9px monospace";
            ctx.textAlign = "left";
            ctx.fillText(n.lbl, nx + 6, ny - 4);
          }
        }
      });

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={hostRef} className={`w-full h-full ${className}`}>
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}