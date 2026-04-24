import type { Metadata } from "next";
import { Hero } from "@/components/views/privacy/Hero";
import { ExploreStrip } from "@/components/shared/ExploreStrip";
import { privacyExploreStrip } from "@/components/views/privacy/content";
import { Policy } from "@/components/views/privacy/Policy";

export const metadata: Metadata = {
    title: "Privacy Policy | Delta ARBIM",
    description:
        "Privacy policy for Delta ARBIM (IFC augmented reality BIM platform). Learn what data we collect, how we use it, and how to contact us.",
};

export default function Privacy() {
    return (
        <main className="w-full">
            <Hero />
            <Policy />
            <ExploreStrip
                title={privacyExploreStrip.title}
                links={privacyExploreStrip.links}
            />
        </main>
    );
}