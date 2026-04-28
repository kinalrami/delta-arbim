"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { MoveRight, Copy, Linkedin, Share2 } from "lucide-react";

import { CtaPill } from "@/components/shared/CtaPill";
import type { InsightPost } from "@/lib/insights-types";
import type { BlogPostBlock, BlogPostDetailContent } from "@/components/views/blogs/content";

function BlockRenderer({ block }: { block: BlogPostBlock }) {
  if (block.type === "h2") {
    return (
      <h2 className="pt-5 font-serif text-3xl font-bold leading-tight text-white">
        {block.text}{" "}
        {block.emphasis ? (
          <em className="not-italic text-orange-400">{block.emphasis}</em>
        ) : null}
      </h2>
    );
  }
  if (block.type === "h3") {
    return <h3 className="pt-3 font-serif text-2xl font-semibold text-white">{block.text}</h3>;
  }
  if (block.type === "blockquote") {
    return (
      <blockquote className="mt-5 border-l-4 border-orange-400 pl-5">
        <p className="font-serif text-[10px] italic leading-relaxed text-orange-400 sm:text-lg">
          {block.text}
        </p>
      </blockquote>
    );
  }
  if (block.type === "callout") {
    return (
      <div className="rounded-lg border border-white/10 bg-[#1A1A1A] p-4 mt-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-orange-400/80">
          {block.label}
        </div>
        <p className="mt-1 text-sm leading-7 text-white/45">{block.text}</p>
      </div>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="space-y-1 pt-1">
        {block.items.map((item) => (
          <li key={item} className="flex gap-2 border-b border-white/10 last:border-b-0 py-2">
            <MoveRight
              className="mt-[5px] h-3 w-3 shrink-0 text-orange-400"
              strokeWidth={2}
              aria-hidden
            />
            <p className="min-w-0 leading-relaxed">{item}</p>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "hr") {
    return <hr className="my-2 border-white/10" />;
  }
  return <p>{block.text}</p>;
}

export function PostLayoutSection({
  post,
  detail,
}: {
  post: InsightPost;
  detail: BlogPostDetailContent;
}) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const encodedUrl = useMemo(() => encodeURIComponent(currentUrl), [currentUrl]);
  const encodedText = useMemo(
    () => encodeURIComponent(`${post.title} by @shivlam`),
    [post.title],
  );

  const onCopy = async () => {
    if (!currentUrl) return;
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="w-full bg-[#1A1A1A]">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16 lg:py-20">
        <article>
          <p className="border-b border-white/10 pb-8 font-serif text-lg leading-relaxed text-white/80">
            {detail.lead}
          </p>

          <div className="mt-4 space-y-2 text-[15px] leading-8 text-white/70">
            {detail.blocks.map((block, idx) => (
              <BlockRenderer key={`${block.type}-${idx}`} block={block} />
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-6">
            {detail.tags.map((tag) => (
              <CtaPill
                key={tag}
                variant="gray"
                className="px-3 py-1 text-[10px] tracking-[0.1em] text-white/55"
              >
                {tag}
              </CtaPill>
            ))}
          </div>
        </article>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-white/10 bg-[#1A1A1A] p-5">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-orange-400/40 bg-orange-400/10 font-serif text-lg font-bold text-orange-300">
              {detail.author.name.slice(0, 1).toUpperCase()}
            </div>
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">Written By</p>
            <p className="mt-1 font-serif text-lg font-bold text-white">{detail.author.name}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-orange-400/70">
              {detail.author.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/45">{detail.author.bio}</p>
            <div className="my-3 h-px bg-white/10" />
            <Link
              href={`mailto:${detail.author.email}`}
              className="font-mono flex items-center gap-2 text-[10px] uppercase tracking-[0.1em] text-orange-400/80 hover:text-orange-200"
            >
              {detail.author.email} <MoveRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#1A1A1A] p-5">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
              Share This Journal
            </p>
            <div className="space-y-2">
              <button
                type="button"
                onClick={onCopy}
                className="flex w-full items-center gap-2 rounded border border-white/15 px-3 py-2 text-left font-mono text-[10px] uppercase tracking-[0.1em] text-white/60 transition-colors hover:border-orange-400/60 hover:text-orange-200"
              >
                <Copy className="h-3.5 w-3.5" />
                {copied ? "Copied" : "Copy Link"}
              </button>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center gap-2 rounded border border-white/15 px-3 py-2 text-left font-mono text-[10px] uppercase tracking-[0.1em] text-white/60 transition-colors hover:border-orange-400/60 hover:text-orange-200"
              >
                <Share2 className="h-3.5 w-3.5" />
                Share on X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center gap-2 rounded border border-white/15 px-3 py-2 text-left font-mono text-[10px] uppercase tracking-[0.1em] text-white/60 transition-colors hover:border-orange-400/60 hover:text-orange-200"
              >
                <Linkedin className="h-3.5 w-3.5" />
                Share on LinkedIn
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
