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

export const plans = {
  eyebrow: "Always Included · Every Plan",
  titlePrefix: "Everything your team needs.",
  titleEmphasis: "No add-on traps.",
  desc: "Every DeltaARBIM plan includes the full platform — no feature tiers, no locked tools. What you see in the demo is what you get on site.",
  data: [
    {
      icon: "model",
      title: "IFC Model Overlay",
      desc: "Upload any IFC file and see it overlaid live on the physical site in AR. Full 3D geometry, all disciplines, all floors — exactly as designed.",
      hud: "IFC OPEN STANDARD"
    },
    {
      icon: "light",
      title: "LiDAR Scanning ±2cm",
      desc: "Room scanning using iOS LiDAR gives you centimetre-level spatial accuracy. Compare as-built geometry against your IFC model automatically.",
      hud: "iOS LIDAR · ARKit"
    },
    {
      icon: "clash",
      title: "Clash Detection",
      desc: "Toggle each MEP layer — HVAC, water, electrical, structure — and see clashes highlighted in real-time AR on the actual site floor.",
      hud: "REAL-TIME · FIELD-GRADE"
    },
    {
      icon: "hexa",
      title: "100% Offline Operation",
      desc: "No internet required on site. Works in basements, tunnels, remote locations, and secure defence facilities. Your IFC data stays on-device.",
      hud: "OFFLINE-FIRST · SECURE"
    },
    {
      icon: "square",
      title: "Field Reports",
      desc: "Geo-tagged issue photos, clash reports, and deviation exports — all generated on the floor, synced to Procore or BIM360 when back on network.",
      hud: "PROCORE · BIM360"
    },
    {
      icon: "globe",
      title: "iOS & Android",
      desc: "Full feature parity on both platforms. Works on iPhone, iPad, and Android devices. No specialist hardware — just the phone your team already carries.",
      hud: "iOS · ANDROID · IPAD"
    }
  ],
  links: [
    { href: "/#how", label: "→ HOW IT WORKS" },
    { href: "/industry", label: "→ INDUSTRIES" },
    { href: "/demo", label: "→ BOOK FREE DEMO" },
  ]
}

export const tiers = {
  eyebrow: "Plans",
  titlePrefix: "Three starting points.",
  titleEmphasis: "All fully custom.",
  desc: "These tiers describe the typical team profile for each plan — your actual price is built around your specific situation. Every plan starts with a free demo.",
  data: [
    {
      title: "Field",
      hud: "SMALL TEAMS · SUBCONTRACTORS · MEP",
      desc: "AR BIM for field workers, subcontractors, and MEP teams. IFC overlay, clash detection, LiDAR scanning, field reports. Up to 5 users, 3 active IFC models.",
      features: ["IFC OVERLAY", "CLASH DETECTION", "LIDAR SCAN", "FIELD REPORTS", "MULTI-SITE", "WHITE-LABEL", "MOU"],
      activeFeatures: 4, // First 4 are active
      cta: "GET A QUOTE",
      href: "/demo"
    },
    {
      title: "Project",
      hud: "FULL PROJECT TEAMS · GC · BIM MANAGERS",
      desc: "AR BIM for full project teams — GC, MEP, owner, BIM manager. Unlimited users per project, multi-discipline IFC, Procore/BIM360 integration, on-site visit included.",
      features: ["IFC OVERLAY", "CLASH DETECTION", "LIDAR SCAN", "FIELD REPORTS", "MULTI-SITE", "WHITE-LABEL", "MOU"],
      activeFeatures: 5, // First 5 are active
      cta: "BOOK DEMO",
      href: "/demo"

    },
    {
      title: "Enterprise",
      hud: "LARGE CONTRACTORS · DEVELOPERS · GOVT",
      desc: "Full-platform AR BIM for large contractors, developers, and government agencies. Unlimited sites and users, white-label deployment, IFC-based MOU, API access, dedicated SLA.",
      features: ["IFC OVERLAY", "CLASH DETECTION", "LIDAR SCAN", "FIELD REPORTS", "MULTI-SITE", "WHITE-LABEL", "MOU"],
      activeFeatures: 7, // All active
      cta: "CONTACT US",
      href: "/contact"

    }
  ],
  links: [
    { href: "/demo", label: "→ BOOK A FREE DEMO" },
    { href: "/contact", label: "→ CUSTOM QUOTE" },
    { href: "/industry", label: "→ YOUR INDUSTRIES" },
    { href: "/about", label: "→ WHY DELTAARBIM" },

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