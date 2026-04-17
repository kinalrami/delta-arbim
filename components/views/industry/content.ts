export type DualHeroStat = { value: string; label: string };

export type DualHeroCard = {
  tag: string;
  titleTop: string;
  titleEmphasis: string;
  body: string;
  quote: string;
  cite: string;
  stats: [DualHeroStat, DualHeroStat, DualHeroStat];
  ctas: [
    { href: string; label: string; variant: "orange" | "gray" | "green"; showArrow?: boolean },
    { href: string; label: string; variant: "orange" | "gray" | "green"; showArrow?: boolean },
  ];
  badges: string[];
};

export const dualIndustryHero = {
  defence: {
    tag: "Aerospace & Defence · iDEX Aligned",
    titleTop: "Technology that",
    titleEmphasis: "defends the Nation.",
    body:
      "Bharat's armed forces protect every citizen. DeltaARBIM gives defence infrastructure the precision it deserves — IFC-based AR for hangars, secure facilities, and field operations. Built for Bharat. Aligned with iDEX. Offline-first for every environment.",
    quote:
      "Infrastructure built wrong costs lives. AR BIM ensures what's designed is exactly what's built — every time.",
    cite: "DeltaARBIM Engineering Team",
    stats: [
      { value: "100%", label: "Offline Capable" },
      { value: "±2cm", label: "Precision" },
      { value: "iDEX", label: "Ready" },
    ],
    ctas: [
      { href: "/contact", label: "Explore Defence Applications", variant: "green", showArrow: true },
      { href: "/demo", label: "Request a Demo", variant: "gray", showArrow: false },
    ],
    badges: ["🇮🇳 Made in Bharat", "Secure Offline AR", "Hangar Management", "Synthetic Vision"],
  } satisfies DualHeroCard,
  construction: {
    tag: "Construction · Core Industry",
    titleTop: "Build it right.",
    titleEmphasis: "The first time.",
    body:
      "Every column misplaced, every duct clashing, every wall off-axis — costs lakhs before it's caught. DeltaARBIM puts your live IFC model directly over the physical site so every team member sees exactly what's wrong, the moment it's wrong. Not after.",
    quote:
      "30% of construction rework is preventable with early clash detection. AR BIM makes that possible on day one.",
    cite: "DeltaARBIM Engineering Team",
    stats: [
      { value: "30%", label: "Less Rework" },
      { value: "80%", label: "Faster QA/QC" },
      { value: "<60s", label: "IFC to AR" },
    ],
    ctas: [
      { href: "/demo", label: "Book a Construction Demo", variant: "orange", showArrow: true },
      { href: "/pricing", label: "View Pricing", variant: "gray", showArrow: false },
    ],
    badges: ["IFC Open Standard", "MEP Clash Detection", "LiDAR Scanning", "INR Billing"],
  } satisfies DualHeroCard,
} as const;

export const industryStatsStrip: { value: string; label: string }[] = [
  { value: "5+", label: "Industries Served" },
  { value: "IFC", label: "Open Standard" },
  { value: "±2cm", label: "Spatial Accuracy" },
  { value: "100%", label: "Offline Capable" },
] as const;

export type IndustryKey =
  | "construction"
  | "defence"
  | "manufacturing"
  | "infrastructure"
  | "energy";

export type IndustryTab = { id: IndustryKey; label: string };

export type IndustryUsecase = { title: string; desc: string };

export type IndustryPanel = {
  id: IndustryKey;
  tabLabel: string;
  badge: string;
  heading: { before: string; emphasis: string };
  body: string;
  usecases: [IndustryUsecase, IndustryUsecase, IndustryUsecase, IndustryUsecase];
  ctas: [
    { href: string; label: string; primary?: boolean },
    { href: string; label: string; primary?: boolean },
  ];
  internalLinks: { href: string; label: string }[];
  hud: {
    topLeft: string;
    topRight: string;
    bottomLeft: string;
  };
};

export const deepDiveCopy = {
  eyebrow: "Deep Dive by Industry",
  titleBefore: "Select your industry —",
  titleEmphasis: "see AR BIM in action.",
} as const;

export const industryTabs: IndustryTab[] = [
  { id: "construction", label: "Construction" },
  { id: "defence", label: "Aerospace & Defence" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "energy", label: "Energy & Oil/Gas" },
] as const;

