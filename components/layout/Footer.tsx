import Image from "next/image";
import Link from "next/link";

const platformLinks = [
  { href: "/#what", label: "What Is Delta ARBIM" },
  { href: "/#ars", label: "AR Live Demo" },
  { href: "/#how", label: "How It Works" },
  { href: "/#features", label: "Features" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/#simulation", label: "AR Simulation" },
] as const;

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/industry", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/demo", label: "Book a Demo" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy", label: "Privacy Policy" },
] as const;

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex size-9 items-center justify-center border border-[#2e2e2e] bg-[#222222] text-[#888888] transition-all duration-[0.22s] hover:border-[#FF9933] hover:text-[#FF9933] sm:size-10">
      {children}
    </span>
  );
}

function BrandBlock() {
  return (
    <>
      <div className="mb-3">
        <Image
          src="/delta-full.jpeg"
          alt="Delta ARBIM"
          width={220}
          height={56}
          unoptimized
          className="h-12 w-auto md:h-16"
        />
      </div>
      <p className="mb-5 max-w-full text-[13px] leading-[1.7] text-[#888888] sm:max-w-[320px] lg:max-w-[280px]">
        IFC-based augmented reality BIM platform for construction. Overlay live IFC models on real sites, detect clashes, and verify as-built conditions — on iOS & Android.
      </p>
      <div className="flex flex-wrap gap-2.5" aria-label="Social media links">
        <a
          href="https://linkedin.com/company/Delta ARBIM/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <SocialIcon>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </SocialIcon>
        </a>
        <a
          href="https://www.instagram.com/Delta ARBIM/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <SocialIcon>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </SocialIcon>
        </a>
        <a
          href="https://www.facebook.com/Delta ARBIM/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <SocialIcon>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </SocialIcon>
        </a>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-[#2e2e2e] bg-[#1a1a1a] text-white"
    >
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-14 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 gap-10 md:border-b border-[#2e2e2e] md:pb-10 md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:border-b-0 md:pb-0 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-10 lg:gap-y-0">
          <div className="md:col-span-2 md:border-b md:border-[#2e2e2e] md:pb-10 lg:col-span-1 lg:border-b-0 lg:pb-0">
            <BrandBlock />
          </div>

          <div>
            <h4 className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF9933] sm:mb-4">
              Platform
            </h4>
            <ul className="flex list-none flex-col gap-2 sm:gap-2.5">
              {platformLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-block text-[13px] leading-snug text-[#888888] transition-colors duration-[0.22s] hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF9933] sm:mb-4">
              Company
            </h4>
            <ul className="flex list-none flex-col gap-2 sm:gap-2.5">
              {companyLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-block text-[13px] leading-snug text-[#888888] transition-colors duration-[0.22s] hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[#2e2e2e] pt-10 md:col-span-2 md:border-t-0 md:pt-0 lg:col-span-1">
            <h4 className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF9933] sm:mb-4">
              Contact
            </h4>
            <p className="mb-2 text-[13px] leading-relaxed text-[#888888]">
              <a
                href="mailto:build@deltaarbim.tech"
                className="break-all text-[#FF9933] hover:underline"
              >
                build@deltaarbim.tech
              </a>
            </p>
            <p className="mb-2 text-[13px] leading-relaxed text-[#888888]">
              <a href="tel:+918460473271" className="text-[#FF9933] hover:underline">
                +91 8460 47 3271
              </a>
            </p>
            <p className="mb-2 text-[13px] leading-relaxed text-[#888888]">
              <a
                href="https://wa.me/918460473271"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF9933] hover:underline"
              >
                WhatsApp Us
              </a>
            </p>
            <p className="mt-3 text-xs text-[#555555]">India · Global Teams Welcome</p>
            <p className="text-xs text-[#555555]">EN · AR · FR · ES · DE · PT</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2e2e2e]">
        <div className="mx-auto flex max-w-[1160px] flex-col gap-4 px-4 py-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 sm:px-6">
          <span className="max-w-full font-mono text-[10px] leading-relaxed tracking-[0.04em] text-[#555555] sm:text-[11px] lg:whitespace-nowrap">
            © {new Date().getFullYear()} Delta ARBIM · Built by Shivlam, Ahmedabad · IFC-First AR BIM Platform
          </span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#888888] transition-colors hover:text-white sm:text-[11px]"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#888888] transition-colors hover:text-white sm:text-[11px]"
            >
              Contact
            </Link>
            <Link
              href="/demo"
              className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#888888] transition-colors hover:text-white sm:text-[11px]"
            >
              Demo
            </Link>
            <Link
              href="/pricing"
              className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#888888] transition-colors hover:text-white sm:text-[11px]"
            >
              Pricing
            </Link>
          </div>
          {/* <span className="font-mono text-[10px] text-[#555555] sm:ms-auto lg:ms-0">
            🌐 6 languages
          </span> */}
        </div>
      </div>
    </footer>
  );
}
