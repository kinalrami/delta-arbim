import type { PrivacyPolicyBlock } from "./content";
import { privacyPolicy } from "./content";
import Link from "next/link";
import { Calendar, Handshake, Lock, Plane } from "lucide-react";

function Callout({
  title,
  body,
}: {
  title?: string;
  body: string;
}) {
  const bodyNode = body.split("build@deltaarbim.tech").map((part, j, arr) => {
    if (j === arr.length - 1) return part;
    return (
      <span key={j}>
        {part}
        <a href="mailto:build@deltaarbim.tech" className="text-orange-300 hover:text-orange-200">
          build@deltaarbim.tech
        </a>
      </span>
    );
  });

  return (
    <blockquote className="border border-orange-400/30 bg-orange-400/10 p-4 text-white/70">
      {title ? (
        <div className="mb-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-orange-300">
          {title}
        </div>
      ) : null}
      <p className="text-[13px] leading-relaxed text-white/65">{bodyNode}</p>
    </blockquote>
  );
}

function PartnershipIcon({ icon }: { icon: "lock" | "mou" | "annual" | "visits" }) {
  if (icon === "lock") return <Lock className="size-4 text-orange-400" aria-hidden />;
  if (icon === "mou") return <Handshake className="size-4 text-orange-400" aria-hidden />;
  if (icon === "annual") return <Calendar className="size-4 text-orange-400" aria-hidden />;
  return <Plane className="size-4 text-orange-400" aria-hidden />;
}

