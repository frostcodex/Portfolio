import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid opacity-40" />

      {/* Frost glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8 animate-fade-in-scale">
            <Zap size={14} />
            Engineering Partners for Startups
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display leading-[1.1] tracking-tight mb-6">
            Your Technical{" "}
            <span className="text-gradient">Co‑Founders</span>
            <br />
            with 0% Equity
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Ship faster. Scale smarter. We embed product-focused engineers into
            your startup so you can build what matters — without giving up
            ownership.
          </p>

          <p className="text-sm text-muted-foreground/70 max-w-xl mx-auto mb-10">
            We don't just write code. We obsess over your product, your users,
            and your runway. Think of us as the founding engineering team you
            always wanted.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all frost-glow"
            >
              Start Building
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-medium text-base hover:bg-secondary transition-colors"
            >
              See What We Build
            </a>
          </div>

          {/* Trust line */}
          <p className="mt-16 text-xs text-muted-foreground/50 uppercase tracking-widest animate-fade-in-delayed">
            Trusted by funded startups &amp; growing SaaS teams
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
