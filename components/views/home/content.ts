/**
 * Home page copy and structured data.
 * Edit here to keep marketing content and lists next to home sections.
 */

import {
  Box,
  Diamond,
  LayoutGrid,
  Square,
  Target,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { HowStepId } from "./HowItWorksCanvas";
import type { IfcCheckerCopy } from "@/components/shared/IfcCheckerSection";

// ——— Site / contact URLs ———

export const site = {
  email: "build@deltaarbim.tech",
  phoneDisplay: "+91 8460 47 3271",
  phoneTel: "+918460473271",
  waUrl: "https://wa.me/918460473271",
  waEarlyAccessQuery:
    "Hi%20Delta ARBIM%2C%20I%27d%20like%20early%20access.",
  waDemoQuery: "Hi%20Delta ARBIM%2C%20I%27d%20like%20to%20book%20a%20demo.",
  instagramUrl: "https://www.instagram.com/Delta ARBIM/",
} as const;

export const siteWa = {
  earlyAccess: `https://wa.me/918460473271?text=${site.waEarlyAccessQuery}`,
  demo: `https://wa.me/918460473271?text=${site.waDemoQuery}`,
} as const;

// ——— Hero 3D layer cycle (HeroIpadCanvas) ———

export type HeroLayerState = {
  struct: boolean;
  wall: boolean;
  hvac: boolean;
  water: boolean;
  elec: boolean;
  clash: boolean;
  label: string;
};

export const heroLayerSets: HeroLayerState[] = [
  {
    struct: true,
    wall: true,
    hvac: true,
    water: true,
    elec: true,
    clash: true,
    label: "ALL LAYERS ACTIVE",
  },
  {
    struct: true,
    wall: false,
    hvac: true,
    water: false,
    elec: false,
    clash: true,
    label: "HVAC CLASH MODE",
  },
  {
    struct: true,
    wall: true,
    hvac: false,
    water: true,
    elec: false,
    clash: false,
    label: "MEP WATER ROUTING",
  },
  {
    struct: true,
    wall: false,
    hvac: false,
    water: false,
    elec: true,
    clash: false,
    label: "ELECTRICAL LAYOUT",
  },
  {
    struct: true,
    wall: true,
    hvac: true,
    water: true,
    elec: true,
    clash: true,
    label: "FULL BIM OVERLAY",
  },
];

// ——— Hero UI (badges, legend, links) ———

export type HeroStatBadge = {
  value: string;
  valueClassName: string;
  label: string;
  positionClassName: string;
};

export const heroStatBadges: HeroStatBadge[] = [
  {
    value: "3",
    valueClassName: "text-rose-400",
    label: "CLASHES FOUND",
    positionClassName: "top-14 right-0 translate-x-1/3",
  },
  {
    value: "±2cm",
    valueClassName: "text-orange-300",
    label: "SPATIAL ACCURACY",
    positionClassName: "bottom-24 right-0 translate-x-1/3",
  },
  {
    value: "5",
    valueClassName: "text-sky-400",
    label: "BIM LAYERS LIVE",
    positionClassName: "top-28 left-0 -translate-x-1/3",
  },
  {
    value: "60fps",
    valueClassName: "text-orange-300",
    label: "AR RENDER RATE",
    positionClassName: "bottom-24 left-0 -translate-x-1/3",
  },
];

export const heroHudCornerClasses: string[] = [
  "absolute top-3 left-3 h-5 w-5",
  "absolute top-3 right-3 h-5 w-5 -scale-x-100",
  "absolute bottom-3 left-3 h-5 w-5 -scale-y-100",
  "absolute bottom-3 right-3 h-5 w-5 -scale-x-100 -scale-y-100",
];

export type HeroLegendItem = {
  label: string;
  dotClassName: string;
  itemClassName: string;
};

export const heroLegendItems: HeroLegendItem[] = [
  {
    label: "STRUCTURE",
    dotClassName: "bg-slate-300",
    itemClassName: "border-slate-300/30 text-slate-300",
  },
  {
    label: "HVAC DUCTS",
    dotClassName: "bg-rose-300",
    itemClassName: "border-rose-300/30 text-rose-300",
  },
  {
    label: "MEP WATER",
    dotClassName: "bg-sky-300",
    itemClassName: "border-sky-300/30 text-sky-300",
  },
  {
    label: "ELECTRICAL",
    dotClassName: "bg-emerald-300",
    itemClassName: "border-emerald-300/30 text-emerald-300",
  },
];

export const heroTagPills: string[] = [
  "IOS & ANDROID",
  "LIDAR ±2CM",
  "IFC OPEN STANDARD",
  "100% OFFLINE",
  "MARKERLESS AR",
  "CLASH DETECTION",
];

export const heroQuickLinks: { href: string; label: string }[] = [
  { href: "/pricing", label: "→ PRICING" },
  { href: "/industry", label: "→ INDUSTRIES" },
  { href: "/about", label: "→ ABOUT US" },
  { href: "/#ifc-check", label: "→ FREE IFC CHECK" },
];

// ——— Marquee ———

export const marqueeHeroStats: { value: string; label: string }[] = [
  { value: "±2cm", label: "Spatial Accuracy" },
  { value: "100%", label: "Offline Capable" },
  { value: "<60s", label: "IFC to AR" },
  { value: "IFC", label: "Open Standard" },
];

export const marqueeTrackItems: string[] = [
  "AR BIM Overlay",
  "IFC Open Standard",
  "Clash Detection",
  "LiDAR Scanning",
  "MEP Coordination",
  "As-Built Verification",
  "QA/QC Walkthroughs",
  "±2cm Accuracy",
  "Offline Capable",
  "60fps AR",
  "Built for Bharat",
  "Global Teams",
];

// ——— What ———

export type WhatStatCard = { stat: string; label: string; desc: string };

export const whatStatCards: WhatStatCard[] = [
  {
    stat: "30%",
    label: "Less Rework",
    desc: "Prevent deviations during construction 80% Faster.",
  },
  {
    stat: "80%",
    label: "Faster QA/QC",
    desc: "AI-based walkthroughs are used in place of manual checklists 75%.",
  },
  {
    stat: "75%",
    label: "Quickest Learning",
    desc: "Workers intuitively visualise intricate 3D designs.",
  },
  {
    stat: "±2cm",
    label: "Spatial Accuracy",
    desc: "LiDAR + computer vision anchoring locks IFC models with centimetre-level precision — no markers needed.",
  },
];

export const whatLinks: { href: string; label: string }[] = [
  { href: "/#ars", label: "→ Explore AR Layers" },
  { href: "/demo", label: "→ Book a Demo" },
  { href: "/pricing", label: "→ View Pricing" },
];

// ——— Features ———

export type FeatureContent = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
};

