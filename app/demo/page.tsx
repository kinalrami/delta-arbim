import { ExploreStrip } from "@/components/shared/ExploreStrip";
import { DemoHeroSection } from "@/components/views/demo/DemoHeroSection";
import { DemoLeadSection } from "@/components/views/demo/DemoLeadSection";
import { DemoWhatHappensSection } from "@/components/views/demo/DemoWhatHappensSection";
import { IfcCheckerSection } from "@/components/views/demo/IfcCheckerSection";
import { StatsStrip } from "@/components/views/contact/StatsStrip";
import { demoStatsStrip } from "@/components/views/demo/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live AR BIM Demo | IFC Site Alignment & Clash Detection",
  description: "Watch Delta ARBIM align an IFC model in <60s on a live site. See ±2cm precision and automated MEP clash detection in real-world field conditions.",
};

export default function DemoPage() {
  return (
    <main className="w-full">
      <DemoHeroSection />
      <StatsStrip ariaLabel="Demo stats" stats={demoStatsStrip} />
      <DemoWhatHappensSection />
      <IfcCheckerSection />
      <ExploreStrip
        links={[
          { href: "/", label: "Home" },
          { href: "/pricing", label: "Pricing Plans" },
          { href: "/industry", label: "Industries We Serve" },
          { href: "/about", label: "About Us" },
          { href: "/#features", label: "All Features" },
          { href: "/contact", label: "Contact Us" },
          { href: "/privacy", label: "Privacy Policy" },
        ]}
      />
      <DemoLeadSection />
    </main>
  );
}

