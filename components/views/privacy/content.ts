export const privacyHeroCopy = {
  eyebrow: "LEGAL · PRIVACY",
  title: "Privacy Policy",
  desc: "Written in plain language — no legal jargon. This policy explains what we collect, why, how we protect it, and your rights. Short version: we only collect what we need, and we never sell your data.",
  metaLeft: "Last updated: April 2026",
  metaRight: "Applies to: Delta ARBIM.tech & Delta ARBIM app",
  highlights: [
    {
      title: "We never sell your data.",
      body: "Not to advertisers, not to partners, not to anyone.",
      icon: "lock",
    },
    {
      title: "Your IFC files are yours.",
      body: "Encrypted at rest, isolated per account, never accessed without permission.",
      icon: "ifc",
    },
    {
      title: "DPDPA 2023 compliant.",
      body: "Digital Personal Data Protection Act — India’s data protection law.",
      icon: "dpdpa",
    },
    {
      title: "Right to deletion.",
      body: "Ask us to delete your data anytime — done within 30 days.",
      icon: "delete",
    },
  ],
} as const;

export const privacyExploreStrip = {
  title: "Explore Delta ARBIM",
  links: [
    { href: "/", label: "Home" },
    { href: "/demo", label: "Book a Demo" },
    { href: "/pricing", label: "Pricing Plans" },
    { href: "/industry", label: "Industries" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ],
} as const;

export type PrivacyPolicyBlock =
  | { kind: "p"; body: string; tone?: "muted" | "strong" }
  | { kind: "ul"; items: string[] }
  | { kind: "blockquote"; title?: string; body: string }
  | {
      kind: "contactLine";
      prefix: string;
      emailLabel: string;
      emailHref: string;
      siteLabel: string;
      siteHref: string;
    }
  | { kind: "subheading"; text: string; underline?: boolean }
  | { kind: "labeledUl"; labelTone?: "white" | "orange"; items: { label: string; text: string }[] }
  | {
      kind: "linkParagraph";
      before: string;
      linkLabel: string;
      href: string;
      after: string;
    }
  | {
      kind: "partnershipGrid";
      items: {
        icon: "lock" | "mou" | "annual" | "visits";
        title: string;
        body: string;
        bullets?: string[];
      }[];
    }
  | {
      kind: "contactBox";
      intro: string;
      rows: { label: string; value: string; href?: string }[];
      footerBefore: string;
      footerLinkLabel: string;
      footerLinkHref: string;
      footerAfter: string;
    };

export type PrivacyPolicySection = {
  id: string;
  number: string;
  title: string;
  titleEmphasis?: string;
  blocks: PrivacyPolicyBlock[];
};

export const privacyPolicy = {
  titlePrefix: "The short version:",
  intro:
    "We only collect what we need to run Delta ARBIM and respond to your enquiries. We don't sell your data. We don't share it with advertisers. Your IFC files are encrypted and isolated. You can ask us to delete everything at any time.",
  sections: [
    {
      id: "who-we-are",
      number: "1.",
      title: "Who we are",
      blocks: [
        {
          kind: "p",
          body: "Delta ARBIM is a product of Shivlam, a technology company based in Ahmedabad, Gujarat, India. When this policy refers to 'Delta ARBIM', 'we', 'us', or 'our', it means Shivlam and the Delta ARBIM platform.",
        },
        {
          kind: "p",
          body: "We are the data controller for personal information collected through Delta ARBIM.tech and the Delta ARBIM mobile application (iOS and Android).",
        },
        {
          kind: "contactLine",
          prefix: "Contact:",
          emailLabel: "build@Delta ARBIM.tech",
          emailHref: "mailto:build@Delta ARBIM.tech",
          siteLabel: "shivlam.com",
          siteHref: "https://www.shivlam.com",
        },
      ],
    },
    {
      id: "what-we-collect",
      number: "2.",
      title: "What we collect",
      blocks: [
        { kind: "subheading", text: "Information you give us directly" },
        {
          kind: "ul",
          items: ["Demo request form: First name, last name, work email, company name, role, and optionally phone or WhatsApp number.",
            "Email enquiries: Your name, email address, and the content of your message.",
            "Pricing enquiry: Your work email address.",
            "Account registration: Name, work email, company name, and password (stored as a one-way hash — we never see your plain-text password).",
          ],
        },
        { kind: "subheading", text: "Information collected automatically" },
        {
          kind: "ul",
          items: ["Website analytics: Pages visited, time on page, referral source, browser type, and approximate location (country/city level). We do not track individuals across the web.",
            "App usage data: Feature interactions, session duration, crash reports, and device type — used only to improve the product.",
            "IFC model files: Files you upload are processed to render the AR overlay. They are stored encrypted and are never accessed by our team without your explicit permission.",
          ],
        },
        { kind: "subheading", text: "What we do NOT collect" },
        {
          kind: "ul",
          items: [
            "Payment card details — handled by a PCI-compliant third-party processor.",
            "Biometric data, government IDs, or sensitive personal information.",
            "Advertising profiles or cross-site tracking data.",
          ],
        },
        {
          kind: "blockquote",
          title: "Your IFC data is yours.",
          body: "BIM model files uploaded to Delta ARBIM are encrypted at rest, isolated per account, and never shared with any third party. We treat your project data as confidential construction information.",
        },
      ],
    },
    {
      id: "why-we-collect",
      number: "3.",
      title: "Why we collect it",
      blocks: [
        {
          kind: "ul",
          items: [
            "To respond to demo and pricing requests — so we can reach you within 24 hours.",
            "To provide the Delta ARBIM service — account management, IFC model processing, and AR overlay delivery.",
            "To send product updates — only if you've explicitly opted in. Unsubscribe anytime in one click.",
            "To improve the product — anonymised usage data helps us understand what's working.",
            "To comply with legal obligations — including tax records, invoicing, and applicable regulations.",
          ],
        },
        {
          kind: "blockquote",
          body: "We will never sell your data, share it with advertisers, or use it for any purpose not listed above.",
        },
      ],
    },
    {
      id: "storage-security",
      number: "4.",
      title: "How we store and protect your data",
      blocks: [
        {
          kind: "p",
          body: "All data is stored on secured servers with AES encryption at rest and TLS 1.2+ in transit. Access is strictly limited to team members who need it to deliver the service.",
        },
        {
          kind: "p",
          body: "IFC model files are stored encrypted in isolated per-account storage. They are never accessible by other users or teams.",
        },
        { kind: "subheading", text: "Retention periods" },
        {
          kind: "ul",
          items: [
            "Demo / enquiry data: Up to 24 months, or until you request deletion.",
            "Account data: Duration of subscription plus 90 days after cancellation for data export.",
            "IFC model files: Duration of active subscription. Deleted within 30 days of account closure.",
            "Billing records: 7 years as required by Indian tax law.",
          ],
        },
      ],
    },
    {
      id: "sharing",
      number: "5.",
      title: "Who we share data with",
      blocks: [
        {
          kind: "p",
          body: "We do not sell personal data. We share data only with trusted service providers necessary to operate the platform:",
        },
        {
          kind: "ul",
          items: ["Cloud infrastructure: To host the platform and store data securely.",
            "Payment processing: Subscription billing only. Card details go directly to the payment processor — we never see them.",
            "Email delivery: Transactional emails (confirmations, invoices, updates).",
            "Analytics: Anonymised, aggregated data only. No personal identifiers.",
          ],
        },
        {
          kind: "p",
          body: "All providers are contractually required to comply with applicable data protection laws. We do not share data with any party for advertising or marketing purposes.",
        },
        {
          kind: "p",
          body: "We may disclose data if required by Indian law, a court order, or to protect user safety.",
        },
      ],
    },
    {
      id: "cookies",
      number: "6.",
      title: "Cookies",
      blocks: [
        { kind: "subheading", text: "What we use" },
        {
          kind: "ul",
          items: ["Essential cookies: Required for the site to work — session management, form security, language preference.",
            "Analytics cookies: Anonymised page-view tracking. No personal identification. Opt out via browser settings.",
          ],
        },
        { kind: "subheading", text: "What we don't use" },
        {
          kind: "ul",
          items: [
            "No advertising or retargeting cookies.",
            "No third-party tracking pixels (Facebook Pixel, Google Ads, etc.).",
            "No cross-site tracking of any kind.",
          ],
        },
      ],
    },
    {
      id: "rights",
      number: "7.",
      title: "Your rights",
      blocks: [
        {
          kind: "linkParagraph",
          before: "Email us at ",
          linkLabel: "build@Delta ARBIM.tech",
          href: "mailto:build@Delta ARBIM.tech",
          after: " to exercise any of the following rights. We respond within 5 business days.",
        },
        {
          kind: "ul",
          items: ["Access: Request a copy of the personal data we hold about you.",
            "Correction: Ask us to correct inaccurate or incomplete data.",
            "Deletion: Ask us to delete your data — done within 30 days, except where legally required to retain (billing records).",
            "Portability: Receive your data in a structured, machine-readable format.",
            "Opt-out: Unsubscribe from marketing emails at any time.",
            "Objection: Object to processing of your data for certain purposes.",
          ],
        },
        {
          kind: "blockquote",
          title: "Indian users:",
          body: "These rights are provided in accordance with the Digital Personal Data Protection Act, 2023 (DPDPA). We are committed to DPDPA compliance and will update this policy as implementing rules are finalised by the Government of India.",
        },
      ],
    },
    {
      id: "partnerships",
      number: "8.",
      title: "Partnership, MOU & ",
      titleEmphasis: "Engagement Terms",
      blocks: [
        {
          kind: "p",
          body: "Delta ARBIM operates as a long-term construction technology partner — not just a software vendor. The following terms govern how we work with clients, from data agreements to on-site engagement.",
        },
        {
          kind: "partnershipGrid",
          items: [
            {
              icon: "lock",
              title: "Data Security & Confidentiality",
              body: "All IFC models, project data, and BIM information shared with Delta ARBIM are treated as confidential. Data is encrypted at rest and in transit, isolated per client account, and never shared with third parties. Clients may request a signed NDA before sharing any project files. Contact build@Delta ARBIM.tech to initiate.",
            },
            {
              icon: "mou",
              title: "IFC-Based MOU",
              body: "Delta ARBIM is open to formal Memoranda of Understanding (MOU) with construction companies, BIM consultants, and developers for long-term IFC-based collaboration. An MOU establishes a structured relationship covering data handling, platform access, support commitments, and roadmap input.",
            },
            {
              icon: "annual",
              title: "Annual Contract",
              body: "1-year subscription contracts are available for all plan tiers — Field, Project, and Enterprise. Annual contracts provide price stability, priority roadmap access, and dedicated onboarding support. INR billing with GST-compliant invoicing available for Indian entities.",
            },
            {
              icon: "visits",
              title: "On-Site Visits",
              body: "Team Delta ARBIM travels to any country for live AR demonstrations and onboarding. Subject to client-provided support:",
              bullets: [
                "Return travel (flights / ground transport)",
                "Accommodation for the duration of the visit",
                "Meals and on-site access arrangements",
                "Any relevant local logistics",
              ],
            },
          ],
        },
        {
          kind: "blockquote",
          body: "To initiate a partnership, MOU, annual contract, or site visit — email build@Delta ARBIM.tech with your company name, country, and what you're looking to explore. We respond within 24 hours. All engagement terms are formalised in writing before any work begins.",
        },
      ],
    },
    {
      id: "children",
      number: "9.",
      title: "Children's privacy",
      blocks: [
        {
          kind: "linkParagraph",
          before:
            "Delta ARBIM is a professional construction technology platform intended for adults in a business context. We do not knowingly collect personal data from anyone under 18. If you believe a minor has submitted information to us, contact ",
          linkLabel: "build@Delta ARBIM.tech",
          href: "mailto:build@Delta ARBIM.tech",
          after: " and we will delete it promptly.",
        },
      ],
    },
    {
      id: "changes",
      number: "10.",
      title: "Changes to this policy",
      blocks: [
        {
          kind: "p",
          body: 'We may update this Privacy Policy as the platform evolves or regulations change. Material changes will be reflected in the "Last updated" date above and communicated to active subscribers by email.',
        },
        {
          kind: "p",
          body: "Continued use of Delta ARBIM after a policy update constitutes acceptance of the revised policy.",
        },
      ],
    },
    {
      id: "contact",
      number: "11.",
      title: "Contact us",
      blocks: [
        {
          kind: "p",
          body: "Questions about this policy, data rights requests, partnership enquiries, or site visit requests — we reply personally to every message within 24 hours.",
        },
        {
          kind: "contactBox",
          intro: "",
          rows: [
            { label: "Email", value: "build@Delta ARBIM.tech", href: "mailto:build@Delta ARBIM.tech" },
            { label: "WhatsApp", value: "+91 8460 47 3271", href: "https://wa.me/918460473271" },
            { label: "Website", value: "Delta ARBIM.tech", href: "https://Delta ARBIM.tech" },
          ],
          footerBefore: "Built by ",
          footerLinkLabel: "Shivlam",
          footerLinkHref: "https://www.shivlam.com",
          footerAfter: " · Ahmedabad, Gujarat, India",
        },
      ],
    },
  ] satisfies PrivacyPolicySection[],
} as const;

