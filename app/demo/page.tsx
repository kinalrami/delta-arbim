import { ExploreStrip } from "@/components/shared/ExploreStrip";
import { DemoHeroSection } from "@/components/views/demo/DemoHeroSection";
import { DemoLeadSection } from "@/components/views/demo/DemoLeadSection";
import { DemoWhatHappensSection } from "@/components/views/demo/DemoWhatHappensSection";
import { IfcCheckerSection } from "@/components/views/demo/IfcCheckerSection";
import { StatsStrip } from "@/components/views/contact/StatsStrip";
import { demoStatsStrip } from "@/components/views/demo/content";

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