export const featuresContent: FeatureContent[] = [
  {
    icon: Box,
    title: "Live IFC AR 3D Overlay",
    desc: "View your entire IFC model in 3D AR overlay at actual scale, overlaid on the real world. Walk through walls, validate placements, and check hidden MEP installations all in 3D AR.",
    tag: "REAL-TIME AR · IFC",
  },
  {
    icon: Diamond,
    title: "LiDAR Room Scan Comparison",
    desc: "Get accurate as-built measurements by scanning room dimensions using your device’s LiDAR sensor. Compare point cloud scans against your IFC file and receive instant notifications of structural discrepancies without involving a surveyor.",
    tag: "POINT CLOUD · AS-BUILT",
  },
  {
    icon: Zap,
    title: "Automated Clash Detection",
    desc: "Identify clashes between your 3D model and actual space with Delta ARBIM. Go precisely where the clash occurred and visualise it in context—no need for your laptop.",
    tag: "CLASH ENGINE · AUTOMATED",
  },
  {
    icon: Square,
    title: "Multi-Layer IFC Control",
    desc: "Toggle structural, MEP, architectural, and fit-out layers independently. Isolate any discipline mid-walk without losing your spatial reference in the augmented reality building environment.",
    tag: "IFC LAYERS · FULL CONTROL",
  },
  {
    icon: Target,
    title: "Markerless Geo-Anchoring",
    desc: "Leverage LiDAR and Computer Vision to lock down IFC models to physical locations with centimetre-level accuracy. Enjoy freedom of movement without marker prints, QR codes, or GPS limitations indoors.",
    tag: "CV ANCHORING · ±2CM",
  },
  {
    icon: LayoutGrid,
    title: "In-field Issue Reporting and Annotation",
    desc: "Report problems in AR mode, take geo-referenced screenshots, and send issue reports directly to Procore, Autodesk Construction Cloud, or any custom webhook.",
    tag: "INTEGRATIONS · GEO-TAGGED",
  },
];

