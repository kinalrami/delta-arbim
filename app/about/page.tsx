import type { Metadata } from "next";
import { AboutLeadSection } from "@/components/views/about/AboutLeadSection";
import { AboutWhatWeStandForSection } from "@/components/views/about/AboutWhatWeStandForSection";
import { Hero } from "@/components/views/about/Hero";
import { StatsStrip } from "@/components/views/contact/StatsStrip";
import { statsStrip } from "@/components/views/about/content";
import { OurVision } from "@/components/views/about/OurVision";
import { GlobalReach } from "@/components/views/about/GlobalReach";
import Team from "@/components/views/about/Team";

export const metadata: Metadata = {
  title: "Digital Construction from Ahmedabad: ARBIM Construction | Delta ARBIM",
  description:
    "Built in Ahmedabad by Shivlam, Digital Construction developing Delta ARBIM brings high-precision IFC-based AR to the world. Go global with ARBIM.",
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
    </main>
  );
}
