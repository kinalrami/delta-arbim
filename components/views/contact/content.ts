export const contactHeroCopy = {
  eyebrow: "CONTACT US",
  titlePrefix: "We reply to",
  titleEmphasis: "every message.",
  desc:
    "Demo requests, pricing questions, partnerships, technical queries, or just a hello — our engineering team reads and responds to everything personally within 24 hours.",
} as const;

export const contactStats: { value: string; label: string }[] = [
  { value: "24h", label: "Response Time" },
  { value: "6", label: "Languages Supported" },
  { value: "🌐", label: "Global Teams Welcome" },
  { value: "0", label: "Bots — Always Human" },
] as const;

export const contactHelpCopy = {
  eyebrow: "WHAT CAN WE HELP WITH",
  titlePrefix: "Not sure what to",
  titleEmphasis: "ask for?",
  desc:
    "Here are the most common reasons people contact us. Click any card to get the right link (demo, pricing, or contact).",
} as const;

export type ContactHelpCardIconKey =
  | "sparkles"
  | "pricing"
  | "handshake"
  | "plane"
  | "settings"
  | "globe";

export type ContactHelpCard = {
  key: string;
  title: string;
  desc: string;
  tag: string;
  icon: ContactHelpCardIconKey;
};

export const contactHelpCards: ContactHelpCard[] = [
  {
    key: "demo",
    title: "Book a Demo",
    desc: "See DeltaARBIM live on your actual IFC model. 30-minute walkthrough with our engineering team — no sales script, not a generic file.",
    tag: "→ 30 MIN · YOUR IFC MODEL · FREE",
    icon: "sparkles",
  },
  {
    key: "pricing",
    title: "Pricing & Plans",
    desc: "Get a custom quote for your team size and project scope. INR billing available with GST-compliant invoicing. Annual and project contracts open.",
    tag: "→ CUSTOM QUOTE · INR · 24H RESPONSE",
    icon: "pricing",
  },
  {
    key: "partner",
    title: "Partnership / MOU",
    desc: "Interested in a formal long-term partnership or IFC-based MOU? Open to structured relationships with contractors, BIM consultants, and developers.",
    tag: "→ IFC MOU · ENTERPRISE · LONG-TERM",
    icon: "handshake",
  },
  {
    key: "visit",
    title: "Site Visit Request",
    desc: "Team DeltaARBIM travels globally for on-site AR demonstrations and onboarding. Available for Enterprise. Client provides travel and accommodation.",
    tag: "→ ANY COUNTRY · ENTERPRISE PLAN",
    icon: "plane",
  },
  {
    key: "tech",
    title: "Technical Question",
    desc: "IFC compatibility, device requirements, offline capability, LiDAR accuracy, Procore/BIM360 integration — our engineering team answers directly.",
    tag: "→ ENGINEERING TEAM · DIRECT ACCESS",
    icon: "settings",
  },
  {
    key: "global",
    title: "International Teams",
    desc: "Based outside India? We work with construction teams globally. Reach out in your language — EN, AR, FR, ES, DE, and PT all supported.",
    tag: "→ GLOBAL · 6 LANGUAGES · INR OR LOCAL",
    icon: "globe",
  },
] as const;

export const contactHelpQuickLinks: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/demo", label: "Book a Demo" },
  { href: "/pricing", label: "Pricing Plans" },
  { href: "/industry", label: "Industries" },
  { href: "/about", label: "About Us" },
  { href: "/privacy", label: "Privacy Policy" },
] as const;

export const contactMainCopy = {
  reachHeading: "Reach Us Directly",
  emailLabel: "Email",
  emailSub: "General enquiries, pricing, partnerships",
  phoneLabel: "Phone / WhatsApp",
  phoneSub: "Mon – Sat, 9am – 7pm IST",
  preferWaHeading: "Prefer WhatsApp?",
  preferWaCta: "Chat on WhatsApp",
  preferWaNote: "Fastest response for Indian construction teams",
  followHeading: "Follow DeltaARBIM",
  promiseQuote:
    "We reply within 24 hours. Every message is read and responded to personally by our engineering team — not a bot, not a ticket queue. You write to a person, a person writes back.",
  officeHeading: "Office · Headquarters",
  officeBodyLines: [
    "Ahmedabad, Gujarat, India",
    "Built by Shivlam — Scalable Tech for Everyone",
  ],
} as const;

export const contactSocialLinks = {
  linkedin: "https://linkedin.com/company/deltaarbim/",
  instagram: "https://www.instagram.com/deltaarbim/",
  facebook: "https://www.facebook.com/deltaarbim/",
} as const;

export const contactWaDirectHref =
  "https://wa.me/918460473271?text=Hi%20DeltaARBIM%2C%20I%27d%20like%20to%20get%20in%20touch.";

export type EnquiryType = "general" | "demo" | "pricing" | "partnership" | "sitevisit";

export const enquiryTabs: { id: EnquiryType; label: string; display: string }[] = [
  { id: "general", label: "GENERAL", display: "GENERAL ENQUIRY" },
  { id: "demo", label: "BOOK DEMO", display: "BOOK A DEMO" },
  { id: "pricing", label: "PRICING", display: "PRICING & PLANS" },
  { id: "partnership", label: "PARTNERSHIP", display: "PARTNERSHIP / MOU" },
  { id: "sitevisit", label: "SITE VISIT", display: "SITE VISIT REQUEST" },
] as const;

export const contactFormCopy = {
  titlePrefix: "Send us a",
  titleEmphasis: "message.",
  desc:
    "Fill in what's relevant — as much or as little as you like. We'll take it from there. Every enquiry type gets the same personal response.",
  submit: "Send Message →",
  notePrefix: "We reply within 24 hours.",
  privacy: "Privacy Policy",
  successTitle: "Message received.",
  successBody:
    "Thanks for reaching out. A member of Team DeltaARBIM will reply to you personally within 24 hours — check your inbox and spam just in case.",
  fields: {
    firstName: { label: "First Name", placeholder: "Rahul", required: true, autoComplete: "given-name" },
    lastName: { label: "Last Name", placeholder: "Sharma", required: false, autoComplete: "family-name" },
    email: { label: "Work Email", placeholder: "rahul@company.com", required: true, autoComplete: "email" },
    company: { label: "Company", placeholder: "ABC Constructions", required: false, autoComplete: "organization" },
    country: { label: "Country", placeholder: "India", required: false, autoComplete: "country-name" },
    phone: { label: "Phone / WhatsApp", placeholder: "+91 84604 73271", required: false, autoComplete: "tel" },
    enquiryType: { label: "Enquiry Type", required: false },
    message: {
      label: "Message",
      placeholder: "Tell us about your project, team size, what you'd like to explore, or anything else…",
      required: true,
    },
  },
} as const;