// ——— FAQ ———

export type FaqCategory = "product" | "technical" | "pricing" | "industry" | "all";
export type FaqTabId = "product" | FaqCategory;

export const faqTabs: { id: FaqTabId; label: string }[] = [
  { id: "product", label: "Product & Features" },
  { id: "technical", label: "Technical & Setup" },
  { id: "pricing", label: "Pricing & Plans" },
  { id: "industry", label: "Defence & Gov" },
  { id: "all", label: "All Questions" },
];

export type FaqAnswerModel =
  | { kind: "text"; body: string }
  | {
      kind: "pricingLink";
      beforeLink: string;
    };

export type FaqItemModel = {
  id: string;
  category: FaqCategory;
  question: string;
  answer: FaqAnswerModel;
};

export const faqItems: FaqItemModel[] = [
  {
    id: "what-is",
    category: "product",
    question: "What is Delta ARBIM and how does it work?",
    answer: {
      kind: "text",
      body: "Delta ARBIM is an IFC-based augmented reality BIM platform that overlays your live 3D building model directly onto the real construction site through your device camera. Using LiDAR and computer vision, it anchors your IFC model to real-world coordinates with ±2cm accuracy—no QR codes or printed markers required.",
    },
  },
  {
    id: "formats",
    category: "technical",
    question: "Which BIM file formats does Delta ARBIM support?",
    answer: {
      kind: "text",
      body: "Delta ARBIM is built on IFC, the open BIM standard. IFC files from Revit, ArchiCAD, or any BIM software are supported via one-click export.",
    },
  },
  {
    id: "mep",
    category: "product",
    question: "Is Delta ARBIM suitable for MEP coordination?",
    answer: {
      kind: "text",
      body: "Absolutely. Delta ARBIM was purpose-built for MEP coordination. You can overlay HVAC ducts (red), water pipes (blue), and electrical conduits (yellow) independently in AR to detect clashes against the structure before fabrication begins.",
    },
  },
  {
    id: "offline",
    category: "technical",
    question: "Does Delta ARBIM work without internet on site?",
    answer: {
      kind: "text",
      body: "Yes. Delta ARBIM is 100% offline capable. Once your model is synced, the AR overlay, LiDAR scanning, and clash detection all work without any internet connection—essential for basements and tunnels.",
    },
  },
  {
    id: "accuracy",
    category: "technical",
    question: "What spatial accuracy does Delta ARBIM achieve?",
    answer: {
      kind: "text",
      body: "Delta ARBIM achieves ±2cm spatial accuracy using LiDAR sensor fusion. This is accurate enough to detect rebar displacement, duct misalignment, and wall positioning errors before they are built.",
    },
  },
  {
    id: "devices",
    category: "technical",
    question: "Which devices are supported?",
    answer: {
      kind: "text",
      body: "Delta ARBIM runs on iOS and Android. LiDAR-enhanced scanning is available on iPhone 12 Pro and iPad Pro 2020 (or newer).",
    },
  },
  {
    id: "integrations",
    category: "product",
    question: "Can Delta ARBIM integrate with Procore or BIM360?",
    answer: {
      kind: "text",
      body: "Yes. Delta ARBIM integrates natively with Procore and Autodesk Construction Cloud on Project and Enterprise plans. Field reports, geo-tagged clash screenshots, and deviation logs sync directly to your project management platform.",
    },
  },
  {
    id: "time-to-ar",
    category: "technical",
    question: "How long does it take to get an IFC model into AR?",
    answer: {
      kind: "text",
      body: "Under 60 seconds. Simply upload your IFC file and open the app; Delta ARBIM anchors the model automatically using LiDAR and computer vision.",
    },
  },
  {
    id: "pricing-what",
    category: "pricing",
    question: "What is the pricing for Delta ARBIM?",
    answer: {
      kind: "pricingLink",
      beforeLink:
        "Pricing is custom-built around your team size and project scope—Field, Project, and Enterprise tiers. See our full pricing page for details.",
    },
  },
  {
    id: "trial",
    category: "pricing",
    question: "Is there a free trial?",
    answer: {
      kind: "text",
      body: "Yes. All plans include a 14-day free trial with no credit card required. Every demo includes a live walkthrough using your actual IFC model.",
    },
  },
  {
    id: "india",
    category: "product",
    question: "Is Delta ARBIM built for the Indian construction market?",
    answer: {
      kind: "text",
      body: "Yes. Delta ARBIM is built by an India-based technology team with awareness of local site conditions, connectivity constraints, and project workflows. INR billing and GST-compliant invoicing are available.",
    },
  },
  {
    id: "defence",
    category: "industry",
    question: "Is Delta ARBIM suitable for defence and government infrastructure?",
    answer: {
      kind: "text",
      body: "Yes. As a fully offline-capable platform, it is suitable for secure defence facilities and classified sites where network connectivity is restricted.",
    },
  },
  {
    id: "infrastructure",
    category: "industry",
    question: "Does Delta ARBIM work for infrastructure projects like tunnels or highways?",
    answer: {
      kind: "text",
      body: "Yes. Delta ARBIM supports IFC-based infrastructure models, including tunnels, highways, and bridges. The offline-first architecture is ideal for GPS-denied environments.",
    },
  },
];

