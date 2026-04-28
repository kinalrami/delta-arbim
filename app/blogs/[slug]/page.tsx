import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/views/blogs/detail/Hero";
import { PostLayoutSection } from "@/components/views/blogs/detail/PostLayoutSection";
import { MoreFromInsightsSection } from "@/components/views/blogs/detail/MoreFromInsightsSection";

import {
  BLOG_INSIGHT_POSTS,
  INSIGHTS_NOW,
  getBlogPostDetailBySlug,
  getBlogPostBySlug,
} from "@/components/views/blogs/content";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_INSIGHT_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found | Delta ARBIM",
    };
  }

  return {
    title: `${post.title} | Delta ARBIM Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const diffDays = Math.floor(
    (INSIGHTS_NOW.getTime() - new Date(post.date).getTime()) / 86400000,
  );
  const isNew = diffDays <= 2;
  const detail = getBlogPostDetailBySlug(slug);

  return (
    <main className="w-full bg-[#0d0d0d] text-white">
      <Hero post={post} isNew={isNew} />
      <PostLayoutSection post={post} detail={detail} />
      <MoreFromInsightsSection currentSlug={slug} />
    </main>
  );
}
