import { Hero } from "@/components/views/contact/Hero";
import { StatsStrip } from "@/components/views/contact/StatsStrip";
import { HelpSection } from "@/components/views/contact/HelpSection";
import { ContactMainSection } from "@/components/views/contact/ContactMainSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Delta ARBIM | Expert AR BIM Support & Demo Requests",
  description: "Reach out to our Ahmedabad engineering team for AR BIM pricing, technical IFC support, and live site demo requests. We reply personally within 24 hours.",
};

export default function ContactPage() {
  return (
    <main className="w-full">
      <Hero />
      <StatsStrip />
      <ContactMainSection />
      <HelpSection />
    </main>
  );
}

