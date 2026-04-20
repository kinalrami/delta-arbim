import { ContactStrip } from "@/components/shared/ContactStrip";
import { contactStripCopy, site } from "@/components/views/home/content";
import { Hero } from "@/components/views/pricing/Hero";
import { CustomQuote } from "@/components/views/pricing/CustomQuote";
import { StatsStrip } from "@/components/views/contact/StatsStrip";
import { statsStrip } from "@/components/views/pricing/content";
import { Steps } from "@/components/views/pricing/Steps";
import { Plan } from "@/components/views/pricing/Plan"
import { Tiers } from "@/components/views/pricing/Tiers";

export default function Pricing() {
    return (
        <main className="w-full">
            <Hero />
            <StatsStrip ariaLabel="Stats" stats={statsStrip} />
            <Steps />
            <Plan />
            <Tiers />
            <CustomQuote />
            <ContactStrip site={site} copy={contactStripCopy} />
        </main>
    );
}