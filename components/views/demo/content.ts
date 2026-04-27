import type { LeadCaptureCopy } from "@/components/shared/LeadCaptureSection";
import type { IfcCheckerCopy } from "@/components/shared/IfcCheckerSection";
import type { StatsStripItemV2 } from "@/components/views/contact/StatsStrip";

export const demoLeadCopy: LeadCaptureCopy = {
  eyebrow: "Book your session",
  titlePrefix: "See Delta ARBIM on",
  titleEmphasis: "your actual site.",
  body:
    "Bring your IFC model. We bring it to life in real-time AR — so you see exactly what Delta ARBIM does for your specific project and team.",
  bullets: [
    {
      title: "30-minute live session",
      desc: "Using your actual IFC model, not a generic demo file",
    },
    {
      title: "Clash detection on your layers",
      desc: "MEP, structural, architectural — side by side in AR",
    },
    {
      title: "Direct engineering team access",
      desc: "No sales script. Real answers to technical questions",
    },
    {
      title: "Early access offer",
      desc: "Demo attendees qualify for 30% off at launch",
    },
    {
      title: "Remote or on-site",
      desc: "Available globally. On-site visits available for Enterprise",
    },
  ],
  quickLinks: [],
  footNote:
    "We respond within 24 hours — No commitments. No sales pressure. Cancel anytime.",
  form: {
    title: "Request Your Demo",
    subtitle: "We'll confirm within 24 hours with a time that works for you.",
    submit: "Book my free demo",
    notePrefix: "No commitments. No credit card.",
    privacy: "Privacy Policy",
    emailSubject: "Delta ARBIM — Demo Request",
    mailHeader: "Demo request",
    waText: "Hi Delta ARBIM, I'd like to book a demo.",
    fields: [
      {
        key: "firstName",
        kind: "text",
        label: "First Name",
        placeholder: "Rahul",
        required: true,
        autoComplete: "given-name",
      },
      {
        key: "lastName",
        kind: "text",
        label: "Last Name",
        placeholder: "Sharma",
        required: true,
        autoComplete: "family-name",
      },
      {
        key: "email",
        kind: "email",
        label: "Work Email",
        placeholder: "rahul@company.com",
        required: true,
        autoComplete: "email",
      },
      {
        key: "phone",
        kind: "tel",
        label: "Phone / WhatsApp",
        placeholder: "+91 84604 73271",
        required: false,
        autoComplete: "tel",
      },
      {
        key: "company",
        kind: "text",
        label: "Company",
        placeholder: "ABC Constructions",
        required: true,
        autoComplete: "organization",
      },
      {
        key: "country",
        kind: "text",
        label: "Country",
        placeholder: "India",
        required: false,
        autoComplete: "country-name",
      },
      {
        key: "role",
        kind: "select",
        label: "Your Role",
        placeholder: "Select your role",
        required: true,
        options: [
          "General Contractor",
          "MEP Contractor",
          "Project Owner / Developer",
          "Architect / BIM Manager",
          "Construction Tech Buyer",
          "Defence / Government",
          "Other",
        ],
        colSpan: 2,
      },
      {
        key: "project",
        kind: "textarea",
        label: "Tell us about your project (optional but helps us prepare)",
        placeholder:
          "E.g. — 12-floor residential tower, IFC from Revit, need MEP clash verification before floor 4 slab pour…",
        required: false,
        rows: 4,
        colSpan: 2,
      },
    ],
    successTitle: "Request received!",
    successBody: "We’ll reach out within 24 hours to schedule your demo.",
    waPrefix: "Prefer WhatsApp?",
    waCta: "Chat on WhatsApp",
  },
};

