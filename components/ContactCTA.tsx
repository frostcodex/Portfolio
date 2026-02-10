"use client";

import { useState } from "react";
import { Send, Users, Globe, ArrowRight } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  phone: z.string().trim().optional(),
  companyName: z.string().trim().min(1, "Company name is required").max(100, "Company name too long"),
  companyUrl: z.string().trim().url("Invalid URL").optional().or(z.literal("")),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  projectDetails: z.string().trim().min(10, "Please provide more details").max(2000, "Details too long"),
});

type ContactForm = z.infer<typeof contactSchema>;

const serviceOptions = [
  "MVP Development",
  "SaaS Platform",
  "Web Application",
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing",
  "Hire Developers",
  "Other",
];

const infoCards = [
  {
    icon: Globe,
    title: "Startup-Focused",
    description: "We specialize in working with founders and early-stage companies worldwide.",
    linkText: "Learn more",
    href: "#why-us",
  },
  {
    icon: Users,
    title: "Expert Engineers",
    description: "Our team thinks like founders — focused on outcomes, not just code.",
    linkText: "Learn more",
    href: "#tech-stack",
  },
];

const ContactCTA = () => {
  const [formData, setFormData] = useState<ContactForm>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    companyUrl: "",
    services: [],
    projectDetails: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center glass-card p-12 rounded-2xl animate-fade-in-scale">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Send className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Thanks for Reaching Out!
            </h3>
            <p className="text-muted-foreground">
              We've received your message and will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Frost glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 leading-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to build something that matters? Tell us about your project and
            let's start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div
            className="lg:col-span-2 animate-fade-in-up-on-scroll"
            style={{ animationDelay: "100ms" }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-lg bg-background border ${
                      errors.fullName ? "border-destructive" : "border-border"
                    } text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-destructive">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    className={`w-full px-4 py-3 rounded-lg bg-background border ${
                      errors.email ? "border-destructive" : "border-border"
                    } text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone & Company Row */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-2">
                    Company Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    className={`w-full px-4 py-3 rounded-lg bg-background border ${
                      errors.companyName ? "border-destructive" : "border-border"
                    } text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-destructive">{errors.companyName}</p>
                  )}
                </div>
              </div>

              {/* Company URL */}
              <div>
                <label htmlFor="companyUrl" className="block text-sm font-medium text-foreground mb-2">
                  Company Website
                </label>
                <input
                  type="url"
                  id="companyUrl"
                  name="companyUrl"
                  value={formData.companyUrl}
                  onChange={handleInputChange}
                  placeholder="https://yourcompany.com"
                  className={`w-full px-4 py-3 rounded-lg bg-background border ${
                    errors.companyUrl ? "border-destructive" : "border-border"
                  } text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                />
                {errors.companyUrl && (
                  <p className="mt-1 text-sm text-destructive">{errors.companyUrl}</p>
                )}
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Services You're Looking For <span className="text-primary">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((service) => (
                    <button
                      type="button"
                      key={service}
                      onClick={() => handleServiceToggle(service)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        formData.services.includes(service)
                          ? "bg-primary text-primary-foreground"
                          : "bg-background border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
                {errors.services && (
                  <p className="mt-2 text-sm text-destructive">{errors.services}</p>
                )}
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-foreground mb-2">
                  Project Details <span className="text-primary">*</span>
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  rows={4}
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project, timeline, and goals..."
                  className={`w-full px-4 py-3 rounded-lg bg-background border ${
                    errors.projectDetails ? "border-destructive" : "border-border"
                  } text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none`}
                />
                {errors.projectDetails && (
                  <p className="mt-1 text-sm text-destructive">{errors.projectDetails}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all frost-glow disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-sm text-muted-foreground/60">
                Response within 24 hours · No commitment required
              </p>
            </form>
          </div>

          {/* Info Cards */}
          <div
            className="space-y-6 animate-fade-in-up-on-scroll"
            style={{ animationDelay: "200ms" }}
          >
            {infoCards.map((card, index) => (
              <a
                key={index}
                href={card.href}
                className="block glass-card rounded-2xl p-6 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <card.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {card.description}
                    </p>
                    <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
                      {card.linkText}
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </a>
            ))}

            {/* Quick Contact */}
            <div className="glass-card rounded-2xl p-6">
              <h4 className="font-semibold text-foreground mb-4">Prefer to Talk?</h4>
              <a
                href="mailto:hello@frostcodex.com"
                className="block text-primary hover:underline mb-2"
              >
                hello@frostcodex.com
              </a>
              <p className="text-sm text-muted-foreground">
                Schedule a 15-min discovery call to discuss your project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
