"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialsIntro = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Quote size={28} className="text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            What Founders <span className="text-gradient">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            We let our work speak — and our partners amplify. Here's what the
            founders and teams we've built with have to say about working with
            FrostCodex.
          </p>
          <p className="text-sm text-muted-foreground/50 italic">
            Client testimonials coming soon. In the meantime, let's build something
            great together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsIntro;
