"use client"

import { LeadCaptureSection } from "@/components/shared/LeadCaptureSection"
import { quoteCopy } from "./content"

export function CustomQuote() {
    return <LeadCaptureSection copy={quoteCopy} ariaId="quote" />
}