// ——— About ———

export const aboutStats: { value: string; label: string }[] = [
  { value: "10+", label: "Years Engineering XP" },
  { value: "50+", label: "Projects Delivered" },
  { value: "6", label: "Languages Supported" },
  { value: "Global", label: "Teams Welcome" },
];

export const aboutSkills: string[] = [
  "AR / BIM Tech",
  "Mobile & Web",
  "DevOps & Infra",
  "IFC Open Standard",
  "Digital Identity",
];

export const aboutOpenToItems: string[] = [
  "IFC-Based MOU partnerships",
  "Annual subscription contracts",
  "On-site visits globally",
  "Enterprise white-label options",
];

// ——— Contact strip (plain fields; icons stay in component) ———

export const contactStripCopy = {
  emailSub: "Demos, pricing, partnerships",
  waCta: "Open WhatsApp →",
  globalBody:
    "Remote demos worldwide. On-site visits available — client provides logistics.",
  globalSub: "Ahmedabad · India · Global Teams Welcome",
} as const;

// ——— Early access ———

export const earlyAccessPerks: string[] = [
  "30% off Professional & Enterprise plans — locked for life",
  "Direct access to our engineering team for onboarding",
  "Live demo using your actual IFC model before you commit",
  "Priority support during your first 90 days on site",
  "Input on product roadmap and upcoming AR features",
];

export const earlyAccessTrustItems: string[] = [
  "INR billing · GST invoicing",
  "14-day free trial · No credit card",
  "100% offline · Works on any iOS/Android",
  "We reply within 24 hours · Personally",
];

export const earlyAccessRoleOptions: string[] = [
  "General Contractor",
  "MEP Contractor",
  "Project Owner / Developer",
  "Architect / BIM Manager",
  "Construction Tech Buyer",
  "Defence / Government",
  "Other",
];

// ——— Demo request ———

export const demoChecklist: string[] = [
  "30-minute live walkthrough using your own IFC model",
  "Side-by-side clash detection across your actual MEP and structural layers",
  "Direct access to our engineering team — no sales script",
  "Early access partnership offer for qualified construction teams",
  "Available remotely or on-site globally",
];

