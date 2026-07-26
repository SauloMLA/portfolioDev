"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Play, Sparkles, Server, Code } from "lucide-react";
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
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    { id: "ALL", label: "Todos los Sistemas" },
    { id: "Fintech", label: "Fintech & SaaS" },
    { id: "IA", label: "IA & Edge" },
    { id: "Móvil", label: "Móvil" },
    { id: "Web", label: "Enterprise Web" },
  ];

  const filteredProjects = projects.items.filter((project) => {
    if (selectedCategory === "ALL") return true;
    return project.tags.some(
      (tag) => tag.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  });

  return (
    <section id="projects" className="section-padding relative">
      {/* Luz de fondo decorativa */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeader
            label={projects.label}
            title={projects.title}
            subtitle={projects.subtitle}
          />
        </ScrollReveal>

        {/* Filtros de Categorías */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-300 cursor-pointer backdrop-blur-md",
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 border border-sky-400/50"
                    : "bg-slate-900/60 text-slate-400 hover:text-white border border-sky-500/15 hover:border-sky-400/30"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="space-y-24 md:space-y-32">
          {filteredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;
            const isFlagship = project.slug === "factorcore";

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
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent opacity-60" />
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
                      <span className="rounded-full border border-sky-400/30 bg-slate-950/60 px-3 py-1 text-xs text-sky-300 backdrop-blur-md">
                        {projects.caseStudyBadge}
                      </span>
                      <p className="text-xl font-bold text-white md:text-2xl">
                        {project.title}
                      </p>
                    </div>
                  </>
                )}

                {project.demoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-slate-950/40 backdrop-blur-xs">
                    <span className="inline-flex size-14 items-center justify-center rounded-full border border-sky-400/50 bg-sky-500/20 text-white shadow-xl backdrop-blur-md">
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
                  {/* Tarjeta Visual del Proyecto */}
                  <motion.div
                    className={cn(
                      "glass glass-interactive group relative aspect-[5/4] overflow-hidden rounded-2xl border border-sky-500/20 shadow-xl lg:aspect-[4/3]",
                      isFlagship && "ring-2 ring-sky-500/40 shadow-sky-500/20"
                    )}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {isFlagship && (
                      <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold tracking-wider shadow-lg shadow-blue-500/30 border border-sky-400/40">
                        <Sparkles className="w-3 h-3 text-sky-300 animate-pulse" />
                        <span>PROYECTO INSIGNIA</span>
                      </div>
                    )}

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

                  {/* Contenido Descriptivo */}
                  <div className="flex flex-col">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="border-sky-500/20 bg-sky-500/10 font-mono text-xs text-sky-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl flex items-center gap-2">
                      {project.title}
                    </h3>

                    <div className="mt-6 space-y-4">
                      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                        <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-sky-400 font-mono">
                          {projects.problemLabel}
                        </p>
                        <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                        <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-indigo-400 font-mono">
                          {projects.solutionLabel}
                        </p>
                        <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
                          {project.solution}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                        <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-emerald-400 font-mono">
                          {projects.impactLabel}
                        </p>
                        <p className="text-xs leading-relaxed text-emerald-200/90 md:text-sm font-medium">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1 font-mono text-[11px] text-slate-300 transition-colors duration-300 hover:border-sky-400/40 hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Acciones */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.liveUrl !== "#" && (
                        <Button asChild size="sm" className="h-10 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20">
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {projects.liveProductLabel}
                            <ExternalLink className="size-3.5 ml-1" />
                          </Link>
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button size="sm" className="h-10 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-md shadow-indigo-500/20" onClick={openDemo}>
                          {projects.watchDemoLabel}
                          <Play className="size-3.5 ml-1" />
                        </Button>
                      )}

                      {/* Repos Frontend / Backend separados o único repo */}
                      {project.frontendGithubUrl && project.backendGithubUrl ? (
                        <>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="h-10 rounded-xl border-sky-500/30 bg-slate-900/60 hover:bg-slate-800 text-sky-300 hover:text-white"
                          >
                            <Link
                              href={project.frontendGithubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Code className="size-3.5 mr-1" />
                              {projects.repoFrontLabel || "Repo Front"}
                            </Link>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="h-10 rounded-xl border-indigo-500/30 bg-slate-900/60 hover:bg-slate-800 text-indigo-300 hover:text-white"
                          >
                            <Link
                              href={project.backendGithubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Server className="size-3.5 mr-1" />
                              {projects.repoBackLabel || "Repo Back"}
                            </Link>
                          </Button>
                        </>
                      ) : (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="h-10 rounded-xl border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white"
                        >
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {projects.sourceLabel}
                            <GitBranch className="size-3.5 ml-1" />
                          </Link>
                        </Button>
                      )}
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
