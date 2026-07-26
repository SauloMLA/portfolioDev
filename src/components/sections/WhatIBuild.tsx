"use client";

import {
  Brain,
  Cpu,
  Globe,
  Smartphone,
  Layers,
  Sparkles,
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

        {/* Tarjetas Principales de Capacidades */}
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

        {/* Sección Especial: Ecosistema Completo de Tecnologías & Herramientas */}
        {whatIBuild.techCategories && (
          <div className="mt-20">
            <ScrollReveal>
              <div className="mb-10 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-mono font-semibold tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{whatIBuild.toolsBadge || "TOOLS & LANGUAGES"}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {whatIBuild.techTitle || "Stack de Tecnologías & Dominio Técnico"}
                </h3>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whatIBuild.techCategories.map((cat, idx) => (
                <ScrollReveal key={cat.category} delay={0.05 * idx}>
                  <div className="glass rounded-2xl p-6 border border-slate-800/80 hover:border-sky-500/30 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold font-mono text-sky-400 uppercase tracking-wider mb-4 pb-2 border-b border-slate-800">
                        {cat.category}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-slate-800 bg-slate-900/90 px-2.5 py-1 font-mono text-xs text-slate-200 transition-all duration-200 hover:border-sky-400/40 hover:text-white hover:bg-sky-500/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
