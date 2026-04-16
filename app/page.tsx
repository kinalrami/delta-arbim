import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { WhatSection } from "@/components/home/WhatSection";
import { ArsSection } from "@/components/home/ArsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { IfcCheckerSection } from "@/components/home/IfcCheckerSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";

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
    </main>
  );
}
