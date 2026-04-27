import type { Metadata } from "next";

import { Hero } from "@/components/views/blogs/Hero";
import { InsightsTrendsSection } from "@/components/shared/InsightsTrendsSection";
import {
  BLOG_INSIGHT_FILTERS,
  BLOG_INSIGHT_POSTS,
  INSIGHTS_NOW,
} from "@/components/views/blogs/content";

export const metadata: Metadata = {
  title: "Blogs | Delta ARBIM",
  description:
    "Technical journals on iOS architecture, immersive AR systems, Unity, web engineering, and brand as code — written by the Delta ARBIM engineering team.",
};

export default function BlogsPage() {
  return (
    <main className="w-full">
      <Hero />

      <InsightsTrendsSection
        posts={BLOG_INSIGHT_POSTS}
        filterOptions={BLOG_INSIGHT_FILTERS}
        sectionId="blog-journals"
        showCodePreview={false}
        insightsNow={INSIGHTS_NOW}
        showLoadMore
      />
    </main>
  );
}

