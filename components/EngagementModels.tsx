import { User, Users, Package } from "lucide-react";

const models = [
  {
    icon: User,
    title: "Hire Individual Developers",
    desc: "Plug in a senior engineer who integrates with your existing team. Full-time dedication, your stack, your workflow.",
    cta: "Best for teams with existing processes",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    desc: "Get a cross-functional squad — frontend, backend, design — managed and ready to ship. We handle the coordination, you own the roadmap.",
    cta: "Best for scaling fast",
  },
  {
    icon: Package,
    title: "End-to-End Product Development",
    desc: "Hand us the vision, we deliver the product. From architecture to app store — we own the entire build so you can focus on growth.",
    cta: "Best for non-technical founders",
  },
];

const EngagementModels = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16 animate-fade-in-up-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Flexible models built around your stage, budget, and speed. Start
            with one developer or a full product team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((m, i) => (
            <div
              key={m.title}
              className="glass-card gradient-border p-8 flex flex-col animate-fade-in-up-on-scroll"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <m.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3 text-foreground">
                {m.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-1 mb-4">
                {m.desc}
              </p>
              <span className="text-xs text-primary font-medium uppercase tracking-wide">
                {m.cta}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
