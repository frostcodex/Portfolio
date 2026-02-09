"use client";

import { motion } from "framer-motion";

const categories = [
  {
    label: "Frontend",
    techs: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    techs: ["Node.js", "Nest.js", "Python", "Django", "Express"],
  },
  {
    label: "Mobile",
    techs: ["React Native", "FlutterFlow"],
  },
  {
    label: "CMS & No-Code",
    techs: ["WordPress", "Shopify", "Bubble.io"],
  },
  {
    label: "Database",
    techs: ["MongoDB", "PostgreSQL", "Firebase", "Redis"],
  },
  {
    label: "Design & Growth",
    techs: ["Figma", "Illustrator", "Meta Ads", "Google SEO"],
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We're stack-agnostic but opinionated. We choose the right tools for
            your product's stage and goals — from battle-tested frameworks to
            cutting-edge platforms.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6"
            >
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
