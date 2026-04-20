"use client";

import { useEffect, useRef } from "react";

export function GlobeCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    const host = hostRef.current;
    if (!cv || !host) return;

    const context = cv.getContext("2d");
    if (!context) return;

    let raf = 0;
    let t = 0;

    // Define resize AFTER the guard clause
    function resize() {
      const rect = host!.getBoundingClientRect(); // use ! as we checked it above
      const dpr = window.devicePixelRatio || 1;
      cv!.width = rect.width * dpr;
      cv!.height = rect.height * dpr;

      // Now context is guaranteed to be CanvasRenderingContext2D here
      context!.scale(dpr, dpr);

      cv!.style.width = `${rect.width}px`;
      cv!.style.height = `${rect.height}px`;
    }

    const nodes = [
      { x: 0.72, y: 0.45, lbl: "Ahmedabad", hq: true }, // Adjusted Y slightly for h-80
      { x: 0.25, y: 0.30, lbl: "New York", hq: false },
      { x: 0.50, y: 0.25, lbl: "London", hq: false },
      { x: 0.82, y: 0.32, lbl: "Singapore", hq: false },
      { x: 0.78, y: 0.38, lbl: "UAE", hq: false },
      { x: 0.15, y: 0.40, lbl: "Toronto", hq: false },
      { x: 0.90, y: 0.35, lbl: "Tokyo", hq: false },
    ];

    const connections = [1, 2, 3, 4, 5];

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      t += 1;
      const W = cv.width / (window.devicePixelRatio || 1);
      const H = cv.height / (window.devicePixelRatio || 1);

      context.clearRect(0, 0, W, H);
      context.fillStyle = "#090909";
      context.fillRect(0, 0, W, H);

      // Grid
      context.strokeStyle = "rgba(255,153,51,0.04)";
      context.lineWidth = 1;
      for (let x = 0; x < W; x += W / 12) {
        context.beginPath(); context.moveTo(x, 0); context.lineTo(x, H); context.stroke();
      }

      const hq = nodes[0];
      const animProgress = (t * 0.006) % 1;

      // Draw Connections
      connections.forEach((ni, i) => {
        const n = nodes[ni];
        const delay = i / connections.length;
        const ap = (animProgress - delay + 1) % 1;

        context.strokeStyle = "rgba(255,153,51,0.1)";
        context.beginPath(); context.moveTo(hq.x * W, hq.y * H); context.lineTo(n.x * W, n.y * H); context.stroke();

        const px = hq.x * W + (n.x - hq.x) * W * ap;
        const py = hq.y * H + (n.y - hq.y) * H * ap;
        context.fillStyle = `rgba(255,153,51,${Math.sin(ap * Math.PI)})`;
        context.beginPath(); context.arc(px, py, 1.5, 0, Math.PI * 2); context.fill();
      });

      // Draw Nodes & Labels
      nodes.forEach((n, i) => {
        const nx = n.x * W;
        const ny = n.y * H;

        if (n.hq) {
          const pulse = Math.sin(t * 0.05);
          context.fillStyle = "#ff9933";
          context.beginPath(); context.arc(nx, ny, 3, 0, Math.PI * 2); context.fill();
          context.strokeStyle = `rgba(255,153,51,${0.3 + pulse * 0.2})`;
          context.beginPath(); context.arc(nx, ny, 8 + pulse * 3, 0, Math.PI * 2); context.stroke();

          // HQ Label
          context.fillStyle = "#ff9933";
          context.font = "10px monospace";
          context.textAlign = "center";
          context.fillText("Ahmedabad", nx, ny - 15);
          context.font = "7px monospace";
          context.fillText("HQ", nx, ny + 12);
        } else {
          context.fillStyle = "rgba(255,153,51,0.5)";
          context.beginPath(); context.arc(nx, ny, 1.5, 0, Math.PI * 2); context.fill();

          // City Labels (matching your 2nd SS)
          const labelsToShow = ["New York", "London", "Singapore", "UAE"];
          if (labelsToShow.includes(n.lbl)) {
            context.fillStyle = "rgba(255, 255, 255, 0.4)";
            context.font = "9px monospace";
            context.textAlign = "left";
            context.fillText(n.lbl, nx + 6, ny - 4);
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