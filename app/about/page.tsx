import type { Metadata } from "next";
import { ContactStrip } from "@/components/shared/ContactStrip";
import { AboutLeadSection } from "@/components/views/about/AboutLeadSection";
import { AboutWhatWeStandForSection } from "@/components/views/about/AboutWhatWeStandForSection";
import { contactStripCopy, site } from "@/components/views/home/content";
import { Hero } from "@/components/views/about/Hero";
import { StatsStrip } from "@/components/views/contact/StatsStrip";
import { statsStrip } from "@/components/views/about/content";
import { OurVision } from "@/components/views/about/OurVision";
import { GlobalReach } from "@/components/views/about/GlobalReach";
import Team from "@/components/views/about/Team";

export const metadata: Metadata = {
  title: "About Us | DeltaARBIM",
  description:
    "Engineering principles behind DeltaARBIM — precision-first IFC AR, open standards, field-tested tools, and fair global access. Book a demo; we respond within 24 hours.",
};

export default function AboutPage() {
  return (
    <main className="w-full">
      <Hero />
      <StatsStrip ariaLabel="Stats" stats={statsStrip} />
      <OurVision />
      <GlobalReach />
      <Team />
      <AboutWhatWeStandForSection />
      <AboutLeadSection />
      <ContactStrip site={site} copy={contactStripCopy} />
    </main>
  );
}
