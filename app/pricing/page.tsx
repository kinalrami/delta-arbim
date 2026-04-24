import { Hero } from "@/components/views/pricing/Hero";
import { CustomQuote } from "@/components/views/pricing/CustomQuote";
import { StatsStrip } from "@/components/views/contact/StatsStrip";
import { statsStrip } from "@/components/views/pricing/content";
import { Steps } from "@/components/views/pricing/Steps";
import { Plan } from "@/components/views/pricing/Plan"
import { Tiers } from "@/components/views/pricing/Tiers";
import { Partnership } from "@/components/views/pricing/partnership";
import { Faq } from "@/components/views/pricing/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AR BIM Pricing | INR Billing & Flexible Plans | Delta ARBIM",
    description: "Transparent AR BIM pricing with no per-scan fees. Get INR billing, GST invoices, and a 14-day free trial for augmented reality construction overlays.",
};

export default function Pricing() {
    return (
        <main className="w-full">
            <Hero />
            <StatsStrip ariaLabel="Stats" stats={statsStrip} />
            <Steps />
            <Plan />
            <Tiers />
            <Partnership />
            <Faq />
            <CustomQuote />
        </main>
    );
}