// ——— Free IFC check ———

export const homeIfcCheckerCopy: IfcCheckerCopy = {
  sectionId: "ifc-check",
  sectionAriaId: "ifc-check-h",
  sectionClassName: "w-full bg-[#1A1A1A]",
  eyebrow: "Free · No Account Needed",
  titleBefore: "Is your IFC model",
  titleEmphasis: "AR-ready?",
  desc:
    "Check the compatibility of your model with our Free IFC File Checker before your demo or simply out of curiosity. Drag and drop your file or describe your model, and our IFC File Checker will compare it with high-performance AR requirements in a few seconds.",
  leftChecklist: [
    "IFC Version Compatibility: We are compatible with IFC2x3, IFC4, and IFC4.1+ to provide smooth BIM coordination software integration",
    "3D Geometry Analysis: Automated check to determine whether your file has renderable AR elements to visualise with high fidelity.",
    "Discipline Layers: Determine and confirm structural, MEP, and architectural layers to targeted augmented reality building overlays.",
    "Spatial Anchoring: Check IfcSite and IfcBuilding coordinate data to make sure your model snaps to physical site coordinates without drift.",
    "Performance Estimation: Count of elements analysis using AI to give an AR estimate of the performance of your mobile device.",
    "Optimisation Recommendations: Get technical, actionable advice to prepare your model to run.",
  ],
  privacyNote:
    "⚠ Audit Note: After submitting, our engineering team will conduct a manual audit of your IFC and send you a comprehensive compatibility report within 24-48 hours.",
  leftCtas: [
    { href: "/demo", label: "Book a Full Demo", variant: "orange" },
    { href: "/pricing", label: "Pricing Plans", variant: "outline" },
  ],
  rightTitle: "Check your IFC model",
  rightSubtitle:
    "Describe your model or drop your file — we'll assess AR compatibility instantly.",
  dropTitle: "Drop your IFC file for metadata read",
  dropSubtitle: "or fill in details below · No file leaves your device",
  orLabel: "OR DESCRIBE YOUR MODEL",
  placeholders: {
    fullName: "Full Name",
    email: "Email id",
    contactNumber: "Contact Number",
    companyName: "Company Name",
    schema: "IFC Version / Schema",
    tool: "Authoring tool (BIM software)",
    disciplines: "Disciplines included",
    elements: "Approximate element count (e.g. 12000)",
    notes:
      "Any other details — LOD level, project type, file size, specific concerns about AR compatibility…",
  },
  schemaOptions: [
    { value: "IFC2x3", label: "IFC2x3 (most common · Revit default)" },
    { value: "IFC4", label: "IFC4" },
    { value: "IFC4.1", label: "IFC4.1 / IFC4x1" },
    { value: "IFC4.3", label: "IFC4.3 (latest)" },
    { value: "unknown", label: "Not sure" },
  ],
  toolOptions: [
    { value: "Revit", label: "Autodesk Revit" },
    { value: "ArchiCAD", label: "Graphisoft ArchiCAD" },
    { value: "Tekla", label: "Trimble Tekla Structures" },
    { value: "Vectorworks", label: "Vectorworks" },
    { value: "Allplan", label: "Nemetschek Allplan" },
    { value: "other", label: "Other" },
  ],
  disciplineOptions: [
    { value: "arch-only", label: "Architecture only" },
    { value: "struct-only", label: "Structural only" },
    { value: "mep-only", label: "MEP only" },
    { value: "all", label: "Architecture + Structural + MEP (federated)" },
    { value: "infra", label: "Infrastructure / Civil" },
  ],
  primaryButton: "CHECK AR COMPATIBILITY",
  footerNote:
    "Powered by AI · Results in ~10 seconds · Your data never leaves your browser",
  loadingLabel: "ANALYSING IFC COMPATIBILITY…",
  resultCta: { href: "/demo", label: "BOOK A LIVE DEMO WITH YOUR MODEL" },
  rerunLabel: "Run another check",
};

// ——— Pricing teaser ———

