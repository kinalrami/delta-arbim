import { InsightsTrendsSection } from "@/components/shared/InsightsTrendsSection";
import {
  BLOG_INSIGHT_FILTERS,
  BLOG_INSIGHT_POSTS,
  INSIGHTS_NOW,
} from "@/components/views/blogs/content";

export function MoreFromInsightsSection({ currentSlug }: { currentSlug: string }) {
  const morePosts = BLOG_INSIGHT_POSTS.filter((p) => p.slug !== currentSlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  if (morePosts.length === 0) return null;

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 pt-12 sm:px-6 sm:pt-16">
        <div className="mb-6">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-orange-400/80">
            Continue Reading
          </div>
          <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            More from <span className="text-orange-400">Insights &amp; Trends</span>
          </h2>
        </div>
      </div>

      <InsightsTrendsSection
        posts={morePosts}
        filterOptions={BLOG_INSIGHT_FILTERS}
        showFilters={false}
        showCodePreview={false}
        insightsNow={INSIGHTS_NOW}
        postHrefBase="/blogs"
        sectionId="more-from-insights"
      />
    </section>
  );
}