export const industryPanels: Record<IndustryKey, IndustryPanel> = {
  construction: {
    id: "construction",
    tabLabel: "Construction",
    badge: "Core Industry",
    heading: { before: "AR BIM built for", emphasis: "every construction team." },
    body:
      "From foundation pour to final handover — DeltaARBIM overlays your live IFC model on the physical site so every team member sees exactly what's built, what's missing, and what's wrong. In real-time. On their phone.",
    usecases: [
      {
        title: "Structural Verification",
        desc:
          "Confirm rebar placement, column positions, and slab elevations against the structural IFC model before concrete is poured. Catch a misplaced column before it costs ₹ lakhs to fix.",
      },
      {
        title: "MEP Clash Detection",
        desc:
          "Overlay HVAC, water, and electrical independently in AR. Detect duct-to-beam clashes on the floor before fabrication begins — not after installation.",
      },
      {
        title: "QA/QC Walkthroughs",
        desc:
          "Replace paper-based checklists with live AR overlays. Walk the floor, see deviations instantly, tag issues with geo-tagged screenshots, sync to Procore or BIM360.",
      },
      {
        title: "As-Built Documentation",
        desc:
          "LiDAR room scanning captures as-built geometry automatically. Compare against IFC design intent and generate deviation reports for handover documentation.",
      },
    ],
    ctas: [
      { href: "/demo", label: "Book a Construction Demo", primary: true },
      { href: "/pricing", label: "View Pricing" },
    ],
    internalLinks: [
      { href: "/#solutions", label: "→ All Solutions" },
      { href: "/#how", label: "→ How It Works" },
    ],
    hud: { topLeft: "AR LIVE", topRight: "IFC", bottomLeft: "● CLASH DETECTION ON" },
  },
  defence: {
    id: "defence",
    tabLabel: "Aerospace & Defence",
    badge: "Emerging — iDEX Ready",
    heading: { before: "AR BIM for", emphasis: "aerospace & defence infrastructure." },
    body:
      "The military and aerospace sector is rapidly adapting BIM for specialized high-security environments. From advanced aircraft maintenance hangars to terrain mapping for low-visibility operations — DeltaARBIM brings IFC-standard AR precision to defence infrastructure.",
    usecases: [
      {
        title: "Hangar Management",
        desc:
          "AR overlay of utility systems, bay allocations, and equipment clearance requirements — ensuring maintenance crews never compromise on safety.",
      },
      {
        title: "Synthetic Vision Systems",
        desc:
          "Use BIM-derived 3D terrain data to create AR terrain maps for pilots in low-visibility regions. IFC geometry becomes mission-critical situational awareness.",
      },
      {
        title: "Secure Facility Verification",
        desc:
          "Verify construction and maintenance against approved IFC plans — with full offline capability for air‑gapped secure environments. No cloud dependency required.",
      },
      {
        title: "iDEX Challenge Alignment",
        desc:
          "Positioned to address iDEX challenges in smart base infrastructure, maintenance modernisation, and AR-guided field operations.",
      },
    ],
    ctas: [
      { href: "/contact", label: "Discuss Defence Applications", primary: true },
      { href: "/demo", label: "Request a Demo" },
    ],
    internalLinks: [
      { href: "/contact", label: "→ Partnership Enquiry" },
      { href: "/pricing", label: "→ Enterprise Pricing" },
    ],
    hud: { topLeft: "SECURE AR", topRight: "DEFENCE", bottomLeft: "● HANGAR SCAN ACTIVE" },
  },
  manufacturing: {
    id: "manufacturing",
    tabLabel: "Manufacturing",
    badge: "Industrial Plants",
    heading: { before: "AR BIM for", emphasis: "factories & assembly lines." },
    body:
      "Industrial facilities use BIM to coordinate massive machinery, robotic assembly lines, and complex utility networks. DeltaARBIM brings AR precision to factory floor planning, equipment installation, and maintenance guidance.",
    usecases: [
      {
        title: "Factory Layout Simulation",
        desc:
          "Simulate installation of robotic arms, CNC machines, and conveyors in AR — verify clearance, power access, and workflow paths before a single bolt is tightened.",
      },
      {
        title: "4D BIM — Supply Chain Tracking",
        desc:
          "Track delivery and installation of prefabricated parts against IFC schedules. AR shows what should be installed today and what's behind.",
      },
      {
        title: "Equipment Maintenance Guides",
        desc:
          "Technicians navigate complex machinery with AR overlays — highlight service access points, shutoffs, and safety zones without paper manuals.",
      },
      {
        title: "Utility Routing Verification",
        desc:
          "Verify compressed air, electrical, and cooling routes against the plant IFC model before startup. Catch routing errors before costly shutdowns.",
      },
    ],
    ctas: [
      { href: "/demo", label: "Book an Industrial Demo", primary: true },
      { href: "/contact", label: "Talk to Us" },
    ],
    internalLinks: [
      { href: "/pricing", label: "→ Enterprise Pricing" },
      { href: "/#features", label: "→ Platform Features" },
    ],
    hud: { topLeft: "4D BIM AR", topRight: "FACTORY", bottomLeft: "● CLEARANCE CHECK ON" },
  },
  infrastructure: {
    id: "infrastructure",
    tabLabel: "Infrastructure",
    badge: "Civil & Architecture",
    heading: { before: "AR BIM for", emphasis: "infrastructure & architecture." },
    body:
      "Roads, bridges, tunnels, airports, and metro systems depend on precise coordination between design and delivery. DeltaARBIM closes the gap with IFC-powered AR at every stage.",
    usecases: [
      {
        title: "Tunnel & Underground Work",
        desc:
          "Works 100% offline in tunnels and underground structures. Overlay routes and safety zones where GPS and connectivity are unavailable.",
      },
      {
        title: "Bridge & Structural Inspection",
        desc:
          "Walk inspection teams with IFC overlay showing design vs as-built deviations. LiDAR scanning captures geometry for monitoring.",
      },
      {
        title: "Airport & Metro Coordination",
        desc:
          "Coordinate multi-contractor teams with AR layers for civil, MEP, signalling, and fit-out — toggled per trade.",
      },
      {
        title: "Architectural Design Verification",
        desc:
          "Verify complex forms and interior volumes against IFC during construction. Walk stakeholders through unbuilt spaces in AR.",
      },
    ],
    ctas: [
      { href: "/demo", label: "Book an Infrastructure Demo", primary: true },
      { href: "/pricing", label: "View Pricing" },
    ],
    internalLinks: [
      { href: "/#solutions", label: "→ Solutions Overview" },
      { href: "/contact", label: "→ Contact Us" },
    ],
    hud: { topLeft: "AR OVERLAY", topRight: "INFRA", bottomLeft: "● OFFLINE · ±2CM" },
  },
  energy: {
    id: "energy",
    tabLabel: "Energy & Oil/Gas",
    badge: "High-Risk Environments",
    heading: { before: "AR BIM for", emphasis: "energy, oil & gas." },
    body:
      "In high-risk energy environments, digital twins save lives and prevent disasters. DeltaARBIM brings IFC-based AR guidance to refineries, offshore rigs, and renewable installations where precision is safety-critical.",
    usecases: [
      {
        title: "Refinery Maintenance",
        desc:
          "Guide technicians through complex repairs with AR BIM overlays — see valve locations, pipe routes, and safety zones in real time.",
      },
      {
        title: "Renewable Energy Planning",
        desc:
          "Plan exact placement of wind turbines and solar arrays from IFC terrain data. Verify installation positions in AR before foundations are poured.",
      },
      {
        title: "Pipeline & Subsurface Mapping",
        desc:
          "Overlay underground pipeline IFC models on the surface using GPS + LiDAR anchoring — excavate with confidence.",
      },
      {
        title: "Digital Twin Integration",
        desc:
          "Bring as-built IFC and sensor context together in AR — a field interface for digital twin workflows.",
      },
    ],
    ctas: [
      { href: "/demo", label: "Book an Energy Sector Demo", primary: true },
      { href: "/contact", label: "Partnership Enquiry" },
    ],
    internalLinks: [
      { href: "/pricing", label: "→ Enterprise Pricing" },
      { href: "/privacy", label: "→ Data Security" },
    ],
    hud: { topLeft: "DIGITAL TWIN", topRight: "ENERGY", bottomLeft: "● PIPELINE AR ON" },
  },
};

