import type { Metadata } from "next";
import type { ReactNode } from "react";

import { PremiumNav } from "@/components/PremiumNav";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyWaitlistCTA } from "@/components/StickyWaitlistCTA";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Knightingale | Caregiving, finally in one place.",
    template: "%s | Knightingale"
  },
  description:
    "Knightingale is an AI-powered care operating system for families, seniors, and professional caregivers.",
  metadataBase: new URL("https://knightingale.ai")
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="page-bg min-h-screen text-text-primary">
        <PremiumNav />
        <main>{children}</main>
        <SiteFooter />
        <StickyWaitlistCTA />
      </body>
    </html>
  );
}
