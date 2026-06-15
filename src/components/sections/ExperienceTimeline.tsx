"use client";

import { motion, useReducedMotion } from "framer-motion";

import { useContent } from "@/components/providers/LocaleProvider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  const { experience } = useContent();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeader
            label={experience.label}
            title={experience.title}
            subtitle={experience.subtitle}
          />
        </ScrollReveal>

        <div className="relative">
          <div
            className="absolute bottom-0 left-[7px] top-0 w-px bg-border/60 md:left-[11px]"
            aria-hidden
          />

          <div className="space-y-8">
            {experience.items.map((item, index) => (
              <ScrollReveal key={item.company} delay={index * 0.08}>
                <div className="relative flex gap-6 md:gap-10">
                  <motion.div
                    className="relative z-10 mt-6 size-3.5 shrink-0 rounded-full border-2 border-foreground/70 bg-background md:mt-7 md:size-4"
                    initial={{ scale: prefersReducedMotion ? 1 : 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  />

                  <div className="card-surface card-surface-interactive min-w-0 flex-1 rounded-2xl p-5 md:p-6">
                    <div className="flex flex-wrap items-start gap-4">
                      <div
                        className={cn(
                          "flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-gradient-to-br text-sm font-semibold text-foreground",
                          item.logo.accent
                        )}
                        aria-hidden
                      >
                        {item.logo.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="font-mono text-xs text-subtle md:text-sm">
                            {item.period}
                          </p>
                          {item.featured && (
                            <span className="inline-flex rounded-full border border-[var(--accent-blue-border)] bg-[var(--accent-blue-soft)] px-2.5 py-0.5 text-xs text-[var(--accent-blue)]">
                              {experience.currentBadge}
                            </span>
                          )}
                        </div>
                        <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                          {item.company}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-[var(--text-secondary)] md:text-base">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-foreground/90 md:text-base">
                      {item.impact}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border/60 bg-background/50 px-2.5 py-1 text-xs text-[var(--text-secondary)] transition-colors duration-300 hover:border-[var(--accent-blue-border)] hover:text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {item.highlights.length > 0 && (
                      <ul className="mt-4 space-y-1.5 border-t border-border/60 pt-4">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-2.5 text-sm leading-relaxed text-[var(--text-secondary)]"
                          >
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/35" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
