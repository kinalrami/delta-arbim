"use client";

import { useRouter } from "next/navigation";
import { HeroCopy } from "./content";
import Link from "next/link";

export function Hero() {
    return (
        <section role="banner" aria-label="Industries" className="w-full">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
                {/* LEFT */}
                <div className="relative z-10 flex flex-col justify-center py-16">
                    <div className="mb-2 font-mono text-xs font-medium text-orange-400">
                        {HeroCopy.eyebrow}
                    </div>
                    <h1 className="mb-4 font-serif md:text-5xl text-2xl font-extrabold leading-tight tracking-tight">
                        Pricing built
                        <br />
                        around <span className="text-orange-400">your project.</span>
                    </h1>
                    <p className="mb-6 max-w-md text-base leading-relaxed text-white/60">
                        {HeroCopy.description}
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
                            TALK TO US
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

