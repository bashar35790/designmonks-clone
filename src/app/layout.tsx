import type { Metadata } from "next";
import { Outfit, Red_Hat_Display, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-redhat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Design Monks — Leading UI/UX Design Agency | Digital Products That Drive Results",
  description:
    "Design Monks is an award-winning digital product and UI/UX design agency. We craft high-converting websites, mobile applications, design systems, and AI-powered interfaces for the world's most ambitious brands.",
  keywords: [
    "UI/UX Design Agency",
    "Digital Product Design",
    "Web Design Agency",
    "Framer Development",
    "Webflow Agency",
    "Next.js Development",
    "Design Monks",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${redHatDisplay.variable} ${playfairDisplay.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#080808] text-[#F5F5F7] font-body antialiased selection:bg-emerald-500 selection:text-black overflow-x-hidden"
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
