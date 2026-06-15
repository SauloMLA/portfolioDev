"use client";

import { useContent } from "@/components/providers/LocaleProvider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function EngineeringPhilosophy() {
  const { philosophy } = useContent();

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeader
            label={philosophy.label}
            title={philosophy.title}
            align="center"
            className="mx-auto"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="card-surface mx-auto max-w-3xl rounded-2xl border-t border-t-[var(--accent-blue-border)] p-8 md:p-12">
            <p className="text-center text-xl font-medium leading-relaxed text-foreground md:text-2xl lg:text-3xl">
              &ldquo;{philosophy.lead}&rdquo;
            </p>
            <p className="mt-6 text-center text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
              {philosophy.body}
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3 md:gap-6">
          {philosophy.principles.map((principle, index) => (
            <ScrollReveal key={principle.title} delay={0.1 + index * 0.06}>
              <div className="card-surface card-surface-interactive h-full rounded-xl p-6">
                <h3 className="text-sm font-medium text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {principle.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
