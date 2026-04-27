"use client";

import Image from "next/image";
import { Fragment, useEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { insightThumbSrc } from "@/lib/illustration-src";
import type { CodeLine, InsightCatStyle, InsightFilterCat, InsightFilterOption, InsightPost } from "@/lib/insights-types";
// import { FilterRailSeparator } from "@/components/shared/section-chrome";

export type { InsightPost, InsightFilterOption } from "@/lib/insights-types";

function codeLinesToHtml(lines: readonly CodeLine[]): string {
  return (
    lines
      .map((l) => {
        if (l.type === "kw") return `<span class="ins-code-kw">${l.text}</span>`;
        if (l.type === "fn") return `<span class="ins-code-fn">${l.text}</span>`;
        if (l.type === "cm") return `<br><span class="ins-code-cm">${l.text}</span>`;
        return l.text;
      })
      .join("") + "<br>"
  );
}

function catBadgeStyle(catStyle: InsightCatStyle): CSSProperties {
  const map: Record<InsightCatStyle, CSSProperties> = {
    amber: {
      borderColor: "rgb(245 138 11 / 0.35)",
      color: "rgb(245 138 11 / 0.95)",
      background: "rgb(6 8 16 / 0.72)",
    },
    cyan: {
      borderColor: "rgb(29 207 207 / 0.35)",
      color: "rgb(29 207 207 / 0.95)",
      background: "rgb(6 8 16 / 0.72)",
    },
    purple: {
      borderColor: "rgb(170 170 255 / 0.35)",
      color: "rgb(170 170 255 / 0.95)",
      background: "rgb(6 8 16 / 0.72)",
    },
    green: {
      borderColor: "rgb(34 197 94 / 0.35)",
      color: "rgb(34 197 94 / 0.95)",
      background: "rgb(6 8 16 / 0.72)",
    },
  };
  return map[catStyle];
}

export type InsightsTrendsSectionProps = {
  posts: readonly InsightPost[];
  filterOptions: readonly InsightFilterOption[];
  sectionId?: string;
  showCodePreview?: boolean;
  insightsNow?: Date;
  showLoadMore?: boolean;
};

export function InsightsTrendsSection({
  posts,
  filterOptions,
  sectionId = "insights-trends",
  showCodePreview = true,
  insightsNow = new Date(),
  showLoadMore = false,
}: InsightsTrendsSectionProps) {
  const [filter, setFilter] = useState<InsightFilterCat>("all");
  const [loadMoreDone, setLoadMoreDone] = useState(false);
  const reduceMotion = usePrefersReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);

  const sorted = useMemo(
    () =>
      [...posts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    [posts],
  );

  const filtered = useMemo(() => {
    if (filter === "all") return sorted;
    return sorted.filter((p) => p.catKey === filter);
  }, [sorted, filter]);

  useEffect(() => {
    const root = gridRef.current;
    if (!root) return;
    const cards = root.querySelectorAll<HTMLElement>("[data-ins-card]");
    cards.forEach((el) => el.classList.remove("ins-card-revealed"));

    if (reduceMotion) {
      cards.forEach((el) => el.classList.add("ins-card-revealed"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const idx = Number.parseInt(el.dataset.idx ?? "0", 10);
          window.setTimeout(() => el.classList.add("ins-card-revealed"), idx * 140);
          obs.unobserve(el);
        });
      },
      { threshold: 0.12 },
    );

    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, [filtered, reduceMotion]);

  const countLabel = `${filtered.length} JOURNAL${filtered.length !== 1 ? "S" : ""} LOADED`;

  const onCardKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") e.preventDefault();
  };

  const totalForIndex = filtered.length;

  return (
    <section
      id={sectionId}
      aria-label="Technical journals"
      className="relative scroll-mt-24 pb-12 md:pb-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative w-full">
          <div className="mb-8 flex flex-wrap items-center gap-2.5 font-mono">
            {filterOptions.map(({ key, label }, idx) => (
              <Fragment key={key}>
                {/* {idx === 1 ? <FilterRailSeparator /> : null} */}
                <button
                  type="button"
                  className={
                    filter === key
                      ? "relative cursor-pointer overflow-hidden rounded border border-orange-400/60 bg-orange-400/10 px-4 py-2 text-xs uppercase tracking-widest text-orange-200 shadow-[0_0_0_2px_rgba(251,146,60,0.12)] transition-[color,box-shadow,border-color,background-color] duration-300 ease-out"
                      : "relative cursor-pointer overflow-hidden rounded border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-white/45 transition-[color,border-color,background-color] duration-300 ease-out hover:border-white/20 hover:text-white/70 hover:bg-white/7"
                  }
                  onClick={() => setFilter(key)}
                >
                  {label}
                </button>
              </Fragment>
            ))}
            <span className="ml-auto text-xs uppercase tracking-wider text-white/35">
              {countLabel}
            </span>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => {
              const diffDays = Math.floor(
                (insightsNow.getTime() - new Date(p.date).getTime()) / 86400000,
              );
              const isNew = diffDays <= 2;
              const codeHtml = showCodePreview ? codeLinesToHtml(p.code.lines) : "";
              const thumbSrc = insightThumbSrc(p.svgType, p.color);

              return (
                <div
                  key={p.id}
                  data-ins-card
                  data-idx={i}
                  role="button"
                  tabIndex={0}
                  onKeyDown={onCardKeyDown}
                  className="ins-card group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-none backdrop-blur-2xl transition-[transform,border-color,opacity] duration-200 hover:-translate-y-1.5 hover:border-white/20 motion-reduce:hover:translate-y-0"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image src={thumbSrc} alt="" fill unoptimized sizes="100vw" className="object-cover" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]">
                      <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
                    </div>

                    <div className="absolute left-4 top-4 inline-flex items-center gap-2">
                      <span
                        className="rounded border px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest"
                        style={catBadgeStyle(p.catStyle)}
                      >
                        {p.cat}
                      </span>
                      {isNew ? (
                        <span className="inline-flex items-center gap-2 rounded border border-orange-400/40 bg-orange-400/10 px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest text-orange-200">
                          <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
                          NEW
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-widest text-white/35">
                      <span className={isNew ? "text-orange-200/80" : undefined}>
                        {p.dateLabel}
                      </span>
                      <span className="opacity-60">•</span>
                      <span>{p.read}</span>
                      <span className="opacity-60">•</span>
                      <span className="text-white/25">{p.id}</span>
                    </div>

                    <div className="mt-3 font-serif text-lg font-extrabold leading-snug text-white">
                      {p.title}
                    </div>

                    {showCodePreview ? (
                      <div
                        className="mt-3 text-[11px] leading-snug text-white/35"
                        dangerouslySetInnerHTML={{ __html: codeHtml }}
                      />
                    ) : null}

                    <div className="mt-3 text-sm leading-relaxed text-white/55">
                      {p.excerpt}
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/60 group-hover:text-orange-200 transition-colors">
                        Read Journal
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
                        [ {String(i + 1).padStart(2, "0")} /{" "}
                        {String(totalForIndex).padStart(2, "0")} ]
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {showLoadMore ? (
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <button
                type="button"
                disabled={loadMoreDone}
                onClick={() => setLoadMoreDone(true)}
                className="rounded-sm border border-white/20 bg-transparent px-7 py-3 font-mono text-[10px] tracking-[0.18em] text-white/50 uppercase transition-colors hover:border-orange-400/60 hover:text-orange-200 disabled:cursor-default disabled:opacity-40"
              >
                {loadMoreDone ? "All Journals Loaded" : "Load More Journals"}
              </button>
              <span className="font-mono text-[9px] tracking-[0.14em] text-white/25 uppercase">
                Showing {posts.length} of {posts.length} · More coming soon
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

