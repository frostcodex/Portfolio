import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import AnimationEnhancer from "@/components/AnimationEnhancer";
import StructuredData from "@/components/StructuredData";
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
  keywords: [
    "startup engineers",
    "hire developers",
    "technical co-founder",
    "MVP development",
    "SaaS development",
    "software development company",
    "startup development",
    "product engineering",
    "full-stack developers",
  ],
  authors: [{ name: "FrostCodex" }],
  creator: "FrostCodex",
  publisher: "FrostCodex",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "FrostCodex — Your Technical Co-Founders with 0% Equity",
    description:
      "Product-focused engineers for startups. Ship faster, scale smarter — without giving up ownership.",
    type: "website",
    siteName: "FrostCodex",
    // Add your actual URL when deployed
    // url: "https://frostcodex.com",
    // images: [
    //   {
    //     url: "https://frostcodex.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "FrostCodex - Technical Co-Founders",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FrostCodex — Your Technical Co-Founders with 0% Equity",
    description:
      "Product-focused engineers for startups. Ship faster, scale smarter — without giving up ownership.",
    // Add when you have Twitter account
    // creator: "@frostcodex",
    // images: ["https://frostcodex.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
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
        <StructuredData />
        <AnimationEnhancer />
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
