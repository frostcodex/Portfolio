import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeBuild from "@/components/WhatWeBuild";
import ServicesSection from "@/components/ServicesSection";
import WhyFrostCodex from "@/components/WhyFrostCodex";
import EngagementModels from "@/components/EngagementModels";
import TechStack from "@/components/TechStack";
import TestimonialsIntro from "@/components/TestimonialsIntro";
import FAQSection from "@/components/FAQSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <WhatWeBuild />
      <ServicesSection />
      <WhyFrostCodex />
      <EngagementModels />
      <TechStack />
      <TestimonialsIntro />
      <FAQSection />
      <ContactCTA />
      <Footer />
    </div>
  );
}
