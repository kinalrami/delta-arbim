import {
  Globe,
  Handshake,
  Settings,
  Plane,
  Sparkles,
  CircleDollarSign,
} from "lucide-react";

import { CtaPill } from "@/components/shared/CtaPill";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  contactHelpCards,
  contactHelpCopy,
  contactHelpQuickLinks,
  type ContactHelpCardIconKey,
} from "./content";

function iconFor(key: ContactHelpCardIconKey) {
  if (key === "sparkles") return <Sparkles className="size-5" aria-hidden />;
  if (key === "pricing") return <CircleDollarSign className="size-5" aria-hidden />;
  if (key === "handshake") return <Handshake className="size-5" aria-hidden />;
  if (key === "plane") return <Plane className="size-5" aria-hidden />;
  if (key === "settings") return <Settings className="size-5" aria-hidden />;
  return <Globe className="size-5" aria-hidden />;
}

export function HelpSection() {
  return (
    <section aria-labelledby="help-h2" className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          id="help-h2"
          eyebrow={contactHelpCopy.eyebrow}
          title={
            <>
              {contactHelpCopy.titlePrefix}{" "}
              <span className="text-orange-400">{contactHelpCopy.titleEmphasis}</span>
            </>
          }
          desc={contactHelpCopy.desc}
          titleClassName="max-w-4xl font-serif text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
          descWrapClassName="mt-4 max-w-3xl text-base leading-relaxed text-white/60"
        />

        <FeatureGrid
          wrapClassName="mt-10 border border-white/10 bg-white/10"
          cardClassName="group flex h-full flex-col bg-[#1A1A1A] p-7 transition-colors hover:bg-white/[0.04]"
          items={contactHelpCards.map((c) => ({
            key: c.key,
            title: c.title,
            description: c.desc,
            iconNode: iconFor(c.icon),
            tag: (
              <div className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-orange-400">
                {c.tag}
              </div>
            ),
          }))}
        />

        <div className="mt-10 flex flex-wrap gap-3">
          {contactHelpQuickLinks.map((l) => (
            <CtaPill key={l.href} href={l.href} variant="gray" showArrow className="text-white/70">
              {l.label}
            </CtaPill>
          ))}
        </div>
      </div>
    </section>
  );
}

