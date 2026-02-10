import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/lib/portfolioProjects";

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-secondary/30 border-t border-border/30"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Portfolio
          </h2>
          <p className="text-muted-foreground text-lg">
             Click a project to explore its core features.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {portfolioProjects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              className="group flex flex-col glass-card rounded-2xl overflow-hidden border border-border/60 hover:border-primary/40 transition-colors"
            >
              <div className="relative aspect-video w-full bg-muted/40 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 360px, 100vw"
                  priority={project.id === "leadflow-crm"}
                />
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="font-display font-semibold text-lg md:text-xl mb-2 text-foreground">
                  {project.name}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                <span className="mt-4 inline-flex text-xs font-medium text-primary/80">
                  View project details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