export function Policy() {
  const p = privacyPolicy;

  return (
    <section aria-label="Privacy policy details" className="w-full bg-[#1A1A1A]">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 py-16">
        <blockquote className="border-l-4 border-orange-400/80 pl-5">
          <cite className=" block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-orange-400/80 not-italic">
            {p.titlePrefix}
          </cite>
          <p className="font-serif text-sm italic leading-relaxed text-white/55">
            &ldquo;{p.intro}&rdquo;
          </p>
        </blockquote>

        <div className="mt-4">
          {p.sections.map((s, sIdx) => (
            <section
              key={s.id}
              id={s.id}
              className={sIdx === p.sections.length - 1 ? "mb-0" : "mb-8"}
            >
              <div className="flex items-baseline gap-0.5 border-b border-white/10 pb-3">
                <span className="font-mono text-xl font-bold uppercase tracking-[0.18em] text-white">
                  {s.number}
                </span>
                <h2 className="font-serif text-xl font-bold tracking-tight text-white">
                  {s.title}
                  {s.titleEmphasis ? (
                    <>
                      {" "}
                      <span className="text-orange-400">{s.titleEmphasis}</span>
                    </>
                  ) : null}
                </h2>
              </div>

              <div className="mt-2 space-y-4">
                {s.blocks.map((b: PrivacyPolicyBlock, idx) => {
                  switch (b.kind) {
                    case "p": {
                      const tone = b.tone;
                      return (
                        <p
                          key={idx}
                          className={[
                            "text-[13px] leading-relaxed",
                            tone === "strong" ? "text-white/90" : "text-white/55",
                          ].join(" ")}
                        >
                          {b.body}
                        </p>
                      );
                    }
                    case "contactLine":
                      return (
                        <div
                          key={idx}
                          className="border border-white/10 bg-white/[0.02] px-4 py-3 text-[13px] leading-relaxed"
                        >
                          <span className="text-white/45">{b.prefix}</span>{" "}
                          <a href={b.emailHref} className="text-orange-400 hover:text-orange-300">
                            {b.emailLabel}
                          </a>{" "}
                          <span className="text-white/25" aria-hidden>
                            ·
                          </span>{" "}
                          <Link
                            href={b.siteHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-400 hover:text-orange-300"
                          >
                            {b.siteLabel}
                          </Link>
                        </div>
                      );
                    case "subheading":
                      return (
                        <div
                          key={idx}
                          className={[
                            "pt-1 text-sm font-semibold text-white/90",
                            b.underline ? "border-b border-white/10 pb-2" : "",
                          ].join(" ")}
                        >
                          {b.text}
                        </div>
                      );
                    case "labeledUl": {
                      const labelClass =
                        b.labelTone === "orange"
                          ? "font-semibold text-orange-400"
                          : "font-semibold text-white";
                      return (
                        <ul key={idx} className="space-y-2 text-[13px] text-white/60">
                          {b.items.map((it) => (
                            <li key={`${it.label}-${it.text}`} className="flex gap-3">
                              <span
                                className="mt-2 size-1.5 shrink-0 rounded-full bg-orange-400/80"
                                aria-hidden
                              />
                              <span>
                                <span className={labelClass}>{it.label}</span>
                                {it.text ? <> {it.text}</> : null}
                              </span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    case "linkParagraph":
                      return (
                        <p key={idx} className="text-[13px] leading-relaxed text-white/55">
                          {b.before}
                          <a href={b.href} className="text-orange-400 hover:text-orange-300">
                            {b.linkLabel}
                          </a>
                          {b.after}
                        </p>
                      );
                    case "partnershipGrid":
                      return (
                        <div key={idx} className="border border-white/10 bg-white/[0.02]">
                          <div className="grid grid-cols-1 md:grid-cols-2">
                            {b.items.map((it, i) => {
                              const isRight = i % 2 === 1;
                              const isTop = i < 2;
                              return (
                                <div
                                  key={it.title}
                                  className={[
                                    "p-5 sm:p-6",
                                    isTop ? "border-b border-white/10" : "",
                                    isRight ? "" : "md:border-r md:border-white/10",
                                  ].join(" ")}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="min-w-0">
                                      <div className="flex items-center gap-2">
                                        <PartnershipIcon icon={it.icon} />
                                        <div className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-orange-400">
                                          {it.title}
                                        </div>
                                      </div>
                                      <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                                        {it.body.split("build@deltaarbim.tech").map((part, j, arr) => {
                                          if (j === arr.length - 1) return part;
                                          return (
                                            <span key={j}>
                                              {part}
                                              <a
                                                href="mailto:build@deltaarbim.tech"
                                                className="text-orange-400 hover:text-orange-300"
                                              >
                                                build@deltaarbim.tech
                                              </a>
                                            </span>
                                          );
                                        })}
                                      </p>
                                      {it.bullets?.length ? (
                                        <ul className="mt-1 space-y-1 text-[13px] text-white/55">
                                          {it.bullets.map((bl) => (
                                            <li key={bl} className="flex gap-3">
                                              <span
                                                className="mt-1 size-1.5 shrink-0 rounded-full bg-orange-400/80"
                                                aria-hidden
                                              />
                                              <span>{bl}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      ) : null}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    case "contactBox":
                      return (
                        <div
                          key={idx}
                          className="border border-white/10 bg-white/[0.02] px-5 py-4 sm:px-6 sm:py-5"
                        >
                          {b.intro ? (
                            <p className="mb-4 text-[13px] leading-relaxed text-white/55">{b.intro}</p>
                          ) : null}
                          <div className="space-y-3">
                            {b.rows.map((r) => (
                              <div key={r.label} className="text-[13px] leading-relaxed">
                                <div className="font-semibold text-white">{r.label}</div>
                                <div className="mt-1">
                                  {r.href ? (
                                    <a href={r.href} className="text-orange-400 hover:text-orange-300">
                                      {r.value}
                                    </a>
                                  ) : (
                                    <span className="text-orange-400">{r.value}</span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-5 text-[13px] leading-relaxed text-white/55">
                            {b.footerBefore}
                            <a
                              href={b.footerLinkHref}
                              className="font-semibold text-orange-400 hover:text-orange-300"
                            >
                              {b.footerLinkLabel}
                            </a>
                            {b.footerAfter}
                          </div>
                        </div>
                      );
                    case "ul":
                      return (
                        <ul key={idx} className="space-y-2 text-[13px] text-white/55">
                          {b.items.map((it) => (
                            <li key={it} className="flex gap-3">
                              <span
                                className="mt-2 size-1.5 shrink-0 rounded-full bg-orange-400/80"
                                aria-hidden
                              />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    case "blockquote":
                      return <Callout key={idx} title={b.title} body={b.body} />;
                    default: {
                      const _exhaustive: never = b;
                      return _exhaustive;
                    }
                  }
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

