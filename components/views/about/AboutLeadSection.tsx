"use client";

import { LeadCaptureSection } from "@/components/shared/LeadCaptureSection";
import { aboutLeadCopy } from "@/components/views/about/content";

export function AboutLeadSection() {
  return <LeadCaptureSection copy={aboutLeadCopy} ariaId="about-lead-h2" />;
}
