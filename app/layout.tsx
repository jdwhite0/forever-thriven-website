import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

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


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Thrive Ability, LLC",
  "description":
    "Licensed adult behavioral health day program in Florida — structured support, skill building, therapy, and community integration for adults 18+.",
  "url": "https://thrive-abilities.com",
  "areaServed": [
    { "@type": "City", "name": "Wesley Chapel", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Tampa", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "AdministrativeArea", "name": "Pasco County, Florida" },
    { "@type": "AdministrativeArea", "name": "Hillsborough County, Florida" },
  ],
  "knowsAbout": [
    "adult day program",
    "behavioral health",
    "adult day treatment",
    "developmental disabilities",
    "Florida APD",
    "community integration",
    "skill building",
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Programs",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Adult Behavioral Health Day Program", "serviceType": "Behavioral health day programming" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Skill Building", "serviceType": "Life skills training" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Community Integration", "serviceType": "Community-based support" } },
    ],
  },
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