export const overviewCopy = {
  eyebrow: "All Industries at a Glance",
  titleBefore: "IFC AR BIM works wherever",
  titleEmphasis: "infrastructure exists.",
  desc: undefined as undefined | string,
} as const;

export type OverviewItem = {
  key: string;
  title: string;
  desc: string;
  tag: string;
  icon: string;
  href?: string;
};

export const overviewItems: OverviewItem[] = [
  {
    key: "construction",
    icon: "🏗️",
    title: "Construction",
    desc:
      "Structural verification, MEP clash detection, QA/QC walkthroughs, and as-built documentation for every building typology.",
    tag: "IFC · CLASH · LIDAR",
    href: "/industry#ind-deep-h2",
  },
  {
    key: "defence",
    icon: "✈️",
    title: "Aerospace & Defence",
    desc:
      "Hangar management, synthetic vision terrain mapping, and secure offline AR for defence infrastructure and iDEX challenges.",
    tag: "IDEX · SECURE · OFFLINE",
    href: "/industry#ind-deep-h2",
  },
  {
    key: "manufacturing",
    icon: "⚙️",
    title: "Manufacturing & Industrial",
    desc:
      "Factory layout simulation, robotic arm clearance, 4D supply chain tracking, and equipment maintenance guidance.",
    tag: "4D BIM · ROBOTS · SUPPLY CHAIN",
    href: "/industry#ind-deep-h2",
  },
  {
    key: "infrastructure",
    icon: "🌉",
    title: "Infrastructure & Architecture",
    desc:
      "Tunnels, bridges, metro systems, airports, and complex architecture — AR BIM coordination for every civil discipline.",
    tag: "TUNNELS · BRIDGES · CIVIL",
    href: "/industry#ind-deep-h2",
  },
  {
    key: "energy",
    icon: "⚡",
    title: "Energy & Oil/Gas",
    desc:
      "Refinery maintenance AR guides, renewable energy placement, subsurface pipeline mapping, and digital twin field interface.",
    tag: "DIGITAL TWIN · REFINERY · RENEWABLE",
    href: "/industry#ind-deep-h2",
  },
  {
    key: "your-industry",
    icon: "🔮",
    title: "Your Industry",
    desc:
      "If your sector works with physical infrastructure and IFC-compatible models, DeltaARBIM can bring AR to your field teams.",
    tag: "CUSTOM · ENTERPRISE · GLOBAL",
    href: "/contact",
  },
] as const;

