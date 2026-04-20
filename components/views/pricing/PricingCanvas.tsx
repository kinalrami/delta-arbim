"use client";

import { useEffect, useRef, useState } from "react";

// 1. Define the interface for your props
export type IndustryHud = {
    topLeft: string;
    topRight: string;
    bottomLeft: string;
};

interface PricingCanvasProps {
    hud: IndustryHud;
}

// 2. Pass the props to the function
export function PricingCanvas({ hud }: PricingCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [hudText, setHudText] = useState("NO CLASHES");
    const [isClash, setIsClash] = useState(false);

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
            canvas.width = Math.round(rect.width * dpr);
            canvas.height = Math.round(rect.height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const ro = new ResizeObserver(() => resize());
        ro.observe(canvas);
        resize();

        const plans = [
            { x: 0.08, y: 0.12, w: 0.22, h: 0.76, floors: 3, color: 'rgba(100,140,255,0.55)', label: 'FIELD' },
            { x: 0.36, y: 0.06, w: 0.28, h: 0.82, floors: 5, color: 'rgba(255,153,51,0.75)', label: 'PROJECT' },
            { x: 0.70, y: 0.08, w: 0.22, h: 0.80, floors: 7, color: 'rgba(68,220,120,0.55)', label: 'ENTERPRISE' },
        ];

        const loop = () => {
            const W = canvas.clientWidth;
            const H = canvas.clientHeight;
            if (W === 0 || H === 0) {
                raf = requestAnimationFrame(loop);
                return;
            }

            ctx.clearRect(0, 0, W, H);

            /* Background & Grid */
            ctx.fillStyle = '#0b0b09';
            ctx.fillRect(0, 0, W, H);
            ctx.strokeStyle = 'rgba(255,153,51,0.04)';
            ctx.lineWidth = 1;
            const gs = Math.round(W / 9);
            for (let x = 0; x < W; x += gs) {
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
            }
            for (let y = 0; y < H; y += gs) {
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
            }

            /* Buildings Drawing Logic ... (remains the same) */
            plans.forEach((p) => {
                const bx = p.x * W, by = p.y * H, bw = p.w * W, bh = p.h * H;
                const fh = bh / p.floors;
                ctx.strokeStyle = p.color;
                ctx.lineWidth = 1.2;
                ctx.strokeRect(bx, by, bw, bh);
                for (let f = 1; f < p.floors; f++) {
                    ctx.beginPath(); ctx.moveTo(bx, by + f * fh); ctx.lineTo(bx + bw, by + f * fh); ctx.stroke();
                }
                ctx.fillStyle = p.color;
                for (let f = 0; f < p.floors; f++) {
                    for (let col = 0; col < 3; col++) {
                        const wx = bx + bw * (col + 0.5) / 3;
                        const wy = by + f * fh + fh * 0.45;
                        ctx.beginPath(); ctx.arc(wx, wy, 1.5, 0, Math.PI * 2); ctx.fill();
                    }
                }
                const glow = 0.08 + 0.06 * Math.sin(t * 0.04 + (p.x * 10));
                ctx.strokeStyle = p.color.replace(/[\d.]+\)$/, `${glow})`);
                ctx.lineWidth = 3;
                ctx.strokeRect(bx - 3, by - 3, bw + 6, bh + 6);
                ctx.fillStyle = p.color;
                ctx.font = 'bold 9px ui-monospace, monospace';
                ctx.textAlign = 'center';
                ctx.fillText(p.label, bx + bw / 2, by + bh + 16);
            });

            /* LiDAR & Packets ... (remains the same) */
            const sw = (t * 0.010) % 1;
            ctx.strokeStyle = 'rgba(255,153,51,0.38)';
            ctx.beginPath(); ctx.moveTo(0, sw * H); ctx.lineTo(W, sw * H); ctx.stroke();

            /* Clash Logic */
            if (Math.floor(t / 120) % 2 === 0) {
                setHudText('1 CLASH · MEP');
                setIsClash(true);
            } else {
                setHudText('NO CLASHES');
                setIsClash(false);
            }

            t++;
            raf = window.requestAnimationFrame(loop);
        };

        raf = window.requestAnimationFrame(loop);
        return () => {
            ro.disconnect();
            window.cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div className="relative w-full h-full min-h-[220px] overflow-hidden rounded-xl border border-white/10">
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

            {/* HUD Overlay */}
            <div className="pointer-events-none absolute inset-0 p-4">
                {/* Decorative Corners */}
                <div className="absolute left-3 top-3 h-3 w-3 border-l border-t border-orange-400" />
                <div className="absolute right-3 top-3 h-3 w-3 border-r border-t border-orange-400" />
                <div className="absolute left-3 bottom-3 h-3 w-3 border-l border-b border-orange-400" />
                <div className="absolute right-3 bottom-3 h-3 w-3 border-r border-b border-orange-400" />

                {/* Top Left (Using Props) */}
                <div className="absolute left-4 top-3.5">
                    <div className="bg-black/40 backdrop-blur-sm border border-white/10 px-1 py-0.5 font-mono text-[9px] uppercase text-white/70">
                        {hud.topLeft}
                    </div>
                </div>

                {/* Top Right (Using Props) */}
                <div className="absolute right-4 top-3.5">
                    <div className="bg-orange-500 px-1 py-0.5 font-mono text-[9px] font-bold text-black">
                        {hud.topRight}
                    </div>
                </div>

                {/* Bottom Left (Using Props) */}
                <div className="absolute left-4 bottom-3">
                    <div className="font-mono text-[9px] text-white/70">
                        {hud.bottomLeft}
                    </div>
                </div>

                {/* Bottom Right (Dynamic Animation Text) */}
                <div className="absolute bottom-3 right-4">
                    <div className={`font-mono text-[10px] font-bold uppercase transition-colors duration-300 ${isClash ? 'text-red-500' : 'text-white/70'}`}>
                        {hudText}
                    </div>
                </div>
            </div>
        </div>
    );
}