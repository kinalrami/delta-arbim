import type { LeadCaptureCopy } from "@/components/shared/LeadCaptureSection";

export const HeroCopy = {
  eyebrow: "PRICING",
  description:
    "No rigid tiers. No per-scan charges. We work with your team size, project scope, and budget and build a plan that actually fits your operational reality. Every engagement starts with a free demo using your actual IFC model, ensuring you see the ROI on your site before committing."};

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
      content: "Drop us an email or book a demo. Bring your IFC file—we run a live AR walkthrough on your actual project so you see exactly what you're paying for before making any decision.",
      buttonLabel: "Book Demo",
      href: "/demo"
    },
    {
      id: "02",
      name: "We build your plan",
      content: "Based on your team size, active sites, and BIM coordination workflows, we put together a custom subscription. No hidden fees, no locked features, and no surprises—just transparent INR billing.",
      buttonLabel: "Talk to us",
      href: "/contact"
    },
    {
      id: "03",
      name: "On site in 48 hours",
      content: "Your team is onboarded, and your IFC model is live in AR within 48 hours of signing. We personally walk you through the first session on-site to ensure ±2cm spatial accuracy from day one.",
      buttonLabel: "Our team",
      href: "/about"
    }
  ]
}

export const plans = {
  eyebrow: "Always Included · Every Plan",
  titlePrefix: "Everything your team needs.",
  titleEmphasis: "No add-on traps.",
  desc: "Transparency is at the core of our AR BIM philosophy. Unlike other BIM coordination software, every Delta ARBIM plan includes the full suite of professional tools. No hidden feature tiers, no locked modules—what you see in the demo is exactly what your engineers use on the job site.",
  data: [
    {
      icon: "model",
      title: "IFC Model Overlay",
      desc: "Upload any IFC file and see it overlaid live on the physical site in augmented reality. View full 3D geometry across all disciplines and floors—exactly as designed in your BIM software.",
      hud: "IFC OPEN STANDARD"
    },
    {
      icon: "light",
      title: "LiDAR Scanning ±2cm",
      desc: "High-precision LiDAR room scanning gives you centimetre-level spatial accuracy. Use the device sensor to automatically compare as-built geometry against your IFC design intent.",
      hud: "iOS LIDAR · ARKit"
    },
    {
      icon: "clash",
      title: "Automated Clash Detection",
      desc: "Toggle each MEP layer—HVAC, water, electrical, and structural—to see visual clashes highlighted in real-time AR on the actual site floor before installation.",
      hud: "REAL-TIME · FIELD-GRADE"
    },
    {
      icon: "hexa",
      title: "100% Offline Operation",
      desc: "No internet required on-site. Delta ARBIM is an offline-first platform that works in basements, tunnels, and secure defence facilities. Your IFC data stays private and on-device.",
      hud: "OFFLINE-FIRST · SECURE"
    },
    {
      icon: "square",
      title: "Digital Field Reports",
      desc: "Generate geo-tagged issue photos, clash reports, and deviation exports directly on the floor. Sync your digital construction data to Procore or BIM360 as soon as you're back on the network.",
      hud: "PROCORE · BIM360"
    },
    {
      icon: "globe",
      title: "Cross-Platform: iOS & Android",
      desc: "Full feature parity on both mobile ecosystems. Works on the iPhone, iPad, and Android devices your team already carries—no expensive specialist hardware required.",
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
      { href: "/about", label: "→ WHY Delta ARBIM" },

    ]
  }

  export const partnership = {
    eyebrow: "Long-Term Partnerships",
    titlePrefix: "Built for teams that ",
    titleEmphasis: "plan years for ARBIM ahead.",
    desc: "For large-scale contractors, BIM consultancies, and government agencies with multi-year project pipelines, Delta ARBIM offers more than just software. We provide an IFC-based technology partnership built on open standards, designed to scale with your infrastructure goals.",
    cards: [
      {
        icon: "mou",
        title: "IFC-Based MOU",
        body: "A formal Memorandum of Understanding covering secure data handling, dedicated support commitments, and collaborative roadmap rights. Everything is anchored to the IFC open standard, ensuring long-term compatibility for your BIM coordination software ecosystem.",
        bullets: [
          "Data isolation and NDA included",
          "Platform roadmap collaboration",
          "Dedicated engineering support line",
        ],
      },
      {
        icon: "visits",
        title: "Global Site Visits & Validation",
        body: "The Delta ARBIM engineering team travels globally for live AR site overlays, team onboarding, and on-site technical validation. We ensure your digital construction workflow is perfectly tuned to your specific field conditions.",
        bullets: [
          "Live AR demo on your actual job site",
          "Full team onboarding & training",
          "Expert technical validation",
        ],
      },
      {
        icon: "multi",
        title: "Multi-Site Enterprise Deployments",
        body: "Enterprise pricing is built around concurrent active sites, not restrictive user counts. Run Delta ARBIM across 10, 50, or 200 sites simultaneously—one subscription, one SLA, and one unified support contact for your global BIM to AR strategy.",
        bullets: [
          "Unlimited sites per Enterprise contract",
          "White-label deployment options",
          "API access for proprietary BIM management",
        ],
      },
      {
        icon: "india",
        title: "India-First Billing (Global Ready)",
        body: "Engineered in Ahmedabad by Shivlam, we prioritize fair INR pricing and GST compliance. Our DPDPA 2023-aware data handling ensures that high-security projects, including defence infrastructure, meet all regulatory standards from day one.",
        bullets: [
          "INR ₹ billing with GST invoices",
          "DPDPA 2023 compliant data security",
          "Strategic alignment for secure applications",
        ],
      },
    ],
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
      { href: "/about", label: "→ WHY Delta ARBIM" },

    ]
  }