export const demoIfcCheckerCopy: IfcCheckerCopy = {
  sectionId: "ifc-check",
  sectionAriaId: "ifc-check-h",
  sectionClassName: "w-full bg-[#1A1A1A]",
  eyebrow: "Free IFC Compatibility Check",
  titleBefore: "Is your IFC model",
  titleEmphasis: "AR-ready?",
  desc:
    "Before your demo, find out if your IFC file is technically compatible with Delta ARBIM’s high-precision AR overlay engine. Describe your model—our AI-driven system checks it against industry-standard augmented reality requirements in seconds.",
  leftChecklist: [
    "IFC version compatibility (IFC2x3, IFC4, IFC4.1+)",
    "Geometry type — does it contain 3D elements Delta ARBIM can render",
    "Discipline layers present — structural, MEP, architectural",
    "Spatial anchoring — IfcSite / IfcBuilding coordinate data",
    "File size and element count — performance estimate",
    "Recommendations to optimise for AR if needed",
  ],
  privacyNote:
    "⚠ No file is uploaded to our servers. This tool uses AI to analyse your model description and metadata only. Your IFC data stays with you.",
  leftCtas: [],
  rightTitle: "Check your IFC model",
  rightSubtitle:
    "Describe your model or paste metadata — we'll assess AR compatibility instantly.",
  dropTitle: "DROP YOUR IFC FILE HERE FOR METADATA READ",
  dropSubtitle: "or fill in the details below · No file leaves your device",
  orLabel: "OR DESCRIBE YOUR MODEL",
  placeholders: {
    fullName: "Full Name",
    email: "Email id",
    contactNumber: "Contact Number",
    companyName: "Company Name",
    schema: "IFC Version / Schema",
    tool: "Authoring tool (BIM software)",
    disciplines: "Disciplines included in model",
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

export const demoStatsStrip: readonly StatsStripItemV2[] = [
  { value: "30%", label: "Rework reduction", sub: "Sites using AR BIM overlay" },
  { value: "80%", label: "Less QA/QC time", sub: "2 hours to 20 minutes" },
  { value: "<60s", label: "IFC to AR", sub: "Model aligned on site" },
  { value: "±2cm", label: "Spatial accuracy", sub: "LiDAR + CV anchoring" },
] as const;

export type DemoWhatHappensColumn = {
  stepLabel: string;
  heading: string;
  body: string;
  footerTag: string;
};

export const demoWhatHappensCopy = {
  eyebrow: "What happens in your demo",
  title: {
    before: "30 minutes.",
    emphasis: "Your IFC model.",
    after: "Live.",
  },
  desc:
    "No slides. No generic walkthroughs. We use your actual project file so you see exactly how our AR BIM engine performs for your specific digital construction needs.",
  columns: [
    {
      stepLabel: "01 — MINUTES 0-5",
      heading: "We load your IFC",
      body:
        "Send us your IFC file before the session. We have it loaded, parsed, and ready to overlay before the call starts. No setup time wasted—just immediate BIM to AR results.",
      footerTag: "YOUR FILE · ZERO SETUP",
    },
    {
      stepLabel: "02 — MINUTES 5-20",
      heading: "Live AR walkthrough",
      body:
        "We align your IFC model to a real site, toggle structural and MEP layers, trigger automated clash detection, and showcase field reporting—all live on screen with ±2cm spatial accuracy.",
      footerTag: "LIVE · YOUR MODEL · REAL AR",
    },
    {
      stepLabel: "03 — MINUTES 20-30",
      heading: "Your questions, our engineers",
      body:
        "Get direct access to the team in Ahmedabad who built Delta ARBIM. Discuss IFC compatibility, device requirements, INR pricing, and API integrations—no sales scripts, just engineering.",
      footerTag: "NO SALES SCRIPT · ENGINEERING TEAM",
    },
  ] as const satisfies readonly DemoWhatHappensColumn[],
} as const;

/** Demo page hero — field video + reels strip */
export const demoHeroCopy = {
  eyebrow: "REAL SITE · REAL AR · REAL RESULTS",
  title: {
    before: "See AR BIM on a",
    emphasis: "live",
    after: "construction site.",
  },
  desc:
    "Watch our engineer walk onto an active job site, open Delta ARBIM, and align a complex IFC model in under 60 seconds. Witness how augmented reality construction technology detects a critical duct-to-beam clash before the concrete is even poured, saving lakhs in potential rework costs.",
  mainVideo: {
    hudLeft: "● LIVE FIELD RECORDING",
    badge: "SEC · REAL SITE",
    hudRight: "Delta ARBIM // AN ACTIVE SITE",
    stats: [
      { value: "±2cm", label: "ACCURACY" },
      { value: "<60s", label: "ALIGN TIME" },
      { value: "IFC", label: "FORMAT" },
      { value: "60fps", label: "AR RENDER" },
    ],
    captionTitle: "Active construction site — MEP clash detected",
    captionSub:
      "DUCT CLASH FLAGGED BEFORE INSTALLATION · REWORK PREVENTED",
  },
  inThisVideo: "IN THIS VIDEO",
  videoTags: [
    "IFC MODEL ALIGNED",
    "MEP CLASH DETECTION",
    "LiDAR ANCHORING",
    "REAL SITE · NO STUDIO",
    "UNDER 60 SECONDS",
  ] as const,
  /** Set `youtubeVideoId` and/or `mp4Src` to play real media in the lightbox; empty shows the placeholder. */
  videoEmbed: {
    vimeoId: "1184717551",
    youtubeVideoId:"",
    mp4Src: "",
  },
  videoModal: {
    closeLabel: "CLOSE",
    placeholderTitle: "PASTE YOUR VIDEO EMBED HERE",
    placeholderSubtitle: "YouTube iframe or direct MP4 video tag",
  },
  reels: [
    {
      clipLabel: "SITE CLIP",
      tag: "IFC OVERLAY",
      caption: "BIM model aligned on active site in under 60s",
      vimeoId:"1184720044",
      youtubeVideoId: "",
      mp4Src: "",
    },
    {
      clipLabel: "SITE CLIP",
      tag: "CLASH DETECT",
      caption: "MEP duct clash caught before installation begins",
      vimeoId:"1184718774",
      youtubeVideoId: "",
      mp4Src: "",
    },
    {
      clipLabel: "SITE CLIP",
      tag: "LIDAR SCAN",
      caption: "Room scanned, deviation flagged in real-time AR",
      vimeoId:"",
      youtubeVideoId: "",
      mp4Src: "",
    },
  ] as const,
  reelsFooter: {
    left: "FROM THE FIELD — INSTAGRAM REELS",
    follow: "FOLLOW @Delta ARBIM",
  },
} as const;

