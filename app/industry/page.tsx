import { Hero } from "@/components/views/industry/Hero";
import { StatsStrip } from "@/components/views/contact/StatsStrip";
import { industryStatsStrip } from "@/components/views/industry/content";
import { DeepDiveSection } from "@/components/views/industry/DeepDiveSection";
import { OverviewSection } from "@/components/views/industry/OverviewSection";
import { DemoLeadSection } from "@/components/views/industry/DemoLeadSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ARBIM Solutions for Construction, Defence & MEP | Delta ARBIM",
  description:
    "Explore ARBIM solutions for construction, defence & infrastructure. ±2cm precision for MEP clash detection & hangar management. Book a demo!",
};

export default function IndustryPage() {
  return (
    <main className="w-full">
      <Hero />
      <StatsStrip ariaLabel="Industry stats" stats={industryStatsStrip} />
      <DeepDiveSection />
      <OverviewSection />
      <DemoLeadSection />
    </main>
  );
}

