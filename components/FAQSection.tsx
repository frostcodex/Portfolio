"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Can you work in our timezone?",
    a: "Absolutely. We offer flexible engagement hours with significant overlap across US, EU, and APAC timezones. Most of our startup clients get 6–8 hours of real-time overlap daily, plus async communication that keeps things moving 24/7.",
  },
  {
    q: "How fast can we start?",
    a: "Most teams are onboarded and productive within 3–5 business days. We skip the lengthy discovery phase most agencies require. You brief us, we ramp, and we start shipping.",
  },
  {
    q: "What if the developer isn't a fit?",
    a: "We replace them — fast. No drama, no bureaucracy. We maintain a bench of vetted engineers so swaps happen within days, not weeks. Your velocity never drops.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "That's our sweet spot. We've helped pre-seed and seed-stage founders go from idea to launched product. We understand runway constraints and build accordingly — lean, fast, and production-ready.",
  },
  {
    q: "Can we start small and scale later?",
    a: "100%. Start with a single developer or a focused sprint. As your product and funding grow, we scale the team with you. No long-term contracts required to get started.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Frequently <span className="text-gradient">Asked</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Quick answers to the questions we hear most from startup founders.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card px-6 border border-border/50 rounded-xl"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
