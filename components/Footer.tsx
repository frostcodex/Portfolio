const Footer = () => {
  const footerLinks = {
    services: {
      title: "Services",
      links: [
        { label: "MVP Development", href: "#services" },
        { label: "SaaS Platforms", href: "#services" },
        { label: "Web Applications", href: "#services" },
        { label: "Mobile Apps", href: "#services" },
        { label: "UI/UX Design", href: "#services" },
      ],
    },
    hireByRole: {
      title: "Hire by Role",
      links: [
        { label: "Frontend Developers", href: "#contact" },
        { label: "Backend Developers", href: "#contact" },
        { label: "Full-Stack Engineers", href: "#contact" },
        { label: "Mobile Developers", href: "#contact" },
        { label: "UI/UX Designers", href: "#contact" },
      ],
    },
    hireByTech: {
      title: "Hire by Tech",
      links: [
        { label: "React Developers", href: "#contact" },
        { label: "Node.js Developers", href: "#contact" },
        { label: "Python Developers", href: "#contact" },
        { label: "Next.js Developers", href: "#contact" },
        { label: "React Native Developers", href: "#contact" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { label: "Why FrostCodex", href: "#why-us" },
        { label: "Tech Stack", href: "#tech-stack" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
    },
  };

  return (
    <footer className="border-t border-border/30 py-16 bg-background/50">
      <div className="container mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
            <a href="#" className="font-display text-xl font-bold tracking-tight inline-block">
              <span className="text-gradient">Frost</span>
              <span className="text-foreground">Codex</span>
            </a>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs leading-relaxed">
              Your Technical Co-Founders with 0% Equity. Building tomorrow's products, today.
            </p>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4 text-sm">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} FrostCodex. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40">
            Engineers who think like founders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
