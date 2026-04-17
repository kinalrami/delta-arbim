import Link from "next/link";
import type { ReactNode } from "react";

export type CtaPillVariant = "gray" | "orange" | "outlineOrange" | "green";

export function CtaPill({
  href,
  children,
  variant = "gray",
  icon,
  showArrow = false,
  className = "",
  target,
  rel,
}: {
  href?: string;
  children: ReactNode;
  variant?: CtaPillVariant;
  icon?: ReactNode;
  showArrow?: boolean;
  className?: string;
  target?: string;
  rel?: string;
}) {
  const base = "inline-flex items-center gap-2 border px-4 py-2 font-mono text-[11px] uppercase transition-colors";

  const styles = (() => {
    if (variant === "orange") return "border-orange-400/30 bg-orange-400 text-black hover:opacity-90";
    if (variant === "green") return "border-emerald-500/30 bg-emerald-500 text-black hover:opacity-90";
    if (variant === "outlineOrange")
      return "border-orange-400/25 bg-orange-400/10 text-orange-300 hover:border-orange-400/50 hover:text-orange-200";
    return "border-white/15 bg-white/5 text-white/70 hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-200";
  })();

  const content = (
    <>
      {icon ? <span className="inline-flex size-4 items-center justify-center">{icon}</span> : null}
      <span>{children}</span>
      {showArrow ? <span aria-hidden>→</span> : null}
    </>
  );

  const cls = [base, styles, className].join(" ");

  if (!href) {
    return (
      <span className={cls} aria-label={typeof children === "string" ? children : undefined}>
        {content}
      </span>
    );
  }

  return (
    <Link href={href} target={target} rel={rel} className={cls}>
      {content}
    </Link>
  );
}

