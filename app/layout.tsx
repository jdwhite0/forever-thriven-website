import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Thrive Ability, LLC — Adult Behavioral Health Day Program | Tampa, FL",
    template: "%s | Thrive Ability, LLC",
  },
  description:
    "Thrive Ability, LLC is a licensed adult day program for behavioral health in Tampa, Florida — providing structured support, skill building, therapy, and community integration for adults 18+.",
  keywords: [
    "adult day program",
    "behavioral health",
    "behavioral health day program",
    "adult day treatment",
    "mental health services",
    "Tampa, FL",
    "Hillsborough County",
    "APD",
    "developmental disabilities",
    "Thrive Ability",
  ],
  openGraph: {
    title: "Thrive Ability, LLC — Where Ability Meets Opportunity",
    description:
      "Licensed adult behavioral health day program in Tampa, FL. Structured support, therapy, skill building, and community integration for adults 18+.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-navy antialiased">
        <Navigation />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
