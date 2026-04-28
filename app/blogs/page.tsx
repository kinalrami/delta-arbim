import type { Metadata } from "next";

import { Hero } from "@/components/views/blogs/Hero";
import { InsightsTrendsSection } from "@/components/shared/InsightsTrendsSection";
import {
  BLOG_INSIGHT_FILTERS,
  BLOG_INSIGHT_POSTS,
  INSIGHTS_NOW,
} from "@/components/views/blogs/content";

export const metadata: Metadata = {
  title: "BIM Insights & AR Field Trends | Delta ARBIM Technical Blog",
  description:
    "Explore expert journals on ±2cm AR precision, IFC coordination, and Next.js engineering. Learn how Delta ARBIM eliminates site rework and bridge the office-field gap.",
};

export default function BlogsPage() {
  return (
    <main className="w-full">
      <Hero />
      <InsightsTrendsSection
        posts={BLOG_INSIGHT_POSTS}
        filterOptions={BLOG_INSIGHT_FILTERS}
        postHrefBase="/blogs"
        sectionId="blog-journals"
        showCodePreview={false}
        insightsNow={INSIGHTS_NOW}
        showLoadMore
      />
    </main>
  );
}

