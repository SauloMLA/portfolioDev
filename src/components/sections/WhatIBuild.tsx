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
    <section id="build" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeader
            label={whatIBuild.label}
            title={whatIBuild.title}
            subtitle={whatIBuild.subtitle}
          />
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {whatIBuild.items.map((item, index) => {
            const Icon = iconMap[item.icon] || Globe;
            return (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <div
                  className={cn(
                    "glass glass-interactive group h-full rounded-2xl p-7 border border-sky-500/20"
                  )}
                >
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-400 shadow-md shadow-sky-500/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-sky-500/20 group-hover:text-white">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
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
