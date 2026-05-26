import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import BrandPanel from "@/components/BrandPanel";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Maverick Chiropractic — Windsor, Colorado",
  description:
    "Pediatric, prenatal, and family chiropractic care in Windsor, Colorado. Gentle, intentional, family-first.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
        <UtilityBar />
        <SiteHeader />
        <main>{children}</main>
        <Footer />
        <BrandPanel />
      </body>
    </html>
  );
}
