"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const LANG_STORAGE = "da_lang";

const langConfig = {
  en: { dir: "ltr" as const, label: "EN", native: "English", flag: "🇬🇧" },
  ar: { dir: "rtl" as const, label: "AR", native: "العربية", flag: "🇦🇪" },
  fr: { dir: "ltr" as const, label: "FR", native: "Français", flag: "🇫🇷" },
  es: { dir: "ltr" as const, label: "ES", native: "Español", flag: "🇪🇸" },
  de: { dir: "ltr" as const, label: "DE", native: "Deutsch", flag: "🇩🇪" },
  pt: { dir: "ltr" as const, label: "PT", native: "Português", flag: "🇧🇷" },
} as const;

type LangKey = keyof typeof langConfig;

const navItems = [
  { href: "/", label: "Home" },
  { href: "/industry", label: "Industries" },
  { href: "/about", label: "About Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blogs", label: "Blogs" },
  { href: "/demo", label: "Book Demo" },
  { href: "/contact", label: "Contact" },
] as const;

function applyLang(lang: LangKey) {
  const cfg = langConfig[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = cfg.dir;
  try {
    localStorage.setItem(LANG_STORAGE, lang);
  } catch {
    /* ignore */
  }
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState<LangKey>("en");
  const langWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(LANG_STORAGE) as LangKey | null;
    const initial =
      stored && stored in langConfig ? (stored as LangKey) : "en";
    setLang(initial);
    applyLang(initial);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setLangOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const closeLang = useCallback(() => setLangOpen(false), []);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!langWrapRef.current?.contains(e.target as Node)) closeLang();
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [closeLang]);

  const selectLang = (key: LangKey) => {
    setLang(key);
    applyLang(key);
    setLangOpen(false);
  };

  const linkClass = (href: string) => {
    const active =
      href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`);
    return [
      "font-mono text-[11px] font-medium uppercase tracking-[0.08em] transition-colors duration-[0.22s]",
      active ? "text-white" : "text-[#888888] hover:text-white",
    ].join(" ");
  };

  const mobileLinkClass = (href: string) => {
    const active =
      href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`);
    return [
      "block border-b border-[#2e2e2e] py-4 font-mono text-sm font-medium uppercase tracking-[0.1em] transition-colors duration-[0.22s] last:border-b-0",
      active ? "text-[#FF9933]" : "text-[#aaaaaa] hover:text-white",
    ].join(" ");
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="fixed top-0 right-0 left-0 z-[200] flex items-center border-b border-white/[0.06] bg-[#0d0d0d]/[0.96] backdrop-blur-[14px]"
      >
        <div className="mx-auto flex w-full items-center justify-between gap-2 sm:gap-3 px-5 sm:px-8 lg:px-14 py-2">
          <Link
            href="/"
            className="flex min-w-0 shrink items-center"
            aria-label="Delta ARBIM home"
          >
            {/* Circular mask hides opaque corner pixels when the asset is a round mark on a square canvas */}
            <span className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full md:size-16">
              <Image
                src="/logo.png"
                alt="Delta ARBIM"
                width={220}
                height={56}
                priority
                className="h-full w-full object-contain object-center"
              />
            </span>
          </Link>

          <ul
            className="hidden list-none items-center gap-5 min-[861px]:flex min-[861px]:gap-[22px]"
            role="list"
          >
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={linkClass(href)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
            <span className="hidden border border-[#FF9933]/30 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#FF9933] md:inline">
              Early Access
            </span>

            {/* <div className="relative" ref={langWrapRef}>
              <button
                type="button"
                id="langBtn"
                className={`flex cursor-pointer items-center gap-1.5 border border-[#2e2e2e] bg-[#1a1a1a] px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-[#aaaaaa] transition-colors duration-[0.22s] hover:border-[#FF9933] hover:text-[#FF9933] sm:px-3 sm:text-[11px] ${langOpen ? "border-[#FF9933] text-[#FF9933]" : ""}`}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                aria-label="Select language"
                onClick={(e) => {
                  e.stopPropagation();
                  setLangOpen((o) => !o);
                }}
              >
                <span>{langConfig[lang].label}</span>
                <ChevronDown
                  className={`size-4 shrink-0 transition-transform duration-[0.22s] sm:size-3.5 ${langOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              <div
                id="langDropdown"
                role="listbox"
                className={`absolute top-[calc(100%+6px)] right-0 z-[300] min-w-[160px] border border-[#2e2e2e] bg-[#1a1a1a] shadow-[0_8px_24px_rgba(0,0,0,0.5)] rtl:right-auto rtl:left-0 ${langOpen ? "block" : "hidden"}`}
              >
                {(Object.keys(langConfig) as LangKey[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    role="option"
                    aria-selected={lang === key}
                    className={`flex w-full cursor-pointer items-center gap-2.5 border-none bg-transparent px-3.5 py-2.5 text-left transition-colors duration-[0.22s] hover:bg-[#222222] ${lang === key ? "[&_.lname]:text-[#FF9933]" : ""}`}
                    onClick={() => selectLang(key)}
                  >
                    <span className="shrink-0 text-[15px]" aria-hidden>
                      {langConfig[key].flag}
                    </span>
                    <span className="lname font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-[#aaaaaa]">
                      {langConfig[key].label}
                    </span>
                    <span className="ms-auto text-xs text-[#555555] lnative">
                      {langConfig[key].native}
                    </span>
                  </button>
                ))}
              </div>
            </div> */}

            <Link
              href="/demo"
              className="hidden whitespace-nowrap bg-[#FF9933] px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-black transition-opacity duration-[0.22s] hover:opacity-[0.85] min-[601px]:inline-block sm:px-[18px] sm:text-[11px]"
            >
              Book a Demo
            </Link>

            <button
              type="button"
              className="flex size-10 cursor-pointer items-center justify-center rounded border border-transparent text-white transition-colors hover:border-[#2e2e2e] hover:bg-[#1a1a1a] min-[861px]:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? (
                <X className="size-7 shrink-0" aria-hidden />
              ) : (
                <Menu className="size-7 shrink-0" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu: backdrop + drawer (viewports &lt; 861px) */}
      {mobileOpen ? (
        <div className="fixed inset-0 z-[180] min-[861px]:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div
            id="mobNav"
            role="navigation"
            aria-label="Mobile navigation"
            className="absolute top-16 right-0 bottom-0 left-0 flex max-h-[calc(100dvh-4rem)] flex-col border-t border-[#2e2e2e] bg-[#1a1a1a] shadow-[0_-4px_32px_rgba(0,0,0,0.45)]"
          >
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-4 py-4 md:pt-8 sm:px-6">
              <nav className="flex flex-col">
                {navItems.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={mobileLinkClass(href)}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="lg:mt-6 border-t border-[#2e2e2e] pt-6">
                <Link
                  href="/demo"
                  className="block w-full bg-[#FF9933] py-3.5 text-center font-mono text-xs font-bold uppercase tracking-[0.12em] text-black transition-opacity hover:opacity-[0.92]"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Demo →
                </Link>
                <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-[#555555]">
                  Early access · IFC AR BIM
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
