"use client";

import { motion } from "framer-motion";
import { Rocket, BarChart3, Globe, Smartphone, Settings } from "lucide-react";

const items = [
  {
    icon: Rocket,
    title: "MVPs & Startup Products",
    desc: "From napkin sketch to live product. We help founders validate ideas fast with production-grade MVPs that are built to evolve.",
  },
  {
    icon: BarChart3,
    title: "Scalable SaaS Platforms",
    desc: "Multi-tenant architectures, billing integrations, and infrastructure that scales with your revenue — not against it.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    desc: "High-performance web apps built on modern stacks. Fast, secure, and designed for real users — not just demos.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Cross-platform mobile apps that feel native. We ship to both stores with a single codebase and zero compromises.",
  },
  {
    icon: Settings,
    title: "Automation & Internal Tools",
    desc: "Kill the spreadsheets. We build the internal tools and automations that let your team move 10x faster.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhatWeBuild = () => {
  return (
    <section id="what-we-build" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            What We <span className="text-gradient">Build</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't build generic software. We build the products that define
            your company — engineered for speed, scale, and market fit.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={child}
              className="glass-card gradient-border p-6 hover:bg-card/80 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:frost-glow-sm transition-shadow">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
