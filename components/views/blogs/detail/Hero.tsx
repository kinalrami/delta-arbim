import Link from "next/link";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import { AlignJustify, CalendarDays, Clock3, User } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import type { InsightPost } from "@/lib/insights-types";

type DetailMetaItem = {
  label: string;
  value: string;
  icon: LucideIcon;
};

function catBadgeStyle(catStyle: "amber" | "cyan" | "purple" | "green"): CSSProperties {
  const map: Record<"amber" | "cyan" | "purple" | "green", CSSProperties> = {
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

export function Hero({ post, isNew }: { post: InsightPost; isNew: boolean }) {
  const detailMeta: readonly DetailMetaItem[] = [
    { label: "Published", value: post.dateLabel, icon: CalendarDays },
    { label: "Reading Time", value: post.read, icon: Clock3 },
    { label: "Publisher", value: post.publisher, icon: User },
    { label: "Category", value: post.cat, icon: AlignJustify },
  ];

  return (
    <section aria-labelledby="blog-detail-h2" className="relative mx-auto w-full max-w-6xl overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,153,51,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <nav className="mb-6 font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
            <Link href="/" className="transition-colors hover:text-orange-200">
              Home
            </Link>
            <span className="px-2 text-white/25">/</span>
            <Link href="/blogs" className="transition-colors hover:text-orange-200">
              Insights
            </Link>
            <span className="px-2 text-white/25">/</span>
            <span className="text-orange-400">{post.id}</span>
          </nav>
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeading
              id="blog-detail-h2"
              eyebrow={
                <span className="inline-flex items-center justify-center gap-2">
                  <span
                    className="inline-flex rounded border px-2 py-0.5"
                    style={catBadgeStyle(post.catStyle)}
                  >
                    {post.cat}
                  </span>
                  {isNew ? (
                    <span className="inline-flex items-center gap-1 rounded border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 text-[9px] text-emerald-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      NEW
                    </span>
                  ) : null}
                </span>
              }
              title={post.title}
              desc={<p>{post.excerpt}</p>}
              eyebrowClassName="mb-4 inline-flex font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
              titleClassName="font-serif text-3xl font-bold leading-tight text-white sm:text-5xl"
              descWrapClassName="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-white/60 sm:text-base"
            />
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl overflow-hidden rounded border border-white/12 bg-white/[0.03] text-left sm:grid-cols-2 lg:grid-cols-4">
            {detailMeta.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3.5 border-b border-white/10 p-4 last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:[&:nth-child(2n)]:border-r lg:last:border-r-0"
              >
                <item.icon className="h-3.5 w-3.5 text-white/50" strokeWidth={1.8} aria-hidden />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                    {item.label}
                  </p>
                  <p className="font-mono text-[13px] font-semibold text-white/90">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
