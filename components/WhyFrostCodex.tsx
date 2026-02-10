import { Brain, Target, Zap, Layers, MessageSquare, Rocket } from "lucide-react";

const reasons = [
  { icon: Brain, title: "Engineers Who Think Like Founders", desc: "We don't wait for tickets. We anticipate problems, suggest improvements, and treat your product like our own." },
  { icon: Target, title: "Business-Focused Development", desc: "Every line of code maps to a business outcome. We prioritize features that move the needle — not just technical elegance." },
  { icon: Zap, title: "Fast Onboarding, Faster Delivery", desc: "Your team is productive within days, not months. We've done this before, and we come prepared." },
  { icon: Rocket, title: "Deep Startup Experience", desc: "We've built with pre-seed founders and Series B teams alike. We know the tradeoffs at every stage." },
  { icon: Layers, title: "Scalable Architecture from Day One", desc: "No rewrites later. We build foundations that support 10x growth without 10x the cost." },
  { icon: MessageSquare, title: "Clear, Async-First Communication", desc: "Daily standups, weekly demos, transparent Slack channels. You'll never wonder what we're working on." },
];

const WhyFrostCodex = () => {
  return (
    <section id="why-us" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16 animate-fade-in-up-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Why <span className="text-gradient">FrostCodex</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            You don't need another vendor. You need a technical partner who
            understands what it takes to win.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="flex gap-4 p-5 rounded-xl hover:bg-secondary/40 transition-colors animate-fade-in-up-on-scroll"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <r.icon size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1 text-foreground">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFrostCodex;
