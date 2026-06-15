"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { useContent } from "@/components/providers/LocaleProvider";
import { DemoVideoModal } from "@/components/sections/DemoVideoModal";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ActiveDemo = {
  title: string;
  videoUrl: string;
};

export function FeaturedProjects() {
  const { projects } = useContent();
  const [activeDemo, setActiveDemo] = useState<ActiveDemo | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeader
            label={projects.label}
            title={projects.title}
            subtitle={projects.subtitle}
          />
        </ScrollReveal>

        <div className="space-y-24 md:space-y-32">
          {projects.items.map((project, index) => {
            const isReversed = index % 2 === 1;
            const openDemo = () => {
              if (!project.demoUrl) {
                return;
              }

              setActiveDemo({
                title: project.title,
                videoUrl: project.demoUrl,
              });
            };

            const imageContent = (
              <>
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-[rgba(255,255,255,0.03)]" />
                  </>
                ) : (
                  <>
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br",
                        project.gradient
                      )}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <span className="rounded-full border border-border/50 bg-background/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
                        {projects.caseStudyBadge}
                      </span>
                      <p className="text-xl font-medium text-foreground md:text-2xl">
                        {project.title}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-[rgba(255,255,255,0.03)]" />
                  </>
                )}

                {project.demoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex size-14 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground shadow-lg backdrop-blur-sm">
                      <Play className="size-6 fill-current" />
                    </span>
                  </div>
                )}
              </>
            );

            return (
              <ScrollReveal key={project.slug} delay={0.05}>
                <article
                  className={cn(
                    "grid items-center gap-8 md:gap-12 lg:grid-cols-2",
                    isReversed && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  <motion.div
                    className={cn(
                      "card-surface card-surface-interactive group relative aspect-[5/4] overflow-hidden rounded-2xl lg:aspect-[4/3]",
                      (project.demoUrl || project.liveUrl !== "#") &&
                        "cursor-pointer"
                    )}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {project.demoUrl ? (
                      <button
                        type="button"
                        onClick={openDemo}
                        aria-label={`${projects.watchDemoLabel}: ${project.title}`}
                        className="absolute inset-0 z-10 size-full cursor-pointer"
                      />
                    ) : project.liveUrl !== "#" ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${projects.liveProductLabel}: ${project.title}`}
                        className="absolute inset-0 z-10 size-full"
                      />
                    ) : null}
                    {imageContent}
                  </motion.div>

                  <div className="flex flex-col">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="border-border/60 bg-muted/40 font-normal text-[var(--text-secondary)]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                      {project.title}
                    </h3>

                    <div className="mt-6 space-y-5">
                      <div>
                        <p className="mb-1.5 text-xs font-medium uppercase tracking-wider text-subtle">
                          {projects.problemLabel}
                        </p>
                        <p className="text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1.5 text-xs font-medium uppercase tracking-wider text-subtle">
                          {projects.solutionLabel}
                        </p>
                        <p className="text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
                          {project.solution}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1.5 text-xs font-medium uppercase tracking-wider text-subtle">
                          {projects.impactLabel}
                        </p>
                        <p className="text-sm leading-relaxed text-foreground/90 md:text-base">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border px-2.5 py-1 text-xs text-[var(--text-secondary)] transition-colors duration-300 hover:border-[var(--accent-blue-border)] hover:text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.liveUrl !== "#" && (
                        <Button asChild size="sm" className="h-9">
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {projects.liveProductLabel}
                            <ExternalLink className="size-3.5" />
                          </Link>
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button size="sm" className="h-9" onClick={openDemo}>
                          {projects.watchDemoLabel}
                          <Play className="size-3.5" />
                        </Button>
                      )}
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="h-9"
                      >
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {projects.sourceLabel}
                          <GitBranch className="size-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <DemoVideoModal
        open={activeDemo !== null}
        onOpenChange={(open) => {
          if (!open) {
            setActiveDemo(null);
          }
        }}
        title={activeDemo?.title ?? ""}
        videoUrl={activeDemo?.videoUrl ?? ""}
        closeLabel={projects.closeDemoLabel}
        unavailableLabel={projects.demoUnavailableLabel}
      />
    </section>
  );
}
