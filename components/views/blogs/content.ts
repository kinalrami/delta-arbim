import type { InsightFilterOption, InsightPost } from "@/lib/insights-types";

export const blogsHeroCopy = {
  eyebrow: "INSIGHTS & TRENDS",
  titleBefore: "Technical Journals from",
  titleEmphasis: "the Engineering Floor",
  desc:
    "How we think about iOS architecture, immersive AR systems, Unity game development, web engineering, and brand as code — written by the team that ships it.",
} as const;

/** Reference date for “NEW” badges (avoid SSR/client clock skew). */
export const INSIGHTS_NOW = new Date("2026-04-02T12:00:00.000Z");

export const HOME_INSIGHT_POSTS: readonly InsightPost[] = [
  {
    id: "POST-001",
    slug: "scaling-complex-web-ecosystems-nextjs-16",
    cat: "STRATEGY",
    catKey: "strategy",
    catStyle: "amber",
    title: "Scaling Complex Web Ecosystems with Next.js 16.",
    date: "2026-04-02",
    dateLabel: "02 APR 2026",
    read: "6 min read",
    publisher: "Shivlam",
    excerpt:
      "Modern web ecosystems demand more than a framework — they demand an architecture. Next.js 16 changes the rules on server components, streaming, and edge-first delivery.",
    code: {
      lines: [
        { type: "kw", text: "export async" },
        { type: "plain", text: " function " },
        { type: "fn", text: "getStaticProps" },
        { type: "plain", text: "() {" },
        { type: "cm", text: "  // SSG — runs at build time" },
        { type: "kw", text: "  const" },
        { type: "plain", text: " data = await fetchEdge()" },
      ],
    },
    color: "#f58a0b",
    svgType: "circuit",
  },
  {
    id: "POST-002",
    slug: "future-onsite-construction-ar-bim-integration",
    cat: "IMMERSIVE",
    catKey: "immersive",
    catStyle: "cyan",
    title: "The Future of On-site Construction: AR & BIM Integration.",
    date: "2026-03-28",
    dateLabel: "28 MAR 2026",
    read: "8 min read",
    publisher: "Shivlam",
    excerpt:
      "Overlaying 4D BIM data onto a live construction site via LiDAR and ARKit is no longer a research paper — it is production software. Here is how we built it.",
    code: {
      lines: [
        { type: "fn", text: "ARSession" },
        { type: "plain", text: ".run(config: " },
        { type: "kw", text: "BIMConfig" },
        { type: "plain", text: "())" },
        { type: "cm", text: "  // LiDAR mesh + BIM overlay" },
        { type: "fn", text: "renderBlueprintLayer" },
        { type: "plain", text: "(mesh)" },
      ],
    },
    color: "#1dcfcf",
    svgType: "blueprint",
  },
  {
    id: "POST-003",
    slug: "why-brand-building-hardest-code-to-crack-2026",
    cat: "IDENTITY",
    catKey: "identity",
    catStyle: "purple",
    title: "Why Brand Building is the Hardest Code to Crack in 2026.",
    date: "2026-03-15",
    dateLabel: "15 MAR 2026",
    read: "5 min read",
    publisher: "Shivlam",
    excerpt:
      "A brand is a distributed system. It has states, transitions, and failure modes just like any codebase. Most agencies debug symptoms; we debug the architecture.",
    code: {
      lines: [
        { type: "kw", text: "interface" },
        { type: "plain", text: " " },
        { type: "fn", text: "BrandSystem" },
        { type: "plain", text: " {" },
        { type: "plain", text: "  identity: " },
        { type: "kw", text: "DesignToken" },
        { type: "plain", text: "[]" },
        { type: "plain", text: "  voice: " },
        { type: "fn", text: "ToneMap" },
      ],
    },
    color: "#aaaaee",
    svgType: "pulse",
  },
];

