import type { LucideIcon } from "lucide-react";
import { Globe, Mail, Smartphone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { contactStripCopy, site } from "@/components/views/home/content";

const linkPrimary = "text-base text-white transition-colors hover:text-orange-300";
const headingClass =
  "font-mono text-xs font-bold uppercase tracking-widest text-orange-400";

function StripCard({
  title,
  icon: Icon,
  iconClassName,
  iconProps,
  children,
}: {
  title: string;
  icon: LucideIcon;
  iconClassName: string;
  iconProps?: { strokeWidth?: number };
  children: ReactNode;
}) {
  return (
    <div className="p-8 sm:p-10">
      <div className={`mb-4 ${iconClassName}`}>
        <Icon className="size-5" {...iconProps} aria-hidden />
      </div>
      <h4 className={headingClass}>{title}</h4>
      {children}
    </div>
  );
}

export function ContactStrip() {
  const cards: {
    key: string;
    title: string;
    icon: LucideIcon;
    iconClassName: string;
    iconProps?: { strokeWidth?: number };
    body: ReactNode;
  }[] = [
      {
        key: "email",
        title: "Email",
        icon: Mail,
        iconClassName: "text-white/80",
        iconProps: { strokeWidth: 1.5 },
        body: (
          <>
            <p className="mt-3">
              <a href={`mailto:${site.email}`} className={linkPrimary}>
                {site.email}
              </a>
            </p>
            <p className="mt-2 text-xs text-white/45">{contactStripCopy.emailSub}</p>
          </>
        ),
      },
      {
        key: "phone",
        title: "WhatsApp / Call",
        icon: Smartphone,
        iconClassName: "text-cyan-400",
        body: (
          <>
            <p className="mt-3">
              <a href={`tel:${site.phoneTel}`} className={linkPrimary}>
                {site.phoneDisplay}
              </a>
            </p>
            <p className="mt-2 text-xs">
              <Link
                href={site.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 transition-colors hover:text-orange-300"
              >
                {contactStripCopy.waCta}
              </Link>
            </p>
          </>
        ),
      },
      {
        key: "global",
        title: "Global Availability",
        icon: Globe,
        iconClassName: "text-cyan-400",
        body: (
          <>
            <p className="mt-3 text-sm leading-relaxed text-white/55">{contactStripCopy.globalBody}</p>
            <p className="mt-3 text-xs text-white/40">{contactStripCopy.globalSub}</p>
          </>
        ),
      },
    ];

  return (
    <section id="contact" aria-label="Contact" className="w-full bg-[#1A1A1A]">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 divide-y divide-white/10 border border-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {cards.map((c) => (
            <StripCard
              key={c.key}
              title={c.title}
              icon={c.icon}
              iconClassName={c.iconClassName}
              iconProps={c.iconProps}
            >
              {c.body}
            </StripCard>
          ))}
        </div>
      </div>
    </section>
  );
}
