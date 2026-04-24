"use client";

import { useRouter } from "next/navigation";
import { aboutHeroCopy } from "./content";
import Link from "next/link";

export function Hero() {
    return (
        <section role="banner" aria-label="Industries" className="w-full">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
                {/* LEFT */}
                <div className="relative z-10 flex flex-col justify-center py-16">
                    <div className="mb-2 font-mono text-xs font-medium text-orange-400">
                        {aboutHeroCopy.eyebrow}
                    </div>
                    <h1 className="mb-6 font-serif md:text-6xl text-3xl font-extrabold">
                        Digital Construction
                        <br />
                        Born in Ahmedabad.
                        <br /><span className="text-orange-400">Engineered for the world. </span>
                    </h1>
                    <p className="mb-2 max-w-md text-sm leading-relaxed text-white/60">
                        The world's best infrastructure deserves the world's most accessible technology. Delta ARBIM is our answer to a high-precision IFC-based AR BIM platform built in Ahmedabad, Gujarat.
                    </p>
                    <p className="mb-9 max-w-md text-sm leading-relaxed text-white/60">
                        We’ve engineered this solution for every team that builds, defends, or maintains the world's infrastructure, offering top-tier augmented reality construction tools at INR pricing that makes sense for your project budget.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/demo"
                            className="inline-flex items-center justify-center font-bold bg-orange-400 px-7 py-3.5 font-mono text-xs font-bold text-black transition-opacity hover:opacity-90"
                        >
                            BOOK A FREE DEMO →
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center border border-white/25 px-6 py-3.5 font-mono text-xs text-white transition-colors hover:border-orange-400"
                        >
                            GET IN TOUCH
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