export const BLOG_INSIGHT_POSTS: readonly InsightPost[] = [
  ...HOME_INSIGHT_POSTS,
  {
    id: "POST-004",
    slug: "swift-concurrency-production-async-await-patterns",
    cat: "ENGINEERING",
    catKey: "engineering",
    catStyle: "green",
    title:
      "Swift Concurrency in Production: async/await Patterns That Actually Work.",
    date: "2026-03-08",
    dateLabel: "08 MAR 2026",
    read: "7 min read",
    publisher: "Shivlam",
    excerpt:
      "Swift actors and structured concurrency are not just syntax sugar — they fundamentally change how you reason about state in iOS apps. Here is what six months in production taught us.",
    code: {
      lines: [
        { type: "kw", text: "actor" },
        { type: "plain", text: " " },
        { type: "fn", text: "DataStore" },
        { type: "plain", text: " {" },
        { type: "cm", text: "  // isolated mutable state" },
        { type: "kw", text: "  func" },
        { type: "plain", text: " " },
        { type: "fn", text: "merge" },
        { type: "plain", text: "(_ patch: Patch) async" },
      ],
    },
    color: "#22c55e",
    svgType: "circuit",
  },
  {
    id: "POST-005",
    slug: "unity-game-architecture-separating-logic-from-presentation",
    cat: "IMMERSIVE",
    catKey: "immersive",
    catStyle: "cyan",
    title:
      "Unity Game Architecture: Separating Logic from Presentation at Scale.",
    date: "2026-03-01",
    dateLabel: "01 MAR 2026",
    read: "9 min read",
    publisher: "Shivlam",
    excerpt:
      "When your Unity game grows past 50k lines, architecture is survival. Command pattern, service locators, and ScriptableObject-driven state — the patterns that kept CosmoStrike maintainable.",
    code: {
      lines: [
        { type: "kw", text: "public class" },
        { type: "plain", text: " " },
        { type: "fn", text: "GameManager" },
        { type: "plain", text: " : " },
        { type: "fn", text: "MonoBehaviour" },
        { type: "plain", text: " {" },
        { type: "cm", text: "  // composition root" },
      ],
    },
    color: "#1dcfcf",
    svgType: "blueprint",
  },
  {
    id: "POST-006",
    slug: "geo-brand-visible-ai-search-engines-2026",
    cat: "STRATEGY",
    catKey: "strategy",
    catStyle: "amber",
    title: "GEO: How to Make Your Brand Visible to AI Search Engines in 2026.",
    date: "2026-02-22",
    dateLabel: "22 FEB 2026",
    read: "6 min read",
    publisher: "Shivlam",
    excerpt:
      "ChatGPT, Gemini, and Perplexity are replacing the first page of Google for millions of queries. GEO is the new SEO — here is the strategic framework we use for every client brand.",
    code: {
      lines: [
        { type: "cm", text: "// Generative Engine Optimization" },
        { type: "kw", text: "const" },
        { type: "plain", text: " " },
        { type: "fn", text: "citations" },
        { type: "plain", text: " = await " },
        { type: "fn", text: "fetchBrandSignals" },
        { type: "plain", text: "()" },
      ],
    },
    color: "#f58a0b",
    svgType: "pulse",
  },
];

export const HOME_INSIGHT_FILTERS: readonly InsightFilterOption[] = [
  { key: "all", label: "[ ALL ]" },
  { key: "strategy", label: "STRATEGY" },
  { key: "immersive", label: "IMMERSIVE" },
  { key: "identity", label: "IDENTITY" },
];

export const BLOG_INSIGHT_FILTERS: readonly InsightFilterOption[] = [
  ...HOME_INSIGHT_FILTERS,
  { key: "engineering", label: "ENGINEERING" },
];

export type BlogPostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; emphasis?: string }
  | { type: "h3"; text: string }
  | { type: "blockquote"; text: string }
  | { type: "callout"; label: string; text: string }
  | { type: "ul"; items: readonly string[] }
  | { type: "hr" };

export type BlogPostDetailContent = {
  lead: string;
  blocks: readonly BlogPostBlock[];
  tags: readonly string[];
  author: {
    name: string;
    role: string;
    bio: string;
    email: string;
  };
};

export function getBlogPostBySlug(slug: string): InsightPost | undefined {
  return BLOG_INSIGHT_POSTS.find((post) => post.slug === slug);
}

