import type { LeadCaptureCopy } from "@/components/shared/LeadCaptureSection";

export const HeroCopy = {
  eyebrow: "PRICING",
  title: "Precision-First IFC AR",
  description:
    "No rigid tiers. No per-scan charges. We work with your team size, project scope, and budget — and build a plan that actually fits. Every plan starts with a free demo using your actual IFC model."};

export const badges= ["INR Billing", "GST Invoicing", "14-Day Free Trial", "IFC Open Standard","No Per-Scan Fees"]

export const internalLinks = [
  { href: "/#feat-h2", label: "→ ALL FEATURES" },
  { href: "/industry", label: "→ INDUSTRIES" },
  { href: "/about", label: "→ ABOUT US" },
]

export const hud = { topLeft: "AR LIVE", topRight: "IFC", bottomLeft: "● LIDAR · ±2CM · 60FPS" }

export const statsStrip: { value: string; label: string }[] = [
      { value: "₹", label: "INR Billing Available" },
      { value: "48h", label: "Onboarding Time" },
      { value: "±2cm", label: "AR Precision" },
      { value: "100%", label: "Offline Capable" },
] as const;

export const steps = {
  eyebrow: "How Pricing Works",
  titlePrefix: "Three steps from",
  titleEmphasis: "first contact to AR on site.",
  desc: "We don't quote from a price list. We talk to your team, understand your project, and build a number that's actually fair for your situation.",
  data: [
    {
      id: "01",
      name: "Share your IFC model",
      content: "Drop us an email or book a demo. Bring your IFC file — we run a live AR walkthrough on your actual project so you see exactly what you're paying for before any decision.",
      buttonLabel: "Book Demo",
      href: "/demo"
    },
    {
      id: "02",
      name: "We build your plan",
      content: "Based on your team size, active sites, and workflows — we put together a custom subscription. No hidden fees, no locked features, no surprises.",
      buttonLabel: "Talk to us",
      href: "/contact"
    },
    {
      id: "03",
      name: "On site in 48 hours",
      content: "Your team is onboarded and your IFC model is live in AR within 48 hours of signing. We personally walk you through the first session on site — not a help doc and good luck.",
      buttonLabel: "Our team",
      href: "/about"
    }
  ]
}

export const quoteCopy: LeadCaptureCopy = {
    eyebrow: "Get Your Custom Quote",
    titleStacked: true,
    titlePrefix: "Ready to see pricing in",
    titleEmphasis: "action?",
    body:
      "Every plan starts with a live demo using your actual IFC model. See exactly what DeltaARBIM does for your team before any commitment — then we build a plan around your reality.",
    bullets: [
      { title: "30-minute live demo using your actual IFC model" },
      { title: "Custom pricing built around your team size and scope" },
      { title: "INR billing with GST-compliant invoicing for Indian teams" },
      { title: "14-day free trial — no credit card required" },
      { title: "Early access: 30% off Professional & Enterprise at launch" },
      { title: "On-site visits available globally — ask us" },
    ],
    quickLinks: [
        { href: "/", label: "— HOME" },
        { href: "/industry", label: "— INDUSTRIES" },
        { href: "/about", label: "— ABOUT US" },
      { href: "/privacy", label: "— PRIVACY POLICY" },
    ],
    form: {
      title: "Request a Custom Quote",
      subtitle: "We'll reach out within 24 hours — personally.",
      submit: "GET MY CUSTOM QUOTE",
      submitShowArrow: true,
      notePrefix: "No commitments. No sales pressure.",
      privacy: "Privacy Policy",
      emailSubject: "DeltaARBIM — About / Contact",
      mailHeader: "Message from About page",
      waText: "Hi DeltaARBIM, I'm reaching out from your About page.",
      waPrefix: "Prefer WhatsApp?",
      waCta: "Chat on WhatsApp",
      fields: [
        {
          key: "firstName",
          kind: "text",
          label: "First Name",
          placeholder: "",
          required: true,
          autoComplete: "given-name",
        },
        {
          key: "lastName",
          kind: "text",
          label: "Last Name",
          placeholder: "",
          required: true,
          autoComplete: "family-name",
        },
        {
          key: "email",
          kind: "email",
          label: "Work Email",
          placeholder: "you@company.com",
          required: true,
          autoComplete: "email",
        },
        {
          key: "company",
          kind: "text",
          label: "Company",
          placeholder: "",
          required: false,
          autoComplete: "organization",
        },
        {
          key: "role",
          kind: "select",
          label: "Your role",
          placeholder: "Select role",
          required: false,
          options: [
           "General Contractor",
            "MEP Contractor",
            "Project Owner / Developer",
            "Architect / BIM Manager",
            "Construction Tech Buyer",
            "Defence / Government",
            "Industrial / Manufacturing",
            "Other"
          ],
        },
        {
          key: "phone",
          kind: "tel",
          label: "Phone / WhatsApp",
          placeholder: "+91 84604 73271",
          required: false,
          autoComplete: "tel",
        },
      ],
      successTitle: "Message ready to send",
      successBody:
        "Your email app should open with this message. We reply within 24 hours.",
    },
  };