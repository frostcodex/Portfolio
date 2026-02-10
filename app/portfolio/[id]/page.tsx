import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { portfolioProjects, getPortfolioProject } from "@/lib/portfolioProjects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  LayoutDashboard,
  Users,
  Bell,
  BarChart3,
  ShoppingCart,
  MessageCircle,
  Headset,
  CalendarClock,
  BookOpen,
  GraduationCap,
  LineChart,
} from "lucide-react";

const featureIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "lead": LineChart,
  "profile": Users,
  "client": Users,
  "follow-up": Bell,
  "reminder": Bell,
  "pipeline": LayoutDashboard,
  "analytics": BarChart3,
  "product": ShoppingCart,
  "stock": Bell,
  "chat": MessageCircle,
  "support": Headset,
  "booking": CalendarClock,
  "calendar": CalendarClock,
  "course": BookOpen,
  "student": Users,
  "progress": LineChart,
  "quiz": BookOpen,
  "certificate": GraduationCap,
};

function pickIcon(label: string) {
  const lower = label.toLowerCase();
  for (const [keyword, Icon] of Object.entries(featureIconMap)) {
    if (lower.includes(keyword)) return Icon;
  }
  return null;
}

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata(props: any): Promise<Metadata> {
  // Support both plain object and Promise for params to satisfy Next's types
  const rawParams = props?.params;
  const resolvedParams = await rawParams;
  const id = resolvedParams?.id ?? rawParams?.id;
  const project = getPortfolioProject(id);

  if (!project) {
    return {
      title: "Project not found | FrostCodex Portfolio",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://frostcodex.com";
  const pageUrl = `${baseUrl}/portfolio/${project.id}`;
  const imageUrl = `${baseUrl}${project.image}`;

  const title = `${project.name} | FrostCodex Portfolio`;
  const description = project.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/portfolio/${project.id}`,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      type: "website",
      images: [
        {
          url: imageUrl,
          alt: project.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function PortfolioProjectPage({ params }: any) {
  const project = getPortfolioProject(params.id);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <section className="pt-28 pb-16 md:pb-24 bg-secondary/30 border-b border-border/30">
        <div className="container mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
            Portfolio Project
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
            {project.name}
          </h1>
          <p className="max-w-2xl text-muted-foreground text-base md:text-lg">
            {project.description}
          </p>
        </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto space-y-10 md:space-y-12">
              <div className="glass-card overflow-hidden rounded-2xl border border-border/60">
                <div className="relative aspect-[16/9] w-full bg-muted/40">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 960px, 100vw"
                    priority
                  />
                </div>
              </div>

              <div className="space-y-8">
              <div className="space-y-5">
                <h2 className="text-xl md:text-2xl font-display font-semibold">
                  Problem it Solves
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  This project is designed as a focused, startup-friendly solution. It avoids
                  enterprise complexity and gives small teams the exact tools they need: clear
                  visibility, lightweight workflows, and interfaces that feel like the UI you
                  shared in your reference dashboard.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-base md:text-lg font-display font-semibold">
                  Core Features
                </h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {project.features.map((feature) => {
                    const Icon = pickIcon(feature);
                    return (
                      <div
                        key={feature}
                        className="glass-card border border-border/60 rounded-2xl px-5 py-4 flex items-start gap-4"
                      >
                        <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                          {Icon ? (
                            <Icon className="h-4 w-4 text-primary" />
                          ) : (
                            <span className="h-2 w-2 rounded-full bg-primary" />
                          )}
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

