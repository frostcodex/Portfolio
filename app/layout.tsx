import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FrostCodex — Technical Co-Founders, 0% Equity",
  description:
    "FrostCodex embeds product-focused engineers into your startup. Ship faster, scale smarter — without giving up equity.",
  keywords:
    "startup engineers, hire developers, technical co-founder, MVP development, SaaS development, software development company",
  authors: [{ name: "FrostCodex" }],
  openGraph: {
    title: "FrostCodex — Your Technical Co-Founders with 0% Equity",
    description:
      "Product-focused engineers for startups. Ship faster, scale smarter — without giving up ownership.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0f14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
