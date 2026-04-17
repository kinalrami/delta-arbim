import type { ReactNode } from "react";

export function SectionHeading({
  id,
  eyebrow,
  title,
  desc,
  eyebrowClassName = "mb-2 inline-flex font-mono text-xs font-semibold uppercase tracking-widest text-orange-400",
  titleClassName = "max-w-4xl font-serif text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl",
  descWrapClassName = "mt-2 max-w-3xl text-base leading-relaxed text-white/60",
}: {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  desc?: ReactNode;
  eyebrowClassName?: string;
  titleClassName?: string;
  descWrapClassName?: string;
}) {
  return (
    <>
      <span className={eyebrowClassName}>{eyebrow}</span>
      <h2 id={id} className={titleClassName}>
        {title}
      </h2>
      {desc ? <div className={descWrapClassName}>{desc}</div> : null}
    </>
  );
}

