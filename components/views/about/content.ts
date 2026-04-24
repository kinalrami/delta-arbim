import type { FeatureGridItem } from "@/components/shared/FeatureGrid";
import type { LeadCaptureCopy } from "@/components/shared/LeadCaptureSection";

/** “What we stand for” — principles grid */
export const aboutWhatWeStandForCopy = {
  eyebrow: "WHAT WE STAND FOR",
  titleLine: "Engineering principles.",
  titleItalic: "Not marketing promises.",
  items: [
    {
      key: "precision",
      icon: "diamond",
      title: "Precision First ±2cm accuracy",
      description:
        "isn't a feature we added—it’s the reason Delta ARBIM exists. If an AR BIM overlay isn't precise enough to catch a real structural error, it’s just a toy. We hold ourselves to field-grade accuracy using LiDAR + CV sensor fusion.",
      tags: ["±2CM", "LIDAR + CV"],
    },
    {
      key: "open-standards",
      icon: "hexagon",
      title: "Open Standards Only",
      description:
        "Choosing IFC was an intentional choice. We believe open standards create better technology and fairer markets. No vendor lock-in. No proprietary format dependency. Any BIM software, any contractor, any country—one standard.",
      tags: ["IFC", "OPEN BIM"],
    },
    {
      key: "field-conditions",
      icon: "zap",
      iconClassName: "text-orange-400",
      title: "Field Conditions, Not Lab Conditions",
      description:
        "Every feature is tested where construction actually happens—dust, direct sunlight, zero connectivity, and fast-moving teams. If it doesn't work on a real job site in real conditions, it doesn't ship.",
      tags: ["OFFLINE", "FIELD-READY"],
    },
    {
      key: "access",
      icon: "globe",
      iconClassName: "text-sky-400",
      title: "Access Over Premium",
      description:
        "The best augmented reality in construction should not be reserved for teams with massive dollar budgets. INR pricing, GST invoicing, and multilingual support are not afterthoughts—they are our core product philosophy.",
      tags: ["INR", "6 LANGUAGES"],
    },
    {
      key: "small-team",
      icon: "square",
      title: "Small Team. Deep Engineering.",
      description:
        "No bloated feature lists driven by sales pitches. We are a focused engineering team in Ahmedabad, building one platform exceptionally well. Every update is deliberate; every feature is field-validated.",
      tags: ["AHMEDABAD", "FOCUSED"],
    },
    {
      key: "global",
      icon: "target",
      title: "Every Nation That Builds",
      description:
        "Delta ARBIM's mission is not limited by geography. Infrastructure challenges are universal. We serve construction, defence, manufacturing, and energy teams globally with the same precision and fair pricing.",
      tags: ["GLOBAL", "UNIVERSAL"],
    },
  ] as const satisfies readonly FeatureGridItem[],
};

