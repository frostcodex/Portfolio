import { Code2, Smartphone, Palette, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website & Web App Development",
    desc: "Full-stack web development using MERN, Next.js, Nest.js, Angular, Django, WordPress, Shopify, and Bubble.io. We pick the right stack for your stage — not the one that looks best on our portfolio.",
    techs: ["MERN", "Next.js", "Nest.js", "Angular", "Python/Django", "WordPress", "Shopify", "Bubble.io"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Ship to iOS and Android simultaneously with React Native and FlutterFlow. We build apps that feel native, perform flawlessly, and cost a fraction of two separate builds.",
    techs: ["React Native", "FlutterFlow"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Design that converts, not just decorates. We craft user experiences grounded in real data and startup speed — from wireframes to pixel-perfect handoff.",
    techs: ["Figma", "Adobe Illustrator"],
  },
  {
    icon: TrendingUp,
    title: "Growth & Marketing Technology",
    desc: "We don't just build products — we help them get found. SEO architecture, paid acquisition setup, and growth engineering baked into your product from day one.",
    techs: ["Meta Ads", "Google SEO"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16 animate-fade-in-up-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We cover the full product lifecycle — from first prototype to
            growth-stage engineering. Every service is designed to move your
            metrics, not just your codebase.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="glass-card p-8 group hover:frost-glow-sm transition-shadow animate-fade-in-up-on-scroll"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
