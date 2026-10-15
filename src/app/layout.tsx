import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/site";

const display = Anton({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Premium Gym in Colombo`, template: `%s | ${site.name}` },
  description: site.description,
  keywords: ["gym Colombo", "fitness centre", "personal trainer", "gym membership", "group classes"],
  openGraph: { type: "website", siteName: site.name, title: site.name, description: site.description, url: site.url },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  alternates: { canonical: "/" },
};
export const viewport: Viewport = { themeColor: "#000000", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org", "@type": "HealthClub", name: site.name, url: site.url, telephone: site.phone, email: site.email,
  description: site.description, address: { "@type": "PostalAddress", streetAddress: "123 Galle Road", addressLocality: "Colombo", addressCountry: "LK" },
  openingHours: ["Mo-Sa 05:00-22:00", "Su 07:00-18:00"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-brand focus:px-4 focus:py-2 focus:text-black">Skip to content</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