/** About page — lead / contact block (matches marketing layout) */
export const aboutLeadCopy: LeadCaptureCopy = {
  eyebrow: "WORK WITH US",
  titleStacked: true,
  titlePrefix: "Start a partnership.",
  titleEmphasis: "Book a demo. Say hello.",
  body:
    "Whether you're a construction team ready to bring AR to your site, a defence or industrial client exploring IFC applications, or a global partner interested in Delta ARBIM — we'd love to hear from you.",
  bullets: [
    { title: "30-minute live demo using your actual IFC model" },
    { title: "Direct access to the engineering team — no sales script" },
    { title: "IFC-Based MOU and annual contract options available" },
    { title: "On-site visits globally — client provides logistics" },
    { title: "INR billing with GST-compliant invoicing for Indian teams" },
    { title: "Early access: 30% off Professional & Enterprise at launch" },
  ],
  quickLinks: [
    { href: "/pricing", label: "— VIEW PRICING" },
    { href: "/industry", label: "— INDUSTRIES" },
    { href: "/privacy", label: "— PRIVACY POLICY" },
  ],
  form: {
    title: "Get in Touch",
    subtitle: "We respond personally to every message within 24 hours.",
    submit: "SEND MESSAGE —",
    submitShowArrow: false,
    notePrefix: "We respond personally — no bots, no templates.",
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
        key: "reason",
        kind: "select",
        label: "Reason for contact",
        placeholder: "Select a reason",
        required: true,
        options: [
          "Book a demo",
          "Partnership / MOU inquiry",
          "Pricing & licensing",
          "Technical question",
          "Press / media",
          "Other",
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

export const aboutSkills = [
  {label:"Industry we serve", href:"/industry"},
  {label:"View Pricing", href:"/pricing"},
] as const;

export const visions = [
  {
    title: "IFC-First. Always Open.",
    subtitle: "Pillar 1",
    desc: "We chose IFC—the open BIM standard—because proprietary locks are a trap. Our tool works with every BIM software, every contractor, and every country."
  },
  {
    title: "Offline-First. Field-Ready.",
    subtitle: "Pillar 2",
    desc: "Construction sites aren't data centres. Our platform works 100% offline—perfect for tunnels, basements, and secure facilities. The field doesn't wait for a signal."
  },
  {
    title: "INR Pricing. Global Access.",
    subtitle: "Pillar 3",
    desc: "High-end Augmented Reality in construction shouldn't require a Silicon Valley budget. We offer INR billing with GST-compliant invoicing for Indian teams and competitive global rates."
  },
  {
    title: "Precision That Saves Money.",
    subtitle: "Pillar 4",
    desc: "Our ±2cm spatial accuracy (LiDAR + Computer Vision) isn't a demo metric—it's real-world accuracy that catches a misplaced column before the concrete pour."
  },
  {
    title: "Built by Engineers, for Engineers.",
    subtitle: "Pillar 5",
    desc: "No venture capital pressure to bloat features. Just a focused engineering team in Ahmedabad building the tool they always wished they had on-site."
  }
];

export const languages = [
  {
    code: "GB",
    title: "English — Global",
    status: {
      label: "EN · LIVE",
      bg: "bg-[#44DC781A]",
      text: "text-[#44DC78E6]"
    },
    desc: "Serving India, UK, USA, Australia, Singapore, and worldwide English-speaking AR BIM markets."
  },
  {
    code: "AE",
    title: "العربية — Middle East & Gulf",
    status: {
      label: "AR · EXPANDING",
      bg: "bg-orange-400/10",
      text: "text-orange-400"
    },
    desc: "Localised support for UAE, Saudi Arabia, Qatar, Kuwait, and the growing Gulf augmented reality construction sector."
  },
  {
    code: "FR",
    title: "Français — France & Francophone",
    status: {
      label: "FR · EXPANDING",
      bg: "bg-orange-400/10",
      text: "text-orange-400"
    },
    desc: "Targeting France, Belgium, Switzerland, Canada, and the North & West African infrastructure markets."
  },
  {
    code: "ES",
    title: "Español — Spain & Latin America",
    status: {
      label: "ES · EXPANDING",
      bg: "bg-orange-400/10",
      text: "text-orange-400"
    },
    desc: "Supporting Spain, Mexico, Colombia, Argentina, and all Spanish-speaking digital twin projects."
  },
  {
    code: "DE",
    title: "Deutsch — Germany & DACH",
    status: {
      label: "DE · COMING",
      bg: "bg-gray-300/10",
      text: "text-gray-300"
    },
    desc: "Preparing for Germany, Austria, and Switzerland—Europe’s largest construction office management market."
  },
  {
    code: "BR",
    title: "Português — Brazil & Portugal",
    status: {
      label: "PT · COMING",
      bg: "bg-gray-300/10",
      text: "text-gray-300"
    },
    desc: "Expanding into Brazil, Portugal, Mozambique, and Angola—some of the world's fastest-growing infrastructure zones."
  }
];

export const pills = [
  "AR / BIM TECH",
  "MOBILE & WEB",
  "IFC OPEN STANDARD",
  "DEVOPS & INFRA",
  "DIGITAL IDENTITY",
  "ECOMMERCE"
];

export const statsData = [
  {
    value: "10+",
    label: "Years of corporate engineering experience across AR, mobile, web & enterprise",
  },
  {
    value: "50+",
    label: "Projects delivered across AR/BIM, eCommerce, digital identity & DevOps",
  },
  {
    value: "3+",
    label: "Complex products actively maintained — Delta ARBIM is the flagship",
  },
  {
    value: "5+",
    label: "eCom brands built and scaled — deep product & growth engineering",
  },
  {
    value: "IN",
    label: "Proudly based in Ahmedabad, Gujarat — Scalable Tech for Everyone",
  },
]

export const statsStrip: { value: string; label: string }[] = [
  { value: "₹", label: "INR Billing · Global Reach" },
  { value: "10+", label: "Years Engineering XP" },
  { value: "6", label: "Languages Supported" },
  { value: "Global", label: "Teams Welcome" },
] as const;

export const aboutHeroCopy = {
  eyebrow: "ABOUT Delta ARBIM",
  description:
    "The world's best infrastructure deserves the world's most accessible technology. Delta ARBIM is our answer — IFC-based AR BIM built in Ahmedabad, Gujarat, priced for every team that builds, defends, or maintains the world's infrastructure.",
};