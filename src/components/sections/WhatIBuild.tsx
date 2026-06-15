"use client";

import {
  Brain,
  Cpu,
  Globe,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { useContent } from "@/components/providers/LocaleProvider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Brain,
  Cpu,
};

export function WhatIBuild() {
  const { whatIBuild } = useContent();

  return (
    <section id="build" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeader
            label={whatIBuild.label}
            title={whatIBuild.title}
            subtitle={whatIBuild.subtitle}
          />
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {whatIBuild.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <div
                  className={cn(
                    "card-surface card-surface-interactive group h-full rounded-xl p-6"
                  )}
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-border bg-muted/30 transition-colors duration-300 group-hover:border-[rgba(255,255,255,0.16)]">
                    <Icon className="size-5 text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-[var(--accent-blue)]" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
