import { Hero } from "@/components/views/contact/Hero";
import { StatsStrip } from "@/components/views/contact/StatsStrip";
import { HelpSection } from "@/components/views/contact/HelpSection";
import { ContactMainSection } from "@/components/views/contact/ContactMainSection";

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

