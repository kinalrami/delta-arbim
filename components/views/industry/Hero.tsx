"use client";

import { useRouter } from "next/navigation";
import { dualIndustryHero } from "./content";

function StatRow({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-2xl font-extrabold leading-none text-orange-400">{value}</div>
      <div className="mt-1 font-mono text-[9px] font-semibold uppercase text-white/35">
        {label}
      </div>
    </div>
  );
}

function HeroCard({
  variant,
}: {
  variant: "defence" | "construction";
}) {
  const router = useRouter();
  const cfg = variant === "defence" ? dualIndustryHero.defence : dualIndustryHero.construction;
  const isDefence = variant === "defence";
  const primaryBtnClass =
    cfg.ctas[0].variant === "green"
      ? "border-emerald-500/30 bg-emerald-500 text-black hover:opacity-90"
      : "border-orange-400/30 bg-orange-400 text-black hover:opacity-90";

  return (
    <div
      className={[
        "relative overflow-hidden px-6 md:px-10 py-12 sm:py-20 sm:px-12",
        isDefence ? "bg-gradient-to-b from-emerald-900/30 via-black/30 to-black/30" : "bg-black/20",
      ].join(" ")}
    >
      {/* subtle edge vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,153,51,0.10),transparent_60%)]" />

      <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
        <span className={["size-2 rounded-full", isDefence ? "bg-emerald-400" : "bg-orange-400"].join(" ")} aria-hidden />
        {cfg.tag}
      </div>

      <h1 className="mt-6 font-serif text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
        {cfg.titleTop}
        <br />
        <em className="not-italic text-orange-400">{cfg.titleEmphasis}</em>
      </h1>

      <p className="mt-5 max-w-prose text-sm leading-relaxed text-white/60">{cfg.body}</p>

      <blockquote className="mt-7 border-l-4 border-orange-400/80 pl-5">
        <p className="font-serif text-sm italic leading-relaxed text-white/55">
          &ldquo;{cfg.quote}&rdquo;
        </p>
        <cite className="mt-3 block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-orange-400/80 not-italic">
          — {cfg.cite}
        </cite>
      </blockquote>

      <div className="mt-8 grid grid-cols-3 gap-0">
        {cfg.stats.map((s) => (
          <StatRow key={s.label} value={s.value} label={s.label} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => router.push(cfg.ctas[0].href)}
          className={[
            "inline-flex items-center gap-2 border px-6 py-3 font-mono text-xs font-bold uppercase transition-opacity",
            primaryBtnClass,
          ].join(" ")}
        >
          {cfg.ctas[0].label}
          {cfg.ctas[0].showArrow ? <span aria-hidden>→</span> : null}
        </button>
        <button
          type="button"
          onClick={() => router.push(cfg.ctas[1].href)}
          className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-6 py-3 font-mono text-xs font-bold uppercase text-white/70 transition-colors hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-200"
        >
          {cfg.ctas[1].label}
          {cfg.ctas[1].showArrow ? <span aria-hidden>→</span> : null}
        </button>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {cfg.badges.map((b) => (
          <span
            key={b}
            className="inline-flex items-center border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section role="banner" aria-label="Industries" className="w-full">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 overflow-hidden border-y border-white/10 lg:grid-cols-2 lg:divide-x lg:divide-white/10">
          <HeroCard variant="defence" />
          <HeroCard variant="construction" />
        </div>
      </div>
    </section>
  );
}

