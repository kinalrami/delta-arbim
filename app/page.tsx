import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { WhatSection } from "@/components/home/WhatSection";
import { ArsSection } from "@/components/home/ArsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { IfcCheckerSection } from "@/components/home/IfcCheckerSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { FieldDemoSection } from "@/components/home/FieldDemoSection";
import { SimulationSection } from "@/components/home/SimulationSection";
import { PricingTeaserSection } from "@/components/home/PricingTeaserSection";
import { DemoRequestSection } from "@/components/home/DemoRequestSection";
import { FaqSection } from "@/components/home/FaqSection";
import { AboutSection } from "@/components/home/AboutSection";
import { EarlyAccessSection } from "@/components/home/EarlyAccessSection";
import { ContactStrip } from "@/components/home/ContactStrip";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Marquee />
      <WhatSection />
      <ArsSection />
      <HowItWorksSection />
      <IfcCheckerSection />
      <FeaturesSection />
      <SolutionsSection />
      <FieldDemoSection />
      <SimulationSection />
      <PricingTeaserSection />
      <DemoRequestSection />
      <FaqSection />
      <AboutSection />
      <EarlyAccessSection />
      <ContactStrip />
    </main>
  );
}
