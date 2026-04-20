"use client";

import { LeadCaptureSection } from "@/components/shared/LeadCaptureSection";
import { demoLeadCopy } from "@/components/views/demo/content";

export function DemoLeadSection() {
  return <LeadCaptureSection copy={demoLeadCopy} ariaId="demo-lead-h2" />;
}