export type PricingTeaserCard = {
  tier: string;
  name: string;
  desc: string;
  price: string;
  note: string;
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

export const pricingTeaserCards: PricingTeaserCard[] = [
  {
    tier: "For Small Teams",
    name: "Field",
    desc: "Small contractors and MEP subs running 1–2 active IFC projects on site.",
    price: "Custom",
    note: "built for your team · INR billing available",
    ctaLabel: "Get a Quote →",
    ctaHref: "/contact",
  },
  {
    tier: "For Growing Teams",
    name: "Project",
    desc: "Multiple active IFC projects, larger field crews, office-to-site sync. The full Delta ARBIM experience.",
    price: "Custom",
    note: "built for your team · INR billing available",
    ctaLabel: "Book a Demo →",
    ctaHref: "/demo",
    featured: true,
  },
  {
    tier: "For Large Contractors",
    name: "Enterprise",
    desc: "Unlimited IFC projects, custom integrations, API, SSO, white-label options, global site visits.",
    price: "Custom",
    note: "dedicated onboarding · SLA support",
    ctaLabel: "Contact Us →",
    ctaHref: "/contact",
  },
];

// ——— Simulation ———

export const simulationStats: { value: string; label: string; desc: string }[] = [
  { value: "±2cm", label: "Spatial Precision" , desc: "Enjoy the best precision in the industry for performing augmented reality construction and structural inspection projects."},
  { value: "60fps", label: "AR Rendering Speed", desc: "Our high-speed engine ensures seamless rendering even while working on complex IFC models." },
  { value: "IFC", label: "Open BIM Standard", desc: "This means 100% compatibility with industry standards (IFC2x3, IFC4), so you don’t need to change your favourite BIM software." },
  { value: "100%", label: "Offline Functionality", desc: "Built for the realities of the job site, our engine operates in basements, tunnels, and low-connectivity zones without data loss." },
];

// ——— Field demo ———

export type FieldDemoBulletIcon = "hex" | "zap" | "target" | "diamond";

export const fieldDemoBullets: { icon: FieldDemoBulletIcon; text: string }[] = [
  {
    icon: "hex",
    text: "Live IFC Model Alignment: Visualize the structural grid, MEP runs and slabs on the actual site.",
  },
  {
    icon: "zap",
    text: "Proactive Clash Detection: Observe an HVAC duct clash identified and visually indicated in AR BIM prior to installation.",
  },
  {
    icon: "target",
    text: "Markerless Geo-Anchoring: Enjoy the full field mobility without the use of QR codes, without printed markers, and without the need to be connected to GPS.",
  },
  {
    icon: "diamond",
    text: "LiDAR As-Built Check: Visualize a live LiDAR room scan against the as-designed IFC file- any structural anomaly is indicated in a few seconds.",
  },
];

// ——— AR Scan section ———

export type ArsLayerRow = { id: "struct" | "walls" | "hvac" | "water" | "elec"; label: string; dot: string };

export const arsLayers: ArsLayerRow[] = [
  { id: "struct", label: "Structure Layer", dot: "#888888" },
  { id: "walls", label: "Walls & Slabs", dot: "#4488FF" },
  { id: "hvac", label: "MEP — HVAC", dot: "#FF4444" },
  { id: "water", label: "MEP — Water", dot: "#44AAFF" },
  { id: "elec", label: "MEP — Electrical", dot: "#FFCC00" },
];

export const arsInfoItems: { title: string; desc: string }[] = [
  {
    title: "→ BIM Structure Layer",
    desc: "View grey columns, beams and slabs in your IFC file overlaid accurately to ensure that they are in place on-site before the concrete is poured.",
  },
  {
    title: "→ Wall & Slab Layer",
    desc: "Semi-transparent panels depict walls and holes in computerized construction-catch errors before they are actually constructed.",
  },
  {
    title: "→ MEP Pipes & Ducts",
    desc: "Visualize red HVAC, blue water, and yellow electrical systems. This AR BIM toggle allows you to isolate certain trades to inspect clashes in real-time.",
  },
  {
    title: "→ AR Anchor Points",
    desc: "LiDAR nodes fix the IFC model to physical coordinates to ensure that the augmented reality building overlay does not drift, and the accuracy is within ±2cm.",
  },
];

// ——— How it works ———

export type HowStepContent = {
  id: HowStepId;
  tag: string;
  title: string;
  desc: string;
  hudLabel: string;
};

export const howItWorksSteps: HowStepContent[] = [
  {
    id: 0,
    tag: "STEP 01",
    title: "Upload your IFC",
    hudLabel: "UPLOADING IFC",
    desc: "Import your IFC file directly into Delta ARBIM. The platform parses every structural element, MEP layer, and metadata automatically — no conversion, no manual setup required.",
  },
  {
    id: 1,
    tag: "STEP 02",
    title: "Select floor or zone",
    hudLabel: "SELECT ZONE",
    desc: "Choose the floor level and construction zone you want to verify. Delta ARBIM shows a live building tree — tap any floor to load its geometry.",
  },
  {
    id: 2,
    tag: "STEP 03",
    title: "Point & anchor",
    hudLabel: "ANCHORING MODEL",
    desc: "Using LiDAR and computer vision, Delta ARBIM locks the IFC model to real-world coordinates. No markers needed — just point at two known site features.",
  },
  {
    id: 3,
    tag: "STEP 04",
    title: "Walk the AR site",
    hudLabel: "AR OVERLAY LIVE",
    desc: "See the full IFC model overlaid on the physical site at true scale. Walk through walls, check MEP routing, and verify structural placement in real time.",
  },
  {
    id: 4,
    tag: "STEP 05",
    title: "Report & sync",
    hudLabel: "REPORT SYNCING",
    desc: "Capture AR screenshots, tag clash points with annotations, and push reports directly to your PM stack. Every issue is geo-tagged to centimeter accuracy.",
  },
];

// ——— Solutions by role ———

export type SolutionRoleKey = "gc" | "mep" | "owner" | "bim";

export type SolutionStat = { value: string; label: string };
export type SolutionCard = { title: string; desc: string };

export type SolutionRole = {
  key: SolutionRoleKey;
  tabLabel: string;
  stats: [SolutionStat, SolutionStat];
  heading: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  cards: [SolutionCard, SolutionCard, SolutionCard, SolutionCard];
};

export const solutionRoles: SolutionRole[] = [
  {
    key: "gc",
    tabLabel: "General Contractors",
    stats: [
      { value: "80%", label: "Less QA/QC" },
      { value: "30%", label: "Rework Cut" },
    ],
    heading: "Cut rework and delays on every build.",
    bullets: [
      "Visualise your IFC model in the exact position on the jobsite to verify design is executed correctly",
      "AR-powered QA/QC walkthroughs that spot deviations in minutes, not hours",
      "Compare as-built conditions against the IFC model and tag issues with a single tap",
      "Reduce coordination meetings by giving foremen direct visual access to the IFC model",
      "Works offline for basements, tunnels, and low-connectivity zones",
    ],
    ctaLabel: "Book a Demo for Your Team →",
    ctaHref: "/demo",
    cards: [
      {
        title: "Structural Verification",
        desc: "Confirm rebar placement, column positions, and slab elevations against the structural IFC model before concrete is poured.",
      },
      {
        title: "AR-Powered QA/QC",
        desc: "Replace paper-based checklists with live AR overlays. Walk the floor and see exactly where deviations exist.",
      },
      {
        title: "Design Coordination On-Site",
        desc: "Surface design conflicts in the field before they become construction conflicts. Share geo-tagged screenshots to BIM team.",
      },
      {
        title: "Faster Subcontractor Handoffs",
        desc: "Walk incoming subs through the IFC model on-site in AR. Reduce briefing time at critical handoff moments.",
      },
    ],
  },
  {
    key: "mep",
    tabLabel: "MEP & Specialty",
    stats: [
      { value: "79%", label: "Faster Detection" },
      { value: "60%", label: "Fewer Reroutes" },
    ],
    heading: "Route, verify, and install MEP without clashes.",
    bullets: [
      "Overlay HVAC ducts, water pipes, and electrical conduits independently in real-time AR",
      "Detect MEP-to-structure clashes on the floor before fabrication or installation begins",
      "Verify pipe sleeves, penetrations, and hanger positions against the coordinated IFC model",
      "Reduce coordination RFIs with visual evidence captured directly in AR on site",
      "Toggle individual MEP trades on/off to isolate your discipline",
    ],
    ctaLabel: "See MEP Clash Demo →",
    ctaHref: "/demo",
    cards: [
      {
        title: "MEP Routing Verification",
        desc: "See exactly where ducts, pipes, and conduits run in 3D space relative to the structure. Catch conflicts before installation.",
      },
      {
        title: "Sleeve & Penetration Check",
        desc: "Verify sleeve positions and wall penetrations against the MEP IFC model before concrete is placed.",
      },
      {
        title: "Clash Reporting",
        desc: "Tag a clash in AR, capture a geo-referenced screenshot, and push to BIM360 or Procore in under 30 seconds.",
      },
      {
        title: "Commissioning Walkthroughs",
        desc: "Compare installed MEP against the as-designed IFC model during commissioning. Document as-built for handover.",
      },
    ],
  },
  {
    key: "owner",
    tabLabel: "Owners & Developers",
    stats: [
      { value: "100%", label: "Design Visibility" },
      { value: "±2cm", label: "Accuracy" },
    ],
    heading: "See your investment built to specification.",
    bullets: [
      "Walk your site and see the IFC design intent overlaid on real construction — no drawing interpretation needed",
      "Compare as-built progress against the IFC model at any project stage",
      "LiDAR room scanning captures as-built geometry automatically for handover documentation",
      "Conduct design review walk-throughs with stakeholders before key decisions are locked in",
    ],
    ctaLabel: "Request a Site Demo →",
    ctaHref: "/demo",
    cards: [
      {
        title: "Progress Monitoring",
        desc: "Walk the site weekly and compare what is built against the IFC schedule.",
      },
      {
        title: "As-Built Documentation",
        desc: "Scan completed spaces, compare against IFC design intent, and generate deviation reports automatically.",
      },
      {
        title: "Stakeholder Design Reviews",
        desc: "Walk investors through the unbuilt design in AR at the real site location using your IFC model.",
      },
      {
        title: "Contractor Accountability",
        desc: "Generate geo-tagged issue reports tied to exact IFC coordinates. Build a complete audit trail.",
      },
    ],
  },
  {
    key: "bim",
    tabLabel: "BIM Managers",
    stats: [
      { value: "IFC", label: "Open Standard" },
      { value: "±2cm", label: "LiDAR Accuracy" },
    ],
    heading: "Bridge the gap between model and reality.",
    bullets: [
      "Walk any site and verify the as-built structure against your IFC coordination model in real-time AR",
      "Detect IFC-to-site discrepancies instantly — no printed drawings, no laptop required on site",
      "Generate geo-tagged clash and deviation reports tied to exact IFC element coordinates",
      "Share AR screenshots directly to Procore, BIM360, or any webhook from the field",
      "Validate contractor work against your coordinated federated IFC model before sign-off",
    ],
    ctaLabel: "See BIM Coordination Demo →",
    ctaHref: "/demo",
    cards: [
      {
        title: "IFC Model Validation",
        desc: "Walk the site and verify each IFC element is built to specification. Flag deviations in AR and log them with a single tap.",
      },
      {
        title: "Federated Model Overlay",
        desc: "Overlay your full federated IFC model — structural, MEP, and architectural — simultaneously on site to surface cross-discipline clashes in field conditions.",
      },
      {
        title: "Field Clash Documentation",
        desc: "Capture geo-referenced clash evidence directly in AR. Automatically attach to IFC element GUIDs for RFI or NCR workflows.",
      },
      {
        title: "As-Built Capture",
        desc: "LiDAR scan completed spaces and compare automatically against design intent IFC. Generate deviation reports for handover documentation.",
      },
    ],
  },
];
