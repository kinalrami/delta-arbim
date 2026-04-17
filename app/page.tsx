import { Hero } from "@/components/views/home/Hero";
import { Marquee } from "@/components/views/home/Marquee";
import { WhatSection } from "@/components/views/home/WhatSection";
import { ArsSection } from "@/components/views/home/ArsSection";
import { HowItWorksSection } from "@/components/views/home/HowItWorksSection";
import { IfcCheckerSection } from "@/components/views/home/IfcCheckerSection";
import { FeaturesSection } from "@/components/views/home/FeaturesSection";
import { SolutionsSection } from "@/components/views/home/SolutionsSection";
import { FieldDemoSection } from "@/components/views/home/FieldDemoSection";
import { SimulationSection } from "@/components/views/home/SimulationSection";
import { PricingTeaserSection } from "@/components/views/home/PricingTeaserSection";
import { DemoRequestSection } from "@/components/views/home/DemoRequestSection";
import { FaqSection } from "@/components/views/home/FaqSection";
import { AboutSection } from "@/components/views/home/AboutSection";
import { EarlyAccessSection } from "@/components/views/home/EarlyAccessSection";
import { ContactStrip } from "@/components/shared/ContactStrip";
import { contactStripCopy, site } from "@/components/views/home/content";

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
      <ContactStrip site={site} copy={contactStripCopy} />
    </main>
  );
}