export const industryLeadCopy = {
  eyebrow: "Request a Demo",
  titlePrefix: "See DeltaARBIM in",
  titleEmphasis: "your industry.",
  body:
    "Tell us your sector and use case. We'll run a 30-minute live AR walkthrough using your actual IFC model — showing exactly what DeltaARBIM does for your specific environment and team.",
  checklist: [
    "30-minute live demo using your actual IFC model",
    "Industry-specific AR scenario — construction, defence, energy, or manufacturing",
    "Direct access to our engineering team — no sales script",
    "Available remotely or on-site globally",
    "INR billing available for Indian teams",
  ],
  quickLinks: [
    { href: "/pricing", label: "→ View Pricing" },
    { href: "/about", label: "→ About DeltaARBIM" },
    { href: "/privacy", label: "→ Privacy Policy" },
  ],
  form: {
    title: "Request an Industry Demo",
    subtitle: "We'll reach out within 24 hours.",
    submit: "Request Industry Demo",
    notePrefix: "No commitments.",
    privacy: "Privacy Policy",
    fields: {
      firstName: { label: "First Name", placeholder: "Rahul", required: true, autoComplete: "given-name" },
      lastName: { label: "Last Name", placeholder: "Sharma", required: true, autoComplete: "family-name" },
      email: { label: "Work Email", placeholder: "rahul@company.com", required: true, autoComplete: "email" },
      company: { label: "Company", placeholder: "Your Company", required: true, autoComplete: "organization" },
      industry: { label: "Industry", required: true },
      phone: { label: "Phone / WhatsApp", placeholder: "+91 84604 73271", required: false, autoComplete: "tel" },
    },
    industryOptions: [
      "Construction",
      "Aerospace & Defence",
      "Manufacturing & Industrial",
      "Infrastructure & Architecture",
      "Energy & Oil/Gas",
      "Other",
    ],
    successTitle: "Request received!",
    successBody: "We'll reach out within 24 hours with a tailored demo for your industry.",
    waPrefix: "Prefer WhatsApp?",
    waCta: "Chat on WhatsApp",
  },
} as const;

