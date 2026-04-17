"use client";

import Link from "next/link";

import type { PricingTeaserCard } from "@/components/home/content";
import { pricingTeaserCards } from "@/components/home/content";
import { SectionHeading } from "../shared/SectionHeading";

function PricingCardView({ c }: { c: PricingTeaserCard }) {
  const featured = Boolean(c.featured);
  return (
    <div
      className={[
        "flex h-full flex-col bg-zinc-900/40 p-8",
        featured ? "relative bg-white/[0.03]" : "",
      ].join(" ")}
    >
      {featured ? <div className="absolute inset-x-0 top-0 h-0.5 bg-orange-400" /> : null}
      <div className="font-mono text-xs font-semibold tracking-widest text-orange-400/80 uppercase">
        {c.tier}
      </div>
      <div className="mt-2 font-serif text-2xl font-extrabold text-white">{c.name}</div>
      <p className="mt-2 text-sm leading-relaxed text-white/55">{c.desc}</p>

      <div className="mt-5 font-serif text-3xl font-extrabold text-orange-300">
        {c.price}
      </div>
      <div className="mt-2 font-mono text-xs tracking-widest text-white/40 uppercase">
        {c.note}
      </div>

      <div className="mt-8">
        <Link
          href={c.ctaHref}
          className={[
            "inline-flex w-full items-center justify-center border px-5 py-3 font-mono text-xs font-bold uppercase transition-colors",
            featured
              ? "border-orange-400 bg-orange-400 text-black hover:opacity-90"
              : "border-white/15 bg-black/10 text-white/80 hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-200",
          ].join(" ")}
        >
          {c.ctaLabel}
        </Link>
      </div>
    </div>
  );
}

export function PricingTeaserSection() {
  return (
    <section id="pricing" aria-labelledby="pt-h2" className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          id="pt-h2"
          eyebrow="Pricing"
          title={
            <>
              Pricing built around <em className="not-italic text-orange-400">your project.</em>
            </>
          }
          titleClassName="max-w-5xl font-serif text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
          desc={
            <>
              No rigid tiers. Custom plans for every team size. 14-day free trial — no credit card. ₹ INR billing
              available for Indian teams.
            </>
          }
          descWrapClassName="mt-2 max-w-3xl text-base leading-relaxed text-white/60"
        />

        {/* Early access bar */}
        <div className="mt-6 grid grid-cols-1 overflow-hidden border border-orange-400/20 bg-orange-400/10 md:grid-cols-[1fr_auto]">
          <div className="px-6 py-4 text-sm text-orange-200/80">
            <strong className="text-orange-200">Early access partners get 30% off</strong>{" "}
            Professional &amp; Enterprise at launch.
          </div>
          <div className="border-t border-orange-400/20 md:border-t-0 md:border-l md:border-orange-400/20">
            <Link
              href="/demo"
              className="inline-flex h-full w-full items-center justify-center bg-orange-400 px-6 py-4 font-mono text-xs font-bold uppercase text-black transition-opacity hover:opacity-90"
            >
              Claim Early Access →
            </Link>
          </div>
        </div>

        {/* Cards (single bordered row with dividers) */}
        <div className="mt-10 overflow-hidden border border-white/10 bg-black/10">
          <div className="grid grid-cols-1 divide-y divide-white/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {pricingTeaserCards.map((c) => (
              <PricingCardView key={c.name} c={c} />
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-white/55">
          All plans include a <strong className="text-white">14-day free trial</strong> with your actual IFC model.{" "}
          <span className="text-white/35">·</span>{" "}
          <Link href="/pricing" className="text-orange-400 hover:text-orange-300 underline-offset-4 hover:underline">
            See full pricing details →
          </Link>
        </p>
      </div>
    </section>
  );
}

