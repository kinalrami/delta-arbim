import type { InsightPost } from "./insights-types";

function svgToDataUri(svg: string) {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export function insightThumbSrc(
  svgType: InsightPost["svgType"],
  accent: string,
) {
  const common = `
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${accent}" stop-opacity="0.32" />
        <stop offset="1" stop-color="${accent}" stop-opacity="0.02" />
      </linearGradient>
      <radialGradient id="r" cx="30%" cy="10%" r="80%">
        <stop offset="0" stop-color="${accent}" stop-opacity="0.22" />
        <stop offset="1" stop-color="#000" stop-opacity="0" />
      </radialGradient>
    </defs>
  `;

  if (svgType === "blueprint") {
    return svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 520">
        ${common}
        <rect width="1200" height="520" fill="#070A0F"/>
        <rect width="1200" height="520" fill="url(#r)"/>
        <rect x="70" y="70" width="520" height="320" fill="url(#g)" stroke="${accent}" stroke-opacity="0.45" />
        <rect x="120" y="120" width="220" height="140" fill="none" stroke="#2B3346" stroke-opacity="0.8" />
        <circle cx="230" cy="190" r="34" fill="none" stroke="${accent}" stroke-opacity="0.65"/>
        <path d="M700 120h420M700 170h360M700 220h400M700 270h320" stroke="#2B3346" stroke-opacity="0.9" />
        <path d="M720 340h260" stroke="${accent}" stroke-opacity="0.55"/>
        <path d="M900 340h40" stroke="${accent}" stroke-opacity="0.35"/>
        <path d="M70 420h1060" stroke="#151B28" />
      </svg>
    `);
  }

  if (svgType === "pulse") {
    return svgToDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 520">
        ${common}
        <rect width="1200" height="520" fill="#070A0F"/>
        <rect width="1200" height="520" fill="url(#r)"/>
        <rect x="70" y="70" width="1060" height="360" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)"/>
        <path d="M110 320 L240 320 L300 180 L380 370 L470 220 L560 320 L720 320 L780 150 L860 360 L960 260 L1090 260"
          fill="none" stroke="${accent}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.75"/>
        <path d="M110 320 L240 320 L300 180 L380 370 L470 220 L560 320 L720 320 L780 150 L860 360 L960 260 L1090 260"
          fill="none" stroke="${accent}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.15"/>
        <path d="M70 420h1060" stroke="#151B28" />
      </svg>
    `);
  }

  // circuit
  return svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 520">
      ${common}
      <rect width="1200" height="520" fill="#070A0F"/>
      <rect width="1200" height="520" fill="url(#r)"/>
      <rect x="90" y="90" width="420" height="250" rx="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.10)"/>
      <circle cx="180" cy="180" r="18" fill="${accent}" fill-opacity="0.25" stroke="${accent}" stroke-opacity="0.7"/>
      <path d="M198 180H380" stroke="${accent}" stroke-opacity="0.6" stroke-width="3"/>
      <circle cx="420" cy="180" r="10" fill="${accent}" fill-opacity="0.18" stroke="${accent}" stroke-opacity="0.55"/>
      <path d="M420 190V290H250" stroke="#2B3346" stroke-opacity="0.9" stroke-width="3" fill="none"/>
      <circle cx="250" cy="290" r="10" fill="#0B1220" stroke="${accent}" stroke-opacity="0.45"/>
      <path d="M600 150H1110M600 210H1030M600 270H1080" stroke="#2B3346" stroke-opacity="0.9" />
      <path d="M600 330H860" stroke="${accent}" stroke-opacity="0.5" />
      <path d="M70 420h1060" stroke="#151B28" />
    </svg>
  `);
}

