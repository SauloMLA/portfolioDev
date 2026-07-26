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
    <section id="experience" className="section-padding relative">
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
            className="absolute bottom-0 left-[7px] top-0 w-0.5 bg-gradient-to-b from-sky-500/50 via-indigo-500/30 to-transparent md:left-[11px]"
            aria-hidden
          />

          <div className="space-y-8">
            {experience.items.map((item, index) => (
              <ScrollReveal key={item.company} delay={index * 0.08}>
                <div className="relative flex gap-6 md:gap-10">
                  <motion.div
                    className="relative z-10 mt-6 size-4 shrink-0 rounded-full border-2 border-sky-400 bg-sky-500 shadow-lg shadow-sky-500/50 md:mt-7"
                    initial={{ scale: prefersReducedMotion ? 1 : 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  />

                  <div className="glass glass-interactive min-w-0 flex-1 rounded-2xl p-6 md:p-7 border border-sky-500/20">
                    <div className="flex flex-wrap items-start gap-4">
                      <div
                        className={cn(
                          "flex size-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-gradient-to-br text-base font-bold text-white shadow-md shadow-sky-500/10",
                          item.logo.accent
                        )}
                        aria-hidden
                      >
                        {item.logo.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="font-mono text-xs text-sky-400 font-semibold md:text-sm">
                            {item.period}
                          </p>
                          {item.featured && (
                            <span className="inline-flex rounded-full border border-sky-400/40 bg-sky-500/20 px-3 py-0.5 text-xs font-semibold text-sky-300 shadow-xs">
                              {experience.currentBadge}
                            </span>
                          )}
                        </div>
                        <h3 className="mt-1 text-xl font-bold tracking-tight text-white md:text-2xl">
                          {item.company}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-slate-300 md:text-base">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-200 md:text-base">
                      {item.impact}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1 font-mono text-xs text-slate-300 transition-colors duration-300 hover:border-sky-400/40 hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {item.highlights.length > 0 && (
                      <ul className="mt-5 space-y-2 border-t border-slate-800/80 pt-4">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-2.5 text-sm leading-relaxed text-slate-300"
                          >
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-400" />
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
