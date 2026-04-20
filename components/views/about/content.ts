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
      title: "Precision First",
      description:
        "±2cm accuracy isn't a feature we added — it's the reason DeltaARBIM exists. If the overlay isn't precise enough to catch a real construction error, it isn't useful. We hold ourselves to field-grade accuracy, not demo-grade accuracy.",
      tags: ["±2CM", "LIDAR + CV"],
    },
    {
      key: "open-standards",
      icon: "hexagon",
      title: "Open Standards Only",
      description:
        "IFC was an intentional choice. We believe open standards create better technology and fairer markets. No vendor lock-in. No proprietary format dependency. Any BIM tool, any contractor, any country — one standard.",
      tags: ["IFC", "OPEN BIM"],
    },
    {
      key: "field-conditions",
      icon: "zap",
      iconClassName: "text-orange-400",
      title: "Field Conditions, Not Lab Conditions",
      description:
        "Every feature is tested where construction actually happens — dust, direct sunlight, zero connectivity, fast-moving teams. If it doesn't work on a real site in real conditions, it doesn't ship.",
      tags: ["OFFLINE", "FIELD-READY"],
    },
    {
      key: "access",
      icon: "globe",
      iconClassName: "text-sky-400",
      title: "Access Over Premium",
      description:
        "The best construction technology should not be reserved for teams with dollar budgets. INR pricing, GST invoicing, and multilingual support are not afterthoughts — they are the product philosophy.",
      tags: ["INR", "6 LANGUAGES"],
    },
    {
      key: "small-team",
      icon: "square",
      title: "Small Team. Deep Engineering.",
      description:
        "No bloated feature lists driven by sales pitches. A focused engineering team in Ahmedabad, building one platform exceptionally well. Every update is deliberate. Every feature is field-validated.",
      tags: ["AHMEDABAD", "FOCUSED"],
    },
    {
      key: "global",
      icon: "target",
      title: "Every Nation That Builds",
      description:
        "DeltaARBIM's mission is not limited by geography. Infrastructure challenges are universal. We serve construction, defence, manufacturing, and energy teams globally — with the same precision, the same offline capability, the same fair pricing.",
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
    "Whether you're a construction team ready to bring AR to your site, a defence or industrial client exploring IFC applications, or a global partner interested in DeltaARBIM — we'd love to hear from you.",
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
    desc: "We chose IFC — the open BIM standard — because locking clients into proprietary formats is not a business model. It's a trap. IFC works with every BIM tool, every contractor, every country."
  },
  {
    title: "Offline-First. Field-Ready.",
    subtitle: "Pillar 2",
    desc: "Construction sites are not data centres. Our platform works 100% offline — basements, tunnels, remote sites, and secure defence facilities. The field doesn’t wait for connectivity."
  },
  {
    title: "INR Pricing. Global Access.",
    subtitle: "Pillar 3",
    desc: "World-class AR BIM shouldn’t require a dollar budget. INR billing with GST-compliant invoicing for Indian teams. Competitive pricing for every market. No compromise on capability."
  },
  {
    title: "Precision That Saves Money.",
    subtitle: "Pillar 4",
    desc: "±2cm spatial accuracy using LiDAR + computer vision. Not a demo metric — the real field accuracy that catches a misplaced column before concrete is poured and a duct clash before installation begins."
  },
  {
    title: "Built by Engineers, for Engineers.",
    subtitle: "Pillar 5",
    desc: "No venture capital pressure to bloat features. No sales-driven roadmap. Just a focused engineering team in Ahmedabad building the tool they always wished existed on site."
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
    desc: "India, UK, USA, Australia, Singapore & worldwide English markets"
  },
  {
    code: "AE",
    title: "العربية — Middle East & Gulf",
    status: {
      label: "AR · EXPANDING",
      bg: "bg-orange-400/10",
      text: "text-orange-400"
    },
    desc: "UAE, Saudi Arabia, Qatar, Kuwait, Oman & Gulf construction markets"
  },
  {
    code: "FR",
    title: "Français — France & Francophone",
    status: {
      label: "FR · EXPANDING",
      bg: "bg-orange-400/10",
      text: "text-orange-400"
    },
    desc: "France, Belgium, Switzerland, Canada, North & West Africa"
  },
  {
    code: "ES",
    title: "Español — Spain & Latin America",
    status: {
      label: "ES · EXPANDING",
      bg: "bg-orange-400/10",
      text: "text-orange-400"
    },
    desc: "Spain, Mexico, Colombia, Argentina & all Spanish-speaking markets"
  },
  {
    code: "DE",
    title: "Deutsch — Germany & DACH",
    status: {
      label: "DE · COMING",
      bg: "bg-gray-300/10",
      text: "text-gray-300"
    },
    desc: "Germany, Austria, Switzerland — Europe’s largest construction market"
  },
  {
    code: "BR",
    title: "Português — Brazil & Portugal",
    status: {
      label: "PT · COMING",
      bg: "bg-gray-300/10",
      text: "text-gray-300"
    },
    desc: "Brazil, Portugal, Mozambique, Angola — fastest-growing infrastructure markets"
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
    label: "Complex products actively maintained — DeltaARBIM is the flagship",
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
  eyebrow: "ABOUT DELTAARBIM",
  title: "Precision-First IFC AR",
  description:
    "The world's best infrastructure deserves the world's most accessible technology. DeltaARBIM is our answer — IFC-based AR BIM built in Ahmedabad, Gujarat, priced for every team that builds, defends, or maintains the world's infrastructure.",
};