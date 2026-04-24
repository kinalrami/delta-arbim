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
    tag: "Aerospace & Defence",
    titleTop: "ARBIM Technology that",
    titleEmphasis: "defends the Nation.",
    body:
      "Bharat’s armed forces protect every citizen. Delta ARBIM gives defence infrastructure the precision it deserves—providing IFC-based AR for hangars, secure facilities, and field operations. Built for Bharat and aligned with supporters, our platform is offline-first to ensure mission-critical performance in every environment.",
    quote:
      "Infrastructure built wrong costs lives. AR BIM ensures what’s designed is exactly what’s built—every time.",
    cite: "Delta ARBIM Engineering Team",
    stats: [
      { value: "100%", label: "Offline Capable" },
      { value: "±2cm", label: "Precision" },
      { value: "", label: "" },
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
      "Every misplaced column and clashing duct costs lakhs before it is caught. Delta ARBIM puts your live IFC model directly over the physical site so your team sees exactly what's wrong the moment it's wrong—not after. This is the future of digital construction.",
    quote:
      "30% of construction rework is preventable with early clash detection. AR BIM makes that possible on day one.",
    cite: "Delta ARBIM Engineering Team",
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
      "From foundation pour to final handover, overlay your live IFC model on the physical site so every team member sees exactly what's built, what's missing, and what's wrong in real-time.",
    usecases: [
      {
        title: "Structural Verification",
        desc:
          "Confirm rebar placement and slab elevations against the structural IFC before the pour.",
      },
      {
        title: "MEP Clash Detection",
        desc:
          "Overlay HVAC, water, and electrical independently to detect duct-to-beam clashes before fabrication.",
      },
      {
        title: "QA/QC Walkthroughs",
        desc:
          "Replace paper checklists with live AR overlays and sync geo-tagged issues to Procore or BIM360.",
      },
      {
        title: "As-Built Documentation",
        desc:
          "Capture geometry automatically via LiDAR room scanning for high-fidelity handover documentation.",
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
    badge: "Emerging",
    heading: { before: "AR BIM for", emphasis: "aerospace & defence infrastructure." },
    body:
      "Bringing IFC-standard AR precision to high-security environments, from advanced aircraft maintenance hangars to terrain mapping for low-visibility operations.",
    usecases: [
      {
        title: "Hangar Management",
        desc:
          "AR overlay of utility systems and equipment clearance to ensure maintenance crews never compromise on safety.",
      },
      {
        title: "Synthetic Vision Systems",
        desc:
          "Use 3D terrain data to create AR maps for pilots in low-visibility regions.",
      },
      {
        title: "Secure Facility Verification",
        desc:
          "Verify construction against approved IFC plans with 100% offline capability, no cloud dependency required.",
      },
      {
        title: "",
        desc:
          "",
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
      "Coordinate massive machinery, robotic assembly lines, and complex utility networks with factory-floor AR precision.",
    usecases: [
      {
        title: "Factory Layout Simulation",
        desc:
          "Verify clearance and workflow paths for robotic arms and conveyors before a single bolt is tightened.",
      },
      {
        title: "4D BIM — Supply Chain Tracking",
        desc:
          "AR displays what should be installed today versus what's behind schedule based on IFC schedules.",
      },
      {
        title: "Equipment Maintenance Guides",
        desc:
          "Technicians navigate complex machinery with AR overlays highlighting service points and safety zones.",
      },
      {
        title: "",
        desc:
          "",
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
      "Closing the gap between design and delivery for roads, bridges, tunnels, airports, and metro systems.",
    usecases: [
      {
        title: "Tunnel & Underground Work",
        desc:
          "Operates 100% offline where GPS and connectivity are unavailable.",
      },
      {
        title: "Bridge & Structural Inspection",
        desc:
          "LiDAR scanning captures geometry for monitoring design vs. as-built deviations.",
      },
      {
        title: "Airport & Metro Coordination",
        desc:
          "Coordinate multi-contractor teams (signalling, MEP, civil) with trade-specific AR layers.",
      },
      {
        title: "",
        desc:
          "",
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
      "Digital twins save lives in refineries and offshore rigs where precision is safety-critical.",
    usecases: [
      {
        title: "Refinery Maintenance",
        desc:
          "Real-time AR guidance through complex valve locations and pipe routes.",
      },
      {
        title: "Renewable Energy Planning",
        desc:
          "Verify installation positions for wind turbines and solar arrays before foundations are poured.",
      },
      {
        title: "Pipeline & Subsurface Mapping",
        desc:
          "Overlay underground pipeline IFC models using GPS + LiDAR anchoring to excavate with confidence.",
      },
      {
        title: "",
        desc:
          "",
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
  titleBefore: "Universal AR precision for the ",
  titleEmphasis: "world's most complex physical assets.",
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
    title: "Augmented Reality Construction",
    desc:
      "Eliminate the 'Interpretation Tax' by visualising MEP and structural layers directly on-site to reduce rework by 30%.",
    tag: "IFC · CLASH · LIDAR",
    href: "/industry#ind-deep-h2",
  },
  {
    key: "defence",
    icon: "✈️",
    title: "Secure Infrastructure & Defence",
    desc:
      "Deploy offline AR for classified facility verification and hangar maintenance without relying on cloud or GPS signals.",
    tag: "SECURE · OFFLINE",
    href: "/industry#ind-deep-h2",
  },
  {
    key: "manufacturing",
    icon: "⚙️",
    title: "Industrial Plant & Manufacturing",
    desc:
      "Streamline assembly line installations and robotic cell placement using 4D BIM to track real-time supply chain progress.",
    tag: "4D BIM · ROBOTS · SUPPLY CHAIN",
    href: "/industry#ind-deep-h2",
  },
  {
    key: "infrastructure",
    icon: "🌉",
    title: "Civil Engineering & Infrastructure",
    desc:
      "Coordinate multi-contractor teams in tunnels and airports using augmented reality blueprints that lock to project coordinates.",
    tag: "TUNNELS · BRIDGES · CIVIL",
    href: "/industry#ind-deep-h2",
  },
  {
    key: "energy",
    icon: "⚡",
    title: "Energy, Oil & Gas",
    desc:
      "Enhance safety on refineries and offshore rigs by mapping subsurface pipelines and valve locations with ±2cm spatial accuracy.",
    tag: "DIGITAL TWIN · REFINERY · RENEWABLE",
    href: "/industry#ind-deep-h2",
  },
  {
    key: "your-industry",
    icon: "🔮",
    title: "Custom Enterprise Solutions",
    desc:
      "Tailor the Delta ARBIM engine to your unique sector requirements, from heritage restoration to advanced BIM coordination software research.",
    tag: "CUSTOM · ENTERPRISE · GLOBAL",
    href: "/contact",
  },
] as const;

export const industryLeadCopy = {
  eyebrow: "Request a Demo",
  titlePrefix: "See Delta ARBIM in",
  titleEmphasis: "your industry.",
  body:
    "Tell us your sector and use case. We'll run a 30-minute live AR walkthrough using your actual IFC model — showing exactly what Delta ARBIM does for your specific environment and team.",
  checklist: [
    "30-minute live demo using your actual IFC model",
    "Industry-specific AR scenario — construction, defence, energy, or manufacturing",
    "Direct access to our engineering team — no sales script",
    "Available remotely or on-site globally",
    "INR billing available for Indian teams",
  ],
  quickLinks: [
    { href: "/pricing", label: "→ View Pricing" },
    { href: "/about", label: "→ About Delta ARBIM" },
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

