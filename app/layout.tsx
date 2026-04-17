import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DeltaARBIM | IFC Augmented Reality BIM Platform",
  description:
    "DeltaARBIM overlays live IFC BIM models onto real construction sites via AR on iOS & Android. Clash detection, LiDAR, as-built verification.",
  metadataBase: new URL("https://deltaarbim.tech"),
  icons: {
    icon: "/DeltaLogo.png",
    shortcut: "/DeltaLogo.png",
    apple: "/DeltaLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${robotoSlab.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#0d0d0d] font-sans text-white">
        <Header />
        <div id="main" className="flex flex-1 flex-col pt-23">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