const BLOG_POST_DETAIL_BY_SLUG: Record<string, BlogPostDetailContent> = {
  "scaling-complex-web-ecosystems-nextjs-16": {
    lead:
      "Modern web ecosystems demand more than a framework — they demand an architecture. Next.js 16 changes the rules on server components, streaming, and edge-first delivery. Here is how we think about it.",
    blocks: [
      { type: "h2", text: "The Problem with", emphasis: "Framework-First Thinking" },
      {
        type: "p",
        text: "Most teams pick Next.js because it ships fast. They scaffold a project, add some pages, wire up an API route or two, and call it an architecture. It works — until it doesn't. Until the codebase grows to 50k lines, the build starts taking 8 minutes, and server response times creep past 800ms on a good day.",
      },
      {
        type: "p",
        text: "The framework was never the problem. The absence of intentional architecture was. Next.js 16 doesn't just add features — it forces architectural decisions at the framework level, which is both its greatest strength and its steepest learning curve.",
      },
      {
        type: "blockquote",
        text: '"A framework gives you tools. An architecture gives you principles. You need both — and the order matters."',
      },
      { type: "h2", text: "What Actually Changed in", emphasis: "Next.js 16" },
      {
        type: "p",
        text: "Three changes matter more than everything else combined: the new Server Action model, Partial Prerendering (PPR), and the revised caching API. Everything else is evolutionary. These three are architectural.",
      },
      { type: "h3", text: "Partial Prerendering" },
      {
        type: "p",
        text: 'PPR lets you ship a static shell with dynamic holes — a page that sends its skeleton instantly from the edge, then streams in personalised or data-dependent sections as they resolve. The mental model shift is significant: you stop thinking about "static vs dynamic pages" and start thinking about "static vs dynamic regions within a page."',
      },
      {
        type: "callout",
        label: "Architecture Note",
        text: "PPR pairs naturally with React's Suspense boundaries. Every Suspense boundary you define becomes a potential streaming seam. Design your component tree with this in mind from the start — retrofitting it is painful.",
      },
      { type: "h3", text: "The New Caching API" },
      {
        type: "p",
        text: "Next.js 15 introduced caching that confused more teams than it helped. Version 16 makes it explicit. You opt in, you define your cache strategy, and you control revalidation. The defaults are no longer magic — they are documented, predictable, and overridable.",
      },
      { type: "h2", text: "How We Structure", emphasis: "Large Next.js Projects" },
      {
        type: "p",
        text: "After shipping several production Next.js applications — from the GiftCityAdvisor fintech platform to Polaris Academy's US education site — here is the folder structure and architectural pattern that has worked consistently:",
      },
      {
        type: "ul",
        items: [
          "Feature-based folders — not route-based. Each feature owns its components, hooks, and server actions.",
          "Server/client boundary at the leaf — keep server components as deep as possible. Push the client boundary to the smallest interactive leaf.",
          "API routes only for external consumers — internal data fetching lives in server components and server actions, not in API routes.",
          "Explicit cache segments — every data fetch declares its cache strategy. No implicit caching anywhere.",
          "Edge middleware for auth only — not for data transformation. Middleware runs on every request; keep it surgical.",
        ],
      },
      { type: "hr" },
      {
        type: "p",
        text: "If you're building a serious Next.js system in 2026, treat Next as a runtime — not a framework. The moment you do, your decisions get clearer, your boundaries get cleaner, and your performance gets predictable.",
      },
    ],
    tags: [
      "Delta ARBIM",
      "Insights",
      "Next.js",
      "Web Architecture",
      "React",
      "Edge Runtime",
      "Server Components",
      "Strategy",
    ],
    author: {
      name: "Shivlam",
      role: "Engineering · Ahmedabad, India",
      bio: "iOS apps, Unity games, web systems, and brand strategy — shipped for clients across 5+ countries.",
      email: "hi@shivlam.com",
    },
  },
};

export function getBlogPostDetailBySlug(slug: string): BlogPostDetailContent {
  return (
    BLOG_POST_DETAIL_BY_SLUG[slug] ?? {
      lead: getBlogPostBySlug(slug)?.excerpt ?? "Journal detail coming soon.",
      blocks: [{ type: "p", text: getBlogPostBySlug(slug)?.excerpt ?? "Coming soon." }],
      tags: ["Delta ARBIM", "Insights"],
      author: {
        name: getBlogPostBySlug(slug)?.publisher ?? "Delta ARBIM",
        role: "Engineering · Ahmedabad, India",
        bio: "More journals coming soon.",
        email: "hi@shivlam.com",
      },
    }
  );
}