export type PricingFaqAnswer =
  | { kind: "text"; body: string }
  | { kind: "link"; before: string; linkLabel: string; href: string; after?: string };

export type PricingFaqItem = {
  id: string;
  question: string;
  answer: PricingFaqAnswer;
};

export const pricingFaq = {
  eyebrow: "COMMON QUESTIONS",
  titlePrefix: "AR BIM pricing questions",
  titleEmphasis: "answered.",
  desc: "Still unsure? Ask us directly — we reply personally to every message within 24 hours. This FAQ is designed to address the core logic of our digital construction platform and how we handle BIM to AR integration.",
  items: [
    {
      id: "no-fixed",
      question: "Why no fixed public pricing?",
      answer: {
        kind: "text",
        body: "Construction teams vary enormously — a 3-person MEP sub has very different needs than a 200-person general contractor. Fixed tiers either overcharge small teams or underserve large ones. A quick conversation allows us to provide a fair, accurate AR BIM price built specifically for your project scope.",
      },
    },
    {
      id: "ifc-only",
      question: "Why IFC only — what if my model is in Revit?",
      answer: {
        kind: "text",
        body:
          "IFC is the open BIM standard — format-neutral and future-proof. If your model is in Revit, ArchiCAD, or any other BIM software, you can export it to IFC in one click. We chose IFC so you are never locked into a proprietary vendor, ensuring your augmented reality construction data remains yours.",
      },
    },
    {
      id: "free-trial",
      question: "Is there a free trial?",
      answer: {
        kind: "link",
        before:
          "Yes — every plan includes a 14-day free trial. More importantly, we run your first demo using your actual IFC model, so you see Delta ARBIM working on your real project before committing. No credit card required. ",
        linkLabel: "Book your demo.",
        href: "/demo",
      },
    },
    {
      id: "inr",
      question: "Can I pay in Indian Rupees (₹)?",
      answer: {
        kind: "text",
        body: "Yes. Indian teams are invoiced in INR with GST-compliant billing. International clients can pay in their local currency. We prioritise India-first billing to make high-end BIM coordination accessible to local developers.",
      },
    },
    {
      id: "mou",
      question: "What is an IFC-based MOU?",
      answer: {
        kind: "text",
        body: "A Memorandum of Understanding (MOU) formalises a long-term partnership. It covers secure data handling, platform access, support commitments, and roadmap collaboration — all anchored to IFC as the shared open standard. This is ideal for large contractors and BIM consultancies planning multi-year pipelines.",
      },
    },
    {
      id: "site-visit",
      question: "Can Team Delta ARBIM visit our construction site?",
      answer: {
        kind: "text",
        body:
          "Yes — we travel globally for live AR site overlays, onboarding, and on-site technical validation. This is available under Project and Enterprise plans to ensure your team achieves ±2cm spatial accuracy in real-world field conditions.",
      },
    },
    {
      id: "start",
      question: "How quickly can we get started?",
      answer: {
        kind: "text",
        body: "Most teams move from first contact to AR on-site within 48 hours. All you need is your IFC file and a compatible iOS or Android device. Our Ahmedabad-based engineering team walks you through the first session personally.",
      },
    },
  ] satisfies PricingFaqItem[],
  links: [
    { href: "/demo", label: "— BOOK A DEMO" },
    { href: "/contact", label: "— ASK A QUESTION" },
    { href: "/privacy", label: "— PRIVACY POLICY" },
  ],
} as const;

export const quoteCopy: LeadCaptureCopy = {
    eyebrow: "Get Your Custom Quote",
    titleStacked: true,
    titlePrefix: "Ready to see pricing in",
    titleEmphasis: "action?",
    body:
      "Every plan starts with a live demo using your actual IFC model. See exactly what Delta ARBIM does for your team before any commitment — then we build a plan around your reality.",
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
      emailSubject: "Delta ARBIM — About / Contact",
      mailHeader: "Message from About page",
      waText: "Hi Delta ARBIM, I'm reaching out from your About page.",
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