import { ContactStrip } from "@/components/shared/ContactStrip";
import { contactStripCopy, site } from "@/components/views/home/content";
import { Hero } from "@/components/views/pricing/Hero";
import { CustomQuote } from "@/components/views/pricing/CustomQuote";
import { StatsStrip } from "@/components/views/contact/StatsStrip";
import { statsStrip } from "@/components/views/pricing/content";

export default function Pricing() {
    return (
        <main className="w-full">
            <Hero />
            <StatsStrip ariaLabel="Stats" stats={statsStrip} />
            <CustomQuote />
            <ContactStrip site={site} copy={contactStripCopy} />
        </main>
    );
}